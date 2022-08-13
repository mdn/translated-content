---
title: <blend-mode>
slug: Web/CSS/blend-mode
translation_of: Web/CSS/blend-mode
---
{{CSSRef}}

## Описание

The **`<blend-mode>`** type is a collection of keywords describing blend modes.

A blend mode is a method of calculating the final color value of a pixel when layers overlap. Each blend mode takes the color value of the foreground and the backdrop (top color and bottom color respectively), perfoms its calculation and returns a color value. The final, visible layer is the result of performing the blend mode calculation on every overlapping pixel among the blended layers.

## Синтаксис

    Формальный синтаксис: normal | multiply | screen | overlay | darken | lighten | color-dodge | color-burn | hard-light | soft-light | difference | exclusion | hue | saturation | color | luminosity

### Возможные значения

- `normal`
  - : The final color is the top color, whatever the bottom color may be.
    The effect is similar to two opaque pieces of paper overlapping.```css hidden
    #div {
    width: 300px;
    height: 300px;
    background: url('https://mdn.mozillademos.org/files/8543/br.png'),
    url('https://mdn.mozillademos.org/files/8545/tr.png');
    background-blend-mode: normal;
    }
    ```{{ EmbedLiveSample('normal', "300", "300") }}

    ```
- `multiply`
  - : The final color is the result of multiplying the top and bottom colors.
    A black layer leads to a black final layer, and a white layer leads to no change.
    The effect is similar to two images printed on transparent film overlapping.```css hidden
    #div {
    width: 300px;
    height: 300px;
    background: url('https://mdn.mozillademos.org/files/8543/br.png'),
    url('https://mdn.mozillademos.org/files/8545/tr.png');
    background-blend-mode: multiply;
    }
    ```{{ EmbedLiveSample('multiply', "300", "300") }}

    ```
- `screen`
  - : The final color is the result of inverting the colors, multiplying them and inverting that color value.
    A black layer leads to no change, and a white layer leads to a white final layer.
    The effect is similar to two images shone onto a projection screen.```css hidden
    #div {
    width: 300px;
    height: 300px;
    background: url('https://mdn.mozillademos.org/files/8543/br.png'),
    url('https://mdn.mozillademos.org/files/8545/tr.png');
    background-blend-mode: screen;
    }
    ```{{ EmbedLiveSample('screen', "300", "300") }}

    ```
- `overlay`
  - : The final color is the result of `multiply` if the bottom color is darker, or `screen` if the bottom color is lighter.
    This blend mode is equivalent to `hard-light` but with the layers swapped.```css hidden
    #div {
    width: 300px;
    height: 300px;
    background: url('https://mdn.mozillademos.org/files/8543/br.png'),
    url('https://mdn.mozillademos.org/files/8545/tr.png');
    background-blend-mode: overlay;
    }
    ```{{ EmbedLiveSample('overlay', "300", "300") }}

    ```
- `darken`
  - : The final color is a color composed of the darkest values per color channel.```css hidden
    #div {
    width: 300px;
    height: 300px;
    background: url('https://mdn.mozillademos.org/files/8543/br.png'),
    url('https://mdn.mozillademos.org/files/8545/tr.png');
    background-blend-mode: darken;
    }
    ```{{ EmbedLiveSample('darken', "300", "300") }}

    ```
- `lighten`
  - : The final color is a color composed of the lightest values per color channel.```css hidden
    #div {
    width: 300px;
    height: 300px;
    background: url('https://mdn.mozillademos.org/files/8543/br.png'),
    url('https://mdn.mozillademos.org/files/8545/tr.png');
    background-blend-mode: lighten;
    }
    ```{{ EmbedLiveSample('lighten', "300", "300") }}

    ```
- `color-dodge`
  - : The final color is the result of dividing the bottom color by the inverse of the top color.
    A black foreground leads to no change. A foreground with the inverse color of the backdrop leads to a fully lit color.
    This blend mode is similar to screen, but the foreground need only be as light as the inverse of the backdrop to reach a fully lit color.```css hidden
    #div {
    width: 300px;
    height: 300px;
    background: url('https://mdn.mozillademos.org/files/8543/br.png'),
    url('https://mdn.mozillademos.org/files/8545/tr.png');
    background-blend-mode: color-dodge;
    }
    ```{{ EmbedLiveSample('color-dodge', "300", "300") }}

    ```
- `color-burn`
  - : This final color is the result of inverting the bottom color, dividing the value by the top color, and inverting that value.
    A white foreground leads to no change. A foreground with the inverse color of the backdrop leads to a black final image.
    This blend mode is similar to multiply, but the foreground need only be as dark as the inverse of the backdrop to make the final image black.```css hidden
    #div {
    width: 300px;
    height: 300px;
    background: url('https://mdn.mozillademos.org/files/8543/br.png'),
    url('https://mdn.mozillademos.org/files/8545/tr.png');
    background-blend-mode: color-burn;
    }
    ```{{ EmbedLiveSample('color-burn', "300", "300") }}

    ```
