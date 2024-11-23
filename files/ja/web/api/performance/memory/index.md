---
title: "Performance: memory プロパティ"
short-title: memory
slug: Web/API/Performance/memory
l10n:
  sourceCommit: 7b3ccaec4a93584da12939587ea746acaabe30bc
---

{{APIRef("Performance API")}} {{Deprecated_Header}}{{Non-standard_header}}

標準外の古い `performance.memory` プロパティは、ウェブサイトのメモリーフットプリントを測定し縮小するのに役立つ JavaScript ヒープのサイズを返します。

ウェブページが同じヒープを共有している場合、この API が提供する情報は実際のメモリー使用量を過大評価する可能性があり、またウェブページが別個のヒープに割り当てられているワーカーやクロスサイト iframe を使用している場合、実際のメモリー使用量を過小評価する可能性があるため、信頼できないことに注意してください。また「ヒープ」が何を意味しているかは標準化されていません。この API は Chromium ベースのブラウザーでのみ利用できます。

`performance.memory` を置き換える新しい API は {{domxref("Performance.measureUserAgentSpecificMemory()")}} です。これはウェブページが使用するメモリーを推定しようとします。

## 値

読み取り専用の `performance.memory` プロパティは、以下のプロパティを持つオブジェクトです。

- `jsHeapSizeLimit`
  - : このコンテキストで利用できるヒープの最大サイズ（バイト単位）。
- `totalJSHeapSize`
  - : 割り当てられたヒープサイズの合計（バイト単位）。
- `usedJSHeapSize`
  - : JS ヒープの現在アクティブなセグメント。

## 例

### JavaScript ヒープサイズを取得

`performance.memory` を呼び出すと、このようなオブジェクトを返します。

```js
{
  totalJSHeapSize: 39973671,
  usedJSHeapSize: 39127515,
  jsHeapSizeLimit: 4294705152
}
```

## 仕様書

なし。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Performance.measureUserAgentSpecificMemory()")}}
