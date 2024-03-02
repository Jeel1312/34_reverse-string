function reverse() {

    let a = document.getElementById('a').value;

    let b = a.split("").reverse("").join("");

    document.getElementById("revStr").innerHTML = "Reversed String : " + b;
}


// or

// function reverse() {
//     let a = document.getElementById('a').value;

//     let b = "";

//     for ( i = a.length-1 ; i >= 0; i--) {
//         b += a[i];
//     }

//     document.getElementById("revStr").innerHTML ="Reversed String : " + b;
// }
