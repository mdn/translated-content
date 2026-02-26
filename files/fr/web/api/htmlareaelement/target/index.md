---
title: "HTMLAreaElement : propriété target"
short-title: target
slug: Web/API/HTMLAreaElement/target
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`target`** de l'interface {{DOMxRef("HTMLAreaElement")}} est une chaîne de caractères qui indique où afficher la ressource liée.

Elle reflète l'attribut [`target`](/fr/docs/Web/HTML/Reference/Elements/area#target) de l'élément HTML {{HTMLElement("area")}}.

## Valeur

Une chaîne de caractères représentant la cible. Sa valeur peut être&nbsp;:

- Le nom d'un élément {{HTMLElement("frame")}}.
- L'un des [mots-clés avec des valeurs spécifiques](/fr/docs/Web/HTML/Reference/Elements/area#target)&nbsp;: `_blank`, `_self`, `_parent` ou `_top`.

## Exemple

```html
<map name="image-map">
  <area href="www.exemple.fr" target="_top" alt="left" />
</map>
```

```js
const areaElement = document.getElementsByName("image-map")[0].areas[0];
console.log(areaElement.target); // Affiche : "_top"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLBaseElement.target")}}
- La propriété {{DOMxRef("HTMLFormElement.target")}}
- La propriété {{DOMxRef("HTMLAnchorElement.target")}}
