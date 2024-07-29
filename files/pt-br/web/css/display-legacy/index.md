---
title: <display-legacy>
slug: Web/CSS/display-legacy
---

{{CSSRef}}

O CSS 2 usou uma sintaxe de palavra-chave única para o `display` , exigindo palavras-chave separadas para variantes em nível de bloco e em linha do mesmo modo de layout. Esta página detalha esses valores.

## Sintaxe

- `inline-block`

  - : O elemento gera uma caixa de elemento de bloco que fluirá com o conteúdo circundante, como se fosse uma única caixa embutida (se comportando como um elemento substituído).

    É equivalente a `inline flow-root`.

- `inline-table`

  - : O `inline-table` O valor não possui um mapeamento direto em HTML. Ele se comporta como um HTML{{HTMLElement("table")}} elemento, mas como uma caixa embutida, em vez de uma caixa no nível do bloco. Dentro da caixa da tabela há um contexto em nível de bloco.

    É equivalente a `inline table`.

- `inline-flex`

  - : O elemento se comporta como um elemento embutido e apresenta seu conteúdo de acordo com o modelo flexbox.

    É equivalente a `inline flex`.

- `inline-grid`

  - : O elemento se comporta como um elemento embutido e apresenta seu conteúdo de acordo com o modelo de grade.

    É equivalente a `inline grid`.

### Sintaxe formal

{{CSSSyntax}}

## Exemplo

No exemplo abaixo, estamos criando um contêiner flex inline com a palavra-chave herdada inline-flex.

### HTML

```html
<div class="container">
  <div>Flex Item</div>
  <div>Flex Item</div>
</div>

Not a flex item
```

### CSS

```css
.container {
  display: inline-flex;
}
```

### Result

{{EmbedLiveSample("Example", 300, 150)}}

Na nova sintaxe, o contêiner flex inline seria criado usando dois valores, inline para o tipo de exibição externo e flex para o tipo de exibição interno.

```css
.container {
  display: inline flex;
}
```

## Compatibilidade com navegadores

### Suporte de`inline-block`

{{Compat}}

### Suporte de`inline-table`

{{Compat}}

### Suporte de`inline-flex`

{{Compat}}

### Suporte de`inline-grid`

{{Compat}}

## Veja também

- {{CSSxRef("display")}}

  - {{CSSxRef("&lt;display-outside&gt;")}}
  - {{CSSxRef("&lt;display-inside&gt;")}}
  - {{CSSxRef("&lt;display-listitem&gt;")}}
  - {{CSSxRef("&lt;display-internal&gt;")}}
  - {{CSSxRef("&lt;display-box&gt;")}}
