---
title: Design Responsivo
slug: Learn/CSS/CSS_layout/Responsive_Design
---

{{learnsidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Multiple-column_Layout", "Learn/CSS/CSS_layout/Media_queries", "Learn/CSS/CSS_layout")}}

Design Responsivo, também conhecido como Web Design Responsivo (RWD na sigla em inglês), é uma abordagem para o design e desenvolvimento de páginas web que tem por objetivo permitir uma boa renderização e usabilidade dessas páginas em todas as telas, independentemente de qual seja o tamanho ou a resolução da tela.

Essa abordagem, atualmente tornada como o padrão de boas práticas no contexto do desenvolvimento web, mudou drasticamente a forma como se projetavam páginas web até então e nesse artigo apresentamos algumas técnicas para dominá-la e aplicá-la de maneira efetiva em projetos no decorrer do seu aprendizado.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        noções de HTML básico (veja
        <a href="/pt-BR/docs/Learn/HTML/Introduction_to_HTML"
          >Introdução ao HTML</a
        >), e noções sobre como o CSS funciona (veja
        <a href="/pt-BR/docs/Learn/CSS/First_steps">CSS - Primeiros Passos</a> e
        <a href="/pt-BR/docs/Learn/CSS/Building_blocks">CSS - Blocos de Construção</a
        >.)
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Entender os conceitos fundamentais, um pouco da história do design responsivo e os recursos do CSS utilizados para implementá-lo.
      </td>
    </tr>
  </tbody>
</table>

## Antes do Design Responsivo

Nos primórdios do web design, páginas eram criadas para serem visualizadas em um tamanho de tela específico, usualmente o de telas de computadores pessoais (PCs) do tipo desktop. Se o usuário tivesse uma tela maior ou menor do que o esperado, efeitos colaterais desse tipo de design estático poderiam variar desde barras de rolagem indesejadas, tamanhos de linha excessivamente longos até uso inadequado do espaço.

À medida que diferentes tamanhos de tela foram aparecendo, surgiu o conceito de web design responsivo (RWD), um conjunto de práticas que permite que páginas da Web alterem seu layout e aparência para se adequarem a diferentes larguras, resoluções, etc. É uma ideia que mudou a forma de como projetamos páginas e aplicações para a Web levando em conta múltiplos dispositivos e, neste artigo, ajudaremos você a entender as principais técnicas necessárias para dominá-la.

Nesse ponto da história, você tinha duas opções principais ao criar um site:

- Você poderia criar um site _líquido_ ou _fluído_, que se estenderia para preencher a janela do navegador
- ou um site de _largura fixa_, no qual o layout seria montado com tamanho fixado das suas medidas em pixels.

Geralmente o que acontecia é que qualquer uma das duas formas resultava em um site com a melhor aparência somente na tela da pessoa que o projetava! O site líquido acabava por produzir um design esmagado para telas menores (como visto abaixo) e comprimentos de linha muito longos em telas maiores.

![A layout with two columns squashed into a mobile size viewport.](mdn-rwd-liquid.png)

> [!NOTE]
> Veja este layout líquido simples: [exemplo](https://mdn.github.io/css-examples/learn/rwd/liquid-width.html), [código-fonte](https://github.com/mdn/css-examples/blob/master/learn/rwd/liquid-width.html). Ao visualizar o exemplo, arraste a janela do navegador para dentro e para fora para ver como isso fica em tamanhos diferentes.

Já o site de largura fixa criava uma barra de rolagem horizontal em telas menores que a largura do site (como mostrado abaixo) e muito espaço em branco nas bordas do design em telas maiores.

![A layout with a horizontal scrollbar in a mobile viewport.](mdn-rwd-fixed.png)

> [!NOTE]
> Veja este layout simples de largura fixa: [exemplo](https://mdn.github.io/css-examples/learn/rwd/fixed-width.html), [código-fonte](https://github.com/mdn/css-examples/blob/master/learn/rwd/fixed-width.html). Observe novamente o resultado ao alterar o tamanho da janela do navegador.

> [!NOTE]
> As capturas de tela acima foram tiradas usando o [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) no Firefox DevTools.

Outra variável que entrou na equação foi o fato que, à medida que o ambiente web para dispositivos móveis começava a se tornar bem mais presente com o lançamento dos primeiros smartphones, houve o surgimento de demanda por parte tanto de empresas que desejavam contemplar os usuários de dispositivos móveis quanto desses mesmos usuários. Para atender isso, muitas vezes era decidido que se criaria uma versão mobile do site, com uma URL diferente (geralmente algo como `m.exemplo.com` ou `exemplo.mobi`). Isso significava que duas versões separadas do site tinham que ser desenvolvidas e mantidas atualizadas, com as versões mobile frequentemente recebendo uma prioridade bem menor. Além disso, esses sites para celular geralmente ofereciam uma experiência muito restrita. À medida que os dispositivos móveis se tornaram mais poderosos e capazes de exibir sites completos, as limitações do design dos sites ficavam bem evidentes.

O meio-termo encontrado, antes do design responsivo tornar-se para a solução padrão para essa e outras situações, foi pensar os designs para que eles fossem mobile-friendly, isto é mais amigáveis com as particularidades presentes nos dispositivos móveis e essa forma de pensar recebeu ao longo do tempo outros nomes como web design mobile e desenvolvimento web mobile. Aqui encontramos ideias comuns que despontariam no design responsivo mais à frente, as principais diferenças entre essas duas abordagens tem a ver com os dispositivos envolvidos e as ferramentas de tecnologia disponíveis para construir as soluções.

## Layouts flexiveis antes do Design Responsivo

Várias abordagens foram desenvolvidas para tentar resolver as desvantagens dos métodos de largura líquida ou largura fixa da construção de sites. Em 2004, Cameron Adams escreveu um artigo intitulado [Resolution dependent layout](https://www.themaninblue.com/writing/perspective/2004/09/21/), descrevendo um método para criar um design que pudesse se adaptar a diferentes resoluções de tela. Essa abordagem necessitava do JavaScript para detectar a resolução da tela e carregar o CSS correto.

Zoe Mickley Gillenwater foi fundamental no [seu trabalho](http://zomigi.com/blog/voices-that-matter-slides-available/) de descrever e formalizar as diferentes maneiras pelas quais sites flexíveis poderiam ser criados, tentando encontrar um meio termo entre preencher a tela ou ter tamanho completamente fixo.

## Introduzindo o Design Responsivo

O termo design responsivo foi [cunhado por Ethan Marcotte em 2010](https://alistapart.com/article/responsive-web-design/), e descreveu o uso de três técnicas combinadas para atingir uma página com design de boa responsividade.

1. A primeira foi a ideia de grids flexíveis, que já estava sendo explorada por Gillenwater, e pode ser encontrada no artigo de Marcotte, [Fluid Grids](https://alistapart.com/article/fluidgrids/) (publicado em 2009 em A List Apart).
2. A segunda técnica foi a ideia de [imagens fluidas](https://unstoppablerobotninja.com/entry/fluid-images). Usando uma técnica muito simples que setava a propriedade `max-width` com `100%`, as imagens seriam reduzidas se a coluna que as continha se tornasse mais estreita que o tamanho intrínseco da imagem, mas nunca aumentariam. Isso permitiu que uma imagem fosse reduzida em tamanho para caber em uma coluna de tamanho flexível, em vez de transbordar, mas não aumentava e nem tornava-se pixelizada se a coluna fosse mais larga que a imagem.
3. O terceiro componente-chave foi a [media query](/pt-BR/docs/Web/CSS/CSS_media_queries). Media Queries habilitavam o tipo de opção de layout usando o JavaScript, que Cameron Adams havia explorado anteriormente, usando apenas CSS. Em vez de ter um layout para todos os tamanhos de tela, o layout podia ser alterado. As barras laterais podiam ser reposicionadas para a tela menor ou uma navegação alternativa podia ser exibida.

É importante entender que **o design responsivo não é uma tecnologia separada** — é um termo usado para descrever uma abordagem ao web design, ou um conjunto de melhores práticas, usado para criar um layout que possa _responder_ de forma mais adequada ao dispositivo que está sendo usado para visualizar o conteúdo. Na exploração original de Marcotte, isso significava grids flexíveis fluídos (inicialmente construídos usando floats) e media queries, no entanto, nos últimos 10 anos, desde que o artigo foi escrito, trabalhar de forma responsiva se tornou um padrão. Os métodos de layout CSS modernos são inerentemente responsivos, e temos coisas novas incorporadas à plataforma web para facilitar o design de sites responsivos.

O restante deste artigo indicará informações sobre esses recursos para que você possa usá-los ao criar um site responsivo.

## Media Queries

Media Queries nos permitem executar uma série de testes (e.g. se a tela do usuário é maior que uma certa largura, ou uma certa resolução) e aplicar um CSS seletivamente para estilizar a página de acordo com as necessidades do usuário e as capacidades da tela pela qual ele acessa a página.

Por exemplo, a seguinte media query testa se a página atual está sendo exibida como mídia de tela (portanto, não é um documento impresso) e o viewport tem pelo menos `800px` ou `80 rem` de largura. O CSS para o seletor `.container` será aplicado apenas se essas duas condições forem verdade.

```css
@media screen and (min-width: 800px) {
  .container {
    margin: 1em 2em;
  }
}
```

Você pode adicionar múltiplos media queries dentro de uma folha de estilo, ajustando inteiramente seu layout ou partes dele que melhor se adequem a vários tamanhos de tela. Os pontos em quem uma Media Query é introduzida e o layout alterado são conhecidos como _breakpoints_.

Uma abordagem comum ao utilizar Media Queries é criar um layout de única coluna para dispositivos de telas pequenas (e.g smartphones), então fazer a checagem para telas maiores e implementar um layout de múltiplas colunas quando houver largura suficiente. Esse design é frequentemente descrito como design **mobile first**.

Ao utilizar _breakpoints_, é uma boa prática optar por definir esses breakpoints de media queries com medidas em unidades relativas de comprimento como as listadas em [unidades relativas](/pt-BR/docs/Learn/CSS/Building_blocks/Values_and_units#relative_length_units) em oposição das medidas absolutas em pixels de um dispositivo qualquer.

Existem também, diferentes abordagens para os estilos definados dentro do bloco de media query; variando desde utilizar as media queries com o elemento [`<link>`](/pt-BR/docs/Web/HTML/Element/link) para ligar-se com diferentes folhas de estilo com base nos intervalos de tamanho do navegador até incluir apenas variáveis com propriedades customizadas para armazenar valores associados com cada _breakpoint_.

Encontre mais detalhes sobre o assunto na documentação MDN para [Media Queries](/pt-BR/docs/Web/CSS/CSS_media_queries).

Media queries podem ajudar no design responsivo, mas não são obrigatórias. Grids flexíveis, unidades relativas e valores de unidade máximos e mínimos podem ser utilizados sem as queries.

## Tecnologias de layout responsivo

Sites responsivos são alicerçados em grids flexíveis, isso significa que não é mais necessário o esforço hercúleo de criar um layout com medidas absolutas perfeitas para cada dispositivo possível existente que é capaz de acessar a sua página. Essa abordagem seria impraticável mesmo se fosse possível dado o vasto número de dispositivos com tamanhos diferentes que existem e o fato de que, mesmo nos desktops, as pessoas nem sempre utilizam a janela do navegador maximizada.

Ao utilizar um grid flexível, você pode mudar uma propriedade ou adicionar um _breakpoint_, para alterar o design onde quer que o conteúdo comece a ficar com exibição ruim. Por exemplo, para garantir que linhas não atinjam um comprimento em que ficam ilegivelmente longas à medida que o tamanho da tela aumenta, é possível usar `columns`; Se uma `box` fica esmagada com duas palavras por linha à medida que ela se estreita, você pode definir um _breakpoint_.

Diversos métodos de layout modernos como o [Multiple-column layout](/pt-BR/docs/Learn/CSS/CSS_layout/Multiple-column_Layout), [Flexbox](/pt-BR/docs/Learn/CSS/CSS_layout/Flexbox), and [Grid](/pt-BR/docs/Learn/CSS/CSS_layout/Grids) são, por padrão, responsivos. Todos eles presumem prontamente que você está tentando criar um grid flexível e oferecem maneiras mais fáceis para fazer isso.

### Multicol

O mais antigo desses métodos de layout é o multicol - quando você especifica uma `colum-count`, indicando o número de colunas no qual você deseja que o seu conteúdo seja dividido. O navegador então calcula o tamanho dessas colunas, que mudará conforme o tamanho disponível na tela.

```css
.container {
  column-count: 3;
}
```

Se, ao invés de especificar uma `column-count`, você escolher especificar uma `column-width` então você determina um valor _mínimo_ de largura para cada coluna. Com essa informação, o navegador criará o máximo de colunas possível com aquela largura e que caibam no container para daí dividir o espaço restante entre todas as colunas, separando-as. Portanto, o número de colunas muda conforme a quantidade de espaço disponível na tela.

```css
.container {
  column-width: 10em;
}
```

Também é possível usar a propriedade abreviada `columns` para fornecer tanto o número máximo de colunas da `column-count` quanto a largura mínima por coluna da `column-width`. Dessa forma é possível assegurar que, caso o tamanho da tela aumente, os comprimentos de linha não fiquem longos demais a ponto de ficarem ilegíveis e, caso o tamanho da tela diminua, estreitas demais requerendo rolagem horizontal frequente a cada, digamos, um ou dois parágrafos.

### Flexbox

No Flexbox, items flex apresentam o comportamento inicial de encolher e distribuir espaço entre si de acordo com o espaço disponível no seu container. Mudando os valores para `flex-grow` e `flex-shrink`, conseguimos manipular como esses items devem se comportar quando ocorre de haver mais ou menos espaço ao redor.

No exemplo abaixo cada um dos items flex vai ocupar quantidades iguais de espaço no flex container, usando a propriedade abreviada `flex: 1` como está descrito no tópico de layout [Flexbox: Dimensionamento flexível de elementos flex](/pt-BR/docs/Learn/CSS/CSS_layout/Flexbox#flexible_sizing_of_flex_items).

```css
.container {
  display: flex;
}

.item {
  flex: 1;
}
```

> [!NOTE]
> Para exemplificar o layout responsivo simples mostrado acima foi refatorado, mas dessa vez utilizando flexbox. É perceptível que não é necessário utilizar valores percentuais arcanos para calcular o tamanho das colunas: [exemplo](https://mdn.github.io/css-examples/learn/rwd/flex-based-rwd.html), [código-fonte](https://github.com/mdn/css-examples/blob/master/learn/rwd/flex-based-rwd.html).

### CSS grid

No CSS Layout Grid, a unidade `fr` permite distribuir o espaço disponível ao longo das faixas do grid. O exemplo a seguir cria um grid container com três faixas iguais de tamanho fixado em `1fr`. Isto irá criar três faixas em formato de colunas, cada coluna tomando para si uma parte do espaço disponível no container.

Você pode descobrir mais sobre como criar um grid com a unidade `fr` no tópico Aprenda Layout com Grids em [Grids Flexíveis com a unidade fr](/pt-BR/docs/Learn/CSS/CSS_layout/Grids#flexible_grids_with_the_fr_unit).

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

> [!NOTE]
> A versão do layout em grid é ainda mais simples pois podemos definir as colunas no `.wrapper`: [exemplo](https://mdn.github.io/css-examples/learn/rwd/grid-based-rwd.html), [código-fonte](https://github.com/mdn/css-examples/blob/master/learn/rwd/grid-based-rwd.html).

## Imagens/mídias responsivas

A abordagem considerada mais simples para garantir que mídias como imagens, vídeos e áudios nunca sejam maiores que o seu respectivo container responsivo é a seguinte:

```css
img,
picture,
video {
  max-width: 100%:
}
```

O que nós fizemos aqui foi escalonar as mídias para que elas nunca transbordem para fora de seus containers. Obviamente existem desvantagens ao utilizar essa abordagem como por exemplo quando temos uma única imagem grande e ao reduzi-la para que caiba em dispositivos menores resulta em desperdício significativo da largura de banda - o dispositivo faz o download do tamanho completo da imagem para e no final mostra uma fração bastante reduzida, mais adequada para caber na tela. Além disso, você pode querer que uma imagem tenha proporções de aspecto diferentes para dispositivos móveis e dispositivos desktop como por exemplo uma imagem que fica em formato quadrado para dispositivos móveis, mas que se transmuta para formato paisagem na versão desktop.

Imagens responsivas são capazes de solucionar essas duas problemáticas, utilizando o elemento [`<picture>`](/pt-BR/docs/Web/HTML/Element/picture) e os atributos `srcset` e `sizes` de [`<img>`](/pt-BR/docs/Web/HTML/Element/img) para permitir que imagens escolhidas a dedo para a viewport e a resolução do usuário sejam servidas. O elemento `<picture>` permite que múltiplos tamanhos sejam dados junto com "hints" ou "pistas" (metadados que descrevem o tamanho da tela e a resolução para os quais a imagem é mais adequada) e a partir dessas pistas, o navegador escolherá qual a imagem mais apropriada para cada dispositivo, garantindo que o usuário fará o download de uma imagem com tamanho apropriado para seu dispositivo. Usar `<picture>` em conjunto com `max-width` remove a necessidade de mensurar imagens com media queries, possibilitando direcionar imagens com diferentes proporções de aspecto para tamanhos de viewport diferentes.

Também é possível utilizar o _art direction_ para imagens usadas em tamanhos diferentes, assim provendo um recorte diferente ou até mesmo uma imagem completamente distinta para tamanhos de tela diferentes.

Você pode encontrar um guia detalhado nesta seção de Aprenda HTML do MDN sobre [Imagens Responsivas](/pt-BR/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).

Outras dicas úteis são:

- Tenha certeza de sempre utilizar uma imagem de formato apropriado para as imagens que você planeja utilizar (como `.png` ou `.jpg`/`.jpeg`) e de otimizar o tamanho do arquivo com o auxílio de editores gráficos antes de colocar as imagens no seu website ou página web.
- Você pode fazer uso de recursos do CSS como [gradients](/pt-BR/docs/Web/CSS/CSS_images/Using_CSS_gradients) e [shadows](/pt-BR/docs/Web/CSS/box-shadow) para criar efeitos visuais sem o uso de imagens.
- Também é possível usar media queries dentro do atributo media de elementos [`<source>`](/pt-BR/docs/Web/HTML/Element/source) aninhados no interior de elementos [`<video>`](/pt-BR/docs/Web/HTML/Element/video)/[`<audio>`](/pt-BR/docs/Web/HTML/Element/audio) para servir arquivos de áudio ou de vídeo conforme seja o mais apropriado para diferentes dispositivos (video/audio responsivos).

## Tipografia responsiva

Algo que não foi abordado nos trabalhos iniciais de design responsivo, mas que posteriormente recebeu atenção foi a chamada tipografia responsiva. Essencialmente, a tipografia responsiva descreve as mudanças nos tamanhos de fonte dentro dos blocos de media queries ou através de unidades de viewport para reagir de forma reflexiva à quantidade de tela disponível.

### Usando Media Queries para tipografia responsiva

Neste exemplo, queremos configurar a nossa heading tag de nível 1 (`<h1>`) para ter a medida de `4rem`, ou seja 4 vezes o tamanho da nossa fonte base. Esse é uma tag de tamanho bem grande e por isso desejamos que esse tamanho ocorra somente em telas com tamanho suficiente para comportá-lo.

Para fazer isso, primeiro criamos uma heading tag com tamanho bem menor para então usar media queries para sobrescrever o tamanho inicialmente definido pelo tamanho maior de `4rem` caso seja detectado que o usuário tem uma tela com no mínimo 1200px de tamanho.

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

Nós editamos nosso exemplo acima de grid responsivo com o método delineado. Você consegue observar como a seção da heading tag muda de tamanho conforme o layout chega na versão de duas colunas.

Em um dispositivo móvel, a seção da heading tag é menor:

![A stacked layout with a small heading size.](mdn-rwd-font-mobile.png)

Em um computador desktop contudo, vemos o tamanho maior dessa seção da heading tag:

![A two column layout with a large heading.](mdn-rwd-font-desktop.png)

> [!NOTE]
> Veja esse exemplo funcionando em: [exemplo](https://mdn.github.io/css-examples/learn/rwd/type-rwd.html), [código fonte](https://github.com/mdn/css-examples/blob/master/learn/rwd/type-rwd.html).

Essa forma de abordar a tipografia responsiva demonstra que o uso das media queries não se restringe somente a mudar o layout da página. Elas podem ajustar qualquer elemento para torná-lo mais utilizável ou atrativo em tamanhos de tela alternativos.

### Usando unidades de Viewport para tipografia responsiva

Uma abordagem muito interessante para isso é usar a unidade de viewport `vw` para habilitar tipografia responsiva. O valor `1vw`é equivalente a um porcento (**1%**) da largura total do viewport, o que significa quê, caso você determine o seu tamanho de fonte utilizando `vw, esta vai sempre referenciar-se com o tamanho da viewport

```css
h1 {
  font-size: 6vw;
}
```

O problema de fazer da forma como foi feito no exemplo acima, é que o usuário perde a capacidade de dar zoom em quaisquer textos cujos estilos são configurados para utilizar a unidade `vw` pois nesse caso estes textos sempre vão basear o tamanho da sua fonte com o tamanho da viewport. **Portanto, é aconselhável que você nunca faça uso somente das unidades de viewport para a estilização de textos.**

Existe uma solução para isso e ela envolve o uso de [`calc()`](/pt-BR/docs/Web/CSS/calc). Se você adiciona a unidade `vw` para um valor determinado através de um tamanho fixado como em `em` ou `rem`, então ainda é possível dar zoom no texto afinal o tamanho da unidade `vw`é adicionado com o valor de zoom.

```css
h1 {
  font-size: calc(1.5rem + 3vw);
}
```

Isso significa que só é necessário especificar unicamente o tamanho da fonte para a tag heading `h1` ao invés de configurar para dispositivos móveis e daí redefini-lo nas media queries. Fazendo dessa maneira, a fonte gradualmente aumenta ou diminui na medida em que o tamanho da viewport aumenta ou diminui.

> [!NOTE]
> Veja um exemplo disso em ação: [exemplo](https://mdn.github.io/css-examples/learn/rwd/type-vw.html), [código-fonte](https://github.com/mdn/css-examples/blob/master/learn/rwd/type-vw.html).

## A meta tag de viewport

Se você olhar minuciosamente o código fonte de uma página responsiva, é bem possível que você note a seguinte tag {{htmlelement("meta")}} dentro do elemento `<head>` do documento:

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Essa tag indica aos navegadores de dispositivos móveis que eles devem igualar a largura da viewport para a largura do dispositivo e escalonar o documento para 100% do seu tamanho pretendido, o que mostra o documento no tamanho otimizado planejado para dispositivos móveis.

E por qual motivo isso é necessário? Porquê navegadores de dispositivos móveis tendem a mentir sobre o tamanho da sua largura de viewport.

Isso é inclusive o motivo para essa meta tag existir pois, quando os primeiros smartphones foram lançados, muitos sites não eram otimizados para dispositivos móveis. O navegador então determinava a largura da viewport para 960 pixels, renderizava a página naquela largura para por fim mostrar o resultado como uma versão zoomed-out do mesmo layout para computadores desktop. Usuários poderiam dar zoom e sair navegando pela tela (quase sempre com pelo menos um zoom-in -> zoom-out -> zoom-in) até conseguirem acessar a parte que lhes interessava mas no final o resultado era o mesmo: desnecessariamente ruim.

Ao determinarmos `width=device-width` você está subsituindo o padrão do dispositivo móvel como por exemplo o padrão Apple de `width=980px`, com a largura verdadeira do dispositivo. Sem isso, um design responsivo com breakpoints e media queries não funcionaria da maneira desejada nos navegadores de dispositivos móveis. Considere um layout para telas estreitas que aparece somente em viewports com 480 pixels de largura ou menos, se o aparelho diz que na verdade ele possui 980 pixels, o usuário daquele aparelho não vai conseguir ver o seu layout de tela estreita.

**Emtão você deve _SEMPRE_ incluir a linha HTML de viewport na tag `head` dos seus documentos.**

Existem outras configurações que você pode fazer uso com a meta tag de viewport, de maneira geral contudo é preferível utilizar a linha como descrita no começo dessa seção.

- `initial-scale`: Determina o zoom inicial da página, o qual nós atribuímos o valor para 1.
- `height`: Determina uma altura específica para o viewport.
- `minimum-scale`: Determina o nível mínimo de zoom.
- `maximum-scale`: Determina o nível máximo de zoom.
- `user-scalable`: Bloqueia mudanças de zoom se estiver com valor de `no`.

Você deve evitar o uso de `minimum-scale`, `maximum-scale` e em particular da configuração `user-scalable` com o valor de `no`. Usuários devem ter permissão para aumentar ou diminuir o zoom da tela tanto quanto for necessário; Quando o valor da configuração `user-scalable` está com o valor configurado para `no`, não é possível controlar o zoom da página e isso pode ocasionar problemas de acessibilidade, principalmente para deficientes visuais.

## Resumo

Em suma, Design Responsivo refere-se ao design de site ou aplicação que é capaz de reagir adequadamente ao ambiente no qual é visualizado, não importa qual sejam as características desse ambiente. Ela engloba alguns recursos do HTML e do CSS e é, essencialmente, o padrão de como websites e páginas web são construídas atualmente.

Pense, por exemplo, nos sites que você acessa diariamente no seu celular - é bastante raro topar com um site que é apenas uma versão diminuída do site para computadores ou no qual é necessário "duelar" com o zoom e a barra de rolagem para encontrar e utilizar partes do site. Isso se tornou algo cada vez menos comum justamente em razão do ambiente web ter caminhado na direção em favor da adoção de designs responsivos.

Algo que permitiu a essa caminhada passos cada vez mais largos foi a facilidade cada vez maior de construir esses designs responsivos, em parte conseguida com a ajuda dos métodos de layout aprendidos nessas aulas/lições. Se você é iniciante em desenvolvimento web, atualmente existe uma gama muito mais ampla de ferramentas a sua disposição do que na época que o design responsivo deu seus primeiros passos e os usos modernos de HTML e CSS são muito melhores para criar designs que são elegantes e úteis, não importando o dispositivo que o visitante ou usuário estejam usando no momento em que passam pelo seu site.

{{PreviousMenuNext("Learn/CSS/CSS_layout/Multiple-column_Layout", "Learn/CSS/CSS_layout/Media_queries", "Learn/CSS/CSS_layout")}}
