---
title: Document.releaseCapture()
slug: Web/API/Document/releaseCapture
---

{{ApiRef("DOM")}}

**`releaseCapture()`** メソッドは、この文書内の要素でマウスキャプチャが有効になっている場合、それを解除します。
マウスキャプチャが解除されると、キャプチャが有効になっている要素に全てのマウスイベントが送られるという状態は解除されます。

ある要素でマウスキャプチャを有効にするには {{domxref("element.setCapture()")}} を呼び出すことで行われます。

## 構文

```js
releaseCapture();
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

[例](/ja/docs/Web/API/Element/setCapture#例) については {{domxref("element.setCapture()")}} で確認してください。

## 仕様書

Internet Explorer の実装に基づく。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("element.setCapture()")}}
