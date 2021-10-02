---
title: PerformanceTiming
slug: Web/API/PerformanceTiming
tags:
  - API
  - Backwards compatibility
  - Deprecated
  - Interface
  - Navigation Timing
  - Navigation Timing API
  - Optimization
  - Performance
  - Reference
  - Timing
  - legacy
translation_of: Web/API/PerformanceTiming
---
<div>{{APIRef("Navigation Timing")}}</div>

<div class="warning">
  <p><strong>Attention :</strong> Cette interface est dépréciée dans la spécification <a href="https://w3c.github.io/navigation-timing/#obsolete">Navigation Timing Level 2</a>. Veuillez utiliser l'interface <a href="/fr/docs/Web/API/PerformanceNavigationTiming"><code>PerformanceNavigationTiming</code></a> à la place.</p>
</div>

<p>L'interface <strong><code>PerformanceTiming</code></strong> est une interface héritée conservée pour la rétrocompatibilité et contient des propriétés qui offrent des informations sur la chronologie des performances pour divers événements qui se produisent pendant le chargement et l'utilisation de la page actuelle. Vous obtenez un objet <code>PerformanceTiming</code> décrivant votre page en utilisant la propriété <a href="/fr/docs/Web/API/Performance/timing"><code>window.performance.timing</code></a>.</p>

<h2 id="Properties">Propriétés</h2>

<p><em>L'interface <code>PerformanceTiming</code> n'hérite d'aucune propriété.</em></p>

<p>Ces propriétés décrivent chacune l'heure à laquelle un point particulier du processus de chargement de la page a été atteint. Certaines correspondent à des événements DOM, d'autres décrivent l'heure à laquelle les opérations internes du navigateur ont eu lieu.</p>

<p>Chaque heure est fournie sous la forme d'une <a href="https://fr.wikipedia.org/wiki/Heure_Unix">heure Unix</a> (<code>unsigned long long</code>) représentant le moment, en millisecondes depuis l'époque UNIX.</p>

<p>Ces propriétés sont énumérées dans l'ordre dans lequel elles apparaissent au cours du processus de navigation.</p>

