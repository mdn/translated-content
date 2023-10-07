---
title: 506 Variant Also Negotiates
slug: Web/HTTP/Status/506
---

{{HTTPSidebar}}

The HyperText Transfer Protocol (HTTP) **`506 Variant Also Negotiates`** レスポンスステータスコードは、透過的コンテンツネゴシエーション (**transparent content negotiation**) のコンテキストで提供される場合があります (参照 [RFC 2295](https://tools.ietf.org/html/rfc2295))。このプロトコルは、サーバーが複数のバリアントに対応している場合に、クライアントが与えられたリソースの最良のバリアントを取得することを可能にします。

**`Variant Also Negotiates`** ステータスコードは、選択されたバリアント自体がコンテンツネゴシエーションに関与するように構成されているため、適切なネゴシエーションエンドポイントではない内部サーバー構成エラーを示します。

## ステータス

```
506 Variant Also Negotiates
```

## 仕様書

| 仕様書                                                 | 題名                                    |
| ------------------------------------------------------ | --------------------------------------- |
| {{RFC("2295", "506 Variant Also Negotiates" , "8.1")}} | Transparent Content Negotiation in HTTP |
