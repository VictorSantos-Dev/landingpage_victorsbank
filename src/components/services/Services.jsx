// import React from 'react'
import { IoIosPaper } from "react-icons/io";
import { IoIosCard } from "react-icons/io";
import { HiMiniArrowsRightLeft } from "react-icons/hi2";
import { MdPix } from "react-icons/md";
import { FaHandHoldingUsd } from "react-icons/fa";
import { BsFillUmbrellaFill } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaCar } from "react-icons/fa";

const Services = () => {
  return (
    <div className="services">
        <div className="itens1">
            <div className="extra">
                <IoIosPaper className="item1"/>
                <h3 className="extrato-esc">Extrato</h3>
            </div>
            <div className="pagamento">
                <IoIosCard className="item1"/>
                <h3>Pagamento</h3>
            </div>
            <div className="transferencia">
                <HiMiniArrowsRightLeft className="item1"/>
                <h3 className="trans">Transferência</h3>
            </div>
            <div className="pix">
                <MdPix className="item1"/>
                <h3 className="pix-esc">Pix</h3>
            </div>
            <div className="emprestimo">
                <FaHandHoldingUsd className="item1"/>
                <h3>Empréstimo</h3>
            </div>
            <div className="seguro">
                <BsFillUmbrellaFill className="item1"/>
                <h3 className="seguro-esc">Seguro</h3>
            </div>
            <div className="investimento">
                <BsGraphUpArrow className="item1"/>
                <h3>Investimento</h3>
            </div>
            <div className="carro">
                <FaCar className="item1"/>
                <h3 className="cons">Consórcio</h3>
            </div>
        </div>
        
    </div>
  )
}

export default Services