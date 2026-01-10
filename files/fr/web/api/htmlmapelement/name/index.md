---
title: "HTMLMapElement : propriété name"
short-title: name
slug: Web/API/HTMLMapElement/name
l10n:
  sourceCommit: c2441279b7956925d28373345838436b1fa2c78c
---

{{APIRef("HTML DOM")}}

La propriété **`name`** de l'interface {{DOMxRef("HTMLMapElement")}} représente le nom unique de l'élément `<map>`.
Sa valeur peut être utilisée avec l'attribut `useMap` de l'élément {{HTMLElement("img")}} pour référencer un élément `<map>`.

Si un attribut `id` est défini sur l'élément {{HTMLElement("map")}}, alors la propriété `name` doit avoir la même valeur que cet `id`.

## Valeur

Une chaîne de caractères non vide sans espaces.

## Exemple

```html
<map name="image-map">
  <area shape="circle" coords="15,15,5" />
</map>
```

```js
const mapElement = document.getElementsByName("image-map")[0];
console.log(mapElement.name); // affichera : "image-map"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLImageElement.useMap")}}
- L'interface {{DOMxRef("HTMLAreaElement")}}
