---
title: "::-webkit-scrollbar"
slug: Web/CSS/::-webkit-scrollbar
---

{{CSSRef}}{{Non-standard_Header}}

O pseudo-elemento CSS `:-webkit-scrollbar` afeta o estilo de um elemento referente a barra de rolagem quando se tem por definido `overflow:scroll;`.

> **Nota:** Se o `overflow:scroll;` não estiver definido nenhuma barra de rolagem será exibida.

> **Nota:** `::-webkit-scrollbar` está disponível somente em navegadores baseados em [Blink](https://www.chromium.org/blink) - e [WebKit](https://webkit.org) - (Chrome, Edge, Opera, Safari, todos os navegadores para iOS, e [outros](https://en.wikipedia.org/wiki/List_of_web_browsers#WebKit-based)). Um método padronizado para estilização de barras de rolagem está disponível com {{cssxref("scrollbar-color")}} e {{cssxref("scrollbar-width")}}.

## Seletores CSS da Barra de Rolagem

Você pode usar os seguintes pseudo-elementos para customizar diversas partes da barra de rolagem para navegadores baseados em webkit:

- `::-webkit-scrollbar` — a barra de rolagem inteira.
- `::-webkit-scrollbar-button` — os botões na barra (setas para cima e para baixo no qual rolam uma linha de cada vez).
- `::-webkit-scrollbar-thumb` — a barra arrastável de rolagem.
- `::-webkit-scrollbar-track` — o caminho (barra de progresso) da barra de rolagem onde há uma barra cinza encima de uma barra branca.
- `::-webkit-scrollbar-track-piece` — a parte do caminho (barra de progresso) não coberto por uma barra.
- `::-webkit-scrollbar-corner` — o canto inferior da barra de rolagem, onde ambas barras horizontal e vertical se encontram. Muitas das vezes o canto inferior direito da janela do navegador.
- `::-webkit-resizer` — a barra redimensionável que aparece no canto inferior de alguns elementos.

## Exemplos

### CSS

```CSS
.visible-scrollbar, .invisible-scrollbar, .mostly-customized-scrollbar {
  display: block;
  width: 10em;
  overflow: auto;
  height: 2em;
}

.invisible-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Demonstração de uma barra de rolagem personalizada
  * (não será visível ao menos que a largura/altura seja especificada) */
.mostly-customized-scrollbar::-webkit-scrollbar {
  width: 5px;
  height: 8px;
  background-color: #aaa; /* ou que isso seja adicionado ao "caminho" da barra */
}

/* Adiciona a barra arrastável */
.mostly-customized-scrollbar::-webkit-scrollbar-thumb {
    background: #000;
}
```

### HTML

```HTML
<div class="visible-scrollbar">
  Etiam sagittis sem sed lacus laoreet, eu fermentum eros auctor.
  Proin at nulla elementum, consectetur ex eget, commodo ante.
  Sed eros mi, bibendum ut dignissim et, maximus eget nibh. Phasellus
  blandit quam turpis, at mollis velit pretium ut. Nunc consequat
  efficitur ultrices. Nullam hendrerit posuere est. Nulla libero
  sapien, egestas ac felis porta, cursus ultricies quam. Vestibulum
  tincidunt accumsan sapien, a fringilla dui semper in. Vivamus
  consectetur ipsum a ornare blandit. Aenean tempus at lorem sit
  amet faucibus. Curabitur nibh justo, faucibus sed velit cursus,
  mattis cursus dolor. Pellentesque id pretium est. Quisque
  convallis nisi a diam malesuada mollis. Aliquam at enim ligula.
</div>

<div class="invisible-scrollbar">
Estaéumapalavramuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuitolonga
</div>

<div class="mostly-customized-scrollbar">
Estaéumapalavramuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuitolonga<br>
E bem alta<br>
com uma barra de rolagem estranha.<br>
Quem diria que barras de rolagem poderiam ser estraaaanhas?
</div>
```

### Resultado

{{EmbedLiveSample("Examples")}}

## Especificações

Não é parte de nenhum padrão.

## Compatibilidade entre navegadores

### `::-webkit-scrollbar`

{{Compat("css.selectors.-webkit-scrollbar")}}

### `::-webkit-scrollbar-button`

{{Compat("css.selectors.-webkit-scrollbar-button")}}

### `::-webkit-scrollbar-thumb`

{{Compat("css.selectors.-webkit-scrollbar-thumb")}}

### `::-webkit-scrollbar-track`

{{Compat("css.selectors.-webkit-scrollbar-track")}}

### `::-webkit-scrollbar-track-piece`

{{Compat("css.selectors.-webkit-scrollbar-track-piece")}}

### `::-webkit-scrollbar-corner`

{{Compat("css.selectors.-webkit-scrollbar-corner")}}

### `::-webkit-resizer`

{{Compat("css.selectors.-webkit-resizer")}}

## Veja Também

- WebKit blog em [Estilizando barras de rolagem](https://webkit.org/blog/363/styling-scrollbars/)
- [Testando WebKit](https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/overflow-scrollbar-combinations.html) para os estilos da barra de rolagem mencionados acima
- {{CSSxRef("scrollbar-width")}}
- {{CSSxRef("scrollbar-color")}}
