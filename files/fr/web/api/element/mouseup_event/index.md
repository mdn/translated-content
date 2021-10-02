---
title: 'Element : évènement mouseup'
slug: Web/API/Element/mouseup_event
tags:
  - API
  - DOM
  - Event
  - Interface
  - Reference
  - events
  - mouseup
translation_of: Web/API/Element/mouseup_event
---
{{APIRef}}

L'évènement **`mouseup`** est déclenché à partir d'un {{domxref("Element")}} lorsqu'un bouton d'un dispositif de pointage (une souris ou un pavé tactile par exemple) est relaché lorsque le pointeur est sur cet élément.

Les évènements `mouseup` peuvent être comparés aux évènements {{domxref("Element.mousedown_event", "mousedown")}} qui se produisent lorsqu'on _appuie_ sur un bouton.

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
        {{domxref("GlobalEventHandlers.onmouseup", "onmouseup")}}
      </td>
    </tr>
  </tbody>
</table>

## Exemples

{{page("/fr/docs/Web/API/Element/mousemove_event", "Exemples")}}

## Spécifications

| Spécification                                                                    | État                             |
| -------------------------------------------------------------------------------- | -------------------------------- |
| {{SpecName('UI Events', '#event-type-mouseup', 'mouseup')}} | {{Spec2('UI Events')}}     |
| {{SpecName('DOM3 Events', '#event-type-mouseup', 'mouseup')}} | {{Spec2('DOM3 Events')}} |

## Compatibilité des navigateurs

{{Compat("api.Element.mouseup_event")}}

## Voir aussi

- [Une introduction aux évènements](/fr/docs/Apprendre/JavaScript/Building_blocks/Evènements)
- D'autres évènements connexes

  - [`mousedown`](/fr/docs/Web/API/Element/mousedown_event)
  - [`mousemove`](/fr/docs/Web/API/Element/mousemove_event)
  - [`click`](/fr/docs/Web/API/Element/click_event)
  - [`dblclick`](/fr/docs/Web/API/Element/dblclick_event)
  - [`mouseout`](/fr/docs/Web/API/Element/mouseout_event)
  - [`mouseover`](/fr/docs/Web/API/Element/mouseover_event)
  - [`mouseenter`](/fr/docs/Web/API/Element/mouseenter_event)
  - [`mouseleave`](/fr/docs/Web/API/Element/mouseleave_event)
  - [`contextmenu`](/fr/docs/Web/API/Element/contextmenu_event)
