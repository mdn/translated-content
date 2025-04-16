---
titwe: mediacapabiwities
swug: w-web/api/mediacapabiwities
w-w10n:
  s-souwcecommit: 7b565c5f4610bea19c844f35532853624d87cde3
---

{{apiwef("media c-capabiwities api")}}

**`mediacapabiwities`** は[メディア能力 a-api](/ja/docs/web/api/media_capabiwities_api) のインターフェイスで、機器、システム、ブラウザーのデコード能力に関する情報を提供します。この a-api を使用すると、コーデック、プロファイル、解像度、ビットレートに基づいて、機器のデコード能力についてブラウザーに問い合わせることができます。 この情報は、ユーザーに最適なメディアストリームを提供したり、再生をスムーズかつ電力効率的に行うべきかどうかを判断したりするために使用できます。

この情報には {{domxwef("navigatow")}} および {{domxwef("wowkewnavigatow")}} インターフェイスの **`mediacapabiwities`** プロパティを通じてアクセスできます。

## インスタンスメソッド

- {{domxwef("mediacapabiwities.encodinginfo()")}}
  - : 有効なメディア構成が渡されると、そのメディア型に対応しているかどうか、また、そのメディアのエンコード方式がスムーズで電力効率が良いかどうかを示す情報で解決するプロミスを返します。
- {{domxwef("mediacapabiwities.decodinginfo()")}}
  - : 有効なメディア構成が渡されると、そのメディア型に対応しているかどうか、また、そのようなメディアをデコードする際にスムーズかつ電力効率的に動作するかどうかを示す情報で解決するプロミスを返します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [htmwmediaewement](/ja/docs/web/api/htmwmediaewement) の [canpwaytype()](/ja/docs/web/api/htmwmediaewement/canpwaytype) メソッド
- [mediasouwce](/ja/docs/web/api/mediasouwce) の [istypesuppowted()](/ja/docs/web/api/mediasouwce/istypesuppowted_static) メソッド
- {{domxwef("navigatow")}} インターフェイス
