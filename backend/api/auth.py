from fastapi import APIRouter, HTTPException
from services.users_service import login_user
from services.jwt_service import create_access_token

router = APIRouter(prefix="/auth", tags=["Auth"])

@router.post("/login")
def login(email: str, password: str):
    user_id = login_user(email, password)

    if not user_id:
        raise HTTPException(status_code=401, detail="Credenciales inválidas")

    token = create_access_token({"user_id": user_id})

    return {
        "access_token": token,
        "token_type": "bearer"
    }