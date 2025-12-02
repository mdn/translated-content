---
title: :has()
slug: Web/CSS/Reference/Selectors/:has
original_slug: Web/CSS/:has
l10n:
  sourceCommit: 277a8954951c900ef60a5175503976284c1d328d
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:has()`** permet de cibler un élément si au moins un des sélecteurs passés en paramètre correspond à l'élément (selon la portée, {{CSSxRef(":scope")}}, de l'élément).

```css
/* Sélectionne un titre h1 avec un
élément de paragraphe qui suit immédiatement
le h1 et applique le style au h1 */
h1:has(+ p) {
  margin-bottom: 0;
}
```

Cette pseudo-classe `:has()` prend en paramètre une liste de sélecteurs.

## Syntaxe

```css-nolint
:has(<relative-selector-list>) {
  /* ... */
}
```

Si la pseudo-classe `:has()` n'est pas prise en charge par un navigateur, l'ensemble du bloc sélecteur échouera, sauf si `:has()` figure dans une liste de sélecteurs tolérants, comme dans [`:is()`](/fr/docs/Web/CSS/Reference/Selectors/:is) et [`:where()`](/fr/docs/Web/CSS/Reference/Selectors/:where).

La pseudo-classe `:has()` ne peut pas être imbriquée dans une autre `:has()`.

Les pseudo-éléments ne sont pas non plus des sélecteurs valides dans `:has()` et les pseudo-éléments ne sont pas des ancres valides pour `:has()`. En effet, de nombreux pseudo-éléments existent de manière conditionnelle en fonction du style de leurs ancêtres et le fait de permettre leur interrogation par `:has()` peut entraîner des requêtes cycliques.

## Exemples

### Sélectionner un élément parent

Vous recherchez peut-être un "[combinator parent](/fr/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#combinators)", qui vous permet de remonter l'arbre DOM et de sélectionner le parent d'un élément spécifique. La pseudo-classe `:has()` le fait en utilisant `parent:has(child)` (pour n'importe quel parent) ou `parent:has(> child)` (pour le parent direct). Cet exemple montre comment mettre en forme un élément `<section>` lorsqu'il contient un enfant avec la classe `featured`.

```html
<section>
  <article class="featured">Contenu en vedette</article>
  <article>Contenu régulier</article>
</section>
<section>
  <article>Contenu régulier</article>
</section>
```

```css
section:has(.featured) {
  border: 2px solid blue;
}
```

### Result

{{EmbedLiveSample('Selectionner_un_element_parent', , 200)}}

### Avec le combinateur de frères

La déclaration de style `:has()` dans l'exemple suivant ajuste l'espacement après les titres `<h1>` s'ils sont immédiatement suivis d'un titre `<h2>`.

#### HTML

```html
<section>
  <article>
    <h1>Journal Matinal</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </article>
  <article>
    <h1>Journal Matinal</h1>
    <h2>Vous livrer les actualités chaque matin</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </article>
</section>
```

#### CSS

```css hidden
section {
  display: flex;
  align-items: start;
  justify-content: space-around;
}

article {
  display: inline-block;
  width: 40%;
}

h1,
h2 {
  font-size: 1.2em;
}

h2 {
  font-size: 1em;
  color: rgb(150 149 149);
}
```

```css
h1,
h2 {
  margin: 0 0 1rem 0;
}

h1:has(+ h2) {
  margin: 0 0 0.25rem 0;
}
```

#### Result

{{EmbedLiveSample('Avec_le_combinator_de_freres', 600, 150)}}

Cet exemple montre deux textes similaires côte à côte pour comparaison : le gauche avec un titre `H1` suivi d'un paragraphe et le droit avec un titre `H1` suivi d'un titre `H2` et ensuite d'un paragraphe. Dans l'exemple de droite, `:has()` aide à sélectionner l'élément `H1` qui est immédiatement suivi d'un élément `H2` (indiqué par le combinator de frère suivant [`+`](/fr/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator)) et la règle CSS réduit l'espacement après un tel élément `H1`. Sans la pseudo-classe `:has()`, vous ne pouvez pas utiliser les sélecteurs CSS pour sélectionner un frère précédent d'un type différent ou un élément parent.

### Avec la pseudo-classe :is()

Cet exemple s'appuie sur l'exemple précédent pour montrer comment sélectionner plusieurs éléments avec `:has()`.

#### HTML

```html
<section>
  <article>
    <h1>Journal Matinal</h1>
    <h2>Vous livrer les actualités chaque matin</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </article>
  <article>
    <h1>Journal Matinal</h1>
    <h2>Vous livrer les actualités chaque matin</h2>
    <h3>8:00</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </article>
