---
title: mask-repeat
slug: Web/CSS/mask-repeat
---

{{CSSRef}}{{SeeCompatTable}}

[CSS](/zh-CN/docs/Web/CSS) 的 **`mask-repeat`** 属性定义了遮罩图片是否重复显示多个副本，以及如何重复。一个遮罩图片可以水平重复、垂直重复或双向重复，也可以不重复。

```css
/* One-value syntax */
mask-repeat: repeat-x;
mask-repeat: repeat-y;
mask-repeat: repeat;
mask-repeat: space;
mask-repeat: round;
mask-repeat: no-repeat;

/* Two-value syntax: horizontal | vertical */
mask-repeat: repeat space;
mask-repeat: repeat repeat;
mask-repeat: round space;
mask-repeat: no-repeat round;

/* Multiple values */
mask-repeat:
  space round,
  no-repeat;
mask-repeat:
  round repeat,
  space,
  repeat-x;

/* Global values */
mask-repeat: inherit;
mask-repeat: initial;
mask-repeat: unset;
```

默认情况下，重复的图片会被剪切为图片的大小，但他们可以自行缩放适应（使用 `round`），或者从一端到另一端均匀分布（使用 `space`）。

{{cssinfo}}

## 语法

One or more `<repeat-style>` values, separated by commas.

### 取值

- `<repeat-style>`

  - : 单值语法可将两个值简写为一个：

    | **单值**    | **与之等效的双值**    |
    | ----------- | --------------------- |
    | `repeat-x`  | `repeat no-repeat`    |
    | `repeat-y`  | `no-repeat repeat`    |
    | `repeat`    | `repeat repeat`       |
    | `space`     | `space space`         |
    | `round`     | `round round`         |
    | `no-repeat` | `no-repeat no-repeat` |

    在双值语法中，第一个值代表了水平方向的行为，第二个值代表了垂直方向的行为。下面是每个选项的用法解释：

    | `repeat`    | The image is repeated as much as needed to cover the whole mask painting area. The last image will be clipped if it doesn't fit.                                                                                                                                                                                                                                                                                              |
    | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `space`     | The image is repeated as much as possible without clipping. The first and last images are pinned to either side of the element, and whitespace is distributed evenly between the images. The {{cssxref("mask-position")}} property is ignored unless only one image can be displayed without clipping. The only case where clipping happens using `space` is when there isn't enough room to display one image.               |
    | `round`     | As the allowed space increases in size, the repeated images will stretch (leaving no gaps) until there is room for another one to be added. When the next image is added, all of the current ones compress to allow room. Example: An image with an original width of 260px, repeated three times, might stretch until each repetition is 300px wide, and then another image will be added. They will then compress to 225px. |
    | `no-repeat` | The image is not repeated (and hence the mask painting area will not necessarily be entirely covered). The position of the non-repeated mask image is defined by the {{cssxref("mask-position")}} CSS property.                                                                                                                                                                                                               |

### 形式语法

{{csssyntax}}

## 示例

### 单值

#### CSS

```css
#masked {
  width: 250px;
  height: 250px;
  background: blue linear-gradient(red, blue);
  mask-image: url(star.svg);
  mask-repeat: repeat; /* 可在实时示例 live sample 中修改 */
  margin-bottom: 10px;
}
```

```html hidden
<div id="masked"></div>
<select id="repetition">
  <option value="repeat-x">repeat-x</option>
  <option value="repeat-y">repeat-y</option>
  <option value="repeat" selected>repeat</option>
  <option value="space">space</option>
  <option value="round">round</option>
  <option value="no-repeat">no-repeat</option>
</select>
```

```js hidden
var repetition = document.getElementById("repetition");
repetition.addEventListener("change", function (evt) {
  document.getElementById("masked").style.maskRepeat = evt.target.value;
});
```

{{EmbedLiveSample("单值", "290px", "290px")}}

### 使用多个遮罩图片

You can specify a different `<repeat-style>` for each mask image, separated by commas:

```css
.examplethree {
  mask-image: url("mask1.png"), url("mask2.png");
  mask-repeat: repeat-x, repeat-y;
}
```

Each image is matched with the corresponding repeat style, from first specified to last.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
