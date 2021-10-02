---
title: 'Element : évènement mouseout'
slug: Web/API/Element/mouseout_event
tags:
  - API
  - DOM
  - Event
  - Interface
  - Reference
  - mouseout
translation_of: Web/API/Element/mouseout_event
---
{{APIRef}}

L'évènement **`mouseout`** est déclenché à partir d'un {{domxref("Element")}} lorsqu'un dispositif de pointage (ex. une souris) déplace le curseur en dehors de l'élément ou de l'un de ses fils. `mouseout` est également apporté à un élément si le curseur se déplace dans un élément fils car l'élément fils peut masquer la zone visible de l'élément.

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
      <th scope="row">Propriété pour la gestion d'évènements</th>
      <td>
        {{domxref("GlobalEventHandlers.onmouseout", "onmouseout")}}
      </td>
    </tr>
  </tbody>
</table>

## Exemples

Dans l'exemple suivant, on illustre la différence entre `mouseout` et [`mouseleave`](/fr/docs/Web/API/Element/mouseleave_event). Ce dernier est ajouté à {{HTMLElement("ul")}} pour colorer la liste en violet lorsque la souris quitte `<ul>`. `mouseout` est ajouté à la liste pour colorer l'élément ciblé en orange lorsque la souris le quitte.

En essayant cet exemple, vous pourrez voir que `mouseout` est envoyé aux éléments individuels de la liste tandis que `mouseleave` est géré sur la liste entière. Cela provient de la hiérarchie des éléments et du fait que les éléments de la liste "masquent" la liste sous-jacente.

### HTML

```html
<ul id="test">
  <li>élément 1</li>
  <li>élément 2</li>
  <li>élément 3</li>
</ul>
```

### JavaScript

```js
let test = document.getElementById("test");

// On affiche la liste en violet lorsque le curseur quitte
// l'élément <ul>
test.addEventListener("mouseleave", function( event ) {
  // on cible la cible de mouseleave
  event.target.style.color = "purple";

  // on réinitialise la couleur après quelques instants
  setTimeout(function() {
    event.target.style.color = "";
  }, 1000);
}, false);

// On affiche les éléments <li> en orange lorsque la souris
// les quitte
test.addEventListener("mouseout", function( event ) {
  // on cible la cible de mouseout
  event.target.style.color = "orange";

 // on réinitialise la couleur après quelques instants
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);
```

### Résultat

{{EmbedLiveSample("Exemples", 640, 200)}}

## Spécifications

| Spécification                                                                        | État                             |
| ------------------------------------------------------------------------------------ | -------------------------------- |
| {{SpecName('UI Events', '#event-type-mouseout', 'mouseout')}}     | {{Spec2('UI Events')}}     |
| {{SpecName('DOM3 Events', '#event-type-mouseout', 'mouseout')}} | {{Spec2('DOM3 Events')}} |

## Compatibilité des navigateurs

{{Compat("api.Element.mouseout_event")}}

## Voir aussi

- [Une introduction aux évènements](/fr/docs/Apprendre/JavaScript/Building_blocks/Evènements)
- D'autres évènements connexes

  - [`mousedown`](/fr/docs/Web/API/Element/mousedown_event)
  - [`mouseup`](/fr/docs/Web/API/Element/mouseup_event)
  - [`mousemove`](/fr/docs/Web/API/Element/mousemove_event)
  - [`mouseover`](/fr/docs/Web/API/Element/mouseover_event)
  - [`click`](/fr/docs/Web/API/Element/click_event)
  - [`dblclick`](/fr/docs/Web/API/Element/dblclick_event)
  - [`mouseenter`](/fr/docs/Web/API/Element/mouseenter_event)
  - [`mouseleave`](/fr/docs/Web/API/Element/mouseleave_event)
  - [`contextmenu`](/fr/docs/Web/API/Element/contextmenu_event)
