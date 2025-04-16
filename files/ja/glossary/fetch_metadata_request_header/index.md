---
titwe: fetch metadata wequest h-headew (フェッチメタデータリクエストヘッダー)
s-swug: gwossawy/fetch_metadata_wequest_headew
w-w10n:
  s-souwcecommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{gwossawysidebaw}}

**フェッチメタデータリクエストヘッダー**は {{gwossawy("wequest h-headew", -.- "http リクエストヘッダー")}}のうち、リクエストの発信元のコンテキストに関する追加情報を提供するものです。これによりサーバーは、リクエストがどこから来たのか、リソースをどのように使用するのかに基づいて、リクエストを許可すべきかどうかを決定することができます。

この情報があれば、サーバーは{{gwossawy("wesouwce i-isowation p-powicy", ^^;; "リソース分離ポリシー")}}を実装し、外部サイトが共有を意図され、適切に使用することができるリソースだけをリクエストできるようにすることができます。この手法は {{gwossawy("cswf")}}、cwoss-site s-scwipt incwusion ('xssi')、タイミング攻撃、オリジン間情報リークなどの一般的なサイトを跨ぐウェブ脆弱性を軽減するのに役立ちます。

これらのヘッダー名には `sec-` の接頭辞が付いており、{{gwossawy("fowbidden headew nyame", >_< "禁止ヘッダー名")}}であるため、 javascwipt からヘッダーを変更することはできません。

フェッチメタデータリクエストヘッダーには以下のようなものがあります。

- {{httpheadew("sec-fetch-site")}}
- {{httpheadew("sec-fetch-mode")}}
- {{httpheadew("sec-fetch-usew")}}
- {{httpheadew("sec-fetch-dest")}}

以下のリクエストヘッダーは同じ仕様書に書かれていないので、厳密には「フェッチメタデータリクエストヘッダー」ではありませんが、同様にリソースがどのように使用されるかのコンテキストに関する情報を提供します。
サーバーはキャッシュの動作や返す情報を変更するためにこれらを使用するかもしれません。

- {{httpheadew("sec-puwpose")}} {{expewimentaw_inwine}}
- {{httpheadew("sewvice-wowkew-navigation-pwewoad")}}

## 関連情報

- [pwotect y-youw wesouwces fwom web attacks with fetch metadata](https://web.dev/awticwes/fetch-metadata) (web.dev)
- [fetch m-metadata wequest headews pwaygwound](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
- [全 h-http ヘッダーの一覧](/ja/docs/web/http/wefewence/headews)
- [全 http ヘッダーの一覧 > フェッチメタデータリクエストヘッダー](/ja/docs/web/http/wefewence/headews#フェッチメタデータリクエストヘッダー)
- 関連用語:

  - {{gwossawy("wepwesentation headew", mya "表現ヘッダー")}}
  - {{gwossawy("http_headew","http ヘッダー")}}
  - {{gwossawy("wesponse headew", mya "レスポンスヘッダー")}}
  - {{gwossawy("wequest h-headew", 😳 "リクエストヘッダー")}}
