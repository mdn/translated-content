---
title: background-size
slug: Web/CSS/background-size
---

{{CSSRef}}

A propriedade **`background-size`** do [CSS](/pt-BR/docs/CSS) especifica o tamanho das imagens de fundo. O tamanho da imagem pode ser totalmente ou apenas parcialmente comprimido com o objetivo de preservar sua proporção.

```css
/* Sintaxe */
background-size: cover;
background-size: contain;

/* Sintaxe de um valor */
/* largura da imagem (height é setado como 'auto') */
background-size: 50%;
background-size: 3em;
background-size: 12px;
background-size: auto;

/* Sintaxe de dois valores */
/* Primeiro valor: largura da imagem, segundo valor: altura */
background-size: 50% auto;
background-size: 3em 25%;
background-size: auto 6px;
background-size: auto auto;

/* Múltiplos valores de backgrounds para a imagem de fundo */
/* Não confunda com background-size: auto auto */
background-size: auto, auto;
background-size: 50%, 25%, 25%;
background-size: 6px, auto, contain;

/* Valores globais */
background-size: inherit;
background-size: initial;
background-size: unset;
```

```html hidden
<div id="container">
  <div class="subcontainer contain">contain</div>
  <div class="subcontainer cover">cover</div>
  <div class="subcontainer width">120px</div>
  <div class="subcontainer width-height">120px 200px</div>
</div>
```

```css hidden
#container {
   width: 100%;
   display:flex;
   justify-content: space-around;
   height: 300px;
   overflow: scroll;
   background-color: #EEEEEE;
}

.subcontainer {
  width: 100%;
  max-width: 200px;
  margin: 8px;
  padding: 5px;
  background-color: white;
  background-image: url("eagle.jpg");
  background-repeat: no-repeat;
  color: white;
  font-family: monospace;
}

.contain {
  background-size: contain;
}

.cover {
  background-size: cover;
}

.width {
  background-size: 120px;
}

.width-height {
  background-size: 120px 200px;
}
```

{{EmbedLiveSample("background-size", "100%", 300, "", "", "example-outcome-frame")}}

{{cssinfo}}

## Sintaxe

O tamanho de uma única imagem de fundo pode ser especificado de três maneiras diferentes:

