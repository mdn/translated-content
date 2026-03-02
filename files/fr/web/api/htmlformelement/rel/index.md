---
title: "HTMLFormElement : propriété rel"
short-title: rel
slug: Web/API/HTMLFormElement/rel
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`rel`** de l'interface {{DOMxRef("HTMLFormElement")}} reflète l'attribut [`rel`](/fr/docs/Web/HTML/Reference/Attributes/rel). Il s'agit d'une chaîne de caractères indiquant les types de liens que crée l'élément HTML {{HTMLElement("form")}}, sous la forme d'une liste d'énumérés séparés par des espaces.

Pour obtenir la valeur sous forme de tableau de jetons, utilisez {{DOMxRef("HTMLFormElement.relList")}}.

## Valeur

Une chaîne de caractères.

## Exemple

```js
const form = document.querySelector("form");
console.log(form.rel);

form.rel = "noopener noreferrer";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLFormElement.relList")}}
- La propriété {{DOMxRef("HTMLLinkElement.rel")}}
- La propriété {{DOMxRef("HTMLAnchorElement.rel")}}
