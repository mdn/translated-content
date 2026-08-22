---
title: パフォーマンスデータ
slug: Web/API/Performance_API/Performance_data
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("Performance API")}}

パフォーマンス API は、ウェブアプリケーションのパフォーマンス指標として収集可能なパフォーマンスデータを測定し、公開します。この API は、アプリケーションのパフォーマンスのさまざまな側面を監視するためのメソッドを提供します。ただし、パフォーマンスデータの分析や可視化機能は提供しません。一方で、パフォーマンス API はブラウザーの開発者ツールと緊密に連携しており、そのデータは多くの場合、分析用エンドポイントやライブラリーに送信され、パフォーマンス指標として記録されます。これにより、データを評価して、ユーザーに影響を与えるパフォーマンスのボトルネックを特定することが可能になります。

このページでは、パフォーマンス API にはどのようなデータが存在するか、そのデータがどのように収集されるか、そしてどのようにアクセス可能かについて概要を説明します。

## データの収集

パフォーマンス API が公開している指標のほとんどは、ブラウザーによって自動的に収集されるため、収集を指示する必要はありません。必要なのは、それらを取得することだけです。

一部の指標については、ブラウザーに何を測定すべきかを指示する必要があります。

- [要素タイミング](/ja/docs/Web/API/PerformanceElementTiming)指標は、特定の DOM 要素の読み込みおよびレンダリングにかかる時間を測定します。この指標はオプトイン方式です。具体的な要素に関する指標をブラウザーに記録させるには、その要素に `elementtiming` 属性を追加する必要があります。
- [ユーザータイミング](/ja/docs/Web/API/Performance_API/User_timing) 指標を使用すると、プログラム内の任意の時点間の時間を測定することができます。これは、アプリケーションで定義された操作（ユーザーのログインなど）に対応付けることができます。これらの指標を収集するには、関連する箇所にパフォーマンス API の呼び出しを追加する必要があります。
- [サーバータイミング](/ja/docs/Web/API/Performance_API/Server_timing) 指標を使用すると、アプリケーションで定義されたサーバー側の処理に要した時間を測定することができます。これらの指標を収集するには、サーバーが HTTP の `Server-Timing` ヘッダーを送信しなければなりません。

## パフォーマンスデータの構造

パフォーマンス API を使用すると、{{domxref("Window.performance", "Window")}} および {{domxref("WorkerGlobalScope.performance", "Worker")}} の両方のグローバルコンテキストでパフォーマンスデータを収集できます。複数のコンテキストのパフォーマンス指標を収集する場合は、コンテキスト間のタイムオリジンを同期させるために {{domxref("performance.timeOrigin")}} を参照してください。

こうしたコンテキストにおいて、個々のパフォーマンスデータはパフォーマンス項目として表されます。

### パフォーマンス項目

記録された単一のパフォーマンスデータポイントは「パフォーマンス項目」と呼ばれ、{{domxref("PerformanceEntry")}} インターフェイスのインスタンスで表されます。

パフォーマンス API はさまざまな種類のパフォーマンスデータを記録しており、`PerformanceEntry` には、このパフォーマンス項目の型を説明する文字列である {{domxref("PerformanceEntry.entryType", "entryType")}} プロパティがあります。

- `"element"` は、要素の読み込みとレンダリングにかかる時間を記録します。
- `"event"` は、イベントのトリガーに対してブラウザーがイベントハンドラーの実行を開始するまでの時間、およびイベントハンドラーの実行にかかった時間を記録します。{{Glossary("Interaction to Next Paint")}} を測定するために使用されます。
- `"first-input"` は、{{Glossary("First Input Delay")}} を記録します。
- `"largest-contentful-paint"` は、ページ読み込み中に発生した最大のペイントを記録します。
- `"layout-shift"` は、それぞれのアニメーションフレームでページのレイアウトがどれだけシフトしたかを表すメトリクスを記録します。
- `"longtask"` は、50ms 以上かかったタスクを記録します。
- `"mark"` は、開発者が作成した独自のタイムスタンプを記録します。
- `『measure』` は、開発者が作成した 2 つのタイムスタンプ間の独自の測定値を記録します。
- `"navigation"` は、ページへの移動およびページの初回読み込みに関連付けられたメトリクスを記録します。
- `"paint"` は、ページ読み込み中のレンダリングにおける重要な瞬間を記録します。
- `『resource』` は、ブラウザーがリソースを取得するのにかかった時間を記録します。
- `"visibility-state"` は、ページの可視状態が変化したタイミング、つまりタブがフォアグラウンドからバックグラウンドへ、またはその逆に切り替わったタイミングを記録します。

