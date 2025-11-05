---
title: list-style-position
slug: Web/CSS/Reference/Properties/list-style-position
original_slug: Web/CSS/list-style-position
---

{{CSSRef}}

La propriété **`list-style-position`** permet de définir la position du marqueur (cf. [`::marker`](/fr/docs/Web/CSS/Reference/Selectors/::marker)) de liste par rapport à la boîte principale.

{{InteractiveExample("CSS Demo: list-style-position")}}

```css interactive-example-choice
list-style-position: inside;
```

```css interactive-example-choice
list-style-position: outside;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div>
    <p>NASA Notable Missions</p>
    <ul class="transition-all" id="example-element">
      <li>Apollo 11: First Human Landing</li>
      <li>City in Space: The International Space Station</li>
      <li>Great Observatory: The Hubble Space Telescope</li>
      <li>Everlasting Mars Rovers</li>
    </ul>
  </div>
</section>
```

```css interactive-example
.default-example {
  font-size: 1.2rem;
}

#example-element {
  width: 100%;
  background: #be094b;
  color: white;
}

section {
  text-align: left;
  flex-direction: column;
}

hr {
  width: 50%;
  color: lightgray;
  margin: 0.5em;
}

.note {
  font-size: 0.8rem;
}

.note a {
  color: #009e5f;
}

@counter-style space-counter {
  symbols: "\1F680" "\1F6F8" "\1F6F0" "\1F52D";
  suffix: " ";
}
```

Pour définir cette propriété, on pourra aussi utiliser la propriété raccourcie [`list-style`](/fr/docs/Web/CSS/Reference/Properties/list-style).

> [!NOTE]
> Cette propriété s'applique aux éléments d'une liste (c'est-à-dire aux éléments pour lesquels [`display`](/fr/docs/Web/CSS/Reference/Properties/display) vaut `list-item`). [Par défaut](https://www.w3.org/TR/html5/rendering.html#lists), cela inclut les éléments [`<li>`](/fr/docs/Web/HTML/Reference/Elements/li). Cette propriété peut être héritée par les éléments et si on veut donc gérer une liste de façon uniforme, on pourra appliquer la propriété à l'élément parent (qui correspond en général à [`<ol>`](/fr/docs/Web/HTML/Reference/Elements/ol) ou à [`<ul>`](/fr/docs/Web/HTML/Reference/Elements/ul)).

Une différence de comportement existe entre les navigateurs lorsqu'un élément de bloc est placé en premier au sein d'un élément de liste avec `list-style-position: inside`. Chrome et Safari placent l'élément sur la même ligne que la boîte du marqueur. En revanche, Firefox, Internet Explorer et Opera placent l'élément sur la ligne suivante. Voir [le bug 36854 de Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=36854) pour plus d'informations.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
list-style-position: inside;
list-style-position: outside;

/* Valeurs globales */
list-style-position: inherit;
list-style-position: initial;
list-style-position: revert;
list-style-position: unset;
```

La propriété `list-style-position` est définie avec l'un des mots-clés suivants.

### Valeurs

- `inside`
  - : La boîte du marqueur ([`::marker`](/fr/docs/Web/CSS/Reference/Selectors/::marker)) est la première boîte en ligne (_inline_) de la boîte principale. Le contenu de l'élément sera appliqué à la suite de la boîte du marqueur.
- `outside`
  - : La boîte du marqueur ([`::marker`](/fr/docs/Web/CSS/Reference/Selectors/::marker)) est en dehors de la boîte principale.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Définition de la position des éléments d'une liste

#### HTML

```html
<ul class="un">
  Liste 1
  <li>Élément 1-1</li>
  <li>Élément 1-2</li>
  <li>Élément 1-3</li>
  <li>Élément 1-4</li>
</ul>
<ul class="deux">
  Liste 2
  <li>Élément 2-1</li>
  <li>Élément 2-2</li>
  <li>Élément 2-3</li>
  <li>Élément 2-4</li>
</ul>
<ul class="trois">
  Liste 3
  <li>Élément 3-1</li>
  <li>Élément 3-2</li>
  <li>Élément 3-3</li>
  <li>Élément 3-4</li>
</ul>
```

#### CSS

```css
.un {
  list-style-position: inside;
  list-style-type: square;
}

.deux {
  list-style-position: outside;
  list-style-type: circle;
}

.trois {
  list-style-position: inside;
  list-style-image: url("star-solid.gif");
}
```

#### Résultat

{{EmbedLiveSample("Définition_de_la_position_des_éléments_d'une_liste", 200, 420)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`list-style`](/fr/docs/Web/CSS/Reference/Properties/list-style)
- [`list-style-type`](/fr/docs/Web/CSS/Reference/Properties/list-style-type)
- [`list-style-image`](/fr/docs/Web/CSS/Reference/Properties/list-style-image)
