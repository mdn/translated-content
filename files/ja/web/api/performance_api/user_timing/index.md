---
title: ユーザータイミング
slug: Web/API/Performance_API/User_timing
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{DefaultAPISidebar("Performance API")}}

ユーザータイミングはパフォーマンス API の一部であり、ウェブブラウザーのパフォーマンスタイムラインに含まれる[高精度タイムスタンプ](/ja/docs/Web/API/DOMHighResTimeStamp)を使用して、アプリケーションのパフォーマンスを測定することができます。
タイミングパフォーマンス項目には、次の 2 種類があります。

- {{domxref("PerformanceMark")}} 項目は、任意の名前を付けて、アプリケーション内の任意の場所に追加することが可能です。
- {{domxref("PerformanceMeasure")}} の項目は、2 つのマーク間の時間測定値です。

## ユーザータイミングとは

ブラウザーは、ユーザーの代わりに、特定の情報（パフォーマンス項目と呼ばれる）をブラウザーのパフォーマンスタイムラインに提供します。これには、例えば、画像などのリソースを取得するのにかかる時間を測定する、[リソースタイミング API](/ja/docs/Web/API/Performance_API/Resource_timing)によって指定される項目などが含まれます。

しかし、ブラウザーでは、アプリケーション内で何が起きているかを把握することはできません。例えば、ユーザーがアプリケーション内でボタンをクリックしたり、特定の操作を行ったりした場合でも、高精度なパフォーマンス測定は行われません。ユーザータイミング API は、ブラウザーのパフォーマンスタイムラインを拡張するものであり、アプリケーション独自のパフォーマンスデータを測定・記録するのに役立ちます。

この API の利点としては、{{jsxref("Date.now()")}} や {{domxref("performance.now()")}} を呼び出す場合と比べて、マーカーに名前を付けられることや、パフォーマンス測定ツールとの連携がスムーズである点が挙げられます。ブラウザの開発者ツールでは、パフォーマンスパネルにパフォーマンスのマーカーを表示させることが可能で、{{domxref("PerformanceObserver")}} オブジェクトなどの他のパフォーマンス API とも連携します。

## パフォーマンスマーカーの追加

アプリの機能のパフォーマンス測定が始まるための第一段階として、コード内の重要な場所に名前付きのパフォーマンスマーカーを追加する必要があります。理想的には、コードベースを精査し、高い速度で実行を保証したいクリティカルパスや重要なタスクを特定します。

{{domxref("Performance.mark","performance.mark()")}} メソッドは、{{domxref("PerformanceMark")}} を作成するために使用されます。このメソッドは、次の例に示すように、マークの `name` という 1 つの引数を受け取ります。

```js
// コード内の、ログイン処理が始まる場所に配置してください
performance.mark("login-started");

// ログイン処理が完了するコード内の適切な場所に配置してください
performance.mark("login-finished");
```

`name` 引数だけでは不十分な場合、`mark()` はオプションオブジェクトを使用して構成できます。このオブジェクトの `detail` プロパティには、任意の型の追加情報を指定できます。また、必要に応じて別の `startTime` を設定することも可能です。以下のコードでは、`startTime` が `12.5` に設定されており、使用された HTML 要素などの追加情報が `detail` を通じて提供されています。

```js
performance.mark("login-started", {
  startTime: 12.5,
  detail: { htmlElement: myElement.id },
});
```

## マーカー間の時間を測定

アプリケーションにマーカーを追加したので、マーカー間の時間を測定することが可能になりました。

{{domxref("Performance.measure()")}} メソッドは、{{domxref("PerformanceMeasure")}} オブジェクトを生成するために使用されます。このメソッドは、測定項目を識別するための `name` 引数と、測定対象となる期間を示す `start` および `end` の 2 つのマークを受け入れます。次の例では、`"login-duration"` という測定項目を生成し、ログインプロセスの開始から終了までの期間を測定しています。

このオブジェクトには `duration` プロパティがあり、終了マークのタイムスタンプから開始マークのタイムスタンプを差し引いた値を自動的に計算されます。例えば、この値をログ出力したり、分析用エンドポイントに送信したりすることができます。

```js
const loginMeasure = performance.measure(
  "login-duration",
  "login-started",
  "login-finished",
);

console.log(loginMeasure.duration);
```

{{domxref("Performance.measure()")}} メソッドも、オプションオブジェクトを使用して構成可能であるため、より高度な測定を行うのが最適であり、`detail` プロパティを使って追加情報を指定することができます。

例えば、[`click` イベント](/ja/docs/Web/API/Element/click_event)の [`event.timestamp`](/ja/docs/Web/API/Event/timeStamp) プロパティを使用することで、ユーザーが「ログイン」をクリックした正確な時刻を把握し、それを UI が更新された時点（ここでは `"login-finished"` マーカー）と比較することができます。

