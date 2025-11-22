---
title: "Window: fullScreen プロパティ"
short-title: fullScreen
slug: Web/API/Window/fullScreen
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}{{Non-standard_Header}}

**`fullScreen`** は `Window` インターフェイスのプロパティで、そのウィンドウが全画面モードで表示されているかどうかを示します。

## 値

論理値で、`true` はこのウィンドウが全画面モードであることを示し、`false` はそうでないことを示します。

## メモ

- 通常のウィンドウと全画面との間で切り替えが行われると、 "resize" イベントが該当するウィンドウで発生します。

## 例

```js
if (window.fullScreen) {
  // 全画面モード
} else {
  // 全画面モードではない
}
```

## ブラウザーの互換性

{{Compat}}
