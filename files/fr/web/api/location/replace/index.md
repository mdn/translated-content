---
title: Location.replace()
slug: Web/API/Location/replace
tags:
  - API
  - JavaScript
  - Méthode
  - Reference
translation_of: Web/API/Location/replace
---
<p>{{APIRef("Location")}}</p>
<p>La méthode <code><strong>Location.replace()</strong></code> remplace la ressource actuelle par celle présente à l'URL donnée. La différence avec la méthode {{domxref("Location.assign","assign()")}} est que, après avoir utilisé <code>replace()</code>, la page actuelle ne sera pas enregistrée dans l'historique de session {{domxref("History")}}, ce qui signifie que l'utilisateur ne sera pas en mesure d'utiliser le bouton <em>précédent</em> pour y revenir.</p>
<p>Si le remplacement est impossible à cause d'une violation de sécurité, une {{domxref("DOMException")}} de type <code>SECURITY_ERROR</code> est lancée. Ceci se produit si l'origine du script appelant est différente de l'origine de la page originellement désignée par l'objet {{domxref("Location")}}, principalement quand le script est hébergé sur un autre domaine.</p>
<p>Si l'URL donnée n'est pas valide, une {{domxref("DOMException")}} de type <code>SYNTAX_ERROR</code> est lancée.</p>
<h2 id="Syntaxe">Syntaxe</h2>
<pre class="syntaxbox"><em>object</em>.replace(<em>url</em>);
</pre>
<h3 id="Paramètres">Paramètres</h3>
<dl>
 <dt>
  <em>url</em></dt>
 <dd>
  {{domxref("DOMString")}} contenant l'URL de la page vers laquelle naviguer.</dd>
</dl>
<h2 id="Exemples">Exemples</h2>
<pre class="brush: js">// Navigue vers l'article <em>Location.reload</em> en remplaçant la page actuelle
document.location.replace('https://developer.mozilla.org/en-US/docs/Web/API/Location.reload');</pre>
<h2 id="Spécifications">Spécifications</h2>
<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "history.html#dom-location-replace", "Location.replace()")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Pas de différence avec {{SpecName("HTML5 W3C")}}.</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "browsers.html#dom-location-replace", "Location.replace()")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBIndex")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
 <li>L'interface {{domxref("Location")}} à laquelle appartient cette méthode.</li>
 <li>Méthodes similaires : {{domxref("Location.assign()")}} et {{domxref("Location.reload()")}}.</li>
</ul>
