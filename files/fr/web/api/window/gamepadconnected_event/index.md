---
title: "Window : évènement gamepadconnected"
short-title: gamepadconnected
slug: Web/API/Window/gamepadconnected_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

L'évènement `gamepadconnected` de l'interface {{DOMxRef("Window")}} est déclenché lorsque le navigateur détecte qu'une manette a été connectée ou la première fois qu'un bouton ou un axe de la manette est utilisé.

L'évènement ne se déclenche pas si le document l'interdit par la [politique d'autorisations](/fr/docs/Web/HTTP/Guides/Permissions_Policy) {{HTTPHeader("Permissions-Policy/gamepad", "gamepad")}}.

Cet évènement n'est pas annulable et ne se propage pas.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("gamepadconnected", (event) => { })

ongamepadconnected = (event) => { }
```

## Exemples

Pour être informé lorsqu'une manette est connectée, vous pouvez ajouter un gestionnaire à la fenêtre en utilisant {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, comme ceci&nbsp;:

```js
window.addEventListener("gamepadconnected", (event) => {
  // Toutes les valeurs des boutons et des axes peuvent être accessibles avec
  const gamepad = event.gamepad;
});
```

D'autre part, vous pouvez utiliser la propriété de gestionnaire d'évènement `window.ongamepadconnected` pour établir un gestionnaire pour l'évènement `gamepadconnected`&nbsp;:

```js
window.ongamepadconnected = (event) => {
  // Toutes les valeurs des boutons et des axes peuvent être accessibles avec
  const gamepad = event.gamepad;
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("Window/gamepaddisconnected_event", "gamepaddisconnected")}}
- [Utiliser l'API Gamepad](/fr/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
