---
title: "HTMLFormElement : propriété autocomplete"
short-title: autocomplete
slug: Web/API/HTMLFormElement/autocomplete
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`autocomplete`** de l'interface {{DOMxRef("HTMLFormElement")}} indique si la valeur des contrôles du formulaire peut être complétée automatiquement par le navigateur. Elle reflète l'attribut [`autocomplete`](/fr/docs/Web/HTML/Reference/Attributes/autocomplete) de l'élément HTML {{HTMLElement("form")}}.

## Valeur

Une chaîne de caractères&nbsp;; la valeur `"off"` si elle est explicitement définie à `"off"`, et sinon toujours `"on"`.

## Exemples

```js
const formElement = document.getElementById("name");
console.log(formElement.autocomplete);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("form")}}
- L'attribut HTML [`autocomplete`](/fr/docs/Web/HTML/Reference/Attributes/autocomplete)
- L'attribut ARIA [`aria-autocomplete`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete)
- [Désactiver la complétion automatique](/fr/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion)
