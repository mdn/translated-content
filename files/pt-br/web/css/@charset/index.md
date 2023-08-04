---
title: "@charset"
slug: Web/CSS/@charset
---

{{cssxref("&lt;string&gt;")}}{{ CSSRef() }}

## Resumo

A regra `@charset` especifica a codificação de caracteres utilizada na folha de estilo. Deve ser o primeiro elemento na folha de estilo e não ser precedida de qualquer caráter; uma vez que não é uma declaração aninhada, ele não pode ser usado dentro de um grupo condicional de regras. Se vários `@charset` são definidos, apenas o primeiro é usado, e não pode ser usado dentro de um atributo de estilo em um elemento HTML ou dentro do elemento {{ HTMLElement("style") }}, onde o conjunto de caracteres da página HTML é relevante.

Esta regra at ([at-rule](/pt-BR/CSS/At-rule)) é útil quando se usa caracteres não ASCII em algumas propriedades CSS, como conteúdo.

Como existem várias maneiras de definir a codificação de caracteres em uma folha de estilo, o navegador vai tentar os seguintes métodos na seguinte ordem (e parar assim que um produzir um resultado):

1. O valor do carácter de ordem de [byte Unicode](http://pt.wikipedia.org/wiki/Marca_de_ordem_de_byte) colocado no início do arquivo.
2. O valor dado pelo atributo `charset` do `Content-Type:` cabeçalho HTTP ou o equivalente no protocolo usado para servir a folha de estilo.
3. O `@charset` CSS.
4. Use a codificação de caracteres definidos pelo documento referente: o atributo charset do elemento {{ HTMLElement("link") }}. Este método é obsoleto em HTML5 e não deve ser utilizado.
5. Assume que o documento é UTF-8.

## Sintaxe

```
  @charset charset;
```

onde :

- _charset_
  - : É uma {{cssxref("&lt;string&gt;")}} denotando a codificação de caracteres a ser usado. Ele deve ser o nome de uma codificação de caracteres segura para a Web definido no [registro IANA](http://www.iana.org/assignments/character-sets). Se vários nomes estão associados com uma codificação, apenas um é marcado como _preferido_ e assim ser utilizado.

## Exemplos

```css-nolint
@charset "UTF-8"; /* Define a codificação da folha de estilo para Unicode UTF-8 */
@charset 'iso-8859-15'; /* Define a codificação da folha de estilo para Latin-9 (línguas da Europa Ocidental, com sinal de euro) */
 @charset "UTF-8"; /* Inválido, há um caracter (espaço) antes da regra */
@charset UTF-8; /*  Inválido, sem ‘ ou ", o conjunto de caracteres não é uma {{cssxref("&lt;string&gt;")}} CSS */
```

## Especificações

| Especificação                                            | Status                | Comentário |
| -------------------------------------------------------- | --------------------- | ---------- |
| {{ SpecName('CSS2.1', 'syndata.html#x57', '@charset') }} | {{ Spec2('CSS2.1') }} |            |

## Compatibilidade de navegadores

{{Compat("css.at-rules.charset")}}
