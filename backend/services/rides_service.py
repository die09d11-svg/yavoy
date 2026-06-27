from db.connection import get_connection
from models.rides import create_ride


def create_new_ride(user_id, origin, destination):
    conn = get_connection()
    cur = conn.cursor()

    ride_id = create_ride(cur, user_id, origin, destination)

    conn.commit()
    cur.close()
    conn.close()

    return ride_id


def get_user_rides(user_id):
    conn = get_connection()
    cur = conn.cursor()

    cur.execute(
        """
        SELECT id, origin, destination, status, created_at
        FROM rides
        WHERE user_id = %s
        ORDER BY created_at DESC;
        """,
        (user_id,)
    )

    data = cur.fetchall()

    cur.close()
    conn.close()

    return data