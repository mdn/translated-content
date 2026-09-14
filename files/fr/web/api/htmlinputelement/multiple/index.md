---
title: "HTMLInputElement : propriété multiple"
short-title: multiple
slug: Web/API/HTMLInputElement/multiple
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{APIRef("HTML DOM")}}

La propriété **`multiple`** de l'interface {{DOMxRef("HTMLInputElement")}} indique si un champ de saisie peut avoir plusieurs valeurs. Firefox ne prend actuellement en charge `multiple` que pour `<input type="file">`.

## Valeur

Une valeur booléenne.

## Exemples

```html
<input id="my-file-input" type="file" multiple />
```

```js
let fileInput = document.getElementById("my-file-input");

if (fileInput.multiple) {
  // Parcourir fileInput.files
  for (const file of fileInput.files) {
    // Action sur chaque fichier
  }
  // Un seul fichier disponible
} else {
  let [file] = fileInput.files;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("FileList")}}
- [Bogue 523771 <sup>(angl.)</sup>](https://bugzil.la/523771) - Prise en charge de \<input type=file multiple>
