---
title: "HTMLButtonElement : méthode setCustomValidity()"
short-title: setCustomValidity()
slug: Web/API/HTMLButtonElement/setCustomValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La méthode **`setCustomValidity()`** de l'interface {{DOMxRef("HTMLButtonElement")}} définit le message de validité personnalisé pour l'élément HTML {{HTMLElement("button")}}. Utilisez la chaîne vide pour indiquer que l'élément n'a _pas_ d'erreur de validité personnalisée.

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

```js
const errorButton = document.getElementById("checkErrors");
const errors = issuesToReport();
if (errors) {
  errorButton.setCustomValidity("Il y a une erreur");
} else {
  errorButton.setCustomValidity("");
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("button")}}
- L'interface {{DOMxRef("HTMLButtonElement")}}
- La propriété {{DOMxRef("HTMLButtonElement.validity")}}
- La méthode {{DOMxRef("HTMLButtonElement.checkValidity()")}}
- La méthode {{DOMxRef("HTMLButtonElement.reportValidity()")}}
- [Validation de formulaire](/fr/docs/Web/HTML/Guides/Constraint_validation)
- [Apprendre&nbsp;: Validation de formulaire côté client](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide&nbsp;: Validation de contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation)
- Les pseudo-classes CSS {{CSSxRef(":valid")}} et {{CSSxRef(":invalid")}}
