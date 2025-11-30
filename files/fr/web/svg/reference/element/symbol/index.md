---
title: <symbol>
slug: Web/SVG/Reference/Element/symbol
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

L'élément [SVG](/fr/docs/Web/SVG) **`<symbol>`** est utilisé pour définir des objets graphiques modèles pouvant être instanciés par un élément SVG {{SVGElement("use")}}.

L'utilisation d'éléments `<symbol>` pour des graphiques réutilisés plusieurs fois dans un même document ajoute de la structure et de la sémantique. Des documents riches en structure peuvent être rendus graphiquement, sous forme parlée ou en braille, et favorisent ainsi l'accessibilité.

> [!NOTE]
> Un élément `<symbol>` n'est pas destiné à être rendu lui-même. Seules les instances d'un élément `<symbol>` (c.-à-d. une référence à un `<symbol>` par un élément {{SVGElement("use")}}) sont rendues. Cela signifie que certains navigateurs peuvent refuser d'afficher directement un élément `<symbol>` même si la propriété CSS {{CSSxRef('display')}} indique le contraire.

## Contexte d'utilisation

{{SVGInfo}}

## Attributs

- {{SVGAttr("height")}}
  - : Cet attribut détermine la hauteur du symbole.
    _Type de valeur_&nbsp;: [**\<length>**](/fr/docs/Web/SVG/Guides/Content_type#length)|[**\<percentage>**](/fr/docs/Web/SVG/Guides/Content_type#percentage)&nbsp;; _Valeur par défaut_&nbsp;: `auto`; _Animation_&nbsp;: **oui**
- {{SVGAttr("preserveAspectRatio")}}
  - : Cet attribut définit comment le fragment svg doit être déformé s'il est inclus dans un conteneur ayant un ratio d'affichage (largeur:hauteur) différent.
    _Type de valeur_&nbsp;: (`none`| `xMinYMin`| `xMidYMin`| `xMaxYMin`| `xMinYMid`| `xMidYMid`| `xMaxYMid`| `xMinYMax`| `xMidYMax`| `xMaxYMax`) (`meet`|`slice`)?&nbsp;; _Valeur par défaut_&nbsp;: `xMidYMid meet`; _Animation_&nbsp;: **oui**
- {{SVGAttr("refX")}}
  - : Cet attribut détermine la coordonnée x du point de référence du symbole.
    _Type de valeur_&nbsp;: [**\<length>**](/fr/docs/Web/SVG/Guides/Content_type#length)|[**\<percentage>**](/fr/docs/Web/SVG/Guides/Content_type#percentage)|`left`|`center`|`right`&nbsp;; _Valeur par défaut_&nbsp;: `0`; _Animation_&nbsp;: **oui**
- {{SVGAttr("refY")}}
  - : Cet attribut détermine la coordonnée y du point de référence du symbole.
    _Type de valeur_&nbsp;: [**\<length>**](/fr/docs/Web/SVG/Guides/Content_type#length)|[**\<percentage>**](/fr/docs/Web/SVG/Guides/Content_type#percentage)|`top`|`center`|`bottom`&nbsp;; _Valeur par défaut_&nbsp;: `0`; _Animation_&nbsp;: **oui**
- {{SVGAttr("viewBox")}}
  - : Cet attribut définit les limites de la zone d'affichage du symbole.
    _Type de valeur_&nbsp;: **[\<list-of-numbers>](/fr/docs/Web/SVG/Guides/Content_type#list-of-ts)**&nbsp;; _Valeur par défaut_&nbsp;: aucune; _Animation_&nbsp;: **oui**
- {{SVGAttr("width")}}
  - : Cet attribut définit la largeur du symbole.
    _Type de valeur_&nbsp;: [**\<length>**](/fr/docs/Web/SVG/Guides/Content_type#length)|[**\<percentage>**](/fr/docs/Web/SVG/Guides/Content_type#percentage)&nbsp;; _Valeur par défaut_&nbsp;: `auto`; _Animation_&nbsp;: **oui**
- {{SVGAttr("x")}}
  - : Cet attribut détermine la coordonnée x du symbole.
    _Type de valeur_&nbsp;: [**\<length>**](/fr/docs/Web/SVG/Guides/Content_type#length)|[**\<percentage>**](/fr/docs/Web/SVG/Guides/Content_type#percentage)&nbsp;; _Valeur par défaut_&nbsp;: `0`; _Animation_&nbsp;: **oui**
- {{SVGAttr("y")}}
  - : Cet attribut détermine la coordonnée y du symbole.
    _Type de valeur_&nbsp;: [**\<length>**](/fr/docs/Web/SVG/Guides/Content_type#length)|[**\<percentage>**](/fr/docs/Web/SVG/Guides/Content_type#percentage)&nbsp;; _Valeur par défaut_&nbsp;: `0`; _Animation_&nbsp;: **oui**

## Interface DOM

Cet élément implémente l'interface {{DOMxRef("SVGSymbolElement")}}.

## Exemple

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg
  viewBox="0 0 80 20"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- Notre symbol a son propre système de coordonnées -->
  <symbol id="myDot" width="10" height="10" viewBox="0 0 2 2">
    <circle cx="1" cy="1" r="1" />
  </symbol>

  <!-- Une grille pour matérialiser le positionnement du symbole -->
  <path
    d="M0,10 h80 M10,0 v20 M25,0 v20 M40,0 v20 M55,0 v20 M70,0 v20"
    fill="none"
    stroke="pink" />

  <!-- Multiples instances de notre symbole -->
  <use xlink:href="#myDot" x="5" y="5" style="opacity:1.0" />
  <use xlink:href="#myDot" x="20" y="5" style="opacity:0.8" />
  <use xlink:href="#myDot" x="35" y="5" style="opacity:0.6" />
  <use xlink:href="#myDot" x="50" y="5" style="opacity:0.4" />
  <use xlink:href="#myDot" x="65" y="5" style="opacity:0.2" />
</svg>
```

{{EmbedLiveSample('Exemple', 150, '100%')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
