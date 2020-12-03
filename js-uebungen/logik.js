var ganzZahl;
//console.log(ganzZahl);

ganzZahl = 5;
//console.log(ganzZahl)

ganzZahl = 5 + 4;
//console.log(ganzZahl);

ganzZahl = ganzZahl +1;
//console.log(ganzZahl);

var aufsteiendeZahl = 1;
//console.log (aufsteiendeZahl);

aufsteiendeZahl++;
//console.log (aufsteiendeZahl);

var zahlAlsText = "3e";
//console.log(zahlAlsText);
//console.log(typeof zahlAlsText)

zahlAlsText = parseInt(zahlAlsText)
//console.log(zahlAlsText * 3);
//console.log(typeof zahlAlsText)

var number1 = 2;
var number2 = 7;

//console.log (number1 * number2);

var spruch = 'Hallo,';
//console.log(spruch);

spruch = spruch + 'Welt!';
//console.log(spruch);

var inputFeld1 = '<input type="text" value="test" />';
var inputFeld2 = "<input type=\"text\" value=\"test\" >";
//console.log(inputFeld1, inputFeld2);

//document.write('hallo')
//document.write('<br>ich bin eine neue Code-Zeile');


var farben = [ 'rot', 'gelb', 'grün'];

//console.log(farben[2]);

//console.log(farben.join());

var katalog = [
    'Inhaltsverzeichnis',
    [   'Absatz1',
        'Absatz2',
    ],

    'Kapitel 2',
    'Kabitel 3'

];

//console.log (katalog);
katalog.pop(); //letzte Stelle wird gelöscht
katalog.push('Kapitel 5'); // an die letzte Stelle wird der neue Eintrag hinzugefügt
//console.log (katalog);


//console.log( katalog[1][0] );

var neuesArray = [];
//console.log(neuesArray[0]);

katalog[0] = katalog[0] + ' NEU';
//console.log( katalog);

var ich = {
    
    vorname: 'Markus',
    Nachname: 'Groemer',
    Groesse: '183cm',
    Alter: 33,

    Kopf: {
        augen: 'blau',
        haare: 'braun'
    }
};

console.log ('Hallo, ich bin ' + ich.vorname + '!');

const USER_NAME = 'Markus';

console.log(USER_NAME);

let example1 = 'hui!';

{
    let example2 = 'jump';
}

console.log(example1);