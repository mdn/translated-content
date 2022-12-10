---
title: パフォーマンス API の使用
slug: Web/API/Performance_API/Using_the_Performance_API
---

{{DefaultAPISidebar("Performance API")}}

ウェブパフォーマンスの基本的な要件は、_時刻_ の正確で一貫した定義です。 {{domxref("DOMHighResTimeStamp")}} 型 (`double`) は、すべてのパフォーマンスインターフェイスで、この時刻の値を保持するために使用されています。さらに、特定の時刻のタイムスタンプを作成する方法が必要です。これは {{domxref("Performance.now", "now()")}} メソッドで行われます。

ウェブパフォーマンスインターフェイスは、[一連の標準規格](https://www.w3.org/wiki/Web_Performance/Publications)で定義されています。この標準のベースとなるフェイスは {{domxref("Performance")}} インターフェイスで、そのメソッドやプロパティは異なる形で拡張されています。このガイドでは、 [High-Resolution Time](https://w3c.github.io/hr-time/) 規格で定義されている {{domxref("Performance")}} インターフェイスの使用方法について記述します。他にもウェブパフォーマンスガイド（[関連情報](#関連情報)の節に掲載されています）では、 {{domxref("Performance")}} インターフェイスの追加のメソッドとプロパティの使用方法について記述しています。

## 高精度のタイミング

_高精度のタイミング_ は、時刻の値に DOMHighResTimeStamp 型を使用することによって取得できます。単位はミリ秒であり、 5μs（マイクロ秒）の精度が必要です。しかし、ブラウザーが（例えば、ハードウェアやソフトウェアの制約のために） 5 マイクロ秒の精度の時刻値を提供できない場合、ブラウザーはその値をミリ秒の精度の時刻として表すことができます。

以下のコード例では、{{domxref("DOMHighResTimeStamp")}} と {{domxref("Performance.now", "Performance.now()")}} メソッドを使用することを示します。Domxref("Performance.now", "now()")}} メソッドは、離散的な時点である _タイムスタンプ_ ({{domxref("DOMHighResTimeStamp") }} 型)を返します。タスクの前後にこのメソッドを呼び出すことで、タスクの実行にかかる時刻を計測することができます。

```js
function calculate_time() {
  let startTime;
  let endTime;

  startTime = performance.now();
  do_task();
  endTime = performance.now();

  return (endTime - startTime);
}
```

## `Performance` オブジェクトのシリアライズ

{{domxref("Performance")}} オブジェクトの JSON シリアライズは {{domxref("Performance.toJSON", "toJSON()")}} メソッドで行います。以下の例では、 {{domxref("Performance")}}, {{domxref("Performance.timing")}}, {{domxref("Performance.navigation")}} オブジェクトに対する JSON シリアライズ結果が `output` 要素に表示されます。

```js
function print_json() {
  const output = document.getElementsByTagName("output")[0];

  if (window.performance.toJSON === undefined) {
    output.textContent += `window.performance.toJSON() is NOT supported`;
  } else {
    const json = window.performance.toJSON();

    // Print the performance object
    output.textContent = `performance = ${JSON.stringify(json)} \n`;

    // Print the performance.timing and performance.navigation objects
    const timing = json.timing;
    output.textContent += `performance.timing = ${JSON.stringify(timing)} \n`;

    const navigation = json.navigation;
    output.textContent += `performance.navigation = ${JSON.stringify(navigation)} \n`;
  }
}
```

## 仕様書

この記事内で記述されたインターフェイスは、 2 つのレベルがある `High Resolution Time` 規格で定義されています。

- [High-Resolution Time Level 2](https://w3c.github.io/hr-time/)、作成者草稿、作業中
- [High-Resolution Time](https://www.w3.org/TR/hr-time/)、W3C 勧告 2012 年 12 月 17 日

## 相互運用性

{{domxref("Performance")}} インターフェイスの[ブラウザー互換性](/ja/docs/Web/API/Performance#ブラウザーの互換性)表に示すように、 {{domxref("Performance")}} インターフェイスのほとんどは、デスクトップブラウザーで広く実装されています。

## 関連情報

- {{domxref("Performance_API","パフォーマンス API の概要", "", 1)}}
- [A Primer for Web Performance Timing APIs](https://siusin.github.io/perf-timing-primer/)
- [Graphic of Web Performance Layers](https://docs.google.com/document/d/1ZKW9N0cteHgK91SyYQONFuy2ZW6J4Oak398niTo232E/edit)
- [CanIUse data for High-Resolution Time](https://caniuse.com/#search=high-resolution-time)
- [Web Performance Standards Status and Roadmap](https://www.w3.org/wiki/Web_Performance/Publications)
