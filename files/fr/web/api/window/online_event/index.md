---
title: 'Window: online event'
slug: Web/API/Window/online_event
tags:
  - API
  - Evènement
  - Online
  - Reference
  - Window
translation_of: Web/API/Window/online_event
---
{{APIRef}}

L'événement **`online`** de l'interface {{domxref("Window")}} est déclenché lorsque le navigateur a obtenu l'accès au réseau et que la valeur de {{domxref("Navigator.onLine")}} passe à `true`.

> **Note :** Cet événement ne doit pas être utilisé pour déterminer la disponibilité d'un site Web particulier. Des problèmes de réseau ou des pare-feu peuvent encore empêcher l'accès au site Web.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bulles</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Annulable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Propriété de gestionnaire d'événements</th>
      <td>
        {{domxref("GlobalEventHandlers.ononline", "ononline")}}
      </td>
    </tr>
  </tbody>
</table>

## Exemples

```js
// addEventListener version
window.addEventListener('online', (event) => {
    console.log("Vous êtes maintenant connecté au réseau.");
});

// ononline version
window.ononline = (event) => {
  console.log("Vous êtes maintenant connecté au réseau.");
};
```

## Spécifications

| Spécification                                                                                    | Statut                           |
| ------------------------------------------------------------------------------------------------ | -------------------------------- |
| {{SpecName('HTML WHATWG', "indices.html#event-online", "online event")}} | {{Spec2('HTML WHATWG')}} |

## Compatibilité des navigateurs

{{Compat("api.Window.online_event")}}

## Voir également

- [`offline`](/en-US/docs/Web/API/Window/offline_event)
