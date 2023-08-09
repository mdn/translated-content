---
title: HTMLFormElement.reportValidity()
slug: Web/API/HTMLFormElement/reportValidity
---

{{APIRef("HTML DOM")}}

La méthode **`HTMLFormElement.reportValidity()`** renvoie true si les contrôles enfants de l'élément répondent à leurs contraintes de validation. Lorsque la valeur `false` est renvoyée, , les événements [`invalid`](/fr/docs/Web/Events/invalid) annulables sont déclenchés pour chaque enfant non valide et les problèmes de validation sont signalés à l'utilisateur. .

## Syntaxe

```js
HTMLFormElement.reportValidity();
```

### Valeur de retour

{{domxref("Boolean")}}

## Exemple

```js
document.forms["myform"].addEventListener(
  "invalid",
  function () {
    // Optional response here
  },
  false,
);

document.forms["myform"].addEventListener(
  "submit",
  function () {
    document.forms["myform"].reportValidity();
  },
  false,
);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
