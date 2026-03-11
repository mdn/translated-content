---
title: "console: timeStamp() 静的メソッド"
short-title: timeStamp()
slug: Web/API/console/timeStamp_static
l10n:
  sourceCommit: 5143045a1106f2e415985dec50f11d3cf5d1d4f9
---

{{APIRef("Console API")}}{{Non-standard_header}} {{AvailableInWorkers}}

**`console.timeStamp()`** 静的メソッドは、単一のマーカーをブラウザーのパフォーマンスツール（[Firefox バグ 1387528](https://bugzil.la/1387528), [Chrome](https://developer.chrome.com/docs/devtools/performance/reference)）に追加します。これにより、コード内のポイントを、タイムライン上に記録されたほかのポイント、例えばレイアウトや描画のイベントなどと結びつけることができます。

任意で、引数を指定してタイムラインにラベル付することができ、このラベルはマーカーのそばに表示されます。

一部のブラウザーでは、この `console.timeStamp()` メソッドをさらに拡張し、パフォーマンストレースに反映される拡張性 API の一部として追加のオプション引数を指定することができます。詳細は [Chrome の拡張性 API ドキュメント](https://developer.chrome.com/docs/devtools/performance/extension#inject_your_data_with_consoletimestamp)を参照してください。

## 構文

```js-nolint
console.timeStamp(label);
console.timeStamp(label, start, end, trackName, trackGroup, color, data);
```

### 引数

- `color` {{Optional_Inline}} {{Experimental_Inline}}
  - : 項目の表示色の文字列です。`"primary"`, `"primary-light"`, `"primary-dark"`, `"secondary"`, `"secondary-light"`, `"secondary-dark"`, `"tertiary"`, `"tertiary-light"`, `"tertiary-dark"`, `"error"` のいずれかでなければなりません。

- `data` {{Optional_Inline}} {{Experimental_Inline}}
  - : 追加データを表示させるオブジェクト。一部のブラウザーでは URL は自動的にリンクに変換されることがあります。

- `end` {{Optional_Inline}} {{Experimental_Inline}}
  - : 終了時刻として使用する、事前に定義された `timeStamp` ラベルまたはタイムスタンプ ({{domxref("DOMHighResTimeStamp")}}) を参照する文字列です。

- `label` {{Optional_Inline}}
  - : タイムスタンプのラベルです。

- `start` {{Optional_Inline}} {{Experimental_Inline}}
  - : 開始時刻として使用する、事前に定義された `timeStamp` ラベルまたはタイムスタンプ ({{domxref("DOMHighResTimeStamp")}}) を参照する文字列です。

- `trackName` {{Optional_Inline}} {{Experimental_Inline}}
  - : タイムスタンプデータを表示させるために使用するカスタムトラックの名前

- `trackGroup` {{Optional_Inline}} {{Experimental_Inline}}
  - : タイムスタンプデータを表示させるために使用されるカスタムトラックのグループ

### 返値

なし ({{jsxref("undefined")}})。

## 例

### 基本的な使い方

```js
console.timeStamp("marker 1");
```

### 拡張性 API を使用して表示用の詳細情報を提供する

```js
// 1. リッチデータをつけて期間イベントを作成
const start = performance.now() - 150;
const end = performance.now() - 20;

const durationData = {
  processingTime: `${end - start}ms`,
  info: "Check this URL: https://example.com for more.",
  metrics: {
    items: 5,
    isCached: true,
  },
};

console.timeStamp(
  "My Timed Task", // label
  start, // startTime
  end, // endTime
  "Tasks", // trackName
  "My Extension", // trackGroup
  "tertiary", // color
  durationData, // data (object)
);

// 2. 開発者ツール拡張機能のディープリンクをつけてインスタントイベントを作成
const linkData = {
  url: "ext://resource/123",
  description: "View Resource 123",
  otherDetail: "This data also appears in the JSON viewer",
};

console.timeStamp(
  "Event with Link", // label
  performance.now(), // startTime (instant)
  undefined, // endTime (instant)
  "Tasks", // trackName
  "My Extension", // trackGroup
  "primary-light", // color
  linkData, // data (object)
);
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("console/time_static", "console.time()")}}
- {{domxref("console/timeLog_static", "console.timeLog()")}}
- {{domxref("console/timeEnd_static", "console.timeEnd()")}}
- {{domxref("performance/mark", "performance.mark()")}}
- {{domxref("performance/measure", "performance.measure()")}}
- [コンソール API によるマーカーの追加](https://web.archive.org/web/20211207010020/https://firefox-source-docs.mozilla.org/devtools-user/performance/waterfall/index.html#adding-markers-with-the-console-api)
- [Chrome DevTools extensibility API](https://developer.chrome.com/docs/devtools/performance/extension#inject_your_data_with_consoletimestamp)
