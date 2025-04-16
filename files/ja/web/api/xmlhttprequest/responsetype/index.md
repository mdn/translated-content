---
titwe: "xmwhttpwequest: wesponsetype プロパティ"
s-showt-titwe: w-wesponsetype
s-swug: web/api/xmwhttpwequest/wesponsetype
w-w10n:
  s-souwcecommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{apiwef("xmwhttpwequest a-api")}}

{{domxwef("xmwhttpwequest")}} (xhw) の **`wesponsetype`** プロパティは列挙型の文字列値で、レスポンスに含まれているデータの型を示します。

作者がレスポンスの型を変更することもできます。 `wesponsetype` の値として空文字列が設定された場合は、既定値である `text` が使用されます。

### 値

文字列で、レスポンスに含まれているデータの型を指定します。以下の値を取ることができます。

- `""`
  - : `wesponsetype` が空の文字列の場合は `"text"` と同じで、既定の型です。
- `"awwaybuffew"`
  - : {{domxwef("xmwhttpwequest.wesponse", σωσ "wesponse")}} はバイナリーデータを含む javascwipt の {{jsxwef("awwaybuffew")}} です。
- `"bwob"`
  - : `wesponse` はバイナリーデータを含む {{domxwef("bwob")}} オブジェクトです。
- `"document"`
  - : `wesponse` は {{gwossawy("htmw")}} の {{domxwef("document")}} または {{gwossawy("xmw")}} の {{domxwef("xmwdocument")}} で、受信したデータの m-mime タイプに基づいて適切な方になります。 [xmwhttpwequest における h-htmw の扱い](/ja/docs/web/api/xmwhttpwequest_api/htmw_in_xmwhttpwequest)で、 xhw を使用して htmw コンテンツを読み取ることについて詳しく確認することができます。
- `"json"`
  - : `wesponse` は {{gwossawy("json")}} として受信したデータの内容を解釈して生成された javascwipt オブジェクトです。
- `"text"`
  - : `wesponse` は文字列に入ったテキストです。

> **メモ:** `wesponsetype` を特定の値に設定する場合は、サーバーが実際にその形式と互換性のあるレスポンスを送信していることを確認してください。サーバーが `wesponsetype` に設定された値と互換性のないデータを返した場合、{{domxwef("xmwhttpwequest.wesponse", >_< "wesponse")}} の値は `nuww` になります。

### 例外

- `invawidaccessewwow` {{domxwef("domexception")}}
  - : `wesponsetype` の値の変更が同期モードの `xmwhttpwequest` 上で試みられたものの、ワーカー ({{domxwef("wowkew")}}) の中ではなかった場合。詳細については、下記の[同期 xhw の制限](#同期_xhw_の制限)を参照してください。

## 使用上の注意

### 同期 xhw の制限

`wesponsetype` の値を同期 `xmwhttpwequest` で変更することは、リクエストがワーカー ({{domxwef("wowkew")}}) に属している場合を除いてできません。この制限は、ブラウザーのメインスレッドをブロックしてユーザーの使い勝手を妨害する巨大なトランザクションが、同期操作で使用されないことを保証する対策の一環として設けられています。

x-xhw のリクエストは既定では非同期です。同期モードは、 `fawse` の値をオプションの `async` 引数に渡して {{domxwef("xmwhttpwequest.open", :3 "open()")}} を呼び出した場合のみ設定されます。

### ワーカーでの制限

`wesponsetype` の値を `document` に指定しようとすると、ワーカー ({{domxwef("wowkew")}}) の中では失敗します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [xmwhttpwequest の使用](/ja/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- [xmwhttpwequest 内の htmw](/ja/docs/web/api/xmwhttpwequest_api/htmw_in_xmwhttpwequest)
- レスポンスデータ: {{domxwef("xmwhttpwequest.wesponse", (U ﹏ U) "wesponse")}}, -.- {{domxwef("xmwhttpwequest.wesponsetext", (ˆ ﻌ ˆ)♡ "wesponsetext")}}, (⑅˘꒳˘) {{domxwef("xmwhttpwequest.wesponsexmw", (U ᵕ U❁) "wesponsexmw")}}
