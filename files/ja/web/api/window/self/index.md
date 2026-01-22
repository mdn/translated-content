---
title: "Window: self プロパティ"
short-title: self
slug: Web/API/Window/self
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

**`Window.self`** 読み取り専用プロパティは、{{glossary("WindowProxy")}} のように、ウィンドウ自身を返します。`window` オブジェクトでドット表記法 (つまり、`window.self`) を使用して使うことも、単独 (`self`) で使うこともできます。単独表記法を使用する利点は、{{domxref("Worker", "ウェブワーカー")}}のようなウィンドウコンテキスト以外にも同様の表記法が存在することです。`self` を使用することで、ウィンドウコンテキスト (`self` は `window.self` として解決されます) だけでなく、ワーカーコンテキスト (`self` は {{domxref("WorkerGlobalScope.self")}} として解決されます) でも機能するようにグローバルスコープを参照できます。

## 値

{{glossary("WindowProxy")}} オブジェクトです。

## 例

次のような `window.self` の使い方は、`window` に置き換えることもできます。

```js
if (window.parent.frames[0] !== window.self) {
  // このウィンドウは、一覧における一番最初のフレームではありません。
}
```

さらに、閲覧コンテキストのアクティブな文書で実行するとき、`window` は現在のグローバルオブジェクトを参照するため、以下のものはすべて等価です。

```js
const w1 = window;
const w2 = self;
const w3 = window.window;
const w4 = window.self;
// w1, w2, w3, w4 は厳密に等価、しかし w2 だけは worker で動作します。
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連

- この `Worker` は {{domxref("WorkerGlobalScope.self")}} と同等
