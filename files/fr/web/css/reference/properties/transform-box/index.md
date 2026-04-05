---
title: transform-box
slug: Web/CSS/Reference/Properties/transform-box
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`transform-box`** définit la boîte de mise en page à laquelle les propriétés {{CSSxRef("transform")}}, les propriétés de transformation individuelles {{CSSxRef("translate")}}, {{CSSxRef("scale")}} et {{CSSxRef("rotate")}}, ainsi que la propriété {{CSSxRef("transform-origin")}} se rapportent.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
transform-box: content-box;
transform-box: border-box;
transform-box: fill-box;
transform-box: stroke-box;
transform-box: view-box;

/* Valeurs globales */
transform-box: inherit;
transform-box: initial;
transform-box: revert;
transform-box: revert-layer;
transform-box: unset;
```

La propriété `transform-box` est définie grâce à l'un des mots-clés suivants.

### Valeurs

- `content-box`
  - : La boîte de contenu est utilisée comme boîte de référence. La boîte de référence d'un {{HTMLElement("table")}} est la boîte de bordure de sa [boîte englobante de tableau](/fr/docs/Glossary/Table_Wrapper_Box), et non sa boîte de tableau.
- `border-box`
  - : La boîte de bordure est utilisée comme boîte de référence. La boîte de référence d'un {{HTMLElement("table")}} est la boîte de bordure de sa [boîte englobante de tableau](/fr/docs/Glossary/Table_Wrapper_Box), et non sa boîte de tableau.
- `fill-box`
  - : La boîte englobante de l'objet est utilisée comme boîte de référence. Pour les éléments avec une boîte de mise en page CSS associée, agit comme `content-box`.
- `stroke-box`
  - : La boîte englobante du trait est utilisée comme boîte de référence. Pour les éléments avec une boîte de mise en page CSS associée, agit comme `border-box`.
- `view-box`
  - : La zone d'affichage {{Glossary("SVG")}} la plus proche est utilisée comme boîte de référence. Si un attribut {{SVGAttr("viewBox")}} est défini pour l'élément créant la zone d'affichage SVG, la boîte de référence est positionnée à l'origine du système de coordonnées établi par l'attribut `viewBox`, et les dimensions de la boîte de référence sont définies par les valeurs de largeur et de hauteur de l'attribut `viewBox`. Pour les éléments avec une boîte de mise en page CSS associée, agit comme `border-box`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemple

### Portée de `transform-origin` SVG

Dans cet exemple, nous avons un SVG&nbsp;:

```html
<svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
  <g>
    <circle id="center" fill="red" r="1" transform="translate(25 25)" />
    <circle id="boxcenter" fill="blue" r=".5" transform="translate(15 15)" />
    <rect
      id="box"
      x="10"
      y="10"
      width="10"
      height="10"
      rx="1"
      ry="1"
      stroke="black"
      fill="none" />
  </g>
</svg>
```

Dans le CSS, nous avons une animation qui utilise une transformation pour faire tourner le rectangle à l'infini. `transform-box: fill-box` est utilisé pour que le `transform-origin` soit le centre de la boîte englobante, de sorte que le rectangle tourne sur place. Sans cela, l'origine de la transformation est le centre de la zone d'affichage SVG, ce qui donne un effet très différent.

```css
svg {
  width: 80vh;
  border: 1px solid #d9d9d9;
  position: absolute;
  margin: auto;
  inset: 0;
}

#box {
  transform-origin: 50% 50%; /* pointez autre chose que `0 0` pour voir l'effet */
  transform-box: fill-box;
  animation: rotate-box 3s linear infinite;
}

@keyframes rotate-box {
  to {
    transform: rotate(360deg);
  }
}
```

{{EmbedLiveSample("Portée de `transform-origin` SVG", "", 400)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les transformations CSS](/fr/docs/Web/CSS/Guides/Transforms/Using)
- Les propriétés {{CSSxRef("transform")}}, {{CSSxRef("transform-origin")}}
- Propriétés de transformation individuelles&nbsp;:
  - {{CSSxRef("translate")}}
  - {{CSSxRef("scale")}}
  - {{CSSxRef("rotate")}}
