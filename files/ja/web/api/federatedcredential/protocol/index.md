---
title: FederatedCredential.protocol
slug: Web/API/FederatedCredential/protocol
---

{{SeeCompatTable}}{{APIRef("")}}{{securecontext_header}}

**`protocol`** は {{domxref("FederatedCredential")}} インターフェイスのプロパティで、認証情報の連合アイデンティティプロトコルが入った読み取り専用の {{domxref("DOMString")}} を返します。このプロパティが {{jsxref("null")}} の場合、プロトコルは {{domxref("FederatedCredential.provider")}} プロパティから推測される可能性があります。

## 構文

```
var protocol = FederatedCredential.protocol
```

### 値

認証情報の連合アイデンティティプロトコルが入った {{domxref("DOMString")}} です (例えば `openidconnect`)。

## 例

```js
// TBD
```

## 仕様書

| 仕様書                                                                                                           | 状態                                         | 備考     |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------- |
| {{SpecName('Credential Management','#dom-federatedcredential-protocol','protocol')}} | {{Spec2('Credential Management')}} | 初回定義 |

## ブラウザーの対応

{{Compat("api.FederatedCredential.protocol")}}
