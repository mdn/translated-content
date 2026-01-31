---
title: all
slug: Web/CSS/Reference/Properties/all
l10n:
  sourceCommit: 1bfe630bd8538b64c97c7f684f5ee647a76c1a28
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`all`** permet de réinitialiser toutes les propriétés d'un élément, à l'exception de {{CSSxRef("unicode-bidi")}}, {{CSSxRef("direction")}} et des [propriétés personnalisées](/fr/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties), avec leurs valeurs initiales, héritées ou qui proviennent d'une autre couche de la cascade voire d'une autre feuille de style.

{{InteractiveExample("Démonstration CSS&nbsp;: all")}}

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
        Ce paragraphe a une taille de police de 1.5rem et une couleur or. Il a
        aussi une marge verticale de 1rem définie par l'agent utilisateur. Le
        parent du paragraphe est un &lt;div&gt; avec une bordure bleue en
        pointillés.
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

## Propriétés constitutives

Cette propriété est une propriété raccourcie pour toutes les propriétés CSS à l'exception de {{CSSxRef("unicode-bidi")}}, {{CSSxRef("direction")}} et des [propriétés personnalisées](/fr/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties).

## Syntaxe

```css
/* Valeurs globales */
all: initial;
all: inherit;
all: unset;
all: revert;
all: revert-layer;
```

La propriété `all` est définie avec un des mots-clés globaux de CSS. On notera que la valeur de cette propriété n'a pas d'impact sur les propriétés {{CSSxRef("unicode-bidi")}}, {{CSSxRef("direction")}}, et les [propriétés personnalisées](/fr/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties).

### Valeurs

- {{CSSxRef("initial")}}
  - : Définit que toutes les propriétés qui sont définies pour l'élément auquel s'applique `all` devront prendre [leurs valeurs initiales](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_initiale).
- {{CSSxRef("inherit")}}
  - : Définit que toutes les propriétés qui sont définies pour l'élément auquel s'applique `all` devront prendre [les valeurs héritées](/fr/docs/Web/CSS/Guides/Cascade/Inheritance).
- {{CSSxRef("unset")}}
  - : Définit que toutes les propriétés qui s'appliquent à l'élément prendront leur valeur héritée si elles héritent par défaut, ou leur valeur initiale sinon.
