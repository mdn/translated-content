---
title: "@supports"
slug: Web/CSS/Reference/At-rules/@supports
original_slug: Web/CSS/@supports
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

La [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) [CSS](/fr/docs/Web/CSS) **`@supports`** permet de définir des déclarations CSS qui dépendent du support de certaines fonctionnalités CSS par le navigateur.
L'utilisation de cette règle est couramment appelée «&nbsp;requête de fonctionnalité&nbsp;».
La règle doit être placée au niveau supérieur de votre code ou imbriquée dans une autre règle conditionnelle de groupe.

{{InteractiveExample("Démonstration CSS&nbsp;: @supports", "tabbed-standard")}}

```css interactive-example
.flex-container > * {
  padding: 0.3em;
  list-style-type: none;
  text-shadow: 0 0 2px red;
  float: left;
}

@supports (display: flex) {
  .flex-container > * {
    text-shadow: 0 0 2px blue;
    float: none;
  }

  .flex-container {
    display: flex;
  }
}
```

```html interactive-example
<ul class="flex-container">
  <li><a href="#">Accueil</a></li>
  <li><a href="#">À propos de moi</a></li>
  <li><a href="#">Contact</a></li>
</ul>
```

En JavaScript, `@supports` peut être accédée via le modèle d'objet CSS et l'interface {{DOMxRef("CSSSupportsRule")}}.

## Syntaxe

```css
@supports (<supports-condition>) {
  /* Si la condition est vraie, le CSS de ce bloc est utilisé. */
}

@supports (<supports-condition>) and (<supports-condition>) {
  /* Si les deux conditions sont vraies, le CSS de ce bloc est utilisé. */
}
```

La règle `@supports` consiste en un bloc d'instructions avec une _condition de support_.
Les conditions peuvent être combinées par conjonctions (`and`), disjonctions (`or`) et/ou négations (`not`).
La priorité des opérateurs peut être définie avec des parenthèses.

Les conditions de support peuvent utiliser soit la syntaxe de déclaration `<property>: <value>`, soit la syntaxe de fonction `<function()>`.
Les sections suivantes décrivent l'utilisation de chaque type de condition de support.

### Syntaxe déclarative

La syntaxe de déclaration vérifie si le navigateur prend en charge la déclaration `<property>: <value>` définie.
La déclaration doit être entourée de parenthèses.
L'exemple suivant retourne vrai si le navigateur prend en charge l'expression `transform-origin: 5% 5%`&nbsp;:

```css
@supports (transform-origin: 5% 5%) {
}
```

### Syntaxe fonctionnelle

Cette fonction évalue si le navigateur prend en charge la syntaxe de sélecteur définie.
L'exemple suivant retourne vrai et applique le style CSS si le navigateur prend en charge le [combinateur d'enfant](/fr/docs/Web/CSS/Reference/Selectors/Child_combinator)&nbsp;:

```css
@supports selector(h2 > p) {
}
```

#### `font-tech()`

Cette fonction vérifie si le navigateur prend en charge la technologie de police définie pour la mise en page et le rendu.
L'exemple suivant retourne vrai et applique le style CSS si le navigateur prend en charge la technologie de police `COLRv1`&nbsp;:

```css
@supports font-tech(color-COLRv1) {
}
```

Le tableau ci-dessous décrit les technologies de police (`<font-tech>`), y compris les technologies de police couleur (`<color-font-tech>`), les technologies de fonctionnalités de police (`<font-features-tech>`) et d'autres technologies disponibles pouvant être interrogées avec la fonction `font-tech()`&nbsp;:

