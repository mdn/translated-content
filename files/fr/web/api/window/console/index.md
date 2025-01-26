---
title: Window.console
slug: Web/API/Window/console
l10n:
  sourceCommit: d9026c37acaf22da682206c381686fe8a4666f16
---

{{APIRef}}

La propriété **`Window.console`** renvoie une référence à l'objet [`console`](/fr/docs/Web/API/console) qui fournit des méthodes pour journaliser et afficher des informations dans la console du navigateur. Ces méthodes sont uniquement destinées au débogage et ne devraient pas être utilisées pour présenter des informations aux utilisatrices et utilisateurs des sites et applications web.

## Exemples

### Journaliser un message dans la console

Le premier exemple affiche un texte dans la console.

```js
console.log("Une erreur s'est produite lors du chargement du contenu.");
```

Dans l'exemple suivant, on affiche un objet dans la console et les propriétés de cet objet peuvent être développées via l'interface&nbsp;:

```js
console.dir(someObject);
```

Pour plus d'exemples, voir la section [Exemples](/fr/docs/Web/API/console#exemples) de l'article sur [`console`](/fr/docs/Web/API/console).

## Spécifications

{{Specifications}}

> [!NOTE]
> Il existe de nombreuses différences d'implémentation parmi les navigateurs. Un travail d'homogénéisation et de standardisation est en cours afin de les rapprocher.
