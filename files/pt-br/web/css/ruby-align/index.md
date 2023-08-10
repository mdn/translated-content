---
title: ruby-align
slug: Web/CSS/ruby-align
---

{{CSSRef}}{{SeeCompatTable}}

## Summary

A propriedade **`ruby-align`** do CSS define a distribuição dos direfentes elementos do ruby sobre a base.

{{cssinfo}}

## Sintaxe

```css
/* Valores chave */
ruby-align: start;
ruby-align: center;
ruby-align: space-between;
ruby-align: space-around;

/* Valores globais */
ruby-align: inherit;
ruby-align: initial;
ruby-align: unset;
```

### Values

- `start`
  - : É uma palavra-chave indicando que o ruby será alinhado com o início do texto base.
- `center`
  - : É uma palavra-chave indicando que o ruby será alinhado no meio do texto base.
- `space-between`
  - : É uma palavra-chave indicando que o espaço extra será distruibuído entre os elementos do ruby.
- `space-around`
  - : É uma palavra-chave indicando que o espaço extra será distruibuído entre os elementos do ruby e em torno deles.

### Sintaxe formal

{{csssyntax}}

## Exemplos

Esse HTML irá renderizar diferentemente com cada valor do `ruby-align`:

```html
<ruby>
  <rb>Esse é um grande texto para verificar</rb>
  <rp>（</rp><rt>ruby curto</rt><rp>）</rp>
</ruby>
```

### Ruby alinhado no ínicio do texto base

```html
<ruby>
  <rb>This is a long text to check</rb>
  <rp>（</rp><rt>short ruby</rt><rp>）</rp>
</ruby>
```

```css
ruby {
  ruby-align: start;
}
```

Isso dará o seguinte resultado:

{{EmbedLiveSample("Ruby_aligned_at_the_start_of_the_base_text", 180, 40)}}

### Ruby alinhado no centro do texto base

```html
<ruby>
  <rb>This is a long text to check</rb>
  <rp>（</rp><rt>short ruby</rt><rp>）</rp>
</ruby>
```

```css
ruby {
  ruby-align: center;
}
```

Isso dará o seguinte resultado:

{{EmbedLiveSample("Ruby_aligned_at_the_center_of_the_base_text", 180, 40)}}

### Espaço extra distribuído entre os elementos do ruby

```html
<ruby>
  <rb>This is a long text to check</rb>
  <rp>（</rp><rt>short ruby</rt><rp>）</rp>
</ruby>
```

```css
ruby {
  ruby-align: space-between;
}
```

Isso dará o seguinte resultado:

{{EmbedLiveSample("Extra_space_distributed_between_ruby_elements", 180, 40)}}

### Espaço extra distribuído entre os elementos do ruby e em torno deles

```html
<ruby>
  <rb>This is a long text to check</rb>
  <rp>（</rp><rt>short ruby</rt><rp>）</rp>
</ruby>
```

```css
ruby {
  ruby-align: space-around;
}
```

Isso dará o seguinte resultado:

{{EmbedLiveSample("Extra_space_distributed_between_and_around_ruby_elements", 180, 40)}}

## Especificações

| Especificação                                                   | Status                 | Comentário         |
| --------------------------------------------------------------- | ---------------------- | ------------------ |
| {{SpecName('CSS3 Ruby', '#ruby-align-property', 'ruby-align')}} | {{Spec2('CSS3 Ruby')}} | Definição inicital |

## Compatilibade de Navegador

{{Compat("css.properties.ruby-align")}}

## Veja também

- Elementos Ruby do HTML: {{HTMLElement("ruby")}}, {{HTMLElement("rt")}}, {{HTMLElement("rp")}}, and {{HTMLElement("rtc")}}.
- Propriedades Ruby do CSS: {{cssxref("ruby-position")}}, {{cssxref("ruby-merge")}}.
