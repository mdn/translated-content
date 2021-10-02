---
title: BatteryManager.chargingTime
slug: Web/API/BatteryManager/chargingTime
translation_of: Web/API/BatteryManager/chargingTime
---
<div>{{obsolete_header}}</div>

<p>{{APIRef("Battery API")}}</p>

<p>Indique le temps, en secondes, qu'il reste jusqu'à que la batterie soit rechargée.</p>

<div class="note">
<p><strong>Note :</strong> Même si le temps retourné devrait être précis à la seconde, les navigateurs arrondissent cette valeur (typiquement à 15 minutes près) afin de limiter l'identification et le suivi des utilisateurs.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var <em>time</em> = battery.chargingTime</pre>

<p><code>time</code> est le temps restant en secondes jusqu'à que <code><em>battery</em></code>, qui est un objet de type {{domxref("BatteryManager")}}, soit rechargée, ou vaut 0 si la batterie est déjà rechargée. Si la batterie est en décharge, la variable vaut <code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Infinity">Infinity</a></code>.</p>

<h2 id="Example">Exemple</h2>

<h3 id="Code_HTML">Code HTML</h3>

<pre class="brush: html">&lt;div id="chargingTime"&gt;(temps de charge inconnu)&lt;/div&gt;
</pre>

<h3 id="Code_JavaScript">Code JavaScript</h3>

<pre class="brush: js">navigator.getBattery().then(function(battery) {

   var time = battery.chargingTime;

   document.querySelector('#chargingTime').textContent = battery.chargingTime;
});
</pre>

<p>{{ EmbedLiveSample('Example', '100%', 30) }}</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("Battery API")}}</td>
   <td>{{Spec2("Battery API")}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.BatteryManager.chargingTime")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("BatteryManager")}}</li>
 <li>{{domxref("Navigator.getBattery")}}</li>
</ul>
