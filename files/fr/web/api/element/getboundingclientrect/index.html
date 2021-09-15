---
title: Element.getBoundingClientRect()
slug: Web/API/Element/getBoundingClientRect
tags:
  - API
  - Boundary
  - Bounding
  - Bounds
  - CSSOM View
  - Client
  - Containing
  - DOM
  - Element
  - Enclosing
  - Method
  - Méthode
  - Minimum
  - Rectangle
  - Reference
  - Smallest
  - clientHeight
  - getBoundingClientRect
  - getClientRects
  - offsetHeight
  - scrollHeight
translation_of: Web/API/Element/getBoundingClientRect
---
<div>{{APIRef("DOM")}}</div>

<p>La méthode <code><strong>Element.getBoundingClientRect()</strong></code> retourne un objet {{domxref("DOMRect")}} fournissant des informations sur la taille d'un élément et sa position relative par rapport à la <a href="/fr/docs/Glossary/Viewport">zone d'affichage</a>.</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="brush:js"><var>objetRect</var> = <var>object</var>.getBoundingClientRect();</pre>

<h3 id="Return_value">Valeur de retour</h3>

<p>La valeur de retour est un objet {{domxref("DOMRect")}} qui est le plus petit rectangle contenant l'élément en entier, incluant sa zone de remplissage et la largeur de sa bordure. Les propriétés <code>left</code>, <code>top</code>, <code>right</code>, <code>bottom</code>, <code>x</code>, <code>y</code>, <code>width</code>, et <code>height</code>, décrivent la position et la taille du rectangle en pixels. Les propriétés autres que <code>width</code> et <code>height</code> sont relatives au coin en haut à gauche de la zone d'affichage.<img alt="Schéma d'un élément dans sa zone de remplissage, décrivant les propriétés retournées par la méthode." src="element-box-diagram.png"></p>

<p>Les propriétés <code>width</code> et <code>height</code> de l'objet {{domxref("DOMRect")}} retourné par la méthode incluent le <code>padding</code> et <code>border-width</code>, et non pas seulement la largeur/hauteur du contenu. Avec le modèle standard de boîte, cela correspondrait à la propriété <code>width</code> ou <code>height</code> de l'élément + <code>padding</code> + <code>border-width</code>. Mais si <code><a href="/fr/docs/Web/CSS/box-sizing">box-sizing: border-box</a></code> est défini pour l'élément, cela correpondrait seulement <code>width</code> ou <code>height</code>.</p>

<p>La valeur retournée peut être conceptualisée comme l'union des rectangles retournés par {{domxref("Element.getClientRects", "getClientRects()")}} pour l'élément, i.e. les boîtes de bordure CSS associées à l'élément.</p>

<p>Les boîtes de bordure vides sont complètement ignorées. Si toutes les boîtes de bordure associées à l'élément sont vides, la méthode renvoie alors un rectangle pour lequel <code>width</code> et <code>height</code> valent 0 et où <code>top</code> et <code>left</code> correspondent au coin en haut à gauche de la première boîte de bordure (dans l'ordre du contenu) de l'élément.</p>

<p>La distance de défilement qui a été parcourue dans la zone d'affichage (ou n'importe quel élément que l'on peut faire défiler) est prise en compte pour calculer le rectangle de délimitation. Cela signifie que les côtés du rectangle de délimitation (<code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code>) change ses valeurs à chaque fois que la position de défilement change (parce que les valeurs sont relatives à la zone d'affichage et ne sont pas absolues).</p>

<p>Si vous avez besoin d'un rectangle de délimitation relatif au coin supérieur gauche du document, ajoutez simplement la position actuelle de défilement aux propriétés <code>top</code> et <code>left</code> (elles peuvent être obtenues en utilisant {{domxref("window.scrollX")}} et {{domxref("window.scrollY")}}) pour avoir un rectangle de délimitation indépendant de la position de défilement actuelle.</p>

<h3 id="Cross-browser_fallback">Solution de prise en charge multi-navigateurs</h3>

<p>Les scripts qui doivent avoir une haute compatibilité pour l'ensemble des navigateurs peuvent utiliser <code>window.pageXOffset</code> et <code>window.pageYOffset</code> plutôt que <code>window.scrollX</code> et <code>window.scrollY.</code> Les scripts qui ne peuvent pas utiliser <code>window.pageXOffset</code>, <code>window.pageYOffset</code>, <code>window.scrollX</code> ou <code>window.scrollY</code> pourront utiliser cette méthode :</p>

