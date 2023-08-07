---
title: 406 Not Acceptable
slug: Web/HTTP/Status/406
---

{{HTTPSidebar}}

HyperText Transfer Protocol (HTTP) の **`406 Not Acceptable`** クライアントエラーレスポンスコードは、サーバーがリクエストの用意した[コンテンツネゴシエーション](/ja/docs/Web/HTTP/Content_negotiation)ヘッダーで定義された受付可能な値に一致するレスポンスを生成できず、サーバーが既定の表現方法で提供することを望まないことを表します。

用意されるコンテンツネゴシエーションヘッダーには次のものがあります。

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Charset")}}
- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Accept-Language")}}

実際には、このエラーは滅多に使われません。このエラーコードが使用される代わりに、エンドユーザーには暗号的で修正するのが困難なものなので、サーバーは関連するヘッダーを無視してユーザーに実際のページを提供します。ユーザーが完全に利益にならない場合に限り、こちらのエラーコードを選択するでしょう。

サーバーがこのようなエラー状態を返してきた場合、メッセージの本文には利用できるリソースの表現の一覧を含み、ユーザーがその中から選択できるようにします。

## ステータス

```
406 Not Acceptable
```

## 仕様書

| 仕様書                                          | 題名                                                          |
| ----------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "406 Not Acceptable" , "6.5.6")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## ブラウザーの対応

以下の情報は MDN の Github (<https://github.com/mdn/browser-compat-data>) から取得したものです。

{{Compat("http.status.406")}}

## 関連情報

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Charset")}}
- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Accept-Language")}}
- HTTP の[コンテンツネゴシエーション](/ja/docs/Web/HTTP/Content_negotiation)
