---
title: "HTMLInputElement : propriété webkitEntries"
short-title: webkitEntries
slug: Web/API/HTMLInputElement/webkitEntries
l10n:
  sourceCommit: cbe4c570701052c120808ea54c24c46ec9734084
---

{{APIRef("File and Directory Entries API")}}

La propriété en lecture seule **`webkitEntries`** de l'interface {{DOMxRef("HTMLInputElement")}} contient un tableau d'entrées du système de fichiers (sous forme d'objets basés sur {{DOMxRef("FileSystemEntry")}}) représentant des fichiers et/ou des répertoires sélectionnés par l'utilisateur·ice à l'aide d'un élément {{HTMLElement("input")}} de type `file`, mais uniquement si cette sélection a été effectuée par glisser-déposer&nbsp;: la sélection d'un fichier dans la boîte de dialogue laissera la propriété vide.

Le tableau ne peut contenir que des répertoires si la propriété {{DOMxRef("HTMLInputElement.webkitdirectory", "webkitdirectory")}} est `true`. Cela signifie que l'élément `<input>` a été configuré pour permettre à l'utilisateur·ice de choisir des répertoires.

> [!NOTE]
> Cette propriété est appelée `webkitEntries` dans la spécification en raison de ses origines en tant qu'API spécifique à Google Chrome. Il est probable qu'elle soit renommée un jour.

## Valeur

Un tableau d'objets basés sur {{DOMxRef("FileSystemEntry")}}, chacun représentant un fichier sélectionné dans l'élément {{HTMLElement("input")}}. Plus précisément, les fichiers sont représentés par des objets {{DOMxRef("FileSystemFileEntry")}} et, si elles sont autorisées, les répertoires sont représentés par des objets {{DOMxRef("FileSystemDirectoryEntry")}}.

## Exemples

Cet exemple montre comment créer un élément `<input>` de sélection de fichiers et traiter les fichiers sélectionnés.

### HTML

```html
<input id="files" type="file" multiple />
```

### JavaScript

```js
document.getElementById("files").addEventListener("change", (event) => {
  event.target.webkitEntries.forEach((entry) => {
    /* faire quelque chose avec l'entrée */
  });
});
```

Chaque fois qu'un évènement {{DOMxRef("HTMLElement/change_event", "change")}} se produit, ce code parcourt les fichiers sélectionnés, obtenant leurs objets basés sur {{DOMxRef("FileSystemEntry")}} et agissant sur eux.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API d'entrée de fichiers et de répertoires](/fr/docs/Web/API/File_and_Directory_Entries_API)
- L'interface {{DOMxRef("HTMLInputElement")}}
- L'interface {{DOMxRef("FileSystemEntry")}}
- L'interface {{DOMxRef("FileSystem")}}
