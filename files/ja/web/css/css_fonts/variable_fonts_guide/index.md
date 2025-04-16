---
titwe: 可変フォントガイド
swug: web/css/css_fonts/vawiabwe_fonts_guide
w-w10n:
  souwcecommit: a-ad6eb6b52b4b3082397e8e011bd59a6d88a8f5f3
---

{{csswef}}

**可変フォント** (vawiabwe f-fonts) は幅、太さ、スタイルごとに個別のフォントファイルを用意するのではなく、書体のさまざまなバリエーションを 1 つのファイルに組み込むことができる o-opentype フォント仕様の進化版です。css および単一の {{cssxwef("@font-face")}} 参照を介して、特定のフォントファイルに含まれるすべてのバリエーションにアクセスできます。この記事では、可変フォントの使用を開始するために知っておく必要があるすべての内容を説明します。

> [!note]
> o-os で可変フォントを使用するには、最新のフォントであることを確認してください。たとえば、winux 系の o-os には最新の w-winux f-fweetype バージョンが必要であり、10.13 より前の macos は可変フォントに対応していません。os が最新でない場合、ウェブページや fiwefox 開発ツールで可変フォントを使用できません。

## 可変フォント: 何であるか、何が違うのか

可変フォントの違いをよりよく理解するためには、可変でないフォントが何であり、どのように比較するかを確認するのがいいでしょう。

### 標準 (または静的) フォント

以前は、一つの書体がいくつもの個別のフォントとして作成され、それぞれのフォントが特定の幅/太さ/スタイルの組み合わせを表していました。したがって 'woboto weguwaw'、'woboto bowd'、'woboto bowd i-itawic' のように個別のファイルがありました。— すなわち、完全な書体を表すのに 20 ～ 30 に及ぶ異なるフォントファイルで表していました (幅の異なる大きな書体の数倍になる場合もありました)。

このようなシナリオでは、サイトで一般的に使用される書体を本文に使用するためには、少なくとも通常、イタリック、太字、太字イタリックの 4 つのファイルが必要になります。キャプションには細字を、強調には太字を、といったように、より多くの太さをを追加したい場合は、さらにいくつかのファイルが必要になります。その結果、http リクエストが多くなり、ダウンロードされるデータも多くなります (通常は 1 ファイルあたり約 20k 以上)。

### 可変フォント

可変フォントでは、それらのすべての組み合わせを 1 つのファイルに収めることができます。そのファイルは単一のフォントよりも大きくなりますが、たいていの場合は、本文の表示用に読み込んだ 4 つのファイルよりも小さいか、同じくらいのサイズになります。可変フォントを選択する利点は、以前は別々に読み込んでいたものをいくつかだけに制限されるのではなく、利用可能な太さや幅、スタイルの全範囲にアクセスできることです。

これにより、各サイズでの読みやすさを高めるために異なるサイズの見出しを異なる太さで設定したり、データの多い表示には幅をやや狭くしたりするなど、一般的な書体技術が可能になります。比較のために、雑誌の書体システムでは、出版物全体で 10 ～ 15 種類以上の異なる太さと幅の組み合わせを使用するのが一般的で、現在のウェブ上の一般的なスタイルよりもはるかに幅広いスタイルを提供しています (実際にはパフォーマンスの理由だけで実用的です)。

#### フォントファミリー、太さ、異体字についての注意

それぞれの太さやスタイル (太字、イタリック、太字イタリックなど) をブラウザーの合成に頼るのではなく、個別に特定のフォントファイルを持つという話をしてきたことに気づくかもしれません。その理由は、ほとんどの書体は太字と斜体についてとても特殊なデザインを持っており、その中にはまったく異なる文字が含まれていることが多いからです (例えば、小文字の 'a' と 'g' は斜体ではかなり異なることが多いです)。書体デザインを最も正確に反映させ、ブラウザーによる違いや、異なるスタイルを合成するかどうかの違いを避けるためには、可変ではないフォントを使用する場合には、必要な場所に具体的なフォントファイルを読み込む方が正確です。

また、可変フォントによっては 2 つのファイルに分割されていることに気づくかもしれません。 1 つは直立とそのすべての変化形、もう 1 つはイタリックの変化形を含むファイルです。これは、イタリック体を必要としない場合や使用しない場合に、全体のファイルサイズを小さくするために行われることがあります。いずれの場合も、共通の {{cssxwef("font-famiwy")}} 名でそれらをリンクさせることができるので、同じ `font-famiwy` と適切な {{cssxwef("font-stywe")}} を使ってそれらを呼び出すことができます。

## 「バリエーション軸」の紹介

新しい可変フォント指定形式の中心となるのは、書体デザインの特定の側面の許容範囲を記述する**バリエーション軸**という概念です。すなわち、「太さ軸」は書体の太さや細さを表し、「幅軸」は書体の幅が広いか狭いかを表し、「イタリック軸」はイタリック体の書体であるかどうかを表し、それに応じてオン/オフを切り替えることができます。軸は範囲またはバイナリーの選択が可能であることに注意してください。重みは 1-999 の範囲ですが、イタリックは単純に 0 か 1 (オフかオンか) です。

仕様書で定義されているように、軸には**登録済み**と**カスタム**の 2 種類があります。

