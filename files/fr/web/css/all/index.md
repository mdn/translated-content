---
title: all
slug: Web/CSS/all
l10n:
  sourceCommit: 04894c8e870437317c72c597cfac183283421305
---

{{CSSRef}}

La [propriété raccourcie](/fr/docs/Web/CSS/CSS_cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`all`** permet de réinitialiser toutes les propriétés d'un élément, à l'exception de [`unicode-bidi`](/fr/docs/Web/CSS/unicode-bidi), [`direction`](/fr/docs/Web/CSS/direction), et des [propriétés personnalisées](/fr/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), avec leurs valeurs initiales, héritées ou qui proviennent d'une autre couche de la cascade voire d'une autre feuille de style.

{{InteractiveExample("CSS Demo: all")}}

```css interactive-example-choice
/*no all property*/
```

```css interactive-example-choice
all: initial;
```

```css interactive-example-choice
all: inherit;
```

```css interactive-example-choice
all: unset;
```

```css interactive-example-choice
all: revert;
```

```html interactive-example
<section id="default-example">
  <div class="example-container-bg">
    <div class="example-container">
      <p id="example-element">
        This paragraph has a font size of 1.5rem and a color of gold. It also
        has 1rem of vertical margin set by the user-agent. The parent of the
        paragraph is a &lt;div&gt; with a dashed blue border.
      </p>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  color: gold;
  padding: 10px;
  font-size: 1.5rem;
  text-align: left;
  width: 100%;
}

.example-container {
  border: 2px dashed #2d5ae1;
}

.example-container-bg {
  background-color: #77767b;
  padding: 20px;
}
```

## Syntaxe

```css
/* Valeurs globales */
all: initial;
all: inherit;
all: unset;
all: revert;
all: revert-layer;
```

La propriété `all` est définie avec un des mots-clés globaux de CSS. On notera que la valeur de cette propriété n'a pas d'impact sur les propriétés [`unicode-bidi`](/fr/docs/Web/CSS/unicode-bidi), [`direction`](/fr/docs/Web/CSS/direction), et les [propriétés personnalisées](/fr/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties).

### Valeurs

- [`initial`](/fr/docs/Web/CSS/initial)
  - : Ce mot-clé indique que toutes les propriétés qui sont définies pour l'élément auquel s'applique `all` devront prendre [leurs valeurs initiales](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_f91302baa0061849ce1a7eea54ba57f650b9256fcf644b7a35a0645d353b08fc).
- [`inherit`](/fr/docs/Web/CSS/inherit)
  - : Ce mot-clé indique que toutes les propriétés qui sont définies pour l'élément auquel s'applique `all` devront prendre [les valeurs héritées](/fr/docs/Web/CSS/CSS_cascade/Inheritance).
- [`unset`](/fr/docs/Web/CSS/unset)
  - : Ce mot-clé indique que toutes les propriétés qui s'appliquent à l'élément prendront leur valeur héritée si elles héritent par défaut, ou leur valeur initiale sinon.
- [`revert`](/fr/docs/Web/CSS/revert)
  - : Le comportement obtenu sera différent selon l'origine de la règle&nbsp;:
    - Si la règle provient [du site](/fr/docs/Web/CSS/CSS_cascade/Cascade#feuilles_de_style_du_site), `revert` remonte la [cascade](/fr/docs/Web/CSS/CSS_cascade/Cascade) au niveau de la feuille de style de l'utilisatrice ou de l'utilisateur afin que [les valeurs spécifiées](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_4e3ad4bb8e93bd9e2a381021d1b939f81717e13df739659207d88907070d77aa) soient calculées comme si aucune règle du site n'avait été spécifiée pour l'élément. En ce qui concerne `revert`, cette origine (le site) inclut également les origines de surcharge (<i lang="en">override</i>) et d'animation.
    - Si la règle provient [d'une feuille de style de l'utilisatrice ou de l'utilisateur](/fr/docs/Web/CSS/CSS_cascade/Cascade#feuilles_de_style_de_lutilisatrice_ou_lutilisateur), `revert` remonte [la cascade](/fr/docs/Web/CSS/CSS_cascade/Cascade) au niveau de l'agent utilisateur afin que [les valeurs spécifiées](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_4e3ad4bb8e93bd9e2a381021d1b939f81717e13df739659207d88907070d77aa) soient calculées comme si aucune règle utilisateur ou du site n'avait été spécifiée pour l'élément.
    - Si la règle provient [de l'agent utilisateur](/fr/docs/Web/CSS/CSS_cascade/Cascade#feuilles_de_style_de_lagent_utilisateur), `revert` agira comme `unset`.
- [`revert-layer`](/fr/docs/Web/CSS/revert-layer)
  - : Indique que toutes les propriétés de l'élément devraient revenir à [une couche de cascade](/fr/docs/Web/CSS/@layer) précédente existante. S'il n'existe pas de telle couche, les propriétés de l'élément reviendront à la règle correspondante existante de la couche courante ou d'une [origine](/fr/docs/Glossary/Style_origin) précédente.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

Dans cet exemple, le fichier CSS contient une mise en forme pour l'élément [`<blockquote>`](/fr/docs/Web/HTML/Reference/Elements/blockquote) et pour l'élément parent [`<body>`](/fr/docs/Web/HTML/Reference/Elements/body). Les différents résultats présentés dans la section éponyme illustrent les effets des différentes valeurs de la propriété `all` lorsqu'elle est appliquée dans la règle `blockquote`.

### HTML

```html
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

### CSS

```css
body {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
  margin: 0;
  padding: 0;
}

blockquote {
  background-color: skyblue;
  color: red;
}
```

### Résultat

#### Pas de propriété `all`

```html hidden
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

```css hidden
body {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
}
blockquote {
  background-color: skyblue;
  color: red;
}
```

{{EmbedLiveSample("", "200", "125")}}

Dans ce scénario, aucune propriété `all` n'est appliquée dans la règle `blockquote`. L'élément [`<blockquote>`](/fr/docs/Web/HTML/Reference/Elements/blockquote) utilise la mise en forme par défaut du navigateur, qui lui fournit une marge, ainsi que des couleurs d'arrière-plan et de texte indiquées par la feuille de style. Il se comporte comme un [_élément de bloc_](/fr/docs/Glossary/Block-level_content)&nbsp;: le texte qui suit l'élément est placé en dessous.

#### `all: initial`

```html hidden
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

```css hidden
body {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
}
blockquote {
  background-color: skyblue;
  color: red;
  all: initial;
}
```

{{EmbedLiveSample("", "200", "125")}}

Lorsque la propriété `all` vaut `initial` au sein de la règle `blockquote`, l'élément [`<blockquote>`](/fr/docs/Web/HTML/Reference/Elements/blockquote) n'utilise plus la mise en forme par défaut du navigateur&nbsp;: il s'agit maintenant d'un [_élément en ligne_](/fr/docs/Glossary/Inline-level_content) (la valeur initiale de [`display`](/fr/docs/Web/CSS/display#définition_formelle)), [`background-color`](/fr/docs/Web/CSS/background-color#définition_formelle) vaut `transparent` (sa valeur initiale), [`font-size`](/fr/docs/Web/CSS/font-size#définition_formelle) vaut `medium`, et [`color`](/fr/docs/Web/CSS/color#définition_formelle) vaut `black` (là encore, sa valeur initiale).

#### `all: inherit`

```html hidden
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

```css hidden
body {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
}
blockquote {
  background-color: skyblue;
  color: red;
  all: inherit;
}
```

{{EmbedLiveSample("", "200", "125")}}

Dans ce cas, l'élément [`<blockquote>`](/fr/docs/Web/HTML/Reference/Elements/blockquote) n'utilise pas la mise en forme par défaut du navigateur mais hérite des valeurs de l'élément parent, [`<body>`](/fr/docs/Web/HTML/Reference/Elements/body). L'élément `<blockquote>` est désormais un [_élément de bloc_](/fr/docs/Glossary/Block-level_content) (il hérite de cette caractéristique via la valeur de [`display`](/fr/docs/Web/CSS/display) pour `<body>`), [`background-color`](/fr/docs/Web/CSS/background-color) vaut `#F0F0F0` (héritée), [`font-size`](/fr/docs/Web/CSS/font-size) vaut `small` (héritée), et [`color`](/fr/docs/Web/CSS/color) vaut `blue` (héritée).

#### `all: unset`

```html hidden
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

```css hidden
body {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
}
blockquote {
  background-color: skyblue;
  color: red;
  all: unset;
}
```

{{EmbedLiveSample("", "200", "125")}}

Lorsque la valeur `unset` est appliquée à la propriété `all` dans la règle `blockquote`, l'élément [`<blockquote>`](/fr/docs/Web/HTML/Reference/Elements/blockquote) n'utilise pas la mise en forme par défaut du navigateur. Comme [`background-color`](/fr/docs/Web/CSS/background-color#définition_formelle) n'est pas une propriété héritée, contrairement à [`font-size`](/fr/docs/Web/CSS/font-size#définition_formelle) et [`color`](/fr/docs/Web/CSS/color#définition_formelle) qui sont héritées, l'élément `<blockquote>` est un [élément en ligne](/fr/docs/Glossary/Inline-level_content) (la valeur initiale de [`display`](/fr/docs/Web/CSS/display#définition_formelle)), [`background-color`](/fr/docs/Web/CSS/background-color) vaut `transparent` (sa valeur initiale), mais [`font-size`](/fr/docs/Web/CSS/font-size) vaut toujours `small` (sa valeur héritée), et [`color`](/fr/docs/Web/CSS/color) vaut `blue` (sa valeur héritée).

#### `all: revert`

```html hidden
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

```css hidden
body {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
}
blockquote {
  background-color: skyblue;
  color: red;
  all: revert;
}
```

{{EmbedLiveSample("", "200", "125")}}

Lorsque la propriété `all` utilise la valeur `revert` dans la règle `blockquote`, cette règle est considérée comme absente et les valeurs pour la mise en forme sont héritées de celles appliquées à l'élément parent, `<body>`. Aussi, `<blockquote>` devient [un élément de bloc](/fr/docs/Glossary/Block-level_content), [`background-color`](/fr/docs/Web/CSS/background-color) vaut `#F0F0F0`, [`font-size`](/fr/docs/Web/CSS/font-size) vaut `small`, et [`color`](/fr/docs/Web/CSS/color) vaut `blue`&nbsp;: toutes ces valeurs sont héritées de la règle pour `body`.

#### `all: revert-layer`

```html hidden
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

```css hidden
body {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
}
blockquote {
  background-color: skyblue;
  color: red;
  all: revert-layer;
}
```

{{EmbedLiveSample("", "200", "125")}}

Ici, on n'a pas de couche de cascade définie dans le fichier CSS et l'élément `<blockquote>` hérite donc de la mise en forme de la règle `body` qui s'applique à l'élément parent. `<blockquote>` est donc [un élément de bloc](/fr/docs/Glossary/Block-level_content), [`background-color`](/fr/docs/Web/CSS/background-color) vaut `#F0F0F0`, [`font-size`](/fr/docs/Web/CSS/font-size) vaut `small`, et [`color`](/fr/docs/Web/CSS/color) vaut `blue`. Dans ce scénario, on est dans le cas où `all: revert-layer` mène au même comportement que `all: revert`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

Les mots-clés indiquant des valeurs globales pour CSS&nbsp;:

- [`initial`](/fr/docs/Web/CSS/initial)
- [`inherit`](/fr/docs/Web/CSS/inherit)
- [`unset`](/fr/docs/Web/CSS/unset)
- [`revert`](/fr/docs/Web/CSS/revert)
- [`revert-layer`](/fr/docs/Web/CSS/revert-layer)
