---
title: "Attribut HTML : maxlength"
short-title: maxlength
slug: Web/HTML/Reference/Attributes/maxlength
original_slug: Web/HTML/Attributes/maxlength
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'attribut **`maxlength`** définit la [longueur maximale de chaîne de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/length) que l'utilisateur·rice peut saisir dans un élément HTML {{HTMLElement('input')}} ou un élément {{HTMLElement('textarea')}}. L'attribut doit avoir une valeur entière supérieure ou égale à 0.

La longueur est mesurée en {{Glossary("UTF-16", "unités de code UTF-16")}}, ce qui correspond souvent, mais pas toujours, au nombre de caractères. Si aucun `maxlength` n'est spécifié, ou si une valeur invalide est spécifiée, la saisie n'a pas de longueur maximale.

Toute valeur de `maxlength` doit être supérieure ou égale à la valeur de [`minlength`](/fr/docs/Web/HTML/Reference/Attributes/minlength), si elle est présente et valide. Le champ échouera à la validation des contraintes si la longueur du texte saisi dépasse le nombre d'unités de code UTF-16 autorisé par `maxlength`. La validation des contraintes n'est appliquée que lorsque la valeur est modifiée par l'utilisateur·rice.

### Validation des contraintes

Bien que le navigateur empêche généralement l'utilisateur de saisir plus de texte que ne l'autorise l'attribut `maxlength`, si la longueur est supérieure à ce dernier, la propriété en lecture seule {{DOMxRef("ValidityState.tooLong")}} d'un objet {{DOMxRef("ValidityState")}} sera vraie.

{{InteractiveExample("Démonstration HTML&nbsp;: maxlength", "tabbed-shorter")}}

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

- L'attribut [`minlength`](/fr/docs/Web/HTML/Reference/Attributes/minlength)
- L'attribut [`size`](/fr/docs/Web/HTML/Reference/Attributes/size)
- L'attribut [`pattern`](/fr/docs/Web/HTML/Reference/Attributes/pattern)
- [Validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation)
- [Validation de formulaire](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- L'élément HTML {{HTMLElement('input')}}
