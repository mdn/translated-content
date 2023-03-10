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

{{Specifications}}

## ブラウザーの対応

{{Compat("api.FederatedCredential.protocol")}}
