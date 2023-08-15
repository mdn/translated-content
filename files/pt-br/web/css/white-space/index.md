---
title: white-space
slug: Web/CSS/white-space
---

{{CSSRef}}

## Resumo

A propriedade CSS white-space é usada para descrever como os espaços em branco dentro dos elementos são manipulados.

{{cssinfo}}

## Sintaxe

```
Formal syntax: {{csssyntax("white-space")}}
```

```
white-space: normal
white-space: nowrap
white-space: pre
white-space: pre-wrap
white-space: pre-line

white-space: inherit
```

### Valores

- `normal`
  - : Sequências de espaços em branco são recolhidas. Caracteres de nova linha no código são tratados como outros espaços em branco. As linhas quebram conforme a necessidade para preencher as linhas das caixas (boxes).
- `nowrap`
  - : Recolhe os espaços em branco como no normal, mas suprime as quebras de linha (quebra de texto) no texto.
- `pre`
  - : Sequências de espaço em branco são preservadas, linhas são quebradas apenas em carateres de nova linha no código e em elementos {{HTMLElement("br")}}.
- `pre-wrap`
  - : Sequências de espaço em branco são preservadas. Linhas são quebradas em caracteres de nova linha, em {{HTMLElement("br")}} e quando necessário para preencher as linhas das caixas (boxes).
- `pre-line`
  - : Sequências de espaços em branco são recolhidas. Linhas são quebradas em caracteres de nova linha, em {{HTMLElement("br")}} e quando necessário para preencher as linhas das caixas (boxes).

A tabela a seguir resume o comportamento dos valores para white-space:

|            | Novas linhas | Espaços e Tabulações (tabs) | Quebra de texto |
| ---------- | ------------ | --------------------------- | --------------- |
| `normal`   | Recolhido    | Recolhido                   | Quebra          |
| `nowrap`   | Recolhido    | Recolhido                   | Sem quebra      |
| `pre`      | Preservado   | Preservado                  | Sem quebra      |
| `pre-wrap` | Preservado   | Preservado                  | Quebra          |
| `pre-line` | Preservado   | Recolhido                   | Quebra          |

## Exemplos

```css
code {
  white-space: pre;
}
```

## Especificações

| Especificação                                                       | Estado                 | Comentário                                   |
| ------------------------------------------------------------------- | ---------------------- | -------------------------------------------- |
| {{SpecName('CSS3 Text', '#propdef-white-space', 'white-space')}}    | {{Spec2('CSS3 Text')}} | Aumenta a precisão dos algoritmos de quebra. |
| {{SpecName('CSS2.1', 'text.html#white-space-prop', 'white-space')}} | {{Spec2('CSS2.1')}}    | Especificação inicial.                       |

## Compatibilidade de Navegadores

{{Compat("css.properties.white-space")}}

\[1] Internet Explorer 5.5+ suporta {{Cssxref("word-wrap")}}`: break-word;`
O código a seguir permite quebras de linhas dentro de elementos pre:

```css
pre {
  word-wrap: break-word; /* IE 5.5-7 */
  white-space: -moz-pre-wrap; /* Firefox 1.0-2.0 */
  white-space: pre-wrap; /* current browsers */
}
```
