---
title: text-anchor
slug: Web/CSS/Reference/Properties/text-anchor
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`text-anchor`** aligne une boîte contenant une chaîne de caractères textuelle où la zone de retour à la ligne est déterminée à partir de la propriété {{CSSxRef("inline-size")}}, et le texte est ensuite placé par rapport au point d'ancrage de l'élément, qui est défini à l'aide des attributs {{SVGAttr('x')}} et {{SVGAttr('y')}} (ou {{SVGAttr('dx')}} et {{SVGAttr('dy')}}). Si présent, la valeur de la propriété CSS remplace toute valeur de l'attribut {{SVGAttr("text-anchor")}} de l'élément.

Chaque fragment de texte individuel au sein d'un élément est aligné indépendamment&nbsp;; ainsi, un élément {{SVGElement("text")}} multi-lignes aura chaque ligne de texte alignée selon la valeur de `text-anchor`. Les valeurs de `text-anchor` n'ont d'effet que sur les éléments SVG {{SVGElement("text")}}, {{SVGElement("textPath")}} et {{SVGElement("tspan")}}. `text-anchor` ne s'applique pas au texte automatiquement retourné à la ligne&nbsp;; pour cela, voir {{CSSxRef('text-align')}}.

## Syntaxe

```css
text-anchor: start;
text-anchor: middle;
text-anchor: end;

/* Valeurs globales */
text-anchor: inherit;
text-anchor: initial;
text-anchor: revert;
text-anchor: revert-layer;
text-anchor: unset;
```

### Valeurs

- `start`
  - : Aligne le texte de manière à ce que le début de la chaîne de caractère textuelle soit aligné sur le point d'ancrage. Cet alignement est relatif au sens d'écriture du texte&nbsp;; ainsi, par exemple, dans une écriture de droite à gauche et de haut en bas, le texte sera placé à gauche du point d'ancrage. Si le sens d'écriture du texte est vertical, comme c'est le cas pour de nombreuses langues asiatiques, le bord supérieur du texte est aligné sur le point d'ancrage.

- `middle`
  - : Aligne le texte de manière à ce que le centre (milieu) de la boîte en ligne de la chaîne de caractères textuelle soit aligné avec le point d'ancrage.

- `end`
  - : Aligne le texte de manière à ce que la fin de la chaîne de caractères textuelle soit alignée sur le point d'ancrage. Cet alignement est relatif au sens d'écriture du texte&nbsp;; ainsi, par exemple, dans une écriture de droite à gauche et de haut en bas, le texte sera placé à droite du point d'ancrage. Si le sens d'écriture du texte est vertical, comme c'est le cas pour de nombreuses langues asiatiques, le bord inférieur du texte est aligné sur le point d'ancrage.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

Trois éléments SVG `<text>` sont placés à la même position `x`, mais avec des valeurs différentes pour `text-anchor`. Une ligne rouge en pointillés est incluse pour marquer la position de l'axe des x de tous les trois points d'ancrage.

```html
<svg
  viewBox="0 0 200 150"
  height="150"
  width="200"
  xmlns="http://www.w3.org/2000/svg">
  <line
    x1="100"
    y1="0"
    x2="100"
    y2="150"
    stroke="red"
    stroke-dasharray="10,5" />
  <text x="100" y="40">Anchored</text>
  <text x="100" y="80">Anchored</text>
  <text x="100" y="120">Anchored</text>
</svg>
```

```css hidden
text {
  font-size: 24px;
}
```

```css
text:nth-of-type(1) {
  text-anchor: start;
}
text:nth-of-type(2) {
  text-anchor: middle;
}
text:nth-of-type(3) {
  text-anchor: end;
}
```

{{EmbedLiveSample("Exemples", 200, 150)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef('dominant-baseline')}}
- L'élément SVG {{SVGElement("text")}}
- L'attribut SVG {{SVGAttr("text-anchor")}}
