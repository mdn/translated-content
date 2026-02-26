---
title: "HTMLFieldSetElement : propriété validity"
short-title: validity
slug: Web/API/HTMLFieldSetElement/validity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`validity`** de l'interface {{DOMxRef("HTMLFieldSetElement")}} retourne un objet {{DOMxRef("ValidityState")}} représentant les états de validité dans lesquels se trouve cet élément. Bien que les éléments HTML {{HTMLElement("fieldset")}} ne soient jamais candidats à la [validation par contrainte](/fr/docs/Web/HTML/Guides/Constraint_validation), l'état de validité peut néanmoins être invalide si un message de validité personnalisé a été défini.

> [!NOTE]
> Les pseudo-classes CSS {{CSSxRef(":valid")}} et {{CSSxRef(":invalid")}} sont appliquées aux éléments `<fieldset>` en fonction de la validité de leurs contrôles de formulaire enfants, et non du fieldset lui-même.

## Valeur

Un objet {{DOMxRef("ValidityState")}}.

## Exemples

L'exemple suivant montre qu'un `<fieldset>` est dans un état invalide lorsqu'un {{DOMxRef("ValidityState/customError", "customError")}} est défini&nbsp;; dans cet état, {{DOMxRef("HTMLFieldSetElement/checkValidity", "checkValidity()")}} renvoie `true` tandis que la propriété `validity` de `validityState` vaut `false`.

```js
const fieldSet = document.getElementById("myFieldSet");
fieldSet.setCustomValidity("This fieldset is invalid.");
const validityState = fieldSet.validity;
console.log(validityState.valid); // false
console.log(validityState.customError); // true
console.log(fieldSet.checkValidity()); // true
```

> [!NOTE]
> Les pseudo-classes CSS {{CSSxRef(":valid")}} et {{CSSxRef(":invalid")}} sont appliquées aux éléments `<fieldset>` en fonction de la validité de leurs contrôles de formulaire enfants, et non du fieldset lui-même.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLFieldSetElement.checkValidity()")}}
- L'élément HTML {{HTMLElement("fieldset")}}
- L'élément HTML {{HTMLElement("form")}}
- [Apprendre&nbsp;: Validation côté client des formulaires](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide&nbsp;: Validation par contrainte](/fr/docs/Web/HTML/Guides/Constraint_validation)
