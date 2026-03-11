---
title: "Document : propriété head"
short-title: head
slug: Web/API/Document/head
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("DOM")}}

La propriété en lecture seule **`head`** de l'interface {{DOMxRef("Document")}} retourne l'élément HTML {{HTMLElement("head")}} du document courant.

## Valeur

Un objet {{DOMxRef("HTMLHeadElement")}}.

## Exemples

```html
<!doctype html>
<head id="mon-entete-de-document">
  <title>Exemple : utilisation de document.head</title>
</head>
```

```js
const enTete = document.head;

console.log(enTete.id); // "mon-entete-de-document";
console.log(enTete === document.querySelector("head")); // true
```

## Notes

`document.head` est en lecture seule. Essayer d'assigner une valeur à cette propriété échouera en silence ou, en [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode), lèvera une erreur de type ({{JSxRef("TypeError")}}).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("document.body")}}