</section>
```

#### CSS

```css hidden
section {
  display: flex;
  align-items: start;
  justify-content: space-around;
}

article {
  display: inline-block;
  width: 40%;
}

h1 {
  font-size: 1.2em;
}

h2 {
  font-size: 1em;
  color: rgb(150 149 149);
}

h3 {
  font-size: 0.9em;
  color: darkgrey;
}
```

```css
h1,
h2,
h3 {
  margin: 0 0 1rem 0;
}

:is(h1, h2, h3):has(+ :is(h2, h3, h4)) {
  margin: 0 0 0.25rem 0;
}
```

#### Result

{{EmbedLiveSample('Avec_la_pseudo-classe_is', 600, 170)}}

Ici, la première pseudo-classe [`:is()`](/fr/docs/Web/CSS/Reference/Selectors/:is) est utilisée pour sélectionner n'importe quel élément de titre de la liste. La deuxième pseudo-classe `:is()` est utilisée pour passer une liste de sélecteurs de frères suivants en tant qu'argument à `:has()`. La pseudo-classe `:has()` aide à sélectionner n'importe quel élément `H1`, `H2` ou `H3` qui est immédiatement suivi (indiqué par [`+`](/fr/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator)) d'un élément `H2`, `H3` ou `H4` et la règle CSS réduit l'espacement après de tels éléments `H1`, `H2` ou `H3`.

Ce sélecteur pourrait également être écrit comme suit&nbsp;:

```css
:is(h1, h2, h3):has(+ h2, + h3, + h4) {
  margin: 0 0 0.25rem 0;
}
```

### Opérations logiques

Le sélecteur relationnel `:has()` peut être utilisé pour vérifier si l'une des multiples caractéristiques est vraie ou si toutes les caractéristiques sont vraies.

En utilisant des valeurs séparées par des virgules à l'intérieur du sélecteur relationnel `:has()`, vous vérifiez si l'un des paramètres existe. `x:has(a, b)` mettra en forme `x` si le descendant `a` OU `b` existe.

En chaînant plusieurs sélecteurs relationnels `:has()` ensemble, vous vérifiez si tous les paramètres existent. `x:has(a):has(b)` mettra en forme `x` si les descendants `a` ET `b` existent.

```css
body:has(video, audio) {
  /* styles à appliquer si le contenu contient de l'audio OU de la vidéo */
}
body:has(video):has(audio) {
  /* styles à appliquer si le contenu contient à la fois de l'audio ET de la vidéo */
}
```

## Analogie entre :has() et les expressions régulières

Il est intéressant de noter que certaines constructions CSS `:has()` peuvent être associées à l'[assertion prospective](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) dans les expressions régulières, car elles permettent toutes deux de sélectionner des éléments (ou des chaînes dans les expressions régulières) en fonction d'une condition sans sélectionner la condition correspondant à l'élément (ou à la chaîne) lui-même.

### Assertion positive (?=pattern)

Dans l'expression régulière `abc(?=xyz)`, la chaîne `abc` n'est correspondante que si elle est immédiatement suivie de la chaîne `xyz`. Comme il s'agit d'une opération de lookahead, `xyz` n'est pas inclus dans la correspondance.

La construction analogue en CSS serait `.abc:has(+ .xyz)` : elle sélectionne l'élément `.abc` uniquement s'il existe un élément frère suivant `.xyz`. La partie `:has(+ .xyz)` agit comme une opération de lookahead car l'élément `.abc` est sélectionné et non l'élément `.xyz`.

### Assertion négative (?!pattern)

De même, dans le cas de la recherche négative, dans l'expression régulière `abc(?!xyz)`, la chaîne `abc` n'est correspondante que si elle n'est _pas_ suivie de `xyz`. La construction CSS analogue `.abc:has(+ :not(.xyz))` ne sélectionne pas l'élément `.abc` si l'élément suivant est `.xyz`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

- Les pseudo-classes CSS [`:is()`](/fr/docs/Web/CSS/Reference/Selectors/:is), [`:where()`](/fr/docs/Web/CSS/Reference/Selectors/:where), [`:not()`](/fr/docs/Web/CSS/Reference/Selectors/:not)
- [Sélecteurs et combinateurs CSS](/fr/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)
- [Structure du sélecteur CSS](/fr/docs/Web/CSS/CSS_selectors/Selector_structure)
- [Liste des sélecteurs](/fr/docs/Web/CSS/Reference/Selectors/Selector_list)
- [Sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors)
- [Sélection et parcours de l'arbre DOM](/fr/docs/Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree)
