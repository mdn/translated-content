---
title: <system-color>
slug: Web/CSS/system-color
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) [数据类型](/zh-CN/docs/Web/CSS/CSS_Types) **`<system-color>`** 通常反映了用于网页不同部分所选的默认颜色。

然而用户代理可以提供名为*强制颜色模式*的无障碍特性，颜色在此模式中被限制于用户和用户代理所定义的色组中，在特定属性中改写作者所选的颜色。在强制颜色模式中，`<system-color>` 暴露了所选颜色，页面的其余部分可由此融入其中。强制颜色模式的一个例子为 [Windows 上的高对比度模式](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)。

在强制颜色模式中，作者应为所有颜色*未*被改写的属性使用 `<system-color>` 类型中的颜色。由此确保页面在所有属性上一致使用相同的色组。

作者可使用媒体特性 {{CSSXref("@media/forced-colors", "forced-colors")}} 检测强制颜色模式。

在可使用 {{CSSXref("&lt;color&gt;")}} 的任意位置均可使用 `<system-color>` 值。

## 语法

注意这些关键字虽然*不区分大小写*，但此处为了可读性以混合的大小写列出。

- `AccentColor`
  - : 突显的用户界面控件的背景颜色
- `AccentColorText`
  - : 突显的用户界面控件的文本颜色
- `ActiveText`
  - : 活跃链接的文本颜色
- `ButtonBorder`
  - : 控件的边框底色
- `ButtonFace`
  - : 控件的背景颜色
- `ButtonText`
  - : 控件的文本颜色
- `Canvas`
  - : 应用内容或文档的背景颜色
- `CanvasText`
  - : 应用内容或文档中的文本颜色
- `Field`
  - : 输入框的背景颜色
- `FieldText`
  - : 输入框中的文本颜色
- `GrayText`
  - : 禁用元素（如禁用控件）的文本颜色
- `Highlight`
  - : 选中项的背景颜色
- `HighlightText`
  - : 选中项的文本颜色
- `LinkText`
  - : 非活跃且未访问链接的文本颜色
- `Mark`
  - : 被专门标记（如用 HTML `mark` 元素）的文本的背景颜色
- `MarkText`
  - : 被专门标记（如用 HTML `mark` 元素）的文本颜色
- `VisitedText`
  - : 已访问链接的文本颜色

### 弃用的系统颜色关键字

在 CSS 颜色模块的先前版本中定义了下列关键字。现在不推荐在公共网页上使用这些关键字。

- `ActiveBorder` {{deprecated_inline}}
  - : 活跃窗口的边框颜色。
- `ActiveCaption` {{deprecated_inline}}
  - : 活跃窗口的标题栏颜色。应与前景色 `CaptionText` 一同使用。
- `AppWorkspace` {{deprecated_inline}}
  - : 多文档界面的背景颜色。
- `Background` {{deprecated_inline}}
  - : 桌面背景颜色。
- `ButtonHighlight` {{deprecated_inline}}
  - : 因有一层环绕边框而有立体感的立体元素面向光源的边框颜色。
- `ButtonShadow` {{deprecated_inline}}
  - : 因有一层环绕边框而有立体感的立体元素背向光源的边框颜色。
- `CaptionText` {{deprecated_inline}}
  - : 标题栏、尺寸框和滚动条箭头框中的文本颜色。应与背景色 `ActiveCaption` 一同使用。
- `InactiveBorder` {{deprecated_inline}}
  - : 非活跃窗口的边框颜色。
- `InactiveCaption` {{deprecated_inline}}
  - : 非活跃窗口的标题栏颜色。应与前景色 `InactiveCaptionText` 一同使用。
- `InactiveCaptionText` {{deprecated_inline}}
  - : 非活跃窗口的标题栏中的文本颜色。应与背景色 `InactiveCaption` 一同使用。
- `InfoBackground` {{deprecated_inline}}
  - : 提示框控件的背景颜色。应与前景色 `InfoText` 一同使用。
- `InfoText` {{deprecated_inline}}
  - : 提示框控件的文本颜色。应与背景色 `InfoBackground` 一同使用。
- `Menu` {{deprecated_inline}}
  - : 菜单背景颜色。应与前景色 `MenuText` 或 `-moz-MenuBarText` 一同使用。
