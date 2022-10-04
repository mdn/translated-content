---
title: Navigator.productSub
slug: Web/API/Navigator/productSub
---

{{ ApiRef("HTML DOM") }}

**`Navigator.productSub`** 只读属性返回当前浏览器的编译版本号。

## 语法

```plain
prodSub = window.navigator.productSub
```

- `prodSub`是一个字符串。

## 例子

```js
<script>
function prodsub() {
  var dt = document.getElementById("d").childNodes[0];
  dt.data = window.navigator.productSub;
}
</script>

<button onclick="prodsub();">productSub</button>
// returns: 20010725
```

## 注释

在 IE 上，这个属性返回 undefined。

在苹果 Safari 上和 Google 的 Ghrome 上这个属性总是返回 20030107。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
