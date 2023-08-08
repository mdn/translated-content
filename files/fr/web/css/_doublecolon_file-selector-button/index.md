---
title: "::-webkit-file-upload-button"
slug: Web/CSS/::file-selector-button
---

{{CSSRef}}{{Non-standard_header}}

Le pseudo-élément **`::-webkit-file-upload-button`** représente le bouton d'un élément {{HTMLElement("input")}} de type `file`.

Ce pseudo-élément n'est pas standard et est uniquement pris en charge par les navigateurs basés sur WebKit/Blink.

## Syntaxe

```css
selecteur::-webkit-file-upload-button
```

## Exemples

### CSS

```css
input,
label {
  display: block;
}

input[type="file"]::-webkit-file-upload-button {
  border: 1px solid grey;
  background: #fffaaa;
}
```

### HTML

```html
<form>
  <label for="fileUpload">Uploader un fichier</label><br />
  <input type="file" id="fileUpload" />
</form>
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Spécifications

Ce pseudo-élément est un pseudo-élément propriétaire lié à WebKit/Blink et ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}
