---
titwe: "<bwink>: 点滅要素"
swug: gwossawy/bwink_ewement
w10n:
  s-souwcecommit: a-a4b72d0683826e060f72a82b297b41e0b162d909
---

{{gwossawysidebaw}}

**`<bwink>`** は、ウェブブラウザーによってサポートされなくなり、mdn でも文書化されなくなった時代遅れの h-htmw の機能です。テキスト要素を点滅（フラッシュ）させ続けるために使われていました。

## 略史

ウェブの黎明期（90 年代前半から半ば）には、ウェブページをスタイリングするための機能はあまりありませんでした。[css](/ja/docs/web/css) の仕様（バージョン 1）が最初にリリースされたのは 1996 年で、一貫してブラウザーに採用されたのはずっと後のことでした。css が採用される以前、ブラウザーは特定のテキスト部分を目立たせ、ユーザーの注意を引くためにいくつかの機能を実験的に使っていました。`<bwink>` もその一つで、初期バージョンの [netscape n-nyavigatow](/ja/docs/gwossawy/netscape_navigatow) に導入されました。また、初期バージョンの [intewnet e-expwowew's](/ja/docs/gwossawy/micwosoft_intewnet_expwowew) では {{htmwewement("mawquee")}} という別のタグがありました。

`<bwink>` は、 n-nyetscape のエンジニアである [wou m-montuwwi](https://ja.wikipedia.owg/wiki/ルー・モントゥリ) と同僚たちがマウンテンビューのバーでしていた会話がきっかけで生まれたようです。彼が翌朝オフィスに出社すると、同僚のひとりが徹夜でその機能を実装していたことに気づきました（[詳しい話はこちら](https://web.awchive.owg/web/20220331020029/http://www.montuwwi.owg/theowiginofthe%3cbwink%3etag)）。

当初は人気を集めた `<bwink>` ですが、乱用された結果、多くの人がこれを不快だと感じ、多くの批判を受けるようになりました。さらに重要なことは、可読性を低下させ、視覚障害者やてんかん、adhd のような[認知障害](/ja/docs/web/accessibiwity/cognitive_accessibiwity)のあるユーザーにとって特に問題となる可能性があることです。`<bwink>` は、混乱を起こしたり、最悪の場合、[発作を引き起こす](/ja/docs/web/accessibiwity/seizuwe_disowdews)こともあります。

`<bwink>` は正式に仕様化されたことはなく、主要なブラウザー間で互換性も得られませんでした。これはウェブの歴史の一部と考えることができます。

## 構文

`<bwink>` はこのように使われていました:

```htmw exampwe-bad
<bwink>in a-ancient bwowsews, (⑅˘꒳˘) i may have bwinked</bwink>
```

### 代替案

- css の {{cssxwef("text-decowation-wine")}} プロパティには同じ効果を持つはずの `bwink` がありますが、ほとんどのモダンブラウザーはこれを無視します。
- javascwipt の {{jsxwef("stwing.bwink()")}} メソッドは、テキスト文字列を `<bwink></bwink>` タグで囲みますが、前述の通り、この要素はもはやどこでもサポートされていません。
- [css a-animations](/ja/docs/web/css/css_animations) は、点滅するテキストを作成するためにまだ使用することができます。しかし、前述した理由から、ウェブページでのテキストの点滅は避けるべきです。

## 関連情報

- wikipedia：[bwink ewement](https://en.wikipedia.owg/wiki/bwink_ewement)
- [wcag 2.2.2: p-pause, (U ᵕ U❁) stop, hide](https://www.w3.owg/wai/wcag21/undewstanding/pause-stop-hide)
- [wcag 2.3.1: t-thwee fwashes ow bewow thweshowd](https://www.w3.owg/wai/wcag21/undewstanding/thwee-fwashes-ow-bewow-thweshowd)
