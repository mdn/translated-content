---
title: "Element : propriété id"
short-title: id
slug: Web/API/Element/id
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{APIRef("DOM")}}

La propriété **`id`** de l'interface {{DOMxRef("Element")}} représente l'identifiant de l'élément, reflétant l'attribut universel [**`id`**](/fr/docs/Web/HTML/Reference/Global_attributes/id).

Si la valeur `id` n'est pas une chaîne de caractères vide, elle doit être unique dans un document.

La valeur `id` est souvent utilisée avec {{DOMxRef("Document.getElementById()", "getElementById()")}} pour récupérer un élément particulier.
Un autre cas courant est d'utiliser [l'ID de l'élément en tant que sélecteur](/fr/docs/Web/CSS/Reference/Selectors/ID_selectors) lors de la mise en forme du document avec [CSS](/fr/docs/Web/CSS).

> [!NOTE]
> Les identifiants sont sensibles à la casse, mais vous devez éviter de créer des ID qui ne diffèrent que par la capitalisation.

## Valeur

Une chaîne de caractères.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut universel [**id**](/fr/docs/Web/HTML/Reference/Global_attributes/id) du DOM.
