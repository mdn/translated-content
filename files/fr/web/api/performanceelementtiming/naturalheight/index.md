---
title: PerformanceElementTiming.naturalHeight
slug: Web/API/PerformanceElementTiming/naturalHeight
tags:
  - API
  - Property
  - Propriété
  - Reference
  - naturalHeight
  - PerformanceElementTiming
translation_of: Web/API/PerformanceElementTiming/naturalHeight
---
<div>{{APIRef("Element Timing API")}}</div>

<p>La propriété en lecture seule <strong><code>naturalHeight</code></strong> de l'interface <a href="/fr/docs/Web/API/PerformanceElementTiming"><code>PerformanceElementTiming</code></a> renvoie la hauteur intrinsèque de l'élément image.</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="brush:js">var <var>height</var> = PerformanceElementTiming.naturalHeight;</pre>

<h3>Valeur</h3>
<p>Un entier de 32 bits non signé (<i>unsigned long</i>) qui est la hauteur intrinsèque de l'image si cela est appliqué à une image, 0 pour le texte.</p>

<h2 id="Examples">Exemples</h2>

<p>Dans cet exemple, le fichier image a une largeur de 1000px et une hauteur de 750px. L'appel de <code>entry.naturalHeight</code> renvoie <code>750</code>, c'est-à-dire la hauteur intrinsèque en pixels.</p>

<pre class="brush:html">&lt;img src="image.jpg" alt="une belle image" elementtiming="big-image" id="myImage"&gt;</pre>

<pre class="brush:js">const <var>observer</var> = new PerformanceObserver((list) => {
  let <var>entries</var> = list.getEntries().forEach(function (entry) {
    if (entry.identifier === "big-image") {
      console.log(entry.naturalHeight);
    }
  });
});
observer.observe({ entryTypes: ["element"] });</pre>

<div class="note">
  <p><strong>Note :</strong> Cet exemple utilise l'interface <a href="/fr/docs/Web/API/PerformanceObserver"><code>PerformanceObserver</code></a> pour créer une liste d'événements de mesure des performances. Dans notre cas, nous observons l'élément <a href="/fr/docs/Web/API/PerformanceEntry/entryType"><code>PerformanceEntry.entryType</code></a> afin d'utiliser l'interface <code>PerformanceElementTiming</code>.</p>
</div>

<h2 id="Specifications">Specifications</h2>

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
      <td>{{SpecName('Element Timing API','#dom-performanceelementtiming-naturalheight','PerformanceElementTiming.naturalHeight')}}</td>
      <td>{{Spec2('Element Timing API')}}</td>
      <td>Initial definition.</td>
   </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.PerformanceElementTiming.naturalHeight")}}</p>
