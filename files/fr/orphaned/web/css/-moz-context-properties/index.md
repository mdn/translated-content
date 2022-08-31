---
title: '-moz-context-properties'
slug: orphaned/Web/CSS/-moz-context-properties
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/-moz-context-properties
original_slug: Web/CSS/-moz-context-properties
---
{{CSSRef}}{{Non-standard_header}}{{SeeCompatTable}}

Si on intègre une image SVG dans une page web grâce à un élément remplacé (généralement l'élément {{htmlelement("img")}}), il est possible d'appliquer les propriétés de l'élément `<img>` à l'image SVG (de même pour les autres contextes qui intègreraient une image SVG) grâce à la propriété `-moz-context-properties`.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
-moz-context-properties: fill;
-moz-context-properties: fill, stroke;

/* Valeurs globales */
-moz-context-properties: inherit;
-moz-context-properties: initial;
-moz-context-properties: unset;
```

### Valeurs

- `fill`
  - : Expose la valeur `fill` appliquée sur l'image afin qu'elle soit appliquée sur le SVG.
- `stroke`
  - : Expose la valeur `stroke` appliquée sur l'image afin qu'elle soit appliquée sur le SVG.
- `fill-opacity`
  - : Expose la valeur `fill-opacity` appliquée sur l'image afin qu'elle soit appliquée sur le SVG.
- `stroke-opacity`
  - : Expose la valeur `stroke-opacity` appliquée sur l'image afin qu'elle soit appliquée sur le SVG.

### Syntaxe formelle

{{csssyntax}}

## Exemples

Dans cet exemple, on embarque un SVG simple dans un élément `<img>`.

Tout d'abord, on définit les propriétés qu'on souhaite appliquer au SVG grâce à la propriété {{cssxref("-moz-context-properties")}}. Par exemple :

```css
img {
  width: 100px;
  height: 100px;
  -moz-context-properties: fill, stroke;
}

.img1 {
    fill: lime;
    stroke: purple;
}
```

Une fois que c'est fait, on peut utiliser les valeurs {{cssxref("fill")}} et {{cssxref("stroke")}} dans le SVG. Par exemple :

```html
<img class="img1" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'>
                       <rect width='100%' height='100%' stroke-width='30px'
                       fill='context-fill red' stroke='context-stroke' fill-opacity='0.5'/></svg>">
```

Ici, l'attribut `src` de l'image correspond à une URI de données qui contient une simple image SVG. L'élément `<rect>` est paramétré afin de récupérer les valeurs `fill` et `stroke` telles que fournies par les propriétés {{cssxref("fill")}} et {{cssxref("stroke")}} de l'élément `<img>` grâce aux mots-clés `context-fill`/`context-stroke`. On utilise aussi une couleur de secours pour le remplissage (`fill`) (qui sera utilisée si le SVG est chargé en dehors de tout contexte, dans un nouvel onglet par exemple). On notera que, si une couleur est directement définie sur le SVG et qu'une couleur contextuelle (ici celle fournie par l'image) est également indiquée, ce sera cette dernière qui l'emportera.

> **Note :** vous pouvez consulter [un exemple complet sur notre dépôt Github](https://mdn.github.io/css-examples/moz-context-properties/).

## Spécifications

Cette propriété n'est définie dans aucun standard CSS.

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.-moz-context-properties")}}
