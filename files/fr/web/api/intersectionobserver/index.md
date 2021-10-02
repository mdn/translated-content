---
title: IntersectionObserver
slug: Web/API/IntersectionObserver
tags:
  - API
  - Interface
  - Intersection Observer API
  - IntersectionObserver
  - Reference
  - observers
translation_of: Web/API/IntersectionObserver
---
<div>{{APIRef("Intersection Observer API")}}</div>

<p>L'interface <code><strong>IntersectionObserver</strong></code> de l'<a href="/fr/docs/Web/API/Intersection_Observer_API">API <i>Intersection Observer</i></a> fournit un moyen d'observer de manière asynchrone les changements d'intersection d'un élément cible avec un élément ancêtre ou avec la fenêtre du document (<a href="/fr/docs/Glossary/Viewport"><i>viewport</i></a>). L'ancêtre ou la fenêtre du document est alors appelé racine dans ce contexte.</p>

<p>Lorsqu'un objet implémentant <code>IntersectionObserver</code> est créé, il est configuré pour surveiller des ratios donnés de visibilité au sein de la racine. La configuration ne peut être changée après initialisation de l'<code>IntersectionObserver</code>. Ainsi un certain observateur ne sera utile que pour surveiller certains changements spécifiques de visibilité ; toutefois, on peut observer de multiples éléments avec un unique observateur.</p>

<h2 id="constructor">Constructeur</h2>

<dl>
 <dt><a href="/fr/docs/Web/API/IntersectionObserver/IntersectionObserver"><code>IntersectionObserver.IntersectionObserver()</code></a> {{Experimental_inline}}</dt>
 <dd>Crée un nouvel objet <code>IntersectionObserver</code> qui exécutera une fonction de rappel lorsqu'il détectera que la visibilité de l'élément cible a franchi un ou plusieurs seuils.</dd>
</dl>

<h2 id="properties">Propriétés</h2>

<dl>
 <dt><a href="/fr/docs/Web/API/IntersectionObserver/root"><code>IntersectionObserver.root</code></a> {{readonlyinline}} {{Experimental_inline}}</dt>
 <dd>L'<a href="/fr/docs/Web/API/Element">élément</a> ou le <a href="/fr/docs/Web/API/Document">document</a> dont les limites sont utilisées comme boîte englobante pour le test de l'intersection. Si aucune racine n'est passée au constructeur ou que sa valeur est <code>null</code>, c'est la zone d'affichage (<i>viewport</i>) de plus haut niveau qui est utilisée.</dd>
 <dt><a href="/fr/docs/Web/API/IntersectionObserver/rootMargin"><code>IntersectionObserver.rootMargin</code></a> {{readonlyinline}} {{Experimental_inline}}</dt>
 <dd>Un rectangle de décalage appliqué à <a href="/fr/docs/Glossary/bounding_box">la boîte englobante</a> de la racine lors du calcul des intersections. La zone de la racine est ainsi réduite ou étendue pour les calculs. La valeur renvoyée par cette propriété peut différer de celle spécifiée lors de l'appel du constructeur, car elle peut être modifiée pour répondre aux exigences internes. Chaque décalage peut être exprimé en pixels (px) ou en pourcentage (%). La valeur par défaut est <code>"0px 0px 0px 0px"</code>.</dd>
 <dt><a href="/fr/docs/Web/API/IntersectionObserver/thresholds"><code>IntersectionObserver.thresholds</code></a> {{readonlyinline}} {{Experimental_inline}}</dt>
 <dd>Une liste de seuils, triée par ordre numérique croissant, où chaque seuil est un rapport de la surface d'intersection à la surface de la zone de délimitation de l'élément observé. Les notifications pour une cible sont émises dès lors qu'un seuil au moins est franchi pour cette cible. Si aucune valeur n'est donnée, 0 est utilisé comme seuil par défaut.</dd>
</dl>

<h2 id="methods">Méthodes</h2>

<dl>
 <dt><a href="/fr/docs/Web/API/IntersectionObserver/disconnect"><code>IntersectionObserver.disconnect()</code></a> {{Experimental_inline}}</dt>
 <dd>Indique à l'objet <code>IntersectionObserver</code> de ne plus observer aucune cible.</dd>
 <dt><a href="/fr/docs/Web/API/IntersectionObserver/observe"><code>IntersectionObserver.observe()</code></a> {{Experimental_inline}}</dt>
 <dd>Indique à l'objet <code>IntersectionObserver</code> un nouvel élément à observer.</dd>
 <dt><a href="/fr/docs/Web/API/IntersectionObserver/takeRecords"><code>IntersectionObserver.takeRecords()</code></a> {{Experimental_inline}}</dt>
 <dd>Retourne un tableau d'objets <a href="/fr/docs/Web/API/IntersectionObserverEntry"><code>IntersectionObserverEntry</code></a> pour toutes les cibles observées et cesse de surveiller chacune d'elles.</dd>
 <dt><a href="/fr/docs/Web/API/IntersectionObserver/unobserve"><code>IntersectionObserver.unobserve()</code></a> {{Experimental_inline}}</dt>
 <dd>Indique à l'objet <code>IntersectionObserver</code> de cesser d'observer un élément cible particuler.</dd>
</dl>

<h2 id="example">Exemple</h2>

<pre class="brush: js">var intersectionObserver = new IntersectionObserver(function(entries) {
  // Si intersectionRatio vaut 0 ou moins, la cible
  // est hors de vue et rien n'est alors fait
  if (entries[0].intersectionRatio &lt;= 0) return;

  loadItems(10);
  console.log('Nouveaux éléments chargés');
});
// début de l'observation
intersectionObserver.observe(document.querySelector('.scrollerFooter'));</pre>

<h2 id="specifications">Spécifications</h2>

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
      <td>{{SpecName('IntersectionObserver')}}</td>
      <td>{{Spec2('IntersectionObserver')}}</td>
      <td></td>
    </tr>
  </tbody>
</table>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IntersectionObserver")}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/API/MutationObserver"><code>MutationObserver</code></a></li>
  <li><a href="/fr/docs/Web/API/PerformanceObserver"><code>PerformanceObserver</code></a></li>
  <li><a href="/fr/docs/Web/API/ResizeObserver"><code>ResizeObserver</code></a></li>
</ul>
