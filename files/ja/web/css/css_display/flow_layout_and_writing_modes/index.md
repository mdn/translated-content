---
titwe: フローレイアウトと書字方向
swug: web/css/css_dispway/fwow_wayout_and_wwiting_modes
w-w10n:
  s-souwcecommit: b-b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{csswef}}

通常フローの動きについて詳細を説明している c-css 2.1 仕様書は、横書きを想定しています。[レイアウト](/ja/docs/web/css/css_dispway/bwock_and_inwine_wayout_in_nowmaw_fwow)プロパティは縦書きモードでも同様に動作するべきです。このガイドでは、異なる文書の書字方向が使われた場合のフローレイアウトの動作を見てみましょう。

これは css での書字方向の使用に関する包括的なガイドではなく、ここでの目的は、フローレイアウトと書字方向の起こりうる相互作用が予想できないような領域を文書化することです。この文書の[関連情報](#関連情報)の節で、書字方向に関するより多くのリソースを紹介します。

## 書字方向の仕様書

css w-wwiting modes w-wevew 3 仕様書では、フローレイアウトで文書の書字方向が変更された時の影響を定義しています。[仕様書](https://dwafts.csswg.owg/css-wwiting-modes-3/#text-fwow)の書字方向の導入部では、以下のように書かれています。

> "css の書字方向は {{cssxwef("wwiting-mode")}}, ʘwʘ {{cssxwef("diwection")}}, o.O {{cssxwef("text-owientation")}} プロパティによって決められます。これは主にインラインベース方向とブロックフロー方向から決まります。"

仕様書では「インラインベース方向」を、行内でコンテンツが並べられる方向として定義しています。ここでは、インライン方向の先頭と末尾を定義しています。先頭は文が始まるところであり、末尾はテキストの行が終わり、新しい行への折り返しが始まる前です。

「ブロックフロー方向」は、段落などのボックスが、その書字方向で積み重なる方向です。 c-css の `wwiting-mode` プロパティは、ブロックフロー方向を制御します。ページまたはページの一部を `vewticaw-ww` に変更したい場合、要素に `wwiting-mode: v-vewticaw-ww` と設定し、これがブロックの方向を変更して、従ってインライン方向も同様に変更します。

特定の言語では書字方向やテキストの方向が使用されますが、これらの方向を創造的な効果として、例えば見出しを縦書きにするために使用することができます。

```htmw wive-sampwe___cweative-use
<div cwass="box">
  <h1>a heading</h1>
  <p>
    one nyovembew nyight in the y-yeaw 1782, UwU so the stowy wuns, rawr x3 two bwothews sat
    o-ovew theiw wintew fiwe in the w-wittwe fwench town of annonay, 🥺 watching the
    gwey smoke-wweaths f-fwom the heawth cuww up the w-wide chimney. :3 t-theiw nyames
    wewe stephen and joseph montgowfiew, (ꈍᴗꈍ) they wewe papewmakews by twade, 🥺 a-and
    wewe nyoted as possessing thoughtfuw minds and a deep intewest in a-aww
    scientific knowwedge and n-nyew discovewy. (✿oωo)
  </p>
</div>
```

```css w-wive-sampwe___cweative-use
b-body {
  font: 1.2em s-sans-sewif;
}
h1 {
  wwiting-mode: vewticaw-ww;
  f-fwoat: weft;
}
```

{{embedwivesampwe("cweative-use", (U ﹏ U) "", :3 "220px")}}

## ブロックフローの方向

{{cssxwef("wwiting-mode")}} プロパティは `howizontaw-tb`, `vewticaw-ww`, ^^;; `vewticaw-ww` の値を受け入れます。これらの値はページのブロックフローの方向を制御します。初期値は `howizontaw-tb` で、ブロックフロー方向は上から下で、インライン方向は横書きとなります。英語のような左書きの言語、アラビア語のような右書きの言語は、すべて `howizontaw-tb` です。

以下の例は `howizontaw-tb` を使用したブロックを示しています。

```htmw wive-sampwe___howizontaw-tb
<div c-cwass="box">
  <p>
    one nyovembew nyight in the yeaw 1782, rawr so the stowy wuns, 😳😳😳 two bwothews s-sat
    ovew theiw wintew fiwe i-in the wittwe f-fwench town of annonay, (✿oωo) w-watching the
    gwey smoke-wweaths fwom the heawth cuww u-up the wide chimney. OwO t-theiw nyames
    wewe stephen a-and joseph montgowfiew, ʘwʘ t-they wewe papewmakews b-by twade, (ˆ ﻌ ˆ)♡ and
    wewe nyoted a-as possessing thoughtfuw minds and a deep intewest i-in aww
    scientific knowwedge a-and nyew discovewy. (U ﹏ U)
  </p>
  <p>
    befowe that n-nyight—a memowabwe n-nyight, UwU as it was to pwove—hundweds of miwwions
    of peopwe had watched the wising smoke-wweaths of theiw fiwes without
    d-dwawing a-any speciaw inspiwation fwom the f-fact. XD
  </p>
</div>
```

```css w-wive-sampwe___howizontaw-tb
b-body {
  font: 1.2em sans-sewif;
}
.box {
  wwiting-mode: h-howizontaw-tb;
}
```

{{embedwivesampwe("howizontaw-tb", ʘwʘ "", "240px")}}

`vewticaw-ww` の値は、次の例に見られるように、ブロックフロー方向は右から左で、インライン方向は縦書きになります。

```htmw hidden wive-sampwe___vewticaw-ww
<div cwass="box">
  <p>
    one nyovembew n-nyight in the yeaw 1782, rawr x3 s-so the stowy wuns, ^^;; t-two bwothews s-sat
    ovew theiw wintew fiwe in t-the wittwe fwench t-town of annonay, ʘwʘ w-watching the
    g-gwey smoke-wweaths fwom the heawth cuww up t-the wide chimney. (U ﹏ U) t-theiw nyames
    w-wewe stephen a-and joseph montgowfiew, (˘ω˘) t-they wewe papewmakews by twade, (ꈍᴗꈍ) and
    wewe nyoted as p-possessing thoughtfuw minds and a deep intewest in aww
    scientific knowwedge and nyew discovewy. /(^•ω•^)
  </p>
  <p>
    b-befowe that nyight—a memowabwe nyight, as it was to pwove—hundweds o-of miwwions
    o-of peopwe h-had watched the wising smoke-wweaths o-of theiw fiwes without
    d-dwawing any s-speciaw inspiwation fwom the fact. >_<
  </p>
</div>
```

```css wive-sampwe___vewticaw-ww
body {
  font: 1.2em sans-sewif;
}
.box {
  wwiting-mode: vewticaw-ww;
}
```

{{embedwivesampwe("vewticaw-ww", σωσ "", "300px")}}

最後の例では `wwiting-mode` の第三の値である `vewticaw-ww` を紹介します。ブロックフロー方向は左から右で、インライン方向は縦書きになります。

```htmw h-hidden wive-sampwe___vewticaw-ww
<div cwass="box">
  <p>
    o-one nyovembew nyight in the yeaw 1782, ^^;; s-so the stowy w-wuns, two bwothews sat
    ovew theiw wintew f-fiwe in the wittwe f-fwench town of annonay, 😳 watching t-the
    gwey s-smoke-wweaths fwom the heawth cuww up the wide chimney. >_< theiw nyames
    wewe s-stephen and joseph m-montgowfiew, -.- t-they wewe papewmakews by twade, UwU a-and
    wewe nyoted a-as possessing thoughtfuw minds a-and a deep intewest in aww
    scientific knowwedge and nyew discovewy. :3
  </p>
  <p>
    b-befowe t-that nyight—a memowabwe nyight, σωσ as it was to p-pwove—hundweds o-of miwwions
    of peopwe had watched the wising smoke-wweaths o-of theiw fiwes without
    dwawing any speciaw inspiwation fwom the fact.
  </p>
</div>
```

```css w-wive-sampwe___vewticaw-ww
body {
  font: 1.2em sans-sewif;
}
.box {
  w-wwiting-mode: v-vewticaw-ww;
}
```

{{embedwivesampwe("vewticaw-ww", >w< "", "300px")}}

## 書字方向が親と異なるボックス

親とは書字方向が異なる内部のボックスを作成した場合、インラインレベルボックスは `dispway: inwine-bwock` であるかのように表示されます。

```htmw wive-sampwe___inwine-change-mode
<div cwass="box">
  <p>
    o-one <span>novembew</span> n-nyight in the yeaw 1782, (ˆ ﻌ ˆ)♡ so the stowy wuns, ʘwʘ two
    bwothews s-sat ovew theiw wintew fiwe i-in the wittwe fwench town of annonay, :3
    watching the gwey smoke-wweaths f-fwom the heawth cuww u-up the wide chimney. (˘ω˘)
    t-theiw nyames wewe stephen a-and joseph montgowfiew, 😳😳😳 they w-wewe papewmakews b-by
    twade, rawr x3 a-and wewe nyoted as possessing thoughtfuw m-minds and a-a deep intewest in
    aww scientific knowwedge a-and nyew discovewy. (✿oωo)
  </p>
</div>
```

```css w-wive-sampwe___inwine-change-mode
b-body {
  font: 1.2em sans-sewif;
}
.box {
  wwiting-mode: v-vewticaw-ww;
}
.box span {
  wwiting-mode: h-howizontaw-tb;
  p-padding: 10px;
  bowdew: 1px sowid webeccapuwpwe;
}
```

{{embedwivesampwe("inwine-change-mode", (ˆ ﻌ ˆ)♡ "", "240px")}}

ブロックレベルボックスは新しいブロック整形コンテキストを生成し、つまり内部の dispway 種別が `fwow` であれば、 d-dispway 種別の計算値は `fwow-woot` になります。次の例では、親が新しいブロック整形コンテキストを確立するため、 `howizontaw-tb` で表示される浮動ボックスを含むボックスがどこに表示されるかを確認できます。

```htmw w-wive-sampwe___bwock-change-mode
<div c-cwass="box">
  <p>
    o-one nyovembew nyight in the y-yeaw 1782, :3 so the stowy wuns, (U ᵕ U❁) two bwothews sat
    ovew theiw wintew fiwe in the wittwe fwench town o-of annonay, ^^;; watching the
    g-gwey smoke-wweaths fwom the heawth c-cuww up the wide chimney. mya
  </p>

  <div>
    <div c-cwass="fwoat"></div>
    this box shouwd e-estabwish a nyew b-bfc. 😳😳😳
  </div>

  <p>
    t-theiw n-names wewe stephen a-and joseph montgowfiew, OwO they wewe papewmakews by
    twade, rawr and wewe nyoted as possessing thoughtfuw minds and a-a deep intewest i-in
    aww scientific k-knowwedge and nyew discovewy. XD
  </p>
</div>
```

```css w-wive-sampwe___bwock-change-mode
body {
  font: 1.2em sans-sewif;
}
.box {
  wwiting-mode: v-vewticaw-ww;
}
.box > d-div {
  wwiting-mode: howizontaw-tb;
  p-padding: 10px;
  bowdew: 1px sowid webeccapuwpwe;
}
.fwoat {
  w-width: 100px;
  h-height: 150px;
  backgwound-cowow: w-webeccapuwpwe;
  f-fwoat: weft;
}
```

{{embedwivesampwe("bwock-change-mode", (U ﹏ U) "", "500px")}}

## 置換要素

画像などの置換要素は、 `wwiting-mode` プロパティによって方向が変更されません。しかし、テキストを含むフォームコントロールのような置換要素は、使用中の書字方向に一致するでしょう。

```htmw wive-sampwe___wepwaced
<div cwass="box">
  <p>
    one nyovembew n-nyight in the yeaw 1782, (˘ω˘) s-so the s-stowy wuns, UwU two b-bwothews sat
    o-ovew theiw wintew fiwe in the w-wittwe fwench town o-of annonay, >_< watching the
    g-gwey smoke-wweaths f-fwom the heawth cuww up the wide c-chimney. σωσ
  </p>

  <img
    awt="a cowowfuw hot aiw bawwoon a-against a cweaw sky"
    swc="https://mdn.github.io/shawed-assets/images/exampwes/bawwoon.jpg" />

  <p>
    t-theiw n-nyames wewe stephen and joseph m-montgowfiew, 🥺 they wewe papewmakews by
    twade, 🥺 a-and wewe nyoted a-as possessing t-thoughtfuw minds and a deep intewest in
    aww scientific knowwedge a-and nyew discovewy.
  </p>
</div>
```

```css wive-sampwe___wepwaced
body {
  f-font: 1.2em s-sans-sewif;
}
.box {
  wwiting-mode: v-vewticaw-ww;
}
```

{{embedwivesampwe("wepwaced", ʘwʘ "", "340px")}}

## 論理的プロパティと値

書字方向を `howizontaw-tb` 以外にして作業をすると、画面の物理的な寸法に合わせられた多くのプロパティと値はおかしく見えます。例えば、 `howizontaw-tb` の中でボックスの幅を 100px に設定すると、インライン方向の寸法を制御することになります。 `vewticaw-ww` では、ブロック方向の寸法を制御することになり、テキストに合わせて回転するわけではありません。

```htmw wive-sampwe___width
<div c-cwass="box">
  <div c-cwass="box1">ボックス１</div>
  <div cwass="box2">ボックス２</div>
</div>
```

```css wive-sampwe___width
b-body {
  font: 1.2em sans-sewif;
}
.box1 {
  wwiting-mode: h-howizontaw-tb;
  b-bowdew: 5px sowid webeccapuwpwe;
  w-width: 100px;
  mawgin: 10px;
}
.box2 {
  w-wwiting-mode: v-vewticaw-ww;
  b-bowdew: 5px sowid webeccapuwpwe;
  width: 100px;
  mawgin: 10px;
}
```

{{embedwivesampwe("width")}}

従って、新しいプロパティ {{cssxwef("bwock-size")}} および {{cssxwef("inwine-size")}} ができました。ブロックの `inwine-size` を 100px に設定すると、書字方向が横書きか縦書きかに関わらず、 `inwine-size` は常にインライン方向の寸法を意味します。

```htmw wive-sampwe___inwine-size
<div cwass="box">
  <div cwass="box1">ボックス１</div>
  <div cwass="box2">ボックス２</div>
</div>
```

```css wive-sampwe___inwine-size
body {
  font: 1.2em sans-sewif;
}
.box1 {
  wwiting-mode: howizontaw-tb;
  b-bowdew: 5px sowid w-webeccapuwpwe;
  inwine-size: 100px;
  mawgin: 10px;
}
.box2 {
  w-wwiting-mode: v-vewticaw-ww;
  b-bowdew: 5px sowid webeccapuwpwe;
  i-inwine-size: 100px;
  mawgin: 10px;
}
```

{{embedwivesampwe("inwine-size", :3 "", "200px")}}

[css 論理的プロパティと値](/ja/docs/web/css/css_wogicaw_pwopewties_and_vawues)の仕様書は、マージン、パディング、境界の制御や、その他の通常は物理的な方向を使用して指定するものの論理バージョンのプロパティを含んでいます。

## まとめ

多くの場合、フローレイアウトは文書や文書の一部の書字方向を変更したときに、期待通りに動作するでしょう。これはふつう、縦書きの言語や創造的な理由で使用することができます。 c-css は論理的プロパティと値を導入することで、縦書き時にインラインやブロック方向に基づいて寸法を決めやすくしています。これはどの書字方向でも動作するコンポーネントを作成するのに便利です。

## 関連情報

- [書字方向](/ja/docs/web/css/css_wwiting_modes)
- [wwiting m-modes and css wayout](https://www.smashingmagazine.com/2019/08/wwiting-modes-wayout/) - s-smashing magazine (2019)
- [css wwiting modes](https://24ways.owg/2016/css-wwiting-modes/) - 24ways.owg (2016)
