---
title: list-style-position
slug: Web/CSS/list-style-position
---

{{CSSRef}}

La propriété **`list-style-position`** permet de définir la position du marqueur (cf. [`::marker`](/fr/docs/Web/CSS/::marker)) de liste par rapport à la boîte principale.

{{EmbedInteractiveExample("pages/css/list-style-position.html")}}

Pour définir cette propriété, on pourra aussi utiliser la propriété raccourcie [`list-style`](/fr/docs/Web/CSS/list-style).

> **Note :** Cette propriété s'applique aux éléments d'une liste (c'est-à-dire aux éléments pour lesquels [`display`](/fr/docs/Web/CSS/display) vaut `list-item`). [Par défaut](https://www.w3.org/TR/html5/rendering.html#lists), cela inclut les éléments [`<li>`](/fr/docs/Web/HTML/Element/li). Cette propriété peut être héritée par les éléments et si on veut donc gérer une liste de façon uniforme, on pourra appliquer la propriété à l'élément parent (qui correspond en général à [`<ol>`](/fr/docs/Web/HTML/Element/ol) ou à [`<ul>`](/fr/docs/Web/HTML/Element/ul)).

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
  - : La boîte du marqueur ([`::marker`](/fr/docs/Web/CSS/::marker)) est la première boîte en ligne (_inline_) de la boîte principale. Le contenu de l'élément sera appliqué à la suite de la boîte du marqueur.
- `outside`
  - : La boîte du marqueur ([`::marker`](/fr/docs/Web/CSS/::marker)) est en dehors de la boîte principale.

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
  list-style-image: url("starsolid.gif");
}
```

#### Résultat

{{EmbedLiveSample('', 200, 420)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`list-style`](/fr/docs/Web/CSS/list-style)
- [`list-style-type`](/fr/docs/Web/CSS/list-style-type)
- [`list-style-image`](/fr/docs/Web/CSS/list-style-image)
