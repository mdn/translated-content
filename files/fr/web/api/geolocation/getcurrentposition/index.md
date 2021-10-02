---
title: Geolocation.getCurrentPosition()
slug: Web/API/Geolocation/getCurrentPosition
tags:
  - API
  - Geolocation
  - Méthode
  - Reference
translation_of: Web/API/Geolocation/getCurrentPosition
---
<div>{{securecontext_header}}{{APIRef("Geolocation API")}}</div>

<p>La méthode <strong><code>Geolocation.getCurrentPosition()</code></strong> fournit la position actuelle de l'appareil.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">navigator.geolocation.getCurrentPosition(<em>success[</em>, <em>error[</em>, <em>[options]]</em>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>success</code></dt>
 <dd>Une fonction de rappel qui prend un objet {{domxref("Position")}} comme argument.</dd>
 <dt><code>error</code> {{optional_inline}}</dt>
 <dd>Une fonction de rappel qui prend un objet {{domxref("PositionError")}} comme argument.</dd>
 <dt><code>options</code> {{optional_inline}}</dt>
 <dd>Un objet {{domxref("PositionOptions")}} optionnel. Les options décrites par cet objet sont :
 <ul>
  <li><code>maximumAge</code> : un entier qui exprime une durée en millisecondes ou l'infini pour indiquer la durée maximale pendant laquelle mettre en cache la position.</li>
  <li><code>timeout</code> : un entier qui exprime la durée, en millisecondes, avant que la fonction de rappel <code>error</code> soit appelé. Si cette propriété vaut <code>0</code>, la fonction d'erreur ne sera jamais appelée.</li>
  <li><code>enableHighAccuracy</code> : un booléen qui indique si une précision élevée est requise.</li>
 </ul>
 </dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Votre position actuelle est :');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude : ${crd.longitude}`);
  console.log(`La précision est de ${crd.accuracy} mètres.`);
}

function error(err) {
  console.warn(`ERREUR (${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Geolocation')}}</td>
   <td>{{Spec2('Geolocation')}}</td>
   <td>Spécification initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Geolocation.getCurrentPosition")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/en-US/docs/WebAPI/Using_geolocation">Utiliser la géolocalisation</a></li>
 <li>{{domxref("Navigator.geolocation")}}</li>
</ul>
