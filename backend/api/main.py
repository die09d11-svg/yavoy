from fastapi import FastAPI
from api.users import router as users_router
from api.auth import router as auth_router
from api.rides import router as rides_router

app = FastAPI(title="PueblaRide API")

app.include_router(users_router)
app.include_router(auth_router)
app.include_router(rides_router)
@app.get("/")
def root():
    return {"message": "PueblaRide API activa"}