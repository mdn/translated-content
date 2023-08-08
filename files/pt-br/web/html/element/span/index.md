---
title: <span>
slug: Web/HTML/Element/span
---

## Resumo

O elemento **HTML `<span>` é um conteiner generico em linha para conteúdo fraseado** , que não representa nada por natureza. Ele pode ser usado para agrupar elementos para fins de estilo (usando os atributos `class` ou `id` ), ou para compartilhar valores de atributos como `lang`. Ele deve ser usado somente quando nenhum outro elemento semântico for apropriado. `<span>` é muito parecido com o elemento {{HTMLElement("div")}} , entretando {{HTMLElement("div")}} é um elemento de nível de bloco enquanto `<span>` é um elemento em linha.

## Contexto de Uso

| Categorias de conteúdo   | [Flow content](/pt-BR/docs/HTML/Content_categories#Flow_content), [phrasing content](/pt-BR/docs/HTML/Content_categories#Phrasing_content)                                              |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Conteúdo permitido       | [Phrasing content](/pt-BR/docs/HTML/Content_categories#Phrasing_content)                                                                                                                |
| Omissão de Tag           | Nenhum, deve ter tanto tag de início quanto tag final.                                                                                                                                  |
| Elementos pai permitidos | Qualquer elemento que aceite [phrasing content](/pt-BR/docs/HTML/Content_categories#Phrasing_content), ou [flow content](/pt-BR/docs/HTML/Content_categories#Flow_content).             |
| Padrões de documento     | [HTML5, section 4.6.24](https://www.w3.org/TR/html5/text-level-semantics.html#the-span-element); [HTML 4.01, section 7.5.4](https://www.w3.org/TR/html401/struct/global.html#edef-SPAN) |

## Atributos

Esse elemento inclui apenas os [a](/pt-BR/docs/HTML/Global_attributes)[tributos globais](/pt-BR/docs/HTML/Global_attributes).

## DOM interface

Este elemento implementa a interface [`HTMLSpanElement`](/pt-BR/docs/HTMLSpanElement).

## Exemplos

```html
<p><span>Some text</span></p>
```

### Resultado

Some text

## Especificações

| Specification                                                                           | Status                   | Comment                                                       |
| --------------------------------------------------------------------------------------- | ------------------------ | ------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-span-element', '&lt;span&gt;')}}          | {{Spec2('HTML WHATWG')}} |                                                               |
| {{SpecName('HTML5 W3C', 'text-level-semantics.html#the-span-element', '&lt;span&gt;')}} | {{Spec2('HTML5 W3C')}}   | A interface com o DOM agora é {{domxref("HTMLSpanElement")}}. |
| {{SpecName('HTML4.01', 'struct/global.html#edef-SPAN', '&lt;span&gt;')}}                | {{Spec2('HTML4.01')}}    |                                                               |

## Compatibilidade com navegadores

{{Compat("html.elements.span")}}

## Veja também

- Elemento HTML {{HTMLElement("div")}}

{{HTMLSidebar}}
