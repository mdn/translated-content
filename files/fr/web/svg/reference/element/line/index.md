---
title: <line>
slug: Web/SVG/Reference/Element/line
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

L'élément [SVG](/fr/docs/Web/SVG) **`<line>`** est une forme de base SVG utilisée pour tracer une ligne reliant deux points.

## Contexte d'utilisation

{{SVGInfo}}

## Attributs

- {{SVGAttr('x1')}}
  - : Définit la coordonnée x du point de départ de la ligne.
    _Type de valeur_&nbsp;: [**\<length>**](/fr/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/fr/docs/Web/SVG/Guides/Content_type#percentage) | [**\<number>**](/fr/docs/Web/SVG/Guides/Content_type#number)&nbsp;; _Valeur par défaut_&nbsp;: `0`&nbsp;; _Animation_&nbsp;: **oui**
- {{SVGAttr('x2')}}
  - : Définit la coordonnée x du point d'arrivée de la ligne.
    _Type de valeur_&nbsp;: [**\<length>**](/fr/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/fr/docs/Web/SVG/Guides/Content_type#percentage) | [**\<number>**](/fr/docs/Web/SVG/Guides/Content_type#number)&nbsp;; _Valeur par défaut_&nbsp;: `0`&nbsp;; _Animation_&nbsp;: **oui**
- {{SVGAttr('y1')}}
  - : Définit la coordonnée y du point de départ de la ligne.
    _Type de valeur_&nbsp;: [**\<length>**](/fr/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/fr/docs/Web/SVG/Guides/Content_type#percentage) | [**\<number>**](/fr/docs/Web/SVG/Guides/Content_type#number)&nbsp;; _Valeur par défaut_&nbsp;: `0`&nbsp;; _Animation_&nbsp;: **oui**
- {{SVGAttr('y2')}}
  - : Définit la coordonnée y du point d'arrivée de la ligne.
    _Type de valeur_&nbsp;: [**\<length>**](/fr/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/fr/docs/Web/SVG/Guides/Content_type#percentage) | [**\<number>**](/fr/docs/Web/SVG/Guides/Content_type#number)&nbsp;; _Valeur par défaut_&nbsp;: `0`&nbsp;; _Animation_&nbsp;: **oui**
- {{SVGAttr("pathLength")}}
  - : Définit la longueur totale du tracé en unités utilisateur.
    _Type de valeur_&nbsp;: [**\<number>**](/fr/docs/Web/SVG/Guides/Content_type#number)&nbsp;; _Valeur par défaut_&nbsp;: _aucune_ ; _Animation_&nbsp;: **oui**

## Interface DOM

Cet élément implémente l'interface {{DOMxRef("SVGLineElement")}}.

## Exemple

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="80" x2="100" y2="20" stroke="black" />

  <!-- Si on n'indique pas stroke, la ligne de couleur
       ne sera pas visible -->
</svg>
```

{{EmbedLiveSample('Exemple', 100, 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Autres formes de base SVG&nbsp;: {{SVGElement('circle')}}, {{SVGElement('ellipse')}}, {{SVGElement('polygon')}}, **{{SVGElement('polyline')}}**, {{SVGElement('rect')}}
