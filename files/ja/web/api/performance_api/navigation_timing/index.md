---
title: ナビゲーションタイミング
slug: Web/API/Performance_API/Navigation_timing
l10n:
  sourceCommit: 6af9224dbbd5263ffa46dd63e742cd2471e46f95
---

{{DefaultAPISidebar("Performance API")}}

ナビゲーションタイミングは、パフォーマンスAPI の一部であり、1 つのページから別のページへの移動に関連する測定基準を指定します。例えば、文書内の読み込みまたは読み込み解除に要する時間を決定したり、{{Glossary("DOM")}} の構築が完了し、DOM 操作が可能な状態になるまでの時間を記録したりすることができます。

現在の文書のみが含まれているため、通常は観察するオブジェクトは {{domxref("PerformanceNavigationTiming")}} の 1 つだけです。これは、 {{domxref("PerformanceEntry")}} インターフェイスを `"navigation"` の {{domxref("PerformanceEntry.entryType","entryType")}} で拡張し、{{domxref("PerformanceResourceTiming")}} も継承しているため、文書を読み取るプロセスにおけるタイムスタンプもすべて利用できます。

{{InheritanceDiagram("PerformanceNavigationTiming")}}

## ナビゲーションタイムスタンプ

![文書内のタイムスタンプが、取得した順番に列挙されているタイムスタンプ図](https://mdn.github.io/shared-assets/images/diagrams/api/performance/timestamp-diagram.svg)
図 1 ナビゲーションタイムスタンプ（[引用元](https://w3c.github.io/navigation-timing/#process)）

文書のナビゲーションタイムスタンプは（[リソースタイミング](/ja/docs/Web/API/Performance_API/Resource_timing)からのものに加えて）次のとおりです。

1. {{domxref("PerformanceEntry.startTime","startTime")}}: 常に 0 です。
2. {{domxref("PerformanceNavigationTiming.unloadEventStart","unloadEventStart")}}: （直前のの文書がある場合）現在の文書で [`unload`](/ja/docs/Web/API/Window/unload_event) イベントハンドラーが開始する直前のタイムスタンプ。
3. {{domxref("PerformanceNavigationTiming.unloadEventEnd","unloadEventEnd")}}: （直前のの文書がある場合）現在の文書で [`unload`](/ja/docs/Web/API/Window/unload_event) イベントハンドラーが完了した直後のタイムスタンプ。
4. {{domxref("PerformanceNavigationTiming.domInteractive","domInteractive")}}: DOM の構築が完了し、JavaScript で操作可能な状態になったことを示すタイムスタンプ。
5. {{domxref("PerformanceNavigationTiming.domContentLoadedEventStart","domContentLoadedEventStart")}}: 現在の文書で [`DOMContentLoaded`](/ja/docs/Web/API/Document/DOMContentLoaded_event) イベントハンドラーが開始する直前のタイムスタンプ。
6. {{domxref("PerformanceNavigationTiming.domContentLoadedEventEnd","domContentLoadedEventEnd")}}: 現在の文書で [`DOMContentLoaded`](/ja/docs/Web/API/Document/DOMContentLoaded_event) イベントハンドラーが完了した直後のタイムスタンプ。
7. {{domxref("PerformanceNavigationTiming.domComplete","domComplete")}}: 文書内のすべてのサブリソースの読み込みが完了した時点のタイムスタンプ。
8. {{domxref("PerformanceNavigationTiming.loadEventStart","loadEventStart")}}: 現在の文書の [`load`](/ja/docs/Web/API/Window/load_event) イベントハンドラーが開始する直前のタイムスタンプ。
9. {{domxref("PerformanceNavigationTiming.loadEventEnd","loadEventEnd")}}: 現在の文書の [`load`](/ja/docs/Web/API/Window/load_event) イベントハンドラーが完了した直後のタイムスタンプ。

## その他のプロパティ

{{domxref("PerformanceNavigationTiming")}} インターフェイスは、リダイレクトの回数を返す {{domxref("PerformanceNavigationTiming.redirectCount","redirectCount")}} や、ナビゲーションの種類を示す {{domxref("PerformanceNavigationTiming.type","type")}} など、追加のプロパティを提供しています。

## 例

`domContentLoadedEventEnd` と `domContentLoadedEventStart` のタイムスタンプを使用して、 [`DOMContentLoaded`](/ja/docs/Web/API/Document/DOMContentLoaded_event) イベントハンドラーの処理に要した時間を測定することができます。

例えば、{{domxref("PerformanceObserver")}} を使用すると、ブラウザーのパフォーマンスタイムラインに新しい `navigation` パフォーマンス項目が記録されるたびに、呼び出し側に通知されます。例えば、オブザーバーが作成される前に記録された項目にアクセスするために、`buffered` オプションを使用します。

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const domContentLoadedTime =
      entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart;
    console.log(
      `${entry.name}: DOMContentLoaded 処理時間: ${domContentLoadedTime}ms`,
    );
  });
});

observer.observe({ type: "navigation", buffered: true });
```

その他の例については、{{domxref("PerformanceNavigationTiming")}} リファレンスドキュメント内のプロパティページを参照してください。

## 関連情報

- {{domxref("PerformanceNavigationTiming")}}
- {{domxref("PerformanceResourceTiming")}}
