import React,{useState} from "react"


export const KnjigaContext=React.createContext({

    knjige:[],
    dodajKnjigu:()=>{},
    ukloniKnjigu:()=>{},
    ukupanBrojKnjiga:0

})



export const KnjigaProvider=(props)=>{
    const [knjige,setKnjige]=useState([]);
const [ukupanBrojKnjiga,setUkupanBrojKnjiga]=useState(0);


const dodajKnjigu=(knjiga)=>{
    const nadjenaKnjiga=knjige.findIndex(k=>k.id===knjiga.id);
    if(nadjenaKnjiga!==-1){
        const k=knjige[nadjenaKnjiga];
        k.brojPonavljanja+=knjiga.brojPonavljanja;
        knjige[nadjenaKnjiga]=k;
        setKnjige(knjige);
    }else{
        setKnjige(prevKnjige=>{
            return [...prevKnjige,knjiga];
        });
    }
    
    setUkupanBrojKnjiga(prevValue=>prevValue+1);
}

const ukloniKnjigu=(id)=>{
    const nadjena=knjige.findIndex(k=>k.id===id);
    console.log(nadjena);
    if(nadjena==-1){
        return;
    }
    const knjiga=knjige[nadjena];
    if(knjiga.brojPonavljanja===1){
    const filterKnjige=knjige.filter(k=>k.id!==id);
    setKnjige(filterKnjige);
    }else{
        const prevKnjige=[...knjige];
        knjiga.brojPonavljanja-=1;
        prevKnjige[nadjena]=knjiga;
        setKnjige(prevKnjige);

    }
    setUkupanBrojKnjiga(prevValue=>prevValue-1);
}

const knjigaValue={
    knjige:knjige,
    dodajKnjigu:dodajKnjigu,
    ukloniKnjigu:ukloniKnjigu,
    ukupanBrojKnjiga:ukupanBrojKnjiga

}
    return <KnjigaContext.Provider value={knjigaValue}>
        {props.children}
    </KnjigaContext.Provider>
}


