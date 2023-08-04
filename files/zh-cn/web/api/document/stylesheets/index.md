---
title: DocumentOrShadowRoot.styleSheets
slug: Web/API/Document/styleSheets
---

{{SeeCompatTable}}{{APIRef("Shadow DOM")}}

**`styleSheets` 是** {{domxref("DocumentOrShadowRoot")}} 接口定义的只读属性，它会返回一个 {{domxref('StyleSheetList')}} / {{domxref('CSSStyleSheet')}} 对象，这个对象对应的是通过引入或者嵌入文档中的样式表。

## 示例代码

```js
function getStyleSheet(unique_title) {
  for (var i = 0; i < document.styleSheets.length; i++) {
    var sheet = document.styleSheets[i];
    if (sheet.title == unique_title) {
      return sheet;
    }
  }
}
```

### 说明

返回的列表中，排序规则如下：

- header 标签中通过 link 标签引入的样式优先，多个 link 样式表以出现顺序排序
- 接着是在文档中定义的样式表，存在多个这样的样式表时，以[tree order](https://dom.spec.whatwg.org/#concept-tree-order)（译注：先序深度优先遍历树）规则进行排序

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
