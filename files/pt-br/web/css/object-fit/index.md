---
title: object-fit
slug: Web/CSS/object-fit
---

{{ CSSRef }}

## Resumo

A propriedade CSS `object-fit` especifica como o conteúdo de um elemento substituído deve ser ajustado à caixa estabelecida pela altura e largura usadas.

{{cssinfo}}

## Syntax

{{csssyntax}}

```
object-fit: fill
object-fit: contain
object-fit: cover
object-fit: none
object-fit: scale-down
```

### Valores

- `fill`
  - : O conteúdo substituído é dimensionado para preencher a caixa de conteúdo do elemento: o tamanho concreto do objeto é a largura e a altura usadas do elemento.
- `contain`
  - : O conteúdo substituído é dimensionado para manter sua proporção enquanto se encaixa na caixa de conteúdo do elemento: seu tamanho de objeto concreto é resolvido como uma restrição de restrição em relação à largura e altura usadas do elemento.
- `cover`
  - : O conteúdo substituído é dimensionado para manter sua proporção e preencher toda a caixa de conteúdo do elemento: seu tamanho de objeto concreto é resolvido como uma restrição de capa contra a largura e a altura usadas do elemento.
- `none`
  - : O conteúdo substituído não é redimensionado para caber dentro da caixa de conteúdo do elemento: o tamanho do objeto concreto do objeto é determinado usando o algoritmo de tamanho padrão sem tamanho especificado e um tamanho de objeto padrão igual à largura e altura usadas do elemento substituído.
- `scale-down`
  - : O conteúdo é dimensionado se `none` ou `contain` for especificado, o que resultaria em um tamanho menor de objeto concreto.

## Exemplos

### HTML Content

```html
<div>
  <h2>object-fit: fill</h2>
  <img src="mdn_logo_only_color.png" alt="MDN Logo" class="fill" />

  <img src="mdn_logo_only_color.png" alt="MDN Logo" class="fill narrow" />

  <h2>object-fit: contain</h2>
  <img src="mdn_logo_only_color.png" alt="MDN Logo" class="contain" />

  <img src="mdn_logo_only_color.png" alt="MDN Logo" class="contain narrow" />

  <h2>object-fit: cover</h2>
  <img src="mdn_logo_only_color.png" alt="MDN Logo" class="cover" />

  <img src="mdn_logo_only_color.png" alt="MDN Logo" class="cover narrow" />

  <h2>object-fit: none</h2>
  <img src="mdn_logo_only_color.png" alt="MDN Logo" class="none" />

  <img src="mdn_logo_only_color.png" alt="MDN Logo" class="none narrow" />

  <h2>object-fit: scale-down</h2>
  <img src="mdn_logo_only_color.png" alt="MDN Logo" class="scale-down" />

  <img src="mdn_logo_only_color.png" alt="MDN Logo" class="scale-down narrow" />
</div>
```

### CSS Content

```css
h2 {
  font-family:
    Courier New,
    monospace;
  font-size: 1em;
  margin: 1em 0 0.3em;
}

div {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  height: 940px;
}

img {
  width: 150px;
  height: 100px;
  border: 1px solid #000;
}

.narrow {
  width: 100px;
  height: 150px;
  margin-top: 10px;
}

.fill {
  object-fit: fill;
}

.contain {
  object-fit: contain;
}

.cover {
  object-fit: cover;
}

.none {
  object-fit: none;
}

.scale-down {
  object-fit: scale-down;
}
```

### Output

{{ EmbedLiveSample('Example', 500, 450) }}

## Specifications

| Specification                                                | Status                   | Comment                                               |
| ------------------------------------------------------------ | ------------------------ | ----------------------------------------------------- |
| {{SpecName('CSS4 Images', '#the-object-fit', 'object-fit')}} | {{Spec2('CSS4 Images')}} | The `from-image` and `flip` keywords have been added. |
| {{SpecName('CSS3 Images', '#the-object-fit', 'object-fit')}} | {{Spec2('CSS3 Images')}} | Initial specification                                 |

## Browser compatibility

{{Compat("css.properties.object-fit")}}

## See also

- Other image-related CSS properties: {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}.
- An [object-fit polyfill](https://github.com/anselmh/object-fit) for browsers not supporting it.