### パフォーマンス項目のサブクラス

それぞれの項目型は、通常、その型固有の追加データを含みます。例えば、`"resource"` 型は、DNS検索の始まる時点と終了時点を記録します。そのため、項目は基本的な `PerformanceEntry` インターフェイスを拡張するサブクラスによって表されます。例えば、`"resource"` 項目は、`PerformanceEntry` を継承し、DNS検索のタイムスタンプを記録するためのプロパティを追加した {{domxref("PerformanceResourceTiming")}} のインスタンスで表されます。

`PerformanceEntry` のサブクラスは、`PerformanceEntry` 自体に属するプロパティの意味づけも定義しています。例えば、`PerformanceEntry` には {{domxref("PerformanceEntry.name", "name")}} というプロパティがありますが、その意味はサブクラスによって異なります。

以下のインターフェイスは `PerformanceEntry` を継承しています。

- {{domxref("LargestContentfulPaint")}}
- {{domxref("LayoutShift")}}
- {{domxref("PerformanceElementTiming")}}
- {{domxref("PerformanceEventTiming")}}
- {{domxref("PerformanceLongTaskTiming")}}
- {{domxref("PerformanceMark")}}
- {{domxref("PerformanceMeasure")}}
- {{domxref("PerformancePaintTiming")}}
- {{domxref("PerformanceResourceTiming")}}
  - {{domxref("PerformanceNavigationTiming")}} （`PerformanceResourceTiming` から継承）
- {{domxref("TaskAttributionTiming")}}
- {{domxref("VisibilityStateEntry")}}

## データへのアクセス

パフォーマンス項目には、2つの方法のどちらかでアクセスできます。推奨される方法は、{{domxref("PerformanceObserver")}} インターフェイスを使用することです。このインターフェイスは、具体的なパフォーマンス項目が記録された際に呼び出されるコールバック関数とともに構築されます。次に、その {{domxref("PerformanceObserver.observe", "observe")}} メソッドを呼び出し、監視対象の型を渡すとともに、`buffered` オプションを使用して、監視開始前に発生した項目を取得します。

```js
function logEventDuration(entries) {
  const events = entries.getEntriesByType("event");
  for (const event of events) {
    console.log(
      `Event handler took: ${
        event.processingEnd - event.processingStart
      } milliseconds`,
    );
  }
}

const observer = new PerformanceObserver(logEventDuration);
observer.observe({ type: "event", buffered: true });
```

あるいは、{{domxref("Performance.getEntries()")}}、{{domxref("Performance.getEntriesByName()")}}、{{domxref("Performance.getEntriesByType()")}} の各メソッドを使用して、ページに関するすべてのパフォーマンス項目、あるいは指定された名前や型に一致する項目を取得することもできます。

```js
const events = performance.getEntriesByType("event");

for (const event of events) {
  console.log(
    `Event handler took: ${
      event.processingEnd - event.processingStart
    } milliseconds`,
  );
}
```

`PerformanceObserver` オプションが推奨される理由は次の通りです。

- `getEntries*` メソッドは、タイムラインの開始時点からの関連するすべての項目を常に返すため、2回呼び出すと、すでに表示済みの項目が再度表示されてしまいます。そのため、以前に表示した項目を除外する必要があります。
- オブザーバー通知は非同期で配信されるため、ブラウザーはパフォーマンスへの影響を最小限に抑えるために、アイドル時間中に通知を配信することができます。
- すべての項目型が `getEntries*` メソッドで動作するわけではありません。一部の項目型については、パフォーマンスオブザーバーを使用してアクセスする必要があります。

## バッファーサイズの管理

