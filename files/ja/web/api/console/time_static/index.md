---
title: "console: time() 静的メソッド"
short-title: time()
slug: Web/API/console/time_static
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

**`console.time()`** 静的メソッドは、長い処理がどれくらいかかるかを計測することができるタイマーを起動します。それぞれのタイマーに固有の名前を付けると、そのページに 10,000 個までのタイマーを実行させることができます。同じ名前を引数として {{domxref("console/timeEnd_static", "console.timeEnd()")}} を呼び出すと、タイマー開始からの経過時間がミリ秒単位で出力されます。

詳細や使用例については、[タイマー](/ja/docs/Web/API/console#タイマー)（ {{domxref("console")}} ページ）を参照して下さい。

## 構文

```js-nolint
console.time()
console.time(label)
```

### 引数

- `label` {{optional_inline}}
  - : 新しいタイマーに付ける名前を表す文字列。これによりタイマーが識別されます。タイマーを停止し、時間をコンソールで取得するには、{{domxref("console/timeEnd_static", "console.timeEnd()")}} を呼び出す際に同じ名前を使用してください。省略した場合、ラベル `"default"` が使用されます。

### 返値

なし ({{jsxref("undefined")}})。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 例については {{domxref("console/timeLog_static", "console.timeLog()")}} と {{domxref("console/timeEnd_static", "console.timeEnd()")}} を参照
- [Microsoft Edge's documentation for `console.time()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/api#time)
- [Node.js documentation for `console.time()`](https://nodejs.org/docs/latest/api/console.html#consoletimelabel)
- [Google Chrome's documentation for `console.time()`](https://developer.chrome.com/docs/devtools/console/api/#time)
