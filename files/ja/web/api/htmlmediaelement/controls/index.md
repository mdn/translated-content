---
title: "HTMLMediaElement: controls プロパティ"
short-title: controls
slug: Web/API/HTMLMediaElement/controls
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.controls`** プロパティは、 HTML の [`controls`](/ja/docs/Web/HTML/Reference/Elements/video#controls) 属性を反映し、メディアアイテムを再生するためのユーザーインターフェイスのコントロールを表示するかどうかを制御します。

## 値

論理値です。値が `true` の場合、コントロールが表示されます。

## 例

```js
const obj = document.createElement("video");
obj.controls = true;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLMediaElement")}}: `HTMLMediaElement.controls` プロパティを定義しているインターフェイス