<pre class="brush:js">// Pour scrollX
(((t = document.documentElement) || (t = document.body.parentNode))
  &amp;&amp; typeof t.ScrollLeft == 'number' ? t : document.body).ScrollLeft
// Pour scrollY
(((t = document.documentElement) || (t = document.body.parentNode))
  &amp;&amp; typeof t.ScrollTop == 'number' ? t : document.body).ScrollTop
</pre>

<h2 id="Example">Exemple</h2>

<p>Ce simple exemple récupère l'objet <code>DOMRect</code> représentant le rectangle de délimitation dans le client d'un simple élément div, et affiche ses propriétés dessous.</p>

<pre class="brush:html">&lt;div&gt;&lt;/div&gt;</pre>

<pre class="brush:css">div {
  width: 400px;
  height: 200px;
  padding: 20px;
  margin: 50px auto;
  background: purple;
}</pre>

<pre class="brush:js">let <var>elem</var> = document.querySelector('div');
let <var>rect</var> = elem.getBoundingClientRect();
for (let <var>key</var> in rect) {
  if(typeof rect[key] !== 'function') {
    let <var>para</var> = document.createElement('p');
    para.textContent  = `${ key } : ${ rect[key] }`;
    document.body.appendChild(para);
  }
}</pre>

<p>{{EmbedLiveSample('Example', '100%', 640)}}</p>

<p>Remarquez comme les <code>width</code>/<code>height</code> sont égales à
  <code>width</code>/<code>height</code> + <code>padding</code>.</p>

<p>Remarquez aussi que les valeurs de <code>x</code>/<code>left</code>,
  <code>y</code>/<code>top</code>, <code>right</code>, et <code>bottom</code> sont égales à la distance absolue depuis le bord de la zone d'affichage jusqu'au coté de l'element dans chaque cas.</p>

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
   <td>{{SpecName("CSSOM View", "#dom-element-getboundingclientrect", "Element.getBoundingClientRect()")}}</td>
   <td>{{Spec2("CSSOM View")}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h3 id="Notes">Notes</h3>

<p>L'objet <code>DOMRect</code> retourné peut être modifié dans les navigateurs modernes. Cela n'était pas le cas avec ceux plus anciens qui retournaient effectivement <code>DOMRectReadOnly</code>. Dans IE et Edge, ne pas pouvoir ajouter les propriétés manquantes à l'objet <a href="https://msdn.microsoft.com/en-us/library/hh826029(VS.85).aspx">ClientRect </a>qu'ils retournent empêche d'ajouter le support de <code>x</code> et <code>y</code>.</p>

<p>En raison de problèmes de compatibilité (voir ci-dessous), il est plus sûr de se limiter aux propriétés <code>top</code>, <code>left</code>, <code>right</code>, et <code>bottom</code>.</p>

<p>Les propriétés dans l'objet <code>DOMRect</code> retourné ne sont pas possèdées pas ce dernier. Tandis que les opérateurs <code>in</code> et <code>for...in</code> vont trouver les propriétés retournées, les autres APIs comme Object.keys échoueront. De plus, et de façon inattendue, les fonctionnalités ES2015 et plus récentes telles que <code>Object.assign()</code> et les paramètres du reste / la décomposition d'un objet, ne réussiront pas à copier les propriétés retournées.</p>

<pre class="brush:js">rect = elt.getBoundingClientRect()
// The result in emptyObj is {}
emptyObj = Object.assign({}, rect)
emptyObj = { ...rect }
{ width, ...emptyObj } = rect</pre>

<p>Les propriétés <code>top</code>, <code>left</code>, <code>right</code>, et <code>bottom</code> de <code>DOMRect</code> sont calculées en utilisant les valeurs des autres propriétés de l'objet.</p>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<div>{{Compat("api.Element.getBoundingClientRect")}}</div>

<h2 id="See_also">Voir aussi</h2>

<ul>
 <li>{{domxref("Element.getClientRects", "getClientRects()")}}</li>
 <li><a href="https://msdn.microsoft.com/en-us/library/ms536433(VS.85).aspx">MSDN: <code>getBoundingClientRect</code></a></li>
 <li><a href="https://msdn.microsoft.com/en-us/library/hh826029(VS.85).aspx">MSDN: <code>ClientRect</code></a>, une version plus ancienne de <code>DOMRect</code></li>
</ul>
