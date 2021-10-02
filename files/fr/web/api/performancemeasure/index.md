---
title: PerformanceMeasure
slug: Web/API/PerformanceMeasure
tags:
  - API
  - Interface
  - Performance Timeline API
  - Reference
  - Performance Web
translation_of: Web/API/PerformanceMeasure
---
<div>{{APIRef("User Timing API")}}</div>

<p><code><strong>PerformanceMeasure</strong></code> est une interface <em>abstraite</em> pour les objets <a href="/fr/docs/Web/API/PerformanceEntry"><code>PerformanceEntry</code></a> ayant un <a href="/fr/docs/Web/API/PerformanceEntry/entryType"><code>entryType</code></a> « <code>measure</code> ». Les entrées de ce type sont créées en appelant <a href="/fr/docs/Web/API/Performance/measure"><code>measure()</code></a> pour ajouter un <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> <em>nommé</em> (la <em>mesure</em>) entre deux <em>marqueurs</em> à la <em>chronologie des performances</em> du navigateur.</p>

<p>{{InheritanceDiagram}}</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Properties">Propriétés</h2>

<p>Cette interface n'a pas de propriété mais elle étend les propriétés de <a href="/fr/docs/Web/API/PerformanceEntry"><code>PerformanceEntry</code></a> suivantes en restreignant les propriétés comme suit :</p>

<dl>
  <dt><a href="/fr/docs/Web/API/PerformanceEntry.entryType"><code>PerformanceEntry.entryType</code></a></dt>
  <dd>Retourne « <code>measure</code> ».</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceEntry.name"><code>PerformanceEntry.name</code></a></dt>
  <dd>Retourne le nom donné à la mesure lorsqu'elle a été créée via un appel à <a href="/fr/docs/Web/API/Performance/measure()"><code>performance.measure()</code></a>.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceEntry.startTime"><code>PerformanceEntry.startTime</code></a></dt>
  <dd>Retourne un objet <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> associé à la mesure indiquant le moment où <a href="/fr/docs/Web/API/Performance/measure()"><code>performance.measure()</code></a> a été appelée.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceEntry.duration"><code>PerformanceEntry.duration</code></a></dt>
  <dd>Retourne un objet <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> correspondant à la durée de la mesure (généralement, l'horodatage de fin de la mesure moins l'horodatage de début).</dd>
</dl>

<h2 id="Methods">Méthodes</h2>

<p>Cette interface n'a pas de méthode.</p>

<h2 id="Example">Exemple</h2>

<p>Voir l'exemple dans : <a href="/fr/docs/Web/API/User_Timing_API/Using_the_User_Timing_API">Utilisation de l'API <i>User Timing</i></a>.</p>

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
      <td>{{SpecName('User Timing Level 2', '#dom-performance-measure', 'PerformanceMeasure')}}</td>
      <td>{{Spec2('User Timing Level 2')}}</td>
      <td></td>
    </tr>
    <tr>
      <td>{{SpecName('User Timing', '#performancemeasure', 'PerformanceMeasure')}}</td>
      <td>{{Spec2('User Timing')}}</td>
      <td>Définition initiale.</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.PerformanceMeasure")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/API/User_Timing_API">API <i>User Timing </i></a></li>
  <li><a href="/fr/docs/Web/API/User_Timing_API/Using_the_User_Timing_API">Utilisation de l'API <i>User Timing</i></a></li>
</ul>
