---
title: "HTMLMediaElement: loop プロパティ"
short-title: loop
slug: Web/API/HTMLMediaElement/loop
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.loop`** プロパティは、 HTML の [`loop`](/ja/docs/Web/HTML/Reference/Elements/video#loop) 属性を反映し、メディア要素が最後に到達したときに最初からやり直すかどうかを制御します。

## 値

論理値です。

## 例

```js
const obj = document.createElement("video");
obj.loop = true; // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLMediaElement")}}: `HTMLMediaElement.loop` プロパティを定義しているインターフェイス
