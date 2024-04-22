---
title: backdrop-filter
slug: Web/CSS/backdrop-filter
---

{{CSSRef}}

A propriedade [CSS](/pt-BR/docs/Web/CSS) **`backdrop-filter`** permite que você aplique efeitos gráficos, como desfoque ou mudança de cores, na área ao fundo de um elemento. Como ela se aplica a tudo que fica _atrás_ do elemento, é preciso deixá-lo (ou o seu plando de fundo) ao menos parcialmente transparente para poder ver o efeito em ação.

```css
/* Valor de palavra-chave */
backdrop-filter: none;

/* Filtro com URL para SVG */
backdrop-filter: url(commonfilters.svg#filter);

/* Valores <filter-function> */
backdrop-filter: blur(2px);
backdrop-filter: brightness(60%);
backdrop-filter: contrast(40%);
backdrop-filter: drop-shadow(4px 4px 10px blue);
backdrop-filter: grayscale(30%);
backdrop-filter: hue-rotate(120deg);
backdrop-filter: invert(70%);
backdrop-filter: opacity(20%);
backdrop-filter: sepia(90%);
backdrop-filter: saturate(80%);

/* Vários filtros */
backdrop-filter: url(filters.svg#filter) blur(4px) saturate(150%);

/* Valores globais */
backdrop-filter: inherit;
backdrop-filter: initial;
backdrop-filter: unset;
```

## Sintaxe

### Valores

- `none`
  - : Nenhum filtro é aplicado ao plano de fundo.
- `<filter-function-list>`
  - : Uma lista de {{cssxref("&lt;filter-function&gt;")}}s separadas por espaços ou um [filtro SVG](/pt-BR/docs/Web/SVG/Element/filter) que será aplicado ao plano de fundo.

## Definição formal

{{cssinfo}}

### Sintaxe formal

{{csssyntax}}

## Exemplo

### CSS

```css
.box {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  font-family: sans-serif;
  text-align: center;
  line-height: 1;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  max-width: 50%;
  max-height: 50%;
  padding: 20px 40px;
}

html,
body {
  height: 100%;
  width: 100%;
}

body {
  background-image: url(https://picsum.photos/id/1080/6858/4574);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.container {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
}
```

### HTML

```html
<div class="container">
  <div class="box">
    <p>backdrop-filter: blur(10px)</p>
  </div>
</div>
```

### Resultado

{{EmbedLiveSample("Example", 600, 400)}}

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{cssxref("filter")}}
