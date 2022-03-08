---
title: performance.measure()
slug: Web/API/Performance/measure
tags:
  - API
  - メソッド
  - リファレンス
  - ウェブパフォーマンス
  - ウェブワーカー
browser-compat: api.Performance.measure
translation_of: Web/API/Performance/measure
---
{{APIRef("User Timing API")}}

**`measure()`** メソッドは、マーク間、ナビゲーション開始時刻、または現在時刻の間に、ブラウザーの*パフォーマンスエントリーバッファー*に名前付き {{domxref("DOMHighResTimeStamp","timestamp")}} を作成します。

2 つのマーク間を測定するときは、それぞれ*開始マーク*と*終了マーク*があります。名前付きタイムスタンプは、*メジャー*と呼ばれます。

`measure` は、{{domxref("Performance")}} インターフェイスのうち、
({{domxref("Performance.getEntries","getEntries()")}},
{{domxref("Performance.getEntriesByName","getEntriesByName()")}},
{{domxref("Performance.getEntriesByType","getEntriesByType()")}}) のいずれかを使用して取得できます。

{{AvailableInWorkers}}

## 構文

```js
measure(measureName)
measure(measureName, MeasureOptions)
measure(measureName, startMark)
measure(measureName, startMark, endMark)
```

`measureName` のみが指定された場合、開始タイムスタンプはゼロに設定され、（時間を計算するために使用される）終了タイムスタンプは {{domxref("Performance.now()")}} から返される値になります。

### 引数

- `measureName`
  - : {{domxref("DOMString")}} で、メジャーの名前を表します。

- `MeasureOptions` {{optional_inline}}
  - : メジャーのすべてのオプションを含むオブジェクトです（`startMark` と `endMark` はこのオブジェクト内で指定することも、独自の引数で指定することもできます）。

    - `detail`
      - : メジャーに含める任意のメタデータです。
    - `start`
      - : 開始時刻として使用される {{domxref("DOMHighResTimeStamp")}} のタイムスタンプ、または開始マークとして使用される {{domxref("DOMString")}} です。
          これが開始マークの名前を表す場合は、 `startMark` の場合と同じように定義します（すなわち、既存のマークまたは {{domxref("PerformanceTiming")}} プロパティの名前でなければなりません）。
    - `duration`
      - : 開始マークと終了マークのそれぞれの時刻 ({{domxref("DOMHighResTimeStamp")}}) 間の時間.
    - `end`
      - : 終了時刻として使用される {{domxref("DOMHighResTimeStamp")}} のタイムスタンプ、または終了マークとして使用される {{domxref("DOMString")}} です。
          これが終了マークの名前を表す場合は、 `endMark` の場合と同じように定義します（すなわち、既存のマークまたは {{domxref("PerformanceTiming")}} プロパティの名前でなければなりません）。

- `startMark` {{optional_inline}}
  - : {{domxref("DOMString")}} で、このメジャーの開始マークの名前を表します。
    {{domxref("PerformanceTiming")}} プロパティの名前にすることもできます。
    既存の {{domxref('PerformanceMark')}} または {{domxref("PerformanceTiming")}} を表していない名前を指定すると `SyntaxError` の {{domxref("DOMException")}} が発生します。

- `endMark` {{optional_inline}}
  - : {{domxref("DOMString")}} で、このメジャーの終了マークの名前を表します。
    {{domxref("PerformanceTiming")}} プロパティの名前にすることもできます。
    既存の {{domxref('PerformanceMark')}} または {{domxref("PerformanceTiming")}} を表していない名前を指定すると `SyntaxError` の {{domxref("DOMException")}} が発生します。

### 返値

生成された {{domxref("PerformanceMeasure")}} のエントリーです。

返される*メジャー*には、以下のプロパティ値になります。

- {{domxref("PerformanceEntry.entryType","entryType")}} - "`measure`" が設定されます。
- {{domxref("PerformanceEntry.name","name")}} - "`name`" 引数が設定されます。
- {{domxref("PerformanceEntry.startTime","startTime")}} - 以下のように設定されます。
  - `MeasureOptions.start` で指定された場合は {{domxref("DOMHighResTimeStamp","timestamp")}}。
  - `MeasureOptions.start` または `startMark` で指定された場合は、開始マークの{{domxref("DOMHighResTimeStamp","タイムスタンプ", "", 1)}}。
  - `MeasureOptions.end` と `MeasureOptions.duration` から計算されたタイムスタンプ（`MeasureOptions.start` が指定されていない場合）。
  - 指定されておらず、他の値から特定することができない場合は 0。
  
