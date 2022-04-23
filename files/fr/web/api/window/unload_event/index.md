---
title: unload
slug: Web/API/Window/unload_event
tags:
  - JavaScript
  - events
translation_of: Web/API/Window/unload_event
original_slug: Web/Events/unload
---
L'événement `unload` est appelé lorsque le document ou une ressource enfant est en train d'être déchargé.

Il est lancé après :

1.  [beforeunload](/en-US/docs/Mozilla_event_reference/beforeunload) (événement annulable)
2.  [pagehide](/en-US/docs/Mozilla_event_reference/pagehide)

Le document se trouve alors dans un état particulier&nbsp;:

- Toutes les ressources existent encore (img, iframe etc.)
- Plus rien n'est encore visible par l'utilisateur final
- Les intéractions avec l'interface sont désactivées (`window.open`, `alert`, `confirm`, etc.)
- Aucune erreur ne viendra interrompre le flux de déchargement.

Veuiller noter que l'événement `unload` suit l'ordre du document : le cadre parent est déchargé *avant* le `unload` d'un cadre enfant (voir l'exemple ci-dessous).

<table class="properties">
  <tbody>
    <tr>
      <td>Événement propageable</td>
      <td>Non</td>
    </tr>
    <tr>
      <td>Annulable</td>
      <td>Non</td>
    </tr>
    <tr>
      <td>Objets cibles</td>
      <td>defaultView, Document, Element</td>
    </tr>
    <tr>
      <td>Interface</td>
      <td>
        {{domxref("UIEvent")}} si généré depuis un élément de l'interface
        utilisateur, {{domxref("Event")}}
      </td>
    </tr>
    <tr>
      <td>Action par défaut</td>
      <td>Aucune</td>
    </tr>
  </tbody>
</table>

## Propriétés

| Propriété                             | Type                                             | Description                                                                                |
| ------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `target` {{readonlyInline}}     | [`EventTarget`](/en-US/docs/Web/API/EventTarget) | La cible de l'événement (la cible de plus haut niveau dans le DOM).                        |
| `type` {{readonlyInline}}       | [`DOMString`](/en-US/docs/Web/API/DOMString)     | Le type d'événement.                                                                       |
| `bubbles` {{readonlyInline}}    | [`Boolean`](/en-US/docs/Web/API/Boolean)         | Si l'événement remonte ou non.                                                             |
| `cancelable` {{readonlyInline}} | [`Boolean`](/en-US/docs/Web/API/Boolean)         | Si l'événement est annulable ou non.                                                       |
| `view` {{readonlyInline}}       | [`WindowProxy`](/en-US/docs/Web/API/WindowProxy) | [`document.defaultView`](/en-US/docs/Web/API/Document/defaultView) (`fenêtre` du document) |
| `detail` {{readonlyInline}}     | `long` (`float`)                                 | 0.                                                                                         |

## Exemple

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Cadre parent</title>
    <script>
      window.addEventListener('beforeunload', function(event) {
        console.log('Je suis le 1er.');
      });
      window.addEventListener('unload', function(event) {
        console.log('Je suis le 3ème.');
      });
    </script>
  </head>
  <body>
    <iframe src="child-frame.html"></iframe>
  </body>
</html>
```

Ci-dessous, le contenu de `child-frame.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Cadre enfant</title>
    <script>
      window.addEventListener('beforeunload', function(event) {
        console.log('Je suis le 2nd.');
      });
      window.addEventListener('unload', function(event) {
        console.log('Je suis le 4ème et dernier…');
      });
    </script>
  </head>
  <body>
      ☻
  </body>
</html>
```

Quand le cadre parent est déchargé, les événements sont lancés dans l'ordre décrit par les messages `console.log`.

## Événements liés

- {{event("DOMContentLoaded")}}
- {{event("readystatechange")}}
- {{event("load")}}
- {{event("beforeunload")}}
- {{event("unload")}}

## Spécifications

- [Unloading Documents — unload a document](https://html.spec.whatwg.org/multipage/browsers.html#unloading-documents)
- [Event Module Definition — unload](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-unload)
