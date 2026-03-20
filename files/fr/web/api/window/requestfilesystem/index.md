---
title: "Window : méthode requestFileSystem()"
short-title: requestFileSystem()
slug: Web/API/Window/requestFileSystem
l10n:
  sourceCommit: 0916e1754652f3a7c663ef031faa26c98f492023
---

{{APIRef("HTML DOM")}}{{Non-standard_Header}}{{Deprecated_Header}}

La méthode non standard **`requestFileSystem()`** de l'interface {{DOMxRef("Window")}} est spécifique à Google Chrome et permet à un site web ou à une application d'accéder à un système de fichiers sandboxé pour son propre usage. Le {{DOMxRef("FileSystem")}} retourné est ensuite disponible pour une utilisation avec les autres [API de système de fichiers](/fr/docs/Web/API/File_and_Directory_Entries_API).

> [!NOTE]
> Cette méthode est préfixée par `webkit` dans tous les navigateurs qui l'implémentent.

## Syntaxe

```js-nolint
requestFileSystem(type, size, successCallback)
requestFileSystem(type, size, successCallback, errorCallback)
```

### Paramètres

- `type`
  - : Le type de stockage à demander. Définissez `Window.TEMPORARY` si le navigateur peut supprimer les fichiers à sa discrétion, par exemple si l'espace de stockage est faible, ou `Window.PERSISTENT` si vous avez besoin que les fichiers restent en place sauf si l'utilisateur·ice ou le site web ou l'application l'autorise explicitement. Le stockage persistant nécessite que l'utilisateur·ice accorde un quota au site.
- `size`
  - : La quantité d'espace de stockage que vous souhaitez allouer pour l'utilisation de votre application.
- `successCallback`
  - : Une fonction qui est invoquée lorsque le système de fichiers a été obtenu avec succès. La fonction de rappel reçoit un seul paramètre&nbsp;: un objet {{DOMxRef("FileSystem")}} représentant le système de fichiers que l'application est autorisée à utiliser.
- `errorCallback` {{Optional_Inline}}
  - : Un paramètre optionnel définissant une fonction qui est appelée si une erreur se produit lors de la tentative d'obtention du système de fichiers, ou si l'utilisateur·ice refuse l'autorisation de créer ou d'accéder au système de fichiers. La fonction de rappel reçoit en entrée un seul paramètre&nbsp;: un objet `DOMException` décrivant l'erreur.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Spécifications

Comme cette méthode a été supprimée de la proposition [de l'API d'entrées de fichiers et de répertoires](https://wicg.github.io/entries-api/), elle n'a pas de spécification officielle W3C ou WHATWG. Elle n'est plus en voie de devenir une norme.

## Compatibilité des navigateurs

{{Compat}}
