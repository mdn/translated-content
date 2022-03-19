---
title: <input type="file">
slug: Web/HTML/Element/Input/file
tags:
  - HTML
  - Input
  - Reference
translation_of: Web/HTML/Element/input/file
---
{{HTMLRef}}

Les éléments {{HTMLElement("input")}} dont l'attribut `type` vaut **`"file"`** permettent à un utilisateur de sélectionner un ou plusieurs fichiers depuis leur appareil et de les _uploader_ vers un serveur via [un formulaire](/fr/docs/Web/Guide/HTML/Formulaires) ou grâce à du code JavaScript [via l'API _File_](/fr/docs/Using_files_from_web_applications).

{{EmbedInteractiveExample("pages/tabbed/input-file.html", "tabbed-shorter")}}

## Valeur

L'attribut {{htmlattrxref("value", "input")}} contient une chaîne de caractères ({{domxref("DOMString")}}) qui représente le chemin du/des fichier(s) sélectionné(s). Les autres fichiers peuvent être identifiés grâce à la propriété `HTMLInputElement.files`.

> **Note :**
>
> 1.  Si plusieurs fichiers sont sélectionnés, la chaîne de caractères représente le chemin du premier fichier sélectionné. Il est possible d'accéder aux autres fichiers en JavaScript [grâce à la propriété `FileList`](</en-US/docs/Using_files_from_web_applications#Getting_information_about_selected_file(s)>).
> 2.  Si aucun fichier n'est sélectionné, la chaîne de caractères sera vide (`""`).
> 3.  La chaîne de caractères [est préfixée avec `C:\fakepath\`](https://html.spec.whatwg.org/multipage/input.html#fakepath-srsly) afin d'éviter la fuite d'informations sensibles concernant la structure des fichiers de l'utilisateur.

## Attributs supplémentaires

En complément des attributs partagés par l'ensemble des éléments {{HTMLElement("input")}}, les champs de type `file` peuvent également utiliser les attributs suivants :

| Attribut                       | Description                                                                                               |
| ------------------------------ | --------------------------------------------------------------------------------------------------------- |
| [`accept`](#accept)     | Un ou plusieurs identifiants de type de fichier décrivants les types de fichier autorisés.                |
| [`capture`](#capture)     | La source à utiliser pour capturer des images ou des vidéos.                                              |
| [`files`](#files)     | Un objet {{domxref("FileList")}} qui liste les fichiers choisis                                  |
| [`multiple`](#multiple) | Un attribut booléen qui, lorsqu'il est présent, indique que plusieurs fichiers peuvent être sélectionnés. |

### {{htmlattrdef("accept")}}

Une chaîne de caractères qui définit les types de fichier qui devraient être acceptés. Cette chaîne est une liste d'identifiants de type de fichier (cf. ci-après) séparés par des virgules. Un fichier pouvant avoir un format selon différentes extensions et types MIME, il est souvent utile de cibler plusieurs identifiants pour la bonne sélection du fichier.

Les fichiers Microsoft Word, par exemple, peuvent être identifiés de différentes façons et, dans un site avec un champ qui accepte les fichiers Word, on pourra écrire :

```html
<input type="file" id="docpicker"
  accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document">
```

### {{htmlattrdef("capture")}}

Une chaîne de caractères qui indique la caméra à utiliser pour capturer des photos et des vidéos si l'attribut `accept` indique que le fichier est de ce type. Lorsque `capture` vaut `"user"`, cela indique que la caméra qui fait face à l'utilisateur devrait être utilisée. Si l'attribut vaut `"environment"`, c'est la caméra qui est tournée vers l'extérieur devrait être utilisée. Si l'attribut est absent, l'agent utilisateur pourra décider de laquelle utiliser. Si la caméra souhaitée par l'attribut n'est pas disponible, l'agent utilisateur pourra utiliser une autre caméra de l'appareil.

> **Note :** `capture` était auparavant un attribut booléen qui, lorsqu'il était présent, indiquait que les capteurs de l'appareil (caméra/micro) devaient être utilisés plutôt qu'un fichier.

### {{htmlattrdef("files")}}

Un objet {{domxref("FileList")}} qui liste chaque fichier sélectionné. Cette liste n'a qu'un seul élément, sauf si {{htmlattrxref("multiple", "input/file")}} est indiqué.

### {{htmlattrdef("multiple")}}

Lorsque cet attribut booléen est indiqué, le champ peut être utilisé afin de sélectionner plus d'un fichier.

## Attribut non-standard

En complément des attributs précédents, les éléments `<input type="file">` peuvent utiliser les attributs spécifiques suivants. Ces attributs ne sont pas standard et ne devraient donc pas être utilisés.

| Attribut                               | Description                                                                                                                               |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| [`webkitdirectory`](#webkitdirectory) | Un attribut booléen qui indique si l'utilisateur peut choisir un répertoire (ou plusieurs si [`multiple`](#multiple) est présent). |

### {{htmlattrdef("webkitdirectory")}} {{non-standard_inline}}

L'attribut booléen `webkitdirectory`, lorsqu'il est présent, indique que le contrôle permet de sélectionner un/des répertoires plutôt qu'un/des fichiers. Voir {{domxref("HTMLInputElement.webkitdirectory")}} pour plus de détails et d'exemples.

> **Note :** Bien que cet attribut ait initialement été implémenté pour les navigateurs WebKit, `webkitdirectory` est utilisable avec Microsoft Edge et pour Firefox 50 et supérieurs. Toutefois, bien que la prise en charge soit assez vaste, cet attribut reste non-standard et ne doit pas être utilisé.

## Identifiants de type de fichier

Un identifiant de type de fichier est une chaîne de caractères qui décrit le type de fichier qui peut être sélectionné par un utilisateur via un élément {{HTMLElement("input")}} de type `file`. Chaque identifiant peut prendre une des formes suivantes :

- Une extension de fichier valide, sensible à la casse et qui commence par un point (« . »). Par exemple : `.jpg`, `.pdf` ou `.doc`.
- Un type MIME valide, sans extension.
- La chaîne de caractères `audio/*` qui indique « n'importe quel fichier audio »
- La chaîne de caractères `video/*` qui indique « n'importe quel fichier vidéo&nbsp;»
- La chaîne de caractères `image/*` qui indique « n'importe quel fichier image ».

L'attribut `accept` prend comme valeur une chaîne de caractères composée d'un ou plusieurs identifiants de type, séparés par des virgules. Ainsi, si un sélecteur de fichier doit permettre de sélectionner des images ou des documents PDF, on pourra écrire :

```html
<input type="file" accept="image/*,.pdf">
```

## Utiliser `<input type="file">`

### Un exemple simple

```html
<form method="post" enctype="multipart/form-data">
 <div>
   <label for="file">Sélectionner le fichier à envoyer</label>
   <input type="file" id="file" name="file" multiple>
 </div>
 <div>
   <button>Envoyer</button>
 </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
}
```

Ce fragment de code HTML produira le résultat suivant :

{{EmbedLiveSample('Un_exemple_simple', 650, 60)}}

> **Note :** Vous pouvez également trouver cet exemple sur GitHub — [avec le code source](https://github.com/mdn/learning-area/blob/master/html/forms/file-examples/simple-file.html) et [la démonstration](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html).

Quel que soit l'appareil ou le système d'exploitation de l'utilisateur, l'élément `<input type="file">` fournit un bouton qui ouvre un sélecteur de fichier permettant de choisir un fichier.

Lorsque l'attribut {{htmlattrxref("multiple", "input")}} est utilisé (comme dans l'exemple précédent), cela signifie que plusieurs fichiers peuvent être sélectionnés de façon simultanée. L'utilisateur doit alors pouvoir choisir plusieurs fichiers depuis le sélecteur de fichier (par exemple en maintenant la touche <kbd>Shift</kbd> ou <kbd>Control</kbd> puis en cliquant). Si on souhaite qu'un seul fichier puisse être envoyé, il suffit de ne pas utiliser l'attribut `multiple`.

Lorsqu'on envoie le formulaire de l'exemple, le nom de chaque fichier sera ajouté aux paramètres de l'URL de la façon suivante : `?file=fichier1.txt&file=fichier2.txt`

### Obtenir des informations sur les fichiers sélectionnés

Les fichiers sélectionnés peuvent être obtenus sous la forme d'un objet {{domxref("FileList")}} renvoyé par la propriété `HTMLInputElement.files` de l'élement du DOM. Cet objet est une liste d'objets {{domxref("File")}}. Un objet `FileList` se comporte comme un tableau et on peut donc consulter sa longueur (la propriété `length`) afin de connaître le nombre de fichiers sélectionnés.

Chaque objet `File` contient les informations suivantes :

- `name` : le nom du fichier.
- `lastModified` : un nombre représentant la date à laquelle le fichier a été modifié pour la dernière fois (sous la forme d'un horodatage UNIX).
- `lastModifiedDate` : un objet {{domxref("Date")}} qui représente la date et l'heure à laquelle le fichier a été modifié pour la dernière fois.
- `size` : un nombre qui représente la taille du fichier en octets.
- `type` : une chaîne de caractères ({{domxref("DOMString")}}) qui représente [le type MIME](/fr/docs/Glossaire/Type_MIME) du fichier.
- `webkitRelativePath`{{non-standard_inline}} : une chaîne de caractères qui indique l'emplacement relatif du fichier par rapport au dossier de base indiqué par l'attribut {{htmlattrxref("webkitdirectory", "input")}}. _Attention, cette fonctionnalité est non-standard et doit être utilisée avec précaution._

> **Note :** Dans la plupart des navigateurs récents, il est possible de récupérer et de modifier l'attribut IDL `HTMLInputElement.files`. Pour Firefox, cela a été ajouté avec la version 57 (cf. {{bug(1384030)}}).

### Restreindre les types de fichiers acceptés

Il arrive souvent qu'on souhaite sélectionner certains types de fichiers. Par exemple, si on souhaite fournir une image de profil, on restreindra probablemnt les formats à ceux des formats d'image compatibles pour le Web comme [JPEG](/fr/docs/Glossaire/jpeg) ou [PNG](/fr/docs/Glossaire/PNG).

Pour cela, on peut utiliser l'attribut {{htmlattrxref("accept","input")}} afin d'indiquer les formats de fichier acceptés (sous la forme d'une liste d'extensions de fichier ou de types MIME séparés par des virgules). Par exemple :

- `accept="image/png"` ou `accept=".png"` permettra de n'accepter que les fichiers PNG.
- `accept="image/png, image/jpeg"` ou `accept=".png, .jpg, .jpeg"` permettra de n'accepter que les fichiers PNG ou JPEG.
- `accept="image/*"` permettra d'accepter n'importe quel fichier dont le type MIME est `image/*` (pour de nombreux appareils mobiles, cette valeur permet d'utiliser l'appareil photo de l'appareil afin de prendre une photo qui sera utilisée comme fichier à envoyer).
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` permettra d'accepter un fichier ressemblant à un document Word.

Prenons un exemple :

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="profile_pic">Sélectionnez le fichier à utiliser</label>
    <input type="file" id="profile_pic" name="profile_pic"
          accept=".jpg, .jpeg, .png">
  </div>
  <div>
    <button>Envoyer</button>
  </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
}
```

Voici le résultat produit :

{{EmbedLiveSample('Restreindre_les_types_de_fichiers_acceptés', 650, 60)}}

> **Note :** Vous pouvez également consulter cet exemple sur GitHub — [voir le code source](https://github.com/mdn/learning-area/blob/master/html/forms/file-examples/file-with-accept.html) et [la démonstration _live_](https://mdn.github.io/learning-area/html/forms/file-examples/file-with-accept.html).

Le résultat peut sembler similaire à l'exemple précédent mais lorsque vous essayer de sélectionner un fichier, vous verrez que le sélecteur ne permet de sélectionner que les fichiers du/des type(s) indiqué(s) (il peut y avoir certaines différences selons les navigateurs et les systèmes d'exploitation).

L'attribut `accept` ne permet pas de valider/contrôler le type réel du/des fichier(s) sélectionné(s). Il fournit simplement une indication au navigateur pour aider l'utilisateur à sélectionner les bons fichiers. Toutefois, dans la plupart des cas, l'utilisateur peut toujours choisir une option dans le sélecteur afin de pouvoir choisir un fichier d'un autre type.

Dans tous les cas (et comme pour les autres éléments envoyés au serveur), il est nécessaire de contrôler les données reçues par un mécanisme de validation côté serveur.

### Notes

1.  À partir de {{Gecko("2.0")}}, appeler la méthode `click()` sur un élément de type `file` ouvre le sélecteur de fichier et permet à un utilisateur de sélectionner les fichiers sur son système d'opération. Pour plus d'exemples, voir Utiliser des fichiers avec des applications web.
2.  Il n'est pas possible de définir la valeur du sélecteur de fichier via un script. Le code suivant n'aura aucun effet :

    ```js
    const input = document.querySelector("input[type=file]");
    input.value = "toto";
    ```

3.  Lorsqu'on choisit un fichier via `<input type="file">`, le chemin réel du fichier source n'est pas transmis dans la valeur de l'attribut `value` pour des raisons de sécurité. À la place, on a le nom du fichier précédé du chemin `C:\fakepath\`. Cela provient de raisons historiques, est pris en charge par la plupart des navigateurs modernes. Cela a même été [inscrit dans la spécification](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly).

## Exemples

Dans l'exemple qui suit, on présente sélecteur de fichiers plus avancé, qui tire parti des informations disponibles grâce à la propriété `HTMLInputElement.files`. On montre aussi quelques astuces.

> **Note :** Le code source complet de cet exemple est disponible sur GitHub — [file-example.html](https://github.com/mdn/learning-area/blob/master/html/forms/file-examples/file-example.html) ([voir la démonstration _live_ associée](https://mdn.github.io/learning-area/html/forms/file-examples/file-example.html)). Nous n'expliquerons pas ici la feuille de style CSS mais plutôt le code JavaScript qui contient la logique.

Tout d'abord, voici le fragment de code HTML utilisé :

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="image_uploads">Sélectionner des images à uploader (PNG, JPG)</label>
    <input type="file" id="image_uploads" name="image_uploads" accept=".jpg, .jpeg, .png" multiple>
  </div>
  <div class="preview">
    <p>Aucun fichier sélectionné pour le moment</p>
  </div>
  <div>
    <button>Envoyer</button>
  </div>
</form>
```

```css hidden
html {
  font-family: sans-serif;
}

form {
  width: 600px;
  background: #ccc;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid black;
}

form ol {
  padding-left: 0;
}

form li, div > p {
  background: #eee;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  list-style-type: none;
  border: 1px solid black;
}

form img {
  height: 64px;
  order: 1;
}

form p {
  line-height: 32px;
  padding-left: 10px;
}

form label, form button {
  background-color: #7F9CCB;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px ridge black;
  font-size: 0.8rem;
  height: auto;
}

form label:hover, form button:hover {
  background-color: #2D5BA3;
  color: white;
}

form label:active, form button:active {
  background-color: #0D3F8F;
  color: white;
}
```

Pour l'instant, le fragment HTML ressemble à ce que nous avons déjà vu avant, rien de spécial.

Voyons maintenant le code JavaScript utilisé :

Pour les premières lignes du script, on récupère des références au formulaire et à l'élément {{htmlelement("div")}} qui possède la classe `.preview`. Ensuite, on masque l'élément {{htmlelement("input")}} car leur apparence peut être incohérente entre les navigateurs et qu'il est difficile de les mettre en forme. Cliquer sur l'élément {{htmlelement("label")}} suffit à ouvrir le sélecteur et nous mettons donc en forme cet élément à la façon d'un bouton. Ainsi, l'utilisateur saura comment interagir avec le document pour _uploader_ des fichiers.

```js
var input = document.querySelector('input');
var preview = document.querySelector('.preview');

input.style.opacity = 0;
```

> **Note :** La propriété [`opacity`](/fr/docs/Web/CSS/opacity) est utilisée pour masquer l'élément `<input>` plutôt que [`visibility: hidden`](/fr/docs/Web/CSS/visibility) ou [`display: none`](/fr/docs/Web/CSS/display). En effet, avec ces derniers les technologies d'assistance (lecteurs d'écran par exemple) comprendraient que l'élément n'est pas interactif et ne peut pas être utilisé.

Ensuite, on ajoute [un gestionnaire d'évènement](/fr/docs/Web/API/EventTarget/addEventListener) à l'élément `<input>` afin de réaliser certaines actions lorsque sa valeur (c'est-à-dire les fichiers sélectionnés) change. Ici, le gestionnaire d'évènement appelle la fonction `updateImageDisplay()` que nous décrirons juste après.

```js
input.addEventListener('change', updateImageDisplay);
```

À chaque fois que la fonction `updateImageDisplay()` est appelée :

- On lance une boucle [`while`](/en-US/docs/Web/JavaScript/Reference/Statements/while) afin de vider le contenu qui pourrait être dans l'élément `<div>` servant à la prévisualisation.
- On récupère l'objet {{domxref("FileList")}} qui contient les informations sur les fichiers sélectionnés et on le stocke dans une variable intitulée `curFiles`.
- On vérifie si aucun fichier n'a été sélectionné (ce qui se traduit par vérifier si `curFiles.length` vaut 0). Si c'est le cas, on place un message dans le `<div>` de prévisualisation pour indiquer qu'aucun fichier n'a été sélectionné.
- Si des fichiers ont été sélectionnés, on les parcourt afin d'afficher des informations sur ces fichiers dans l'élément `<div>`. Quelques notes :

  - On utilise une fonction `validFileType()` afin de vérifier si le fichier est bien du bon type (c'est-à-dire qu'il respecte les extensions d'image indiquées dans l'attribut `accept`).

    - Si c'est le cas :

      - On affiche le nom et la taille du fichier dans une liste à l'intérieur du `<div>` (obtenus à partir de `curFiles[i].name` et `curFiles[i].size`). La fonction `returnFileSize()` est utilisée ici afin d'afficher la taille de façon lisible (en octets, kilo-octets ou mega-octets plutôt que toujours en octets).
      - On génère un aperçu de l'image en appelant la méthode `window.URL.createObjectURL(curFiles[i])` et en réduisant l'image grâce à du CSS puis on insère cette image dans la liste.

    - Si le type de fichier est invalide, on affiche un message dans la liste afin d'indiquer à l'utilisateur qu'il est nécessaire de sélectionner un autre type de fichier.

```js
function updateImageDisplay() {
  while(preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  var curFiles = input.files;
  if(curFiles.length === 0) {
    var para = document.createElement('p');
    para.textContent = 'No files currently selected for upload';
    preview.appendChild(para);
  } else {
    var list = document.createElement('ol');
    preview.appendChild(list);
    for(var i = 0; i < curFiles.length; i++) {
      var listItem = document.createElement('li');
      var para = document.createElement('p');
      if(validFileType(curFiles[i])) {
        para.textContent = 'File name ' + curFiles[i].name + ', file size ' + returnFileSize(curFiles[i].size) + '.';
        var image = document.createElement('img');
        image.src = window.URL.createObjectURL(curFiles[i]);

        listItem.appendChild(image);
        listItem.appendChild(para);

      } else {
        para.textContent = 'File name ' + curFiles[i].name + ': Not a valid file type. Update your selection.';
        listItem.appendChild(para);
      }

      list.appendChild(listItem);
    }
  }
}
```

La fonction `validFileType()` prend un objet {{domxref("File")}} en entrée puis parcourt la liste des types de fichier autorisés pour les comparer à la propriété `type` du fichier. Si on trouve une correspondance (ce qui signifie que le type est bien autorisé), la fonction renvoie `true`, sinon, elle renvoie `false`.

```js
var fileTypes = [
  'image/jpeg',
  'image/pjpeg',
  'image/png'
]

function validFileType(file) {
  for(var i = 0; i < fileTypes.length; i++) {
    if(file.type === fileTypes[i]) {
      return true;
    }
  }

  return false;
}
```

La fonction `returnFileSize()` prend en entrée un nombre d'octets (dans notre exemple, celui-ci provient de la propriété `size` du fichier) et le transforme en une chaîne de caractères plus compréhensible avec une taille en octets/Ko/Mo.

```js
function returnFileSize(number) {
  if(number < 1024) {
    return number + ' octets';
  } else if(number >= 1024 && number < 1048576) {
    return (number/1024).toFixed(1) + ' Ko';
  } else if(number >= 1048576) {
    return (number/1048576).toFixed(1) + ' Mo';
  }
}
```

Et voici le résultat :

{{EmbedLiveSample('Exemples', '100%', 200)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#valeur">Valeur</a></strong></td>
      <td>
        Une chaîne de caractères ({{domxref("DOMString")}}) qui
        représente le chemin du fichier sélectionné.
      </td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} et
        {{domxref("HTMLElement/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>Attributs pris en charge</strong></td>
      <td>
        {{htmlattrxref("accept", "input/file")}},
        {{htmlattrxref("capture", "input/file")}},
        {{htmlattrxref("files", "input/file")}},
        {{htmlattrxref("multiple", "input/file")}}
      </td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td><code>files</code> et <code>value</code></td>
    </tr>
    <tr>
      <td><strong>Interface DOM</strong></td>
      <td>{{domxref("HTMLInputElement")}}</td>
    </tr>
    <tr>
      <td><strong>Propriétés</strong></td>
      <td>
        <a href="/fr/docs/Web/API/HTMLInputElement#Properties_file"
          >Propriétés pour les éléments <code>HTMLInputElement</code> de type
          <code>file</code></a
        >
      </td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}}
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                                                        | État                             | Commentaires         |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('HTML WHATWG', 'input.html#file-upload-state-(type=file)', '&lt;input type="file"&gt;')}} | {{Spec2('HTML WHATWG')}} | Définition initiale. |
| {{SpecName('HTML5.1', 'sec-forms.html#file-upload-state-typefile', '&lt;input type="file"&gt;')}}     | {{Spec2('HTML5.1')}}     | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("html.elements.input.input-file")}}

## Voir aussi

- [Manipuler des fichiers à partir d'applications web](/fr/docs/Using_files_from_web_applications) contient différents exemples d'applications relatifs à `<input type="file">`
- [L'API _File_](/fr/docs/Web/API/File).
