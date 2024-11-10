---
title: onCommand
slug: Mozilla/Add-ons/WebExtensions/API/commands/onCommand
---

{{AddonSidebar}}Lancer quand une commande est exécutée à l'aide de son raccourci clavier associé.L'écouteur reçoit le nom de la commande. Cela correspond au nom donnée à la commande dans une [entrée manifest.json](/fr/Add-ons/WebExtensions/manifest.json/commands).

## Syntaxe

```js
browser.commands.onCommand.addListener(listener);
browser.commands.onCommand.removeListener(listener);
browser.commands.onCommand.hasListener(listener);
```

Les événements ont trois fonctions :

- `addListener(callback)`
  - : Ajoute un écouteur à un événement.
- `removeListener(listener)`
  - : Arrêter d'écouter un événement. L'arguement `listener` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifiez si `listener` est enregistré pour cet événement . Renvoie `true` s'il écoute, `false` sinon.

## Syntaxe addListener

### Paramètre

- `callback`

  - : Fonction qui sera appelée lorsqu'un utilisateur entre dans le raccourci de la commande. La fonction recevra les arguments suivants :

    - `name`
      - : `string`. Nom de la commande. Cela correspond au nom donné à la commande dans son [entrée manifest.json](/fr/Add-ons/WebExtensions/manifest.json/commands).

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Etant donnée une entrée manifest.json comme ceci :

```json
"commands": {
  "toggle-feature": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y"
    },
    "description": "Send a 'toggle-feature' event"
  }
}
```

Vous pouvez écouter cette commande particulière comme ceci :

```js
browser.commands.onCommand.addListener(function (command) {
  if (command == "toggle-feature") {
    console.log("toggling the feature!");
  }
});
```

{{WebExtExamples}}

> [!NOTE]
>
> Cette API est basée sur l'API Chromium [`chrome.commands`](https://developer.chrome.com/docs/extensions/reference/api/commands).
