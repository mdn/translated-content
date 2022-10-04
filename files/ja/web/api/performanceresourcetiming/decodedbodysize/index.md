---
title: PerformanceResourceTiming.decodedBodySize
slug: Web/API/PerformanceResourceTiming/decodedBodySize
---

{{APIRef("Resource Timing API")}}

**`decodedBodySize`** 読み取り専用プロパティは、適用された content-coding を削除した後、メッセージ本文のフェッチ (HTTP またはキャッシュ) から受信したサイズ (オクテット) を返します。リソースがアプリケーションキャッシュまたはローカルリソースから取得された場合、適用されているコンテンツコーディングを削除した後でペイロードのサイズを返します。

{{AvailableInWorkers}}

## 構文

```
resource.decodedBodySize;
```

### 返値

適用された content-coding を削除した後に、メッセージ本文のフェッチ (HTTP またはキャッシュ) から受け取ったサイズ (オクテット)。

## 例

次の例では、すべての "`resource`" {{domxref("PerformanceEntry.entryType","type")}} イベントのサイズプロパティの値が記録されます。

```js
function log_sizes(perfEntry){
  // Check for support of the *size properties and print their values
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
| {{SpecName('Resource Timing', '#widl-PerformanceResourceTiming-decodedBodySize', 'decodedBodySize')}} | {{Spec2('Resource Timing')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.PerformanceResourceTiming.decodedBodySize")}}
