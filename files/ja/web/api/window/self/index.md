---
title: window.self
slug: Web/API/Window/self
---

{{ APIRef() }}

**`Window.self`** 読み取り専用プロパティは、{{domxref("WindowProxy")}} のように、ウィンドウ自身を返します。`window` オブジェクトでドット表記法 (つまり、`window.self`) を使用して使うことも、単独 (`self`) で使うこともできます。単独表記法を使用する利点は、{{domxref("Worker", "Web Workers")}} のような非 window コンテクストにも同様の表記法が存在することです。`self` を使用することで、window コンテキスト (`self` は `window.self` として解決されます) だけでなく、worker コンテキスト (`self` は {{domxref("WorkerGlobalScope.self")}} として解決されます) でも機能するようにグローバルスコープを参照できます。

## 構文

```
var w = window.self;  // w === window
```

## 例

次のような `window.self` の使い方は、`window` に置き換えることもできます。

```js
if (window.parent.frames[0] != window.self) {
  // このウィンドウは、一覧における一番最初のフレームではありません。
}
```

さらに、ブラウジングコンテクストのアクティブなドキュメントで実行するとき、`window` は現在のグローバルオブジェクトを参照するため、以下のものはすべて等価です:

```js
var w1 = window;
var w2 = self;
var w3 = window.window;
var w4 = window.self;
// w1, w2, w3, w4 は厳密に等価、しかし w2 だけは worker で動作します。
```

## 仕様

{{Specifications}}

## ブラウザー互換性

{{Compat}}

## 関連

- この `Worker` は {{domxref("WorkerGlobalScope.self")}} と等しい。
