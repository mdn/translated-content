---
title: load
slug: Web/API/Window/load_event
tags:
  - Event
  - Window
translation_of: Web/API/Window/load_event
original_slug: Web/Events/load
---
L’évènement `load` est émis lorsqu’une ressource et ses ressources dépendantes sont completement chargées.

## Informations générales

- Spécification
  - : [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-load)
- Interface
  - : UIEvent
- Bouillonne
  - : Non
- Annulable
  - : Non
- Cible
  - : Document, Element
- Action par défaut
  - : Aucune.

## Propriétés

| Propriété  | Type                                        | Description                                                                                                   |
| ---------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| target     | [EventTarget](/fr/docs/Web/API/EventTarget) | La cible de l’évènement (la cible la plus haute dans l’arbre [DOM](/fr/docs/Comment_cr%C3%A9er_un_arbre_DOM)) |
| type       | [DOMString](/fr/docs/Web/API/DOMString)     | Le type de l’évènement                                                                                        |
| bubbles    | boolean                                     | Si l’évènement bouillonne ou non                                                                              |
| cancelable | boolean                                     | Si l’évènement est annulable ou non                                                                           |
| view       | [WindowProxy](/fr/docs/Web/API/WindowProxy) | [document.defaultView](/fr/docs/Web/API/Document/defaultView) (la fenêtre du document)                        |
| detail     | long (float)                                | 0.                                                                                                            |

Tous les évènements ci-dessus sont en lecture seule. Vous ne pouvez pas leur affecter de valeur.

## Exemple

```html
<script>
  window.addEventListener("load", function(event) {
    console.log("Toutes les ressources sont chargées !");
  });
</script>
```

## Évènements liés

- {{event("DOMContentLoaded")}}
- {{event("readystatechange")}}
- {{event("load")}}
- {{event("beforeunload")}}
- {{event("unload")}}
