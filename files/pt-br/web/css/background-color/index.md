---
title: background-color
slug: Web/CSS/background-color
---

{{CSSRef}}

A propriedade [CSS](/pt-BR/docs/Web/CSS) **`background-color`** define a cor de fundo de um elemento.

{{EmbedInteractiveExample("pages/css/background-color.html")}}

## Sintaxe

```css
/* Valores em chaves */
background-color: red;
background-color: indigo;

/* Valores em Hexadecimais */
background-color: #bbff00; /* Totalmente opaco */
background-color: #bf0; /* Forma abreviada totalmente opaco */
background-color: #11ffee00; /* Totalmente transparente */
background-color: #1fe0; /* Forma abreviada totalmente transparente */
background-color: #11ffeeff; /* Totalmente opaco */
background-color: #1fef; /* Forma abreviada totalmente opaco */

/* Valores em RGB */
background-color: rgb(255, 255, 128); /* Totalmente opaco */
background-color: rgba(117, 190, 218, 0.5); /* 50% transparente */

/* Valores em HSL */
background-color: hsl(50, 33%, 25%); /* Totalmente opaco */
background-color: hsla(50, 33%, 25%, 0.75); /* 75% transparente */

/* Valores em chaves especiais */
background-color: currentcolor;
background-color: transparent;

/* Valores globais */
background-color: inherit;
background-color: initial;
background-color: unset;
```

A propriedade `background-color` recebe um único valor [`<color>`](#color).

### Valores

- {{cssxref("&lt;color&gt;")}}
  - : A cor uniforme de fundo. É renderizado atrás de qualquer {{cssxref("background-image")}} especificado, embora a cora ainda continue visible através de qualquer transparência da imagem.

## Acessibilidade

É importante assegurar que o contraste entre a cor de fundo e a cor do texto colocado sobre ele é alta o suficiente para pessoas com condições de baixa visão possam ler o conteúdo da página.

A cor do contrast é determinada comparando a luminância da cor do texto e da cor de fundo. Para atender às atuais [Diretrizes de Acessibilidade de Conteúdo da Web (WCAG)](https://www.w3.org/WAI/intro/wcag), uma proporção de 4.5:1 é necessária para conteúdo de texto e 3:1 para textos maiores como títulos. Texto grande é definido como 18.66px e negrito ou maior, ou 24px ou maior.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Guideline 1.4 explanations](/pt-BR/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Definição formal

{{cssinfo}}

## Sintaxe formal

{{csssyntax}}

## Exemplos

### HTML

```html
<div class="exampleone">Lorem ipsum dolor sit amet, consectetuer</div>

<div class="exampletwo">Lorem ipsum dolor sit amet, consectetuer</div>

<div class="exemplothree">Lorem ipsum dolor sit amet, consectetuer</div>
```

### CSS

```css
.exampleone {
  background-color: teal;
  color: white;
}

.exampletwo {
  background-color: rgb(153, 102, 153);
  color: rgb(255, 255, 204);
}

.examplethree {
  background-color: #777799;
  color: #ffffff;
}
```

### Result

{{EmbedLiveSample("Examples", 200, 150)}}

## Especificações

| Specification                                                                      | Comment                                                                                                                                                | Feedback                                                                                          |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Backgrounds', '#background-color', 'background-color')}}          | Though technically removing the `transparent` keyword, this doesn't change anything as it has been incorporated as a true {{cssxref("&lt;color&gt;")}} | [Backgrounds Level 3 GitHub issues](https://github.com/w3c/csswg-drafts/labels/css-backgrounds-3) |
| {{SpecName('CSS2.1', 'colors.html#propdef-background-color', 'background-color')}} |                                                                                                                                                        |                                                                                                   |
| {{SpecName('CSS1', '#background-color', 'background-color')}}                      | Initial definition                                                                                                                                     |                                                                                                   |

## Compatibilidade com navegadores

{{Compat("css.properties.background-color")}}

## Veja também

- [Multiple backgrounds](/pt-BR/docs/Web/CSS/CSS_Background_and_Borders/Using_CSS_multiple_backgrounds)
- The {{cssxref("&lt;color&gt;")}} data type
- Other color-related properties: {{cssxref("color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, and {{cssxref("column-rule-color")}}
- [Applying color to HTML elements using CSS](/pt-BR/docs/Web/HTML/Applying_color)
