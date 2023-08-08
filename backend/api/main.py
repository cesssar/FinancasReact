from fastapi import FastAPI
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
import json

from mock import *

app = FastAPI()

@app.get("/", tags=["Home"])
def welcome():
    return {"message": "Welcome"}

@app.get("/saldos/contacorrente", tags=["Saldos"])
def saldo_conta_corrente():
    return {"saldo" : saldos["contacorrente"]}

@app.get("/saldos/faturascredito", tags=["Saldos"])
def faturas_credito():
    return {"saldo" : saldos["faturascredito"]}

@app.get("/saldos/limitecredito", tags=["Saldos"])
def limite_credito():
    return {"saldo" : saldos["limitecredito"]}

@app.get("/saldos/limitealimentacao", tags=["Saldos"])
def limite_alimentacao():
    return {"saldo" : saldos["limitealimentacao"]}

@app.delete("/contas/debitaconta/{valor}", tags=["Contas"])
def debita_conta(valor: float):
    if saldos["contacorrente"] > valor:
        saldos["contacorrente"] -= valor
        return {"saldo": saldos["contacorrente"]}
    else:
        return {"message": "saldo insuficiente"}

@app.put("/contas/lancacredito/{valor}", tags=["Contas"])
def lanca_credito(valor: float):
    if saldos["limitecredito"] > valor:
        saldos["faturascredito"] += valor
        saldos["limitecredito"] -= valor
        return {"saldo": saldos["faturascredito"]}
    else:
        return {"message": "limite de crédito insuficiente"}

@app.delete("/contas/debitaalimentacao/{valor}", tags=["Contas"])
def debita_conta(valor: float):
    if saldos["limitealimentacao"] > valor:
        saldos["limitealimentacao"] -= valor
        return {"saldo": saldos["limitealimentacao"]}
    else:
        return {"message": "saldo insuficiente"}

@app.put("/contas/pagafatura/{valor}", tags=["Contas"])
def lanca_credito(valor: float):
    saldos["limitecredito"] += valor
    return {"saldo": saldos["limitecredito"]}