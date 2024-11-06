---
title: "Performance: measure() メソッド"
short-title: measure()
slug: Web/API/Performance/measure
l10n:
  sourceCommit: 6539cd8d3ea65b2755ef5d5c7da202f53636f51f
---

{{APIRef("Performance API")}}

**`measure()`** メソッドは、 2 つのマーク間の時間を表す名前付き {{domxref("PerformanceMeasure")}} オブジェクトを、ブラウザーのパフォーマンスタイムラインに作成します。

2 つのマーク間を測定するときは、それぞれ*開始マーク*と*終了マーク*があります。名前付きタイムスタンプは、*メジャー*と呼ばれます。

## 構文

```js-nolint
measure(measureName)
measure(measureName, startMark)
measure(measureName, startMark, endMark)
measure(measureName, measureOptions)
measure(measureName, measureOptions, endMark)
```

`measureName` のみが指定された場合、開始タイムスタンプはゼロに設定され、（時間を計算するために使用される）終了タイムスタンプは {{domxref("Performance.now()")}} から返される値になります。

文字列を使用して {{domxref("PerformanceMark")}} オブジェクトを開始マークと終了マークとして識別することができます。

`endMark` のみ指定する場合、空の `measureOptions` オブジェクトを提供して `performance.measure("myMeasure", {}, "myEndMarker")` のようにする必要があります。

### 引数

- `measureName`

  - : 文字列で、メジャーの名前を表します。

- `measureOptions` {{optional_inline}}

  - : メジャーのすべてのオプションを含むオブジェクトです。

    - `detail` {{optional_inline}}
      - : マークに含める任意のメタデータです。既定値は `null` です。[構造化クローン可能](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)でなければなりません。
    - `start` {{optional_inline}}

      - : 開始時刻として使用される {{domxref("DOMHighResTimeStamp")}} のタイムスタンプ、または開始マークに使用される文字列です。

        これが {{domxref("PerformanceMark")}} に名前を付ける文字列である場合、 `startMark` と同じ方法で定義されます。

    - `duration` {{optional_inline}}
      - : 開始と終了のマーク時刻間の時間（ミリ秒単位）。省略した場合は既定値が {{domxref("performance.now()")}} となり、コンテキストが作成されてから経過した時刻となります。指定された場合は `start` と `end` のどちらかを指定する必要がありますが、両方を指定することはできません。
    - `end` {{optional_inline}}

      - : 終了時刻として使用される {{domxref("DOMHighResTimeStamp")}} のタイムスタンプ、または終了時刻の {{domxref("PerformanceMark")}} に名前を付ける文字列です。
        これが {{domxref("PerformanceMark")}} に名前を付ける文字列である場合、 `endMark` と同じように定義します。

- `startMark` {{optional_inline}}
  - : パフォーマンスタイムラインの {{domxref("PerformanceMark")}} に名前を付ける文字列です。このマークの {{domxref("PerformanceEntry.startTime")}} プロパティがメジャーの計算に使用されます。
- `endMark` {{optional_inline}}
  - : パフォーマンスタイムラインの {{domxref("PerformanceMark")}} に名前を付ける文字列です。このマークの {{domxref("PerformanceEntry.startTime")}} プロパティがメジャーの計算に使用されます。
    この引数を渡したい場合は、 `startMark` または空の `measureOptions` オブジェクトも渡す必要があります。

### 返値

生成された {{domxref("PerformanceMeasure")}} の項目です。

返される*メジャー*には、以下のプロパティ値になります。

- {{domxref("PerformanceEntry.entryType","entryType")}} - "`measure`" が設定されます。
- {{domxref("PerformanceEntry.name","name")}} - "`name`" 引数が設定されます。
- {{domxref("PerformanceEntry.startTime","startTime")}} - 以下のように設定されます。

  - `measureOptions.start` で指定された場合は {{domxref("DOMHighResTimeStamp","timestamp")}}。
  - `measureOptions.start` または `startMark` で指定された場合は、開始マークの{{domxref("DOMHighResTimeStamp","タイムスタンプ", "", 1)}}。
  - `measureOptions.end` と `measureOptions.duration` から計算されたタイムスタンプ（`measureOptions.start` が指定されていない場合）。
  - 指定されておらず、他の値から特定することができない場合は 0。

