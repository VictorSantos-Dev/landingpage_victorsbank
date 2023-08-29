// import React from 'react'

const Saldo = () => {
  return (
    <div className="saldo">
        <div className="saldo-disponivel">
            <h2>Saldo Disponível</h2>
            <p className="num">R$ 1.000,00</p>
        </div>
        <div className="agendado">
            <h2>Agendado até 31/set</h2>
            <p className="num">R$ 0,00</p>
        </div>
    </div>
  )
}

export default Saldo