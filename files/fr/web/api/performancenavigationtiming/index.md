---
title: PerformanceNavigationTiming
slug: Web/API/PerformanceNavigationTiming
tags:
  - API
  - Interface
  - Navigation Timing API
  - Performance Timeline API
  - Reference
  - Performance Web
translation_of: Web/API/PerformanceNavigationTiming
---
<p>{{APIRef("Navigation Timing")}}{{SeeCompatTable}}</p>

<p>L'interface <strong><code>PerformanceNavigationTiming</code></strong> fournit des méthodes et des propriétés pour stocker et récupérer des métriques concernant les événements de navigation de document du navigateur. Par exemple, cette interface peut être utilisée pour déterminer le temps nécessaire au chargement ou au déchargement d'un document.</p>

<p>{{InheritanceDiagram}}</p>

<h2 id="Properties">Propriétés</h2>

<p>Cette interface étend les propriétés de <a href="/fr/docs/Web/API/PerformanceEntry"><code>PerformanceEntry</code></a> suivantes pour les types d'entrée de performance de navigation en les qualifiant et en les contraignant comme suit :</p>

<dl>
  <dt><a href="/fr/docs/Web/API/PerformanceEntry/entryType"><code>PerformanceEntry.entryType</code></a> {{readonlyInline}}</dt>
  <dd>Retourne « <code>navigation</code> ».</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceEntry/name"><code>PerformanceEntry.name</code></a> {{readonlyInline}}</dt>
  <dd>Retourne l'adresse du <a href="https://dom.spec.whatwg.org/#concept-document-url">document</a>.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceEntry/startTime"><code>PerformanceEntry.startTime</code></a> {{readonlyInline}}</dt>
  <dd>Retourne un <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> avec une valeur de « <code>0</code> ».</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceEntry/duration"><code>PerformanceEntry.duration</code></a> {{readonlyInline}}</dt>
  <dd>Retourne un <a href="/fr/docs/Web/API/DOMHighResTimeStamp">timestamp</a> qui est la différence entre les propriétés <a href="/fr/docs/Web/API/PerformanceNavigationTiming/loadEventEnd"><code>PerformanceNavigationTiming.loadEventEnd</code></a> et <a href="/fr/docs/Web/API/PerformanceEntry/startTime"><code>PerformanceEntry.startTime</code></a>.</dd>
</dl>

<p>Cette interface étend également les propriétés <a href="/fr/docs/Web/API/PerformanceResourceTiming"><code>PerformanceResourceTiming</code></a> suivantes pour les types d'entrée de performance de navigation en les qualifiant et en les contraignant comme suit :</p>

<dl>
  <dt><a href="/fr/docs/Web/API/PerformanceResourceTiming/initiatorType"><code>PerformanceResourceTiming.initiatorType</code></a> {{readonlyInline}}</dt>
  <dd>Retourne « <code>navigation</code> ».</dd>
</dl>

<p>L'interface prend également en charge les propriétés suivantes :</p>

