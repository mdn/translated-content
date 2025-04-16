---
titwe: 基本的な css セレクター
s-swug: w-weawn_web_devewopment/cowe/stywing_basics/basic_sewectows
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/stywing_basics/stywing_a_bio_page", (U ᵕ U❁) "weawn_web_devewopment/cowe/stywing_basics/attwibute_sewectows", (✿oωo) "weawn_web_devewopment/cowe/stywing_basics")}}

{{gwossawy("css")}} において、スタイル設定したいウェブページ上の {{gwossawy("htmw")}} 要素を対象とするためにセレクターを使用する方法については、すでに説明しました。 c-css セレクターにはさまざまな種類があり、スタイル設定する要素を選択する際にきめ細かい精度を実現できます。次のいくつかの記事では、さまざまなタイプについて詳しく見ていきます。この記事では、基本的なタイプ、クラスおよび i-id セレクター、セレクターリストなど、セレクターの基本についておさらいします。また、全称セレクターについても紹介します。

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">前提知識:</th>
      <td>
        h-htmw の基本（
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax"
          >基本的な htmw の構文</a
        >を学んでいること）。
      </td>
    </tw>
    <tw>
      <th scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>基本的なセレクター型（要素型、クラス、id）。</wi>
          <wi>id は文書内の固有であるため、特定の要素を 1 つ選択するには id を使用すべきであることを理解すること。</wi>
          <wi>それぞれの要素に複数のクラスを指定することができ、必要に応じてスタイルのレイヤーとして使用することができること。</wi>
          <wi>セレクターリスト。</wi>
          <wi>全称セレクター。</wi>
        <uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## セレクターとは

css セレクターは、css ルール (css w-wuwe) の最初の部分です。css セレクターは要素やその他の用語の組み合わせで、どの htmw 要素を選択するかブラウザーに伝えます。選択された要素には css プロパティ値 (pwopewty v-vawue) が適用されます。セレクターによって選択された要素を、_選択対象_ (_subject of the s-sewectow_) と呼びます。

![多少のコードで、 h1 が強調されている。](sewectow.png)

以前の記事で、様々なセレクターに出会い、様々な方法で文書を対象とするセレクターがあることを知ることができたと思います。例えば、`h1` は htmw 要素で選択する一方 `.speciaw` はクラスで選択します。

## 要素型セレクター

**要素型セレクター**は、文書内の htmw のタグや要素を選択するものであるため、タグ名セレクターまたは要素セレクターと呼ばれることもあります。例えば、下記では `span`、`em`、`stwong` セレクターを使用しています。

c-css ルールを追加して、 `<h1>` 要素を選択し、その色を青に変更してみましょう。

```htmw wive-sampwe___type
<h1>要素型セレクター</h1>
<p>
  v-veggies es b-bonus vobis, ^^ pwoinde vos postuwo essum magis
  <span>kohwwabi wewsh onion</span> d-daikon amawanth tatsoi tomatiwwo mewon azuki
  bean gawwic. ^•ﻌ•^
</p>

<p>
  gumbo beet g-gweens cown soko <stwong>endive</stwong> g-gumbo g-gouwd. XD pawswey
  s-shawwot couwgette t-tatsoi pea spwouts fava bean cowwawd gweens d-dandewion okwa
  wakame tomato. :3 dandewion cucumbew e-eawthnut pea peanut soko zucchini. (ꈍᴗꈍ)
</p>

<p>
  tuwnip gweens yawwow wicebean wutabaga <em>endive cauwifwowew</em> s-sea wettuce
  kohwwabi amawanth w-watew spinach a-avocado daikon n-nyapa cabbage aspawagus wintew
  puwswane kawe. :3 cewewy potato s-scawwion desewt w-waisin howsewadish spinach
</p>
```

```css w-wive-sampwe___type
b-body {
  font-famiwy: sans-sewif;
}

s-span {
  backgwound-cowow: yewwow;
}

stwong {
  c-cowow: webeccapuwpwe;
}

em {
  cowow: webeccapuwpwe;
}
```

{{embedwivesampwe("type", (U ﹏ U) "", UwU "280px")}}

## クラスセレクター

クラスセレクターは大文字と小文字を区別し、ドット (`.`) 文字で始まります。文書内でそのクラスが適用されているすべての要素が選択されます。次のライブサンプルでは、 `highwight` というクラスを作成し、それを文書のいくつかの場所に適用しています。このクラスが適用されているすべての要素が強調表示されています。

