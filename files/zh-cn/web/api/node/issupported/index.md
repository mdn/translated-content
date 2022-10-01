---
title: Node.isSupported
slug: Web/API/Node/isSupported
---

{{ ApiRef() }} {{deprecated_header}}

## 概述

检测当前环境是否在某个节点上实现了指定的 DOM 特性。

## 语法

```plain
node.isSupported(feature, version)
```

- `feature`
  - : 需要检测的特性名称。这个参数和[DOMImplementation](/zh-CN/docs/DOM/document.implementation)对象上的`hasFeature`方法的同名参数作用相同，其中所有有效的特性名称都列在了 DOM Level 2 中的[Conformance 一节](http://www.w3.org/TR/DOM-Level-2-Core/introduction.html#ID-Conformance).
- `version`
  - : 需要检测的特性版本号。在 DOM Level 2 第一版中，这个参数的值应该写为字符串`2.0`.如果省略了这个参数，则无论环境实现了哪个版本的需检测特性，这个方法都会返回`true`.

## 示例

```html
<div id="doc">
</div>

<script>
 // 获取一个元素，然后检查它是否支持 DOM2 HTML 模型。
 var main = document.getElementById('doc');
 var output = main.isSupported('HTML', '2.0');
</script>
```

## 规范

[DOM Level 2 Core: isSupported](http://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-Node-supports)

## Gecko 附注

- 从 Gecko 19.0 {{geckoRelease("19.0")}}开始，该方法的结果总是会返回`true` ({{bug("801425")}}),从 Gecko 22.0 {{geckoRelease("22.0")}}起，该方法被彻底删除。
