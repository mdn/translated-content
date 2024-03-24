---
title: 511 Network Authentication Required
slug: Web/HTTP/Status/511
---

{{HTTPSidebar}}

HTTP **`511 Network Authentication Required`** レスポンスステータスコードは、クライアントがネットワークアクセスを取得するために認証する必要があることを示します。

この状態は、オリジンサーバーによって生成されるのではなく、ネットワークへのアクセスを制御するプロキシをインターセプトすることによって生成されます。

ネットワークオペレータは、アクセスを許可する前 (インターネットカフェや空港などで) に何らかの認証、条件の受け入れ、またはその他のユーザー対話を必要とすることがあります。彼らはしばしば、Media Access Control ({{Glossary("MAC")}}) アドレスを使用していないクライアントを識別します。

## ステータス

```
511 Network Authentication Required
```

## 仕様

| 仕様書                                                       | タイトル                     |
| ------------------------------------------------------------ | ---------------------------- |
| {{RFC("6585", "511 Network Authentication Required" , "6")}} | Additional HTTP Status Codes |

## 関連情報

- {{Glossary("Proxy server")}}
