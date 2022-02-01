---
title: WindowEventHandlers.onlanguagechange
slug: Web/API/WindowEventHandlers/onlanguagechange
tags:
  - API
  - Event Handler
  - Experimental
  - Propriété
  - Reference
  - Window
translation_of: Web/API/WindowEventHandlers/onlanguagechange
---
{{APIRef("HTML DOM")}} {{SeeCompatTable}}

La propriété **`onlanguagechange`** du mixin {{domxref("WindowEventHandlers")}} est le {{event("Event_handlers", "event handler")}} pour le traitement des événements {{event("languagechange")}}.

Ces événements sont reçus par l'objet implémentant cette interface, généralement un {{domxref ("Window")}}, un {{domxref ("HTMLBodyElement")}} ou un {{domxref ("HTMLIFrameElement")}}. Un tel événement est envoyé par le navigateur pour informer que la liste des langues préférées a été mise à jour. La liste est accessible via {{domxref("NavigatorLanguage.languages")}}.

## Syntaxe

    object.onlanguagechange = function;

### Valeur

- `function` est le nom d'une fonction définie par l'utilisateur, sans le suffixe `()` ni aucun paramètre, ou une déclaration de fonction anonyme, telle que `function(event) {...}`. Un gestionnaire d'événements a toujours un seul paramètre, contenant l'événement, ici de type {{domxref ("Event")}}.

## Exemple

```js
window.onlanguagechange = function(event) {
  console.log('événement de changement de langue détecté!');
};
```

## Spécifications

| Spécification                                                                                                                                | Statut                               | Commentaire             |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------------------- |
| {{ SpecName('HTML WHATWG', '#handler-window-onlanguagechange', 'WindowEventHandler.onlanguagechange') }} | {{ Spec2('HTML WHATWG') }} | Spécification initiale. |

## Compatibilité des navigateurs

{{Compat("api.WindowEventHandlers.onlanguagechange")}}

## Voir également

- L'événement {{event("languagechange")}} et son type, {{domxref("Event")}}
