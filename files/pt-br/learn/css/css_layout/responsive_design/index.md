---
title: Design Responsivo
slug: Learn/CSS/CSS_layout/Responsive_Design
---

{{learnsidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Multiple-column_Layout", "Learn/CSS/CSS_layout/Media_queries", "Learn/CSS/CSS_layout")}}

Design Responsivo, também conhecido como Web Design Responsivo (RWD na sigla em inglês), é uma abordagem para o design e desenvolvimento de páginas web que tem por objetivo permitir uma boa renderização e usabilidade dessas páginas
em todas as telas, independentemente de qual seja o tamanho ou a resolução da tela.

Essa abordagem, atualmente tornada como o padrão de boas práticas no contexto do desenvolvimento web, mudou drasticamente a forma como se projetavam páginas web até então e nesse artigo apresentamos algumas técnicas para dominá-la
e aplicá-la de maneira efetiva em projetos no decorrer do seu aprendizado.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        noções de HTML básico (estude
        <a href="/pt-BR/docs/Learn/HTML/Introduction_to_HTML"
          >Introdução ao HTML</a
        >), e noções sobre como o CSS funciona (estude
        <a href="/pt-BR/docs/Learn/CSS/First_steps">CSS - Primeiros Passos</a> e
        <a href="/pt-BR/docs/Learn/CSS/Building_blocks">CSS - Blocos de Construção</a
        >.)
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Entender os conceitos fundamentais, um pouco da história do design responsivo e.
      </td>
    </tr>
  </tbody>
</table>

## A era pré-Design Responsivo

Nos primórdios do web design, páginas eram criadas para serem visualizadas em um tamanho de tela específico, usualmente o de telas de computadores pessoais (PCs) do tipo desktop. Se o usuário tivesse uma tela maior ou menor do que o esperado, efeitos colaterais desse tipo de design estático poderiam variar desde barras de rolagem indesejadas, tamanhos de linha excessivamente longos até uso inadequado do espaço. À medida que diferentes tamanhos de tela foram aparecendo, surgiu o conceito de web design responsivo (RWD), um conjunto de práticas que permite que páginas da Web alterem seu layout e aparência para se adequarem a diferentes larguras, resoluções, etc. É uma ideia que mudou a forma de como projetamos para a Web com múltiplos dispositivos e, neste artigo, ajudaremos você a entender as principais técnicas que você precisa conhecer para dominá-la.

<!-- foram aparecendo combinado com avanços significativos nas capacidades de processamento e de largura de banda dos dispositivos utilizados, surgiu primeiramente a ideia de web design móvel, amigável com os dispositivos móveis, que apesar de ser bastante similar em alguns aspectos com o conceito de web Design Responsivo (RWD), que passou a ser o denominador comum de um conjunto de práticas que permite que páginas da Web alterem seu layout e aparência para se adequarem a diferentes larguras, resoluções, etc.
Essa foi apenas uma das soluções propostas
-->

Nesse ponto da história, você tinha duas opções principais ao criar um site:

- Você pode criar um site _líquido_ ou _fluído_, que se estenderia para preencher a janela do navegador
- ou um site de _largura fixa_, que seria um tamanho fixo em pixels.

Essas duas abordagens, geralmente, resultavam em um site com a melhor aparência na tela da pessoa que o projetava! O site líquido resultava em um design esmagado para telas menores (como visto abaixo) e comprimentos de linha muito longos em telas maiores.

![A layout with two columns squashed into a mobile size viewport.](mdn-rwd-liquid.png)

> [!NOTE]
> Veja este layout líquido simples: [exemplo](https://mdn.github.io/css-examples/learn/rwd/liquid-width.html), [código-fonte](https://github.com/mdn/css-examples/blob/master/learn/rwd/liquid-width.html). Ao visualizar o exemplo, arraste a janela do navegador para dentro e para fora para ver como isso fica em tamanhos diferentes.

Já o site de largura fixa criava uma barra de rolagem horizontal em telas menores que a largura do site (como mostrado abaixo) e muito espaço em branco nas bordas do design em telas maiores.

![A layout with a horizontal scrollbar in a mobile viewport.](mdn-rwd-fixed.png)

> [!NOTE]
> Veja este layout simples de largura fixa: [exemplo](https://mdn.github.io/css-examples/learn/rwd/fixed-width.html), [código-fonte](https://github.com/mdn/css-examples/blob/master/learn/rwd/fixed-width.html). Observe novamente o resultado ao alterar o tamanho da janela do navegador.

> [!NOTE]
> As capturas de tela acima foram tiradas usando o [Responsive Design Mode](/pt-BR/docs/Tools/Responsive_Design_Mode) no Firefox DevTools.

Contudo, na medida que a Web para dispositivos móveis começava a se tornar realidade com os primeiros telefones com essas características, empresas que desejavam adotar os dispositivos móveis geralmente criavam uma versão mobile do seu site, com uma URL diferente (geralmente algo como m.exemplo.com ou exemplo.mobi) Isso significava que duas versões separadas do site tinham que ser desenvolvidas e mantidas atualizadas.

Além disso, esses sites para celular geralmente ofereciam uma experiência muito restrita. À medida que os dispositivos móveis se tornaram mais poderosos e capazes de exibir sites completos, os usuários de celular ficaram frustrados, pois, se viram presos na versão mobile do site e incapazes de acessar todas as informações que faziam parte da versão para desktop.

## Layouts flexiveis antes do Design Responsivo

Várias abordagens foram desenvolvidas para tentar resolver as desvantagens dos métodos de largura líquida ou largura fixa da construção de sites. Em 2004, Cameron Adams escreveu um artigo intitulado [Resolution dependent layout](http://www.themaninblue.com/writing/perspective/2004/09/21/), descrevendo um método para criar um design que pudesse se adaptar a diferentes resoluções de tela. Essa abordagem necessitava do JavaScript para detectar a resolução da tela e carregar o CSS correto.

Zoe Mickley Gillenwater foi fundamental no [seu trabalho](http://zomigi.com/blog/voices-that-matter-slides-available/) de descrever e formalizar as diferentes maneiras pelas quais sites flexíveis poderiam ser criados, tentando encontrar um meio termo entre preencher a tela ou ter tamanho completamente fixo.

## Introduzindo o Design Responsivo

O termo design responsivo foi [cunhado por Ethan Marcotte em 2010](https://alistapart.com/article/responsive-web-design/), e descreveu o uso de três técnicas combinadas para atingir uma página com design de boa responsividade.

1. A primeira foi a ideia de grids flexíveis, que já estava sendo explorada por Gillenwater, e pode ser encontrada no artigo de Marcotte, [Fluid Grids](https://alistapart.com/article/fluidgrids/) (publicado em 2009 em A List Apart).
2. A segunda técnica foi a ideia de [imagens fluidas](http://unstoppablerobotninja.com/entry/fluid-images). Usando uma técnica muito simples que setava a propriedade `max-width` com `100%`, as imagens seriam reduzidas se a coluna que as continha se tornasse mais estreita que o tamanho intrínseco da imagem, mas nunca aumentariam. Isso permitiu que uma imagem fosse reduzida em tamanho para caber em uma coluna de tamanho flexível, em vez de transbordar, mas não aumentava e nem tornava-se pixelizada se a coluna fosse mais larga que a imagem.
3. O terceiro componente-chave foi a [media query](/pt-BR/docs/Web/CSS/Media_Queries). Media Queries habilitavam o tipo de opção de layout usando o JavaScript, que Cameron Adams havia explorado anteriormente, usando apenas CSS. Em vez de ter um layout para todos os tamanhos de tela, o layout podia ser alterado. As barras laterais podiam ser reposicionadas para a tela menor ou uma navegação alternativa podia ser exibida.

É importante entender que **o design responsivo não é uma tecnologia separada** — é um termo usado para descrever uma abordagem ao web design, ou um conjunto de melhores práticas, usado para criar um layout que possa _responder_ de forma mais adequada ao dispositivo que está sendo usado para visualizar o conteúdo. Na exploração original de Marcotte, isso significava grids flexíveis fluídos (inicialmente construídas usando floats) e media queries, no entanto, nos últimos 10 anos, desde que o artigo foi escrito, trabalhar de forma responsiva se tornou um padrão. Os métodos de layout CSS modernos são inerentemente responsivos, e temos coisas novas incorporadas à plataforma web para facilitar o design de sites responsivos.

O restante deste artigo indicará informações sobre esses recursos para que você possa usá-los ao criar um site responsivo.

## Media Queries

O Design Responsivo apenas foi capaz de emergir em razão da existência do recurso de media query. A especificação de Media Queries de Nível 3 se tornou uma Recomendação de Candidato em 2009, significando que estava pronto para ser implementado nos browsers. Media Queries nos permitem executar uma série de testes (e.g. se a tela do usuário é maior que uma certa largura, ou uma certa resolução) e aplicar um CSS seletivamente para estilizar a página de acordo com as necessidades do usuário e as capacidades da tela pela qual ele acessa a página.

Por exemplo, a seguinte media query testa se a página atual está sendo exibida como mídia de tela (portanto, não é um documento impresso) e o viewport tem pelo menos 800 pixels de largura. O CSS para o seletor `.container` será aplicado apenas se essas duas condições forem verdade.

```css
@media screen and (min-width: 800px) {
  .container {
    margin: 1em 2em;
  }
}
```

Você pode adicionar múltiplos media queries dentro de uma folha de estilo, ajustando inteiramente seu layout ou partes dele que melhor se adequem a vários tamanhos de tela. Os pontos em quem uma Media Query é introduzida e o layout alterado são conhecidos como _breakpoints_.

Uma abordagem comum ao utilizar Media Queries é criar um layout de única coluna para dispositivos de telas pequenas (e.g smartphones), então fazer a checagem para telas maiores e implementar um layout de múltiplas colunas quando houver largura suficiente. Esse design é frequentemente descrito como **mobile first**.

Encontre mais detalhes sobre o assunto na documentação MDN para [Media Queries](/pt-BR/docs/Web/CSS/Media_Queries).

Media queries podem ajudar no design responsivo, mas não são obrigatórias.
Media queries can help with RWD, but are not a requirement. Flexible grids, relative units, and minimum and maximum unit values can be used without queries.

## Tecnologias de layout responsivo

Sites responsivos são alicerçados em grids flexíveis

<!-- -->

Modern layout methods such as [Multiple-column layout](/pt-BR/docs/Learn/CSS/CSS_layout/Multiple-column_Layout), [Flexbox](/pt-BR/docs/Learn/CSS/CSS_layout/Flexbox), and [Grid](/pt-BR/docs/Learn/CSS/CSS_layout/Grids) are responsive by default. They all assume that you are trying to create a flexible grid and give you easier ways to do so.

### Multicol

O mais antigo desses métodos de layout é o multicol -  quando você especifica uma `colum-count`, 
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

No Flexbox, items flex apresentam o comportamento inicial de encolher e distribuir espaço entre si de acordo com o espaço disponível no seu container. Mudando os valores para `flex-grow` e `flex-shrink`, conseguimos manipular como esses items devem se comportar quando ocorre de haver mais ou menos espaço ao redor.

No exemplo abaixo cada um dos items flex vai ocupar quantidades iguais de espaço no flex container, usando a propriedade abreviada `flex: 1` como está descrito no tópico de layout [Flexbox: Dimensionamento flexível de elementos flex](/pt-BR/docs/Learn/CSS/CSS_layout/Flexbox#Flexible_sizing_of_flex_items).

```css
.container {
  display: flex;
}

.item {
  flex: 1;
}
```

> [!NOTE]
> As an example we have rebuilt the simple responsive layout above, this time using flexbox. Você pode perceber que nós não precisamos how we no longer need to use strange percentage values to calculate the size of the columns: [exemplo](https://mdn.github.io/css-examples/learn/rwd/flex-based-rwd.html), [código-fonte](https://github.com/mdn/css-examples/blob/master/learn/rwd/flex-based-rwd.html).

### CSS grid

No CSS Layout Grid, a unidade `fr` permite distribuir o espaço disponível ao longo das faixas do grid. O exemplo a seguir cria um grid container com três faixas iguais de tamanho fixado em `1fr`. Isto irá criar três faixas em formato de colunas

In CSS Grid Layout the `fr` unit allows the distribution of available space across grid tracks. The next example creates a grid container with three tracks sized at `1fr`. This will create three column tracks, each taking one part of the available space in the container. You can find out more about this approach to create a grid in the Learn Layout Grids topic, under [Flexible grids with the fr unit](/pt-BR/docs/Learn/CSS/CSS_layout/Grids#flexible_grids_with_the_fr_unit).

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

> [!NOTE]
> The grid layout version is even simpler as we can define the columns on the .wrapper: [exemplo](https://mdn.github.io/css-examples/learn/rwd/grid-based-rwd.html), [código-fonte](https://github.com/mdn/css-examples/blob/master/learn/rwd/grid-based-rwd.html).

## Imagens Responsivas


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

## Tipografia responsiva 

Um elemento que não foi abordado nos trabalhos iniciais de design responsivo foi o da tipografia responsiva. Essencialmente, esse elemento descreve as mudanças nos tamanhos de fonte dentro das media queries ou através de unidades de viewport para reagir de forma reflexiva à quantidade de tela disponível.

### Usando Media Queries para tipografia responsiva

Neste exemplo, queremos configurar a nossa etiqueta de cabeçalho de nível 1 (h1) para ter a medida de `4rem`, ou seja 4 vezes o tamanho da nossa fonte base. Esse é uma etiqueta bem grande e por isso desejamos que esse tamanho extra grande ocorra somente em telas com tamanho suficiente para comportá-lo. 

Para fazer isso, primeiro criamos uma etiqueta de cabeçalho com tamanho bem menor para então usar media queries para sobrescrever o tamanho inicialmente definido pelo tamanho maior de `4rem` caso seja detectado que o usuário tem uma tela com no mínimo 1200px de tamanho.
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
Nós editamos nosso exemplo acima de grid responsivo com o método delineado. Você consegue observar como a seção da etiqueta de cabeçalho muda de tamanho conforme o layout chega na versão de duas colunas.

No dispositivo móvel, a seção de etiqueta de cabeçalho é menor:

![A stacked layout with a small heading size.](mdn-rwd-font-mobile.png)

No computador pessoal contudo, vemos o tamanho maior dessa seção da etiqueta de cabeçalho:

![A two column layout with a large heading.](mdn-rwd-font-desktop.png)

> [!NOTE]
> Veja esse exemplo funcionado em: [exemplo](https://mdn.github.io/css-examples/learn/rwd/type-rwd.html), [código fonte](https://github.com/mdn/css-examples/blob/master/learn/rwd/type-rwd.html).

As this approach to typography shows, you do not need to restrict media queries to only changing the layout of the page. They can be used to tweak any element to make it more usable or attractive at alternate screen sizes.

### Usando unidadades de Viewport para tipografia responsiva

Uma abordagem muito interessante para isso é usar a unidade de viewport `vw` para habilitar tipografia responsiva. O valor `1vw`é equivalente a um porcento (**1%**) da largura total do viewport, 
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

> [!NOTE]
> See an example of this in action: [example](https://mdn.github.io/css-examples/learn/rwd/type-vw.html), [source code](https://github.com/mdn/css-examples/blob/master/learn/rwd/type-vw.html).

## The viewport meta tag

If you look at the HTML source of a responsive page, you will usually see the following {{htmlelement("meta")}} tag in the `<head>` of the document.

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

This meta tag tells mobile browsers that they should set the width of the viewport to the device width, and scale the document to 100% of its intended size, which shows the document at the mobile-optimized size that you intended.

Why is this needed? Because mobile browsers tend to lie about their viewport width.

This meta tag exists because when the original iPhone launched and people started to view websites on a small phone screen, most sites were not mobile optimized. The mobile browser would therefore set the viewport width to 960 pixels, render the page at that width, and show the result as a zoomed-out version of the desktop layout. Other mobile browsers (e.g. on Google Android) did the same thing. Users could zoom in and pan around the website to view the bits they were interested in, but it looked bad. You will still see this today if you have the misfortune to come across a site that does not have a responsive design.

The trouble is that your responsive design with breakpoints and media queries won't work as intended on mobile browsers. If you've got a narrow screen layout that kicks in at 480px viewport width or less, and the viewport is set at 960px, you'll never see your narrow screen layout on mobile. By setting `width=device-width` you are overriding Apple's default `width=960px` with the actual width of the device, so your media queries will work as intended.

**Emtão você deve _SEMPRE_ includir a linha HTML de viewport na tag head dos seus documentos. So you should _always_ include the above line of HTML in the head of your documents.**

There are other settings you can use with the viewport meta tag, however in general the above line is what you will want to use.

- `initial-scale`: Sets the initial zoom of the page, which we set to 1.
- `height`: Sets a specific height for the viewport.
- `minimum-scale`: Sets the minimum zoom level.
- `maximum-scale`: Sets the maximum zoom level.
- `user-scalable`: Prevents zooming if set to `no`.

Você deve evitar o uso de `minimum-scale`, `maximum-scale` e em particular da configuração `user-scalable` com o valor de `no`. Usuários devem ter permissão para aumentar ou diminuir o zoom da tela tanto quanto for necessário; Quando o valor da configuração `user-scalable` está com o valor de `no`
You should avoid using `minimum-scale`, `maximum-scale`, and in particular setting `user-scalable` to `no`. Users should be allowed to zoom as much or as little as they need to; preventing this causes accessibility problems.

## Resumo

Em suma, Design Responsivo refere-se ao design de site ou aplicação que é capaz de reagir adequadamente ao ambiente no qual é visualizado, não importa qual sejam as características desse ambiente. Ela engloba algumas técnicas e recursos do HTML e do CSS

Responsive design refers to a site or application design that responds to the environment in which it is viewed. It encompasses a number of CSS and HTML features and techniques, and is now essentially just how we build websites by default. Consider the sites that you visit on your phone — it is probably fairly unusual to come across a site that is the desktop version scaled down, or where you need to scroll sideways to find things. This is because the web has moved to this approach of designing responsively.

It has also become much easier to achieve responsive designs with the help of the layout methods you have learned in these lessons. If you are new to web development today you have many more tools at your disposal than in the early days of responsive design. It is therefore worth checking the age of any materials you are referencing. While the historical articles are still useful, modern use of CSS and HTML makes it far easier to create elegant and useful designs, no matter what device your visitor views the site with.

{{PreviousMenuNext("Learn/CSS/CSS_layout/Multiple-column_Layout", "Learn/CSS/CSS_layout/Media_queries", "Learn/CSS/CSS_layout")}}
