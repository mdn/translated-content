---
title: Aplicando cores a elementos HTML usando CSS
slug: Web/CSS/CSS_colors/Applying_color
---

{{HTMLSidebar}}

{{CSSRef}}

Este artigo é uma cartilha que apresenta cada uma das maneiras pelas quais as cores CSS podem ser usadas em HTML.

O uso da cor é uma forma fundamental de expressão humana. As crianças experimentam a cor antes mesmo de terem a destreza manual para desenhar. Talvez seja por isso que a cor é uma das primeiras coisas que as pessoas muitas vezes querem experimentar quando aprendem a desenvolver sites. Com [CSS](/pt-BR/docs/Web/CSS), há várias maneiras de adicionar cor aos seus [elementos](/pt-BR/docs/Web/HTML/Element) [HTML](/pt-BR/docs/Web/HTML) para criar exatamente a aparência desejada.

Vamos abordar a maior parte do que você precisa saber ao usar cores, incluindo uma [lista do que você pode colorir e quais propriedades CSS estão envolvidas](#things_that_can_have_color), [como você descreve as cores](#how_to_describe_a_color), e como realmente [usar cores em folhas de estilo e em scripts](#using_color). Também veremos como [deixar o usuário escolher uma cor](#letting_the_user_pick_a_color).

Em seguida, encerraremos as coisas com uma breve discussão sobre como [usar cores com sabedoria](#using_color_wisely): como selecionar cores apropriadas, tendo em mente as necessidades de pessoas com diferentes capacidades visuais.

## Coisas que podem ter cor

No nível dos elementos, tudo em HTML pode ter cores aplicadas. Em vez disso, vamos ver as coisas em termos dos tipos de coisas que são desenhadas nos elementos, como texto e bordas e assim por diante. Para cada um, veremos uma lista das propriedades CSS que aplicam cores a eles.

Em um nível fundamental, a propriedade {{cssxref("color")}} define a cor de primeiro plano do conteúdo de um elemento HTML e a propriedade {{cssxref("background-color")}} define a cor de fundo do elemento. Estes podem ser usados em praticamente qualquer elemento.

### Texto

Sempre que um elemento é renderizado, essas propriedades são usadas para determinar a cor do texto, seu plano de fundo e quaisquer decorações no texto.

- {{cssxref("color")}}
  - : A cor a ser usada ao desenhar o texto e quaisquer [decorações de texto](/pt-BR/docs/Learn/CSS/Styling_text/Fundamentals#font_style_font_weight_text_transform_and_text_decoration) (como a adição de sublinhados ou sublinhados, linhas tachadas, e assim por diante.
- {{cssxref("background-color")}}
  - : A cor de fundo do texto.
- {{cssxref("text-shadow")}}
  - : Configura um efeito de sombra aplicado ao texto. Entre as opções para os aspectos da sombra, está a cor base da sombra (que será então desfocada e mesclada com o plano de fundo, com base nos outros parâmetros). Veja [Sombras projetadas em texto](/pt-BR/docs/Learn/CSS/Styling_text/Fundamentals#sombras_projetadas_em_texto) para descobrir mais.
- {{cssxref("text-decoration-color")}}
  - : Por padrão, as decorações de texto (como sublinhados, tachados, etc.) usam a propriedade `color` como suas cores. No entanto, você pode substituir esse comportamento e usar uma cor diferente para eles com a propriedade `text-decoration-color`.
- {{cssxref("text-emphasis-color")}}
  - : A cor a ser usada ao desenhar símbolos de ênfase adjacentes a cada caractere no texto. Isso é usado principalmente ao desenhar texto para idiomas do Leste Asiático.
- {{cssxref("caret-color")}}
  - : A cor a ser usada ao desenhar o {{Glossary("caret")}} (às vezes chamado de cursor de entrada de texto) dentro do elemento. Isso só é útil em elementos que são editáveis, como {{HTMLElement("input")}} e {{HTMLElement("textarea")}} ou elementos cujo atributo HTML [`contenteditable`](/pt-BR/docs/Web/HTML/Global_attributes#contenteditable) está definido.

### Caixas

Cada elemento é uma caixa com algum tipo de conteúdo e tem um fundo e uma borda além de qualquer conteúdo que a caixa possa ter.

- [Borders](#borders)
  - : Consulte a seção [Borders](#borders) para obter uma lista das propriedades CSS que você pode usar para definir as cores das bordas de uma caixa.
- {{cssxref("background-color")}}
  - : A cor de fundo a ser usada em áreas do elemento que não possuem conteúdo de primeiro plano.
- {{cssxref("column-rule-color")}}
  - : A cor a ser usada ao desenhar a linha que separa as colunas do texto.
- {{cssxref("outline-color")}}
  - : A cor a ser usada ao desenhar um contorno ao redor da parte externa do elemento. Esse contorno é diferente da borda, pois não recebe espaço reservado para ele no documento (portanto, pode se sobrepor a outro conteúdo). Geralmente é usado como indicador de foco, para mostrar qual elemento receberá eventos de entrada.

### Bordas

Qualquer elemento pode ter uma [borda](/pt-BR/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders) desenhada em torno dele. Uma borda de elemento básico é uma linha desenhada ao redor das bordas do conteúdo do elemento. Consulte [Propriedades do Box](/pt-BR/docs/Learn/CSS/Introduction_to_CSS/Box_model#box_properties) para saber mais sobre a relação entre elementos e suas bordas, e o artigo [Estilizando bordas usando CSS](/pt-BR/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders) para saber mais sobre como aplicar estilos a bordas.

Você pode usar a propriedade abreviada {{cssxref("border")}}, que permite configurar tudo sobre o borda de uma só vez (incluindo recursos não coloridos de bordas, como sua [largura](/pt-BR/docs/Web/CSS/border-width), [estilo](/pt-BR/docs/Web/CSS/border-style) (sólido, tracejado, etc.), e assim por diante.

- {{cssxref("border-color")}}
  - : Especifica uma única cor a ser usada para cada lado da borda do elemento.
- {{cssxref("border-left-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-top-color")}} e {{cssxref ("cor da borda inferior")}}
  - : Permite definir a cor do lado correspondente da borda do elemento.
- {{cssxref("border-block-start-color")}} e {{cssxref("border-block-end-color")}}
  - : Com estes, você pode definir a cor usada para desenhar as bordas que estão mais próximas do início e do fim do bloco que a borda circunda. Em um modo de escrita da esquerda para a direita (como a forma como o inglês é escrito), a borda inicial do bloco é a borda superior e o final do bloco é a parte inferior. Isso difere do início e do fim embutidos, que são as bordas esquerda e direita (correspondendo a onde cada linha de texto na caixa começa e termina).
- {{cssxref("border-inline-start-color")}} e {{cssxref("border-inline-end-color")}}
  - : Permitem colorir as bordas da borda mais próximas ao início e ao final do início das linhas de texto dentro da caixa. De que lado isso está irá variar dependendo das propriedades {{cssxref("writing-mode")}}, {{cssxref("direction")}} e {{cssxref("text-orientation")}}, que são normalmente (mas nem sempre) usado para ajustar a direcionalidade do texto com base no idioma exibido. Por exemplo, se o texto da caixa estiver sendo renderizado da direita para a esquerda, a cor da borda em linha será aplicada ao lado direito da borda.

### Outras formas de usar cores

CSS não é a única tecnologia da web que suporta cores. Existem tecnologias gráficas disponíveis na web que também suportam cores.

- A [API do Canvas](/pt-BR/docs/Web/API/Canvas_API)
  - : Permite desenhar gráficos de bitmap 2D em um elemento {{HTMLElement("canvas")}}. Veja nosso [tutorial do Canvas](/pt-BR/docs/Web/API/Canvas_API/Tutorial) para saber mais.
- [SVG](/pt-BR/docs/Web/SVG) (Gráficos vetoriais escaláveis)
  - : permite desenhar imagens usando comandos que desenham formas, padrões e linhas específicos para produzir uma imagem. Os comandos SVG são formatados como XML e podem ser incorporados diretamente em uma página da Web ou podem ser colocados na página usando o elemento {{HTMLElement("img")}}, como qualquer outro tipo de imagem.
- [WebGL](/pt-BR/docs/Web/API/WebGL_API)
  - : A Biblioteca de gráficos da Web é uma API baseada em [OpenGL ES](https://www.khronos.org/opengles/) para desenhar gráficos 2D e 3D de alto desempenho na Web. Veja nosso [tutorial WebGL](/pt-BR/docs/Web/API/WebGL_API/Tutorial) para saber mais.

## Como descrever uma cor

Para representar uma cor em CSS, você precisa encontrar uma maneira de traduzir o conceito analógico de "cor" em uma forma digital que um computador possa usar. Isso geralmente é feito dividindo a cor em componentes, como quanto de cada um de um conjunto de cores primárias deve ser misturado ou quão brilhante é a cor. Como tal, existem várias maneiras de descrever cores em CSS.

Para uma discussão mais detalhada de cada um dos tipos de valor de cor, veja a referência para a unidade CSS {{cssxref("&lt;color&gt;")}}.

### Palavras-chave

Um conjunto de nomes de cores padrão foi definido, permitindo que você use essas palavras-chave em vez de representações numéricas de cores se você optar por fazer isso e houver uma palavra-chave representando a cor exata que você deseja usar. As palavras-chave de cores incluem as cores primárias e secundárias padrão (como `red`, `blue` ou `orange`), tons de cinza (de `black` a `white`, incluindo cores como `darkgray` e `lightgrey`), e uma variedade de outras cores misturadas, incluindo `lightseagreen`, `cornflowerblue` e `rebeccapurple`.

Veja [Palavras-chave de cores](/pt-BR/docs/Web/CSS/color_value#palavras-chave_de-cores) para uma lista de todas as palavras-chave de cores disponíveis.

### valores RGB

Existem três maneiras de representar uma cor RGB em CSS.

#### Notação de string hexadecimal

A notação de string hexadecimal representa uma cor usando dígitos hexadecimais para representar cada um dos componentes de cor (vermelho, verde e azul). Também pode incluir um quarto componente: o canal alfa (ou opacidade). Cada componente de cor pode ser representado como um número entre 0 e 255 (0x00 e 0xFF) ou, opcionalmente, como um número entre 0 e 15 (0x0 e 0xF). Todos os componentes _devem_ ser especificados usando o mesmo número de dígitos. Se você usar a notação de um dígito, a cor final será calculada usando o dígito de cada componente duas vezes; ou seja, `"#D"` torna-se `"#DD"` ao desenhar.

Uma cor em notação de string hexadecimal sempre começa com o caractere `"#"`. Depois disso vêm os dígitos hexadecimais do código de cores. A string não diferencia maiúsculas de minúsculas.

- `"#rrggbb"`
  - : Especifica uma cor totalmente opaca cujo componente vermelho é o número hexadecimal `0xrr`, o componente verde é `0xgg` e o componente azul é `0xbb`.
- `"#rrggbbaa"`
  - : Especifica uma cor cujo componente vermelho é o número hexadecimal `0xrr`, componente verde é `0xgg` e composição azulente é `0xbb`. O canal alfa é especificado por `0xaa`; quanto menor for esse valor, mais translúcida será a cor.
- `"#rgb"`
  - : Especifica uma cor cujo componente vermelho é o número hexadecimal `0xrr`, o componente verde é `0xgg` e o componente azul é `0xbb`.
- `"#rgba"`
  - : Especifica uma cor cujo componente vermelho é o número hexadecimal `0xrr`, o componente verde é `0xgg` e o componente azul é `0xbb`. O canal alfa é especificado por `0xaa`; quanto menor for esse valor, mais translúcida será a cor.

Como exemplo, você pode representar a cor opaca azul brilhante como `"#0000ff"` ou `"#00f"`. Para torná-lo 25% opaco, você pode usar `"#0000ff44"` ou `"#00f4"`.

#### Notação funcional RGB

A notação funcional RGB (Vermelho/Verde/Azul), como a notação de string hexadecimal, representa cores usando seus componentes vermelho, verde e azul (assim como, opcionalmente, um componente de canal alfa para opacidade). No entanto, em vez de usar uma string, a cor é definida usando a função CSS {{cssxref("color_value", "rgb()", "#rgb()")}}. Esta função aceita como parâmetros de entrada os valores dos componentes vermelho, verde e azul e um quarto parâmetro opcional, o valor do canal alfa.

Os valores legais para cada um desses parâmetros são:

- `vermelho`, `verde` e `azul`
  - : Cada um deve ter um valor {{cssxref("&lt;integer&gt;")}} entre 0 e 255 (inclusive), ou um {{cssxref("&lt;percentage&gt;")}} de 0% a 100%.
- `alfa`
  - : O canal alfa é um número entre 0,0 (totalmente transparente) e 1,0 (totalmente opaco). Você também pode especificar uma porcentagem em que 0% é igual a 0,0 e 100% é igual a 1,0.

Por exemplo, um vermelho brilhante que é 50% opaco pode ser representado como `rgb(255, 0, 0, 0.5)` ou `rgb(100%, 0, 0, 50%)`.

### Notação funcional HSL

Designers e artistas geralmente preferem trabalhar usando o método de cores [HSL](https://en.wikipedia.org/wiki/HSL_and_HSV) (Hue/Saturation/Luminosity). Na web, as cores HSL são representadas usando a notação funcional HSL. A função CSS `hsl()` é muito semelhante à função `rgb()` em uso de outra forma.

O diagrama abaixo mostra um cilindro de cor HSL. Hue define a cor real com base na posição ao longo de uma {{glossary("color wheel")}} circular que representa as cores do espectro visível. A saturação é uma porcentagem de quanto do caminho entre ser um tom de cinza e ter a quantidade máxima possível do tom fornecido. À medida que o valor da luminância (ou luminosidade) aumenta, a cor passa do mais escuro possível para o mais claro possível (do preto para o branco). Imagem cortesia do usuário [SharkD](https://commons.wikimedia.org/wiki/User:SharkD) na [Wikipedia](https://en.wikipedia.org/), distribuído sob a licença [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).

![cilindro de cores HSL](640px-hsl_color_solid_cylinder.png)

O valor do componente de matiz (H) de uma cor HSL é um ângulo do vermelho ao redor do amarelo, verde, ciano, azul e magenta (terminando de volta ao vermelho novamente em 360°) que identifica qual é a cor base. O valor pode ser especificado em qualquer unidade {{cssxref("&lt;angle&gt;")}} suportada por CSS, incluindo graus (`deg`), radianos (`rad`), gradianos (`grad`), ou voltas (`virar`). Mas isso não controla o quão viva ou opaca, ou quão brilhante ou escura é a cor.

O componente de saturação (S) da cor especifica qual porcentagem da cor final é composta pelo matiz especificado. O restante é definido pelo nível de cinza fornecido pelo componente de luminância (L).

Pense nisso como criar a cor de tinta perfeita:

1. Você começa com a tinta base que é a intensidade máxima possível para uma determinada cor, como o azul mais intenso que pode ser representado pela tela do usuário. Este é o componente **matiz** (H): um valor que representa o ângulo ao redor do {{glossary("color wheel")}} para o matiz vívido que queremos usar como base.
2. Em seguida, selecione uma tinta em tons de cinza que corresponda ao brilho que você deseja que a cor seja; esta é a luminância. Você quer que seja muito brilhante e quase branco, ou muito escuro e mais próximo do preto, ou algo no meio? Isso é especificado usando uma porcentagem, onde 0% é perfeitamente preto e 100% é perfeitamente branco (independentemente da saturação ou matiz). Entre os valores há uma área cinza literal.
3. Agora que você tem uma tinta cinza e uma cor perfeitamente viva, precisa misturá-las. O componente de saturação (S) da cor indica qual porcentagem da cor final deve ser composta por aquela cor perfeitamente vívida. O restante da cor final é composto pela tinta cinza que representa a saturação.

Você também pode incluir opcionalmente um canal alfa, para tornar a cor menos de 100% opaca.

Aqui estão algumas cores de amostra em notação HSL:

```css hidden
table {
  border: 1px solid black;
  font:
    16px "Open Sans",
    Helvetica,
    Arial,
    sans-serif;
  border-spacing: 0;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
  padding: 4px 6px;
  text-align: left;
}

th {
  background-color: hsl(0, 0%, 75%);
}
```

```html
<table>
  <thead>
    <tr>
      <th scope="col">Color in HSL notation</th>
      <th scope="col">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>hsl(90deg, 100%, 50%)</code></td>
      <td style="background-color: hsl(90deg, 100%, 50%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hsl(90, 100%, 50%)</code></td>
      <td style="background-color: hsl(90, 100%, 50%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hsl(0.15turn, 50%, 75%)</code></td>
      <td style="background-color: hsl(0.15turn, 50%, 75%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hsl(0.15turn, 90%, 75%)</code></td>
      <td style="background-color: hsl(0.15turn, 90%, 75%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hsl(0.15turn, 90%, 50%)</code></td>
      <td style="background-color: hsl(0.15turn, 90%, 50%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hsl(270deg, 90%, 50%)</code></td>
      <td style="background-color: hsl(270deg, 90%, 50%);">&nbsp;</td>
    </tr>
  </tbody>
</table>
```

{{EmbedLiveSample("HSL_functional_notation", 300, 260)}}

> **Nota:** Quando você omite a unidade do matiz, assume-se que está em graus (`deg`).

### Notação funcional HWB

Assim como a notação funcional HSL acima, a função [hwb()](/pt-BR/docs/Web/CSS/color_value/hwb) usa o mesmo valor de matiz. Mas, em vez de claridade e saturação, você especifica valores de brancura e negritude em porcentagens. Os valores **não** são separados por vírgula e um valor alfa opcional pode ser incluído (deve ser precedido por uma barra `/`).

Aqui estão alguns exemplos de uso da notação HWB:

```css
/* Todos esses exemplos especificam vários tons de verde-limão. */
hwb(90 10% 10%)
hwb(90 10% 10%)
hwb(90 50% 10%)
hwb(90deg 10% 10%)
hwb(1.5708rad 60% 0%)
hwb(.25turn 0% 40%)

/* Mesmo verde-limão, mas com valor alfa */
hwb(90 10% 10% / 0.5)
hwb(90 10% 10% / 50%)
```

## Usando cores

Agora que você sabe quais propriedades CSS existem que permitem aplicar cores a elementos e os formatos que você pode usar para descrever cores, você pode juntar tudo isso para começar a usar cores. Como você deve ter visto na lista em [Coisas que podem ter cor](#things_that_can_have_color), há muitas coisas que você pode colorir com CSS. Vejamos isso de dois lados: usando a cor dentro de um {{Glossary("stylesheet")}} e adicionando e alterando a cor usando o código {{Glossary("JavaScript")}} para alterar os estilos dos elementos.

### Especificando cores em folhas de estilo

A maneira mais fácil de aplicar cores aos elementos — e a maneira como você normalmente faz isso — é especificar as cores no CSS que é usado ao renderizar os elementos. Embora não usemos todas as propriedades mencionadas anteriormente, veremos alguns exemplos. O conceito é o mesmo em qualquer lugar que você use cores.

Vamos dar uma olhada em um exemplo, começando pelos resultados que estamos tentando alcançar:

{{EmbedLiveSample("Specifying_colors_in_stylesheets", 650, 150)}}

#### HTML

O HTML responsável pela criação do exemplo acima é mostrado aqui:

```html
<div class="wrapper">
  <div class="box boxLeft">
    <p>Esta é a primeira caixa.</p>
  </div>
  <div class="box boxRight">
    <p>Esta é a segunda caixa.</p>
  </div>
</div>
```

Isso é bem simples, usando um {{HTMLElement("div")}} como um wrapper em torno do conteúdo, que consiste em mais dois `<div>`s, cada um com um estilo diferente com um único parágrafo ({{HTMLElement("p")}}) em cada caixa.

A mágica acontece, como sempre, no CSS, onde aplicaremos as cores para definir o layout do HTML acima.

#### CSS

Veremos o CSS para criar os resultados acima um por vez, para que possamos revisar as partes interessantes uma a uma.

```css
.wrapper {
  width: 620px;
  height: 110px;
  margin: 0;
  padding: 10px;
  border: 6px solid mediumturquoise;
}
```

A classe `.wrapper` é usada para atribuir estilos ao {{HTMLElement("div")}} que inclui todos os nossos outros conteúdos. Isso estabelece o tamanho do contêiner usando {{cssxref("width")}} e {{cssxref("height")}} bem como seu {{cssxref("margin")}} e {{cssxref("padding ")}}.

De mais interesse para nossa discussão aqui é o uso da propriedade {{cssxref("border")}} para estabelecer uma borda ao redor da borda externa do elemento. Essa borda é uma linha sólida, com 6 pixels de largura, na cor `mediumturquoise`.

Nossas duas caixas coloridas compartilham várias propriedades em comum, então, a seguir, estabelecemos uma classe, `.box`, que define essas propriedades compartilhadas:

```css
.box {
  width: 290px;
  height: 100px;
  margin: 0;
  padding: 4px 6px;
  font:
    28px "Marker Felt",
    "Zapfino",
    cursive;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

Resumidamente, `.box` estabelece o tamanho de cada caixa, bem como a configuração da fonte utilizada dentro dela. Também aproveitamos o [CSS Flexbox](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout) para centralizar facilmente o conteúdo de cada caixa. Ativamos o modo `flex` usando {{cssxref("display", "display: flex")}} e definimos {{cssxref("justify-content")}} e {{cssxref("align-items")}} para `center`. Então podemos criar uma classe para cada umas duas caixas que definem as propriedades que diferem entre as duas.

```css
.boxLeft {
  float: left;
  background-color: rgb(245, 130, 130);
  outline: 2px solid darkred;
}
```

A classe `.boxLeft` — que, inteligentemente, é usada para estilizar a caixa à esquerda — flutua a caixa para a esquerda e, em seguida, configura as cores:

- A cor de fundo da caixa é definida alterando o valor da propriedade CSS {{cssxref("background-color")}} para `rgb(245, 130, 130)`.
- Um contorno é definido para a caixa. Ao contrário do `border` mais comumente usado, {{cssxref("outline")}} não afeta o layout; ele desenha por cima de qualquer coisa que esteja fora da caixa do elemento em vez de abrir espaço como `border`. Este contorno é uma linha vermelha escura sólida com dois pixels de espessura. Observe o uso da palavra-chave `darkred` ao especificar a cor.
- Observe que não estamos definindo explicitamente a cor do texto. Isso significa que o valor de {{cssxref("color")}} será herdado do elemento mais próximo que o define. Por padrão, isso é preto.

```css
.boxRight {
  float: right;
  background-color: hsl(270deg, 50%, 75%);
  outline: 4px dashed rgb(110, 20, 120);
  color: hsl(0deg, 100%, 100%);
  text-decoration: underline wavy #88ff88;
  text-shadow: 2px 2px 3px black;
}
```

> **Nota:** ao tentar mostrá-lo no Safari, ele não será exibido corretamente. Porque o Safari não suporta `text-decoration: underline wavy #88ff88`.

Finalmente, a classe `.boxRight` descreve as propriedades únicas da caixa que é desenhada à direita. Ele está configurado para flutuar a caixa para a direita para que ela apareça ao lado da caixa anterior. Em seguida, as seguintes cores são estabelecidas:

- O `background-color` é definido usando o valor HSL especificado usando `hsl(270deg, 50%, 75%)`. Esta é uma cor roxa média.
- O `outline` da caixa é usado para especificar que a caixa deve ser colocada em uma linha tracejada de quatro pixels de espessura cuja cor é um roxo um pouco mais profundo (`rgb(110, 20, 120)`).
- A cor do primeiro plano (texto) é especificada definindo a propriedade {{cssxref("color")}} para `hsl(0deg, 100%, 100%)`. Esta é uma das muitas maneiras de especificar a cor branca.
- Adicionamos uma linha ondulada verde sob o texto com {{cssxref("text-decoration")}}.
- Finalmente, um pouco de sombra é adicionada ao texto usando {{cssxref("text-shadow")}}. Seu parâmetro `color` é definido como `black`.

## Deixando o usuário escolher uma cor

Há muitas situações em que seu site pode precisar permitir que o usuário selecione uma cor. Talvez você tenha uma interface de usuário personalizável ou esteja implementando um aplicativo de desenho. Talvez você tenha texto editável e precise deixar o usuário escolher a cor do texto. Ou talvez seu aplicativo permita que o usuário atribua cores a pastas ou itens. Embora historicamente tenha sido necessário implementar seu próprio [seletor de cores](https://en.wikipedia.org/wiki/Color_picker), o HTML agora oferece suporte para navegadores fornecerem um para seu uso por meio do {{HTMLElement("input" )}}, usando `"color"` como o valor de seu atributo [`type`](/pt-BR/docs/Web/HTML/Element/input#type).

O elemento `<input>` representa uma cor apenas na [notação de string hexadecimal](#hexadecimal_string_notation) abordada acima.

### Exemplo: Escolhendo uma cor

Vejamos um exemplo simples, no qual o usuário pode escolher uma cor. Conforme o usuário ajusta a cor, a borda ao redor do exemplo muda para refletir a nova cor. Após finalizar e escolher a cor final, o valor do seletor de cores é exibido.

{{EmbedLiveSample("Example_Picking_a_color", 525, 275)}}

> **Nota:** no macOS, você indica que finalizou a seleção da cor fechando a janela do seletor de cores.

#### HTML

O HTML aqui cria uma caixa que contém um controle seletor de cores (com um rótulo criado usando o elemento {{HTMLElement("label")}}) e um elemento de parágrafo vazio ({{HTMLElement("p")}}) no qual vamos produzir algum texto do nosso código JavaScript.

```html
<div id="box">
  <label for="colorPicker">Cor da borda:</label>
  <input type="color" value="#8888ff" id="colorPicker" />
  <p id="output"></p>
</div>
```

#### CSS

O CSS estabelece um tamanho para a caixa e alguns estilos básicos para as aparências. A borda também é estabelecida com uma largura de 2 pixels e uma cor de borda.

```css
#box {
  width: 500px;
  height: 200px;
  border: 2px solid rgb(245, 220, 225);
  padding: 4px 6px;
  font:
    16px "Lucida Grande",
    "Helvetica",
    "Arial",
    "sans-serif";
}
```

#### JavaScript

O script aqui lida com a tarefa de atualizar a cor inicial da borda para corresponder ao valor do seletor de cores. Em seguida, dois manipuladores de eventos são adicionados para lidar com a entrada do elemento [`<input type="color">`](/pt-BR/docs/Web/HTML/Element/input/color).

```js
const colorPicker = document.getElementById("colorPicker");
const box = document.getElementById("box");
const output = document.getElementById("output");

box.style.borderColor = colorPicker.value;

colorPicker.addEventListener(
  "input",
  (event) => {
    box.style.borderColor = event.target.value;
  },
  false,
);

colorPicker.addEventListener(
  "change",
  (event) => {
    output.innerText = `Cor definida como ${colorPicker.value}.`;
  },
  false,
);
```

O evento {{domxref("HTMLElement/input_event", "input")}} é enviado toda vez que o valor do elemento muda; ou seja, toda vez que o usuário ajusta a cor no seletor de cores. Cada vez que esse evento chega, definimos a cor da borda da caixa para corresponder ao valor atual do seletor de cores.

O evento {{domxref("HTMLElement/change_event", "change")}} é recebido quando o valor do seletor de cores é finalizado. Nós respondemos definindo o conteúdo do elemento `<p>` com o ID `"output"` para uma string que descreve a cor finalmente selecionada.

## Usando cores com sabedoria

Fazer as escolhas certas ao selecionar as cores ao projetar um site pode ser um processo complicado, especialmente se você não estiver bem fundamentado em arte, design ou pelo menos teoria básica de cores. A escolha errada de cores pode tornar seu site pouco atraente ou, pior ainda, deixar o conteúdo ilegível devido a problemas de contraste ou cores conflitantes. Pior ainda, se usar as cores erradas pode resultar na inutilização do seu conteúdo por pessoas com certos problemas de visão, principalmente daltonismo.

### Encontrando as cores certas

Criar as cores certas pode ser complicado, especialmente sem treinamento em arte ou design. Felizmente, existem ferramentas disponíveis que podem ajudá-lo. Embora eles não possam substituir ter um bom designer ajudando você a tomar essas decisões, eles definitivamente podem ajudá-lo a começar.

#### Cor básica

O primeiro passo é escolher sua **cor base**. Esta é a cor que de alguma forma define o seu site ou o assunto do site. Assim como associamos o verde à bebida [Mountain Dew](https://en.wikipedia.org/wiki/Mountain_Dew) e pode-se pensar na cor azul em relação ao céu ou ao oceano, escolhendo uma cor base apropriada para representar seu site é um bom lugar para começar. Há muitas maneiras de selecionar uma cor base; algumas ideias incluem:

- Uma cor que esteja naturalmente associada ao tema do seu conteúdo, como a cor existente identificada com um produto ou ideia ou uma cor representativa da emoção que você deseja transmitir.
- Uma cor que vem de imagens associadas ao assunto do seu conteúdo. Se você estiver criando um site sobre um determinado item ou produto, escolha uma cor que esteja fisicamente presente nesse item.
- Navegue por sites que permitem que você veja muitas paletas de cores e imagens existentes para encontrar inspiração.

Ao tentar decidir sobre uma cor base, você pode descobrir que as extensões do navegador que permitem selecionar cores do conteúdo da Web podem ser particularmente úteis. Alguns deles são projetados especificamente para ajudar nesse tipo de trabalho. Por exemplo, o site [ColorZilla](https://www.colorzilla.com/) oferece uma extensão ([Chrome](https://www.colorzilla.com/chrome/) / [Firefox](https:// www.colorzilla.com/firefox/)) que oferece uma ferramenta conta-gotas para escolher cores da web. Também pode obter médias das cores dos pixels em áreas de vários tamanhos ou até mesmo em uma área selecionada da página.

> **Nota:** A vantagem da média de cores pode ser que, muitas vezes, o que parece uma cor sólida é, na verdade, um número surpreendentemente variado de cores relacionadas, todas usadas em conjunto, misturando-se para criar o efeito desejado. Escolher apenas um desses pixels pode resultar na obtenção de uma cor que, por si só, parece muito fora do lugar.

#### Confeccionando a paleta

Depois de decidir a cor base, existem muitas ferramentas on-line que podem ajudá-lo a criar uma paleta de cores apropriadas para usar junto com a cor base, aplicando a teoria das cores à cor base para determinar as cores adicionadas apropriadas. Muitas dessas ferramentas também suportam a visualização das cores filtradas para que você possa ver como elas seriam para pessoas com várias formas de daltonismo. Consulte [Cor e acessibilidade](#color_and_accessibility) para uma breve explicação de por que isso é importante.

Alguns exemplos (todos gratuitos para uso a partir do momento em que esta lista foi revisada pela última vez):

- [Ferramenta seletora de cores do MDN](/pt-BR/docs/Web/CSS/CSS_Colors/Color_picker_tool)
- [Paletton](https://paletton.com/)
- [Roda de cores on-line do Adobe Color CC](https://color.adobe.com/create/color-wheel)

Ao projetar sua paleta, lembre-se de que, além das cores que essas ferramentas normalmente geram, você provavelmente também precisará adicionar algumas cores neutras centrais, como branco (ou quase branco), preto (ou quase preto), e algum número de tons de cinza.

> **Nota:** Normalmente, é muito melhor usar o menor número de cores possível. Ao usar cores para acentuar em vez de adicionar cores a tudo na página, você mantém seu conteúdo fácil de ler e as cores que você usa têm muito mais impacto.

### Recursos da teoria das cores

Uma revisão completa da teoria das cores está além do escopo deste artigo, mas há muitos artigos sobre a teoria das cores disponíveis, bem como cursos que você pode encontrar em escolas e universidades próximas. Alguns recursos úteis sobre a teoria das cores:

- [Ciência das cores](https://www.khanacademy.org/computing/pixar/color) ([Khan Academy](https://www.khanacademy.org/) em associação com a [Pixar](https://www.pixar.com/))
  - : Um curso online que apresenta conceitos como o que é a cor, como ela é percebida e como usar as cores para expressar ideias. Apresentado por artistas e designers da Pixar.
- [Teoria das cores](https://en.wikipedia.org/wiki/Color_theory) na Wikipedia
  - : Entrada da Wikipedia sobre teoria das cores, que tem muitas informações excelentes do ponto de vista técnico. Não é realmente um recurso para ajudá-lo com o processo de seleção de cores, mas ainda está cheio de informações úteis.

### Cor e acessibilidade

Existem várias maneiras pelas quais a cor pode ser um problema {{Glossary("accessibility")}}. O uso impróprio ou descuidado de cores pode resultar em um site ou aplicativo que uma porcentagem de seu público-alvo pode não ser capaz de usar adequadamente, resultando em perda de tráfego, perda de negócios e possivelmente até mesmo um problema de relações públicas. Portanto, é importante considerar cuidadosamente o uso da cor.

Você deve fazer pelo menos uma pesquisa básica sobre [daltonismo](https://en.wikipedia.org/wiki/Color_blindness). Existem vários tipos; o mais comum é o daltonismo vermelho-verde, que faz com que as pessoas não consigam diferenciar entre as cores vermelho e verde. Existem outras, também, que vão desde a incapacidade de distinguir certas cores até a total incapacidade de ver as cores.

> **Nota:** A regra mais importante: nunca use a cor como a única maneira de saber algo. Se, por exemplo, você indicar sucesso ou falha de uma operação alterando a cor de uma forma de branco para verde para sucesso e vermelho para falha, os usuários com daltonismo vermelho-verde não poderão usar seu site corretamente. Em vez disso, talvez use texto e cor juntos, para que todos possam entender o que está acontecendo.

Para obter mais informações sobre daltonismo, consulte os seguintes artigos:

- [Medline Plus: Daltonismo](https://medlineplus.gov/colorblindness.html) (Instituto Nacional de Saúde dos Estados Unidos)
- [Academia Americana de Oftalmologia: O que é daltonismo?](https://www.aao.org/eye-health/diseases/what-is-color-blindness)
- [Daltonismo e Web Design](https://www.usability.gov/get-involved/blog/2010/02/color-blindness.html) (Usability.gov: Departamento de Saúde e Serviços Humanos dos Estados Unidos)

### Exemplo de design de paleta

Vamos considerar um exemplo rápido de seleção de uma paleta de cores apropriada para um site. Imagine que você está construindo um site para um novo jogo que acontece no planeta Marte. Então, vamos fazer uma [pesquisa no Google por fotos de Marte](https://www.google.com/search?q=Mars&tbm=isch). Muitos bons exemplos de coloração marciana lá. Evitamos cuidadosamente as maquetes e as fotos dos filmes. E decidimos usar uma foto tirada por um dos landers de Marte que a humanidade estacionou na superfície nas últimas décadas, já que o jogo se passa na superfície do planeta. Usamos uma ferramenta de seleção de cores para selecionar uma amostra da cor que escolhemos.

Usando uma ferramenta conta-gotas, identificamos uma cor que gostamos e determinamos que a cor em questão é `#D79C7A`, que é uma cor vermelho-alaranjada apropriada que é tão estereotipada da superfície marciana.

Tendo selecionado nossa cor base, precisamos construir nossa paleta. Decidimos usar [Paletton](https://www.paletton.com/) para criar as outras cores que precisamos. Ao abrir Paletton, vemos:

![Logo após carregar Paletton.](paletton1.png)

Em seguida, inserimos o código hexadecimal da nossa cor (`D79C7A`) na caixa "Base RGB" no canto inferior esquerdo da ferramenta:

![Após inserir a cor base](paletton2.png)

Agora vemos uma paleta monocromática baseada na cor que escolhemos na foto de Marte. Se você precisar de muitas cores relacionadas por algum motivo, é provável que sejam boas. Mas o que realmente queremos é uma cor de destaque. Algo que irá aparecer ao lado da cor base. Para encontrar isso, clicamos no botão "adicionar complementar" abaixo do menu que permite selecionar o tipo de paleta (atualmente "Monocromática"). Paletton calcula uma cor de destaque apropriada; clicar na cor de destaque no canto inferior direito nos diz que essa cor é `#508D7C`.

![Agora com cores complementares incluídas.](paletton3.png)

Se não estiver satisfeito com a cor que lhe é proposta, pode alterar o esquema de cores, para ver se encontra algo de que goste mais. Por exemplo, se não gostarmos da cor azul-esverdeada proposta, podemos clicar no ícone do esquema de cores Triad, que nos apresenta o seguinte:

![Esquema de cores da tríade selecionado](paletton4.png)

Esse azul acinzentado no canto superior direito parece muito bom. Clicando nele, descobrimos que é `#556E8D`. Isso seria usado como a cor de destaque, para ser usado com moderação para destacar as coisas, como em títulos ou no destaque de guias ou outros indicadores no site:

![Esquema de cores da tríade selecionado](paletton-color-detail.png)

Agora temos nossa cor base e nosso sotaque. Além disso, temos alguns tons complementares de cada um, caso precisemos deles para gradientes e afins. As cores podem então ser exportadas em um nvários formatos para que você possa utilizá-los.

Depois de ter essas cores, você provavelmente ainda precisará selecionar cores neutras apropriadas. A prática comum de design é tentar encontrar o ponto ideal onde haja contraste suficiente para que o texto seja nítido e legível, mas não contraste suficiente para se tornar áspero para os olhos. É fácil ir longe demais de uma forma ou de outra, portanto, certifique-se de obter feedback sobre suas cores depois de selecioná-las e ter exemplos delas em uso disponíveis. Se o contraste for muito baixo, seu texto tenderá a ficar desbotado pelo fundo, deixando-o ilegível, mas se o contraste for muito alto, o usuário poderá achar seu site berrante e desagradável de se ver.

### Cor, fundos, contraste e impressão

O que parece bom na tela pode parecer muito diferente no papel.
Além disso, a tinta pode ser cara e, se um usuário estiver imprimindo sua página, ele não precisará necessariamente de todos os fundos e usar sua preciosa tinta quando tudo o que importa é o próprio texto.
A maioria dos navegadores, por padrão, remove imagens de fundo ao imprimir documentos.

Se as cores e imagens de fundo foram selecionadas com cuidado e/ou são cruciais para a utilidade do conteúdo, você pode usar a propriedade CSS {{cssxref("print-color-adjust")}} para informar ao navegador que não deve fazer ajustes na aparência do conteúdo.

O valor padrão de `print-color-adjust`, `economy`, indica que o navegador tem permissão para fazer alterações de aparência conforme necessário para tentar otimizar a legibilidade e/ou economia de impressão do conteúdo, dado o tipo do dispositivo de saída para o qual o documento está sendo desenhado.

Você pode definir `print-color-adjust` como `exact` para informar ao navegador que o elemento ou elementos nos quais você o usa foram projetados especificamente para funcionar melhor com as cores e imagens deixadas como estão.
Com este conjunto, o navegador não alterará a aparência do elemento e o desenhará conforme indicado pelo seu CSS.

> **Nota:** Não há garantia, porém, de que `print-color-adjust: exact` resultará em seu CSS sendo usado exatamente como fornecido.
> Se o navegador fornecer as preferências do usuário para alterar a saída (como uma caixa de seleção "não imprimir fundos" em uma caixa de diálogo de impressão), isso substituirá o valor de `print-color-adjust`.

## Veja também

- [Desenhando gráficos](/pt-BR/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
- [Gráficos na web](/pt-BR/docs/Web/Guide/Graphics)
- [ferramenta seletora de cores do MDN](/pt-BR/docs/Web/CSS/CSS_Colors/Color_picker_tool)
