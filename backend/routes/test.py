from db.connection import get_connection

def test_route():
    conn = get_connection()
    cur = conn.cursor()

    cur.execute("SELECT 1;")
    result = cur.fetchone()

    cur.close()
    conn.close()

    return result