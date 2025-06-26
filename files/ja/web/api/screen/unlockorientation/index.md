---
title: "Screen: unlockOrientation() メソッド"
short-title: unlockOrientation()
slug: Web/API/Screen/unlockOrientation
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Screen Orientation API")}}{{Deprecated_Header}}

**`Screen.unlockOrientation()`** メソッドは、ページやアプリによって設定されているすべての画面のロックを除去します。代わりに {{DOMxRef("ScreenOrientation.unlock()")}} を使用してください。

> [!WARNING]
> この機能は非推奨であり、代わりに {{DOMxRef("ScreenOrientation.unlock()")}} メソッドを使用してください。

> [!NOTE]
> このメソッドはインストールされたウェブアプリまたは[全画面モード](/ja/docs/Web/API/Fullscreen_API)のウェブページでのみ動作します。

## 構文

```js-nolint
unlockOrientation()
```

### 引数

なし。

### 返値

向きの固定の解除が成功した場合に `true` が、解除されなかった場合に `false` が返されます。

## 例

```js
const unlockOrientation =
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

代わりに {{domxref("ScreenOrientation.unlock()")}} を使用してください。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("Screen.orientation")}}
- {{DOMxRef("Screen.lockOrientation()")}}
- {{DOMxRef("Screen.orientationchange_event", "orientationchange")}} イベント
- [画面の向きの制御](/ja/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
