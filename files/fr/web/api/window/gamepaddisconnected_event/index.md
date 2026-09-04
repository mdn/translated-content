---
title: "Window : évènement gamepaddisconnected"
short-title: gamepaddisconnected
slug: Web/API/Window/gamepaddisconnected_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

L'évènement `gamepaddisconnected` de l'interface {{DOMxRef("Window")}} est déclenché lorsque le navigateur détecte qu'une manette a été déconnectée.

L'évènement ne se déclenche pas si le document l'interdit par la [politique d'autorisations](/fr/docs/Web/HTTP/Guides/Permissions_Policy) {{HTTPHeader("Permissions-Policy/gamepad", "gamepad")}}.

Cet évènement n'est pas annulable et ne se propage pas.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("gamepaddisconnected", (event) => { })

ongamepaddisconnected = (event) => { }
```

## Exemples

Pour être informé lorsqu'une manette est déconnectée, vous pouvez ajouter un gestionnaire à la fenêtre en utilisant {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, comme ceci&nbsp;:

```js
window.addEventListener("gamepaddisconnected", (event) => {
  console.log("Perte de connexion avec la manette.");
});
```

D'autre part, vous pouvez utiliser la propriété de gestionnaire d'évènement `window.ongamepaddisconnected` pour établir un gestionnaire pour l'évènement `gamepaddisconnected`&nbsp;:

```js
window.ongamepaddisconnected = (event) => {
  console.log("Perte de connexion avec la manette.");
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("Window/gamepadconnected_event", "gamepadconnected")}}
- [Utiliser l'API Gamepad](/fr/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