| Technology                     | Supports                                                                                      |
| :----------------------------- | :-------------------------------------------------------------------------------------------- |
| **`<color-font-tech>`**        |                                                                                               |
| `color-colrv0`                 | Multi-colored glyphs via COLR version 0 table                                                 |
| `color-colrv1`                 | Multi-colored glyphs via COLR version 1 table                                                 |
| `color-svg`                    | SVG multi-colored tables                                                                      |
| `color-sbix`                   | Standard bitmap graphics tables                                                               |
| `color-cbdt`                   | Color bitmap data tables                                                                      |
| **`<font-features-tech>`**     |                                                                                               |
| `features-opentype`            | OpenType `GSUB` and `GPOS` tables                                                             |
| `features-aat`                 | TrueType `morx` and `kerx` tables                                                             |
| `features-graphite`            | Graphite features, namely `Silf`, `Glat`, `Gloc`, `Feat`, and `Sill` tables                   |
| **Other `<font-tech>` values** |                                                                                               |
| `incremental-patch`            | Incremental font loading using the patch subset method                                        |
| `incremental-range`            | Incremental font loading using the range request method                                       |
| `incremental-auto`             | Incremental font loading using method negotiation                                             |
| `variations`                   | Font variations in TrueType and OpenType fonts to control the font axis, weight, glyphs, etc. |
| `palettes`                     | Font palettes by means of `font-palette` to select one of many color palettes in the font     |

#### `font-format()`

Cette fonction vérifie si le navigateur prend en charge le format de police définit pour la mise en page et le rendu.
L'exemple suivant renvoie vrai et applique le style CSS si le navigateur prend en charge le format de police `opentype`&nbsp;:

```css
@supports font-format(opentype) {
}
```

Le tableau suivant décrit les formats disponibles (valeurs `<font-format>`) pouvant être interrogés avec cette fonction&nbsp;:

| Format              | Description                     | File extensions |
| :------------------ | :------------------------------ | :-------------- |
| `collection`        | OpenType Collection             | `.otc`, `.ttc`  |
| `embedded-opentype` | Embedded OpenType               | `.eot`          |
| `opentype`          | OpenType                        | `.ttf`, `.otf`  |
| `svg`               | SVG Font (deprecated)           | `.svg`, `.svgz` |
| `truetype`          | TrueType                        | `.ttf`          |
| `woff`              | WOFF 1.0 (Web Open Font Format) | `.woff`         |
| `woff2`             | WOFF 2.0 (Web Open Font Format) | `.woff2`        |

### L'opérateur `not`

L'opérateur `not` peut être utilisé avant une expression afin de créer une expression dont le résultat logique est la négation du résultat de l'expression originale. Ainsi, l'expression suivante&nbsp;:

```css
@supports not (transform-origin: 10em 10em 10em) {
}
```

renvoie VRAI si la propriété {{cssxref("transform-origin")}} du navigateur ne considère pas la valeur `10em 10em 10em` comme valide.

Comme pour les autres opérateurs, on peut appliquer l'opérateur `not` à une déclaration, quelle que soit sa complexité. Les exemples qui suivent sont donc des expressions valides&nbsp;:

```css
@supports not (not (transform-origin: 2px)) {
}
@supports (display: grid) and (not (display: inline-grid)) {
}
```

> [!NOTE]
> Au niveau le plus haut, il n'est pas nécessaire d'encadrer l'opérateur `not` entre parenthèses. Si on souhaite le combiner avec d'autres opérateurs comme `and` ou `or`, il faudra utiliser des parenthèses.

### L'opérateur `and`

L'opérateur `and` peut être utilisé pour former une nouvelle expression à partir de deux expressions. L'expression résultante sera la conjonction des deux expressions originelles. Autrement dit, le résultat de cette nouvelle expression sera VRAI si et seulement si les deux expressions de départ sont vraies et FAUX sinon. Dans l'exemple suivant, l'expression complète ne sera vérifiée que si les deux expressions sont vérifiées&nbsp;:

```css
@supports (display: table-cell) and (display: list-item) {
}
```

Plusieurs conjonctions peuvent être juxtaposées sans nécessiter plus de parenthèses. Les deux exemples suivants sont équivalents&nbsp;:

```css
@supports (display: table-cell) and (display: list-item) and (display: contents) {
}
@supports (display: table-cell) and
  ((display: list-item) and (display: contents)) {
}
```

### L'opérateur `or`

L'opérateur `or` peut être utilisé pour former une nouvelle expression à partir de deux expressions. L'expression résultante sera la disjonction des deux expressions originelles. Autrement dit, le résultat de cette nouvelle expression sera VRAI si au moins une des deux expressions est vraie. Dans l'exemple qui suit, l'expression complète est vérifiée si au moins une des deux (ce peuvent être les deux) expressions est vérifiée&nbsp;:

```css
@supports (transform-style: preserve) or (-moz-transform-style: preserve) {
}
```

