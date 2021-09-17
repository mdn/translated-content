---
title: DNT
slug: Web/HTTP/Headers/DNT
translation_of: Web/HTTP/Headers/DNT
---
<div>{{HTTPSidebar}}</div>

<p>Le header de requête <strong><code>DNT</code></strong> (<strong>D</strong>o <strong>N</strong>ot <strong>T</strong>rack) indique que les préférences de l'utilisateur concernant le suivi publicitaire. Il permet aux utilisateurs d'indiquer s'ils préfèrent leur vie privée au lieu d'un contenu personnalisé.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Header type</th>
   <td>{{Glossary("Request header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>yes</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">DNT: 0
DNT: 1
</pre>

<h2 id="Directives">Directives</h2>

<dl>
 <dt>0</dt>
 <dd>L'utilisateur préfère autoriser son suivi sur le site cible.</dd>
 <dt>1</dt>
 <dd>L'utilisateur préfère ne pas être suivi sur le site cible.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<h3 id="Lire_le_statut_Do_Not_Track_avec_JavaScript">Lire le statut Do Not Track avec JavaScript</h3>

<p>La préférence de l'utilisateur pour DNT peut également être lue depuis JavaScript en utilisant la proriété {{domxref("Navigator.doNotTrack")}} :</p>

<pre class="brush: js">navigator.doNotTrack; // "0" ou "1"</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Status</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Tracking','#dnt-header-field', 'DNT Header Field for HTTP Requests')}}</td>
   <td>{{Spec2("Tracking")}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_navigateur">Compatibilité navigateur</h2>

<p>{{Compat("http.headers.DNT")}}</p>

<h2 id="Voyez_aussi">Voyez aussi</h2>

<ul>
 <li>{{domxref("Navigator.doNotTrack")}}</li>
 <li>{{HTTPHeader("Tk")}} header</li>
 <li><a href="https://en.wikipedia.org/wiki/Do_Not_Track">Do Not Track on Wikipedia</a></li>
 <li><a href="https://www.eff.org/deeplinks/2011/02/what-does-track-do-not-track-mean">What Does the "Track" in "Do Not Track" Mean? – EFF</a></li>
 <li><a href="http://donottrack.us/">donottrack.us</a></li>
 <li>DNT browser settings help:
  <ul>
   <li><a href="https://www.mozilla.org/en-US/firefox/dnt/">Firefox</a></li>
   <li><a href="https://support.google.com/chrome/answer/2790761">Chrome</a></li>
  </ul>
 </li>
</ul>
