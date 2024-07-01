---
title: Screen.unlockOrientation()
slug: Web/API/Screen/unlockOrientation
---

{{APIRef("Screen Orientation API")}}{{Deprecated_Header}}

**`Screen.unlockOrientation()`** メソッドは、ページやアプリによって設定されているすべての画面のロックを除去します。代わりに {{DOMxRef("ScreenOrientation.unlock()")}} を使用してください。

> **警告:** この機能は非推奨であり、代わりに {{DOMxRef("ScreenOrientation.unlock()")}} メソッドを使用してください。

> **メモ:** このメソッドはインストールされたウェブアプリまたは[全画面モード](/ja/docs/Web/Guide/DOM/Using_full_screen_mode)のウェブページでのみ動作します。

## 構文

```js
unlockOrientation();
```

### 引数

なし。

### 返値

向きの固定の解除が成功した場合に `true` が、解除されなかった場合に `false` が返されます。

## 例

```js
var unlockOrientation =
  screen.unlockOrientation ||
  screen.mozUnlockOrientation ||
  screen.msUnlockOrientation ||
  (screen.orientation && screen.orientation.unlock);

if (unlockOrientation()) {
  // 向きのロックが解除されました
} else {
  // 向きのロックの解除に失敗しました
}
```

## 仕様書

この機能は、どの仕様書にも含まれていません。標準化される予定はありません。

代わりに {{domxref("ScreenOrientation.lock()")}} を使用してください。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("Screen.orientation")}}
- {{DOMxRef("Screen.lockOrientation()")}}
- {{DOMxRef("Screen.orientationchange_event", "orientationchange")}} イベント
- [画面の向きの制御](/ja/docs/Managing_screen_orientation)
