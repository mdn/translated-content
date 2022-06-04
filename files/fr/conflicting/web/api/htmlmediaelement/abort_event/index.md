---
title: GlobalEventHandlers.onabort
slug: conflicting/Web/API/HTMLMediaElement/abort_event
tags:
  - API
  - NeedContent
  - Property
  - Reference
  - Window
translation_of: Web/API/GlobalEventHandlers/onabort
original_slug: Web/API/GlobalEventHandlers/onabort
---
{{ ApiRef("HTML DOM") }}

Un gestionnaire d'évènement pour interrompre les événements envoyés à la fenêtre. (non disponible sur Firefox 2 ou Safari).

Bien que le [standard pour l'abandon d'un chargement de document](https://html.spec.whatwg.org/multipage/browsing-the-web.html#abort-a-document) soit défini, le problème HTML N° 3525 suggère que les navigateurs ne déclenchent pas pour l'instant l'événement "abort" sur une `window` qui déclencherait un appel à `onabort`.

À FAIRE : définir ce qu'est "interrompre" : fermer la fenêtre via le gestionnaire de fenêtre ? Arrêter le chargement de la page ? Par quels moyens et pour quelles raisons (utilisateur, réseau/serveur) ? À quelle étape cela devrait-il se déclencher / être capturé ? Pour IE, onabort est seulement disponible pour les balises `img`.

## Syntaxe

    window.onabort = refFonc

- `refFonc` : référence à une fonction

## Exemple

```js
window.onabort = function() {
  alert("Chargement interrompu.");
}
```

## Spécification

| Spécification                                                                                    | Statut                           | Commentaire |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG','webappapis.html#handler-onabort','onabort')}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.GlobalEventHandlers.onabort")}}
