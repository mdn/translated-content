---
title: "HTMLLinkElement : propriété imageSizes"
short-title: imageSizes
slug: Web/API/HTMLLinkElement/imageSizes
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{APIRef("HTML DOM")}}

La propriété **`imageSizes`** de l'interface {{domxref("HTMLLinkElement")}} indique la taille et les conditions pour les images préchargées définies par la propriété {{domxref("HTMLLinkElement.imageSrcset", "imageSrcset")}}. Elle reflète la valeur de l'attribut [`imagesizes`](/fr/docs/Web/HTML/Reference/Elements/link#imagesizes) de l'élément HTML {{htmlelement("link")}}. Cette propriété permet d'obtenir ou de définir la valeur de l'attribut `imagesizes`.

L'attribut `imagesizes` de l'élément `<link>` est identique à l'attribut `sizes` de l'élément {{htmlelement("img")}}&nbsp;: une liste de **tailles sources** séparées par des virgules. Chaque taille source inclut une [condition média](/fr/docs/Web/CSS/Guides/Media_queries), la taille de l'image en tant que {{cssxref("length")}}, ou le mot-clé `auto`, qui doit apparaître en premier. Pour plus d'informations sur la syntaxe de l'attribut `sizes`, voir [`<img>`](/fr/docs/Web/HTML/Reference/Elements/img#sizes).

Les attributs `imagesrcset` et `imagesizes` ne sont pertinents que sur les éléments `<link>` qui possèdent à la fois un attribut `rel` défini sur `preload` et un attribut `as` défini sur `image`.

## Valeur

Une chaîne de caractères composée de tailles sources séparées par des virgules, ou la chaîne de caractères vide `""` si non spécifiée.

## Exemples

Given the following `<link>` element:

```html
<link
  rel="preload"
  as="image"
  imagesrcset="narrow.png, medium.png 600w, wide.png 1200w"
  imagesizes="(width < 400px) 200px, (400px <= width < 600px) 75vw, 50vw" />
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

…on peut obtenir et modifier la valeur de l'attribut `imagesizes` avec la propriété `imageSizes`&nbsp;:

```js
const link = document.querySelector("link");
log(`Original: ${link.imageSizes}`);

// Changer la valeur
link.imageSizes = "50vw";
log(`Mis à jour : ${link.imageSizes}`);
```

{{EmbedLiveSample('Examples',"","80")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{domxref("HTMLLinkElement.imageSrcset")}}
- La propriété {{domxref("HTMLImageElement.sizes")}}
- Les [Requêtes média](/fr/docs/Web/CSS/Guides/Media_queries)
- [Utiliser les attributs `srcset` et `sizes`](/fr/docs/Web/HTML/Reference/Elements/img#utiliser_les_attributs_srcset_et_sizes)
