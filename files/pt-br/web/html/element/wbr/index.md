---
title: <wbr>
slug: Web/HTML/Element/wbr
---

## Resumo

O elemento HTML `<wbr>` representa uma posição no texto onde o navegador pode, opcionalmente, quebrar uma linha, embora suas regras de quebra de linha de outra forma não criar uma ruptura naquele local.

Em UTF-8 páginas codificadas, `<wbr>` se comporta como o `U+200B de tamanho zero ESPAÇO` ponto de código. Em particular, ele se comporta como um bidi Unicode BN ponto de código, o que significa que não tem efeito sobre bidi-encomenda: `<div dir=rtl> 123, <wbr> 456 </ div>` exibe, quando não quebrado em duas linhas, `123.456` e Não `456,123` .

Pela mesma razão, o `<wbr>` elemento não introduzir um hífen no ponto de quebra de linha. Para fazer um hífen só aparecem no final de uma linha, use a entidade suave caractere hífen ( `&shy;` ) em seu lugar.

Este elemento foi implementado pela primeira vez no Internet Explorer 5.5 e foi oficialmente definido no HTML5.

## Contexto de uso

| Permitida conteúdo       | Vazio                                                                                                    |
| ------------------------ | -------------------------------------------------------------------------------------------------------- |
| Tag omissão              | Este é um elemento vazio; ele deve ter uma marca de início, mas não deve ter uma tag de fechamento.      |
| Elementos pai permitidas | Qualquer elemento que aceita [conteúdo fraseado](/pt-BR/docs/HTML/Content_categories#Phrasing_content) . |
| Documento normativo      | [HTML 5, seção 4.6.24](https://dev.w3.org/html5/spec/text-level-semantics.html#the-wbr-element)          |

## Atributos

Este elemento só inclui os [atributos globais](/pt-BR/docs/HTML/Global_attributes).

## DOM interface

Este elemento implementa o [HTMLElement](/pt-BR/docs/DOM/HTMLElement) interface.

## Exemplo

[O Guia de Estilo Yahoo](https://styleguide.yahoo.com/) recomenda [quebrar uma URL _antes de_ pontuação](https://styleguide.yahoo.com/editing/treat-abbreviations-capitalization-and-titles-consistently/website-names-and-addresses) , para não deixar uma marca de pontuação no final da linha, o que o leitor pode confundir com o fim da URL.

```html
<p>
  https://this<wbr />.is<wbr />.a<wbr />.really<wbr />.long<wbr />.example<wbr />.com/With<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages
</p>
```

{{EmbedLiveSample ("Exemplo")}}

## Compatibilidade com navegadores

{{Compat("html.elements.wbr")}}
