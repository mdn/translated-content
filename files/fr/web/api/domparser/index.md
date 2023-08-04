---
title: DOMParser
slug: Web/API/DOMParser
---

{{APIRef("DOM")}}

L'interface **`DOMParser`** permet d'analyser le code source {{Glossary("XML")}} ou {{Glossary("HTML")}} d'une chaîne de caractères dans le DOM {{domxref("Document")}}.

Vous pouvez effectuer l'opération inverse - convertir un arbre DOM en source XML ou HTML - en utilisant l'interface {{domxref("XMLSerializer")}}.

Dans le cas d'un document HTML, vous pouvez également remplacer des parties du DOM par de nouveaux arbres DOM construits à partir de HTML en définissant la valeur des propriétés {{domxref("Element.innerHTML", "innerHTML")}} et {{domxref("Element.outerHTML", "outerHTML")}}. Ces propriétés peuvent également être lues pour récupérer les fragments HTML correspondant au sous-arbre DOM correspondant.

Notez que {{domxref("XMLHttpRequest")}} peut analyser le XML et le HTML directement à partir d'une ressource adressable par URL, en renvoyant un `Document` dans sa propriété {{domxref("XMLHttpRequest.response", "response")}}.

## Constructeur

- {{domxref("DOMParser.DOMParser","DOMParser()")}}
  - : Crée un nouvel objet `DOMParser`.

## Méthodes

- {{domxref("DOMParser.parseFromString()")}}
  - : Analyse une chaîne de caractères à l'aide de l'analyseur HTML ou de l'analyseur XML, et retourne un {{domxref("HTMLDocument")}} ou {{domxref("XMLDocument")}}.

## Exemple

### Analyse syntaxique de XML, SVG et HTML

Cet exemple montre comment analyser le XML, le SVG et le HTML. Notez qu'un type MIME de `text/html` invoquera l'analyseur HTML, et que tout autre type MIME accepté par cette méthode invoquera l'analyseur XML.

```js
const parser = new DOMParser();

const xmlString = "<warning>Attention au tigre</warning>";
const doc1 = parser.parseFromString(xmlString, "application/xml");
// XMLDocument

const svgString = '<circle cx="50" cy="50" r="50"/>';
const doc2 = parser.parseFromString(svgString, "image/svg+xml");
// XMLDocument

const htmlString = "<strong>Attention au léopard</strong>";
const doc3 = parser.parseFromString(htmlString, "text/html");
// HTMLDocument

console.log(doc1.documentElement.textContent);
// "Attention au tigre"

console.log(doc2.firstChild.tagName);
// "circle"

console.log(doc3.body.firstChild.textContent);
// "Attention au léopard"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Analyse syntaxique et sérialisation du XML](/fr/docs/Web/Guide/Parsing_and_serializing_XML)
- {{domxref("XMLHttpRequest")}}
- {{domxref("XMLSerializer")}}
- {{jsxref("JSON.parse()")}} - contrepartie pour les documents {{jsxref("JSON")}}.
