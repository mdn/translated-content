---
title: "HTMLButtonElement : propriété validity"
short-title: validity
slug: Web/API/HTMLButtonElement/validity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`validity`** de l'interface {{DOMxRef("HTMLButtonElement")}} retourne un objet {{DOMxRef("ValidityState")}} qui représente les états de validité de cet élément.

## Valeur

Un objet {{DOMxRef("ValidityState")}}.

## Exemples

L'exemple suivant montre qu'un `<button>` est dans un état invalide lorsque {{DOMxRef("ValidityState/customError", "customError")}} est définie&nbsp;; dans cet état, la propriété `valid` de `validityState` vaut `false`, tandis que {{DOMxRef("HTMLButtonElement/checkValidity", "checkValidity()")}} retourne `true` si le {{DOMxRef("HTMLButtonElement/type", "type")}} du bouton n'est pas `"submit"`, car ces boutons ne sont pas candidats à la [validation de contrainte](/fr/docs/Web/HTML/Guides/Constraint_validation).

```js
const button = document.getElementById("myButton");
button.setCustomValidity("Ce bouton est invalide.");
const validityState = button.validity;
console.log(validityState.valid); // false
console.log(validityState.customError); // true
console.log(button.checkValidity()); // false si le bouton est de type "submit", true sinon
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLButtonElement.checkValidity()")}}
- L'élément HTML {{HTMLElement("button")}}
- L'élément HTML {{HTMLElement("form")}}
- [Apprendre&nbsp;: Validation de formulaire côté client](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide&nbsp;: Validation de contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation)
