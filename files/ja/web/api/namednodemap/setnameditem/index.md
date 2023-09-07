---
title: NamedNodeMap.setNamedItem()
slug: Web/API/NamedNodeMap/setNamedItem
l10n:
  sourceCommit: 6f983d8b9fa0081ba57ccab31a345a41ffccbbb1
---

{{APIRef("DOM")}}

**`setNamedItem()`** は {{domxref("NamedNodeMap")}} インターフェイスのメソッドで、名前によって識別される属性 ({{domxref("Attr")}}) をこのマップに設定します。
すでに同じ名前の {{domxref("Attr")}} がこのマップに存在した場合は、_置き換えます_。

## 構文

```js
setNamedItem(attr);
```

### 引数

- `attr`
  - : このマップに挿入する属性です。

### 返値

置き換えた場合は古い属性を返します。属性が新規の場合は `null` です。

### 例外

- `InUseAttributeError` {{domxref("DOMException")}}
  - : この属性が他のマップに所属していた場合に発生します。

## 例

```html
<span one="one" two="two"></span>
<pre test="testValue"></pre>
```

```js
const span = document.getElementsByTagName("span")[0];
const pre = document.getElementsByTagName("pre")[0];
const attrMap = pre.attributes;

let result = `The '<pre>' element initially contains ${attrMap.length} attributes.\n\n`;

result += "We remove `one` from `<span>` and adds it to `<pre>`.\n";
const one = span.attributes.removeNamedItem("one");
attrMap.setNamedItem(one);
result += `The '<pre>' element now contains ${pre.attributes.length} attributes.\n\n`;

result += "We get 'two' from '<span>' and try to adds it to '<pre>'.\n";
const two = span.attributes.getNamedItem("two");
try {
  attrMap.setNamedItem(two);
} catch (e) {
  result += `An exception has been raised: ${e.name}.\n`;
}

pre.textContent = result;
```

{{EmbedLiveSample("Example", "100%", 160)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
