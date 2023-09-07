---
title: flex-direction
slug: Web/CSS/flex-direction
---

{{CSSRef}}

A propriedade [CSS](/pt-BR/docs/Web/CSS) **`flex-direction`** define como os itens flexíveis são colocados no contêiner flexível, definindo o eixo principal e a direção (normal ou invertido).

{{EmbedInteractiveExample("pages/css/flex-direction.html")}}

Observe que os valores `row` e `row-reverse` são afetados pela direcionalidade do contêiner flexível. Se seu atributo [`dir`](/pt-BR/docs/Web/HTML/Global_attributes#dir) for **`ltr`**, **`row`** representa o eixo horizontal orientado da esquerda para a direita, e `row-reverse` está orientado da direita para esquerda; Se seu atributo **`rtl`**, **`row`** representa o eixo orientado da direita para a esquerda e `row-reverse` da esquerda para a direita.

## Syntax

```css
/* The direction text is laid out in a line */
flex-direction: row;

/* Like <row>, but reversed */
flex-direction: row-reverse;

/* The direction in which lines of text are stacked */
flex-direction: column;

/* Like <column>, but reversed */
flex-direction: column-reverse;

/* Global values */
flex-direction: inherit;
flex-direction: initial;
flex-direction: unset;
```

### Valores

Os seguintes valores são aceitos:

- `row`
  - : O eixo principal do flex container é definido para ser o mesmo que a direção do texto. Os **pontos de** **início** e **término** principais são iguais à direção do conteúdo.
- `row-reverse`
  - : Se comporta da mesma forma que `row` porém os **pontos de início** e **término** serão invertidos (permutados).
- `column`
  - : O eixo principal do flex container é igual ao eixo do bloco. Os **pontos de início** e **término** principais são iguais aos pontos de antes e depois do modo de escrita.
- `column-reverse`
  - : Se comporta da mesma forma que `column` porém os **pontos de início** e **término** serão invertidos (permutados).

### Formal syntax

{{csssyntax}}

## Example

### HTML

```html
<h4>This is a Column-Reverse</h4>
<div id="content">
  <div class="box" style="background-color:red;">A</div>
  <div class="box" style="background-color:lightblue;">B</div>
  <div class="box" style="background-color:yellow;">C</div>
</div>
<h4>This is a Row-Reverse</h4>
<div id="content1">
  <div class="box1" style="background-color:red;">A</div>
  <div class="box1" style="background-color:lightblue;">B</div>
  <div class="box1" style="background-color:yellow;">C</div>
</div>
```

### CSS

```css
#content {
  width: 200px;
  height: 200px;
  border: 1px solid #c3c3c3;
  display: flex;
  flex-direction: column-reverse;
}

.box {
  width: 50px;
  height: 50px;
}

#content1 {
  width: 200px;
  height: 200px;
  border: 1px solid #c3c3c3;
  display: flex;
  flex-direction: row-reverse;
}

.box1 {
  width: 50px;
  height: 50px;
}
```

### Result

{{EmbedLiveSample('Example', '', '300', '', 'Web/CSS/flex-direction')}}

## Accessibility Concerns

Usar a propriedade `flex-direction` com o valores de `row-reverse` or `column-reverse` vai criar uma desconexão entre a apresentação visual do conteúdo e a ordem do DOM. Isso afetará adversamente os usuários com problemas de visão navegando com o auxílio de tecnologia assistiva, como um leitor de tela. Se a oredem visual (CSS) for importante, os usuários de leitores de tela não terão acesso à ordem de leitura correta.

- [Flexbox & the keyboard navigation disconnect — Tink](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/)
- [Source Order Matters | Adrian Roselli](http://adrianroselli.com/2015/09/source-order-matters.html)
- [MDN Understanding WCAG, Guideline 1.3 explanations](/pt-BR/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.3_%E2%80%94_Create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)

## Specifications

| Specification                                                     | Status                    | Comment            |
| ----------------------------------------------------------------- | ------------------------- | ------------------ |
| {{SpecName('CSS3 Flexbox', '#flex-direction', 'flex-direction')}} | {{Spec2('CSS3 Flexbox')}} | Initial definition |

{{cssinfo}}

## Compatibilidade com navegadores

{{Compat("css.properties.flex-direction")}}

## See also

- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS Flexbox Guide: _[Ordering flex items](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)_
