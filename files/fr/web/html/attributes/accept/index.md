---
title: "Attribut HTML : accept"
slug: Web/HTML/Attributes/accept
---

{{HTMLSidebar}}

L'attribut **`accept`** prend comme valeur une liste séparée par des virgules d'un ou plusieurs types de fichiers, ou d'une [spécification de type de fichier unique](#unique_file_type_specifiers), décrivant les types de fichiers à autoriser. La propriété `accept` est un attribut pour les éléments [`<input>`](/fr/docs/Web/HTML/Element/Input) de type [`file`](/fr/docs/Web/HTML/Element/Input/file). Elle était prise en charge par l'élément [`<form>`](/fr/docs/Web/HTML/Element/Form), mais a été supprimée au profit de [`file`](/fr/docs/Web/HTML/Element/Input/file) dans HTML5.

Comme un type de fichier donné peut être identifié de plusieurs manières, il est utile de fournir un ensemble complet de spécificateurs de type lorsque vous avez besoin de fichiers d'un type spécifique, ou d'utiliser le joker pour indiquer qu'un type de n'importe quel format est accepté.

Par exemple, il existe un certain nombre de façons d'identifier les fichiers Microsoft Word, de sorte qu'un site qui accepte les fichiers Word pourrait utiliser un `<input>` comme celui-ci&nbsp;:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

En revanche, si vous acceptez un fichier multimédia, vous pouvez inclure tout format de ce type de média&nbsp;:

```html
<input type="file" id="soundFile" accept="audio/*" />
<input type="file" id="videoFile" accept="video/*" />
<input type="file" id="imageFile" accept="image/*" />
```

L'attribut `accept` ne valide pas les types de fichiers sélectionnés ; il fournit des indications aux navigateurs pour guider les utilisateurs vers la sélection des bons types de fichiers. Il est toujours possible (dans la plupart des cas) pour les utilisateurs de basculer une option dans le sélecteur de fichiers qui permet de passer outre et de sélectionner le fichier de leur choix, puis de choisir des types de fichiers incorrects.

Pour cette raison, vous devez vous assurer que les exigences attendues sont validées côté serveur.

## Exemples

Lorsque cet attribut est utilisé sur un champ permettant de sélectionner un fichier, le sélecteur de fichier natif qui s'ouvre devrait filtrer sur les seuls fichiers qui correspondent au(x) type(s) indiqués. La plupart des systèmes d'exploitation masquent ou grisent alors les fichiers qui ne correspondent pas et ne peuvent pas être sélectionnés.

```html
<p>
  <label for="soundFile">Sélectionnez un fichier audio :</label>
  <input type="file" id="soundFile" accept="audio/*" />
</p>
<p>
  <label for="videoFile">Sélectionnez un fichier vidéo :</label>
  <input type="file" id="videoFile" accept="video/*" />
</p>
<p>
  <label for="imageFile">Sélectionner des images :</label>
  <input type="file" id="imageFile" accept="image/*" multiple />
</p>
```

{{EmbedLiveSample('Exemples', '', 160)}}

Notez que le dernier exemple vous permet de sélectionner plusieurs images. Voir l'attribut [`multiple`](multiple) pour plus d'informations.

## Spécification de type de fichier unique

Un **spécificateur de type de fichier unique** est une chaîne qui décrit un type de fichier pouvant être sélectionné par l'utilisateur dans un élément [`<input>`](/fr/docs/Web/HTML/Element/Input) de type `file`. Chaque spécificateur unique de type de fichier peut prendre l'une des formes suivantes :

- Une extension de nom de fichier valide et insensible à la casse, commençant par un caractère point (« . »). Par exemple : `.jpg`, `.pdf`, ou `.doc`.
- Une chaîne de type MIME valide, sans extension.
- La chaîne de caractères `audio/*` signifiant "tout fichier audio".
- La chaîne de caractères `vidéo/*` signifiant "tout fichier vidéo".
- La chaîne de caractères `image/*` signifiant "tout fichier image".

