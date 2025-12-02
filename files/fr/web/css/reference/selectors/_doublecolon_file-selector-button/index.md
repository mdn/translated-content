---
title: ::file-selector-button
slug: Web/CSS/Reference/Selectors/::file-selector-button
original_slug: Web/CSS/::file-selector-button
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::file-upload-button`** représente le bouton d'un élément {{HTMLElement("input")}} de type `file`.

{{InteractiveExample("Démonstration CSS&nbsp;: ::file-selector-button", "tabbed-shorter")}}

```css interactive-example
input {
  margin-top: 1rem;
}

input::file-selector-button {
  font-weight: bold;
  color: dodgerblue;
  padding: 0.5em;
  border: thin solid grey;
  border-radius: 3px;
}
```

```html interactive-example
<label for="avatar">Choisissez une photo de profil&nbsp;:</label><br />

<input id="avatar" type="file" name="avatar" accept="image/png, image/jpeg" />
```

## Syntaxe

```css
::file-selector-button {
  /* ... */
}
```

## Exemples

### Exemple simple

#### HTML

```html
<form>
  <label for="fileUpload">Uploader un fichier</label>
  <input type="file" id="fileUpload" />
</form>
```

#### CSS

```css hidden
form {
  display: flex;
  gap: 1em;
  align-items: center;
}
```

```css
input[type="file"]::file-selector-button {
  border: 2px solid #6c5ce7;
  padding: 0.2em 0.4em;
  border-radius: 0.2em;
  background-color: #a29bfe;
  transition: 1s;
}

input[type="file"]::file-selector-button:hover {
  background-color: #81ecec;
  border: 2px solid #00cec9;
}
```

#### Résultat

{{EmbedLiveSample('exemple_simple', "100%", 150)}}

Notez que `::file-selector-button` est un élément entier, et en tant que tel, il correspond aux règles de la feuille de style de l'agent utilisateur. En particulier, les polices et les couleurs ne seront pas nécessairement héritées de l'élément `input`.

### Exemple de repli

#### HTML

```html
<form>
  <label for="fileUpload">Uploader un fichier</label>
  <input type="file" id="fileUpload" />
</form>
```

#### CSS

```css hidden
form {
  display: flex;
  gap: 1em;
  align-items: center;
}
```

```css
input[type="file"]::file-selector-button {
  border: 2px solid #6c5ce7;
  padding: 0.2em 0.4em;
  border-radius: 0.2em;
  background-color: #a29bfe;
  transition: 1s;
}

input[type="file"]::-ms-browse:hover {
  background-color: #81ecec;
  border: 2px solid #00cec9;
}

input[type="file"]::-webkit-file-upload-button:hover {
  background-color: #81ecec;
  border: 2px solid #00cec9;
}

input[type="file"]::file-selector-button:hover {
  background-color: #81ecec;
  border: 2px solid #00cec9;
}
```

#### Résultat

{{EmbedLiveSample("exemple_de_repli", "100%", 150)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les [extensions CSS WebKit](/fr/docs/Web/CSS/Reference/Webkit_extensions)
- L'[API d'entrées de fichiers et de répertoires](/fr/docs/Web/API/File_and_Directory_Entries_API)
- [`<input type="file">`](/fr/docs/Web/HTML/Reference/Elements/input/file)
