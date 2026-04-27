---
title: "HTMLMediaElement : propriété preload"
short-title: preload
slug: Web/API/HTMLMediaElement/preload
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("HTML DOM")}}

La propriété **`preload`** de l'interface {{DOMxRef("HTMLMediaElement")}} est une chaîne de caractères qui fournit un indice au navigateur sur ce que l'auteur·ice pense être la meilleure expérience utilisateur.

Elle reflète l'attribut `preload` de l'élément HTML {{HTMLElement("audio")}} et de l'élément HTML {{HTMLElement("video")}}.

## Valeurs

Une chaîne de caractères. Les valeurs possibles sont les suivantes&nbsp;:

- `none`
  - : Indique que le média ne doit pas être préchargé.
- `metadata`
  - : Indique que seules les métadonnées du média (par exemple, la durée) sont récupérées.
- `auto`
  - : Indique que le fichier média complet peut être téléchargé, même si l'utilisateur·ice n'est pas censé·e l'utiliser.
- _chaîne de caractères vide_
  - : Un synonyme de la valeur `auto`.

## Exemples

```html
<video
  id="el"
  controls
  src="https://exemple.com/media.mp4"
  poster="https://exemple.com/media.jpg"
  width="800"
  height="600"
  preload="metadata">
  Désolé, votre navigateur ne prend pas en charge les vidéos intégrées, mais ne
  vous inquiétez pas, vous pouvez
  <a href="https://exemple.com/media.mp4" download="media.mp4"
    >le télécharger</a
  >
  et le regarder avec votre lecteur vidéo préféré&nbsp;!
</video>
```

```js
const el = document.getElementById("el");
console.log(el.preload); // Sortie : "metadata"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
