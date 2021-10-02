---
title: GeolocationPositionError
slug: Web/API/GeolocationPositionError
translation_of: Web/API/GeolocationPositionError
---
<div>{{securecontext_header}}{{APIRef("Geolocation API")}}</div>

<p>L'interface <strong><code>GeolocationPositionError</code></strong> représente la raison de l'erreur apparue lorsque l'on utilise la géolocalisation de l'appareil.</p>

<h2 id="Propriétés">Propriétés</h2>

<p><em>L'interface <code>GeolocationPositionError</code> n'hérite d'aucune propriété.</em></p>

<dl>
 <dt>{{domxref("GeolocationPositionError.code")}} {{readonlyInline}} {{securecontext_inline}}</dt>
 <dd>Retourne un <code>unsigned short</code> représentant un code d'erreur. Les valeurs possibles sont:
 <table class="standard-table">
  <tbody>
   <tr>
    <th scope="col">Valeur</th>
    <th scope="col">Constante associée</th>
    <th scope="col">Description</th>
   </tr>
   <tr>
    <td><code>1</code></td>
    <td><code>PERMISSION_DENIED</code></td>
    <td>L’acquisition de la position échoue car la page n'a pas l'autorisation de le faire.</td>
   </tr>
   <tr>
    <td><code>2</code></td>
    <td><code>POSITION_UNAVAILABLE</code></td>
    <td>L’acquisition de la localisation échoue car au moins une source donnant la position a retourné une erreur interne.</td>
   </tr>
   <tr>
    <td><code>3</code></td>
    <td><code>TIMEOUT</code></td>
    <td>Le temps alloué pour obtenir la position défini par {{domxref("PositionOptions.timeout")}} est écoulé avant que l'information soit obtenu.</td>
   </tr>
  </tbody>
 </table>
 </dd>
 <dt>{{domxref("GeolocationPositionError.message")}} {{readonlyInline}} {{securecontext_inline}}</dt>
 <dd>Retourne une {{domxref("DOMString")}} compréhensible par un humain décrivant les détails de l'erreur. Les spécifications indiquent que cela sert au débogage et ne doit pas être directement affiché à l'utilisateur.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<p><em><em>L'interface </em><code>GeolocationPositionError</code><em> n'implémente et n'hérite d'aucune méthode.</em></em></p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Geolocation', '#position_error_interface', 'GeolocationPositionError')}}</td>
   <td>{{Spec2('Geolocation')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>



<p>{{Compat("api.GeolocationPositionError")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/Geolocation_API/Using">Utiliser l'API de géolocalisation</a></li>
 <li>{{domxref("Geolocation")}}</li>
</ul>
