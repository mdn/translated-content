---
title: "-moz-float-edge"
slug: Web/CSS/-moz-float-edge
browser-compat: css.properties.-moz-float-edge
---

{{CSSRef}}{{Non-standard_header}}{{Deprecated_Header}}

A [propriedade CSS não padrão **`-moz-float-edge`** ](/en-US/docs/Web/CSS)especifica se as propriedades de altura e largura do elemento incluem a espessura da margem, borda ou preenchimento.

```css
/* Keyword values */
-moz-float-edge: border-box;
-moz-float-edge: content-box;
-moz-float-edge: margin-box;
-moz-float-edge: padding-box;
/* Global values */
-moz-float-edge: inherit;
-moz-float-edge: initial;
-moz-float-edge: unset;
```
## Sintaxe
### Valores
- `border-box`
  - : A altura e a largura incluem o conteúdo, o preenchimento e a borda, mas não a margem.
- `content-box`
  - : A altura e a largura incluem apenas o conteúdo, sem incluir o preenchimento, borda ou margem.
- `margin-box`
  - : A altura e a largura incluem o conteúdo, o preenchimento, a borda e a margem.
- `padding-box`
  - : A altura e a largura incluem apenas o conteúdo e o preenchimento, sem incluir a borda ou margem.


## Definição formal

{{CSSInfo}}
## Sintaxe formal
{{csssyntax}}
## Examplos
### HTML
```html
<div class="box">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
```
### CSS
```css
.box {
  display: block;
  height: 5px;
  margin: 0.5em auto 0.5em auto;
  color: gray;
  -moz-float-edge: margin-box;
  box-sizing: border-box;
}
```

### Resultado

{{ EmbedLiveSample('Examples') }}

## Especificações

Não faz parte de nenhum padrão.

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{bug(432891)}}
