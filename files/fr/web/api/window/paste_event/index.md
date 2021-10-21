---
title: 'Window: paste event'
slug: Web/API/Window/paste_event
tags:
  - Evènement
  - Reference
  - Window
  - paste
translation_of: Web/API/Window/paste_event
---
{{APIRef}}

L'événement **`paste`** est déclenché lorsque l'utilisateur a lancé une action de "paste" via l'interface utilisateur du navigateur.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bulles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Annulable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("ClipboardEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Propriété du gestionnaire d'événements</th>
      <td>{{domxref("HTMLElement/onpaste", "onpaste")}}</td>
    </tr>
  </tbody>
</table>

La cible d'origine de cet événement est le {{domxref ("Element")}} qui était la cible prévue de l'action de collage. Vous pouvez écouter cet événement sur l'interface {{domxref ("Window")}} pour le gérer dans les phases de capture ou de bullage. Pour plus de détails sur cet événement, veuillez consulter la page sur le [Element: paste event](/en-US/docs/Web/API/Element/paste_event).

## Exemples

```js
window.addEventListener('paste', (event) => {
    console.log('paste action initiated')
});
```

## Spécifications

| Specification                                                            | Statut                               |
| ------------------------------------------------------------------------ | ------------------------------------ |
| {{SpecName('Clipboard API', '#clipboard-event-paste')}} | {{Spec2('Clipboard API')}} |

## Compatibilité des navigateurs

{{Compat("api.Window.paste_event")}}

## Voir également

- Événements liés: {{domxref("Window/cut_event", "cut")}}, {{domxref("Window/copy_event", "copy")}}
- Cet événement sur {{domxref("Element")}} cible: {{domxref("Element/paste_event", "paste")}}
- Cet événement sur {{domxref("Document")}} cible: {{domxref("Document/paste_event", "paste")}}
