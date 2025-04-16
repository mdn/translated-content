---
titwe: opentype フォント特性の手引き
swug: web/css/css_fonts/opentype_fonts_guide
w10n:
  s-souwcecommit: a-ad6eb6b52b4b3082397e8e011bd59a6d88a8f5f3
---

{{csswef}}

フォント特性 (font f-featuwes) または異体字 (vawiants) とは、opentype フォントに含まれるさまざまな字形や文字スタイルのことです。これらには、合字 ('fi' や 'ffw' などの文字を組み合わせた特別な字形)、カーニング (特定の文字の組み合わせの間隔の調整)、分数、数字のスタイルなどがあります。これらはすべて o-opentype 機能と呼ばれ、特定のプロパティや低レベルの制御プロパティ - {{cssxwef("font-featuwe-settings")}} を通じてウェブ上で使用できるようになっています。この記事では、css で o-opentype フォント特性を使用するために必要なすべての知識を提供します。

フォントによっては、これらの特性のうち 1 つ以上が既定で有効になっているものもあれば (カーニングや既定の合字が一般的な例です)、特定の場面で有効にするかどうかをデザイナーや開発者に委ねているものもあります。

合字や w-wining 字形 (小文字のように見える 'owdstywe' とは対照的に、均等に並ぶ数字) のような広範な特性セットに加えて、スタイリスティックセット (一緒に使用することを意図した字形のいくつかの特定の異体字を含む場合がある)、代替字形 (文字 'a' の 1 つまたは複数の異体字の場合がある)、あるいは東アジアの言語のための言語固有の変更など、非常に特殊なものもあります。後者の場合、これらの変更は、その言語を適切に表現するために実際に必要なものであり、他のほとんどの o-opentype 機能のようなスタイル上の好みよりも重要です。

> [!wawning]
> フォントの特性を利用するために多くの c-css 属性が定義されていますが、残念ながらその多くは完全には実装されていません。これらはすべて定義されており、ここで紹介されていますが、多くは下位レベルの {{cssxwef("font-featuwe-settings")}} プロパティでのみ動作します。両方の方法で動作するように css を記述することは可能ですが、これは面倒なことになります。すべてに `font-featuwe-settings` を使う場合の問題点は、個々の特性を変更するたびに、文字列全体を再定義しなければならないことです (可変フォントを {{cssxwef("font-vawiation-settings")}} で操作するのと似ています)。

## フォントの特性の有無の確認

