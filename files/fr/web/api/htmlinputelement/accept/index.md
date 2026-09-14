---
title: "HTMLInputElement : propriété accept"
short-title: accept
slug: Web/API/HTMLInputElement/accept
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`accept`** de l'interface {{DOMxRef("HTMLInputElement")}} reflète l'attribut [`accept`](/fr/docs/Web/HTML/Reference/Elements/input#accept) de l'élément HTML {{HTMLElement("input")}}. Il s'agit généralement d'une liste, séparée par des virgules, de types de fichiers uniques qui donne une indication sur le type de fichier attendu pour un [`<input>` de type `file`](/fr/docs/Web/HTML/Reference/Elements/input/file). Si l'attribut n'est pas explicitement défini, la propriété `accept` est une chaîne de caractères vide.

## Valeur

Une chaîne de caractères représentant la valeur de `accept` de l'élément ou une chaîne vide si aucun `accept` n'est explicitement défini.

## Exemple

```js
const inputElement = document.querySelector("#time");
console.log(inputElement.accept); // la valeur actuelle de l'attribut accept
inputElement.accept = ".doc,.docx,.xml,application/msword"; // définit la valeur de accept
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLInputElement.type")}}
- La propriété {{DOMxRef("HTMLInputElement.multiple")}}
- La propriété {{DOMxRef("HTMLInputElement.capture")}}
- [Définir les types de fichiers](/fr/docs/Web/HTML/Reference/Elements/input/file#unique_file_type_specifiers)
- [Utiliser des fichiers dans des applications web](/fr/docs/Web/API/File_API/Using_files_from_web_applications)
- [L'API File](/fr/docs/Web/API/File_API)
