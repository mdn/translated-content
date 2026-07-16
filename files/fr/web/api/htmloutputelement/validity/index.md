---
title: "HTMLOutputElement : propriété validity"
short-title: validity
slug: Web/API/HTMLOutputElement/validity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`validity`** de l'interface {{DOMxRef("HTMLOutputElement")}} retourne un objet {{DOMxRef("ValidityState")}} qui représente les états de validité de cet élément. Bien que les éléments HTML {{HTMLElement("output")}} ne soient jamais candidats à la [validation de contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation), l'état de validité peut tout de même être invalide si un message de validité personnalisé a été défini.

## Valeur

Un objet {{DOMxRef("ValidityState")}}.

## Exemples

L'exemple suivant montre qu'un `<output>` est dans un état invalide lorsqu'un {{DOMxRef("ValidityState/customError", "customError")}} est défini&nbsp;; dans cet état, {{DOMxRef("HTMLOutputElement/checkValidity", "checkValidity()")}} retourne `true` tandis que la propriété `valid` de `validityState` est `false`.

```js
const output = document.getElementById("myOutput");
output.setCustomValidity("Cet élément object est invalide.");
const validityState = output.validity;
console.log(validityState.valid); // false
console.log(validityState.customError); // true
console.log(output.checkValidity()); // true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLOutputElement.checkValidity()")}}
- L'élément HTML {{HTMLElement("output")}}
- L'élément HTML {{HTMLElement("form")}}
- [Apprendre&nbsp;: Validation de formulaire côté client](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide&nbsp;: Validation de contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation)
