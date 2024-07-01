---
title: Window.fullScreen
slug: Web/API/Window/fullScreen
---

{{APIRef}}{{Non-standard_Header}}

**`fullScreen`** は `Window` インターフェイスのプロパティで、そのウィンドウが全画面モードで表示されているかどうかを示します。

## 構文

```
isInFullScreen = windowRef.fullScreen;
```

クローム特権があればこのプロパティは読み書き可能で、それ以外では読み取り専用です。クローム特権なしでこのプロパティを設定しようとすると、例外は発生せず、ただ暗黙に失敗することに注意してください。これは、 Internet Explorer でこのプロパティを設定するように設計されたスクリプトが壊れるのを防ぐためです。

### 返値

- `isInFullScreen`
  - : 論理値。取り得る値は次の通りです。

<!---->

- `true`: そのウィンドウは全画面モードです。
- `false`: そのウィンドウは全画面モードではありません。

## 注

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
