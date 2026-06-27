def create_ride(cur, user_id, origin, destination):
    cur.execute(
        """
        INSERT INTO rides (user_id, origin, destination)
        VALUES (%s, %s, %s)
        RETURNING id;
        """,
        (user_id, origin, destination)
    )
    return cur.fetchone()[0]