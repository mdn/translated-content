---
title: HTMLLinkElement：hreflang 属性
slug: Web/API/HTMLLinkElement/hreflang
l10n:
  sourceCommit: 1a790d83cbfcd76ac05a1b18697597f8d110d2cf
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLLinkElement")}} 接口的 **`hreflang`** 属性用于指示页面的语言和地理定位。浏览器可以利用这一提示来选择更合适的页面或提高{{Glossary("SEO", "搜索引擎优化")}}。

它反映 {{HTMLElement("link")}} 元素的 `hreflang` 属性，如果没有 `hreflang` 属性，则该属性的值为空字符串（`""`）。

## 值

包含语言标签的字符串，如果没有 `hreflang` 属性，则为空字符串（`""`）。

## 示例

```html
<link
  rel="alternate"
  href="www.example.com/fr/html"
  hreflang="fr"
  type="text/html"
  title="法语 HTML 页面" />
<p class="tag"></p>
```

```css
.tag {
  margin-left: 20px;
  font: bold;
  font-size: 24px;
}
```

```js
const myLink = document.querySelector("link");
const pTag = document.querySelector(".tag");
pTag.textContent = myLink.hreflang;
```

### 结果

{{EmbedLiveSample("示例",100,100)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLAnchorElement.hreflang")}} 属性
