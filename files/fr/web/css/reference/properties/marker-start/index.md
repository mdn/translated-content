---
title: marker-start
slug: Web/CSS/Reference/Properties/marker-start
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`marker-start`** pointe vers un marqueur qui sera dessiné sur le premier sommet du chemin de l'élément&nbsp;; c'est-à-dire à son sommet initial. Le marqueur doit avoir été défini à l'aide d'un élément SVG {{SVGElement("marker")}} et ne peut être référencé qu'avec une valeur {{CSSxRef("url_value", "&lt;url&gt;")}}. La valeur de la propriété CSS remplace toute valeur de l'attribut `marker-start` dans le SVG.

Pour de nombreuses formes supportant les marqueurs, les premiers et derniers sommets sont au même endroit&nbsp;: par exemple, le coin supérieur gauche d'un {{SVGElement('rect')}}. Dans ces formes, si les marqueurs de début et de fin sont tous deux définis, deux marqueurs seront dessinés à cet endroit, bien qu'ils ne pointent pas forcément dans la même direction.

> [!NOTE]
> La propriété `marker-start` n'aura d'effet que sur les éléments pouvant utiliser des marqueurs SVG. Voir {{SVGAttr("marker-start")}} pour la liste.

## Syntaxe

```css
marker-start: none;
marker-start: url("markers.svg#arrow");

/* Valeurs globales */
marker-start: inherit;
marker-start: initial;
marker-start: revert;
marker-start: revert-layer;
marker-start: unset;
```

### Valeurs

- `none`
  - : Cela signifie qu'aucun marqueur ne sera dessiné au premier sommet du chemin de l'élément.

- `<marker-ref>`
  - : Une {{CSSxRef("url_value", "&lt;url&gt;")}} qui fait référence à un marqueur défini par un élément SVG {{SVGElement("marker")}}, à dessiner au premier sommet du chemin de l'élément. Si la référence d'URL est invalide, aucun marqueur ne sera dessiné au premier sommet du chemin.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker
      id="triangle"
      viewBox="0 0 10 10"
      markerWidth="10"
      markerHeight="10"
      refX="1"
      refY="5"
      markerUnits="strokeWidth"
      orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="red" />
    </marker>
  </defs>
  <polyline
    id="test"
    fill="none"
    stroke="black"
    points="20,100 40,60 70,80 100,20" />
</svg>
```

```css
polyline#test {
  marker-start: url("#triangle");
}
```

{{EmbedLiveSample("Exemples", 200, 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("marker-mid")}}
- La propriété {{CSSxRef("marker-end")}}
- La propriété {{CSSxRef("marker")}}
- L'attribut SVG {{SVGAttr("marker-start")}}