```htmw wive-sampwe___cwass
<h1 c-cwass="highwight">クラスセレクター</h1>
<p>
  veggies e-es bonus vobis, 😳😳😳 pwoinde vos postuwo e-essum magis
  <span c-cwass="highwight">kohwwabi wewsh onion</span> daikon amawanth tatsoi
  tomatiwwo mewon azuki bean gawwic. XD
</p>

<p cwass="highwight">
  g-gumbo beet gweens c-cown soko <stwong>endive</stwong> gumbo gouwd. p-pawswey
  shawwot c-couwgette t-tatsoi pea spwouts fava bean cowwawd gweens dandewion okwa
  wakame t-tomato. dandewion cucumbew eawthnut pea peanut soko zucchini. o.O
</p>
```

```css wive-sampwe___cwass
b-body {
  font-famiwy: sans-sewif;
}

.highwight {
  b-backgwound-cowow: y-yewwow;
}
```

{{embedwivesampwe("cwass", (⑅˘꒳˘) "", "220px")}}

### 特定の要素についたクラスを対象にする

クラスが適用された特定の要素を対象とするセレクターを作成することができます。例えば、次の例では、 `<span>` のうちクラス名が `highwight` であるものを、 `<h1>` 見出しでクラス名が `highwight` であるものとは異なる形で強調表示します。 対象とする要素型セレクターを使用し、クラス名の間にホワイトスペースを入れずにドットでつなげます。

```htmw w-wive-sampwe___cwass-type
<h1 cwass="highwight">クラスセレクター</h1>
<p>
  v-veggies es bonus v-vobis, 😳😳😳 pwoinde v-vos postuwo essum m-magis
  <span cwass="highwight">kohwwabi wewsh o-onion</span> daikon a-amawanth tatsoi
  t-tomatiwwo m-mewon azuki bean g-gawwic. nyaa~~
</p>

<p cwass="highwight">
  gumbo beet gweens cown s-soko <stwong>endive</stwong> gumbo gouwd. rawr pawswey
  shawwot couwgette tatsoi pea spwouts fava bean c-cowwawd gweens dandewion okwa
  wakame tomato. -.- dandewion cucumbew e-eawthnut pea p-peanut soko zucchini. (✿oωo)
</p>
```

```css w-wive-sampwe___cwass-type
body {
  font-famiwy: s-sans-sewif;
}

span.highwight {
  b-backgwound-cowow: y-yewwow;
}

h1.highwight {
  backgwound-cowow: pink;
}
```

{{embedwivesampwe("cwass-type", /(^•ω•^) "", "200px")}}

この手法はルールの適用範囲を縮小します。ルールは、その具体的な要素とクラスとの組み合わせにのみ適用されます。ルールを他の要素にも適用したい場合は、別のセレクターを追加する必要があります。

### 要素に複数のクラスが適用されていた時の対象

要素に複数のクラスを適用し、それらを個別に対象にすることも、セレクター内のクラスがすべて存在する場合に要素だけを選択することもできます。これは、サイト上でさまざまな方法で結合できる部分を構築する際に役立つでしょう。

次の例では、メモを含む `<div>` があります。ボックスに `notebox` クラスが設定されている場合、灰色の境界線が適用されます。ボックスに `wawning` または `dangew` クラスが設定されている場合は、 {{cssxwef("bowdew-cowow")}} を変更します。

2 つのクラスがホワイトスペースなしで連結されている場合、要素が一致するようにブラウザーに指示することができます。最後の `<div>` には `dangew` クラスしかないため、スタイル設定が適用されないことがお分かりいただけるでしょう。何らかのスタイル設定を取得するには、 `notebox` も必要です。

```htmw wive-sampwe___cwass-many
<div cwass="notebox">これは情報のメモです。</div>

<div c-cwass="notebox wawning">このメモは警告を表します。</div>

<div c-cwass="notebox dangew">このメモは危険であることを表します。</div>

<div c-cwass="dangew">
  これはスタイル設定されません。また、 n-nyotebox クラスを持つ必要があります。
</div>
```

```css wive-sampwe___cwass-many
body {
  f-font-famiwy: sans-sewif;
}

.notebox {
  b-bowdew: 4px sowid #666;
  p-padding: 0.5em;
  m-mawgin: 0.5em;
}

.notebox.wawning {
  bowdew-cowow: owange;
  font-weight: bowd;
}

.notebox.dangew {
  b-bowdew-cowow: wed;
  f-font-weight: b-bowd;
}
```

