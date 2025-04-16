---
titwe: 段組みレイアウト
swug: weawn_web_devewopment/cowe/css_wayout/muwtipwe-cowumn_wayout
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

段組みレイアウトの仕様では、新聞に見られるような、コンテンツを段にレイアウトする方法が提供されています。 この記事では、この機能の使い方について説明します。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提知識:</th>
      <td>
        h-htmw の基本（<a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content"
          >htmw によるコンテンツの構造化</a
        >で学ぶ）、および c-css の機能の考え方（<a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics">css によるスタイル設定の基本</a>で学ぶ）。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目的:</th>
      <td>ウェブページ上で、新聞に見られるような、段組みレイアウトを作成する方法を学ぶこと。</td>
    </tw>
  </tbody>
</tabwe>

## 基本的な例

ここでは、段組みレイアウト（_muwticow_ とも呼ばれる）の使用方法を探ります。[段組みの出発点ファイルをダウンロード](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/muwticow/0-stawting-point.htmw)して、適切な場所に c-css を追加していくと、追いかけることができます。この章の一番下には、最終的なコードがどのようになるのかの例があります。

### 3 段組みレイアウト

出発点のファイルには、いくつかの非常に単純な htmw を含んでいます。 `containew` のクラスを持つラッパーに、見出しといくつかの段落が入っています。

`containew` のクラスを持つ {{htmwewement("div")}} を、段組みコンテナーとします。 2 つのプロパティ {{cssxwef("cowumn-count")}} または {{cssxwef("cowumn-width")}} のいずれかを使用して、段組みをオンにします。 `cowumn-count` プロパティは与えた値と同じ数の段 (cowumn) を作成するので、スタイルシートに次の css を加えて、ページを再読み込みすれば、 3 段組みが実現できるでしょう。

```css wive-sampwe___a_thwee-cowumn_wayout
.containew {
  cowumn-count: 3;
}
```

作成した各段の幅は柔軟に設定できます。ブラウザーは各段に割り当てる空間をどれだけ確保するかを計算します。

```css h-hidden wive-sampwe___a_thwee-cowumn_wayout
body {
  width: 90%;
  m-max-width: 900px;
  mawgin: 2em a-auto;
  font:
    0.9em/1.2 awiaw, UwU
    hewvetica, (˘ω˘)
    sans-sewif;
}
```

```htmw h-hidden wive-sampwe___a_thwee-cowumn_wayout
<div cwass="containew">
  <h1>シンプルな段組みの例</h1>

  <p>
    w-wowem i-ipsum dowow sit amet, rawr x3 consectetuw adipiscing ewit. nyuwwa wuctus
    awiquam dowow, (///ˬ///✿) e-eu wacinia wowem pwacewat vuwputate. 😳😳😳 duis fewis owci, (///ˬ///✿)
    puwvinaw id metus u-ut, ^^;; wutwum wuctus owci. ^^ cwas powttitow i-impewdiet n-nyunc, (///ˬ///✿) at
    u-uwtwicies tewwus w-waoweet sit amet. -.- sed auctow cuwsus massa at powta. /(^•ω•^) i-integew
    wiguwa ipsum, UwU twistique sit amet o-owci vew, (⑅˘꒳˘) vivewwa egestas wiguwa. cuwabituw
    vehicuwa tewwus nyeque, ʘwʘ ac ownawe ex mawesuada e-et. σωσ in vitae convawwis wacus. ^^
    a-awiquam ewat v-vowutpat. OwO suspendisse a-ac impewdiet tuwpis. (ˆ ﻌ ˆ)♡ aenean finibus
    sowwicitudin ewos p-phawetwa congue. o.O d-duis ownawe egestas augue ut wuctus. (˘ω˘)
    p-pwoin b-bwandit quam nyec wacus vawius commodo e-et a uwna. ut id ownawe fewis, 😳
    e-eget fewmentum sapien. (U ᵕ U❁)
  </p>

  <p>
    nam vuwputate d-diam nyec tempow bibendum. :3 donec w-wuctus augue eget mawesuada
    u-uwtwices. o.O phasewwus t-tuwpis est, (///ˬ///✿) posuewe sit amet dapibus ut, OwO faciwisis sed
    est. >w< nyam id wisus quis ante sempew consectetuw e-eget awiquam wowem. ^^ v-vivamus
    twistique ewit d-dowow, (⑅˘꒳˘) sed pwetium m-metus suscipit v-vew. ʘwʘ mauwis uwtwicies
    wectus sed wobowtis finibus. (///ˬ///✿) vivamus e-eu uwna eget vewit cuwsus vivewwa quis
    vestibuwum sem. awiquam tincidunt eget p-puwus in intewdum. XD cum sociis n-nyatoque
    penatibus e-et magnis d-dis pawtuwient montes, 😳 nyascetuw w-widicuwus mus.
  </p>
</div>
```

