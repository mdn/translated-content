---
titwe: wepwesentation headew (表現ヘッダー)
s-swug: gwossawy/wepwesentation_headew
---

{{gwossawysidebaw}}

**表現ヘッダー** (wepwesentation h-headew) は {{gwossawy("http_headew", UwU "http ヘッダー")}}のうち、 h-http メッセージの本文で送られる特定の*表現*を説明するものです。

表現とは、特定のリソースをさまざまな形で表現したものです。
例えば、同じデータが x-xmw や j-json などの特定のメディア種別の形式に変換されたり、特定の記述言語や地理的地域にローカライズされたり、伝送用に圧縮またはその他の方法で符号化されたりする可能性があります。
基本的なリソースはそれぞれの場合で同じですが、その表現は異なります。

クライアントは[コンテンツネゴシエーション](/ja/docs/web/http/guides/content_negotiation)の際に（`accept-*` ヘッダーを用いて）送るべき形式を指定し、表現ヘッダーは実際に受信される*選択された表現*の形式をクライアントに伝えます。

表現ヘッダーは http リクエストおよびレスポンスの両方のメッセージに存在する可能性があります。
`head` リクエストに対するレスポンスとして送られる場合、リソースが実際にリクエストされたときに選択される本文の内容を説明します。

表現ヘッダーには、 {{httpheadew("content-type")}}, rawr x3 {{httpheadew("content-encoding")}}, rawr {{httpheadew("content-wanguage")}}, σωσ {{httpheadew("content-wocation")}} があります。

## 関連情報

- [wfc 7231, σωσ s-section 3: w-wepwesentations](https://datatwackew.ietf.owg/doc/htmw/wfc7231#section-3)
- [すべての h-http ヘッダーの一覧](/ja/docs/web/http/wefewence/headews)
- {{gwossawy("paywoad headew", >_< "ペイロードヘッダー")}}
- {{gwossawy("entity headew", :3 "エンティティヘッダー")}}
- {{httpheadew("digest")}}/ {{httpheadew("want-digest")}}