- {{domxref("PerformanceEntry.duration","duration")}} - {{domxref("DOMHighResTimeStamp")}} で、終了タイムスタンプから `startTime` を引いて計算されたメジャーの時間を設定します。

  終了タイムスタンプは以下のいずれかになります。
  - `MeasureOptions.end` で指定された場合は {{domxref("DOMHighResTimeStamp","timestamp")}}。
  - `MeasureOptions.end` または `endMark` で指定された場合は、終了マークの{{domxref("DOMHighResTimeStamp","タイムスタンプ", "", 1)}}。
  - `MeasureOptions.start` と `MeasureOptions.duration` から計算されたタイムスタンプ（`MeasureOptions.end` が指定されていない場合）。
  - 終了マークが指定されていないか、他の値から特定することができない場合は、 {{domxref("Performance.now()")}} で返される値。
- {{domxref("PerformanceMeasure","detail")}} - `MeasureOptions` で渡された値に設定されます。

## 例外

- `TypeError` {{domxref("DOMException")}}
  - : start, end, duration の何れかが曖昧になる場合に発生します。

    - `endMark` と `MeasureOptions` の両方が指定された。
    - `MeasureOptions` が指定されたが、 `start` および `end` メンバーが指定されなかった。
    - `MeasureOptions` が `start`, `end`, `duration` のメンバーすべてある状態（そして不整合な状態）で指定された。

- `SyntaxError` {{domxref("DOMException")}}
  - : その名前のマークが存在しない場合に発生します。

    - `endMark` または `MeasureOptions.end` のどちらかを使用してエンドマークが指定されたが、一致する名前のパフォーマンスバッファーに {{domxref('PerformanceMark')}}がない。
    - `endMark` または `MeasureOptions.end` のどちらかを使用してエンドマークが指定されたが、 {{domxref("PerformanceTiming")}} インターフェイスの読み取り専用属性に変換することができない。
    - 開始マークが `startMark` または `MeasureOptions.start` のどちらかで指定されているが、一致する名前のパフォーマンスバッファーに {{domxref('PerformanceMark')}}がない。
    - 開始マークが `startMark` または `MeasureOptions.start` のどちらかで指定されているが、 {{domxref("PerformanceTiming")}} インターフェイスの読み取り専用属性に変換することができない。

- `DataCloneError` {{domxref("DOMException")}}
  - : `MeasureOptions.detail` が `null` 以外の値であり、 HTML の "StructuredSerialize" アルゴリズムでシリアライズできない場合です。

- `RangeError`
  - : `MeasureOptions.detail` が `null` 以外の値であり、 HTML の "StructuredSerialize" アルゴリズムでシリアライズする際にメモリーが割り当てられなかった場合です。

## 例

次の例は、ブラウザーのパフォーマンスエントリーバッファーに `measure()` を使用して新しい*メジャー*{{domxref("PerformanceEntry","パフォーマンスエントリー")}}を作成する方法を示しています。

```js
const markerNameA = "example-marker-a"
const markerNameB = "example-marker-b"

// いくつかのネストしたタイムアウトを実行し、それぞれに対して PerformanceMark を作成します。
performance.mark(markerNameA);
setTimeout(function() {
  performance.mark(markerNameB);
  setTimeout(function() {

    // さまざまな測定値を作成します。
    performance.measure("measure a to b", markerNameA, markerNameB);
    performance.measure("measure a to now", markerNameA);
    performance.measure("measure from navigation start to b", undefined, markerNameB);
    performance.measure("measure from the start of navigation to now");

    // すべての測定値を引き出します。
    console.log(performance.getEntriesByType("measure"));

    // 最後に、エントリ-
    を整理します。
    performance.clearMarks();
    performance.clearMeasures();
  }, 1000);
}, 1000);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
