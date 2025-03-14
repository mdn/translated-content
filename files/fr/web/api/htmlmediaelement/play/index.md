---
title: HTMLMediaElement.play()
slug: Web/API/HTMLMediaElement/play
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

La méthode **`HTMLMediaElement.play()`** essaie de commencer la lecture du média et renvoie une {{jsxref("Promise")}} qui est résolue quand la lecture a commencé avec succès, et est rejetée si la lecture ne peut commencer pour n'importe quelle raison (comme, par exemple, une erreur de permission).

## Syntaxe

```js
var Promise = HTMLMediaElement.play();
```

### Paramètres

Aucun.

### Valeur de retour

Une {{jsxref("Promise")}} qui est résolue quand la lecture a commencé, ou rejetée si la lecture ne peut commencer.

### Exceptions

Le _gestionnaire de rejet_ de la promesse est appelé avec un nom d'exception comme seul paramètre (contrairement aux exceptions traditionnelles). Les exceptions possibles incluent :

- `NotAllowedError`
  - : Le client (navigateur) ou système d'exploitation ne permet pas la lecture du média dans le contexte ou la situation actuelle. Ceci peut arriver, par exemple, si le navigateur oblige l'utilisateur à lancer manuellement le média en cliquant sur le bouton "play".
- `NotSupportedError`
  - : La source du média (qui peut être spécifié comme un {{domxref("MediaStream")}}, {{domxref("MediaSource")}}, {{domxref("Blob")}}, ou {{domxref("File")}}, par example) ne représente pas un format supporté.

D'autres types d'exceptions peuvent survenir selon l'implémentation du navigateur, du lecteur de média, etc.

## Exemple

Cet exemple commence la lecture d'un élément `video` et met à jour une box avec un message de succès si la lecture a bien démarré et un message d'erreur si une erreur survient.

```js
let myVideo = document.getElementById("myVideoElement");

myVideo
  .play()
  .then(() => {
    document.getElementById("statusText").innerHTML =
      "Yay ! La vidéo est lancée !";
  })
  .catch((error) => {
    document.getElementById("statusText").innerHTML = "Erreur: " + error;
  });
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
