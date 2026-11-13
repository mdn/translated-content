---
title: "HTMLMediaElement : propriété readyState"
short-title: readyState
slug: Web/API/HTMLMediaElement/readyState
l10n:
  sourceCommit: e932acf254c5dd06e26798b9d8fe01ce8dab1fb7
---

{{APIRef("HTML DOM")}}

La propriété **`readyState`** de l'interface {{DOMxRef("HTMLMediaElement")}} indique l'état de préparation du média.

## Valeurs

Un nombre qui est l'une des cinq constantes d'état possibles définies sur l'interface {{DOMxRef("HTMLMediaElement")}}&nbsp;:

- `HTMLMediaElement.HAVE_NOTHING` (0)
  - : Aucune information n'est disponible sur la ressource média.
- `HTMLMediaElement.HAVE_METADATA` (1)
  - : Assez de la ressource média a été récupérée pour que les attributs de métadonnées soient initialisés. La recherche ne lèvera plus d'exception.
- `HTMLMediaElement.HAVE_CURRENT_DATA` (2)
  - : Des données sont disponibles pour la position de lecture actuelle, mais pas suffisamment pour lire plus d'une image.
- `HTMLMediaElement.HAVE_FUTURE_DATA` (3)
  - : Des données pour la position de lecture actuelle ainsi que pour au moins un petit moment dans le futur sont disponibles (en d'autres termes, au moins deux images vidéo, par exemple).
- `HTMLMediaElement.HAVE_ENOUGH_DATA` (4)
  - : Assez de données sont disponibles et le débit de téléchargement est suffisamment élevé pour que le média puisse être lu jusqu'à la fin sans interruption.

## Exemples

Cet exemple écoutera le chargement des données audio pour l'élément `example`. Il vérifiera ensuite si au moins la position de lecture actuelle a été chargée. Si c'est le cas, l'audio sera lu.

```html
<audio id="example" preload="auto">
  <source src="sound.ogg" type="audio/ogg" />
</audio>
```

```js
const obj = document.getElementById("example");

obj.addEventListener("loadeddata", () => {
  if (obj.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
    obj.play();
  }
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLMediaElement")}}&nbsp;: utilisée pour définir la propriété `HTMLMediaElement.readyState`
