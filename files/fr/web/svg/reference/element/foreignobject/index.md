---
title: <foreignObject>
slug: Web/SVG/Reference/Element/foreignObject
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

L'élément [SVG](/fr/docs/Web/SVG) **`<foreignObject>`** inclut des éléments provenant d'un espace de noms XML différent. Dans le contexte d'un navigateur, il s'agit très probablement de (X)HTML.

## Contexte d'utilisation

{{SVGInfo}}

## Attributs

- {{SVGAttr("height")}}
  - : Cet attribut détermine la hauteur du rectangle.
    _Type de valeur_&nbsp;: [**\<length>**](/fr/docs/Web/SVG/Guides/Content_type#length)|[**\<percentage>**](/fr/docs/Web/SVG/Guides/Content_type#percentage)&nbsp;; _Valeur par défaut_&nbsp;: `auto`; _Animation_&nbsp;: **oui**
- {{SVGAttr("width")}}
  - : Cet attribut détermine la largeur du rectangle.
    _Type de valeur_&nbsp;: [**\<length>**](/fr/docs/Web/SVG/Guides/Content_type#length)|[**\<percentage>**](/fr/docs/Web/SVG/Guides/Content_type#percentage)&nbsp;; _Valeur par défaut_&nbsp;: `auto`; _Animation_&nbsp;: **oui**
- {{SVGAttr("x")}}
  - : Cet attribut détermine la coordonnée x du rectangle.
    _Type de valeur_&nbsp;: [**\<length>**](/fr/docs/Web/SVG/Guides/Content_type#length)|[**\<percentage>**](/fr/docs/Web/SVG/Guides/Content_type#percentage)&nbsp;; _Valeur par défaut_&nbsp;: `0`; _Animation_&nbsp;: **oui**
- {{SVGAttr("y")}}
  - : Cet attribut détermine la coordonnée y du rectangle.
    _Type de valeur_&nbsp;: [**\<length>**](/fr/docs/Web/SVG/Guides/Content_type#length)|[**\<percentage>**](/fr/docs/Web/SVG/Guides/Content_type#percentage)&nbsp;; _Valeur par défaut_&nbsp;: `0`; _Animation_&nbsp;: **oui**

> [!NOTE]
> À partir de SVG2 `x`, `y`, `width`, et `height` sont des _Propriétés Géometriques_, ce qui signifie que ces attributs peuvent également être utilisés comme des propriétés CSS pour cet élément.

## Interface DOM

Cet élément implémente l'interface {{DOMxRef("SVGForeignObjectElement")}}.

## Exemple

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <style>
    div {
      color: white;
      font: 18px serif;
      height: 100%;
      overflow: auto;
    }
  </style>

  <polygon points="5,5 195,10 185,185 10,195" />

  <!-- Cas d'utilisation courant: inclure du texte HTML dans le SVG -->
  <foreignObject x="20" y="20" width="160" height="160">
    <!--
      Dans le cas d'un SVG intégré dans du HTML, le namespace XHTML peut
      être omis, mais il est obligatoire dans le contexte d'un document SVG
    -->
    <div xmlns="http://www.w3.org/1999/xhtml">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis mollis
      mi ut ultricies. Nullam magna ipsum, porta vel dui convallis, rutrum
      imperdiet eros. Aliquam erat volutpat.
    </div>
  </foreignObject>
</svg>
```

{{EmbedLiveSample('Exemple', 150, '100%')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
