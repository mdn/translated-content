---
title: console.timeEnd()
slug: Web/API/console/timeEnd
l10n:
  sourceCommit: 71aac3e50b8bc5afea791d69d232dab98e1c5c0d
---

{{APIRef("Console API")}}

**`console.timeEnd()`** は、以前 {{domxref("console.time()")}} の呼び出しで開始したタイマーを停止します。

詳細や使用例については、ドキュメントの[タイマー](/ja/docs/Web/API/console#タイマー)を参照して下さい。

{{AvailableInWorkers}}

## 構文

```js
timeEnd(label);
```

### 引数

- `label`
  - : 停止するタイマーの名前です。停止させると、経過時間が自動的に[ウェブコンソール](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)に停止した時刻を示すインジケーターと共に表示されます。

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

![](timer_output.png)

タイマーの名前は `timeLog()` を使ってタイマーの値を記録するときに表示され、停止するときに再び表示されることに注意してください。さらに、 timeEnd() の呼び出しは、タイマーが時間を追跡しなくなったことを明確にするために、 "timer ended" という追加の情報を持っています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
