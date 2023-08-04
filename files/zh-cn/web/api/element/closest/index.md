---
title: Element.closest()
slug: Web/API/Element/closest
---

{{APIRef('Shadow DOM')}}

**`Element.closest()`** 方法用来获取：匹配特定选择器且离当前元素最近的祖先元素（也可以是当前元素本身）。如果匹配不到，则返回 `null`。

## 语法

```
var closestElement = targetElement.closest(selectors);
```

### 参数

- _selectors_ 是指定的选择器，比如 `"p:hover, .toto + q"`。

### 返回值

- _elt_ 是查询到的祖先元素，也可能是 `null`。

### 异常

- `SyntaxError` {{domxref("DOMException")}}
  - : 如果选择器不合法，则抛出该异常。

## 示例

### HTML

```html
<article>
  <div id="div-01">
    Here is div-01
    <div id="div-02">
      Here is div-02
      <div id="div-03">Here is div-03</div>
    </div>
  </div>
</article>
```

### JavaScript

```js
var el = document.getElementById("div-03");

var r1 = el.closest("#div-02");
// 返回 id 为 div-02 的那个元素

var r2 = el.closest("div div");
// 返回最近的拥有 div 祖先元素的 div 祖先元素，这里的话就是 div-03 元素本身

var r3 = el.closest("article > div");
// 返回最近的拥有父元素 article 的 div 祖先元素，这里的话就是 div-01

var r4 = el.closest(":not(div)");
// 返回最近的非 div 的祖先元素，这里的话就是最外层的 article
```

## 兼容

部分浏览器并不支持`Element.closest()`，但却支持了`element.matches()`（或拥有私有前缀，如 IE9+），一个 polyfill 案例：

```js
if (!Element.prototype.matches)
  Element.prototype.matches =
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector;

if (!Element.prototype.closest)
  Element.prototype.closest = function (s) {
    var el = this;
    if (!document.documentElement.contains(el)) return null;
    do {
      if (el.matches(s)) return el;
      el = el.parentElement;
    } while (el !== null);
    return null;
  };
```

然而，如果你需要兼容到 IE8，那么随后这个 polyfill 将会非常缓慢地运行到结束。并且，IE8 只支持 CSS2.1 的选择器，并且使网页运行非常缓慢。

```js
if (window.Element && !Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
      i,
      el = this;
    do {
      i = matches.length;
      while (--i >= 0 && matches.item(i) !== el) {}
    } while (i < 0 && (el = el.parentElement));
    return el;
  };
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

### 兼容性说明

- 当在 Edge 15-18 里使用 `document.createElement(tagName).closest(tagName)` ，如果元素不是第一个（直接地或间接地）连接到上下文对象的话将会返回 `null` ，例如在一般情况下 DOM 中的 [`Document`](/zh-CN/docs/Web/API/Document) 对象。

## 相关链接

- {{domxref("Element")}} 接口。
- [选择器语法](/zh-CN/docs/Web/Guide/CSS/Getting_started/Selectors)
- 其他相关选择器方法：{{domxref("element.querySelector()")}} and {{domxref("element.matches()")}}.
