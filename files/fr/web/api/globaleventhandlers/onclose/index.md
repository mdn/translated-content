---
title: GlobalEventHandlers.onclose
slug: Web/API/GlobalEventHandlers/onclose
tags:
  - API
  - DOM
  - HTML
  - Property
  - Reference
translation_of: Web/API/GlobalEventHandlers/onclose
---
{{ApiRef("HTML DOM")}}

Un gestionnaire d'évènement utilisé lorsque des évènements de fermeture sont envoyés à la fenêtre (non disponible dans Firefox 2 ou Safari).

## Syntaxe

    window.onclose = funcRef;

### Paramètres

- `funcRef` est une fonction.

## Exemple

```js
window.onclose = resetThatServerThing;
```

## Spécifications

| Spécification                                                                                    | Statut                           | Commentaires |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG','webappapis.html#handler-onclose','onclose')}} | {{Spec2('HTML WHATWG')}} |              |
