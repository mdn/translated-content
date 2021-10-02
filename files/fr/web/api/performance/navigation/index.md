---
title: performance.navigation
slug: Web/API/Performance/navigation
tags:
  - API
  - Rétrocompatibilité
  - Déprécié
  - HTTP
  - Performance
  - Propriété
  - Property
  - Lecture seule
  - Read-only
  - Reference
  - legacy
translation_of: Web/API/Performance/navigation
---
<p>{{Deprecated_Header}}{{APIRef("Navigation Timing")}}</p>

<div class="warning">
  <p><strong>Attention :</strong> Cette propriété est dépréciée dans la spécification <a href="https://w3c.github.io/navigation-timing/#obsolete">Navigation Timing Level 2 specification</a>.</p>
</div>

<p>L'ancienne propriété en lecture seule <strong><code>Performance.navigation</code></strong> renvoie un objet {{domxref("PerformanceNavigation")}} représentant le type de navigation qui se produit dans le contexte de navigation donné, comme le nombre de redirections nécessaires pour aller chercher la ressource.</p>

{{warning("Cette propriété n'est pas disponible dans les Web Workers.")}}

<h2 id="Syntax">Syntaxe</h2>

<pre class="brush: js">
  <em>navObject</em> = <em>performance</em>.navigation;
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
   <td>{{SpecName('Navigation Timing', '#sec-window.performance-attribute', 'Performance.navigation')}}</td>
   <td>{{Spec2('Navigation Timing')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Performance.navigation")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
 <li>L'interface {{domxref("Performance")}} à laquelle il appartient.</li>
</ul>
