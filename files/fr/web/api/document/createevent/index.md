---
title: Document.createEvent()
slug: Web/API/Document/createEvent
tags:
  - API
  - DOM
  - Méthode
  - Reference
translation_of: Web/API/Document/createEvent
---
> **Attention :** De nombreuses méthodes utilisées avec `createEvent`, tels que `initCustomEvent`, sont obsolètes. Utilisez le [constructeur d'évènement](/fr/docs/Web/API/CustomEvent) à la place.

{{ ApiRef("DOM") }}

Crée un [event](/en-US/docs/DOM/event) du type spécifié. L'objet retourné doit être intialisé et peut être passé ensuite à [element.dispatchEvent](/en-US/docs/DOM/element.dispatchEvent).

## Syntaxe

    var event = document.createEvent(type);

- `event` est l'objet [Event](/en-US/docs/DOM/event) créé.
- `type` est une chaîne de caractères qui représente le type d'événement à créer. Les types possibles d'événement incluent `"UIEvents"`, `"MouseEvents"`, `"MutationEvents"` et `"HTMLEvents"`. Voir la section [Notes](#notes) pour plus de détails.

## Exemple

    // Crée l'événement.
    var event = document.createEvent('Event');

    // Nomme l'événement 'build'.
    event.initEvent('build', true, true);

    //  Écoute l'événement.
    elem.addEventListener('build', function (e) {
      // e.target correspond à elem
    }, false);

    // target peut être tout Element ou autre EventTarget.
    elem.dispatchEvent(event);

### Notes

Les chaînes de type d'événement appropriées pour passer à `createEvent ()` sont répertoriées dans la norme DOM - voir le tableau à l'étape 2. Gardez à l'esprit que la plupart des objets événement ont maintenant des constructeurs, qui sont la méthode recommandée pour créer des occurrences d'objet événement.

Gecko prend en charge certains alias d'objet événement non standard, répertoriés ci-dessous :

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>Event Module</th>
      <th>Standard event object</th>
      <th>Gecko also supports</th>
    </tr>
    <tr>
      <td>Text event module</td>
      <td><code>TextEvent</code></td>
      <td><code>TextEvents</code></td>
    </tr>
    <tr>
      <td>Keyboard event module</td>
      <td><code>KeyboardEvent</code></td>
      <td><code>KeyEvents</code></td>
    </tr>
    <tr>
      <td>Basic events module</td>
      <td><code>Event</code></td>
      <td><code>Events</code></td>
    </tr>
  </tbody>
</table>

## Spécification

- [DOM Level 2 Events: createEvent](http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-DocumentEvent-createEvent)
- [DOM Level 3 Events: createEvent](http://www.w3.org/TR/DOM-Level-3-Events/#events-Events-DocumentEvent-createEvent)

## Voir aussi

- [Création et déclenchement d'événements](/fr/docs/Web/Guide/DOM/Events/Creating_and_triggering_events)
