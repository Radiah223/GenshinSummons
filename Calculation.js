//Connecting primogems from html page to calculation
let primogems = 0;
let plan = [];
let choice = "Character";
let constellation = 0;
let chara_wanted = "";
let weapon_wanted = "";
var pity = 0;
var weaponpity = 0;
var lost = 0;
var weaponlost = 0;
let weap_output = sessionStorage.getItem("weapon_output");
let calc_output = "";
let output = sessionStorage.getItem("output2");
bkg_audio = new Audio("audio/Wish.mp3");
entered = sessionStorage.getItem("entered");
$(document).ready(function(){
  console.log (choice);
  sessionStorage.setItem("dollars",parseInt(0));
  sessionStorage.setItem("weaponpity",parseInt(0));
  sessionStorage.setItem("primogems",parseInt(0));
  sessionStorage.setItem ("pity",parseInt(0));
  sessionStorage.setItem ("lost",parseInt(0));
  sessionStorage.setItem ("weaponlost",parseInt(0));
  sessionStorage.setItem("entered",parseInt(0));
  if (sessionStorage.getItem("output2") == null){
    sessionStorage.setItem("output2","<br>No information has been provided");
  }

document.getElementById("textfield").addEventListener("submit",function (e) {
  output = "";
  weap_output = "";
  e.preventDefault();
  if (isNaN(document.getElementById("textfield"))){
    primogems = 0;
    //sessionStorage.setItem("original_primogems",parseInt(0));
    sessionStorage.setItem("primogems",primogems);
    sessionStorage.setItem ("pity",parseInt(0));
    sessionStorage.setItem("weaponpity",parseInt(0));
    sessionStorage.setItem ("lost",lost);
    sessionStorage.setItem ("weaponlost", weaponlost);
    sessionStorage.setItem("original_primogems",parseInt(0));
  }
    primogems = parseInt(document.getElementById("primo").value);
    sessionStorage.setItem("original_primogems",parseInt(document.getElementById("primo").value));
    sessionStorage.setItem("weaponpity",weaponpity);
    sessionStorage.setItem("primogems",primogems);
    sessionStorage.setItem("pity",pity);
    sessionStorage.setItem ("lost",lost);
    sessionStorage.setItem ("weaponlost",weaponlost);
    sessionStorage.setItem("entered",parseInt(1));
    output = "";
    if (choice == "Character"){
      for (let i = 0; i < 7; i ++){
        output += calculate_dollars(calculate_primos(parseInt(sessionStorage.getItem("original_primogems")),plan,choice,i));
        sessionStorage.setItem("output2",output);
      }
      output += "<br>With Welkin Moon you will need: <br>";
      for (let i = 0; i < 7; i ++){
        output += calculate_dollars(calculate_primos(parseInt(sessionStorage.getItem("original_primogems")),["Welkin Moon"],choice,i));
        sessionStorage.setItem("output2",output);
      }
      output += "<br>With Battle Pass you will need: <br>";
      for (let i = 0; i < 7; i ++){
        output += calculate_dollars(calculate_primos(parseInt(sessionStorage.getItem("original_primogems")),["Battle Pass"],choice,i));
        sessionStorage.setItem("output2",output);
      }
      output += "<br>With both Welkin Moon and Battle Pass you will need: <br>";
      for (let i = 0; i < 7; i ++){
        output += calculate_dollars(calculate_primos(parseInt(sessionStorage.getItem("original_primogems")),["Welkin Moon","Battle Pass"],choice,i));
      sessionStorage.setItem("output2",output);
      }
    }else{
        weap_output = "";
        weap_output += calculate_dollars(calculate_primos(parseInt(sessionStorage.getItem("original_primogems")),plan,"Weapon",1));
        weap_output += calculate_dollars(calculate_primos(parseInt(sessionStorage.getItem("original_primogems")),plan,"Weapon",2));
        weap_output += calculate_dollars(calculate_primos(parseInt(sessionStorage.getItem("original_primogems")),plan,"Weapon",3));
        weap_output += calculate_dollars(calculate_primos(parseInt(sessionStorage.getItem("original_primogems")),plan,"Weapon",4));
        weap_output += calculate_dollars(calculate_primos(parseInt(sessionStorage.getItem("original_primogems")),plan,"Weapon",5));
        sessionStorage.setItem("weapon_output",weap_output);
    }
    console.log (primogems);
});
pity = sessionStorage.getItem("user_pity");
weaponpity = sessionStorage.getItem ("weapon_pity");

sessionStorage.setItem("pity",pity);
sessionStorage.setItem ("weaponpity",weaponpity);

lost = sessionStorage.getItem ("user_lost");
sessionStorage.setItem("lost",lost);
weaponlost = sessionStorage.getItem ("weapon_lost");
sessionStorage.setItem ("weaponlost",weaponlost);

document.getElementById("primo").value = sessionStorage.getItem("user_primogems");
sessionStorage.setItem("primogems",document.getElementById("primo").value);
//sessionStorage.setItem("dollars",calculate_dollars (Math.abs(document.getElementById("primo").value)));
});


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;

  console.log (slideIndex);
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  if (slideIndex == 1 || slideIndex == 3){
    chara_wanted = "Ayaka";
    new Audio("audio/wish_btn.mp3").play();
    choice = "Character";
    sessionStorage.setItem("chara_wanted",chara_wanted);
    sessionStorage.setItem("choice",choice);
      output = "";
        for (let i = 0; i < 7; i ++){
          output += calculate_dollars(calculate_primos(parseInt(sessionStorage.getItem("original_primogems")),plan,choice,i));
          sessionStorage.setItem("output2",output);
        }
        output += "<br>With Welkin Moon you will need: <br>";
        for (let i = 0; i < 7; i ++){
          output += calculate_dollars(calculate_primos(parseInt(sessionStorage.getItem("original_primogems")),["Welkin Moon"],choice,i));
          sessionStorage.setItem("output2",output);
        }
        output += "<br>With Battle Pass you will need: <br>";
        for (let i = 0; i < 7; i ++){
          output += calculate_dollars(calculate_primos(parseInt(sessionStorage.getItem("original_primogems")),["Battle Pass"],choice,i));
          sessionStorage.setItem("output2",output);
        }
        output += "<br>With both Welkin Moon and Battle Pass you will need: <br>";
        for (let i = 0; i < 7; i ++){
          output += calculate_dollars(calculate_primos(parseInt(sessionStorage.getItem("original_primogems")),["Welkin Moon","Battle Pass"],choice,i));
        sessionStorage.setItem("output2",output);
        }
    console.log ("Ayaka Banner");
  }else{
    choice = "Weapon";
    new Audio("audio/wish_btn.mp3").play();
    sessionStorage.setItem("choice",choice);
    sessionStorage.setItem("chara_wanted","NA");
    weap_output = "";
    weap_output += calculate_dollars(calculate_primos(parseInt(sessionStorage.getItem("original_primogems")),plan,"Weapon",1));
    weap_output += calculate_dollars(calculate_primos(parseInt(sessionStorage.getItem("original_primogems")),plan,"Weapon",2));
    weap_output += calculate_dollars(calculate_primos(parseInt(sessionStorage.getItem("original_primogems")),plan,"Weapon",3));
    weap_output += calculate_dollars(calculate_primos(parseInt(sessionStorage.getItem("original_primogems")),plan,"Weapon",4));
    weap_output += calculate_dollars(calculate_primos(parseInt(sessionStorage.getItem("original_primogems")),plan,"Weapon",5));
    sessionStorage.setItem("weapon_output",weap_output);
    console.log ("Weapon");
  }
  slides[slideIndex-1].style.display = "block";
  //modify results string
}

