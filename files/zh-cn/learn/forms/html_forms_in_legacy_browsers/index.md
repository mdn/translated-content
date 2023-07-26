---
title: 旧式浏览器中的 HTML 表单
slug: Learn/Forms/HTML_forms_in_legacy_browsers
---

{{LearnSidebar}}

所有 web 开发者很快就会（有时候是痛苦地）发现 Web 是一个令人不快的地方。我们碰到的最恶毒的诅咒是旧式浏览器。好吧，让我们承认吧，当我们提到“旧式浏览器”时，脑海中出现就是 Safari 和 Internet Explorer……但是，这远远不是全部。那么，在移动世界呢？当浏览器和 OS（操作系统）都不能更新时？是的，有非常多老版本的 Android 手机或 iPhone 没有更新到最新的浏览器。它们同样是旧式浏览器。

可悲的是，处理这些传统浏览器的问题是工作的一部分。幸运的是，有一些技巧可以帮助你解决旧式浏览器导致的大多数问题。如果浏览器不支持某种 HTML {{htmlelement('input')}} 类型，它不会停止工作，而只是回退为默认的 `type=text` 类型。

## 了解这些问题

实际上，最重要的事情是阅读那些浏览器的文档，并尝试理解通用的（解决）模式。如果你在 [MDN](/) 上阅读了本篇文档，这将是个良好的开始，只需要检查你想用的元素或 DOM 接口的支持情况即可。对于大部分 HTML 中可用的元素、属性或 API，MDN 提供了兼容性表格以供查询。

