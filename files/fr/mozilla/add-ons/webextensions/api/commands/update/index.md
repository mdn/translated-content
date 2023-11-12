---
title: commands.update()
slug: Mozilla/Add-ons/WebExtensions/API/commands/update
---

{{AddonSidebar()}}

Changez la description ou le raccourci clavier pour la commande donnée.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
browser.commands.update(
  details, // object
);
```

### Paramètres

- `details`

  - : `object`. Un objet avec les propriétés suivantes:

    - `name`
      - : `string`. e nom de la commande à mettre à jour. Cela doit correspondre au nom d'une commande existante, comme indiqué par exemple dans la propriété `name` de l'objet {{WebExtAPIRef("commands.Command")}}.
    - `description`{{optional_inline}}
      - : `string`. Une nouvelle description à définir pour la commande.
    - `shortcut`{{optional_inline}}
      - : `string`. Un nouveau raccourci à définir pour la commande. Cela doit correspondre au format donné dans la documentation pour les [`commands` de la clé manifest.json](/fr/Add-ons/WebExtensions/manifest.json/commands). S'il ne correspond pas à ce format, la fonction va générer une erreur.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie sans arguments lorsque le raccourci a été réinitialisé. La promesse sera rejetée avec une erreur si la commande n'a pas pu être trouvée.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Met à jour la commande "my-command" avec la valeur de raccourci donnée, lorsque l'utilisateur clique sur "update" :

```js
const commandName = "my-command";

function updateShortcut() {
  browser.commands.update({
    name: commandName,
    shortcut: document.querySelector("#shortcut").value,
  });
}

document.querySelector("#update").addEventListener("click", updateShortcut);
```

{{WebExtExamples}}
