---
title: PerformanceResourceTiming
slug: Web/API/PerformanceResourceTiming
tags:
  - API
  - DOM
  - Interface
  - Reference
  - Performance Web
  - Resource Timing API
translation_of: Web/API/PerformanceResourceTiming
---
<div>{{APIRef("Resource Timing API")}}</div>

<p>L'interface <strong><code>PerformanceResourceTiming</code></strong> permet de récupérer et d'analyser des données de synchronisation réseau détaillées concernant le chargement des <em>ressources</em> d'une application. Une application peut utiliser les mesures temporelles pour déterminer, par exemple, la durée nécessaire à l'extraction d'une ressource spécifique, telle qu'une <a href="/fr/docs/Web/API/XMLHttpRequest"><code>XMLHttpRequest</code></a>, un élément <a href="/fr/docs/Web/SVG/Element/svg"><code>&lt;svg&gt;</code></a>, une image ou un script.</p>

<p>Les propriétés de l'interface créent une <em>chronologie de chargement des ressources</em> avec un <a href="/fr/docs/Web/API/DOMHighResTimeStamp">timestamps haute résolution</a> pour les événements réseau tels que les heures de début et de fin de redirection, les heures de début de récupération, les heures de début et de fin de recherche DNS, les heures de début et de fin de réponse, etc. En outre, l'interface étend <a href="/fr/docs/Web/API/PerformanceEntry"><code>PerformanceEntry</code></a> avec d'autres propriétés qui fournissent des données sur la taille de la ressource extraite ainsi que le <em>type</em> de ressource qui a initié l'extraction.</p>

<p>{{InheritanceDiagram}}</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Properties">Propriétés</h2>

<p>Cette interface étend les propriétés <a href="/fr/docs/Web/API/PerformanceEntry"><code>PerformanceEntry</code></a> suivantes pour les types d'entrée de performance des ressources en les restreignant comme suit :</p>

<dl>
  <dt><a href="/fr/docs/Web/API/PerformanceEntry/entryType"><code>PerformanceEntry.entryType</code></a> {{readonlyInline}}</dt>
  <dd>Retourne <code>"resource"</code>.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceEntry/name"><code>PerformanceEntry.name</code></a> {{readonlyInline}}</dt>
  <dd>Retourne l'URL des ressources.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceEntry/startTime"><code>PerformanceEntry.startTime</code></a> {{readonlyInline}}</dt>
  <dd>Retourne le <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>timestamp</code></a> de l'heure de début de la récupération d'une ressource. Cette valeur est équivalente à <a href="/fr/docs/Web/API/PerformanceResourceTiming/fetchStart"><code>PerformanceResourceTiming.fetchStart</code></a>.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceEntry/duration"><code>PerformanceEntry.duration</code></a> {{readonlyInline}}</dt>
  <dd>Retourne un <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>timestamp</code></a> qui est la différence entre les propriétés <a href="/fr/docs/Web/API/PerformanceResourceTiming/responseEnd"><code>responseEnd</code></a> et <a href="/fr/docs/Web/API/PerformanceEntry/startTime"><code>startTime</code></a>.</dd>
</dl>

<p>L'interface prend également en charge les propriétés suivantes, qui sont énumérées dans l'ordre temporel selon lequel elles sont enregistrées pour l'extraction d'une seule ressource. Une liste alphabétique est présentée dans la navigation, à gauche.</p>