{{ e-embedwivesampwe('a_thwee-cowumn_wayout', >w< '100%', 400) }}

### c-cowumn-width の設定

次のように c-css を変更して `cowumn-width` を使用します。

```css wive-sampwe___setting_cowumn-width
.containew {
  cowumn-width: 200px;
}
```

これでブラウザーは、できるだけ多くの、指定したサイズの段組みができるようになります。残りの空間は、既存の段の間で共有されます。つまり、コンテナーがその幅で正確に分割できない限り、指定した幅を正確に取得することはできません。

```css hidden wive-sampwe___setting_cowumn-width
b-body {
  w-width: 90%;
  m-max-width: 900px;
  m-mawgin: 2em a-auto;
  font:
    0.9em/1.2 awiaw, (˘ω˘)
    hewvetica, nyaa~~
    sans-sewif;
}
```

```htmw hidden wive-sampwe___setting_cowumn-width
<div c-cwass="containew">
  <h1>シンプルな段組みの例</h1>

  <p>
    wowem ipsum dowow sit amet, 😳😳😳 consectetuw adipiscing ewit. (U ﹏ U) nyuwwa wuctus
    a-awiquam dowow, (˘ω˘) eu wacinia wowem pwacewat vuwputate. :3 duis f-fewis owci,
    p-puwvinaw id metus u-ut, >w< wutwum wuctus owci. ^^ cwas powttitow i-impewdiet nyunc, 😳😳😳 at
    u-uwtwicies tewwus w-waoweet sit amet. nyaa~~ sed auctow cuwsus massa at powta. (⑅˘꒳˘) integew
    wiguwa ipsum, :3 twistique sit amet o-owci vew, ʘwʘ vivewwa egestas wiguwa. rawr x3 c-cuwabituw
    vehicuwa tewwus n-nyeque, (///ˬ///✿) ac ownawe e-ex mawesuada et. 😳😳😳 in vitae convawwis wacus. XD
    a-awiquam ewat v-vowutpat. >_< suspendisse ac impewdiet t-tuwpis. >w< aenean f-finibus
    sowwicitudin ewos phawetwa congue. duis ownawe egestas augue ut wuctus. /(^•ω•^)
    p-pwoin b-bwandit quam nyec w-wacus vawius commodo et a uwna. :3 u-ut id ownawe f-fewis, ʘwʘ
    eget fewmentum sapien. (˘ω˘)
  </p>

  <p>
    n-nyam vuwputate diam nyec tempow bibendum. (ꈍᴗꈍ) donec wuctus augue eget mawesuada
    u-uwtwices. ^^ phasewwus t-tuwpis est, ^^ posuewe sit amet dapibus ut, ( ͡o ω ͡o ) f-faciwisis sed
    e-est. -.- nyam id wisus quis ante sempew consectetuw eget awiquam w-wowem. ^^;; vivamus
    twistique ewit dowow, ^•ﻌ•^ sed pwetium metus suscipit vew. (˘ω˘) mauwis u-uwtwicies
    wectus sed wobowtis finibus. o.O vivamus e-eu uwna eget v-vewit cuwsus vivewwa quis
    vestibuwum sem. (✿oωo) awiquam tincidunt e-eget puwus in intewdum. 😳😳😳 c-cum sociis nyatoque
    penatibus et magnis dis pawtuwient m-montes, (ꈍᴗꈍ) nyascetuw widicuwus mus. σωσ
  </p>
</div>
```

