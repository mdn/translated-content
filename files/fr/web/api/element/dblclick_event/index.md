---
title: 'Element : évènement dblclick'
slug: Web/API/Element/dblclick_event
tags:
  - API
  - DOM
  - Event
  - Interface
  - Reference
  - dblclick
translation_of: Web/API/Element/dblclick_event
---
{{APIRef}}

L'évènement **`dblclick`** se déclenche à partir d'un élément lorsqu'un bouton d'un dispositif de pointage est double-cliqué (c'est-à-dire qu'on clique deux fois sur le méme élément dans un temps très court).

`dblclick` se déclenche après deux évènements {{domxref("Element/click_event", "click")}} (et, par extension, après deux paires d'évènements {{domxref("Element.mousedown_event", "mousedown")}} et {{domxref("Element.mouseup_event", "mouseup")}}).

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
        {{domxref("GlobalEventHandlers.ondblclick", "ondblclick")}}
      </td>
    </tr>
  </tbody>
</table>

## Exemples

Dans cet exemple, on modifie la taille d'une tuile lorsqu'on double-clique dessus.

### JavaScript

```js
const card = document.querySelector('aside');

card.addEventListener('dblclick', function (e) {
  card.classList.toggle('large');
});
```

### HTML

```html
<aside>
  <h3>Une tuile</h3>
  <p>Double-cliquer pour redimensionner cet objet.</p>
</aside>
```

### CSS

```css
aside {
  background: #fe9;
  border-radius: 1em;
  display: inline-block;
  padding: 1em;
  transform: scale(.9);
  transform-origin: 0 0;
  transition: transform .6s;
}

.large {
  transform: scale(1.3);
}
```

### Résultat

{{EmbedLiveSample("Exemples", 700, 200)}}

## Spécifications

| Spécification                                                                        | État                             |
| ------------------------------------------------------------------------------------ | -------------------------------- |
| {{SpecName('UI Events', '#event-type-dblclick', 'dblclick')}}     | {{Spec2('UI Events')}}     |
| {{SpecName('DOM3 Events', '#event-type-dblclick', 'dblclick')}} | {{Spec2('DOM3 Events')}} |

## Compatibilité des navigateurs

{{Compat("api.Element.dblclick_event")}}

## Voir aussi

- [Une introduction aux évènements](/fr/docs/Apprendre/JavaScript/Building_blocks/Evènements)
- D'autres évènements connexes

  - [`mousedown`](/fr/docs/Web/API/Element/mousedown_event)
  - [`mouseup`](/fr/docs/Web/API/Element/mouseup_event)
  - [`mousemove`](/fr/docs/Web/API/Element/mousemove_event)
  - [mouseover](/fr/docs/Web/API/Element/mouseover_event)
  - [`click`](/fr/docs/Web/API/Element/click_event)
  - [`mouseout`](/fr/docs/Web/API/Element/mouseout_event)
  - [`mouseenter`](/fr/docs/Web/API/Element/mouseenter_event)
  - [`mouseleave`](/fr/docs/Web/API/Element/mouseleave_event)
  - [`contextmenu`](/fr/docs/Web/API/Element/contextmenu_event)
