---
title: DataTransfer.files
slug: Web/API/DataTransfer/files
---

{{APIRef("HTML Drag and Drop API")}}

La propriété **`DataTransfer.files`** est une {{domxref("FileList","liste de fichier")}} issue d'une manipulation de glisser-déposer. Si l'opération n'inclut pas de fichier, alors la liste est vide.

Cette fonctionnalité peut être utilisée pour glisser des fichiers du bureau utilisateur au navigateur.

## Syntaxe

```js
dataTransfer.files;
```

### Valeur de retour

Une {{domxref("FileList","liste")}} de fichiers associés au "glisser", un élément de liste pour chaque fichier dans l'opération. Si l'opération de "glisser" ne contient aucun fichier alors la liste est vide.

## Exemple

Voici deux exemples :

- Seulement Firefox : <http://jsfiddle.net/9C2EF/>
- Tous les navigateurs : [https://jsbin.com/hiqasek/](https://jsbin.com/hiqasek/edit?html,js,output)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
