---
title: OpenType フォント特性の手引き
slug: Web/CSS/CSS_fonts/OpenType_fonts_guide
---

{{CSSRef}}

フォント特性 (font features) または異体字 (variants) とは、OpenType フォントに含まれるさまざまな字形や文字スタイルのことです。これらには、合字 ('fi' や 'ffl' などの文字を組み合わせた特別な字形)、カーニング (特定の文字の組み合わせの間隔の調整)、分数、数字のスタイルなどがあります。これらはすべて OpenType 機能と呼ばれ、特定のプロパティや低レベルの制御プロパティ - {{cssxref("font-feature-settings")}} を通じてウェブ上で使用できるようになっています。この記事では、CSS で OpenType フォント特性を使用するために必要なすべての知識を提供します。

フォントによっては、これらの特性のうち 1 つ以上が既定で有効になっているものもあれば (カーニングや既定の合字が一般的な例です)、特定の場面で有効にするかどうかをデザイナーや開発者に委ねているものもあります。

合字や lining 字形 (小文字のように見える 'oldstyle' とは対照的に、均等に並ぶ数字) のような広範な特性セットに加えて、スタイリスティックセット (一緒に使用することを意図した字形のいくつかの特定の異体字を含む場合がある)、代替字形 (文字 'a' の 1 つまたは複数の異体字の場合がある)、あるいは東アジアの言語のための言語固有の変更など、非常に特殊なものもあります。後者の場合、これらの変更は、その言語を適切に表現するために実際に必要なものであり、他のほとんどの OpenType 機能のようなスタイル上の好みよりも重要です。

> **警告:** フォントの特性を利用するために多くの CSS 属性が定義されていますが、残念ながらその多くは完全には実装されていません。これらはすべて定義されており、ここで紹介されていますが、多くは下位レベルの {{cssxref("font-feature-settings")}} プロパティでのみ動作します。両方の方法で動作するように CSS を記述することは可能ですが、これは面倒なことになります。すべてに `font-feature-settings` を使う場合の問題点は、個々の特性を変更するたびに、文字列全体を再定義しなければならないことです (可変フォントを {{cssxref("font-variation-settings")}} で操作するのと似ています)。

## フォントの特性の有無の確認

