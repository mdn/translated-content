---
title: background-blend-mode
slug: Web/CSS/background-blend-mode
---

{{CSSRef}}

A propriedade CSS **`background-blend-mode`** descreve como as imagens de fundo do elemento devem se misturar entre si e a cor de fundo do elemento.

```css
/* Um valor */
background-blend-mode: normal;

/* Dois valores, um por fundo */
background-blend-mode: darken, luminosity;

/* Valores globais */
background-blend-mode: initial;
background-blend-mode: inherit;
background-blend-mode: unset;
```

Os modos de mistura devem ser definidos na mesma ordem que a propriedade CSS {{cssxref ("background-image")}}. Se os comprimentos da lista dos modos de mistura e das imagens de fundo não forem iguais, ele será repetido e/ou truncado até que os comprimentos correspondam.

{{cssinfo}}

## Sintaxe

### Valores

- `<blend-mode>`
  - : É um {{cssxref ("&lt;blend-mode&gt;")}} denotando o modo de mesclagem a ser aplicado. Pode haver vários valores, separados por vírgulas.

### Sintaxe formal

{{csssyntax}}

## Exemplos

```html hidden
<div id="div"></div>
<select id="select">
  <option>normal</option>
  <option>multiply</option>
  <option selected>screen</option>
  <option>overlay</option>
  <option>darken</option>
  <option>lighten</option>
  <option>color-dodge</option>
  <option>color-burn</option>
  <option>hard-light</option>
  <option>soft-light</option>
  <option>difference</option>
  <option>exclusion</option>
  <option>hue</option>
  <option>saturation</option>
  <option>color</option>
  <option>luminosity</option>
</select>
```

```css hidden
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: screen;
}
```

```js hidden
document.getElementById("select").onchange = function (event) {
  document.getElementById("div").style.backgroundBlendMode =
    document.getElementById("select").selectedOptions[0].innerHTML;
};
console.log(document.getElementById("div"));
```

{{ EmbedLiveSample('Examples', "330", "330") }}

## Especificações

| Especificação                                                                    | Status                     | Comentário         |
| -------------------------------------------------------------------------------- | -------------------------- | ------------------ |
| {{ SpecName('Compositing', '#background-blend-mode', 'background-blend-mode') }} | {{ Spec2('Compositing') }} | Initial definition |

## Compatibilidade com navegadores

{{Compat("css.properties.background-blend-mode")}}

## Veja também

- {{cssxref("&lt;blend-mode&gt;")}}
- {{cssxref("mix-blend-mode")}}
