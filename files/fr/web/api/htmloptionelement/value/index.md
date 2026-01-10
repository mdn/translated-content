---
title: "HTMLOptionElement : propriété value"
short-title: value
slug: Web/API/HTMLOptionElement/value
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`value`** de l'interface {{DOMxRef("HTMLOptionElement")}} représente la valeur de l'élément HTML {{HTMLElement("option")}} sous forme de chaîne de caractères, ou une chaîne vide si aucune valeur n'est définie. Elle reflète l'attribut [`value`](/fr/docs/Web/HTML/Reference/Elements/option#value) de l'élément, s'il est présent. Sinon, elle retourne ou définit le contenu de l'élément, comme la propriété {{DOMxRef("Node.textContent", "textContent")}}.

## Valeur

Une chaîne de caractères contenant la valeur de l'attribut `value`, si présent, ou le contenu de l'élément.

## Exemples

```js
const optionElement = document.querySelector("datalist option:first-of-type");
const oldValue = optionElement.value;
optionElement.value = oldValue.toUpperCase();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("option")}}
- La propriété {{DOMxRef("HTMLOptionElement.selected")}}
- La propriété {{DOMxRef("HTMLOptionElement.defaultSelected")}}
- La propriété {{DOMxRef("HTMLOptionElement.label")}}
