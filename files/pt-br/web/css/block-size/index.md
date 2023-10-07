---
title: block-size
slug: Web/CSS/block-size
---

{{CSSRef}}{{SeeCompatTable}}

A propriedade [CSS](/pt-BR/docs/Web/CSS) **`block-size`** define o tamanho horizontal ou vertical de um elemento bloco. Corresponde à propriedade {{cssxref("width")}} ou {{cssxref("height")}}, dependendo do valor do {{cssxref("writing-mode")}}.

{{EmbedInteractiveExample("pages/css/block-size.html")}}

## Sintaxe

```css
/* valores <length> */
block-size: 300px;
block-size: 25em;

/* valores <percentage> */
block-size: 75%;

/* valores de Keyword */
block-size: 25em border-box;
block-size: 75% content-box;
block-size: max-content;
block-size: min-content;
block-size: available;
block-size: fit-content;
block-size: auto;

/* valores globais */
block-size: inherit;
block-size: initial;
block-size: unset;
```

Se o modo de escrita está orientado verticalmente, o valor do `block-size` refere-se à largura do elemento; senão, refere-se à altura do elemento. Uma propriedade relacionada é {{cssxref("inline-size")}}, que define as outras dimensões do elemento.

{{cssinfo}}

## Sintaxe

### Valores

A propriedade `block-size` leva os mesmos valores que as propriedades {{cssxref("width")}} e {{cssxref("height")}}.

### Sintaxe formal

{{csssyntax}}

## Exemplo

### HTML

```html
<p class="exampleText">Example text</p>
```

### CSS

```css
.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  block-size: 200px;
}
```

{{EmbedLiveSample("Example")}}

## Especificação

| Specification                                                                         | Status                              | Comment           |
| ------------------------------------------------------------------------------------- | ----------------------------------- | ----------------- |
| {{SpecName("CSS Logical Properties", "#logical-dimension-properties", "block-size")}} | {{Spec2("CSS Logical Properties")}} | Definição inicial |

## Compatibilidade com navegadores

{{Compat("css.properties.block-size")}}

## See also

- As propriedades: {{cssxref("width")}} and {{cssxref("height")}}
- {{cssxref("writing-mode")}}
