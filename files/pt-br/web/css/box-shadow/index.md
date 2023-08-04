---
title: box-shadow
slug: Web/CSS/box-shadow
---

{{CSSRef}}

O **`box-shadow`** é uma propriedade do CSS, é utilizado para adicionar efeitos de sombra em volta de um elemento. Você pode especificar mais de um efeito, os separando com virgulas.

Uma box-shadow é descrita pelo deslocamentos (offset) X e Y em relação ao elemento, desfoco e propagação do raio e cor.

```css
/* offset-x | offset-y | color */
box-shadow: 60px -16px teal;

/* offset-x | offset-y | blur-radius | color */
box-shadow: 10px 5px 5px black;

/* offset-x | offset-y | blur-radius | spread-radius | color */
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

/* inset | offset-x | offset-y | color */
box-shadow: inset 5em 1em gold;

/* Any number of shadows, separated by commas */
box-shadow:
  3px 3px red,
  -1em 0 0.4em olive;

/* Global keywords */
box-shadow: inherit;
box-shadow: initial;
box-shadow: unset;
```

```css
box-shadow: 60px -16px teal;
```

```css
box-shadow: 10px 5px 5px black;
```

```css
box-shadow:
  3px 3px red,
  -1em 0 0.4em olive;
```

```css
box-shadow: inset 5em 1em gold;
```

```css
box-shadow: 0 0 1em gold;
```

```css
box-shadow: inset 0 0 1em gold;
```

```css
box-shadow:
  inset 0 0 1em gold,
  0 0 1em red;
```

A propriedade box-shadow permite que você adicione uma sombra em quase qualquer elemento. Se um {{cssxref ("border-radius")}} for especificado no elemento com uma box-shadow, a sombra assume os mesmos cantos arredondados. O comando z-ordering de múltiplas box-shadows é o mesmo que múltiplas [text shadows](/pt-BR/CSS/text-shadow) (a primeira sombra especificada está na parte superior).

[Box-shadow generator](/pt-BR/docs/Web/CSS/CSS_Box_Model/Box-shadow_generator) é uma ferrament interativa qu permite a criação de `box-shadow`.

{{cssinfo}}

## Sintaxe

Especificando uma única box-shadow usando:

- Dois, três ou quatro valores para [`<length>`](/pt-BR/docs/Web/CSS/length).

  - Se apenas dois valores forem definidos, eles serão interpretados como valores de [`<offset-x><offset-y>`](#offset-x_<offset-y).
  - Se o terceiro valor for dados, é interpretado como [`<blur-radius>`](#blur-radius).
  - Se o quarto valor for dados, é interpretado como [`<spread-radius>`](#spread-radius).

- Opcionalmente, o atributo [`inset`](#inset).
- Opcionalmente, o valor [`<color>`](#color).

Para especificar mais de uma sombra, separe-as com virgula.

### Valores

- `inset`
  - : Se não for especificado, a sombra ganha o efeito de como se a caixa fosse aumentada acima do conteúdo).
    A presença da palavra-chave `inset` muda a sombra para dentro da moldura (como se o conteúdo estivesse pressionado dentro da caixa). As sombras de inserção são desenhadas dentro da borda (mesmo as transparentes), acima do plano de fundo, mas abaixo do conteúdo.
- `<offset-x>` `<offset-y>`

  - : Existem dois valores {{cssxref("&lt;length&gt;")}} para configurar o desvio (offset) da sombra:

    - `<offset-x>` especifica a distância horizontal. Valores negativos colocarão a sombra à esquerda do elemento.
    - `<offset-y>` especifca a distância vertical. Valores negativos colocam a sombra acima do elemento.

    Consulte {{cssxref("&lt;length&gt;")}} para as unidades disponíveis.

    Se ambos os valores forem `0`, a sombra será posicionada atrás do elemento (e poderá gerar um efeito de desfocagem caso `<blur-radius>` e/ou `<spread-radius>` estiverem configurados).

- `<blur-radius>`

  - : Este é um terceiro valor para {{cssxref("&lt;length&gt;")}}. Quanto maior for este valor, maior o efeito de desfocagem, desta forma a sombra se tornará maior e mais clara. Valores negativos não são permitidos. Se não for especificado, o valor padrão é `0` (os limites da sombra serão retos). A especificação não inclui um algoritmo exato de como o raio de esmaecimento deve ser calculado, no entanto, descreve o seguinte:

    > ...para uma sombra com bordas longas e retas, deverá ser criada uma transição de cor do comprimento da distância de desfocagem que é perpendicular e centralizada com as bordas da sombra, e isto deve variar da cor total da sombra do seu ponto central até totalmente transparente no ponto final fora dela.

- `<spread-radius>`
  - : Este é um quarto valor de {{cssxref("&lt;length&gt;")}}. Valores positivos farão com que a sombra expanda e cresça maior, valores negativos farão com que a sombra encolha. Se não for especificado, o valor padrão é `0` (a sombra terá o mesmo tamanho do elemento)
- `<color>`
  - : Consulte {{cssxref("&lt;color&gt;")}} para possiveis palavras-chave e notações. Se não for especificada, a cor que será utilizada vai depender do navegador - geralmente é o valor da propriedade {{cssxref("color")}}, mas tenha em mente que o Safari atualmente imprime uma sombra transparente neste caso.

### Interpolação

Each shadow in the list (treating `none` as a 0-length list) is interpolated via the color (as color) component, and x, y, blur, and (when appropriate) spread (as length) components. For each shadow, if both input shadows are or are not `inset`, then the interpolated shadow must match the input shadows in that regard. If any pair of input shadows has one `inset` and the other not `inset`, the entire shadow list is uninterpolable. If the lists of shadows have different lengths, then the shorter list is padded at the end with shadows whose color is `transparent`, all lengths are `0`, and whose `inset` (or not) matches the longer list.

### Formal syntax

{{csssyntax}}

## Live examples

- [box-shadow test](http://www.elektronotdienst-nuernberg.de/bugs/box-shadow_inset.html)
- [box-shadow tutorial and examples](http://markusstange.wordpress.com/2009/02/15/fun-with-box-shadows/)
- [Box Shadow CSS Generator](https://cssgenerator.org/box-shadow-css-generator.html)

## Specifications

| Specification                                                 | Status                        | Comment            |
| ------------------------------------------------------------- | ----------------------------- | ------------------ |
| {{SpecName('CSS3 Backgrounds', '#box-shadow', 'box-shadow')}} | {{Spec2('CSS3 Backgrounds')}} | Initial definition |

## Compatibilidade com navegadores

{{Compat("css.properties.box-shadow")}}

## See also

- The {{cssxref("&lt;color&gt;")}} data type
- Other color-related properties: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("caret-color")}}, and {{cssxref("column-rule-color")}}
- [Applying color to HTML elements using CSS](/pt-BR/docs/Web/HTML/Applying_color)
