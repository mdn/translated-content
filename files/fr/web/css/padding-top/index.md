---
title: padding-top
slug: Web/CSS/padding-top
---

{{CSSRef}}

La propriété **`padding-top`** d'un élément ajuste la hauteur de la boîte de remplissage (_padding_) en haut de l'élément.

La [zone de remplissage](/fr/docs/Learn_web_development/Core/Styling_basics/Box_model) correspond à l'espace entre le contenu et la bordure. Contrairement à {{cssxref("margin-top")}}, `padding-top` ne peut pas recevoir de valeurs négatives.

{{InteractiveExample("CSS Demo: padding-top")}}

```css interactive-example-choice
padding-top: 1em;
```

```css interactive-example-choice
padding-top: 10%;
```

```css interactive-example-choice
padding-top: 20px;
```

```css interactive-example-choice
padding-top: 1ch;
```

```css interactive-example-choice
padding-top: 0;
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element">
    <div class="box">
      Far out in the uncharted backwaters of the unfashionable end of the
      western spiral arm of the Galaxy lies a small unregarded yellow sun.
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 10px solid #ffc129;
  overflow: hidden;
  text-align: left;
}

.box {
  border: dashed 1px;
}
```

La propriété raccourcie {{cssxref("padding")}} permet de paramétrer les dimensions des quatre côtés de cette boîte (y compris `padding-top` donc).

## Syntaxe

```css
/* Valeurs de longueur */
/* Type <length>       */
padding-top: 0.5em;
padding-top: 0;
padding-top: 2cm;

/* Valeurs de proportions */
/* Type <percentage>      */
padding-top: 10%;

/* Valeurs globales */
padding-top: inherit;
padding-top: initial;
padding-top: unset;
```

### Valeurs

- `<length>`
  - : Cette valeur définit une hauteur positive. Voir {{cssxref("&lt;length&gt;")}} pour plus de détails.
- `<percentage>`
  - : Un pourcentage en rapport avec la largeur du bloc englobant. Voir {{cssxref("&lt;percentage&gt;")}} pour plus de détails.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

```html
<p class="padd">
  Elle n’avait pas bu la moitié de la bouteille, que sa tête touchait au plafond
  et qu’elle fut forcée de se baisser pour ne pas se casser le cou.
</p>
```

### CSS

```css
.padd {
  padding-top: 5em;
  border: solid 1px;
}
```

### Résultat

{{EmbedLiveSample("Exemples","100%","100%")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le modèle de boîtes CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Box_model)
- La propriété raccourcie {{cssxref("padding")}} qui permet de paramétrer `padding-top`, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}} et {{cssxref("padding-left")}}.
