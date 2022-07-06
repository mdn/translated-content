---
title: scroll
slug: Web/API/Document/scroll_event
tags:
  - API
  - Event Handler
  - Reference
  - events
  - requestAnimationFrame
translation_of: Web/API/Document/scroll_event
---
{{APIRef}}

L’évènement **`scroll`** (défilement) est émis lorsque l’on fait défiler le document ou un élément.

## Informations générales

<table class="properties">
  <tbody>
    <tr>
      <th>Bouillonne</th>
      <td>
        Pas sur les éléments, mais bouillonne vers la defaultView si émis sur le
        document
      </td>
    </tr>
    <tr>
      <th>Annulable</th>
      <td>Non</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{domxref("UIEvent")}}</td>
    </tr>
    <tr>
      <th>Cible</th>
      <td>
        DefaultView, {{domxref("Document")}},
        {{domxref("Element")}}
      </td>
    </tr>
    <tr>
      <th>Action par défaut</th>
      <td>Aucune</td>
    </tr>
  </tbody>
</table>

> **Note :** Sur iOS UIWebViews, les évènements `scroll` ne sont pas émis pendant le défilement, mais une fois que celui-ci est terminé. Voir [Bootstrap issue #16202](https://github.com/twbs/bootstrap/issues/16202). Safari et WKWebViews ne sont pas affectés par ce bogue.

## Propriétés

| Propriété                             | Type                                 | Description                                                                   |
| ------------------------------------- | ------------------------------------ | ----------------------------------------------------------------------------- |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | La cible de l’évènement (la plus haute dans l’arbre DOM).                     |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}     | Le type d’évènement.                                                          |
| `bubbles` {{readonlyInline}}    | {{domxref("Boolean")}}         | Si l’évènement bouillonne ou non.                                             |
| `cancelable` {{readonlyInline}} | {{domxref("Boolean")}}         | Si l’évènement est annulable ou non.                                          |
| `view` {{readonlyInline}}       | {{domxref("WindowProxy")}} | {{domxref("Document.defaultView")}} (objet `window` du document) |
| `detail` {{readonlyInline}}     | `long` (`float`)                     | 0.                                                                            |

## Exemple

### Temporisation des évènements scroll

Comme les évènements `scroll` peuvent être émis à une fréquence élevée, le gestionnaire d’évènements ne devrait pas effectuer des opérations coûteuses en termes de puissance de calcul, telles que des modification du DOM. À la place, il est recommandé de temporiser l’évènement en utilisant {{domxref("window.requestAnimationFrame()", "requestAnimationFrame()")}}, {{domxref("window.setTimeout()", "setTimeout()")}} ou un {{domxref("CustomEvent")}}, comme suit.

Notez, cependant, que les évènements d’interface utilisateur et les frames d’animation sont émises à peu près à la même fréquence, et ainsi l’optimisation qui suit est souvent superflue. Cet exemple optimise l’évènement `scroll` avec `requestAnimationFrame`.

```js
// Référence: http://www.html5rocks.com/en/tutorials/speed/animations/

var derniere_position_de_scroll_connue = 0;
var ticking = false;

function faireQuelqueChose(position_scroll) {
  // faire quelque chose avec la position du scroll
}

window.addEventListener('scroll', function(e) {
  derniere_position_de_scroll_connue = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      faireQuelqueChose(derniere_position_de_scroll_connue);
      ticking = false;
    });
  }

  ticking = true;
});
```

### Autres exemples

Pour plus d’exemples similaires, voir l’évènement [resize](/en-US/docs/Web/Events/resize#Example).

## Spécifications

<table class="standard-table">
  <tbody>
    <tr>
      <td>Spécification</td>
      <td>État</td>
    </tr>
    <tr>
      <td>{{SpecName('CSSOM View', '#scrolling-events')}}</td>
      <td>{{Spec2('CSSOM View')}}</td>
    </tr>
  </tbody>
</table>

## Compatibilité des navigateurs

{{Compat("api.Document.scroll_event")}}

## Voir aussi

- {{domxref("GlobalEventHandlers.onscroll")}}
