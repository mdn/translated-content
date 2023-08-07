---
title: hashchange
slug: Web/API/Window/hashchange_event
---

L'événement `hashchange` est déclenché lorsque l'identificateur de fragment de l'URL a changé (la partie de l'URL qui suit le symbole #, y compris le symbole # lui-même).

<table class="properties">
  <tbody>
    <tr>
      <td>Bulles</td>
      <td>Oui</td>
    </tr>
    <tr>
      <td>Annulable</td>
      <td>Non</td>
    </tr>
    <tr>
      <td>Objets cibles</td>
      <td>{{domxref("Window")}}</td>
    </tr>
    <tr>
      <td>Interface</td>
      <td>{{domxref("HashChangeEvent")}}</td>
    </tr>
    <tr>
      <td>Action par défaut</td>
      <td>Aucune</td>
    </tr>
  </tbody>
</table>

## Propriétés

| Propriété                       | Type                       | Description                                           |
| ------------------------------- | -------------------------- | ----------------------------------------------------- |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The browsing context (`window`).                      |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}   | Type de l'évènement                                   |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}      | Whether the event normally bubbles or not.            |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}      | Whether the event is cancellable or not.              |
| `oldURL` {{readonlyInline}}     | {{jsxref("String")}}       | The previous URL from which the window was navigated. |
| newURL {{readonlyInline}}       | {{jsxref("String")}}       |                                                       |

Il existe plusieurs scripts de secours listés sur [cette page](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills). Fondamentalement, ces scripts vérifient le `location.hash` à intervalles réguliers. Voici une version qui n'autorise qu'un seul gestionnaire à être lié à la propriété `window.onhashchange`:

```js
(function (window) {
  // Sortir si le navigateur implémente cet événement
  if ("onhashchange" in window) {
    return;
  }

  var location = window.location,
    oldURL = location.href,
    oldHash = location.hash;

  // Vérifie la hash de la barre d'adresse toutes les 100ms
  setInterval(function () {
    var newURL = location.href,
      newHash = location.hash;

    // Si le hash a été changé et qu'un gestionnaire a été lié...
    if (newHash != oldHash && typeof window.onhashchange === "function") {
      // exécute le gestionnaire
      window.onhashchange({
        type: "hashchange",
        oldURL: oldURL,
        newURL: newURL,
      });

      oldURL = newURL;
      oldHash = newHash;
    }
  }, 100);
})(window);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`popstate`](/fr/docs/Mozilla_event_reference/popstate)
- [WindowEventHandlers.onhashchange](/fr/docs/Web/API/WindowEventHandlers/onhashchange)
