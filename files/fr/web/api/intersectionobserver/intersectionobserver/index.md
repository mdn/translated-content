---
title: IntersectionObserver.IntersectionObserver()
slug: Web/API/IntersectionObserver/IntersectionObserver
tags:
  - API
  - Constructor
  - Intersection Observer API
  - IntersectionObserver
  - Reference
  - Visibility
  - Visible
translation_of: Web/API/IntersectionObserver/IntersectionObserver
---
<div>{{APIRef("Intersection Observer API")}}</div>

<p>Le constructeur <strong><code>IntersectionObserver()</code></strong> crée et retourne un nouvel objet <a href="/fr/docs/Web/API/IntersectionObserver"><code>IntersectionObserver</code></a>. Les marges appliquées à la zone racine (indiquée dans l'objet <code>options</code> via la propriété <code>rootMargin</code>, voir ci-après) sont vérifiées pour s'assurer de la validité de leur syntaxe. Il en va de même pour les seuils (propriété <code>thresholds</code> d'<code>options</code>) dont l'intervalle de validité (entre 0.0 et 1.0 inclus) et l'ordre (qui doit être croissant) sont vérifiés. Si la liste des seuils est vide, sa valeur par défaut est [0.0].</p>

<h2 id="syntax">Syntaxe</h2>

<pre class="syntaxbox">let <var>observer</var> = new IntersectionObserver(<var>callback</var>[, <var>options</var>]);</pre>

<h3 id="parameters">Paramètres</h3>

<dl>
  <dt><code>callback</code></dt>
  <dd>Une fonction appelée lorsque la proportion de l'élément qui est visible franchit un seuil. La fonction de rappel reçoit en entrée deux paramètres :
    <dl>
      <dt><code>entries</code></dt>
      <dd>Une liste d'objets <a href="/fr/docs/Web/API/IntersectionObserverEntry"><code>IntersectionObserverEntry</code></a>, chacun représentant un seuil franchi, que ce soit en passant au-dessus ou en dessous du pourcentage spécifié par le seuil.</dd>
      <dt><code>observateur</code></dt>
      <dd>L'objet <a href="/fr/docs/Web/API/IntersectionObserver"><code>IntersectionObserver</code></a> pour lequel la fonction de rappel est invoquée.</dd>
    </dl>
  </dd>
  <dt><code>options</code> {{optional_inline}}</dt>
  <dd>Un objet optionnel qui paramètre l'observateur. Si <code>options</code> n'est pas spécifié, l'observateur utilise la fenêtre du document comme racine, sans appliquer de marge, et avec un seuil de 0% (signifiant que le moindre changement d'un pixel suffira à déclencher la fonction de rappel). Les propriétés suivantes peuvent être utilisées pour la configuration :
    <dl>
      <dt><code>root</code></dt>
      <dd>Un objet <a href="/fr/docs/Web/API/Element"><code>Element</code></a> ou <a href="/fr/docs/Web/API/Document"><code>Document</code></a> qui est un ancêtre de l'élément observé et dont la boîte englobante sera considérée comme la zone d'affichage (<i>viewport</i>). Toute portion de l'élément cible qui n'est pas visible dans la zone couverte par cette zone englobant n'est pas considérée visible.</dd>
      <dt><code>rootMargin</code></dt>
      <dd>Une chaîne de caractères spécifiant un ensemble de décalages à ajouter à la zone englobante pour le calcul des intersections. La zone effective utilisées pour les calculs peut ainsi être réduite ou étendue. La syntaxe est proche de celle utilisée pour la propriété CSS <a href="/fr/docs/Web/CSS/margin"><code>margin</code></a>. Voir <a href="/fr/docs/Web/API/Intersection_Observer_API">L'élément racine et sa marge externe</a> pour plus d'informations sur le fonctionnement des marges et la syntaxe. Sa valeur par défaut est <code>"0px 0px 0px 0px"</code>.</dd>
      <dt><code>threshold</code></dt>
      <dd>Un nombre ou un tableau de nombres entre 0.0 et 1.0 (inclus), spécifiant des seuils définis comme ratios de la part visible d'un élément cible observé par rapport à sa surface totale. Une valeur de 0.0 signifie que tout pixel visible de l'élément le rend visible et 1.0 que l'entièreté de l'élément doit être visible. Voir <a href="/fr/docs/Web/API/Intersection_Observer_API#Thresholds">cette section sur les seuils</a> pour une description plus approfondie de l'usage des seuils d'intersection. Le seuil par défaut est 0.0.</dd>
    </dl>
  </dd>
</dl>

<h3 id="return_value">Valeur de retour</h3>

<p>Un nouvel objet <a href="/fr/docs/Web/API/IntersectionObserver"><code>IntersectionObserver</code></a> pouvant être utilisé pour observer la visibilité d'un élément cible au sein de la racine indiquée, pour le franchissement des seuils de visibilité spécifiés. Il faudra appeler la méthode <a href="/fr/docs/Web/API/IntersectionObserver/observe"><code>observe()</code></a> de l'objet pour commencer à observer effectivement les changements de visibilité d'un élément cible.</p>

<h3 id="exceptions">Exceptions</h3>

<dl>
  <dt><code>SyntaxError</code></dt>
  <dd>La propriété <code>rootMargin</code> de l'argument <code>options</code> est invalide.</dd>
  <dt><code>RangeError</code></dt>
  <dd>Une ou plusieurs des valeurs de <code>threshold</code> (portée par l'argument <code>options</code>) est en dehors de l'intervalle allant de 0.0 à 1.0.</dd>
</dl>

<h2 id="example">Exemple</h2>

<p>Cet exemple crée un nouvel observateur d'intersection qui appelle la fonction <code>myObserverCallback</code> chaque fois que la zone visible de l'élément observé change d'au moins 10%.</p>

<pre class="brush: js">let observer = new IntersectionObserver(myObserverCallback, {
  threshold: 0.1
});</pre>

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
      <td>{{SpecName('IntersectionObserver','#dom-intersectionobserver-intersectionobserver','IntersectionObserver constructor')}}</td>
      <td>{{Spec2('IntersectionObserver')}}</td>
      <td>Définition initiale.</td>
    </tr>
  </tbody>
</table>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IntersectionObserver.IntersectionObserver")}}</p>
