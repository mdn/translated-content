---
title: 'Window: rejectionhandled event'
slug: Web/API/Window/rejectionhandled_event
tags:
  - API
  - Evènement
  - HTML DOM
  - JavaScript
  - Promesse
  - Reference
  - Window
  - onrejectionhandled
  - rejectionhandled
translation_of: Web/API/Window/rejectionhandled_event
---
{{APIRef("HTML DOM")}}

L'événement **`rejectionhandled`** est envoyé à la portée globale du script (généralement {{domxref("window")}} mais aussi {{domxref("Worker")}}) chaque fois qu'un JavaScript {{jsxref("Promise")}} est rejeté mais après que le rejet de la promesse a été traité.

Cela peut être utilisé dans le débogage et pour la résilience générale des applications, en tandem avec l'événement {{domxref ("Window.unhandledrejection_event", "unhandledrejection")}}, qui est envoyé lorsqu'une promesse est rejetée mais qu'il n'y a pas de responsable du rejet .

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bulles</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Annulable</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("PromiseRejectionEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Propriété de gestionnaire d'événements</th>
      <td>
        {{domxref("WindowEventHandlers.onrejectionhandled", "onrejectionhandled")}}
      </td>
    </tr>
  </tbody>
</table>

## Exemple

Vous pouvez utiliser l'événement `rejectionhandled` pour consigner les promesses rejetées sur la console, ainsi que les raisons pour lesquelles elles ont été rejetées :

```js
window.addEventListener("rejectionhandled", event => {
  console.log("Promise rejected; reason: " + event.reason);
}, false);
```

## Spécifications

| Spécification                                                                                                                    | Statut                           | Commentaire          |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('HTML WHATWG', 'webappapis.html#unhandled-promise-rejections', 'rejectionhandled')}} | {{Spec2('HTML WHATWG')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Window.rejectionhandled_event")}}

## Voir également

- {{SectionOnPage("/en-US/docs/Web/JavaScript/Guide/Using_promises", "Promise rejection events")}}
- {{domxref("PromiseRejectionEvent")}}
- {{jsxref("Promise")}}
- {{domxref("Window/unhandledrejection_event", "unhandledrejection")}}
