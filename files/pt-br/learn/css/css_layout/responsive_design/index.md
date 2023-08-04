---
title: Design Responsivo
slug: Learn/CSS/CSS_layout/Responsive_Design
---

{{learnsidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Multiple-column_Layout", "Learn/CSS/CSS_layout/Media_queries", "Learn/CSS/CSS_layout")}}

Nos primórdios do web design, páginas eram criadas para serem visualizadas em um tamanho de tela específico. Se o usuário tivesse uma tela maior ou menor do que o esperado, os resultados iam de barras de rolagem indesejadas, tamanhos de linha excessivamente longos e uso inadequado do espaço. À medida que diferentes tamanhos de tela foram aparecendo, surgiu o conceito de web design responsivo (RWD), um conjunto de práticas que permite que páginas da Web alterem seu layout e aparência para se adequarem a diferentes larguras, resoluções, etc. É uma ideia que mudou a forma de como projetamos para a Web com múltiplos dispositivos e, neste artigo, ajudaremos você a entender as principais técnicas que você precisa conhecer para dominá-la.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        HTML básico (estude
        <a href="/pt-BR/docs/Learn/HTML/Introduction_to_HTML"
          >Introduction to HTML</a
        >), e uma idea de como o CSS funciona (estude
        <a href="/pt-BR/docs/Learn/CSS/First_steps">CSS first steps</a> e
        <a href="/pt-BR/docs/Learn/CSS/Building_blocks">CSS building blocks</a
        >.)
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Entender os conceitos fundamentais e a história do design responsivo.
      </td>
    </tr>
  </tbody>
</table>

## História dos layouts de sites

Em algum ponto da história, você tinha duas opções ao criar um site:

- Você pode criar um site _líquido_, que se estenderia para preencher a janela do navegador
- ou um site de _largura fixa_, que seria um tamanho fixo em pixels.

Essas duas abordagens, geralmente, resultavam em um site com a melhor aparência na tela da pessoa que o projetava! O site líquido resultou em um design esmagado para telas menores (como visto abaixo) e comprimentos de linha muito longos em telas maiores.

![A layout with two columns squashed into a mobile size viewport.](mdn-rwd-liquid.png)

> **Nota:** Veja este layout líquido simples: [exemplo](https://mdn.github.io/css-examples/learn/rwd/liquid-width.html), [código-fonte](https://github.com/mdn/css-examples/blob/master/learn/rwd/liquid-width.html). Ao visualizar o exemplo, arraste a janela do navegador para dentro e para fora para ver como isso fica em tamanhos diferentes.

O site de largura fixa criava uma barra de rolagem horizontal em telas menores que a largura do site (como mostrado abaixo) e muito espaço em branco nas bordas do design em telas maiores.

![A layout with a horizontal scrollbar in a mobile viewport.](mdn-rwd-fixed.png)

> **Nota:** Veja este layout simples de largura fixa: [exemplo](https://mdn.github.io/css-examples/learn/rwd/fixed-width.html), [código-fonte](https://github.com/mdn/css-examples/blob/master/learn/rwd/fixed-width.html). Observe novamente o resultado ao alterar o tamanho da janela do navegador.

> **Nota:** As capturas de tela acima foram tiradas usando o [Responsive Design Mode](/pt-BR/docs/Tools/Responsive_Design_Mode) no Firefox DevTools.

À medida que a Web para dispositivos móveis começava a se tornar realidade com os primeiros telefones com essas características, empresas que desejavam adotar os dispositivos móveis geralmente criavam uma versão mobile do seu site, com uma URL diferente (geralmente algo como m.exemplo.com ou exemplo.mobi) Isso significava que duas versões separadas do site tinham que ser desenvolvidas e mantidas atualizadas.

Além disso, esses sites para celular geralmente ofereciam uma experiência muito restrita. À medida que os dispositivos móveis se tornaram mais poderosos e capazes de exibir sites completos, os usuários de celular ficaram frustrados, pois, se viram presos na versão mobile do site e incapazes de acessar todas as informações que faziam parte da versão para desktop.

## Layouts flexiveis antes do design responsivo

Várias abordagens foram desenvolvidas para tentar resolver as desvantagens dos métodos de largura líquida ou largura fixa da construção de sites. Em 2004, Cameron Adams escreveu um artigo intitulado [Resolution dependent layout](http://www.themaninblue.com/writing/perspective/2004/09/21/), descrevendo um método para criar um design que pudesse se adaptar a diferentes resoluções de tela. Essa abordagem necessitava do JavaScript para detectar a resolução da tela e carregar o CSS correto.

Zoe Mickley Gillenwater foi fundamental no [seu trabalho](http://zomigi.com/blog/voices-that-matter-slides-available/) de descrever e formalizar as diferentes maneiras pelas quais sites flexíveis poderiam ser criados, tentando encontrar um meio termo entre preencher a tela ou ter tamanho completamente fixo.

## Design Responsivo

O termo design responsivo foi [cunhado por Ethan Marcotte em 2010](https://alistapart.com/article/responsive-web-design/), e descreveu o uso de três técnicas combinadas.

1. A primeira foi a ideia de grids fluidas, que já estava sendo explorada por Gillenwater, e pode ser encontrada no artigo de Marcotte, [Fluid Grids](https://alistapart.com/article/fluidgrids/) (publicado em 2009 em A List Apart).
2. A segunda técnica foi a ideia de [imagens fluidas](http://unstoppablerobotninja.com/entry/fluid-images). Usando uma técnica muito simples que setava a propriedade `max-width` com `100%`, as imagens seriam reduzidas se a coluna que as continha se tornasse mais estreita que o tamanho intrínseco da imagem, mas nunca aumentariam. Isso permitiu que uma imagem fosse reduzida em tamanho para caber em uma coluna de tamanho flexível, em vez de transbordar, mas não aumentava e nem tornava-se pixelizada se a coluna fosse mais larga que a imagem.
3. O terceiro componente-chave foi a [media query](/pt-BR/docs/Web/CSS/Media_Queries). Media Queries habilitavam o tipo de opção de layout usando o JavaScript, que Cameron Adams havia explorado anteriormente, usando apenas CSS. Em vez de ter um layout para todos os tamanhos de tela, o layout podia ser alterado. As barras laterais podiam ser reposicionadas para a tela menor ou uma navegação alternativa podia ser exibida.

É importante entender que **o design responsivo não é uma tecnologia separada** — é um termo usado para descrever uma abordagem ao web design, ou um conjunto de melhores práticas, usado para criar um layout que possa _responder_ ao dispositivo que está sendo usado para visualizar o conteúdo. Na exploração original de Marcotte, isso significava grades flexíveis (usando floats) e media queries, no entanto, nos últimos 10 anos, desde que o artigo foi escrito, trabalhar de forma responsiva se tornou um padrão. Os métodos de layout CSS modernos são inerentemente responsivos, e temos coisas novas incorporadas à plataforma web para facilitar o design de sites responsivos.

O restante deste artigo indicará os vários recursos da plataforma web que você pode usar ao criar um site responsivo.

## Media Queries

O Design Responsivo apenas foi capaz de emergir devido o recurse de media query. A especificação Media Queries Level 3 se tornou uma Recomendação de Candidato em 2009, significando que estava pronto para ser implementado nos browsers. Media Queries nos permitem executar uma série de testes (e.g. se a tela do usuário é maior que uma certa largura, ou uma certa resolução) e aplicar um CSS seletivamente para estilizar a página de acordo com as necessidades do usuário.

Por exemplo, a seguinte media querie testa se a página atual está sendo exibida como mídia de tela (portanto, não é um documento impresso) e o viewport tem pelo menos 800 pixels de largura. O CSS para o seletor `.container` será aplicado apenas se essas duas condições forem verdade.

```css
@media screen and (min-width: 800px) {
  .container {
    margin: 1em 2em;
  }
}
```

Você pode adicionar múltiplos media queries dentro de uma folha de estilo, ajustando inteiramente seu layout ou partes dele que melhor se adequem a vários tamanhos de tela. Os pontos em quem uma Media Query é introduzida e o layout alterado são conhecidos como _breakpoints_.

Uma abordagem comum ao utilizar Media Queries é criar um layout de única coluna para dispositivos de telas pequenas (e.g smartphones), então fazer a checagem para telas maiores e implementar um layout de múltiplas colunas quando houver largura suficiente. Esse design é frequentemente descrito como **mobile first**.

Encontre mais detalhes na documentação MDN para [Media Queries](/pt-BR/docs/Web/CSS/Media_Queries).

## Grids Flexíveis

Sites responsivos não apenas mudam seu layout entre _breakpoints_, eles são construídos em grids flexíveis. Um grid flexível significa que não há necessidade de marcar todos os tamanhos possíveis existentes, e sim, construir um layout perfeito baseado em pixels que se adequa automaticamente à tela. Essa abordagem seria impossível dado o vasto número de dispositivos com tamanhos diferentes que existem e o fato de que, mesmo nos desktops, as pessoas nem sempre utilizam a janela do navegador maximizada.

Com o uso de um grid flexível, não há necessidade de adicionar um _breakpoint_ e alterar o desing no ponto onde o conteúdo começa a parecer ruim em determinada tela. Por exemplo, se o comprimento da linha se torna ilegível à medida que o tamanho da tela aumenta, ou uma caixa se fica espremida com duas palavras em cada linha, conforme o tamanho diminui.

Nos primórdios do design responsivo a única opção disponível para realizar layouts era utilizando [floats](/pt-BR/docs/Learn/CSS/CSS_layout/Floats). Layouts flexíveis flutuantes eram alcançados dando a cada elemento uma largura percentual, garantindo que em todo layout os totais não fossem maior que 100%. In his original piece on fluid grids, Marcotte detailed a formula for taking a layout designed using pixels and converting it into percentages.

```
target / context = result
```

For example if our target column size is 60 pixels, and the context (or container) it is in is 960 pixels, we divide 60 by 960 to get a value we can use in our CSS, after moving the decimal point two places to the right.

```css
.col {
  width: 6.25%; /* 60 / 960 = 0.0625 */
}
```

This approach will be found in many places across the web today, and it is documented here in the layout section of our [Legacy layout methods](/pt-BR/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods) article. It is likely that you will come across websites using this approach in your work, so it is worth understanding it, even though you would not build a modern site using a float-based flexible grid.

The following example demonstrates a simple responsive design using Media Queries and a flexible grid. On narrow screens the layout displays the boxes stacked on top of one another:

![A mobile view of the layout with boxes stacked on top of each other vertically.](mdn-rwd-mobile.png)

On wider screens they move to two columns:

![A desktop view of a layout with two columns.](mdn-rwd-desktop.png)

> **Nota:** You can find the [live example](https://mdn.github.io/css-examples/learn/rwd/float-based-rwd.html) and [source code](https://github.com/mdn/css-examples/blob/master/learn/rwd/float-based-rwd.html) for this example on GitHub.

## Modern layout technologies

Modern layout methods such as [Multiple-column layout](/pt-BR/docs/Learn/CSS/CSS_layout/Multiple-column_Layout), [Flexbox](/pt-BR/docs/Learn/CSS/CSS_layout/Flexbox), and [Grid](/pt-BR/docs/Learn/CSS/CSS_layout/Grids) are responsive by default. They all assume that you are trying to create a flexible grid and give you easier ways to do so.

### Multicol

The oldest of these layout methods is multicol — when you specify a `column-count`, this indicates how many columns you want your content to be split into. The browser then works out the size of these, a size that will change according to the screen size.

```css
.container {
  column-count: 3;
}
```

If you instead specify a `column-width`, you are specifying a _minimum_ width. The browser will create as many columns of that width as will comfortably fit into the container, then share out the remaining space between all the columns. Therefore the number of columns will change according to how much space there is.

```css
.container {
  column-width: 10em;
}
```

### Flexbox

In Flexbox, flex items will shrink and distribute space between the items according to the space in their container, as their initial behavior. By changing the values for `flex-grow` and `flex-shrink` you can indicate how you want the items to behave when they encounter more or less space around them.

In the example below the flex items will each take an equal amount of space in the flex container, using the shorthand of `flex: 1` as described in the layout topic [Flexbox: Flexible sizing of flex items](/pt-BR/docs/Learn/CSS/CSS_layout/Flexbox#Flexible_sizing_of_flex_items).

```css
.container {
  display: flex;
}

.item {
  flex: 1;
}
```

> **Nota:** As an example we have rebuilt the simple responsive layout above, this time using flexbox. You can see how we no longer need to use strange percentage values to calculate the size of the columns: [example](https://mdn.github.io/css-examples/learn/rwd/flex-based-rwd.html), [source code](https://github.com/mdn/css-examples/blob/master/learn/rwd/flex-based-rwd.html).

### CSS grid

In CSS Grid Layout the `fr` unit allows the distribution of available space across grid tracks. The next example creates a grid container with three tracks sized at `1fr`. This will create three column tracks, each taking one part of the available space in the container. You can find out more about this approach to create a grid in the Learn Layout Grids topic, under [Flexible grids with the fr unit](/en-US/docs/Learn/CSS/CSS_layout/Grids#Flexible_grids_with_the_fr_unit).

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

> **Nota:** The grid layout version is even simpler as we can define the columns on the .wrapper: [example](https://mdn.github.io/css-examples/learn/rwd/grid-based-rwd.html), [source code](https://github.com/mdn/css-examples/blob/master/learn/rwd/grid-based-rwd.html).

## Responsive images

The simplest approach to responsive images was as described in Marcotte's early articles on responsive design. Basically, you would take an image that was at the largest size that might be needed, and scale it down. This is still an approach used today, and in most stylesheets you will find the following CSS somewhere:

```css
img {
  max-width: 100%:
}
```

There are obvious downsides to this approach. The image might be displayed a lot smaller than its intrinsic size, which is a waste of bandwidth — a mobile user may be downloading an image several times the size of what they actually see in the browser window. In addition, you may not want the same image aspect ratio on mobile as on desktop. For example, it might be nice to have a square image for mobile, but show the same scene as a landscape image on desktop. Or, acknowledging the smaller size of an image on mobile you might want to show a different image altogether, one which is more easily understood at a small screen size. These things can't be achieved by simply scaling down an image.

Responsive Images, using the [`<picture>`](/pt-BR/docs/Web/HTML/Element/picture) element and the [`<img>`](/pt-BR/docs/Web/HTML/Element/img) `srcset` and `sizes` attributes solve both of these problems. You can provide multiple sizes along with "hints" (meta data that describes the screen size and resolution the image is best suited for), and the browser will choose the most appropriate image for each device, ensuring that a user will download an image size appropriate for the device they are using.

You can also _art direct_ images used at different sizes, thus providing a different crop or completely different image to different screen sizes.

You can find a detailed [guide to Responsive Images in the Learn HTML section](/pt-BR/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) here on MDN.

## Responsive typography

An element of responsive design not covered in earlier work was the idea of responsive typography. Essentially, this describes changing font sizes within media queries to reflect lesser or greater amounts of screen real estate.

In this example, we want to set our level 1 heading to be `4rem`, meaning it will be four times our base font size. That's a really large heading! We only want this jumbo heading on larger screen sizes, therefore we first create a smaller heading then use media queries to overwrite it with the larger size if we know that the user has a screen size of at least 1200px.

```css
html {
  font-size: 1em;
}

h1 {
  font-size: 2rem;
}

@media (min-width: 1200px) {
  h1 {
    font-size: 4rem;
  }
}
```

We have edited our responsive grid example above to also include responsive type using the method outlined. You can see how the heading switches sizes as the layout goes to the two column version.

On mobile the heading is smaller:

![A stacked layout with a small heading size.](mdn-rwd-font-mobile.png)

On desktop however we see the larger heading size:

![A two column layout with a large heading.](mdn-rwd-font-desktop.png)

> **Nota:** See this example in action: [example](https://mdn.github.io/css-examples/learn/rwd/type-rwd.html), [source code](https://github.com/mdn/css-examples/blob/master/learn/rwd/type-rwd.html).

As this approach to typography shows, you do not need to restrict media queries to only changing the layout of the page. They can be used to tweak any element to make it more usable or attractive at alternate screen sizes.

### Using viewport units for responsive typography

An interesting approach is to use the viewport unit `vw` to enable responsive typography. `1vw` is equal to one percent of the viewport width, meaning that if you set your font size using `vw`, it will always relate to the size of the viewport.

```css
h1 {
  font-size: 6vw;
}
```

The problem with doing the above is that the user loses the ability to zoom any text set using the vw unit, as that text is always related to the size of the viewport. **Therefore you should never set text using viewport units alone**.

There is a solution, and it involves using [`calc()`](/pt-BR/docs/Web/CSS/calc). If you add the `vw` unit to a value set using a fixed size such as `em`s or `rem`s then the text will still be zoomable. Essentially, the `vw` unit adds on top of that zoomed value:

```css
h1 {
  font-size: calc(1.5rem + 3vw);
}
```

This means that we only need to specify the font size for the heading once, rather than set it up for mobile and redefine it in the media queries. The font then gradually increases as you increase the size of the viewport.

> **Nota:** See an example of this in action: [example](https://mdn.github.io/css-examples/learn/rwd/type-vw.html), [source code](https://github.com/mdn/css-examples/blob/master/learn/rwd/type-vw.html).

## The viewport meta tag

If you look at the HTML source of a responsive page, you will usually see the following {{htmlelement("meta")}} tag in the `<head>` of the document.

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

This meta tag tells mobile browsers that they should set the width of the viewport to the device width, and scale the document to 100% of its intended size, which shows the document at the mobile-optimized size that you intended.

Why is this needed? Because mobile browsers tend to lie about their viewport width.

This meta tag exists because when the original iPhone launched and people started to view websites on a small phone screen, most sites were not mobile optimized. The mobile browser would therefore set the viewport width to 960 pixels, render the page at that width, and show the result as a zoomed-out version of the desktop layout. Other mobile browsers (e.g. on Google Android) did the same thing. Users could zoom in and pan around the website to view the bits they were interested in, but it looked bad. You will still see this today if you have the misfortune to come across a site that does not have a responsive design.

The trouble is that your responsive design with breakpoints and media queries won't work as intended on mobile browsers. If you've got a narrow screen layout that kicks in at 480px viewport width or less, and the viewport is set at 960px, you'll never see your narrow screen layout on mobile. By setting `width=device-width` you are overriding Apple's default `width=960px` with the actual width of the device, so your media queries will work as intended.

**So you should _always_ include the above line of HTML in the head of your documents.**

There are other settings you can use with the viewport meta tag, however in general the above line is what you will want to use.

- `initial-scale`: Sets the initial zoom of the page, which we set to 1.
- `height`: Sets a specific height for the viewport.
- `minimum-scale`: Sets the minimum zoom level.
- `maximum-scale`: Sets the maximum zoom level.
- `user-scalable`: Prevents zooming if set to `no`.

You should avoid using `minimum-scale`, `maximum-scale`, and in particular setting `user-scalable` to `no`. Users should be allowed to zoom as much or as little as they need to; preventing this causes accessibility problems.

## Summary

Responsive design refers to a site or application design that responds to the environment in which it is viewed. It encompasses a number of CSS and HTML features and techniques, and is now essentially just how we build websites by default. Consider the sites that you visit on your phone — it is probably fairly unusual to come across a site that is the desktop version scaled down, or where you need to scroll sideways to find things. This is because the web has moved to this approach of designing responsively.

It has also become much easier to achieve responsive designs with the help of the layout methods you have learned in these lessons. If you are new to web development today you have many more tools at your disposal than in the early days of responsive design. It is therefore worth checking the age of any materials you are referencing. While the historical articles are still useful, modern use of CSS and HTML makes it far easier to create elegant and useful designs, no matter what device your visitor views the site with.

{{PreviousMenuNext("Learn/CSS/CSS_layout/Multiple-column_Layout", "Learn/CSS/CSS_layout/Media_queries", "Learn/CSS/CSS_layout")}}
