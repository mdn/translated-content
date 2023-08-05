---
title: Seletor de atributos
slug: Web/CSS/Attribute_selectors
---

{{CSSRef}}

O **seletor de atributos** combina elementos baseado no valor de um atributo dado.

```css
/* <a> elementos com um atributo de título  */
a[title] {
  color: purple;
}

/* <a> elementos combinando com um href "https://example.org" */
a[href="https://example.org"]
{
  color: green;
}

/* <a> elementos com um href contendo "example" */
a[href*="example"] {
  font-size: 2em;
}

/* <a> elementos com href terminando em ".org" */
a[href$=".org"] {
  font-style: italic;
}
```

- `[attr]`
  - : Representa um elemento com atributo de nome _attr_.
- `[attr=value]`
  - : Representa um elemento com um atributo de nome _attr_, o qual o valor é exatamente _value._
- `[attr~=value]`
  - : Representa um elemento com um atributo de nome _attr,_ o qual _value_ é uma lista de palavras separadas por espaços, e uma dessas é exatamente _value._
- `[attr|=value]`
  - : Representa um elemento com um atributo de nome _attr_ o qual o valor pode ser exatamente _value_ ou pode começar com _value_ imediatamente seguido por hífen `-` (U+002D). Isso somente é usado para linguagens que combinam sub-códigos.
- `[attr^=value]`
  - : Representa um elemento com um atributo com nome _attr_ que tem um valor prefixado (precedido) por _value._
- `[attr$=value]`
  - : Representa um elemento com um atributo de nome _attr_ que tem como sufixo (seguido) por _value._
- `[attr*=value]`
  - : Representa um elemento com um atributo de nome _attr_ o qual valor contém ao menos uma ocorrência de _value_ contido na string.
- `[attr operator value i]`
  - : Adiciona um `i` (ou `I`) antes do fechamento das chaves {}, faz com que o valor seja comparado sem levar em conta caixa alta ou caixa baixa(para caracteres dentro da faixa ASCII).

## Exemplos

### Links

#### CSS

```css
a {
  color: blue;
}

/* Links internos, começando com "#" */
a[href^="#"] {
  background-color: gold;
}

/* Links com "example" em qualquer lugar da URL */
a[href*="example"] {
  background-color: silver;
}

/* Links com "insensitive" em qualquer lugar da URL,
   independentemente da capitalização */
a[href*="insensitive" i] {
  color: cyan;
}

/* Links com final ".org" */
a[href$=".org"] {
  color: red;
}
```

#### HTML

```html
<ul>
  <li><a href="#internal">Internal link</a></li>
  <li><a href="http://example.com">Example link</a></li>
  <li><a href="#InSensitive">Insensitive internal link</a></li>
  <li><a href="http://example.org">Example org link</a></li>
</ul>
```

#### Resultado

{{EmbedLiveSample('Links')}}

### Languages

#### CSS

```css
/* Todas divs com um atributo `lang` em negrito. */
div[lang] {
  font-weight: bold;
}
/* Todas divs com US English em azul (blue). */
div[lang~="en-us"] {
  color: blue;
}
/* Todas divs onde Portuguese esta em verde (green). */
div[lang="pt"] {
  color: green;
}
/* Todas divs onde Chinese esta em vermelho (red), Simplificado para (zh-CN) ou tradicional (zh-TW). */
div[lang|="zh"] {
  color: red;
}
/* Todas divs com Traditional Chinese `data-lang` que é purple. */
/* Nota: Você também poderia usar atributos separados por hífen com aspas duplas */
div[data-lang="zh-TW"] {
  color: purple;
}
```

#### HTML

```
<div lang="en-us en-gb en-au en-nz">Hello World!</div>
<div lang="pt">Olá Mundo!</div>
<div lang="zh-CN">世界您好！</div>
<div lang="zh-TW">世界您好！</div>
<div data-lang="zh-TW">?世界您好！</div>
```

#### Resultado

{{EmbedLiveSample('Languages')}}

## Especificações

| Specification                                                                      | Status                      | Comment                                                           |
| ---------------------------------------------------------------------------------- | --------------------------- | ----------------------------------------------------------------- |
| {{SpecName('CSS4 Selectors', '#attribute-selectors', 'attribute selectors')}}      | {{Spec2('CSS4 Selectors')}} | Adiciona um modificador para a seleção do valor do atributo ASCII |
| {{SpecName('CSS3 Selectors', '#attribute-selectors', 'attribute selectors')}}      | {{Spec2('CSS3 Selectors')}} |                                                                   |
| {{SpecName('CSS2.1', 'selector.html#attribute-selectors', 'attribute selectors')}} | {{Spec2('CSS2.1')}}         | Definição Inicial                                                 |

## Browser compatibilidade

{{Compat("css.selectors.attribute")}}
