---
title: details
slug: Web/HTML/Element/details
---

## Sumário

O elemento HTML _details_ (`<details>`) é usado como uma ferramenta de onde o usuário irá obter informações adicionais.

## Contexto de uso

| Conteúdo permitido        | Um elemento {{ HTMLElement("summary") }} seguido por [flow content](/pt-BR/docs/HTML/Content_categories#flow_content)               |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Omissão de tag            | Nenhuma, tanto as tas iniciais quanto as finais são obrigatórias.                                                                   |
| Elementos pais permitidos | Qualquer elemento que aceite flow content.                                                                                          |
| Documento normativo       | [HTML5, section 4.11.1](https://www.whatwg.org/specs/web-apps/current-work/multipage/interactive-elements.html#the-details-element) |

## Atributos

Como todos os elementos HTML, esse elemento aceita os [global attributes](/pt-BR/docs/HTML/Global_attributes).

- `open`
  - : Esse atributo Booleano indica se os detalhes serão mostrados para o usuário ao carregar a página. Se omitido os detalhes não serão mostrados.

## Interface do DOM

Esse elemento implementa a interface[`HTMLDetailsElement`](/pt-BR/docs/DOM/HTMLDetailsElement).

## Exemplos

```html
<details>
  <summary>Alguns detalhes</summary>
  <p>Mais informações sobre os detalhes.</p>
</details>
```

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{ HTMLElement("summary") }}
