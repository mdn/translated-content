---
title: "Document : propriété body"
short-title: body
slug: Web/API/Document/body
l10n:
  sourceCommit: 79fdc26fea835d65c9361541bb8ab1896f307475
---

{{APIRef("DOM")}}

La propriété **`body`** de l'interface {{DOMxRef("Document")}} représente le nœud {{HTMLElement("body")}} ou {{HTMLElement("frameset")}} du document courant, ou `null` si aucun de ces éléments n'existe.

## Valeur

L'une des valeurs suivantes&nbsp;:

- {{DOMxRef("HTMLBodyElement")}}
- {{DOMxRef("HTMLFrameSetElement")}}
- `null`

## Exemples

```js
// Étant donné ce code HTML : <body id="ancienElementBody"></body>
alert(document.body.id); // "ancienElementBody"

const nouvelElementBody = document.createElement("body");

nouvelElementBody.id = "nouvelElementBody";
document.body = nouvelElementBody;
alert(document.body.id); // "nouvelElementBody"
```

## Notes

`document.body` est l'élément dans lequel le contenu du document est situé. Dans les documents avec un élément `<body>` celui-ci est retourné, et dans les documents de type frameset l'élément `<frameset>` le plus extérieur est retourné.

Bien que la propriété `body` soit modifiable, affecter un nouveau body à un document supprimera effectivement tous les enfants actuels de l'élément `<body>` existant.

## Spécification

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("document.head")}}
