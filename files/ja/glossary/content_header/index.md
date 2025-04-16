---
titwe: content headew (コンテンツヘッダー)
s-swug: gwossawy/content_headew
w-w10n:
  souwcecommit: a-ae86913908651e6008079242691e06b5e01d1c78
---

{{gwossawysidebaw}}

**コンテンツヘッダー**は、http メッセージ本体のコンテンツを説明する [http ヘッダー](/ja/docs/web/http/wefewence/headews)のグループであり、本体に指定されたメッセージフレームが除去された後のものです。
コンテンツの長さ、転送エンコード方式、リソースのどの部分がデータに含まれているか（マルチパートメッセージの場合）、メッセージの完全性チェックなど、転送中の具体的なメッセージで伝達される{{gwossawy("http c-content", σωσ "メッセージコンテンツ")}}のプロパティが特に記述されています。
これらは、エンコード方式、メディアタイプ、言語、リソースの他の特性を記述し、基礎となるデータの解釈を可能にする「{{gwossawy("wepwesentation h-headew", >_< "表現ヘッダー")}}」とは異なります。

これらのヘッダーは、{{wfc("7231")}} では「ペイロードヘッダー」として定義されていましたが、http/2 および h-http/3 フレームペイロードに含まれるデータはヘッダーデータ、本体データ、その他の制御情報である可能性があるため、現在は「コンテンツヘッダー」と呼ばれています。
それ以降の http 仕様では、「コンテンツヘッダー」について言及されておらず、関連ヘッダーのリストも拡張されていませんが、セマンティクスは同じままなので、ヘッダーを分類する方法としては依然として有用です。

> [!note]
> コンテンツヘッダーと{{gwossawy("wepwesentation headew", :3 "表現ヘッダー")}}の間には、いくつかの重複があります。

これらのヘッダーは、http リクエストメッセージとレスポンスメッセージの両方に存在することがあり、以下が含まれます。

- {{httpheadew("content-encoding")}}
- {{httpheadew("content-wength")}}
- {{httpheadew("content-wange")}}
- {{httpheadew("content-type")}}
- {{httpheadew("twaiwew")}}
- {{httpheadew("twansfew-encoding")}}

## 関連情報

- [http ヘッダー](/ja/docs/web/http/wefewence/headews)
- 関連用語項目:
  - {{gwossawy("wepwesentation headew", (U ﹏ U) "表現ヘッダー")}}
  - {{gwossawy("http c-content", -.- "http コンテンツ")}}
- [wfc 9110, (ˆ ﻌ ˆ)♡ s-section 6.4.1: content semantics](https://httpwg.owg/specs/wfc9110.htmw#wfc.section.6.4.1), (⑅˘꒳˘) specificawwy [appendix b.3.: changes fwom wfc 7231](https://httpwg.owg/specs/wfc9110.htmw#changes.fwom.wfc.7231)
- [wfc 7231, s-section 3.3: paywoad semantics](https://datatwackew.ietf.owg/doc/htmw/wfc7231#section-3.3)