- {{CSSxRef("revert")}}
  - : Définit le comportement obtenu sera différent selon l'origine de la règle&nbsp;:
    - Si la règle provient [du site](/fr/docs/Web/CSS/Guides/Cascade/Introduction#feuilles_de_style_du_site), `revert` remonte la [cascade](/fr/docs/Web/CSS/Guides/Cascade/Introduction) au niveau de la feuille de style de l'utilisatrice ou de l'utilisateur afin que [les valeurs définies](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_définie) soient calculées comme si aucune règle du site n'avait été définie pour l'élément. En ce qui concerne `revert`, cette origine (le site) inclut également les origines de surcharge (<i lang="en">override</i>) et d'animation.
    - Si la règle provient [d'une feuille de style de l'utilisatrice ou de l'utilisateur](/fr/docs/Web/CSS/Guides/Cascade/Introduction#feuilles_de_style_de_lutilisatrice_ou_lutilisateur), `revert` remonte [la cascade](/fr/docs/Web/CSS/Guides/Cascade/Introduction) au niveau de l'agent utilisateur afin que [les valeurs définies](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_définie) soient calculées comme si aucune règle utilisateur ou du site n'avait été spécifiée pour l'élément.
    - Si la règle provient [de l'agent utilisateur](/fr/docs/Web/CSS/Guides/Cascade/Introduction#feuilles_de_style_de_lagent_utilisateur), `revert` agira comme `unset`.
- {{CSSxRef("revert-layer")}}
  - : Définit que toutes les propriétés de l'élément devraient revenir à [une couche de cascade](/fr/docs/Web/CSS/Reference/At-rules/@layer) précédente existante. S'il n'existe pas de telle couche, les propriétés de l'élément reviendront à la règle correspondante existante de la couche courante ou d'une [origine](/fr/docs/Glossary/Style_origin) précédente.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

Dans cet exemple, le fichier CSS contient une mise en forme pour l'élément HTML {{HTMLElement("blockquote")}} ainsi que pour l'élément parent `<body>`. Les différents résultats dans la sous-section Résultat montrent comment la mise en forme de l'élément `<blockquote>` est affectée lorsque différentes valeurs sont appliquées à la propriété `all` dans la règle `blockquote`.

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

{{EmbedLiveSample("Pas de propriété `all`", 200, 125)}}

Dans ce scénario, aucune propriété `all` n'est appliquée dans la règle `blockquote`. L'élément HTML {{HTMLElement("blockquote")}} utilise la mise en forme par défaut du navigateur, qui lui fournit une marge, ainsi que des couleurs d'arrière-plan et de texte indiquées par la feuille de style. Il se comporte comme un élément _bloc_&nbsp;: le texte qui suit l'élément est placé en dessous.

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

{{EmbedLiveSample("`all: initial`", 200, 125)}}

Lorsque la propriété `all` vaut `initial` dans la règle `blockquote`, l'élément HTML {{HTMLElement("blockquote")}} n'utilise plus la mise en forme par défaut du navigateur&nbsp;: il s'agit maintenant d'un élément _en ligne_ (valeur initiale), sa propriété [`background-color`](/fr/docs/Web/CSS/Reference/Properties/background-color#définition_formelle) vaut `transparent` (valeur initiale), sa propriété [`font-size`](/fr/docs/Web/CSS/Reference/Properties/font-size#définition_formelle) vaut `medium`, et sa propriété [`color`](/fr/docs/Web/CSS/Reference/Properties/color#définition_formelle) vaut `black` (valeur initiale).

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

{{EmbedLiveSample("`all: inherit`", 200, 125)}}

Dans ce cas, l'élément HTML {{HTMLElement("blockquote")}} n'utilise pas la mise en forme par défaut du navigateur. Il hérite à la place des valeurs de style de son parent {{HTMLElement("body")}}&nbsp;: il s'agit maintenant d'un élément _bloc_ (valeur héritée), sa propriété {{CSSxRef("background-color")}} vaut `#F0F0F0` (valeur héritée), sa propriété {{CSSxRef("font-size")}} vaut `small` (valeur héritée), et sa propriété {{CSSxRef("color")}} vaut `blue` (valeur héritée).

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

{{EmbedLiveSample("`all: unset`", 200, 125)}}

Lorsque la valeur `unset` est appliquée à la propriété `all` dans la règle `blockquote`, l'élément HTML {{HTMLElement("blockquote")}} n'utilise pas la mise en forme par défaut du navigateur. Comme la propriété [`background-color`](/fr/docs/Web/CSS/Reference/Properties/background-color#définition_formelle) n'est pas héritée, tandis que [`font-size`](/fr/docs/Web/CSS/Reference/Properties/font-size#définition_formelle) et [`color`](/fr/docs/Web/CSS/Reference/Properties/color#définition_formelle) le sont, l'élément `<blockquote>` est maintenant un élément _en ligne_ (valeur initiale), sa propriété {{CSSxRef("background-color")}} vaut `transparent` (valeur initiale), mais sa propriété {{CSSxRef("font-size")}} vaut toujours `small` (valeur héritée), et sa propriété {{CSSxRef("color")}} vaut `blue` (valeur héritée).

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

{{EmbedLiveSample("`all: revert`", 200, 125)}}

Lorsque la propriété `all` est définie à `revert` dans la règle `blockquote`, la règle `blockquote` est considérée comme inexistante et les valeurs des propriétés de mise en forme sont héritées de celles appliquées à l'élément parent `<body>`. Ainsi, l'élément `<blockquote>` est mis en forme comme un élément _bloc_, avec {{CSSxRef("background-color")}} vaut `#F0F0F0`, {{CSSxRef("font-size")}} vaut `small`, et {{CSSxRef("color")}} vaut `blue` — toutes ces valeurs sont héritées de la règle pour `body`.

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

{{EmbedLiveSample("`all: revert-layer`", 200, 125)}}

Il n'y a pas de couche de cascade définie dans le fichier CSS, donc l'élément `<blockquote>` hérite de la règle `body` correspondante pour sa mise en forme. L'élément `<blockquote>` est ici mis en forme comme un élément _bloc_, avec {{CSSxRef("background-color")}} vaut `#F0F0F0`, {{CSSxRef("font-size")}} vaut `small` et {{CSSxRef("color")}} vaut `blue` — toutes ces valeurs sont héritées de la règle pour `body`. Ce scénario illustre le cas où `all` défini à `revert-layer` se comporte comme si `all` était défini à `revert`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

Valeurs globales des mots-clés CSS&nbsp;: {{CSSxRef("initial")}}, {{CSSxRef("inherit")}}, {{CSSxRef("unset")}}, {{CSSxRef("revert")}}, {{CSSxRef("revert-layer")}}