由于 [HTML 表单](/zh-CN/docs/Learn/Forms)包含了复杂的交互，有一个非常重要的规则：保持简单化，也常称做“[KISS 原则](https://zh.wikipedia.org/wiki/KISS原则)”。有很多情况下，我们希望表单“更漂亮”或“具有高级功能”，但构建高效的 HTML 表单并不是一个设计或技术问题，而是一个简单直观且便利的用户互动问题。记得花时间读一下这篇文章 [forms usability on UX For The Masses](http://www.uxforthemasses.com/forms-usability/)。

### 优雅降级 (Graceful degradation) 是 web 开发者最好的朋友

[优雅降级和渐进增强](https://www.sitepoint.com/progressive-enhancement-graceful-degradation-choice/)是一种开发模式，它允许你通过同时支持多种浏览器来构建优秀内容。当你为现代浏览器构建内容时，你想确保它能在旧式浏览器中以某种方式工作，这就是优雅降级（graceful degradation）。

让我们看一些关于 HTML 表单的例子：

#### HTML input 类型

HTML5 引入的新 input 类型十分酷，因为他们的降级 (degrade) 是高度可预测的。如果一个浏览器不能理解 {{HTMLElement("input")}}元素的 [`type`](/zh-CN/docs/Web/HTML/Element/input#type) 属性，它将会后退到`text`一样的行为。

```html
<label for="myColor">
  Pick a color
  <input type="color" id="myColor" name="color" />
</label>
```

<table class="no-markdown">
  <thead>
    <tr>
      <th>支持</th>
      <th>不受支持</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img
          alt="Screen shot of the color input on Chrome for Mac OSX"
          src="color-fallback-chrome.png"
        />
      </td>
      <td>
        <img
          alt="Screen shot of the color input on Firefox for Mac OSX"
          src="color-fallback-firefox.png"
        />
      </td>
    </tr>
  </tbody>
</table>

#### 表单按钮

有两种在 HTML 表单中定义按钮的方式：

- [`type`](/zh-CN/docs/Web/HTML/Element/input#type) 属性值为 `button`、`submit`、`reset` 或 `image` 的 {{HTMLElement("input")}} 元素
- {{HTMLElement("button")}} 元素

##### {{HTMLElement("input")}}

{{HTMLElement("input")}} 元素可能使得通过元素选择器应用 CSS 变得有些困难：

```html
<input type="button" value="click me" />
```

如果我们把所有 input 的外框移除，我们能否只恢复 input 按钮的默认外观？

```css
input {
  /* 这条规则关闭了含有外边框的 input 类型的默认渲染效果，包括了使用 input 元素定义的按钮 */
  border: 1px solid #ccc;
}
input[type="button"] {
  /* 这条规则并不能恢复默认渲染行为！ */
  border: none;
}
input[type="button"] {
  /* 这条也不行！实际上在任何浏览器上都没有标准的方案 */
  border: auto;
  border: initial;
}
input[type="button"] {
  /* 这条是恢复默认渲染最接近的答案，只要浏览器支持就可以这么做 */
  border: revert;
}
```

请查看全局的 CSS {{cssxref('revert')}} 值以获得更多信息。

##### {{HTMLElement("button")}}

{{HTMLElement("button")}} 元素曾经受到两个问题的影响，现在已经得到解决：

- 在旧版本的 Internet Explorer 中，存在一个错误，当点击 {{HTMLElement("button")}} 元素时，会发送该元素开始和结束标签之间的 HTML 内容，而不是 [`value`](/zh-CN/docs/Web/HTML/Element/button#value) 属性中的值。仅在需要发送该值时才会出现问题，例如当数据处理取决于用户点击的按钮时。
- 某些非常旧的浏览器不使用 `submit` 作为 [`type`](/zh-CN/docs/Web/HTML/Element/button#type) 属性的默认值。即使在现代浏览器中得到了解决，也推荐总是设置 {{HTMLElement("button")}} 元素的 [`type`](/zh-CN/docs/Web/HTML/Element/button#type) 属性。

```html
<!-- 某些情形下，点击按钮将发送 "<em>Do A</em>" 而不是值"A" -->
<button type="submit" name="IWantTo" value="A">
  <em>Do A</em>
</button>
```

选择哪种解决方案由项目的限制条件决定。

### 摆脱 CSS

HTML 表单的一个大问题是用 CSS 对表单小部件进行样式化。表单控件的外观是针对浏览器和操作系统的。例如，颜色类型的输入在 Safari、Chrome 和 Firefox 浏览器中看起来是不同的，但颜色选择器小部件在设备上的所有浏览器中都是一样的，因为它打开了操作系统的本地颜色选择器。

不改变表单控件的默认外观往往是个好主意，因为改变某个 CSS 属性值可以改变一些 input 类型，却不能改变另一些类型。例如，如果你声明了 `input { font-size: 2rem; }`，它会影响到 `number`、`date` 和 `text`，却不会影响 `color` 和 `range`。如果你改变了一个属性，会在不可预知的情况下影响到组件的外观。例如，`[value] { background-color: #ccc; }` 可能会用于改变所有含有 `value` 属性的 {{HTMLElement("input")}} 元素，但改变 {{HTMLElement("meter")}} 的 border radius 值可能会在不同浏览器中引起无法预期的显示。你可以声明 {{cssxref('appearance', 'appearance: none;')}} 来移除浏览器默认样式，但这通常会违背目的：因为你失去了所有的样式，删除了你的访问者所习惯的默认外观和感受。

总而言之，当涉及到表单控件小部件的样式时，用 CSS 为它们设计样式的副作用可能是不可预测的。所以不要这样做。正如从这篇[表单控件的 CSS 属性兼容性表格](/zh-CN/docs/Property_compatibility_table_for_form_widgets)中所看到的复杂性那样，它非常的困难。即使仍然可以对文本元素（如大小、字体颜色等）进行一些调整，但那样做会有副作用。最好的办法还是不要美化 HTML 表单小组件。但你仍然可以将样式应用到表单周围的项目上。如果你是一个专业人士，并且你的客户需要那么做，在这种情况下，你可以研究一些硬技能，如[使用 JavaScript 重建组件](/zh-CN/docs/Learn/Forms/How_to_build_custom_form_controls)。但在那种情况下，最好还是毫不犹豫的[让客户收回这些愚蠢的决定](http://www.smashingmagazine.com/2011/11/03/but-the-client-wants-ie-6-support/)。

## 特性检测和 polyfill

CSS 和 JavaScript 是了不起的技术，但重要的是确保不会破坏传统的浏览器。在使用你的目标浏览器不完全支持的特性之前，你应该进行特性检测。

### CSS 特性检测

在设计一个表单控件的样式之前，你可以使用 {{cssxref('@supports')}} 检查一下浏览器是否支持你打算使用的特性：

```css
@supports (appearance: none) {
  input[type="search"] {
    appearance: none;
    /* 重新为 search input 添加样式 */
  }
}
```

{{cssxref('appearance')}} 属性可用于以平台原生的方式显示元素的样式，如果指定为 `none`，则移除默认基于不同平台的样式。

### 非侵入式 JavaScript

API 的兼容性是最大的问题。由于这个原因，与“非侵入式（unobtrusive）”JavaScript 一起工作被认为是最佳实践（译者注：此处意思是说没有或忽略 JavaScript 或 JavaScript 出了问题也能工作）。这个开发模式定义了两个需求：

- 结构和行为之间的严格隔离
- 如果代码出错，内容和基本功能必须保持可访问和可用状态

[The principles of unobtrusive JavaScript](https://www.w3.org/wiki/The_principles_of_unobtrusive_JavaScript)（最早是由 Peter-Paul Koch 为 Dev.Opera.com 所撰写）这篇文章同样阐述了上述观点。

### Modernizr 库

有很多情形，好的”polyfill“能通过提供缺少的 API 以提供帮助。一个 [polyfill](http://remysharp.com/2010/10/08/what-is-a-polyfill/) 是一些用于填补旧式浏览器中缺失功能的 JavaScript 脚本。虽然它们可以用来改善对任何功能的支持，但对 JavaScript 使用它们比对 CSS 或 HTML 使用风险要小；有很多情况下 JavaScript 会崩溃（网络问题、脚本冲突等）。但是对于 JavaScript 来说，如果你在工作中考虑到非侵入式 JavaScript，如果 polyfill 缺失，那也没什么大不了的。

最好的 polyfill 缺失 API 的方式是使用 [Modernizr](https://modernizr.com) 库以及它的子项目 [YepNope](https://yepnopejs.com)。Modernizr 库允许你测试功能可用性，以便采取相应的行动。YepNope 是一个条件加载库。

下面是一个例子：

```js
Modernizr.load({
  // 这会测试你的浏览器是否支持 HTML5 表单验证 API
  test: Modernizr.formvalidation,

  // 如果浏览器不支持它，则会加载以下 polyfill
  nope: form - validation - API - polyfill.js,

  // 无论如何，你的核心 App 文件依赖于该 API 被加载
  both: app.js,

  // 一旦加载了这两个文件，就会调用该函数来初始化应用程序
  complete: function () {
    app.init();
  },
});
```

Modernizr 团队按照惯例维护着[一个优秀的 polyfill 列表](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills)，按需使用即可。

> **备注：** Modernizr 还有其他很棒的功能可以帮助你处理非侵入式 JavaScript 和优雅降级的技术。请阅读 [Modernizr 文档](https://modernizr.com/docs/)。

### 注意性能

尽管像 Modernizr 这样的脚本非常注重性能，但加载 200 KB 的 polyfill 仍然会影响你的应用程序的性能。这对旧式浏览器来说尤其重要，这些浏览器的 JavaScript 引擎处理速度很慢，让 polyfills 的执行对于用户来说变得很痛苦。性能本身就是一个主题，但旧式浏览器对它非常敏感：基本上，它们速度慢，需要的 polyfill 越多，它们需要处理的 JavaScript 越多。与现代浏览器相比，它们承受双重负担。使用旧版浏览器测试你的代码，了解它们的实际表现。有时，放弃某些功能会带来更好的用户体验，而不是在所有浏览器中具有完全相同的功能。作为最后提醒，总是优先考虑用户。

## 总结

正如你所看到的，处理旧式浏览器不仅仅是表单问题。而是一整套技术；但是掌握所有这些技术超出了本文的范围。基本的前提是，在开始挑战之前，要考虑改变默认的实现方式是否值得做这些工作。

如果你阅读了 [HTML 表单指南](/zh-CN/docs/Learn/Forms)中的所有文章，你应该可以放心的使用表单了。如果你想探索新技术，请帮助我们提升指南的写作水平。

### 进阶内容

- [通过 JavaScript 发送表单](/zh-CN/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [如何构建自定义表单控件](/zh-CN/docs/Learn/Forms/How_to_build_custom_form_controls)
- [旧版浏览器中的 HTML 表单](/zh-CN/docs/Learn/Forms/HTML_forms_in_legacy_browsers)
- [高级表单样式](/zh-CN/docs/Learn/Forms/Advanced_form_styling)
- [表单控件的属性兼容性列表](/zh-CN/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
