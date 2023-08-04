---
title: <blend-mode>
slug: Web/CSS/blend-mode
---

{{CSSRef}}

[O tipo básico de dados](/pt-BR/docs/Web/CSS/CSS_Tipos) [CSS](/pt-BR/docs/Web/CSS) **`<blend-mode>`** (modo de mesclagem) descreve como as cores devem aparecer, quando objetos se sobrepõem. Usa-se nas propriedades {{cssxref("background-blend-mode")}} e {{cssxref("mix-blend-mode")}}.

Para cada pixel sobreposto, o **`blend-mode`** obtém o valor da cor do pixel da frente e do pixel do fundo, faz um cálculo com esses valores e devolve um novo valor de cor.

## Syntaxe

O tipo básico de dados **`<blend-mode>`** é definido usando uma palavra chave escolhida da lista abaixo.

### Valores

- `normal`

  - : A cor firnal é a do pixel de cima, não importando a cor dor o pixel de baixo.
    O efeito é como duas folhas de papel opacas se sobrepondo.

    ```html hidden
    <div id="div"></div>
    ```

    ```css hidden
    #div {
      width: 300px;
      height: 300px;
      background: url("br.png"), url("tr.png");
      background-blend-mode: normal;
    }
    ```

    {{ EmbedLiveSample('normal_example', "300", "300") }}

- `multiply`

  - : A cor final é o resultado da multiplicação das cores de cima e de baixo.
    Quando uma das camadas for preta, a cor final será preta, enquanto uma camada branca não altera a cor final.
    O efeito é como duas imagens impressas sobrepostas em um filme transparente.

    ```html hidden
    <div id="div"></div>
    ```

    ```css hidden
    #div {
      width: 300px;
      height: 300px;
      background: url("br.png"), url("tr.png");
      background-blend-mode: multiply;
    }
    ```

    {{ EmbedLiveSample('multiply_example', "300", "300") }}

- `screen`

  - : A cor final é o resultado do inverso de cada cor, multiplicados um pelo outro e depois, o inverso desse resultado.
    Uma camada preta não altera o resultado final, enquanto uma camada branca resulta na cor final branca.
    O efeito é como o de duas imagens sobrepostas por um projetor, sobre uma tela de projeção.

    ```html hidden
    <div id="div"></div>
    ```

    ```css hidden
    #div {
      width: 300px;
      height: 300px;
      background: url("br.png"), url("tr.png");
      background-blend-mode: screen;
    }
    ```

    {{ EmbedLiveSample('screen_example', "300", "300") }}

- `overlay`

  - : A cor final será o resultado de `multiply`, se a cor de baixo for mais escura ou `screen`, se a cor de baixo for mais clara.
    Este `blend-mode` é equivalente a `hard-light` mas com as camadas invertidas.

    ```html hidden
    <div id="div"></div>
    ```

    ```css hidden
    #div {
      width: 300px;
      height: 300px;
      background: url("br.png"), url("tr.png");
      background-blend-mode: overlay;
    }
    ```

    {{ EmbedLiveSample('overlay_example', "300", "300") }}

- `darken`

  - : A cor final é composta pelos valores mais escuros dos canais de cores de cada uma das camadas.

    ```html hidden
    <div id="div"></div>
    ```

    ```css hidden
    #div {
      width: 300px;
      height: 300px;
      background: url("br.png"), url("tr.png");
      background-blend-mode: darken;
    }
    ```

    {{ EmbedLiveSample('darken_example', "300", "300") }}

- `lighten`

  - : A cor final é composta pelos valores mais claros de cada um dos canais de cores das camadas.

    ```html hidden
    <div id="div"></div>
    ```

    ```css hidden
    #div {
      width: 300px;
      height: 300px;
      background: url("br.png"), url("tr.png");
      background-blend-mode: lighten;
    }
    ```

    {{ EmbedLiveSample('lighten_example', "300", "300") }}

- `color-dodge`

  - : A cor final é o resultado da divisão da cor de baixo pelo inverso da cor de cima.
    Um fundo preto não altera as cores. Uma cor de cima inversa a cor de baixo, resulta em uma cor bastante luminosa.
    Este `blend-mode` é similar a `screen`, mas a cor de cima precisa ser apenas tão clara quanto o inverso da cor de fundo para deixar o resultado muito luminoso.

    ```html hidden
    <div id="div"></div>
    ```

    ```css hidden
    #div {
      width: 300px;
      height: 300px;
      background: url("br.png"), url("tr.png");
      background-blend-mode: color-dodge;
    }
    ```

    {{ EmbedLiveSample('color-dodge_example', "300", "300") }}

