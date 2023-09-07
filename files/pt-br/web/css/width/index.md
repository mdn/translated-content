---
title: width
slug: Web/CSS/width
---

{{CSSRef}}

## Resumo

A propriedade [CSS](/pt-BR/docs/Web/CSS) **width** determina a largura da área de conteúdo de um elemento. A [área de conteúdo](/pt-BR/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#content-area) fica dentro do preenchimento, da borda, e da margem de um elemento.

As propriedades {{cssxref("min-width")}} e {{cssxref("max-width")}} sobrescrevem o {{cssxref("width")}}.

{{cssinfo}}

## Sintaxe

```css
/* Valores de largura - <length> */
width: 300px;
width: 25em;

/* Valores percentuais - <percentage> */
width: 75%;

/* Valores com palavras-chave */
width: 25em border-box;
width: 75% content-box;
width: max-content;
width: min-content;
width: available;
width: fit-content;
width: auto;

/* Valores Globais */
width: inherit;
width: initial;
width: unset;
```

### Valores

- `<length>`
  - : Veja {{cssxref("&lt;length&gt;")}} para possíveis unidades.
- `<percentage>`
  - : Especificado como {{cssxref("&lt;percentage&gt;")}} da largura do bloco contido. Se a largura do bloco contido depender da largura do elemento, o layout resultante é indefinido.
- `border-box` {{experimental_inline}}
  - : Se presente, o precedente {{cssxref("&lt;length&gt;")}} ou {{cssxref("&lt;percentage&gt;")}} é aplicado para o border box do elemento.
- `content-box` {{experimental_inline}}
  - : Se presente, o precedente {{cssxref("&lt;length&gt;")}} ou {{cssxref("&lt;percentage&gt;")}} é aplicado para o content box do elemento.
- `auto`
  - : O navegador irá calcular e selecionar a largura para o elemento específicado.
- fill {{experimental_inline}}
  - : Use o fill-available inline size ou fill-available block size, como um modo apropriado de escrita.
- `max-content` {{experimental_inline}}
  - : Da largura interna preferível.
- `min-content` {{experimental_inline}}
  - : Da largura interna mínina.
- `available` {{experimental_inline}}
  - : Do bloco contendo a largura menos a margin horizontal, borda ou preenchimento.
- `fit-content` {{experimental_inline}}

  - : A largura:

    - do comprimento interno mínimo.
    - do menor comprimento interno preferível e da largura disponível.

### Sintaxe Formal

{{csssyntax}}

## Exemplos

### Largura padrão

```css
p.douradinho {
  background: gold;
}
```

```html
<p class="douradinho">
  A comunidade Mozilla produz diversos softwares incríveis.
</p>
```

{{EmbedLiveSample('Largura_padrão', '500px', '64px')}}

### Pixels e ems

```css
.largura_px {
  width: 200px;
  background-color: red;
  color: white;
  border: 1px solid black;
}

.largura_em {
  width: 20em;
  background-color: white;
  color: red;
  border: 1px solid black;
}
```

```html
<div class="largura_px">Largura medida com px</div>
<div class="largura_em">Largura medida com em</div>
```

{{EmbedLiveSample('Pixels_e_ems', '500px', '64px')}}

### Porcentagem

```css
.porcentagem {
  width: 20%;
  background-color: silver;
  border: 1px solid red;
}
```

```html
<div class="porcentagem">Largura em porcentagem</div>
```

{{EmbedLiveSample('Porcentagem', '500px', '64px')}}

### Exemplo utilizando "max-content"

```css
p.maxgreen {
  background: lightgreen;
  width: intrinsic; /* Safari/WebKit uses a non-standard name */
  width: -moz-max-content; /* Firefox/Gecko */
  width: -webkit-max-content; /* Chrome */
}
```

```html
<p class="maxgreen">
  A comunidade Mozilla produz diversos softwares incríveis.
</p>
```

{{EmbedLiveSample('Exemplo utilizando "max-content"', '500px', '64px')}}

### Exemplo utilizando "min-content"

```css
p.minblue {
  background: lightblue;
  width: -moz-min-content; /* Firefox */
  width: -webkit-min-content; /* Chrome */
}
```

```html
<p class="minblue">A comunidade Mozilla produz diversos softwares incríveis.</p>
```

{{EmbedLiveSample('Exemplo utilizando "min-content"', '500px', '155px')}}

## Especificações

| Especificação                                                         | Status                        | Comentários                                                                                                         |
| --------------------------------------------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Box', '#the-width-and-height-properties', 'width')}} | {{Spec2('CSS3 Box')}}         | Adicionadas as palavras-chave `max-content`, `min-content`, `available`, `fit-content`, `border-box`, `content-box` |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'width')}}          | {{Spec2('CSS3 Transitions')}} | Lista a largura como animável.                                                                                      |
| {{SpecName('CSS2.1', 'visudet.html#the-width-property', 'width')}}    | {{Spec2('CSS2.1')}}           | Determina em qual elemento vai ser aplicado.                                                                        |
| {{SpecName('CSS1', '#width', 'width')}}                               | {{Spec2('CSS1')}}             | Definição inicial                                                                                                   |
| {{SpecName('CSS3 Sizing', '#width-height-keywords', 'width')}}        | {{Spec2('CSS3 Sizing')}}      | Adiciona novas palavras-chave para largura e altura.                                                                |

## Compatibilidade com navegadores

{{Compat("css.properties.width")}}

## Veja também

- [box model](/pt-BR/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model), {{cssxref("height")}}, {{cssxref("box-sizing")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}
