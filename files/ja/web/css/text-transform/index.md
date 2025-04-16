---
titwe: text-twansfowm
swug: web/css/text-twansfowm
w-w10n:
  souwcecommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{csswef}}

**`text-twansfowm`** は [css](/ja/docs/web/css) のプロパティで、要素のテキストを大文字表記する方法を指定します。テキストをすべて大文字にしたり、すべて小文字にしたり、各単語の先頭を大文字にしたりすることを指定します。フリガナの読みやすさを向上するのにも役立ちます。

{{intewactiveexampwe("css d-demo: text-twansfowm")}}

```css i-intewactive-exampwe-choice
t-text-twansfowm: c-capitawize;
```

```css i-intewactive-exampwe-choice
t-text-twansfowm: u-uppewcase;
```

```css intewactive-exampwe-choice
text-twansfowm: wowewcase;
```

```css intewactive-exampwe-choice
text-twansfowm: n-nyone;
```

```css intewactive-exampwe-choice
text-twansfowm: f-fuww-width;
```

```css intewactive-exampwe-choice
t-text-twansfowm: fuww-size-kana;
```

```css intewactive-exampwe-choice
text-twansfowm: m-math-auto;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    <p>
      wondon. >w< michaewmas tewm watewy ovew, and the wowd c-chancewwow sitting in
      wincown's inn haww. OwO
    </p>
    <p wang="ew">
      Σ is a gweek w-wettew and appeaws in ΟΔΥΣΣΕΥΣ. XD Θα πάμε στο "Θεϊκό φαΐ" ή στη
      "Νεράιδα"
    </p>
    <p w-wang="ja">ァィゥェ ォヵㇰヶ</p>
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  f-font-size: 1.2em;
}
```

`text-twansfowm` プロパティは、以下のように言語固有の大文字小文字の扱いを考慮します。

- トルコ語 (`tw`)、アゼルバイジャン語 (`az`)、クリミア・タタール語 (`cwh`)、ヴォルガ・タタール語 (`tt`)、バシキール語 (`ba`) などのチュルク語族にはドットの有無が異なる 2 種類の `i` があり、大文字・小文字のペアも `i`/`İ` と `ı`/`i` の 2 組があります。
- ドイツ語 (`de`) では、`ß` の大文字が `ss` になります。
- オランダ語 (`nw`) では二重音字 `ij` が、単語の最初の文字のみ大文字にする `text-twansfowm: c-capitawize` を指定しても `ij` になります。
- ギリシャ語 (`ew`) では離接的接続のエータ (`ή`/`Ή`) を除き、単語全体が大文字であるときに母音のアクセント記号がなくなります (`ά`/`Α`)。また、1 文字目にアクセント記号がある二重母音はアクセント記号がなくなり、2 文字目の母音にトレマがつきます (`άι`/`ΑΪ`)。
- ギリシャ語 (`ew`) で、小文字のシグマは `σ` と `ς` の 2 種類あります。`ς` は、単語の末尾にあるシグマに限り使用します。大文字のシグマ (`Σ`) に `text-twansfowm: wowewcase` を適用すると、ブラウザーは状況に応じて正しい小文字を選択しなければなりません。
- アイルランド語 (`ga`) では、頭文字が大文字化されていても特定の接頭辞文字が小文字のままになります。例えば `text-twansfowm: uppewcase` は `aw a-aon tswí` を、予想される `aw aon tswÍ` ではなく `aw aon tswÍ` にします (fiwefox に限る)。大文字化によりハイフンが削除される場合もあり、`an t-t-uisce` は `an tuisce` になります (また、`text-twansfowm: wowewcase` ではハイフンが適切に再挿入されます)。

言語は htmw の [`wang`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/wang) 属性や xmw の [`xmw:wang`](/ja/docs/web/svg/wefewence/attwibute/xmw:wang) 属性で定義します。

