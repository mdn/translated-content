---
title: Tester les requêtes média en JavaScript
slug: Web/CSS/Media_Queries/Testing_media_queries
tags:
  - Avancé
  - CSS
  - DOM
  - Guide
translation_of: Web/CSS/Media_Queries/Testing_media_queries
original_slug: Web/CSS/Requêtes_média/Tester_les_media_queries
---
<div>{{CSSRef}}</div>

<p>Le {{Glossary("DOM")}} fournit un certain nombre de fonctionnalités qui permettent de tester les résultats d'une requête média (<em>media query</em>) avec un script. Pour cela, on utilise l'interface {{domxref("MediaQueryList")}} ainsi que ses méthodes et ses propriétés. Une fois qu'on a créé un objet {{domxref("MediaQueryList") }}, on peut vérifier le résultat de la requête ou également recevoir des notifications automatiques lorsque le résultat de la requête change.</p>

<h2 id="Créer_une_liste_de_requêtes_média">Créer une liste de requêtes média</h2>

<p>Avant d'évaluer les résultats d'une requête, on doit créer un objet {{domxref("MediaQueryList")}} qui représente la requête média. Pour cela, on utilisera la méthode {{domxref("window.matchMedia")}}.</p>

<p>Ainsi, si on veut avoir une liste de requête qui détermine si l'appareil utilisé est orienté en portrait ou en paysage, on pourra écrire :</p>

<pre class="brush: js">var mql = window.matchMedia("(orientation: portrait)");
</pre>

<h2 id="Vérifier_le_résultat_d'une_requête">Vérifier le résultat d'une requête</h2>

<p>Une fois que la liste de requêtes média a été créée, on peut vérifier le résultat de la requête grâce à la propriété <code>matches</code> qui représente les résultat de la requête :</p>

<pre class="brush: js">if (mql.matches) {
  /* La zone d'affichage/viewport est en portrait */
} else {
  /* La zone d'affichage/viewport est en paysage */
}
</pre>

<h2 id="Recevoir_des_notifications_liées_à_la_requête">Recevoir des notifications liées à la requête</h2>

<p>Afin de savoir lorsque l'évaluation d'une requête a changé, il sera plus efficace de déclarer un <em>listener</em> plutôt que d'interroger sans cesse le résultat. Pour cela, on pourra utiliser la méthode <code>addListener()</code> sur l'objet {{domxref("MediaQueryList")}} et définir un observateur qui implémente l'interface {{domxref("MediaQueryListListener")}} :</p>

<pre class="brush: js">var mql = window.matchMedia("(orientation: portrait)");
mql.addListener(handleOrientationChange);
handleOrientationChange(mql);
</pre>

<p>Ce code crée la liste de requêtes média qui teste l'orientation (l'objet <code>mql</code>) puis ajoute un <em>listener</em>. Une fois qu'on a ajouté le <em>listener</em>, on l'invoque une fois. Cela permet d'ajuster l'état initial du <em>listener</em> selon l'orientation de l'appareil (sinon, le code aurait considéré que l'appareil était en portrait par défaut même si ce dernier était en paysage, ce qui aurait engendré des incohérences).</p>

<p>La méthode <code>handleOrientationChange()</code> qu'on implémente ensuite consulte le résultat de la requête et gère le cas où l'orientation est modifiée :</p>

<pre class="brush: js">function handleOrientationChange(mql) {
  if (mql.matches) {
    /* La zone d'affichage/viewport est en portrait */
  } else {
    /* La zone d'affichage/viewport est en paysage */
  }
}
</pre>

<h2 id="Terminer_la_réception_des_notifications">Terminer la réception des notifications</h2>

<p>Lorsqu'on ne souhaite plus recevoir de notifications sur les modifications apportées à la valeur de la requête média, on pourra simplement utiliser <code>removeListener()</code> sur l'objet  {{domxref("MediaQueryList") }} :</p>

<pre class="brush: js">mql.removeListener(handleOrientationChange);
</pre>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<h3 id="Interface_MediaQueryList">Interface <code>MediaQueryList</code></h3>

<p>{{Compat("api.MediaQueryList")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/CSS/Requêtes_média/Utiliser_les_Media_queries" title="CSS/Media queries">Les requêtes média (<em>media queries</em>)</a></li>
 <li>{{domxref("window.matchMedia()")}}</li>
 <li>{{domxref("MediaQueryList")}}</li>
 <li>{{domxref("MediaQueryListEvent")}}</li>
</ul>
