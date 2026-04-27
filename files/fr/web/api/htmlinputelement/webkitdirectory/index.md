---
title: "HTMLInputElement : propriété webkitdirectory"
short-title: webkitdirectory
slug: Web/API/HTMLInputElement/webkitdirectory
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("File and Directory Entries API")}}

La propriété **`webkitdirectory`** de l'interface {{DOMxRef("HTMLInputElement")}} reflète l'attribut HTML [`webkitdirectory`](/fr/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory), qui indique que les éléments `{{HTMLElement("input/file", "&lt;input type=\"file\"&gt;")}}` ne peuvent sélectionner que des répertoires au lieu de fichiers.

Lorsque un répertoire est sélectionné, le répertoire et toute sa hiérarchie de contenu sont inclus dans l'ensemble des éléments sélectionnés.
Les entrées du système de fichiers sélectionnées peuvent être obtenues à l'aide de la propriété {{DOMxRef("HTMLInputElement.webkitEntries", "webkitEntries")}}.

> [!NOTE]
> Cette propriété est appelée `webkitdirectory` dans la spécification en raison de ses origines en tant qu'API spécifique à Google Chrome.

## Valeur

Un booléen&nbsp;; `true` si l'élément HTML {{HTMLElement("input")}} doit permettre de ne sélectionner que des répertoires ou `false` si seuls les fichiers doivent être sélectionnables.

## Description

Définir `webkitdirectory` sur `true` fait en sorte que l'élément d'entrée propose des répertoires à l'utilisateur·ice au lieu de fichiers.
Après que l'utilisateur·ice a choisi un répertoire, chaque objet {{DOMxRef("File")}} dans le `files` retourné a sa propriété {{DOMxRef("File.webkitRelativePath")}} définie sur un chemin relatif au répertoire ancêtre sélectionné.
Par exemple, considérez ce système de fichiers&nbsp;:

```plain
AlbumPhotos
├── Aniversaires
│   ├── 1er anniversaire de Jamie
│   │   ├── PIC1000.jpg
│   │   └── PIC1044.jpg
│   └── 40 ans de Don
│       ├── PIC2343.jpg
│       └── PIC2356.jpg
└── Vacances
    └── Mars
        ├── PIC5556.jpg
        ├── PIC5684.jpg
        └── PIC5712.jpg
```

Si l'utilisateur·ice choisit le répertoire `PhotoAlbums`, la liste rapportée en fichiers, contiendra des objets {{DOMxRef("File")}} pour chaque fichier.
L'entrée pour `PIC2343.jpg` aura un `webkitRelativePath` de `PhotoAlbums/Birthdays/Don's 40th birthday/PIC2343.jpg`.
Cela permet de déterminer la hiérarchie du répertoire sélectionné même si le {{DOMxRef("FileList")}} est plat.

> [!NOTE]
> Le comportement de `webkitRelativePath` est différent dans _Chromium < 72_.
> Voir [ce bug <sup>(angl.)</sup>](https://crbug.com/124187) pour plus de détails.

## Exemples

Dans cet exemple, un sélecteur de répertoires est présenté, permettant à l'utilisateur·ice de choisir un ou plusieurs répertoires.
Lorsque l'évènement {{DOMxRef("HTMLElement/change_event", "change")}} se produit, une liste de tous les fichiers contenus dans les hiérarchies de répertoires sélectionnées est créée et affichée.

### HTML

```html
<input type="file" id="file-picker" name="fileList" webkitdirectory multiple />
<ul id="listing"></ul>
```

### JavaScript

```js
document.getElementById("file-picker").addEventListener("change", (event) => {
  let output = document.getElementById("listing");
  for (const file of event.target.files) {
    let item = document.createElement("li");
    item.textContent = file.webkitRelativePath;
    output.appendChild(item);
  }
});
```

### Résultats

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API d'entrée de fichiers et de répertoires](/fr/docs/Web/API/File_and_Directory_Entries_API)
- La propriété {{DOMxRef("HTMLInputElement.webkitEntries")}}
- La propriété {{DOMxRef("File.webkitRelativePath")}}