これは、フォントに付属しているドキュメントがない場合、最も厄介な問題です (多くのフォントデザイナーや工房がサンプルページや CSS を提供しているのはこのためです)。しかし、簡単に解決できるサイトもあります。 [wakamaifondue.com](https://wakamaifondue.com) にアクセスして、指示された円の上にフォントファイルをドロップすると、すぐにフォントのすべての特性と特徴に関する完全なレポートが得られます。 [Axis-praxis.org](https://axis-praxis.org) も同様の機能を提供しており、特性をクリックすると、指定したテキストブロックでそれらをオンまたはオフにすることができます。

## 使用する理由

これらの特性の知識を得て使用するには少し手間がかかることを考えると、「なぜわざわざ使うのか」という疑問が湧くのも無理はありません。その答えは、サイトをより便利に、より読みやすく、より洗練されたものにするための具体的な機能にあります。

- 'ff' や 'fi' のような**合字**を使うと、文字の間隔がより均一になり、よりスムーズに読めるようになります。
- **分数**を使うことで、日曜大工やレシピのサイトがより見やすく、分かりやすくなります。
- テキストの段落内の**数字**を 'oldstyle' に設定すると、小文字の間でより見やすくに配置され、同様に数字を 'tabular numbers' に設定すると、金額のリストを表に設定したときに見やすく並びます。一方、 'lining' の数字は、単独でも、大文字の単語の前でも、より統一感があります。

どの特性も、それがないからといってサイトが使えなくなるわけではありませんが、それぞれの特性があることで、より使いやすく、より印象に残るサイトになります。

> OpenType の特性は、フォントの秘密のコンパートメントのようなものです。それらを利用できるようにすることで、フォントの外観や動作を微妙に、あるいは劇的に変化させる方法を見つけることができます。すべての OpenType 特性が常に使用するのに適しているわけではありませんが、いくつかの特性は優れた組版に不可欠です。 _-- Tim Brown, Head of Typography at Adobe_.

### 時にはスタイルだけでなく本質になることも

また、場合によっては — {{cssxref("font-variant-east-asian")}} のように — OpenType の特性が、特定の異体字を使用することに直結しており、それが意味や読みやすさに影響を与えることがあります。このようなケースでは、単なる飾りではなく、コンテンツ自体に不可欠な要素となります。

## フォントの特性

考慮すべき特性がいくつかあります。ここでは、W3C の仕様書に記載されている主な属性やオプションに沿ってグループ化し、説明しています。

> **メモ:** 以下の例では、プロパティといくつかの組み合わせ例を、同等の低水準構文とともに示しています。ブラウザーの実装に不整合があるため、完全には一致しないかもしれませんが、多くの場合、一つ目の例は二つ目の例と一致します。表示されている書体は、Playfair Display、Source Serif Pro、IBM Plex Serif、Dancing Script、Kokoro です (すべて入手可能で無料で使用でき、ほとんどは Google Fonts やその他のサービスで提供されています)。

### カーニング ({{cssxref("font-kerning")}})

これは、特定の文字の組み合わせの間隔を意味します。これは通常、既定でオンになっています (OpenType 仕様で推奨されています)。なお、{{cssxref("letter-spacing")}} もテキストに設定されている場合は、カーニングの後に適用されますので注意が必要です。

{{EmbedGHLiveSample("css-examples/font-features/font-kerning.html", '100%', 520)}}

### 代替字形 ({{cssxref("font-variant-alternates")}})

フォントは、小文字の 'a' の異なるスタイルや、筆記体における多かれ少なかれ精巧なスワッシュのように、様々な字形に対して多くの異なる代替案を提供することができます。このプロパティは、与えられた値に応じて、代替案のセット全体を有効にすることも、特定のものだけを有効にすることもできます。以下の例は、代替文字を扱う際のいくつかの異なる側面を示しています。代替字形を持つフォントでは、代替字形を全体的に使用できるようにすることも、個別のスタイルセットや個々の文字で個別に使用できるようにすることもできます。この例では、2 つの異なる書体と、{{cssxref("@font-feature-values")}} アットルールの導入を見ることができます。これは、フォントファミリーごとに定義できるショートカットや名前付きオプションを定義するためのものです。このようにして、単一のフォントにのみ適用される名前付きオプションや、共有されてより一般的に適用される名前付きオプションを作成することができます。

{{EmbedGHLiveSample("css-examples/font-features/font-variant-alternates.html", '100%', 800)}}

この場合、`@stylistic(alternates)` は、どちらのフォントの代替文字もすべて表示します。これを 'My' という単語だけに適用すると、'M' のレンダリング方法が変わり、`@styleset(alt-a)` を適用すると、小文字の 'a' だけが変わります。

次の行を

```css
font-variant-alternates: styleset(alt-a);
```

このように変更してみてください。

```css
font-variant-alternates: styleset(alt-g);
```

小文字の 'a' が標準形に戻り、小文字の 'g' が代わりに変化するのが分かるでしょう。

#### 代替字形の詳細

- <https://www.w3.org/TR/css-fonts-4/#propdef-font-variant-alternates>
- [https://developer.mozilla.org/ja/docs/Web/CSS/font-variant-alternates](/ja/docs/Web/CSS/font-variant-alternates)

### 合字 ({{cssxref("font-variant-ligatures")}})

合字とは、2 つ以上の別々の文字を、(間隔や美観の観点から) よりスムーズに表現するために置き換える字形のことです。最も一般的なものとしては、'fi', 'fl', 'ffl' などの文字がありますが、他にも様々な可能性があります。最も頻繁に使用される合字 (一般的な合字と呼ばれています) の他に、「任意合字」、「歴史的合字」、「文脈上の代替合字」などのより専門的なカテゴリーがあります。これらは厳密には合字ではありませんが、特定の文字の組み合わせを置き換えるという点では共通しています。

スクリプト書体ではよく見られますが、下の例では矢印を作るために使われています。

{{EmbedGHLiveSample("css-examples/font-features/font-variant-ligatures.html", '100%', 540)}}

### 位置 ({{cssxref("font-variant-position")}})

位置の変化形は、植字の上付き文字や下付き文字のグリフを有効にするために使用されます。これらは、ベースラインやラインスペーシングを変更することなく、周囲のテキストと連動するように設計されています。これは {{htmlelement("sub")}} や {{htmlelement("sup")}} 要素を使用した場合と比較して、重要な利点の一つです。

{{EmbedGHLiveSample("css-examples/font-features/font-variant-position.html", '100%', 550)}}

### 大文字 ({{cssxref("font-variant-caps")}})

OpenType 特性の一般的な使用例の 1 つに、適切なスモールキャップがあります。これは、小文字の中に収まるようにサイズを調整した大文字で、一般的には頭文字や略語に使用されます。

{{EmbedGHLiveSample("css-examples/font-features/font-variant-caps.html", '100%', 620)}}

### 数字 ({{cssxref("font-variant-numeric")}})

フォントに含まれる数字には、いくつかの種類があります。

- 'Lining' の数字はすべて同じ高さで、同じベースライン上にあります。
- 'Oldstyle' の数字は高さが混在しており、他の小文字と同様にアセンダーとディセンダーの外観を持つようにデザインされています。これらの数字は、スモールキャップと同様に、数字が周囲の字形と視覚的に調和するように、コピーと一緒にインラインで使用されるように設計されています。

また、スペーシングという考え方もあります。プロポーショナルスペーシングは通常の設定で、タビュラースペーシングは文字幅に関係なく数字を均等に並べることができ、財務諸表の数字の表を並べるのに適しています。

このプロパティでは、2 種類の分数がサポートされています。

- 斜めに分けられた分数
- 垂直に積み上げられた分数

序数にも対応しています ('1st' や '3rd' など)。また、フォント内にスラッシュ付きのゼロがある場合は、それにも対応しています。

#### Lining と Oldstyle の字形

{{EmbedGHLiveSample("css-examples/font-features/font-variant-numeric.html", '100%', 560)}}

#### 分数、序数、スラッシュ付きのゼロ

{{EmbedGHLiveSample("css-examples/font-features/font-variant-numeric-frac.html", '100%', 600)}}

### 東アジアの文字 ({{cssxref("font-variant-east-asian")}})

これにより、フォント内のさまざまな代替字形にアクセスすることができます。下の例では、OpenType セット 'jis78' のみを有効にした字形の文字列を示しています。下のボックスのチェックを外すと、より多くの文字が表示されます。

{{EmbedGHLiveSample("css-examples/font-features/font-variant-east-asian.html", '100%', 750)}}

> **メモ:** これらのグリフはフォントサンプルからコピーされたもので、散文を意図したものではありません。

### フォントの異体字の一括指定 ({{Cssxref("font-variant")}})

これは、上記のすべてを定義するための一括指定構文です。`normal` という値を設定すると、すべてのプロパティが初期値にリセットされます。値を `none` に設定すると、`font-variant-ligatures` を none に設定し、他のすべてのプロパティを初期値に戻します。(つまり、カーニングが既定でオンになっている場合は、ここで `none` の値を与えても、カーニングはオンのままです)。

{{EmbedGHLiveSample("css-examples/font-features/font-variant.html", '100%', 600)}}

## フォント特性の設定

{{cssxref("font-feature-settings")}} は、名前の付いた利用可能なすべての OpenType 特性へ明示的にアクセスできる「低水準構文」です。これにより、多くの制御が可能になりますが、継承への影響や、前述したように、1 つの設定を変更したい場合には、文字列全体を再宣言しなければなりません ([CSS カスタムプロパティ](/ja/docs/Web/CSS/Using_CSS_custom_properties)を使用して値を設定している場合を除く)。そのため、可能な限り上記の標準プロパティを使用することをお勧めします。

膨大な数の特性が考えられます。上にいくつかの例を示しましたが、さらに多くの特性を見つけるためのリソースもいくつかあります。

一般的な構文は次のようになります。

```css
.small-caps {
  font-feature-settings: "smcp", "c2sc";
}
```

仕様書によると、4 文字の特性コードだけを指定するか、コードの後に 1 を指定することで特性を有効にすることができ、また、 0 を指定することで特性を無効にすることができます。これは、合字のような既定で有効になっている特性を、次のようにして無効にしておきたい場合に便利です。

```css
.no-ligatures {
  font-feature-settings:
    "liga" 0,
    "dlig" 0;
}
```

#### font-feature-settings のコードについてより詳しく

- ['The Complete CSS Demo for OpenType Features'](https://sparanoid.com/lab/opentype-features/) (can't vouch for the truth of the name, but it's pretty big)
- [A list of OpenType features on Wikipedia](https://en.wikipedia.org/wiki/List_of_typographic_features)

## CSS の機能検出を利用した実装

すべてのプロパティが均等に実装されているわけではないので、CSS を設定するのに機能検出を使用して正しいプロパティを使用できるようにし、{{cssxref("font-feature-settings")}} を代替として使用するのがよいでしょう。

例えば、スモールキャップはいくつかの方法で設定することができますが、基本的な大文字に関わらず、最終的にすべてをスモールキャップにしたい場合は、 {{cssxref("font-variant-caps")}} を使った 1 つのプロパティ値ではなく、`font-feature-settings` を使った 2 つの設定が必要になります。

```css
.small-caps {
  font-feature-settings: "smcp", "c2sc";
}

@supports (font-variant-caps: all-small-caps) {
  .small-caps {
    font-feature-settings: normal;
    font-variant-caps: all-small-caps;
  }
}
```

## 関連情報

### CSS の OpenType 機能の CSS による実演

- [The Complete CSS Demo for OpenType Features](https://sparanoid.com/lab/opentype-features/)

### ウェブフォント解析ツール

- [Wakamai Fondue](https://wakamaifondue.com)
- [Axis Praxis](https://axis-praxis.org)

### W3C 標準

- [Font Feature Properties in CSS Fonts Module Level 3](https://drafts.csswg.org/css-fonts-3/#font-rend-props)
  - 〔日本語訳〕[CSS フォントモジュール第 3 水準におけるフォント特性プロパティ](https://triple-underscore.github.io/css-fonts-ja.html#font-rend-desc)
- [font-variant-alternatives in CSS Fonts Module Level 4](https://www.w3.org/TR/css-fonts-4/#propdef-font-variant-alternates)
  - 〔日本語訳〕[CSS フォントモジュール第 4 水準における font-variant-alternatives](https://triple-underscore.github.io/css-fonts4-ja.html#propdef-font-variant-alternates)

## その他の文献

- [OpenType機能の使用](https://helpx.adobe.com/jp/fonts/using/use-open-type-features.html) - アドビ
- [CSSでのOpenType機能の構文](https://helpx.adobe.com/jp/fonts/using/open-type-syntax.html) - アドビ
