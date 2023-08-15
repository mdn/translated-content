---
title: inline-size
slug: Web/CSS/inline-size
---

{{CSSRef}}{{SeeCompatTable}}

A propriedade do [CSS](/pt-BR/docs/Web/CSS) **`inline-size`** define o tamanho horizontal e vertical de um elemento bloco. Ele é correspondente a cada propriedade {{cssxref("width")}} ou a {{cssxref("height")}}, dependendo do valor de {{cssxref("writing-mode")}}.

```css
/* <length> values */
inline-size: 300px;
inline-size: 25em;

/* <percentage> values */
inline-size: 75%;

/* Keyword values */
inline-size: 25em border-box;
inline-size: 75% content-box;
inline-size: max-content;
inline-size: min-content;
inline-size: available;
inline-size: fit-content;
inline-size: auto;

/* Global values */
inline-size: inherit;
inline-size: initial;
inline-size: unset;
```

Se o writing mode é orientado verticalmente, o valor de `inline-size` relaciona a altura do elemento; ao contrário, está relacionado a largura do elemento. A propriedade relacionada é a {{cssxref("block-size")}}, no qual define a outra dimensão do elemento.

{{cssinfo}}

## Sintaxe

### Valores

A propriedade `inline-size` aproveita os mesmos valores que as propriedades {{cssxref("width")}} e {{cssxref("height")}}.

### Sintaxe formal

{{csssyntax}}

## Exemplo

### HTML

```html
<p class="exampleText">Texto de Exemplo</p>
```

### CSS

```css
.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  inline-size: 110px;
}
```

{{EmbedLiveSample("Example")}}

## Especificações

| Especificação                                                                          | Status                              | Comentário        |
| -------------------------------------------------------------------------------------- | ----------------------------------- | ----------------- |
| {{SpecName("CSS Logical Properties", "#logical-dimension-properties", "inline-size")}} | {{Spec2("CSS Logical Properties")}} | Definição Inicial |

## Compatibilidade com navegadores

{{Compat("css.properties.inline-size")}}

## Veja também

- As propriedades físicas mapeadas: {{cssxref("width")}} e {{cssxref("height")}}
- {{cssxref("writing-mode")}}
