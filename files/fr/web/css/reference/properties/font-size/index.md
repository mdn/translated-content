---
title: font-size
slug: Web/CSS/Reference/Properties/font-size
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

La propriété [CSS](/fr/docs/Web/CSS) **`font-size`** définit la taille de la fonte. Modifier la taille de la fonte met également à jour les tailles des unités {{CSSxRef("&lt;length&gt;")}} relatives à la taille de la fonte, telles que `em`, `ex`, etc.

{{InteractiveExample("Démonstration CSS&nbsp;: font-size")}}

```css interactive-example-choice
font-size: 1.2rem;
```

```css interactive-example-choice
font-size: x-small;
```

```css interactive-example-choice
font-size: smaller;
```

```css interactive-example-choice
font-size: 12px;
```

```css interactive-example-choice
font-size: 80%;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    Londres. Le trimestre de la Saint-Michel vient de se terminer, et le Lord
    Chancelier siège dans le Lincoln's Inn Hall. Un temps de novembre
    implacable. Autant de boue dans les rues que si les eaux venaient tout juste
    de se retirer de la surface de la terre, et il ne serait pas étonnant de
    croiser un Mégalosaure, long d'une quarantaine de pieds, se dandinant comme
    un lézard éléphantesque sur Holborn Hill.
  </p>
</section>
```

## Syntaxe

```css
/* Valeurs de type <absolute-size> */
font-size: xx-small;
font-size: x-small;
font-size: small;
font-size: medium;
font-size: large;
font-size: x-large;
font-size: xx-large;
font-size: xxx-large;

/* Valeurs de type <relative-size> */
font-size: larger;
font-size: smaller;

/* Valeurs de type <length> */
font-size: 12px;
font-size: 0.8em;

/* Valeurs de type <percentage> */
font-size: 80%;

/* Valeurs mathématiques */
font-size: math;

/* Valeurs globales */
font-size: inherit;
font-size: initial;
font-size: revert;
font-size: revert-layer;
font-size: unset;
```

### Valeurs

- `xx-small`, `x-small`, `small`, `medium`, `large`, `x-large`, `xx-large`, `xxx-large`
  - : Mots-clés de [taille absolue](/fr/docs/Web/CSS/Reference/Values/absolute-size), basés sur la taille de fonte par défaut de l'utilisateur·ice (qui vaut `medium`).

- `larger, smaller`
  - : Mots-clés de [taille relative](/fr/docs/Web/CSS/Reference/Values/relative-size). La fonte sera plus grande ou plus petite par rapport à la taille de fonte de l'élément parent, selon un ratio proche de celui utilisé pour séparer les mots-clés de taille absolue ci-dessus.

- {{CSSxRef("&lt;length&gt;")}}
  - : Une valeur positive de type {{CSSxRef("&lt;length&gt;")}}. Pour la plupart des unités relatives à la fonte (telles que `em` et `ex`), la taille de la fonte est relative à la taille de fonte de l'élément parent.

    Pour les unités relatives à la fonte qui sont basées sur la racine (telles que `rem`), la taille de la fonte est relative à la taille de la fonte utilisée par l'élément (racine) {{HTMLElement("html")}}.

- {{CSSxRef("&lt;percentage&gt;")}}
  - : Une valeur positive de type {{CSSxRef("&lt;percentage&gt;")}}, relative à la taille de fonte de l'élément parent.
    > [!NOTE]
    > Pour maximiser l'accessibilité, il est généralement préférable d'utiliser des valeurs relatives à la taille de fonte par défaut de l'utilisateur·ice.

