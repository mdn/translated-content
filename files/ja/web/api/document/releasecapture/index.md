---
title: "Document: releaseCapture() メソッド"
short-title: releaseCapture()
slug: Web/API/Document/releaseCapture
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ApiRef("DOM")}}{{Non-standard_header}}

**`releaseCapture()`** メソッドは、この文書内の要素でマウスキャプチャが有効になっている場合、それを解除します。
マウスキャプチャが解除されると、キャプチャが有効になっている要素に全てのマウスイベントが送られるという状態は解除されます。

ある要素でマウスキャプチャを有効にするには {{domxref("element.setCapture()")}} を呼び出すことで行われます。

## 構文

```js-nolint
releaseCapture()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

[例](/ja/docs/Web/API/Element/setCapture#例) については {{domxref("element.setCapture()")}} で確認してください。

## 仕様書

どの仕様書にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("element.setCapture()")}}
