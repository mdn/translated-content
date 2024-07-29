---
title: HighlightRegistry
slug: Web/API/HighlightRegistry
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

[CSS 自定义高亮 API](/zh-CN/docs/Web/API/CSS_Custom_Highlight_API) 的 **`HighlightRegistry`** 接口用于注册 {{domxref("Highlight")}} 对象，以便使用该 API 设置样式。可通过 {{domxref("CSS.highlights_static", "CSS.highlights")}} 访问该接口。

`HighlightRegistry` 实例是一个[类 `Map` 对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map#类_map_浏览器_api)，其中每个键都是自定义高亮的名称字符串，对应的值是关联的 {{domxref("Highlight")}} 对象。

{{InheritanceDiagram}}

## 实例属性

_`HighlightRegistry` 接口不继承任何属性。_

- {{domxref("HighlightRegistry.size")}} {{ReadOnlyInline}}
  - : 返回当前已注册的 `Highlight` 对象的数量。

## 实例方法

_`HighlightRegistry` 接口不继承任何方法。_

- {{domxref("HighlightRegistry.clear()")}}
  - : 从注册表中移除所有 `Highlight` 对象。
- {{domxref("HighlightRegistry.delete()")}}
  - : 从注册表中删除具有指定名称的 `Highlight` 对象。
- {{domxref("HighlightRegistry.entries()")}}
  - : 返回一个新的迭代器对象，该对象包含了注册表中的所有 `Highlight` 对象，按插入顺序排列。
- {{domxref("HighlightRegistry.forEach()")}}
  - : 按插入顺序为注册表中的每个 `Highlight` 对象执行一次提供的函数。
- {{domxref("HighlightRegistry.get()")}}
  - : 从注册表中获取指定的 `Highlight` 对象。
- {{domxref("HighlightRegistry.has()")}}
  - : 返回一个指示对应的 `Highlight` 对象是否存在于该注册表中的布尔值。
- {{domxref("HighlightRegistry.keys()")}}
  - : {{domxref("HighlightRegistry.values()")}} 方法的别名。
- {{domxref("HighlightRegistry.set()")}}
  - : 添加给定名称的 `Highlight` 对象到注册表，如果该名称的对象已存在则覆盖原值。
- {{domxref("HighlightRegistry.values()")}}
  - : 返回一个新的迭代器对象，该对象包含此注册表中每个 `Highlight` 对象，按插入顺序排列。

## 示例

### 注册高亮

以下示例演示了如何创建多个文本范围，然后为它们创建 `Highlight` 对象，并在 `HighlightRegistry` 中注册该高亮显示：

#### HTML

```html
<p id="foo">CSS 自定义高亮 API</p>
```

#### CSS

```css
::highlight(my-custom-highlight) {
  background-color: peachpuff;
}
```

#### JavaScript

```js
const text = document.getElementById("foo").firstChild;

if (!CSS.highlights) {
  text.textContent = "此浏览器不支持 CSS 自定义高亮 API！";
}

// 创建多个文本范围。
const range1 = new Range();
range1.setStart(text, 0);
range1.setEnd(text, 3);

const range2 = new Range();
range2.setStart(text, 10);
range2.setEnd(text, 13);

// 为文本范围创建自定义高亮。
const highlight = new Highlight(range1, range2);

// 在 HighlightRegistry 中注册文本范围。
CSS.highlights.set("my-custom-highlight", highlight);
```

#### 结果

{{ EmbedLiveSample("注册高亮") }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("css_custom_highlight_api", "CSS 自定义高亮 API", "", "nocode")}}
- [CSS 自定义高亮 API：网页文本范围高亮的未来](https://css-tricks.com/css-custom-highlight-api-early-look/)
