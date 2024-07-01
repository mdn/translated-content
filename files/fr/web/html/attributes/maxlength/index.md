---
title: "Attribut HTML : maxlength"
slug: Web/HTML/Attributes/maxlength
---

{{HTMLSidebar}}

L'attribut **`maxlength`** définit le nombre maximal de caractères (en unités de code UTF-16) que l'utilisateur peut saisir dans un [`<input>`](/fr/docs/Web/HTML/Element/Input) ou un [`<textarea>`](/fr/docs/Web/HTML/Element/Textarea). Il doit s'agir d'un nombre entier égal ou supérieur à 0. Si aucune longueur maximale n'est spécifiée, ou si une valeur non valide est spécifiée, l'entrée ou la zone de texte n'a pas de longueur maximale.

Toute valeur de `maxlength` doit être supérieure ou égale à la valeur de [`minlength`](/fr/docs/Web/HTML/Attributes/minlength), si elle est présente et valide. L'entrée échoue à la validation des contraintes si la longueur de la valeur textuelle du champ est supérieure à la longueur maximale des unités de code UTF-16. La validation des contraintes n'est appliquée que lorsque la valeur est modifiée par l'utilisateur.

### Validation des contraintes

Bien que le navigateur empêche généralement l'utilisateur de saisir plus de texte que ne l'autorise l'attribut `maxlength`, si la longueur est supérieure à ce dernier, la propriété en lecture seule [`tooLong`](/fr/docs/Web/API/ValidityState/tooLong) d'un objet [`ValidityState`](/fr/docs/Web/API/ValidityState) sera vraie.

## Exemple

```html
<input type="password" maxlength="4" />
```

{{EmbedLiveSample('Exemple', '', 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut [`minlength`](/fr/docs/Web/HTML/Attributes/minlength)
- L'attribut [`size`](/fr/docs/Web/HTML/Attributes/size)
- L'attribut [`pattern`](/fr/docs/Web/HTML/Attributes/pattern)
- [Validation des contraintes](/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation)
- L'API [Constraint validation](/fr/docs/Web/API/Constraint_validation)
- L'élément [`<input>`](/fr/docs/Web/HTML/Element/Input)
