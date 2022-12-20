document.querySelectorAll("a").forEach((a)=>{
    // Jika di klik akan menjalankan fungsi computerChoice()
    a.addEventListener("click", (element)=>{
        computerChoice(element);
    })
})

function computerChoice(element){
    // Pilihan user
    let pilihanUser = element.target.innerText;

    // Menangkanp elemen pilihan komputer
    let pilihanKomputer = document.querySelector("#result");

    // Membuat pilihan komputer dengaa array
    let choices = ["Rock", "Paper", "Scissors"];

    // Membuat pilihan komputer secara random
    pilihanKomputer.innerHTML = choices[Math.round (Math.random()*2)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    // Jika pilihan user == pilihan komputer (Draw)
    if(pilihanUser == pilihanKomputer){
        // alert("Draw");
        setTimeout(()=>alert("Draw"),400)
    }

    // Jika pilihan komputer menang
    if(pilihanKomputer == "Paper" && pilihanUser == "Rock"){
        setTimeout(()=>alert("Computer Win"),300);
    }else if(pilihanKomputer == "Rock" && pilihanUser == "Scissors"){
        setTimeout(()=>alert("Computer Winn"),300)
    }else if(pilihanKomputer == "Scissors" && pilihanUser == "Paper"){
        setTimeout(()=>alert("Computer Winnn"),300)

    // Jika pilihan user menang
    }if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        setTimeout(()=>alert("User Win"),300);
    }else if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        setTimeout(()=>alert("User Winn"),300)
    }else if(pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        setTimeout(()=>alert("User Winnn"),300)
    }
}