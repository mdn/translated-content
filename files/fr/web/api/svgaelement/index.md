---
title: SVGAElement
slug: Web/API/SVGAElement
tags:
  - API
  - Reference
  - SVG
  - SVG DOM
  - WebAPI
translation_of: Web/API/SVGAElement
---
<h2 id="SVG_a_DOM_interface">SVG a DOM interface</h2>
<p>L'interface <code>SVGAElement </code>fournit un accès aux propriétés des éléments {{ SVGElement("a") }} ainsi qu'aux méthodes pour les manipuler.</p>
<h3 id="Interface_overview">Interface overview</h3>
<table class="standard-table">
 <tbody>
  <tr>
   <th scope="row">Egalement implémenté</th>
   <td>{{ domxref("SVGElement") }}, {{ domxref("SVGURIReference") }}, {{ domxref("SVGTests") }}, {{ domxref("SVGLangSpace") }}, {{ domxref("SVGExternalResourcesRequired") }}, {{ domxref("SVGStylable") }}, {{ domxref("SVGTransformable") }}</td>
  </tr>
  <tr>
   <th scope="row">Methodes</th>
   <td><em>Aucune</em></td>
  </tr>
  <tr>
   <th scope="row">Propriétés</th>
   <td>
    <ul>
     <li>lectureseule{{ domxref("SVGAnimatedString") }} <code>cible</code></li>
    </ul>
   </td>
  </tr>
  <tr>
   <th scope="row">Document Normative</th>
   <td><a href="http://www.w3.org/TR/SVG11/linking.html#InterfaceSVGAElement">SVG 1.1 (2nd Edition)</a></td>
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
   <td><code>cible</code></td>
   <td>{{ domxref("SVGAnimatedString") }}</td>
   <td>Correspond à attribuer {{ SVGAttr("cible") }} sur l'élément {{ SVGElement("a") }} donné.</td>
  </tr>
 </tbody>
</table>

<h2 id="Methodes">Methodes</h2>

<p>L'interface <code>SVGAElement</code> ne fournit aucune méthode spécifique.</p>

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
      <td>{{SpecName("SVG2", "linking.html#InterfaceSVGAElement")}}</td>
      <td>{{Spec2("SVG2")}}</td>
      <td>Remplacement de l'héritage de {{domxref("SVGElement")}} par {{domxref("SVGGraphicsElement")}} et suppression des implémentations d'interface de {{domxref("SVGTests")}}, {{domxref("SVGLangSpace")}}, {{domxref("SVGExternalResourcesRequired")}}, {{domxref("SVGStylable")}}, et {{domxref("SVGTransformable")}} par {{domxref("HTMLHyperlinkElementUtils")}}</td>
    </tr>
    <tr>
      <td>{{SpecName("SVG1.1", "linking.html#InterfaceSVGAElement")}}</td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Définition initiale</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.SVGAElement")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li>{{ SVGElement("a") }} SVG Element</li>
</ul>
