---
title: "HTMLLinkElement : propriété imageSrcset"
short-title: imageSrcset
slug: Web/API/HTMLLinkElement/imageSrcset
l10n:
  sourceCommit: db443a6062d0e858a62af2f9a3a7558335ffd2dd
---

{{APIRef("HTML DOM")}}

La propriété **`imageSrcset`** de l'interface {{DOMxRef("HTMLLinkElement")}} est une chaîne de caractères qui identifie une ou plusieurs **chaînes de caractères candidates d'image** séparées par des virgules. Cette propriété reflète la valeur de l'attribut [`imagesrcset`](/fr/docs/Web/HTML/Reference/Elements/link#imagesrcset) de l'élément HTML {{HTMLElement("link")}}. Cette propriété permet d'obtenir ou de définir la valeur de l'attribut `imagesrcset`.

Chaque chaîne de caractères candidate d'image contient une URL d'image et un descripteur optionnel de largeur et/ou de densité de pixels indiquant les conditions dans lesquelles cette image candidate doit être utilisée.

```plain
"images/team-photo.jpg, images/team-photo-retina.jpg 2x, images/team-photo-large.jpg 1400w"
```

Pour les éléments HTML {{HTMLElement("link")}} avec [`rel="preload"`](/fr/docs/Web/HTML/Reference/Attributes/rel/preload) et [`as="image"`](/fr/docs/Web/HTML/Reference/Elements/link#as), l'attribut `imagesrcset` a une syntaxe et une sémantique similaires à l'attribut [`srcset`](/fr/docs/Web/HTML/Reference/Elements/img#srcset) de l'élément {{HTMLElement("img")}}, qui indique de précharger la ressource appropriée utilisée par un élément `<img>` avec des valeurs correspondantes pour ses attributs `srcset` et `sizes`.

Si la propriété `imageSrcset` inclut des descripteurs de largeur, la propriété {{DOMxRef("HTMLLinkElement.imageSizes", "imageSizes")}} doit être non nulle, sinon la valeur de `imageSrcset` est ignorée.

## Valeur

Une chaîne de caractères composée d'une liste séparée par des virgules d'une ou plusieurs chaînes de caractères candidates d'image, ou la chaîne de caractères vide `""` si non définie.

## Exemples

Le lien `<link>` suivant&nbsp;:

```html
<link
  rel="preload"
  as="image"
  imagesizes="50vw"
  imagesrcset="bg-narrow.png, bg-wide.png 800w" />
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  padding: 0 0.25rem;
  font-size: 1.2em;
  line-height: 1.4;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

…on peut accéder à la valeur de l'attribut `imagesrcset`, et la modifier, en utilisant la propriété `imageSrcset`&nbsp;:

```js
const link = document.querySelector("link");
log(`Original: ${link.imageSrcset}`);

// ajouter une chaîne de caractères candidate d'image
link.imageSrcset += ", bg-huge.png 1200w";
log(`Mis à jour : ${link.imageSrcset}`);
```

{{EmbedLiveSample('Examples',"","80")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLLinkElement.imageSizes")}}
- La propriété {{DOMxRef("HTMLImageElement.srcset")}}
- [Chargement spéculatif](/fr/docs/Web/Performance/Guides/Speculative_loading#link_relpreload)
- [Images adaptatives](/fr/docs/Web/HTML/Guides/Responsive_images)
