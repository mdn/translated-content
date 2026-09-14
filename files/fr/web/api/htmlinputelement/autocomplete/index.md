---
title: "HTMLInputElement : propriété autocomplete"
short-title: autocomplete
slug: Web/API/HTMLInputElement/autocomplete
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`autocomplete`** de l'interface {{DOMxRef("HTMLInputElement")}} indique si la valeur du contrôle peut être automatiquement complétée par le navigateur. Elle reflète l'attribut [`autocomplete`](/fr/docs/Web/HTML/Reference/Attributes/autocomplete) de l'élément HTML {{HTMLElement("input")}}.

## Valeur

Une chaîne de caractères&nbsp;: la valeur de l'attribut `autocomplete` (`"on"`, `"off"`, une [`<token-list>`](/fr/docs/Web/HTML/Reference/Attributes/autocomplete#jetons_de_la_liste_de_jetons)), ou la chaîne vide `""` si non défini.

## Exemples

```js
const inputElement = document.getElementById("name");
console.log(inputElement.autocomplete);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("input")}}
- La propriété {{DOMxRef("HTMLInputElement.value")}}
- L'attribut HTML [`autocomplete`](/fr/docs/Web/HTML/Reference/Attributes/autocomplete)
- L'attribut ARIA [`aria-autocomplete`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete)
- [Désactiver l'autocomplétion](/fr/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion)
