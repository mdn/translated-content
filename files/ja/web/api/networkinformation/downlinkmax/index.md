---
title: NetworkInformation.downlinkMax
slug: Web/API/NetworkInformation/downlinkMax
---

{{APIRef("Network Information API")}}{{SeeCompatTable}}

**`NetworkInformation.downlinkMax`** 読み取り専用プロパティは、メガビット毎秒（Mbps）単位で、基底の接続技術の最大下り速度を返します。

## 構文

```
var max = NetworkInformation.downlinkMax
```

### 戻り値

- メガビット毎秒（Mbps）単位で、基底の接続技術の最大下り速度を表す`無制限のdouble`。

## 例

次の例は、`change` イベントで接続をモニターして、発生した変更をロギングしています。

```js
function logConnectionType() {
  var connectionType = 'not supported';
  var downlinkMax = 'not supported';

  if ('connection' in navigator) {
    connectionType = navigator.connection.type;

    if ('downlinkMax' in navigator.connection) {
      downlinkMax = navigator.connection.downlinkMax;
    }
  }

  console.log('Current connection type: ' + connectionType +
    ' (downlink max: ' + downlinkMax + ')');
}

logConnectionType();
navigator.connection.addEventListener('change', logConnectionType);
```

## 仕様

| 仕様                                                                                                                     | ステータス                                   | コメント   |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | ---------- |
| {{SpecName('Network Information', '#widl-NetworkInformation-downlinkMax', 'downlinkMax')}} | {{Spec2('Network Information')}} | 最初の定義 |

## ブラウザ実装状況

{{Compat("api.NetworkInformation.downlinkMax")}}
