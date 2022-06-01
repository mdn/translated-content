---
title: Utiliser des fichiers à partir d'applications web
slug: Web/API/File_API/Using_files_from_web_applications
tags:
  - Files
  - HTML5
  - Téléchargement
  - ajax upload
translation_of: Web/API/File/Using_files_from_web_applications
original_slug: Web/API/File/Using_files_from_web_applications
---
{{APIRef("File API")}}

Grâce à l'API File ajoutée au DOM avec HTML5, il est maintenant possible depuis une page web de proposer à l'utilisateur de sélectionner des fichiers locaux, puis d'en lire le contenu. Cette sélection est possible en utilisant un élément HTML {{ HTMLElement("input") }} ou par glisser-déposer.

Vous pouvez utiliser si vous le souhaitez l'API DOM File depuis du code chrome d'extensions ou d'un autre navigateur&nbsp;; notez cependant qu'il existe des fonctionnalités additionnelles auxquelles il vous faudra être attentif. Reportez-vous à [Using the DOM File API in chrome code](/en/Extensions/Using_the_DOM_File_API_in_chrome_code) pour plus de détails.

## Accéder au(x) fichier(s) sélectionné(s)

Examinez ce code HTML&nbsp;:

```html
<input type="file" id="input">
```

L'API File permet d'accèder à la {{ domxref("FileList") }} contenant les objets {{ domxref("File") }} qui correspondent aux fichiers selectionnés par l'utilisateur.

Si l'utilisateur ne sélectionne qu'un seul fichier, on ne prendra en compte que le premier élément de la {{ domxref("FileList") }}.

Pour accéder à un fichier sélectionné en utilisant un sélecteur DOM classique&nbsp;:

```js
var fichierSelectionne = document.getElementById('input').files[0];
```

