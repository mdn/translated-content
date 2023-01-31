---
title: パフォーマンスタイムラインの使用
slug: Web/API/Performance_Timeline/Using_Performance_Timeline
l10n:
  sourceCommit: 66c9543af6a0cf1baf89d5b0c972ee7dd08663b0
---

{{DefaultAPISidebar("Performance API")}}

**[パフォーマンスタイムライン](https://w3c.github.io/performance-timeline/)** 規格は、アプリケーション内でクライアント側の待ち時間の測定をサポートするための {{domxref("Performance")}} インターフェイスへの拡張を定義します。この規格には、特定のパフォーマンスイベントが発生したときにアプリケーションに通知することを可能にするインターフェイスも含まれています。同時に、これらのインターフェイスを使用してアプリケーションのパフォーマンスボトルネックを特定することができます。

## パフォーマンス拡張

**パフォーマンスタイムライン** は {{domxref("Performance") }} オブジェクトを拡張し、指定したフィルター条件に応じて {{domxref("PerformanceEntry", "パフォーマンス記録（指標）")}} の集合を取得するための異なる形を提供する 3 つのメソッドを備えています。以下の例では、これらのメソッド {{domxref("Performance.getEntries", "getEntries()")}}, {{domxref("Performance.getEntriesByName", "getEntriesByName()")}}, {{domxref("Performance.getEntriesByType", "getEntriesByType()")}} を使用した場合を示しています。

```js
function log(s) {
  const o = document.getElementsByTagName("output")[0];
  o.innerHTML += `${s} <br>`;
}

function doWork(n) {
  for (let i = 0; i < n; i++) {
     const m = Math.random(); // This is an example of work taking some time
  }
}

function printPerfEntry(pe) {
  log(`name: ${pe.name}`);
  log(`entryType: ${pe.entryType}`);
  log(`startTime: ${pe.startTime}`);
  log(`duration: ${pe.duration}`);
}

function printPerformanceEntries() {
  if (performance.mark === undefined) {
    console.error("The property performance.mark is not supported.");
    return;
  }

  // Create some performance entries via the mark() and measure() methods
  performance.mark("Begin");
  doWork(50000);
  performance.mark("End");
  doWork(50000);
  performance.measure("Measure1", "Begin", "End");

  // Use getEntries() to iterate all entries
  performance.getEntries()
    .forEach((entry, i) => {
      log(`All Entry[${i}]`);
      printPerfEntry(entry);
    });

  // Use getEntries(name, entryType) to get specific entries
  performance.getEntries({ name: "Measure1", entryType: "measure" })
    .forEach((entry, i) => {
      log(`Begin and Measure [${i}]`);
      printPerfEntry(entry);
    });

  // Use getEntriesByType() to get all "mark" entries
  performance.getEntriesByType("mark")
    .forEach((entry, i) => {
      log(`Mark only [${i}]`);
      printPerfEntry(entry);
    });

  // Use getEntriesByName() to get all "mark" entries named "Begin"
  performance.getEntriesByName("Begin", "mark")
    .forEach((entry, i) => {
      log(`Begin and Mark [${i}]`);
      printPerfEntry(entry);
    });
}
```

## PerformanceEntry インターフェイス

この インターフェイスは、単一のパフォーマンス項目、すなわち単一のパフォーマンスメトリックをカプセル化します。このインターフェイスは 4 つのプロパティと JSON _シリアライザー_ ({{domxref("Performance.toJSON", "toJSON()")}}) を保有しています。以下の例では、これらのプロパティを使用することを示します。

```js
function printPerformanceEntry(ev) {
  const properties = ["name", "entryType", "startTime", "duration"];

  // Create a few performance entries
  performance.mark("Start");
  doWork(50000);
  performance.mark("Stop");
  performance.measure("measure-1");

  performance.getEntries()
    .forEach((perfEntry, i) => {
      log(`PerfEntry[${i}]`);
      properties.forEach((prop) => {
        // Check each property in window.performance
        const supported = prop in perfEntry;
        log(`… ${prop} = ${supported ? perfEntry[prop] : "Not supported"}`);
      });
    });
}
```

このインターフェイスは {{domxref("PerformanceEntry") }} オブジェクトのシリアライズを返す {{domxref("PerformanceEntry.toJSON", "toJSON()")}} メソッドも記載しています。以下の例では、このメソッドを使用することを示します。

```js
function perfEntryToJSON() {
  // Create a few performance entries
  performance.mark("mark-1");
  performance.mark("mark-2");
  performance.measure("meas-1", "mark-1", "mark-2");

  const peList = performance.getEntries();
  const pe = peList[0];

  if (pe.toJSON === undefined) {
    log ("PerformanceEntry.toJSON() is NOT supported");
    return;
  }

  // Print the PerformanceEntry object
  const json = pe.toJSON();
  const s = JSON.stringify(json);
  log(`PerformanceEntry.toJSON = ${s}`);
}
```

## パフォーマンスオブザーバー

パフォーマンスオブザーバーのインターフェイスは、アプリケーションが特定のパフォーマンスイベントの種類のオブザーバーを登録することを可能にし、それらのイベントの種類の 1 つが記録されたとき、アプリケーションはオブザーバーが作成されたときに指定されたオブザーバーのコールバック関数によってイベントの_通知を受ける。オブザーバー（コールバック）が呼び出されたとき、コールバックの引数には{{domxref("PerformanceObserverEntryList", "パフォーマンスオブザーバー項目リスト","",1)}}が含まれ、監視されている{{domxref("PerformanceEntry", "パフォーマンス項目","",1)}}だけを収めます。つまり、このリストにはオブザーバーの {{domxref("PerformanceObserver.observe", "observe()")}} メソッドを呼び出したときに指定されたイベントの種類の項目のみが収められています。

以下の例では、 2 つのオブザーバーを登録する方法を示しています。最初のオブザーバーは、いくつかのイベント種別に対して登録し、 2 つ目のオブザーバーは 1 つのイベント種別に対してのみ登録します。

```js
function PerformanceObservers() {
  // Create observer for all performance event types
  const observeAll = new PerformanceObserver((list, obs) => {
    // Print all entries
    list.getEntries().forEach((entry) => {
      printPerfEntry(entry);
    });

    // Print entries named "Begin" with type "mark"
    list.getEntriesByName("Begin", "mark").forEach((entry) => {
      printPerfEntry(entry);
    });

    // Print entries with type "mark"
    list.getEntriesByType("mark").forEach((entry) => {
      printPerfEntry(entry);
    });
  });

  // Subscribe to all performance event types
  observeAll.observe({
    entryTypes: ['frame', 'mark', 'measure', 'navigation', 'resource', 'server'],
  });

  // Create observer for just the "mark" event type
  const observeMark = new PerformanceObserver((list, obs) => {
    // Should only have 'mark' entries
    list.getEntries().forEach((entry) =>  {
      printPerfEntry(entry);
    });
  });

  // Subscribe to only the 'mark' event
  observeMark.observe({ entryTypes: ['mark'] });
}

function printPerfEntry(pe) {
  log(`name: ${pe.name}`);
  log(`entryType: ${pe.entryType}`);
  log(`startTime: ${pe.startTime}`);
  log(`duration: ${pe.duration}`);
}
```

{{domxref("PerformanceObserverEntryList", "パフォーマンスオブザーバー項目リスト","",1)}} インターフェイスは {{domxref("Performance")}} インターフェイスと同じ3つの `getEntries*()` メソッドを保有し、これらのメソッドはオブザーバーコールバック内で _observed_ パフォーマンス項目を取得するために使用されます。これらのメソッドは上記の例で使用されています。

## 関連情報

- [パフォーマンスガイドライン（概要）](/ja/docs/Web/API/Performance_Timeline)
- [A Primer for Web Performance Timing APIs](https://siusin.github.io/perf-timing-primer/)
