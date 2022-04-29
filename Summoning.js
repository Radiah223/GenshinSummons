
const fivestar_standard = ["diluc","jean","mona","qiqi","keqing"];
const four_stars = ["Amber","Lisa","Kaeya","Yunjin","Bennett","Xingqiu","Barbara","Xiangling",
"Ningguang","Beidou","Chongyun","Kujou Sara","Diona","Thoma","Noelle","Fischl","Xinyan",
"Sucrose","Yanfei","Gorou","Akuoumaru","Eye of Perception","Favonius Codex","Favonius Greatsword",
"Favonius Lance","Favonius Sword","Favonius Warbow","LR","Lithic Blade","Lithic Spear",
"MM","Rainslasher","Sacrificial Bow","Sacrificial Fragments","Sacrificial Sword","Stringless","WF"];
const three_stars =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23'];
const fivestar_weapons =["Amo's Bow","Aquila Favonia","Lost Prayer to the Sacred Winds","Primordial Jade Spear","Skyward Atlas","Skyward Harp","Skyward Pride","Skyward Spine"];
const banner_fivestar_weapons = ["Midsplitter", "Unforged"];
const banner_fourstar_weapons = ["DB","Flute","Rust","SG","W"];
var rolls = 0;
var user_primogems = 0;
var output = "";
$(document).ready(function(){
    console.log ("clicked");
    user_primogems = sessionStorage.getItem("primogems");
    if(isNaN(user_primogems)){
      user_primogems = 0;
    }
    first_pity = parseInt(sessionStorage.getItem("pity"));
    if (isNaN(first_pity)){
      first_pity = 0;
    }
    console.log ("pity gotten: " + first_pity);
    weappity = parseInt(sessionStorage.getItem("weaponpity"));
    if (isNaN(weappity)){
      weappity = 0;
    }
    console.log ("weapon pity gotten: "+weappity);
    Summon (weappity,first_pity,10,sessionStorage.getItem("choice"),sessionStorage.getItem("chara_wanted"),user_primogems);
    sessionStorage.setItem ("user_primogems",user_primogems);
    moreInfo();
});

