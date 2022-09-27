---
title: HTMLMediaElement.controls
slug: Web/API/HTMLMediaElement/controls
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.controls`** プロパティは、 HTML の {{htmlattrxref("controls", "video")}} 属性を反映し、メディア項目を再生するためのユーザーインターフェイスのコントロールを表示するかどうかを制御します。

## 値

論理値です。値が `true` の場合、コントロールが表示されます。

## 例

```js
var obj = document.createElement('video');
obj.controls = true;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- これを定義しているインターフェイスである {{domxref("HTMLMediaElement")}}
