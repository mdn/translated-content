---
title: <marquee>
slug: Web/HTML/Reference/Elements/marquee
original_slug: Web/HTML/Element/marquee
---

{{HTMLSidebar}}

O elemento html \<marquee> é usado para inserir uma área de rolagem de texto"scrolling" , similar a um letreiro. Você pode controlar o comportamento do conteúdo fornecendo alguns atributos extras.

## Atributos

- `behavior`
  - : Define como o texto é rolado dentro da área do letreiro. Os valores possíveis são scroll, slide e alternate. Se nenhum valor for especificado, o valor padrão será scroll.
- `bgcolor`
  - : Define a cor do plano de fundo do letreiro através do nome da cor (ex: red, blue) ou de um valor hexadecimal.
- `direction`
  - : Define a direção da rolagem do texto dentro do letreiro, os possíveis valores são: left, right, up & down. Se nenhum valor for especificado, o valor padrão será "left".
- `height`
  - : Define a altura do letreiro em pixeis ou em um valor percentual.
- `hspace`
  - : Aplica a margem horizontal.
- `loop`
  - : Define o número de repetições da animação do letreiro. Se nenhum valor for especificado assumirá o valor padrão de -1, que significa que a animação será repetida infinitamente.
- `scrollamount`
  - : Define em pixeis o tamanho de rolagem em cada intervalo, o valor padrão é 6.
- `scrolldelay`
  - : Define o intervalo de tempo entre cada animação de rolagem em milissegundos. O valor padrão é 85. Qualquer valor menor que 60 será ignorado e o valor 60 será usado, a menos que seja especificado como truespeed.
- `truespeed`
  - : Por padrão, valores abaixo de 60 milissegundos são ignorados, a menos que o valor truespeed esteja presente, caso esteja estes valores são aceitos.
- `vspace`
  - : Aplica uma margem vertical em pixeis ou em valor percentual.
- `width`
  - : Define a largura em pixeis ou em um valor percentual.

## Event Handlers

- `onbounce`
  - : Dispara quando o letreiro alcança o final da sua posição de rolagem. Ele apenas dispara quando o comportamento está configurado como `alternate.`
- `onfinish`
  - : Dispara quando o letreiro terminar a quantidade de repetições definida pelo atributo loop. Só pode disparar quando o atributo loop estiver definido para algum número maior que 0, obviamente.
- `onstart`
  - : Dispara quando o letreiro começa a se mover.

## Métodos

- `start()`
  - : Começa a mover o letreiro.
- `stop()`
  - : Para de mover o letreiro.

## Exemplos

```
<marquee>Este texto vai "rolar" da direita para esquerda</marquee>

<marquee direction="up">Este texto vai rolar de baixo para cima.</marquee>

<marquee direction="down" width="250" height="200" behavior="alternate" style="border:solid">
  <marquee behavior="alternate">
    Este texto vai pular
  </marquee>
</marquee>
```
