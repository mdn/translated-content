---
title: Flexbox
slug: Learn/CSS/CSS_layout/Flexbox
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Practical_positioning_examples", "Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout")}}

Uma nova tecnologia, mas com suporte bastante difundido entre navegadores, o Flexbox está se tornando apto para uso geral. Flexbox provê ferramentas para criação rápida de layouts complexos e flexíveis, e características que se mostraram historicamente difíceis com CSS. Este artigo explica todos os seus fundamentos.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        HTML básico (estude
        <a href="/pt-BR/docs/Learn/HTML/Introduction_to_HTML"
          >Introdução a HTML</a
        >), e uma ideia de como CSS funciona (estude
        <a href="/pt-BR/docs/Learn/CSS/Introduction_to_CSS">Introdução a CSS</a
        >.)
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Aprender como usar o sistema de Flexbox layout para criar web layouts.
      </td>
    </tr>
  </tbody>
</table>

## Por quê _Flexbox_?

Por um longo tempo, as únicas ferramentas compatíveis entre browsers disponíveis para criação de layouts CSS eram coisas como [floats](/pt-BR/docs/Learn/CSS/CSS_layout/Floats) e [posicionamento](/pt-BR/docs/Learn/CSS/CSS_layout/Positioning). Estas são boas e funcionam, mas em alguns casos também são limitadas e frustrantes.

Os requisitos de layouts a seguir são difíceis ou impossíveis de se conseguir com estas ferramentas, em qualquer tipo conveniente e flexível:

- Centralizar um bloco de conteúdo verticalmente dentro de seu pai.
- Fazer com que os filhos de um container ocupe uma quantidade igual de largura/altura disponível, independente da quantidade de largura/altura disponível.
- Fazer todas as colunas de um layout com múltiplas colunas adotem a mesma altura, mesmo que contenham uma quantidade diferente de conteúdo.

Como você verá nas seções subsequentes, _flexbox_ faz muitas tarefas de layouts de maneira mais fácil. Vamos nos aprofundar!

## Introduzindo um exemplo simples

