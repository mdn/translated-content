---
title: IntersectionObserver.rootMargin
slug: Web/API/IntersectionObserver/rootMargin
tags:
  - API
  - Intersection Observer
  - Intersection Observer API
  - IntersectionObserver
  - Property
  - Reference
  - rootMargin
translation_of: Web/API/IntersectionObserver/rootMargin
---
<div>{{APIRef("Intersection Observer API")}}{{SeeCompatTable}}</div>

<p>La propriété <strong><code>rootMargin</code></strong> est une propriété en lecture seule de l'interface <a href="/fr/docs/Web/API/IntersectionObserver"><code>IntersectionObserver</code></a>. C'est une chaîne de caractères avec une syntaxe similaire à celle de la propriété CSS <a href="/fr/docs/Web/CSS/margin"><code>margin</code></a>. Chaque côté de la zone rectangulaire représentée par <code>rootMargin</code> est ajouté au côté correspondant de la boîte englobante de la <a href="/fr/docs/Web/API/IntersectionObserver/root">racine</a> de l'élément avant que le test d'intersection soit effectué. Cela permet, par exemple, d'ajuster les limites vers l'extérieur afin que l'élément cible soit considéré comme entièrement visible même si un certain nombre de pixels en largeur ou en hauteur sont rognés, ou encore pour traiter la cible comme partiellement masquée si une bordure est trop proche de celle de la boîte englobante de l'élément racine.</p>

<p>Voir <a href="/fr/docs/Web/API/Intersection_Observer_API">la section sur l'élément racine et sa marge externe</a> pour une explication plus approfondie à propos de la marge externe de l'élément racine et son fonctionnement.</p>

<h2 id="syntax">Syntaxe</h2>

<pre class="syntaxbox"><var>marginString</var> = IntersectionObserver.rootMargin;</pre>

<h3 id="value">Valeur</h3>

<p>Une chaîne de caractères, formatée d'une manière similaire à la valeur de la propriété CSS <a href="/fr/docs/Web/CSS/margin"><code>margin</code></a>, contenant les décalages pour un ou plusieurs côtés de la boîte englobante de l'élément racine. Ces décalages sont ajoutés aux valeurs correspondantes de la boîte englobante de l'élément racine avant le calcul de l'intersection entre la zone rectangulaire résultante et celle couverte par l'élément cible.</p>

<p>La chaîne de caractères renvoyée par cette propriété peut ne pas correspondre à celle spécifiée lors de l'initialisation de l'<a href="/fr/docs/Web/API/IntersectionObserver"><code>IntersectionObserver</code></a>. Le navigateur a la possibilité de modifier la valeur.</p>

<p>Si <code>rootMargin</code> n'est pas spécifiée à l'initialisation de l'objet, sa valeur par défaut vaudra <code>"0px 0px 0px 0px"</code>, signifiant que l'intersection sera calculée entre les limites non modifiées de l'élément racine et celles de l'élément cible. <a href="/fr/docs/Web/API/Intersection_Observer_API">La section sur l'élément racine et sa marge externe</a> décrit avec plus de détails comment <code>rootMargin</code> est utilisée.</p>

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
      <td>{{SpecName('IntersectionObserver', '#dom-intersectionobserver-rootMargin', 'IntersectionObserver.rootMargin')}}</td>
      <td>{{Spec2('IntersectionObserver')}}</td>
      <td>Définition initiale.</td>
    </tr>
  </tbody>
</table>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IntersectionObserver.rootMargin")}}</p>
