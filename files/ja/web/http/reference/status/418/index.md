---
title: 418 I'm a teapot
slug: Web/HTTP/Reference/Status/418
l10n:
  sourceCommit: 8654d0983add0e93af8c754e76ba9e3d56fe79be
---

HTTP の **`418 I'm a teapot`** はステータスレスポンスコードで、サーバーが、自身がティーポットであることを理由としてコーヒーを入れることを拒否することを示します。コーヒーとティーの複合ポットで、一時的にコーヒーが提供できない場合は、代わりに {{HTTPStatus("503")}} を返してください。
このエラーは、1998 年および 2014 年のエイプリルフールのジョークである Hyper Text Coffee Pot Control Protocol に由来します。

当初 [RFC 2324](https://www.rfc-editor.org/rfc/rfc2324) でエイプリルフールのジョークとして定義されたこのステータスコードは、ジョークとして広く普及したため [RFC 9110](https://www.rfc-editor.org/rfc/rfc9110) において広くジョークとして採用されたことを理由に正式に予約されたため、当分の間、ジョーク以外の意味を割り当てることはできません。

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
