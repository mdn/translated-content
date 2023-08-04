---
title: <details>：详细信息展现元素
slug: Web/HTML/Element/details
---

{{HTMLSidebar}}

[HTML](/zh-CN/docs/Web/HTML) **`<details>`** 元素可创建一个组件，仅在被切换成展开状态时，它才会显示内含的信息。{{HTMLElement("summary")}} 元素可为该部件提供概要或者标签。

展现组件通常在屏幕上使用一个小三角形，旋转（或扭转）以表示打开/关闭的状态，三角形旁边有一个标签。`<summary>` 元素的内容被用来作为展示小部件的标签。

{{EmbedInteractiveExample("pages/tabbed/details.html", "tabbed-shorter")}}

一个 `<details>` 小组件可以处于两种状态之一。默认的*关闭*状态只显示三角形和 `<summary>` 内的标签（如果没有 `<summary>` 则显示{{Glossary("user agent", "用户代理")}}定义的默认字符串）。

当用户点击小组件或聚焦它然后按空格键时，它就会“扭转”展开，显示出其中的内容。通常使用一个旋转或扭转的三角形来代表打开或关闭小组件，这就是为什么这些小组件有时被称为“旋钮”。

你可以使用 CSS 来设计展示小组件，你可以通过设置/移除 [`open`](#open) 属性以编程方式打开和关闭该小组件。遗憾的是，目前还没有内置的方法来对打开和关闭之间的过渡进行动画处理。

默认情况下，当关闭时，该小组件的高度只足以显示展开三角形和摘要。当打开时，它就会展开以显示其中包含的细节。

完全符合标准的实现会自动将 CSS `{{cssxref("display")}}: list-item` 应用到 {{HTMLElement("summary")}} 元素。你可以用它来进一步定制其外观。请参阅[自定义展开组件](#自定义展开组件)以了解更多细节。

## 属性

此元素包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

- `open`

  - : 这个布尔属性表示细节内容——也就是 `<details>` 元素的内容——目前是否可见。默认情况下为 `false`，意味着细节内容是不可见的。

    > **备注：** 你必须完全删除这个属性来使细节内容隐藏。`open="false"` 使细节内容可见，因为这个属性是布尔值。

## 事件

除了 HTML 元素支持的常规事件外，`<details>` 元素还支持 {{domxref("HTMLDetailsElement/toggle_event", "toggle")}} 事件，当 `<details>` 元素的状态在打开和关闭之间变化时，该事件会被派发到该元素。该事件是在状态发生变化*后*发送的，不过如果状态在浏览器派发该事件之前发生了多次变化，那么这些事件就会被合并，从而只发送一个。

你可以为 `toggle` 事件使用一个事件监听器来检测小组件何时改变状态：

```js
details.addEventListener("toggle", (event) => {
  if (details.open) {
    /* 元素切换至打开状态 */
  } else {
    /* 元素切换至关闭状态 */
  }
});
```

## 示例

### 一个简单的展开示例

此示例展示了一个带有 `<summary>` 的 `<details>` 元素。

```html
<details>
  <summary>系统需求</summary>
  <p>
    要求有一台运行操作系统的计算机。计算机必须有一些内存，最好有某种长期存储。建议有一个输入设备以及某种形式的输出设备。
  </p>
</details>
```

#### 结果

{{EmbedLiveSample("一个简单的展开示例", 650, 150)}}

### 创建一个展开的盒子

为了使得 `<details>` 盒子初始为展开状态，要添加布尔属性 `open`：

```html
<details open>
  <summary>系统需求</summary>
  <p>
    要求有一台运行操作系统的计算机。计算机必须有一些内存，最好有某种长期存储。建议有一个输入设备以及某种形式的输出设备。
  </p>
</details>
```

#### 结果

{{EmbedLiveSample("创建一个展开的盒子", 650, 150)}}

### 自定义外观

现在我们给展现盒子设置一些 CSS 样式，以自定义其外观。

#### CSS

```css
details {
  font:
    16px "Open Sans",
    Calibri,
    sans-serif;
  width: 620px;
}

details > summary {
  padding: 2px 6px;
  width: 15em;
  background-color: #ddd;
  border: none;
  box-shadow: 3px 3px 4px black;
  cursor: pointer;
}

details > p {
  border-radius: 0 0 10px 10px;
  background-color: #ddd;
  padding: 2px 6px;
  margin: 0;
  box-shadow: 3px 3px 4px black;
}

details[open] > summary {
  background-color: #ccf;
}
```

这个 CSS 创建了一个类似于标签式界面的外观，点击标签可以打开它，显示其内容。

选择器 `details[open]` 可以用来为打开的元素设置样式。

#### HTML

```html
<details>
  <summary>系统需求</summary>
  <p>
    要求有一台运行操作系统的计算机。计算机必须有一些内存，最好有某种长期存储。建议有一个输入设备以及某种形式的输出设备。
  </p>
</details>
```

#### 结果

{{EmbedLiveSample("自定义外观", 650, 150)}}

### 自定义展开组件

展开三角形可以自定义，但并没有得到广泛支持。由于该元素是标准化的，因此在实验性实施阶段，浏览器如何支持此自定义项有所不同，我们不得不暂时使用多种方法。

{{HTMLElement("summary")}} 元素支持 {{cssxref("list-style")}} 缩写属性或者完整属性，比如 {{cssxref("list-style-type")}}，可以使用它们任意改变三角（通常与 {{cssxref("list-style-image")}} 一起使用）。例如，我们可以使用 `list-style: none` 移除三角形展开图标。

#### CSS

```css
details {
  font:
    16px "Open Sans",
    Calibri,
    sans-serif;
  width: 620px;
}

details > summary {
  padding: 2px 6px;
  width: 15em;
  background-color: #ddd;
  border: none;
  box-shadow: 3px 3px 4px black;
  cursor: pointer;
  list-style: none;
}

details > p {
  border-radius: 0 0 10px 10px;
  background-color: #ddd;
  padding: 2px 6px;
  margin: 0;
  box-shadow: 3px 3px 4px black;
}
```

该 CSS 的外观类似于选项卡界面，在该界面中，激活选项卡将展开并打开它以显示其内容。

#### HTML

```html
<details>
  <summary>系统需求</summary>
  <p>
    要求有一台运行操作系统的计算机。计算机必须有一些内存，最好有某种长期存储。建议有一个输入设备以及某种形式的输出设备。
  </p>
</details>
```

#### 结果

{{EmbedLiveSample("自定义展开组件", 650, 150)}}

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Content_categories"
          >内容分类</a
        >
      </th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Content_categories#流式内容"
          >流式内容</a
        >、分段内容、交互内容、可感知内容
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        一个紧跟<a href="/zh-CN/docs/Web/HTML/Content_categories#流式内容"
          >流式内容</a
        >的 {{HTMLElement("summary")}} 元素
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        任何接受<a href="/zh-CN/docs/Web/HTML/Content_categories#流式内容"
          >流式内容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a></td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>没有允许的 <code>role</code></td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{domxref("HTMLDetailsElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("summary")}}