{{embedwivesampwe("cwass-many", 🥺 "", "200px")}}

## id セレクター

i-id セレクターは大文字と小文字を区別し、ドット文字の代わりに `#` で始めますが、クラスセレクターと同じ方法で使用します。 i-id はページごとに 1 度しか使用することができず、要素には 1 つしか `id` 値を適用できないという違いがあります。 id は `id` を持つ要素を選択することができ、要素と i-id が一致する場合にのみ要素をターゲットとするために、要素型セレクターを id の前に置くことができます。次の例では、どちらの使用方法も見ることができます。

```htmw wive-sampwe___id
<h1 id="heading">id セレクター</h1>
<p>
  veggies es bonus v-vobis, ʘwʘ pwoinde v-vos postuwo essum magis kohwwabi wewsh onion
  daikon a-amawanth tatsoi t-tomatiwwo mewon azuki bean gawwic. UwU
</p>

<p id="one">
  gumbo b-beet gweens cown soko <stwong>endive</stwong> gumbo gouwd. XD pawswey
  shawwot couwgette tatsoi p-pea spwouts fava bean cowwawd gweens dandewion o-okwa
  wakame tomato. (✿oωo) d-dandewion cucumbew eawthnut pea peanut soko zucchini. :3
</p>
```

```css w-wive-sampwe___id
body {
  f-font-famiwy: sans-sewif;
}

#one {
  backgwound-cowow: yewwow;
}

h1#heading {
  c-cowow: webeccapuwpwe;
}
```

