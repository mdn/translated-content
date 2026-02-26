---
title: "HTMLSourceElement : propriété media"
short-title: media
slug: Web/API/HTMLSourceElement/media
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("HTML DOM")}}

La propriété **`media`** de l'interface {{DOMxRef("HTMLSourceElement")}} est une chaîne de caractères représentant le support de destination prévu pour la ressource. La valeur est une [requête média](/fr/docs/Web/CSS/Guides/Media_queries/Using), qui est une liste séparée par des virgules de types de média, de caractéristiques de média et d'opérateurs logiques.

Elle reflète l'attribut `media` de l'élément HTML {{HTMLElement("source")}}.

## Valeur

Une chaîne de caractères.

## Exemples

```html
<video>
  <source
    id="el"
    src="largeVideo.mov"
    type="video/quicktime"
    media="screen and (width >= 600px)" />
</video>
```

```js
const el = document.getElementById("el");
console.log(el.media); // Affiche : "screen and (width >= 600px)"
el.media = "(width >= 800px)"; // Met à jour la valeur de media
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLSourceElement.type")}}
- La propriété {{DOMxRef("HTMLSourceElement.sizes")}}
- La propriété {{DOMxRef("HTMLSourceElement.src")}}
- La propriété {{DOMxRef("HTMLSourceElement.srcset")}}
- L'élément HTML {{HTMLElement("source")}}
- L'élément HTML {{HTMLElement("picture")}}
- L'élément HTML {{HTMLElement("audio")}}
- L'élément HTML {{HTMLElement("video")}}
- [Utiliser les requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using)
