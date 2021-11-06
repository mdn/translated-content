---
title: margin-top
slug: Web/CSS/margin-top
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/margin-top
---
{{CSSRef}}

La propriété **`margin-top`** définit l'espace vertical pour la marge appliquée en haut de l'élément. Une valeur négative peut être utilisée.

{{EmbedInteractiveExample("pages/css/margin-top.html")}}

Cette propriété n'a aucun effet sur les éléments non-remplacés en ligne (_inline_) tels que {{HTMLElement("tt")}} ou {{HTMLElement("span")}}.

## Syntaxe

```css
/* Valeurs de longueur */
/* Type <length>       */
margin-top: 10px;  /* Une longueur absolue */
margin-top: 1em;   /* Une longueur proportionnelle à la taille du texte */
margin-top: 5%;    /* Une marge relative à la largeur */
                   /* du bloc englobant le plus proche */

/* Valeur avec un mot-clé */
margin-top: auto;

/* Valeurs globales */
margin-top: inherit;
margin-top: initial;
margin-top: unset;
```

Le mot-clé `auto` ou une valeur de longueur (`<length>`) ou de pourcentage (`<percentage>`).

### Valeurs

- `<length>`
  - : Cette valeur définit une largeur fixée. Pour les valeurs qui peuvent être utilisées, voir la page sur le type {{cssxref("&lt;length&gt;")}}.
- `<percentage>`
  - : Une valeur en pourcentage (type {{cssxref("&lt;percentage&gt;")}} qui est relative à la **largeur** du bloc englobant.
- `auto`
  - : Voir {{cssxref("margin")}}.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
div {
  background-color: blue;
  background-clip: border-box;
  width: 50px;
  height: 2em;
}
.exemple {
  margin-top: 3em;
  background-color: gold;
  background-clip: border-box;
}
```

### HTML

```html
<div></div>
<p class=exemple>
  C’est ce qui arriva en effet, et bien plus tôt
  qu’elle ne s’y attendait. Elle n’avait pas bu
  la moitié de la bouteille, que sa tête touchait
  au plafond et qu’elle fut forcée de se baisser
  pour ne pas se casser le cou.</p>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

| Spécification                                                                            | État                                     | Commentaires                                             |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------------------------------------------- |
| {{SpecName('CSS3 Box', '#the-margin', 'margin-top')}}                 | {{Spec2('CSS3 Box')}}             | Aucun changement significatif                            |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'margin-top')}} | {{Spec2('CSS3 Transitions')}} | `margin-top` peut désormais être animée.                 |
| {{SpecName('CSS2.1', 'box.html#margin-properties', 'margin-top')}} | {{Spec2('CSS2.1')}}                 | L'effet sur les éléments en ligne (_inline_) est retiré. |
| {{SpecName('CSS1', '#margin-top', 'margin-top')}}                         | {{Spec2('CSS1')}}                 | Définition initiale.                                     |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.margin-top")}}
