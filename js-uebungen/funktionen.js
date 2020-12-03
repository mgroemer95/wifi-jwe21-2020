let userNameFromDataBase = 'Roland';

function sayMyName(name) {
    if(checkMyInput(name) == true) {
    console.log('Your name is ' + name);
   }
}

sayMyName('Markus');
sayMyName('Manuel');
sayMyName(userNameFromDataBase);

function checkMyInput(input) {
    if( typeof input == 'string'  ) {
       // console.log ('yes it is a string');
       return true;
    } else {
        //console.log('Your input ist not a Name (or a String)');
        return false;
    }

}

let ergebisMeinerFunnktion = checkMyInput('Markus')