<dl>
  <dt><a href="/fr/docs/Web/API/PerformanceTiming/navigationStart"><code>PerformanceTiming.navigationStart</code></a> {{readonlyInline}} {{deprecated_inline}}</dt>
  <dd>Lorsque le prompt de déchargement se termine sur le document précédent dans le même contexte de navigation. S'il n'y a pas de document précédent, cette valeur sera la même que <code>PerformanceTiming.fetchStart</code>.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceTiming/unloadEventStart"><code>PerformanceTiming.unloadEventStart</code></a> {{readonlyInline}} {{deprecated_inline}}</dt>
  <dd>Lorsque l'événement <a href="/fr/docs/Web/API/Window/unload_event"><code>unload</code></a> a été lancé, indiquant l'heure à laquelle le document précédent dans la fenêtre a commencé à se décharger. S'il n'y a pas de document précédent, ou si le document précédent ou l'une des redirections nécessaires n'est pas de la même origine, la valeur retournée est <code>0</code>.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceTiming/unloadEventEnd"><code>PerformanceTiming.unloadEventEnd</code></a> {{readonlyInline}} {{deprecated_inline}}</dt>
  <dd>Lorsque le gestionnaire d'événement <a href="/fr/docs/Web/API/Window/unload_event"><code>unload</code></a> se termine. S'il n'y a pas de document précédent, ou si le document précédent, ou l'une des redirections nécessaires, n'est pas de la même origine, la valeur retournée est <code>0</code>.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceTiming/redirectStart"><code>PerformanceTiming.redirectStart</code></a> {{readonlyInline}} {{deprecated_inline}}</dt>
  <dd>Quand la première redirection HTTP commence. S'il n'y a pas de redirection, ou si l'une des redirections n'est pas de la même origine, la valeur retournée est <code>0</code>.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceTiming/redirectEnd"><code>PerformanceTiming.redirectEnd</code></a> {{readonlyInline}} {{deprecated_inline}}</dt>
  <dd>Lorsque la dernière redirection HTTP est terminée, c'est-à-dire lorsque le dernier octet de la réponse HTTP a été reçu. S'il n'y a pas de redirection, ou si l'une des redirections n'a pas la même origine, la valeur retournée est <code>0</code>.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceTiming/fetchStart"><code>PerformanceTiming.fetchStart</code></a> {{readonlyInline}} {{deprecated_inline}}</dt>
  <dd>Lorsque le navigateur est prêt à récupérer le document à l'aide d'une requête HTTP. Ce moment est <em>avant</em> la vérification de tout cache d'application.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceTiming/domainLookupStart"><code>PerformanceTiming.domainLookupStart</code></a> {{readonlyInline}} {{deprecated_inline}}</dt>
  <dd>Lorsque la recherche du domaine commence. Si une connexion persistante est utilisée, ou si les informations sont stockées dans un cache ou une ressource locale, la valeur sera la même que <code>PerformanceTiming.fetchStart</code>.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceTiming/domainLookupEnd"><code>PerformanceTiming.domainLookupEnd</code></a> {{readonlyInline}} {{deprecated_inline}}</dt>
  <dd>Lorsque la recherche du domaine est terminée. Si une connexion persistante est utilisée, ou si les informations sont stockées dans un cache ou une ressource locale, la valeur sera la même que <code>PerformanceTiming.fetchStart</code>.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceTiming/connectStart"><code>PerformanceTiming.connectStart</code></a> {{readonlyInline}} {{deprecated_inline}}</dt>
  <dd>Lorsque la demande d'ouverture d'une connexion est envoyée au réseau. Si la couche de transport signale une erreur et que l'établissement de la connexion est relancé, la dernière heure de début d'établissement de la connexion est donnée. Si une connexion persistante est utilisée, la valeur sera la même que <code>PerformanceTiming.fetchStart</code>.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceTiming/connectEnd"><code>PerformanceTiming.connectEnd</code></a> {{readonlyInline}} {{deprecated_inline}}</dt>
  <dd>Lorsque la connexion est ouverte sur le réseau. Si la couche transport signale une erreur et que l'établissement de la connexion est relancé, l'heure de fin du dernier établissement de la connexion est donnée. Si une connexion persistante est utilisée, la valeur sera la même que <code>PerformanceTiming.fetchStart</code>. Une connexion est considérée comme ouverte lorsque toute poignée de main de connexion sécurisée, ou authentification SOCKS, est terminée.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceTiming/secureConnectionStart"><code>PerformanceTiming.secureConnectionStart</code></a> {{readonlyInline}} {{deprecated_inline}}</dt>
  <dd>Lorsque le handshake de connexion sécurisée commence. Si aucune connexion de ce type n'est demandée, il retourne <code>0</code>.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceTiming/requestStart"><code>PerformanceTiming.requestStart</code></a> {{readonlyInline}} {{deprecated_inline}}</dt>
  <dd>Lorsque le navigateur a envoyé la requête pour obtenir le document réel, depuis le serveur ou depuis un cache. Si la couche de transport échoue après le début de la demande et que la connexion est rouverte, cette propriété sera définie sur l'heure correspondant à la nouvelle demande.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceTiming/responseStart"><code>PerformanceTiming.responseStart</code></a> {{readonlyInline}} {{deprecated_inline}}</dt>
  <dd>Lorsque le navigateur a reçu le premier octet de la réponse, du serveur ou d'un cache, ou d'une ressource locale.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceTiming/responseEnd"><code>PerformanceTiming.responseEnd</code></a> {{readonlyInline}} {{deprecated_inline}}</dt>
  <dd>Lorsque le navigateur a reçu le dernier octet de la réponse, ou lorsque la connexion est fermée si cela s'est produit en premier, depuis le serveur, le cache ou une ressource locale.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceTiming/domLoading"><code>PerformanceTiming.domLoading</code></a> {{readonlyInline}} {{deprecated_inline}}</dt>
  <dd>Lorsque l'analyseur syntaxique a commencé son travail, c'est-à-dire lorsque son <a href="/fr/docs/Web/API/Document/readyState"><code>Document.readyState</code></a> passe à <code>'loading'</code> et que l'événement <a href="/fr/docs/Web/API/Document/readystatechange_event"><code>readystatechange</code></a> correspondant est déclenché.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceTiming/domInteractive"><code>PerformanceTiming.domInteractive</code></a> {{readonlyInline}} {{deprecated_inline}}</dt>
  <dd>Lorsque l'analyseur syntaxique a terminé son travail sur le document principal, c'est à ce moment que son <a href="/fr/docs/Web/API/Document/readyState"><code>Document.readyState</code></a> passe à <code>'interactive'</code> et que l'événement <a href="/fr/docs/Web/API/Document/readystatechange_event"><code>readystatechange</code></a> correspondant est lancé.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceTiming/domContentLoadedEventStart"><code>PerformanceTiming.domContentLoadedEventStart</code></a> {{readonlyInline}} {{deprecated_inline}}</dt>
  <dd>Juste avant que l'analyseur syntaxique envoie l'événement <a href="/fr/docs/Web/API/Document/DOMContentLoaded_event"><code>DOMContentLoaded</code></a>, c'est-à-dire juste après que tous les scripts qui doivent être exécutés juste après l'analyse syntaxique aient été exécutés.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceTiming/domContentLoadedEventEnd"><code>PerformanceTiming.domContentLoadedEventEnd</code></a> {{readonlyInline}} {{deprecated_inline}}</dt>
  <dd>C'est-à-dire juste après que tous les scripts qui doivent être exécutés dès que possible, dans l'ordre ou non, aient été exécutés.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceTiming/domComplete"><code>PerformanceTiming.domComplete</code></a> {{readonlyInline}} {{deprecated_inline}}</dt>
  <dd>Lorsque l'analyseur syntaxique a terminé son travail sur le document principal, c'est-à-dire lorsque son <a href="/fr/docs/Web/API/Document/readyState"><code>Document.readyState</code></a> passe à <code>'complete'</code> et que l'événement <a href="/fr/docs/Web/API/Document/readystatechange_event"><code>readystatechange</code></a> correspondant est lancé.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceTiming/loadEventStart"><code>PerformanceTiming.loadEventStart</code></a> {{readonlyInline}} {{deprecated_inline}}</dt>
  <dd>Quand l'événement <a href="/fr/docs/Web/API/Window/load_event"><code>load</code></a> a été envoyé pour le document actuel. Si cet événement n'a pas encore été envoyé, il retourne <code>0</code>.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceTiming/loadEventEnd"><code>PerformanceTiming.loadEventEnd</code></a> {{readonlyInline}} {{deprecated_inline}}</dt>
  <dd>Lorsque le gestionnaire d'événement <a href="/fr/docs/Web/API/Window/load_event"><code>load</code></a> s'est terminé, c'est-à-dire lorsque l'événement de chargement est terminé. Si cet événement n'a pas encore été envoyé, ou n'est pas encore terminé, il retourne <code>0</code>.</dd>
</dl>

<h2 id="Methods">Méthodes</h2>

<p><em>L'interface <code>PerformanceTiming</code> n'hérite d'aucune méthode.</em></p>

<dl>
  <dt><a href="/fr/docs/Web/API/PerformanceTiming/toJSON"><code>PerformanceTiming.toJSON()</code></a> {{non-Standard_Inline}} {{deprecated_inline}}</dt>
  <dd>Retourne un <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON">objet JSON</a> représentant cet objet <code>PerformanceTiming</code>.</dd>
</dl>

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
      <td>{{SpecName('Navigation Timing', '#performancetiming', 'PerformanceTiming')}}</td>
      <td>{{Spec2('Navigation Timing')}}</td>
      <td>Définition initiale.</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.PerformanceTiming")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li>La propriété <a href="/fr/docs/Web/API/Performance/timing"><code>Performance.timing</code></a> qui crée un tel objet.</li>
</ul>
