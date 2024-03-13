---
title: NamedNodeMap.setNamedItemNS()
slug: Web/API/NamedNodeMap/setNamedItemNS
l10n:
  sourceCommit: 8c93f95b9e71b6d43f56e94c49d1b12e81f6ec73
---

{{APIRef("DOM")}}

**`setNamedItemNS()`** は {{domxref("NamedNodeMap")}} インターフェイスのメソッドで、このマップに名前で識別される属性 ({{domxref("Attr")}}) を設定します。
すでに同じ名前の {{domxref("Attr")}} がこのマップに存在した場合は、_置き換えます_。

> **メモ:** このメソッドは `setNamedItem()` の別名であり、入れ替えて使用することができます。

## 構文

```js
setNamedItemNS(attr);
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
<span ob:one="one"></span>
<pre></pre>
```

```js
const parser = new DOMParser();
// ob:one in <span> is not in a namespace, while ob:one in <warning>, is.
const xmlString =
  '<warning ob:one="test" xmlns:ob="http://www.example.com/ob">Beware!</warning>';
const doc = parser.parseFromString(xmlString, "application/xml");

const span = document.getElementsByTagName("span")[0];
const pre = document.getElementsByTagName("pre")[0];
const warning = doc.getElementsByTagName("warning")[0];
const attrMap = span.attributes;

let result = `The '<span>' element initially contains ${attrMap.length} attribute.\n\n`;

result += "We remove `one` from '<span>' and adds it to '<pre>'.\n";
const one = warning.attributes.removeNamedItemNS(
  "http://www.example.com/ob",
  "one",
);
attrMap.setNamedItemNS(one);
result += `The '<span>' element now contains ${span.attributes.length} attributes:\n\n`;
result += "Prefix\tLocal name\tQualified name\n";
result += "=========================================\n";

for (const attr of attrMap) {
  result += `${attr.prefix}\t${attr.localName}\t\t${attr.name}\n`;
}

pre.textContent = result;
```

{{EmbedLiveSample("Example", "100%", 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
