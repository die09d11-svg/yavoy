from db.connection import get_connection
from services.auth_service import verify_password

def login_user(email, password):
    conn = get_connection()
    cur = conn.cursor()

    cur.execute(
        "SELECT id, password FROM users WHERE email = %s;",
        (email,)
    )

    user = cur.fetchone()

    cur.close()
    conn.close()

    if not user:
        return None

    user_id, hashed_password = user

    if not verify_password(password, hashed_password):
        return None

    return user_id