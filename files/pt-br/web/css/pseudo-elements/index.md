---
title: Pseudo-elementos
slug: Web/CSS/Pseudo-elements
---

{{ CSSRef() }}Um **pseudo-elemento** CSS é uma palavra-chave adicionada a um seletor que permite que você estilize uma parte específica do elemento selecionado. Por exemplo, o pseudo-elemento {{CSSxRef("::first-line")}} aplica o estilo apenas na primeira linha de um parágrafo.

```css
/* A primeira linha de todo elemento <p>. */
p::first-line {
  color: blue;
  text-transform: uppercase;
}
```

> **Nota:** Diferentemente dos pseudo-elementos, {{cssxref("pseudo-classes")}} podem ser utilizadas para estilizar um elemento baseado em seu _estado_.

## Sintaxe

```
seletor::pseudo-elemento {
  propriedade: valor;
}
```

Você pode utilizar apenas um pseudo-elemento em um seletor. Ele deve aparecer depois da declaração de um elemento simples.

> **Nota:** Como regra, os dois pontos devem ser usados duas vezes (`::`) ao invés de uma única vez (`:`). Isso distingue pseudo-classes de pseudo-elementos. Apesar disso, devido a essa distinção não estar presente em versões mais antigas da especificação da W3C, a maioria dos navegadores suportam ambas as sintaxes para os pseudo-elementos originais.

## Índice de pseudo-elementos comuns

- {{ Cssxref("::after") }}
- {{ Cssxref("::before") }}
- {{ cssxref("::cue")}}
- {{ Cssxref("::first-letter") }}
- {{ Cssxref("::first-line") }}
- {{ Cssxref("::selection") }}
- {{ Cssxref("::slotted") }}
- {{ Cssxref("::backdrop") }} {{experimental_inline}}
- {{ Cssxref("::placeholder") }} {{experimental_inline}}
- {{ Cssxref("::marker") }} {{experimental_inline}}
- {{ Cssxref("::spelling-error") }} {{experimental_inline}}
- {{ Cssxref("::grammar-error") }} {{experimental_inline}}

<table class="standard-table">
  <tbody>
    <tr>
      <th>Navegador</th>
      <th>Versão mais baixa</th>
      <th>Suporte de</th>
    </tr>
    <tr>
      <td rowspan="2">Internet Explorer</td>
      <td>8.0</td>
      <td><code>:pseudo-element</code></td>
    </tr>
    <tr>
      <td>9.0</td>
      <td><code>:pseudo-element ::pseudo-element</code></td>
    </tr>
    <tr>
      <td rowspan="2">Firefox (Gecko)</td>
      <td>1.0 (1.0)</td>
      <td><code>:pseudo-element</code></td>
    </tr>
    <tr>
      <td>1.0 (1.5)</td>
      <td><code>:pseudo-element ::pseudo-element</code></td>
    </tr>
    <tr>
      <td rowspan="2">Opera</td>
      <td>4.0</td>
      <td><code>:pseudo-element</code></td>
    </tr>
    <tr>
      <td>7.0</td>
      <td><code>:pseudo-element ::pseudo-element</code></td>
    </tr>
    <tr>
      <td>Safari (WebKit)</td>
      <td>1.0 (85)</td>
      <td><code>:pseudo-element ::pseudo-element</code></td>
    </tr>
  </tbody>
</table>

## Ver também

- [pseudo-classes](/pt-BR/docs/Web/CSS/Pseudo-classes)
