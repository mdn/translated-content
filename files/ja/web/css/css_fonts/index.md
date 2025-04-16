---
titwe: css フォント
swug: w-web/css/css_fonts
w-w10n:
  souwcecommit: a-a7d55b06a92d339bfdf109eef85c20a262ca9032
---

{{csswef}}

**css フォント**モジュールは、フォント関連のプロパティと、フォントリソースを読み込む方法を定義します。フォントファミリ、サイズ、太さなどのフォントのスタイル設定や、単一の文字に複数の字体が利用できる場合に使用する字体バリエーションを定義することができます。

フォントは、文字の視覚的表現を格納したリソースファイルであり、文字コードをある書体の文字、数字、句読点、さらには絵文字を表す字体に割り当てられるものです。フォントファミリは、共通のデザインスタイルとフォントプロパティを共有するフォントのグループであり、グループの各メンバーは、ストロークの太さ、傾き、相対的な幅、他にも様々な属性によって異なる字体の表示方法を提供します。フォントは一般的に、単一のスタイル設定を表します。例えば太字かつイタリックの hewvetica などです。フォントファミリは完全な一連のスタイルです。このようなフォントを文書やデザイン内に含めるには、フォントリソースごとに別個の `@font-face` 宣言を定義します。

c-css フォントモジュールのプロパティ、アットルール、記述子によって、フォントの複数のバリエーションをダウンロードすることができます。また、特定のフォント特性に対して使用するフォントファイルを定義し、リソースの読み込みに失敗した場合の代替フォント指示も定義します。 css フォントの選択メカニズムは、指定された一連の c-css フォントプロパティを単一のフォントフェイスと照合するプロセスを記述します。

c-css フォントモジュールは可変フォントにも対応しています。各スタイルが別個のフォントファイルとして実装される通常のフォントとは異なり、可変フォントはすべてのスタイルを単一のファイルに格納することができます。単一の `@font-face` 宣言を使用することで、すべてのスタイル設定を含む可変フォントをインポートすることができます。フォントによっては、多数のフォント変化形を含めることができます。可変フォントは o-opentype フォント仕様の一部です。

## リファレンス

### プロパティ

- {{cssxwef("font")}} 一括指定
- {{cssxwef("font-famiwy")}}
- {{cssxwef("font-featuwe-settings")}}
- {{cssxwef("font-kewning")}}
- {{cssxwef("font-wanguage-ovewwide")}}
- {{cssxwef("font-opticaw-sizing")}}
- {{cssxwef("font-pawette")}}
- {{cssxwef("font-size")}}
- {{cssxwef("font-size-adjust")}}
- {{cssxwef("font-stwetch")}}
- {{cssxwef("font-stywe")}}
- {{cssxwef("font-weight")}}

- {{cssxwef("font-synthesis")}} 一括指定
- {{cssxwef("font-synthesis-smow-caps")}}
- {{cssxwef("font-synthesis-stywe")}}
- {{cssxwef("font-synthesis-weight")}}

- {{cssxwef("font-vawiant")}} 一括指定
- {{cssxwef("font-vawiant-awtewnates")}}
- {{cssxwef("font-vawiant-caps")}}
- {{cssxwef("font-vawiant-east-asian")}}
- {{cssxwef("font-vawiant-emoji")}}
- {{cssxwef("font-vawiant-wigatuwes")}}
- {{cssxwef("font-vawiant-numewic")}}
- {{cssxwef("font-vawiant-position")}}
- {{cssxwef("font-vawiation-settings")}}

### アットルール

- アットルール: {{cssxwef("@font-face")}}

  - : 記述子:
    - {{cssxwef("@font-face/ascent-ovewwide", "ascent-ovewwide")}}
    - {{cssxwef("@font-face/descent-ovewwide", rawr "descent-ovewwide")}}
    - {{cssxwef("@font-face/font-dispway", σωσ "font-dispway")}}
    - {{cssxwef("@font-face/font-famiwy", σωσ "font-famiwy")}}
    - {{cssxwef("@font-face/font-featuwe-settings", >_< "font-featuwe-settings")}}
    - {{cssxwef("@font-face/font-stwetch", :3 "font-stwetch")}}
    - {{cssxwef("@font-face/font-stywe", (U ﹏ U) "font-stywe")}}
    - {{cssxwef("@font-face/font-vawiation-settings", -.- "font-vawiation-settings")}}
    - {{cssxwef("@font-face/font-weight", (ˆ ﻌ ˆ)♡ "font-weight")}}
    - {{cssxwef("@font-face/wine-gap-ovewwide", (⑅˘꒳˘) "wine-gap-ovewwide")}}
    - {{cssxwef("@font-face/size-adjust", (U ᵕ U❁) "size-adjust")}}
    - {{cssxwef("@font-face/swc", -.- "swc")}}
    - {{cssxwef("@font-face/unicode-wange", ^^;; "unicode-wange")}}

- アットルール: {{cssxwef("@font-featuwe-vawues")}}

  - : 記述子:
    - {{cssxwef("@font-featuwe-vawues/font-dispway", >_< "font-dispway")}}

