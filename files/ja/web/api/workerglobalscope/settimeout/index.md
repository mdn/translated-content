---
title: "WorkerGlobalScope: setTimeout() メソッド"
short-title: setTimeout()
slug: Web/API/WorkerGlobalScope/setTimeout
l10n:
  sourceCommit: 29d6bb944a1c1fe42eb9957e2a6e5b4f85a2656e
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

**`setTimeout()`** は {{domxref("WorkerGlobalScope")}} インターフェイスのメソッドで、時間切れになると、関数または指定されたコードの断片を実行するタイマーを設定します。

## 構文

```js-nolint
setTimeout(code)
setTimeout(code, delay)

setTimeout(functionRef)
setTimeout(functionRef, delay)
setTimeout(functionRef, delay, param1)
setTimeout(functionRef, delay, param1, param2)
setTimeout(functionRef, delay, param1, param2, /* …, */ paramN)
```

### 引数

- `functionRef`
  - : タイマーが満了した後に実行する{{jsxref("function", "関数")}}。
- `code`
  - : 関数の代わりに文字列を含める代替構文も許容されており、タイマーが満了したときに文字列をコンパイルして実行します。 {{jsxref("Global_Objects/eval", "eval()")}} の使用にリスクがあるのと同じ理由で、この構文は**推奨しません**。
- `delay` {{optional_inline}}
  - : 指定した関数やコードを実行する前に待つタイマーの時間をミリ秒 (1/1000 秒) 単位で指定します。この引数を省略すると値 0 を使用しますので「直ちに」実行する、より正確に言えばできるだけ早く実行することを意味します。

    なお、どちらの場合も、実際の待ち時間が想定より長くなることがあります。後述する[待ち時間が指定値より長い理由](/ja/docs/Web/API/Window/setTimeout#待ち時間が指定値より長い理由)をご覧ください。

    また、値が数値でない場合、暗黙のうちに[型変換](/ja/docs/Glossary/Type_coercion)が行われ、数値に変換されることにも注意してください。これは予期しない、驚くべき結果につながる可能性があります。例として、[delay の値が数値でない場合は暗黙に数値に強制される](/ja/docs/Web/API/Window/setTimeout#delay_の値が数値でない場合は暗黙に数値に強制される)を参照してください。

- `param1`, …, `paramN` {{optional_inline}}
  - : タイマーが満了したときに、 `functionRef` で指定された関数に渡す追加の引数です。

### 返値

`setTimeout()` メソッドは、呼び出しによって作成されたタイマーを一意に識別する正の整数（通常は 1 から 2,147,483,647 の範囲）を返します。この識別子は、よく「タイムアウト ID」と呼ばれ、 {{domxref("Window.clearTimeout","clearTimeout()")}} に渡すことで、タイマーを停止することができます。

同じグローバル環境（特定のウィンドウやワーカーなど）では、元のタイマーがアクティブである限り、タイムアウト ID は確実に一意となり、新しいタイマーには再利用されません。ただし、グローバル環境が異なると、それぞれ独立したタイマー ID のプールが管理されます。

## 解説

詳しい説明は {{domxref("Window.setTimeout()")}} を参照してください。

## 例

例については {{domxref("Window.setTimeout()")}} を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`setTimeout` のポリフィルで、コールバックに引数を渡すことができるもの (`core-js`)](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- {{domxref("Window.setTimeout()")}}
- {{domxref("WorkerGlobalScope.clearTimeout()")}}
- {{domxref("WorkerGlobalScope.setInterval()")}}
- {{domxref("DedicatedWorkerGlobalScope.requestAnimationFrame()")}}
- {{domxref("WorkerGlobalScope.queueMicrotask()")}}
