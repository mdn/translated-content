---
title: "HTMLMediaElement: src プロパティ"
short-title: src
slug: Web/API/HTMLMediaElement/src
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.src`** プロパティは、 HTML のメディア要素の `src` 属性の値を反映します。これは、要素で使用するメディアリソースの URL を示します。

> [!NOTE]
> この要素が現在実際に使用しているメディアリソースの URL を知る最善の方法は、{{domxref("HTMLMediaElement.currentSrc", "currentSrc")}} 属性の値を調べることです。 これは、（{{HTMLElement("source")}} 要素を表す）{{domxref("HTMLSourceElement")}} で提供されるリストからの最良または優先メディアリソースの選択も考慮されます。

## 値

文字列で、要素で使用するメディアリソースの URL を表します。このプロパティは HTML 要素の `src` 属性の値を反映します。

## 例

```js
const obj = document.createElement("video");
console.log(obj.src); // ""
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLMediaElement")}}: `HTMLMediaElement.src` プロパティを定義しているインターフェイス
