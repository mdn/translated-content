---
title: DOMImplementation.createDocument()
slug: Web/API/DOMImplementation/createDocument
---

{{ApiRef("DOM")}}

La méthode **`DOMImplementation.createDocument()`** crée et retourne un {{domxref("XMLDocument")}}.

## Syntaxe

```js
doc = document.implementation.createDocument(
  namespaceURI,
  qualifiedNameStr,
  documentType,
);
```

### Paramètres

- _namespaceURI_
  - : Est une {{domxref("DOMString")}} _(chaîne de caractères)_ contenant l'URI de l'espace de noms du document à créer, `ou null` si le document n'appartient à aucun espace de noms.

<!---->

- _qualifiedNameStr_
  - : Est une {{domxref("DOMString")}} _(chaîne de caractères)_ contenant le nom qualifié, c'est-à-dire optionnellement un préfixe et deux points, plus le nom local de l'élément racine, du document à créer.

<!---->

- _documentType_ {{optional_inline}}
  - : Est le [`DocumentType`](/fr/docs/Web/API/DocumentType) du document à créer. Vaut `null` par défaut.

<!---->

## Exemple

```js
var doc = document.implementation.createDocument(
  "http://www.w3.org/1999/xhtml",
  "html",
  null,
);
var body = document.createElementNS("http://www.w3.org/1999/xhtml", "body");
body.setAttribute("id", "abc");
doc.documentElement.appendChild(body);
alert(doc.getElementById("abc")); // [objet HTMLBodyElement]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{domxref("DOMImplementation")}} à laquelle la méthode appartient.
