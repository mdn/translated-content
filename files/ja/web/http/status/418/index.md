---
title: 418 I'm a teapot
slug: Web/HTTP/Status/418
---

{{HTTPSidebar}}

HTTP の **`418 I'm a teapot`** クライアントエラーレスポンスコードは、サーバーが、自身がティーポットであることを理由としてコーヒーを入れることを拒否することを示します。コーヒーとティーの複合ポットで、一時的にコーヒーが提供できない場合は、代わりに 503 を返してください。このエラーは、1998 年のエイプリルフールのジョークである Hyper Text Coffee Pot Control Protocol に由来します。

一部のウェブサイトでは、自動化されたクエリなど、処理したくないリクエストに対してこのレスポンスを使用しています。

## ステータス

```
418 I'm a teapot
```

## 仕様書

| 仕様書                                        | 題名                                                                                              |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| {{RFC("2324", "418 I'm a teapot" , "2.3.2")}} | Hyper Text Coffee Pot Control Protocol (HTCPCP/1.0): Semantics and Content                        |
| {{RFC("7168", "418 I'm a teapot" , "2.3.3")}} | The Hyper Text Coffee Pot Control Protocol for Tea Efflux Appliances (HTCPCP-TEA): Response Codes |

## ブラウザーの互換性

{{Compat("http.status.418")}}

## 関連情報

- [Wikipedia: Hyper Text Coffee Pot Control Protocol](https://ja.wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol)
