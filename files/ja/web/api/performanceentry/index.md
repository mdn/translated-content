---
title: PerformanceEntry
slug: Web/API/PerformanceEntry
---

{{APIRef("Performance Timeline API")}}

**`PerformanceEntry`** オブジェクトは、*パフォーマンスタイムライン*の一部である単一のパフォーマンスメトリックをカプセル化します。パフォーマンスエントリは、アプリケーション内の明示的な時点でパフォーマンス _{{domxref("PerformanceMark","mark")}}_ または _{{domxref("PerformanceMeasure","measure")}}_ を作成する (たとえば、{{domxref("Performance.mark","mark()")}} メソッドを呼び出すことによって) ことで直接作成できます。パフォーマンスエントリは、(イメージなどの) リソースのロードなどの間接的な方法でも作成されます。

`PerformanceEntry` インスタンスは常に次のサブタイプのいずれかになります:

- {{domxref("PerformanceMark")}}
- {{domxref("PerformanceMeasure")}}
- {{domxref("PerformanceFrameTiming")}}
- {{domxref("PerformanceNavigationTiming")}}
- {{domxref("PerformanceResourceTiming")}}
- {{domxref("PerformancePaintTiming")}}

{{AvailableInWorkers}}

## プロパティ

- {{domxref("PerformanceEntry.name")}} {{readonlyInline}}
  - : {{domxref("PerformanceEntry.entryType")}} プロパティによって返される値をさらに指定する値。両方の値はサブタイプによって異なります。有効な値についてはプロパティページを参照してください。
- {{domxref("PerformanceEntry.entryType")}} {{readonlyInline}}
  - : たとえば、"`mark`" などのパフォーマンスメトリックの種類を表す {{domxref("DOMString")}}。有効な値についてはプロパティページを参照してください。
- {{domxref("PerformanceEntry.startTime")}} {{readonlyInline}}
  - : パフォーマンスメトリックの開始時間を表す {{domxref("DOMHighResTimeStamp")}}。
- {{domxref("PerformanceEntry.duration")}} {{readonlyInline}}
  - : パフォーマンスイベントの期間の時間値を表す {{domxref("DOMHighResTimeStamp")}}。

## メソッド

- {{domxref("PerformanceEntry.toJSON","PerformanceEntry.toJSON()")}}
  - : `PerformanceEntry` オブジェクトの JSON リプリゼンテーションを返します。

## 例

次の例では、すべての `PerformanceEntry` プロパティを調べて、ブラウザーがそれらをサポートしているかどうかを確認し、サポートしている場合はそれらの値をコンソールに書き込みます。

```js
function print_PerformanceEntries() {
  // getEntries() を使用してすべてのパフォーマンスエントリのリストを取得します。
  var p = performance.getEntries();
  for (var i=0; i < p.length; i++) {
    console.log("PerformanceEntry[" + i + "]");
    print_PerformanceEntry(p[i]);
  }
}
function print_PerformanceEntry(perfEntry) {
  var properties = ["name",
                    "entryType",
                    "startTime",
                    "duration"];

  for (var i=0; i < properties.length; i++) {
    // それぞれのプロパティをチェックします。
    var supported = properties[i] in perfEntry;
    if (supported) {
      var value = perfEntry[properties[i]];
      console.log("... " + properties[i] + " = " + value);
    } else {
      console.log("... " + properties[i] + " is NOT supported");
    }
  }
}
```

## 仕様書

| 仕様書                                                                                                                   | ステータス                                               | コメント                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('Resource Timing 3')}}                                                                             | {{Spec2('Resource Timing 3')}}                 |                                                                                                                                                                                  |
| {{SpecName('Resource Timing 2')}}                                                                             | {{Spec2('Resource Timing 2')}}                 |                                                                                                                                                                                  |
| {{SpecName('Resource Timing')}}                                                                                 | {{Spec2('Resource Timing')}}                     | {{domxref("PerformanceResourceTiming")}} インターフェイスと `entryType` の `resource` 値を追加します。                                                               |
| {{SpecName('Navigation Timing Level 2')}}                                                                 | {{Spec2('Navigation Timing Level 2')}}     |                                                                                                                                                                                  |
| {{SpecName('Navigation Timing')}}                                                                             | {{Spec2('Navigation Timing')}}                 | {{domxref("PerformanceNavigationTiming")}} インターフェイスと `entryType` の `navigation` 値を追加します。                                                         |
| {{SpecName('User Timing Level 2')}}                                                                         | {{Spec2('User Timing Level 2')}}             |                                                                                                                                                                                  |
| {{SpecName('User Timing')}}                                                                                     | {{Spec2('User Timing')}}                         | `entryType` の `mark` および `measure` の値と同様に、{{domxref("PerformanceMark")}} および {{domxref("PerformanceMeasure")}} インターフェイスを追加します。 |
| {{SpecName('Frame Timing')}}                                                                                     | {{Spec2('Frame Timing')}}                         | {{domxref('PerformanceFrameTiming')}} インターフェイスと `entryType` の `frame` 値を追加します。                                                                      |
| {{SpecName('Performance Timeline Level 2', '#dom-performanceentry', 'PerformanceEntry')}} | {{Spec2('Performance Timeline Level 2')}} | `toJSON()` シリアライザメソッドを追加しました。                                                                                                                                  |
| {{SpecName('Performance Timeline', '#dom-performanceentry', 'PerformanceEntry')}}             | {{Spec2('Performance Timeline')}}             | 初期定義                                                                                                                                                                         |

## ブラウザーの互換性

{{Compat("api.PerformanceEntry")}}
