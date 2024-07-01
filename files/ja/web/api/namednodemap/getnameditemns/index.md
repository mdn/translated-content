---
title: NamedNodeMap.getNamedItemNS()
slug: Web/API/NamedNodeMap/getNamedItemNS
l10n:
  sourceCommit: 9ce57d5046baf5d25c8eb066e60227f0fbd017cf
---

{{APIRef("DOM")}}

**`getNamedItemNS()`** は {{domxref("NamedNodeMap")}} インターフェイスのメソッドで、指定された名前空間の指定されたローカル名に対応する {{domxref("Attr")}} を返します。対応する属性がない場合は `null` を返します。

## 構文

```js
getNamedItemNS(namespace, localName);
```

### 引数

- `namespace`
  - : 文字列で、希望する属性の名前空間 URI です。
    > **警告:** `namespace` は名前空間の URI であり、接頭辞ではありません。
- `localName`
  - : 文字列で、希望する属性のローカル名です。

### 返値

引数で与えられた名前空間とローカル名に対応する {{domxref("Attr")}} です。見つからない場合は `null` です。

## 例

```html hidden
<pre></pre>
```

```js
const parser = new DOMParser();
const xmlString =
  '<warning ob:one="test" xmlns:ob="http://www.example.com/ob">Beware!</warning>';
const doc = parser.parseFromString(xmlString, "application/xml");

const pre = document.getElementsByTagName("pre")[0];
const warning = doc.getElementsByTagName("warning")[0];

const attrMap = warning.attributes;

pre.textContent = `The 'ob:one' attribute contains: ${
  attrMap.getNamedItemNS("http://www.example.com/ob", "one").value
}.`;
```

{{EmbedLiveSample("Example", "100%", 80)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
