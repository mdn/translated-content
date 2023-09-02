---
title: <display-listitem>
slug: Web/CSS/display-listitem
---

{{CSSRef}}

O `list-item` palavra-chave faz com que o elemento gere um`::marker` pseudoelemento com o conteúdo especificado por sua {{CSSxRef("list-style")}} propriedades (por exemplo, um marcador) junto com uma caixa principal do tipo especificado para seu próprio conteúdo.

## Sintaxe

Um valor único de `list-item` fará com que o elemento se comporte como um item da lista. Isso pode ser usado junto com{{CSSxRef("list-style-type")}} e {{CSSxRef("list-style-position")}}.

`list-item` também pode ser combinado com qualquer {{CSSxRef("&lt;display-outside&gt;")}} palavra-chave e o `flow` ou `flow-root` {{CSSxRef("&lt;display-inside&gt;")}} palavras-chave.

> **Nota:**: Nos navegadores que suportam a sintaxe de dois valores, se nenhum valor interno for especificado, o padrão será `flow`. Se nenhum valor externo for especificado, a caixa principal terá um tipo de exibição externo de`block`.

### Sintaxe formal

{{CSSSyntax}}

## Exemplo

### HTML

```html
<div class="fake-list">I will display as a list item</div>
```

### CSS

```css
.fake-list {
  display: list-item;
  list-style-position: inside;
}
```

### Resultado

{{EmbedLiveSample("Example", "100%", 150)}}

## Compatibilidade com navegadores

### Suporte de`list-item`

{{Compat("css.properties.display.list-item", 10)}}

## Veja também

- {{CSSxRef("display")}}

  - {{CSSxRef("&lt;display-outside&gt;")}}
  - {{CSSxRef("&lt;display-inside&gt;")}}
  - {{CSSxRef("&lt;display-internal&gt;")}}
  - {{CSSxRef("&lt;display-box&gt;")}}
  - {{CSSxRef("&lt;display-legacy&gt;")}}
