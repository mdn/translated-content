---
title: console.timeStamp()
slug: Web/API/console/timeStamp
l10n:
  sourceCommit: a6c0c23f7972d85c4bdba384f79c9c6a79f07c13
---

{{APIRef("Console API")}}{{Non-standard_header}}

**`console.timeStamp`** メソッドは、単一のマーカーをブラウザーのパフォーマンスツール（[Firefox](https://profiler.firefox.com/docs/#/), [Chrome](https://developer.chrome.com/docs/devtools/evaluate-performance/reference/)）に追加します。これにより、コード内のポイントを、タイムライン上に記録されたほかのポイント、例えばレイアウトや描画のイベントなどと結びつけることができます。

任意で、引数を指定してタイムラインにラベル付することができ、このラベルはマーカーのそばに表示されます。

{{AvailableInWorkers}}

## 構文

```js
timeStamp(label);
```

## 引数

- `label`
  - : タイムスタンプのラベル。省略可能です。

### 返値

なし ({{jsxref("undefined")}})。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("console.time()")}}
- {{domxref("console.timeEnd()")}}
- [コンソール API によるマーカーの追加](https://web.archive.org/web/20211207010020/https://firefox-source-docs.mozilla.org/devtools-user/performance/waterfall/index.html#adding-markers-with-the-console-api)
