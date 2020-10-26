// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

//creo ciclo
for (var i=1; i<=100; i++){
   
    //se multiplo di 3 e 5
    if(i % 3 == 0 && i % 5 == 0){
        document.write("<h4> FizzBuzz </h4>");

    //se multiplo di 5
    } else if (i % 5 ==0){
        document.write("<h4> Buzz </h4>");

    //se multiplo di 3
    } else if (i % 3 == 0){
        document.write("<h4> Fizz </h4>");
    //numeri normali
    } else{ 
    document.write("<h4>" + i + "</h4>");
}
}
