---
title: "HTMLAnchorElement : propriété target"
short-title: target
slug: Web/API/HTMLAnchorElement/target
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("HTML DOM")}}

La propriété **`target`** de l'interface {{domxref("HTMLAnchorElement")}} est une chaîne de caractères qui indique où afficher la ressource liée.

Elle reflète l'attribut [`target`](/fr/docs/Web/HTML/Reference/Elements/a#target) de l'élément HTML {{HTMLElement("a")}}.

## Valeur

Une chaîne de caractères représentant la cible. Sa valeur peut être&nbsp;:

- Le nom d'un élement HTML {{HTMLElement("frame")}}.
- L'une des [valeurs spécifiques de mot-clé](/fr/docs/Web/HTML/Reference/Elements/a#target)&nbsp;: `_blank`, `_self`, `_parent` ou `_top`.

## Exemple

```html
<a href="www.example1.com" class="link1" target="_blank">example1</a>
```

```js
const link = document.querySelector(".link1");
console.log(link.target); // affiche : "_blank"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{domxref("HTMLBaseElement.target")}}
- La propriété {{domxref("HTMLFormElement.target")}}
- La propriété {{domxref("HTMLAreaElement.target")}}
