---
title: HTMLSelectElement.checkValidity()
slug: Web/API/HTMLSelectElement/checkValidity
page-type: web-api-instance-method
browser-compat: api.HTMLSelectElement.checkValidity
translation_of: Web/API/HTMLSelectElement/checkValidity
---
{{ APIRef("HTML DOM") }}

The **`HTMLSelectElement.checkValidity()`** method checks
whether the element has any constraints and whether it satisfies them. If the element
fails its constraints, the browser fires a cancelable {{domxref("HTMLSelectElement/invalid_event", "invalid")}} event at the
element, and then returns `false`.
La méthode **`HTMLSelectElement.checkValidity()`** vérifie si l'élément a des contraintes et s'il les satisfait. Si l'élément ne respecte pas ses contraintes, le navigateur déclenche un événement [`invalid`](/fr/docs/Web/API/HTMLInputElement/invalid_event) annulable sur l'élément, puis renvoie `false`.

## Syntaxe

```js
checkValidity()
```

### Paramètres

Aucun.

### Valeur retournée

Aucun([`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Validation de formulaire](/fr/docs/Web/Guide/HTML/Constraint_validation)