- {{domxref("PerformanceEntry.duration","duration")}} - {{domxref("DOMHighResTimeStamp")}} で、終了タイムスタンプから `startTime` を引いて計算されたメジャーの時間を設定します。

  終了タイムスタンプは以下のいずれかになります。

  - `measureOptions.end` で指定された場合は {{domxref("DOMHighResTimeStamp","timestamp")}}。
  - `measureOptions.end` または `endMark` で指定された場合は、終了マークの{{domxref("DOMHighResTimeStamp","タイムスタンプ", "", 1)}}。
  - `measureOptions.start` と `measureOptions.duration` から計算されたタイムスタンプ（`measureOptions.end` が指定されていない場合）。
  - 終了マークが指定されていないか、他の値から特定することができない場合は、 {{domxref("Performance.now()")}} で返される値。

- {{domxref("PerformanceMeasure","detail")}} - `measureOptions` で渡された値に設定されます。

## 例外

- {{jsxref("TypeError")}}

  - : start, end, duration のいずれかが曖昧になる場合に発生します。

    - `endMark` と `measureOptions` の両方が指定された。
    - `measureOptions` が指定されたが、 `start` および `end` メンバーが指定されなかった。
    - `measureOptions` が `start`, `end`, `duration` のメンバーすべてある状態（そして不整合な状態）で指定された。

- `SyntaxError` {{domxref("DOMException")}}

  - : その名前のマークが存在しない場合に発生します。

    - `endMark` または `measureOptions.end` のどちらかを使用してエンドマークが指定されたが、一致する名前のパフォーマンスバッファーに {{domxref('PerformanceMark')}} がない。
    - `endMark` または `measureOptions.end` のどちらかを使用してエンドマークが指定されたが、 {{domxref("PerformanceTiming")}} インターフェイスの読み取り専用属性に変換することができない。
    - 開始マークが `startMark` または `measureOptions.start` のどちらかで指定されているが、一致する名前のパフォーマンスバッファーに {{domxref('PerformanceMark')}} がない。
    - 開始マークが `startMark` または `measureOptions.start` のどちらかで指定されているが、 {{domxref("PerformanceTiming")}} インターフェイスの読み取り専用属性に変換することができない。

- `DataCloneError` {{domxref("DOMException")}}

  - : `measureOptions.detail` が `null` 以外の値であり、 HTML の "StructuredSerialize" アルゴリズムでシリアライズできない場合です。

- {{jsxref("RangeError")}}
  - : `measureOptions.detail` が `null` 以外の値であり、 HTML の "StructuredSerialize" アルゴリズムでシリアライズする際にメモリーが割り当てられなかった場合です。

## 例

### 名前付きマーカー間の時間の測定

自分自身で 2 つのマーカー `"login-started"` と `"login-finished"` を指定した場合、次の例に示すように `"login-duration"` という名前の時間を作成することができます。返された {{domxref("PerformanceMeasure")}} オブジェクトは `duration` プロパティを提供し、2 つのマーカー間の経過時間を指示します。

```js
const loginMeasure = performance.measure(
  "login-duration",
  "login-started",
  "login-finished",
);
console.log(loginMeasure.duration);
```

### 独自の開始と終了の時刻で時間を測定

より高度な計測を行うには、 `measureOptions` 引数を渡すことができます。例えば、開始時刻には [`click` イベント](/ja/docs/Web/API/Element/click_event) の [`event.timeStamp`](/ja/docs/Web/API/Event/timeStamp) プロパティを使用することができます。

```js
performance.measure("login-click", {
  start: myClickEvent.timeStamp,
  end: myMarker.startTime,
});
```

### メジャーの追加の詳細を提供

`details` プロパティを使用することで、任意の型の追加情報を提供することができます。例えば、どの HTML 要素がクリックされたかを記録したいかもしれません。

```js
performance.measure("login-click", {
  detail: { htmlElement: myElement.id },
  start: myClickEvent.timeStamp,
  end: myMarker.startTime,
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