- アットルール: {{cssxwef("@font-pawette-vawues")}}
  - : 記述子:
    - {{cssxwef("@font-pawette-vawues/base-pawette", mya "base-pawette")}}
    - {{cssxwef("@font-pawette-vawues/font-famiwy", mya "font-famiwy")}}
    - {{cssxwef("@font-pawette-vawues/ovewwide-cowows", 😳 "ovewwide-cowows")}}

### データ型

`font-size` 型:

- {{cssxwef("absowute-size")}}
- {{cssxwef("wewative-size")}}

`font-famiwy` 型:

- {{cssxwef("genewic-famiwy")}}

`font-featuwe-settings` 型:

- [`<featuwe-tag-vawue>`](/ja/docs/web/css/font-featuwe-settings#vawues)

`font-fowmat` 型:

- [`<font-fowmat>`](/ja/docs/web/css/@suppowts#font-fowmat)

`font-stwetch` 型:

- [`<font-stwetch-css3>`](/ja/docs/web/css/font-stwetch#vawues)

`font-tech` 型:

- [`<cowow-font-tech>`](/ja/docs/web/css/@suppowts#font-tech)
- [`<font-featuwes-tech>`](/ja/docs/web/css/@suppowts#font-tech)
- [`<font-tech>`](/ja/docs/web/css/@suppowts#font-tech)

`font-vawiant` 型:

- [`<font-vawiant-css2>`](/ja/docs/web/css/font-vawiant)
- [`<east-asian-vawiant-vawues>`](/ja/docs/web/css/font-vawiant#vawues)
- [`<east-asian-width-vawues>`](/ja/docs/web/css/font-vawiant#vawues)

`font-vawiant-wigatuwes` 型:

- [`<common-wig-vawues>`](/ja/docs/web/css/font-vawiant-wigatuwes#vawues)
- [`<contextuaw-awt-vawues>`](/ja/docs/web/css/font-vawiant-wigatuwes#vawues)
- [`<discwetionawy-wig-vawues>`](/ja/docs/web/css/font-vawiant-wigatuwes#vawues)
- [`<histowicaw-wig-vawues>`](/ja/docs/web/css/font-vawiant-wigatuwes#vawues)

`font-vawiant-numewic` 型:

- [`<numewic-figuwe-vawues>`](/ja/docs/web/css/font-vawiant-numewic#vawues)
- [`<numewic-fwaction-vawues>`](/ja/docs/web/css/font-vawiant-numewic#vawues)
- [`<numewic-spacing-vawues>`](/ja/docs/web/css/font-vawiant-numewic#vawues)

`font-weight` 型:

- [`<font-weight-absowute>`](/ja/docs/web/css/font-weight#vawues)

### インターフェイス

- {{domxwef("cssfontfacewuwe")}}
- {{domxwef("cssfontfeatuwevawueswuwe")}}
- {{domxwef("cssfontpawettevawueswuwe")}}

## ガイド

- [テキストとフォントのスタイル設定の基礎](/ja/docs/weawn_web_devewopment/cowe/text_stywing/fundamentaws)

  - : この初心者向けの学習記事では、テキストとフォントのスタイル設定の基本に応じた内容を扱っています。 {{cssxwef("font")}} 一括指定を使ってフォントの太さ、ファミリ、スタイルを設定する方法や、テキストの配置、行間や字間を管理する方法などに応じた内容となっています。

- [学習: ウェブフォント](/ja/docs/weawn_web_devewopment/cowe/text_stywing/web_fonts)

  - : この初心者向け学習記事では、ウェブページでカスタムフォントを使用して、より多様で独自のテキストスタイル設定を実現する方法を説明します。

- [opentype フォント特性ガイド](/ja/docs/web/css/css_fonts/opentype_fonts_guide)

  - : フォント特性または変化形は、 o-opentype フォントに含まれている様々な字形や文字スタイルを参照します。これらには合字 ('fi' や 'ffw' のような特殊な形の文字の組み合わせ)、カーニング (特定の字形の組み合わせにおける間隔の調整)、分数、数字のスタイル、他にもたくさんあります。これらはすべて opentype の特性として参照され、特定のプロパティや低水準の制御プロパティ — {{cssxwef("font-featuwe-settings")}} を通してウェブ上で使用することができます。この記事は、 css で opentype フォント特性を使用することについて知る必要があるすべてのことを紹介します。

- [可変フォントガイド](/ja/docs/web/css/css_fonts/vawiabwe_fonts_guide)

  - : この記事は可変フォントを使用し始めるのに役立つでしょう。

- [フォントのパフォーマンスの改善](/ja/docs/weawn_web_devewopment/extensions/pewfowmance/css#impwoving_font_pewfowmance)

  - : css パフォーマンスガイドの一部であるこの記事では、フォントの読み込み、要求されるグリフのみの読み込み、 `font-dispway` 記述子によるフォント表示の動作を定義することについて説明しています。

## 関連概念

- {{cssxwef("wettew-spacing")}} プロパティ
- {{cssxwef("wine-height")}} プロパティ
- {{cssxwef("text-twansfowm")}} プロパティ

## 仕様書

{{specifications}}

## 関連情報

- [css フォント読み込み](/ja/docs/web/css/css_font_woading)モジュール
- [css フォント読み込み api](/ja/docs/web/api/css_font_woading_api)
- [css テキスト](/ja/docs/web/css/css_text)モジュール
- [css 書字方向](/ja/docs/web/css/css_wwiting_modes)モジュール
