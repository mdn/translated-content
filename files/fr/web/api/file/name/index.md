---
title: "File : propriété name"
short-title: name
slug: Web/API/File/name
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{APIRef("File API")}}{{AvailableInWorkers}}

La propriété en lecture seule **`name`** de l'interface {{DOMxRef("File")}} fournit le nom du fichier représenté par un objet {{DOMxRef("File")}}. Pour des raisons de sécurité, le chemin est exclu de cette propriété.

## Valeur

Une chaîne de caractères contenant le nom du fichier sans le chemin, par exemple «&nbsp;Mon compte-rendu.rtf&nbsp;».

## Exemples

### HTML

```html
<input type="file" id="selecteur-fichier" multiple />
<div>
  <p>Liste des fichiers sélectionnés&nbsp;:</p>
  <ul id="sortie"></ul>
</div>
```

### JavaScript

```js
const sortie = document.querySelector("#sortie");
function traiterFichiersSelectionnes(entreeFichier) {
  let fichiers = entreeFichier.files;
  sortie.textContent = "Liste des fichiers sélectionnés :";

  for (let i = 0; i < fichiers.length; i++) {
    sortie.textContent += `\nNom du fichier : ${fichiers[i].name}`;
  }
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser des fichiers à partir d'applications web](/fr/docs/Web/API/File_API/Using_files_from_web_applications)
