---
title: FederatedCredential
slug: Web/API/FederatedCredential
---

{{SeeCompatTable}}{{APIRef("Credential Management API")}}

**`FederatedCredential`** は [Credential Management API](/ja/docs/Web/API/Credential_Management_API) のインターフェイスで、連合アイデンティティのプロバイダーからの認証情報についての情報を提供します。連合アイデンティティのプロバイダーは、ウェブサイトが正しくユーザーを認証し、そのための API を提供する主体です。連合アイデンティティプロバイダーの一例として、 [OpenID Connect](http://openid.net/developers/specs/) があります。

対応しているブラウザーにおいては、このインターフェイスのインスタンスがグローバル {{domxref('fetch')}} の `init` オブジェクトの `credential` メンバーとして渡されることがあります。

## コンストラクター

- {{domxref("FederatedCredential.FederatedCredential()","FederatedCredential()")}}
  - : 新しい `FederatedCredential` オブジェクトを生成します。

## プロパティ

_祖先である {{domxref("Credential")}} からプロパティを継承しています。_

- {{domxref("FederatedCredential.provider")}} {{readonlyInline}}
  - : 認証情報の連合アイデンティティプロバイダーを含む {{domxref("USVString")}} です。
- {{domxref("FederatedCredential.protocol")}} {{readonlyInline}}
  - : 認証情報の連合アイデンティティプロトコルを含む {{domxref("DOMString")}} です。

### イベントハンドラー

なし。

## メソッド

なし。

## 例

```js
var cred = new FederatedCredential({
  id: id,
  name: name,
  provider: 'https://account.google.com',
  iconURL: iconUrl
});

// 格納
navigator.credentials.store(cred)
  .then(function() {
  // 他に何かをする
});
```

## 仕様書

| 仕様書                                           | 状態                                         | 備考     |
| ------------------------------------------------ | -------------------------------------------- | -------- |
| {{SpecName('Credential Management')}} | {{Spec2('Credential Management')}} | 初回定義 |

## ブラウザーの対応

{{Compat("api.FederatedCredential")}}
