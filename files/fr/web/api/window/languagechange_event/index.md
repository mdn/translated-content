---
title: 'Window: languagechange event'
slug: Web/API/Window/languagechange_event
tags:
  - Evènement
  - Expérimentale
  - HTML DOM
  - Reference
  - Window
translation_of: Web/API/Window/languagechange_event
---
{{APIRef}}

L'événement **`languagechange`** est déclenché sur l'objet d'étendue globale lorsque la langue préférée de l'utilisateur change.

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
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Propriété de gestionnaire d'événements</th>
      <td>
        {{domxref("WindowEventHandlers/onlanguagechange", "onlanguagechange")}}
      </td>
    </tr>
  </tbody>
</table>

## Exemples

Vous pouvez utiliser l'événement `languagechange` dans une méthode {{domxref("EventTarget/addEventListener", "addEventListener")}} :

```js
window.addEventListener('languagechange', function() {
  console.log('languagechange event detected!');
});
```

Ou utilisez la propriété du gestionnaire d'événements [`onlanguagechange`](/en-US/docs/Web/API/WindowEventHandlers/onlanguagechange) :

```js
window.onlanguagechange = function(event) {
  console.log('languagechange event detected!');
};
```

## Spécification

| Spécification                                                                                                    | Statut                               |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| {{ SpecName('HTML WHATWG', 'indices.html#event-languagechange', 'languagechange') }} | {{ Spec2('HTML WHATWG') }} |

## Compatibilité des navigateurs

{{Compat("api.Window.languagechange_event")}}

## Voir également

- {{domxref("NavigatorLanguage.language", "navigator.language")}}
- {{domxref("NavigatorLanguage.languages", "navigator.languages")}}
- {{domxref("Navigator")}}
- {{domxref("Window.onlanguagechange")}}
