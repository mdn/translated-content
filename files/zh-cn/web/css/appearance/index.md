---
title: appearance
slug: Web/CSS/appearance
---

{{CSSRef}}

**`appearance`** CSS 属性用于控制 UI 控件的基于操作系统主题的原生外观。

{{EmbedInteractiveExample("pages/css/appearance.html")}}

在标准化之前，这个属性允许将简单的元素显示为控件，例如按钮或复选框。这被认为是一个缺陷，现在鼓励开发者仅使用标准关键字。

> **备注：** 如果你想在网站上使用此属性，应非常谨慎地进行测试。虽然它在大多数现代浏览器中得到支持，但实现方式不同。在旧的浏览器中，即使是关键字 `none` 对于不同浏览器中的所有表单元素也没有相同的效果，有些浏览器甚至不支持它。在最新的浏览器中差异较小。

## 语法

```css
/* CSS 基本用户界面模块 Level 4 支持的值 */
appearance: none;
appearance: auto;
appearance: menulist-button;
appearance: textfield;

/* "compat-auto" 值与 "auto" 值具有相同的效果。 */
appearance: button;
appearance: searchfield;
appearance: textarea;
appearance: push-button;
appearance: slider-horizontal;
appearance: checkbox;
appearance: radio;
appearance: square-button;
appearance: menulist;
appearance: listbox;
appearance: meter;
appearance: progress-bar;

/* Gecko 中可用的部分值列表 */
-moz-appearance: scrollbarbutton-up;
-moz-appearance: button-bevel;

/* WebKit/Blink（以及 Gecko 和 Edge）中可用的部分值列表 */
-webkit-appearance: media-mute-button;
-webkit-appearance: caret;

/* 全局值 */
appearance: inherit;
appearance: initial;
appearance: revert;
appearance: revert-layer;
appearance: unset;
```

### 值

#### 标准关键字

<table class="standard-table">
  <tbody>
    <tr>
      <th>值</th>
      <th>浏览器</th>
      <th>描述</th>
    </tr>
    <tr>
      <td><code>none</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td>隐藏部件的某些特性，例如 select 元素中显示的指示列表可以展开的箭头。</td>
    </tr>
    <tr>
      <td><code>auto</code></td>
      <td>Firefox Chrome Edge</td>
      <td>
        用户代理根据元素选择适当的特殊样式。对于没有特殊样式的元素，其行为类似于 <code>none</code>。
      </td>
    </tr>
    <tr>
      <td><code>menulist-button</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td><code>textfield</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="3">
        以下值被视为等同于 <code>auto</code>：
      </td>
    </tr>
    <tr>
      <td><code>button</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td>该元素曾经被绘制为一个按钮。</td>
    </tr>
    <tr>
      <td><code>checkbox</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td>
        该元素曾经被绘制为一个复选框，包括实际的“复选框”部分。
      </td>
    </tr>
    <tr>
      <td><code>listbox</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td><code>menulist</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td><code>meter</code></td>
      <td>Chrome Safari Firefox</td>
      <td></td>
    </tr>
    <tr>
      <td><code>progress-bar</code></td>
      <td>Chrome Safari Firefox</td>
      <td></td>
    </tr>
    <tr>
      <td><code>push-button</code></td>
      <td>Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td><code>radio</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td>
       该元素曾经被绘制为单选按钮，包括实际的“单选按钮”部分。
      </td>
    </tr>
    <tr>
      <td><code>searchfield</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td><code>slider-horizontal</code></td>
      <td>Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td><code>square-button</code></td>
      <td>Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td><code>textarea</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td></td>
    </tr>
  </tbody>
</table>

#### 非标准关键字

以下值可能适用于历史浏览器版本，使用 **`-moz-appearance`** 或 **`-webkit-appearance`** 前缀，但不适用于标准的 **`appearance`** 属性。

