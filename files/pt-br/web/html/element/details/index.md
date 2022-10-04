---
title: details
slug: Web/HTML/Element/details
translation_of: Web/HTML/Element/details
---
## Sumário

O elemento HTML _details_ (`<details>`) é usado como uma ferramenta de onde o usuário irá obter informações adicionais.

## Contexto de uso

| Conteúdo permitido        | Um elemento {{ HTMLElement("summary") }} seguido por [flow content](/en/HTML/Content_categories#Flow_content) |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Omissão de tag            | Nenhuma, tanto as tas iniciais quanto as finais são obrigatórias.                                                                                               |
| Elementos pais permitidos | Qualquer elemento que aceite flow content.                                                                                                                      |
| Documento normativo       | [HTML5, section 4.11.1](http://www.whatwg.org/specs/web-apps/current-work/multipage/interactive-elements.html#the-details-element)                              |

## Atributos

Como todos os elementos HTML, esse elemento aceita os [global attributes](/en/HTML/Global_attributes).

- {{ htmlattrdef("open") }}
  - : Esse atributo Booleano indica se os detalhes serão mostrados para o usuário ao carregar a página. Se omitido os detalhes não serão mostrados.

## Interface do DOM

Esse elemento implemena a interface[`HTMLDetailsElement`](/en/DOM/HTMLDetailsElement).

## Exemplos

```html
<details>
  <summary>Alguns detalhes</summary>
  <p>Mais informações sobre os detalhes.</p>
</details>
```

### Demonstração

[Demo](http://html5-demos.appspot.com/static/html5-whats-new/template/index.html#5)

## Compatibilidade com navegadores

{{Compat("html.elements.details")}}

## Veja também

- {{ HTMLElement("summary") }}

{{ languages({ "en": "en/HTML/Element/details", "ja": "ja/HTML/Element/details" }) }}
