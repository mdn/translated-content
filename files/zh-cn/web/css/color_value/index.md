---
title: <color>
slug: Web/CSS/color_value
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) [数据类型](/zh-CN/docs/Web/CSS/CSS_Types) **`<color>`** 表示一个颜色。颜色可以包括一个 [alpha 通道](https://en.wikipedia.org/wiki/Alpha_compositing)透明度值，来表明颜色如何与背景色[混合（composite）](http://www.w3.org/TR/2003/REC-SVG11-20030114/masking.html#SimpleAlphaBlending)。

> **备注：** 尽管 CSS 颜色值被精确定义，但在不同的输出设备上仍然有可能表现不一致（甚至区别很大）。这是因为大多数设备不是经校准的，而且有些浏览器不支持输出设备的[色彩配置（color profile）](http://en.wikipedia.org/wiki/ICC_profile)。

## 语法

```css
/* 命名的颜色 */
rebeccapurple
aliceblue

/* RGB 十六进制 */
#f09
#ff0099

/* RGB（红、绿、蓝） */
rgb(255 0 153)
rgb(255 0 153 / 80%)

/* HSL（色相、饱和度、明度） */
hsl(150 30% 60%)
hsl(150 30% 60% / 0.8)

/* HWB（色相、白度、黑度）*/
hwb(12 50% 0%)
hwb(194 0% 0% / 0.5)

/* LAB（亮度、A 轴、B 轴） */
lab(50% 40 59.5)
lab(50% 40 59.5 / 0.5)

/* LCH（亮度、色度、色相） */
lch(52.2% 72.2 50)
lch(52.2% 72.2 50 / 0.5)

/* Oklab（亮度、A 轴、B 轴） */
oklab(59% 0.1 0.1)
oklab(59% 0.1 0.1 / 0.5)

/* Oklch（亮度、色度、色相） */
oklch(60% 0.15 50)
oklch(60% 0.15 50 / 0.5)
```

一个`<color>`可以以如下方式定义：

- 通过关键字：{{CSSXref("&lt;named-color&gt;")}} （例如 `blue` 和 `pink`）、{{CSSXref("&lt;system-color&gt;")}} 和 [`currentcolor`](#currentcolor_关键字).
- 通过十六进制标记：{{CSSXref("&lt;hex-color&gt;")}}（例如 `#ff0000`）。
- 通过使用函数标记的颜色空间的参数：
  - [sRGB](https://en.wikipedia.org/wiki/SRGB) 颜色空间：{{CSSXref("color_value/hsl", "hsl()")}}、{{CSSXref("color_value/hwb", "hwb()")}}、{{CSSXref("color_value/rgb", "rgb()")}}；
  - [CIELAB](https://en.wikipedia.org/wiki/CIELAB_color_space) 颜色空间：{{CSSXref("color_value/lab", "lab()")}}、{{CSSXref("color_value/lch", "lch()")}}；
  - [Oklab](https://bottosson.github.io/posts/oklab/) 颜色空间：{{CSSXref("color_value/oklab", "oklab()")}}、{{CSSXref("color_value/oklch", "oklch()")}}；
  - 其他颜色空间：{{CSSXref("color_value/color", "color()")}}。
- 通过混合两个颜色：{{CSSXref("color_value/color-mix", "color-mix()")}}。

### currentColor 关键字

`currentColor` 关键字代表元素的 {{ Cssxref("color") }} 属性的计算值。它允许让继承自属性或子元素的属性颜色属性以默认值不再继承。

如果 `currentcolor` 用于 `color` 属性的值，那么会给元素继承 `color` 属性的值。

```html
<div style="color: blue; border: 1px dashed currentcolor;">
  这个文本的颜色是蓝色。
  <div style="background: currentcolor; height:9px;"></div>
  这个块的边框也是蓝色。
</div>
```

{{EmbedLiveSample("currentcolor_关键字", "100%", 80)}}

### 缺失颜色成分

每个 CSS 颜色函数的成分，除了使用旧版的逗号分隔语法的，都可以指定关键字 `none` 表示一个缺失的成分。

清晰地指定缺失的成分可用于 [颜色插值]（#带有缺失成分时的插值），可用于需要插值一些颜色成分但不插值其他颜色成分时。对于所有其他的目的，缺失的成分会相当于相应单位的零值：`0`、`0%` 或 `0deg`。例如，下面的颜色在不插值时是等价的：

```css
/* 这两个是等价的 */
color: oklab(50% none -0.25);
color: oklab(50% 0 -0.25);

/* 这两个是等价的 */
background-color: hsl(none 100% 50%);
background-color: hsl(0deg 100% 50%);
```

## 插值

在动画和[渐变](/zh-CN/docs/Web/SVG/Tutorial/Gradients)中， `<color>` 值会在每个红绿蓝成分中插值。每一个成分都会插值为浮点实数。注意颜色的插值发生在 [alpha-premultiplied sRGBA color space](https://www.gimp.org/docs/plug-in/appendix-alpha.html) 中，以避免出现未预料的灰色。在动画中，插值速度由[时间函数](/zh-CN/docs/)决定。

颜色插值会发生在[渐变](/zh-CN/docs/Web/CSS/gradient)、[过渡](/zh-CN/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) 和 [动画](/zh-CN/docs/Web/CSS/CSS_animations/Using_CSS_animations) 中。

插值 `<color>` 值时，首先会转换成指定的颜色空间，然后颜色成分的[计算值](/zh-CN/docs/Web/CSS/computed_value)线性插值，插值速度由过渡和动画中的[缓动函数](/zh-CN/docs/Web/CSS/easing-function)决定。插值颜色空间默认为 Oklab，但是可以在一些与颜色相关的函数标记中通过 {{CSSXref("&lt;color-interpolation-method&gt;")}} 覆盖。

### 带有缺失成分时的插值

#### 在同一空间内插值颜色

对完全在插值颜色空间中的颜色进行插值时，一个颜色中缺失的成分将替换为另一种颜色中同一成分的现有值。例如，以下两个表达式是等效的：

```css
color-mix(in oklch, oklch(none 0.2 10), oklch(60% none 30))
color-mix(in oklch, oklch(60% 0.2 10), oklch(60% 0.2 30))
```

> **备注：** 如果两个颜色都缺失这个成分，那么这个成分在插值后也是缺失的。

#### 在不同空间内插值：相似成分

如果任何要插值的颜色不在插值颜色空间中，则其缺失的成分将根据同一类的**相似成分**转换为转换后的颜色，如下表所述：

| 类似 | 相似成分 |
| ---- | -------- |
| 红色 | `R`, `X` |
| 绿色 | `G`, `Y` |
| 蓝色 | `B`, `Z` |
| 明度 | `L`      |
| 色度 | `C`, `S` |
| 色相 | `H`      |
| a    | `a`      |
| b    | `b`      |

例如：

- `color(xyz 0.2 0.1 0.6)` 中的 `X`（`0.2`）相似于 `rgb(50% 70% 30%)` 中的 `R`（`50%`）。
- `hsl(0deg 100% 80%)` 中的 `H`（`0deg`）相似于 `oklch(80% 0.1 140)` 中的 `H`（`140`）。

使用Oklch作为插值颜色空间并以下面两种颜色为例：

```css
lch(80% 30 none)
color(display-p3 0.7 0.5 none)
```

预处理过程为：

1. 将两种颜色中缺失的成分替换为零值：

   ```css
   lch(80% 30 0)
   color(display-p3 0.7 0.5 0)
   ```

2. 将两种颜色转换为插值颜色空间：

   ```css
   oklch(83.915% 0.0902 0.28)
   oklch(63.612% 0.1522 78.748)
   ```

3. 如果转换后颜色的任何成分与相应原始颜色中的缺失成分相似，则将其重置为缺失的成分：

   ```css
   oklch(83.915% 0.0902 none)
   oklch(63.612% 0.1522 78.748)
   ```

4. 将任何缺失的成分替换为另一转换后颜色中的相同成分：

   ```css
   oklch(83.915% 0.0902 78.748)
   oklch(63.612% 0.1522 78.748)
   ```

## 无障碍考虑

一些人分辨颜色可能会存在困难。[WCAG 2.0](https://www.w3.org/TR/WCAG/#visual-audio-contrast) 强烈建议不要将颜色作为传递特定消息、活动或结果的唯一方式。参见 [颜色和颜色对比度](/zh-CN/docs/Learn/Accessibility/CSS_and_JavaScript#Color_and_color_contrast) 以了解更多信息。

<!--

### RGB 颜色

颜色可以使用红 - 绿 - 蓝（red-green-blue (RGB)）模式的两种方式被定义：

#### 语法

RGB 颜色可以通过以`#`为前缀的十六进制字符和函数（`rgb()`、`rgba()`）标记表示。

> **备注：** 在 CSS 颜色标准 4 中，rgba() 是 rgb() 的别称。在实行第 4 级标准的浏览器中，它们接受相同的参数，作用效果也相同。

- 十六进制符号：`#RRGGBB[AA]`
  - : `R`（红）、`G`（绿）、`B` （蓝）和`A` （alpha）是十六进制字符（0–9、A–F）。`A`是可选的。比如，`#ff0000`等价于`#ff0000ff`。
- 十六进制符号：`#RGB[A]`
  - : `R`（红）、`G`（绿）、`B` （蓝）和`A` （alpha）是十六进制字符（0–9、A–F）。`A`是可选的。三位数符号（`#RGB`）是六位数形式（`#RRGGBB`）的减缩版。比如，`#f09`和`#ff0099`表示同一颜色。类似地，四位数符号（`#RGBA`）是八位数形式（`#RRGGBBAA`）的减缩版。比如，`#0f38`和`#00ff3388`表示相同颜色。
- 函数符： `rgb[a](R, G, B[, A])`
  - : `R`（红）、`G`（绿）、`B` （蓝）可以是{{cssxref("&lt;number&gt;")}}（数字），或者{{cssxref("&lt;percentage&gt;")}}（百分比），255 相当于 100%。`A`（alpha）可以是`0`到`1`之间的数字，或者百分比，数字`1`相当于`100%`（完全不透明）。
- 函数符：`rgb[a](R G B[ / A])`
  - : CSS 颜色级别 4 支持用空格分开的值。

### HSL 颜色

颜色也可以使用 `hsl()` 函数符被定义为色相 - 饱和度 - 亮度（Hue-saturation-lightness）模式。HSL 相比 RGB 的优点是更加直观：你可以估算你想要的颜色，然后微调。它也更易于创建相称的颜色集合。（通过保持相同的色相并改变亮度/暗度和饱和度）。

Many designers find HSL more intuitive than RGB, since it allows hue, saturation, and lightness to each be adjusted independently. HSL can also make it easier to create a set of matching colors (such as when you want multiple shades of a single hue).

#### 语法

HSL colors are expressed through the functional `hsl()` and `hsla()` notations.

> **备注：** As of CSS Colors Level 4, `hsla()` is an alias for `hsl()`. In browsers that implement the Level 4 standard, they accept the same parameters and behave the same way.

- Functional notation: `hsl[a](H, S, L[, A])`
  - : `H` (hue) is an {{cssxref("&lt;angle&gt;")}} of the color circle given in `deg`s, `rad`s, `grad`s, or `turn`s in [CSS Color Module Level 4](https://drafts.csswg.org/css-color/#the-hsl-notation). When written as a unitless {{cssxref("&lt;number&gt;")}}, it is interpreted as degrees, as specified in [CSS Color Module Level 3](https://drafts.csswg.org/css-color-3/#hsl-color). By definition, red=0deg=360deg, with the other colors spread around the circle, so green=120deg, blue=240deg, etc. As an `<angle>`, it implicitly wraps around such that -120deg=240deg, 480deg=120deg, -1turn=1turn, etc.
    `S` (saturation) and `L` (lightness) are percentages. `100%` **saturation** is completely saturated, while `0%` is completely unsaturated (gray). `100%` **lightness** is white, `0%` lightness is black, and `50%` lightness is “normal.”
    `A` (alpha) can be a {{cssxref("&lt;number&gt;")}} between `0` and `1`, or a {{cssxref("&lt;percentage&gt;")}}, where the number `1` corresponds to `100%` (full opacity).
- Functional notation: `hsl[a](H S L[ / A])`
  - : CSS Colors Level 4 adds support for space-separated values in the functional notation.

### 系统颜色

In _forced colors mode_ (detectable with the [forced-colors](/zh-CN/docs/Web/CSS/@media/forced-colors) media query), most colors are restricted into a user- and browser-defined palette. These system colors are exposed by the following keywords, which can be used to ensure that the rest of the page integrates well with the restricted palette. These values may also be used in other contexts, but are not widely supported by browsers.

The keywords in the following list are defined by the CSS Color Module Level 4 specification.

> **备注：** Note that these keywords are _case insensitive_, but are listed here with mixed case for readability.

- ActiveText
  - : Text of active links
- ButtonFace
  - : Background of push buttons
- ButtonText
  - : Text of push buttons
- Canvas
  - : Background of application content or documents
- CanvasText
  - : Text in application content or documents
- Field
  - : Background of input fields
- FieldText
  - : Text in input fields
- GrayText
  - : Text that is disabled
- Highlight
  - : Background of items that are selected in a control
- HighlightText
  - : Text of items that are selected in a control
- LinkText
  - : Text of non-active, non-visited links
- VisitedText
  - : Text of visited links

#### Deprecated system color keywords

The following keywords were defined in earlier versions of the CSS Color Module. They are now deprecated. {{deprecated_inline}} for use on public web pages.

- ActiveBorder
  - : Active window border.
- ActiveCaption
  - : Active window caption. Should be used with `CaptionText` as foreground color.
- AppWorkspace
  - : Background color of multiple document interface.
- Background
  - : Desktop background.
- ButtonHighlight
  - : The color of the border facing the light source for 3-D elements that appear 3-D due to that layer of surrounding border.
- ButtonShadow
  - : The color of the border away from the light source for 3-D elements that appear 3-D due to that layer of surrounding border.
- CaptionText
  - : Text in caption, size box, and scrollbar arrow box. Should be used with the `ActiveCaption` background color.
- InactiveBorder
  - : Inactive window border.
- InactiveCaption
  - : Inactive window caption. Should be used with the `InactiveCaptionText` foreground color.
- InactiveCaptionText
  - : Color of text in an inactive caption. Should be used with the `InactiveCaption` background color.
- InfoBackground
  - : Background color for tooltip controls. Should be used with the `InfoText` foreground color.
- InfoText
  - : Text color for tooltip controls. Should be used with the `InfoBackground` background color.
- Menu
  - : Menu background. Should be used with the `MenuText` or `-moz-MenuBarText` foreground color.
- MenuText
  - : Text in menus. Should be used with the `Menu` background color.
- Scrollbar
  - : Background color of scroll bars.
- ThreeDDarkShadow
  - : The color of the darker (generally outer) of the two borders away from the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.
- ThreeDFace
  - : The face background color for 3-D elements that appear 3-D due to two concentric layers of surrounding border. Should be used with the `ButtonText` foreground color.
- ThreeDHighlight
  - : The color of the lighter (generally outer) of the two borders facing the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.
- ThreeDLightShadow
  - : The color of the darker (generally inner) of the two borders facing the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.
- ThreeDShadow
  - : The color of the lighter (generally inner) of the two borders away from the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.
- Window
  - : Window background. Should be used with the `WindowText` foreground color.
- WindowFrame
  - : Window frame.
- WindowText
  - : Text in windows. Should be used with the `Window` background color.

### Mozilla System Color Extensions

- \-moz-ButtonDefault
  - : The border color that goes around buttons that represent the default action for a dialog box.
- \-moz-ButtonHoverFace
  - : The background color of a button that the mouse pointer is over (which would be `ThreeDFace` or `ButtonFace` when the mouse pointer is not over it). Should be used with the `-moz-ButtonHoverText` foreground color.
- \-moz-ButtonHoverText
  - : The text color of a button that the mouse pointer is over (which would be ButtonText when the mouse pointer is not over it). Should be used with the `-moz-ButtonHoverFace background` color.
- \-moz-CellHighlight
  - : Background color for selected item in a tree widget. Should be used with the `-moz-CellHighlightText` foreground color. See also `-moz-html-CellHighlight`.
- \-moz-CellHighlightText
  - : Text color for a selected item in a tree. Should be used with the `-moz-CellHighlight background` color. See also `-moz-html-CellHighlightText`.
- \-moz-Combobox
  - : Background color for combo-boxes. Should be used with the `-moz-ComboboxText` foreground color. In versions prior to 1.9.2, use `-moz-Field` instead.
- \-moz-ComboboxText
  - : Text color for combo-boxes. Should be used with the `-moz-Combobox` background color. In versions prior to 1.9.2, use `-moz-FieldText` instead.
- \-moz-Dialog
  - : Background color for dialog boxes. Should be used with the `-moz-DialogText` foreground color.
- \-moz-DialogText
  - : Text color for dialog boxes. Should be used with the `-moz-Dialog` background color.
- \-moz-dragtargetzone
  - : TBD
- \-moz-EvenTreeRow
  - : Background color for even-numbered rows in a tree. Should be used with the `-moz-FieldText` foreground color. In Gecko versions prior to 1.9, use `-moz-Field`. See also `-moz-OddTreeRow`.
- \-moz-html-CellHighlight
  - : Background color for highlighted item in HTML {{HTMLElement("select")}}s. Should be used with the `-moz-html-CellHighlightText` foreground color. Prior to Gecko 1.9, use `-moz-CellHighlight`.
- \-moz-html-CellHighlightText
  - : Text color for highlighted items in HTML {{HTMLElement("select")}}s. Should be used with the `-moz-html-CellHighlight` background color. Prior to Gecko 1.9, use `-moz-CellHighlightText`.
- \-moz-mac-accentdarkestshadow
  - : TBD
- \-moz-mac-accentdarkshadow
  - : TBD
- \-moz-mac-accentface
  - : TBD
- \-moz-mac-accentlightesthighlight
  - : TBD
- \-moz-mac-accentlightshadow
  - : TBD
- \-moz-mac-accentregularhighlight
  - : TBD
- \-moz-mac-accentregularshadow
  - : TBD
- \-moz-mac-chrome-active
  - : TBD
- \-moz-mac-chrome-inactive
  - : TBD
- \-moz-mac-focusring
  - : TBD
- \-moz-mac-menuselect
  - : TBD
- \-moz-mac-menushadow
  - : TBD
- \-moz-mac-menutextselect
  - : TBD
- \-moz-MenuHover
  - : Background color for hovered menu items. Often similar to `Highlight`. Should be used with the `-moz-MenuHoverText` or `-moz-MenuBarHoverText` foreground color.
- \-moz-MenuHoverText
  - : Text color for hovered menu items. Often similar to `HighlightText`. Should be used with the `-moz-MenuHover` background color.
- \-moz-MenuBarText
  - : Text color in menu bars. Often similar to `MenuText`. Should be used on top of `Menu` background.
- \-moz-MenuBarHoverText
  - : Color for hovered text in menu bars. Often similar to `-moz-MenuHoverText`. Should be used on top of `-moz-MenuHover` background.
- \-moz-nativehyperlinktext
  - : Default platform hyperlink color.
- \-moz-OddTreeRow
  - : Background color for odd-numbered rows in a tree. Should be used with the `-moz-FieldText` foreground color. In Gecko versions prior to 1.9, use `-moz-Field`. See also `-moz-EvenTreeRow`.
- \-moz-win-communicationstext
  - : Should be used for text in objects with `{{cssxref("-moz-appearance")}}: -moz-win-communications-toolbox;`.
- \-moz-win-mediatext
  - : Should be used for text in objects with `{{cssxref("-moz-appearance")}}: -moz-win-media-toolbox`.
- \-moz-win-accentcolor
  - : Used to access the Windows 10 custom accent color that you can set on the start menu, taskbar, title bars, etc.
- \-moz-win-accentcolortext
  - : Used to access the color of text placed over the Windows 10 custom accent color in the start menu, taskbar, title bars, etc.

### Mozilla Color Preference Extensions

- \-moz-activehyperlinktext
  - : User's preference for text color of active links. Should be used with the default document background color.
- \-moz-default-background-color
  - : User's preference for the document background color.
- \-moz-default-color
  - : User's preference for the text color.
- \-moz-hyperlinktext
  - : User's preference for the text color of unvisited links. Should be used with the default document background color.
- \-moz-visitedhyperlinktext
  - : User's preference for the text color of visited links. Should be used with the default document background color.

## 示例

### 颜色值检测器

在这个示例中，我们提供一个`<div>`和文本输入框。输入一个有效的颜色，则`<div>`会显示这个颜色，可以让你检测颜色值。

#### HTML

```html
<div></div>
<hr />
<label for="color">Enter a valid color value:</label>
<input type="text" id="color" />
```

#### CSS

```css
div {
  width: 100%;
  height: 200px;
}
```

```js hidden
const inputElem = document.querySelector("input");
const divElem = document.querySelector("div");

function validTextColor(stringToTest) {
  if (stringToTest === "") {
    return false;
  }
  if (stringToTest === "inherit") {
    return false;
  }
  if (stringToTest === "transparent") {
    return false;
  }

  const image = document.createElement("img");
  image.style.color = "rgb(0, 0, 0)";
  image.style.color = stringToTest;
  if (image.style.color !== "rgb(0, 0, 0)") {
    return true;
  }
  image.style.color = "rgb(255, 255, 255)";
  image.style.color = stringToTest;
  return image.style.color !== "rgb(255, 255, 255)";
}

inputElem.addEventListener("change", () => {
  if (validTextColor(inputElem.value)) {
    divElem.style.backgroundColor = inputElem.value;
    divElem.textContent = "";
  } else {
    divElem.style.backgroundColor = "white";
    divElem.textContent = "Invalid color value";
  }
});
```

#### 结果

{{EmbedLiveSample('颜色值检测器','100%', 300)}}

### RGB 的多种语法

这个例子显示了一个颜色可以以多种 RGB 颜色语法表示。

```css
/* 这些语法都表示同一个颜色：a fully opaque hot pink */

/* 十六进制语法 */
#f09
#F09
#ff0099
#FF0099

/* 函数语法 */
rgb(255,0,153)
rgb(255, 0, 153)
rgb(255, 0, 153.0)
rgb(100%,0%,60%)
rgb(100%, 0%, 60%)
rgb(100%, 0, 60%) /* 错误：不要混用数字和百分比 */
rgb(255 0 153)

/* 带有 alpha 值的十六进制语法 */
#f09f
#F09F
#ff0099ff
#FF0099FF

/* 带有 alpha 值的函数语法 */
rgb(255, 0, 153, 1)
rgb(255, 0, 153, 100%)

/* 空格语法 */
rgb(255 0 153 / 1)
rgb(255 0 153 / 100%)

/* 带有浮点值的函数语法 */
rgb(255, 0, 153.6, 1)
rgb(1e2, .5e1, .5e0, +.25e2%)
```

### RGB 的多种透明度

```css
/* 十六进制语法 */
#3a30                    /*   完全透明的绿色 */
#3A3F                    /* 完全不透明的绿色 */
#33aa3300                /*   完全透明的绿色 */
#33AA3380                /*  50% 不透明的绿色 */

/* 函数语法 */
rgba(51, 170, 51, .1)    /*  10% 不透明的绿色 */
rgba(51, 170, 51, .4)    /*  40% 不透明的绿色 */
rgba(51, 170, 51, .7)    /*  70% 不透明的绿色 */
rgba(51, 170, 51,  1)    /* 完全不透明的绿色 */

/* 空格语法 */
rgba(51 170 51 / 0.4)    /*  40% 不透明的绿色 */
rgba(51 170 51 / 40%)    /*  40% 不透明的绿色 */

/* 带有浮点值的函数语法 */
rgba(255, 0, 153.6, 1)
rgba(1e2, .5e1, .5e0, +.25e2%)
```

### HSL 的多种语法

```css
/* 以下示例都表示同一颜色：a lavender */
hsl(270,60%,70%)
hsl(270, 60%, 70%)
hsl(270 60% 70%)
hsl(270deg, 60%, 70%)
hsl(4.71239rad, 60%, 70%)
hsl(.75turn, 60%, 70%)

/* 以下示例都表示同一颜色：a lavender that is 15% opaque. */
hsl(270, 60%, 50%, .15)
hsl(270, 60%, 50%, 15%)
hsl(270 60% 50% / .15)
hsl(270 60% 50% / 15%)
```

### 完全饱和颜色

<table>
  <thead>
    <tr>
      <th scope="col">符号</th>
      <th scope="col">描述</th>
      <th scope="col">展示</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>hsl(0, 100%, 50%)</code></td>
      <td>红色</td>
      <td style="background: hsl(0, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(30, 100%, 50%)</code></td>
      <td>橙色</td>
      <td style="background: hsl(30, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(60, 100%, 50%)</code></td>
      <td>黄色</td>
      <td style="background: hsl(60, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(90, 100%, 50%)</code></td>
      <td>黄绿色</td>
      <td style="background: hsl(90, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 100%, 50%)</code></td>
      <td>绿色</td>
      <td style="background: hsl(120, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(150, 100%, 50%)</code></td>
      <td>蓝绿色（青绿色）</td>
      <td style="background: hsl(150, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(180, 100%, 50%)</code></td>
      <td>青色</td>
      <td style="background: hsl(180, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(210, 100%, 50%)</code></td>
      <td>天蓝色</td>
      <td style="background: hsl(210, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(240, 100%, 50%)</code></td>
      <td>蓝色</td>
      <td style="background: hsl(240, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(270, 100%, 50%)</code></td>
      <td>紫色</td>
      <td style="background: hsl(270, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(300, 100%, 50%)</code></td>
      <td>品红色（洋红色）</td>
      <td style="background: hsl(300, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(330, 100%, 50%)</code></td>
      <td>粉红色</td>
      <td style="background: hsl(330, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(360, 100%, 50%)</code></td>
      <td>红色</td>
      <td style="background: hsl(360, 100%, 50%)"></td>
    </tr>
  </tbody>
</table>

### 不同明暗度的绿色

<table>
  <thead>
    <tr>
      <th scope="col">符号</th>
      <th scope="col">描述</th>
      <th scope="col">展示</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>hsl(120, 100%, 0%)</code></td>
      <td>黑色</td>
      <td style="background: hsl(120, 100%, 0%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 100%, 20%)</code></td>
      <td></td>
      <td style="background: hsl(120, 100%, 20%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 100%, 40%)</code></td>
      <td></td>
      <td style="background: hsl(120, 100%, 40%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 100%, 60%)</code></td>
      <td></td>
      <td style="background: hsl(120, 100%, 60%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 100%, 80%)</code></td>
      <td></td>
      <td style="background: hsl(120, 100%, 80%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 100%, 100%)</code></td>
      <td>白色</td>
      <td style="background: hsl(120, 100%, 100%)"></td>
    </tr>
  </tbody>
</table>

### 饱和的和不饱和的绿色

<table>
  <thead>
    <tr>
      <th scope="col">符号</th>
      <th scope="col">描述</th>
      <th scope="col">展示</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>hsl(120, 100%, 50%)</code></td>
      <td>绿色</td>
      <td style="background: hsl(120, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 80%, 50%)</code></td>
      <td></td>
      <td style="background: hsl(120, 80%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 60%, 50%)</code></td>
      <td></td>
      <td style="background: hsl(120, 60%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 40%, 50%)</code></td>
      <td></td>
      <td style="background: hsl(120, 40%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 20%, 50%)</code></td>
      <td></td>
      <td style="background: hsl(120, 20%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 0%, 50%)</code></td>
      <td>灰色</td>
      <td style="background: hsl(120, 0%, 50%)"></td>
    </tr>
  </tbody>
</table>

### HSL 不同的透明度

```css
hsla(240, 100%, 50%, .05)     /*   5% opaque blue */
hsla(240, 100%, 50%, .4)      /*  40% opaque blue */
hsla(240, 100%, 50%, .7)      /*  70% opaque blue */
hsla(240, 100%, 50%, 1)       /* full opaque blue */

/* Whitespace syntax */
hsla(240 100% 50% / .05)      /*   5% opaque blue */

/* Percentage value for alpha */
hsla(240 100% 50% / 5%)       /*   5% opaque blue */
``` -->

## 形式语法

{{csssyntax}}

## 示例

### 颜色值检测器

在这个例子中，我们提供了一个 `<div>` 和一个文本输入框。往文本框内输入有效的颜色会使 `<div>` 接受这个颜色，从而可能测试我们的颜色值 。

#### HTML

```html
<div></div>
<hr />
<label for="color">输入有效的颜色值：</label>
<input type="text" id="color" />
```

```css hidden
div {
  height: 200px;
  width: 200px;
}
```

```js hidden
const inputElem = document.querySelector("input");
const divElem = document.querySelector("div");

function validTextColor(stringToTest) {
  if (stringToTest === "inherit" || stringToTest === "transparent") {
    return false;
  }

  const div = document.createElement("div");
  div.style.color = stringToTest;
  return !!div.style.color;
}

inputElem.addEventListener("input", () => {
  if (validTextColor(inputElem.value)) {
    divElem.style.backgroundColor = inputElem.value;
    divElem.textContent = "";
  } else {
    divElem.removeAttribute("style");
    divElem.textContent = "无效的颜色值";
  }
});
```

#### 结果

{{EmbedLiveSample("颜色值检测器", "100%", 300)}}

### 完全饱和的 sRGB 颜色

此示例显示 sRGB 颜色空间中完全饱和的 sRGB 颜色。

#### HTML

```html
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
```

#### CSS

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
}
div {
  height: 80px;
  margin: 10px;
  width: 80px;
}
```

```css
div:nth-child(1) {
  background-color: hsl(0 100% 50%);
}
div:nth-child(2) {
  background-color: hsl(30 100% 50%);
}
div:nth-child(3) {
  background-color: hsl(60 100% 50%);
}
div:nth-child(4) {
  background-color: hsl(90 100% 50%);
}
div:nth-child(5) {
  background-color: hsl(120 100% 50%);
}
div:nth-child(6) {
  background-color: hsl(150 100% 50%);
}
div:nth-child(7) {
  background-color: hsl(180 100% 50%);
}
div:nth-child(8) {
  background-color: hsl(210 100% 50%);
}
div:nth-child(9) {
  background-color: hsl(240 100% 50%);
}
div:nth-child(10) {
  background-color: hsl(270 100% 50%);
}
div:nth-child(11) {
  background-color: hsl(300 100% 50%);
}
div:nth-child(12) {
  background-color: hsl(330 100% 50%);
}
```

#### 结果

{{EmbedLiveSample("完全饱和的 srgb 颜色", "100%", 200)}}

### 不同深浅的红色

此示例显示 sRGB 颜色空间中不同深浅的红色。

#### HTML

```html
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
```

#### CSS

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
}
div {
  box-sizing: border-box;
  height: 80px;
  margin: 10px;
  width: 80px;
}
```

```css
div:nth-child(1) {
  background-color: hsl(0 100% 0%);
}
div:nth-child(2) {
  background-color: hsl(0 100% 20%);
}
div:nth-child(3) {
  background-color: hsl(0 100% 40%);
}
div:nth-child(4) {
  background-color: hsl(0 100% 60%);
}
div:nth-child(5) {
  background-color: hsl(0 100% 80%);
}
div:nth-child(6) {
  background-color: hsl(0 100% 100%);
  border: solid;
}
```

#### 结果

{{EmbedLiveSample("不同深浅的红色", "100%", 150)}}

### 不同饱和度的红色

此示例显示 sRGB 颜色空间中不同饱和度的红色。

#### HTML

```html
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
```

#### CSS

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
}
div {
  height: 80px;
  margin: 10px;
  width: 80px;
}
```

```css
div:nth-child(1) {
  background-color: hsl(0 0% 50%);
}
div:nth-child(2) {
  background-color: hsl(0 20% 50%);
}
div:nth-child(3) {
  background-color: hsl(0 40% 50%);
}
div:nth-child(4) {
  background-color: hsl(0 60% 50%);
}
div:nth-child(5) {
  background-color: hsl(0 80% 50%);
}
div:nth-child(6) {
  background-color: hsl(0 100% 50%);
}
```

#### 结果

{{EmbedLiveSample("不同饱和度的红色", "100%", 150)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSXref("opacity")}}：在元素级别上设备透明度的属性
- {{CSSXref("&lt;hue&gt;")}}：表示一个颜色的色相角度的数据类型
- {{CSSXref("color")}}、{{CSSXref("background-color")}}、{{CSSXref("border-color")}}、{{CSSXref("box-shadow")}}、{{CSSXref("outline-color")}}、{{CSSXref("text-shadow")}}：使用 `<color>` 的常见属性
- [使用 CSS 给元素应用颜色](/zh-CN/docs/Web/CSS/CSS_colors/Applying_color)
- MDN blog（2023）中的[新函数、渐变、CSS 颜色中的色相（级别 4）](/zh-CN/blog/css-color-module-level-4/)