Plusieurs disjonctions peuvent être juxtaposées sans nécessiter plus de parenthèses. Les deux exemples suivants sont équivalents&nbsp;:

```css
@supports (transform-style: preserve) or (-moz-transform-style: preserve) or
  (-webkit-transform-style: preserve) {
}

@supports (transform-style: preserve-3d) or
  (
    (-moz-transform-style: preserve-3d) or
      (-webkit-transform-style: preserve-3d)
  ) {
}
```

> [!NOTE]
> Lorsqu'on utilise à la fois l'opérateur `and` et l'opérateur `or`, il devient nécessaire d'utiliser des parenthèses pour que l'ordre d'application des opérateurs soit défini. Si on n'utilise pas de parenthèses, la condition sera considérée comme invalide et l'ensemble de la règle @ sera ignorée.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Tester le support d'une propriété CSS

```css
@supports (animation-name: test) {
  /* CSS appliqué lorsque les animations sont supportées sans préfixe */
  @keyframes {
    /* D'autres at-rules peuvent être imbriquées */
  }
}
```

### Tester le support d'une propriété CSS ou d'une version préfixée

```css
@supports (text-stroke: 10px) or (-webkit-text-stroke: 10px) {
  /* CSS appliqué lorsque text-stroke, préfixé ou non, est supporté */
}
```

### Tester la non prise en charge d'une propriété CSS spécifique

```css
@supports not ((text-align-last: justify) or (-moz-text-align-last: justify)) {
  /* CSS pour fournir une alternative de repli à text-align-last: justify */
}
```

### Tester le support d'un sélecteur

Les règles conditionnelles CSS permettent de tester le support d'un sélecteur comme {{cssxref(":has",":has()")}}.

```css
/* Cette règle ne sera pas appliquée dans les navigateurs qui ne supportent pas :has() */
ul:has(> li li) {
  /* Le CSS est appliqué lorsque la pseudo-classe :has(…) est supportée */
}

@supports not selector(:has(a, b)) {
  /* Repli pour le cas où :has() n'est pas supporté */
  ul > li,
  ol > li {
    /* Ci-dessus développé pour les navigateurs qui ne supportent pas :has(…) */
  }
}

/* Remarque&nbsp;: à ce jour, aucun navigateur ne supporte l'argument `of` de :nth-child(…) */
@supports selector(:nth-child(1n of a, b)) {
  /* Cette règle doit être dans le bloc @supports, sinon
     elle sera partiellement appliquée dans les navigateurs qui ne supportent pas
     l'argument `of` de :nth-child(…) */
  :is(:nth-child(1n of ul, ol) a, details > summary) {
    /* CSS appliqué lorsque le sélecteur :is(…) et
       l'argument `of` de :nth-child(…) sont tous deux supportés */
  }
}
```

### Tester le support d'une technologie de police

L'exemple suivant applique le style CSS si le navigateur prend en charge la technologie de police `COLRv1`&nbsp;:

```css
@import "https://fonts.googleapis.com/css2?family=Bungee+Spice";

@supports font-tech(color-COLRv1) {
  p {
    font-family: "Bungee Spice", fantasy;
  }
}
```

Il est aussi possible de tester le support d'une technologie de police en utilisant la fonction `tech` dans la règle `@font-face`.
Si le navigateur ne prend pas en charge la technologie de police, une police de repli (`Bungee-fallback.otf`) peut être utilisée à la place.

```css
@font-face {
  font-family: "Bungee Spice";
  src:
    url("https://fonts.googleapis.com/css2?family=Bungee+Spice")
      tech(color-COLRv1),
    url("Bungee-fallback.otf") format("opentype");
}
```

### Tester le support d'un format de police

L'exemple suivant applique le style CSS si le navigateur prend en charge le format de police `woff2`&nbsp;:

```css
@supports font-format(woff2) {
  p {
    font-family: "Open Sans", sans-serif;
    src: url("open-sans.woff2") format("woff2");
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les requêtes de fonctionnalité](/fr/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
- [Fonctions des règles @ CSS](/fr/docs/Web/CSS/CSS_syntax/At-rule_functions)
- {{DOMxRef("CSSSupportsRule")}}
- La méthode {{DOMxref("CSS.supports_static", "CSS.supports()")}}