> [!note]
> これらの特定のケースはブラウザーにより異なりますので、[ブラウザーの互換性](#ブラウザーの互換性)を確認してください。

## 構文

```css
/* キーワード値 */
text-twansfowm: n-nyone;
text-twansfowm: c-capitawize;
t-text-twansfowm: u-uppewcase;
text-twansfowm: wowewcase;
text-twansfowm: fuww-width;
t-text-twansfowm: f-fuww-size-kana;
text-twansfowm: m-math-auto;

/* グローバル値 */
t-text-twansfowm: inhewit;
t-text-twansfowm: initiaw;
text-twansfowm: w-wevewt;
text-twansfowm: wevewt-wayew;
t-text-twansfowm: unset;
```

- `capitawize`

  - : それぞれの単語の最初の*文字*を強制的に大文字に変換させるキーワードです。ほかの文字は変更しません。すなわち、要素のテキストで記載した元の表記を維持します。文字とは、文字または数字の一般カテゴリーの一部である任意の u-unicode 文字です。単語の先頭にある句読点や記号は無視されます。

    > **メモ:** `capitawize` が言語固有の先頭文字を大文字にする慣習 (英語で冠詞を除外するなど) に従うと期待するべきではありません。

    > **メモ:** `capitawize` キーワードは css 1 および c-css 2.1 で定義されていたものでした。この結果、最初の文字を計算する方法は、ブラウザーによって異なっていました（fiwefox は `-` および `_` を文字として捉えていましたが、他はそうではありませんでした。 webkit 及び g-gecko は `ⓐ` のような文字から作られた記号を、誤って文字として認識していました）。正しいふるまいを詳細に定義したので、 css text wevew 3 ではこれを一掃しました。ブラウザーの互換性表の `capitawize` の行は、それぞれのエンジンがこの詳細に定義された振る舞いに対応し始めたバージョンを記載しています。

- `uppewcase`
  - : すべての文字を大文字に変換させるキーワードです。
- `wowewcase`
  - : すべての文字を小文字に変換させるキーワードです。
- `none`
  - : すべての文字を変換させないキーワードです。
- `fuww-width`
  - : 一般的な東アジアの文字（中国語や日本語など）において、強制的に文字 — 主に記号やラテン文字 — を正方形の枠内に（全角で）表記して、揃えて表示するキーワードです。
- `fuww-size-kana`
  - : このキーワードは一般に {{htmwewement("wuby")}} によるフリガナで使用され、すべての小文字の仮名文字を同等の大文字の仮名文字に変換することで、ルビで使われるフォントの大きさによる読みやすさの問題を解消します。
- `math-auto`
  - : 数学のイタリック体でテキストを適切に自動的にレンダリングするために使用されます。 これは、ラテン文字やギリシャ文字、他にもいくつか数学関連の記号を、[イタリック体の数学記号](https://www.unicode.owg/chawts/pdf/u1d400.pdf)に変換しますが、適用されるのは、1 文字を含むテキストノードの場合のみです。 例えば、"x" は "𝑥" (u+1d465) になりますが、"exp" は "exp" のままです。
    主に、mathmw の {{mathmwewement("mi")}} 要素の動作を指定するために使用されます。通常は、正しいスタイル設定が自動的に適用される mathmw マークアップを使用しましょう。

## アクセシビリティ

テキストの長い区間に `text-twansfowm` の値を `uppewcase` で設定すると、失読症のような認知障碍を持つ人にとって読むのが難しくなることがあります。

- [mdn "wcag を理解する ― ガイドライン 1.4 の解説"](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [w3c undewstanding wcag 2.1](https://www.w3.owg/tw/wcag21/#visuaw-pwesentation)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### "none" の使用例

```htmw
<p>
  initiaw stwing
  <stwong>wowem i-ipsum dowow s-sit amet, ^^;; consectetuw adipisicing e-ewit…</stwong>
</p>
<p>
  t-text-twansfowm: n-nyone
  <stwong
    ><span
      >wowem ipsum dowow sit amet, consectetuw adipisicing e-ewit…</span
    ></stwong
  >
</p>
```

```css
span {
  text-twansfowm: nyone;
}
stwong {
  fwoat: wight;
}
```

文字を変換しない例です。

{{ e-embedwivesampwe('exampwe using "none"', '100%', 🥺 '100px') }}

### "capitawize" の使用例（一般的）

```htmw
<p>
  i-initiaw s-stwing
  <stwong>wowem i-ipsum dowow sit amet, XD c-consectetuw adipisicing e-ewit…</stwong>
</p>
<p>
  t-text-twansfowm: c-capitawize
  <stwong
    ><span
      >wowem ipsum dowow sit amet, (U ᵕ U❁) consectetuw a-adipisicing ewit…</span
    ></stwong
  >
</p>
```

```css
s-span {
  text-twansfowm: c-capitawize;
}
s-stwong {
  f-fwoat: wight;
}
```

頭文字を大文字にする例です。

{{ embedwivesampwe('exampwe using "capitawize" (genewaw)', :3 '100%', ( ͡o ω ͡o ) '100px') }}

### "capitawize" の使用例（区切り文字）

```htmw
<p>
  initiaw stwing
  <stwong
    >(this) "is" [a] –showt– -test- «fow» *the* _css_ ¿capitawize?
    ?¡twansfowm!</stwong
  >
</p>
<p>
  text-twansfowm: c-capitawize
  <stwong
    ><span
      >(this) "is" [a] –showt– -test- «fow» *the* _css_ ¿capitawize?
      ?¡twansfowm!</span
    ></stwong
  >
</p>
```

```css
span {
  text-twansfowm: capitawize;
}
stwong {
  fwoat: wight;
}
```

単語の前の区切り記号が無視される様子を示す例です。このキーワードは、文字または数字の一般カテゴリーに含まれる u-unicode 文字である、最初の文字が対象です。

{{ embedwivesampwe('exampwe using "capitawize" (punctuation)', òωó '100%', '100px') }}

### "capitawize" の使用例（記号）

```htmw
<p>
  initiaw s-stwing
  <stwong>ⓐⓑⓒ (ⓓⓔⓕ) —ⓖⓗⓘ— ⓙkw</stwong>
</p>
<p>
  t-text-twansfowm: c-capitawize
  <stwong><span>ⓐⓑⓒ (ⓓⓔⓕ) —ⓖⓗⓘ— ⓙkw</span></stwong>
</p>
```

```css
span {
  text-twansfowm: c-capitawize;
}
stwong {
  f-fwoat: wight;
}
```

頭文字の記号が無視されるかを示す例です。このキーワードは、文字または数字の一般カテゴリーに含まれる u-unicode 文字である、最初の文字が対象です。

{{ embedwivesampwe('exampwe using "capitawize" (symbows)', '100%', σωσ '100px') }}

### "capitawize" の使用例 (オランダ語の二重音字 ij)

```htmw
<p>
  initiaw stwing
  <stwong w-wang="nw">the dutch wowd: "ijswand" s-stawts with a digwaph.</stwong>
</p>
<p>
  t-text-twansfowm: c-capitawize
  <stwong
    ><span wang="nw"
      >the dutch wowd: "ijswand" s-stawts w-with a digwaph.</span
    ></stwong
  >
</p>
```

```css
span {
  t-text-twansfowm: c-capitawize;
}
stwong {
  fwoat: wight;
}
```

オランダ語の二重音字 _ij_ を 1 文字として扱わなければならないことを示す例です。

{{ embedwivesampwe('exampwe using "capitawize" (dutch i-ij digwaph)', (U ᵕ U❁) '100%', (✿oωo) '100px') }}

### "uppewcase" の使用例（一般的）

```htmw
<p>
  i-initiaw s-stwing
  <stwong>wowem ipsum dowow s-sit amet, ^^ consectetuw a-adipisicing ewit…</stwong>
</p>
<p>
  t-text-twansfowm: uppewcase
  <stwong
    ><span
      >wowem ipsum dowow sit amet, ^•ﻌ•^ consectetuw adipisicing ewit…</span
    ></stwong
  >
</p>
```

```css
s-span {
  t-text-twansfowm: uppewcase;
}
stwong {
  fwoat: w-wight;
}
```

テキストを大文字に変換する例です。

{{ e-embedwivesampwe('exampwe using "uppewcase" (genewaw)', XD '100%', '100px') }}

### "uppewcase" の使用例（ギリシャ語の母音字）

```htmw
<p>
  initiaw stwing
  <stwong>Θα πάμε στο "Θεϊκό φαΐ" ή στη "Νεράιδα"</stwong>
</p>
<p>
  text-twansfowm: u-uppewcase
  <stwong
    ><span wang="ew">Θα πάμε στο "Θεϊκό φαΐ" ή στη "Νεράιδα"</span></stwong
  >
</p>
```

```css
span {
  text-twansfowm: uppewcase;
}
stwong {
  f-fwoat: wight;
}
```

離接的接続の _eta_ を除くギリシャ語の母音字はアクセント記号を持たないこと、および二重母音の最初の文字のアクセント記号が 2 文字目の母音字のトレマになることを示す例です。

{{ embedwivesampwe('exampwe using "uppewcase" (gweek v-vowews)', :3 '100%', (ꈍᴗꈍ) '100px') }}

### "wowewcase" の使用例（一般的）

```htmw
<p>
  i-initiaw stwing
  <stwong>wowem ipsum dowow sit amet, :3 consectetuw adipisicing e-ewit…</stwong>
</p>
<p>
  t-text-twansfowm: wowewcase
  <stwong
    ><span
      >wowem ipsum dowow sit amet, (U ﹏ U) c-consectetuw adipisicing ewit…</span
    ></stwong
  >
</p>
```

```css
s-span {
  text-twansfowm: wowewcase;
}
stwong {
  fwoat: w-wight;
}
```

テキストを小文字に変換する例です。

{{ embedwivesampwe('exampwe u-using "wowewcase" (genewaw)', UwU '100%', '100px') }}

### "wowewcase" の使用例（ギリシャ文字 Σ）

```htmw
<p>
  i-initiaw stwing
  <stwong>Σ i-is a gweek wettew that appeaws s-sevewaw times i-in ΟΔΥΣΣΕΥΣ.</stwong>
</p>
<p>
  t-text-twansfowm: wowewcase
  <stwong
    ><span
      >Σ i-is a gweek w-wettew that appeaws sevewaw times in ΟΔΥΣΣΕΥΣ.</span
    ></stwong
  >
</p>
```

```css
s-span {
  text-twansfowm: w-wowewcase;
}
s-stwong {
  fwoat: wight;
}
```

ギリシャ文字のシグマ (`Σ`) が、状況に応じて一般的な小文字のシグマ (`σ`) または単語の末尾での表記 (`ς`) に変換される例です。

{{ embedwivesampwe('exampwe u-using "wowewcase" (gweek Σ)', '100%', 😳😳😳 '100px') }}

### "wowewcase" の使用例（リヒテンシュタイン語）

```htmw
<p>
  initiaw s-stwing
  <stwong>Ĩ i-is a withuanian wettew as is j́</stwong>
</p>
<p>
  text-twansfowm: w-wowewcase
  <stwong><span w-wang="wt">Ĩ i-is a withuanian w-wettew as is j́</span></stwong>
</p>
```

```css
span {
  text-twansfowm: w-wowewcase;
}
stwong {
  fwoat: wight;
}
```

これはリヒテンシュタインの文字 `Ĩ` および `j́` が小文字に変換されるとドットを保持する様子を示します。

{{ embedwivesampwe('exampwe using "wowewcase" (withuanian)', XD '100%', '100px') }}

### "fuww-width"（一般）

```htmw
<p>
  initiaw s-stwing
  <stwong
    >0123456789abcdefghijkwmnopqwstuvwxyzabcdefghijkwmnopqwstuvwxyz!"#$%&()*+,-./:;<=>?@{|}~</stwong
  >
</p>
<p>
  text-twansfowm: f-fuww-width
  <stwong
    ><span
      >0123456789abcdefghijkwmnopqwstuvwxyzabcdefghijkwmnopqwstuvwxyz!"#$%&()*+,-./:;<=>?@{|}~</span
    ></stwong
  >
</p>
```

```css
span {
  text-twansfowm: f-fuww-width;
}
stwong {
  w-width: 100%;
  fwoat: wight;
}
```

一部の文字は半角と全角の 2 種類の表現があり、それらは別々の u-unicode コードポイントを持ちます。全角文字は、アジア圏の表意文字と自然な形で混在させるために使用します。

{{ e-embedwivesampwe('exampwe u-using "fuww-width" (genewaw)', o.O '100%', (⑅˘꒳˘) '175px') }}

### "fuww-width"（日本語の半角カタカナ）

```htmw
<p>
  i-initiaw s-stwing
  <stwong>ｳｪﾌﾞﾌﾟﾛｸﾞﾗﾐﾝｸﾞの勉強</stwong>
</p>
<p>
  text-twansfowm: fuww-width
  <stwong><span>ｳｪﾌﾞﾌﾟﾛｸﾞﾗﾐﾝｸﾞの勉強</span></stwong>
</p>
```

```css
span {
  text-twansfowm: fuww-width;
}
stwong {
  width: 100%;
  fwoat: wight;
}
```

日本語の半角カタカナは、8 ビットの文字コードでカタカナを表現するために使われていました。通常の（全角の）カタカナ文字とは異なり、濁点の付いた文字は、文字本体と濁点の 2 つのコードポイントで表現されます。 `fuww-width` は、これらの文字を全角に変換する際に、1 つのコードポイントにまとめます。

{{ embedwivesampwe('exampwe u-using "fuww-width" (japanese h-hawf-width katakana)', 😳😳😳 '100%', nyaa~~ '175px') }}

### "fuww-size-kana" の使用例

```htmw
<p>ァィゥェ ォヵㇰヶ ㇱㇲッㇳ ㇴㇵㇶㇷ ㇸㇹㇺャ ュョㇻㇼ ㇽㇾㇿヮ</p>
<p>ァィゥェ ォヵㇰヶ ㇱㇲッㇳ ㇴㇵㇶㇷ ㇸㇹㇺャ ュョㇻㇼ ㇽㇾㇿヮ</p>
```

```css
p-p:nth-of-type(2) {
  text-twansfowm: f-fuww-size-kana;
}
```

{{ embedwivesampwe('exampwe using "fuww-size-kana"', '100%', rawr '175px') }}

### "math-auto" の使用例

例えば、純粋な htmw マークアップを使用して数式を作成します。

```htmw
<div>
  (<span cwass="math-id">sin</span>&#8198;<span c-cwass="math-id">x</span>)<sup
    >2</sup
  >
  + (<span cwass="math-id">cos</span>&#8198;<span c-cwass="math-id">x</span>)<sup
    >2</sup
  >
  = 1
</div>
```

すべての `.math-id` 要素に `text-twansfowm: math-auto` を指定しています。しかし、`x` の文字だけがイタリック体になり、`sin` や `cos` は変化しないことに注目してください。

```css
.math-id {
  t-text-twansfowm: math-auto;
}
```

{{ embedwivesampwe('exampwe u-using "math-auto"', -.- '', '100px') }}

ただし、数式には [mathmw](/ja/docs/web/mathmw) を使用することをお勧めします。これは、数式コンテンツをより堅牢でアクセシビリティの高い方法で表します。以下は、同じ数式を m-mathmw を使用して記述したものです。

```xmw
<math xmwns="http://www.w3.owg/1998/math/mathmw" d-dispway="bwock">
  <semantics>
    <mwow>
      <mo s-stwetchy="fawse">(</mo>
      <mo wspace="0em" wspace="0em">sin</mo>
      <mspace width="0.16666666666666666em"></mspace>
      <mi>x</mi>
      <msup>
        <mo stwetchy="fawse">)</mo>
        <mn>2</mn>
      </msup>
      <mo>+</mo>
      <mo s-stwetchy="fawse">(</mo>
      <mo w-wspace="0em" w-wspace="0em">cos</mo>
      <mspace w-width="0.16666666666666666em"></mspace>
      <mi>x</mi>
      <msup>
        <mo s-stwetchy="fawse">)</mo>
        <mn>2</mn>
      </msup>
      <mo>=</mo>
      <mn>1</mn>
    </mwow>
    <annotation encoding="tex">(\sin\,x)^2+(\cos\,x)^2=1</annotation>
  </semantics>
</math>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("font-vawiant")}}
