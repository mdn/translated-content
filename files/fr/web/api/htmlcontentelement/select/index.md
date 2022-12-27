---
title: HTMLContentElement.select
slug: Web/API/HTMLContentElement/select
tags:
  - API
  - HTML DOM
  - Property
  - Référence(2)
  - Web Components
translation_of: Web/API/HTMLContentElement/select
---

{{ APIRef("Web Components") }}

La propriété **`HTMLContentElement.select`** represente l'attribut `select`. La valeur de retour est une liste de sélecteurs CSS séparés par des espaces. Ils récupèrent le contenu à inserer à la place de l'élément `<content>`.

## Syntaxe

```js
object.select = "CSSselector CSSselector ...";
```

## Exemple

```js
// Choisi les éléments <h1> et les elements avec la class "error"
myContentObject.select = "h1 .error";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [HTMLContentElement](/fr/docs/Web/API/HTMLContentElement)
