---
title: NonDocumentTypeChildNode.nextElementSibling
slug: Web/API/Element/nextElementSibling
---

{{ ApiRef() }}

## 概述

**`nextElementSibling`** 返回当前元素在其父元素的子元素节点中的后一个元素节点，如果该元素已经是最后一个元素节点，则返回 `null`, 该属性是只读的。

## 语法

```plain
var nextNode = elementNodeReference.nextElementSibling;
```

## 例子

```plain
<div id="div-01">Here is div-01</div>
<div id="div-02">Here is div-02</div>

<script type="text/javascript">
  var el = document.getElementById('div-01').nextElementSibling;
  document.write('<p>Siblings of div-01</p><ol>');
  while (el) {
    document.write('<li>' + el.nodeName + '</li>');
    el = el.nextElementSibling;
  }
  document.write('</ol>');
</script>
```

上面的例子会输出以下内容：

```plain
Siblings of div-01

   1. DIV
   2. SCRIPT
   3. P
   4. OL
```

## Internet Explorer 8 支持补丁

该属性不支持 IE9 之前的版本，下面的代码片段可以增进对 IE8 的支持：

```plain
// Source: https://github.com/Alhadis/Snippets/blob/master/js/polyfills/IE8-child-elements.js
if(!("nextElementSibling" in document.documentElement)){
    Object.defineProperty(Element.prototype, "nextElementSibling", {
        get: function(){
            var e = this.nextSibling;
            while(e && 1 !== e.nodeType)
                e = e.nextSibling;
            return e;
        }
    });
}
```

## Internet Explorer 9+ 和 Safari 支持补丁

```plain
// Source: https://github.com/jserz/js_piece/blob/master/DOM/NonDocumentTypeChildNode/nextElementSibling/nextElementSibling.md
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('nextElementSibling')) {
      return;
    }
    Object.defineProperty(item, 'nextElementSibling', {
      configurable: true,
      enumerable: true,
      get: function () {
        var el = this;
        while (el = el.nextSibling) {
          if (el.nodeType === 1) {
              return el;
          }
        }
        return null;
      },
      set: undefined
    });
  });
})([Element.prototype, CharacterData.prototype]);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`nextSibling`](/zh-CN/docs/DOM/Node.nextSibling)
- [`childElementCount`](/zh-CN/docs/Web/API/Element/childElementCount)
- [`children`](/zh-CN/docs/DOM/Element.children)
- [`firstElementChild`](/zh-CN/docs/DOM/Element.firstElementChild)
- [`lastElementChild`](/zh-CN/docs/DOM/Element.lastElementChild)
- [`previousElementSibling`](/zh-CN/docs/Web/API/Element/previousElementSibling)