Pour accèder à un fichier sélectionné en utilisant un sélecteur [jQuery](http://jquery.com/)&nbsp;:

```js
var fichierSelectionne = $('#input').get(0).files[0];

var fichierSelectionne = $('#input')[0].files[0];
```

> **Note :** Si vous rencontrez une erreur "`files is undefined`"&nbsp;: vous n'avez pas sélectionné le bon élément HTML, en oubliant qu'un sélecteur jQuery renvoie une liste d'éléments DOM correspondants. Récupérez l'élément DOM pour appeler sa méthode "`files`".

## Accéder au(x) fichier(s) sélectionné(s) sur un événement _change_

Il est en outre possible (mais pas obligatoire) d'accéder à la {{ domxref("FileList") }} via l'événement `change`&nbsp;:

```html
<input type="file" id="input" onchange="handleFiles(this.files)">
```

La fonction `handleFiles()` est appelée avec un objet {{ domxref("FileList") }} contenant des objets {{ domxref("File") }} représentant les fichiers sélectionnés par l'utilisateur.

Si vous souhaitez permettre à l'utilisateur de sélectionner plusieurs fichiers simmultanément, utilisez simplement l'attribut `multiple` de l'élément `input`&nbsp;:

```html
<input type="file" id="input" multiple onchange="handleFiles(this.files)">
```

La liste de fichiers passée à la fonction `handleFiles()` contient dans ce cas un seul objet {{ domxref("File") }} pour chaque fichier sélectionné par l'utilisateur.

### Ajouter dynamiquement un gestionnaire d'événement _change_

Dans le cas où votre champ input a été créé à l'aide d'une bibliothèque JavaScript comme [jQuery](http://www.jquery.com/), il vous faudra utiliser la méthode {{ domxref("EventTarget.addEventListener()") }} pour ajouter le gestionnaire d'événement `change`, comme cela&nbsp;:

```js
var inputElement = document.getElementById("inputField");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
  var fileList = this.files; /* Vous pouvez maintenant manipuler la liste de fichiers */
}
```

Notez que dans ce cas la fonction `handleFiles()` est elle-même le gestionnaire d'événement, contrairement à l'exemple précédent où un gestionnaire d'événement l'appelle en lui passant un paramètre.

## Obtenir des informations sur le(s) fichier(s) sélectionné(s)

L'objet {{ domxref("FileList") }} exposé par le DOM fournit la liste de tous les fichiers sélectionnés par l'utilisateur, chaque fichier étant identifié par un objet {{ domxref("File") }}. Vous pouvez en déterminer le nombre en récupérant la valeur de l'attribut `length` de la liste de fichiers&nbsp;:

```js
var numFiles = files.length;
```

Chaque objet {{ domxref("File") }} peut être simplement récupéré en accédant à la liste comme vous le feriez pour un tableau&nbsp;:

```js
for (var i = 0, numFiles = files.length; i < numFiles; i++) {
  var file = files[i];
  ..
}
```

La boucle parcourt l'ensemble des fichiers de la liste.

L'objet {{ domxref("File") }} expose trois attributs accessibles en lecture seulement et contenant des informations utiles sur le fichier.

- `name`
  - : Une chaîne de caractères contenant le nom du fichier uniquement, sans aucune information relative au chemin d'accès.
- `size`
  - : La taille du fichier exprimée en octets, sous la forme d'un entier de 64 bits.
- `type`
  - : Le type MIME du fichier sous la forme d'une chaîne de caractères, ou bien une chaîne vide `""` si le type ne peut pas être déterminé.

### Exemple&nbsp;: Afficher la taille d'un ou plusieurs fichiers

L'exemple suivant montre une utilisation possible de la propriété `size`&nbsp;:

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>File(s) size</title>
<script>
function updateSize() {
  var nBytes = 0,
      oFiles = document.getElementById("uploadInput").files,
      nFiles = oFiles.length;
  for (var nFileId = 0; nFileId < nFiles; nFileId++) {
    nBytes += oFiles[nFileId].size;
  }
  var sOutput = nBytes + " bytes";
  // partie de code facultative pour l'approximation des multiples
  for (var aMultiples = ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"], nMultiple = 0, nApprox = nBytes / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
    sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple] + " (" + nBytes + " bytes)";
  }
  // fin de la partie de code facultative
  document.getElementById("fileNum").innerHTML = nFiles;
  document.getElementById("fileSize").innerHTML = sOutput;
}
</script>
</head>

<body onload="updateSize();">
<form name="uploadForm">
<p><input id="uploadInput" type="file" name="myFiles" onchange="updateSize();" multiple> selected files: <span id="fileNum">0</span>; total size: <span id="fileSize">0</span></p>
<p><input type="submit" value="Send file"></p>
</form>
</body>
</html>
```

## Utiliser des éléments _input_ masqués de type _file_ avec l'événement `click`

Il est possible depuis Gecko 2.0 {{ geckoRelease("2.0") }} de masquer l'élément {{ HTMLElement("input") }} de type file, généralement considéré comme laid, et de présenter votre propre interface pour l'ouverture du sélecteur de fichiers et l'affichage du ou des fichiers sélectionnés par l'utilisateur. Vous devez pour cela attribuer à votre élément `input` un style incluant `display:none` et gérer l'événement `click` sur votre élément {{ HTMLElement("input") }}.

Examinez cet extrait de code HTML&nbsp;:

```html
<input type="file" id="fileElem" multiple accept="image/*" style="display:none" onchange="handleFiles(this.files)">
<a href="#" id="fileSelect">Select some files</a>
```

Le code gérant l'événement `click` peut être écrit de cette façon&nbsp;:

```js
var fileSelect = document.getElementById("fileSelect"),
  fileElem = document.getElementById("fileElem");

fileSelect.addEventListener("click", function (e) {
  if (fileElem) {
    fileElem.click();
  }
  e.preventDefault(); // empêche la navigation vers "#"
}, false);
```

Vous pouvez bien sûr appliquer le style de votre choix au nouveau bouton d'ouverture du sélecteur de fichiers.

## Utiliser un élément _label_ pour activer un élément _input_ masqué de type _file_

Un élément {{ HTMLElement("label") }} peut être utilisé pour ouvrir le sélecteur de fichiers sans l'aide de JavaScript (méthode `click()`).

Examinez ce morceau de code HTML&nbsp;:

```html
<input type="file" id="fileElem" multiple accept="image/*" style="display:none" onchange="handleFiles(this.files)"> <label for="fileElem">Select some files</label>
```

Il n'y a pas besoin d'ajouter du code JavaScript pour l'appel à `fileElem.click()`. Vous pouvez dans ce cas aussi appliquer le style de votre choix à l'élément `label`.

## Sélectionner des fichiers en utilisant _drag and drop_

Vous pouvez aussi autoriser l'utilisateur à glisser-déposer (_drag and drop_) des fichiers dans votre application web.

La première étape consiste définir une zone de dépôt. La délimitation exacte de la partie de votre page qui acceptera des dépôts dépend de la conception de votre application, mais il est facile d'autoriser un élément à capter des événements `drop`&nbsp;:

```js
var dropbox;

dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);
```

Dans cet exemple, l'élément portant l'ID `dropbox` devient notre zone de dépôt en y ajoutant les gestionnaires d'écoute des événements {{event('dragenter')}}, {{event('dragover')}}, et {{event('drop')}}.

Nous n'avons pas vraiment besoin dans notre cas de gérer les événements `dragenter` et `dragover`. Les deux fonctions associées restent donc assez simples, elle ne servent qu'à stopper la propagation de l'événement et empêcher le déclenchement de l'action par défaut&nbsp;:

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

La vraie magie est dans la fonction `drop()`&nbsp;:

```js
function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  var dt = e.dataTransfer;
  var files = dt.files;

  handleFiles(files);
}
```

Nous récupérons ici le champ `dataTransfer` de l'événement puis nous en extrayons la liste des fichiers que nous passons à `handleFiles()`. À partir de ce point les fichiers se manipulent de la même façon, que l'utilisateur ait employé l'élément `input` ou le glisser-déposer.

## Exemple&nbsp;: Afficher les miniatures d'images sélectionnées par l'utilisateur

Admettons que vous développiez actuellement le prochain site génial de partage de photos, et que vous souhaitiez utiliser HTML5 pour afficher une prévisualisation miniature des images avant que l'utilisateur ne les télécharge vraiment sur le serveur. Vous pouvez définir votre élément `input` ou votre zone de dépôt comme étudié précédemment et les faire appeler une fonction telle que la fonction `handleFiles()` montrée ci-dessous&nbsp;:

```js
function handleFiles(files) {
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    var imageType = /^image\//;

    if (!imageType.test(file.type)) {
      continue;
    }

    var img = document.createElement("img");
    img.classList.add("obj");
    img.file = file;
    preview.appendChild(img); // En admettant que "preview" est l'élément div qui contiendra le contenu affiché.

    var reader = new FileReader();
    reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
    reader.readAsDataURL(file);
  }
}
```

La boucle qui manipule dans notre cas les fichiers sélectionnés par l'utilisateur examine l'attribut type de chaque fichier et contrôle qu'il s'agit bien d'une image (en utilisant une expression régulière pour vérifier la correspondance du type MIME avec la chaîne "`image/*`"). Nous créons un nouvel élément img pour chaque fichier image. Vous pouvez utiliser du CSS pour définir d'agréables bordures ou effets d'ombres ou encore pour préciser la taille de l'image \[de l'élément `img`, NDT], même si cela n'est pas nécessaire ici.

La classe CSS ob`j` est ajoutée à chaque élément image afin de faciliter sa recherche dans l'arbre du DOM, ainsi qu'un attribut `file` spécifiant le {{ domxref("File") }} correspondant et qui nous permettra de récupérer les fichiers images lors du téléchargement effectif vers le serveur. Nous utilisons {{ domxref("Node.appendChild()") }} pour ajouter la nouvelle miniature à la zone de prévisualisation de notre document.

Nous définissons ensuite le {{ domxref("FileReader") }} qui gérera le chargement asynchrone de l'image et son lien à l'élément `img`. Après avoir créé le nouvel objet `FileReader`, nous définissons sa fonction `onload` pouis nous appelons `readAsDataURL()` pour démarrer l'opération de lecture en tâche de fond. Lorsque le chargement du fichier image est complètement terminé, son contenu est converti en `data`&nbsp;: c'est l'URL transmise à la fonction de rappel `onload`. Notre implémentation de cette procédure définit l'image chargée comme valeur de l'attribut `src` de l'élement `img`, faisant ainsi apparaître l'image dans la miniature à l'écran.

## Utiliser un objet URLs

Gecko 2.0 {{ geckoRelease("2.0") }} introduit la prise en charge des méthodes du DOM {{ domxref("window.URL.createObjectURL()") }} et {{ domxref("window.URL.revokeObjectURL()") }}. Elles vous permettent de créer des chaînes d'URL simples qui peuvent être utilisées pour repérer n'importe quelle donnée pouvant être référencée à l'aide d'un objet DOM {{ domxref("File") }}, y compris des fichiers locaux sur l'ordinateur de l'utilisateur.

Vous pouvez procéder ainsi pour créer un objet URL lorsque vous souhaitez référencer un objet {{ domxref("File") }} par URL depuis HTML&nbsp;:

```js
var objectURL = window.URL.createObjectURL(fileObj);
```

L'objet URL est une chaîne identifiant l'objet {{ domxref("File") }}. Un objet URL unique est créé à chaque fois que vous appelez {{ domxref("window.URL.createObjectURL()") }}, même si vous avez déjà créé un objet URL pour ce fichier. Chacun d'eux doit être libéré&nbsp;; bien qu'ils soient automatiquement libérés lorsque le document est déchargé, vous devez explicitement les libérer en appelant {{ domxref("window.URL.revokeObjectURL()") }}  si votre page les utilise de manière dynamique&nbsp;:

```js
window.URL.revokeObjectURL(objectURL);
```

## Exemple&nbsp;: Utilisation de l'objet URLs pour afficher des images

Cet exemple utilise des objets URLs pour afficher des vignettes d'image. Il affiche en outre d'autres informations, dont leurs noms et leurs tailles.

Le code HTML qui présente l'interface ressemble à ceci:

```html
<input type="file" id="fileElem" multiple accept="image/*" style="display:none" onchange="handleFiles(this.files)">
<a href="#" id="fileSelect">Sélectionnez des fichiers</a>
<div id="fileList">
  <p>Aucun fichier sélectionné !</p>
</div>
```

Ce code définit notre élément fichier {{ HTMLElement("input") }}, ainsi qu'un lien qui appelle le sélecteur de fichiers (l'élément `input` étant masqué pour éviter l'affichage de la si peu séduisante interface utilisateur). Vous pouvez vous reporter à la section [Utiliser des éléments `input` masqués de type `file` avec l'événement `click`](#utiliser_des_éléments_input_masqués_de_type_file_avec_lévénement_click) pour des explications détaillées sur cette partie de code ainsi que sur la méthode appelant le sélecteur de fichiers.

Voici la méthode `handleFiles()`&nbsp;:

```js
window.URL = window.URL || window.webkitURL;

var fileSelect = document.getElementById("fileSelect"),
    fileElem = document.getElementById("fileElem"),
    fileList = document.getElementById("fileList");

fileSelect.addEventListener("click", function (e) {
  if (fileElem) {
    fileElem.click();
  }
  e.preventDefault(); // empêche la navigation vers "#"
}, false);

function handleFiles(files) {
  if (!files.length) {
    fileList.innerHTML = "<p>Aucun fichier sélectionné !</p>";
  } else {
    fileList.innerHTML = "";
    var list = document.createElement("ul");
    fileList.appendChild(list);
    for (var i = 0; i < files.length; i++) {
      var li = document.createElement("li");
      list.appendChild(li);

      var img = document.createElement("img");
      img.src = window.URL.createObjectURL(files[i]);
      img.height = 60;
      img.onload = function() {
        window.URL.revokeObjectURL(this.src);
      }
      li.appendChild(img);
      var info = document.createElement("span");
      info.innerHTML = files[i].name + ": " + files[i].size + " bytes";
      li.appendChild(info);
    }
  }
}
```

Nous commençons par la recherche de l'URL du {{ HTMLElement("div") }} dont l'ID est `fileList`, qui est le bloc dans lequel nous inérerons notre liste de fichiers, ainsi que les miniatures..

Si l'objet {{ domxref("FileList") }} passé à `handleFiles()` est `null`, nous définissons simplement le contenu HTML du bloc pour pour afficher "Aucun fichier sélectionné ! ". Nous commençons dans le cas contraire à construire notre liste de fichiers, comme ceci&nbsp;:

1.  Une nouvelle liste non ordonnée ({{ HTMLElement("ul") }}) est créée.
2.  L'élement de la liste nouvellement créée est ajoutée dans le bloc {{ HTMLElement("div") }} en appelant sa méthode {{ domxref("Node.appendChild()") }}.
3.  Pour chaque {{ domxref("File") }} dans le {{ domxref("FileList") }} représenté par `files`&nbsp;:

    1.  Création et ajout à la liste d'un nouvel élément de liste {{ HTMLElement("li") }}.
    2.  Création d'un nouvel élément image {{ HTMLElement("img") }}.
    3.  Définition d'un nouvel objet URL représentant le fichier comme source de l'image, en utilisant {{ domxref("window.URL.createObjectURL()") }} pour la création de l'URL du Blob.
    4.  Définition de la hauteur de l'image à 60 pixels.
    5.  Définition du gestionnaire pour l'événement `load` de l'image afin de libérer l'objet URL, devenu inutile une fois l'image chargée. La libération est effectuée en appelant la méthode {{ domxref("window.URL.revokeObjectURL()") }} avec en paramètre la chaîne de l'objet URL de l'attribut `img.src`.
    6.  Ajout du nouvel élément à la liste.

## Exemple&nbsp;: Télécharger sur le serveur un fichier sélectionné par l'utilisateur

Vous pourriez en outre vouloir autoriser l'utilisateur à télécharger sur un serveur (_upload_) un ou plusieurs fichiers sélectionnés (tels que les images sélectionnées en suivant l'exemple précedent). Cette opération peut être très facilement effectuée de manière asynchrone.

### Créer les tâches de téléchargement

En poursuivant avec le code générant des miniatures de l'exemple précédent, rappelez-vous que chaque image de miniature s'est vue ajouter la classe CSS `obj`, ainsi que le {{ domxref("File") }} correspondant stocké dans l'attribut `file`. Cela nous permet de sélectionner très facilement toutes les images choisies par l'utilisateur pour le téléchargement à l'aide de {{ domxref("Document.querySelectorAll()") }}, comme cela&nbsp;:

```js
function sendFiles() {
  var imgs = document.querySelectorAll(".obj");

  for (var i = 0; i < imgs.length; i++) {
    new FileUpload(imgs[i], imgs[i].file);
  }
}
```

La ligne 2 crée un tableau, nommé `imgs`, de tous les éléments de la classe CSS `obj` dans le document&nbsp;; s'agit dans notre cas de toutes les miniatures d'images. Une fois la liste établie, c'est un jeu d'enfant de la parcourir et de créer une nouvelle instance de `FileUpload` pour chacun de ses éléments. Chacune de ces instances gère le téléchargement du fichier correspondant vers le serveur.

### Manipuler le processus de téléchargement pour un fichier

La fonction `FileUpload` accepte deux arguments&nbsp;: un élement image et un fichier à partir duquel les données de l'image sont lues.

```js
function FileUpload(img, file) {
  var reader = new FileReader();
  this.ctrl = createThrobber(img);
  var xhr = new XMLHttpRequest();
  this.xhr = xhr;

  var self = this;
  this.xhr.upload.addEventListener("progress", function(e) {
        if (e.lengthComputable) {
          var percentage = Math.round((e.loaded * 100) / e.total);
          self.ctrl.update(percentage);
        }
      }, false);

  xhr.upload.addEventListener("load", function(e){
          self.ctrl.update(100);
          var canvas = self.ctrl.ctx.canvas;
          canvas.parentNode.removeChild(canvas);
      }, false);
  xhr.open("POST", "http://demos.hacks.mozilla.org/paul/demos/resources/webservices/devnull.php");
  xhr.overrideMimeType('text/plain; charset=x-user-defined-binary');
  reader.onload = function(evt) {
    xhr.sendAsBinary(evt.target.result);
  };
  reader.readAsBinaryString(file);
}
```

La fonction `FileUpload()` montrée ci-dessus crée un indicateur d'activité (_throbber_) pour l'affichage de la progression, ainsi qu'un {{ domxref("XMLHttpRequest") }} pour gérer le téléchargement des données.

Il est nécessaire de prévoir quelques étapes préparatoires avant le téléchargement effectif des données&nbsp;:

1.  Le processus d'écoute de l'événement `progress` du XMLHttpRequest est écrit de telle façon que l'indicateur d'activité affiche l'information de progression du téléchargement la plus récente.
2.  Le gestionnaire de l'événement `load` du XMLHttpRequest est écrit pour que l'indicateur d'activité affiche 100% afin d'être sûr atteigne effectivement les 100%, même en cas granularité anormale lors du processus. Le gestionnaire supprime ensuite l'indicateur devenu inutile, entraînant sa disparition à la fin normale du téléchargement.
3.  La requête de téléchargement de l'image est ouverte par l'appel à la méthode `open()` du XMLHttpRequest, démarrant la création d'une requête POST.
4.  Le type MIME pour le téléchargement est défini en appelant la fonction `overrideMimeType()` du `XMLHttpRequest`. Nous utilisons ici un type MIME générique&nbsp;; vous pouvez selon les cas définir ou ne définir aucun type MIME.
5.  L'objet `FileReader` est utilisé pour la conversion du fichier en chaîne binaire.
6.  La fonction `send()` du XMLHttpRequest est appelée en dernier pour télécharger le contenu du fichier complètement chargé.

> **Note :** la méthode non standard `sendAsBinary` utilisée dans l'exemple ci-dessus est obsolète depuis Gecko 31 {{ geckoRelease(31) }}&nbsp;; utilisez plutôt la méthode standard `send(Blob data)`.

### Gérer le processus de téléchargement d'un fichier de manière asynchrone

Cet exemple utilise PHP pour la partie serveur et JavaScript pour la partie client. Il illustre comment gérer l'<i lang="en">upload</i> d'un fichier de façon asynchrone.

```js
<?php
if (isset($_FILES['monFichier'])) {
    // Exemple :
    move_uploaded_file($_FILES['monFichier']['tmp_name'], "uploads/" . $_FILES['monFichier']['name']);
    exit;
}
?><!DOCTYPE html>
<html>
<head>
    <title>dnd binary upload</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <script type="application/javascript">
        function sendFile(file) {
            const uri = "/index.php";
            const xhr = new XMLHttpRequest();
            const fd = new FormData();

            xhr.open("POST", uri, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    alert(xhr.responseText); // gestion de la réponse.
                }
            };
            fd.append('monFichier', file);
            // Initier un upload multipart/form-data
            xhr.send(fd);
        }

        window.onload = function() {
            const dropzone = document.getElementById("dropzone");
            dropzone.ondragover = dropzone.ondragenter = function(event) {
                event.stopPropagation();
                event.preventDefault();
            }

            dropzone.ondrop = function(event) {
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
        <div id="dropzone" style="margin:30px; width:500px; height:300px; border:1px dotted grey;">Glisser-déposer votre fichier ici…</div>
    </div>
</body>
</html>
```

## Exemple&nbsp;: Utiliser un objet URLs pour afficher un PDF

Vous pouvez utiliser un objet URLs pour d'autres choses que les images&nbsp;! Ils peuvent être utilisés pour afficher des fichiers PDF incorporés ou toutes autres ressources affichables par le navigateur.

Sous Firefox, la constante de configuration `pdfjs.disabled` doit être définie à `false` {{non-standard_inline()}} pour afficher les PDF encapsulés dans dans un {{ HTMLElement("iframe") }} plutôt que de s'en voir proposer le téléchargement sur le PC local.

```html
<iframe id="viewer">
```

Et voici comment modifier la valeur de l'attribut `src`&nbsp;:

```js
var obj_url = window.URL.createObjectURL(blob);
var iframe = document.getElementById('viewer');
iframe.setAttribute('src', obj_url);
window.URL.revokeObjectURL(obj_url);
```

## Exemple&nbsp;: Utiliser un objet URLs avec d'autres types de fichiers

Vous pouvez manipuler de la même façon des fichiers d'autres formats. Voici comment prévisualiser une vidéo téléchargée sur le serveur&nbsp;:

```js
var video = document.getElementById('video');
var obj_url = window.URL.createObjectURL(blob);
video.src = obj_url;
video.play()
window.URL.revokeObjectURL(obj_url);
```

## Spécifications

- [File upload state](http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#file-upload-state-%28type=file%29) (HTML 5 working draft)
- [File API](http://www.w3.org/TR/FileAPI/)

## Voir aussi

- {{ domxref("File") }}
- {{ domxref("FileList") }}
- {{ domxref("FileReader") }}
- [Utiliser XMLHttpRequest](/Web/API/XMLHttpRequest/Utiliser_XMLHttpRequest)
- [Using the DOM File API in chrome code](/en/Extensions/Using_the_DOM_File_API_in_chrome_code)
- {{ domxref("XMLHttpRequest") }}
- [jQuery](http://www.jquery.com/) JavaScript library
