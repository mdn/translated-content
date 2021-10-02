---
title: 'Element : évènement mouseover'
slug: Web/API/Element/mouseover_event
tags:
  - API
  - DOM
  - Event
  - Interface
  - Reference
  - mouseover
translation_of: Web/API/Element/mouseover_event
---
{{APIRef}}

L'évènement **`mouseover`** est déclenché à partir d'un {{domxref("Element")}} lorsqu'un dispositif de pointage (une souris par exemple) déplace le curseur sur l'élément ou sur l'un de ses éléments fils.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Se propage/remonte dans le DOM</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Annulable</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("MouseEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Propriété pour la gestion d'évènement</th>
      <td>
        {{domxref("GlobalEventHandlers.onmouseover", "onmouseover")}}
      </td>
    </tr>
  </tbody>
</table>

## Exemples

L'exemple suivant illustre la différence entre les évènements `mouseover` et [`mouseenter`](/fr/docs/Web/Events/mouseenter).

### HTML

```html
<ul id="test">
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
```

### JavaScript

```js
let test = document.getElementById("test");

// Ce gestionnaire ne sera exécuté qu'une fois
// lorsque le curseur se déplace sur la liste
test.addEventListener("mouseenter", function( event ) {
  // on met l'accent sur la cible de mouseenter
  event.target.style.color = "purple";

  // on réinitialise la couleur après quelques instants
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

// Ce gestionnaire sera exécuté à chaque fois que le curseur
// se déplacera sur un autre élément de la liste
test.addEventListener("mouseover", function( event ) {
  // on met l'accent sur la cible de mouseover
  event.target.style.color = "orange";

  // on réinitialise la couleur après quelques instants
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Spécifications

| Spécification                                                                            | État                             |
| ---------------------------------------------------------------------------------------- | -------------------------------- |
| {{SpecName('UI Events', '#event-type-mouseover', 'mouseover')}}     | {{Spec2('UI Events')}}     |
| {{SpecName('DOM3 Events', '#event-type-mouseover', 'mouseover')}} | {{Spec2('DOM3 Events')}} |

## Compatibilité des navigateurs

{{Compat("api.Element.mouseover_event")}}

## Voir aussi

- [Une introduction aux évènements](/fr/docs/Apprendre/JavaScript/Building_blocks/Evènements)
- D'autres évènements connexes

  - [`mousedown`](/fr/docs/Web/API/Element/mousedown_event)
  - [`mouseup`](/fr/docs/Web/API/Element/mouseup_event)
  - [`mousemove`](/fr/docs/Web/API/Element/mousemove_event)
  - [`click`](/fr/docs/Web/API/Element/click_event)
  - [`dblclick`](/fr/docs/Web/API/Element/dblclick_event)
  - [`mouseout`](/fr/docs/Web/API/Element/mouseout_event)
  - [`mouseenter`](/fr/docs/Web/API/Element/mouseenter_event)
  - [`mouseleave`](/fr/docs/Web/API/Element/mouseleave_event)
  - [`contextmenu`](/fr/docs/Web/API/Element/contextmenu_event)
