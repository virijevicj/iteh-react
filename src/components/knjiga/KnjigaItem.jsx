import React, { useContext } from "react";
import { ImPlus, ImMinus } from "react-icons/im";
import { KnjigaContext } from '../../store/knjigaContext';

const KnjigaItem = ({knjiga})=> {
    const desing = {margin: 10, borderStyle: "dashed" };

    const knjigaCtx=useContext(KnjigaContext);

    const addToCart = () => {
        const k={
            id:knjiga.id,
            naslov:knjiga.naslov,
            opis:knjiga.opis,
            slikaUrl:knjiga.slikaUrl,
            brojPonavljanja:1
        }
        knjigaCtx.dodajKnjigu(k);
    };

    const removeFromCart = () => {
        knjigaCtx.ukloniKnjigu(knjiga.id);
    };
    
    
    
    return(
        <div className="card" style={desing}>
            <img style={{marginTop:'20px'}} className="card-img-top" src={knjiga.slikaUrl} alt="Ivo Andric slika" width={200}/>
            <div className="card-body">
                <h3 className="card-title">{knjiga.naslov}</h3>
                <p className="card-text"> {knjiga.opis}</p>
                <button className="btn" onClick={addToCart}><ImPlus/></button>
                <button className="btn" onClick={removeFromCart}><ImMinus/></button>
            </div>
        </div>
    )

}

export default KnjigaItem;