Neste artigo nós vamos trabalhar uma série de exercícios para ajudá-lo a entender como o flexbox funciona. Para começar, você deve fazer uma cópia local do arquivo inicial — [flexbox0.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/flexbox/flexbox0.html) do nosso repositório no github — carregue-o em um navegador moderno (como Firefox ou Chrome), e abra o arquivo no seu editor de código. Você pode [ver a página aqui](http://mdn.github.io/learning-area/css/css-layout/flexbox/flexbox0.html) também.

Você verá que temos um elemento {{HTMLElement("header")}} com um cabeçalho no nível superior dentro dele, e um elemento {{HTMLElement("section")}} contendo três {{HTMLElement("article")}}s. Nós vamos usá-los para criar um layout padrão de três colunas.

![](flexbox-example1.png)

## Especificando os elementos a serem definidos como caixas _flex_

Para iniciar, vamos definir quais elementos serão flexible boxes. Para isto, temos que definir um valor especial de {{cssxref("display")}} no elemento pai dos elementos que queremos afetar. neste caso são os elementos {{HTMLElement("article")}}, portanto vamos definir o valor no elemento {{HTMLElement("section")}} (que se torna um flex container):

```css
section {
  display: flex;
}
```

O resultado disso deve ser algo assim:

![](flexbox-example2.png)

Então, esta única declaração nos dá tudo que precisamos — incrivel, certo? Nós temos um layout de múltiplas com tamanhos iguais, e todas as colunas tem a mesma altura. Isto porque o valor padrão dado aos flex items (os filhos do flex container) são configurados para resolver problemas comuns, como este. Voltaremos a este assunto depois.

> **Nota:** Você pode definir também ao {{cssxref("display")}} o valor `inline-flex` se quiser colocar os items em linha como flexible boxes.

## Um aparte no modelo _flex_

Quando os elementos são definidos como flexibles boxes, eles são dispostos ao longo de dois eixos:

![flex_terms.png](flex_terms.png)

- O _**main axis**_ é o eixo que corre na direção em que os flex items estão dispostos (por exemplo, as linhas da página, ou colunas abaixo da página.) O início e o fim do eixo é chamado _**main start**_ e _**main end**_.
- O _**cross axis**_ é o eixo perpendicular que corre na direção em que os flex items são dispostos. O início e o fim deste eixo são chamados de _**cross start**_ e _**cross end**_.
- O elemento pai que possui `display: flex` configurado ( {{HTMLElement("section")}} em nosso exemplo) é chamado de _**flex container**_.
- Os itens iniciados como flexible boxes dentro do flex container são chamados _**flex items**_ (o {{HTMLElement("article")}} em nosso caso).

Tenha esta terminologia em mente à medida que passar para as seções subsequentes. Você pode voltar a esta referência se ficar confuso quanto aos termos usados inicialmente.

## Colunas ou linhas?

Flexbox possui uma propriedade chamada {{cssxref("flex-direction")}} que especifica a direção do eixo principal (em qual direção os filhos da _flexbox_ estarão arranjados) — que por padrão seu valor é `row` (linha), que faz com que eles fiquem arranjados numa linha na direção que o seu navegador está configurado de acordo com a direção de leitura do seu idioma (da esquerda para a direita, no caso do inglês ou português).

Experimente adicionar a seguinte declaração na seção de sua regra:

```css
flex-direction: column;
```

Você verá que isso organiza os elementos no layout de coluna, assim como eles estavam antes de adicionarmos qualquer regra CSS. Antes de você seguir, remova essa declaração do seu exemplo.

> **Nota:** Você também pode arranjar itens flexíveis em direção reversa usando os valores `row-reverse` e `column-reverse`. Experimente usar esses valores no seu exemplo também!

## Embrulhamento

Um problema que aparece quando você tem uma quantidade fixa de elementos com a mesma largura e altura no seu esquema é que eventualmente seus elementos filhos _flexbox_ irão sobrepor seu elemento pai (_container_), quebrando o layout. Dê uma olhada no nosso exemplo [flexbox-wrap0.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/flexbox/flexbox-wrap0.html), e experimente [visualizá-lo online](http://mdn.github.io/learning-area/css/css-layout/flexbox/flexbox-wrap0.html) (tenha uma cópia local desse arquivo no seu computador se você quiser continuar acompanhando os exemplos):

![](flexbox-example3.png)

Aqui vemos que os filhos estão de fato saindo fora do elemento recipiente (_container_). Uma maneira de consertar isso é adicionando a seguinte declaração na seção de sua regra CSS:

```css
flex-wrap: wrap;
```

Experimente isso agora; você verá que o layout parece muito melhor agora com essa regra:

![](flexbox-example4.png)Agora temos várias linhas — tantos elementos filhos _flexbox_ estão encaixados em cada linha quantos fazem sentido, e qualquer sobreposição é movida para a próxima linha. A declaração `flex: 200px` configurada nos elementos {{htmlelement("article")}} significa que cada um terá pelo menos 200 pixels de largura; discutiremos essa propriedade mais detalhadamente mais tarde. Você também deve notar que os últimos filhos na última linha estão mais largos para que a linha inteira possa ser preenchida.

Mas ainda tem mais para fazermos com isso. Primeiro, experimente mudar sua propriedade {{cssxref("flex-direction")}} para o valor `row-reverse` — agora você verá que ainda tem um layout com várias linhas, mas ele começa no canto oposto da janela do navegador e segue na direção reversa.

## Forma abreviada: _flex-flow_

A esta altura vale ressaltar que existe uma abreviação para as regras {{cssxref("flex-direction")}} e {{cssxref("flex-wrap")}}: a {{cssxref("flex-flow")}}. Logo, você pode substituir as seguintes regras

```css
flex-direction: row;
flex-wrap: wrap;
```

por

```css
flex-flow: row wrap;
```

## Dimensionamento flexível de elementos _flex_

Vamos agora voltar ao nosso primeiro exemplo, e ver como podemos controlar qual a proporção de espaço os elementos _flex_ pode tomar. Localize sua cópia local do arquivo [flexbox0.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/flexbox/flexbox0.html), ou tenha uma cópia de [flexbox1.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/flexbox/flexbox1.html) como um novo ponto de partida ([veja online](http://mdn.github.io/learning-area/css/css-layout/flexbox/flexbox1.html)).

Primeiro adicione a seguinte regra no final do seu CSS:

```css
article {
  flex: 1;
}
```

Esse é um valor relativo sem unidade que define quanto de espaço disponível pelo eixo principal cada elemento _flex_ pode ter. Neste caso, estamos dando para cada elemento {{HTMLElement("article")}} o valor de 1, que significa que eles terão uma quantidade igual de espaço restante depois de coisas como preenchimento ({{cssxref("padding")}}) e margem ({{cssxref("margin")}}) forem definidos. É uma proporção, o que significa que dado que mesmo que você coloque o valor de "400000", para cada elemento _flex_, terá o mesmo efeito que o valor "1" previamente colocado.

Agora, adicione a seguinte regra abaixo da última:

```css
article:nth-of-type(3) {
  flex: 2;
}
```

Assim que você atualizar a página, você verá que o terceiro elemento {{HTMLElement("article")}} ocupa duas vezes mais do espaço disponível que os outros dois — existe agora quatro unidades na proporção total disponível. Os dois primeiros elementos _flex_ tem uma unidade cada, dessa proporção, logo cada um deles ocupam 1/4 do espaço disponível. O terceiro tem 2 unidades, logo ele ocupa 2/4 (ou metade, 1/2) do espaço disponível.

Você também pode especificar um valor de tamanho mínimo para a regra _flex_. Experimente atualizar a regra para o {{HTMLElement("article")}} existente para que fique assim:

```css
article {
  flex: 1 200px;
}

article:nth-of-type(3) {
  flex: 2 200px;
}
```

Isso basicamente diz o seguinte: "Para cada elemento _flex_ primeiro será dado 200px do espaço disponível. Depois, o restante do espaço disponível será distribuído entre os elementos, de acordo com a unidade de proporção definida.". Atualize a página e você verá a diferença de como o espaço é distribuído.

![](flexbox-example1.png)

O valor real de cada caixa _flex_ pode ser visto pela sua flexibilidade/responsividade — se você redimensionar a janela do navegador, ou adicionar outro elemento {{HTMLElement("article")}}, o layout continua funcionando sem quebrar.

## _flex_: Forma abreviada ou forma normal?

{{cssxref("flex")}} é uma propriedade abreviada que pode especificar até três valores diferentes:

- O valor de proporção sem unidade que falamos sobre ele acima. Ele também pode ser especificado individualmente usando a regra {{cssxref("flex-grow")}}.
- Um segundo valor de proporção sem unidade — {{cssxref("flex-shrink")}} — que convém ser usado quando os elementos _flex_ estão sobrepondo a elemento recipiente (_container_). Este especifica qual a quantidade será retirada do tamanho de cada elemento _flex_, para que ele não ultrapasse o valor do elemento recipiente (_container_). Esta é uma funcionalidade bem avançada do _flexbox_, e não será abordada neste artigo.
- O valor mínimo para o tamanho que discutimos acima. Este pode ser especificado individualmente usando a regra {{cssxref("flex-basis")}}.

Aconselhamos usar sempre a forma abreviada a menos que você precise usar a regra normal (por exemplo para sobrescrever algum valor pré-definido). As regras normais, isto é não abreviadas, geram muito mais código e podem gerar confusão.

## Alinhamento Horizontal e Vertical

Você também pode usar as funcionalidade do _flexbox_ para alinhar elementos no eixo principal ou no eixo transversal (relembre esse assunto na seção [Um aparte no modelo flex](/pt-BR/docs/Learn/CSS/CSS_layout/Flexbox#Um_aparte_no_modelo_flex)). Vamos explorar isso olhando para um outro exemplo — [flex-align0.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/flexbox/flex-align0.html) ([veja online](http://mdn.github.io/learning-area/css/css-layout/flexbox/flex-align0.html)) — o qual vamos transformá-lo num botão/barra de ferramentas bem feito e flexível. Neste momento você verá uma barra de menu horizontal, com alguns botões expremidos no canto superior esquerdo:

![](flexbox-example5.png)

Primeiro, tenha uma cópia local desse exemplo.

Agora, adicione o seguinte trecho ao final do CSS no arquivo do exemplo:

```css
div {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
```

Atualize a página e você verá que os botões estão agora bem arranjados no centro, horizontalmente e verticalmente. Fizemos isso através de duas novas propriedades.

> **Nota:** Nesse exemplo, o eixo principal é representado horizontalmente e o eixo transversal é o vertical.

{{cssxref("align-items")}} controla onde os elementos _flex_ ficam no eixo transversal:

- Por padrão, seu valor é `stretch`, que estica todos os elementos _flex_ para preencher o elemento pai na direção do eixo transversal. Se o elemento pai não tem largura fixa na direção do eixo transversal, então todos os elementos _flex_ esticarão até o mais comprido dos elementos _flex_. Foi assim que o nosso primeiro exemplo ficou com colunas de mesma altura por padrão.
- O valor `center` que usamos no exemplo acima, faz com que os elementos mantenham suas dimensões intrínsecas, mas que seja centralizados ao longo do eixo transversal. É por isso que os botões do nosso exemplo atual estão centralizados verticalmente.
- Você também pode colocar valores como `flex-start` e `flex-end`, os quais alinharão todos os elementos no início ou fim do eixo transversal, respectivamente. Veja {{cssxref("align-items")}} para maiores detalhes.

Você pode sobrescrever o comportamento de {{cssxref("align-items")}} para elementos individuais, usando a regra {{cssxref("align-self")}} nesses elementos. Por exemplo, experimente adicionar o seguinte trecho no seu CSS:

```css
button:first-child {
  align-self: flex-end;
}
```

Veja qual efeito isso dá, e remova novamente quando terminar.

{{cssxref("justify-content")}} controla onde os elementos _flex_ ficam no eixo principal.

- O valor padrão é `flex-start`, que faz com que todos os elementos estejam no início do eixo principal.
- Você pode usar `flex-end` para que eles fiquem no final.
- `center` também é um valor para {{cssxref("justify-content")}}, e fará com que os elementos _flex_ fiquem no centro do eixo principal.
- O valor que usamos acima, `space-around`, é útil pois ele distribui todos os elementos igualmente pelo eixo principal, com um pouquinho de espaço no final.
- Existe um outro valor, `space-between`, o qual é muito similar ao `space-around`, exceto que ele não deixa nenhum espaço no final.

Nós sugerimos que você brinque um pouco mais com essas regras e seus valores para ver como funcionam ainda mais, antes de seguir nos estudos.

## Ordenação de elementos _flex_

O _flexbox_ também tem uma funcionalidade para alteração da ordem dos elementos _flex_ no layout, sem afetar a ordem no código fonte HTML. Esta é mais uma coisa que é impossível fazer nos métodos tradicionais de esquema de layouts.

O código para fazer isso é bem simples: experimente adicionar o seguinte CSS ao final do código do exemplo da barra de botões:

```css
button:first-child {
  order: 1;
}
```

Atualize seu navegador, você verá que o botão "_Smile_" foi movido para o final do eixo principal. Vamos falar sobre como isso funciona com mais detalhes:

- Por padrão, todos os elementos _flex_ possuem uma propriedade {{cssxref("order")}} com valor 0 (zero).
- Elementos _flex_ com valores maiores de {{cssxref("order")}}, aparecerão depois na tela, do que elementos com valores menores, os quais aparecem antes.
- Elementos _flex_ com o mesmo valor aparecerão de acordo com a ordem que possuem no documento HTML. Logo, se você tiver quatro elementos com os seguintes valores para {{cssxref("order")}}: 2, 1, 1 e 0, eles aparecerão na tela na seguinte ordem: 4º, 2º, 3º e 1º elemento, respectivamente.
- O 3º elemento aparece depois do 2º pois ele tem o mesmo valor para {{cssxref("order")}} mas está definido depois no documento fonte.

Você também pode usar valores negativos para fazer elementos aparecerem antes do(s) elemento(s) definidos com {{cssxref("order")}} 0 (zero). Por exemplo, Você poderia fazer com que o botão "_Blush_" aparecesse no começo do eixo principal (horizontal), usando a seguinte regra:

```css
button:last-child {
  order: -1;
}
```

## Elementos _flex_ aninhados

É possível criar layouts bem complexos com _flexbox_. É perfeitamente aceitável configurar um elemento _flex_ para também ser um _container_, para que seus filhos também se comportem como caixas _flex_. Dê uma olhada em [complex-flexbox.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/flexbox/complex-flexbox.html) ([veja também online](http://mdn.github.io/learning-area/css/css-layout/flexbox/complex-flexbox.html)).

![](flexbox-example7.png)

O HTML desse exemplo é relativamente simples. Temos um elemento {{HTMLElement("section")}} contendo três {{HTMLElement("article")}}. O terceiro desses {{HTMLElement("article")}} contém três elementos {{HTMLElement("div")}}:

```
section - article
          article
          article - div - button
                    div   button
                    div   button
                          button
                          button
```

Vamos dar uma olhada no código que usamos no layout.

Primeiro, configuramos para que os filhos da {{HTMLElement("section")}} se arranjem como elementos _flex_.

```css
section {
  display: flex;
}
```

Em seguida, configuramos alguns valores _flex_ nos próprios elementos {{HTMLElement("article")}}. Veja especialmente a segunda regra aqui — estamos configurando para que o terceiro {{HTMLElement("article")}} tenha seus filhos arranjados como elementos _flex_ também, mas desta vez eles estarão dispostos em coluna.

```css
article {
  flex: 1 200px;
}

article:nth-of-type(3) {
  flex: 3 200px;
  display: flex;
  flex-flow: column;
}
```

Depois, selecionamos o primeiro elemento {{HTMLElement("div")}}. Primeiro usamos `flex:1 100px;` para efetivamente dar a ele a altura de 100px, depois configuramos para que seus filhos (os elementos {{HTMLElement("button")}}) se arranjem como elementos _flex_. Aqui, nós os arranjamos em uma linha que os envolvem, e os alinhamos no centro do espaço disponível, como fizemos no exemplo do botão individual que vimos anteriormente:

```css
article:nth-of-type(3) div:first-child {
  flex: 1 100px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
```

Finalmente, configuramos alguns tamanhos no botão, mas o mais interessante é que demos a ele o valor 1 para a propriedade _flex_. Isso dá um resultado interessante, que você verá se redimensionar a largura da janela do seu navegador. Esses botões tomarão o máximo de espaço que puderem e ficarão ao máximo na mesma linha, se puderem, mas quando não puderem mais caber na mesma linha, os que estão muito apertados irão para novas linhas de forma que o layout não quebre e o conteúdo ainda esteja legível ao usuário.

```css
button {
  flex: 1;
  margin: 5px;
  font-size: 18px;
  line-height: 1.5;
}
```

## Compatibilidade com navegadores

O suporte a f*lexbox* está disponível nos navegadores mais novos — Firefox, Chrome, Opera, Microsoft Edge e IE 11, nas versões mais novas do Android e iOS, etc.
Contudo você deve estar ciente que ainda existem navegadores antigos em uso que não suportam a regra _flexbox_ (ou até suportam, mas numa versão desatualizada).

Enquanto você está apenas aprendendo ou testando, a compatibilidade entre navegadores não importa muito; no entanto se você pretende usar o _flexbox_ num site de verdade, você precisa fazer testes e certificar que a experiência do usuário é aceitável em qualquer navegador possível.

_Flexbox_ é um pouco mais ardiloso que algumas propriedades CSS. Por exemplo, se o suporte a sombras de CSS falta num browser, é muito menos provável de comprometer a usabilidade, afinal apenas as sombras dos elementos que não estarão aparecendo. Contudo, a falta de suporte à propriedade _flexbox_ pode quebrar o layout do seu site, e comprometer a sua usabilidade.

Iremos discutir estratégias para contornar problemas complicados de compatibilidade entre navegadores num módulo futuro.

## Sumário

Isso conclui nosso tour sobre o básico de _flexbox_. Esperamos que você tenha aproveitado, e que você continue aproveitando enquanto avança com seu aprendizado.
No próximo tópico, veremos outro aspecto importante dos Esquemas em CSS: os sistemas de _grid,_ como você pode ver nesse artigo sobre [CSS grid layout](https://blog.alura.com.br/criando-layouts-com-css-grid-layout/).

{{PreviousMenuNext("Learn/CSS/CSS_layout/Practical_positioning_examples", "Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout")}}