L'attribut `accept` prend comme valeur une chaîne de caractères contenant une ou plusieurs de ces spécificateurs de type de fichier unique, séparées par des virgules. Par exemple, un sélecteur de fichiers qui a besoin d'un contenu pouvant être présenté comme une image, y compris les formats d'image standard et les fichiers PDF, pourrait ressembler à ceci :

```html
<input type="file" accept="image/*,.pdf" />
```

## Utilisation des champs pour saisir des fichiers

### Un exemple de base

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="file">Choisissez le fichier à téléverser</label>
    <input type="file" id="file" name="file" multiple />
  </div>
  <div>
    <button>Soumettre</button>
  </div>
</form>
```

```css
div {
  margin-bottom: 10px;
}
```

Cela produit le résultat suivant :

{{EmbedLiveSample('Utilisation_des_champs_pour_saisir_des_fichiers', 650, 100)}}

> **Note :** Vous pouvez trouver cet exemple sur GitHub également - voir le [code source](https://github.com/mdn/learning-area/blob/master/html/forms/file-examples/simple-file.html), et aussi [le fonctionnement en direct](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html).

Quel que soit le dispositif ou le système d'exploitation de l'utilisateur, l'entrée de fichier fournit un bouton qui ouvre une boîte de dialogue de sélection de fichier permettant à l'utilisateur de choisir un fichier.

L'inclusion de l'attribut [`multiple`](multiple), comme indiqué ci-dessus, spécifie que plusieurs fichiers peuvent être choisis en même temps. L'utilisateur peut choisir plusieurs fichiers dans le sélecteur de fichiers de n'importe quelle manière permise par la plateforme qu'il a choisie (par exemple, en maintenant la touche <kbd>Maj</kbd> ou <kbd>Ctrl</kbd>, puis en cliquant). Si vous souhaitez que l'utilisateur ne choisisse qu'un seul fichier par `<input>`, omettez l'attribut `multiple`.

### Restreindre les types de fichier acceptés

Souvent, vous ne voudrez pas que l'utilisateur puisse choisir n'importe quel type de fichier arbitraire ; au contraire, vous voudrez souvent qu'il sélectionne des fichiers d'un ou plusieurs types spécifiques. Par exemple, si votre entrée de fichier permet aux utilisateurs de télécharger une photo de profil, vous voulez probablement qu'ils sélectionnent des formats d'image compatibles avec le Web, tels que [JPEG](/fr/docs/Glossary/jpeg) ou [PNG](/fr/docs/Glossary/PNG).

Les types de fichiers acceptables peuvent être spécifiés avec l'attribut [`accept`](/fr/docs/Web/HTML/Element/Input/file#attr-accept), qui prend une liste d'extensions de fichiers ou de types MIME autorisés séparés par des virgules. Quelques exemples :

- `accept="image/png"` ou `accept=".png"` — Accepter les fichiers PNG.
- `accept="image/png, image/jpeg"` ou `accept=".png, .jpg, .jpeg"` — Accepter les fichiers PNG ou JPEG.
- `accept="image/*"` — Accepter tout fichier ayant un type MIME `image/*`. (De nombreux appareils mobiles permettent également à l'utilisateur de prendre une photo avec l'appareil photo lorsque cette option est utilisée).
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — Accepter tout ce qui ressemble à un document MS Word.

Examinons un exemple plus complet :

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="profile_pic">Choisissez le fichier à téléverser</label>
    <input
      type="file"
      id="profile_pic"
      name="profile_pic"
      accept=".jpg, .jpeg, .png" />
  </div>
  <div>
    <button>Soumettre</button>
  </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
}
```

{{EmbedLiveSample('Restreindre_les_types_de_fichier_acceptés', 650, 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser des fichiers à partir d'applications web](/fr/docs/Web/API/File/Using_files_from_web_applications)
- [L'API File](/fr/docs/Web/API/File)
