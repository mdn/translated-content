---
title: <time>
slug: Web/HTML/Element/time
---

## Resumo

O elemento HTML _time_ (`<time>`) representa o tempo tanto no formato de 24 horas ou como uma data precisa no calendário Gregoriano (com informações opcionais de tempo e fuso horário)

Este elemento é destinado a apresentar datas e horas no dispositivo em um formato legível. Isto pode ser útil aos agentes do usuário em oferecer qualquer programação de eventos ao calendário do utilizador.

> **Note:** **Notas de uso:** Este elemento não é adequado por exemplo, quando uma data específica não pode ser calculada, e nem deveria ser utilizado em datas anteriores ao calendário Gregoriano (devido as complicações com os cálculos dessas datas).

> **Note:** **Nota de estatus:** Este elemento foi concebido e está em discussão desde 2011 (<http://blog.whatwg.org/weekly-time-data>)

## Contexto de uso

| [Categorias de conteúdo](/pt-BR/docs/HTML/Content_categories) | [flow content](/pt-BR/docs/HTML/Content_categories#Flow_content), [phrasing content](/pt-BR/docs/HTML/Content_categories#Phrasing_content) |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Permitted content                                             | [Phrasing content](/pt-BR/docs/HTML/Content_categories#Phrasing_content), but no descendant `time` elements.                               |
| Tag omission                                                  | None, both the start tag and the end tag are mandatory.                                                                                    |
| Permitted parent elements                                     | Any element that accepts phrasing content.                                                                                                 |
| Normative document                                            | [HTML5, section 4.6.10](http://www.whatwg.org/specs/web-apps/current-work/multipage/text-level-semantics.html#the-time-element)            |

## Atributos

Como todo outro elemento HTML, este elemento suporta os [atributos globais](/pt-BR/docs/HTML/Global_attributes).

- {{htmlattrdef("datetime")}}
  - : Esse atributo indica a hora e a data do elemento e deve ser uma data válida com uma string de tempo opcional. Se o valor não puder ser analisado como uma data com uma string de tempo opcional, o elemento não possui um timestamp associado.
- {{htmlattrdef("pubdate")}}
  - : (This feature is still being discussed by the WHATWG and the W3C HTML5 Working Group.) This Boolean attribute specifies that the date and time given by the element is the publication date of a document. The document it applies to is either the nearest ancestor article element or the document as a whole (if there is no ancestor [article](/pt-BR/docs/HTML/Element/article) element). If true, the `time` element must have a corresponding date. Additionally, each `time` element indicating a publication date must be the only `time` element that does so for that document.

## DOM interface

This element implements the [`HTMLTimeElement`](/pt-BR/docs/DOM/HTMLTimeElement) interface.

## Exemplos

### Simple example

```html
<p>The concert starts at <time>20:00</time>.</p>
```

Above HTML will output:

The concert starts at 20:00.

### `pubdate` example

```html
<article>
  <p>This article was created on <time pubdate>2011-01-28</time>.</p>
</article>
```

Above HTML will output:

This article was created on 2011-01-28.

### `datetime` example

```html
<p>
  The concert took place on <time datetime="2001-05-15 19:00">May 15</time>.
</p>
```

Above HTML will output:

The concert took place on May 15.

## Compatibilidade

{{Compat("html.elements.time")}}

## Veja também

- [The `time` element](http://www.whatwg.org/specs/web-apps/current-work/#the-time-element) (HTML5 specification)
