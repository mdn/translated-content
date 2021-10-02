---
title: IntersectionObserver.root
slug: Web/API/IntersectionObserver/root
tags:
  - API
  - Intersection Observer
  - Intersection Observer API
  - IntersectionObserver
  - Property
  - Reference
  - root
translation_of: Web/API/IntersectionObserver/root
---
<div>{{APIRef("Intersection Observer API")}}</div>

<p>La propriété en lecture seule <strong><code>root</code></strong> de l'interface <a href="/fr/docs/Web/API/IntersectionObserver"><code>IntersectionObserver</code></a> identifie l'<a href="/fr/docs/Web/API/Element"><code>Element</code></a> ou le <a href="/fr/docs/Web/API/Document"><code>Document</code></a> dont les bornes sont considérées comme la zone englobante (<i>bounding box</i>) de la zone d'affichage (<i>viewport</i>) au sein de laquelle les intersections avec la cible sont observées. Si <code>root</code> vaut <code>null</code>, ce sont les limites de la zone d'affichage (<i>viewport</i>) courantes qui sont utilisées.</p>

<h2 id="syntax">Syntaxe</h2>

<pre class="syntaxbox"><var>root</var> = IntersectionObserver.root;</pre>

<h3 id="value">Valeur</h3>

<p>Un objet <a href="/fr/docs/Web/API/Element"><code>Element</code></a> ou <a href="/fr/docs/Web/API/Document"><code>Document</code></a> dont la boîte englobante est utilisée pour définir les limites de la zone de visibilité utilisée pour déterminer la proportion de l'élément cible qui est visible. L'intersection de ce rectangle délimiteur, décalé par toute marge spécifiée au moyen des options passées au constructeur de l'<a href="/fr/docs/Web/API/IntersectionObserver/IntersectionObserver"><code>IntersectionObserver()</code></a> (voir <code>options.rootMargin</code>), les limites de la zone recouverte par l'élément cible, moins les limites de la zone recouverte par chaque élément ou autre objet chevauchant l'élément cible, est considéré comme la partie visible de l'élément.</p>

<p>Si <code>root</code> vaut <code>null</code>, ce sera le document parent qui sera considéré comme racine et la zone d'intersection sera la zone d'affichage (<i>viewport</i>).</p>

<h2 id="example">Exemple</h2>

<p>Cet exemple définit la propriété <a href="/fr/docs/Web/CSS/border"><code>border</code></a> de l'élément racine de l'observateur d'intersection comme une ligne verte moyenne de 2 pixels grâce aux propriétés exposées par CSSOM.</p>

<pre class="brush: js">observer.root.style.border = "2px solid #44aa44";</pre>

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
      <td>{{SpecName('IntersectionObserver', '#dom-intersectionobserver-root', 'IntersectionObserver')}}</td>
      <td>{{Spec2('IntersectionObserver')}}</td>
      <td>Définition initiale.</td>
    </tr>
  </tbody>
</table>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IntersectionObserver.root")}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/API/Intersection_Observer_API/Timing_element_visibility">Mesurer la visibilité d'un élément dans le temps l'API <i>Intersection Observer</i></a></li>
</ul>
