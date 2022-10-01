---
title: PerformanceResourceTiming.transferSize
slug: Web/API/PerformanceResourceTiming/transferSize
---

{{APIRef("Resource Timing API")}}

**`transferSize`** 読み取り専用プロパティは、取得したリソースのサイズ (オクテット) を表します。サイズには、レスポンスヘッダーフィールドとレスポンスペイロードボディ ([RFC7230](http://httpwg.github.io/specs/rfc7230.html#message.body) で定義されているとおり) が含まれます。

{{AvailableInWorkers}}

リソースがローカルキャッシュから取得された場合、またはクロスオリジンリソースの場合、このプロパティはゼロを返します。

## 構文

```
resource.transferSize;
```

### 返値

取得したリソースのサイズ (オクテット単位) を表す数値。サイズには、レスポンスヘッダーフィールドと[レスポンスペイロードボディ](http://httpwg.github.io/specs/rfc7230.html#message.body) (RFC7230) が含まれています。

## 例

次の例では、すべての "`resource`" {{domxref("PerformanceEntry.entryType","type")}} イベントのサイズプロパティの値が記録されます。

```js
function log_sizes(perfEntry){
  // Check for support of the PerformanceEntry.*size properties and print their values
  // if supported.
  if ("decodedBodySize" in perfEntry)
    console.log("decodedBodySize = " + perfEntry.decodedBodySize);
  else
    console.log("decodedBodySize = NOT supported");

  if ("encodedBodySize" in perfEntry)
    console.log("encodedBodySize = " + perfEntry.encodedBodySize);
  else
    console.log("encodedBodySize = NOT supported");

  if ("transferSize" in perfEntry)
    console.log("transferSize = " + perfEntry.transferSize);
  else
    console.log("transferSize = NOT supported");
}
function check_PerformanceEntries() {
  // Use getEntriesByType() to just get the "resource" events
  var p = performance.getEntriesByType("resource");
  for (var i=0; i < p.length; i++) {
    log_sizes(p[i]);
  }
}
```

## 仕様書

| 仕様書                                                                                                                           | ステータス                           | コメント |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Resource Timing', '#widl-PerformanceResourceTiming-transferSize', 'transferSize')}} | {{Spec2('Resource Timing')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.PerformanceResourceTiming.transferSize")}}
