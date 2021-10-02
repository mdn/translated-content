---
title: Document.releaseCapture()
slug: Web/API/Document/releaseCapture
tags:
  - API
  - Capture
  - DOM
  - Document
  - Méthodes
  - Souris
translation_of: Web/API/Document/releaseCapture
---
<div>{{ ApiRef("DOM") }} {{gecko_minversion_header("2.0")}}</div>

<div> </div>

<p>Libère la capture de la souris si elle est actuellement activée (<em>bouton gauche enfoncé</em>) sur un élément de ce document. L'activation de la capture de la souris sur un élément se fait en appelant {{domxref("element.setCapture()")}}.</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="syntaxbox">document.releaseCapture()
</pre>

<p>Une fois la capture de la souris relâchée, les événements de souris ne seront plus dirigés vers l'élément sur lequel la capture est activée.</p>

<h2 id="Example">Exemple</h2>

<p>Voir l'<a href="/en-US/docs/Web/API/element.setCapture#Example">exemple</a> pour {{domxref("element.setCapture()")}}.</p>

<h2 id="Specification">Spécifications</h2>

<p>Basé sur l'implémentation Internet Explorer.</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
 <li>{{domxref("element.setCapture()")}}</li>
</ul>
