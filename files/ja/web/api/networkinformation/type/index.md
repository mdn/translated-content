---
title: NetworkInformation.type
slug: Web/API/NetworkInformation/type
---

{{apiref("Network Information API")}}{{SeeCompatTable}}

**`NetworkInformation.type`** 読み取り専用プロパティは、デバイスがネットワーク通信に使用している接続の種類を返します。

## 構文

```
var type = netInfo.type
```

### 戻り値

次の値のいずれかである列挙値です：

- `"bluetooth"`
- `"cellular"`
- `"ethernet"`
- `"none`"
- `"wifi"`
- `"wimax"`
- `"other"`
- `"unknown"`

## 仕様

| 仕様                                                                                                 | ステータス                                   | コメント   |
| ---------------------------------------------------------------------------------------------------- | -------------------------------------------- | ---------- |
| {{SpecName('Network Information', '#widl-NetworkInformation-type', 'type')}} | {{Spec2('Network Information')}} | 最初の定義 |

## ブラウザ実装状況

{{Compat("api.NetworkInformation.type")}}