| 值                                     | 浏览器                     | 描述                                                                                                       |
| -------------------------------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `attachment`                           | Safari                     |                                                                                                            |
| `borderless-attachment`                | Safari                     |                                                                                                            |
| `button-bevel`                         | Firefox Chrome Safari Edge |                                                                                                            |
| `caps-lock-indicator`                  | Safari Edge                |                                                                                                            |
| `caret`                                | Firefox Chrome Safari Edge |                                                                                                            |
| `checkbox-container`                   | Firefox                    | 该元素的外观类似于复选框的容器，可能包括在某些平台下的光照预设背景效果。通常它会包含一个标签和一个复选框。 |
| `checkbox-label`                       | Firefox                    |                                                                                                            |
| `checkmenuitem`                        | Firefox                    |                                                                                                            |
| `color-well`                           | Safari                     | `input type=color`                                                                                         |
| `continuous-capacity-level-indicator`  | Safari                     |                                                                                                            |
| `default-button`                       | Safari Edge                |                                                                                                            |
| `discrete-capacity-level-indicator`    | Safari                     |                                                                                                            |
| `inner-spin-button`                    | Firefox Chrome Safari      |                                                                                                            |
| `image-controls-button`                | Safari                     |                                                                                                            |
| `list-button`                          | Safari                     | datalist                                                                                                   |
| `listitem`                             | Firefox Chrome Safari Edge |                                                                                                            |
| `media-enter-fullscreen-button`        | Chrome Safari              |                                                                                                            |
| `media-exit-fullscreen-button`         | Chrome Safari              |                                                                                                            |
| `media-fullscreen-volume-slider`       | Safari                     |                                                                                                            |
| `media-fullscreen-volume-slider-thumb` | Safari                     |                                                                                                            |
| `media-mute-button`                    | Chrome Safari Edge         |                                                                                                            |
| `media-play-button`                    | Chrome Safari Edge         |                                                                                                            |
| `media-overlay-play-button`            | Chrome Safari              |                                                                                                            |
| `media-return-to-realtime-button`      | Safari                     |                                                                                                            |
| `media-rewind-button`                  | Safari                     |                                                                                                            |
| `media-seek-back-button`               | Safari Edge                |                                                                                                            |
| `media-seek-forward-button`            | Safari Edge                |                                                                                                            |
| `media-toggle-closed-captions-button`  | Chrome Safari              |                                                                                                            |
| `media-slider`                         | Chrome Safari Edge         |                                                                                                            |
| `media-sliderthumb`                    | Chrome Safari Edge         |                                                                                                            |
| `media-volume-slider-container`        | Chrome Safari              |                                                                                                            |
| `media-volume-slider-mute-button`      | Safari                     |                                                                                                            |
| `media-volume-slider`                  | Chrome Safari              |                                                                                                            |
| `media-volume-sliderthumb`             | Chrome Safari              |                                                                                                            |
| `media-controls-background`            | Chrome Safari              |                                                                                                            |
| `media-controls-dark-bar-background`   | Safari                     |                                                                                                            |
| `media-controls-fullscreen-background` | Chrome Safari              |                                                                                                            |
| `media-controls-light-bar-background`  | Safari                     |                                                                                                            |
| `media-current-time-display`           | Chrome Safari              |                                                                                                            |
| `media-time-remaining-display`         | Chrome Safari              |                                                                                                            |
| `menulist-text`                        | Firefox Chrome Safari Edge |                                                                                                            |
| `menulist-textfield`                   | Firefox Chrome Safari Edge | 该元素被样式化为下拉列表的文本字段。（未在 Windows 平台上实现）                                            |
| `meterbar`                             | Firefox                    | 使用 `meter` 来代替。                                                                                      |
| `number-input`                         | Firefox                    |                                                                                                            |
| `progress-bar-value`                   | Chrome Safari              |                                                                                                            |
| `progressbar`                          | Firefox                    | 该元素的样式类似于进度条。可以使用 `progress-bar` 样式来实现                                               |
| `progressbar-vertical`                 | Firefox                    |                                                                                                            |
| `range`                                | Firefox                    |                                                                                                            |
| `range-thumb`                          | Firefox                    |                                                                                                            |
| `rating-level-indicator`               | Safari                     |                                                                                                            |
| `relevancy-level-indicator`            | Safari                     |                                                                                                            |
| `scale-horizontal`                     | Firefox                    |                                                                                                            |
| `scalethumbend`                        | Firefox                    |                                                                                                            |
| `scalethumb-horizontal`                | Firefox                    |                                                                                                            |
| `scalethumbstart`                      | Firefox                    |                                                                                                            |
| `scalethumbtick`                       | Firefox                    |                                                                                                            |
| `scalethumb-vertical`                  | Firefox                    |                                                                                                            |
| `scale-vertical`                       | Firefox                    |                                                                                                            |
| `scrollbarthumb-horizontal`            | Firefox                    |                                                                                                            |
| `scrollbarthumb-vertical`              | Firefox                    |                                                                                                            |
| `scrollbartrack-horizontal`            | Firefox                    |                                                                                                            |
| `scrollbartrack-vertical`              | Firefox                    |                                                                                                            |
| `searchfield-decoration`               | Safari Edge                |                                                                                                            |
| `searchfield-results-decoration`       | Chrome Safari Edge         | 可以在 Windows 7 上的 Chrome 51 上使用。                                                                   |
| `searchfield-results-button`           | Safari Edge                |                                                                                                            |
| `searchfield-cancel-button`            | Chrome Safari Edge         |                                                                                                            |
| `snapshotted-plugin-overlay`           | Safari                     |                                                                                                            |
| `sheet`                                | 无                         |                                                                                                            |
| `slider-vertical`                      | Chrome Safari Edge         |                                                                                                            |
| `sliderthumb-horizontal`               | Chrome Safari Edge         |                                                                                                            |
| `sliderthumb-vertical`                 | Chrome Safari Edge         |                                                                                                            |
| `textfield-multiline`                  | Firefox                    | 使用 `textarea` 代替。                                                                                     |
| `-apple-pay-button`                    | Safari                     | 仅适用于 **iOS** 和 **macOS**。从 iOS 10.1 和 macOS 10.12 开始，在 Web 上可用。                            |

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 使一个元素看起来像一个下拉列表按钮

```css
.exampleone {
  -webkit-appearance: menulist-button;
  -moz-appearance: menulist-button;
  appearance: menulist-button;
}
```

### 应用自定义样式

#### HTML

```html
<select class="none">
  <option>appearance: none</option>
</select>
<select class="auto">
  <option>appearance: auto</option>
</select>
```

#### CSS

```css
.none {
  appearance: none;
}
.auto {
  appearance: auto;
}
```

#### 结果

{{EmbedLiveSample("应用自定义样式", 1050, 70)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [关于 CSS 基本用户界面模块 Level 4 的 `appearance` 的定义](https://drafts.csswg.org/css-ui/#appearance-switching)
