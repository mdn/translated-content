---
title: performance.now()
slug: Web/API/Performance/now
tags:
  - API
  - API Performance Web
  - Method
  - Méthode
  - Performance
  - Reference
translation_of: Web/API/Performance/now
---
<p>{{APIRef("High Resolution Timing")}}</p>

<p>La méthode <code><strong>Performance.now()</strong></code> retourne une valeur de type {{domxref("DOMHighResTimeStamp")}}, mesurée en millisecondes et avec une précision de 5 millièmes de milliseconde (5 microsecondes).</p>

<p>{{AvailableInWorkers}}</p>

<p>La valeur retournée représente le temps écoulé depuis le <a href="/fr/docs/Web/API/DOMHighResTimeStamp#the_time_origin">temps d'origine</a>.</p>

<p>Attention à garder à l'esprit les points suivants :</p>

<ul>
  <li>Dans les workers dédiés créés à partir d'un contexte {{domxref("Window")}}, la valeur dans le worker sera inférieure à celle obtenue par  <code>performance.now()</code> exécuté dans la fenêtre ayant créé le worker. La fenêtre et le worker partageaient avant le même temps de référence <code>t0</code> à partir du contexte principal, mais cela a été changé.</li>
  <li>Dans les workers partagés ou service sorkers, la valeur dans le worker peut être supérieure à celle du contexte principal, car la fenêtre pourra avoir été créée après ces workers.</li>
</ul>

<p>Il est important de garder à l'esprit que pour atténuer les menaces de sécurité potentielles telles que <a href="https://spectreattack.com/">Spectre</a>, les navigateurs arrondissent généralement la valeur retournée d'une certaine quantité afin d'être moins prévisible. Cela introduit intrinsèquement un degré d'imprécision en limitant la résolution ou la précision de la minuterie. Par exemple, Firefox arrondit le temps renvoyé à des incréments de 1 milliseconde.</p>

<p>La précision de la valeur retournée est susceptible de changer si/quand les problèmes de sécurité sont atténués par d'autres moyens.</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="brush: js">
  t = performance.now();
</pre>

<h2 id="Example">Exemple</h2>

<pre class="brush: js">
  var t0 = performance.now();
  doSomething();
  var t1 = performance.now();
  console.log("L'appel de doSomething a demandé " + (t1 - t0) + " millisecondes.")
</pre>

<p>Contrairement aux autres données de temps disponibles en JavaScript (par exemple <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/now"><code>Date.now</code></a>), les horodatages retournés par <code>Performance.now()</code> ne sont pas limités à une précision d'une milliseconde. Au contraire, ils représentent les temps comme des nombres flottants avec une précision pouvant aller jusqu'à une microseconde.</p>

<p>Également contrairement à <code>Date.now()</code>, les valeurs retournées par <code>Performance.now() </code>sont toujours incrémentées à un taux constant, indépendant de l'horloge du système (qui peut être ajustée manuellement ou par l'intermédiaire d'un logiciel comme NTP). Sinon, <code>performance.timing.navigationStart + performance.now()</code> serait approximativement égal à <code>Date.now().</code></p>

<h2 id="Reduced_time_precision">Précision réduite du temps</h2>

<p>Pour offrir une protection contre les attaques de temporisation et les empreintes digitales, la précision de <code>performance.now()</code> peut être arrondie en fonction des paramètres du navigateur. Dans Firefox, la préférence <code>privacy.reduceTimerPrecision</code> est activée par défaut et prend la valeur 1ms par défaut.</p>

<pre class="brush: js">// précision temporelle réduite (1ms) dans Firefox 60
performance.now();
// 8781416
// 8781815
// 8782206
// ...

// précision du temps réduite avec `privacy.resistFingerprinting` activé
performance.now();
// 8865400
// 8866200
// 8866700
// ...
</pre>

<p>Dans Firefox, vous pouvez également activer <code>privacy.resistFingerprinting</code> - cela change la précision à 100ms ou à la valeur de <code>privacy.resistFingerprinting.reduceTimerPrecision.microseconds</code> en fonction de la plus grande des deux.</p>

<p>À partir de Firefox 79, les minuteurs haute résolution peuvent être utilisés si vous isolez votre document en utilisant les en-têtes {{HTTPHeader("Cross-Origin-Opener-Policy")}} et {{HTTPHeader("Cross-Origin-Embedder-Policy")}} :</p>

<pre class="brush: plain">Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp</pre>

<p>Ces en-têtes garantissent qu'un document de premier niveau ne partage pas un groupe de contexte de navigation avec des documents d'origine croisée. Le processus COOP isole votre document et les attaquants potentiels ne peuvent pas accéder à votre objet global s'ils l'ouvrent dans une fenêtre contextuelle, ce qui permet d'éviter un ensemble d'attaques d'origine croisée appelées <a href="https://github.com/xsleaks/xsleaks">XS-Leaks</a>.</p>

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
      <td>{{SpecName('Highres Time Level 2',  '#dom-performance-now', 'performance.now()')}}</td>
      <td>{{Spec2('Highres Time Level 2')}}</td>
      <td>Définitions plus strictes des interfaces et des types.</td>
    </tr>
    <tr>
      <td>{{SpecName('Highres Time',  '#dom-performance-now', 'Performance.now()')}}</td>
      <td>{{Spec2('Highres Time')}}</td>
      <td>Définition initiale</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Performance.now")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li><a href="http://updates.html5rocks.com/2012/08/When-milliseconds-are-not-enough-performance-now">Quand les millisecondes ne suffisent pas : performance.now() <small>(en)</small></a> de HTML5 Rocks.</li>
</ul>
