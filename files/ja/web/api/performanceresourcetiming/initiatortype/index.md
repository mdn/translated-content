---
title: PerformanceResourceTiming.initiatorType
slug: Web/API/PerformanceResourceTiming/initiatorType
---

{{APIRef("Resource Timing API")}}

**`initiatorType`** 読み取り専用プロパティは、パフォーマンスイベントを開始したリソースの種類を表す {{domxref("DOMString","文字列")}} です。

この文字列の値は次のとおりです:

- initiator が {{domxref("Element")}} の場合、このプロパティは要素の {{domxref("Node.localName","localName")}} を返します
- initiator が {{domxref("CSS")}} リソースの場合、このプロパティは "`css`" を返します
- initiator が {{domxref("XMLHttpRequest")}} オブジェクトの場合、このプロパティは "`xmlhttprequest`" を返します
- initiator が {{domxref("PerformanceNavigationTiming")}} オブジェクトの場合、このプロパティは空の文字列 (`""`) を返します

{{AvailableInWorkers}}

## 構文

```
resource.initiatorType;
```

### 返値

上記で指定したように、パフォーマンスイベントを開始したリソースの種類を表す {{domxref("DOMString","string")}}。

## 例

```js
function print_PerformanceEntries() {
  // Use getEntriesByType() to just get the "resource" events
  var p = performance.getEntriesByType("resource");
  for (var i=0; i < p.length; i++) {
    print_initiatorType(p[i]);
  }
}
function print_initiatorType(perfEntry) {
  // Print this performance entry object's initiatorType value
  var value = "initiatorType" in perfEntry;
  if (value)
    console.log("... initiatorType = " + perfEntry.initiatorType);
  else
    console.log("... initiatorType = NOT supported");
}
```

## 仕様書

| 仕様書                                                                                                                           | ステータス                           | コメント |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Resource Timing', '#widl-PerformanceResourceTiming-initiatorType', 'initiatorType')}} | {{Spec2('Resource Timing')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.PerformanceResourceTiming.initiatorType")}}
