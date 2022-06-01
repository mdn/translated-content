---
title: console.timeStamp()
slug: Web/API/console/timeStamp
tags:
  - API
  - DOM
  - デバッグ
  - メソッド
  - 標準外
  - ウェブ開発
  - ウェブコンソール
browser-compat: api.console.timeStamp
translation_of: Web/API/Console/timeStamp
---
{{APIRef("Console API")}}{{Non-standard_header}}

**`console.timeStamp`** メソッドは、単一のマーカーをブラウザーの[パフォーマンス](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference)または[ウォーターフォール](/ja/docs/Tools/Performance/Waterfall)ツールに追加します。これにより、コード内のポイントを、タイムライン上に記録されたほかのポイント、例えばレイアウトや描画のイベントなどと結びつけることができます。

任意で、引数を指定してタイムラインにラベル付することができ、このラベルはマーカーのそばに表示されます。

{{AvailableInWorkers}}

## 構文

```js
console.timeStamp(label);
```

## 引数

- `label`
  - : タイムスタンプのラベル。省略可能です。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("console.time()")}}
- {{domxref("console.timeEnd()")}}
- [ウォーターフォールにタイムスタンプを追加](/ja/docs/Tools/Performance/Waterfall#timestamp_markers)
