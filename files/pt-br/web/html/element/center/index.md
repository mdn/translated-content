---
title: "<center>: O elemento de texto centralizado (obsoleto)"
slug: Web/HTML/Element/center
---

O elemento **Center do HTML** (**`<center>`**) se tornou obsoleto, é um [elemento de nível de bloco](/pt-BR/docs/Web/HTML/Elementos_block-level) que exibe o conteúdo em nível de bloco ou em linha centralizado horizontalmente dentro do elemento que o contém. O contêiner {{HTMLElement ("body")}} geralmente está presente, mas não é necessário. Essa tag foi descontinuada no HTML 4 (e XHTML 1) em favor da propriedade CSS {{Cssxref ("text-align")}}, que pode ser aplicada ao elemento {{HTMLElement ("div")}} ou à um paragráfo indivídual {{HTMLElement ("p")}}. Para blocos de centralização, use outras propriedades CSS como {{Cssxref ("margin-left")}} e {{Cssxref ("margin-right")}} e defina-as como `auto` (ou defina {{Cssxref ("margin") }} para `0 auto`).

## Interface DOM

Este elemento implementa a interface {{domxref("HTMLElement")}}.

> **Note:** **Nota de implementação:** até o Gecko 1.9.2 inclusive, o Firefox implementa a interface {{domxref("HTMLSpanElement")}} para este elemento.

## Exemplo 1

```html
<center>
  Esse texto vai ficar centralizado.
  <p>Este parágrafo também.</p>
</center>
```

O efeito da centralização vai acontecer até onde o elemento `center` for fechado.

## Exemplo 2 (Alternativa CSS)

```html
<div style="text-align:center">
  Esse texto vai ficar centralizado.
  <p>Este parágrafo também.</p>
</div>
```

Isso acontece por os textos que sofreram as alterações estão dentro dos elementos que foi aplicado a propriedade.

## Exemplo 3 (Alternativa CSS)

```html
<p style="text-align:center">
  Essa linha vai ficar centralizada.<br />
  E esta linha também.
</p>
```

## Nota

Aplicar {{Cssxref("text-align")}}`:center` a um elemento {{HTMLElement("div")}} ou {{HTMLElement("p")}} centraliza o _conteúdo_ desses elementos, deixando suas dimensões gerais inalteradas.

## Compatibilidade com navegadores

{{Compat("html.elements.center")}}

Apesar de obsoleto, o elemento é aceito em todos os navegadores do mercado.

## Veja também

- {{Cssxref("text-align")}}
- {{Cssxref("display")}}

{{HTMLSidebar}}
