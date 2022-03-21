---
title: FileList
slug: Web/API/FileList
tags:
  - API
  - File API
  - Files
translation_of: Web/API/FileList
---
{{APIRef("File API")}}

Un objet **`FileList`** est renvoyé par la propriété `files` d'un élément HTML {{HTMLElement("input")}}. Il permet d'accéder à la liste des fichiers sélectionnés via l'élément `<input type="file">`. Cet objet peut également être utilisé pour les fichiers glissés-déposés dans du contenu web via l'[API Drag & Drop](/fr/docs/Web/API/API_HTML_Drag_and_Drop) (voir l'objet [`DataTransfer`](/fr/docs/Web/API/DataTransfer) pour plus de détails).

## Utiliser une liste de fichiers

Tous les éléments `<input>` possèdent un attribut `files` de type `FileList` qui permet d'accéder aux éléments de cette liste. Ainsi, si le code HTML utilisé est :

    <input id="fileItem" type="file">

On pourra utiliser la ligne suivant pour récupérer le premier fichier de la liste sous la forme d'un objet [`File`](/fr/docs/Web/API/File) :

```js
var file = document.getElementById('fileItem').files[0]
```

## Propriétés

<table class="standard-table">
  <tbody>
    <tr>
      <td class="header">Attribut</td>
      <td class="header">Type</td>
      <td class="header">Description</td>
    </tr>
    <tr>
      <td><code>length</code></td>
      <td><code>integer</code></td>
      <td>
        Une valeur en lecture seule qui indique le nombre de fichier dans la
        liste.
      </td>
    </tr>
  </tbody>
</table>

## Méthodes

### `item()`

Cette méthode renvoie un objet [`File`](/fr/docs/Web/API/File) qui représente le fichier à l'indice fourni.

     File item(
       index
     );

#### Paramètres

- `index`
  - : Un indice (commençant à partir de zéro) indiquant le fichier qu'on souhaite récupérer de la liste.

#### Valeur de retour

L'objet [`File`](/fr/docs/Web/API/File) qui représente le fichier demandé.

## Exemples

Dans cet exemple, on parcourt l'ensemble des fichiers sélectionnés par l'utilisateur via un élément {{HTMLElement("input")}} :

```js
// fileInput est un élément HTML input : <input type="file" id="myfileinput" multiple>
var fileInput = document.getElementById("myfileinput");

// files est un objet FileList (semblable à NodeList)
var files = fileInput.files;
var file;

// on parcourt les fichiers
for (var i = 0; i < files.length; i++) {
    // on récupère le i-ème fichier
    file = files.item(i);
    // ou encore
    file = files[i];
    console.log(file.name);
}
```

### Exemple complet

#### HTML

```html
<input id="myfiles" multiple type="file">
```

#### JavaScript

```js
var recupererFichiers = function() {
  var fichiersInput = document.querySelector("#myFiles");
  var fichiers = fichiersInput.files;

  var nbFichiers = fichiers.length;
  var i = 0;
  while(i < nbFichiers){
    var fichier = fichiers[i];
    console.log(fichier.name);
    i++;
  }
}

// On invoque cette fonction pour chaque modification apportée à l'élément
// input
document.querySelector("#myFiles").onchange = recupererFichiers;
```

#### Résultat

{{EmbedLiveSample("Exemple_complet")}}

## Spécifications

| Spécification                                                                                                | État                             | Commentaires |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------ |
| {{SpecName('File API', '#filelist-section', 'FileList')}}                                 | {{Spec2('File API')}}     |              |
| {{SpecName('HTML WHATWG', '#concept-input-type-file-selected', 'selected files')}} | {{Spec2('HTML WHATWG')}} |              |

## Compatibilité des navigateurs

{{Compat("api.FileList")}}

## Voir aussi

- [Utiliser des fichiers dans des applications web](/fr/docs/Web/API/File/Using_files_from_web_applications)
- [`File`](/fr/docs/Web/API/File)
- [`FileReader`](/fr/docs/Web/API/FileReader)
