---
title: "HTMLInputElement : propriété capture"
short-title: capture
slug: Web/API/HTMLInputElement/capture
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`capture`** de l'interface {{DOMxRef("HTMLInputElement")}} reflète l'attribut [`capture`](/fr/docs/Web/HTML/Reference/Attributes/capture) de l'élément {{HTMLElement("input")}}. Cette propriété et cet attribut, uniquement pertinents pour un [`<input>` de type `file`](/fr/docs/Web/HTML/Reference/Elements/input/file), définissent si un nouveau fichier doit être capturé à partir d'une caméra ou d'un microphone orienté vers l'utilisateur·ice (`user`) ou vers l'extérieur (`environment`). Le type de fichier est défini par l'attribut [`accept`](/fr/docs/Web/HTML/Reference/Attributes/accept). Si l'attribut n'est pas explicitement défini, la propriété `capture` est une chaîne de caractères vide.

## Valeur

Une chaîne de caractères&nbsp;; généralement `user` ou `environment`, ou une chaîne vide (`""`).

## Exemple

```js
const inputElement = document.querySelector("avatar");
console.log(inputElement.capture); // la valeur actuelle de l'attribut capture
inputElement.capture = "user"; // définit la valeur de capture
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLInputElement.type")}}
- La propriété {{DOMxRef("HTMLInputElement.multiple")}}
- La propriété {{DOMxRef("HTMLInputElement.accept")}}
- La propriété {{DOMxRef("HTMLInputElement.files")}}
- [Définir les types de fichiers](/fr/docs/Web/HTML/Reference/Elements/input/file#unique_file_type_specifiers)
- [Utiliser des fichiers dans des applications web](/fr/docs/Web/API/File_API/Using_files_from_web_applications)
- [L'API File](/fr/docs/Web/API/File_API)
