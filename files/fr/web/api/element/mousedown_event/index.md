---
title: 'Element : évènement mousedown'
slug: Web/API/Element/mousedown_event
tags:
  - API
  - DOM
  - Interface
  - Reference
  - events
  - mousedown
translation_of: Web/API/Element/mousedown_event
---
{{APIRef}}

L'évènement **`mousedown`** est déclenché à partir d'un {{domxref("Element")}} lorsqu'on appuie sur le bouton d'un dispositif de pointage (une souris par exemple) pendant que le curseur est sur l'élément.

> **Note :** Cet évènement est différent de {{domxref("Element/click_event", "click")}}. `click` est déclenché après qu'un clic "entier" ait eu lieu (c'est-à-dire quand le bouton a été pressé puis relaché tandis que le pointeur était sur le même élément). `mousedown` est déclenché dès qu'on appuie sur le bouton.

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
        {{domxref("GlobalEventHandlers.onmousedown", "onmousedown")}}
      </td>
    </tr>
  </tbody>
</table>

## Exemples

{{page("/fr/docs/Web/API/Element/mousemove_event", "Exemples")}}

## Spécifications

| Spécification                                                                            | État                             |
| ---------------------------------------------------------------------------------------- | -------------------------------- |
| {{SpecName('UI Events', '#event-type-mousedown', 'mousedown')}}     | {{Spec2('UI Events')}}     |
| {{SpecName('DOM3 Events', '#event-type-mousedown', 'mousedown')}} | {{Spec2('DOM3 Events')}} |

## Compatibilité des navigateurs

{{Compat("api.Element.mousedown_event")}}

## Voir aussi

- [Une introduction aux évènements](/fr/docs/Apprendre/JavaScript/Building_blocks/Evènements)
- D'autres évènements connexes

  - [`mouseup`](/fr/docs/Web/API/Element/mouseup_event)
  - [`mousemove`](/fr/docs/Web/API/Element/mousemove_event)
  - [`click`](/fr/docs/Web/API/Element/click_event)
  - [`dblclick`](/fr/docs/Web/API/Element/dblclick_event)
  - [`mouseout`](/fr/docs/Web/API/Element/mouseout_event)
  - [`mouseover`](/fr/docs/Web/API/Element/mouseover_event)
  - [`mouseenter`](/fr/docs/Web/API/Element/mouseenter_event)
  - [`mouseleave`](/fr/docs/Web/API/Element/mouseleave_event)
  - [`contextmenu`](/fr/docs/Web/API/Element/contextmenu_event)
