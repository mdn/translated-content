---
title: commands.reset()
slug: Mozilla/Add-ons/WebExtensions/API/commands/reset
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - commands
  - reset
translation_of: Mozilla/Add-ons/WebExtensions/API/commands/reset
---
{{AddonSidebar()}}

Réinitialise la description de la commande donnée et le raccourci clavier aux valeurs indiquées dans [`commands` de la clé du manifest.json](/fr/Add-ons/WebExtensions/manifest.json/commands) de l'extension.

Cela annule efficacement les modifications apportées à la commande à l'aide de la fonction {{WEbExtAPIRef("commands.update()")}}.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
browser.commands.reset(
  name // string
);
```

### Paramètres

- `name`
  - : `string`. Nom de la commande à réinitialiser, comme indiqué par la propriété `name` de l'objet {{WebExtAPIRef("commands.Command")}}.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie sans arguments lorsque le raccourci a été réinitialisé.

## Compatibilité du navigateur

{{Compat("webextensions.api.commands.reset")}}

## Exemples

Réinitialise la commande "my-command" lorsque l'utilisateur clique sur le bouton "reset" :

```js
const commandName = 'my-command';

function resetShortcut() {
  browser.commands.reset(commandName);
}

document.querySelector('#reset').addEventListener('click', resetShortcut);
```

{{WebExtExamples}}
