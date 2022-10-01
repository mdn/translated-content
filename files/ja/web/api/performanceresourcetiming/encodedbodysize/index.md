---
title: PerformanceResourceTiming.encodedBodySize
slug: Web/API/PerformanceResourceTiming/encodedBodySize
---

{{APIRef("Resource Timing API")}}

**`encodedBodySize`** 読み取り専用プロパティは、適用されたコンテンツコーディングを削除する前に、ペイロード本体のフェッチ (HTTP またはキャッシュ) から受信したサイズ (オクテット単位) を表します。

{{AvailableInWorkers}}

リソースがアプリケーションキャッシュまたはローカルリソースから取得された場合は、適用されたコンテンツコーディングを削除する前にペイロードボディのサイズを返す必要があります。

## 構文

```
resource.encodedBodySize;
```

### 返値

適用された content-coding を削除する前に、ペイロード本体のフェッチ (HTTP またはキャッシュ) から受け取ったサイズ (オクテット単位) を表す数値。

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

| 仕様書                                                                                                                                   | ステータス                           | コメント |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Resource Timing', '#widl-PerformanceResourceTiming-encodedBodySize', 'encodedBodySize')}} | {{Spec2('Resource Timing')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.PerformanceResourceTiming.encodedBodySize")}}
