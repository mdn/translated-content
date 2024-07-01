---
title: FileList
slug: Web/API/FileList
l10n:
  sourceCommit: de2a90fe1c1cd578faaee3c7e2ff7c96bae9a545
---

{{APIRef("File API")}}

On pourra obtenir un objet de type `FileList` grâce à la propriété `files` d'un objet [`HTMLInputElement`](/fr/docs/Web/API/HTMLInputElement) (qui représente un élément HTML [`<input>`](/fr/docs/Web/HTML/Element/input)) du DOM. Un objet `FileList` permet d'accéder à la liste des fichiers sélectionnés via un élément `<input type="file">`. Il est également utilisé pour manipuler une liste de fichiers déposé dans du contenu web en glisser/déposer. Voir [la page sur l'objet `DataTransfer`](/fr/docs/Web/API/DataTransfer) pour plus de détails sur ce deuxième usage.

Tous les nœuds qui sont des éléments `<input>` possèdent un attribut `files` de type `FileList` qui permet d'accéder aux éléments de cette liste. Ainsi, avec le fragment de HTML qui suit&nbsp;:

```html
<input id="fileItem" type="file" />
```

On pourra utiliser la ligne de code suivante pour récupérer le premier fichier de la liste des fichiers pour ce nœud dans un objet [`File`](/fr/docs/Web/API/File)&nbsp;:

```js
const file = document.getElementById("fileItem").files[0];
```

> **Note :** Cette interface [se voulait une tentative de modélisation d'une liste non-modifiable](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) et continue uniquement d'être prise en charge pour ne pas casser le code qui l'utilise encore. Les API plus récentes utilisent des types qui se basent sur le type ECMAScript [`Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array), afin que les objets puissent être traités comme des tableaux tout en imposant une sémantique additionnelle correspondant à leur utilisation (par exemple, en marquant leurs éléments comme étant en lecture seule).

## Propriétés des instances

- [`length`](/fr/docs/Web/API/FileList/length) {{ReadOnlyInline}}
  - : Une valeur en lecture seule qui indique le nombre de fichiers dans la liste.

## Méthodes des instances

- [`item()`](/fr/docs/Web/API/FileList/item) {{ReadOnlyInline}}
  - : Renvoie un objet [`File`](/fr/docs/Web/API/File) qui représente le fichier situé à l'indice indiqué dans la liste.

## Exemple

### Afficher le nom des fichiers

Dans cet exemple, nous allons afficher le nom des fichiers sélectionnés par l'utilisatrice ou l'utilisateur.

#### HTML

```html
<input id="mesfichiers" multiple type="file" />
<pre class="sortie">Fichiers sélectionnés :</pre>
```

#### JavaScript

```js
const sortie = document.querySelector(".sortie");
const fileInput = document.querySelector("#mesfichiers");

fileInput.addEventListener("change", () => {
  for (const file of fileInput.files) {
    sortie.innerText += `\n${file.name}`;
  }
});
```

#### Résultat

{{EmbedLiveSample("")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser des fichiers dans les applications web](/fr/docs/Web/API/File_API/Using_files_from_web_applications)
- [`File`](/fr/docs/Web/API/File)
- [`FileReader`](/fr/docs/Web/API/FileReader)