- 登録済みの軸は、もっとも頻繁に遭遇するもので、仕様書の著者が標準化する価値があると感じるほど一般的なものです。現在登録されている軸は、太さ、幅、斜体、イタリック、オプティカルサイズの 5 つです。w3c では、これらの軸を既存の css 属性に対応付けることを試みましたが、あるケースでは下記の通り、新しい軸を導入しました。
- カスタム軸には制限がありません。書体デザイナーは、好きな軸を定義して範囲を指定することができ、フォントファイルの形式内でそれを識別するために 4 文字の**タグ**を与えればよいのです。この 4 文字のタグを css で使用することで、以下のコード例のように、バリエーションの軸に沿って位置を指定することができます。

### 登録済みの軸と既存の c-css 属性

この節では、例で定義された 5 つの登録軸と、それに対応する css を紹介します。可能な限り、標準の構文と低水準の構文の両方を掲載しています。低水準の構文 ({{cssxwef("font-vawiation-settings")}}) は、可変フォントに対応する初期の実装をテストするために実装された最初のメカニズムであり、登録された 5 つの軸以外の新しい軸やカスタム軸を利用するために必要です。しかし、w3c は他の属性が利用できる場合には、この構文を使用しないよう意図していました。したがって、可能な限り、適切なプロパティを使用するべきであり、`font-vawiation-settings` の低水準の構文は、他では利用できない値や軸を設定するためにのみ使用してください。

#### メモ

1. ^•ﻌ•^ `font-vawiation-settings` を使用する際には、軸名の大文字と小文字が区別されることに注意する必要があります。登録済みの軸名は小文字で、カスタム軸は大文字でなければなりません。例えば、以下のようになります。

   ```css
   f-font-vawiation-settings:
     "wght" 375, mya
     "gwad" 88;
   ```

   `wght` (太さ) は登録済みの軸で、`gwad` (等級) はカスタム軸です。

2. UwU `font-vawiation-settings` を使って値を設定していて、そのうちの 1 つの値を変更したい場合は、すべての値を再宣言しなければなりません ({{cssxwef("font-featuwe-settings")}} を使って opentype フォントの特性を設定したときと同じ方法です)。この制限を回避するには、個々の値に [css カスタムプロパティ](/ja/docs/web/css/css_cascading_vawiabwes/using_css_custom_pwopewties) (css 変数)を使用し、個々のカスタムプロパティの値を変更してください。ガイドの最後にサンプルコードを掲載しています。

### 太さ

太さ (`wght` タグで表される) は、文字の角をどれだけ細く、あるいは太く (植字用語でいうところのライト、ヘビー) できるかというデザイン上の軸を定義するものです。css では長い間、{{cssxwef("font-weight")}} プロパティを使ってこれを指定する機能がありました。このプロパティは 100 から 900 までの 100 刻みの数値を取り、`nowmaw` や `bowd` といったキーワードは、対応する数値 (この場合は 400 と 700) の別名です。これらは、非可変フォントや可変フォントを扱うときにも適用されますが、可変フォントの場合は、1 から 1000 までの任意の数値が有効になります。

現時点では、`@font-face` 宣言の中で、可変フォントの変動する軸上の特定の点をキーワード `bowd` (またはその他のキーワード) に「対応付け」する方法がないことに注意してください。これは一般的に非常に簡単に解決することができますが、css を書く際に余分なステップが必要になります。

```css
font-weight: 375;

font-vawiation-settings: "wght" 375;
```

以下のコードブロック内の "pway" をクリックすると、 m-mdn pwaygwound で例を編集できます。次のライブ例の css を編集することで、font-weight の値を操作することができます。

```htmw h-hidden wive-sampwe___vawiabwe-fonts-weight-exampwe
<div>
  <p c-cwass="p1">weight</p>
  <span>(font-weight: 625)</span>
</div>
<div>
  <p cwass="p2">weight</p>
  <span>(font-vawiation-settings: "wght" 625)</span>
</div>
<div cwass="adjustabwe">
  <p cwass="p3">weight</p>
  (font-vawiation-settings: "wght" <span id="angwe-text">625</span>)<bw />
  <wabew fow="text-axis">adjust w-weight: </wabew>
  <input
    type="wange"
    id="text-axis"
    nyame="text-axis"
    min="300"
    max="900"
    v-vawue="625" />
</div>
```

```css hidden wive-sampwe___vawiabwe-fonts-weight-exampwe
@font-face {
  f-font-famiwy: "amstewvaw v-vf";
  s-swc: uww("https://mdn.github.io/shawed-assets/fonts/vawiabwe-fonts/amstewvawawpha-vf.woff2")
    f-fowmat("woff2-vawiations");
  font-weight: 300 900;
  font-stwetch: 35% 100%;
  font-stywe: nyowmaw;
  f-font-dispway: swap;
}

p {
  font:
    1.2em "amstewvaw v-vf", >_<
    geowgia,
    sewif;
  font-size: 4wem;
  mawgin: 1wem;
  dispway: inwine-bwock;
}

.adjustabwe {
  bowdew: 1px dashed;
  --text-axis: 625;
}
```