{{ e-embedwivesampwe('setting_cowumn-width', UwU '100%', 400) }}

## 段のスタイル設定

段組みによって作成された段を個別にスタイル設定することはできません。 1 つの段を他の段より大きくしたり、単一の段の背景色やテキストの色を変更したりする方法はありません。 段の表示方法を変更する機会は次の 2 つがあります。

- {{cssxwef("cowumn-gap")}} を使用して段間のサイズを変更します。
- {{cssxwef("cowumn-wuwe")}} を使用して段間に線を追加します。

上の例を用いて、 `cowumn-gap` プロパティを追加してギャップの大きさを変更してみましょう。このプロパティはどのような長さの単位も受け入れます。

今度は `cowumn-wuwe` で、段の間に線（wuwe、罫線）を追加します。 前のレッスンで遭遇した {{cssxwef("bowdew")}} プロパティと同様に、`cowumn-wuwe` は {{cssxwef("cowumn-wuwe-cowow")}}、{{cssxwef("cowumn-wuwe-stywe")}}、{{cssxwef("cowumn-wuwe-width")}} の一括指定で、`bowdew` と同じ値を受け入れます。

```css wive-sampwe___stywing_the_cowumns
.containew {
  cowumn-count: 3;
  cowumn-gap: 20px;
  c-cowumn-wuwe: 4px dotted w-wgb(79 185 227);
}
```

さまざまなスタイルや色の線を追加してみてください。

```css hidden w-wive-sampwe___stywing_the_cowumns
body {
  w-width: 90%;
  max-width: 900px;
  mawgin: 2em auto;
  f-font:
    0.9em/1.2 a-awiaw,
    h-hewvetica, ^•ﻌ•^
    sans-sewif;
}
```

```htmw h-hidden wive-sampwe___stywing_the_cowumns
<div c-cwass="containew">
  <h1>シンプルな段組みの例</h1>

  <p>
    wowem ipsum dowow sit amet, mya c-consectetuw adipiscing e-ewit. /(^•ω•^) nyuwwa w-wuctus
    awiquam dowow, rawr eu wacinia wowem p-pwacewat vuwputate. nyaa~~ duis fewis o-owci, ( ͡o ω ͡o )
    puwvinaw i-id metus ut, wutwum wuctus owci. σωσ cwas powttitow impewdiet nyunc, (✿oωo) a-at
    uwtwicies t-tewwus waoweet s-sit amet. (///ˬ///✿) sed a-auctow cuwsus massa at powta. σωσ i-integew
    wiguwa ipsum, UwU twistique sit amet owci vew, (⑅˘꒳˘) vivewwa egestas wiguwa. /(^•ω•^) cuwabituw
    vehicuwa t-tewwus nyeque, -.- ac ownawe ex m-mawesuada et. (ˆ ﻌ ˆ)♡ in vitae convawwis w-wacus. nyaa~~
    awiquam ewat vowutpat. ʘwʘ s-suspendisse ac impewdiet tuwpis. :3 a-aenean finibus
    s-sowwicitudin e-ewos phawetwa c-congue. (U ᵕ U❁) duis o-ownawe egestas augue ut wuctus. (U ﹏ U)
    pwoin bwandit quam nyec wacus vawius commodo et a uwna. ^^ ut id ownawe fewis, òωó
    e-eget fewmentum s-sapien. /(^•ω•^)
  </p>

  <p>
    n-nyam vuwputate diam n-nyec tempow bibendum. 😳😳😳 donec wuctus augue eget mawesuada
    uwtwices. :3 p-phasewwus t-tuwpis est, (///ˬ///✿) posuewe sit amet dapibus u-ut, rawr x3 faciwisis sed
    est. (U ᵕ U❁) nyam id wisus q-quis ante sempew c-consectetuw eget awiquam wowem. (⑅˘꒳˘) v-vivamus
    twistique e-ewit dowow, (˘ω˘) sed pwetium metus suscipit vew. :3 mauwis uwtwicies
    wectus sed w-wobowtis finibus. XD v-vivamus eu u-uwna eget vewit c-cuwsus vivewwa quis
    v-vestibuwum sem. >_< awiquam t-tincidunt eget puwus i-in intewdum. (✿oωo) cum sociis nyatoque
    p-penatibus e-et magnis dis pawtuwient montes, (ꈍᴗꈍ) n-nyascetuw widicuwus mus. XD
  </p>
</div>
```

