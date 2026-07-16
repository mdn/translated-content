---
title: "HTMLTextAreaElement : propriété autocomplete"
short-title: autocomplete
slug: Web/API/HTMLTextAreaElement/autocomplete
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`autocomplete`** de l'interface {{DOMxRef("HTMLTextAreaElement")}} indique si la valeur du contrôle peut être complétée automatiquement par le navigateur. Elle reflète l'attribut [`autocomplete`](/fr/docs/Web/HTML/Reference/Elements/textarea#autocomplete) de l'élément HTML `<textarea>`.

## Valeur

Une chaîne de caractères représentant la valeur de l'attribut `autocomplete` (`"on"`, `"off"` ou une [`<token-list>`](/fr/docs/Web/HTML/Reference/Attributes/autocomplete#jetons_de_la_liste_de_jetons)), ou la chaîne vide (`""`) si aucune valeur n'est définie.

## Exemples

```js
const textareaElement = document.getElementById("comment");
console.log(textareaElement.autocomplete);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("textarea")}}
- L'attribut HTML [`autocomplete`](/fr/docs/Web/HTML/Reference/Attributes/autocomplete)
- L'attribut ARIA [`aria-autocomplete`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete)
- [Désactiver l'autocomplétion](/fr/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion)
