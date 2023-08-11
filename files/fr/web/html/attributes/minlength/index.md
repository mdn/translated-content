---
title: "Attribut HTML : minlength"
slug: Web/HTML/Attributes/minlength
---

{{HTMLSidebar}}

L'attribut **`minlength`** définit le nombre minimal de caractères (sous forme d'unités de code UTF-16) que l'utilisateur peut saisir dans un élément [`<input>`](/fr/docs/Web/HTML/Element/Input) ou [`<textarea>`](/fr/docs/Web/HTML/Element/Textarea). Il doit s'agir d'une valeur entière égale ou supérieure à 0. Si aucune longueur minimale n'est spécifiée, ou si une valeur invalide est spécifiée, l'entrée n'a pas de longueur minimale. Cette valeur doit être inférieure ou égale à la valeur de [`maxlength`](/fr/docs/Web/HTML/Attributes/maxlength), sinon la valeur ne sera jamais valide, car il est impossible de satisfaire aux deux critères.

L'entrée échouera à la validation des contraintes si la longueur de la valeur textuelle du champ est inférieure à `minlength` unités de code UTF-16, avec [`validityState.tooShort`](/fr/docs/Web/API/validityState/tooShort) retournant `true`. La validation des contraintes n'est appliquée que lorsque la valeur est modifiée par l'utilisateur. En cas d'échec de la soumission, certains navigateurs affichent un message d'erreur indiquant la longueur minimale requise et la longueur actuelle.

## Exemples

En ajoutant `minlength="5"`, la valeur doit soit être vide, soit comporter cinq caractères ou plus pour être valide.

```html
<label for="fruit">Entrez un nom de fruit d'au moins 5 lettres.</label>
<input type="text" minlength="5" id="fruit" />
```

Nous pouvons utiliser des pseudo-classes pour donner un style à l'élément en fonction de la validité de la valeur. La valeur sera valide tant qu'elle sera soit nulle (vide), soit longue de cinq caractères ou plus. _Vert_ est invalide, _Citron_ est valide.

```css
input {
  border: 2px solid currentcolor;
}
input:invalid {
  border: 2px dashed red;
}
input:invalid:focus {
  background-image: linear-gradient(pink, lightgreen);
}
```

{{EmbedLiveSample('Exemples', '', 40)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut [`maxlength`](/fr/docs/Web/HTML/Attributes/maxlength)
- L'attribut [`size`](/fr/docs/Web/HTML/Attributes/size)
- L'attribut [`pattern`](/fr/docs/Web/HTML/Attributes/pattern)
- [Validation des contraintes](/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation)
- L'API [Constraint validation](/fr/docs/Web/API/Constraint_validation)
- L'élément [`<input>`](/fr/docs/Web/HTML/Element/Input)
