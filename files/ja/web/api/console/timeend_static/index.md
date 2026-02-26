---
title: "console: timeEnd() 静的メソッド"
short-title: timeEnd()
slug: Web/API/console/timeEnd_static
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

**`console.timeEnd()`** は、以前 {{domxref("console/time_static", "console.time()")}} の呼び出しで開始したタイマーを停止します。

詳細や使用例については、ドキュメントの[タイマー](/ja/docs/Web/API/console#タイマー)を参照して下さい。

## 構文

```js-nolint
console.timeEnd()
console.timeEnd(label)
```

### 引数

- `label` {{optional_inline}}
  - : 停止するタイマーの名前です。停止すると、経過時間が自動的にコンソールに表示され、時間が終了したことを示すインジケーターも表示されます。省略された場合、ラベル "default" が使用されます。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff…");
console.timeEnd("answer time");
```

上記の例の出力結果は、ユーザーが最初のアラートボックスを解除するのにかかった時間と、その後に 2 番目のアラートを解除するのにかかった時間を示します。

![Firefox コンソールにおけるタイマー出力](timer_output.png)

`console.timeLog()` を使用してタイマー値を記録する際と、タイマーが停止した際に、タイマー名が表示されることに注意してください。さらに、`console.timeEnd()` の呼び出しには「タイマー終了」という追加情報が表示され、タイマーが時間を計測できなくなったことが明確になります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- その他の例は {{domxref("console/timeLog_static", "console.timeLog()")}} を参照
- {{domxref("console/time_static", "console.time()")}}
- [Microsoft Edge's documentation for `console.timeEnd()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/api#timeend)
- [Node.js documentation for `console.timeEnd()`](https://nodejs.org/docs/latest/api/console.html#consoletimeendlabel)
- [Google Chrome's documentation for `console.timeEnd()`](https://developer.chrome.com/docs/devtools/console/api/#timeend)