- `math`
  - : Les [règles d'échelle <sup>(angl.)</sup>](https://w3c.github.io/mathml-core/#the-math-script-level-property) sont appliquées lors de la détermination de la valeur calculée de la propriété `font-size` pour les éléments mathématiques, relativement à la propriété `font-size` du parent englobant.
    Voir la propriété {{CSSxRef("math-depth")}} pour plus d'informations.

## Description

Il existe plusieurs méthodes pour définir la taille de la fonte, notamment des mots-clés ou des valeurs numériques en pixels ou en em. Choisissez la méthode appropriée selon les besoins de la page web concernée.

### Mots-clés

Les mots-clés sont une bonne façon de déterminer la taille de la fonte sur le web. En définissant une taille de fonte par mot-clé sur l'élément HTML {{HTMLElement("body")}}, vous pouvez définir des tailles de fonte relatives partout ailleurs sur la page, ce qui vous permet d'agrandir ou de réduire facilement la fonte sur toute la page en conséquence.

### Pixels

Définir la taille de la fonte en pixels (`px`) est un bon choix lorsque vous avez besoin d'une précision en pixels. Une valeur en px est statique. Il s'agit d'une méthode indépendante du système d'exploitation et des navigateurs pour indiquer littéralement aux navigateurs d'afficher les lettres avec exactement le nombre de pixels de hauteur que vous avez défini. Les résultats peuvent légèrement varier selon les navigateurs, car ils peuvent utiliser des algorithmes différents pour obtenir un effet similaire.

Les réglages de taille de fonte peuvent aussi être utilisés en combinaison. Par exemple, si un élément parent est défini à `16px` et que son élément enfant est défini à `larger`, l'élément enfant s'affichera plus grand que l'élément parent sur la page.

> [!NOTE]
> Définir les tailles de fonte en `px` n'est _[pas accessible](https://fr.wikipedia.org/wiki/Accessibilit%C3%A9_du_web)_, car l'utilisateur·ice ne peut pas modifier la taille de la fonte dans certains navigateurs. Par exemple, les utilisateur·ice·s malvoyant·e·s peuvent souhaiter définir une taille de fonte bien plus grande que celle choisie par un·e concepteur·ice web. Évitez de les utiliser pour les tailles de fonte si vous souhaitez créer un design inclusif.

### Ems

Utiliser une valeur en `em` crée une taille de fonte dynamique ou calculée (historiquement, l'unité `em` provient de la largeur d'un «&nbsp;M&nbsp;» majuscule dans une police donnée). La valeur numérique agit comme un multiplicateur de la propriété `font-size` de l'élément sur lequel elle est utilisée. Considérez cet exemple&nbsp;:

```css
p {
  font-size: 2em;
}
```

Dans ce cas, la taille de la fonte des éléments `<p>` sera le double de la valeur calculée de `font-size` héritée par les éléments `<p>`. Par extension, une valeur de `font-size` de `1em` équivaut à la valeur calculée de `font-size` de l'élément sur lequel elle est utilisée.

Si aucune valeur de `font-size` n'a été définie sur un des ancêtres de `<p>`, alors `1em` sera égal à la valeur par défaut de `font-size` du navigateur, qui est généralement `16px`. Ainsi, par défaut, `1em` équivaut à `16px`, et `2em` à `32px`. Si vous définissez par exemple une valeur de `font-size` de `20px` sur l'élément `<body>`, alors `1em` sur les éléments `<p>` équivaudra à `20px`, et `2em` à `40px`.

Pour calculer l'équivalent en `em` pour une valeur en pixels souhaitée, vous pouvez utiliser cette formule&nbsp;:

```plain
em = taille visée en px / font-size du parent en pixels
```

Par exemple, supposons que la propriété `font-size` du `<body>` de la page soit définie à `16px`. Si la taille de fonte souhaitée est de `12px`, vous devrez indiquer `0.75em` (car 12/16 = 0.75). De même, si vous souhaitez une taille de fonte de `10px`, indiquez `0.625em` (10/16 = 0.625)&nbsp;; pour `22px`, indiquez `1.375em` (22/16).

L'unité `em` est très utile en CSS car elle s'adapte automatiquement à la taille de la fonte choisie par le·la lecteur·ice.

Un point important à garder à l'esprit&nbsp;: les valeurs en em se composent. Prenons le HTML et le CSS suivants&nbsp;:

```css
html {
  font-size: 100%;
}
span {
  font-size: 1.6em;
}
```

```html
<div>
  <span>Extérieur <span>intérieur</span> extérieur</span>
</div>
```

Le résultat est&nbsp;:

{{EmbedLiveSample("Ems", 400, 100)}}

En supposant que la valeur par défaut de `font-size` du navigateur soit 16px, les mots «&nbsp;Extérieur&nbsp;» seront affichés à 25.6px, mais le mot «&nbsp;intérieur&nbsp;» sera affiché à 40.96px. Cela s'explique par le fait que la propriété `font-size` du {{HTMLElement("span")}} interne vaut 1.6em, ce qui est relatif à la valeur de `font-size` de son parent, elle-même relative à la valeur de `font-size` de son parent. C'est ce qu'on appelle **la composition**.

### Rems

Les valeurs `rem` ont été inventées pour contourner le problème de composition. Les valeurs `rem` sont relatives à l'élément racine `html`, et non à l'élément parent. Autrement dit, cela vous permet d'indiquer une taille de fonte de façon relative sans être affecté par la taille du parent, éliminant ainsi la composition.

Le CSS ci-dessous est presque identique à l'exemple précédent. La seule différence est que l'unité a été changée en `rem`.

```css
html {
  font-size: 100%;
}
span {
  font-size: 1.6rem;
}
```

On applique ensuite ce CSS au même HTML, qui ressemble à ceci&nbsp;:

```html
<span>Extérieur <span>intérieur</span> extérieur</span>
```

{{EmbedLiveSample("Rems", 400, 100)}}

Dans cet exemple, les mots «&nbsp;outer inner outer&nbsp;» sont tous affichés à 25.6px (en supposant que la valeur de `font-size` du navigateur soit restée à la valeur par défaut de 16px).

### Ex

Comme l'unité `em`, la propriété `font-size` d'un élément définie avec l'unité `ex` est calculée ou dynamique. Elle se comporte exactement de la même manière, sauf que lors de l'utilisation de l'unité `ex` pour la propriété `font-size`, la taille de la fonte correspond à la hauteur d'x de la [première police disponible <sup>(angl.)</sup>](https://drafts.csswg.org/css-fonts/#first-available-font) utilisée sur la page. La valeur numérique multiplie la valeur héritée de `font-size` de l'élément et la taille de la fonte se compose relativement.

Voir le brouillon du W3C pour une description plus détaillée des [unités de longueur relatives à la fonte <sup>(angl.)</sup>](https://drafts.csswg.org/css-values-4/#font-relative-length) telles que `ex`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir les tailles de fonte

#### CSS

```css
.small {
  font-size: xx-small;
}
.larger {
  font-size: larger;
}
.point {
  font-size: 24pt;
}
.percent {
  font-size: 200%;
}
```

#### HTML

```html
<h1 class="small">Petit H1</h1>
<h1 class="larger">H1 plus grand</h1>
<h1 class="point">H1 de 24 points</h1>
<h1 class="percent">H1 à 200%</h1>
```

#### Résultat

{{EmbedLiveSample("Définir les tailles de fonte", 600, 250)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("font-size-adjust")}}
- La propriété {{CSSxRef("font-style")}}
- La propriété {{CSSxRef("font-weight")}}
- La propriété {{CSSxRef("math-depth")}}
- La propriété {{CSSxRef("math-style")}}
- L'attribut SVG {{SVGAttr("font-size")}}
- [Apprendre&nbsp;: Mise en forme fondamentale du texte et des polices](/fr/docs/Learn_web_development/Core/Text_styling/Fundamentals)
