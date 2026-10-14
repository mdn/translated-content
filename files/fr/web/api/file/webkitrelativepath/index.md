---
title: "File : propriété webkitRelativePath"
short-title: webkitRelativePath
slug: Web/API/File/webkitRelativePath
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("File and Directory Entries API")}}{{AvailableInWorkers}}

La propriété en lecture seule **`webkitRelativePath`** de l'interface {{DOMxRef("File")}} fournit une chaîne de caractères qui définit le chemin du fichier par rapport au répertoire sélectionné par l'utilisateur·ice dans un élément HTML {{HTMLElement("input")}} avec son attribut [`webkitdirectory`](/fr/docs/Web/HTML/Reference/Elements/input#webkitdirectory) défini.

## Valeur

Une chaîne de caractères contenant le chemin du fichier par rapport au répertoire sélectionné par l'utilisateur·ice.

## Exemples

Dans cet exemple, un sélecteur de répertoires est présenté, ce qui permet à l'utilisateur·ice de choisir un ou plusieurs répertoires. Lorsque l'évènement {{DOMxRef("HTMLElement/change_event", "change")}} se produit, une liste de tous les fichiers contenus dans les hiérarchies de répertoires sélectionnées est générée et affichée.

### HTML

```html
<input
  type="file"
  id="selecteur-fichier"
  name="fileList"
  webkitdirectory
  multiple />
<output id="sortie"></output>
```

```css hidden
output {
  display: block;
  white-space: pre-wrap;
}
```

### JavaScript

```js
const sortie = document.getElementById("sortie");
const selecteurFichier = document.getElementById("selecteur-fichier");

selecteurFichier.addEventListener("change", (event) => {
  const fichiers = event.target.files;

  for (const fichier of fichiers) {
    sortie.textContent += `${fichier.webkitRelativePath}\n`;
  }
});
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API File and Directory Entries](/fr/docs/Web/API/File_and_Directory_Entries_API)
- La propriété {{DOMxRef("HTMLInputElement.webkitEntries")}}
- La propriété {{DOMxRef("HTMLInputElement.webkitdirectory")}}
