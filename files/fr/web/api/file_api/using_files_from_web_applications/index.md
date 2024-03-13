---
title: Utiliser des fichiers à partir d'applications web
slug: Web/API/File_API/Using_files_from_web_applications
l10n:
  sourceCommit: 144332479d3f90d12008866bc91df77da62451c2
---

{{APIRef("File API")}}

Grâce à l'API <i lang="en">File</i>, une application ou un site web peut demander à la personne de choisir des fichiers locaux et en lire les contenus. La sélection peut être effectuée à l'aide d'un élément [`<input type="file">`](/fr/docs/Web/HTML/Element/input/file) ou à l'aide d'un glisser-déposer.

## Accéder aux fichiers sélectionnés

Prenons ce fragment de HTML&nbsp;:

```html
<input type="file" id="input" multiple />
```

L'API <i lang="en">File</i> permet d'accéder à un objet [`FileList`](/fr/docs/Web/API/FileList) qui contient des objets [`File`](/fr/docs/Web/API/File) représentant les fichiers sélectionnés par l'utilisatrice ou l'utilisateur.

L'attribut `multiple` placé sur l'élément `input` permet de sélectionner plusieurs fichiers.

On peut accéder au premier fichier sélectionné grâce à un sélecteur DOM classique&nbsp;:

```js
const fichierSelectionne = document.getElementById("input").files[0];
```

### Accéder aux fichiers sélectionnés lors d'un évènement `change`

