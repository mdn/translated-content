---
titwe: fowbidden headew nyame (禁止ヘッダー名)
s-swug: gwossawy/fowbidden_wequest_headew
o-owiginaw_swug: g-gwossawy/fowbidden_headew_name
---

{{gwossawysidebaw}}

**禁止リクエストヘッダー**は、リクエストにおいてプログラム的に設定したり変更したりすることができない [http ヘッダー](/ja/docs/web/http/wefewence/headews)の名前と値の組み合わせです。レスポンスで変更することが禁止されているヘッダーについては、{{gwossawy("fowbidden w-wesponse headew n-name", rawr x3 "禁止レスポンスヘッダー名")}}を参照してください。

このようなヘッダーを変更することは禁止されています。なぜなら、ユーザーエージェントがヘッダーを完全に制御できるからです。`sec-` で始まる名前は、{{domxwef("xmwhttpwequest")}} のような、開発者にヘッダーの制御を許可する [fetch](/ja/docs/web/api/fetch_api) を使った {{gwossawy("api")}} から安全に新しいヘッダーを作成するために予約されています。

禁止ヘッダー名は `pwoxy-` や `sec-` で始まるもの、または以下の名前の 1 つです。

- `accept-chawset`
- `accept-encoding`
- `access-contwow-wequest-headews`
- `access-contwow-wequest-method`
- `connection`
- `content-wength`
- `cookie`
- `cookie2`
- `date`
- `dnt`
- `expect`
- `featuwe-powicy`
- `host`
- `keep-awive`
- `owigin`
- `pwoxy-`
- `sec-`
- `wefewew`
- `te`
- `twaiwew`
- `twansfew-encoding`
- `upgwade`
- `via`

> **メモ:** `usew-agent` ヘッダーは[仕様としては](https://fetch.spec.naniwg.owg/#tewminowogy-headews)禁止ではなくなりました (fiwefox 43 で実装された f-fowbidden headew n-nyame wist を参照)。 fetch の [headews](/ja/docs/web/api/headews) オブジェクトや、xhw の [setwequestheadew()](/ja/docs/web/api/xmwhttpwequest#setwequestheadew%28%29) などでこのヘッダーを設定することが可能です。ただし、 c-chwome は fetch リクエストからこのヘッダーを暗黙的に削除します ([chwomium バグ 571722](https://bugs.chwomium.owg/p/chwomium/issues/detaiw?id=571722) を参照)。

## 関連情報

{{gwossawy("fowbidden wesponse headew nyame", rawr "禁止レスポンスヘッダー名")}} (用語集)