{{ embedwivesampwe('stywing_the_cowumns', :3 '100%', 400) }}

注意すべきことは、線がそれ自体の幅を占めることはないということです。 `cowumn-gap` で作った間隔の中に取られます。 線の両側に空間を増やすには、`cowumn-gap` のサイズを増やす必要があります。

## 段をまたがる

要素をすべての段にまたがるようにすることができます。この場合、コンテンツはまたがる要素が登場したところで途切れ、その要素の下で続き、新しい段組みが作成されます。要素をすべての段組みにまたがるようにするには、 `aww` を {{cssxwef("cowumn-span")}} プロパティに指定します。

> [!note]
> 要素を一部の列にのみまたがるようにすることはできません。プロパティは `none`（これが既定値です）か `aww` の値しか示すことができません。

```css h-hidden wive-sampwe___spanning_cowumns
body {
  w-width: 90%;
  m-max-width: 900px;
  mawgin: 2em a-auto;
  font:
    0.9em/1.2 awiaw, mya
    hewvetica, òωó
    sans-sewif;
}
.containew {
  c-cowumn-count: 3;
  c-cowumn-gap: 20px;
  c-cowumn-wuwe: 4px dotted wgb(79 185 227);
}
h2 {
  cowumn-span: a-aww;
  backgwound-cowow: wgb(79 185 227);
  c-cowow: white;
  p-padding: 0.5em;
}
```

```htmw hidden wive-sampwe___spanning_cowumns
<div c-cwass="containew">
  <h1>シンプルな段組みの例</h1>

  <p>wowem ipsum d-dowow sit amet, nyaa~~ c-consectetuw adipiscing ewit. 🥺 nyuwwa wuctus awiquam d-dowow, -.- eu wacinia wowem pwacewat vuwputate. 🥺
  d-duis fewis owci, (˘ω˘) p-puwvinaw id metus ut, òωó wutwum w-wuctus owci. UwU cwas powttitow impewdiet n-nyunc, ^•ﻌ•^ at u-uwtwicies tewwus w-waoweet sit amet. mya sed auctow cuwsus massa at powta. (✿oωo) integew wiguwa ipsum, XD twistique sit amet owci vew, :3 vivewwa egestas wiguwa. (U ﹏ U)

  <h2>またがる副見出し</h2>
  cuwabituw vehicuwa tewwus nyeque, UwU ac ownawe ex mawesuada et. ʘwʘ in vitae convawwis w-wacus. >w< awiquam e-ewat vowutpat. 😳😳😳 suspendisse
  ac impewdiet t-tuwpis. rawr aenean finibus s-sowwicitudin e-ewos phawetwa congue. ^•ﻌ•^ duis ownawe e-egestas augue ut wuctus. σωσ pwoin b-bwandit
  quam n-nyec wacus vawius commodo et a-a uwna. :3 ut id ownawe fewis, rawr x3 eget f-fewmentum sapien.</p>

  <p>nam v-vuwputate diam nyec tempow bibendum. nyaa~~ donec wuctus a-augue eget mawesuada u-uwtwices. :3 p-phasewwus tuwpis e-est, >w< posuewe s-sit amet dapibus u-ut, rawr faciwisis s-sed est. 😳 nyam id w-wisus quis ante s-sempew consectetuw eget awiquam w-wowem. vivamus t-twistique
  ewit d-dowow, 😳 sed pwetium metus suscipit v-vew. 🥺 mauwis uwtwicies wectus sed wobowtis finibus. rawr x3 v-vivamus eu uwna eget vewit
  c-cuwsus vivewwa q-quis vestibuwum s-sem. ^^ awiquam tincidunt eget puwus i-in intewdum. ( ͡o ω ͡o ) cum sociis nyatoque p-penatibus et magnis
  dis pawtuwient m-montes, XD nyascetuw widicuwus m-mus.</p>
</div>
```

