---
title: DOMParser
slug: Web/API/DOMParser
tags:
  - API
  - DOM
  - HTML
  - SVG
  - XML
translation_of: Web/API/DOMParser
---
<p>{{APIRef("DOM")}}</p>

<p>L'interface <strong><code>DOMParser</code></strong> permet d'analyser le code source {{Glossary("XML")}} ou {{Glossary("HTML")}} d'une chaîne de caractères dans le DOM {{domxref("Document")}}.</p>

<p>Vous pouvez effectuer l'opération inverse - convertir un arbre DOM en source XML ou HTML - en utilisant l'interface {{domxref("XMLSerializer")}}.</p>

<p>Dans le cas d'un document HTML, vous pouvez également remplacer des parties du DOM par de nouveaux arbres DOM construits à partir de HTML en définissant la valeur des propriétés {{domxref("Element.innerHTML", "innerHTML")}} et {{domxref("Element.outerHTML", "outerHTML")}}. Ces propriétés peuvent également être lues pour récupérer les fragments HTML correspondant au sous-arbre DOM correspondant.</p>

<p>Notez que {{domxref("XMLHttpRequest")}} peut analyser le XML et le HTML directement à partir d'une ressource adressable par URL, en renvoyant un <code>Document</code> dans sa propriété {{domxref("XMLHttpRequest.response", "response")}}.</p>

<h2 id="Constructor">Constructeur</h2>

<dl>
  <dt>{{domxref("DOMParser.DOMParser","DOMParser()")}}</dt>
  <dd>Crée un nouvel objet <code>DOMParser</code>.</dd>
</dl>

<h2 id="Methods">Méthodes</h2>

<dl>
  <dt>{{domxref("DOMParser.parseFromString()")}}</dt>
  <dd>Analyse une chaîne de caractères à l'aide de l'analyseur HTML ou de l'analyseur XML, et retourne un {{domxref("HTMLDocument")}} ou {{domxref("XMLDocument")}}.</dd>
</dl>

<h2 id="Example">Exemple</h2>

<h3>Analyse syntaxique de XML, SVG et HTML</h3>

<p>Cet exemple montre comment analyser le XML, le SVG et le HTML. Notez qu'un type MIME de <code>text/html</code> invoquera l'analyseur HTML, et que tout autre type MIME accepté par cette méthode invoquera l'analyseur XML.</p>

<pre class="brush: js">const parser = new DOMParser();

const xmlString = "&lt;warning&gt;Attention au tigre&lt;/warning&gt;";
const doc1 = parser.parseFromString(xmlString, "application/xml");
// XMLDocument

const svgString = "&lt;circle cx=\"50\" cy=\"50\" r=\"50\"/&gt;";
const doc2 = parser.parseFromString(svgString, "image/svg+xml");
// XMLDocument

const htmlString = "&lt;strong&gt;Attention au léopard&lt;/strong&gt;";
const doc3 = parser.parseFromString(htmlString, "text/html");
// HTMLDocument

console.log(doc1.documentElement.textContent)
// "Attention au tigre"

console.log(doc2.firstChild.tagName);
// "circle"

console.log(doc3.body.firstChild.textContent);
// "Attention au léopard"
</pre>

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
      <td>{{SpecName('HTML WHATWG', '#dom-parsing-and-serialization', 'DOM parsing')}}
      </td>
      <td>{{Spec2('HTML WHATWG')}}</td>
      <td></td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.DOMParser", 3)}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li><a href="/efr/docs/Web/Guide/Parsing_and_serializing_XML">Analyse syntaxique et sérialisation du XML</a>
  </li>
  <li>{{domxref("XMLHttpRequest")}}</li>
  <li>{{domxref("XMLSerializer")}}</li>
  <li>{{jsxref("JSON.parse()")}} - contrepartie pour les documents {{jsxref("JSON")}}.</li>
</ul>
