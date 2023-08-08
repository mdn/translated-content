---
title: "Window: cut event"
slug: Web/API/Window/cut_event
---

{{APIRef}}

L'événement **`cut`** est déclenché lorsque l'utilisateur a lancé une action de "cut" via l'interface utilisateur du navigateur.

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
      <th scope="row">Propriété de gestionnaire d'événements</th>
      <td>{{domxref("HTMLElement/oncut", "oncut")}}</td>
    </tr>
  </tbody>
</table>

La cible d'origine de cet événement est le {{domxref("Element")}} qui était la cible prévue de l'action cut. Vous pouvez écouter cet événement sur l'interface {{domxref("Window")}} pour le gérer dans les phases de capture ou de bullage. Pour plus de détails sur cet événement, veuillez consulter la page sur l'événement [Element: cut event](/fr/docs/Web/API/Element/cut_event).

## Exemples

```js
window.addEventListener("cut", (event) => {
  console.log("cut action initiated");
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Événements liés: {{domxref("Window/copy_event", "copy")}}, {{domxref("Window/paste_event", "paste")}}
- Cet événement sur {{domxref("Element")}} targets: {{domxref("Element/cut_event", "cut")}}
- Cet événement sur {{domxref("Document")}} targets: {{domxref("Document/cut_event", "cut")}}
