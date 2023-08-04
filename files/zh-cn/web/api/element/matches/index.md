---
title: Element.matches()
slug: Web/API/Element/matches
---

{{APIRef("DOM")}}

如果元素被指定的选择器字符串选择，**`Element.matches()`** 方法返回 true; 否则返回 false。

> **警告：** 有一些浏览器使用前缀，在非标准名称 matchesSelector () 下实现了这个方法！

## 语法

```
let result = element.matches(selectorString);
```

- `result` 的值为 `true` 或 `false`.
- `selectorString` 是个 css 选择器字符串。

## 例子

```html
<ul id="birds">
  <li>Orange-winged parrot</li>
  <li class="endangered">Philippine eagle</li>
  <li>Great white pelican</li>
</ul>

<script type="text/javascript">
  var birds = document.getElementsByTagName("li");

  for (var i = 0; i < birds.length; i++) {
    if (birds[i].matches(".endangered")) {
      console.log("The " + birds[i].textContent + " is endangered!");
    }
  }
</script>
```

```js
<div id="foo">This is the element!</div>
  <script type="text/javascript">
    var el = document.getElementById("foo");
    if (el.mozMatchesSelector("div")) {
      alert("Match!");
    }
  </script>
```

会显示弹出框，因为"div"选择器可以选择到 el 元素。

## 异常

- `SYNTAX_ERR`
  - : 如果给定的 css 选择器无效。在 Gecko 2.0 之前，该方法会返回`false,2.0 之后`,会直接抛出异常。

## 替代方案 (Polyfill)

对于不支持 `Element.matches()` 或`Element.matchesSelector()，但支持`document.querySelectorAll() 方法的`浏览器，存在以下替代方案`

```js
if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.matchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    Element.prototype.oMatchesSelector ||
    Element.prototype.webkitMatchesSelector ||
    function (s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s),
        i = matches.length;
      while (--i >= 0 && matches.item(i) !== this) {}
      return i > -1;
    };
}
```

> 关于 Polyfill 的补充：
>
> - [Polyfill Wikipedia](http://en.wikipedia.org/wiki/Polyfill)
> - [What are Polyfills in Javascript ?](http://www.moreonfew.com/what-are-polyfills-in-javascript/)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
