---
title: list-style
slug: Web/CSS/list-style
translation_of: Web/CSS/list-style
browser-compat: css.properties.list-style
---
{{CSSRef}}

La propriété **`list-style`** est une [propriété raccourcie](/fr/docs/Web/CSS/Shorthand_properties) qui permet de définir [`list-style-type`](/fr/docs/Web/CSS/list-style-type), [`list-style-image`](/fr/docs/Web/CSS/list-style-image) et [`list-style-position`](/fr/docs/Web/CSS/list-style-position).

{{EmbedInteractiveExample("pages/css/list-style.html")}}

> **Note :** Cette propriété s'applique aux éléments d'une liste (c'est-à-dire aux éléments pour lesquels [`display`](/fr/docs/Web/CSS/display) vaut `list-item`). [Par défaut](https://www.w3.org/TR/html5/rendering.html#lists), cela inclut les éléments [`<li>`](/fr/docs/Web/HTML/Element/li). Cette propriété peut être héritée par les éléments et si on veut donc gérer une liste de façon uniforme, on pourra appliquer la propriété à l'élément parent (qui correspond en général à [`<ol>`](/fr/docs/Web/HTML/Element/ol) ou à [`<ul>`](/fr/docs/Web/HTML/Element/ul)).

## Propriétés détaillées correspondantes

Cette propriété est une propriété raccourcie pour les propriétés CSS&nbsp;:

- [`list-style-image`](/fr/docs/Web/CSS/list-style-image)
- [`list-style-position`](/fr/docs/Web/CSS/list-style-position)
- [`list-style-type`](/fr/docs/Web/CSS/list-style-type)

## Syntaxe

```css
/* Type */
list-style: square;

/* Image */
list-style: url('../img/etoile.png');

/* Position */
list-style: inside;

/* type | position */
list-style: georgian inside;

/* type | image | position */
list-style: lower-roman url('../img/etoile.png') outside;


/* Valeur avec un mot-clé */
list-style: none;

/* Valeurs globales */
list-style: inherit;
list-style: initial;
list-style: revert;
list-style: unset;
```

Cette propriété raccourcie peut prendre un, deux ou trois mots-clés, dans n'importe quel ordre. Si [`list-style-type`](/fr/docs/Web/CSS/list-style-type) et [`list-style-image`](/fr/docs/Web/CSS/list-style-image) sont tous les deux définis, `list-style-type` sera utilisé si l'image est indisponible.

### Valeurs

- [`list-style-type`](/fr/docs/Web/CSS/list-style-type)
  - : Voir [`list-style-type`](/fr/docs/Web/CSS/list-style-type).
- [`list-style-image`](/fr/docs/Web/CSS/list-style-image)
  - : Voir [`list-style-image`](/fr/docs/Web/CSS/list-style-image).
- [`list-style-position`](/fr/docs/Web/CSS/list-style-position)
  - : Voir [`list-style-position`](/fr/docs/Web/CSS/list-style-position).
- `none`
  - : Aucun style n'est utilisé.

## Accessibilité

Safari ne reconnait pas les listes non ordonnées lorsque `list-style: none` leur est appliqué et ne les ajoute pas dans l'arbre d'accessibilité (utilisé par les lecteurs d'écrans).

La solution la plus directe est d'affecter `role="list"` à l'élément `<ul>` dans votre code HTML. Cela rajoute les valeurs sémantiques de la liste sans impacter le design.

Pour pallier ce problème en utilisant uniquement les styles CSS, on peut ajouter un [espace sans chasse](https://fr.wikipedia.org/wiki/Espace_sans_chasse) comme [pseudo-contenu](/fr/docs/Web/CSS/content) avant chaque élément de liste afin que la liste soit correctement annoncée.

```css
ul {
  list-style: none;
}

ul li::before {
  content: "\200B";
}
```

Une autre approche consiste à affecter une valeur `url` à la propriété `list-style`&nbsp;:

```css
nav ol, nav ul {
  list-style: none;
}

/* cela devient : */

nav ol, nav ul {
  list-style: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E");
}
```

N'utilisez les palliatifs CSS que dans le cas où la solution en HTML n'est pas disponible et les conséquences inattendues nuisant à l'expérience utilisateur sont écartées durant des essais.

- [_'Fixing' Lists_ (en anglais)](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html)
- [_VoiceOver and_ `list-style-type: none` – _Unfettered Thoughts_ (en anglais)](https://unfetteredthoughts.net/2017/09/26/voiceover-and-list-style-type-none/)
- [MDN Comprendre les règles WCAG 1.3](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [_Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0_ (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Définition de list-style-type et position

#### HTML

```html
Liste 1
<ul class="un">
  <li>Élément 1</li>
  <li>Élément 2</li>
  <li>Élément 3</li>
</ul>
Liste 2
<ul class="deux">
  <li>Élément A</li>
  <li>Élément B</li>
  <li>Élément C</li>
</ul>
```

#### CSS

```css
.un {
  list-style: circle;
}

.deux {
  list-style: square inside;
}
```

#### Résultat

{{EmbedLiveSample('', 'auto', 220)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`list-style-type`](/fr/docs/Web/CSS/list-style-type)
- [`list-style-image`](/fr/docs/Web/CSS/list-style-image)
- [`list-style-position`](/fr/docs/Web/CSS/list-style-position)