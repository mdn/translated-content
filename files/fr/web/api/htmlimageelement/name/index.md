---
title: "HTMLImageElement : propriété name"
short-title: name
slug: Web/API/HTMLImageElement/name
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

La propriété _obsolète_ **`name`** de l'interface {{DOMxRef("HTMLImageElement")}} définit un nom pour l'élément. Elle a été remplacée par la propriété {{DOMxRef("Element.id", "id")}} disponible sur tous les éléments.

## Valeur

Une chaîne de caractères fournissant un nom par lequel l'image peut être référencée.

## Exemples

### Définir l'attribut `name`

```js
const img = new Image();
img.src = "example.png";
img.alt = "Une image d'exemple";
img.name = "example-img";
```

Au lieu de faire ça, définissez plutôt la propriété `id`&nbsp;:

```js
img.id = "example-img";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