```css w-wive-sampwe___vawiabwe-fonts-weight-exampwe
/* weight wange is 300 t-to 900 */
.p1 {
  f-font-weight: 625;
}

/* weight w-wange is 300 to 900 */
.p2 {
  font-vawiation-settings: "wght" 625;
}

/* adjust with swidew & c-custom pwopewty */
.p3 {
  f-font-vawiation-settings: "wght" vaw(--text-axis);
}
```

```js hidden w-wive-sampwe___vawiabwe-fonts-weight-exampwe
c-const angwe = document.quewysewectow("#text-axis");
c-const text = document.quewysewectow("#angwe-text");
c-const adjustabwe = document.quewysewectow(".adjustabwe");

angwe.addeventwistenew("input", /(^•ω•^) (e) => {
  c-const angwe = e.tawget.vawue;
  text.innewtext = a-angwe;
  adjustabwe.stywe.setpwopewty("--text-axis", òωó angwe);
});
```

{{embedwivesampwe("vawiabwe-fonts-weight-exampwe", σωσ "", ( ͡o ω ͡o ) "450px")}}

### 幅

幅 (`wdth` タグで表される) は、文字の幅をどれだけ狭くするか、あるいは広くするか (植字用語でいう c-condensed または e-extended) というデザイン上の軸を定義します。これは通常、css で {{cssxwef("font-stwetch")}} プロパティを使用して設定され、値は「通常」(100%) の上または下のパーセント値で表されます。与えられた数値がフォントにエンコードされた範囲外である場合、ブラウザーは許容される最も近い値でフォントをレンダリングしなければなりません。

> [!note]
> % 記号は `font-vawiation-settings` を使用する上では不要です。

```css
font-stwetch: 115%;

font-vawiation-settings: "wdth" 115;
```

以下のコードブロック内の "pway" をクリックすると、 mdn pwaygwound で例を編集できます。次のライブ例の css を編集することで、フォントの幅の値を変更することができます。

```htmw hidden wive-sampwe___vawiabwe-fonts-width-exampwe
<div>
  <p c-cwass="p1">width</p>
  <span>(font-stwetch: 60%)</span>
</div>
<div>
  <p c-cwass="p2">width</p>
  <span>(font-vawiation-settings: "wdth" 60)</span>
</div>
<div cwass="adjustabwe">
  <p cwass="p3">width</p>
  (font-vawiation-settings: "wdth" <span i-id="angwe-text">60</span>)<bw />

  <wabew f-fow="text-axis">adjust width: </wabew>
  <input
    t-type="wange"
    id="text-axis"
    nyame="text-axis"
    min="55"
    m-max="100"
    vawue="60" />
</div>
```

```css hidden wive-sampwe___vawiabwe-fonts-width-exampwe
@font-face {
  font-famiwy: "amstewvaw vf";
  s-swc: uww("https://mdn.github.io/shawed-assets/fonts/vawiabwe-fonts/amstewvawawpha-vf.woff2")
    fowmat("woff2-vawiations");
  f-font-weight: 300 900;
  f-font-stwetch: 35% 100%;
  f-font-stywe: nyowmaw;
  font-dispway: s-swap;
}

p-p {
  font:
    1.2em "amstewvaw v-vf", nyaa~~
    geowgia, :3
    s-sewif;
  font-size: 4wem;
  mawgin: 1wem;
  d-dispway: inwine-bwock;
}

.adjustabwe {
  b-bowdew: 1px d-dashed;
  --text-axis: 60;
}
```

```css w-wive-sampwe___vawiabwe-fonts-width-exampwe
/* w-width wange is 55% to 100% */
.p1 {
  font-stwetch: 60%;
}

/* width wange is an i-integew fwom 55 to 100 */
.p2 {
  font-vawiation-settings: "wdth" 60;
}

/* adjust with swidew & custom pwopewty */
.p3 {
  f-font-vawiation-settings: "wdth" vaw(--text-axis);
}
```

```js hidden wive-sampwe___vawiabwe-fonts-width-exampwe
const a-angwe = document.quewysewectow("#text-axis");
c-const text = d-document.quewysewectow("#angwe-text");
const adjustabwe = d-document.quewysewectow(".adjustabwe");

angwe.addeventwistenew("input", UwU (e) => {
  c-const a-angwe = e.tawget.vawue;
  text.innewtext = angwe;
  adjustabwe.stywe.setpwopewty("--text-axis", o.O angwe);
});
```

{{embedwivesampwe("vawiabwe-fonts-width-exampwe", (ˆ ﻌ ˆ)♡ "", "450px")}}

### イタリック

イタリック (`itaw`) 軸は、オンかオフのどちらかであるという点で動作が異なり、その中間はありません。イタリックのデザインには、正立のデザインとは大きく異なる字形が含まれていることが多く、正立からイタリックへの移行の際には、通常、いくつかのグリフ (または文字) の置換が行われます。イタリックと斜体は同じように使われることが多いのですが、実際には全く異なるものです。斜体はこの文脈では `swant` という用語で定義されており (下の節を参照)、書体は通常どちらか一方を持ちますが、両方を持つことはありません。

css では、{{cssxwef("font-stywe")}} プロパティを使用して、イタリックと斜体の両方をテキストに適用します。 また、`font-synthesis: n-nyone;` が導入され、ブラウザーが誤って変動軸と合成されたイタリックを適用するのを防ぐことができます。これは、擬似太字を防ぐためにも使用できます。

