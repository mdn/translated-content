---
title: <acronym>
slug: Web/HTML/Element/acronym
---

## Resumo

O Elemento HTML Acrônimo (`<acronym>)` permite à autores claramente indicar que uma seqüência de caracteres compõe um acrônimo ou uma abreviação de uma palavra.

> **Note:** Este elemento foi removido no HTML5 e não deve ser usado mais. Ao invés dele, desenvolvedores devem usar o elemento {{HTMLElement("abbr")}}.

## Atributos

Este elemento não possui qualquer outro atributo além dos [atributos globais](/pt-BR/docs/HTML/global_attributes), comuns à todos os elementos.

## Interface DOM

Este elemento implementa a interface {{domxref('HTMLElement')}}.

> **Note:** **Nota de implementação:** Após o Gecko 1.9.2 inclusive, Firefox implementa a interface {{domxref('HTMLSpanElement')}} para este elemento.

## Exemplo

```html
<p>
  A <acronym title="World Wide Web">WWW</acronym> é somente um dos componentes
  da Internet.
</p>
```

## Estilo padrão

Embo is purely for the convenira o propósito desta tag seja meramente a conveniência dos autores, seu estilo padrão varia entre diferentes navegadores:

- Alguns navegadores, como o Internet Explorer, não criam qualquer estilo diferente do de um elemento {{HTMLElement("span")}}.
- Opera, Firefox, e alguns outros adicionam um sublinhado pontilhado no conteúdo do elemento.
- Alguns poucos navegadores não somente adicionam um sublinhado pontilhado, mas também colocam o conteúdo em versalete (small caps); para evitar este estilo, adicione algo como {{cssxref('font-variant')}}`: none` no CSS que cuida deste caso.

É portanto fortemente recomendado que autores web não confiem no estilo padrão do navegador para este elemento.

## Compatibilidade de navegadores

{{Compat("html.elements.acronym")}}

## Ver também

- O elemento HTML {{HTMLElement("abbr")}}

{{HTMLSidebar}}
