---
title: performance.timing
slug: Web/API/Performance/timing
tags:
  - API
  - Rétrocompatibilité
  - Déprécié
  - Navigation Timing
  - Performance
  - Property
  - Propriété
  - Read-only
  - Lecture seule
  - Reference
translation_of: Web/API/Performance/timing
---
<p>{{deprecated_header}}{{APIRef("Navigation Timing")}}</p>

<div class="warning">
  <p><strong>Attention :</strong> Cette propriété est dépréciée dans la spécification <a href="https://w3c.github.io/navigation-timing/#obsolete">Navigation Timing Level 2</a>. Veuillez utiliser l'interface {{domxref("PerformanceNavigationTiming")}} à la place.</p>
</div>

<p>L'ancienne propriété <strong><code>Performance.timing</code></strong> renvoie un objet {{domxref("PerformanceTiming")}}  en lecture seule contenant des informations de performance liées à la latence.</p>

{{warning("Cette propriété n'est pas disponible dans les Web Workers.")}}

<h2 id="Syntax">Syntaxe</h2>

<pre class="brush: js">
  <var>timingInfo</var> = performance.timing;
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
      <td>{{SpecName('Navigation Timing Level 2', '#obsolete')}}</td>
      <td>{{Spec2('Navigation Timing Level 2')}}</td>
      <td>Définition initiale.</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Performance.timing")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li>L'interface {{domxref("Performance")}} à laquelle il appartient.</li>
</ul>