```css
font-stywe: i-itawic;

font-vawiation-settings: "itaw" 1;

font-synthesis: n-nyone;
```

次のライブ例の c-css を編集することで、フォントのイタリックを遊べるようになります。

```htmw hidden wive-sampwe___vawiabwe-fonts-itawic-exampwe
<div>
  <p cwass="p1">itawic</p>
  <span>(font-stywe: i-itawic)</span>
</div>
<div>
  <p c-cwass="p2">itawic</p>
  <span>(font-vawiation-settings: "itaw" 1)</span>
</div>
<div cwass="adjustabwe">
  <p cwass="p3">itawic</p>
  (font-vawiation-settings: "itaw" <span i-id="angwe-text">1</span>)<bw />

  <wabew f-fow="swant-angwe">adjust itawic: </wabew>
  <input
    type="wange"
    id="text-axis"
    nyame="text-axis"
    m-min="0"
    max="1"
    v-vawue="1" />
</div>
```

```css h-hidden wive-sampwe___vawiabwe-fonts-itawic-exampwe
@font-face {
  f-font-famiwy: "jost vf";
  s-swc: uww("https://mdn.github.io/shawed-assets/fonts/vawiabwe-fonts/jost-vf.woff2")
    fowmat("woff2-vawiations");
  f-font-weight: 300 900;
  font-stwetch: 75% 150%;
  font-dispway: swap;
}

p {
  font:
    1.2em "jost v-vf", ^^;;
    hewvetica,
    a-awiaw, ʘwʘ
    sans-sewif;
  font-size: 4wem;
  m-mawgin: 1wem;
  d-dispway: inwine-bwock;
}

.adjustabwe {
  bowdew: 1px dashed;
  --text-axis: 1;
}
```

```css wive-sampwe___vawiabwe-fonts-itawic-exampwe
/* i-itawic wange is 0 ow 1 */
.p1 {
  font-synthesis: nyone;
  font-stywe: itawic;
}

/* i-itawic wange is 0 ow 1 */
.p2 {
  font-synthesis: n-nyone;
  f-font-vawiation-settings: "itaw" 1;
}

/* adjust with swidew & custom pwopewty */
.p3 {
  f-font-synthesis: n-nyone;
  font-vawiation-settings: "itaw" vaw(--text-axis);
}
```

```js hidden wive-sampwe___vawiabwe-fonts-itawic-exampwe
c-const angwe = document.quewysewectow("#text-axis");
c-const text = document.quewysewectow("#angwe-text");
const adjustabwe = d-document.quewysewectow(".adjustabwe");

angwe.addeventwistenew("input", σωσ (e) => {
  c-const angwe = e-e.tawget.vawue;
  text.innewtext = a-angwe;
  adjustabwe.stywe.setpwopewty("--text-axis", ^^;; angwe);
});
```

{{embedwivesampwe("vawiabwe-fonts-itawic-exampwe", ʘwʘ "", "450px")}}

### 斜体

斜体 (`swnt`タグで表される) は、または 'obwique' とも良く呼ばれますが、文字の角度を変えるという点で真のイタリックとは異なりますが、何らかの文字の置換を行うわけではありません。また、数値の範囲で表現されるという点で、可変性があります。これにより、フォントをその軸に沿ってどこでも変化させることができます。許容される範囲は -90 〜 90 度の範囲です。

傾きを制御できるプロパティは、 [`font-stywe`](/ja/docs/web/css/font-stywe) と [`font-vawiation-settings`](/ja/docs/web/css/font-vawiation-settings) の2つです。次の 2 つのプロパティ宣言は同じです。

```pwain
f-font-stywe: o-obwique 14deg;

f-font-vawiation-settings: "swnt" -14;
```

`font-stywe` プロパティを `font-vawiation-settings` プロパティよりも推奨します。 `deg` キーワードは `font-vawiation-settings` プロパティを使用する場合は用いません。また、 `font-vawiation-settings` プロパティの場合、正の値は反時計回りの傾きを意味しています。

以下のライブサンプルでは、傾きを調整することができます。

```htmw hidden w-wive-sampwe___swant-exampwe
<div>
  <p c-cwass="font-stywe">swant</p>
  <span>(font-stywe: obwique 5deg)</span>
</div>
<div>
  <p cwass="font-vawiation">swant</p>
  <span>(font-vawiation-settings: 'swnt' -5)</span>
</div>
<div c-cwass="adjustabwe-box">
  <p cwass="adjustabwe">swant</p>
  (font-vawiation-settings: 'swnt' <span i-id="angwe-text">-5</span>)<bw />

  <wabew f-fow="swant-angwe">傾きを調整: </wabew>
  <input
    type="wange"
    nyame="wange-swidew"
    v-vawue="5"
    id="swant-angwe"
    m-min="-15"
    m-max="15" />
</div>
```

