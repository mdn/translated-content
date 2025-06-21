---
title: CSSPageRule
slug: Web/API/CSSPageRule
l10n:
  sourceCommit: 474a7c0e7bbb5f89b6dcc15cff75f06338457da2
---

{{APIRef("CSSOM")}}

**`CSSPageRule`** 表示一个单独的 CSS {{cssxref("@page")}} 规则。

{{InheritanceDiagram}}

## 实例属性

_继承自其父接口 {{domxref("CSSGroupingRule")}} 和 {{domxref("CSSRule")}} 的属性。_

- {{domxref("CSSPageRule.selectorText")}}
  - : 表示与该 at 规则关联的页面选择器的文本。
- {{domxref("CSSPageRule.style")}} {{ReadOnlyInline}}
  - : 返回与该 at 规则关联的[声明块](/zh-CN/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block)。

## 实例方法

_继承自其父接口 {{domxref("CSSGroupingRule")}} 和 {{domxref("CSSRule")}} 的方法。_

## 示例

### 筛选页面规则

这个示例展示了如何找到文档加载的 {{cssxref("@page")}} 规则对应的 `CSSPageRule` 对象。

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```css hidden
#log {
  height: 220px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### CSS

下面我们使用 {{cssxref("@page")}} 规则定义页面样式。

```css
@page {
  margin: 1cm;
}
```

#### JavaScript

该代码遍历文档中的所有样式表，并遍历每个样式表中的所有 `cssRules`，记录样式表的索引、规则数量以及每个规则对象的类型。然后，我们通过规则的类型检测 `CSSPageRule` 对象（对于这些信息不做任何处理）。

```js
for (
  let sheetCount = 0;
  sheetCount < document.styleSheets.length;
  sheetCount++
) {
  const sheet = document.styleSheets[sheetCount].cssRules;
  log(`样式表：${sheetCount}`);

  const myRules = document.styleSheets[sheetCount].cssRules;
  log(`规则：${myRules.length}`);
  for (let i = 0; i < myRules.length; i++) {
    log(`规则：${myRules[i]}`);
    if (myRules[i] instanceof CSSPageRule) {
      //……使用 CSSPageRule 做一些事情
    }
  }
}
```

#### 结果

结果如下所示。正如你所看到的，有两个样式表，分别对应主文档和示例代码框架，每个样式表都有多个规则，其中只有一个是我们的 `CSSPageRule`。

{{EmbedLiveSample("筛选页面规则", "100%", "300px")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