- usando a palavra-chave [`contain`](#contain)
- usando a palavra-chave [`cover`](#cover)
- usando valores para _width_ e _height_

Para especificar usando _width_ e _height_, você pode fornecer um ou dois valores:

- se apenas um valor for fornecido, ele valerá para a _width_ e height será[`auto`](#auto).
- Se dois valores forem fornecidos, o primeiro corresponde a _width_ e o segundo a _height_.

Cada valor pode ser um [`<length>`](#length), uma [`<percentage>`](#percentage), ou [`auto`](#auto).

Por exemplo:

```css
background-size: contain;

background-size: 50%;
background-size: 3em;

background-size: auto 1em;
background-size: 50% 25%;
```

Para especificar o tamanho de fundo para mais de uma imagem, forneça múltiplos tamanhos separados por vírgula:

```css
background-size: 50% 25%, contain, 3em;
```

### Valores

- `<length>`
  - : Um valor `{{cssxref("&lt;length&gt;")}}` que ajusta a imagem de fundo para o comprimento especificado na dimensão correspondente. Comprimentos negativos não são permitidos.
- `<percentage>`
  - : Um valor {{cssxref("&lt;percentage&gt;")}} que ajusta a imagem de fundo na dimensão correspondente com a porcentagem especificada para a área do elemento pai, que é determinado pelo valor {{cssxref("background-origin")}}. A área correspondente ao elemento pai é, por padrão, a área que engloba o conteúdo da caixa e seu respectivo padding; a área pode também ser alterada para englobar apenas o conteúdo ou para a área contendo as bordas, o padding e o conteúdo. Se o {{cssxref("background-attachment","attachment")}} está `fixed`, a área do elemento pai é a área inteira do janela do navegador, não incluindo a área coberta pelas barras de rolagem (se estiverem presentes). Valores negativos de porcentagem não são permitidos.
- `auto`
  - : Uma palavra-chave que ajusta a imagem de fundo para tal direção de modo que mantenha a proporção da imagem inalterada.
- `contain`
  - : Uma palavra-chave que aumenta o máximo possível a imagem mantendo a sua proporção (a imagem não fica esticada). A imagem tenta ocupar o espaço inteiro do container. Quando a imagem e o container tem diferentes dimensões, as áreas não preenchidas (tanto top/bottom ou left/right) são preenchidas com a cor de fundo.
- `cover`
  - : Uma palavra-chave que é o inverso de `contain`. Ajusta a imagem o mais largamente possível e mantém sua proporção (a imagem não fica esticada). A imagem "cobre" o container inteiro, tanto em altura como em largura. Quando a imagem e o container têm diferentes dimensões,_a imagem ultrapassa os limites do container_ em qualquer direção, para continuar mantendo a proporção.

A interpretação dos possíveis valores depende das dimensões intrínsecas da imagem (largura e altura) e da proporção intrínseca (proporção da largura e altura). Um imagem bitmap sempre tem dimensões intrínsecas e uma proporção intrínseca. Uma imagem pode conter ambas as dimensões intrínsecas (e portanto deve ter uma proporção intrínseca). Poderá contar também uma ou nenhuma dimensão intrínseca, e portanto pode ou não pode conter uma proporção intrínseca. Gradients são tratados como imagens sem dimensões ou proporções intrínsecas.

> **Nota:** Esse comportamento mudou no Gecko 8.0. Antes disso, gradients eram tratados como imagens sem dimensões intrínsecas, porém com uma proporção intrínseca idêntica a da área do elemento pai.

Imagens geradas por elementos usando {{cssxref("-moz-element")}} (que na realidade casa com um elemento) são atualmente tratadas como imagens com as dimensões do elemento, ou da área de posicionamento de fundo se o elemento é SVG, com a proporção intrínseca correspondente.

> **Nota:** Este não é o comportamento atualmente especificado, que é que as dimensões intrínsecas e a proporção devem ser as do elemento em todos os casos.

O tamanho renderizado da imagem de fundo é então computado da seguinte forma:

- Se ambos os componentes do `background-size` são especificados e não há `auto`
  - : A imagem de fundo é renderizada no tamanho especificado.
- Se o `background-size` é `contain` ou `cover`:
  - : A imagem é renderizada, preservando sua proporção intrínseca, com o maior tamanho contido, ou cobrindo a área do elemento pai. Se a imagem não tiver uma proporção intrínseca, então ela é renderizada no tamanho da área do elemento pai.
- Se o `background-size` é `auto` ou `auto auto`:

  - : Se a imagem tiver duas dimensões intrínsecas, ela é renderizada nesse tamanho. Se não tiver dimensões intrínsecas e nenhuma proporção intrínseca, ela é renderizada ao tamanho da área do elemento pai. Se não tiver dimensões, mas tiver uma proporção, é processado como se `contain` tivesse sido especificado. Se a imagem tiver uma dimensão intrínseca e uma proporção, ela é renderizada no tamanho determinado por essa dimensão e a proporção. Se a imagem tiver uma dimensão intrínseca mas nenhuma proporção, ela é processada usando a dimensão intrínseca e a dimensão correspondente da área do elemento pai.

    > **Nota:** imagens SVG tem um atributo [preserveAspectRatio](/pt-BR/docs/Web/SVG/Attribute/preserveAspectRatio) que é equivalente ao 'contain'. No Firefox 43, ao contrário do Chrome 52, um background-size especificado explicitamente faz com que [preserveAspectRatio](/pt-BR/docs/Web/SVG/Attribute/preserveAspectRatio) seja ignorado.

- Se o background-size tem um componente `auto` e um componente não `auto`:
  - : Se a imagem tiver uma proporção intrínseca, então use a dimensão especificada. Se a imagem não tiver uma proporção intrínseca, use a dimensão especificada para essa dimensão. Para a outra dimensão, use a dimensão intrínseca correspondente da imagem se houver uma. Se não existe essa dimensão intrínseca, use a dimensão correspondente da área do elemento pai.

Observe que o dimensionamento de fundo para vectors que não possuem dimensões ou proporções intrínsecas ainda não está totalmente implementado em todos os navegadores. Tenha cuidado ao confiar no comportamento descrito acima e teste em vários navegadores (especificamente incluindo versões do Firefox 7 ou anteriores e Firefox 8 ou superior) para ter certeza de que diferentes renderizações são aceitáveis.

### Sintaxe formal

{{csssyntax}}

## Exemplos

[Essa demonstração do `background-size: cover`](http://whereswalden.com/files/mozilla/background-size/page-cover.html) e [essa demonstração do `background-size: contain`](http://whereswalden.com/files/mozilla/background-size/page-contain.html) foram feitas para você abrir em uma nova aba para ver como `contain` e `cover` se comportam quando as dimensões da área do elemento pai varia. [Essa séria de demonstrações de como `background-size` funciona e interage com outras propriedades `background-*`](http://whereswalden.com/files/mozilla/background-size/more-examples.html) devem ser suficientes para entender como usar `background-size` sozinho e em conjunto com outras propriedades.

## Notas

Se você estiver especificando um gradient como plano de fundo e tiver especificado um `background-size` junto, é melhor não especificar um tamanho que use um único componente setado como auto ou seja especificado usando apenas um valor de largura (por exemplo, `background-size: 50%`). A renderização de gradients em tais casos mudou no Firefox 8 e, no momento, geralmente é inconsistente em todos os navegadores, pois nem todos implementam a renderização em total conformidade com a especificação [`background-size`](https://www.w3.org/TR/css3-background/#the-background-size) do CSS3 e com a [especificação do CSS3 para valores de gradient](http://dev.w3.org/csswg/css3-images/#gradients).

```css
.bar {
       width: 50px; height: 100px;
       background-image: gradient(...);

       /* NÃO RECOMENDADO */
       background-size: 25px;
       background-size: 50%;
       background-size: auto 50px;
       background-size: auto 50%;

       /* OKAY */
       background-size: 25px 50px;
       background-size: 50% 50%;
}
```

Observe que, em particular, não é recomendável usar uma dimensão de pixel e uma dimensões `auto` com um gradient, porque é impossível replicar a renderização nas versões do Firefox antes de 8 e nos navegadores que não implementam a renderização do Firefox 8, sem saber o tamanho exato do elemento cujo plano de fundo está sendo especificado.

## Especificações

| Especificação                                                                                        | Status                                   | Comentário         |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------ |
| {{SpecName('CSS3 Backgrounds', '#the-background-size', 'background-size')}} | {{Spec2('CSS3 Backgrounds')}} | Initial definition |

## Compatibilidade com navegadores

{{Compat("css.properties.background-size")}}

## Soluções alternativas

### Para Internet Explorer anterior ao IE8

Como o Internet Explorer 8 não suporta a propriedade `background-size`, é possível emular algumas de suas funcionalidades usando a propriedade não padrão `-ms-filter`:

```css
-ms-filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='path_relative_to_the_HTML_file', sizingMethod='scale')";
```

Isso simula o valor `cover`.

### No Firefox 3.5

Enquanto essa propriedade foi adicionada no Firefox 3.6, é possível esticar totalmente a imagem no Firefox 3.5 usando {{cssxref("-moz-border-image")}}.

```css
.foo {
  background-image: url(bg-image.png);

  -webkit-background-size: 100% 100%;           /* Safari 3.0 */
     -moz-background-size: 100% 100%;           /* Gecko 1.9.2 (Firefox 3.6) */
       -o-background-size: 100% 100%;           /* Opera 9.5 */
          background-size: 100% 100%;           /* Gecko 2.0 (Firefox 4.0) and other CSS3-compliant browsers */

  -moz-border-image: url(bg-image.png) 0;    /* Gecko 1.9.1 (Firefox 3.5) */
}
```

## Veja também

- [CSS Reference](/pt-BR/docs/CSS/CSS_Reference)
- [Multiple backgrounds](/pt-BR/docs/CSS/Multiple_backgrounds)
- [Scaling background images](/pt-BR/docs/CSS/Scaling_background_images)