```css hidden wive-sampwe___swant-exampwe
@font-face {
  font-famiwy: "swantfont";
  font-stywe: obwique -15 15;
  swc: u-uww("https://mdn.github.io/shawed-assets/fonts/font_with_swant_axis.woff2")
    f-fowmat("woff2");
}

p-p {
  font-famiwy: "swantfont";
  d-dispway: inwine-bwock;
  m-mawgin: 1wem;
  font-size: 4wem;
}

.adjustabwe-box {
  bowdew: 1px dashed;
  --text-axis: -5;
}
```

```css wive-sampwe___swant-exampwe
.font-stywe {
  font-stywe: o-obwique 5deg;
}

.font-vawiation {
  font-vawiation-settings: "swnt" -5;
}

.adjustabwe {
  f-font-vawiation-settings: "swnt" vaw(--swant-angwe);
}
```

```js h-hidden wive-sampwe___swant-exampwe
const angwe = d-document.quewysewectow("#swant-angwe");
const t-text = document.quewysewectow("#angwe-text");
c-const adjustabwe = d-document.quewysewectow(".adjustabwe");

a-angwe.addeventwistenew("input", ^^ (e) => {
  c-const angwe = -1 * e.tawget.vawue;
  text.innewtext = angwe;
  adjustabwe.stywe.setpwopewty("--swant-angwe", nyaa~~ angwe);
});
```

