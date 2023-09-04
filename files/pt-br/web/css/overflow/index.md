---
title: overflow
slug: Web/CSS/overflow
---

{{ CSSRef() }}

## Resumo

A propriedade `overflow` especifica quando o conteúdo de um elemento de nível de bloco deve ser cortado, exibido com barras de rolagem ou se transborda do elemento.

O uso da propriedade `overflow` com valor diferente de `visible` (seu valor padrão), criará um novo [contexto de formatação de bloco](/pt-BR/docs/CSS/block_formatting_context). Isto é tecnicamente necessário para evitar que um conteúdo flutuante que entre em contato com o objeto dentro da área de rolamento e quebre as linhas do conteúdo para ajustar a disposição do texto. A quebra das linhas ocorre sempre que a barra de rolagem é utilizada, tornando a experiência de rolagem lenta.

> **Nota:** Ao definir a propredade `scrollTop` para o `elemento` HTML relevante, mesmo que o valor de `overflow` seja `hidden`, o conteúdo ainda pode precisar rolar.

{{cssinfo}}

## Sintaxe

```
overflow:  visible | hidden | scroll | {{ cssxref("auto") }} | {{ cssxref("inherit") }}
```

### Valores

- `visible`
  - : Valor padrão. O conteúdo não é cortado e pode ser renderizado para fora da caixa de conteúdo.
- `hidden`
  - : O conteúdo é cortado e nenhuma barra de rolagem é exibida.
- `scroll`
  - : O conteúdo é acessível através de barras de rolagem que são exibidas mesmo que o conteúdo não precise. Isso evita o problema de barras de rolagem aparecendo e desaparecendo quando o conteúdo é dinâmico. Impressoras podem imprimir o conteúdo vazado.
- `auto`
  - : Depende do navegador utilizado. Navegadores desktop como o Firefox geralmente exibem barras de rolagem apenas quando necessário.

#### Extensões da Mozilla

- `-moz-scrollbars-none`
  - : Use `overflow:hidden` no lugar.
- `-moz-scrollbars-horizontal` {{ Deprecated_inline() }}
  - : O uso de {{ Cssxref("overflow-x") }} e {{ Cssxref("overflow-y") }} é preferido.
- `-moz-scrollbars-vertical` {{ Deprecated_inline() }}
  - : O uso de {{ Cssxref("overflow-x") }} e {{ Cssxref("overflow-y") }} é preferido.
- \-moz-hidden-unscrollable {{ non-standard_inline() }}
  - : É mantido principalmente para uso interno e por temas. Desabilita o rolamento de elementos raiz de XML e `<html>`, `<body>` mediante o uso das setas do teclado ou scroll do mouse.

## Exemplos

```css
p {
  width: 12em;
  border: dotted;
  overflow: visible; /* Exibe o conteúdo de forma vazada, fora da caixa de conteúdo */
}
```

`visible` (default)
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

```
p { overflow: hidden; /* Esconde o conteúdo excedente */ }
```

`overflow: hidden`
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

```
p { overflow: scroll; /* Sempre exibe barras de rolagem */ }
```

`overflow: scroll`
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

```
p { overflow: auto; /* Exibe barras de rolagem apenas se necessário */ }
```

`overflow: auto`
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

## Especificações

| Especificação                                                | Status                  | Comment        |
| ------------------------------------------------------------ | ----------------------- | -------------- |
| {{ SpecName('CSS3 Box', '#overflow1', 'overflow') }}         | {{ Spec2('CSS3 Box') }} | Sem alteração. |
| {{ SpecName('CSS2.1', 'visufx.html#overflow', 'overflow') }} | {{ Spec2('CSS2.1') }}   |                |

## Compatibilidade com navegadores

{{Compat("css.properties.overflow")}}

## Veja também

- Propriedades CSS relacionadas: {{ cssxref("text-overflow") }}, {{ cssxref("white-space") }}, {{ Cssxref("overflow-x") }}, {{ Cssxref("overflow-y") }}, {{ Cssxref("clip") }}, {{ Cssxref("display") }}
