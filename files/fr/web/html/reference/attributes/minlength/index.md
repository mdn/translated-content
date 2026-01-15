---
title: "Attribut HTML : minlength"
short-title: minlength
slug: Web/HTML/Reference/Attributes/minlength
original_slug: Web/HTML/Attributes/minlength
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

L'attribut **`minlength`** définit la [longueur minimale de chaîne de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/length) que l'utilisateur·rice peut saisir dans un élément HTML {{HTMLElement('input')}} ou un élément {{HTMLElement('textarea')}}. L'attribut doit avoir une valeur entière supérieure ou égale à 0.

La longueur est mesurée en {{Glossary("UTF-16", "unités de code UTF-16")}}, ce qui correspond souvent, mais pas toujours, au nombre de caractères. Si aucun `minlength` n'est spécifié, ou si une valeur invalide est spécifiée, la saisie n'a pas de longueur minimale. Cette valeur doit être inférieure ou égale à la valeur de [`maxlength`](/fr/docs/Web/HTML/Reference/Attributes/maxlength), sinon la saisie ne sera jamais valide, car il est impossible de satisfaire les deux critères.

Le champ échouera à la validation des contraintes si la longueur du texte saisi est inférieure au nombre d'unités de code UTF-16 défini par `minlength`, avec {{DOMxRef('validityState.tooShort')}} retournant `true`. La validation des contraintes n'est appliquée que lorsque la valeur est modifiée par l'utilisateur·rice. En cas d'échec de la soumission, certains navigateurs afficheront un message d'erreur indiquant la longueur minimale requise et la longueur actuelle.

`minlength` n'implique pas l'attribut [`required`](/fr/docs/Web/HTML/Reference/Attributes/required)&nbsp;: un champ ne viole la contrainte `minlength` que si l'utilisateur·rice a saisi une valeur. Si un champ n'est pas `required`, une chaîne vide peut être soumise même si `minlength` est défini.

{{InteractiveExample("Démonstration HTML&nbsp;: minlength", "tabbed-shorter")}}

```html interactive-example
<label for="name">Nom du produit&nbsp;:</label>
<input
  id="name"
  name="name"
  type="text"
  value="Shampoing"
  minlength="3"
  maxlength="20"
  required />

<label for="description">Description du produit&nbsp;:</label>
<textarea
  id="description"
  name="description"
  minlength="10"
  maxlength="40"
  required></textarea>
```

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:valid,
textarea:valid {
  background-color: palegreen;
}
```

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

- L'attribut [`maxlength`](/fr/docs/Web/HTML/Reference/Attributes/maxlength)
- L'attribut [`size`](/fr/docs/Web/HTML/Reference/Attributes/size)
- L'attribut [`pattern`](/fr/docs/Web/HTML/Reference/Attributes/pattern)
- [Validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation)
- [Validation de formulaire](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- L'élément HTML {{HTMLElement('input')}}
