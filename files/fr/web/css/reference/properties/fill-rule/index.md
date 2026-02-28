---
title: fill-rule
slug: Web/CSS/Reference/Properties/fill-rule
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`fill-rule`** définit la règle utilisée pour déterminer quelles parties de la zone de dessin d'une forme SVG sont incluses à l'intérieur d'une forme à remplir. Si elle est présente, elle remplace l'attribut SVG {{SVGAttr("fill-rule")}} de l'élément.

La propriété `fill-rule` précise quelles zones d'une forme doivent être considérées comme «&nbsp;intérieures&nbsp;». Elle propose deux valeurs que vous pouvez définir pour indiquer au navigateur comment déterminer l'intérieur d'une forme. Pour les formes qui n'ont pas de chemins qui se croisent, comme un cercle, les limites de ce qui est à l'intérieur d'une forme à remplir sont intuitivement claires. Avec des formes complexes comprenant des chemins qui se croisent (comme un diagramme de Venn) ou des chemins qui enclosent d'autres chemins (comme un anneau), l'interprétation des sections de la forme qui sont «&nbsp;intérieures&nbsp;» et doivent être remplies par la propriété {{CSSxRef("fill")}} peut ne pas être évidente.

> [!NOTE]
> La propriété `fill-rule` ne s'applique qu'aux éléments {{SVGElement("path")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}}, {{SVGElement("text")}}, {{SVGElement("textPath")}} et {{SVGElement("tspan")}} imbriqués dans un {{SVGElement("svg")}}. Elle ne s'applique pas aux autres éléments SVG, HTML ou pseudo-éléments.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
fill-rule: evenodd;
fill-rule: nonzero;

/* Valeurs globales */
fill-rule: inherit;
fill-rule: initial;
fill-rule: revert;
fill-rule: revert-layer;
fill-rule: unset;
```

### Valeurs

- `nonzero`
  - : Pour chaque point de la forme, un rayon est tracé dans une direction aléatoire au-delà des bords extérieurs de la forme. Chaque rayon est examiné pour déterminer les endroits où il croise la forme. En partant d'un compteur à zéro, ajoutez un à chaque fois qu'un segment de chemin croise le rayon de gauche à droite et soustrayez un à chaque fois qu'un segment de chemin croise le rayon de droite à gauche. Après avoir compté les croisements, si le résultat est zéro, le point est à l'extérieur du chemin. Sinon, il est à l'intérieur.

- `evenodd`
  - : Pour chaque point de la boîte de la règle de remplissage, un rayon est tracé dans une direction aléatoire. Le nombre de segments de chemin de la forme donnée que le rayon croise est compté. Si ce nombre est impair, le point est à l'intérieur&nbsp;; s'il est pair, le point est à l'extérieur. Zéro est considéré comme pair.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir les règles de remplissage pour les éléments SVG

Cet exemple montre comment une propriété `fill-rule` est déclarée, l'effet de la propriété, et comment la propriété CSS `fill-rule` prend le pas sur l'attribut `fill-rule`.

#### HTML

Nous définissons un SVG avec deux formes complexes définies à l'aide des éléments SVG {{SVGElement("polygon")}} et {{SVGElement("path")}}. Le polygone a l'attribut SVG `fill-rule` défini sur `evenodd` et le chemin en forme d'étoile est défini sur `nonzero`, qui est la valeur par défaut. Pour rendre les lignes visibles, nous définissons le contour sur `red` à l'aide de l'attribut SVG {{SVGAttr("stroke")}} (nous aurions pu utiliser la propriété {{CSSxRef("stroke")}}).

```html hidden
<p>SVG original</p>
```

```html
<svg viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg">
  <polygon
    points="180,10 150,100 220,40 140,40 210,100"
    stroke="red"
    fill-rule="evenodd" />
  <path
    d="M 10,5 l 90,0 -80,80 0,-60 80,80 -90,0 z"
    stroke="red"
    fill-rule="nonzero" />
</svg>
```

```html hidden
<p><code>fill-rule: nonzero;</code></p>
<svg viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg">
  <polygon
    points="180,10 150,100 220,40 140,40 210,100"
    stroke="red"
    fill-rule="evenodd" />
  <path
    d="M 10,5 l 90,0 -80,80 0,-60 80,80 -90,0 z"
    stroke="red"
    fill-rule="nonzero" />
</svg>
<p><code>fill-rule: evenodd;</code></p>
<svg viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg">
  <polygon
    points="180,10 150,100 220,40 140,40 210,100"
    stroke="red"
    fill-rule="evenodd" />
  <path
    d="M 10,5 l 90,0 -80,80 0,-60 80,80 -90,0 z"
    stroke="red"
    fill-rule="nonzero" />
</svg>
```

Le SVG ci-dessus est répété trois fois&nbsp;; nous n'avons montré qu'une seule copie pour plus de concision.

#### CSS

Les formes imbriquées dans le premier SVG n'ont pas de CSS appliqué. Nous définissons les formes à l'intérieur du second SVG pour utiliser la valeur `nonzero`. Le troisième SVG a toutes ses formes imbriquées définies sur `evenodd`.

```css hidden
svg {
  border: 1px solid;
  height: calc(33vh - 2.5em);
  margin-bottom: 10px;
}
p {
  margin: 0;
}
```

```css
svg:nth-of-type(2) > * {
  fill-rule: nonzero;
}
svg:nth-of-type(3) > * {
  fill-rule: evenodd;
}
```

#### Résultat

{{EmbedLiveSample("Définir les règles de remplissage pour les éléments SVG", "300", "540")}}

Avec la valeur `nonzero` pour `fill-rule`, «&nbsp;l'intérieur&nbsp;» de la forme est toute la forme. La valeur `evenodd` définit certains espaces comme vides. La première image affiche le `fill-rule` inclus comme attribut. Déclarer le `fill-rule` dans le CSS remplace les valeurs d'attribut dans les deuxième et troisième images.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut SVG {{SVGAttr("fill")}}
- Propriétés de présentation&nbsp;: `fill-rule`, {{CSSxRef("clip-rule")}}, {{CSSxRef("color-interpolation-filters")}}, {{CSSxRef("fill-opacity")}}, {{CSSxRef("fill")}}, {{CSSxRef("marker-end")}}, {{CSSxRef("marker-mid")}}, {{CSSxRef("marker-start")}}, {{CSSxRef("shape-rendering")}}, {{CSSxRef("stop-color")}}, {{CSSxRef("stop-opacity")}}, {{CSSxRef("stroke")}}, {{CSSxRef("stroke-dasharray")}}, {{CSSxRef("stroke-dashoffset")}}, {{CSSxRef("stroke-linecap")}}, {{CSSxRef("stroke-linejoin")}}, {{CSSxRef("stroke-miterlimit")}}, {{CSSxRef("stroke-opacity")}}, {{CSSxRef("stroke-width")}}, {{CSSxRef("text-anchor")}} et {{CSSxRef("vector-effect")}}
- La propriété {{CSSxRef("opacity")}}
- La propriété {{CSSxRef("background-color")}}
- Le type de donnée {{CSSxRef("color_value", "&lt;color&gt;")}}
- Le type de donnée {{CSSxRef("&lt;basic-shape&gt;")}}
