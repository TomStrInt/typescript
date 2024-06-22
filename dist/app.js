"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function welcomePerson(person) {
    console.log(`Hey ${person.firstName} ${person.lastName} obecny?: ${person.present}`);
    return `Witaj ${person.firstName} ${person.lastName} ${person.present}`;
}
function wyswietlanie(wyswietl) {
    console.log("funkcja łączy rózne dane typu string w jeden ciąg znaków");
    return ` ${wyswietl.naglowek}\n ${wyswietl.akapit} \n Jan ${wyswietl.podpis} \n\n `;
}
const jan = {
    firstName: "Jan",
    lastName: "Kowalski",
    present: true
};
const tekst = {
    naglowek: "Szanowni Panstwo",
    akapit: "Pozdrawiam",
    podpis: jan.lastName
};
welcomePerson(jan);
console.log(wyswietlanie(tekst));
//string 
let info = "Ten program wyświetla różne typy danych oraz operacje na nich";
console.log(info);
//tablica
let tablica = [1, 7, 6, 8, 9, 5, 0, 3, 2, 1, 5];
//tuple
let czas;
czas = [20, "July", 2020];
console.log(czas[0], czas[1], czas[2]);
function dateToStringRev(dane) {
    console.log("Ta funkcja odwraca kolejność w dacie oraz konwertuje typ liczbowy do typu string");
    return (`Dzis jest: ${dane[2]} ${dane[1]} ${dane[0]}`);
}
console.log(dateToStringRev(czas));
