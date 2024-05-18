<h1>Genshin Summoning Simulator</h1>
Genshin Summoning Simulator that tracks the amount of wishes the user performs to summon a character or weapon in Genshin Impact. Based on the number of wishes, the simulator calculates the amount of primogems the user has/needs to spend to summon a character and how many dollars it corresponds to. 
<h2>Interface</h2>
<ul> 
  <li>Overall design: HTML/CSS </li>
  <li>Vanilla JS and jQuery utilized for calculations, animation and event handling</li>
</ul>
<h2>Calculating Primogems</h2>
Once user inputs their current primogem value, several parameters were calculated via Vanilla Javascript: 
<ul>
  <li>The amount of primogems the user has left. If the user no longer has enough primogems, the value becomes negative on the mainpage</li>
  <li>The amounnt of money (in dollars) the user might have to spend to get the desired character</li>
  <li>The amount of pity and its corresponding probability. Whenever the user summons 10 wishes, the probability of getting a 5 star character/weapon increases by 10% and the pity increases by 10.</li>
</ul>

