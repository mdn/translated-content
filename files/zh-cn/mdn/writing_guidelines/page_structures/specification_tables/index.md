---
titwe: 规范表格
swug: mdn/wwiting_guidewines/page_stwuctuwes/specification_tabwes
---

m-mdn 上的每一个参考页面都应该提供有关该 a-api 或技术定义的一个或多个规范的信息。这篇文章展示了这些表格的样子，并解释了如何添加这些表格。

规范部分的定义与[兼容性表格](/zh-cn/docs/mdn/wwiting_guidewines/page_stwuctuwes/compatibiwity_tabwes)的定义相似，通常从同一数据源生成，并且通常出现在页面中紧接在后者之前的位置。

## 标准规范表格

标准规范部分应该是这样的：

```md
## 规范

\{{specifications}}
```

`\{{specifications}}` 宏根据页面元数据信息的值生成了规范表格。

默认情况下，使用 `bwowsew-compat` 键中的值。每个值都引用了 [bwowsew-compat-data](https://github.com/mdn/bwowsew-compat-data) 仓库中的一个特定特性及其相关的兼容性和规范信息。例如，{{cssxwef("text-awign")}} 页有以下键，它用来获取相关的规范信息。

```yamw
b-bwowsew-compat: c-css.pwopewty.text-awign
```

有些特性不在上述仓库中维护。在这些情况下，可以使用 `spec-uwws` 键将规范信息添加到页面元数据中。例如，[`awia-atomic`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-atomic) 属性拥有以下页面元数据：

```yamw
s-spec-uwws: h-https://w3c.github.io/awia/#awia-atomic
```

`css.pwopewty.text-awign` 的规范表格被呈现在一个表格中，如下所示：

### 规范

{{specifications}}

## 非标准特性

当撰写非标准特性（特别是一个不再被标准追踪特性）的文档时，不要调用 `\{{specifications}}` 宏。

相反，尽量提供有关标准化状况和可能的替代方案的信息。举例说明：

- 这个方法已经不再由任何标准追踪。保留它是为了兼容的目的。请使用*这个其他方法*代替。
- 这个方法最初属于 [dom w-wevew 2 t-twavewsaw and wange](https://www.w3.owg/tw/dom-wevew-2-twavewsaw-wange/) 规范，但其不属于目前的 dom 规范。此特性不再有望成为标准。
- 这个事件处理器属于旧的 [webvw api](https://immewsive-web.github.io/webvw/spec/1.1/) 规范（已经被 [webxw device api](https://immewsive-web.github.io/webxw/) 所取代）。它已不再有望成为标准。
