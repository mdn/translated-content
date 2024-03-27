---
title: <display-internal>
slug: Web/CSS/display-internal
---

{{CSSRef}}

Alguns modelos de layout, como `table` e `ruby` Alguns modelos de layout, como possuem uma estrutura interna complexa, com várias funções diferentes que seus filhos e descendentes podem preencher. Esta página define os valores de exibição "internos", que só têm significado nesse modo de layout específico.

## Sintaxe

Salvo indicação em contrário, o tipo de exibição interno e o tipo de exibição externo de elementos que usam esses valores de exibição são definidos para a palavra-chave fornecida.

- `table-row-group`
  - : Esses elementos se comportam como{{HTMLElement("tbody")}} HTML elementos.
- `table-header-group`
  - : Esses elementos se comportam como{{HTMLElement("thead")}} HTML elementos.
- `table-footer-group`
  - : Esses elementos se comportam como {{HTMLElement("tfoot")}} HTML elementos.
- `table-row`
  - : Esses elementos se comportam como {{HTMLElement("tr")}} HTML elementos.
- `table-cell`
  - : Esses elementos se comportam como {{HTMLElement("td")}} HTML elementos.
- `table-column-group`
  - : Esses elementos se comportam como{{HTMLElement("colgroup")}} HTML elementos.
- `table-column`
  - : Esses elementos se comportam como {{HTMLElement("col")}} HTML elementos.
- `table-caption`
  - : Esses elementos se comportam como{{HTMLElement("caption")}} HTML elementos.
- `ruby-base` {{Experimental_Inline}}
  - : Esses elementos se comportam como{{HTMLElement("rb")}} HTML elementos.
- `ruby-text` {{Experimental_Inline}}
  - : Esses elementos se comportam como {{HTMLElement("rt")}} HTML elementos.
- `ruby-base-container` {{Experimental_Inline}}
  - : Esses elementos se comportam como{{HTMLElement("rbc")}} HTML elementos gerado como caixas anônimas.
- `ruby-text-container` {{Experimental_Inline}}
  - : Esses elementos se comportam como {{HTMLElement("rtc")}} HTML elementos.

## Compatibilidade com navegadores

### Suporte de valores de tabela

`table`, `table-cell`, `table-column`, `table-column-group`, `table-footer-group`, `table-header-group`, `table-row`, and `table-row-group`

{{Compat}}

### Suporte de valores de rubi

`ruby`, `ruby-base`, `ruby-base-container`, `ruby-text`, and `ruby-text-container`

{{Compat}}

## Veja também

- {{CSSxRef("display")}}

  - {{CSSxRef("&lt;display-outside&gt;")}}
  - {{CSSxRef("&lt;display-inside&gt;")}}
  - {{CSSxRef("&lt;display-listitem&gt;")}}
  - {{CSSxRef("&lt;display-box&gt;")}}
  - {{CSSxRef("&lt;display-legacy&gt;")}}
