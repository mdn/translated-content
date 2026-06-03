---
title: "HTMLInputElement : méthode setCustomValidity()"
short-title: setCustomValidity()
slug: Web/API/HTMLInputElement/setCustomValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La méthode **`setCustomValidity()`** de l'interface {{DOMxRef("HTMLInputElement")}} définit un message de validité personnalisé pour l'élément.

## Syntaxe

```js-nolint
setCustomValidity(message)
```

### Paramètres

- `message`
  - : Le message à utiliser pour les erreurs de validité.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

Aucune.

## Exemples

Dans cet exemple, on passe l'ID d'un élément input et on définit différents messages d'erreur selon que la valeur est manquante, trop faible ou trop élevée. Notez que le message n'est pas affiché immédiatement. L'envoi du formulaire affichera le message, ou vous pouvez appeler la méthode {{DOMxRef("HTMLInputElement.reportValidity()", "reportValidity()")}} sur l'élément.

```js
function validate(inputID) {
  const input = document.getElementById(inputID);
  const validityState = input.validity;

  if (validityState.valueMissing) {
    input.setCustomValidity("Veuillez indiquer un âge (obligatoire)");
  } else if (validityState.rangeUnderflow) {
    input.setCustomValidity("La valeur est trop faible");
  } else if (validityState.rangeOverflow) {
    input.setCustomValidity("La valeur est trop élevée");
  } else {
    input.setCustomValidity("");
  }

  input.reportValidity();
}
```

Il est essentiel de définir le message sur la chaîne vide s'il n'y a pas d'erreurs. Tant que le message d'erreur n'est pas vide, le formulaire échouera à la validation et ne sera pas envoyé.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Apprendre&nbsp;: Validation des données de formulaires côté client](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide&nbsp;: Validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation)
- L'interface {{DOMxRef('ValidityState')}}
