---
title: 418 I'm a teapot
slug: Web/HTTP/Reference/Status/418
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の **`418 I'm a teapot`** はステータスレスポンスコードで、サーバーが、自身がティーポットであることを理由としてコーヒーを入れることを拒否することを示します。コーヒーとティーの複合ポットで、一時的にコーヒーが提供できない場合は、代わりに {{HTTPStatus("503")}} を返してください。
このエラーは、1998 年および 2014 年のエイプリルフールのジョークである Hyper Text Coffee Pot Control Protocol に由来します。

一部のウェブサイトでは、自動化されたクエリーなど、処理したくないリクエストに対してこのレスポンスを使用しています。

## ステータス

```http
418 I'm a teapot
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- [Wikipedia: Hyper Text Coffee Pot Control Protocol](https://ja.wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol)