function Summon(weap_pity,userpity,rolls,choice,chara_wanted,primogems){
  var cur_summon = [];
  const ten_roll_primo = 1600;
  const banner_4stars = ["Razor","Rosaria","Sayu"];
  //random number generator for calculating probabilities
  const min = 1;
  const max = 101;
  let random_number = Math.floor(Math.random() * (max - min + 1) + min);

  //build up user_pity as user is summoning
  if (choice == "Character"){
    primogems -= 1600;
    userpity += 10;
    document.getElementById("simulationpity").innerHTML = "Current Pity: "+ userpity;
    console.log (userpity);
  }else if (choice == "Weapon"){
    primogems -=1600;
    weap_pity += 10;
    document.getElementById("simulationpity").innerHTML = "Current Pity: "+ weap_pity;
    console.log (weap_pity);
  }
  //Calculating probabilties for a 5 star weapon
  if (rolls == 10 && choice == "Weapon"){
    random_weapon = Math.floor (Math.random()*2);
    if (random_weapon == 1){
      //getter a 4 star banner weapon
      let fourstar_weapon = Math.ceil (Math.random()* banner_fourstar_weapons.length-1);
      cur_summon[0] = banner_fourstar_weapons[fourstar_weapon];
      //change summon panel
      document.getElementById("img"+1).style.content = "url('images/summons/banner four weapons/" + cur_summon[0] + ".png')";
    }else{
      //getting a random 4 star
      let fifty_4star = Math.ceil (Math.random ()*four_stars.length-1);
      cur_summon[0] = four_stars[fifty_4star];
      document.getElementById("img"+(1)).style.content = "url('images/summons/other 4 stars/" + cur_summon[0] + ".png')";
    }
    //genrerating rest of summons
    for (var i = 1; i < 10; i++){
      //getting a 5 star in a ten pull
      random_number = Math.floor(Math.random() * (max - min + 1) + min);
      console.log ("no: "+random_number);
      if (random_number >= 1 && random_number<= 16){
        let fourstar_weapon = Math.ceil (Math.random()* banner_fourstar_weapons.length-1);
        console.log("random weapon: "+fourstar_weapon);
        cur_summon[i] = banner_fourstar_weapons[fourstar_weapon];
        document.getElementById("img"+(i+1)).style.content = "url('images/summons/banner four weapons/" + cur_summon[i] + ".png')";
      }else if (random_number == 1 || random_number == 2){
        let fifty_4star = Math.ceil (Math.random ()*four_stars.length-1);
        cur_summon[i] = four_stars[fifty_4star];
        document.getElementById("img"+(i+1)).style.content = "url('images/summons/other 4 stars/" + cur_summon[i] + ".png')";
      }
      if (random_number == 1|| weap_pity >= 70){
          random_weapon = Math.floor(Math.random() * 5);
          //getting a banner 5 star weapon randomly
          if (random_weapon != 4 || sessionStorage.getItem("weaponlost") == 1){
            weapon_banner = Math.floor (Math.random()*2);
            cur_summon[i] = banner_fivestar_weapons[weapon_banner];
            //change summon panel
            document.getElementById("img"+(i+1)).style.content = "url('images/summons/banner five weapons/" +cur_summon[i] + ".png')";
            weap_pity = 0;
            sessionStorage.setItem("weapon_lost",parseInt(0));
          }else{
            let fifty_5star = Math.ceil (Math.random ()*fivestar_weapons.length-1);
            cur_summon [i] = fivestar_weapons[fifty_5star];
            //change summon panel
            document.getElementById("img"+(i+1)).style.content = "url('images/summons/other five weapons/" + cur_summon[i] + ".png')";
            weap_pity = 0;
            sessionStorage.setItem("weapon_lost",parseInt(1));
            console.log ("Lost: " + sessionStorage.getItem ("weapon_lost"));
         }
      }else{
        let random_3star = Math.ceil (Math.random() * three_stars.length-1);
        cur_summon [i] = three_stars[random_3star];
        //change summon panel
        document.getElementById("img"+(i+1)).style.content = "url('images/summons/three stars/" + cur_summon[i] + ".png')";
      }
    }
  }

  //Calculating probabilites for a 5 star character
    //Getting characters in every ten pull
    if (rolls == 10 && choice == "Character"){
      //50 50 with banner 4 stars
      random_chara = Math.floor(Math.random() * 2);
      if (random_chara == 1){
        //getting a 4 star banner character
        let fifty_4star = Math.floor(Math.random ()* 3);
        cur_summon[0] = banner_4stars[fifty_4star];
        //change summon panel
          document.getElementById("img"+(1)).style.content = "url('images/summons/banner four stars/" + cur_summon[0] + ".png')";
      }else{
        //getting a random 4 star character
        let fifty_4star = Math.ceil (Math.random ()*four_stars.length-1);
        cur_summon[0] = four_stars[fifty_4star];
        document.getElementById("img"+(1)).style.content = "url('images/summons/other 4 stars/" + cur_summon[0] + ".png')";
      }
      //genrerating rest of summons
      for (var i = 1; i < 10; i++){
        //getting a 5 star in a ten pull
        random_number = Math.floor(Math.random() * (max - min + 1) + min);
        console.log ("no: "+random_number);
        if (random_number >= 1 && random_number<= 16){
          let fifty_4star = Math.floor(Math.random ()* 3);
          cur_summon[i] = banner_4stars[fifty_4star];
          document.getElementById("img"+(i+1)).style.content = "url('images/summons/banner four stars/" + cur_summon[i] + ".png')";
        }else if (random_number == 1 || random_number == 2){
          let fifty_4star = Math.ceil (Math.random ()*four_stars.length-1);
          cur_summon[i] = four_stars[fifty_4star];
          document.getElementById("img"+(i+1)).style.content = "url('images/summons/other 4 stars/" + cur_summon[i] + ".png')";
        }
        if (random_number == 1|| userpity >= 90){
            random_chara = Math.floor(Math.random() * 2);
            console.log ("random_chara "+ random_chara);
            if (random_chara == 1 || sessionStorage.getItem("lost") == 1){
              console.log ("condition satisfied")
              cur_summon [i] = chara_wanted;
              //change summon panel
              document.getElementById("img"+(i+1)).style.content = "url('images/summons/banner five stars/" + chara_wanted + ".png')";
              sessionStorage.setItem("lost",parseInt(0));
              sessionStorage.setItem("user_lost",parseInt(0));
              console.log ("Lost: " + sessionStorage.getItem ("lost"));
              userpity = 0;
              five_prob = 1;
            }else{
              let fifty_5star = Math.ceil (Math.random ()*fivestar_standard.length-1);
              cur_summon [i] = fivestar_standard[fifty_5star];
              //change summon panel
              document.getElementById("img"+(i+1)).style.content = "url('images/summons/other 5 stars/" + cur_summon[i] + ".png')";
              five_prob = 1;
              userpity = 0;
              sessionStorage.setItem("lost",parseInt(1));
              sessionStorage.setItem("user_lost",parseInt(1));
              console.log ("Lost: " + sessionStorage.getItem ("lost"));
           }
        }else{
          let random_3star = Math.ceil (Math.random() * three_stars.length-1);
          cur_summon [i] = three_stars[random_3star];
          //change summon panel
          document.getElementById("img"+(i+1)).style.content = "url('images/summons/three stars/" + cur_summon[i] + ".png')";
        }
      }
    }

  sessionStorage.setItem ("user_pity",parseInt(userpity));
  sessionStorage.setItem ("weapon_pity",parseInt(weap_pity));
  user_primogems = primogems;
  sessionStorage.setItem("primogems",primogems);
  console.log (cur_summon);
  console.log("Character pity "+ userpity);
  console.log ("Weapon pity "+ weap_pity);




  console.log ("You have " + primogems + " primogems left");
  if (primogems < 0){
    var formatter = new Intl.NumberFormat('en-US', {
         style: 'currency',
        currency: 'USD',
    });
    output += "You have spent "+ Math.abs(primogems)+" more primogems than you already have. This means that you have spent approximately "+formatter.format(Math.abs(primogems)/160*0.99);
  }else{
    output += "You have "+ primogems + " primogems remaining from your account";
  }
}

function moreInfo(){
  document.getElementById("simulationinfo").innerHTML = output;
  document.getElementById("gameinfo").innerHTML = "";
  if (sessionStorage.getItem("choice") == "Character"){
     var addin = " Based on your original primogems, in order to get "+sessionStorage.getItem ("chara_wanted")+ " you will need: <br>";
     console.log (sessionStorage.getItem("output2"));
     document.getElementById("gameinfo").innerHTML = addin + sessionStorage.getItem("output2");
  }else{
    var addin = "Based on your original primogems, in order to get the weapon you want you will need: <br>";
    document.getElementById("gameinfo").innerHTML = addin + sessionStorage.getItem("weapon_output");
  }

}
