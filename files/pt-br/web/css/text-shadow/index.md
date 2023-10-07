---
title: text-shadow
slug: Web/CSS/text-shadow
---

{{ Cssref }}

## Sumário

A propriedade `text-shadow` acrescenta sombras ao texto. Ela aceita uma lista de sombras separadas por vírgula que serão aplicados ao texto e ao {{ cssxref("text-decoration","text-decorations") }} do elemento.

Cada sombra é especificada como um deslocamento do texto, juntamente com valores opcionais de cor e raio de desfoque.

Multiplas sombras são aplicadas de frente-para-trás, com a primeira sombra especificada no topo.

Esta propriedade se aplica a ambos {{cssxref("::first-line")}} e {{cssxref("::first-letter")}} [pseudo-elements](/pt-BR/docs/Web/CSS/Pseudo-elements).

{{cssinfo}}

## Sintaxe

```css
/* deslocamento-x | deslocamento-y | raio-de-desfoque | cor */
text-shadow: 1px 1px 2px black;

/* cor | deslocamento-x | deslocamento-y | raio-de-desfoque */
text-shadow: #ccc 1px 0 10px;

/* deslocamento-x | deslogamento-y | cor */
text-shadow: 5px 5px #558abb;

/* cor | deslocamento-x | deslocamento-y */
text-shadow: white 2px 5px;

/* deslocamento-x | deslocamento-y
/* Usa o padrão para cor e raio-de-desfoque */
text-shadow: 5px 10px;

/* Valores globais */
text-shadow: inherit;
text-shadow: initial;
text-shadow: unset;
```

### Valores

- \<cor>

  - : Opcional. Pode ser especificado tanto antes quanto depois dos valores de deslocamento. Se a cor não é especificada, uma cor UA-chosen será usada.

    > **Nota:** Se voce quer garantir a consistência entre os navegadores, especifique explicitamente uma cor.

- \<offset-x> \<offset-y>
  - : Obrigatório. These `<length>` values specify the shadow's offset from the text. `<offset-x>` specifies the horizontal distance; a negative value places the shadow to the left of the text. `<offset-y>` specifies the vertical distance; a negative value places the shadow above the text. If both values are `0`, then the shadow is placed behind the text (and may generate a blur effect when `<blur-radius>` is set).
    To find out what units you can use, see {{ cssxref("&lt;length&gt;") }}.
- \<blur-radius>
  - : Opcional. This is a {{ cssxref("&lt;length&gt;") }} value. If not specified, it defaults to `0`. The higher this value, the bigger the blur; the shadow becomes wider and lighter.

### Formal syntax

{{csssyntax}}

## Exemplos

```css
.red-text-shadow {
  text-shadow: red 0 -2px;
}
```

```html
<p class="red-text-shadow">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
  veritatis et quasi architecto beatae vitae dicta sunt explicabo.
</p>
```

{{EmbedLiveSample('Example1', '689px', '90px')}}

```css
.white-with-blue-shadow {
  text-shadow:
    1px 1px 2px black,
    0 0 1em blue,
    0 0 0.2em blue;
  color: white;
  font:
    1.5em Georgia,
    "Bitstream Charter",
    "URW Bookman L",
    "Century Schoolbook L",
    serif;
}
```

```html
<p class="white-with-blue-shadow">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
  veritatis et quasi architecto beatae vitae dicta sunt explicabo.
</p>
```

{{EmbedLiveSample('Example2', '689px', '180px')}}

```css
.gold-on-gold {
  text-shadow:
    rgba(0, 0, 0, 0.1) -1px 0,
    rgba(0, 0, 0, 0.1) 0 -1px,
    rgba(255, 255, 255, 0.1) 1px 0,
    rgba(255, 255, 255, 0.1) 0 1px,
    rgba(0, 0, 0, 0.1) -1px -1px,
    rgba(255, 255, 255, 0.1) 1px 1px;
  color: gold;
  background: gold;
}
```

```html
<p class="gold-on-gold">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
  veritatis et quasi architecto beatae vitae dicta sunt explicabo.
</p>
```

{{EmbedLiveSample('Example3', '689px', '90px')}}

**Especificações**

| Especificação                                                         | Status                              | Comentário                                                                                                                                                                                                                                                                                                                                                                              |
| --------------------------------------------------------------------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{ SpecName('CSS3 Transitions', '#animatable-css', 'text-shadow') }}  | {{ Spec2('CSS3 Transitions') }}     | Lists `text-shadow` as animatable.                                                                                                                                                                                                                                                                                                                                                      |
| {{ SpecName('CSS3 Text Decoration', '#text-shadow', 'text-shadow') }} | {{ Spec2('CSS3 Text Decoration') }} | The CSS property `text-shadow` was [improperly defined in CSS2](https://www.w3.org/TR/2008/REC-CSS2-20080411/text.html#text-shadow-props) and dropped in CSS2 (Level 1). The _CSS Text Module Level 3_ spec improved and precised the syntax. Later it was moved to new working draft _[CSS Text Decoration Module Level 3](https://www.w3.org/TR/2012/WD-css-text-decor-3-20121113/)_. |

## Compatibilidade do navegador

{{Compat("css.properties.text-shadow")}}

## Veja também

- {{ cssxref("box-shadow") }}
