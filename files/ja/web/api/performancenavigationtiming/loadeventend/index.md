---
title: PerformanceNavigationTiming.loadEventEnd
slug: Web/API/PerformanceNavigationTiming/loadEventEnd
---

{{APIRef("Navigation Timing")}}{{SeeCompatTable}}

**`loadEventEnd`** 読み取り専用プロパティは、現在のドキュメントのロードイベントが完了した時刻と同じ{{domxref("DOMHighResTimeStamp","timestamp")}} を返します。

## 構文

```
perfEntry.loadEventEnd;
```

### 返値

現在のドキュメントのロードイベントが完了した時刻を表す {{domxref("DOMHighResTimeStamp","timestamp")}}。

## 例

次の例は、このプロパティの使用方法を示しています。

```js
function print_nav_timing_data() {
  // Use getEntriesByType() to just get the "navigation" events
  var perfEntries = performance.getEntriesByType("navigation");

  for (var i = 0; i < perfEntries.length; i++) {
    console.log("= Navigation entry[" + i + "]");
    var p = perfEntries[i];
    // dom Properties
    console.log(
      "DOM content loaded = " +
        (p.domContentLoadedEventEnd - p.domContentLoadedEventStart),
    );
    console.log("DOM complete = " + p.domComplete);
    console.log("DOM interactive = " + p.interactive);

    // document load and unload time
    console.log("document load = " + (p.loadEventEnd - p.loadEventStart));
    console.log("document unload = " + (p.unloadEventEnd - p.unloadEventStart));

    // other properties
    console.log("type = " + p.type);
    console.log("redirectCount = " + p.redirectCount);
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