- `hard-light`
  - : The final color is the result of `multiply` if the top color is darker, or `screen` if the top color is lighter.
    This blend mode is equivalent to `overlay` but with the layers swapped.
    The effect is similar to shining a _harsh_ spotlight on the backdrop.```css hidden
    #div {
    width: 300px;
    height: 300px;
    background: url('https://mdn.mozillademos.org/files/8543/br.png'),
    url('https://mdn.mozillademos.org/files/8545/tr.png');
    background-blend-mode: hard-light;
    }
    ```{{ EmbedLiveSample('hard-light', "300", "300") }}

    ```
- `soft-light`
  - : The final color is similar to hard-light, but softer.
    This blend mode behaves similar to `hard-light`.
    The effect is similar to shining a _diffused_ spotlight on the backdrop*`.`*```css hidden
    #div {
    width: 300px;
    height: 300px;
    background: url('https://mdn.mozillademos.org/files/8543/br.png'),
    url('https://mdn.mozillademos.org/files/8545/tr.png');
    background-blend-mode: soft-light;
    }
    ```{{ EmbedLiveSample('soft-light', "300", "300") }}

    ```
- `difference`
  - : The final color is the result of subtracting the darker of the two colors from the lighter one.
    A black layer has no effect, while a white layer inverts the other layer's color.```css hidden
    #div {
    width: 300px;
    height: 300px;
    background: url('https://mdn.mozillademos.org/files/8543/br.png'),
    url('https://mdn.mozillademos.org/files/8545/tr.png');
    background-blend-mode: difference;
    }
    ```{{ EmbedLiveSample('difference', "300", "300") }}

    ```
- `exclusion`
  - : The final color is similar to `difference,` but with less contrast.
    As with `difference`, a black layer has no effect, while a white layer inverts the other layer's color.```css hidden
    #div {
    width: 300px;
    height: 300px;
    background: url('https://mdn.mozillademos.org/files/8543/br.png'),
    url('https://mdn.mozillademos.org/files/8545/tr.png');
    background-blend-mode: exclusion;
    }
    ```{{ EmbedLiveSample('exclusion', "300", "300") }}

    ```
- `hue`
  - : The final color has the _hue_ of the top color, while using the _saturation_ and _luminosity_ of the bottom color.```css hidden
    #div {
    width: 300px;
    height: 300px;
    background: url('https://mdn.mozillademos.org/files/8543/br.png'),
    url('https://mdn.mozillademos.org/files/8545/tr.png');
    background-blend-mode: hue;
    }
    ```{{ EmbedLiveSample('hue', "300", "300") }}

    ```
- `saturation`
  - : The final color has the _saturation_ of the top color, while using the _hue_ and _luminosity_ of the bottom color.
    A pure gray backdrop, having no saturation, will have no effect.```css hidden
    #div {
    width: 300px;
    height: 300px;
    background: url('https://mdn.mozillademos.org/files/8543/br.png'),
    url('https://mdn.mozillademos.org/files/8545/tr.png');
    background-blend-mode: saturation;
    }
    ```{{ EmbedLiveSample('saturation', "300", "300") }}

    ```
- `color`
  - : The final color has the\_ _hue** and **saturation_ _of the top color, while using the \_luminosity_ of the bottom color.
    The effect preserves gray levels and can be used to colorize the foreground.```css hidden
    #div {
    width: 300px;
    height: 300px;
    background: url('https://mdn.mozillademos.org/files/8543/br.png'),
    url('https://mdn.mozillademos.org/files/8545/tr.png');
    background-blend-mode: color;
    }
    ```{{ EmbedLiveSample('color', "300", "300") }}

    ```
- `luminosity`
  - : The final color has the _luminosity_ of the top color, while using the _hue_ and _saturation_ of the bottom color.
    This blend mode is equivalent to color, but with the layers swapped.```css hidden
    #div {
    width: 300px;
    height: 300px;
    background: url('https://mdn.mozillademos.org/files/8543/br.png'),
    url('https://mdn.mozillademos.org/files/8545/tr.png');
    background-blend-mode: luminosity;
    }
    ```{{ EmbedLiveSample('luminosity', "300", "300") }}

    ```

## Интерполяция режимов наложения

Changes between blends mode are not interpolated. Any change occurs abruptly.

## Спецификации

| Спецификация                                                                                 | Статус                               | Комментарий                |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------------- |
| {{ SpecName('Compositing', '#ltblendmodegt', '&lt;blend-mode&gt;') }} | {{ Spec2('Compositing') }} | Первоначальное определение |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Properties using a value of this type: {{cssxref("background-blend-mode")}} and {{cssxref("mix-blend-mode")}}
- [Blend modes](http://en.wikipedia.org/wiki/Blend_modes)
- [CSS Reference](/ru/docs/CSS/CSS_Reference "CSS Reference") index
