---
title: max-block-size
slug: Web/CSS/max-block-size
translation_of: Web/CSS/max-block-size
browser-compat: css.properties.max-block-size
---
{{CSSRef}}

La propriété **`max-block-size`** définit la taille maximale d'un élément selon l'axe perpendiculaire (l'axe de bloc) au sens d'écriture indiqué par [`writing-mode`](/fr/docs/Web/CSS/writing-mode). Elle correspond à la propriété [`max-width`](/fr/docs/Web/CSS/max-width) ou [`max-height`](/fr/docs/Web/CSS/max-height) selon la valeur utilisée pour [`writing-mode`](/fr/docs/Web/CSS/writing-mode). Si le mode d'écriture est orienté verticalement, `max-block-size` fait référence à la hauteur maximale de l'élément, sinon elle fait référence à la largeur maximale de l'élément.

La propriété [`max-inline-size`](/fr/docs/Web/CSS/max-inline-size) peut être utilisée pour l'effet analogue selon l'axe en ligne (c'est-à-dire l'axe qui suit le sens d'écriture).

Cette propriété permet, contrairement à `max-height` et `max-width`, de définir une taille maximale qui tient compte de la direction d'écriture utilisée pour le texte du contenu.

Cette propriété est une propriété _logique_ qui doit remplacer les propriétés _physiques_ correspondantes (`max-height` ou `max-width`) si on souhaite que la disposition tienne compte du mode d'écriture de la page (que celui-ci soit horizontal ou vertical). Vous pouvez consulter [ces exemples](/fr/docs/Web/CSS/writing-mode#exemple) pour en savoir plus.

{{EmbedInteractiveExample("pages/css/max-block-size.html")}}

## Syntaxe

```css
/* Valeurs de longueur */
/* Type <length>       */
max-block-size: 300px;
max-block-size: 25em;

/* Valeurs proportionnelles */
/* Type <percentage> */
max-block-size: 75%;

/* Valeurs avec un mot-clé */
max-block-size: none;
max-block-size: max-content;
max-block-size: min-content;
max-block-size: fit-content(20em);

/* Valeurs globales */
max-block-size: inherit;
max-block-size: initial;
max-block-size: revert;
max-block-size: revert-layer;
max-block-size: unset;
```

### Valeurs

La propriété `max-block-size` peut prendre les mêmes valeurs que les propriétés [`max-width`](/fr/docs/Web/CSS/max-width) ou [`max-height`](/fr/docs/Web/CSS/max-height).

- [`<length>`](/fr/docs/Web/CSS/length)
  - : Définit la valeur de `max-block-size` avec une longueur absolue.
- [`<percentage>`](/fr/docs/Web/CSS/percentage)
  - : Définit la valeur `max-block-size` comme un pourcentage de la taille du bloc englobant sur l'axe de bloc.
- `none`
  - : Aucune limite n'est imposée à la taille de la boîte.
- `max-content`
  - : La valeur intrinsèque préférée de `max-block-size`.
- `min-content`
  - : La valeur intrinsèque minimale de `max-block-size`.
- `fit-content(`[`<length-percentage>`](/fr/docs/Web/CSS/length-percentage)`)`
  - : Utilise la formule `fit-content` où l'espace disponible est remplacé par l'argument (correspond à `min(max-content, max(min-content, argument))`).

### Relation avec les propriétés physiques

La valeur de `writing-mode` détermine la propriété physique correspondant à `max-block-size`&nbsp;:

| Valeur pour `writing-mode`                                                                                                                                                                            | Propriété physique équivalente à `max-block-size` |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| `horizontal-tb`, `lr` {{deprecated_inline}}, `lr-tb` {{deprecated_inline}}, `rl` {{deprecated_inline}}, `rb` {{deprecated_inline}}, `rb-rl` {{deprecated_inline}}  | [`max-height`](/fr/docs/Web/CSS/max-height)                  |
| `vertical-rl`, `vertical-lr`, `sideways-rl` {{experimental_inline}}, `sideways-lr` {{experimental_inline}}, `tb` {{deprecated_inline}}, `tb-rl` {{deprecated_inline}} | [`max-width`](/fr/docs/Web/CSS/max-width)                  |

> **Note :** Les valeurs `sideways-lr` et `sideways-rl` pour `writing-mode` ont été retirées du module de spécification CSS sur les modes d'écriture de niveau 3 en fin de processus et pourraient être réintroduites dans la spécification de niveau 4.

> **Note :** Les modes d'écriture `lr`, `lr-tb`, `rl`, `rb` et `rb-tl` ne sont plus autorisés pour les contextes [HTML](/fr/docs/Glossary/HTML) et peuvent uniquement être utilisés dans des contextes [SVG](/fr/docs/Glossary/SVG) 1.x.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Définir `max-block-size` pour des textes horizontaux et verticaux

Dans cet exemple, on utilise le même texte (les phrases d'introduction de Moby Dick) en utilisant les modes d'écriture `horizontal-tb` et `vertical-rl`.

Excepté cette différence sur le mode d'écriture, les boîtes sont identiques, y compris pour les valeurs utilisées pour `max-block-size`.

#### HTML

Le fragment HTML se compose de deux blocs [`<div>`](/fr/docs/Web/HTML/Element/div) dont le mode d'écriture sera défini avec la propriété [`writing-mode`](/fr/docs/Web/CSS/writing-mode) selon que la classe HTML utilisée vaut `horizontal` ou `vertical`. Les deux boîtes utilisent la classe `standard-box`, qui fournit la coloration, le remplissage et les valeurs pour `max-block-size`.

```html
<p>Writing mode <code>horizontal-tb</code> (the default):</p>
<div class="standard-box horizontal">
  Call me Ishmael. Some years ago—never mind how long precisely—having little or
  no money in my purse, and nothing particular to interest me on shore, I
  thought I would sail about a little and see the watery part of the world. It
  is a way I have of driving off the spleen and regulating the circulation.
</div>

<p>Writing mode <code>vertical-rl</code>:</p>
<div class="standard-box vertical">
  Call me Ishmael. Some years ago—never mind how long precisely—having little or
  no money in my purse, and nothing particular to interest me on shore, I
  thought I would sail about a little and see the watery part of the world. It
  is a way I have of driving off the spleen and regulating the circulation.
</div>
```

#### CSS

Le CSS définit trois classes. D'abord `standard-box`, qui est appliquée aux deux boîtes. Celle-ci fournit la mise en forme de base avec les tailles de bloc minimales et maximales, la taille de la police et ainsi de suite.

On a ensuite les classes `horizontal` et `vertical`, qui ajoutent la propriété [`writing-mode`](/fr/docs/Web/CSS/writing-mode) à la boîte avec la valeur `horizontal-tb` ou `vertical-rl` selon la classe utilisée.

```css
.standard-box {
  padding: 4px;
  background-color: #abcdef;
  color: #000;
  font: 16px "Open Sans", "Helvetica", "Arial", sans-serif;
  max-block-size: 160px;
  min-block-size: 100px;
}

.horizontal {
  writing-mode: horizontal-tb;
}

.vertical {
  writing-mode: vertical-rl;
}
```

#### Résultat

{{EmbedLiveSample("", 600, 850)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés physiques correspondantes&nbsp;:
  - [`max-width`](/fr/docs/Web/CSS/max-width)
  - [`max-height`](/fr/docs/Web/CSS/max-height)
- La propriété logique correspondant à l'axe en ligne&nbsp;: [`max-inline-size`](/fr/docs/Web/CSS/max-inline-size)
- [`writing-mode`](/fr/docs/Web/CSS/writing-mode)
