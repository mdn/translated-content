---
title: "WorkerGlobalScope: setInterval() メソッド"
short-title: setInterval()
slug: Web/API/WorkerGlobalScope/setInterval
l10n:
  sourceCommit: 29d6bb944a1c1fe42eb9957e2a6e5b4f85a2656e
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

**`setInterval()`** は {{domxref("WorkerGlobalScope")}} インターフェイスのメソッドで、一定の間隔を置いて関数やコードスニペットを繰り返し呼び出します。

このメソッドは、ウィンドウコンテキストでも利用できます。 `setInterval()` の詳細については、 {{domxref("Window.setInterval()")}} ページをご覧ください。

## 構文

```js-nolint
setInterval(code)
setInterval(code, delay)

setInterval(func)
setInterval(func, delay)
setInterval(func, delay, arg1)
setInterval(func, delay, arg1, arg2)
setInterval(func, delay, arg1, arg2, /* …, */ argN)
```

### 引数

- `func`
  - : `delay` ミリ秒が経過するたびに実行する{{jsxref("function", "関数")}}です。最初の実行は `delay` ミリ秒後に行われます。
- `code`
  - : 関数の代わりに文字列を含める構文も許容されており、 `delay` ミリ秒が経過するたびに文字列をコンパイルして実行します。
    この構文は**推奨しません**。{{jsxref("Global_Objects/eval", "eval()")}} の使用にセキュリティ上のリスクがあるのと同じ理由です。
- `delay` {{optional_inline}}
  - : 指定した関数またはコードを実行する前にタイマーが待つべき時間をミリ秒 (1/1000 秒) 単位で指定します。指定されなかった場合の既定値は 0 です。
    `delay` 値で許される範囲についての詳細は、[待ち時間の制約](/ja/docs/Web/API/Window/setInterval#待ち時間の制約)をご覧ください。
- `arg1`, …, `argN` {{optional_inline}}
  - : タイマーが満了したときに、 _func_ で指定した関数に渡す追加の引数です。

### 返値

`setInterval()` メソッドは、呼び出しによって作成されたインターバルタイマーを一意に識別する正の整数（通常は 1 から 2,147,483,647 の範囲）を返します。この識別子は、よく「インターバル ID」と呼ばれ、 {{domxref("Window.clearInterval", "clearInterval()")}} に渡すことで、指定した関数の反復実行を停止することができます。

同じグローバル環境（特定のウィンドウやワーカーなど）では、元のタイマーがアクティブである限り、インターバル ID は確実に一意となり、新しいインターバルタイマーには再利用されません。ただし、グローバル環境が異なると、それぞれ独立したインターバル ID のプールが管理されます。

`setInterval()` と {{domxref("Window.setTimeout", "setTimeout()")}} は同じ ID プールを共有しており、 `clearInterval()` と {{domxref("Window.clearTimeout", "clearTimeout()")}} は技術的に入れ替えて使用できることに注意してください。
ただし明確さのために、コードを整備するときは混乱を避けるため、常に一致させるようにするべきです。

> [!NOTE]
> 引数 `delay` は、符号付き 32 ビット整数に変換されます。
> IDL における符号付き整数の定義によって、`delay` は事実上 2147483647ms、およそ 24.8 日に制限されます。

## 例

例については {{domxref("Window.setInterval", "setInterval()")}} を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`setInterval` のポリフィルで、コールバックに引数を渡すことができるもの (`core-js`)](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- {{domxref("Window.setInterval()")}}
- {{domxref("WorkerGlobalScope.clearInterval()")}}
- {{domxref("WorkerGlobalScope.setTimeout()")}}
- {{domxref("DedicatedWorkerGlobalScope.requestAnimationFrame()")}}
