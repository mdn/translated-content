---
title: document.implementation
slug: Web/API/Document/implementation
tags:
  - API
  - DOM
  - Propriétés
  - Reference
translation_of: Web/API/Document/implementation
---
<h2 id="Résumé">Résumé</h2>

<p>Retourne un objet {{domxref("DOMImplementation")}} associé avec le document courant.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>DOMImpObj</var> = document.implementation;
</pre>

<h2 id="Exemple">Exemple</h2>

<pre class="brush: js">var modName = "HTML";
var modVer = "2.0";
var conformTest = document.implementation.hasFeature( modName, modVer );

alert( "DOM " + modName + " " + modVer + " supported?: " + conformTest );

// alerte avec : "DOM HTML 2.0 pris en charge ?: true" si le module DOM niveau 2 HTML est pris en charge.</pre>

<p>Une liste de noms de modules (par exemple, Core, HTML, XML, etc.) est disponible dans la  <a href="http://www.w3.org/TR/DOM-Level-2-Core/introduction.html#ID-Conformance-h2">Conformance Section</a>  DOM niveau 2.</p>

<h2 id="Notes">Notes</h2>

<p>La recommandation DOM niveau 1 du W3C ne spécifiait que la méthode <code>hasFeature</code>, qui est un moyen de déterminer si un module DOM est supporté par un navigateur (voir l'exemple ci-dessus et ce que votre agent utilisateur prétend prendre en charge ?). Si disponibles, d'autres méthodes <code>DOMImplementation</code> fournissent des services pour contrôler des choses en dehors d'un document unique. Par exemple, l'interface <code>DOMImplementation</code> inclut une méthode <code>createDocumentType</code> avec laquelle des DTD peuvent être créées pour un ou plusieurs documents gérés par l'implémentation.</p>

<h2 id="Spécifications">Spécifications</h2>

<ul>
 <li><a href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-102161490">DOM Level 2 Core: implementation</a></li>
 <li><a href="http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-102161490">DOM Level 3 Core: implementation</a></li>
</ul>

<h2 id="Notes_propres_à_Gecko">Notes propres à Gecko</h2>

<ul>
 <li>À partir de Gecko 19.0 {{geckoRelease ("19.0")}} la méthode {{domxref ("DOMImplementation.hasFeature", "hasFeature")}} retournera toujours true.</li>
</ul>
