---
title: list-style
slug: Web/CSS/list-style
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/list-style
---
{{CSSRef}}

La propriété **`list-style`** est une [propriété raccourcie](/fr/docs/Web/CSS/Propriétés_raccourcies) qui permet de définir {{cssxref("list-style-type")}}, {{cssxref("list-style-image")}} et {{cssxref("list-style-position")}}.

{{EmbedInteractiveExample("pages/css/list-style.html")}}

> **Note :** Cette propriété s'applique aux éléments d'une liste (c'est-à-dire aux éléments pour lesquels {{cssxref("display")}}` : list-item``; `}}). Par défaut, cela inclut les éléments {{HTMLElement("li")}}. Cette propriété peut être héritée par les éléments et si on veut donc gérer une liste de façon uniforme, on pourra appliquer la propriété à l'élément parent (qui correspond en général à {{HTMLElement("ol")}} ou à {{HTMLElement("ul")}}).

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

list-style: none;

/* Valeurs globales */
list-style: inherit;
list-style: initial;
list-style: unset;
```

### Valeurs

Cette propriété raccourcie peut prendre un, deux ou trois mots-clés, dans n'importe quel ordre. Si {{cssxref("list-style-type")}} et {{cssxref("list-style-image")}} sont tous les deux définis, `list-style-type` sera utilisé si l'image est indisponible.

- `<'list-style-type'>`
  - : Voir {{cssxref("list-style-type")}}
- `<'list-style-image'>`
  - : Voir {{cssxref("list-style-image")}}
- `<'list-style-position'>`
  - : Voir {{cssxref("list-style-position")}}
- `none`
  - : Aucun style n'est utilisé.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
.un {
  list-style: circle;
}

.deux {
  list-style: square inside;
}
```

### HTML

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

### Résultat

{{EmbedLiveSample('Exemples','auto', 220)}}

## Accessibilité

Safari ne reconnait pas (incorrectement) les listes non ordonnées lorsque `list-style:none` leur est appliqué et ne les ajoute pas dans l'arbre d'accessibilité (utilisé par les lecteurs d'écrans). Pour pallier ce problème, on peut ajouter un [espace sans chasse](https://fr.wikipedia.org/wiki/Espace_sans_chasse) comme [pseudo-contenu](/fr/docs/Web/CSS/content) avant chaque élément de liste afin que la liste soit correctement annoncée.

```css
ul {
  list-style: none;
}

ul li::before {
  content: "\200B";
}
```

- [VoiceOver et `list-style-type: none` – Unfettered Thoughts (en anglais)](https://unfetteredthoughts.net/2017/09/26/voiceover-and-list-style-type-none/)
- [Comprendre les règles WCAG 1.3](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.3_%E2%80%94_Create_content_that_can_be_presented_in_different_ways)
- _[Understanding Success Criterion 1.3.1, W3C Understanding WCAG 2.0 ](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)_[(en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Spécifications

| Spécification                                                                                    | État                             | Commentaires         |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('CSS3 Lists', '#list-style-property', 'list-style')}}             | {{Spec2('CSS3 Lists')}} | Aucun changement.    |
| {{SpecName('CSS2.1', 'generate.html#propdef-list-style', 'list-style')}} | {{Spec2('CSS2.1')}}         | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.list-style")}}

## Voir aussi

- {{cssxref("list-style-type")}}
- {{cssxref("list-style-image")}}
- {{cssxref("list-style-position")}}
