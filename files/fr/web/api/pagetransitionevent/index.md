---
title: PageTransitionEvent
slug: Web/API/PageTransitionEvent
translation_of: Web/API/PageTransitionEvent
---
<p>{{APIRef("HTML DOM")}}</p>

<p>Les évènements de transition de page sont émis quand une page web est chargée ou déchargée.</p>

<h2 id="Information_du_DOM">Information du DOM</h2>

<h3 id="Hiérarchie_d’héritage">Hiérarchie d’héritage</h3>

<div><a href="/fr/docs/Web/API/Event">Event</a>

<div>   PageTransitionEvent</div>
</div>

<h2 id="Exemple">Exemple</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body onpageshow="myFunction(event)"&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">function myFunction(event) {
    if (event.persisted) {
        alert("La page a été mise en cache par le navigateur");
    } else {
        alert("La page n’a PAS été mise en cache par le navigateur");
    }
}</pre>

<h2 id="Membres">Membres</h2>

<p>L’objet <strong>PageTransitionEvent</strong> possède les types de membres suivants :</p>

<ul>
 <li><a href="#Propriétés">Propriétés</a></li>
</ul>

<h3 id="Propriétés">Propriétés</h3>

<p>L’objet <strong>PageTransitionEvent</strong> possède les propriétés suivantes :</p>

<table>
 <tbody>
  <tr>
   <th>Propriété</th>
   <th>Type d’accès</th>
   <th>Description</th>
  </tr>
  <tr>
   <th><code>persisted</code></th>
   <th>Lecture seule</th>
   <th>Indique si une page web est chargée depuis le cache.</th>
  </tr>
 </tbody>
</table>
