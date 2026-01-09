---
title: "HTMLObjectElement : méthode setCustomValidity()"
short-title: setCustomValidity()
slug: Web/API/HTMLObjectElement/setCustomValidity
l10n:
  sourceCommit: 2553e9a4d085760294dd6874c541ea488381c746
---

{{APIRef("HTML DOM")}}

La méthode **`setCustomValidity()`** de l'interface {{DOMxRef("HTMLObjectElement")}} définit un message de validité personnalisé pour l'élément.

## Syntaxe

```js-nolint
setCustomValidity(errorMessage)
```

### Paramètres

- `errorMessage`
  - : Le message à utiliser pour les erreurs de validité.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

Aucune.

## Exemples

Dans cet exemple, on passe l'identifiant d'un élément input et on définit différents messages d'erreur selon que la valeur est manquante, trop basse ou trop élevée. Notez que le message ne s'affichera pas immédiatement. Tenter de soumettre le formulaire affichera le message, ou vous pouvez appeler la méthode [`reportValidity()`](/fr/docs/Web/API/HTMLInputElement/reportValidity) sur l'élément.

```js
function validate(inputID) {
  const input = document.getElementById(inputID);
  const validityState = input.validity;

  if (validityState.valueMissing) {
    input.setCustomValidity("Vous devez remplir ce champ !");
  } else if (validityState.rangeUnderflow) {
    input.setCustomValidity("Veuillez entrer une valeur plus élevée !");
  } else if (validityState.rangeOverflow) {
    input.setCustomValidity("Cette valeur est trop élevée !");
  } else {
    input.setCustomValidity("");
  }

  input.reportValidity();
}
```

Il est essentiel de définir le message comme une chaîne vide s'il n'y a pas d'erreur. Tant que le message d'erreur n'est pas vide, le formulaire ne passera pas la validation et ne sera pas soumis.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef('ValidityState')}}
- La propriété en lecture seule {{DOMxRef('ValidityState.valueMissing')}}
- La propriété en lecture seule {{DOMxRef('ValidityState.typeMismatch')}}
- La propriété en lecture seule {{DOMxRef('ValidityState.patternMismatch')}}
- La propriété en lecture seule {{DOMxRef('ValidityState.tooLong')}}
- La propriété en lecture seule {{DOMxRef('ValidityState.tooShort')}}
- La propriété en lecture seule {{DOMxRef('ValidityState.rangeUnderflow')}}
- La propriété en lecture seule {{DOMxRef('ValidityState.rangeOverflow')}}
- La propriété en lecture seule {{DOMxRef('ValidityState.stepMismatch')}}
- La propriété en lecture seule {{DOMxRef('ValidityState.valid')}}
- La propriété en lecture seule {{DOMxRef('ValidityState.customError')}}
