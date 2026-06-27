from fastapi import APIRouter
from db.connection import get_connection

router = APIRouter(prefix="/users", tags=["Users"])

@router.get("/")
def get_users():
    conn = get_connection()
    cur = conn.cursor()

    cur.execute("SELECT 1;")
    data = cur.fetchone()

    cur.close()
    conn.close()

    return {"result": data}
