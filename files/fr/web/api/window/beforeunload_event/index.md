---
title: beforeunload
slug: Web/API/Window/beforeunload_event
translation_of: Web/API/Window/beforeunload_event
original_slug: Web/Events/beforeunload
---
L'événement **`beforeunload`** est déclenché quand la fênetre, ou le document, et leurs resources sont sur le point d'être déchargés.

Lorsqu'une chaîne de caractères est assignée à la propriété `returnValue` de {{domxref("Event")}}, une boîte de dialogue apparaît demandant confirmation avant de quitter la page (voir exemple plus bas). Certains navigateurs affichent la valeur retournée, alors que d'autres affichent leur propre message. Si aucune valeur n'est fournie, l'événement est traité silencieusement.

> **Note :** Afin d'éviter les "pop-ups" indésirables, les navigateurs peuvent ne pas afficher les alertes créées dans les gestionnaires `beforeunload`.

> **Attention :** Attacher un gestionnaire d'événement `beforeunload` à `window` ou à `document` empêche les navigateurs d'utiliser leur mémoire cache ; consulter [Utilisation du cache de Firefox 1.5](/fr/docs/Utilisation_du_cache_de_Firefox_1.5) ou [WebKit's Page Cache](https://webkit.org/blog/516/webkit-page-cache-ii-the-unload-event/) (en anglais).

<table class="properties">
  <tbody>
    <tr>
      <td>Propagation</td>
      <td>Non</td>
    </tr>
    <tr>
      <td>Annulable</td>
      <td>Oui</td>
    </tr>
    <tr>
      <td>Object cible</td>
      <td>defaultView</td>
    </tr>
    <tr>
      <td>Interface</td>
      <td>{{domxref("Event")}}</td>
    </tr>
  </tbody>
</table>

## Propriétés

| Propriété                             | Type                                 | Description                                                               |
| ------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------- |
| `target` {{readOnlyInline}}     | {{domxref("EventTarget")}} | La cible de l'événement (la plus haute cible dans l'arbre du DOM).        |
| `type` {{readOnlyInline}}       | {{domxref("DOMString")}}     | Le type de l'événement.                                                   |
| `bubbles` {{readOnlyInline}}    | {{jsxref("Boolean")}}         | Est-ce que l'événement se propage ?                                       |
| `cancelable` {{readOnlyInline}} | {{jsxref("Boolean")}}         | Est-il possible d'annuler l'événement ?                                   |
| `returnValue`                         | {{domxref("DOMString")}}     | La valeur de retour de l'événement (le message à afficher à l'utlisateur) |

## Exemples

```js
window.addEventListener("beforeunload", function (event) {
  event.returnValue = "\o/";
});

// est équivalent à
window.addEventListener("beforeunload", function (event) {
  event.preventDefault();
});
```

Les navigateurs basés sur WebKit ne suivent pas les spécifications pour la boîte de dialogue. Un exemple pratiquement compatible entre les navigateurs serait à peu près comme suit:

```js
window.addEventListener("beforeunload", function (e) {
  var confirmationMessage = "\o/";

  e.returnValue = confirmationMessage;     // Gecko, Trident, Chrome 34+
  return confirmationMessage;              // Gecko, WebKit, Chrome <34
});
```

## Notes

Quand l'événement retourne une valeur non nulle, l'utilisateur est invité à confirmer le déchargement de la page. Dans la plupart des navigateurs, la valeur de retour de l'événement est affiché dans une boîte de dialogue. Dans Firefox 4 et plus, la chaine de caractères retournée n'est pas affiché à l'utilisateur. A la place, Firefox affiche "Cette page demande de confirmer sa fermeture ; des données saisies pourraient ne pas être enregistrées". Voir {{bug("588292")}}.

Depuis le 25 mai 2011, la spécification HTML5 indique que les appels aux méthodes [`window.alert()`](/fr/docs/Web/API/Window/alert), [`window.confirm()`](/fr/docs/Web/API/Window/confirm) et [`window.prompt()`](/fr/docs/Web/API/Window/prompt) peuvent être ignorés durant l'évènement. Voir [la spécification HTML5 (en anglais)](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#user-prompts) pour plus de détails.

Noter aussi que de nombreux navigateurs ignorent le résultat de l'événement (il n'y a donc aucune demande de confirmation). Firefox a une préférence cachée dans about:config pour faire de même. Essentiellement, cela signifie que l'utilisateur confirme toujours silencieusement que le document peut être déchargé.

## Spécifications

| Spécification                                                                                            | Statut                           | Commentaire         |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName("HTML WHATWG", "indices.html#event-beforeunload", "beforeunload")}} | {{Spec2("HTML WHATWG")}} |                     |
| {{SpecName("HTML5 W3C", "browsers.html#unloading-documents", "beforeunload")}} | {{Spec2("HTML5 W3C")}}     | Première définition |

## Voir aussi

- {{Event("DOMContentLoaded")}}
- {{Event("readystatechange")}}
- {{Event("load")}}
- {{Event("unload")}}
- [Unloading Documents — Prompt to unload a document](http://www.whatwg.org/specs/web-apps/current-work/#prompt-to-unload-a-document)
- [Enlever les messages personnalisés dans les boîtes de dialogues onbeforeload après Chrome 51](https://developers.google.com/web/updates/2016/04/chrome-51-deprecations?hl=en#remove_custom_messages_in_onbeforeload_dialogs)
