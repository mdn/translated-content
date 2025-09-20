---
title: outline
slug: Web/CSS/outline
---

{{CSSRef}}

La propriété **`outline`** est [une propriété raccourcie](/fr/docs/Web/CSS/CSS_cascade/Shorthand_properties) qui permet de définir, dans une seule déclaration, une ou plusieurs des propriétés parmi {{cssxref("outline-style")}}, {{cssxref("outline-width")}} et {{cssxref("outline-color")}}.

{{InteractiveExample("CSS Demo: outline")}}

```css interactive-example-choice
outline: solid;
```

```css interactive-example-choice
outline: dashed red;
```

```css interactive-example-choice
outline: 1rem solid;
```

```css interactive-example-choice
outline: thick double #32a1ce;
```

```css interactive-example-choice
outline: 8px ridge rgba(170, 50, 220, 0.6);
border-radius: 2rem;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with an outline around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  padding: 0.75rem;
  width: 80%;
  height: 100px;
}
```

À l'instar des autres propriétés raccourcies, toutes les valeurs qui ne sont pas explicitement utilisées dans la déclaration sont réinitialisées avec [leur valeur initiale](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_f91302baa0061849ce1a7eea54ba57f650b9256fcf644b7a35a0645d353b08fc).

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

> [!NOTE]
> Si aucun style n'est défini, le contour sera invisible (car le style par défaut vaut `none`).

### Valeurs

- `<'outline-width'>`
  - : Voir {{cssxref("outline-width")}}.
- `<'outline-style'>`
  - : Voir {{cssxref("outline-style")}}.
- `<'outline-color'>`
  - : Depuis Gecko 1.9 (Firefox 3), la valeur de la propriété {{cssxref("color")}} de l'élément est utilisée. Voir {{cssxref("outline-color")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

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
  <span class="grand">Grand Texte</span>
  petit texte
</p>
```

#### CSS

```css
.exemple {
  outline: dotted orange 1px;
}

.grand {
  font-size: xx-large;
}
```

#### Résultat

{{EmbedLiveSample("Exemple_de_contour_non_rectangulaire")}}

## Accessibilité

Utiliser la propriété `outline` avec une valeur `0` ou `none` supprimera le style par défaut du navigateur pour le focus. Lorsqu'on interagit avec un élément, celui-ci doit avoir un indicateur visible. Aussi, veillez à fournir un tel indicateur si vous retirez le style par défaut pour le focus

- {{cssxref(":focus")}}
- [Comment concevoir des indicateurs de focus utiles et utilisables (en anglais)](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)
- [_Understanding Success Criterion 2.4.7 | Understanding WCAG 2.0_ (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
