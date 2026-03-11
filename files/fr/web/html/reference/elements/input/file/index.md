---
title: <input type="file">
slug: Web/HTML/Reference/Elements/input/file
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

Les éléments {{HTMLElement("input")}} de type **`file"`** permettent à l'utilisateur·ice de choisir un ou plusieurs fichiers stockés sur son appareil. Une fois sélectionnés, les fichiers peuvent être téléversés vers un serveur à l'aide de [l'envoi de formulaire](/fr/docs/Learn_web_development/Extensions/Forms), ou manipulés à l'aide du code JavaScript et de [l'API File](/fr/docs/Web/API/File_API/Using_files_from_web_applications).

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;input type=&quot;file&quot;&gt;", "tabbed-shorter")}}

```html interactive-example
<label for="avatar">Choisir une photo de profil&nbsp;:</label>

<input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
```

```css interactive-example
label {
  display: block;
  font:
    1rem "Fira Sans",
    sans-serif;
}

input,
label {
  margin: 0.4rem 0;
}
```

## Valeur

L'attribut [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) d'un champ de type fichier contient une chaîne de caractères qui représente le chemin vers le ou les fichiers sélectionnés. Si aucun fichier n'est encore sélectionné, la valeur est une chaîne vide (`""`). Lorsque l'utilisateur·ice sélectionne plusieurs fichiers, le `value` représente le premier fichier dans la liste des fichiers qu'il·elle a sélectionnés. Les autres fichiers peuvent être identifiés à l'aide de la [propriété `HTMLInputElement.files` du champ](/fr/docs/Web/API/File_API/Using_files_from_web_applications#obtenir_des_informations_sur_les_fichiers_sélectionnés).

> [!NOTE]
> La valeur est [toujours le nom du fichier précédé de `C:\fakepath\` <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/input.html#fakepath-srsly), ce qui n'est pas le vrai chemin du fichier. Cela permet d'empêcher un logiciel malveillant de deviner la structure des fichiers de l'utilisateur·ice.

## Attributs supplémentaires

En complément des attributs partagés par l'ensemble des éléments {{HTMLElement("input")}}, les champs de type `file` peuvent également utiliser les attributs suivants.

### `accept`

L'attribut [`accept`](/fr/docs/Web/HTML/Reference/Attributes/accept) est une chaîne de caractères qui définit les types de fichiers que le champ de fichier doit accepter. Cette chaîne de caractères est une liste séparée par des virgules de **[identifiants de type de fichier uniques](#identifiants_de_type_de_fichier_uniques)**. Comme un type de fichier donné peut être identifié de plusieurs manières, il est utile de fournir un ensemble complet d'identifiants de type lorsque vous avez besoin de fichiers d'un format donné.

Par exemple, il existe plusieurs façons d'identifier les fichiers Microsoft Word, donc un site qui accepte les fichiers Word pourrait utiliser un `<input>` comme ceci&nbsp;:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

### `capture`

L'attribut [`capture`](/fr/docs/Web/HTML/Reference/Attributes/capture) est une chaîne de caractères qui définit quelle caméra utiliser pour capturer des images ou des vidéos, si l'attribut [`accept`](/fr/docs/Web/HTML/Reference/Attributes/accept) indique que l'entrée doit être de l'un de ces types. Une valeur de `user` indique que la caméra et/ou le microphone orientés vers l'utilisateur·ice doivent être utilisés. Une valeur de `environment` définit que la caméra et/ou le microphone orientés vers l'extérieur doivent être utilisés. Si cet attribut est absent, {{Glossary("user agent", "l'agent utilisateur")}} est libre de décider de son propre comportement. Si le mode de capture demandé n'est pas disponible, l'agent utilisateur peut revenir à son mode par défaut préféré.

> [!NOTE]
> `capture` était auparavant un attribut booléen qui, lorsqu'il était présent, indiquait que les capteurs de l'appareil (caméra/micro) devaient être utilisés plutôt qu'un fichier.

### `multiple`

Lorsque l'attribut booléen [`multiple`](/fr/docs/Web/HTML/Reference/Attributes/multiple) est défini, le champ de fichier permet à l'utilisateur·ice de sélectionner plusieurs fichiers.

## Attribut non-standard

En complément des attributs précédents, les éléments `<input type="file">` peuvent utiliser les attributs spécifiques suivants. Ces attributs ne sont pas standard et ne devraient donc pas être utilisés.

### `webkitdirectory`

L'attribut booléen `webkitdirectory`, lorsqu'il est présent, indique que seuls les répertoires doivent être disponibles pour être sélectionnés par l'utilisateur·ice dans l'interface de sélection de fichiers. Voir {{DOMxRef("HTMLInputElement.webkitdirectory")}} pour plus de détails et d'exemples.

## Identifiants de type de fichier uniques

Un **identifiant de type de fichier unique** est une chaîne de caractères qui décrit un type de fichier pouvant être sélectionné par l'utilisateur·ice dans un élément {{HTMLElement("input")}} de type `file`. Chaque identifiant de type de fichier unique peut prendre l'une des formes suivantes&nbsp;:

- Une extension de fichier valide, insensible à la casse et commençant par un point («&nbsp;.&nbsp;»). Par exemple&nbsp;: `.jpg`, `.pdf` ou `.doc`.
- Une chaîne de caractères de type MIME valide, sans extension.
- La chaîne de caractères `audio/*` qui signifie «&nbsp;n'importe quel fichier audio&nbsp;».
- La chaîne de caractères `video/*` qui signifie «&nbsp;n'importe quel fichier vidéo&nbsp;».
- La chaîne de caractères `image/*` qui signifie «&nbsp;n'importe quel fichier image&nbsp;».

L'attribut `accept` prend comme valeur une chaîne de caractères contenant un ou plusieurs de ces identifiants de type de fichier uniques, séparés par des virgules. Par exemple, un sélecteur de fichiers qui doit permettre de sélectionner du contenu pouvant être présenté comme une image, incluant à la fois les formats d'image standards et les fichiers PDF, pourrait ressembler à ceci&nbsp;:

```html
<input type="file" accept="image/*,.pdf" />
```

## Utiliser les champs de fichier

### Un exemple simple

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="file">Sélectionner le fichier à envoyer</label>
    <input type="file" id="file" name="file" multiple />
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

Ce fragment de code HTML produira le résultat suivant&nbsp;:

{{EmbedLiveSample('Un exemple simple', 650, 90)}}

> [!NOTE]
> Vous pouvez également trouver cet exemple sur GitHub — voir le [code source <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/simple-file.html), et aussi [voir la démonstration en direct <sup>(angl.)</sup>](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html).

Quel que soit l'appareil ou le système d'exploitation de l'utilisateur·ice, le champ de fichier fournit un bouton qui ouvre une boîte de dialogue permettant de choisir un fichier.

L'ajout de l'attribut [`multiple`](#multiple), comme montré ci-dessus, indique que plusieurs fichiers peuvent être sélectionnés en même temps. L'utilisateur·ice peut choisir plusieurs fichiers dans le sélecteur de fichiers de la manière permise par sa plateforme (par exemple en maintenant la touche <kbd>Maj</kbd> ou <kbd>Ctrl</kbd> puis en cliquant). Si vous souhaitez que l'utilisateur·ice ne puisse choisir qu'un seul fichier par `<input>`, il suffit de ne pas utiliser l'attribut `multiple`.

### Obtenir des informations sur les fichiers sélectionnés

Les fichiers sélectionnés sont retournés par la propriété `HTMLInputElement.files` de l'élément, qui est un objet {{DOMxRef("FileList")}} contenant une liste d'objets {{DOMxRef("File")}}. L'objet `FileList` se comporte comme un tableau, vous pouvez donc vérifier sa propriété `length` pour obtenir le nombre de fichiers sélectionnés.

Chaque objet `File` contient les informations suivantes&nbsp;:

- `name`
  - : Le nom du fichier.
- `lastModified`
  - : Un entier définissant la date et l'heure auxquelles le fichier a été modifié pour la dernière fois, en millisecondes depuis l'époque UNIX (1er janvier 1970 à minuit).
- `lastModifiedDate` {{Deprecated_Inline}}
  - : Un objet {{JSxRef("Date")}} représentant la date et l'heure auxquelles le fichier a été modifié pour la dernière fois. _Cet attribut est obsolète et ne doit pas être utilisé. Préférez `lastModified`._
- `size`
  - : La taille du fichier en octets.
- `type`
  - : Le [type MIME](/fr/docs/Web/HTTP/Guides/MIME_types) du fichier.
- `webkitRelativePath` {{Non-standard_Inline}}
  - : Une chaîne de caractères définissant le chemin du fichier relatif au dossier de base sélectionné dans un sélecteur de répertoire (c'est-à-dire un sélecteur de fichier dans lequel l'attribut [`webkitdirectory`](#webkitdirectory) est défini). _Cet attribut est non-standard et doit être utilisé avec précaution._

### Restreindre les types de fichiers acceptés

Souvent, vous ne souhaitez pas que l'utilisateur·ice puisse choisir n'importe quel type de fichier&nbsp;: vous voulez qu'il·elle sélectionne des fichiers d'un type ou de plusieurs types précis. Par exemple, si votre champ de fichier permet de téléverser une photo de profil, vous souhaitez probablement qu'il·elle sélectionne des formats d'image compatibles avec le web, tels que {{Glossary("JPEG")}} ou {{Glossary("PNG")}}.

Vous pouvez définir les types de fichiers acceptables avec l'attribut [`accept`](#accept), qui prend une liste séparée par des virgules d'extensions de fichiers ou de types MIME autorisés. Quelques exemples&nbsp;:

- `accept="image/png"` ou `accept=".png"` — Accepte les fichiers PNG.
- `accept="image/png, image/jpeg"` ou `accept=".png, .jpg, .jpeg"` — Accepte les fichiers PNG ou JPEG.
- `accept="image/*"` — Accepte tout fichier avec un type MIME `image/*`. (De nombreux appareils mobiles permettent aussi à l'utilisateur·ice de prendre une photo avec la caméra lorsque cette option est utilisée.)
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — Accepte tout ce qui ressemble à un document MS Word.

Voyons un exemple plus complet&nbsp;:

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="profile_pic">Sélectionnez le fichier à utiliser</label>
    <input
      type="file"
      id="profile_pic"
      name="profile_pic"
      accept=".jpg, .jpeg, .png" />
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

Voici le résultat produit&nbsp;:

{{EmbedLiveSample('Restreindre les types de fichiers acceptés', 650, 90)}}

> [!NOTE]
> Vous pouvez également consulter cet exemple sur GitHub — voir le [code source <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-with-accept.html) et aussi [voir la démonstration en direct <sup>(angl.)</sup>](https://mdn.github.io/learning-area/html/forms/file-examples/file-with-accept.html).

Le résultat peut sembler similaire, mais si vous essayez de sélectionner un fichier avec ce champ, vous verrez que le sélecteur ne permet de choisir que les types de fichiers définis dans la valeur de l'attribut `accept` (l'interface exacte varie selon les navigateurs et les systèmes d'exploitation).

L'attribut `accept` ne permet pas de valider les types des fichiers sélectionnés&nbsp;; il fournit des indications aux navigateurs pour guider les utilisateurs vers la sélection des types de fichiers corrects. Il est toujours possible (dans la plupart des cas) pour les utilisateurs de basculer une option dans le sélecteur de fichiers qui permet de contourner cela et de sélectionner n'importe quel fichier qu'ils souhaitent, puis de choisir des types de fichiers incorrects.

À cause de cela, vous devez vous assurer que l'attribut `accept` est soutenu par une validation appropriée côté serveur.

### Détecter les annulations

L'évènement `cancel` est déclenché lorsque l'utilisateur·ice ne modifie pas sa sélection, en re-sélectionnant les fichiers précédemment sélectionnés. L'évènement `cancel` est également déclenché lorsque la boîte de dialogue de sélection de fichiers est fermée ou annulée, grâce au bouton «&nbsp;Annuler&nbsp;» ou à la touche <kbd>Échap</kbd>.

Par exemple, le code suivant affichera un message dans la console si l'utilisateur·ice ferme la fenêtre sans sélectionner de fichier&nbsp;:

```js
const elem = document.createElement("input");
elem.type = "file";
elem.addEventListener("cancel", () => {
  console.log("Annulé.");
});
elem.addEventListener("change", () => {
  if (elem.files.length === 1) {
    console.log("Fichier sélectionné : ", elem.files[0]);
  }
});
elem.click();
```

### Notes

1. Il n'est pas possible de définir la valeur du sélecteur de fichier via un script. Le code suivant n'aura aucun effet&nbsp;:

   ```js
   const input = document.querySelector("input[type=file]");
   input.value = "toto";
   ```

2. Lorsqu'on choisit un fichier via `<input type="file">`, le chemin réel du fichier source n'est pas transmis dans la valeur de l'attribut `value` pour des raisons de sécurité. À la place, on a le nom du fichier précédé du chemin `C:\fakepath\`. Cela provient de raisons historiques, est pris en charge par la plupart des navigateurs modernes, et ça a même été [défini dans la spécification <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly).

## Exemples

Dans l'exemple qui suit, on présente sélecteur de fichiers plus avancé, qui tire parti des informations disponibles grâce à la propriété `HTMLInputElement.files`. On montre aussi quelques astuces.

> [!NOTE]
> Le code source complet de cet exemple est disponible sur GitHub — [file-example.html](https://github.com/mdn/learning-area/blob/master/html/forms/file-examples/file-example.html) ([voir la démonstration _live_ associée](https://mdn.github.io/learning-area/html/forms/file-examples/file-example.html)). Nous n'expliquerons pas ici la feuille de style CSS mais plutôt le code JavaScript qui contient la logique.

Tout d'abord, voici le fragment de code HTML utilisé&nbsp;:

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="image_uploads"
      >Sélectionner des images à téléverser (PNG, JPG)</label
    >
    <input
      type="file"
      id="image_uploads"
      name="image_uploads"
      accept=".jpg, .jpeg, .png"
      multiple />
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
  background: #cccccc;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid black;
}

form ol {
  padding-left: 0;
}

form li,
div > p {
  background: #eeeeee;
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

form label,
form button {
  background-color: #7f9ccb;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px ridge black;
  font-size: 0.8rem;
  height: auto;
}

form label:hover,
form button:hover {
  background-color: #2d5ba3;
  color: white;
}

form label:active,
form button:active {
  background-color: #0d3f8f;
  color: white;
}
```

Pour l'instant, le fragment HTML ressemble à ce que nous avons déjà vu avant, rien de spécial.

Voyons maintenant le code JavaScript utilisé.

Pour les premières lignes du script, on récupère des références au formulaire et à l'élément {{HTMLElement("div")}} qui possède la classe `.preview`. Ensuite, on masque l'élément {{HTMLElement("input")}} car leur apparence peut être incohérente entre les navigateurs et qu'il est difficile de les mettre en forme. Cliquer sur l'élément {{HTMLElement("label")}} suffit à ouvrir le sélecteur et nous mettons donc en forme cet élément à la façon d'un bouton. Ainsi, l'utilisateur·ice saura comment interagir avec le document pour téléverser des fichiers.

```js
const input = document.querySelector("input");
const preview = document.querySelector(".preview");

input.style.opacity = 0;
```

> [!NOTE]
> La propriété {{CSSxRef("opacity")}} est utilisée pour masquer l'élément `<input>` plutôt que {{CSSxRef("visibility", "visibility: hidden")}} ou {{CSSxRef("display", "display: none")}}. En effet, avec ces derniers les technologies d'assistance (lecteurs d'écran par exemple) comprendraient que l'élément n'est pas interactif et ne peut pas être utilisé.

Ensuite, on ajoute [un gestionnaire d'évènement](/fr/docs/Web/API/EventTarget/addEventListener) à l'élément `<input>` afin de réaliser certaines actions lorsque sa valeur (c'est-à-dire les fichiers sélectionnés) change. Ici, le gestionnaire d'évènement appelle la fonction `updateImageDisplay()` que nous décrirons juste après.

```js
input.addEventListener("change", updateImageDisplay);
```

À chaque fois que la fonction `updateImageDisplay()` est appelée&nbsp;:

- Utilisez une boucle {{JSxRef("Statements/while", "while")}} pour vider le contenu précédent de l'élément d'aperçu `<div>`.
- Récupérez l'objet {{DOMxRef("FileList")}} qui contient les informations sur tous les fichiers sélectionnés et stockez-le dans une variable appelée `curFiles`.
- Vérifiez qu'aucun fichier n'a été sélectionné en vérifiant si `curFiles.length` est égal à 0. Si c'est le cas, affichez un message dans l'aperçu `<div>` indiquant qu'aucun fichier n'a été sélectionné.
- Si des fichiers ont été sélectionnés, parcourez-les un par un et affichez les informations les concernant dans l'aperçu `<div>`. Remarques importantes&nbsp;:
- Nous utilisons la fonction personnalisée `validFileType()` pour vérifier si le fichier est du type correct (par exemple, les types d'images spécifiés dans l'attribut `accept`).
- Si c'est le cas, nous&nbsp;:
  - Affichons son nom et sa taille dans un élément de liste à l'intérieur de la balise `<div>` précédente (obtenus à partir de `file.name` et `file.size`). La fonction personnalisée `returnFileSize()` retourne une version bien formatée de la taille en octets/Ko/Mo (par défaut, le navigateur indique la taille en octets absolus).
  - Générons un aperçu miniature de l'image en appelant {{DOMxRef("URL/createObjectURL_static", "URL.createObjectURL(file)")}}. Ensuite, insérez l'image dans l'élément de liste en créant un nouveau {{HTMLElement("img")}} et en définissant son [`src`](/fr/docs/Web/HTML/Reference/Elements/img#src) sur la miniature.

- Si le type de fichier n'est pas valide, nous affichons un message dans un élément de liste indiquant à l'utilisateur·ice qu'il doit sélectionner un autre type de fichier.

```js
function updateImageDisplay() {
  while (preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  const curFiles = input.files;
  if (curFiles.length === 0) {
    const para = document.createElement("p");
    para.textContent =
      "Aucun fichier actuellement sélectionné pour le téléchargement";
    preview.appendChild(para);
  } else {
    const list = document.createElement("ol");
    preview.appendChild(list);

    for (const file of curFiles) {
      const listItem = document.createElement("li");
      const para = document.createElement("p");
      if (validFileType(file)) {
        para.textContent = `Nom du fichier ${file.name}, taille du fichier ${returnFileSize(
          file.size,
        )}.`;
        const image = document.createElement("img");
        image.src = URL.createObjectURL(file);
        image.alt = image.title = file.name;

        listItem.appendChild(image);
        listItem.appendChild(para);
      } else {
        para.textContent = `Nom du fichier ${file.name} : Type de fichier non valide. Mettez à jour votre sélection.`;
        listItem.appendChild(para);
      }

      list.appendChild(listItem);
    }
  }
}
```

La fonction personnalisée `validFileType()` prend un objet {{DOMxRef("File")}} en paramètre, puis utilise {{JSxRef("Array.prototype.includes()")}} pour vérifier si une valeur dans `fileTypes` correspond à la propriété `type` du fichier. Si une correspondance est trouvée, la fonction renvoie `true`. Si aucune correspondance n'est trouvée, elle renvoie `false`.

```js
// https://developer.mozilla.org/fr/docs/Web/Media/Guides/Formats/Image_types
const fileTypes = [
  "image/apng",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
  "image/svg+xml",
  "image/tiff",
  "image/webp",
  "image/x-icon",
];

function validFileType(file) {
  return fileTypes.includes(file.type);
}
```

La fonction `returnFileSize()` prend en entrée un nombre d'octets (dans notre exemple, celui-ci provient de la propriété `size` du fichier) et le transforme en une chaîne de caractères plus compréhensible avec une taille en octets/Ko/Mo.

```js
function returnFileSize(number) {
  if (number < 1e3) {
    return `${number} octets`;
  } else if (number >= 1e3 && number < 1e6) {
    return `${(number / 1e3).toFixed(1)} Ko`;
  }
  return `${(number / 1e6).toFixed(1)} Mo`;
}
```

> [!NOTE]
> Les unités «&nbsp;Ko&nbsp;» et «&nbsp;Mo&nbsp;» utilisées ici respectent la convention de [préfixe SI](https://fr.wikipedia.org/wiki/Pr%C3%A9fixe_binaire) selon laquelle 1 Ko = 1 000 octets, comme sous macOS. Différents systèmes représentent différemment la taille des fichiers. Par exemple, Ubuntu utilise les préfixes IEC où 1 Ko = 1024 octets, tandis que les spécifications RAM utilisent souvent les préfixes SI pour représenter les puissances de deux (1 Ko = 1024 octets). C'est pourquoi nous avons utilisé `1e3` (`1000`) et `1e6` (`1000000`) au lieu de `1024` et `1048576`. Dans votre application, vous devriez communiquer clairement le système d'unités à vos utilisateur·ice·s si la taille exacte est importante.

```js hidden
const button = document.querySelector("form button");
button.addEventListener("click", (e) => {
  e.preventDefault();
  const para = document.createElement("p");
  para.append("Image téléversée !");
  preview.replaceChildren(para);
});
```

Et voici le résultat&nbsp;:

{{EmbedLiveSample('Exemples', '100%', 200)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#valeur">Valeur</a></strong></td>
      <td>
        Une chaîne de caractères qui représente le chemin du fichier sélectionné.
      </td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td>
        {{DOMxRef("HTMLElement/change_event", "change")}},
        {{DOMxRef("Element/input_event", "input")}} et
        {{DOMxRef("HTMLInputElement/cancel_event", "cancel")}}
      </td>
    </tr>
    <tr>
      <td><strong>Attributs communs pris en charge</strong></td>
      <td><a href="/fr/docs/Web/HTML/Reference/Elements/input#required"><code>required</code></a></td>
    </tr>
    <tr>
      <td><strong>Attributs supplémentaires</strong></td>
      <td>
        <a href="#accept" aria-current="page"><code>accept</code></a>,
        <a href="#capture" aria-current="page"><code>capture</code></a>,
        <a href="#multiple" aria-current="page"><code>multiple</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td><code>files</code> et <code>value</code></td>
    </tr>
    <tr>
      <td><strong>Interface DOM</strong></td>
      <td>{{DOMxRef("HTMLInputElement")}}</td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td>
        {{DOMxRef("HTMLInputElement.select", "select()")}}
      </td>
    </tr>
    <tr>
      <td><strong>Rôle ARIA implicite</strong></td>
      <td><a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Pas de rôle correspondant <sup>(angl.)</sup></a></td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser des fichiers à partir d'applications web](/fr/docs/Web/API/File_API/Using_files_from_web_applications) — contient différents exemples d'applications relatifs à `<input type="file">` et [l'API _File_](/fr/docs/Web/API/File).