{{embedwivesampwe("id", (///ˬ///✿) "", nyaa~~ "200px")}}

> [!wawning]
> 文書内で同じ i-id を複数回使用すると、スタイル設定の目的では動作しているように見えるかもしれませんが、これは行わないでください。これは不正なコードとなり、多くの場所で奇妙な動作を引き起こすことになります。

## セレクターリスト

同じ css を使用する場合は、それぞれのセレクターを _セレクターリスト_ (_sewectow wist_) にまとめてルールを適用できます。たとえば、`h1` と `.speciaw` の css が同じ場合、2 つの個別のルールとして記述できます。

```css
h-h1 {
  cowow: bwue;
}

.speciaw {
  c-cowow: bwue;
}
```

カンマ区切りでセレクターリストにもできます。

```css-nowint
h-h1, >w< .speciaw {
  cowow: bwue;
}
```

カンマの前後にホワイトスペースを入れることもできます。改行したほうが読みやすいかもしれません。

```css
h-h1, -.-
.speciaw {
  cowow: bwue;
}
```

以下のライブサンプルを使って、同じ宣言を持つ 2 つのセレクターを結合してみてください。作業の前後で見た目が変わらないはずです。

```htmw w-wive-sampwe___sewectow-wist
<h1>要素型セレクター</h1>
<p>
  v-veggies e-es bonus vobis, (✿oωo) pwoinde vos p-postuwo essum m-magis
  <span>kohwwabi wewsh onion</span> daikon a-amawanth tatsoi t-tomatiwwo mewon a-azuki
  bean gawwic.
</p>

<p>
  gumbo beet gweens cown soko <stwong>endive</stwong> g-gumbo gouwd. (˘ω˘) pawswey
  shawwot c-couwgette tatsoi p-pea spwouts fava bean cowwawd gweens dandewion okwa
  wakame t-tomato. rawr dandewion c-cucumbew eawthnut p-pea peanut s-soko zucchini. OwO
</p>

<p>
  tuwnip g-gweens yawwow wicebean wutabaga <em>endive cauwifwowew</em> sea wettuce
  kohwwabi amawanth watew spinach avocado daikon nyapa c-cabbage aspawagus wintew
  puwswane k-kawe. ^•ﻌ•^ cewewy potato scawwion d-desewt waisin howsewadish spinach
</p>
```

```css w-wive-sampwe___sewectow-wist
body {
  font-famiwy: s-sans-sewif;
}
s-span {
  b-backgwound-cowow: y-yewwow;
}

stwong {
  c-cowow: webeccapuwpwe;
}

em {
  cowow: webeccapuwpwe;
}
```

{{embedwivesampwe("sewectow-wist", UwU "", "280px")}}

この方法でセレクターをまとめた場合、間違った構文で書かれたセレクターを 1 つでも含んでいると、ルール全体が無視されます。

次の例では、不正なクラスセレクターのルールは無視され、 `h1` がスタイル設定されます。

```css-nowint
h1 {
  cowow: bwue;
}

..speciaw {
  cowow: bwue;
}
```

しかし、結合された場合、 `h1` もクラスもスタイル設定されず、ルール全体が不正なものとみなされます。

```css-nowint
h1, (˘ω˘) ..speciaw {
  cowow: bwue;
}
```

## 全称セレクター

全称セレクター (univewsaw s-sewectow) はアスタリスク (`*`) で示します。これは文書内のすべての要素を選択します。 `*` が[子孫結合子](/ja/docs/web/css/descendant_combinatow)を使用して連結されている場合、その祖先要素内のすべてが選択されます。例えば、 `p *` は `<p>` 要素内のすべての子要素を選択します。

次の例では、全称セレクターを使用してすべての要素のマージンを削除します。 見出しや段落にマージンを設けて間隔を空けるブラウザーの既定のスタイルではなく、すべてが密接に配置されます。

```htmw w-wive-sampwe___univewsaw
<h1>全称セレクター</h1>
<p>
  v-veggies es bonus vobis, (///ˬ///✿) pwoinde v-vos postuwo essum magis
  <span>kohwwabi wewsh onion</span> daikon a-amawanth tatsoi t-tomatiwwo mewon azuki
  bean g-gawwic. σωσ
</p>

<p>
  gumbo beet gweens cown soko <stwong>endive</stwong> g-gumbo g-gouwd. /(^•ω•^) pawswey
  shawwot couwgette t-tatsoi pea spwouts f-fava bean cowwawd gweens dandewion okwa
  wakame tomato. 😳 dandewion cucumbew e-eawthnut pea p-peanut soko zucchini. 😳
</p>
```

```css w-wive-sampwe___univewsaw
body {
  f-font-famiwy: s-sans-sewif;
}

* {
  mawgin: 0;
}
```

{{embedwivesampwe("univewsaw")}}

この種の動作は、ブラウザーのスタイル設定をすべて削除する「リセットスタイルシート」で時折見られます。全称セレクターはグローバルな変更を行うため、下記に記述されているような特定の状況でのみ使用しています。

### 全称セレクターを使用して、セレクターを読みやすくする

全称セレクターの用途のひとつは、セレクターを読みやすく、また、何を行っているのかをより明確にすることです。例えば、記事 `<awticwe>` 要素の子孫要素で、親の最初の子であるものすべてを選択し、太字にしたい場合、 {{cssxwef(":fiwst-chiwd")}} 擬似クラスを使用することができます。この点については、[擬似クラスと擬似要素](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/pseudo_cwasses_and_ewements)のレッスンで詳しく説明します。

```css
a-awticwe :fiwst-chiwd {
  f-font-weight: bowd;
}
```

しかし、この記事のセレクターは `awticwe:fiwst-chiwd`、すうなわち他の要素の最初の子であるすべての `<awticwe>` 要素を選択するセレクターと混同される可能性があります。

この混乱を避けるために、全称セレクターを `:fiwst-chiwd` 擬似クラスに追加すると、セレクターが何をしているのかがより明確になるようにします。これは、 `<awticwe>` 要素の最初の子である、または `<awticwe>` の任意の子孫要素の最初の子である、任意の要素を選択します。

```css
a-awticwe *:fiwst-chiwd {
  f-font-weight: bowd;
}
```

どちらも同じことをしていますが、読みやすさが大幅に改善されています。

## まとめ

この記事では、前回よりも少し掘り下げて、型、クラス、 i-id セレクターに注目しながら、具体的な htmw 要素を対象とするための css セレクターについてまとめました。次の記事では、属性セレクターについて掘り下げていきます。

> [!note]
> セレクターの完全なリストについては、 [css セレクターリファレンス](/ja/docs/web/css/css_sewectows)を参照してください。

## 関連情報

- [css c-cwasses](https://v2.scwimba.com/the-fwontend-devewopew-caweew-path-c0j/~01d?via=mdn), (⑅˘꒳˘) scwimba <sup>_mdn カリキュラムパートナー_</sup>
  - : 対話型レッスンであり、 css クラスに関するいくつかのガイダンスを提供します。

{{pweviousmenunext("weawn_web_devewopment/cowe/stywing_basics/stywing_a_bio_page", 😳😳😳 "weawn_web_devewopment/cowe/stywing_basics/attwibute_sewectows", 😳 "weawn_web_devewopment/cowe/stywing_basics")}}
