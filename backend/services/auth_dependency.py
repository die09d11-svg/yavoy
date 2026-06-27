from fastapi import Header, HTTPException
from services.jwt_service import decode_token

def get_current_user(authorization: str = Header(None)):
    if not authorization:
        raise HTTPException(status_code=401, detail="Token requerido")

    try:
        scheme, token = authorization.split()
        if scheme.lower() != "bearer":
            raise HTTPException(status_code=401, detail="Formato inválido")
    except:
        raise HTTPException(status_code=401, detail="Token inválido")

    user_id = decode_token(token)

    if not user_id:
        raise HTTPException(status_code=401, detail="Token inválido o expirado")

    return user_id