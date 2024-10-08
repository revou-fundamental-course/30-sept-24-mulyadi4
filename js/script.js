let output1F = true;

function konversi() {
   
    var input = parseFloat(document.getElementById("input").value);
    if (isNaN(input)) {
        alert("Harap isi kolom dengan angka");
        return; 
    }

    
    if (output1F) {
    var output1 = (input*(9/5))+32+"°F";
    var output2 = "("+input+"x9/5)+32="+output1+"°F";
    }
    else{
        var output1 = (5/9)*(input-32)+"°C";
        var output2 = "5/9x("+input+"-32)="+output1+"°C"; 
    }

    document.getElementById("output1").value = output1;
    document.getElementById("output2").value = output2;
}
  
function reset() {
    document.getElementById("output1").value = "";
    document.getElementById("output2").value = "";
    document.getElementById("input").value ="";

  }
  
function reverse() {
    output1F = !output1F;
    document.getElementById("output1").value = "";
    document.getElementById("output2").value = "";
    document.getElementById("input").value ="";

    if (output1F) {
    document.getElementById("operationTitle").innerText= "Konversi Celcius ke Fahrenheit";
    document.getElementById("labelinput").innerText= "Celcius(°C):";
    document.getElementById("labeloutpu1").innerText= "Fahrenheit(°F):";
    document.getElementById("operation").innerText= "Masukan suhu derajat Celcius(°C) ke kotak dibawah, lalu klik tombol Konversi untuk mendapakan hasil konversi dalam bentuk Fahrenheit(°F)";
    document.getElementById("Reverse").innerText= "Fahrenheit(°F) ke Celcius(°C)";
    document.getElementById("process").innerHTML = '<header><h2>Cara Konversi Fahrenheit ke Celcius </h2><hr /></header>  <p>Suhu <span class="suhu-style">S</span> dalam derajat Fahrenheit (°F) sama dengan suhu <span class="suhu-style">S</span> dalam derajat Celcius (°C) kali 9/5 ditambah 32.</p> <div class="rumus">  <span class="suhu-style">S</span><sub>(°F)</sub> = (<span class="suhu-style">S</span><sub>(°C)</sub> x 9/5) + 32 </div> <p>atau</p> <div class="rumus">  <span class="suhu-style">S</span><sub>(°F)</sub> = (<span class="suhu-style">S</span><sub>(°C)</sub>x 1.8) + 32 </div>';
    
    }

else{
    document.getElementById("operationTitle").innerText= "Konversi Fahrenheit ke Celcius ";
    document.getElementById("labelinput").innerText= "Fahrenheit(°F):";
    document.getElementById("labeloutpu1").innerText= "Celcius(°C):";
    document.getElementById("operation").innerText= "Masukan suhu derajat Fahrenheit(°F) ke kotak dibawah, lalu klik tombol Konversi untuk mendapakan hasil konversi dalam bentuk Celcius(°C)";
    document.getElementById("Reverse").innerText= "Celcius(°C) ke Fahrenheit(°F)";
    document.getElementById("process").innerHTML = '<header><h2 >Cara Konversi Celcius ke Fahrenheit </h2><hr /></header>  <p>Suhu <span class="suhu-style">S</span> dalam derajat Celcius (°C) sama dengan suhu <span class="suhu-style">S</span> dalam derajat Fahrenheit(°F) di kurang 32 lalu di kali 5/9.</p> <div class="rumus">  <span class="suhu-style">S</span><sub>(°C)</sub> = 5/9 x (<span class="suhu-style">S</span><sub>(°F)</sub> - 32)</div> <p>atau</p> <div class="rumus">  <span class="suhu-style">S</span><sub>(°C)</sub> =0,55 x (<span class="suhu-style">S</span><sub>(°F)</sub>-32) </div>';
    

  
   
}


}