- `color-burn`

  - : A cor final é o inverso da cor do fundo, dividido pelo valor da cor da frente e então inverte-se o resultado final.
    Se a cor de cima for branca, não haverá alteração. Se a cor de cima for o inverso da cor de baixo, resultará em uma cor preta.
    Este `blend-mode` é similar ao `multiply`, mas a cor de cima precisa apenas ser tão escura quanto o inverso da cor de baixo para fazer o resultado final ser preto.

    ```html hidden
    <div id="div"></div>
    ```

    ```css hidden
    #div {
      width: 300px;
      height: 300px;
      background: url("br.png"), url("tr.png");
      background-blend-mode: color-burn;
    }
    ```

    {{ EmbedLiveSample('color-burn_example', "300", "300") }}

- `hard-light`

  - : A cor final é o resultado do `multiply` se a cor de cima for a mais escura, ou o resultado de `screen` se a cor de cima for mais clara.
    Este `blend-mode` é equivalente ao `overlay` mas com as camadas invertidas.
    O efeito é o de iluminar o fundo com um holofote muito forte e intenso.

    ```html hidden
    <div id="div"></div>
    ```

    ```css hidden
    #div {
      width: 300px;
      height: 300px;
      background: url("br.png"), url("tr.png");
      background-blend-mode: hard-light;
    }
    ```

    {{ EmbedLiveSample('hard-light_example', "300", "300") }}

- `soft-light`

  - : O resultado final é similar ao de `hard-light`, porém menos intenso.
    O efeito é o de iluminar o fundo com um holofote difuso.

    ```html hidden
    <div id="div"></div>
    ```

    ```css hidden
    #div {
      width: 300px;
      height: 300px;
      background: url("br.png"), url("tr.png");
      background-blend-mode: soft-light;
    }
    ```

    {{ EmbedLiveSample('soft-light_example', "300", "300") }}

- `difference`

  - : The final color is the result of subtracting the darker of the two colors from the lighter one.
    A black layer has no effect, while a white layer inverts the other layer's color.

    ```html hidden
    <div id="div"></div>
    ```

    ```css hidden
    #div {
      width: 300px;
      height: 300px;
      background: url("br.png"), url("tr.png");
      background-blend-mode: difference;
    }
    ```

    {{ EmbedLiveSample('difference_example', "300", "300") }}

- `exclusion`

  - : The final color is similar to `difference`, but with less contrast.
    As with `difference`, a black layer has no effect, while a white layer inverts the other layer's color.

    ```html hidden
    <div id="div"></div>
    ```

    ```css hidden
    #div {
      width: 300px;
      height: 300px;
      background: url("br.png"), url("tr.png");
      background-blend-mode: exclusion;
    }
    ```

    {{ EmbedLiveSample('exclusion_example', "300", "300") }}

- `hue`

  - : The final color has the _hue_ of the top color, while using the _saturation_ and _luminosity_ of the bottom color.

    ```html hidden
    <div id="div"></div>
    ```

    ```css hidden
    #div {
      width: 300px;
      height: 300px;
      background: url("br.png"), url("tr.png");
      background-blend-mode: hue;
    }
    ```

    {{ EmbedLiveSample('hue_example', "300", "300") }}

- `saturation`

  - : The final color has the _saturation_ of the top color, while using the _hue_ and _luminosity_ of the bottom color.
    A pure gray backdrop, having no saturation, will have no effect.

    ```html hidden
    <div id="div"></div>
    ```

    ```css hidden
    #div {
      width: 300px;
      height: 300px;
      background: url("br.png"), url("tr.png");
      background-blend-mode: saturation;
    }
    ```

    {{ EmbedLiveSample('saturation_example', "300", "300") }}

- `color`

  - : The final color has the _hue_ and _saturation_ of the top color, while using the _luminosity_ of the bottom color.
    The effect preserves gray levels and can be used to colorize the foreground.

    ```html hidden
    <div id="div"></div>
    ```

    ```css hidden
    #div {
      width: 300px;
      height: 300px;
      background: url("br.png"), url("tr.png");
      background-blend-mode: color;
    }
    ```

    {{ EmbedLiveSample('color_example', "300", "300") }}

- `luminosity`

  - : The final color has the _luminosity_ of the top color, while using the _hue_ and _saturation_ of the bottom color.
    This blend mode is equivalent to `color`, but with the layers swapped.

    ```html hidden
    <div id="div"></div>
    ```

    ```css hidden
    #div {
      width: 300px;
      height: 300px;
      background: url("br.png"), url("tr.png");
      background-blend-mode: luminosity;
    }
    ```

    {{ EmbedLiveSample('luminosity_example', "300", "300") }}

## Interpolation of blend modes

Changes between blends mode are not interpolated. Any change occurs immediately.

## Specifications

| Specification                                                         | Status                     | Comment             |
| --------------------------------------------------------------------- | -------------------------- | ------------------- |
| {{ SpecName('Compositing', '#ltblendmodegt', '&lt;blend-mode&gt;') }} | {{ Spec2('Compositing') }} | Initial definition. |

## Browser Compatibility

{{Compat("css.types.blend-mode")}}

## See also

- Properties that use this data type: {{cssxref("background-blend-mode")}}, {{cssxref("mix-blend-mode")}}
- [Blend modes](http://en.wikipedia.org/wiki/Blend_modes)
