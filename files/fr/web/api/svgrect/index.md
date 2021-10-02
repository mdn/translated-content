---
title: SVGRect
slug: Web/API/SVGRect
tags:
  - Rectangle
translation_of: Web/API/SVGRect
---
<h2 id="Interface_SVG_rect">Interface SVG rect</h2>

<p><code>SVGRect</code> représente la géométrie rectangulaire. Les rectangles consistent en une paire de coordonnées (x,y) correspondant à une valeur X minimale, une valeur Y minimale, et une largeur et hauteur, lesquelles sont habituellement positives.</p>

<p>Un objet <code>SVGRect </code>peut être marqué en lecture-seule, ce qui signifie que les tentatives de modification sur cet objet entraîneront un lancement d'exception.</p>

<h3 id="Vue_d'ensemble_de_l'interface">Vue d'ensemble de l'interface</h3>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="row">Implémente aussi</th>
   <td><em>Aucune</em></td>
  </tr>
  <tr>
   <th scope="row">Méthodes</th>
   <td><em>Aucune</em></td>
  </tr>
  <tr>
   <th scope="row">Propriétés</th>
   <td>
    <ul>
     <li>float <code>x</code></li>
     <li>float <code>y</code></li>
     <li>float <code>width</code></li>
     <li>float <code>height</code></li>
    </ul>
   </td>
  </tr>
  <tr>
   <th scope="row">Document normatif</th>
   <td><a href="http://www.w3.org/TR/SVG11/types.html#InterfaceSVGRect">SVG 1.1 (2nd Edition)</a></td>
  </tr>
 </tbody>
</table>

<h2 id="Propriétés">Propriétés</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th>Nom</th>
   <th>Type</th>
   <th>Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>x</code></td>
   <td>float</td>
   <td>La coordonnée <em>x</em> du rectangle, en unité utilisateur.</td>
  </tr>
  <tr>
   <td><code>y</code></td>
   <td>float</td>
   <td>La coordonnée <em>y</em> du rectangle, en unité utilisateur.</td>
  </tr>
  <tr>
   <td><code>width</code></td>
   <td>float</td>
   <td>La largeur <em>width</em> du rectangle, en unité utilisateur.</td>
  </tr>
  <tr>
   <td><code>height</code></td>
   <td>float</td>
   <td>La hauteur <em>height</em> du rectangle, en unité utilisateur.</td>
  </tr>
 </tbody>
</table>

<p><strong>Exceptions à l'affectation :</strong> une <code><a href="DOMException" rel="custom">DOMException</a></code> avec le code <code>NO_MODIFICATION_ALLOWED_ERR</code> est levée lors d'une tentative de modification d'un attribut en lecture-seule.</p>

<h2 id="Méthodes">Méthodes</h2>

<p>L'interface <code>SVGRect</code> ne fournit pas de méthode spécifique.</p>

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
      <td>{{SpecName("Geometry Interfaces", "#DOMRect", "DOMRect")}}</td>
      <td>{{Spec2("Geometry Interfaces")}}</td>
      <td>Changement de SVGRect en tant qu'ancien alias de DOMRect.</td>
    </tr>
    <tr>
      <td>{{SpecName("SVG1.1", "types.html#InterfaceSVGRect", "SVGRect")}}</td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Définition initiale</td>
    </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.SVGRect")}}</p>