- `MenuText` {{deprecated_inline}}
  - : 菜单中的文本颜色。应与背景色 `Menu` 一同使用。
- `Scrollbar` {{deprecated_inline}}
  - : 滚动条的背景颜色。
- `ThreeDDarkShadow` {{deprecated_inline}}
  - : 因有两层同心环绕边框而有立体感的立体元素背向光源的较暗（通常为外侧）的边框颜色。
- `ThreeDFace` {{deprecated_inline}}
  - : 因有两层同心环绕边框而有立体感的立体元素正面的背景颜色。应与前景色 `ButtonText` 一同使用。
- `ThreeDHighlight` {{deprecated_inline}}
  - : 因有两层同心环绕边框而有立体感的立体元素面向光源的较亮（通常为外侧）的边框颜色。
- `ThreeDLightShadow` {{deprecated_inline}}
  - : 因有两层同心环绕边框而有立体感的立体元素面向光源的较暗（通常为内侧）的边框颜色。
- `ThreeDShadow` {{deprecated_inline}}
  - : 因有两层同心环绕边框而有立体感的立体元素背向光源的较亮（通常为内侧）的边框颜色。
- `Window` {{deprecated_inline}}
  - : 窗口的背景颜色。应与前景色 `WindowText` 一同使用。
- `WindowFrame` {{deprecated_inline}}
  - : 窗口的边框颜色。
- `WindowText` {{deprecated_inline}}
  - : 窗口中的文本颜色。应与背景色 `Window` 一同使用。

### Firefox 非标准系统颜色关键字

Firefox 还支持系统颜色关键字集的一些非标准扩展。

- `-moz-ButtonDefault` {{non-standard_inline}}
  - : 表示对话框默认操作的按钮周围的边框颜色。
- `-moz-ButtonHoverFace` {{non-standard_inline}}
  - : 鼠标指针置于其上的按钮的背景颜色（当鼠标指针不在上方时，应为 `ThreeDFace` 或 `ButtonFace`）。应与前景色 `-moz-ButtonHoverText` 一同使用。
- `-moz-ButtonHoverText` {{non-standard_inline}}
  - : 鼠标指针置于其上的按钮的文本颜色（当鼠标指针不在上方时，应为 `ButtonText`）。应与背景色 `-moz-ButtonHoverFace` 一同使用。
- `-moz-CellHighlight` {{non-standard_inline}}
  - : 树形小部件中选中项的背景颜色。应与前景色 `-moz-CellHighlightText` 一同使用。参见 `-moz-html-CellHighlight`。
- `-moz-CellHighlightText` {{non-standard_inline}}
  - : 树形小部件中选中项的文本颜色。应与背景色 `-moz-CellHighlight` 一同使用。参见 `-moz-html-CellHighlightText`。
- `-moz-Combobox` {{non-standard_inline}}
  - : 组合框的背景颜色。应与前景色 `-moz-ComboboxText` 一同使用。在 1.9.2 之前的版本中，请改用 `-moz-Field`。
- `-moz-ComboboxText` {{non-standard_inline}}
  - : 组合框的文本颜色。应与背景色 `-moz-Combobox` 一同使用。在 1.9.2 之前的版本中，请改用 `-moz-FieldText`。
- `-moz-Dialog` {{non-standard_inline}}
  - : 对话框的背景颜色。应与前景色 `-moz-DialogText` 一同使用。
- `-moz-DialogText` {{non-standard_inline}}
  - : 对话框的文本颜色。应与背景色 `-moz-Dialog` 一同使用。
- `-moz-DragTargetZone` {{non-standard_inline}}
  - : 元素在拖放操作中可放置区域的突显颜色。
- `-moz-EvenTreeRow` {{non-standard_inline}}
  - : 树形小部件中偶数行的背景颜色。应与前景色 `-moz-FieldText` 一同使用。在 1.9 之前的 Gecko 版本中，请使用 `-moz-Field`。参见 `-moz-OddTreeRow`。
- `-moz-html-CellHighlight` {{non-standard_inline}}
  - : HTML {{HTMLElement("select")}} 元素中突显项的背景颜色。应与前景色 `-moz-html-CellHighlightText` 一同使用。在 Gecko 1.9 之前，请使用 `-moz-CellHighlight`。
