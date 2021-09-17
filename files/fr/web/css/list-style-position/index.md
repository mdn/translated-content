---
title: list-style-position
slug: Web/CSS/list-style-position
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/list-style-position
---
{{CSSRef}}

La propriété **`list-style-position`** permet de définir la position du marqueur (cf. {{cssxref("::marker")}} de liste par rapport à la boîte principale.

{{EmbedInteractiveExample("pages/css/list-style-position.html")}}

Pour définir cette propriété, on pourra aussi utiliser la propriété raccourcie {{cssxref("list-style")}}.

> **Note :**
>
> - Cette propriété s'applique aux éléments d'une liste (c'est-à-dire aux éléments pour lesquels {{cssxref("display")}}` : list-item``; `). [Par défaut](https://www.w3.org/TR/html5/rendering.html#lists), cela inclut les éléments {{HTMLElement("li")}}. Cette propriété peut être héritée par les éléments et si on veut donc gérer une liste de façon uniforme, on pourra appliquer la propriété à l'élément parent (qui correspond en général à {{HTMLElement("ol")}} ou à {{HTMLElement("ul")}}).
> - Une différence de comportement existe entre les navigateurs lorsqu'un élément de bloc est placé en premier au sein d'un élément de liste avec `list-style-position: inside`. Chrome et Safari placent l'élément sur la même ligne que la boîte du marqueur. En revanche, Firefox, Internet Explorer et Opera placent l'élément sur la ligne suivante. Voir {{bug("36854")}} pour plus d'informations.

## Syntaxe

```css
/* Valeurs avec mot-clé */
list-style-position: inside;
list-style-position: outside;

/* Valeurs globales */
list-style-position: inherit;
list-style-position: initial;
list-style-position: unset;
```

La propriété `list-style-position` est définie avec l'un des mots-clés suivants.

### Valeurs

- `inside`
  - : La boîte du marqueur ({{cssxref("::marker")}}) est la première boîte en ligne (_inline_) de la boîte principale. Le contenu de l'élément sera appliqué à la suite de la boîte du marqueur.
- `outside`
  - : La boîte du marqueur ({{cssxref("::marker")}}) est en dehors de la boîte principale.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
.one {
  list-style:square inside;
}

.two {
  list-style-position: outside;
  list-style-type: circle;
}

.three {
  list-style-image: url("https://mdn.mozillademos.org/files/11979/starsolid.gif");
  list-style-position: inherit;
}
```

### HTML

```html
<ul class="one"> Liste 1
  <li>Élément 1-1</li>
  <li>Élément 1-2</li>
  <li>Élément 1-3</li>
  <li>Élément 1-4</li>
</ul>
<ul class="two"> Liste 2
  <li>Élément 2-1</li>
  <li>Élément 2-2</li>
  <li>Élément 2-3</li>
  <li>Élément 2-4</li>
</ul>
<ul class="three"> Liste 3
  <li>Élément 3-1</li>
  <li>Élément 3-2</li>
  <li>Élément 3-3</li>
  <li>Élément 3-4</li>
</ul>
```

### Résultat

{{EmbedLiveSample("Exemples","200","420")}}

## Spécifications

| Spécification                                                                                                            | État                             | Commentaires         |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('CSS3 Lists', '#list-style-position-property', 'list-style-position')}}             | {{Spec2('CSS3 Lists')}} | Aucun changement.    |
| {{SpecName('CSS2.1', 'generate.html#propdef-list-style-position', 'list-style-position')}} | {{Spec2('CSS2.1')}}         | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.list-style-position")}}

## Voir aussi

- {{cssxref("list-style")}}
- {{cssxref("list-style-type")}}
- {{cssxref("list-style-image")}}
- {{cssxref("::marker")}}