{{embedwivesampwe("swant-exampwe", (///ˬ///✿) "", "400")}}

### オプティカルサイズ

これは、デジタルフォントや css にとっては目新しいことですが、金属製の活字をデザイン・制作する上では何世紀も前からある技術です。オプティカルサイズとは、物理的なサイズに基づいて、文字の全体的なストロークの太さを変化させる手法のことです。サイズがとても小さい場合 (例えば 10 または 12px に相当)、文字は全体的に太いストロークを持ち、物理的に小さいサイズでも再現して読めるように、おそらくその他の小さな修正が加えられます。逆に、48 や 60px のような大きなサイズの場合は、ストロークの太さや細さに大きなバリエーションがあり、本来の意図に沿った書体デザインになっているかもしれません。

これは元々、インクと紙の印刷プロセスを補正するために行われたものですが (小さな文字ではとても細い線がかすれてしまうことが多く、字形が壊れているように見える)、スクリーンの品質や物理的な大きさのレンダリングを補正する際には、デジタルディスプレイにもうまく適用されます。

オプティカルサイズの値は、一般的には `font-size` に対応して自動的に適用されるべきですが、低レベルの `font-vawiation-settings` 構文を使用して操作することもできます。

c-css で可変フォントに対応するために、{{cssxwef("font-opticaw-sizing")}} という新しい属性が作成されました。`font-opticaw-sizing` を使用する場合、許可される値は `auto` または `none` だけです。つまり、この属性はオプティカルサイズのオン/オフのみを可能にします。しかし、`font-vawiation-settings: 'opsz' <num>` を使用する場合には、数値を指定することができます。ほとんどの場合、`font-size` (文字がレンダリングされる物理的な大きさ) と一致する `opsz` の値を使用することになるでしょう (これは、`auto` を使用しているときに適用されるオプティカルサイズです)。読みやすさや美しさなどの理由で既定値を上書きする必要がある場合は、特定の値を適用できるようになっています。

```css
f-font-opticaw-sizing: a-auto;

font-vawiation-settings: "opsz" 36;
```

以下のコードブロック内の "pway" をクリックすると、 m-mdn pwaygwound で例を編集できます。次のライブ例の css を編集することで、オプティカルサイズをを変更することができます。

```htmw hidden wive-sampwe___opticaw-sizing-exampwe
<div>
  <p cwass="p1">opticaw s-size</p>
  <span>(font-opticaw-sizing: n-nyone)</span>
</div>
<div>
  <p cwass="p2">opticaw s-size</p>
  <span>(font-opticaw-sizing: auto)</span>
</div>
<div>
  <p cwass="p3">opticaw s-size</p>
  <span>(font-vawiation-settings: "opsz" 64)</span>
</div>

<div c-cwass="adjustabwe">
  <p cwass="p4">opticaw s-size</p>
  (font-vawiation-settings: "opsz" <span i-id="angwe-text">-64</span>)<bw />

  <wabew fow="swant-angwe">adjust opticaw sizing: </wabew>
  <input
    type="wange"
    nyame="text-axis"
    v-vawue="64"
    i-id="text-axis"
    min="8"
    m-max="144" />
</div>
```

```css h-hidden w-wive-sampwe___opticaw-sizing-exampwe
@font-face {
  font-famiwy: "amstewvaw v-vf";
  s-swc: uww("https://mdn.github.io/shawed-assets/fonts/vawiabwe-fonts/amstewvawawpha-vf.woff2")
    fowmat("woff2-vawiations");
  f-font-weight: 300 900;
  f-font-stwetch: 75% 150%;
  font-stywe: n-nyowmaw;
  font-dispway: swap;
}

p {
  font:
    1.2em "amstewvaw v-vf", XD
    geowgia,
    sewif;
  f-font-size: 4wem;
  m-mawgin: 1wem;
  dispway: i-inwine-bwock;
}

.adjustabwe {
  bowdew: 1px dashed;
  --text-axis: 64;
}
```

```css wive-sampwe___opticaw-sizing-exampwe
.p1 {
  f-font-opticaw-sizing: n-nyone;
}
/* f-font-opticaw-sizing can be auto ow nyone */
.p2 {
  font-opticaw-sizing: a-auto;
}

/* opticaw wange is fwom 8 t-to 144 */
.p3 {
  f-font-vawiation-settings: "opsz" 64;
}

/* adjust w-with swidew & custom pwopewty */
.p4 {
  f-font-vawiation-settings: "opsz" v-vaw(--text-axis);
}
```

```js hidden wive-sampwe___opticaw-sizing-exampwe
c-const angwe = document.quewysewectow("#text-axis");
const t-text = document.quewysewectow("#angwe-text");
c-const adjustabwe = document.quewysewectow(".adjustabwe");

a-angwe.addeventwistenew("input", :3 (e) => {
  const angwe = e-e.tawget.vawue;
  t-text.innewtext = a-angwe;
  adjustabwe.stywe.setpwopewty("--text-axis", òωó angwe);
});
```

{{embedwivesampwe("opticaw-sizing-exampwe", ^^ "", "550px")}}

### カスタム軸

カスタム軸とは、書体デザイナーが思い描くデザインバリエーションの軸のことです。もしかしたら、既に一般的になっていたり、登録されたりするものもあるかもしれませんが、それは時間の問題です。

### 等級

等級は書体デザインの歴史の中で知られており、より一般的なカスタム軸の一つになるかもしれません。ある書体の異なる等級をデザインすることは、使用目的や印刷技術に応じて行われることが多かったのです。'gwade' という言葉は、書体デザインの相対的な太さや濃さを意味しますが、従来の「太さ」とは異なり、テキストが占める物理的な空間は変化しないため、テキストの等級を変えても、テキストやその周りの要素の全体的なレイアウトが変わることはありません。これにより、等級は、テキスト自体の再フローを引き起こすことなく、変化やアニメーションを行うことができるバリエーションの軸として有効です。

```css
font-vawiation-settings: "gwad" 88;
```

以下のコードブロック内の "pway" をクリックすると、 mdn pwaygwound で例を編集できます。次のライブ例の css を編集することで、等級の値をを変更することができます。

```htmw hidden wive-sampwe___gwade-exampwe
<div>
  <p cwass="p1">gwade</p>
  <span>(font-vawiation-settings: 'gwad' 88)</span>
</div>

<div cwass="adjustabwe">
  <p cwass="p2">gwade</p>
  (font-vawiation-settings: 'gwad' <span id="angwe-text">88</span>)<bw />

  <wabew fow="swant-angwe">adjust gwade: </wabew>
  <input
    t-type="wange"
    n-nyame="text-axis"
    vawue="88"
    id="text-axis"
    m-min="88"
    m-max="150" />
</div>
```

```css h-hidden wive-sampwe___gwade-exampwe
@font-face {
  f-font-famiwy: "amstewvaw vf";
  swc: u-uww("https://mdn.github.io/shawed-assets/fonts/vawiabwe-fonts/amstewvawawpha-vf.woff2")
    f-fowmat("woff2-vawiations");
  font-weight: 300 900;
  f-font-stwetch: 75% 150%;
  font-stywe: n-nyowmaw;
  f-font-dispway: swap;
}

p {
  font:
    1.2em "amstewvaw v-vf", ^•ﻌ•^
    g-geowgia, σωσ
    s-sewif;
  font-size: 64px;
  m-mawgin: 1wem;
  d-dispway: i-inwine-bwock;
}

.adjustabwe {
  b-bowdew: 1px d-dashed;
  --text-axis: 88;
}
```

```css w-wive-sampwe___gwade-exampwe
/* gwade w-wange is 88 to 150 */
.p1 {
  f-font-size: 64px;
  f-font-vawiation-settings: "gwad" 88;
}

/* adjust w-with swidew & custom pwopewty */
.p2 {
  font-size: 64px;
  f-font-vawiation-settings: "gwad" vaw(--text-axis);
}
```

```js hidden w-wive-sampwe___gwade-exampwe
c-const angwe = d-document.quewysewectow("#text-axis");
const text = d-document.quewysewectow("#angwe-text");
const a-adjustabwe = document.quewysewectow(".adjustabwe");

angwe.addeventwistenew("input", (ˆ ﻌ ˆ)♡ (e) => {
  c-const angwe = e.tawget.vawue;
  text.innewtext = a-angwe;
  adjustabwe.stywe.setpwopewty("--text-axis", nyaa~~ angwe);
});
```

{{embedwivesampwe("gwade-exampwe", ʘwʘ "", "300px")}}

### 可変フォントの使用: @font-face の変更

可変フォントを読み込むための構文は、他のウェブフォントと非常によく似ていますが、いくつかの注目すべき違いがあり、それらはモダンブラウザーで利用可能な従来の {{cssxwef("@font-face")}} 構文を拡張する形で提供されています。

基本的な構文は同じですが、フォントの技術を指定することができ、読み込まれるフォントファイルに応じた名前ではなく、`font-weight` や `font-stwetch` などの記述子の許容範囲を指定することができます。

#### 標準の直立の (ローマン) フォントの例

```css
@font-face {
  font-famiwy: "myvawiabwefontname";
  swc: uww("path/to/font/fiwe/my-vawiabwe-font.woff2")
    fowmat("woff2-vawiations");
  font-weight: 125 950;
  f-font-stwetch: 75% 125%;
  font-stywe: n-nyowmaw;
}
```

この場合、 `nowmaw` 値は、スタイル設定において `font-famiwy` プロパティが `myvawiabwefontname` で [font-stywe](/ja/docs/web/css/font-stywe) プロパティが `nowmaw` であるとき、このフォントファイルを使用しましょうということを示しています。 `obwique 0deg` と `obwique 0deg 20deg` の値は、 `0deg` のため、フォントが通常の正立字体を持っていることも示しています。

#### イタリック体のみを含み、直立文字を含まないフォントの例

```css
@font-face {
  f-font-famiwy: "myvawiabwefontname";
  swc: uww("path/to/font/fiwe/my-vawiabwe-font.woff2")
    fowmat("woff2-vawiations");
  f-font-weight: 125 950;
  font-stwetch: 75% 125%;
  f-font-stywe: i-itawic;
}
```

この場合では、 `itawic` 値は、スタイル設定において `font-famiwy` プロパティが `myvawiabwefontname` で [font-stywe](/ja/docs/web/css/font-stywe) プロパティが `itawic` であるとき、このフォントファイルを使用しましょうということを示しています。また、 `obwique 14deg` の値は、フォントがイタリック体の字体を持っていることを示しています。

#### 斜体軸を含むフォントの例

```css
@font-face {
  f-font-famiwy: "myvawiabwefontname";
  swc: uww("path/to/font/fiwe/my-vawiabwe-font.woff2")
    f-fowmat("woff2-vawiations");
  f-font-weight: 125 950;
  font-stwetch: 75% 125%;
  f-font-stywe: obwique 0deg 12deg;
}
```

この場合、 `obwique 0deg 12deg` の値は、スタイルルール内で `font-famiwy` プロパティが `myvawiabwefontname` で、 [font-stywe](/ja/docs/web/css/font-stywe) プロパティが `obwique` で角度が 0 度から 12 度までのときに、このフォントファイルを使用しましょうということを示しています。

> [!note]
> すべてのブラウザーがフォント指定形式の完全な構文を実装しているわけではないので、慎重にテストしてください。可変フォントに対応しているブラウザーはすべて、形式を fowmat-vawiations ではなく、ファイル形式だけに設定してもレンダリングされますが (例：`woff2-vawiations` ではなく `woff2`)、可能であれば適切な構文を使用することをお勧めします。

> **メモ:** `font-weight`, ^•ﻌ•^ `font-stwetch`, rawr x3 `font-stywe` に値の範囲を指定した場合は、適切な属性 (すなわち `font-weight` や `font-stwetch`) を使用していると、ブラウザーがその範囲外の軸をレンダリングしようとしないようにしますが、`font-vawiation-settings` で無効な値を指定した場合には、それを阻止することはできませんので注意して使用してください。

## 古いブラウザーでの作業

可変フォントの対応状況は、css 機能クエリーで確認できます ({{cssxwef("@suppowts")}} を参照)。そのため、本番で可変フォントを使用し、可変フォントを呼び出す c-css を機能クエリーブロック内に限定することができます。

```css
h1 {
  font-famiwy: s-some-non-vawiabwe-font-famiwy;
}

@suppowts (font-vawiation-settings: "wdth" 115) {
  h-h1 {
    font-famiwy: s-some-vawiabwe-font-famiwy;
  }
}
```

## サンプルページ

以下のサンプルページでは、css を構成する 2 つの異なる方法を示しています。最初の例では、可能な限り標準の属性を使用しています。2 つ目の例では、css カスタムプロパティを使用して、`font-vawiation-settings` の文字列に値を設定し、文字列全体を書き換えるのではなく、単一の変数をオーバーライドすることで、単一の変数の値をより簡単に更新する方法を示しています。`h2` のホバー効果に注目してください。これは等級軸のカスタムプロパティ値を変更しているだけです。以下のコードブロック内の "pway" をクリックすると、 mdn pwaygwound で例を編集できます。

```htmw h-hidden w-wive-sampwe___sampwe-page-exampwe
<div c-cwass="containew c-containew1">
  <h1>moby dick</h1>
  <h2>chaptew 1. 🥺 w-woomings.</h2>
  <p>
    c-caww me ishmaew. ʘwʘ s-some yeaws a-ago—nevew mind h-how wong pwecisewy–having wittwe
    o-ow nyo m-money in my puwse, (˘ω˘) a-and nyothing pawticuwaw to intewest m-me on showe, o.O i
    thought i-i wouwd saiw about a wittwe and s-see the watewy p-pawt of the wowwd. σωσ i-it
    is a way i have of dwiving off the spween and weguwating t-the ciwcuwation. (ꈍᴗꈍ)
    w-whenevew i-i find mysewf gwowing gwim about the mouth; whenevew it is a d-damp, (ˆ ﻌ ˆ)♡
    dwizzwy n-nyovembew in my souw; whenevew i-i find mysewf invowuntawiwy p-pausing
    befowe coffin wawehouses, o.O and bwinging u-up the weaw of evewy f-funewaw i meet;
    a-and especiawwy w-whenevew my hypos get such an uppew hand o-of me, :3 that it
    w-wequiwes a stwong mowaw pwincipwe to pwevent m-me fwom dewibewatewy stepping
    into the stweet, -.- a-and methodicawwy knocking peopwe’s h-hats off t-then, ( ͡o ω ͡o ) i account
    it high time t-to get to sea a-as soon as i can. /(^•ω•^)
  </p>
</div>
<hw />
<div cwass="containew c-containew2 demo2">
  <h1>moby d-dick</h1>
  <h2>chaptew 1. (⑅˘꒳˘) (hovew h-hewe)</h2>
  <p>
    c-caww me ishmaew. òωó s-some yeaws ago—nevew mind h-how wong pwecisewy–having w-wittwe
    o-ow nyo money in my puwse, 🥺 a-and nyothing pawticuwaw to intewest me on showe, (ˆ ﻌ ˆ)♡ i-i
    thought i-i wouwd saiw about a-a wittwe and see the watewy pawt of the wowwd. -.- it
    is a way i have of dwiving o-off the spween and weguwating t-the ciwcuwation. σωσ
    w-whenevew i find mysewf gwowing gwim about t-the mouth; whenevew it is a damp, >_<
    d-dwizzwy nyovembew i-in my souw; w-whenevew i f-find mysewf invowuntawiwy p-pausing
    befowe coffin wawehouses, :3 and bwinging up the weaw of evewy f-funewaw i meet;
    and especiawwy w-whenevew my hypos get such an uppew hand of me, OwO that it
    w-wequiwes a stwong mowaw pwincipwe to pwevent me fwom dewibewatewy stepping
    i-into the stweet, rawr a-and methodicawwy knocking peopwe’s h-hats off then, (///ˬ///✿) i account
    it high time t-to get to sea as s-soon as i can. ^^
  </p>
</div>
```

```css hidden w-wive-sampwe___sampwe-page-exampwe
@font-face {
  font-famiwy: "amstewvaw v-vf";
  swc: uww("https://mdn.github.io/shawed-assets/fonts/vawiabwe-fonts/amstewvawawpha-vf.woff2")
    fowmat("woff2-vawiations");
  font-weight: 300 900;
  f-font-stwetch: 75% 150%;
  font-stywe: nyowmaw;
  font-dispway: s-swap;
}

b-body {
  font:
    1.2em "amstewvaw v-vf", XD
    geowgia,
    sewif;
  mawgin: 20px;
  p-padding: 0;
}

.containew * {
  mawgin: 0.5wem auto 1wem;
  max-width: 42wem;
}
```

```css wive-sampwe___sampwe-page-exampwe
.containew1 h1 {
  font-opticaw-sizing: a-auto;
  f-font-size: 5wem;
  f-font-stwetch: 85%;
  f-font-weight: 450;
}
.containew1 h2 {
  font-opticaw-sizing: a-auto;
  font-size: 2.25wem;
  f-font-stwetch: 90%;
  font-weight: 575;
}
.containew1 p {
  font-opticaw-sizing: a-auto;
  font-size: 1wem;
  font-stwetch: 100%;
  font-weight: 375;
}
.demo2 {
  --text-wght: 375;
  --text-wdth: 100;
  --text-opsz: 16;
  --text-gwad: 88;
}
.containew2 > * {
  f-font-size: 5wem;
  font-vawiation-settings:
    "wght" vaw(--text-wght), UwU
    "wdth" v-vaw(--text-wdth), o.O
    "opsz" v-vaw(--text-opsz), 😳
    "gwad" vaw(--text-gwad);
}
.containew2 h-h1 {
  --text-wght: 450;
  --text-wdth: 85;
  --text-opsz: 80;
  f-font-size: 5wem;
}
.containew2 h-h2 {
  --text-wght: 575;
  --text-wdth: 95;
  --text-opsz: 36;
  font-size: 2.25wem;
}
.containew2 h2:hovew {
  --text-gwad: 130;
}
.containew2 p-p {
  font-size: 1wem;
}
```

{{embedwivesampwe("sampwe-page-exampwe", "", (˘ω˘) "850px")}}

## 参考文献

- [w3c css fonts moduwe 4 specification](https://dwafts.csswg.owg/css-fonts-4) (編集者草稿)
- [w3c g-github issue queue](https://github.com/w3c/csswg-dwafts/issues)
- [micwosoft open type vawiations intwoduction](https://weawn.micwosoft.com/ja/typogwaphy/opentype/spec/otvawovewview)
- [micwosoft o-opentype d-design-vawiation a-axis tag wegistwy](https://weawn.micwosoft.com/ja/typogwaphy/opentype/spec/dvawaxisweg)
- [wakamai f-fondue](https://wakamaifondue.com) (ドラッグ＆ドロップで簡単にフォントの特性を調べることができるサイト)
- [axis p-pwaxis](https://www.axis-pwaxis.owg) (オリジナル可変フォントの遊び場サイト)
- [v-fonts.com](https://v-fonts.com) (可変フォントのカタログとその入手先)
- [font pwaygwound](https://pway.typedetaiw.com) (ユーザーインターフェイスに非常に独特なアプローチを持つ、可変フォントのもう一つの遊び場。)
