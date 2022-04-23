---
title: Window.console
slug: Web/API/Window/console
tags:
  - API
  - Propriété
  - Reference
  - Window
  - console
  - lecture seule
translation_of: Web/API/Window/console
---
{{ APIRef }}

La propriété **`Window.console`** en lecture seule retourne une référence à l'objet {{domxref("Console")}}, qui founit des méthodes pour afficher des information sur la console du navigateur. Ces méthodes ont pour seul but le débogage et ne devraient pas servir à présenter des informations au utilisateurs.

## Syntaxe

    var consoleObj = window.console;

## Exemples

### Afficher dans la console

Le premier exemple affiche du texte dans la console.

```js
console.log("An error occurred while loading the content");
```

L'exemple suivant affiche un objet dans la console, et les champs de l'objet y sont écrit:

```js
console.dir(someObject);
```

Voir {{SectionOnPage("/en-US/docs/Web/API/Console", "Usage")}} pour plus d'exemples appronfondit.

## Spécifications

| Spécification                        | Status                           | Commentaire          |
| ------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('Console API')}} | {{Spec2('Console API')}} | Définition Initiale. |

> **Note :** Actuellement il y a beaucoup de différences d'implémentation entre les navigateurs, mais ils sont en train d'être standardisés pour les rendre plus consistants entre eux.