それぞれのグローバルオブジェクトには、パフォーマンス項目用のバッファー制限が設けられています。これにより、ブラウザーがパフォーマンスデータを保持する際に、メモリーを無制限に消費してしまうことを実現します。特に、ウェブサイトやアプリケーションで多数のリソースを取得する場合（ポーリングを使用している場合など）、バッファーの制限について確認する必要があるかもしれません。

| {{domxref("PerformanceEntry.entryType", "entryType")}} 識別子 | インターフェイス                           | バッファーサイズの最大数    |
| ------------------------------------------------------------- | ------------------------------------------ | --------------------------- |
| `"mark"`                                                      | {{domxref("PerformanceMark")}}             | Infinite                    |
| `"measure"`                                                   | {{domxref("PerformanceMeasure")}}          | Infinite                    |
| `"navigation"`                                                | {{domxref("PerformanceNavigationTiming")}} | Infinite                    |
| `"resource"`                                                  | {{domxref("PerformanceResourceTiming")}}   | 250（調整可能、下記参照）   |
| `"longtask"`                                                  | {{domxref("PerformanceLongTaskTiming")}}   | 200                         |
| `"paint"`                                                     | {{domxref("PerformancePaintTiming")}}      | 2（それ以上にはならない）   |
| `"element"`                                                   | {{domxref("PerformanceElementTiming")}}    | 150                         |
| `"event"`                                                     | {{domxref("PerformanceEventTiming")}}      | 150                         |
| `"first-input"`                                               | {{domxref("PerformanceEventTiming")}}      | 1（それ以上にはならない）「 |
| `"layout-shift"`                                              | {{domxref("LayoutShift")}}                 | 150                         |
| `"largest-contentful-paint"`                                  | {{domxref("LargestContentfulPaint")}}      | 150                         |
| `"visibility-state"`                                          | {{domxref("VisibilityStateEntry")}}        | 50                          |

表 1 バッファーサイズ（[情報源](https://w3c.github.io/timing-entrytypes-registry/#registry)）。

`"resource"` 項目型について、異なるバッファーサイズを設定する方法については、[リソースバッファーサイズの管理](/ja/docs/Web/API/Performance_API/Resource_timing#managing_resource_buffer_sizes)を参照してください。

`"first-input"` および `"paint"` については、この制限は指標の定義に内在するものです。項目は 1 つ（または 2 つ）を超えることはありません。

[パフォーマンスオブザーバーのコールバック](/ja/docs/Web/API/PerformanceObserver/PerformanceObserver)には、オプションの `droppedEntriesCount` 引数が含まれており、バッファの容量が満杯になったために失われたエントリの数を指示します。

```js
function perfObserver(list, observer, droppedEntriesCount) {
  list.getEntries().forEach((entry) => {
    // 項目に対して何らかの処理を行う
  });
  if (droppedEntriesCount > 0) {
    console.warn(
      `バッファーが一杯なので ${droppedEntriesCount} 項目が落とされました。`,
    );
  }
}
const observer = new PerformanceObserver(perfObserver);
observer.observe({ type: "resource", buffered: true });
```

もう 1 つ便利なメソッドとして、{{domxref("PerformanceObserver.takeRecords()")}} があります。これは、パフォーマンスオブザーバーに格納されているパフォーマンス項目の現在のリストを返すと同時に、そのリストを空にします。

## JSON データ

すべてのパフォーマンス項目には、`toJSON()` {{Glossary("Serialization","シリアライザー")}}が提供されており、その項目の {{jsxref("JSON")}} 形式の表現を返すことができます。これは、利用できるすべてのデータを収集してどこかに保存したい場合に役立ちます。

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry.toJSON());
  });
});

observer.observe({ type: "event", buffered: true });
```

これにより、次のよう JSON オブジェクトがログ出力されます。

```json
{
  "name": "dragover",
  "entryType": "event",
  "startTime": 67090751.599999905,
  "duration": 128,
  "processingStart": 67090751.70000005,
  "processingEnd": 67090751.900000095,
  "cancelable": true
}
```

項目の一意の `PerformanceEntry` オブジェクトに対して直接 [`JSON.stringify(entry)`](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) を使用することができます。これにより、項目の `toJSON()` メソッドが自動的に呼び出されます。

## 関連情報

- {{domxref("PerformanceEntry")}}
- {{domxref("PerformanceObserver.observe()")}}
