---
title: PerformanceResourceTiming.nextHopProtocol
slug: Web/API/PerformanceResourceTiming/nextHopProtocol
---

{{APIRef("Resource Timing API")}}

**`nextHopProtocol`** 読み取り専用プロパティは、[ALPN プロトコル ID (RFC7301)](https://tools.ietf.org/html/rfc7301) で識別されるように、リソースを取得するために使用される*ネットワークプロトコル*を表す{{domxref("DOMString","文字列")}} です。

プロキシが使用されている場合、トンネル接続が確立されていると、このプロパティはトンネリングプロトコルの ALPN プロトコル ID を返します。それ以外の場合、このプロパティはプロキシへの最初のホップの ALPN プロトコル ID を返します。

{{AvailableInWorkers}}

## 構文

```
resource.nextHopProtocol;
```

### 返値

[ALPN プロトコル ID (RFC7301)](https://tools.ietf.org/html/rfc7301) で識別される、リソースの取得に使用された*ネットワークプロトコル*を表す {{domxref("DOMString","文字列")}}。

## 例

次の例では、`nextHopProtocol` プロパティを使用しています。

```js
function print_PerformanceEntries() {
  // Use getEntriesByType() to just get the "resource" events
  var p = performance.getEntriesByType("resource");
  for (var i=0; i < p.length; i++) {
    print_nextHopProtocol(p[i]);
  }
}
function print_nextHopProtocol(perfEntry) {
  var value = "nextHopProtocol" in perfEntry;
  if (value)
    console.log("nextHopProtocol = " + perfEntry.nextHopProtocol);
  else
    console.log("nextHopProtocol = NOT supported");
}
```

## 仕様書

| 仕様書                                                                                                                                   | ステータス                           | コメント |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Resource Timing', '#widl-PerformanceResourceTiming-nextHopProtocol', 'nextHopProtocol')}} | {{Spec2('Resource Timing')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.PerformanceResourceTiming.nextHopProtocol")}}
