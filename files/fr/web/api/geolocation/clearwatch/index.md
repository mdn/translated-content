---
title: Geolocation.clearWatch()
slug: Web/API/Geolocation/clearWatch
tags:
  - API
  - Besoin d'exemple
  - Géolocalisation
  - Géolocalisation API
  - Méthode
  - Reference
translation_of: Web/API/Geolocation/clearWatch
---
<p>{{ APIref("Geolocation API") }}</p>

<p>La méthode <strong><code>Geolocation.clearWatch()</code></strong> est utilisée pour libérer les ressources de localisation/erreur créées antérieurement en utilisant {{domxref("Geolocation.watchPosition()")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">navigator.geolocation.clearWatch(<em>id</em>);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><em>id</em></dt>
 <dd>Le nombre ID est donné par la méthode qui permet la localisation : {{domxref("Geolocation.watchPosition()")}} ; ressource que vous désirez supprimer.</dd>
</dl>

<h2 id="Exemple">Exemple</h2>

<pre class="brush: js">var id, target, option;

function success(pos) {
  var crd = pos.coords;

  if (target.latitude === crd.latitude &amp;&amp; target.longitude === crd.longitude) {
    console.log('Congratulation, you reach the target');
    navigator.geolocation.clearWatch(id);
  }
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

target = {
  latitude : 0,
  longitude: 0,
}

options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0
};

id = navigator.geolocation.watchPosition(success, error, options);
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
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

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Geolocation.clearWatch")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/Using_geolocation">Utiliser geolocation</a></li>
 <li>{{domxref("Geolocation")}}</li>
 <li>{{domxref("Geolocation.watchPosition()")}}</li>
 <li>{{domxref("Geolocation.getCurrentPosition()")}}</li>
</ul>
