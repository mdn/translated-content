---
title: "HTMLTemplateElement : propriété content"
short-title: content
slug: Web/API/HTMLTemplateElement/content
l10n:
  sourceCommit: 730741c750cc299b85798f1adbaf7adbd6e2016d
---

{{APIRef("Web Components")}}

La propriété **`content`** de l'interface {{DOMxRef("HTMLTemplateElement")}} retourne le contenu de l'élément `<template>` sous la forme d'un {{DOMxRef("DocumentFragment")}}. Le {{DOMxRef("Node/ownerDocument", "ownerDocument")}} de ce contenu est un {{DOMxRef("Document")}} distinct de celui qui contient l'élément `<template>` lui-même — sauf si le document contenant est lui-même construit pour contenir du contenu du modèle.

Les méthodes {{DOMxRef("Node.cloneNode()")}} et {{DOMxRef("Document.importNode()")}} créent toutes deux une copie d'un nœud. La différence est que `importNode()` clone le nœud dans le contexte du document appelant, tandis que `cloneNode()` utilise le document du nœud cloné. Le contexte du document détermine le {{DOMxRef("CustomElementRegistry")}} utilisé pour construire les éléments personnalisés. Pour cette raison, utilisez `document.importNode()` pour cloner le fragment `content` afin que les descendants éléments personnalisés soient construits à partir des définitions du document courant, et non du document séparé qui possède le contenu du modèle. Consultez les exemples de la page {{DOMxRef("Node.cloneNode()")}} pour plus de détails.

## Valeur

Un objet {{DOMxRef("DocumentFragment")}}.

## Exemples

### Utiliser `importNode()` avec le contenu d'un modèle

```js
const templateElement = document.querySelector("#foo");
const documentFragment = document.importNode(templateElement.content, true);
// Vous pouvez maintenant insérer le documentFragment dans le DOM
```

### Le `ownerDocument` du contenu d'un modèle

Pour les éléments `<template>` créés dans le contexte d'un document HTML normal, le `ownerDocument` du `content` est un document séparé, fraîchement créé&nbsp;:

```js
const template = document.createElement("template");
console.log(template.content.ownerDocument === document); // false
console.log(template.content.ownerDocument.URL); // "about:blank"
```

Si l'élément `<template>` est créé dans le contexte d'un document qui a lui-même été créé pour contenir du contenu de modèle, alors le `ownerDocument` du `content` est le même que celui du document contenant&nbsp;:

```js
const template1 = document.createElement("template");
const docForTemplate = template1.content.ownerDocument;
const template2 = docForTemplate.createElement("template");
console.log(template2.content.ownerDocument === docForTemplate); // true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLTemplateElement")}}
