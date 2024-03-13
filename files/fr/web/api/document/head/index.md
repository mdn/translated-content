---
title: document.head
slug: Web/API/Document/head
---

Retourne l'élément {{HTMLElement("head")}} du document courant. S'il y a plus d'un élément \<head>, le premier est retourné.

## Syntaxe

```js
var objRef = document.head;
```

## Exemple

```js
// en HTML: <head id="my-document-head">
var aHead = document.head;

alert(aHead.id); // "my-document-head";

alert(document.head === document.querySelector("head")); // true
```

## Notes

`document.head` est en lecture seule. Essayer d'assigner une valeur à cettre propriété échouera en silence ou lancera une `TypeError` si le mode strict d'ECMAScript est activé dans un navigateur Gecko.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("document.body")}}
