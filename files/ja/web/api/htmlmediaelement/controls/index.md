---
title: HTMLMediaElement.controls
slug: Web/API/HTMLMediaElement/controls
l10n:
  sourceCommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.controls`** プロパティは、 HTML の {{htmlattrxref("controls", "video")}} 属性を反映し、メディア項目を再生するためのユーザーインターフェイスのコントロールを表示するかどうかを制御します。

## 値

論理値です。値が `true` の場合、コントロールが表示されます。

## 例

```js
const obj = document.createElement('video');
obj.controls = true;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- これを定義しているインターフェイスである {{domxref("HTMLMediaElement")}}
