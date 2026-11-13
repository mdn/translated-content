---
title: "HTMLIFrameElement: name プロパティ"
short-title: name
slug: Web/API/HTMLIFrameElement/name
l10n:
  sourceCommit: e2b1940639d7b81e1205884532acbd0ee5e7ec34
---

{{APIRef("HTML DOM")}}

**`name`** は {{domxref("HTMLIFrameElement")}} インターフェイスプロパティで、{{HTMLElement("iframe")}} 要素の `name` 属性を反映し、`<iframe>` 要素の固有の名前を示す文字列値です。

## 値

文字列です。

## 例

```html
<iframe id="el" name="example"></iframe>
```

```js
const el = document.getElementById("el");
console.log(el.name); // 出力: "example"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
