---
title: HTMLFormElement.reportValidity()
slug: Web/API/HTMLFormElement/reportValidity
tags:
  - HTML
  - Méthode
translation_of: Web/API/HTMLFormElement/reportValidity
---
{{APIRef("HTML DOM")}}

La méthode  **`HTMLFormElement.reportValidity()`** renvoie true si les contrôles enfants de l'élément répondent à leurs contraintes de validation. Lorsque la valeur `false` est renvoyée, ,  les événements [`invalid`](/en-US/docs/Web/Events/invalid) annulables sont déclenchés pour chaque enfant non valide et les problèmes de validation sont signalés à l'utilisateur. .

## Syntax

    HTMLFormElement.reportValidity()

### Valeur de retour

{{domxref("Boolean")}}

## Exemple

```js
document.forms['myform'].addEventListener('invalid', function() {
  // Optional response here
}, false);

document.forms['myform'].addEventListener('submit', function() {
  document.forms['myform'].reportValidity();
}, false);
```

## Specifications

| Specification                                                                                                                                    | Status                           | Commentaire         |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName("HTML WHATWG", "forms.html#dom-cva-reportvalidity", "HTMLFormElement.reportValidity()")}}             | {{Spec2("HTML WHATWG")}} |                     |
| {{SpecName("HTML5.1", "semantics.html#the-constraint-validation-api", "HTMLFormElement.reportValidity()")}} | {{Spec2("HTML5.1")}}     | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.HTMLFormElement.reportValidity")}}
