---
title: "HTMLOutputElement : méthode setCustomValidity()"
short-title: setCustomValidity()
slug: Web/API/HTMLOutputElement/setCustomValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La méthode **`setCustomValidity()`** de l'interface {{DOMxRef("HTMLOutputElement")}} définit le message de validité personnalisé pour l'élément HTML {{HTMLElement("output")}}. Utilisez la chaîne vide pour indiquer que l'élément n'a _pas_ d'erreur de validité personnalisée.

L'élément `<output>` n'est pas candidat à la validation de contraintes. La méthode {{DOMxRef("HTMLOutputElement.reportValidity()", "reportValidity()")}} n'affichera pas le message d'erreur personnalisé à l'utilisateur·ice, mais définira la propriété {{DOMxRef("ValidityState.customError", "customError")}} de l'objet {{DOMxRef("ValidityState")}} de l'élément à `true` et la propriété {{DOMxRef("ValidityState.valid", "valid")}} à `false`.

## Syntaxe

```js-nolint
setCustomValidity(string)
```

### Paramètres

- `string`
  - : La chaîne de caractères contenant le message d'erreur. La chaîne vide supprime toute erreur de validité personnalisée.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

Dans cet exemple, si la valeur ({{DOMxRef("HTMLOutputElement.value", "value")}}) de `<output>` n'est pas un nombre non nul, on définit un message d'erreur personnalisé. Si c'est un nombre, on définit l'erreur personnalisée à une chaîne vide&nbsp;:

```js
const cart = document.getElementById("cart-form");
const total = cart.elements("total");
if (parseFloat(total.value)) {
  errorOutput.setCustomValidity("");
} else {
  errorOutput.setCustomValidity("Il y a une erreur");
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("output")}}
- L'interface {{DOMxRef("HTMLOutputElement")}}
- La propriété {{DOMxRef("HTMLOutputElement.validity")}}
- La méthode {{DOMxRef("HTMLOutputElement.checkValidity()")}}
- La méthode {{DOMxRef("HTMLOutputElement.reportValidity()")}}
- [Validation de formulaire](/fr/docs/Web/HTML/Guides/Constraint_validation).
- [Apprendre&nbsp;: Validation de formulaire côté client](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide&nbsp;: Validation de contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation)
- Les pseudo-classes CSS {{CSSxRef(":valid")}} et {{CSSxRef(":invalid")}}
