---
title: IntersectionObserver.unobserve()
slug: Web/API/IntersectionObserver/unobserve
tags:
  - API
  - Intersection Observer
  - Intersection Observer API
  - IntersectionObserver
  - Method
  - Reference
  - unobserve
translation_of: Web/API/IntersectionObserver/unobserve
---
<div>{{APIRef("Intersection Observer API")}}</div>

<p>La méthode <code><strong>unobserve()</strong></code> de l'interface <a href="/fr/docs/Web/API/IntersectionObserver"><code>IntersectionObserver</code></a> indique à l'objet <code>IntersectionObserver</code> courant de cesser d'observer l'élément cible spécifié.</p>

<h2 id="syntax">Syntaxe</h2>

<pre class="syntaxbox"><var>IntersectionObserver</var>.unobserve(<var>target</var>);</pre>

<h3 id="parameters">Paramètres</h3>

<dl>
  <dt><code>target</code></dt>
  <dd>L'<a href="/fr/docs/Web/API/Element"><code>élément</code></a> à cesser d'observer. Si l'élément spécifié n'est pas en cours d'observation, cette méthode ne fait rien et ne lève pas d'exception.</dd>
</dl>

<h3 id="return_value">Valeur de retour</h3>

<p><code>undefined</code>.</p>

<h2 id="example">Exemple</h2>

<p>Ce fragment de code illustre la création d'un observateur, l'ajout d'un élément sous observation puis l'arrêt de cette d'observation.</p>

<pre class="brush: js">let observer = new IntersectionObserver(callback);
observer.observe(document.getElementById("elementAObserver"));

/* ... */

observer.unobserve(document.getElementById("elementAObserver"));</pre>

<h2 id="specifications">Spécifications</h2>

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
      <td>{{SpecName('IntersectionObserver','#dom-intersectionobserver-unobserve','IntersectionObserver.unobserve()')}}</td>
      <td>{{Spec2('IntersectionObserver')}}</td>
      <td>Définition initiale.</td>
    </tr>
  </tbody>
</table>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IntersectionObserver.unobserve")}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/API/Intersection_Observer_API">L'API <i>Intersection Observer</i></a></li>
  <li><a href="/fr/docs/Web/API/IntersectionObserver/observe"><code>IntersectionObserver.observe()</code></a></li>
</ul>
