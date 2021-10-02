---
title: FileReader()
slug: Web/API/FileReader/FileReader
tags:
  - API
  - Constructeur
  - FileReader
  - Reference
translation_of: Web/API/FileReader/FileReader
---
**`FileReader()`**  est un constructeur qui permet de créer un nouvel objet FileReader.

Pour plus de details à propos de `FileReader`, visiter [Using files from web applications](/en-US/docs/Web/API/File/Using_files_from_web_applications).

## Syntaxe

```js
var reader = new FileReader();
```

### Paramèteres

Aucun.

## Exemple

L'extrait de code ci-dessous montre la création d'un objet [`FileReader`](/en-US/docs/Web/API/FileReader) en utilisant le constructeur `FileReader()`  ainsi qu'une utilisation subséquente de cet objet:

```js
function printFile(file) {
  var reader = new FileReader();
  reader.onload = function(evt) {
    console.log(evt.target.result);
  };
  reader.readAsText(file);
}
```

## Caractéristiques

| Caractéristique                  | Status                       | Commentaire         |
| -------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('File API')}} | {{Spec2('File API')}} | Définition Initiale |

## Voir aussi

- [Using files from web applications](/en-US/docs/Web/API/File/Using_files_from_web_applications)
