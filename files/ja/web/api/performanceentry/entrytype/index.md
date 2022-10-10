---
title: PerformanceEntry.entryType
slug: Web/API/PerformanceEntry/entryType
---

{{APIRef("Performance Timeline API")}}

**`entryType`** プロパティは、たとえば "`mark`" などのパフォーマンスメトリックの種類を表す {{domxref("DOMString")}} を返します。このプロパティは読み取り専用です。

{{AvailableInWorkers}}

## 構文

```
var type = entry.entryType;
```

### 返値

返値は `PerformanceEntry` オブジェクトのサブタイプに依存し、次の表に示すように {{domxref('PerformanceEntry.name')}} プロパティの値に影響します。

### パフォーマンスエントリタイプの名前

| 値                    | サブタイプ                                                                                                 | name プロパティのタイプ          | name プロパティの説明                                                                                                              |
| --------------------- | ---------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `frame`, `navigation` | {{domxref('PerformanceFrameTiming')}}, {{domxref('PerformanceNavigationTiming')}} | {{domxref("URL")}}         | ドキュメントのアドレス                                                                                                             |
| `resource`            | {{domxref('PerformanceResourceTiming')}}                                                       | {{domxref("URL")}}         | リクエストされたリソースの解決された URL。リクエストがリダイレクトされても、この値は変わりません。                                 |
| `mark`                | {{domxref('PerformanceMark')}}                                                                   | {{domxref("DOMString")}} | {{domxref("Performance.mark","performance.mark()")}} を呼び出してマークを作成したときに使用された名前              |
| `measure`             | {{domxref('PerformanceMeasure')}}                                                               | {{domxref("DOMString")}} | メジャーが {{domxref("Performance.measure","performance.measure()")}} を呼び出して作成されたときに使用された名前 |
| `paint`               | {{domxref('PerformancePaintTiming')}}                                                           | {{domxref("DOMString")}} | `'first-paint'` もしくは `'first-contentful-paint'` のいずれか                                                                     |

## 例

次の例は、`entryType` プロパティの使用方法を示しています。

```js
function run_PerformanceEntry() {

  // check for feature support before continuing
  if (performance.mark === undefined) {
    console.log("performance.mark not supported");
    return;
  }

  // Create a performance entry named "begin" via the mark() method
  performance.mark("begin");

  // Check the entryType of all the "begin" entries
  var entriesNamedBegin = performance.getEntriesByName("begin");
  for (var i=0; i < entriesNamedBegin.length; i++) {
      var typeOfEntry = entriesNamedBegin[i].entryType;
      console.log("Entry is type: " + typeOfEntry);
  }

}
```

## 仕様書

| 仕様書                                                                                                                       | ステータス                                               | コメント |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | -------- |
| {{SpecName('Performance Timeline Level 2', '#dom-performanceentry-entrytype', 'entryType')}} | {{Spec2('Performance Timeline Level 2')}} |          |
| {{SpecName('Performance Timeline', '#dom-performanceentry-entrytype', 'entryType')}}             | {{Spec2('Performance Timeline')}}             | 初期定義 |

## ブラウザーの互換性

{{Compat("api.PerformanceEntry.entryType")}}
