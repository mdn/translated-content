---
title: outline
slug: Web/CSS/outline
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/outline
---
{{CSSRef}}

La propriété **`outline`** est [une propriété raccourcie](/fr/docs/Web/CSS/Propri%C3%A9t%C3%A9s_raccourcies) qui permet de définir, dans une seule déclaration, une ou plusieurs des propriétés parmi {{cssxref("outline-style")}}, {{cssxref("outline-width")}} et {{cssxref("outline-color")}}.

{{EmbedInteractiveExample("pages/css/outline.html")}}À l'instar des autres propriétés raccourcies, toutes les valeurs qui ne sont pas explicitement utilisées dans la déclaration sont réinitialisées avec [leur valeur initiale](/fr/docs/Web/CSS/Valeur_initiale).

### Bordures et contours

Les contours (_outline_) diffèrent des bordures, notamment sur les points suivants :

- Les contours ne prennent pas d'espace et sont dessinés au-dessus du contenu.
- Les contours peuvent avoir une forme qui n'est pas rectangulaire. Ils seront rectangulaires avec Gecko et Firefox mais Opera dessinera une forme autour du contenu (cf. exemples).

## Syntaxe

```css
/* style */
outline: solid;

/* couleur | style */
outline: #f66 dashed;

/* style | épaisseur */
outline: inset thick;

/* couleur | style | épaisseur */
outline: green solid 3px;

/* Valeurs globales */
outline: inherit;
outline: initial;
outline: unset;
```

La propriété `outline` peut être définie avec une, deux ou trois valeurs parmi celles listées ci-après. L'ordre de ces valeurs n'a pas d'importance.

> **Note :** Si aucun style n'est défini, le contour sera invisible (car le style par défaut vaut `none`).

### Valeurs

- `<'outline-width'>`
  - : Voir {{cssxref("outline-width")}}.
- `<'outline-style'>`
  - : Voir {{cssxref("outline-style")}}.
- `<'outline-color'>`
  - : Depuis Gecko 1.9 (Firefox 3), la valeur de la propriété {{cssxref("color")}} de l'élément est utilisée. Voir {{cssxref("outline-color")}}.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Exemple simple

#### HTML

```html
<p class="exemple">Je suis entouré de tirets rouges</p>
```

#### CSS

```css
.exemple {
  outline: dashed red 2px;
  /* on aurait pu utiliser          */
  /* les trois propriétés unitaires */
  /* et avoir le même résultat      */
}
```

#### Résultat

{{EmbedLiveSample("Exemple_simple")}}

### Exemple de contour non rectangulaire

#### HTML

```html
<p class="exemple">
  petit texte
    <span class=grand>Grand Texte</span>
  petit texte
</p>
```

#### CSS

```css
.exemple {
  outline: dotted orange 1px;
}

.grand {
  font-size:xx-large;
}
```

#### Résultat

{{EmbedLiveSample("Exemple_de_contour_non_rectangulaire")}}

## Accessibilité

Utiliser la propriété `outline` avec une valeur `0` ou `none` supprimera le style par défaut du navigateur pour le focus. Lorsqu'on interagit avec un élément, celui-ci doit avoir un indicateur visible. Aussi, veillez à fournir un tel indicateur si vous retirez le style par défaut pour le focus

- {{cssxref(":focus")}}
- [Comment concevoir des indicateurs de focus utiles et utilisables (en anglais)](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)
- [_Understanding Success Criterion 2.4.7  | Understanding WCAG 2.0_ (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html)

## Spécifications

| Spécification                                                                    | Statut                               | Commentaires         |
| -------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName('CSS3 Basic UI', '#outline', 'outline')}}             | {{Spec2('CSS3 Basic UI')}} | Aucun changement.    |
| {{SpecName('CSS2.1', 'ui.html#propdef-outline', 'outline')}} | {{Spec2('CSS2.1')}}             | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.outline")}}
