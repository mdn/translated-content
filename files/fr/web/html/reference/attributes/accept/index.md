---
title: "Attribut HTML : accept"
short-title: accept
slug: Web/HTML/Reference/Attributes/accept
original_slug: Web/HTML/Attributes/accept
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'attribut **`accept`** prend comme valeur une liste, séparée par des virgules, d'un ou plusieurs types de fichiers ou de [spécificateurs de type de fichier unique](#spécification_de_type_de_fichier_unique), décrivant les types de fichiers autorisés.

{{InteractiveExample("Démonstration HTML&nbsp;: accept", "tabbed-shorter")}}

```html interactive-example
<label for="movie">Choisissez un film à téléverser&nbsp;:</label>

<input type="file" id="movie" name="movie" accept="video/*" />

<label for="poster">Choisissez une affiche&nbsp;:</label>

<input type="file" id="poster" name="poster" accept="image/png, image/jpeg" />
```

```css interactive-example
label {
  display: block;
  margin-top: 1rem;
}

input {
  margin-bottom: 1rem;
}
```

## Présentation

La propriété `accept` est un attribut du type {{HTMLElement("input/file", "file")}} de l'élément HTML {{HTMLElement("input")}}. Elle était auparavant prise en charge sur l'élément HTML {{HTMLElement("form")}}, mais a été supprimée au profit de {{HTMLElement("input/file", "file")}}.

Comme un type de fichier donné peut être identifié de plusieurs manières, il est utile de fournir un ensemble complet de spécificateurs de type lorsque vous avez besoin de fichiers d'un type précis, ou d'utiliser le joker pour indiquer que tout format de ce type est accepté.

Par exemple, il existe plusieurs façons d'identifier les fichiers Microsoft Word, donc un site qui accepte ces fichiers pourrait utiliser un `<input>` comme ceci&nbsp;:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

Si vous acceptez un fichier média, vous pouvez vouloir inclure tous les formats de ce type de média&nbsp;:

```html
<input type="file" id="soundFile" accept="audio/*" />
<input type="file" id="videoFile" accept="video/*" />
<input type="file" id="imageFile" accept="image/*" />
```

L'attribut `accept` ne valide pas les types des fichiers sélectionnés&nbsp;: il fournit des indications aux navigateurs pour guider l'utilisateur·rice vers le bon type de fichier. Il reste possible (dans la plupart des cas) pour l'utilisateur·rice de modifier une option du sélecteur de fichiers afin de pouvoir choisir n'importe quel fichier, même d'un type incorrect.

Pour cette raison, vous devez toujours valider la contrainte attendue côté serveur.

## Exemples

Lorsque cet attribut est utilisé sur un champ permettant de sélectionner un fichier, le sélecteur de fichier natif qui s'ouvre devrait filtrer sur les seuls fichiers qui correspondent au(x) type(s) indiqués. La plupart des systèmes d'exploitation masquent ou grisent alors les fichiers qui ne correspondent pas et ne peuvent pas être sélectionnés.

```html
<p>
  <label for="soundFile">Sélectionnez un fichier audio&nbsp;:</label>
  <input type="file" id="soundFile" accept="audio/*" />
</p>
<p>
  <label for="videoFile">Sélectionnez un fichier vidéo&nbsp;:</label>
  <input type="file" id="videoFile" accept="video/*" />
</p>
<p>
  <label for="imageFile">Sélectionner des images&nbsp;:</label>
  <input type="file" id="imageFile" accept="image/*" multiple />
</p>
```

{{EmbedLiveSample('Exemples', '', 160)}}

Notez que le dernier exemple vous permet de sélectionner plusieurs images. Voir l'attribut [`multiple`](multiple) pour plus d'informations.

## Spécification de type de fichier unique

Un **spécificateur de type de fichier unique** est une chaîne qui décrit un type de fichier pouvant être sélectionné par l'utilisateur dans un élément [`<input>`](/fr/docs/Web/HTML/Reference/Elements/input) de type `file`. Chaque spécificateur unique de type de fichier peut prendre l'une des formes suivantes&nbsp;:

- Une extension de nom de fichier valide et insensible à la casse, commençant par un caractère point (« . »). Par exemple&nbsp;: `.jpg`, `.pdf`, ou `.doc`.
- Une chaîne de type MIME valide, sans extension.
- La chaîne de caractères `audio/*` signifiant "tout fichier audio".
- La chaîne de caractères `vidéo/*` signifiant "tout fichier vidéo".
- La chaîne de caractères `image/*` signifiant "tout fichier image".

L'attribut `accept` prend comme valeur une chaîne de caractères contenant une ou plusieurs de ces spécificateurs de type de fichier unique, séparées par des virgules. Par exemple, un sélecteur de fichiers qui a besoin d'un contenu pouvant être présenté comme une image, y compris les formats d'image standard et les fichiers PDF, pourrait ressembler à ceci&nbsp;:

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

Cela produit le résultat suivant&nbsp;:

{{EmbedLiveSample('Utilisation des champs pour saisir des fichiers', 650, 100)}}

> [!NOTE]
> Vous pouvez trouver cet exemple sur GitHub également - voir le [code source <sup>(angl.)</sup>)](https://github.com/mdn/learning-area/blob/master/html/forms/file-examples/simple-file.html), et aussi [le fonctionnement en direct <sup>(angl.)</sup>)](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html).

Quel que soit le dispositif ou le système d'exploitation de l'utilisateur, l'entrée de fichier fournit un bouton qui ouvre une boîte de dialogue de sélection de fichier permettant à l'utilisateur de choisir un fichier.

L'inclusion de l'attribut [`multiple`](/fr/docs/Web/HTML/Reference/Elements/input#multiple), comme indiqué ci-dessus, spécifie que plusieurs fichiers peuvent être choisis en même temps. L'utilisateur peut choisir plusieurs fichiers dans le sélecteur de fichiers de n'importe quelle manière permise par la plateforme qu'il a choisie (par exemple, en maintenant la touche <kbd>Maj</kbd> ou <kbd>Ctrl</kbd>, puis en cliquant). Si vous souhaitez que l'utilisateur ne choisisse qu'un seul fichier par `<input>`, omettez l'attribut `multiple`.

### Restreindre les types de fichier acceptés

Souvent, vous ne voudrez pas que l'utilisateur puisse choisir n'importe quel type de fichier arbitraire ; au contraire, vous voudrez souvent qu'il sélectionne des fichiers d'un ou plusieurs types spécifiques. Par exemple, si votre entrée de fichier permet aux utilisateurs de télécharger une photo de profil, vous voulez probablement qu'ils sélectionnent des formats d'image compatibles avec le Web, tels que {{Glossary("JPEG")}} ou {{Glossary("PNG")}}.

Les types de fichiers acceptables peuvent être spécifiés avec l'attribut [`accept`](/fr/docs/Web/HTML/Reference/Elements/input/file#attr-accept), qui prend une liste d'extensions de fichiers ou de types MIME autorisés séparés par des virgules. Quelques exemples&nbsp;:

- `accept="image/png"` ou `accept=".png"` — Accepter les fichiers PNG.
- `accept="image/png, image/jpeg"` ou `accept=".png, .jpg, .jpeg"` — Accepter les fichiers PNG ou JPEG.
- `accept="image/*"` — Accepter tout fichier ayant un type MIME `image/*`. (De nombreux appareils mobiles permettent également à l'utilisateur de prendre une photo avec l'appareil photo lorsque cette option est utilisée).
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — Accepter tout ce qui ressemble à un document MS Word.

Examinons un exemple plus complet&nbsp;:

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

{{EmbedLiveSample('Restreindre les types de fichier acceptés', 650, 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser des fichiers à partir d'applications web](/fr/docs/Web/API/File_API/Using_files_from_web_applications)
- [L'API File](/fr/docs/Web/API/File)
