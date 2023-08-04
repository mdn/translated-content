---
title: <color>
slug: Web/CSS/color_value
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) [数据类型](/zh-CN/docs/Web/CSS/CSS_Types) `<color>` 表示一种[标准 RGB 色彩空间（sRGB color space）](http://en.wikipedia.org/wiki/SRGB)的颜色。一个颜色可以包括一个[alpha 通道](https://en.wikipedia.org/wiki/Alpha_compositing)透明度值，来表明颜色如何与它的背景色[混合（composite）](http://www.w3.org/TR/2003/REC-SVG11-20030114/masking.html#SimpleAlphaBlending)。

一个`<color>`可以以如下方式定义：

- 使用一个关键字（比如`blue`或`transparent`）
- 使用[RGB 立体坐标（RGB cubic-coordinate）](http://en.wikipedia.org/wiki/RGB_color_model#Geometric_representation)系统（以“#”加十六进制或者 `rgb()` 和 `rgba()` 函数表达式的形式）
- 使用[HSL 圆柱坐标（HSL cylindrical-coordinate）](http://en.wikipedia.org/wiki/HSL_and_HSV)系统（以 `hsl()` 和 `hsla()` 函数表达式的形式）

> **备注：** 本文章详细描述了`<color>`数据类型。如要了解更多关于在 HTML 中使用颜色的信息，请参阅[使用 CSS 为 HTML 元素应用颜色](/zh-CN/docs/Web/HTML/Applying_color)。

## 语法

`<color>`可以以以下方式指定。

> **备注：** 尽管 CSS 颜色值被精确定义，但在不同的输出设备上仍然有可能显示不一。它们大多数是不可被校准的，而且有些浏览器不支持输出设备的[色彩配置（color profile）](http://en.wikipedia.org/wiki/ICC_profile)。

### 颜色关键字

颜色关键字（color keywords）是不区分大小写的标识符，它表示一个具体的颜色，例如 `red`、`blue`、`brown`或者`lightseagreen` 。尽管名称或多或少描述了分别的颜色，但必定是人工的，其后没有严格的标准。

在使用关键字时有几个需要留意的注意事项：

- 除了通常的 16 个 HTML 基本颜色，其他的不能被用于 HTML。HTML 将通过一个特定的计算程序转换这些未知的值，这将导致成为完全不同的颜色。这些关键字应只被用于 SVG 和 CSS。
- 未知的关键字会让 CSS 属性无效。无效的属性将被忽略，该颜色将没有作用。这是一个和 HTML 相比不同的行为。
- 未使用关键字定义的颜色在 CSS 中有任意的透明度，它们是单实色。
- 一些关键字表示同样的颜色：

  - `darkgray` / `darkgrey`
  - `darkslategray` / `darkslategrey`
  - `dimgray` / `dimgrey`
  - `lightgray` / `lightgrey`
  - `lightslategray` / `lightslategrey`
  - `gray` / `grey`
  - `slategray` / `slategrey`

- 虽然关键字的名称取自常见的 X11 颜色名，然而由于生产商为具体的硬件所做的定制，颜色可能与 X11 系统上相应的颜色有所偏差。

> **备注：** 可接受的关键字列表在 CSS 的演变过程中发生了改变：
>
> - CSS 标准 1 只接受 16 个基本颜色，称为*VGA 颜色*，因为它们来源于 [VGA](http://en.wikipedia.org/wiki/VGA) 显卡所显示的颜色集合而被称为 _VGA colors_（视频图形阵列色彩）。
> - CSS 标准 2 增加了 `orange` 关键字。
> - 从一开始，浏览器接受其他的颜色，由于一些早期浏览器是 X11 应用程序，这些颜色大多数是 X11 命名的颜色列表，虽然有一点不同。SVG 1.0 是首个正式定义这些关键字的标准；CSS 色彩标准 3 也正式定义了这些关键字。它们经常被称作*扩张的颜色关键字*， *X11 颜色*或 _SVG 颜色_。
> - CSS 颜色标准 4 添加可`rebeccapurple`关键字来[纪念 web 先锋 Eric Meyer](https://codepen.io/trezy/post/honoring-a-great-man)。

### `transparent` 关键字

`transparent` 关键字表示一个完全透明的颜色，即该颜色看上去将是背景色。从技术上说，它是带有阿尔法通道为最小值的黑色，是 `rgba(0,0,0,0)` 的简写。

> **备注：** 为避免未预料的行为，比如{{cssxref("gradient")}}中，the current CSS spec states that `transparent` should be calculated in the [alpha-premultiplied color space](https://www.w3.org/TR/2012/CR-css3-images-20120417/#color-stop-syntax). 但是，注意旧的浏览器可能将其作为 alpha 值为 0 的黑色。

> **备注：** `transparent` 关键字在 CSS Level 2 (Revision 1) 中不是一个真实的颜色。它是一个特殊的关键字，可以代替一个普通的 `<color>` 值用于两个 CSS 属性中： {{ Cssxref("background") }} 和 {{ Cssxref("border") }}。本质上使用它可以覆盖一个继承的单色。随着经由[阿尔法通道（alpha channels）](http://en.wikipedia.org/wiki/Alpha_compositing)透明度的支持，`transparent` 在 CSS Colors Level 3 中被重新定义为一个真实的颜色，允许在任何一个需要 `<color>` 值的地方使用，像 {{ Cssxref("color") }} 属性。

### `currentColor` 关键字

`currentColor` 关键字代表原始的 {{ Cssxref("color") }} 属性的计算值。它允许让继承自属性或子元素的属性颜色属性以默认值不再继承。

它也能用于那些继承了元素的 {{ Cssxref("color") }} 属性计算值的属性，相当于在这些元素上使用 `inherit` 关键字，如果这些元素有该关键字的话。

#### currentcolor 示例

该行的颜色（一个填充颜色的 div）应用它继承自父级的 {{ Cssxref("color") }} 属性。

##### HTML

```html
<div style="color:blue; border: 1px dashed currentcolor;">
  The color of this text is blue.
  <div style="background:currentcolor; height:9px;"></div>
  This block is surrounded by a blue border.
</div>
```

##### 结果

{{EmbedLiveSample('currentcolor 示例')}}

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

## 插值

在动画和[渐变](/zh-CN/docs/Web/SVG/Tutorial/Gradients)中， `<color>` 值会在每个红绿蓝成分中插值。每一个成分都会插值为浮点实数。注意颜色的插值发生在 [alpha-premultiplied sRGBA color space](https://www.gimp.org/docs/plug-in/appendix-alpha.html) 中，以避免出现未预料的灰色。在动画中，插值速度由[时间函数](/zh-CN/docs/)决定。

## Accessibility considerations

Some people have difficulty distinguishing colors. The [WCAG 2.0](https://www.w3.org/TR/WCAG/#visual-audio-contrast) recommendation strongly advises against using color as the only means of conveying a specific message, action, or result. See [Color and color contrast](/zh-CN/docs/Learn/Accessibility/CSS_and_JavaScript#Color_and_color_contrast) for more information.

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
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- The {{ Cssxref("opacity") }} property, allowing to define the transparency of color at the element level.
- The {{ Cssxref("color") }}, {{ Cssxref("background-color") }}, {{ Cssxref("border-color") }}, {{ Cssxref("outline-color") }}, {{ Cssxref("text-shadow") }}, {{ Cssxref("box-shadow") }} properties.
- [CSS Reference](/zh-CN/docs/Web/CSS/Reference) index
