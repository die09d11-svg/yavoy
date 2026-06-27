from psycopg import connect

def get_connection():
    return connect(
        host="localhost",
        dbname="pruebadb",
        user="postgres",
        password="1234",
        port=5432
    )