function calculate_primos(primos,plan,choice,constellation){
    const chara_primo = 28800 * (constellation +1);
    const weapon_primo = 38800;
    //Store all possible plans
    var welkin_moon = 0;
    var battle_pass = 0;
    //Store all user info

    var user_cur_primogems = primos;
    const user_plans = plan;
    var total_primos = 0;
    var total_weapon_cost = 0;
    var total_chara_cost = 0;
    calc_output = "";

    //Store all events along with primo values
    const events = new Map([["Maintanence",600],["Story quests (Yae and Shogun)",120],["Hyakunin Ikki",420],["Of a Drink Dreaming",420],["Divine Ingenuity",420],["Three Realms",2100],["Login",480],["Monthly reset",1600], ["Spiral Abyss",600]]);
    var all_event_primos = events.entries;

    //Set up user plan
    for (let i = 0; i < user_plans.length; i++){
        if (user_plans[i] == "Welkin Moon"){
            welkin_moon = 3000;
        }
        if (user_plans[i] == "Battle Pass"){
            battle_pass = 2280;
        }
    }

    //Calculating final primogems needed

    //Calculating total primogems from events
    for( let j = 0; j < all_event_primos.length; j++){
        total_primos += all_event_primos[j];
    }

    if (choice == "Character" || choice == "Both"){
        total_chara_cost = chara_primo - (user_cur_primogems + total_primos + welkin_moon + battle_pass);

        if (total_chara_cost <= 0){
            console.log ("More than enough primogems for character");
            total_chara_cost = 0;
            calc_output += total_chara_cost +" more primogems for C"+constellation;
        }else{
            calc_output += total_chara_cost +" more primogems for C"+constellation;
            console.log ("Needs "+ total_chara_cost + " to pull for C"+constellation+ " character.");
        }
    }
    if (choice == "Both"){
        user_cur_primogems = (primos + welkin_moon + battle_pass) - chara_primo;
        if (user_cur_primogems < 0){
            user_cur_primogems = 0;
        }
    }
    if (choice == "Weapon" || choice == "Both"){
      calc_output = "";
        total_weapon_cost = weapon_primo - (user_cur_primogems + total_primos + welkin_moon + battle_pass);
        if (total_weapon_cost <= 0){
            total_weapon_cost = 0;
            calc_output += total_weapon_cost+ " more primogems";
            console.log ("More than enough primogems for weapon");
        }else{
            total_weapon_cost = constellation*total_weapon_cost;
            calc_output += total_weapon_cost+ " more primogems for Refinement Rank " + constellation+"<br>";
            console.log ("Needs "+ total_weapon_cost + " to pull for weapon.");
        }

    }
    var total = total_weapon_cost + total_chara_cost;
        console.log ("Needs in total " +total + " primogems");
        //sessionStorage.setItem("output2",calc_output);
        return total;
}
function calculate_dollars (cost){
    var dollars = 0;
    if (cost == 0){
      dollars = 0;
    } else if (cost <= 60){
        dollars = 0.99;
    }else if (cost <=  300){
        dollars = 4.99;
    }else if (cost <= 980){
        dollars = 14.99;
    }else if (cost <= 1980){
        dollars = 29.99;
    }else if (cost <= 3280){
        dollars = 49.99;
    }else if (cost <= 6480){
        dollars = 99.99;
    }else{
        cost = Math.ceil (cost/6480);
        dollars = 99.99 * cost;
    }
    var formatter = new Intl.NumberFormat('en-US', {
         style: 'currency',
        currency: 'USD',
    });
    console.log ("Needs to spend " + formatter.format(dollars));
    calc_output += " which is approximately " + formatter.format(dollars)+"<br>";
    sessionStorage.setItem("output2",calc_output);
    return calc_output;;
    //return formatter.format(dollars);
}
