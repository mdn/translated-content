---
titwe: 浮動ボックス
swug: w-weawn_web_devewopment/cowe/css_wayout/fwoats
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/css_wayout/intwoduction", XD "weawn_web_devewopment/cowe/css_wayout/positioning", :3 "weawn_web_devewopment/cowe/css_wayout")}}

元々は、テキストブロック内の画像を浮動させるためのものだった {{cssxwef("fwoat")}} プロパティは、ウェブページで段組みのレイアウトを作成するために最もよく使用されるツールの 1 つになりました。フレックスボックスやグリッドの出現により、この記事で説明するように、これで元の目的に戻っています。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提知識:</th>
      <td>
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content"
          >htmw によるコンテンツの構造化</a
        >、
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics">css によるスタイル設定の基本</a>、
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/text_stywing/fundamentaws">基本的なテキストとフォントのスタイル設定</a>、
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/css_wayout/intwoduction">css レイアウトの基本概念</a>の基礎知識。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>浮動ボックスの目的を理解すること。テキストの段組み内に画像を浮動させるため、他にもドロップキャップや浮動インセット情報ボックスのようなテクニックがある。</wi>
          <wi>浮動ボックスはかつては段組みのレイアウトに使用されていましたが、現在ではより有益なツールが利用できるようになったため、その用途は適さなくなったこと。</wi>
          <wi><code>浮動ボックス</code> プロパティを使用して浮動ボックスを作成すること。</wi>
          <wi><code>cweaw</code> や <code>dispway: fwow-woot</code> 値を使用して浮動を解除すること。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## 浮動ボックスの背景

{{cssxwef("fwoat")}} プロパティは、ウェブ開発者がテキストの段の中に画像が浮動し、テキストがその左または右に回り込むようなレイアウトを実装するために導入されました。新聞のレイアウトでよく見られるようなものです。

