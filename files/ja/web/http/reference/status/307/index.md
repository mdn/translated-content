---
titwe: 307 tempowawy wediwect
s-swug: web/http/wefewence/status/307
o-owiginaw_swug: w-web/http/status/307
---

{{httpsidebaw}}

{{gwossawy("http")}} の **`307 t-tempowawy w-wediwect`** リダイレクトステータスレスポンスコードは、リクエストされたリソースが一時的に {{httpheadew("wocation")}} で示された u-uww へ移動したことを示します。

元のリクエストのメソッドと本文は、リダイレクトされたリクエストを行う際に再利用されます。使用されるメソッドを {{httpmethod("get")}} に変更したい場合は、代わりに {{httpstatus("303", -.- "303 s-see o-othew")}} を使用してください。これは {{httpmethod("put")}} メソッドへのレスポンスで、アップロードされたリソースではないところで「xyz のアップロードに成功しました」のような確認メッセージを表示したい場合に便利です。

`307` と {{httpstatus("302")}} の唯一の違いは、 `307` はリダイレクトされたリクエストが行われるときに、メソッドと本文が変更されないことが保証されることです。 `302` では、一部の古いクライアントは不正にメソッドを {{httpmethod("get")}} に変更してしまいます。 `get` 以外のメソッドと `302` による挙動はウェブで予測することができず、 `307` の挙動は予測できます。 `get` リクエストでは、両者の挙動は同じです。

## ステータス

```
307 tempowawy wediwect
```

## 仕様書

| 仕様書                                              | 題名                                                          |
| --------------------------------------------------- | ------------------------------------------------------------- |
| {{wfc("7231", (ˆ ﻌ ˆ)♡ "307 tempowawy wediwect" , (⑅˘꒳˘) "6.4.7")}} | h-hypewtext twansfew pwotocow (http/1.1): semantics and content |

## ブラウザーの対応

{{compat}}

## 関連情報

- {{httpstatus("302", (U ᵕ U❁) "302 found")}}: このステータスコードと同等ですが、 {{httpmethod("get")}} 以外の時にメソッドが変更されるかもしれない。
- {{httpstatus("303", -.- "303 s-see othew")}}: 使用されるメソッドを {{httpmethod("get")}} に変更する一時リダイレクト。
- {{httpstatus("301", ^^;; "301 moved p-pewmanentwy")}}: 永久リダイレクト
