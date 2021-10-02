---
title: PositionOptions.enableHighAccuracy
slug: Web/API/PositionOptions/enableHighAccuracy
translation_of: Web/API/PositionOptions/enableHighAccuracy
---
<div>{{securecontext_header}}{{APIRef("Geolocation API")}}</div>

<p>la propriété <code><strong>PositionOptions.enableHighAccuracy</strong></code> est un {{domxref("Boolean")}} qui indique que l'application souhaite recevoir les meilleurs résultats possibles. Si <code>true</code> si l'appareil est capable de fournir une position plus précise, il le fera. Notez que cela peut entraîner des temps de réponse plus lents ou une augmentation de la consommation d'énergie (avec une puce GPS sur un appareil mobile par exemple). D'un autre côté, si <code>false</code> (la valeur par défaut), le périphérique peut prendre la liberté d'économiser des ressources en répondant plus rapidement et/ou en utilisant moins d'énergie.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><var>positionOptions</var>.enableHighAccuracy = <var>booleanValue</var>
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
      <td>{{SpecName('Geolocation', '#enablehighaccuracy', 'PositionOptions.enableHighAccuracy')}}</td>
      <td>{{Spec2('Geolocation')}}</td>
      <td>Définition initiale</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.PositionOptions.enableHighAccuracy")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/WebAPI/Using_geolocation">Utiliser geolocation</a></li>
 <li>L'interface {{domxref("PositionOptions")}} à laquelle il appartient.</li>
</ul>