- `-moz-html-CellHighlightText` {{non-standard_inline}}
  - : HTML {{HTMLElement("select")}} 元素中突显项的文本颜色。应与背景色 `-moz-html-CellHighlight` 一同使用。在 Gecko 1.9 之前，请使用 `-moz-CellHighlightText`。
- `-moz-mac-AccentDarkestShadow` {{non-standard_inline}}、`-moz-mac-AccentDarkShadow` {{non-standard_inline}}、`-moz-mac-AccentFace` {{non-standard_inline}}、`-moz-mac-AccentLightestHighlight` {{non-standard_inline}}、`-moz-mac-AccentLightShadow` {{non-standard_inline}}、`-moz-mac-AccentRegularHighlight` {{non-standard_inline}}、`-moz-mac-AccentRegularShadow` {{non-standard_inline}}
  - : 点缀色。
- `-moz-mac-Chrome-Active` {{non-standard_inline}}、`-moz-mac-Chrome-Inactive` {{non-standard_inline}}
  - : 非活跃和活跃的浏览器界面颜色。
- `-moz-mac-FocusRing` {{non-standard_inline}}、`-moz-mac-MenuSelect` {{non-standard_inline}}、`-moz-mac-MenuShadow` {{non-standard_inline}}、`-moz-mac-MenuTextSelect` {{non-standard_inline}}、`-moz-MenuHover` {{non-standard_inline}}
  - : 悬停其上的菜单项的背景颜色，通常与 `Highlight` 相似。应与前景色 `-moz-MenuHoverText` 或 `-moz-MenuBarHoverText` 一同使用。
- `-moz-MenuHoverText` {{non-standard_inline}}
  - : 悬停其上的菜单项的文本颜色，通常与 `HighlightText` 相似。应与背景色 `-moz-MenuHover` 一同使用。
- `-moz-MenuBarText` {{non-standard_inline}}
  - : 菜单栏中的文本颜色，通常与 `MenuText` 相似。应在背景色 `Menu` 之上使用。
- `-moz-MenuBarHoverText` {{non-standard_inline}}
  - : 菜单栏中悬停其上的文本颜色，通常与 `-moz-MenuHoverText` 相似。应在背景色 `-moz-MenuHover` 之上使用。
- `-moz-NativeHyperlinkText` {{non-standard_inline}}
  - : 平台默认的超链接颜色。
- `-moz-OddTreeRow` {{non-standard_inline}}
  - : 树形小部件中奇数行的背景颜色。应与前景色 `-moz-FieldText` 一同使用。在 1.9 之前的 Gecko 版本中，请使用 `-moz-Field`。参见 `-moz-EvenTreeRow`。
- `-moz-win-CommunicationsText` {{non-standard_inline}}
  - : 应当用于带 `{{CSSXref("appearance")}}: -moz-win-Communications-Toolbox;` 对象的文本。
- `-moz-win-MediaText` {{non-standard_inline}}
  - : 应当用于带 `{{CSSXref("appearance")}}: -moz-win-Media-Toolbox` 对象的文本。
- `-moz-win-AccentColor` {{non-standard_inline}}
  - : 用于获取可设置在开始菜单、任务栏、标题栏等位置上的 Windows 10 自定义点缀色。
- `-moz-win-AccentColorText` {{non-standard_inline}}
  - : 用于获取置于可设置在开始菜单、任务栏、标题栏等位置上的 Windows 10 自定义点缀色之上的文本颜色。

## 示例

### 使用系统颜色

在此示例中有一个按钮使用 {{CSSXref("box-shadow")}} 属性正常地形成对比。在强制颜色模式中，`box-shadow` 被强制变为 `none`，故此示例使用 `forced-colors` 媒体特性确保有颜色合适（此例为 `ButtonBorder`）的边框。

#### HTML

```html
<button class="button">按我！</button>
```

#### CSS

```css
.button {
  border: 0;
  padding: 10px;
  box-shadow: -2px -2px 5px gray, 2px 2px 5px gray;
}

@media (forced-colors: active) {
  .button {
    /* 改用边框，这是因为在强制颜色模式中 box-shadow 被强制变为“none” */
    border: 2px ButtonBorder solid;
  }
}
```

#### 结果

{{EmbedLiveSample("使用系统颜色")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSXref("&lt;color&gt;")}}——这些关键字所属的数据类型