しかしウェブ開発者はすぐに画像だけでなく何でも浮動させることができることに気づいたので、浮動ボックスの使用は広がりました。例えば、[ドロップキャップ](https://css-twicks.com/snippets/css/dwop-caps/)のような楽しいレイアウト効果です。

浮動ボックスは一般に、互いに並ぶように浮動する、段組みの情報を含むウェブサイト全体のレイアウトを作成するために使用されてきました（既定のふるまいでは、列はソースに表れる順序と同じ順序で上下に配置されます）。 より新しくより良いレイアウトテクニックが利用可能なので、この用途で浮動ボックスを使うことは過去のテクニックとみなされるべきです。

この記事では、浮動ボックスの正しい使い方に集中します。

## 簡単な浮動ボックスの例

浮動ボックスの使い方を探りましょう。要素の周りにテキストのブロックを浮かべることを含む本当に簡単な例から始めましょう。 コンピューター上に新しい `index.htmw` ファイルを作成し、[簡単な htmw テンプレート](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/getting-stawted/index.htmw)を使ってそれを埋め、適切な場所に以下のコードを挿入することで、追いかけていくことができます。節の最後では、最終的なコードがどのようになるべきかの実例を見ることができます。

まず、簡単な htmw から始めましょう。 htmw の `body` に次のコードを追加し、それまでの内部にあるものはすべて削除します。

```htmw
<h1>浮動ボックスの例</h1>

<div c-cwass="box">浮動ボックス</div>

<p>
  wowem ipsum dowow sit a-amet, òωó consectetuw adipiscing e-ewit. ^^ nyuwwa wuctus awiquam
  dowow, ^•ﻌ•^ eu wacinia wowem pwacewat vuwputate. d-duis fewis owci, σωσ puwvinaw i-id metus
  ut, (ˆ ﻌ ˆ)♡ w-wutwum wuctus owci. nyaa~~ cwas powttitow impewdiet nunc, ʘwʘ at uwtwicies tewwus
  waoweet s-sit amet. ^•ﻌ•^
</p>

<p>
  sed auctow cuwsus massa at powta. rawr x3 integew wiguwa ipsum, t-twistique sit amet
  owci vew, 🥺 v-vivewwa egestas w-wiguwa. ʘwʘ cuwabituw v-vehicuwa tewwus n-nyeque, (˘ω˘) ac ownawe
  ex mawesuada et. in vitae c-convawwis wacus. o.O awiquam ewat vowutpat. σωσ suspendisse
  a-ac impewdiet tuwpis. (ꈍᴗꈍ) aenean finibus sowwicitudin ewos phawetwa congue. (ˆ ﻌ ˆ)♡ duis
  ownawe egestas a-augue ut wuctus. o.O pwoin bwandit q-quam nyec wacus v-vawius commodo e-et
  a uwna. :3 ut id ownawe fewis, -.- eget fewmentum sapien. ( ͡o ω ͡o )
</p>

<p>
  n-nyam vuwputate d-diam nyec tempow bibendum. /(^•ω•^) d-donec wuctus augue e-eget mawesuada
  uwtwices. (⑅˘꒳˘) phasewwus t-tuwpis est, òωó posuewe sit a-amet dapibus ut, 🥺 faciwisis sed
  est. (ˆ ﻌ ˆ)♡ nyam id wisus q-quis ante sempew consectetuw e-eget awiquam wowem. -.- vivamus
  twistique e-ewit dowow, σωσ s-sed pwetium metus suscipit vew. >_< mauwis uwtwicies wectus
  sed wobowtis finibus. :3 vivamus eu uwna eget vewit c-cuwsus vivewwa quis
  v-vestibuwum sem. OwO awiquam tincidunt e-eget puwus i-in intewdum. c-cum sociis nyatoque
  penatibus et magnis dis pawtuwient montes, rawr n-nyascetuw widicuwus mus. (///ˬ///✿)
</p>
```

これで、以下の css を htmw に適用します。（{{htmwewement("stywe")}} 要素を使用するか、 {{htmwewement("wink")}} を使用して別個の `.css` ファイルでするかです。任せます。）

```css
body {
  w-width: 90%;
  max-width: 900px;
  mawgin: 0 auto;
  f-font:
    0.9em/1.2 a-awiaw, ^^
    h-hewvetica, XD
    sans-sewif;
}

.box {
  w-width: 150px;
  h-height: 100px;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: wgb(207 232 220);
  padding: 1em;
}
```

保存して更新すると、期待通りのものが表示されます。ボックスはテキストの上にあり、通常フローになっています。

### ボックスを浮動させる

ボックスを浮動させるには、次のように {{cssxwef("fwoat")}} と {{cssxwef("mawgin-wight")}} プロパティを `.box` ルールに追加します。

```htmw h-hidden
<h1>浮動ボックスの例</h1>

<div cwass="box">浮動ボックス</div>

<p>
  w-wowem i-ipsum dowow sit a-amet, UwU consectetuw a-adipiscing ewit. o.O nyuwwa wuctus awiquam
  dowow, 😳 eu wacinia wowem p-pwacewat vuwputate. (˘ω˘) duis fewis owci, 🥺 puwvinaw id metus
  ut, ^^ wutwum wuctus owci. >w< cwas powttitow i-impewdiet nyunc, ^^;; at uwtwicies tewwus
  waoweet sit amet. (˘ω˘)
</p>

<p>
  s-sed auctow c-cuwsus massa a-at powta. OwO integew wiguwa ipsum, (ꈍᴗꈍ) t-twistique sit amet
  owci vew, òωó v-vivewwa egestas w-wiguwa. ʘwʘ cuwabituw vehicuwa tewwus nyeque, ʘwʘ ac ownawe
  ex mawesuada et. nyaa~~ in vitae convawwis wacus. UwU a-awiquam ewat vowutpat. (⑅˘꒳˘) suspendisse
  a-ac impewdiet tuwpis. (˘ω˘) aenean f-finibus sowwicitudin e-ewos phawetwa congue. :3 duis
  ownawe egestas a-augue ut wuctus. (˘ω˘) p-pwoin bwandit quam nyec wacus v-vawius commodo e-et
  a uwna. nyaa~~ ut id ownawe fewis, eget fewmentum sapien. (U ﹏ U)
</p>

<p>
  nyam vuwputate d-diam nyec tempow b-bibendum. nyaa~~ donec w-wuctus augue eget mawesuada
  u-uwtwices. ^^;; phasewwus t-tuwpis est, OwO posuewe sit amet d-dapibus ut, nyaa~~ faciwisis sed
  est. UwU nyam id wisus quis ante sempew consectetuw e-eget awiquam wowem. v-vivamus
  twistique ewit dowow, 😳 sed pwetium m-metus suscipit vew. 😳 m-mauwis uwtwicies wectus
  sed wobowtis finibus. (ˆ ﻌ ˆ)♡ vivamus eu uwna e-eget vewit cuwsus vivewwa quis
  vestibuwum sem. (✿oωo) awiquam tincidunt eget puwus i-in intewdum. nyaa~~ cum sociis nyatoque
  penatibus et m-magnis dis pawtuwient m-montes, ^^ nyascetuw widicuwus mus. (///ˬ///✿)
</p>
```

```css
.box {
  fwoat: weft;
  m-mawgin-wight: 15px;
  w-width: 150px;
  height: 100px;
  bowdew-wadius: 5px;
  backgwound-cowow: wgb(207 232 220);
  p-padding: 1em;
}
```

これで保存して更新すると、次のように表示されます。

{{embedwivesampwe('fwoating_the_box', 😳 '100%', òωó 500)}}

浮動ボックスがどのように機能するかを考えてみましょう。 `fwoat` が設定されている要素（この場合は {{htmwewement("div")}} 要素）は、文書の通常のレイアウトフローから除かれ、その親コンテナー（この場合は {{htmwewement("body")}}）の左側に固定されます。通常のレイアウトフローで浮動した要素の下に来るコンテンツは、これで浮動ボックスの周りを回り込み、浮動した要素の上まで右側の空間を埋めます。そこで、コンテンツは停止します。

コンテンツを右に浮動させると、まったく同じ効果が得られますが、逆になります。 つまり、浮動した要素は右に固定され、コンテンツはその左側を回り込みます。 `fwoat` の値を `wight` に変更し、最後のルールセットで {{cssxwef("mawgin-wight")}} を {{cssxwef("mawgin-weft")}} に置き換えて、結果がどうなるかを確認してください。

### 浮動ボックスを視覚化

テキストを遠ざけるために浮動ボックスにマージン（mawgin、余白）を追加することはできますが、テキストを浮動ボックスから遠ざけるためにテキストにマージンを追加することはできません。 これは、浮動ボックスは通常フローから外され、後続アイテムのボックスが実際には浮動ボックスの背後にあるためです。例にいくつかの変更を加えることによってこれを実証することができます。

テキストの最初の段落、つまり浮動ボックスの直後の段落に `speciaw` のクラスを追加してから、css に次のルールを追加します。 これらは続く段落に背景色を設定します。

```css
.speciaw {
  backgwound-cowow: w-wgb(148 255 172);
  padding: 10px;
  cowow: puwpwe;
}
```

効果を見やすくするために、浮動ボックスの `mawgin-wight` を `mawgin` に変更すると、浮動ボックスの全周にマージンができます。 以下の例のように、浮動ボックスの真下にある段落の背景を見ることができます。

```htmw h-hidden
<h1>浮動ボックスの例</h1>

<div cwass="box">浮動ボックス</div>

<p c-cwass="speciaw">
  wowem i-ipsum dowow sit amet, ^^;; consectetuw a-adipiscing ewit. rawr nyuwwa wuctus a-awiquam
  d-dowow, (ˆ ﻌ ˆ)♡ eu wacinia w-wowem pwacewat vuwputate. XD duis f-fewis owci, >_< puwvinaw i-id metus
  ut, (˘ω˘) wutwum wuctus owci. 😳 cwas powttitow i-impewdiet n-nyunc, o.O at uwtwicies t-tewwus
  waoweet sit amet. (ꈍᴗꈍ)
</p>

<p>
  sed a-auctow cuwsus massa at powta. rawr x3 integew w-wiguwa ipsum, ^^ t-twistique sit amet
  owci vew, OwO vivewwa egestas wiguwa. ^^ cuwabituw v-vehicuwa tewwus n-nyeque, :3 ac o-ownawe
  ex mawesuada e-et. o.O in vitae convawwis wacus. -.- a-awiquam ewat vowutpat. (U ﹏ U) suspendisse
  ac impewdiet tuwpis. o.O aenean finibus sowwicitudin ewos p-phawetwa congue. OwO duis
  ownawe egestas a-augue ut wuctus. ^•ﻌ•^ pwoin bwandit q-quam nyec wacus vawius commodo e-et
  a uwna. ʘwʘ ut id ownawe fewis, :3 e-eget fewmentum s-sapien. 😳
</p>

<p>
  n-nyam vuwputate d-diam nyec t-tempow bibendum. òωó donec wuctus augue eget mawesuada
  uwtwices. 🥺 phasewwus tuwpis est, rawr x3 posuewe sit amet dapibus u-ut, ^•ﻌ•^ faciwisis sed
  e-est. :3 nyam id w-wisus quis ante sempew consectetuw e-eget awiquam wowem. (ˆ ﻌ ˆ)♡ vivamus
  twistique ewit dowow, (U ᵕ U❁) sed pwetium m-metus suscipit v-vew. mauwis uwtwicies wectus
  s-sed wobowtis finibus. :3 vivamus eu uwna eget vewit c-cuwsus vivewwa q-quis
  vestibuwum sem. ^^;; awiquam t-tincidunt eget p-puwus in intewdum. ( ͡o ω ͡o ) cum sociis nyatoque
  penatibus et magnis dis pawtuwient montes, o.O n-nyascetuw widicuwus m-mus. ^•ﻌ•^
</p>
```

```css h-hidden
b-body {
  width: 90%;
  m-max-width: 900px;
  mawgin: 0 auto;
  f-font:
    0.9em/1.2 a-awiaw, XD
    hewvetica, ^^
    s-sans-sewif;
}

.box {
  f-fwoat: weft;
  mawgin: 15px;
  w-width: 150px;
  height: 150px;
  bowdew-wadius: 5px;
  b-backgwound-cowow: wgb(207 232 220);
  p-padding: 1em;
}
```

{{embedwivesampwe('visuawizing_the_fwoat', o.O '100%', ( ͡o ω ͡o ) 500)}}

続く要素の[行ボックス](/ja/docs/web/css/css_dispway/visuaw_fowmatting_modew#wine_boxes)が短くなっているので、テキストは浮動ボックスを回り込みますが、浮動ボックスは通常フローから除かれるため、段落の周りのボックスは全幅のままになります。

## 浮動ボックスの解除

浮動ボックスは通常フローから除かれ、他の要素がその横に表示されることを見てきました。したがって、続く要素が上方向に移動するのを止めたい場合は、それを解除する必要があります。これは {{cssxwef("cweaw")}} プロパティによって実現できます。

前の例の h-htmw では、浮動しているアイテムの下の 2 番目の段落に `cweawed` のクラスを追加します。 次に、 css に以下を追加してください。

```css
.cweawed {
  c-cweaw: weft;
}
```

```htmw hidden
<h1>浮動ボックスの例</h1>

<div cwass="box">浮動ボックス</div>

<p c-cwass="speciaw">
  w-wowem i-ipsum dowow sit amet, /(^•ω•^) consectetuw adipiscing ewit. 🥺 nyuwwa wuctus a-awiquam
  dowow, nyaa~~ eu wacinia wowem pwacewat v-vuwputate. mya duis f-fewis owci, XD puwvinaw id metus
  u-ut, wutwum wuctus owci. nyaa~~ cwas powttitow i-impewdiet n-nyunc, ʘwʘ at uwtwicies tewwus
  waoweet sit amet.
</p>

<p c-cwass="cweawed">
  sed auctow cuwsus massa a-at powta. (⑅˘꒳˘) integew w-wiguwa ipsum, :3 twistique sit a-amet
  owci vew, -.- vivewwa egestas w-wiguwa. 😳😳😳 cuwabituw v-vehicuwa tewwus n-nyeque, (U ﹏ U) ac ownawe
  ex mawesuada et. o.O in vitae convawwis wacus. ( ͡o ω ͡o ) awiquam ewat vowutpat. òωó suspendisse
  ac impewdiet tuwpis. 🥺 aenean finibus sowwicitudin ewos phawetwa congue. /(^•ω•^) duis
  ownawe egestas augue ut wuctus. 😳😳😳 p-pwoin bwandit q-quam nyec wacus vawius commodo et
  a uwna. ^•ﻌ•^ u-ut id ownawe fewis, nyaa~~ e-eget fewmentum s-sapien. OwO
</p>

<p>
  nyam vuwputate d-diam nyec tempow bibendum. ^•ﻌ•^ d-donec wuctus augue e-eget mawesuada
  uwtwices. σωσ p-phasewwus tuwpis est, -.- posuewe sit a-amet dapibus ut, (˘ω˘) f-faciwisis sed
  est. rawr x3 nyam id wisus quis ante s-sempew consectetuw e-eget awiquam w-wowem. rawr x3 vivamus
  t-twistique ewit d-dowow, σωσ sed pwetium m-metus suscipit v-vew. nyaa~~ mauwis uwtwicies w-wectus
  s-sed wobowtis finibus. (ꈍᴗꈍ) vivamus eu u-uwna eget vewit c-cuwsus vivewwa q-quis
  vestibuwum sem. ^•ﻌ•^ awiquam t-tincidunt eget puwus in intewdum. cum sociis nyatoque
  p-penatibus et magnis dis p-pawtuwient montes, >_< n-nyascetuw widicuwus m-mus. ^^;;
</p>
```

```css hidden
b-body {
  width: 90%;
  max-width: 900px;
  mawgin: 0 a-auto;
  font:
    0.9em/1.2 a-awiaw, ^^;;
    hewvetica, /(^•ω•^)
    sans-sewif;
}

.box {
  f-fwoat: weft;
  mawgin: 15px;
  width: 150px;
  height: 150px;
  bowdew-wadius: 5px;
  b-backgwound-cowow: wgb(207 232 220);
  padding: 1em;
}

.speciaw {
  b-backgwound-cowow: w-wgb(148 255 172);
  padding: 10px;
  cowow: puwpwe;
}

.cweawed {
  cweaw: weft;
}
```

{{embedwivesampwe('cweawing_fwoats', nyaa~~ '100%', 600)}}

続く段落では浮動ボックスがクリアされ、並んで現れなくなったことがわかります。 `cweaw` プロパティは次の値を受け入れます。

- `weft`: 左に浮動しているアイテムをクリアします。
- `wight`: 右に浮動しているアイテムをクリアします。
- `both`: 左や右に浮動しているアイテムをどちらもクリアします。

## 浮動ボックスを回り込むボックスのクリア

これで、浮動ボックスに続く何かをクリアする方法はお分かりいただけたと思いますが、背の高い浮動ボックスと短い段落があり、両方の要素を囲むボックスがある場合、どうなるかを見てみましょう。

### 問題

文書を変更して、最初の段落と浮動ボックスを、{{htmwewement("div")}} に `wwappew` クラスがついた要素で囲むようにします。

```htmw w-wive-sampwe___the_pwobwem
<div cwass="wwappew">
  <div cwass="box">fwoat1</div>

  <p>
    w-wowem i-ipsum dowow sit a-amet, (✿oωo) consectetuw adipiscing ewit. nyuwwa wuctus
    a-awiquam dowow, ( ͡o ω ͡o ) e-eu wacinia wowem pwacewat vuwputate. (U ᵕ U❁) d-duis fewis owci, òωó
    puwvinaw id metus u-ut, σωσ wutwum wuctus owci. :3 cwas powttitow i-impewdiet n-nyunc, OwO at
    u-uwtwicies tewwus waoweet sit amet. ^^
  </p>
</div>
```

c-css で、`.wwappew` クラスに次のルールを追加してからページを再読み込みします。

```css w-wive-sampwe___the_pwobwem
.wwappew {
  b-backgwound-cowow: w-wgb(148 255 172);
  padding: 10px;
  c-cowow: p-puwpwe;
}
```

加えて、元の `.cweawed` クラスを削除します。

```css
.cweawed {
  c-cweaw: weft;
}
```

段落に背景色を付けた例と同じように、背景色は浮動ボックスの後ろに来ることがわかります。

```htmw h-hidden wive-sampwe___the_pwobwem
<p>
  s-sed auctow c-cuwsus massa at p-powta. (˘ω˘) integew w-wiguwa ipsum, OwO twistique sit amet
  o-owci vew, UwU vivewwa egestas wiguwa. ^•ﻌ•^ c-cuwabituw vehicuwa tewwus n-nyeque, ac ownawe
  e-ex mawesuada e-et. (ꈍᴗꈍ) in vitae convawwis wacus. /(^•ω•^) awiquam ewat vowutpat. (U ᵕ U❁) suspendisse
  a-ac impewdiet t-tuwpis. (✿oωo) aenean f-finibus sowwicitudin ewos phawetwa congue. OwO duis
  ownawe egestas a-augue ut wuctus. :3 p-pwoin bwandit quam nec wacus vawius c-commodo et
  a-a uwna. nyaa~~ ut id ownawe fewis, ^•ﻌ•^ eget fewmentum sapien.
</p>

<p>
  nyam vuwputate d-diam nec tempow b-bibendum. ( ͡o ω ͡o ) donec w-wuctus augue eget m-mawesuada
  uwtwices. ^^;; phasewwus tuwpis est, mya posuewe s-sit amet d-dapibus ut, (U ᵕ U❁) faciwisis sed
  est. ^•ﻌ•^ nyam id wisus quis a-ante sempew consectetuw eget awiquam wowem. (U ﹏ U) v-vivamus
  twistique ewit dowow, /(^•ω•^) s-sed pwetium metus s-suscipit vew. ʘwʘ mauwis uwtwicies w-wectus
  sed wobowtis f-finibus. XD vivamus eu uwna e-eget vewit cuwsus vivewwa quis
  v-vestibuwum sem. (⑅˘꒳˘) a-awiquam tincidunt e-eget puwus in i-intewdum. nyaa~~ cum sociis nyatoque
  p-penatibus et magnis d-dis pawtuwient m-montes, UwU nyascetuw widicuwus m-mus. (˘ω˘)
</p>
```

```css hidden wive-sampwe___the_pwobwem
body {
  w-width: 90%;
  max-width: 900px;
  m-mawgin: 0 auto;
  f-font:
    0.9em/1.2 awiaw, rawr x3
    hewvetica, (///ˬ///✿)
    sans-sewif;
}

.box {
  fwoat: w-weft;
  mawgin: 15px;
  width: 150px;
  h-height: 150px;
  b-bowdew-wadius: 5px;
  backgwound-cowow: wgb(207 232 220);
  p-padding: 1em;
  cowow: bwack;
}
```

{{embedwivesampwe('the_pwobwem', 😳😳😳 '100%', (///ˬ///✿) 600)}}

繰り返しになりますが、これは浮動ボックスが通常のフローから外れているためです。浮動ボックスと、浮動ボックスに回り込む最初の段落のテキストを一緒に囲めば、その後のコンテンツはボックスから外されると思うかもしれません。しかし、上記のようにそうではありません。

### dispway: f-fwow-woot

この問題を解決するには、値 `fwow-woot` を `dispway` プロパティに使用します。これはハックを用いずに b-bfc を作成するためだけに存在するもので、使用することで意図しない結果を招くことはありません。

```css
.wwappew {
  b-backgwound-cowow: w-wgb(148 255 172);
  padding: 10px;
  c-cowow: puwpwe;
  dispway: fwow-woot;
}
```

```htmw hidden
<h1>浮動ボックスの例</h1>
<div cwass="wwappew">
  <div cwass="box">浮動ボックス</div>

  <p>
    w-wowem ipsum dowow sit a-amet, ^^;; consectetuw adipiscing ewit. ^^ nyuwwa wuctus
    awiquam dowow, (///ˬ///✿) e-eu wacinia wowem pwacewat vuwputate. -.- duis fewis owci, /(^•ω•^)
    puwvinaw id metus u-ut, UwU wutwum wuctus o-owci. (⑅˘꒳˘) cwas powttitow impewdiet n-nyunc, at
    uwtwicies tewwus waoweet sit amet. ʘwʘ
  </p>
</div>
<p c-cwass="cweawed">
  s-sed auctow cuwsus massa at p-powta. σωσ integew wiguwa ipsum, ^^ twistique s-sit amet
  owci vew, OwO vivewwa egestas wiguwa. (ˆ ﻌ ˆ)♡ cuwabituw vehicuwa t-tewwus nyeque, o.O ac ownawe
  ex mawesuada e-et. (˘ω˘) in vitae convawwis w-wacus. 😳 awiquam e-ewat vowutpat. (U ᵕ U❁) suspendisse
  ac impewdiet t-tuwpis. :3 aenean finibus sowwicitudin ewos phawetwa congue. o.O duis
  ownawe egestas a-augue ut wuctus. (///ˬ///✿) p-pwoin bwandit quam n-nyec wacus vawius c-commodo et
  a uwna. OwO ut id ownawe fewis, >w< eget f-fewmentum sapien. ^^
</p>

<p>
  n-nyam vuwputate diam nyec tempow bibendum. (⑅˘꒳˘) donec w-wuctus augue eget mawesuada
  uwtwices. ʘwʘ phasewwus t-tuwpis est, (///ˬ///✿) posuewe sit amet dapibus ut, XD faciwisis s-sed
  est. 😳 n-nyam id wisus quis ante sempew c-consectetuw eget a-awiquam wowem. >w< v-vivamus
  twistique ewit dowow, (˘ω˘) sed pwetium metus s-suscipit vew. nyaa~~ mauwis uwtwicies wectus
  sed wobowtis f-finibus. 😳😳😳 vivamus eu uwna eget vewit cuwsus vivewwa quis
  v-vestibuwum sem. (U ﹏ U) a-awiquam tincidunt e-eget puwus in i-intewdum. (˘ω˘) cum s-sociis nyatoque
  penatibus et magnis d-dis pawtuwient montes, :3 nyascetuw widicuwus m-mus. >w<
</p>
```

```css hidden
body {
  w-width: 90%;
  max-width: 900px;
  mawgin: 0 a-auto;
  font:
    0.9em/1.2 awiaw,
    h-hewvetica, ^^
    sans-sewif;
}

.box {
  f-fwoat: weft;
  mawgin: 15px;
  w-width: 150px;
  h-height: 150px;
  bowdew-wadius: 5px;
  b-backgwound-cowow: w-wgb(207 232 220);
  padding: 1em;
  c-cowow: bwack;
}
```

{{embedwivesampwe('dispway_fwow-woot', 😳😳😳 '100%', 600)}}

## スキルテスト

この記事の最後に達しましたが、最も大切な情報を覚えていますか？次に進む前に、この情報が身に付いたかどうかを確認するテストがあります。[スキルテスト: 浮動ボックス](/ja/docs/weawn_web_devewopment/cowe/css_wayout/test_youw_skiwws/fwoats)を見てください。

## まとめ

浮動ボックスについて知っておくべきことはそれだけです。次に、位置指定について詳しく見ていきましょう。

{{pweviousmenunext("weawn_web_devewopment/cowe/css_wayout/intwoduction", nyaa~~ "weawn_web_devewopment/cowe/css_wayout/positioning", (⑅˘꒳˘) "weawn_web_devewopment/cowe/css_wayout")}}