Il est aussi possible (même si ça n'est pas obligatoire) d'accéder à la liste [`FileList`](/fr/docs/Web/API/FileList) lors de l'évènement `change`. Pour cela, on utilisera [`EventTarget.addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener) pour ajouter un gestionnaire d'évènement sur `change`, comme ceci&nbsp;:

```js
const inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
  const fileList =
    this.files; /* on peut désormais manipuler la liste de fichiers */
}
```

## Obtenir des informations sur le(s) fichier(s) sélectionné(s)

L'objet [`FileList`](/fr/docs/Web/API/FileList) fourni par le DOM liste l'ensemble des fichiers sélectionnés par la personne, chacun étant représenté par un objet [`File`](/fr/docs/Web/API/File). On peut connaître le nombre de fichiers sélectionnés en consultant la valeur de la propriété `length` de la liste&nbsp;:

```js
const nbFichiers = fileList.length;
```

Les objets [`File`](/fr/docs/Web/API/File) individuels peuvent être récupérés depuis la liste en utilisant les indices, comme pour un tableau.

Trois propriétés des objets [`File`](/fr/docs/Web/API/File) fournissent des informations utiles sur les fichiers.

- `name`
  - : Le nom du fichier sous la forme d'une chaîne de caractères en lecture seule. Il s'agit uniquement du nom du fichier, aucune information n'est fournie sur l'emplacement.
- `size`
  - : La taille du fichier, exprimée en octets, sous la forme d'un entier en lecture seule sur 64 bits.
- `type`
  - : Le type MIME du fichier, sous la forme d'une chaîne de caractères en lecture seule ou `""` si le type du fichier n'a pu être déterminé.

### Exemple : indiquer la taille des fichiers

Dans l'exemple qui suit, on illustre comment utiliser la propriété `size`.

#### HTML

```html
<form name="uploadForm">
  <div>
    <input id="uploadInput" type="file" multiple />
    <label for="fileNum">Fichiers sélectionnés&nbsp;:</label>
    <output id="fileNum">0</output>;
    <label for="fileSize">Taille totale&nbsp;:</label>
    <output id="fileSize">0</output>
  </div>
  <div><input type="submit" value="Envoyer des fichiers" /></div>
</form>
```

#### JavaScript

```js
const uploadInput = document.getElementById("uploadInput");
uploadInput.addEventListener(
  "change",
  () => {
    // Calcul de la taille totale
    let numberOfBytes = 0;
    for (const file of uploadInput.files) {
      numberOfBytes += file.size;
    }

    // Approximation à l'unité humaine la plus proche
    const units = ["o", "Ko", "Mo", "Go", "To", "Po", "Eo", "Zo", "Yo"];
    const exponent = Math.min(
      Math.floor(Math.log(numberOfBytes) / Math.log(1024)),
      units.length - 1,
    );
    const approx = numberOfBytes / 1024 ** exponent;
    const output =
      exponent === 0
        ? `${numberOfBytes} octets`
        : `${approx.toFixed(3)} ${units[exponent]} (${numberOfBytes} octets)`;

    document.getElementById("fileNum").textContent = uploadInput.files.length;
    document.getElementById("fileSize").textContent = output;
  },
  false,
);
```

## Masquer l'élément `<input>` et utiliser la méthode `click()`

Il est possible de masquer l'élément [`<input>`](/fr/docs/Web/HTML/Element/input) et de présenter sa propre interface pour l'ouverture du sélecteur de fichiers et d'afficher par ailleurs la sélection de fichier. Pour obtenir ce résultat, on pourra mettre en forme le champ `<input>` avec `display:none` et appeler la méthode [`click()`](/fr/docs/Web/API/HTMLElement/click) sur l'élément [`<input>`](/fr/docs/Web/HTML/Element/input).

Prenons ce fragment de code HTML&nbsp;:

```html
<input
  type="file"
  id="fileElem"
  multiple
  accept="image/*"
  style="display:none" />
<button id="fileSelect" type="button">Choisissez des fichiers</button>
```

Le code qui gère l'évènement `click` pourra ressembler à&nbsp;:

```js
const fileSelect = document.getElementById("fileSelect");
const fileElem = document.getElementById("fileElem");

fileSelect.addEventListener(
  "click",
  (e) => {
    if (fileElem) {
      fileElem.click();
    }
  },
  false,
);
```

Vous pouvez mettre en forme [`<button>`](/fr/docs/Web/HTML/Element/button) comme bon vous semble.

## Utiliser un élément `<label>` pour déclencher un champ `<input type="file">` caché

Afin d'ouvrir le sélecteur de fichier sans utiliser de JavaScript (c'est-à-dire sans la méthode `click()`), on pourra utiliser un élément [`<label>`](/fr/docs/Web/HTML/Element/label) à la place. Cependant, il faut ici que l'élément `<input>` ne soit pas masqué à l'aide de `display: none` (ni à l'aide de `visibility: hidden`), car le libellé ne serait alors pas accessible au clavier. Il faut utiliser [la technique `visually-hidden`](https://www.a11yproject.com/posts/how-to-hide-content/) à la place.

Prenons ce fragment de code HTML&nbsp;:

```html
<input
  type="file"
  id="fileElem"
  multiple
  accept="image/*"
  class="visually-hidden" />
<label for="fileElem">Choisissez des fichiers</label>
```

Et ce fragment de code CSS&nbsp;:

```css
.visually-hidden {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
}

input.visually-hidden:is(:focus, :focus-within) + label {
  outline: thin dotted;
}
```

Il n'est ici pas nécessaire d'ajouter de code JavaScript pour invoquer `fileElem.click()`. On peut ici mettre en forme l'élément `<label>` comme bon nous semble. Il faudra fournir une indication visuelle pour l'état du focus sur le champ masqué sur le libellé, que ce soit un contour comme ci-avant (avec [`outline`](/fr/docs/Web/CSS/outline) ou une couleur d'arrière-plan ([`background-color`](/fr/docs/Web/CSS/background-color)), ou une ombre portée ([`box-shadow`](/fr/docs/Web/CSS/box-shadow)).

## Sélectionner des fichiers avec un glisser-déposer

Il est aussi possible de permettre la sélection de fichier grâce au glisser-déposer.

La première étape consiste à former une zone de dépôt. La zone de votre contenu qui acceptera le dépôt pourra varier selon le design de votre application, mais on pourra facilement construire un élément prêt à recevoir les évènements de dépôt&nbsp;:

```js
let dropbox;

dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);
```

Dans cet exemple, on utilise un élément avec l'identifiant `dropbox` comme zone de dépôt. Pour ce faire, on ajoute des gestionnaires d'évènements pour [`dragenter`](/fr/docs/Web/API/HTMLElement/dragenter_event), [`dragover`](/fr/docs/Web/API/HTMLElement/dragover_event), et [`drop`](/fr/docs/Web/API/HTMLElement/drop_event).

Nous n'avons pas à nous préoccuper de `dragenter` et `dragover` dans notre exemple, nous allons donc aller à l'essentiel et empêcher l'action par défaut du navigateur&nbsp;:

```js
function dragenter(e) {
  e.stopPropagation();
  e.preventDefault();
}

function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
}
```

La partie vraiment intéressante se situe dans la fonction `drop()`&nbsp;:

```js
function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  const dt = e.dataTransfer;
  const files = dt.files;

  handleFiles(files);
}
```

Ici, on récupère la propriété `dataTransfer` de l'évènement, puis on récupère la liste de fichiers à partir de celle-ci. On passe alors cette liste à la fonction `handleFiles()`. Désormais, on peut utiliser la même logique, que les fichiers aient été sélectionnés via un élément `<input>` ou avec un glisser-déposer.

## Exemple : afficher des vignettes pour les images sélectionnées

Prenons comme exemple un site web de partage de photos dans lequel on veut des vignettes de prévisualisation des images sélectionnées avant qu'elles soient effectivement enregistrées sur le site. On peut construire un élément `<input>` et/ou une zone de dépôt comme indiqué avant et appeler la fonction `handleFiles()` qui suit.

```js
function handleFiles(files) {
  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    if (!file.type.startsWith("image/")) {
      continue;
    }

    const img = document.createElement("img");
    img.classList.add("obj");
    img.file = file;
    preview.appendChild(img); // Où  "preview" correspond à l'élément div où on affiche le contenu.

    const reader = new FileReader();
    reader.onload = (e) => {
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}
```

Dans la boucle qui parcourt les fichiers, on regarde la propriété `type` de chaque fichier afin de déterminer si son type MIME commence avec la chaîne de caractères "`image/`". Pour chaque fichier qui est une image, on crée un nouvel élément `img`. On pourra utiliser CSS pour mettre en forme les vignettes (y compris leur taille).

Chaque image se voit dotée de la classe `obj`, pour permettre de les identifier dans le DOM. On ajoute un attribut `file` à chaque image en y associant l'objet [`File`](/fr/docs/Web/API/File) correspondant. Cela permettra de récupérer les images pour les enregistrer plus tard. On utilise [`Node.appendChild()`](/fr/docs/Web/API/Node/appendChild) afin d'ajouter la vignette à la zone de prévisualisation dans le document.

Ensuite, on construit un objet [`FileReader`](/fr/docs/Web/API/FileReader) afin de gérer le chargement asynchrone de l'image et son rattachement à l'élément `<img>` correspondant. Après avoir créé ce nouvel objet, on paramètre sa fonction `onload` puis on appelle `readAsDataURL()` afin de commencer l'opération de lecture en arrière-plan. Lorsque le contenu du fichier image aura été chargé, il sera converti en une URL de données qui sera passée à la fonction de rappel `onload()`. Dans notre exemple, on change l'attribut `src` de l'élément `<img>` pour utiliser l'image chargée et la faire apparaître comme vignette à l'écran.

## Utiliser des URL d'objets

Les méthodes [`URL.createObjectURL()`](/fr/docs/Web/API/URL/createObjectURL) et [`URL.revokeObjectURL()`](/fr/docs/Web/API/URL/revokeObjectURL) permet de créer des chaînes de caractères étant des URL référençant toute donnée à laquelle on accède via un objet [`File`](/fr/docs/Web/API/File) du DOM, y compris les fichiers locaux sur l'ordinateur de l'utilisatrice ou de l'utilisateur.

Lorsqu'on dispose d'un objet [`File`](/fr/docs/Web/API/File) qu'on veut manipuler sous la forme d'une URL, on pourra créer une URL d'objet ainsi&nbsp;:

```js
const objectURL = window.URL.createObjectURL(fileObj);
```

Une URL d'objet est une chaîne de caractères identifiant l'objet [`File`](/fr/docs/Web/API/File). À chaque appel de [`URL.createObjectURL()`](/fr/docs/Web/API/URL/createObjectURL), c'est une URL d'objet unique qui est créée, mais si une URL d'objet avait déjà été créée pour un même objet. Chacune de ces URL doit être libérée. Cette libération a lieu automatiquement lorsque le document est déchargé. Si votre page utilise les URL d'objet dynamiquement, les URL doivent être libérées explicitement en appelant [`URL.revokeObjectURL()`](/fr/docs/Web/API/URL/revokeObjectURL)&nbsp;:

```js
URL.revokeObjectURL(objectURL);
```

### Utiliser des URL d'objets pour afficher des images

Dans cet exemple, on utilise des URL d'objets pour afficher des vignettes d'image et on affiche également d'autres informations sur les fichiers comme leur nom ou leur taille.

Voici le fragment de HTML pour l'interface utilisateur&nbsp;:

```html
<input
  type="file"
  id="fileElem"
  multiple
  accept="image/*"
  style="display:none" />
<a href="#" id="fileSelect">Choisissez des fichiers</a>
<div id="fileList">
  <p>Aucun fichier sélectionné !</p>
</div>
```

Cela nous donne notre élément [`<input>`](/fr/docs/Web/HTML/Element/input) ainsi qu'un lien pour ouvrir le sélecteur de fichier (en effet, le champ de saisie est masqué, voir la section [Masquer l'élément `<input>` et utiliser la méthode `click()`](#using_hidden_file_input_elements_using_the_click_method) pour plus de détails).

La méthode `handleFiles()` utilisée ici est la suivante&nbsp;:

```js
const fileSelect = document.getElementById("fileSelect"),
  fileElem = document.getElementById("fileElem"),
  fileList = document.getElementById("fileList");

fileSelect.addEventListener(
  "click",
  (e) => {
    if (fileElem) {
      fileElem.click();
    }
    e.preventDefault(); // Empêche la navigation jusqu'à "#"
  },
  false,
);

fileElem.addEventListener("change", handleFiles, false);

function handleFiles() {
  if (!this.files.length) {
    fileList.innerHTML = "<p>Aucun fichier sélectionné !</p>";
  } else {
    fileList.innerHTML = "";
    const list = document.createElement("ul");
    fileList.appendChild(list);
    for (let i = 0; i < this.files.length; i++) {
      const li = document.createElement("li");
      list.appendChild(li);

      const img = document.createElement("img");
      img.src = URL.createObjectURL(this.files[i]);
      img.height = 60;
      img.onload = () => {
        URL.revokeObjectURL(img.src);
      };
      li.appendChild(img);
      const info = document.createElement("span");
      info.innerHTML = `${this.files[i].name} : ${this.files[i].size} octets`;
      li.appendChild(info);
    }
  }
}
```

Pour commencer, on récupère l'élément [`<div>`](/fr/docs/Web/HTML/Element/div) qui a l'identifiant `fileList`. Il s'agit du bloc dans lequel on placera notre liste de fichier ainsi que nos vignettes.

Si l'objet [`FileList`](/fr/docs/Web/API/FileList) passé à `handleFiles()` vaut `null`, on met à jour le code HTML du bloc pour afficher «&nbsp;Aucun fichier sélectionné !&nbsp;». Sinon, on construit la liste de fichier comme suit&nbsp;:

1. On crée un nouvel élément de liste non-ordonnée [`<ul>`](/fr/docs/Web/HTML/Element/ul).
2. Cette nouvelle liste est insérée dans le bloc [`<div>`](/fr/docs/Web/HTML/Element/div) à l'aide de sa méthode [`Node.appendChild()`](/fr/docs/Web/API/Node/appendChild).
3. Pour chaque fichier ([`File`](/fr/docs/Web/API/File)) dans la liste ([`FileList`](/fr/docs/Web/API/FileList)) représentée par `files`&nbsp;:

   1. On crée un nouvel élément [`<li>`](/fr/docs/Web/HTML/Element/li) qu'on insère dans la liste.
   2. On crée un nouvel élément [`<img>`](/fr/docs/Web/HTML/Element/img).
   3. On définit la source de l'image afin d'utiliser la nouvelle URL d'objet représentant le fichier grâce à [`URL.createObjectURL()`](/fr/docs/Web/API/URL/createObjectURL).
   4. On définit la hauteur de l'image à 60.
   5. On fait le nécessaire pour que le gestionnaire d'évènement pour `load` libère l'URL d'objet qui ne sera plus nécessaire puisque l'image aura été chargée. Pour cela, on appelle la méthode [`URL.revokeObjectURL()`](/fr/docs/Web/API/URL/revokeObjectURL) à laquelle on passe la chaîne de caractères qu'est l'URL d'objet que contient `img.src`.
   6. On ajoute le nouvel élément de la liste dans la liste.

Voici le résultat de cet exemple&nbsp;:

{{EmbedLiveSample('', '100%', '300px')}}

## Exemple : enregistrer un fichier sélectionné côté serveur

On peut également vouloir autoriser le téléversement (<i lang="en">upload</i>) des fichiers sélectionnés sur le serveur (comme les images sélectionnées dans l'exemple précédent). On peut faire ceci de façon asynchrone.

### Créer les tâches de téléversement

Si on poursuit avec le code de construction des vignettes de l'exemple précédent, on peut exploiter la classe `obj` de chaque vignette et manipuler la propriété `file` de chaque élément correspondant qui contient l'objet [`File`](/fr/docs/Web/API/File) correspondant. Cela nous permet de collecter toutes les images sélectionnées à l'aide de [`Document.querySelectorAll()`](/fr/docs/Web/API/Document/querySelectorAll)&nbsp;:

```js
function sendFiles() {
  const imgs = document.querySelectorAll(".obj");

  for (let i = 0; i < imgs.length; i++) {
    new FileUpload(imgs[i], imgs[i].file);
  }
}
```

À la deuxième ligne de ce fragment, on récupère un objet [`NodeList`](/fr/docs/Web/API/NodeList) appelé `imgs` qui contient tous les éléments du document ayant la classe `obj`. Ici, cela correspondra aux vignettes. Avec cette liste, on peut la parcourir et créer une nouvelle instance de `FileUpload` pour chaque, dont le rôle sera de gérer le téléversement du fichier correspondant vers le serveur.

### Gérer le processus de téléversement d'un fichier

La fonction `FileUpload` prend deux arguments, un élément `<img>` et un fichier à partir duquel lire les données de l'image.

```js
function FileUpload(img, file) {
  const reader = new FileReader();
  this.ctrl = createThrobber(img);
  const xhr = new XMLHttpRequest();
  this.xhr = xhr;

  const self = this;
  this.xhr.upload.addEventListener(
    "progress",
    (e) => {
      if (e.lengthComputable) {
        const percentage = Math.round((e.loaded * 100) / e.total);
        self.ctrl.update(percentage);
      }
    },
    false,
  );

  xhr.upload.addEventListener(
    "load",
    (e) => {
      self.ctrl.update(100);
      const canvas = self.ctrl.ctx.canvas;
      canvas.parentNode.removeChild(canvas);
    },
    false,
  );
  xhr.open(
    "POST",
    "http://demos.hacks.mozilla.org/paul/demos/resources/webservices/devnull.php",
  );
  xhr.overrideMimeType("text/plain; charset=x-user-defined-binary");
  reader.onload = (evt) => {
    xhr.send(evt.target.result);
  };
  reader.readAsBinaryString(file);
}

function createThrobber(img) {
  const throbberWidth = 64;
  const throbberHeight = 6;
  const throbber = document.createElement("canvas");
  throbber.classList.add("upload-progress");
  throbber.setAttribute("width", throbberWidth);
  throbber.setAttribute("height", throbberHeight);
  img.parentNode.appendChild(throbber);
  throbber.ctx = throbber.getContext("2d");
  throbber.ctx.fillStyle = "orange";
  throbber.update = (percent) => {
    throbber.ctx.fillRect(
      0,
      0,
      (throbberWidth * percent) / 100,
      throbberHeight,
    );
    if (percent === 100) {
      throbber.ctx.fillStyle = "green";
    }
  };
  throbber.update(0);
  return throbber;
}
```

La fonction `FileUpload()` écrite ici crée un indicateur de progression puis crée une requête [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest) pour gérer l'envoi des données.

Avant d'envoyer effectivement les données, plusieurs étapes préparatoires ont lieu&nbsp;:

1. Le gestionnaire d'évènement pour l'évènement `progress` de la requête `XMLHttpRequest` est utilisé pour mettre à jour l'indicateur de progression avec le pourcentage d'avancement, afin que l'indicateur soit à jour selon la progression.
2. Le gestionnaire d'évènement pour l'évènement `load` de la requête `XMLHttpRequest` est utilisé pour mettre à jour l'indicateur de progression à 100% afin de s'assurer que l'indicateur atteint bien les 100%. Il retire l'indicateur visuel qui n'est plus utile ,qui disparaît alors à la fin du téléversement.
3. La requête pour envoyer l'image au serveur est ouverte avec la méthode `open()` de `XMLHttpRequest`, ce qui génère une requête POST.
4. Le type MIME pour l'envoi est défini en appelant la fonction `overrideMimeType()` de `XMLHttpRequest`. On utilise ici un type MIME générique. Selon votre cas d'usage, vous pourrez ou non avoir besoin de définir le type MIME.
5. L'objet `FileReader` est utilisé pour convertir le fichier en une chaîne binaire.
6. Enfin, lorsque le contenu est chargé, la méthode `send()` de la requête `XMLHttpRequest` est appelée afin d'envoyer le contenu du fichier vers le serveur.

### Gérer le téléversement du fichier de façon asynchrone

Dans l'exemple qui suit, on utilise du code PHP pour le serveur et du code JavaScript pour le client afin d'illustrer le téléversement asynchrone d'un fichier.

```php
<?php
if (isset($_FILES['myFile'])) {
    // Exemple :
    move_uploaded_file($_FILES['myFile']['tmp_name'], "uploads/" . $_FILES['myFile']['name']);
    exit;
}
?><!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="UTF-8">
  <title>dnd binary upload</title>
    <script type="application/javascript">
        function sendFile(file) {
            const uri = "/index.php";
            const xhr = new XMLHttpRequest();
            const fd = new FormData();

            xhr.open("POST", uri, true);
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    alert(xhr.responseText); // Gérer la réponse
                }
            };
            fd.append('myFile', file);
            // Initier un téléversement multipart/form-data
            xhr.send(fd);
        }

        window.onload = () => {
            const dropzone = document.getElementById("dropzone");
            dropzone.ondragover = dropzone.ondragenter = (event) => {
                event.stopPropagation();
                event.preventDefault();
            }

            dropzone.ondrop = (event) => {
                event.stopPropagation();
                event.preventDefault();

                const filesArray = event.dataTransfer.files;
                for (let i=0; i<filesArray.length; i++) {
                    sendFile(filesArray[i]);
                }
            }
        }
    </script>
</head>
<body>
    <div>
        <div id="dropzone" style="margin:30px; width:500px; height:300px; border:1px dotted grey;">Glissez-déposez votre fichier ici.</div>
    </div>
</body>
</html>
```

## Exemple : utiliser des URL d'objet avec les autres types de fichier

On peut manipuler les fichiers d'autres formats de la même façon. Voici comment prévisualiser des vidéos sélectionnées&nbsp;:

```js
const video = document.getElementById("video");
const obj_url = URL.createObjectURL(blob);
video.src = obj_url;
video.play();
URL.revokeObjectURL(obj_url);
```

## Voir aussi

- [`File`](/fr/docs/Web/API/File)
- [`FileList`](/fr/docs/Web/API/FileList)
- [`FileReader`](/fr/docs/Web/API/FileReader)
- [`URL`](/fr/docs/Web/API/URL)
- [Utiliser l'API <i lang="en">Fetch</i>](/fr/docs/Web/API/Fetch_API/Using_Fetch)
- [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest)
- [Utiliser `XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
