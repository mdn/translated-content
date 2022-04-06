---
title: WindowEventHandlers.onbeforeprint
slug: conflicting/Web/API/Window/beforeprint_event
tags:
  - API
  - DOM
  - Propriété
  - impression
translation_of: Web/API/WindowEventHandlers/onbeforeprint
original_slug: Web/API/WindowEventHandlers/onbeforeprint
---
{{ApiRef}}

La propriété `onbeforeprint` définit et retourne le code du gestionnaire d'événement `onbeforeprint` onbeforeprint pour la fenêtre actuelle.

## Syntaxe

    window.onbeforeprint = code de traitement de l'événement

## Notes

Les événements `beforeprint` et `afterprint` permettent aux pages de modifier leur contenu avant le début de l'impression (peut-être pour supprimer une bannière, par exemple), puis d'annuler ces modifications une fois l'impression terminée. En général, les auteurs de contenu devraient préférer l'utilisation d'une règle CSS [@media print](/en-US/docs/Web/CSS/@media), mais il peut être nécessaire d'utiliser ces événements dans certains cas.

L'événement `beforeprint` est appelé avant l'ouverture de la fenêtre de dialogue d'impression.

Safari ne reconnaît pas ces événements, mais un résultat équivalent à l'événement `beforeprint` peut être obtenu avec `{{domxref("window.matchMedia")}}('print')`.

```js
var mediaQueryList = window.matchMedia('print');
mediaQueryList.addListener(function(mql) {
  if(mql.matches) {
    console.log('équivalent webkit de onbeforeprint');
  }
});
```

## Spécification

| Specification                                                                                            | Status                           | Comment |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', '#handler-window-onbeforeprint', 'onbeforeprint')}} | {{Spec2('HTML WHATWG')}} |         |

## Compatibilité des navigateurs

{{Compat("api.WindowEventHandlers.onbeforeprint")}}

## Voir également

- {{domxref("window.print")}}
- {{domxref("window.onafterprint")}}
- [Printing](/en-US/docs/Printing)
