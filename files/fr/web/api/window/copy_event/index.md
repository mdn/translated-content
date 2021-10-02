---
title: 'Window: copy event'
slug: Web/API/Window/copy_event
tags:
  - API
  - Clippboard API
  - Copie
  - Event
  - Evènement
  - Reference
  - Window
  - copy
translation_of: Web/API/Window/copy_event
---
{{APIRef}}

L'événement **`copy`** se déclenche lorsque l'utilisateur lance une action de copie via l'interface utilisateur du nagivateur.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bulles</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Annulable</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("ClipboardEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Propriété de gestionnaire d'événement</th>
      <td>{{domxref("HTMLElement/oncopy", "oncopy")}}</td>
    </tr>
  </tbody>
</table>

La cible d'origine de cet événement est le {{domxref ("Element")}} qui était la cible prévue de l'action de copie. Vous pouvez écouter cet événement sur l'interface {{domxref ("Window")}} pour le gérer dans les phases de capture ou de bullage. Pour plus de détails sur cet événement, veuillez consulter la page sur le [Element: copy event](/en-US/docs/Web/API/Element/copy_event).

## Exemples

```js
window.addEventListener('copy', (event) => {
    console.log('action de copie lancée')
});
```

## Spécifications

| Spécification                                                            | Statut                               |
| ------------------------------------------------------------------------ | ------------------------------------ |
| {{SpecName('Clipboard API', '#clipboard-event-copy')}} | {{Spec2('Clipboard API')}} |

## Compatibilité des navigateurs

{{Compat("api.Window.copy_event")}}

## Voir également

- Événements liés: {{domxref("Window/cut_event", "cut")}}, {{domxref("Window/paste_event", "paste")}}
- Cet événement sur {{domxref("Element")}} cible: {{domxref("Element/copy_event", "copy")}}
- Cet événement sur {{domxref("Document")}} cible: {{domxref("Document/copy_event", "copy")}}