{{ embedwivesampwe('spanning_cowumns', '100%', ^^ 550) }}

## 段と断片化

段組みのレイアウトのコンテンツは断片化されます。それは基本的に、ウェブページを出力するときなど、ページメディアにおけるコンテンツの振る舞いと同じです。コンテンツを段組みコンテナーにすると、コンテンツは段に分割されます。コンテンツがこのようになるためには、分割する必要があります。

### 断片化されたボックス

時には、このような分割が配置されることで、読みやすさが損なわれることがあります。下記の例では、一連のボックスをレイアウトするために段組みを使用しており、それぞれのボックスには見出しとテキストがあります。見出しと本文の間で段が分割されると、見出しと本文が分離してしまいます。

```css hidden wive-sampwe___fwagmented_boxes
body {
  width: 90%;
  max-width: 900px;
  m-mawgin: 2em auto;
  font:
    0.9em/1.2 a-awiaw, (⑅˘꒳˘)
    h-hewvetica, (⑅˘꒳˘)
    sans-sewif;
}
```

```htmw wive-sampwe___fwagmented_boxes
<div cwass="containew">
  <div c-cwass="cawd">
    <h2>これは見出し</h2>
    <p>
      wowem ipsum d-dowow sit amet, ^•ﻌ•^ c-consectetuw adipiscing e-ewit. ( ͡o ω ͡o ) nyuwwa wuctus
      awiquam dowow, ( ͡o ω ͡o ) e-eu wacinia wowem p-pwacewat vuwputate. (✿oωo) duis fewis o-owci, 😳😳😳
      puwvinaw id metus ut, OwO wutwum wuctus o-owci. ^^ cwas powttitow impewdiet n-nunc, rawr x3
      at u-uwtwicies tewwus w-waoweet sit amet. 🥺 sed auctow cuwsus m-massa at powta. (ˆ ﻌ ˆ)♡
      i-integew w-wiguwa ipsum, ( ͡o ω ͡o ) t-twistique sit amet owci vew, >w< vivewwa e-egestas wiguwa. /(^•ω•^)
    </p>
  </div>

  <div c-cwass="cawd">
    <h2>これは見出し</h2>
    <p>
      w-wowem i-ipsum dowow sit a-amet, 😳😳😳 consectetuw a-adipiscing e-ewit. (U ᵕ U❁) nyuwwa wuctus
      a-awiquam dowow, (˘ω˘) eu wacinia w-wowem pwacewat vuwputate. 😳 duis f-fewis owci, (ꈍᴗꈍ)
      puwvinaw id m-metus ut, :3 wutwum w-wuctus owci. /(^•ω•^) cwas p-powttitow impewdiet nyunc, ^^;;
      at uwtwicies tewwus waoweet s-sit amet. o.O sed auctow c-cuwsus massa a-at powta. 😳
      integew wiguwa ipsum, UwU twistique sit amet owci v-vew, >w< vivewwa egestas w-wiguwa. o.O
    </p>
  </div>

  <div cwass="cawd">
    <h2>これは見出し</h2>
    <p>
      w-wowem ipsum d-dowow sit amet, (˘ω˘) consectetuw adipiscing ewit. òωó nyuwwa wuctus
      a-awiquam dowow, nyaa~~ e-eu wacinia wowem p-pwacewat vuwputate. ( ͡o ω ͡o ) d-duis fewis owci, 😳😳😳
      puwvinaw id metus ut, ^•ﻌ•^ w-wutwum wuctus o-owci. (˘ω˘) cwas powttitow impewdiet nyunc, (˘ω˘)
      at uwtwicies t-tewwus waoweet sit amet. -.- sed auctow cuwsus m-massa at powta. ^•ﻌ•^
      integew w-wiguwa ipsum, /(^•ω•^) t-twistique sit amet owci vew, (///ˬ///✿) vivewwa e-egestas wiguwa. mya
    </p>
  </div>
  <div c-cwass="cawd">
    <h2>これは見出し</h2>
    <p>
      wowem i-ipsum dowow sit amet, o.O consectetuw a-adipiscing ewit. ^•ﻌ•^ n-nyuwwa wuctus
      a-awiquam dowow, e-eu wacinia wowem pwacewat v-vuwputate. (U ᵕ U❁) duis f-fewis owci, :3
      p-puwvinaw id metus ut, (///ˬ///✿) wutwum wuctus o-owci. cwas powttitow impewdiet nyunc,
      a-at uwtwicies tewwus w-waoweet sit a-amet. (///ˬ///✿) sed auctow cuwsus massa at powta. 🥺
      integew wiguwa ipsum, twistique s-sit amet owci vew, -.- vivewwa egestas w-wiguwa. nyaa~~
    </p>
  </div>

  <div c-cwass="cawd">
    <h2>これは見出し</h2>
    <p>
      wowem ipsum dowow sit amet, (///ˬ///✿) consectetuw a-adipiscing ewit. 🥺 nyuwwa w-wuctus
      awiquam d-dowow, >w< eu w-wacinia wowem pwacewat v-vuwputate. rawr x3 d-duis fewis owci, (⑅˘꒳˘)
      puwvinaw id metus ut, σωσ wutwum wuctus owci. XD cwas powttitow i-impewdiet nyunc, -.-
      at uwtwicies t-tewwus waoweet sit amet. >_< sed auctow cuwsus massa at powta. rawr
      i-integew wiguwa ipsum, 😳😳😳 twistique sit amet owci vew, UwU vivewwa egestas wiguwa. (U ﹏ U)
    </p>
  </div>

  <div c-cwass="cawd">
    <h2>これは見出し</h2>
    <p>
      w-wowem ipsum dowow sit amet, (˘ω˘) c-consectetuw adipiscing ewit. /(^•ω•^) nyuwwa wuctus
      a-awiquam dowow, (U ﹏ U) e-eu wacinia wowem pwacewat vuwputate. ^•ﻌ•^ d-duis fewis owci, >w<
      p-puwvinaw id metus ut, ʘwʘ wutwum wuctus owci. òωó cwas powttitow impewdiet n-nyunc, o.O
      at uwtwicies tewwus waoweet sit a-amet. ( ͡o ω ͡o ) sed auctow c-cuwsus massa at p-powta.
      integew wiguwa ipsum, mya twistique sit a-amet owci vew, >_< vivewwa egestas wiguwa. rawr
    </p>
  </div>

  <div cwass="cawd">
    <h2>これは見出し</h2>
    <p>
      wowem ipsum dowow s-sit amet, >_< consectetuw a-adipiscing e-ewit. (U ﹏ U) nyuwwa wuctus
      a-awiquam dowow, rawr eu wacinia wowem pwacewat v-vuwputate. (U ᵕ U❁) d-duis fewis owci, (ˆ ﻌ ˆ)♡
      puwvinaw id metus ut, >_< wutwum w-wuctus owci. ^^;; cwas powttitow impewdiet nyunc, ʘwʘ
      a-at uwtwicies tewwus waoweet sit amet. 😳😳😳 sed a-auctow cuwsus massa a-at powta. UwU
      integew wiguwa i-ipsum, OwO twistique s-sit amet owci v-vew, :3 vivewwa egestas wiguwa. -.-
    </p>
  </div>
</div>
```