<dl>
  <dt><a href="/fr/docs/Web/API/PerformanceNavigationTiming/domComplete"><code>PerformanceNavigationTiming.domComplete</code></a> {{readonlyInline}} {{Experimental_Inline}}</dt>
  <dd>Un <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> représentant une valeur temporelle égale au temps immédiatement avant que le navigateur ne définisse la disponibilité du document actuel à <em><a href="https://html.spec.whatwg.org/multipage/syntax.html#the-end">complete</a></em>.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventEnd"><code>PerformanceNavigationTiming.domContentLoadedEventEnd</code></a> {{readonlyInline}} {{Experimental_Inline}}</dt>
  <dd>Un <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> représentant la valeur temporelle égale au temps immédiatement après la fin de l'événement <a href="https://html.spec.whatwg.org/multipage/syntax.html#the-end">DOMContentLoaded</a> du document actuel.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventStart"><code>PerformanceNavigationTiming.domContentLoadedEventStart</code></a> {{readonlyInline}} {{Experimental_Inline}}</dt>
  <dd>Un <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> représentant la valeur temporelle égale au temps immédiatement avant que l'agent utilisateur ne déclenche l'événement <a href="https://html.spec.whatwg.org/multipage/syntax.html#the-end">DOMContentLoaded</a> sur le document actuel.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceNavigationTiming/domInteractive"><code>PerformanceNavigationTiming.domInteractive</code></a> {{readonlyInline}} {{Experimental_Inline}}</dt>
  <dd>Un <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> représentant une valeur <a href="/fr/docs/Web/API/DOMHighResTimeStamp">temporelle</a> égale qui précède immédiatement le moment où l'agent utilisateur règle l'état de préparation du document actuel sur <a href="https://html.spec.whatwg.org/multipage/syntax.html#the-end">interactif</a>.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceNavigationTiming/loadEventEnd"><code>PerformanceNavigationTiming.loadEventEnd</code></a> {{readonlyInline}} {{Experimental_Inline}}</dt>
  <dd>Un <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> représentant le moment où l'événement de chargement du document actuel est terminé.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceNavigationTiming/loadEventStart"><code>PerformanceNavigationTiming.loadEventStart</code></a> {{readonlyInline}} {{Experimental_Inline}}</dt>
  <dd>Un <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> représentant la valeur temporelle égale à l'heure précédant immédiatement l'événement de chargement du document actuel.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceNavigationTiming/redirectCount"><code>PerformanceNavigationTiming.redirectCount</code></a> {{readonlyInline}} {{Experimental_Inline}}</dt>
  <dd>Un nombre représentant le nombre de redirections, depuis la dernière navigation sans redirection, dans le contexte de navigation actuel. S'il n'y a pas eu de redirection, ou si la redirection provenait d'une autre origine, et que cette origine ne permet pas que ses informations temporelles soient exposées à l'origine actuelle, la valeur sera 0.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceNavigationTiming/requestStart"><code>PerformanceNavigationTiming.requestStart</code></a> {{readonlyInline}} {{Experimental_Inline}}</dt>
  <dd>Un <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> représentant le moment immédiatement avant que l'agent utilisateur ne commence à demander la ressource au serveur, ou aux caches d'application pertinents ou aux ressources locales.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceNavigationTiming/responseStart"><code>PerformanceNavigationTiming.responseStart</code></a> {{readonlyInline}} {{Experimental_Inline}}</dt>
  <dd>Un <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> représentant l'heure immédiatement après que l'analyseur HTTP de l'agent utilisateur ait reçu le premier octet de la réponse des caches d'application pertinents, ou des ressources locales ou du serveur.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceNavigationTiming/type"><code>PerformanceNavigationTiming.type</code></a> {{readonlyInline}} {{Experimental_Inline}}</dt>
  <dd>Une chaîne de caractère <a href="/fr/docs/Web/API/DOMString">DOMString</a> représentant le type de navigation. Doit être : « <code>navigate</code> », « <code>reload</code> », « <code>back_forward</code> » ou « <code>prerender</code> ».</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceNavigationTiming/unloadEventEnd"><code>PerformanceNavigationTiming.unloadEventEnd</code></a> {{readonlyInline}} {{Experimental_Inline}}</dt>
  <dd>Un <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> représentant la valeur temporelle égale au temps immédiatement après que l'agent utilisateur ait terminé l'événement de déchargement du document précédent.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceNavigationTiming/unloadEventStart"><code>PerformanceNavigationTiming.unloadEventStart</code></a> {{readonlyInline}} {{Experimental_Inline}}</dt>
  <dd>Un <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> représentant la valeur temporelle égale au temps immédiatement avant que l'agent utilisateur ne lance l'événement de déchargement du document précédent.</dd>
</dl>

<h2 id="Methods">Méthodes</h2>

<dl>
  <dt><a href="/fr/docs/Web/API/PerformanceNavigationTiming/toJSON"><code>PerformanceNavigationTiming.toJSON()</code></a> {{Experimental_Inline}}</dt>
  <dd>Retourne une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui est la représentation JSON de l'objet <a href="/fr/docs/Web/API/PerformanceNavigationTiming"><code>PerformanceNavigationTiming</code></a>.</dd>
</dl>

<h2 id="Specifications">Spécifications</h2>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Spécifications</th>
      <th scope="col">Statut</th>
      <th scope="col">Commentaire</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{SpecName('Navigation Timing Level 2', '#sec-PerformanceNavigationTiming', 'PerformanceNavigationTiming')}}</td>
      <td>{{Spec2('Navigation Timing Level 2')}}</td>
      <td>Définition initiale.</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.PerformanceNavigationTiming")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/API/Performance/navigation"><code>Performance.navigation</code></a></li>
  <li><a href="/fr/docs/Web/API/PerformanceNavigation"><code>PerformanceNavigation</code></a></li>
</ul>
