---
title: "Window: setImmediate() メソッド"
short-title: setImmediate()
slug: Web/API/Window/setImmediate
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML DOM")}} {{deprecated_header}}{{non-standard_header}}

このメソッドは、長時間実行される操作を分割し、ブラウザーの他の操作（イベントや表示の更新など）が完了した直後にコールバック関数を実行するために使用されます。

## 構文

```js-nolint
setImmediate(func)
setImmediate(func, param1)
setImmediate(func, param1, param2)
setImmediate(func, param1, param2, /* …, */ paramN)
```

### 引数

- `func`
  - : 呼び出したい関数。

- `param1`, …, `paramN`
  - : すべての引数は直接関数に渡されます。

### 返値

後で {{DOMxRef("window.clearImmediate")}} に使用できる即時タスクの ID です。

## メモ

{{DOMxRef("Window.clearImmediate", "clearImmediate()")}} メソッドをを使用して、{{DOMxRef("Window.setTimeout", "setTimeout()")}} に対する {{DOMxRef("Window.clearTimeout", "clearTimeout()")}} と同様に、即時実行アクションをクリアすることができます。

このメソッドは `setTimeout(fn, 0)` メソッドの代わりに、[重い処理](https://humanwhocodes.com/blog/2009/08/11/timed-array-processing-in-javascript/) を実行するために使用できます。

この機能はいくつかの異なる方法でエミュレートできます。

- {{DOMxRef("Window.postMessage", "postMessage()")}} は、即時だが実行を中断するコールバックを起動するために使用できます。
- {{DOMxRef("MessageChannel")}} は ウェブワーカーの中では確実に使用できますが、postMessage はその意味論上、そこで使用することはできません。
- `setTimeout(fn, 0)` は理論上使用可能ですが、 [HTML 仕様書によれば](https://html.spec.whatwg.org/multipage/webappapis.html#timers)、5 階層以上ネストされたタイマーは 4 msに制限されるため、`setImmediate`の自然な即時性を実現するポリフィルとしては適していません。

これらの技術はすべて、[堅牢な setImmediate のポリフィル](https://github.com/YuzuJS/setImmediate)に組み込まれています。

## 仕様書

現行の仕様の一部ではありません。
[効率的なスクリプト生成](https://w3c.github.io/setImmediate/#si-setImmediate)仕様は、既に開発が終了しています。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`setImmediate` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#setimmediate)
- [Microsoft の `setImmediate` API デモ](https://jphpsf.github.io/setImmediate-shim-demo/)
- {{DOMxRef("Window.clearImmediate()")}}
- {{DOMxRef("Window.requestIdleCallback()")}}