<dl>
  <dt><a href="/fr/docs/Web/API/PerformanceResourceTiming/initiatorType"><code>PerformanceResourceTiming.initiatorType</code></a> {{readonlyInline}}</dt>
  <dd>Une chaîne de caractère <a href="/fr/docs/Web/API/DOMString"><code>string</code></a> représentant le <em>type</em> de ressource qui a initié l'entrée de performance, comme spécifié dans <a href="/fr/docs/Web/API/PerformanceResourceTiming/initiatorType"><code>PerformanceResourceTiming.initiatorType</code></a>.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceResourceTiming/nextHopProtocol"><code>PerformanceResourceTiming.nextHopProtocol</code></a> {{readonlyInline}}</dt>
  <dd>Une chaîne de caractère <a href="/fr/docs/Web/API/DOMString"><code>string</code></a> représentant le <em>protocole réseau</em> utilisé pour récupérer la ressource, tel qu'identifié par le <a href="https://datatracker.ietf.org/doc/html/rfc7301">ALPN Protocol ID (RFC7301)</a>.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceResourceTiming/workerStart"><code>PerformanceResourceTiming.workerStart</code></a> {{readonlyInline}}</dt>
  <dd>Retourne un <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> immédiatement avant de transmettre le <a href="/fr/docs/Web/API/FetchEvent"><code>FetchEvent</code></a> si un processus de Service Worker est déjà en cours, ou immédiatement avant de lancer le processus de Service Worker s'il n'est pas encore en cours. Si la ressource n'est pas interceptée par un Service Worker, la propriété retourne toujours 0.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceResourceTiming/redirectStart"><code>PerformanceResourceTiming.redirectStart</code></a> {{readonlyInline}}</dt>
  <dd>Un <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> qui représente l'heure de début de l'extraction qui déclenche la redirection.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceResourceTiming/redirectEnd"><code>PerformanceResourceTiming.redirectEnd</code></a> {{readonlyInline}}</dt>
  <dd>Un <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> immédiatement après la réception du dernier octet de la réponse de la dernière redirection.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceResourceTiming/fetchStart"><code>PerformanceResourceTiming.fetchStart</code></a> {{readonlyInline}}</dt>
  <dd>Un <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> immédiatement avant que le navigateur ne commence à récupérer la ressource.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceResourceTiming/domainLookupStart"><code>PerformanceResourceTiming.domainLookupStart</code></a> {{readonlyInline}}</dt>
  <dd>Un <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> immédiatement avant que le navigateur ne commence la recherche du nom de domaine pour la ressource.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceResourceTiming/domainLookupEnd"><code>PerformanceResourceTiming.domainLookupEnd</code></a> {{readonlyInline}}</dt>
  <dd>Un <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> représentant l'heure immédiatement après la fin de la recherche du nom de domaine de la ressource par le navigateur.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceResourceTiming/connectStart"><code>PerformanceResourceTiming.connectStart</code></a> {{readonlyInline}}</dt>
  <dd>Un <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> immédiatement avant que le navigateur ne commence à établir la connexion avec le serveur pour récupérer la ressource.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceResourceTiming/connectEnd"><code>PerformanceResourceTiming.connectEnd</code></a> {{readonlyInline}}</dt>
  <dd>Un <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> immédiatement après que le navigateur ait fini d'établir la connexion avec le serveur pour récupérer la ressource.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceResourceTiming/secureConnectionStart"><code>PerformanceResourceTiming.secureConnectionStart</code></a> {{readonlyInline}}</dt>
  <dd>Un <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> immédiatement avant que le navigateur ne lance le processus de reconnaissance pour sécuriser la connexion en cours.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceResourceTiming/requestStart"><code>PerformanceResourceTiming.requestStart</code></a> {{readonlyInline}}</dt>
  <dd>Un <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> immédiatement avant que le navigateur ne commence à demander la ressource au serveur.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceResourceTiming/responseStart"><code>PerformanceResourceTiming.responseStart</code></a> {{readonlyInline}}</dt>
  <dd>Un <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> immédiatement après que le navigateur ait reçu le premier octet de la réponse du serveur.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceResourceTiming/responseEnd"><code>PerformanceResourceTiming.responseEnd</code></a> {{readonlyInline}}</dt>
  <dd>Un <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> immédiatement après la réception par le navigateur du dernier octet de la ressource ou immédiatement avant la fermeture de la connexion de transfert, selon la première éventualité.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceResourceTiming/transferSize"><code>PerformanceResourceTiming.transferSize</code></a> {{readonlyInline}}</dt>
  <dd>Un nombre représentant la taille (en octets) de la ressource extraite. La taille comprend les champs d'en-tête de la réponse plus le corps des données utiles de la réponse.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceResourceTiming/encodedBodySize"><code>PerformanceResourceTiming.encodedBodySize</code></a> {{readonlyInline}}</dt>
  <dd>Un nombre représentant la taille (en octets) reçue de la récupération (HTTP ou cache), du <em>corps de la donnée</em>, avant de supprimer tout codage de contenu appliqué.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceResourceTiming/decodedBodySize"><code>PerformanceResourceTiming.decodedBodySize</code></a> {{readonlyInline}}</dt>
  <dd>Un nombre représentant la taille (en octets) reçue de la récupération (HTTP ou cache) du <em>message body</em>, après avoir retiré tout codage de contenu appliqué.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceResourceTiming/serverTiming"><code>PerformanceResourceTiming.serverTiming</code></a> {{readonlyInline}}</dt>
  <dd>Un tableau d'entrées <a href="/fr/docs/Web/API/PerformanceServerTiming"><code>PerformanceServerTiming</code></a> contenant des mesures de synchronisation du serveur.</dd>
</dl>

<h2 id="Methods">Méthodes</h2>

<dl>
  <dt><a href="/fr/docs/Web/API/PerformanceResourceTiming/toJSON"><code>PerformanceResourceTiming.toJSON()</code></a></dt>
  <dd>Renvoie une chaîne de caractère <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui est la représentation JSON de l'objet <a href="/fr/docs/Web/API/PerformanceResourceTiming"><code>PerformanceResourceTiming</code></a>.</dd>
</dl>

<h2 id="Example">Exemple</h2>

<p>Voir l'exemple dans <a href="/fr/docs/Web/API/Resource_Timing_API/Using_the_Resource_Timing_API">Utilisation de Resource Timing API</a>.</p>

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
      <td>{{SpecName('Resource Timing', '#performanceresourcetiming', 'PerformanceResourceTiming')}}</td>
      <td>{{Spec2('Resource Timing')}}</td>
      <td>Définition initiale.</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.PerformanceResourceTiming")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/API/Resource_Timing_API">L'API <i>Resource Timing</i></a></li>
  <li><a href="/fr/docs/Web/API/Resource_Timing_API/Using_the_Resource_Timing_API">Utilisation de l'API <i>Resource Timing</i></a></li>
</ul>
