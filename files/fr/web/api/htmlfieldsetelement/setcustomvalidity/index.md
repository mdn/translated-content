---
title: "HTMLFieldSetElement : méthode setCustomValidity()"
short-title: setCustomValidity()
slug: Web/API/HTMLFieldSetElement/setCustomValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La méthode **`setCustomValidity()`** de l'interface {{DOMxRef("HTMLFieldSetElement")}} définit le message de validité personnalisé pour l'élément HTML {{HTMLElement("fieldset")}}. Utilisez la chaîne vide pour indiquer que l'élément n'a _pas_ d'erreur de validité personnalisée.

L'élément `<fieldset>` n'est pas candidat à la validation par contrainte. La méthode {{DOMxRef("HTMLFieldSetElement.reportValidity()", "reportValidity()")}} ne provoquera pas l'affichage du message d'erreur personnalisé à l'utilisateur·ice, mais elle définit la propriété {{DOMxRef("ValidityState.customError", "customError")}} de l'objet {{DOMxRef("ValidityState")}} de l'élément à `true` et la propriété {{DOMxRef("ValidityState.valid", "valid")}} à `false`.

## Syntaxe

```js-nolint
setCustomValidity(string)
```

### Paramètres

- `string`
  - : Une chaîne de caractères contenant le message d'erreur. La chaîne vide supprime toute erreur de validité personnalisée.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

```js
const errorFieldSet = document.getElementById("checkErrors");
const errors = issuesToReport();
if (errors) {
  errorFieldSet.setCustomValidity("Une erreur est présente");
} else {
  errorFieldSet.setCustomValidity("");
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("fieldset")}}
- L'interface {{DOMxRef("HTMLFieldSetElement")}}
- La propriété {{DOMxRef("HTMLFieldSetElement.validity")}}
- La méthode {{DOMxRef("HTMLFieldSetElement.checkValidity()")}}
- La méthode {{DOMxRef("HTMLFieldSetElement.reportValidity()")}}
- [Validation des formulaires](/fr/docs/Web/HTML/Guides/Constraint_validation).
- [Apprendre&nbsp;: Validation côté client des formulaires](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide&nbsp;: Validation par contrainte](/fr/docs/Web/HTML/Guides/Constraint_validation)
- Les pseudo-classes CSS {{CSSxRef(":valid")}} et {{CSSxRef(":invalid")}}
