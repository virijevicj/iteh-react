import { Route, Routes } from 'react-router';
import './App.css';
import KnjigaItemList from './components/knjiga/KnjigaItemList';
import KorpaList from './components/korpa/KorpaList';
import NavBar from './components/navbar/NavBar';

const BOOKS = [
  {
    id:1,
    naslov:"Gospodjica",
    opis:"„Gospođica“ je roman srpskog književnika Ive Andrića. Napisan je u periodu od decembra 1943. do oktobra 1944. u Beogradu za vreme Drugog svetskog rata. „Gospođica” spada u ona Andrićeva ostvarenja koja su ostala u senci njegovih poznatijih dela.",
    slikaUrl:'https://www.delfi.rs/_img/artikli/2016/02/gospodjica_vv.jpg',
    brojPonavljanja:0
  },
  {
    id:2,
    naslov:"Ex ponto",
    opis:"Ex Ponto je knjiga stihova u lirskoj prozi koju je napisao Ivo Andrić 1918. godine. Naziv ovog dela inspirisan je nazivom zbirke pesama „Epistuale ex Ponto“ latinskog pesnika Ovidija, u kojima on peva svoje patne i utiske iz prognanstva u Pontu na obali Crnog mora gde je proteran od strane Oktavijana Avgusta.",
    slikaUrl:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1386017673l/13606927.jpg',
    brojPonavljanja:0
  },
  {
    id:3,
    naslov:"Most na Zepi",
    opis: "Most na Žepi je pripovijetka Ive Andrića. Napisana je u trećem licu. Andrić je objavio 1928. godine pošto je iz Pariza premješten na mjesto vicekonzula Kraljevine SHS u Madridu.",
    slikaUrl:'data:image/jpeg;base64,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',
    brojPonavljanja:0
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
