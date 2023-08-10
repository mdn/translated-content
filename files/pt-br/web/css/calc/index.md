---
title: calc()
slug: Web/CSS/calc
---

{{CSSRef}}

A função **`calc()`** [CSS](/pt-BR/docs/Web/CSS) permite você executar cálculos quando especificar os valores de propriedades no CSS. Pode ser utilizada em qualquer lugar , como {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, {{cssxref("&lt;angle&gt;")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;number&gt;")}}, e {{cssxref("&lt;integer&gt;")}} é permitido.

```css
/* propriedade: calc(expressão) */
width: calc(100% - 80px);
```

## Syntax

A função `calc()` recebe uma simples expressão como parâmetro e o resultado desta expressão é utilizado como valor. Pode ser uma simples expressão, combinando os seguintes operadores, utilizando padrão [operator precedence rules](/pt-BR/docs/Learn/JavaScript/First_steps/Math#Operator_precedence):

- `+`
  - : Adição.
- `-`
  - : Subtração.
- `*`
  - : Multiplicação. Pelo menos um dos argumentos deve ser um {{cssxref("&lt;number&gt;")}}.
- `/`
  - : Divisão. O operador da direita deve ser um {{cssxref("&lt;number&gt;")}}.

Os operandos na expressão podem ser qualquer valor de sintaxe {{cssxref ("&lt;length&gt;")}}. Você pode usar unidades diferentes para cada valor em sua expressão, se desejar. Você também pode usar parênteses para estabelecer a ordem de computação quando necessário.

### Notas

- Divisão por 0 (zero) resulta em um erro gerado pelo HTML parser.
- Os operadores + e - devem estar cercados por **espaço em branco**. Por exemplo, calc (50% -8px) será analisado como uma porcentagem seguida por um comprimento negativo - uma expressão inválida — enquanto calc (50% - 8px) é uma porcentagem seguida por um operador de subtração e um comprimento. Da mesma forma, calc (8px + -50%) é tratado como um comprimento seguido por um operador de adição e uma porcentagem negativa.
- Os operadores `*` e `/` não requerem espaço em branco, mas adicioná-lo para consistência é permitido e recomendado.
- Expressões matemáticas envolvendo porcentagens de larguras e alturas em colunas de tabela, grupos de coluna de tabela, linhas de tabela, grupos de linhas de tabela e células de tabela em tabelas de layout automáticas e fixas podem ser tratadas como se `auto` tivesse sido especificado.
- É permitido aninhar funções `calc ()`, em cujo caso as internas são tratadas como parênteses simples.

### Formal syntax

{{csssyntax}}

## Exemplos

### Posicionando um objeto na tela usando margin

`calc()` torna mais fácil posicionar um objeto com uma margem definida. Nesse exemplo, o CSS cria um banner que se estende pela janela, com um espaço de 40px entre os dois lados do banner e das bordas da janela:

```css
.banner {
  position: absolute;
  left: 40px;
  width: calc(100% - 80px);
  border: solid black 1px;
  box-shadow: 1px 2px;
  background-color: yellow;
  padding: 6px;
  text-align: center;
  box-sizing: border-box;
}
```

```html
<div class="banner">This is a banner!</div>
```

{{EmbedLiveSample('Positioning_an_object_on_screen_with_a_margin', 'auto', '60')}}

### Dimensionar campos de formulário automaticamente para caber em seu contêiner

Outro caso para `calc()` é ajudar a garantir que os campos do formulário caibam no espaço disponível, sem expandir para além da borda do seu contêiner, enquanto mantém uma margem apropriada.

Veja-mos no CSS:

```css
input {
  padding: 2px;
  display: block;
  width: calc(100% - 1em);
}

#formbox {
  width: calc(100% / 6);
  border: 1px solid black;
  padding: 4px;
}
```

Aqui, o próprio formulário é estabelecido para utilizar 1/6 da largura da janela disponível. Então, para garantir que os campos de entrada mantenham um tamanho apropriado, utilizamos `calc()` novamente para estabelecer que eles devem ter a largura de seu contêiner menos 1em. Então, o seguinte HTML utiliza este CSS:

```html
<form>
  <div id="formbox">
    <label>Type something:</label>
    <input type="text" />
  </div>
</form>
```

{{EmbedLiveSample('Automatically_sizing_form_fields_to_fit_their_container', '700', '80')}}

### calc( ) inserido em variáveis de CSS

Você também pode utilizar `calc()` com [variáveis de CSS](/pt-BR/docs/Web/CSS/CSS_Variables). Considere o seguinte código:

```css
.foo {
  --widthA: 100px;
  --widthB: calc(var(--widthA) / 2);
  --widthC: calc(var(--widthB) / 2);
  width: var(--widthC);
}
```

Depois que todas as variáveis forem expandidas, o valor de `widthC` será `calc( calc( 100px / 2) / 2)`, então quando for atribuído à propriedade de largura `.foo`, todos os `calc()` internos (não importa o quão profundamente atribuídos) serão nivelados para apenas parênteses, de modo que o valor da propriedade `width` será eventualmente `calc( ( 100px / 2) / 2)`, i.e. `25px`. Resumindo: um `calc()` dentro de um `calc()` é idêntico à parênteses.

## Questões de acessibilidade

Quando `calc()` é usado para controlar o tamanho do texto, certifique-se de que um dos valores inclui uma [unidade de comprimento relativo](/pt-BR/docs/Web/CSS/length#Relative_length_units), por exemplo:

```css
h1 {
  font-size: calc(1.5rem + 3vw);
}
```

Isso garante que o tamanho do texto será redimensionado se a página for ampliada.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/pt-BR/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Especificações

| Especificação                                           | Status                   | Comentário        |
| ------------------------------------------------------- | ------------------------ | ----------------- |
| {{SpecName('CSS3 Values', '#calc-notation', 'calc()')}} | {{Spec2('CSS3 Values')}} | Definição inicial |

## Compatibilidade com navegadores

{{Compat("css.types.calc")}}

## Veja também

- [Firefox 4: CSS3 calc() ✩ Mozilla Hacks – the Web developer blog](https://hacks.mozilla.org/2010/06/css3-calc/)