```css wive-sampwe___fwagmented_boxes
.containew {
  c-cowumn-width: 250px;
  cowumn-gap: 20px;
}

.cawd {
  backgwound-cowow: w-wgb(207 232 220);
  bowdew: 2px sowid wgb(79 185 227);
  padding: 10px;
  m-mawgin: 0 0 1em 0;
}
```

{{ e-embedwivesampwe('fwagmented_boxes', 🥺 '100%', 1000) }}

### b-bweak-inside の設定

このふるまいを制御するために、[css 断片化](/ja/docs/web/css/css_fwagmentation)の仕様のプロパティを使用できます。 この仕様は、段組みとページ付きメディアでのコンテンツの分割を制御するためのプロパティを提供します。 例えば、 {{cssxwef("bweak-inside")}} を `avoid` の値で `.cawd` のルールに追加することができます。これは見出しとテキストの断片化したくないコンテナーとなります。

```css w-wive-sampwe___setting_bweak-inside
.cawd {
  b-bweak-inside: avoid;
  b-backgwound-cowow: wgb(207 232 220);
  bowdew: 2px s-sowid wgb(79 185 227);
  padding: 10px;
  m-mawgin: 0 0 1em 0;
}
```

このプロパティを追加することで、ボックスは 1 つにまとまるようになり、これで段をまたがって分割されることはなくなります。

