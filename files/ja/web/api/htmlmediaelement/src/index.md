---
title: HTMLMediaElement.src
slug: Web/API/HTMLMediaElement/src
l10n:
  sourceCommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.src`** プロパティは、 HTML のメディア要素の `src` 属性の値を反映します。これは、要素で使用するメディアリソースの URL を示します。

> **メモ:** この要素が現在実際に使用しているメディアリソースの URL を知る最善の方法は、{{domxref("HTMLMediaElement.currentSrc", "currentSrc")}} 属性の値を調べることです。 これは、（{{HTMLElement("source")}} 要素を表す）{{domxref("HTMLSourceElement")}} で提供されるリストからの最良または優先メディアリソースの選択も考慮されます。

## 値

文字列で、要素で使用するメディアリソースの URL を表します。このプロパティは HTML 要素の `src` 属性の値を反映します。

## 例

```js
const obj = document.createElement('video');
console.log(obj.src); // ""
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 定義している {{domxref("HTMLMediaElement")}} インターフェイス