```js
loginButton.addEventListener("click", (clickEvent) => {
  fetch(loginURL).then((data) => {
    renderLoggedInUser(data);

    const marker = performance.mark("login-finished");

    performance.measure("login-click", {
      detail: { htmlElement: myElement.id },
      start: clickEvent.timeStamp,
      end: marker.startTime,
    });
  });
});
```

## パフォーマンス測定の監視

カスタムパフォーマンス指標に関する通知を取得するには、{{domxref("PerformanceObserver")}} オブジェクトを使用するのが推奨されます。パフォーマンスオブザーバーを使用すると、パフォーマンスのマーカーや指標が現れた際に、受動的にそれらを受け取ることができます。

```js
function perfObserver(list, observer) {
  list.getEntries().forEach((entry) => {
    if (entry.entryType === "mark") {
      console.log(`${entry.name} の startTime: ${entry.startTime}`);
    }
    if (entry.entryType === "measure") {
      console.log(`${entry.name} の duration: ${entry.duration}`);
    }
  });
}
const observer = new PerformanceObserver(perfObserver);
observer.observe({ entryTypes: ["measure", "mark"] });
```

詳しくは、{{domxref("PerformanceObserver")}} を参照してください。

## マーカーと測定結果の受け取り

ブラウザーのパフォーマンスタイムラインには、さまざまなパフォーマンス項目が表示されます。その中には、ブラウザーによって追加されたものもあれば、以上で述べた例にあるログインマーカーや測定値のように、ユーザー自身が追加したものもあります。

単一の時点におけるパフォーマンスのスコアや指標を取得するために、{{domxref("Performance")}} インターフェイスには、下記のように 3 つのメソッドが提供されています。

> [!NOTE]
> 下記メソッドでは、新しいパフォーマンスマーカーに関する通知は行われません。これらのメソッドを呼び出した時点で生成されたマーカーのみを取得できます。
> {{domxref("PerformanceObserver")}} を使用して、新しい指標が利用可能になった際の通知を受け取る方法については、上記の[パフォーマンス測定の監視](#パフォーマンス測定の監視)の節を参照してください。通常、パフォーマンスマーカーや指標を取得するには、パフォーマンスオブザーバーを使用するのが推奨されます。

{{domxref("Performance.getEntries","performance.getEntries()")}} メソッドは、すべてのパフォーマンス項目を受け取ります。必要に応じて絞り込みすることができます。

```js
const entries = performance.getEntries();
entries.forEach((entry) => {
  if (entry.entryType === "mark") {
    console.log(`${entry.name} の startTime: ${entry.startTime}`);
  }
  if (entry.entryType === "measure") {
    console.log(`${entry.name} の duration: ${entry.duration}`);
  }
});
```

{{domxref("Performance.getEntriesByType","performance.getEntriesByType(entryType)")}} メソッドは、すでに項目を型ごとにフィルタリングしています。

```js
const marks = performance.getEntriesByType("mark");
marks.forEach((entry) => {
  console.log(`${entry.name} の startTime: ${entry.startTime}`);
});

const measures = performance.getEntriesByType("measure");
measures.forEach((entry) => {
  console.log(`${entry.name} の duration: ${entry.duration}`);
});
```

{{domxref("Performance.getEntriesByName","performance.getEntriesByName(name, entryType)")}} メソッドを使用すると、名前を指定して特定のマーカーや測定結果を取得することができます。

```js
// Log all marks named "debug-marks"
const debugMarks = performance.getEntriesByName("debug-mark", "mark");
debugMarks.forEach((entry) => {
  console.log(`${entry.name} の startTime: ${entry.startTime}`);
});
```

## マーカーと測定結果の削除

すべてのパフォーマンスマーカーや測定結果を削除する場合、あるいは特定の項目のみを削除する場合は、以下のメソッドを利用できます。

- [`performance.clearMarks()`](/ja/docs/Web/API/Performance/clearMarks)
- [`performance.clearMeasures()`](/ja/docs/Web/API/Performance/clearMeasures)

```js
// すべてのマーカーを削除
performance.clearMarks();

// "myMarker" という名前のマーカーを削除
performance.clearMarks("myMarker");

// すべての測定結果を削除
performance.clearMeasures();

// "myMeasure" という名前の測定結果を削除
performance.clearMeasures("myMeasure");
```

## 関連情報

- {{domxref("Performance")}}
- {{domxref("PerformanceMark")}}
- {{domxref("PerformanceMeasure")}}
- {{domxref("PerformanceEntry")}}
- {{domxref("PerformanceObserver")}}