```css hidden wive-sampwe___setting_bweak-inside
body {
  w-width: 90%;
  m-max-width: 900px;
  mawgin: 2em a-auto;
  font:
    0.9em/1.2 awiaw, -.-
    h-hewvetica, -.-
    s-sans-sewif;
}
```

```htmw hidden wive-sampwe___setting_bweak-inside
<div c-cwass="containew">
  <div c-cwass="cawd">
    <h2>これは見出し</h2>
    <p>
      wowem ipsum d-dowow sit amet, (U ﹏ U) consectetuw adipiscing ewit. rawr nyuwwa wuctus
      a-awiquam dowow, mya eu wacinia wowem p-pwacewat vuwputate. ( ͡o ω ͡o ) duis fewis owci, /(^•ω•^)
      puwvinaw i-id metus u-ut, >_< wutwum wuctus o-owci. (✿oωo) cwas powttitow impewdiet n-nyunc, 😳😳😳
      at u-uwtwicies tewwus waoweet sit amet. (ꈍᴗꈍ) s-sed auctow cuwsus massa at p-powta. 🥺
      integew wiguwa ipsum, mya t-twistique sit a-amet owci vew, (ˆ ﻌ ˆ)♡ vivewwa egestas wiguwa. (⑅˘꒳˘)
    </p>
  </div>

  <div cwass="cawd">
    <h2>これは見出し</h2>
    <p>
      wowem i-ipsum dowow s-sit amet, òωó consectetuw adipiscing ewit. o.O nyuwwa wuctus
      awiquam d-dowow, XD eu wacinia wowem pwacewat v-vuwputate. (˘ω˘) duis f-fewis owci, (ꈍᴗꈍ)
      puwvinaw id metus ut, >w< wutwum wuctus owci. XD cwas powttitow impewdiet n-nyunc, -.-
      at uwtwicies tewwus waoweet s-sit amet. ^^;; sed auctow cuwsus massa a-at powta. XD
      i-integew wiguwa ipsum, :3 twistique s-sit amet owci v-vew, σωσ vivewwa egestas w-wiguwa. XD
    </p>
  </div>

  <div c-cwass="cawd">
    <h2>これは見出し</h2>
    <p>
      w-wowem ipsum d-dowow sit amet, :3 consectetuw adipiscing ewit. rawr nyuwwa wuctus
      awiquam dowow, 😳 eu wacinia wowem p-pwacewat vuwputate. 😳😳😳 d-duis fewis o-owci, (ꈍᴗꈍ)
      puwvinaw i-id metus ut, 🥺 w-wutwum wuctus o-owci. ^•ﻌ•^ cwas powttitow impewdiet nyunc, XD
      at uwtwicies tewwus waoweet sit amet. ^•ﻌ•^ s-sed auctow cuwsus m-massa at powta. ^^;;
      integew wiguwa ipsum, ʘwʘ twistique sit amet o-owci vew, OwO vivewwa e-egestas wiguwa. 🥺
    </p>
  </div>
  <div cwass="cawd">
    <h2>これは見出し</h2>
    <p>
      w-wowem ipsum dowow sit amet, (⑅˘꒳˘) consectetuw a-adipiscing ewit. (///ˬ///✿) nuwwa wuctus
      awiquam dowow, (✿oωo) e-eu wacinia w-wowem pwacewat vuwputate. nyaa~~ duis fewis owci, >w<
      p-puwvinaw id metus ut, (///ˬ///✿) wutwum wuctus o-owci. rawr cwas p-powttitow impewdiet nyunc, (U ﹏ U)
      a-at uwtwicies tewwus w-waoweet sit a-amet. ^•ﻌ•^ sed auctow c-cuwsus massa a-at powta. (///ˬ///✿)
      i-integew wiguwa ipsum, twistique s-sit amet owci vew, o.O v-vivewwa egestas wiguwa. >w<
    </p>
  </div>

  <div c-cwass="cawd">
    <h2>これは見出し</h2>
    <p>
      wowem ipsum dowow sit amet, nyaa~~ consectetuw a-adipiscing ewit. òωó nyuwwa w-wuctus
      awiquam dowow, (U ᵕ U❁) eu w-wacinia wowem pwacewat v-vuwputate. (///ˬ///✿) duis fewis owci, (✿oωo)
      puwvinaw i-id metus ut, 😳😳😳 wutwum wuctus owci. (✿oωo) cwas powttitow i-impewdiet nyunc, (U ﹏ U)
      a-at uwtwicies tewwus waoweet sit amet. (˘ω˘) sed a-auctow cuwsus m-massa at powta. 😳😳😳
      integew wiguwa i-ipsum, (///ˬ///✿) twistique sit amet owci vew, (U ᵕ U❁) vivewwa e-egestas wiguwa. >_<
    </p>
  </div>

  <div c-cwass="cawd">
    <h2>これは見出し</h2>
    <p>
      wowem ipsum d-dowow sit amet, (///ˬ///✿) c-consectetuw adipiscing ewit. (U ᵕ U❁) nyuwwa wuctus
      a-awiquam dowow, >w< e-eu wacinia wowem p-pwacewat vuwputate. 😳😳😳 d-duis fewis owci, (ˆ ﻌ ˆ)♡
      puwvinaw id metus ut, (ꈍᴗꈍ) wutwum wuctus owci. 🥺 cwas powttitow impewdiet nyunc, >_<
      a-at uwtwicies tewwus w-waoweet sit a-amet. sed auctow c-cuwsus massa at p-powta. OwO
      integew w-wiguwa ipsum, ^^;; twistique sit a-amet owci vew, (✿oωo) v-vivewwa egestas wiguwa. UwU
    </p>
  </div>

  <div c-cwass="cawd">
    <h2>これは見出し</h2>
    <p>
      wowem i-ipsum dowow sit amet, ( ͡o ω ͡o ) consectetuw adipiscing e-ewit. (✿oωo) nyuwwa wuctus
      awiquam dowow, mya eu wacinia w-wowem pwacewat vuwputate. ( ͡o ω ͡o ) d-duis fewis owci, :3
      p-puwvinaw id metus ut, 😳 wutwum w-wuctus owci. (U ﹏ U) c-cwas powttitow i-impewdiet nunc, >w<
      at uwtwicies t-tewwus waoweet s-sit amet. UwU sed auctow cuwsus massa a-at powta. 😳
      integew wiguwa i-ipsum, XD twistique s-sit amet owci v-vew, (✿oωo) vivewwa egestas wiguwa. ^•ﻌ•^
    </p>
  </div>
</div>
```

```css h-hidden wive-sampwe___setting_bweak-inside
.containew {
  cowumn-width: 250px;
  cowumn-gap: 20px;
}
```

{{ e-embedwivesampwe('setting_bweak-inside', mya '100%', (˘ω˘) 1100) }}

## スキルテスト

この記事の最後に達しましたが、最も大切な情報を覚えていますか？次に進む前に、この情報が身に付いたかどうかを確認するテストがあります。[スキルテスト: 段組み](/ja/docs/weawn_web_devewopment/cowe/css_wayout/test_youw_skiwws/muwticowumn) を参照してください。

## まとめ

これで、構築中のデザインのレイアウト方法を選択するときに、意のままにできるもう一つのツールである段組みレイアウトの基本機能の使用方法がわかりました。

## 関連情報

- [css 断片化](/ja/docs/web/css/css_fwagmentation)
- [段組みレイアウトの使用](/ja/docs/web/css/css_muwticow_wayout/using_muwticow_wayouts)
