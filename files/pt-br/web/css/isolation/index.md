---
title: isolation
slug: Web/CSS/isolation
---

{{CSSRef}}

A propriedade CSS **`isolation`** define se o elemento deve criar um novo {{glossary("stacking context")}}.

```css
/* Keyword values */
isolation: auto;
isolation: isolate;

/* Global values */
isolation: inherit;
isolation: initial;
isolation: unset;
```

É especialmente útil em conjunto com {{cssxref("background-blend-mode")}} que mistura os fundos em um dado stacking context: ela permite isolar grupos de elementos dos seus fundos e misturar as suas cores.

{{cssinfo}}

## Sintaxe

Uma das palavras-chave listadas abaixo.

### Valores

- `auto`
  - : É uma palavra-chave indicando que um novo stacking context deve ser criado somente se uma das propriedades aplicadas ao elemento requererem.
- `isolate`
  - : É uma palavra-chave indicando que um novo stacking context deve ser criado.

### Sintaxe formal

{{csssyntax}}

## Exemplos

```html
<div id="b" class="a">
  <div id="d">
    <div class="a c">auto</div>
  </div>
  <div id="e">
    <div class="a c">isolate</div>
  </div>
</div>
```

```css
.a {
  background-color: rgb(0, 255, 0);
}
#b {
  width: 200px;
  height: 210px;
}
.c {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  padding: 2px;
  mix-blend-mode: difference;
}
#d {
  isolation: auto;
}
#e {
  isolation: isolate;
}
```

{{ EmbedLiveSample('Examples', "230", "230") }}

## Especificações

| Specification                                            | Status                     | Comment            |
| -------------------------------------------------------- | -------------------------- | ------------------ |
| {{ SpecName('Compositing', '#isolation', 'Isolation') }} | {{ Spec2('Compositing') }} | Initial definition |

## Compatibilidade com navegadores

{{Compat("css.properties.isolation")}}

## Veja também

- {{cssxref("&lt;blend-mode&gt;")}}
- {{cssxref("mix-blend-mode")}}, {{cssxref("background-blend-mode")}}
