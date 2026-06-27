from fastapi import APIRouter, Depends
from services.rides_service import create_new_ride, get_user_rides
from services.auth_dependency import get_current_user

router = APIRouter(prefix="/rides", tags=["Rides"])


@router.post("/")
def create_ride(
    origin: str,
    destination: str,
    user_id: int = Depends(get_current_user)
):
    ride_id = create_new_ride(user_id, origin, destination)
    return {"ride_id": ride_id}


@router.get("/")
def list_rides(user_id: int = Depends(get_current_user)):
    rides = get_user_rides(user_id)
    return {"user_id": user_id, "rides": rides}