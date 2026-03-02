---
title: "HTMLBaseElement : propriété target"
short-title: target
slug: Web/API/HTMLBaseElement/target
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété `target` de l'interface {{DOMxRef("HTMLBaseElement")}} est une chaîne de caractères qui représente l'onglet cible par défaut pour afficher le résultat des liens hypertexte et des éléments de formulaire.

Elle reflète l'attribut [`target`](/fr/docs/Web/HTML/Reference/Elements/base#target) de l'élément HTML {{HTMLElement("base")}}.

## Valeur de retour

Une chaîne de caractères représentant la cible. Sa valeur peut être&nbsp;:

- Le nom d'un {{HTMLElement("frame")}}.
- L'un des [mots-clés avec des valeurs spécifiques](/fr/docs/Web/HTML/Reference/Elements/base#target)&nbsp;: `_blank`, `_self`, `_parent` ou `_top`.

## Exemple

```html
<head>
  <base target="_top" />
</head>
```

```js
const baseElement = document.getElementsByTagName("base")[0];
console.log(baseElement.target); // Affiche : '_top'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLAnchorElement.target")}}
- La propriété {{DOMxRef("HTMLAreaElement.target")}}
- La propriété {{DOMxRef("HTMLFormElement.target")}}
