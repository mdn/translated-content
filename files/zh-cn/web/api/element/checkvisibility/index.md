---
title: Element：checkVisibility() 方法
short-title: checkVisibility()
slug: Web/API/Element/checkVisibility
l10n:
  sourceCommit: 978aef2f7339917b6032c687b675402ae664de4d
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`checkVisibility()`** 方法用于检查元素是否可能可见。

在以下任一情况下，该方法返回 `false`：

- 元素没有关联的盒子，例如因为 CSS {{cssxref("display")}} 属性被设置为 [`none`](/zh-CN/docs/Web/CSS/Reference/Properties/display#none) 或 [`contents`](/zh-CN/docs/Web/CSS/Reference/Properties/display#contents)。
- 元素未被渲染，因为该元素或其祖先元素将 {{cssxref("content-visibility")}} 属性设置为 [`hidden`](/zh-CN/docs/Web/CSS/Reference/Properties/content-visibility#hidden)。

可选参数可启用额外的检查，以测试“可见”的其他含义。例如，你可以进一步检查元素的不透明度是否为 `0`、元素的 {{cssxref("visibility")}} 属性值是否使其不可见，或者元素的 {{cssxref("content-visibility")}} 属性值是否为 [`auto`](/zh-CN/docs/Web/CSS/Reference/Properties/content-visibility#auto) 且其渲染当前正被跳过。

请注意，返回值为 `true` 并不保证元素对用户可见，只表示它可能可见。位于视口之外或被其他内容遮挡的元素仍可能返回 `true`。

## 语法

```js-nolint
checkVisibility(options)
```

### 参数

- `options` {{optional_inline}}
  - : 一个对象，用于指明要运行的额外检查。可用的选项有：
    - `contentVisibilityAuto`
      - : 设置为 `true` 时，检查元素的 {{cssxref("content-visibility")}} 属性是否具有（或继承）值 [`auto`](/zh-CN/docs/Web/CSS/Reference/Properties/content-visibility#auto)，且当前正在跳过其渲染。默认为 `false`。
    - `opacityProperty`
      - : 设置为 `true` 时，检查元素的 {{cssxref("opacity")}} 属性是否具有（或继承）值 `0`。默认为 `false`。
    - `visibilityProperty`
      - : 设置为 `true` 时，检查元素是否因其 {{cssxref("visibility")}} 属性的值而不可见。默认为 `false`。

        > [!NOTE]
        > 不可见的元素包括设置了 [`visibility: hidden`](/zh-CN/docs/Web/CSS/Reference/Properties/visibility#hidden) 的元素，以及某些设置了 [`visibility: collapse`](/zh-CN/docs/Web/CSS/Reference/Properties/visibility#collapse) 的元素类型。

    - `checkOpacity`
      - : [`opacityProperty`](#opacityproperty) 的历史别名。
    - `checkVisibilityCSS`
      - : [`visibilityProperty`](#visibilityproperty) 的历史别名。

### 返回值

如果满足以下任一条件则返回 `false`，否则返回 `true`：

- 元素没有关联的盒子。
- 元素的 {{cssxref("content-visibility")}} 属性具有（或继承）值 [`hidden`](/zh-CN/docs/Web/CSS/Reference/Properties/visibility#hidden)。
- `opacityProperty`（或 `checkOpacity`）为 `true`，且元素的 {{cssxref("opacity")}} 属性具有（或继承）值 `0`。
- `visibilityProperty`（或 `checkVisibilityCSS`）为 `true`，且元素因其 {{cssxref("visibility")}} 属性的值而不可见。
- `contentVisibilityAuto` 为 `true`，{{cssxref("content-visibility")}} 属性具有（或继承）值 [`auto`](/zh-CN/docs/Web/CSS/Reference/Properties/content-visibility#auto)，且元素的渲染正被跳过。

## 示例

### 用不同的 CSS 测试 checkVisibility()

以下示例让你可以测试 `checkVisibility()` 的结果如何随 `display`、`content-visibility`、`visibility` 和 `opacity` 这几个 CSS 属性的不同取值而变化。

#### HTML

HTML 为影响 `checkVisibility()` 结果的各个 CSS 属性分别定义了一个 `<select>` 元素。各列表第一项（默认选中）的取值应用于元素时，应使 `checkVisibility()` 返回 `true`，而其他取值则会影响可见性。

```html
<select id="css_display" name="css_display">
  <option value="block" selected>display: block</option>
  <option value="none">display: none</option>
  <option value="contents">display: contents</option>
</select>

<select id="css_content_visibility" name="css_content_visibility">
  <option value="visible" selected>content-visibility: visible</option>
  <option value="hidden">content-visibility: hidden</option>
  <option value="auto">content-visibility: auto</option>
</select>

<select id="css_opacity" name="css_opacity">
  <option value="1" selected>opacity: 1</option>
  <option value="0">opacity: 0</option>
</select>

<select id="css_visibility" name="css_visibility">
  <option value="visible" selected>visibility: visible</option>
  <option value="hidden">visibility: hidden</option>
  <option value="collapse">visibility: collapse</option>
</select>
```

接下来是一个 `<pre>` 元素，用于输出未传入参数以及分别传入各个选项值时 `checkVisibility()` 检查的结果。最后是要测试的元素（我们将把选中的 CSS 属性值应用到它上面）。

```html
<pre id="output_result"></pre>
<div id="test_element">要检查可见性的元素。</div>
```

#### CSS

这段 CSS 只是用来突出显示要测试的元素。

```css
#test_element {
  border: solid;
  border-color: blue;
}
```

#### JavaScript

下面的代码会获取每一个 `<select>` 元素。`updateCSS()` 方法会在启动时以及每次选择框发生变化时被调用，以便将选中的 CSS 应用到目标元素。

```js
const displayCssSelect = document.getElementById("css_display");
const contentVisibilityCssSelect = document.getElementById(
  "css_content_visibility",
);
const displayCssOpacity = document.getElementById("css_opacity");
const displayCssVisibility = document.getElementById("css_visibility");

const outputResult = document.getElementById("output_result");
const elementToCheck = document.getElementById("test_element");

updateCSS();

const cssSelectors = document.querySelectorAll("select");
cssSelectors.forEach((select) => {
  select.addEventListener("change", (event) => {
    updateCSS();
  });
});

function updateCSS() {
  // 将选中的 CSS 属性应用到目标元素
  elementToCheck.style.display = displayCssSelect.value;
  elementToCheck.style.contentVisibility = contentVisibilityCssSelect.value;
  elementToCheck.style.opacity = displayCssOpacity.value;
  elementToCheck.style.visibility = displayCssVisibility.value;

  // 使用默认参数和各个选项分别对元素调用 checkVisibility()
  const defaultVisibilityCheck = elementToCheck.checkVisibility();
  const opacityVisibilityCheck = elementToCheck.checkVisibility({
    opacityProperty: true,
  });
  const cssVisibilityCheck = elementToCheck.checkVisibility({
    visibilityProperty: true,
  });
  const contentVisibilityAutoCheck = elementToCheck.checkVisibility({
    contentVisibilityAuto: true,
  });

  // 输出各项测试的结果
  outputResult.innerText = `对下方元素（可能已被隐藏）的检查：
- checkVisibility() 的结果：${defaultVisibilityCheck}
- checkVisibility({opacityProperty: true}) 的结果：${opacityVisibilityCheck}
- checkVisibility({visibilityProperty: true}) 的结果：${cssVisibilityCheck}
- checkVisibility({contentVisibilityAuto: true}) 的结果：${contentVisibilityAutoCheck}`;
}
```

#### 结果

结果如下所示。如果你更改选择，选中的值将应用到测试元素（蓝色轮廓）上，并会显示每种设置下 `checkVisibility()` 的结果。例如，如果设置 `opacity: 0`，则应只有该项测试显示 `false`。而如果设置 `display: none`，则所有测试都应返回 `false`。

{{ EmbedLiveSample('用不同的 CSS 测试 checkVisibility()', "100%", "200" ) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
