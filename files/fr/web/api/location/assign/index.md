---
title: Location.assign()
slug: Web/API/Location/assign
tags:
  - API
  - JavaScript
  - Location
  - Méthode
  - Reference
  - WebAPI
translation_of: Web/API/Location/assign
---
<p>{{ APIRef("Location") }}</p>

<p>La méthode <code><strong>Location.assign()</strong></code> charge et affiche dans la fenêtre le document situé à l'URL spécifiée.</p>

<p>Si l'action est impossible à cause d'une violation de sécurité, une {{domxref("DOMException")}} de type <code>SECURITY_ERROR</code> est lancée. Cela se produit si l'origine du script appelant est différente de l'origine de la page initialement désignée par l'objet {{domxref("Location")}}, principalement quand le script est hébergé sur un autre domaine.</p>

<p>Si l'URL spécifiée n'est pas valide, une {{domxref("DOMException")}} de type <code>SYNTAX_ERROR</code> est lancée.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><em>object</em>.assign(<em>url</em>);
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><em>url</em></dt>
 <dd>Une {{domxref("DOMString")}} contenant l'URL de la page vers laquelle naviguer.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">// Navigue vers l'article Location.reload
document.location.assign('https://developer.mozilla.org/en-US/docs/Web/API/Location.reload');</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "history.html#dom-location-assign", "Location.assign()")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Pas de différence avec {{SpecName("HTML5 W3C")}}.</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "browsers.html#dom-location-assign", "Location.assign()")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité">Compatibilité</h2>



<p>{{Compat("api.Location.assign")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'interface {{domxref("Location")}} à laquelle appartient cette méthode.</li>
 <li>Méthodes similaires : {{domxref("Location.replace()")}} et {{domxref("Location.reload()")}}.</li>
</ul>
