---
title: line-height
slug: Web/CSS/Reference/Properties/line-height
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`line-height`** définit la hauteur d'une boîte de ligne dans les [modes d'écriture](/fr/docs/Web/CSS/Reference/Properties/writing-mode#vertical-rl) horizontaux. Dans les modes d'écriture verticaux, elle définit la largeur d'une boîte de ligne. Elle est couramment utilisée pour définir la distance entre les lignes de texte. Sur les éléments de niveau bloc dans les modes d'écriture horizontaux, elle définit la hauteur préférée des boîtes de ligne dans l'élément, et sur les éléments en ligne non {{Glossary("Replaced_elements", "remplacés")}}, elle définit la hauteur utilisée pour calculer la hauteur de la boîte de ligne.

{{InteractiveExample("Démonstration CSS&nbsp;: line-height")}}

```css interactive-example-choice
line-height: normal;
```

```css interactive-example-choice
line-height: 2.5;
```

```css interactive-example-choice
line-height: 3em;
```

```css interactive-example-choice
line-height: 150%;
```

```css interactive-example-choice
line-height: 32px;
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element">
    Perdue dans les confins inexplorés de l'extrémité peu prisée du bras spiral
    occidental de la Galaxie se trouve une petite étoile jaune ignorée.
  </div>
</section>
```

```css interactive-example
#example-element {
  font-family: "Georgia", serif;
  max-width: 200px;
}
```

## Syntaxe

```css
/* Valeur avec un mot-clé */
line-height: normal;

/* S'il n'y a pas d'unité, cela représente un facteur multiplicateur de la taille de la police appliquée à l'élément */
line-height: 3.5;

/* Valeur de type <length> */
line-height: 3em;

/* Valeurs de type <percentage> */
line-height: 34%;

/* Valeurs globales */
line-height: inherit;
line-height: initial;
line-height: revert;
line-height: revert-layer;
line-height: unset;
```

La propriété `line-height` peut être définie par l'une des valeurs suivantes&nbsp;:

- un nombre (`<number>`)
- une longueur (`<length>`)
- un pourcentage (`<percentage>`)
- le mot-clé `normal`.

### Valeurs

- `normal`
  - : Le comportement dépend de l'agent utilisateur. Pour les navigateurs de bureau, l'agent utilisateur prend généralement une valeur environ égale à 1.2 selon la valeur de `font-family`.
- {{CSSxRef("&lt;number&gt;")}} (sans unité)
  - : La valeur utilisée est sans unité ({{CSSxRef("&lt;number&gt;")}}) et correspond à un facteur multiplicateur de la taille de fonte utilisée. La valeur calculée est la même que celle définie avec `<number>`. Dans la plupart des cas, c'est **la méthode qu'on privilégiera** pour définir `line-height` et éviter les effets de l'héritage.
- {{CSSxRef("&lt;length&gt;")}}
  - : La valeur de longueur ({{CSSxRef("&lt;length&gt;")}}) est utilisée pour calculer la hauteur de la boîte de la ligne. Les différentes unités qui peuvent être utilisées sont décrites avec la page {{CSSxRef("&lt;length&gt;")}}. Les valeurs exprimées en `em` peuvent produire des résultats inattendus.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : La valeur exprimée est relative à la taille de fonte utilisée pour l'élément. La valeur calculée sera le pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) indiqué, multiplié par la taille calculée de la police de l'élément. Voir la section Notes pour plus de précisions sur le comportement de ce type et des valeurs exprimées en `em`.

## Accessibilité

Il est nécessaire d'utiliser une valeur minimale de `1.5` pour la propriété `line-height` lorsqu'on l'applique sur le contenu des paragraphes principaux. Cela aidera les personnes ayant du mal à lire et les personnes dyslexiques. Utiliser une valeur sans unité permet de garantir une mise à l'échelle proportionnelle lorsqu'on zoome/dézoome.

[W3C Comprendre WCAG 2.2 <sup>(angl.)</sup>](https://w3c.github.io/wcag/guidelines/22/#visual-presentation)

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple

```css
/* Toutes les règles qui suivent
   fourniront un résultat équivalent */

/* nombre/sans unité */
div {
  line-height: 1.2;
  font-size: 10pt;
}

/* longueur */
div {
  line-height: 1.2em;
  font-size: 10pt;
}

/* pourcentage */
div {
  line-height: 120%;
  font-size: 10pt;
}

/* raccourci de font */
div {
  font:
    10pt/1.2 "Bitstream Charter",
    "Georgia",
    serif;
}
```

Il est souvent plus pratique de définir `line-height` en utilisant la propriété raccourcie {{CSSxRef("font")}} comme montré ci-dessus, mais cela nécessite également de définir la propriété `font-family`.

### Privilégier les valeurs sans unité pour `line-height`

Cet exemple montre pourquoi il vaut mieux utiliser des valeurs {{CSSxRef("&lt;number&gt;")}} plutôt que des valeurs {{CSSxRef("&lt;length&gt;")}}. Nous allons utiliser deux éléments HTML {{HTMLElement("div")}}. Le premier div, avec une bordure verte, utilise une valeur de `line-height` sans unité. Le second div, avec une bordure rouge, utilise une valeur de `line-height` définie en `em`.

#### HTML

```html
<div class="box green">
  <h1>
    Éviter des résultats inattendus en utilisant une valeur sans unité pour
    line-height
  </h1>
  Les valeurs de line-height en longueur et en pourcentage ont un comportement
  d'héritage peu fiable…
</div>

<div class="box red">
  <h1>
    Éviter des résultats inattendus en utilisant une valeur sans unité pour
    line-height
  </h1>
  Les valeurs de line-height en longueur et en pourcentage ont un comportement
  d'héritage peu fiable…
</div>

<!-- La première hauteur pour <h1> est calculée à partir de sa propre hauteur  (30px × 1.1) = 33px  -->
<!-- La hauteur du deuxième <h1> est basée sur la hauteur du div (15px × 1.1) = 16.5px ... -->
```

#### CSS

```css
.green {
  line-height: 1.1;
  border: solid limegreen;
}

.red {
  line-height: 1.1em;
  border: solid red;
}

h1 {
  font-size: 30px;
}

.box {
  width: 18em;
  display: inline-block;
  vertical-align: top;
  font-size: 15px;
}
```

#### Résultat

{{EmbedLiveSample("Privilégier les valeurs sans unité pour `line-height`", 600, 200)}}

### Espacer les lignes dans les modes d'écriture verticaux

La propriété `line-height` peut être utilisée pour ajuster l'espacement entre les lignes verticales dans les modes d'écriture verticaux.

```html hidden
<div class="haiku">
  古池や蛙飛び込む水の音<br />
  ふるいけやかわずとびこむみずのおと<br />
  富士の風や扇にのせて江戸土産<br />
  ふじのかぜやおうぎにのせてえどみやげ<br />
</div>

<div class="haiku wide">
  古池や蛙飛び込む水の音<br />
  ふるいけやかわずとびこむみずのおと<br />
  富士の風や扇にのせて江戸土産<br />
  ふじのかぜやおうぎにのせてえどみやげ<br />
</div>
```

```css
.haiku {
  border: 1px solid;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background-color: wheat;

  writing-mode: vertical-rl;
}

.wide {
  line-height: 2;
}
```

#### Résultat

{{EmbedLiveSample("Espacer les lignes dans les modes d'écriture verticaux", "100%", 650)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("font")}}, {{CSSxRef("font-size")}}
- L'entrée de glossaire {{Glossary("Leading", "Interligne")}}
