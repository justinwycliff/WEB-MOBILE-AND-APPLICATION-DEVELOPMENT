//Write a function that can takes in a persons name and greets that person in your mother tongue

function greet(criteria){
    let name = "Kaizzi El";
    let name_2 = "Kyaruhanga James";
    let name_3 = "Olof marech";
    
    if (criteria === name){
        console.log("Okobachi Muna");
    }
    else if (criteria === name_2){
        console.log("osiibiryoo tyaa");
    }
    else if (criteria === name_3){
        console.log("Afoyooo");
    }
    else{
        console.log("I cant speak your language");
    }
}
greet("Kaizzi Elijah");
greet("Kyaruhanga James");
greet ("Olof marech");