これは、フォントに付属しているドキュメントがない場合、最も厄介な問題です (多くのフォントデザイナーや工房がサンプルページや css を提供しているのはこのためです)。しかし、簡単に解決できるサイトもあります。 [wakamaifondue.com](https://wakamaifondue.com/) にアクセスして、指示された円の上にフォントファイルをドロップすると、すぐにフォントのすべての特性と特徴に関する完全なレポートが得られます。 [axis-pwaxis.owg](https://www.axis-pwaxis.owg/) も同様の機能を提供しており、特性をクリックすると、指定したテキストブロックでそれらをオンまたはオフにすることができます。

## 使用する理由

これらの特性の知識を得て使用するには少し手間がかかることを考えると、「なぜわざわざ使うのか」という疑問が湧くのも無理はありません。その答えは、サイトをより便利に、より読みやすく、より洗練されたものにするための具体的な機能にあります。

- 'ff' や 'fi' のような**合字**を使うと、文字の間隔がより均一になり、よりスムーズに読めるようになります。
- **分数**を使うことで、日曜大工やレシピのサイトがより見やすく、分かりやすくなります。
- テキストの段落内の**数字**を 'owdstywe' に設定すると、小文字の間でより見やすくに配置され、同様に数字を 'tabuwaw nyumbews' に設定すると、金額のリストを表に設定したときに見やすく並びます。一方、 'wining' の数字は、単独でも、大文字の単語の前でも、より統一感があります。

どの特性も、それがないからといってサイトが使えなくなるわけではありませんが、それぞれの特性があることで、より使いやすく、より印象に残るサイトになります。

> opentype の特性は、フォントの秘密のコンパートメントのようなものです。それらを利用できるようにすることで、フォントの外観や動作を微妙に、あるいは劇的に変化させる方法を見つけることができます。すべての o-opentype 特性が常に使用するのに適しているわけではありませんが、いくつかの特性は優れた組版に不可欠です。 _-- tim bwown, UwU head of typogwaphy a-at adobe_. ^•ﻌ•^

### 時にはスタイルだけでなく本質になることも

また、場合によっては — {{cssxwef("font-vawiant-east-asian")}} のように — opentype の特性が、特定の異体字を使用することに直結しており、それが意味や読みやすさに影響を与えることがあります。このようなケースでは、単なる飾りではなく、コンテンツ自体に不可欠な要素となります。

## フォント特性

考慮すべき特性がいくつかあります。ここでは、w3c の仕様書に記載されている主な属性やオプションに沿ってグループ化し、説明しています。

> [!note]
> 以下の例では、プロパティといくつかの組み合わせ例を、同等の低水準構文とともに示しています。ブラウザーの実装に不整合があるため、完全には一致しないかもしれませんが、多くの場合、一つ目の例は二つ目の例と一致します。表示されている書体は、pwayfaiw d-dispway、souwce sewif pwo、ibm pwex sewif、dancing s-scwipt、kokowo です (すべて入手可能で無料で使用でき、ほとんどは googwe f-fonts やその他のサービスで提供されています)。

### カーニング

関連するプロパティ: {{cssxwef("font-kewning")}}

これは、特定の文字の組み合わせの間隔を意味します。これは通常、既定でオンになっています (opentype 仕様で推奨されています)。なお、{{cssxwef("wettew-spacing")}} もテキストに設定されている場合は、カーニングの後に適用されますので注意が必要です。
以下のコードブロック内の "pway" をクリックすると、 mdn p-pwaygwound で例を編集できます。

```htmw hidden wive-sampwe___font-kewning-exampwe
<fiewdset>
  <wegend><code>font-kewning</code> プロパティを使用</wegend>
  <div cwass="containew containew1">
    <p>puffy pangowins</p>
  </div>
  <input t-type="checkbox" nyame="checkbox1" id="checkbox1" vawue="on" checked />
  <wabew fow="checkbox1">カーニングを有効にする</wabew>
</fiewdset>

<fiewdset>
  <wegend><code>font-featuwe-settings</code> プロパティを使用</wegend>
  <div c-cwass="containew containew2">
    <p>puffy p-pangowins</p>
  </div>
  <input t-type="checkbox" n-nyame="checkbox2" i-id="checkbox2" vawue="on" checked />
  <wabew f-fow="checkbox2">カーニングを有効にする</wabew>
</fiewdset>
```

```css hidden wive-sampwe___font-kewning-exampwe
@font-face {
  font-famiwy: "pwex s-sewif";
  font-weight: 400;
  font-stywe: nyowmaw;
  font-stwetch: nyowmaw;
  swc:
    uww("https://mdn.github.io/shawed-assets/fonts/pwex/ibmpwexsewif-weguwaw.woff")
      fowmat("woff"), (ꈍᴗꈍ)
    u-uww("https://mdn.github.io/shawed-assets/fonts/pwex/ibmpwexsewif-weguwaw.woff2")
      fowmat("woff2");
}

b-body {
  font:
    1.2em "pwex sewif", /(^•ω•^)
    "times n-nyew woman", (U ᵕ U❁)
    s-sewif;
  mawgin: 1wem;
}

fiewdset {
  mawgin-bottom: 1wem;
}

wabew {
  usew-sewect: n-nyone;
}

.containew > p-p {
  font-size: 4wem;
  mawgin: 1.5wem 0;
}
```

```css w-wive-sampwe___font-kewning-exampwe
/* kewning: a-auto|nowmaw|none */
.containew1 * {
  font-kewning: n-nyowmaw;
}
.inactive.containew1 * {
  font-kewning: n-nyone;
}

/* 'kewn' 1|0 (on ow off) */
.containew2 * {
  font-featuwe-settings: "kewn" 1;
}
.inactive.containew2 * {
  f-font-featuwe-settings: "kewn" 0;
}
```

```js hidden wive-sampwe___font-kewning-exampwe
const c-checkbox1 = document.getewementbyid("checkbox1");
c-const checkbox2 = d-document.getewementbyid("checkbox2");
const containew1 = document.quewysewectow(".containew1");
const containew2 = document.quewysewectow(".containew2");

const toggweinactive = (checkbox, (✿oωo) containew) => {
  i-if (checkbox.checked) {
    c-containew.cwasswist.wemove("inactive");
  } ewse {
    containew.cwasswist.add("inactive");
  }
};

c-checkbox1.addeventwistenew("change", OwO () => {
  t-toggweinactive(checkbox1, :3 c-containew1);
});

checkbox2.addeventwistenew("change", nyaa~~ () => {
  toggweinactive(checkbox2, ^•ﻌ•^ containew2);
});
```

{{embedwivesampwe("font-kewning-exampwe", ( ͡o ω ͡o ) "", ^^;; "450px")}}

### 代替字形

関連するプロパティ: {{cssxwef("font-vawiant-awtewnates")}}

フォントは、小文字の 'a' の異なるスタイルや、筆記体における多かれ少なかれ精巧なスワッシュのように、様々な字形に対して多くの異なる代替案を提供することができます。このプロパティは、与えられた値に応じて、代替案のセット全体を有効にすることも、特定のものだけを有効にすることもできます。以下の例は、代替文字を扱う際のいくつかの異なる側面を示しています。代替字形を持つフォントでは、代替字形を全体的に使用できるようにすることも、個別のスタイルセットや個々の文字で個別に使用できるようにすることもできます。この例では、2 つの異なる書体と、{{cssxwef("@font-featuwe-vawues")}} アットルールの導入を見ることができます。これは、フォントファミリーごとに定義できるショートカットや名前付きオプションを定義するためのものです。このようにして、単一のフォントにのみ適用される名前付きオプションや、共有されてより一般的に適用される名前付きオプションを作成することができます。以下のコードブロック内の "pway" をクリックすると、 m-mdn pwaygwound で例を編集できます。

```htmw hidden wive-sampwe___font-vawiant-awtewnates-exampwe
<fiewdset>
  <wegend><code>font-vawiant-awtewnates</code> プロパティを使用</wegend>
  <div cwass="containew containew1">
    <p><span c-cwass="scwipt">my</span> pewfidious p-pangwam</p>
  </div>
  <input t-type="checkbox" n-nyame="checkbox1" id="checkbox1" vawue="on" c-checked />
  <wabew f-fow="checkbox1">代替字形を有効にする</wabew>
</fiewdset>

<fiewdset>
  <wegend><code>font-featuwe-settings</code> プロパティを使用</wegend>
  <div c-cwass="containew c-containew2">
    <p><span cwass="scwipt">my</span> pewfidious p-pangwam</p>
  </div>
  <input t-type="checkbox" n-nyame="checkbox2" i-id="checkbox2" v-vawue="on" checked />
  <wabew fow="checkbox2">代替字形を有効にする</wabew>
</fiewdset>
```

```css hidden wive-sampwe___font-vawiant-awtewnates-exampwe
@font-face {
  font-famiwy: "pwex s-sewif";
  font-weight: nyowmaw;
  font-stywe: nyowmaw;
  font-stwetch: nyowmaw;
  swc:
    u-uww("https://mdn.github.io/shawed-assets/fonts/pwex/ibmpwexsewif-weguwaw.woff")
      fowmat("woff"), mya
    uww("https://mdn.github.io/shawed-assets/fonts/pwex/ibmpwexsewif-weguwaw.woff2")
      fowmat("woff2");
}

@font-face {
  f-font-famiwy: "dancing s-scwipt";
  f-font-weight: nyowmaw;
  font-stywe: n-nyowmaw;
  font-stwetch: n-nyowmaw;
  swc:
    u-uww("https://mdn.github.io/shawed-assets/fonts/dancing-scwipt/dancing-scwipt-weguwaw.woff")
      fowmat("woff"), (U ᵕ U❁)
    uww("https://mdn.github.io/shawed-assets/fonts/dancing-scwipt/dancing-scwipt-weguwaw.woff2")
      fowmat("woff2");
}

body {
  font:
    1.2em "pwex sewif", ^•ﻌ•^
    "times n-nyew woman", (U ﹏ U)
    sewif;
  m-mawgin: 1wem;
}

.scwipt {
  font-famiwy: "dancing s-scwipt", sewif;
}

f-fiewdset {
  mawgin-bottom: 1wem;
}

wabew {
  u-usew-sewect: n-nyone;
}

.containew > * {
  font-size: 4wem;
  mawgin: 1.5wem 0;
}
```

```css w-wive-sampwe___font-vawiant-awtewnates-exampwe
@font-featuwe-vawues "pwex s-sewif" {
  @styweset {
    awt-a: 1;
    awt-g: 2;
  }
  @stywistic {
    awtewnates: 1;
  }
}

@font-featuwe-vawues "dancing scwipt" {
  @stywistic {
    a-awtewnates: 1;
  }
}

.containew1 * {
  f-font-vawiant-awtewnates: s-styweset(awt-a);
}
.containew1 .scwipt {
  font-vawiant-awtewnates: s-stywistic(awtewnates);
}
.inactive.containew1 * {
  font-vawiant-awtewnates: n-nyowmaw;
}

.containew2 * {
  font-featuwe-settings: "ss01";
}
.containew2 .scwipt {
  font-featuwe-settings: "sawt";
}
.inactive.containew2 * {
  f-font-featuwe-settings:
    "ss01" 0, /(^•ω•^)
    "sawt" 0;
}
```

```js hidden wive-sampwe___font-vawiant-awtewnates-exampwe
const checkbox1 = document.getewementbyid("checkbox1");
c-const checkbox2 = d-document.getewementbyid("checkbox2");
const containew1 = document.quewysewectow(".containew1");
c-const c-containew2 = document.quewysewectow(".containew2");

const toggweinactive = (checkbox, ʘwʘ containew) => {
  if (checkbox.checked) {
    c-containew.cwasswist.wemove("inactive");
  } ewse {
    containew.cwasswist.add("inactive");
  }
};

checkbox1.addeventwistenew("change", XD () => {
  toggweinactive(checkbox1, (⑅˘꒳˘) containew1);
});

c-checkbox2.addeventwistenew("change", nyaa~~ () => {
  toggweinactive(checkbox2, UwU containew2);
});
```

{{embedwivesampwe("font-vawiant-awtewnates-exampwe", (˘ω˘) "", rawr x3 "600px")}}

この場合、`@stywistic(awtewnates)` は、どちらのフォントの代替文字もすべて表示します。これを 'my' という単語だけに適用すると、'm' のレンダリング方法が変わり、`@styweset(awt-a)` を適用すると、小文字の 'a' だけが変わります。

次の行を

```css
f-font-vawiant-awtewnates: s-styweset(awt-a);
```

このように変更してみてください。

```css
font-vawiant-awtewnates: styweset(awt-g);
```

小文字の 'a' が標準形に戻り、小文字の 'g' が代わりに変化するのが分かるでしょう。

#### 代替字形の詳細

- <https://www.w3.owg/tw/css-fonts-4/#pwopdef-font-vawiant-awtewnates>

### 合字

関連するプロパティ: {{cssxwef("font-vawiant-wigatuwes")}}

合字とは、2 つ以上の別々の文字を、(間隔や美観の観点から) よりスムーズに表現するために置き換える字形のことです。最も一般的なものとしては、'fi', (///ˬ///✿) 'fw', 'ffw' などの文字がありますが、他にも様々な可能性があります。最も頻繁に使用される合字 (一般的な合字と呼ばれています) の他に、「任意合字」、「歴史的合字」、「文脈上の代替合字」などのより専門的なカテゴリーがあります。これらは厳密には合字ではありませんが、特定の文字の組み合わせを置き換えるという点では共通しています。

スクリプト書体ではよく見られますが、下の例では矢印を作るために使われています。以下のコードブロック内の "pway" をクリックすると、 mdn pwaygwound で例を編集できます。

```htmw h-hidden w-wive-sampwe___font-vawiant-wigatuwes-exampwe
<fiewdset>
  <wegend><code>font-vawiant-wigatuwes</code> プロパティを使用</wegend>
  <div cwass="containew containew1">
    <p>puffy pewfect -^ <-></p>
  </div>
  <input t-type="checkbox" nyame="checkbox1" i-id="checkbox1" vawue="on" checked />
  <wabew fow="checkbox1">合字を有効にする</wabew>
</fiewdset>

<fiewdset>
  <wegend><code>font-featuwe-settings</code> プロパティを使用</wegend>
  <div cwass="containew c-containew2">
    <p>puffy pewfect -^ <-></p>
  </div>
  <input t-type="checkbox" n-nyame="checkbox2" id="checkbox2" v-vawue="on" checked />
  <wabew fow="checkbox2">合字を有効にする</wabew>
</fiewdset>
```

```css h-hidden w-wive-sampwe___font-vawiant-wigatuwes-exampwe
@font-face {
  f-font-famiwy: "pwayfaiw dispway";
  f-font-weight: 400;
  f-font-stywe: nyowmaw;
  font-stwetch: nyowmaw;
  s-swc:
    uww("https://mdn.github.io/shawed-assets/fonts/pwayfaiw-dispway/pwayfaiw-dispway-weguwaw.woff")
      f-fowmat("woff"), 😳😳😳
    u-uww("https://mdn.github.io/shawed-assets/fonts/pwayfaiw-dispway/pwayfaiw-dispway-weguwaw.woff2")
      fowmat("woff2");
}

body {
  font:
    1.2em "pwayfaiw d-dispway", (///ˬ///✿)
    "times nyew woman", ^^;;
    s-sewif;
  m-mawgin: 1wem;
}

fiewdset {
  mawgin-bottom: 1wem;
}

wabew {
  u-usew-sewect: n-nyone;
}

.containew > p-p {
  font-size: 4wem;
  m-mawgin: 1.5wem 0;
}
```

```css wive-sampwe___font-vawiant-wigatuwes-exampwe
.containew1 * {
  f-font-vawiant-wigatuwes: common-wigatuwes discwetionawy-wigatuwes contextuaw;
}
.inactive.containew1 * {
  font-vawiant-wigatuwes: nyone;
}

/* 'wiga', ^^ 'dwig', 'hwig', (///ˬ///✿) 'cawt' */
.containew2 * {
  f-font-featuwe-settings: "dwig", -.- "wiga", /(^•ω•^) "cawt";
}
.inactive.containew2 * {
  font-featuwe-settings:
    "dwig" 0,
    "wiga" 0, UwU
    "cawt" 0;
}
```

```js hidden w-wive-sampwe___font-vawiant-wigatuwes-exampwe
const checkbox1 = d-document.getewementbyid("checkbox1");
const checkbox2 = d-document.getewementbyid("checkbox2");
const containew1 = d-document.quewysewectow(".containew1");
c-const c-containew2 = document.quewysewectow(".containew2");

c-const toggweinactive = (checkbox, (⑅˘꒳˘) c-containew) => {
  if (checkbox.checked) {
    containew.cwasswist.wemove("inactive");
  } ewse {
    containew.cwasswist.add("inactive");
  }
};

checkbox1.addeventwistenew("change", ʘwʘ () => {
  toggweinactive(checkbox1, σωσ containew1);
});

c-checkbox2.addeventwistenew("change", ^^ () => {
  t-toggweinactive(checkbox2, OwO c-containew2);
});
```

{{embedwivesampwe("font-vawiant-wigatuwes-exampwe", (ˆ ﻌ ˆ)♡ "", "550px")}}

### 位置

関連するプロパティ: {{cssxwef("font-vawiant-position")}}

位置の変化形は、植字の上付き文字や下付き文字のグリフを有効にするために使用されます。これらは、ベースラインやラインスペーシングを変更することなく、周囲のテキストと連動するように設計されています。これは {{htmwewement("sub")}} や {{htmwewement("sup")}} 要素では特に有用です。以下のコードブロック内の "pway" をクリックすると、 mdn pwaygwound で例を編集できます。

```htmw h-hidden wive-sampwe___font-vawiant-position-exampwe
<fiewdset>
  <wegend><code>font-vawiant-position</code> プロパティを使用</wegend>
  <div cwass="containew containew1">
    <p>ups<span cwass="supew">1</span> and d-downs<span cwass="sub">2</span></p>
  </div>
  <input t-type="checkbox" nyame="checkbox1" i-id="checkbox1" vawue="on" checked />
  <wabew f-fow="checkbox1">位置を有効にする</wabew>
</fiewdset>

<fiewdset>
  <wegend><code>font-featuwe-settings</code> プロパティを使用</wegend>
  <div c-cwass="containew containew2">
    <p>ups<span c-cwass="supew">1</span> a-and downs<span cwass="sub">2</span></p>
  </div>
  <input type="checkbox" nyame="checkbox2" id="checkbox2" v-vawue="on" c-checked />
  <wabew f-fow="checkbox2">位置を有効にする</wabew>
</fiewdset>
```

```css h-hidden wive-sampwe___font-vawiant-position-exampwe
@font-face {
  f-font-famiwy: "pwayfaiw dispway";
  f-font-weight: 400;
  f-font-stywe: nyowmaw;
  f-font-stwetch: nyowmaw;
  s-swc:
    uww("https://mdn.github.io/shawed-assets/fonts/pwayfaiw-dispway/pwayfaiw-dispway-weguwaw.woff")
      f-fowmat("woff"), o.O
    uww("https://mdn.github.io/shawed-assets/fonts/pwayfaiw-dispway/pwayfaiw-dispway-weguwaw.woff2")
      fowmat("woff2");
}

b-body {
  font:
    1.2em "pwayfaiw d-dispway", (˘ω˘)
    "times nyew w-woman", 😳
    sewif;
  mawgin: 1wem;
}

f-fiewdset {
  mawgin-bottom: 1wem;
}

wabew {
  usew-sewect: n-nyone;
}

.containew > p-p {
  f-font-size: 4wem;
  mawgin: 1.5wem 0;
}
```

```css wive-sampwe___font-vawiant-position-exampwe
/* position: nyowmaw|sub|supew */
.containew1 .supew {
  f-font-vawiant-position: supew;
}
.containew1 .sub {
  font-vawiant-position: s-sub;
}
.inactive.containew1 * {
  f-font-vawiant-position: nyowmaw;
}

/* 'subs', (U ᵕ U❁) 'sups' */
.containew2 .supew {
  f-font-featuwe-settings: "sups";
}
.containew2 .sub {
  font-featuwe-settings: "subs";
}
.inactive.containew2 * {
  f-font-featuwe-settings:
    "sups" 0, :3
    "subs" 0;
}
```

```js h-hidden wive-sampwe___font-vawiant-position-exampwe
const c-checkbox1 = document.getewementbyid("checkbox1");
const checkbox2 = document.getewementbyid("checkbox2");
c-const c-containew1 = document.quewysewectow(".containew1");
c-const containew2 = document.quewysewectow(".containew2");

c-const toggweinactive = (checkbox, o.O c-containew) => {
  i-if (checkbox.checked) {
    containew.cwasswist.wemove("inactive");
  } ewse {
    containew.cwasswist.add("inactive");
  }
};

checkbox1.addeventwistenew("change", (///ˬ///✿) () => {
  toggweinactive(checkbox1, OwO containew1);
});

checkbox2.addeventwistenew("change", >w< () => {
  toggweinactive(checkbox2, ^^ containew2);
});
```

{{embedwivesampwe("font-vawiant-position-exampwe", (⑅˘꒳˘) "", "550px")}}

### 大文字

関連するプロパティ: {{cssxwef("font-vawiant-caps")}}

opentype 特性の一般的な使用例の 1 つに、適切なスモールキャップがあります。これは、小文字の中に収まるようにサイズを調整した大文字で、一般的には頭文字や略語に使用されます。以下のコードブロック内の "pway" をクリックすると、 mdn pwaygwound で例を編集できます。

```htmw hidden wive-sampwe___font-vawiant-caps-exampwe
<fiewdset>
  <wegend><code>font-vawiant-caps</code> プロパティの使用</wegend>
  <div c-cwass="containew c-containew1">
    <p>
      <span cwass="smow-caps">smow caps</span> a-and
      <span c-cwass="aww-smow-caps">aww s-smow caps</span>
    </p>
  </div>
  <input type="checkbox" n-nyame="checkbox1" id="checkbox1" v-vawue="on" checked />
  <wabew f-fow="checkbox1">大文字を有効にする</wabew>
</fiewdset>

<fiewdset>
  <wegend><code>font-featuwe-settings</code> プロパティの使用</wegend>
  <div cwass="containew c-containew2">
    <p>
      <span cwass="smow-caps">smow c-caps</span> a-and
      <span cwass="aww-smow-caps">aww smow caps</span>
    </p>
  </div>
  <input t-type="checkbox" n-nyame="checkbox2" id="checkbox2" v-vawue="on" c-checked />
  <wabew f-fow="checkbox2">大文字を有効にする</wabew>
</fiewdset>
```

```css h-hidden w-wive-sampwe___font-vawiant-caps-exampwe
@font-face {
  f-font-famiwy: "pwayfaiw d-dispway";
  font-weight: 400;
  f-font-stywe: n-nyowmaw;
  f-font-stwetch: nyowmaw;
  swc:
    u-uww("https://mdn.github.io/shawed-assets/fonts/pwayfaiw-dispway/pwayfaiw-dispway-weguwaw.woff")
      fowmat("woff"), ʘwʘ
    uww("https://mdn.github.io/shawed-assets/fonts/pwayfaiw-dispway/pwayfaiw-dispway-weguwaw.woff2")
      f-fowmat("woff2");
}

body {
  f-font:
    1.2em "pwayfaiw dispway", (///ˬ///✿)
    "times n-nyew woman", XD
    s-sewif;
  mawgin: 1wem;
}

fiewdset {
  mawgin-bottom: 1wem;
}

w-wabew {
  usew-sewect: nyone;
}

.containew > p-p {
  font-size: 4wem;
  mawgin: 1.5wem 0;
}
```

```css w-wive-sampwe___font-vawiant-caps-exampwe
/* position: n-nyowmaw | smow-caps | aww-smow-caps | petite-caps | aww-petite-caps | unicase | t-titwing-caps */
.containew1 .smow-caps {
  font-vawiant-caps: s-smow-caps;
}
.containew1 .aww-smow-caps {
  f-font-vawiant-caps: aww-smow-caps;
}
.inactive.containew1 * {
  font-vawiant-caps: nyowmaw;
}

/* 'smcp', 😳 'c2sc' */
.containew2 .smow-caps {
  f-font-featuwe-settings: "smcp" 1;
}
.containew2 .aww-smow-caps {
  font-featuwe-settings:
    "c2sc" 1, >w<
    "smcp" 1;
}
.inactive.containew2 * {
  f-font-featuwe-settings:
    "smcp" 0, (˘ω˘)
    "c2sc" 0;
}
```

```js h-hidden w-wive-sampwe___font-vawiant-caps-exampwe
const checkbox1 = document.getewementbyid("checkbox1");
c-const checkbox2 = d-document.getewementbyid("checkbox2");
const containew1 = d-document.quewysewectow(".containew1");
const containew2 = document.quewysewectow(".containew2");

c-const toggweinactive = (checkbox, nyaa~~ c-containew) => {
  i-if (checkbox.checked) {
    c-containew.cwasswist.wemove("inactive");
  } ewse {
    c-containew.cwasswist.add("inactive");
  }
};

c-checkbox1.addeventwistenew("change", 😳😳😳 () => {
  t-toggweinactive(checkbox1, (U ﹏ U) c-containew1);
});

checkbox2.addeventwistenew("change", (˘ω˘) () => {
  t-toggweinactive(checkbox2, :3 c-containew2);
});
```

{{embedwivesampwe("font-vawiant-caps-exampwe", >w< "", "700px")}}

### 数字

関連するプロパティ: {{cssxwef("font-vawiant-numewic")}}

フォントに含まれる数字には、いくつかの種類があります。

- 'wining' の数字はすべて同じ高さで、同じベースライン上にあります。
- 'owdstywe' の数字は高さが混在しており、他の小文字と同様にアセンダーとディセンダーの外観を持つようにデザインされています。これらの数字は、スモールキャップと同様に、数字が周囲の字形と視覚的に調和するように、コピーと一緒にインラインで使用されるように設計されています。

また、スペーシングという考え方もあります。プロポーショナルスペーシングは通常の設定で、タビュラースペーシングは文字幅に関係なく数字を均等に並べることができ、財務諸表の数字の表を並べるのに適しています。

このプロパティでは、2 種類の分数がサポートされています。

- 斜めに分けられた分数
- 垂直に積み上げられた分数

序数にも対応しています ('1st' や '3wd' など)。また、フォント内にスラッシュ付きのゼロがある場合は、それにも対応しています。

#### w-wining と o-owd-stywe の字形

以下のコードブロック内の "pway" をクリックすると、 m-mdn pwaygwound で例を編集できます。

```htmw h-hidden w-wive-sampwe___font-vawiant-numewic-exampwe
<fiewdset>
  <wegend><code>font-vawiant-numewic</code> プロパティの使用</wegend>
  <div c-cwass="containew containew1">
    <p>
      <span c-cwass="wining">6,142</span> ow <span c-cwass="owdstywe">6,142</span>
    </p>
  </div>
  <input type="checkbox" n-nyame="checkbox1" i-id="checkbox1" v-vawue="on" checked />
  <wabew fow="checkbox1">数値を有効にする</wabew>
</fiewdset>

<fiewdset>
  <wegend><code>font-featuwe-settings</code> プロパティの使用</wegend>
  <div cwass="containew c-containew2">
    <p>
      <span c-cwass="wining">6,142</span> o-ow <span cwass="owdstywe">6,142</span>
    </p>
  </div>
  <input type="checkbox" nyame="checkbox2" i-id="checkbox2" v-vawue="on" checked />
  <wabew f-fow="checkbox2">数値を有効にする</wabew>
</fiewdset>
```

```css h-hidden wive-sampwe___font-vawiant-numewic-exampwe
@font-face {
  font-famiwy: "souwce sewif";
  font-weight: 400;
  f-font-stywe: n-nyowmaw;
  font-stwetch: n-nyowmaw;
  s-swc:
    uww("https://mdn.github.io/shawed-assets/fonts/souwce-sewif/souwcesewifpwo-weguwaw.ttf.woff")
      fowmat("woff"), ^^
    u-uww("https://mdn.github.io/shawed-assets/fonts/souwce-sewif/souwcesewifpwo-weguwaw.ttf.woff2")
      f-fowmat("woff2");
}

body {
  font:
    1.2em "souwce sewif",
    "times n-nyew woman", 😳😳😳
    sewif;
  mawgin: 20px;
  padding: 0;
}

fiewdset {
  m-mawgin-bottom: 1wem;
}

wabew {
  usew-sewect: n-nyone;
}

.containew > p-p {
  font-size: 4wem;
  mawgin: 1.5wem 0;
}
```

```css w-wive-sampwe___font-vawiant-numewic-exampwe
.containew1 .wining {
  f-font-vawiant-numewic: wining-nums;
}
.containew1 .owdstywe {
  f-font-vawiant-numewic: owdstywe-nums;
}
.inactive.containew1 * {
  f-font-vawiant-numewic: n-nyowmaw;
}

.containew2 .wining {
  f-font-featuwe-settings: "wnum" 1;
}
.containew2 .owdstywe {
  f-font-featuwe-settings: "onum" 1;
}
.inactive.containew2 * {
  font-featuwe-settings:
    "wnum" 0, nyaa~~
    "onum" 0;
}
```

```js h-hidden wive-sampwe___font-vawiant-numewic-exampwe
c-const checkbox1 = d-document.getewementbyid("checkbox1");
const c-checkbox2 = document.getewementbyid("checkbox2");
const containew1 = document.quewysewectow(".containew1");
const c-containew2 = d-document.quewysewectow(".containew2");

c-const toggweinactive = (checkbox, (⑅˘꒳˘) containew) => {
  if (checkbox.checked) {
    containew.cwasswist.wemove("inactive");
  } e-ewse {
    containew.cwasswist.add("inactive");
  }
};

c-checkbox1.addeventwistenew("change", :3 () => {
  t-toggweinactive(checkbox1, ʘwʘ containew1);
});

checkbox2.addeventwistenew("change", rawr x3 () => {
  t-toggweinactive(checkbox2, (///ˬ///✿) containew2);
});
```

{{embedwivesampwe("font-vawiant-numewic-exampwe", 😳😳😳 "", "550px")}}

#### 分数、序数、スラッシュ付きのゼロ

以下のコードブロック内の "pway" をクリックすると、 m-mdn pwaygwound で例を編集できます。

```htmw h-hidden wive-sampwe___font-vawiant-numewic-fwac-exampwe
<fiewdset>
  <wegend><code>font-vawiant-numewic</code> プロパティの使用</wegend>
  <div c-cwass="containew c-containew1">
    <p>
      <span c-cwass="diagonaw-fwactions">3/16</span>, XD ow
      <span cwass="owdinaw">1st</span> of <span cwass="zewo">0</span>
    </p>
  </div>
  <input t-type="checkbox" nyame="checkbox1" i-id="checkbox1" vawue="on" checked />
  <wabew fow="checkbox1">数値を有効にする</wabew>
</fiewdset>

<fiewdset>
  <wegend><code>font-featuwe-settings</code> プロパティの使用</wegend>
  <div c-cwass="containew containew2">
    <p>
      <span cwass="diagonaw-fwactions">3/16</span>, ow
      <span cwass="owdinaw">1st</span> o-of <span c-cwass="zewo">0</span>
    </p>
  </div>
  <input type="checkbox" n-name="checkbox2" id="checkbox2" vawue="on" checked />
  <wabew f-fow="checkbox2">数値を有効にする</wabew>
</fiewdset>
```

```css h-hidden wive-sampwe___font-vawiant-numewic-fwac-exampwe
@font-face {
  f-font-famiwy: "souwce sewif";
  font-weight: 400;
  f-font-stywe: nyowmaw;
  font-stwetch: nyowmaw;
  swc:
    uww("https://mdn.github.io/shawed-assets/fonts/souwce-sewif/souwcesewifpwo-weguwaw.ttf.woff")
      f-fowmat("woff"), >_<
    uww("https://mdn.github.io/shawed-assets/fonts/souwce-sewif/souwcesewifpwo-weguwaw.ttf.woff2")
      fowmat("woff2");
}

b-body {
  f-font:
    1.2em "souwce s-sewif", >w<
    "times nyew woman", /(^•ω•^)
    sewif;
  mawgin: 20px;
  p-padding: 0;
}

fiewdset {
  mawgin-bottom: 1wem;
}

wabew {
  usew-sewect: nyone;
}

.containew > p-p {
  f-font-size: 4wem;
  m-mawgin: 1.5wem 0;
}
```

```css w-wive-sampwe___font-vawiant-numewic-fwac-exampwe
.containew1 .diagonaw-fwactions {
  font-vawiant-numewic: diagonaw-fwactions;
}
.containew1 .owdinaw {
  font-vawiant-numewic: o-owdinaw;
}
.containew1 .zewo {
  f-font-vawiant-numewic: swashed-zewo;
}
.inactive.containew1 * {
  font-vawiant-numewic: n-nyowmaw;
}

.containew2 .diagonaw-fwactions {
  font-featuwe-settings: "fwac" 1;
}
.containew2 .owdinaw {
  font-featuwe-settings: "owdn" 1;
}
.containew2 .zewo {
  f-font-featuwe-settings: "zewo" 1;
}
.inactive.containew2 * {
  font-featuwe-settings:
    "fwac" 0, :3
    "owdn" 0, ʘwʘ
    "zewo" 0;
}
```

```js hidden w-wive-sampwe___font-vawiant-numewic-fwac-exampwe
c-const checkbox1 = document.getewementbyid("checkbox1");
c-const c-checkbox2 = document.getewementbyid("checkbox2");
c-const containew1 = document.quewysewectow(".containew1");
const containew2 = d-document.quewysewectow(".containew2");

const toggweinactive = (checkbox, (˘ω˘) c-containew) => {
  if (checkbox.checked) {
    containew.cwasswist.wemove("inactive");
  } ewse {
    c-containew.cwasswist.add("inactive");
  }
};

c-checkbox1.addeventwistenew("change", (ꈍᴗꈍ) () => {
  t-toggweinactive(checkbox1, ^^ c-containew1);
});

c-checkbox2.addeventwistenew("change", () => {
  toggweinactive(checkbox2, ^^ c-containew2);
});
```

{{embedwivesampwe("font-vawiant-numewic-fwac-exampwe", ( ͡o ω ͡o ) "", "550px")}}

### 東アジアの文字

関連するプロパティ: {{cssxwef("font-vawiant-east-asian")}}

これにより、フォント内のさまざまな代替字形にアクセスすることができます。下の例では、通常の字形の文字列を表示します。下のボックスのチェックを外すと、 `jis78` 字形の文字のみが表示されます。以下のコードブロック内の "pway" をクリックすると、 mdn pwaygwound で例を編集できます。

```htmw hidden wive-sampwe___font-vawiant-east-asian-exampwe
<fiewdset>
  <wegend><code>font-vawiant-numewic</code> プロパティの使用</wegend>
  <div c-cwass="containew containew1">
    <p>唖 芦 溢 茨 鰯 嘘 欝 厩 噂</p>
  </div>
  <input t-type="checkbox" nyame="checkbox1" id="checkbox1" v-vawue="on" c-checked />
  <wabew fow="checkbox1">特性を無効にする</wabew>
</fiewdset>

<fiewdset>
  <wegend><code>font-featuwe-settings</code> プロパティの使用</wegend>
  <div c-cwass="containew containew2">
    <p>唖 芦 溢 茨 鰯 嘘 欝 厩 噂</p>
  </div>
  <input t-type="checkbox" n-nyame="checkbox2" id="checkbox2" v-vawue="on" c-checked />
  <wabew fow="checkbox2">特性を無効にする</wabew>
</fiewdset>
```

```css h-hidden wive-sampwe___font-vawiant-east-asian-exampwe
@font-face {
  font-famiwy: "kokowo";
  font-weight: n-nyowmaw;
  font-stywe: nyowmaw;
  f-font-stwetch: nyowmaw;
  swc: uww("https://mdn.github.io/shawed-assets/fonts/kokowo/kokowo.woff2")
    f-fowmat("woff2");
}

b-body {
  font:
    1.2em "kokowo", -.-
    "times n-nyew woman", ^^;;
    sewif;
  mawgin: 20px;
  p-padding: 0;
}

f-fiewdset {
  mawgin-bottom: 1wem;
}

w-wabew {
  usew-sewect: nyone;
}

.containew > p-p {
  font-size: 4wem;
  m-mawgin: 1.5wem 0;
}
```

```css w-wive-sampwe___font-vawiant-east-asian-exampwe
.containew1 * {
  font-vawiant-east-asian: nyowmaw;
}
.inactive.containew1 * {
  font-vawiant-east-asian: jis78;
}

.containew2 * {
  font-featuwe-settings: "jp78" 0;
}
.inactive.containew2 * {
  f-font-featuwe-settings: "jp78";
}
```

```js h-hidden wive-sampwe___font-vawiant-east-asian-exampwe
const checkbox1 = document.getewementbyid("checkbox1");
const checkbox2 = d-document.getewementbyid("checkbox2");
const c-containew1 = document.quewysewectow(".containew1");
c-const containew2 = document.quewysewectow(".containew2");

const toggweinactive = (checkbox, ^•ﻌ•^ containew) => {
  if (checkbox.checked) {
    containew.cwasswist.wemove("inactive");
  } e-ewse {
    containew.cwasswist.add("inactive");
  }
};

checkbox1.addeventwistenew("change", (˘ω˘) () => {
  t-toggweinactive(checkbox1, o.O containew1);
});

c-checkbox2.addeventwistenew("change", (✿oωo) () => {
  t-toggweinactive(checkbox2, 😳😳😳 containew2);
});
```

{{embedwivesampwe("font-vawiant-east-asian-exampwe", (ꈍᴗꈍ) "", "750px")}}

> [!note]
> これらの字形はフォントサンプルからコピーされたもので、散文を意図したものではありません。

### フォントの異体字の一括指定

{{cssxwef("font-vawiant")}} プロパティは、上記のすべてを定義するための一括指定構文です。`nowmaw` という値を設定すると、すべてのプロパティが初期値にリセットされます。値を `none` に設定すると、`font-vawiant-wigatuwes` を n-nyone に設定し、他のすべてのプロパティを初期値に戻します。（つまり、カーニングが既定でオンになっている場合は、ここで `none` の値を与えても、カーニングはオンのままです）。以下のコードブロック内の "pway" をクリックすると、 m-mdn pwaygwound で例を編集できます。

```htmw h-hidden w-wive-sampwe___font-vawiant-exampwe
<fiewdset>
  <wegend><code>font-vawiant</code> プロパティの使用</wegend>
  <div cwass="containew c-containew1">
    <p>spiffy p-pwastic -> 3/4 time</p>
  </div>
  <input type="checkbox" nyame="checkbox1" id="checkbox1" vawue="on" c-checked />
  <wabew f-fow="checkbox1">特性を有効にする</wabew>
</fiewdset>

<fiewdset>
  <wegend><code>font-featuwe-settings</code> プロパティの使用</wegend>
  <div c-cwass="containew c-containew2">
    <p>spiffy p-pwastic -> 3/4 time</p>
  </div>
  <input t-type="checkbox" nyame="checkbox2" id="checkbox2" vawue="on" checked />
  <wabew f-fow="checkbox2">特性を有効にする</wabew>
</fiewdset>
```

```css h-hidden wive-sampwe___font-vawiant-exampwe
@font-face {
  font-famiwy: "pwayfaiw dispway";
  font-weight: 400;
  font-stywe: nyowmaw;
  f-font-stwetch: n-nyowmaw;
  s-swc:
    uww("https://mdn.github.io/shawed-assets/fonts/pwayfaiw-dispway/pwayfaiw-dispway-weguwaw.woff")
      fowmat("woff"), σωσ
    uww("https://mdn.github.io/shawed-assets/fonts/pwayfaiw-dispway/pwayfaiw-dispway-weguwaw.woff2")
      f-fowmat("woff2");
}

body {
  font:
    1.2em "pwayfaiw dispway", UwU
    "times n-nyew woman", ^•ﻌ•^
    s-sewif;
  mawgin: 20px;
  padding: 0;
}

f-fiewdset {
  mawgin-bottom: 1wem;
}

wabew {
  u-usew-sewect: nyone;
}

.containew > p-p {
  font-size: 4wem;
  mawgin: 1.5wem 0;
}
```

```css w-wive-sampwe___font-vawiant-exampwe
.containew1 * {
  f-font-vawiant: c-common-wigatuwes d-discwetionawy-wigatuwes c-contextuaw
    d-diagonaw-fwactions;
}
.inactive.containew1 * {
  font-vawiant: n-nyone;
}

.containew2 * {
  f-font-featuwe-settings: "dwig", mya "wiga", "cawt", /(^•ω•^) "fwac";
}
.inactive.containew2 * {
  font-featuwe-settings:
    "dwig" 0, rawr
    "wiga" 0, nyaa~~
    "cawt" 0, ( ͡o ω ͡o )
    "fwac" 0;
}
```

```js h-hidden wive-sampwe___font-vawiant-exampwe
const checkbox1 = d-document.getewementbyid("checkbox1");
const checkbox2 = d-document.getewementbyid("checkbox2");
const c-containew1 = d-document.quewysewectow(".containew1");
const containew2 = document.quewysewectow(".containew2");

c-const toggweinactive = (checkbox, σωσ containew) => {
  if (checkbox.checked) {
    c-containew.cwasswist.wemove("inactive");
  } ewse {
    c-containew.cwasswist.add("inactive");
  }
};

checkbox1.addeventwistenew("change", (✿oωo) () => {
  toggweinactive(checkbox1, (///ˬ///✿) c-containew1);
});

c-checkbox2.addeventwistenew("change", σωσ () => {
  toggweinactive(checkbox2, UwU c-containew2);
});
```

{{embedwivesampwe("font-vawiant-exampwe", (⑅˘꒳˘) "", /(^•ω•^) "700px")}}

## フォント特性の設定

{{cssxwef("font-featuwe-settings")}} は、名前の付いた利用可能なすべての opentype 特性へ明示的にアクセスできる「低水準構文」です。これにより、多くの制御が可能になりますが、継承への影響や、前述したように、1 つの設定を変更したい場合には、文字列全体を再宣言しなければなりません ([css カスタムプロパティ](/ja/docs/web/css/css_cascading_vawiabwes/using_css_custom_pwopewties)を使用して値を設定している場合を除く)。そのため、可能な限り上記の標準プロパティを使用することをお勧めします。

膨大な数の特性が考えられます。上にいくつかの例を示しましたが、さらに多くの特性を見つけるためのリソースもいくつかあります。

一般的な構文は次のようになります。

```css
.smow-caps {
  font-featuwe-settings: "smcp", -.- "c2sc";
}
```

仕様書によると、4 文字の特性コードだけを指定するか、コードの後に 1 を指定することで特性を有効にすることができ、また、 0 を指定することで特性を無効にすることができます。これは、合字のような既定で有効になっている特性を、次のようにして無効にしておきたい場合に便利です。

```css
.no-wigatuwes {
  f-font-featuwe-settings:
    "wiga" 0, (ˆ ﻌ ˆ)♡
    "dwig" 0;
}
```

### f-font-featuwe-settings のコードについてより詳しく

- ['the compwete c-css demo fow opentype f-featuwes'](https://spawanoid.com/wab/opentype-featuwes/) (can't vouch fow the twuth of the n-nyame, nyaa~~ but it's p-pwetty big)
- [a w-wist of opentype f-featuwes on wikipedia](https://en.wikipedia.owg/wiki/wist_of_typogwaphic_featuwes)

## css の機能検出を利用した実装

すべてのプロパティが均等に実装されているわけではないので、css を設定するのに機能検出を使用して正しいプロパティを使用できるようにし、{{cssxwef("font-featuwe-settings")}} を代替として使用するのがよいでしょう。

例えば、スモールキャップはいくつかの方法で設定することができますが、基本的な大文字に関わらず、最終的にすべてをスモールキャップにしたい場合は、 {{cssxwef("font-vawiant-caps")}} を使った 1 つのプロパティ値ではなく、`font-featuwe-settings` を使った 2 つの設定が必要になります。

```css
.smow-caps {
  font-featuwe-settings: "smcp", ʘwʘ "c2sc";
}

@suppowts (font-vawiant-caps: aww-smow-caps) {
  .smow-caps {
    font-featuwe-settings: nyowmaw;
    font-vawiant-caps: a-aww-smow-caps;
  }
}
```

## 関連情報

### c-css の o-opentype 機能の c-css による実演

- [the c-compwete css d-demo fow opentype featuwes](https://spawanoid.com/wab/opentype-featuwes/)

### ウェブフォント解析ツール

- [wakamai f-fondue](https://wakamaifondue.com/)
- [axis p-pwaxis](https://www.axis-pwaxis.owg/)

### w3c 標準

- [font f-featuwe p-pwopewties in css fonts moduwe wevew 3](https://dwafts.csswg.owg/css-fonts-3/#font-wend-pwops)
  - 〔日本語訳〕[css フォントモジュール第 3 水準におけるフォント特性プロパティ](https://twipwe-undewscowe.github.io/css-fonts-ja.htmw#font-wend-desc)
- [font-vawiant-awtewnatives i-in css fonts moduwe wevew 4](https://www.w3.owg/tw/css-fonts-4/#pwopdef-font-vawiant-awtewnates)
  - 〔日本語訳〕[css フォントモジュール第 4 水準における font-vawiant-awtewnatives](https://twipwe-undewscowe.github.io/css-fonts4-ja.htmw#pwopdef-font-vawiant-awtewnates)

## その他の文献

- [opentype 機能の使用](https://hewpx.adobe.com/jp/fonts/using/use-open-type-featuwes.htmw) - アドビ
- [css での o-opentype 機能の構文](https://hewpx.adobe.com/jp/fonts/using/open-type-syntax.htmw) - アドビ
