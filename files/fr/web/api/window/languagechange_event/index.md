---
title: "Window: languagechange event"
slug: Web/API/Window/languagechange_event
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
window.addEventListener("languagechange", function () {
  console.log("languagechange event detected!");
});
```

Ou utilisez la propriété du gestionnaire d'événements [`onlanguagechange`](/fr/docs/Web/API/Window/languagechange_event) :

```js
window.onlanguagechange = function (event) {
  console.log("languagechange event detected!");
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("NavigatorLanguage.language", "navigator.language")}}
- {{domxref("NavigatorLanguage.languages", "navigator.languages")}}
- {{domxref("Navigator")}}
- {{domxref("Window.onlanguagechange")}}
