---
title: font-feature-settings
slug: Web/CSS/font-feature-settings
---

{{CSSRef}}

## Sumário

A propriedade **`font-feature-settings`** do CSS te dá controle sobre tipografia avançada nas fontes do tipo OpenType.

> **Nota:** Sempre que possível, deve usar o {{cssxref("font-variant")}} propriedade abreviada ou uma propriedade extensa associada, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-numeric")}} ou {{cssxref("font-variant-position")}}.
>
> Esta propriedade é um recurso de baixo nível projetado para lidar com casos especiais onde não existe outra maneira de habilitar ou acessar um recurso de fonte OpenType.
>
> Em particular, esta propriedade CSS não deve ser usada para habilitar small caps.

{{cssinfo}}

## Sintaxe

```css
/* Use the default settings */
font-feature-settings: normal;

/* Set values for OpenType feature tags */
font-feature-settings: "smcp";
font-feature-settings: "smcp" on;
font-feature-settings: "swsh" 2;
font-feature-settings:
  "smcp",
  "swsh" 2;

/* Global values */
font-feature-settings: inherit;
font-feature-settings: initial;
font-feature-settings: unset;
```

### Valores

- `normal`
  - : Text is laid out using default settings.
- `<feature-tag-value>`
  - : Ao renderizar texto, a lista de características OpenType é passada para o mecanismo de layout de texto para ativar ou desativar recursos do tipo de letra. A tag é sempre uma {{cssxref("&lt;string&gt;")}} de 4 caracteres ASCII. Se possuir mais ou menos caracteres ou conter caracteres fora da faixa U+20 - U+7E, toda a propriedade é invalida.
    O valor é um inteiro positivo. As duas palavras-chaves `on` e `off` são sinônimos de `1` e `0` respectivamente. Se nenhum valor é definido, o padrão é `1`. Para características OpenType não-booleanas (ex. [stylistic alternates](http://www.microsoft.com/typography/otspec/features_pt.htm#salt)), o valor implica em um glifo particular para ser selecionado; para valores booleanos, é um interruptor.

### Sintaxe formal

{{csssyntax}}

## Exemplos

```css
/* use small-cap alternate glyphs */
.smallcaps {
  font-feature-settings: "smcp" on;
}

/* convert both upper and lowercase to small caps (affects punctuation also) */
.allsmallcaps {
  font-feature-settings: "c2sc", "smcp";
}

/* enable historical forms */
.hist {
  font-feature-settings: "hist";
}

/* disable common ligatures, usually on by default */
.noligs {
  font-feature-settings: "liga" 0;
}

/* enable tabular (monospaced) figures */
td.tabular {
  font-feature-settings: "tnum";
}

/* enable automatic fractions */
.fractions {
  font-feature-settings: "frac";
}

/* use the second available swash character */
.swash {
  font-feature-settings: "swsh" 2;
}

/* enable stylistic set 7 */
.fancystyle {
  font-family: Gabriola; /* available on Windows 7, and on Mac OS */
  font-feature-settings: "ss07";
}
```

## Especificações

| Especificacão                                                                         | Estado                  | Comment            |
| ------------------------------------------------------------------------------------- | ----------------------- | ------------------ |
| {{SpecName('CSS3 Fonts', '#propdef-font-feature-settings', 'font-feature-settings')}} | {{Spec2('CSS3 Fonts')}} | Initial definition |

## Compatibilidade com navegadores

{{Compat("css.properties.font-feature-settings")}}

## Veja Também

- [FontFont OpenType User Guide (pdf)](https://www.fontfont.com/staticcontent/downloads/FF_OT_User_Guide.pdf)
- [OpenType Feature Tags](http://www.microsoft.com/typography/otspec/featurelist.htm) list
- [Using the whole font](http://blogs.msdn.com/b/ie/archive/2012/01/09/css-corner-using-the-whole-font.aspx) (The -moz syntax is the old one. On Gecko, use the -ms syntax but with -moz).
