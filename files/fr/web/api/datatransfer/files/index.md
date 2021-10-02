---
title: DataTransfer.files
slug: Web/API/DataTransfer/files
tags:
  - API
  - Glisser Déposer
  - HTML DOM
  - Propriété
  - References
translation_of: Web/API/DataTransfer/files
---
{{APIRef("HTML Drag and Drop API")}}

La propriété **`DataTransfer.files`** est une  {{domxref("FileList","liste de fichier")}} issue d'une manipulation de glisser-déposer. Si l'opération n'inclut pas de fichier, alors la liste est vide.

Cette fonctionnalité peut être utilisée pour glisser des fichiers du bureau utilisateur au navigateur.

## Syntaxe

    dataTransfer.files;

### Valeur de retour

Une {{domxref("FileList","liste")}} de fichiers associés au "glisser", un élément de liste pour chaque fichier dans l'opération. Si l'opération de "glisser" ne contient aucun fichier alors la liste est vide.

## Exemple

Voici deux exemples :

- Seulement Firefox : <http://jsfiddle.net/9C2EF/>
- Tous les navigateurs : [https://jsbin.com/hiqasek/](https://jsbin.com/hiqasek/edit?html,js,output)

## Specifications

| Specification                                                                                            | Statut                           | Commentaire         |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName("HTML WHATWG", "interaction.html#dom-datatransfer-files", "files")}} | {{Spec2("HTML WHATWG")}} |                     |
| {{SpecName("HTML5.1", "editing.html#dom-datatransfer-files", "files")}}         | {{Spec2("HTML5.1")}}     | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.DataTransfer.files")}}
