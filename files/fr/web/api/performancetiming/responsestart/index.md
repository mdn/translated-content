---
title: PerformanceTiming.responseStart
slug: Web/API/PerformanceTiming/responseStart
tags:
  - API
  - Backwards compatibility
  - Deprecated
  - Navigation Timing
  - PerformanceTiming
  - Property
  - Propriété
  - Read-only
  - legacy
  - responseStart
translation_of: Web/API/PerformanceTiming/responseStart
---
<p>{{APIRef("Navigation Timing")}}</p>

<div class="warning">
  <p><strong>Attention :</strong> Cette interface est dépréciée dans la spécification <a href="https://w3c.github.io/navigation-timing/#obsolete">Navigation Timing Level 2</a>. Veuillez utiliser l'interface <a href="/fr/docs/Web/API/PerformanceNavigationTiming"><code>PerformanceNavigationTiming</code></a> à la place.</p>
</div>

<p>L'ancienne propriété en lecture seule <code><strong>responseStart</code></strong> retourne un <code>unsigned long long</code> représentant le moment (en millisecondes depuis l'époque UNIX) où le navigateur a reçu le premier octet de la réponse du serveur, du cache ou de la ressource locale.</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="brush: js">let <var>time</var> = <var>performanceTiming</var>.responseStart;</pre>

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
      <td>{{SpecName('Navigation Timing', '#dom-performancetiming-responsestart',
        'PerformanceTiming.responseStart')}}</td>
      <td>{{Spec2('Navigation Timing')}}</td>
      <td>Définition initiale.</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.PerformanceTiming.responseStart")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li>L'interface <a href="/fr/docs/Web/API/PerformanceTiming"><code>PerformanceTiming</code></a> à laquelle elle appartient.</li>
</ul>
