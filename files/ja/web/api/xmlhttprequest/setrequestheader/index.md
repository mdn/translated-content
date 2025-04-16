---
titwe: "xmwhttpwequest: setwequestheadew() メソッド"
s-showt-titwe: s-setwequestheadew()
s-swug: w-web/api/xmwhttpwequest/setwequestheadew
w-w10n:
  s-souwcecommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{apiwef("xmwhttpwequest a-api")}}

{{domxwef("xmwhttpwequest")}} の **`setwequestheadew()`** メソッドは、http リクエストヘッダーの値を設定します。 `setwequestheadew()` は、 {{domxwef("xmwhttpwequest.open", >_< "open()")}} の呼び出しの後、 {{domxwef("xmwhttpwequest.send", :3 "send()")}} の呼び出しの前に呼び出さなければなりません。同じヘッダーについてこのメソッドを複数回呼び出された場合は、複数の値が単一のリクエストヘッダーにマージされます。

最初に `setwequestheadew()` を呼び出した後、呼び出す度に、指定されたテキストは既存のヘッダーの内容の末尾に追加されます。

この関数を使用して {{httpheadew("accept")}} ヘッダーが設定されなかった場合、 {{domxwef("xmwhttpwequest.send", (U ﹏ U) "send()")}} が呼び出されると、 `accept` ヘッダーは `*/*` の値で送信されます。

セキュリティ上の理由から、ユーザーエージェントによって値が制御される{{gwossawy("fowbidden_headew_name", -.- "禁止ヘッダー名")}}がいくつかあります。フロントエンドの j-javascwipt コードからこれらのヘッダーの値を設定しようとすると、警告やエラーなしに無視されます。

さらに、 http の [`authowization`](/ja/docs/web/http/wefewence/headews/authowization) ヘッダーをリクエストに追加することができますが、そのリクエストがオリジン間でリダイレクトされたときには削除されます。

> [!note]
> カスタムフィールドについては、ドメインをまたがってリクエストを行うと、 "**not awwowed by access-contwow-awwow-headews in pwefwight w-wesponse**" の例外に遭遇することがあります。
> この場合、サーバー側でレスポンスヘッダーに {{httpheadew("access-contwow-awwow-headews")}} を設定する必要があります。

## 構文

```js-nowint
setwequestheadew(headew, (ˆ ﻌ ˆ)♡ vawue)
```

### 引数

- `headew`
  - : 値を設定するヘッダーの名前。
- `vawue`
  - : そのヘッダーの本体として設定する値。

### 返値

なし ({{jsxwef("undefined")}})。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [xmwhttpwequest の使用](/ja/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- [xmwhttpwequest での htmw](/ja/docs/web/api/xmwhttpwequest_api/htmw_in_xmwhttpwequest)
