---
title: Fonction CSS `param()`
short-title: param()
slug: Web/CSS/Reference/Values/param
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

{{SeeCompatTable}}

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`param()`** est utilisée pour définir des paramètres de lien. Cela peut être fait en utilisant la propriété CSS {{CSSxRef("link-parameters")}}, dans le fragment URL d'une ressource externe, ou dans un [`<url-modifier>`](/fr/docs/Web/CSS/Reference/Values/url_function#url-modifier) de la fonction CSS `url()`.

## Syntaxe

```css
/* Une seule valeur */
param(--color, red);

/* Plusieurs valeurs */
param(--color1, red),
param(--color2, blue),
param(--color3, green);
```

## Valeurs

- {{CSSxRef("&lt;dashed-ident&gt;")}}
  - : Un identifiant avec tiret (`<dashed-ident>`) est une variable définie par l'utilisateur·ice qui est utilisée comme identifiant dans la fonction CSS {{CSSxRef("env")}} pour mettre à jour la valeur.

- `<declaration_value>` {{Optional_Inline}}
  - : Une valeur `<declaration_value>` est la valeur de l'attribut mis à jour. Si la `<declaration_value>` est omise, elle représente une valeur vide.

## Définition formelle

{{CSSInfo}}

## Exemples

Tous les exemples suivants utilisent le même fichier SVG, qui a des attributs définis avec la fonction CSS {{CSSxRef("env()")}}.

```svg
<!-- example of the code in the external SVG file -->
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect
    width="100"
    height="100"
    stroke="env(--color1, chartreuse)"
    stroke-width="10"
    fill="env(--color2, darkgreen)"
   />
</svg>
```

### Utiliser la propriété `link-parameters`

Dans cet exemple, les attributs SVG sont mis à jour avec la propriété CSS {{CSSxRef("link-parameters")}} et la fonction `param()`.

```html
<div class="carres">
  <img
    class="origine"
    src="square.svg"
    alt="Un carré avec une bordure chartreuse et un remplissage vert foncé." />
  <img
    class="greyscale"
    src="square.svg"
    alt="Un carré avec une bordure gris ardoise et un remplissage gris clair." />
  <img
    class="high-contrast"
    src="square.svg"
    alt="Un carré avec une bordure fuchsia et un remplissage jaune." />
</div>
```

```css hidden
.carres {
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
img {
  height: 100%;
}
```

```css-nolint
.greyscale {
  link-parameters:
    param(--color1, slategrey),
    param(--color2, lightgrey);
  &:hover {
    link-parameters:
      param(--color1, lightgrey),
      param(--color2, slategrey);
  }
}
.high-contrast {
  link-parameters:
    param(--color1, fuchsia),
    param(--color2, yellow);
  &:hover {
    link-parameters:
      param(--color1, yellow),
      param(--color2, fuchsia);
  }
}
```

{{EmbedLiveSample("Utiliser la propriété `link-parameters`", "100%", 210)}}

### Passer `param()` dans le modificateur d'URL

Dans cet exemple, les attributs SVG sont mis à jour en passant la fonction `param()` dans le fragment d'URL de l'attribut [`src`](/fr/docs/Web/HTML/Reference/Elements/img#src) de l'élément HTML {{HTMLElement("img")}}.

```html-nolint
<img
  src="square.svg#param(--color1, slategrey)&param(--color2, lightgrey)"
  alt="Un carré avec une bordure gris ardoise et un remplissage gris clair."
/>
```

### Utiliser `param()` avec la propriété `background-image`

Dans cet exemple, les attributs SVG sont mis à jour en passant la fonction `param()` dans le type de données {{CSSxRef("url","url()")}} de la propriété CSS {{CSSxRef("background-image")}}.

```css-nolint
.foo {
  background-image: url(
    "square.svg"
    param(--color1, slategrey),
    param(--color2, lightgrey)
  );
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("link-parameters")}}
- La fonction {{CSSxRef("env()")}}
