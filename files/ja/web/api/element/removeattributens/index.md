---
title: element.removeAttributeNS
slug: Web/API/Element/removeAttributeNS
translation_of: Web/API/Element/removeAttributeNS
---
\<breadcrumbs>\</breadcrumbs>{{ ApiRef("DOM") }}== Summary ==

### 概要

\<code>removeAttributeNS\</code> removes the specified attribute from an element. `removeAttributeNS` 要素から指定の属性を取り除きます。

In Firefox 3 and later, this method resets DOM values to their defaults. Firefox 3 以降ではこのメソッドは DOM の値をデフォルト値にリセットします。== Syntax ==

### 構文

```
element.removeAttributeNS(namespace,attrName);
```

\* \<code>namespace\</code> is a string that contains the namespace of the attribute. \* \<code>attrName\</code> is a string that names the attribute to be removed from the current node.

- `namespace` は属性の名前空間を含んでいる文字列です。
- `attrName` は現在のノードから取り除く属性の名前を表す文字列です。== Example ==

### 例

```
// <div id="div1" xmlns:special="http://www.mozilla.org/ns/specialspace"
//      special:specialAlign="utterleft" width="200px" />
d = document.getElementById("div1");
d.removeAttributeNS("http://www.mozilla.org/ns/specialspace", "specialAlign");
// now: <div id="div1" width="200px" />
```

### 注記

{{ DOMAttributeMethods() }}== Specification ==

### 仕様

[DOM Level 2 Core: removeAttributeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElRemAtNS)
