---
title: HTMLMediaElement.loop
slug: Web/API/HTMLMediaElement/loop
l10n:
  sourceCommit: a36633398f827c87eb593f9647ed00bf33fd5b34
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.loop`** プロパティは、 HTML の {{htmlattrxref("loop", "video")}} 属性を反映し、メディア要素が最後に到達したときに最初からやり直すかどうかを制御します。

## 値

論理値です。

## 例

```js
const obj = document.createElement('video');
obj.loop = true; // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 定義している {{domxref("HTMLMediaElement")}} インターフェイス
