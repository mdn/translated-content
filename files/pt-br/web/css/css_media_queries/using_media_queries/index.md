---
title: Usando Media Queries
slug: Web/CSS/CSS_media_queries/Using_media_queries
---

Uma **media query** consiste de um _media type_ e pelo menos uma expressão que limita o escopo das folhas de estilo usando _media features_, tal como largura, altura e cor. _Media queries_, adicionadas no [CSS3](/pt-BR/docs/CSS/CSS3), deixam a apresentação do conteúdo adaptado a uma gama especifica de dispositivos não precisando mudar o conteúdo em si.

## Sintaxe

_Media queries_ consistem de um _[media type](/en-US/docs/Web/CSS/@media)_ e podem, a partir de uma especificação CSS3, contendo uma ou mais expressões, expressa em _media features_, que determinam ou verdadeiro ou falso. Os resultados da _query_ são verdadeiros se o _media type_ especificado na _media query_ corresponde ao tipo do documento exibido no dispositivo e todas as expressões na _media query_ são verdadeiras.

```html
<!-- CSS media query em um elemento de link -->
<link rel="stylesheet" media="(max-width: 800px)" href="example.css" />
```

```css
/* CSS media query dentro de um stylesheet */
@media (max-width: 600px) {
  .facet_sidebar {
    display: none;
  }
}
```

