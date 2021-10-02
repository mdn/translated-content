---
title: PositionOptions.maximumAge
slug: Web/API/PositionOptions/maximumAge
translation_of: Web/API/PositionOptions/maximumAge
---
<div>{{securecontext_header}}{{APIRef("Geolocation API")}}</div>

<p>La propriété <code><strong>PositionOptions.maximumAge</strong></code> est de type <code>long</code> positif indiquant l'âge maximal en millisecondes d'une position en cache possible qu'il est acceptable de renvoyer. Si la valeur est <code>0</code>, cela signifie que le périphérique ne peut pas utiliser une position mise en cache et doit tenter de récupérer la position actuelle réelle. Si la valeur est <code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Infinity">Infinity</a></code> l'appareil doit renvoyer une position mise en cache indépendamment de son âge.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><var>positionOptions</var>.maximumAge = <var>timeLength</var>
</pre>

<h2 id="Specifications">Spécifications</h2>

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
      <td>{{SpecName('Geolocation', '#maximumage', 'PositionOptions.maximumAge')}}</td>
      <td>{{Spec2('Geolocation')}}</td>
      <td>Définition initiale.</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.PositionOptions.maximumAge")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/WebAPI/Using_geolocation">Utiliser geolocation</a></li>
  <li>L'interface {{domxref("PositionOptions")}} à laquelle il appartient.</li>
</ul>
