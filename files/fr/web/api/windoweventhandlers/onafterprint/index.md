---
title: WindowEventHandlers.onafterprint
slug: Web/API/WindowEventHandlers/onafterprint
tags:
  - API
  - DOM
  - HTML-DOM
  - Propriété
  - Reference
  - Window
  - impression
  - évènements
translation_of: Web/API/WindowEventHandlers/onafterprint
---
{{ApiRef}}

La propriété WindowEventHandlers.onafterprint définit et renvoie {{event("afterprint")}} {{event("Event_handlers", "event handler")}} pourl a fenêtre actuelle.

## Syntaxe

    window.onafterprint = code de traitement de l'événement

## Notes

Les événements `beforeprint` et `afterprint` permettent aux pages de modifier leur contenu avant le début de l'impression (pour supprimer une bannière, par exemple), puis d'annuler ces modifications une fois l'impression terminée. En général, les auteurs de contenu devraient préférer l'utilisation d'une règle CSS [@media print](/en-US/docs/Web/CSS/@media), mais il peut être nécessaire d'utiliser ces événements dans certains cas.

L'événement `afterprint` est appelé après l'impression par l'utilisateur, ou s'il interrompt la boîte de dialogue d'impression.





Safari ne reconnaît pas ces événements.

## Spécification

| Specification                                                                                        | Status                           | Comment |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', '#handler-window-onafterprint', 'onafterprint')}} | {{Spec2('HTML WHATWG')}} |         |

## Compatibilité des navigateurs

{{Compat("api.WindowEventHandlers.onafterprint")}}

## Voir également

- {{domxref("window.print")}}
- {{domxref("window.onbeforeprint")}}
- [Printing](/en-US/docs/Printing)