Quando uma _media query_ é verdadeira, a camada de estilo ou as regras de estilos correspondentes são aplicadas, seguindo o padrão de regras de cascatas. Camadas de estilos com _media queries_ ligadas a tag \<link> [vão fazer download](http://scottjehl.github.com/CSS-Download-Tests/) mesmo se suas _medias queries_ retornarem falso (eles não se aplicam, no entanto).

A menos que você use os operadores `not` ou `only`, o _media type_ é opcional e o tipo `all` será implícito.

### Operadores lógicos

Você pode compor _media queries_ complexos usando operadores lógicos, incluindo `not`, `and`, e `only`. O operador `and` é usado para combinar múltiplas _[media features](#media_features)_ em uma mesma _media query_, requerendo que cada sequência de características, retorne verdadeiro na ordem para que a _query_ seja verdadeiro. O operador `not` é usado para negar uma _media query_ inteira. O operador `only` é usado para aplicar um estilo apenas se a _query_ inteira for igual, útil para previnir que navegadores antigos apliquem os estilos selecionados. Se você usar os operadores `not` ou `only`, você tem que especificar um tipo de _media_ explícito.

Você também pode combinar múltiplas _medias queries_ em uma lista separadas por vírgulas, se qualquer uma das _media queries_ na lista é verdadeira, toda a instrução retorna verdadeira. Isto é equivalente a um operador `or`.

#### and

A palavra-chave `and` é usada para combinar múltiplas _media features_, bem como combinar _media features_ com _media types_. Uma _media query_ básica, uma _media feature_ simples com a _media type_ `all`, pode parecer com isso:

```css
@media (min-width: 700px) { ... }
```

Se, no entanto, você desejar que isso se aplique apenas para telas em landscape, você pode usar o operador `and` para deixar todas as _media features_ juntas.

```css
@media (min-width: 700px) and (orientation: landscape) { ... }
```

Agora, a _media query_ acima vai apenas retorna verdadeira se o viewport for 700px, _wide_ ou _wider_ e a tela estiver em _landscape_. Se, no entanto, você deseja apenas que isso seja aplicado se a tela em questão for _media type_ TV, você pode encadear essas _features_ com a _media type_ usando o operador `and`.

```css
@media tv and (min-width: 700px) and (orientation: landscape) { ... }
```

Agora, a _media query_ acima vai ser aplicada apenas se a _media type_ for TV, o _viewport_ for 700px _wide_ ou _wider_, e a tela estiver em paisagem.

#### Listas separadas por vírgula

Listas separadas por vírgulas comportam-se como o operador `or` quando utilizadas em _media queries_. Quando utilizamos _media queries_ com uma lista separada por vírgulas, se qualquer _media queries_ retornar verdadeiro, os estilos ou folhas de estilos serão aplicadas. Cada _media query_ em um lista separa por vírgulas é tratada como uma _query_ individual, e qualquer operador aplica em uma _media query_ não afeta os outros. Isto significa que _media queries_ separadas por vírgulas podem ter objetivos diferentes de _media_ _features_, _types_ e _states_.

Por exemplo, se você quiser aplicar um conjunto de estilos se o dispositivo de visualização tiver um largura mínima de 700px ou estiver sendo segurando em paisagem, você pode escrever o seguinte:

```css
@media (min-width: 700px), handheld and (orientation: landscape) { ... }
```

Acima, se eu estivesse em um dispositivo `screen` com um _viewport_ largura de 800px, a afirmação retorna verdadeiro por que a primeira parte, interpretada como `@media all and (min-width: 700px)` será aplicada no meu dispositivo e portanto retorna verdadeiro, apesar do fato que meu dispositivo `screen` iria falhar no _media type_ `handheld` na segunda _media query_. Do mesmo modo, se eu estivesse segurando um dispositivo em paisagem com um _viewport_ de largura de 500px, enquanto a primeira media query falha devido a largura do _viewport_, a segunda _media query_ teria sucesso e assim o _media statement_ retorna verdadeiro.

#### not

A palavra chave `not` se aplica em toda a _media query_ e retorna verdadeiro, caso contrário retorna falso (tal como monochrome como cor de tela ou uma tela de largura de 600px com um `min-width: 700px` recurso consultado). Um not vai apenas negar a _media query_ que é aplicada, de modo não toda a _media query_ que apresente uma _media querie_ com uma lista separada por vírgulas. A palavra chave `not` não pode ser usada para negar uma característica individual da _query_, apenas uma _media query_ inteira. Por exemplo, o `not` é avaliado por último na _query_ seguinte:

```css
@media not all and (monochrome) { ... }
```

Isto significa que a _query_ é avaliada assim:

```css
@media not (all and (monochrome)) { ... }
```

... em vez disso:

```css
@media (not all) and (monochrome) { ... }
```

Um outro exemplo, veja a _media query_ seguinte:

```css
@media not screen and (color), print and (color) { ... }
```

É avalida desta forma:

```css
@media (not (screen and (color))), print and (color) { ... }
```

#### only

A palavra chave _`only`_ previne que navegadores antigos que não suportam media queries com media features de aplicar os estilos dados:

```html
<link rel="stylesheet" media="only screen and (color)" href="example.css" />
```

### Pseudo-BNF

```
media_query_list: <media_query> [, <media_query> ]*
media_query: [[only | not]? <media_type> [ and <expression> ]*]
  | <expression> [ and <expression> ]*
expression: ( <media_feature> [: <value>]? )
media_type: all | aural | braille | handheld | print |
  projection | screen | tty | tv | embossed
media_feature: width | min-width | max-width
  | height | min-height | max-height
  | device-width | min-device-width | max-device-width
  | device-height | min-device-height | max-device-height
  | aspect-ratio | min-aspect-ratio | max-aspect-ratio
  | device-aspect-ratio | min-device-aspect-ratio | max-device-aspect-ratio
  | color | min-color | max-color
  | color-index | min-color-index | max-color-index
  | monochrome | min-monochrome | max-monochrome
  | resolution | min-resolution | max-resolution
  | scan | grid
```

_Media queries_ são _case insensitive_. _Media queries_ envolvidas em _media types_ desconhecidos serão sempre falsas.

> **Nota:** Parenteses são obrigatórios em volta de expressões; a falta deles é um erro.

## Características de mídia

A maioria das _media features_ podem ter prefixo "min-" ou "max-" para expressar as restrições "maior ou igual" ou "menor ou igual". Isto evita o uso dos símbolos "<" e ">" , que entrem em conflito com HTML e XML. Se você usar uma _media feature_ sem especificar um valor, a expressão retorna verdadeiro, se o valor da _feature_ for diferente de zero.

> **Nota:** Se uma media feature não se aplicar ao dispositivo onde o navegador esta sendo executado, as expressões que envolvem essa media feature são sempre falsas. Por exemplo, consultar um aspecto de um dispositivo sonoro, sempre resulta em falso.

### cor

**Valor:** {{cssxref("&lt;color&gt;")}}
**Mídia:** {{cssxref("Media/Visual")}}
**Aceita prefixos min/max:** sim

Indica o número de bits por componente de cor no dispositivo de saída. Se o dispositivo não é um dispositivo de cor, o valor é zero.

> **Nota:** Se os componentes de cor têm diferentes números de bits por componente de cor, o menor valor é utilizado. Por exemplo, se o display usa 5 bits para azul e vermelho e 6 bits para verde, então o dispositivo considera 5 bits por componente de cor. Se o dispositivo usar cores indexadas, o menor número de bits por componente de cor na tabela de cores é usado.

#### Exemplos

Aplicar uma folha de estilo a todos dispositivos:

```css
@media all and (color) { ... }
```

Aplicar uma folha de estilo a todos dispositivos com no mínimo 4 bits de color componente:

```css
@media all and (min-color: 4) { ... }
```

### color-index

**Valor:** {{cssxref("&lt;integer&gt;")}}
**Mídia:** {{cssxref("Media/Visual")}}
**Aceita prefixos min/max:** Sim

Indica o número de entradas na tabela de consulta de cores para o dispositivo de saída.

#### Exemplos

Para indicar que uma folha de estilo deve ser aplicada para todos os dispositivos que usam cores indexadas, você pode fazer:

```css
@media all and (color-index) { ... }
```

Para aplicar uma folha de estilo em um dispositivo com cores indexadas menor que 256 cores:

```html
<link
  rel="stylesheet"
  media="all and (min-color-index: 256)"
  href="http://foo.bar.com/stylesheet.css" />
```

### aspect-ratio

**Valor:** {{cssxref("&lt;ratio&gt;")}}
**Mídia:** {{cssxref("Media/Visual")}}, {{cssxref("Media/Tactile")}}
**Aceita prefixos min/max:** sim

Descreve o aspecto da relação da área do display do dispositivo de saída. Este valor consiste de dois inteiros positivos separados por um caractere barra ("/"). Isto representa a relação entre pixels horizontais (primeiro termo) para pixels verticais (segundo termo).

#### Exemplo

A seguir selecionamos uma folha de estilo especial para usarmos quando a área do display é pelo menos mais larga do que alta.

```css
@media screen and (min-aspect-ratio: 1/1) { ... }
```

Isto seleciona o estilo quando a relação de aspecto seja 1:1 ou maior. Em outras palavras, estes estilos serão aplicados apenas quando a área de visualização for quadrada ou paisagem.

### device-aspect-ratio

**Valor:** {{cssxref("&lt;ratio&gt;")}}
**Mídia:** {{cssxref("Media/Visual")}}, {{cssxref("Media/Tactile")}}
**Aceita prefixos min/max:** sim

Descreve a relação de aspecto do dispositivo de saída. Este valor consiste de dois inteiros positivos separados pelo carácter barra ("/"). Isto representa a relação de pixels horizontais (primeiro termo) por pixels verticais (segundo termo).

#### Exemplo

A seguir, selecionamos uma folha de estilo especial para usar em telas widescreen.

```css
@media screen and (device-aspect-ratio: 16/9), screen and (device-aspect-ratio: 16/10) { ... }
```

Isso seleciona o estilo quando a relação de aspecto é 16:9 ou 16:10.

### device-height

**Valor:** {{cssxref("&lt;length&gt;")}}
**Mídia:** {{cssxref("Media/Visual")}}, {{cssxref("Media/Tactile")}}
**Aceita prefixos min/max:** sim

Descreve a altura do dispositivo de saída( ou seja, toda a tela ou página, em vez de apenas a área de renderização, tal como a janela do documento).

#### Exemplo

Para aplicar uma folha de estilo a um documento quando exibido em uma tela menor que 800 pixels de altura, você pode usar isso:

```html
<link rel="stylesheet" media="screen and (max-device-height: 799px)" />
```

### device-width

**Valor:** {{cssxref("&lt;length&gt;")}}
**Mídia:** {{cssxref("Media/Visual")}}, {{cssxref("Media/Tactile")}}
**Aceita prefixos min/max:** sim

Descreve a largura do dispositivo e saída (ou seja, toda a tela ou página, em vez de apenas a área de renderização, tal como a janela do documento).

#### Exemplo

Para aplicar uma folha de estilo a um documento quando exibido em uma tela menor que 800px de largura, você pode usar isso:

```html
<link rel="stylesheet" media="screen and (max-device-width: 799px)" />
```

### grid

**Valor:** {{cssxref("&lt;integer&gt;")}}
**Mídia:** todas
**Aceita prefixos min/max:** não

Determina se o dispositivo de saída é um dispositivo grade ou um dispositivo bitmap. Se o dispositivo é baseado em grade(tal como um terminal TTY ou uma tela de telefone com apenas um tipo de letra), o valor é 1. De outro modo é zero.

#### Exemplo

Para aplicar um estilo a dispositivos postáteis com 15-carácteres ou uma tela mais estreita:

```css
@media handheld and (grid) and (max-width: 15em) { ... }
```

> **Nota:** A unidade "em" tem um significado especial para dispositivos de grade, uma vez que a exata largura de um "em" não pode ser determinada, 1em é assumido para ser a largura de uma célula da grade horizontalmente, e a altura de uma célula verticalmente.

### height

**Valor:** {{cssxref("&lt;length&gt;")}}
**Mídia:** {{cssxref("Media/Visual")}}, {{cssxref("Media/Tactile")}}
**Aceita prefixos min/max:** yes

A característica `height` descreve a altura da superfície de renderização do dispositivo de saída (tal como a altura do viewport ou da caixa de página em uma impressora).

> **Nota:** Como o usuário redimensiona a janela, o Firefox muda as folhas de estilo como apropriado, com base nas media queries, usando as media features `width` e `height`.

### monochrome

**Valor:** {{cssxref("&lt;integer&gt;")}}
**Mídia:** {{cssxref("Media/Visual")}}
**Aceita prefixos min/max:** sim

Indica o número de bits por pixel em um dispositivo monocromático (greyscale). Se o dispositivo não for monocromático, o valor é 0.

#### Exemplos

Para aplicar uma folha de estilo em todos os dispositivos monocromáticos:

```css
@media all and (monochrome) { ... }
```

Para aplicar uma folha de estilo em dispositivos monocromáticos com pelo menos 8 bits por pixel:

```css
@media all and (min-monochrome: 8) { ... }
```

### orientation

**Valor:** `landscape` | `portrait`
**Mídia:** {{cssxref("Media/Visual")}}
**Aceita prefixos min/max:** não

Indica se o _viewport_ é modo _landscape_ (o visor é mais largo do que mais alto) ou _portrait_ (o visor é mais alto do que mais largo).

#### Exemplo

Para aplicar a folha de estilo apenas em orientação _portrait_:

```css
@media all and (orientation: portrait) { ... }
```

> **Nota:** Este valor não corresponde com a orientação real do dispositivo. Abrindo o teclado virtual na maioria dos dispositivos na orientação retrato fará com que o viewport torne-se mais largo do que alto, fazendo assim que o navegador use estilos de paisagem em vez de retrato.

### resolution

**Valor:** {{cssxref("&lt;resolution&gt;")}}
**Mídia:** {{cssxref("Media/Bitmap", "bitmap")}}
**Aceita prefixos min/max:** sim

Indica a resolução (densidade de pixel) da saída do dispositivo. A resolução pode ser especificada em pontos por inch(dpi) ou pontos por centímetro(dpcm).

#### Exemplos

Para aplicar a folha de estilo em dispositivos com resolução de pelo menos 300 pontos por inch:

```css
@media print and (min-resolution: 300dpi) { ... }
```

Para substituir a antiga sintaxe (min-device-pixel-ratio: 2):

```css
@media screen and (min-resolution: 2dppx) { ... }
```

### scan

**Valor:** `progressive` | `interlace`
**Mídia:** {{cssxref("Media/TV")}}
**Aceita prefixos min/max:** não

Descreve o processo de digitalização de dispositivos saída de televisão.

#### Exemplo

Para aplicar uma folha de estilo apenas para televisores de varredura progressiva:

```css
@media tv and (scan: progressive) { ... }
```

### width

**Valor:** {{cssxref("&lt;length&gt;")}}
**Mídia:** {{cssxref("Media/Visual")}}, {{cssxref("Media/Tactile")}}
**Aceita prefixos min/max:** sim

A _media feature_ `width` descreve a largura da superficie de renderização do dispositivo de saída (tal como a largura da janela do documento, ou a largura da caixa de página em uma impressora).

**Nota:**
Como o usuário redimensiona a janela, o Firefox muda as folhas de estilos como apropriado baseado em _media queries_ usando media features `width` e `height`.

#### Exemplos

Se você quiser especificar uma folha de estilo para dispositivos portáteis, ou dispositivos screen com uma largura maior que 20em, você pode usar essa _query_:

```css
@media handheld and (min-width: 20em), screen and (min-width: 20em) { ... }
```

Essa _media query_ especifica uma folha de estilo que aplica-se para mídias impressas maiores que 8.5 inches.

```html
<link
  rel="stylesheet"
  media="print and (min-width: 8.5in)"
  href="http://foo.com/mystyle.css" />
```

Essa _query_ especifica uma folha de estilo que é usada quano o viewport está entre 500 e 800 pixels de largura:

```css
@media screen and (min-width: 500px) and (max-width: 800px) { ... }
```

## Especificação da Mozilla para mídias características

Mozilla oferece várias _media features_ para específicos _Gecko_ . Algumas dessas podem ser sugeridas como _media features_ oficiais.

### -moz-images-in-menus

**Valor:** {{cssxref("&lt;integer&gt;")}}
**Mídia:** {{cssxref("Media/Visual")}}
**Aceita prefixos min/max:** não

Se o dispositivo permite aparecer imagens nos menus, o valor é 1; caso contrário, o valor é 0. Isto corresponde ao {{ cssxref(":-moz-system-metric(images-in-menus)") }} CSS [pseudo-class](/pt-BR/docs/CSS/Pseudo-classes).

### -moz-mac-graphite-theme

**Valor:** {{cssxref("&lt;integer&gt;")}}
**Mídia:** {{cssxref("Media/Visual")}}
**Aceita prefixos min/max:**no

Se o usuário tenha configurado seu dispositivo para usar a aparência _"Graphite"_ no _Mac OS X_, o valor é 1. Se o usuário está usando a aparência padrão _blue_, ou não está num _Mac OS X_, o valor é 0.

Isto corresponde ao {{ cssxref(":-moz-system-metric(mac-graphite-theme)") }} CSS [pseudo-class](/pt-BR/docs/CSS/Pseudo-classes).

### -moz-maemo-classic

**Valor:** {{cssxref("&lt;integer&gt;")}}
**Mídia:** {{cssxref("Media/Visual")}}
**Aceita prefixos min/max:** não

Se o usuário está usando _Maemo_ com o tema original, o valor é 1; Se está usando o mais novo tema _Fremantle_, o valor é 0.

Isto corresponde ao {{ cssxref(":-moz-system-metric(maemo-classic)") }} CSS [pseudo-class](/pt-BR/docs/CSS/Pseudo-classes).

### -moz-device-pixel-ratio

**Valor:** {{cssxref("&lt;number&gt;")}}
**Mídia:** {{cssxref("Media/Visual")}}
**Aceita prefixos min/max:** sim

Dar o número de pixels do dispositivo por pixels do CSS.

**Não use este recurso.**

Em vez disso, use o recurso _`resolution`_ com a unidade `dppx`.

`-moz-device-pixel-ratio` pode ser usada para compatibilidade com Firefox mais velho que a versão 16 e `-webkit-device-pixel-ratio` com navegadores baseados no WebKit que não suportam `dppx`.

Exemplo:

```
@media (-webkit-min-device-pixel-ratio: 2), /* Navegadores baseados no Webkit */
       (min--moz-device-pixel-ratio: 2),    /* Navegadores mais antigos do Firefox (antes do Firefox 16) */
       (min-resolution: 2dppx),             /* Forma padrão */
       (min-resolution: 192dpi)             /* dppx fallback */
```

Veja este artigo [CSSWG](https://www.w3.org/blog/CSS/2012/06/14/unprefix-webkit-device-pixel-ratio/) para ccompatibilidade de boas práticas em relação a _`resolution`_ e _`dppx`_.

> **Nota:** Esta _media feature_ é também implementada pelo Webkit e pelo [IE 11 para Windows Phone 8.1](<https://msdn.microsoft.com/en-us/library/ie/dn760733(v=vs.85).aspx>)como -webkit-device-pixel-ratio. Os prefixos min e max implementados pelo Gecko são nomeados min--moz-device-pixel-ratio e max--moz-device-pixel-ratio; mas os mesmos prefixos implementados pelo Webkit são chamados -webkit-min-device-pixel-ratio e -webkit-max-device-pixel-ratio.

### -moz-os-version

**Valor:** `windows-xp` | `windows-vista` | `windows-win7` | `windows-win8`
**Mídia:** {{cssxref("Media/Visual")}}
**Aceita prefixos min/max:** não

Indica qual versão do sistema operacional está sendo usado atualmente. Atualmente apenas implementada no Windows. Possíveis valores são:

- `windows-xp`
- `windows-vista`
- `windows-win7`
- `windows-win8`

Isto é fornecido pelas _skins das aplicações_ e outros códigos do chrome para serem capazes de se adaptar para funcionar bem com a versão atual do sistema operacional.

### -moz-scrollbar-end-backward

**Valor:** {{cssxref("&lt;integer&gt;")}}
**Mídia:** {{cssxref("Media/Visual")}}
**Aceita prefixos min/max:** não

Se a interface do usuário do dispositivo exibe uma seta para trás no final da barra de rolagem, o valor é 1. Caso contrário, é 0.

Isto corresponde ao {{ cssxref(":-moz-system-metric(scrollbar-end-backward)") }} CSS [pseudo-class](/pt-BR/docs/CSS/Pseudo-classes).

### -moz-scrollbar-end-forward

**Valor:** {{cssxref("&lt;integer&gt;")}}
**Mídia:** {{cssxref("Media/Visual")}}
**Aceita prefixos min/max:** não

Se a interface do usuário do dispositivo a forward arrow button at the end of scrollbars, this is 1. Otherwise it's 0.

Isto corresponde ao {{ cssxref(":-moz-system-metric(scrollbar-end-forward)") }} CSS [pseudo-class](/pt-BR/docs/CSS/Pseudo-classes).

### -moz-scrollbar-start-backward

**Valor:** {{cssxref("&lt;integer&gt;")}}
**Mídia:** {{cssxref("Media/Visual")}}
**Aceita prefixos min/max:** não

Se a interface do usuário do dispositivo a backward arrow button at the beginning of scrollbars, this is 1. Otherwise it's 0.

Isto corresponde ao {{ cssxref(":-moz-system-metric(scrollbar-start-backward)") }} CSS [pseudo-class](/pt-BR/docs/CSS/Pseudo-classes).

### -moz-scrollbar-start-forward

**Valor:** {{cssxref("&lt;integer&gt;")}}
**Mídia:** {{cssxref("Media/Visual")}}
**Aceita prefixos min/max:** não

Se a interface do usuário do dispositivo a forward arrow button at the beginning of scrollbars, this is 1. Otherwise it's 0.

Isto corresponde ao {{ cssxref(":-moz-system-metric(scrollbar-start-forward)") }} CSS [pseudo-class](/pt-BR/docs/CSS/Pseudo-classes).

### -moz-scrollbar-thumb-proportional

**Valor:** {{cssxref("&lt;integer&gt;")}}
**Mídia:** {{cssxref("Media/Visual")}}
**Aceita prefixos min/max:** não

Se a interface do usuário do dispositivo the thumb of scrollbars proportionally (that is, sized based on the percentage of the document that is visible), this is 1. Otherwise it's 0.

Isto corresponde ao {{ cssxref(":-moz-system-metric(scrollbar-thumb-proportional)") }} CSS [pseudo-class](/pt-BR/docs/CSS/Pseudo-classes).

### -moz-touch-enabled

**Valor:** {{cssxref("&lt;integer&gt;")}}
**Mídia:** {{cssxref("Media/Visual")}}
**Aceita prefixos min/max:** não

If the device supports touch events (for a touch screen), this is 1. Otherwise it's 0.

Isto corresponde ao {{ cssxref(":-moz-system-metric(touch-enabled)") }} CSS [pseudo-class](/pt-BR/docs/CSS/Pseudo-classes).

#### Exemplo

You might use this to render your buttons slightly larger, for example, if the user is on a touch-screen device, to make them more finger-friendly.

### -moz-windows-classic

**Valor:** {{cssxref("&lt;integer&gt;")}}
**Mídia:** {{cssxref("Media/Visual")}}
**Aceita prefixos min/max:** não

If the user is using Windows unthemed (in classic mode instead of using uxtheme), this is 1; otherwise it's 0.

Isto corresponde ao {{ cssxref(":-moz-system-metric(windows-classic)") }} CSS [pseudo-class](/pt-BR/docs/CSS/Pseudo-classes).

### -moz-windows-compositor

**Valor:** {{cssxref("&lt;integer&gt;")}}
**Mídia:** {{cssxref("Media/Visual")}}
**Aceita prefixos min/max:** não

If the user is using Windows with the DWM compositor, this is 1; otherwise it's 0.

Isto corresponde ao {{ cssxref(":-moz-system-metric(windows-compositor)") }} CSS [pseudo-class](/pt-BR/docs/CSS/Pseudo-classes).

### -moz-windows-default-theme

**Valor:** {{cssxref("&lt;integer&gt;")}}
**Mídia:** {{cssxref("Media/Visual")}}
**Aceita prefixos min/max:** não

If the user is currently using one of the default Windows themes (Luna, Royale, Zune, or Aero (including Vista Basic, Vista Advanced, and Aero Glass), this is 1. Otherwise it's 0.

Isto corresponde ao {{ cssxref(":-moz-system-metric(windows-default-theme)") }} CSS [pseudo-class](/pt-BR/docs/CSS/Pseudo-classes).

### -moz-windows-glass

**Valor:** {{cssxref("&lt;integer&gt;")}}
**Mídia:** {{cssxref("Media/Visual")}}
**Aceita prefixos min/max:** não

If the user is using Windows Glass theme, this is 1; otherwise it's 0. Note that this only exists for Windows 7 and earlier.

### -moz-windows-theme

**Valor:** `aero` | `luna-blue` | `luna-olive` | `luna-silver` | `royale` | `generic` | `zune`
**Mídia:** {{cssxref("Media/Visual")}}
**Aceita prefixos min/max:** não

Indicates which Windows theme is currently being used. Only available on Windows. Possible values are:

- `aero`
- `luna-blue`
- `luna-olive`
- `luna-silver`
- `royale`
- `generic`
- `zune`

Isto é previsto para _skins_ de aplicativo e outro código de aplicações de chrome a ser capaz de se adaptar a funcionar bem com o actual tema do Windows.

## See also

- [CSS 3 media query specification](https://www.w3.org/TR/css3-mediaqueries/)
- [Media types](/pt-BR/docs/CSS/@media)
- [Using media queries from code](/pt-BR/docs/CSS/Using_media_queries_from_code)
- [List of mobile and tablet viewport sizes with pixel ratios and physical sizes](http://i-skool.co.uk/mobile-development/web-design-for-mobiles-and-tablets-viewport-sizes/)
- [CSS Animations Between Media Queries](http://davidwalsh.name/animate-media-queries) by David Walsh
