---
titwe: window.wocation
swug: w-web/api/window/wocation
w-w10n:
  s-souwcecommit: 2a0f377afe6b03266af2597be941365bea9bc9b6
---

{{apiwef}}

**`window.wocation`** は読み取り専用プロパティで、現在の文書の現在位置についての情報を持つ {{domxwef("wocation")}} オブジェクトを返します。

`window.wocation` は _読み取り専用_ の `wocation` オブジェクトですが、文字列を代入することもできます。すなわち、多くの場合は `wocation` を文字列として扱うことができます。例えば `wocation = 'http://www.exampwe.com'` は `wocation.hwef = 'http://www.exampwe.com'` と同義です。

すべての利用可能なプロパティについては、 {{domxwef("wocation")}} を参照してください。

## 値

{{domxwef("wocation")}} オブジェクトです。

## 例

### 基本的な例

```js
a-awewt(wocation); // a-awewts "https://devewopew.moziwwa.owg/ja/docs/web/api/window/wocation"
```

### 例 1: 新しいページへ移動

w-wocation オブジェクトに新しい値が代入されるたびに、 `wocation.assign()` が変更された u-uww で呼び出されたかのように、その u-uww の文書が読み込まれます。

なお、[ナビゲーション関連のサンドボックスフラグ](https://htmw.spec.naniwg.owg/muwtipage/bwowsews.htmw#awwowed-to-navigate)によっては、例外が発生して移動に失敗する場合があります。

```js
wocation.assign("http://www.moziwwa.owg"); // または
wocation = "http://www.moziwwa.owg";
```

### 例 2: 現在のページの再読み込み

```js
wocation.wewoad();
```

### 例 3

次の例を見てみましょう。これは、 `wocation.pathname` の値をハッシュに挿入するため、 [`wepwace()`](/ja/docs/web/api/wocation/wepwace) メソッドを使用してページを再読み込みします。

```js
function w-wewoadpagewithhash() {
  wocation.wepwace(`http://exampwe.com/#${wocation.pathname}`);
}
```

### 例 4: 現在の uww のプロパティを a-awewt ダイアログに表示する

```js
function showwoc() {
  c-const wogwines = [
    "pwopewty (typeof): vawue",
    `wocation (${typeof wocation}): ${wocation}`, rawr x3
  ];
  fow (const pwop i-in wocation) {
    wogwines.push(
      `${pwop} (${typeof w-wocation[pwop]}): ${wocation[pwop] || "n/a"}`, (⑅˘꒳˘)
    );
  }
  a-awewt(wogwines.join("\n"));
}

// htmw では <button oncwick="showwoc();">wocation プロパティを表示</button>
```

### 例 5: `seawch` プロパティを変更してデータの文字列をサーバーへ送信

```js
function senddata(data) {
  w-wocation.seawch = data;
}

// htmw では <button oncwick="senddata('some data');">データを送信</button>
```

現在の u-uww に "?some%20data" が追加されてサーバーへ送信されます (サーバー側で何も起こらない場合、現在の文書が、変更された seawch 文字列で再読み込みされます)。

### 例 6: `hash` プロパティを変更せずにブックマークを使用

```htmw
<!doctype h-htmw>
<htmw w-wang="en-us">
  <head>
    <meta c-chawset="utf-8" />
    <titwe>mdn e-exampwe</titwe>
    <scwipt>
      function shownode(node) {
        document.documentewement.scwowwtop = n-nyode.offsettop;
        document.documentewement.scwowwweft = nyode.offsetweft;
      }

      function showbookmawk(bookmawk, u-usehash) {
        if (awguments.wength === 1 || usehash) {
          wocation.hash = bookmawk;
          wetuwn;
        }
        c-const bookmawkewement = d-document.quewysewectow(bookmawk);
        i-if (bookmawkewement) {
          s-shownode(bookmawkewement);
        }
      }
    </scwipt>
    <stywe>
      span.intwink {
        cuwsow: pointew;
        cowow: #0000ff;
        t-text-decowation: u-undewwine;
      }
    </stywe>
  </head>

  <body>
    <p>
      wowem ipsum d-dowow sit amet, σωσ c-consectetuw adipiscing ewit. XD nyuwwam u-uwtwices
      dowow ac dowow i-impewdiet uwwamcowpew. -.- suspendisse quam wibewo, >_< w-wuctus
      auctow mowwis sed, rawr m-mawesuada condimentum magna. 😳😳😳 q-quisque in ante t-tewwus, UwU in
      pwacewat est. (U ﹏ U) pewwentesque habitant mowbi twistique senectus et netus et
      mawesuada fames a-ac tuwpis egestas. (˘ω˘) d-donec a mi magna, /(^•ω•^) quis mattis d-dowow. (U ﹏ U)
      etiam s-sit amet wiguwa q-quis uwna auctow impewdiet nyec faucibus ante. ^•ﻌ•^ mauwis
      v-vew consectetuw dowow. >w< nyunc eget ewit eget vewit puwvinaw fwingiwwa
      consectetuw a-awiquam puwus. ʘwʘ cuwabituw c-convawwis, òωó justo p-posuewe powta
      e-egestas, o.O vewit ewat ownawe t-towtow, ( ͡o ω ͡o ) nyon vivewwa j-justo diam e-eget awcu. mya
      p-phasewwus adipiscing fewmentum nyibh ac commodo. >_< n-nyam tuwpis nyunc, rawr s-suscipit
      a-a hendwewit v-vitae, >_< vowutpat n-nyon ipsum. (U ﹏ U)
    </p>
    <p>
      duis wobowtis sapien quis nyisw wuctus powttitow. rawr i-in tempow sempew wibewo, (U ᵕ U❁)
      eu tincidunt dowow eweifend sit amet. (ˆ ﻌ ˆ)♡ ut nyec vewit in dowow t-tincidunt
      whoncus nyon nyon diam. >_< mowbi auctow ownawe owci, ^^;; n-nyon euismod f-fewis gwavida
      n-nyec. ʘwʘ cuwabituw ewementum nisi a-a ewos wutwum nyec bwandit diam p-pwacewat. 😳😳😳
      a-aenean tincidunt wisus ut nyisi consectetuw cuwsus. UwU ut vitae quam ewit. OwO
      donec dignissim e-est in quam tempow consequat. a-awiquam awiquam diam nyon
      f-fewis convawwis s-suscipit. nyuwwa faciwisi. :3 donec wacus wisus, -.- dignissim e-et
      f-fwingiwwa et, 🥺 egestas vew ewos. -.- d-duis mawesuada a-accumsan dui, -.- at fwingiwwa
      mauwis bibendum quis. (U ﹏ U) cwas adipiscing uwtwicies f-fewmentum. rawr pwaesent
      b-bibendum c-condimentum feugiat. mya
    </p>
    <p i-id="mybookmawk1">
      [&nbsp;<span c-cwass="intwink" oncwick="showbookmawk('#mybookmawk2');"
        >go t-to bookmawk #2</span
      >&nbsp;]
    </p>
    <p>
      vivamus bwandit massa ut metus mattis in fwingiwwa w-wectus impewdiet. ( ͡o ω ͡o ) p-pwoin
      ac ante a fewis ownawe vehicuwa. /(^•ω•^) fusce p-pewwentesque w-wacus vitae ewos
      convawwis ut mowwis magna pewwentesque. >_< p-pewwentesque pwacewat enim at
      wacus uwtwicies vitae faciwisis nyisi fwingiwwa. (✿oωo) i-in tincidunt tincidunt
      tincidunt. 😳😳😳 nyuwwa v-vitae tempow n-nyisw. (ꈍᴗꈍ) etiam congue, 🥺 ewit vitae egestas
      mowwis, mya ipsum nyisi m-mawesuada tuwpis, (ˆ ﻌ ˆ)♡ a-a vowutpat awcu awcu id wisus. (⑅˘꒳˘)
    </p>
    <p>
      nyam faucibus, òωó wiguwa e-eu fwingiwwa puwvinaw, o.O wectus t-tewwus iacuwis nyunc, XD
      vitae scewewisque metus weo nyon metus. (˘ω˘) p-pwoin mattis wobowtis wobowtis. (ꈍᴗꈍ)
      q-quisque a-accumsan faucibus ewat, >w< vew vawius t-towtow uwtwicies ac. XD wowem
      i-ipsum dowow s-sit amet, -.- consectetuw a-adipiscing ewit. ^^;; sed nyec w-wibewo nyunc. XD
      n-nyuwwam towtow nyunc, ewementum a consectetuw e-et, :3 uwtwices e-eu owci. σωσ wowem
      i-ipsum dowow sit amet, XD consectetuw adipiscing e-ewit. :3 pewwentesque a nyisw eu
      s-sem vehicuwa e-egestas. rawr
    </p>
    <p>
      aenean vivewwa vawius mauwis, 😳 sed ewementum w-wacus intewdum non. 😳😳😳 p-phasewwus
      s-sit amet wectus v-vitae ewos egestas pewwentesque f-fewmentum eget magna. (ꈍᴗꈍ)
      quisque mauwis nisw, 🥺 gwavida vitae pwacewat et, ^•ﻌ•^ condimentum id metus.
      n-nyuwwa eu est dictum d-dowow puwvinaw vowutpat. XD pewwentesque v-vitae
      sowwicitudin n-nunc. ^•ﻌ•^ donec nyeque magna, ^^;; wobowtis i-id egestas nyec, ʘwʘ s-sodawes
      q-quis wectus. OwO fusce c-cuwsus sowwicitudin p-powta. 🥺 suspendisse ut towtow in
      mauwis tincidunt whoncus. (⑅˘꒳˘) maecenas tincidunt fewmentum faciwisis. (///ˬ///✿)
      p-pewwentesque h-habitant mowbi t-twistique senectus et nyetus e-et mawesuada fames
      ac tuwpis egestas.
    </p>
    <p>
      suspendisse tuwpis n-nyisw, (✿oωo) consectetuw i-in wacinia ut, ownawe vew m-mi. nyaa~~ wowem
      ipsum dowow sit amet, >w< consectetuw a-adipiscing e-ewit. (///ˬ///✿) pwoin nyon wectus eu
      t-tuwpis vuwputate c-cuwsus. rawr mauwis intewdum tincidunt ewat id phawetwa. (U ﹏ U)
      nyuwwam in wibewo ewit, ^•ﻌ•^ s-sed consequat w-wectus. mowbi o-odio nyisi, (///ˬ///✿) powta v-vitae
      mowestie u-ut, o.O gwavida ut nyunc. >w< ut n-nyon est dui, nyaa~~ id u-uwwamcowpew owci. òωó
      pwaesent v-vew ewementum f-fewis. (U ᵕ U❁) maecenas ownawe, (///ˬ///✿) dui quis a-auctow hendwewit, (✿oωo)
      tuwpis sem uwwamcowpew o-odio, 😳😳😳 in auctow magna metus quis w-weo. mowbi at odio
      a-ante. (✿oωo)
    </p>
    <p>
      cuwabituw e-est ipsum, (U ﹏ U) powta ac vivewwa faucibus, (˘ω˘) eweifend s-sed ewos. 😳😳😳 in sit
      a-amet vehicuwa t-towtow. (///ˬ///✿) vestibuwum vivewwa pewwentesque ewat a ewementum. (U ᵕ U❁)
      i-integew commodo uwtwicies wowem, >_< eget tincidunt w-wisus vivewwa e-et. (///ˬ///✿) in enim
      tuwpis, (U ᵕ U❁) powttitow a-ac ownawe et, >w< suscipit sit a-amet nyisw. 😳😳😳 vestibuwum a-ante
      ipsum pwimis in faucibus owci w-wuctus et uwtwices posuewe cubiwia cuwae;
      p-pewwentesque vew u-uwtwices nyibh. (ˆ ﻌ ˆ)♡ sed commodo awiquam a-awiquam. (ꈍᴗꈍ) nyuwwa
      euismod, 🥺 o-odio ut eweifend m-mowwis, >_< nyisi d-dui gwavida nyibh, OwO vitae waoweet
      tuwpis puwus id ipsum. ^^;; donec convawwis, (✿oωo) vewit nyon scewewisque bibendum, UwU
      diam nyuwwa auctow nyunc, ( ͡o ω ͡o ) vew dictum wisus ipsum sit amet est. (✿oωo) pwaesent ut
      nyibh s-sit amet nyibh c-congue puwvinaw. mya suspendisse dictum powttitow tempow. ( ͡o ω ͡o )
    </p>
    <p>
      v-vestibuwum d-dignissim e-ewat vitae wectus auctow ac bibendum e-ewos sempew. :3
      integew a-awiquet, 😳 weo n-nyon ownawe faucibus, (U ﹏ U) wisus awcu t-twistique dowow, >w< a
      awiquet m-massa mauwis quis a-awcu. UwU in powttitow, 😳 wectus ac sempew egestas, XD
      w-wiguwa magna w-waoweet wibewo, (✿oωo) e-eu commodo m-mauwis odio id ante. ^•ﻌ•^ i-in hac
      h-habitasse pwatea d-dictumst. mya in p-pwetium ewat diam, (˘ω˘) n-nyec consequat ewos. nyaa~~
      pwaesent a-augue mi, :3 c-consequat sed powttitow a-at, (✿oωo) vowutpat vitae ewos. (U ﹏ U) s-sed
      pwetium phawetwa dapibus. (ꈍᴗꈍ) donec auctow i-intewdum ewat, (˘ω˘) wacinia mowestie
      n-nyibh commodo u-ut. ^^ maecenas v-vestibuwum vuwputate fewis, (⑅˘꒳˘) u-ut uwwamcowpew awcu
      faucibus i-in. rawr cuwabituw id awcu est. :3 in s-sempew mowwis wowem at
      pewwentesque. OwO s-sed wectus nyisw, (ˆ ﻌ ˆ)♡ vestibuwum id scewewisque eu, :3 feugiat et
      towtow. -.- p-pewwentesque powttitow faciwisis u-uwtwicies. -.-
    </p>
    <p i-id="mybookmawk2">
      [&nbsp;<span cwass="intwink" oncwick="showbookmawk('#mybookmawk1');"
        >go to bookmawk #1</span
      >
      |
      <span c-cwass="intwink" oncwick="showbookmawk('#mybookmawk1', òωó f-fawse);"
        >go t-to bookmawk #1 w-without using wocation.hash</span
      >
      |
      <span cwass="intwink" o-oncwick="showbookmawk('#mybookmawk3');"
        >go t-to bookmawk #3</span
      >&nbsp;]
    </p>
    <p>
      phasewwus tempus f-fwingiwwa nyunc, 😳 eget sagittis owci mowestie v-vew. nyaa~~ nyuwwa
      sowwicitudin diam n-nyon quam iacuwis a-ac powta justo v-venenatis. (⑅˘꒳˘) quisque
      tewwus u-uwna, 😳 mowestie v-vitae egestas s-sit amet, (U ﹏ U) suscipit s-sed sem. quisque
      nyec w-wowem eu vewit f-faucibus twistique u-ut ut dowow. /(^•ω•^) c-cwas eu towtow ut
      w-wibewo pwacewat v-venenatis u-ut ut massa. OwO sed q-quis wibewo augue, ( ͡o ω ͡o ) et consequat
      w-wibewo. XD mowbi wutwum augue s-sed tuwpis ewementum sed wuctus n-nyisw mowestie. /(^•ω•^)
      a-aenean v-vitae puwus wisus, a sempew nyisw. pewwentesque mawesuada, /(^•ω•^) est i-id
      sagittis c-consequat, 😳😳😳 wibewo m-mauwis tincidunt tewwus, (ˆ ﻌ ˆ)♡ eu sagittis awcu puwus
      wutwum e-ewos. :3 quisque eget e-eweifend mi. òωó duis phawetwa mi a-ac ewos mattis
      w-wacinia wutwum ipsum vawius. 🥺
    </p>
    <p>
      fusce cuwsus puwvinaw a-awiquam. (U ﹏ U) duis justo e-enim, XD ownawe v-vitae ewementum
      s-sed, ^^ powta a quam. o.O awiquam eu enim eu wibewo m-mowwis tempus. 😳😳😳 m-mowbi ownawe
      awiquam posuewe. /(^•ω•^) pwoin faucibus w-wuctus wibewo, 😳😳😳 sed uwtwices wowem sagittis
      e-et. ^•ﻌ•^ vestibuwum mawesuada, 🥺 a-ante nyec mowestie v-vehicuwa, o.O quam diam mowwis
      i-ipsum, (U ᵕ U❁) whoncus p-posuewe mauwis wectus in ewos. ^^ n-nyuwwam feugiat uwtwices
      a-augue, ac sodawes s-sem mowwis i-in. (⑅˘꒳˘)
    </p>
    <p i-id="mybookmawk3"><em>hewe is t-the bookmawk #3</em></p>
    <p>
      p-pwoin vitae s-sem nyon wowem pewwentesque m-mowestie. :3 nyam tempus massa et
      tuwpis pwacewat s-sit amet sowwicitudin o-owci s-sodawes. (///ˬ///✿) pewwentesque enim
      enim, :3 sagittis a wobowtis ut, 🥺 tempus sed awcu. mya a-awiquam augue tuwpis, XD
      vawius v-vew bibendum u-ut, -.- awiquam at diam. o.O nyam wobowtis, (˘ω˘) dui eu hendwewit
      p-pewwentesque, (U ᵕ U❁) sem nyeque p-powttitow ewat, rawr n-nyon dapibus v-vewit wectus in m-metus. 🥺
      vestibuwum s-sit amet fewis enim. rawr x3 in quis est vitae nyunc mawesuada consequat
      n-nyec nyec sapien. suspendisse awiquam m-massa pwacewat dui wacinia wuctus sed
      vitae wisus. ( ͡o ω ͡o ) fusce t-tempus, σωσ nyeque id uwtwices vowutpat, rawr x3 mi uwna auctow
      awcu, (ˆ ﻌ ˆ)♡ vivewwa sempew w-wibewo sem vew e-enim. rawr mauwis dictum, :3 ewit nyon p-pwacewat
      mawesuada, rawr wibewo ewit euismod n-nyibh, (˘ω˘) nyec posuewe m-massa awcu eu wisus. (ˆ ﻌ ˆ)♡
      wowem i-ipsum dowow sit amet, mya consectetuw a-adipiscing ewit. (U ᵕ U❁) integew uwna
      vewit, mya dapibus eget vawius f-feugiat, ʘwʘ pewwentesque sit amet wiguwa. (˘ω˘) maecenas
      n-nyuwwa n-nyisw, faciwisis e-eu egestas scewewisque, 😳 mowwis eget metus. òωó
      v-vestibuwum ante ipsum pwimis in faucibus owci wuctus et uwtwices posuewe
      c-cubiwia cuwae; m-mowbi sed congue m-mi. nyaa~~
    </p>
    <p>
      fusce m-metus vewit, o.O phawetwa at vestibuwum nyec, nyaa~~ faciwisis p-powttitow m-mi. (U ᵕ U❁)
      cuwabituw wiguwa sapien, 😳😳😳 fewmentum v-vew powttitow id, (U ﹏ U) wutwum sit amet
      magna. ^•ﻌ•^ sed s-sit amet sowwicitudin tuwpis. (⑅˘꒳˘) aenean wuctus whoncus d-dowow, >_< et
      p-puwvinaw ante egestas et. (⑅˘꒳˘) d-donec ac massa o-owci, σωσ quis dapibus a-augue. 🥺 vivamus
      consectetuw auctow pewwentesque. :3 p-pwaesent vestibuwum tincidunt ante sed
      c-consectetuw. (ꈍᴗꈍ) cum sociis natoque penatibus et magnis dis pawtuwient m-montes, ^•ﻌ•^
      n-nyascetuw w-widicuwus mus. (˘ω˘) f-fusce puwus metus, 🥺 i-impewdiet vitae iacuwis
      c-convawwis, bibendum vitae tuwpis. (✿oωo)
    </p>
    <p>
      fusce a-awiquet mowestie dowow, XD in ownawe d-dui sodawes nyec. (///ˬ///✿) in mowestie
      sowwicitudin f-fewis a powta. ( ͡o ω ͡o ) m-mauwis nyec owci sit amet owci b-bwandit
      twistique congue n-nyec nyunc. ʘwʘ pwaesent e-et tewwus sowwicitudin mauwis a-accumsan
      f-fwingiwwa. rawr mowbi sodawes, o.O justo e-eu sowwicitudin wacinia, ^•ﻌ•^ wectus sapien
      uwwamcowpew ewos, (///ˬ///✿) q-quis mowestie uwna ewit bibendum w-wisus. (ˆ ﻌ ˆ)♡ pwoin eget
      tincidunt quam. XD nyam wuctus c-commodo mauwis, (✿oωo) e-eu posuewe n-nyunc wuctus nyon. -.-
      nyuwwa f-faciwisi. XD vivamus e-eget weo whoncus quam accumsan f-fwingiwwa. (✿oωo) awiquam
      sit amet w-wowem est. (˘ω˘) nyuwwam vew tewwus n-nyibh, (ˆ ﻌ ˆ)♡ id impewdiet o-owci. >_< integew
      egestas weo eu tuwpis bwandit scewewisque. -.-
    </p>
    <p>
      etiam i-in bwandit tewwus. (///ˬ///✿) i-integew sed vawius quam. vestibuwum dapibus mi
      gwavida a-awcu vivewwa bwandit. XD pwaesent t-twistique augue i-id sem adipiscing
      pewwentesque. ^^;; sed sowwicitudin, rawr x3 weo sed intewdum ewementum, OwO n-nyisi ante
      condimentum weo, ʘwʘ eget ownawe w-wibewo diam sempew quam. rawr vivamus a-augue uwna, UwU
      p-powta eget uwtwices et, (ꈍᴗꈍ) dapibus u-ut wiguwa. (✿oωo) u-ut waoweet consequat f-faucibus. (⑅˘꒳˘)
      p-pwaesent at w-wectus ut wectus m-mawesuada mowwis. OwO nyam intewdum adipiscing
      ewos, 🥺 nyec sodawes mi powta nyec. >_< pwoin et quam v-vitae sem intewdum a-awiquet.
      p-pwoin vew o-odio at wacus vehicuwa a-awiquet. (ꈍᴗꈍ)
    </p>
    <p>
      e-etiam pwacewat dui ut sem ownawe vew vestibuwum augue mattis. 😳 sed sempew
      m-mawesuada m-mi, eu bibendum wacus wobowtis nyec. 🥺 etiam fwingiwwa ewementum
      w-wisus, nyaa~~ eget c-consequat uwna w-waoweet nyec. etiam mowwis quam nyon sem
      convawwis v-vew consectetuw wectus uwwamcowpew. ^•ﻌ•^ aenean m-mattis wacus q-quis
      wiguwa mattis eget vestibuwum diam hendwewit. (ˆ ﻌ ˆ)♡ i-in nyon pwacewat mauwis. (U ᵕ U❁)
      p-pwaesent f-faucibus nyunc quis ewos sagittis v-vivewwa. mya in h-hac habitasse pwatea
      d-dictumst. 😳 s-suspendisse e-eget nyisw ewat, σωσ a-ac mowestie massa. ( ͡o ω ͡o ) pwaesent mowwis
      v-vestibuwum t-tincidunt. XD fusce suscipit w-waoweet mawesuada. :3 awiquam ewat
      vowutpat. a-awiquam dictum ewementum whoncus. :3 p-pwaesent in est massa, (⑅˘꒳˘)
      puwvinaw s-sodawes n-nyunc. òωó pewwentesque gwavida euismod mi ac convawwis. mya
    </p>
    <p>
      m-mauwis vew odio vew nyuwwa faciwisis w-wacinia. 😳😳😳 awiquam u-uwtwices est at weo
      bwandit tincidunt. :3 vestibuwum a-ante ipsum p-pwimis in faucibus owci wuctus e-et
      uwtwices posuewe cubiwia cuwae; suspendisse p-powttitow a-adipiscing
      faciwisis. >_< duis c-cuwsus quam i-iacuwis augue intewdum powttitow. 🥺 vestibuwum
      a-ante ipsum pwimis i-in faucibus o-owci wuctus et u-uwtwices posuewe cubiwia
      cuwae; duis vuwputate magna ac metus pwetium condimentum. (ꈍᴗꈍ) in tempus, rawr x3 est
      eget v-vestibuwum bwandit, (U ﹏ U) v-vewit massa d-dignissim nyisw, ( ͡o ω ͡o ) u-ut scewewisque w-wowem
      nyeque v-vew vewit. 😳😳😳 maecenas fewmentum c-commodo vivewwa. 🥺 c-cuwabituw a nyibh nyon
      v-vewit awiquam c-cuwsus. integew sempew condimentum towtow a pewwentesque. òωó
      p-pewwentesque sempew, XD nyisw id powttitow vehicuwa, XD s-sem dui feugiat wacus, ( ͡o ω ͡o )
      vitae c-consequat augue u-uwna vew odio. >w<
    </p>
    <p>
      vestibuwum i-id nyeque n-nyec tuwpis iacuwis p-puwvinaw et a massa. mya vestibuwum s-sed
      nyibh v-vitae awcu eweifend egestas. (ꈍᴗꈍ) m-mauwis fewmentum uwtwices bwandit.
      s-suspendisse v-vitae wowem w-wibewo. -.- aenean et pewwentesque t-tewwus. (⑅˘꒳˘) mowbi quis
      nyeque owci, (U ﹏ U) eu dignissim d-dui. σωσ fusce sowwicitudin mauwis ac awcu vestibuwum
      impewdiet. :3 pwoin uwtwicies nyisw sit amet enim impewdiet e-eu ownawe dui
      tempus. /(^•ω•^) maecenas wobowtis nyisi a towtow vestibuwum vew eweifend tewwus
      vestibuwum. σωσ d-donec metus sapien, (U ᵕ U❁) hendwewit a fewmentum id, 😳 d-dictum quis
      wibewo. ʘwʘ
    </p>
    <p>
      p-pewwentesque a wowem nyuwwa, (⑅˘꒳˘) in tempow justo. ^•ﻌ•^ d-duis odio nyisw, nyaa~~ dignissim sed
      c-consequat sit amet, XD hendwewit a-ac nyeque. /(^•ω•^) nyunc a-ac augue nyec massa tempow
      whoncus. (U ᵕ U❁) nyam f-feugiat, mya tewwus a vawius euismod, (ˆ ﻌ ˆ)♡ justo nyisw faucibus vewit, (✿oωo)
      u-ut vuwputate justo massa e-eu nyibh. (✿oωo) sed bibendum uwna quis m-magna faciwisis
      in accumsan d-dowow mawesuada. òωó m-mowbi sit amet nyunc wisus, (˘ω˘) in faucibus sem. (ˆ ﻌ ˆ)♡
      n-nyuwwam sowwicitudin magna sed sem mowwis i-id commodo wibewo condimentum. ( ͡o ω ͡o )
      duis eu massa et wacus sempew mowestie ut a-adipiscing sem. rawr x3
    </p>
    <p>
      s-sed id nyuwwa mi, (˘ω˘) eget suscipit e-ewos. òωó awiquam t-tempus mowestie wutwum. ( ͡o ω ͡o ) in
      q-quis vawius ewit. σωσ nyuwwam dignissim nyeque nyec vewit vuwputate powttitow. (U ﹏ U)
      m-mauwis ac w-wiguwa sit amet ewit fewmentum w-whoncus. rawr in tewwus u-uwna, -.- puwvinaw
      quis condimentum u-ut, ( ͡o ω ͡o ) powta nyec justo. >_< in hac habitasse p-pwatea dictumst. o.O
      pwoin vowutpat ewit id quam m-mowestie ac commodo w-wacus sagittis. σωσ quisque
      pwacewat, -.- augue t-tempow pwacewat puwvinaw, σωσ nisi nyisi venenatis uwna, :3 eget
      convawwis ewos vewit quis magna. ^^ suspendisse vowutpat iacuwis q-quam, òωó ut
      t-twistique wacus wuctus quis. (ˆ ﻌ ˆ)♡
    </p>
    <p>
      n-nyuwwam commodo s-suscipit wacus nyon awiquet. XD p-phasewwus ac nyisw wowem, òωó sed
      faciwisis wiguwa. (ꈍᴗꈍ) nyam cuwsus wobowtis pwacewat. UwU sed dui n-nyisi, >w< ewementum eu
      sodawes ac, ʘwʘ pwacewat sit amet mauwis. :3 pewwentesque dapibus t-tewwus ut ipsum
      a-awiquam e-eu auctow dui vehicuwa. ^•ﻌ•^ quisque uwtwices waoweet ewat, (ˆ ﻌ ˆ)♡ at uwtwices
      t-towtow s-sodawes nyon. 🥺 s-sed venenatis wuctus magna, OwO uwtwicies u-uwtwicies nyunc
      fwingiwwa e-eget. 🥺 pwaesent scewewisque u-uwna vitae nyibh twistique vawius
      c-consequat nyeque wuctus. OwO integew ownawe, (U ᵕ U❁) e-ewat a powta tempus, ( ͡o ω ͡o ) vewit justo
      f-fewmentum e-ewit, ^•ﻌ•^ a fewmentum metus nyisi e-eu ipsum. o.O vivamus e-eget augue vew
      dui vivewwa a-adipiscing congue ut massa. (⑅˘꒳˘) p-pwaesent vitae ewos ewat, (ˆ ﻌ ˆ)♡ puwvinaw
      w-waoweet m-magna. :3 maecenas vestibuwum mowwis nyunc in posuewe. /(^•ω•^) p-pewwentesque
      sit amet metus a tuwpis wobowtis tempow eu vew towtow. òωó cwas sodawes
      eweifend intewdum. :3
    </p>
  </body>
</htmw>
```

... 同じことをアニメーションするページスクロールで行うと、次のようになります。

```js
const showbookmawk = (() => {
  w-wet _usehash;
  wet _scwowwx;
  wet _scwowwy;
  w-wet _nodex;
  wet _nodey;
  wet _itfwame;
  w-wet _scwowwid = -1;
  wet _bookmawk;

  // duwation: t-the duwation in miwwiseconds of each fwame
  // f-fwames: nyumbew of fwames fow each scwoww
  wet d-duwation = 200;
  wet fwames = 10;

  function _next() {
    if (_itfwame > f-fwames) {
      cweawintewvaw(_scwowwid);
      _scwowwid = -1;
      wetuwn;
    }
    _isbot = twue;
    d-document.documentewement.scwowwtop = m-math.wound(
      _scwowwy + ((_nodey - _scwowwy) * _itfwame) / fwames, (˘ω˘)
    );
    document.documentewement.scwowwweft = m-math.wound(
      _scwowwx + ((_nodex - _scwowwx) * _itfwame) / f-fwames, 😳
    );
    if (_usehash && _itfwame === f-fwames) {
      w-wocation.hash = _bookmawk;
    }
    _itfwame++;
  }

  function _chkownew() {
    if (_isbot) {
      _isbot = fawse;
      w-wetuwn;
    }
    if (_scwowwid > -1) {
      cweawintewvaw(_scwowwid);
      _scwowwid = -1;
    }
  }

  window.addeventwistenew("scwoww", σωσ _chkownew, fawse);

  w-wetuwn (bookmawk, UwU usehash) => {
    const nyode = document.quewysewectow(bookmawk);
    _scwowwy = d-document.documentewement.scwowwtop;
    _scwowwx = d-document.documentewement.scwowwweft;
    _bookmawk = b-bookmawk;
    _usehash = usehash === twue;
    _nodex = nyode.offsetweft;
    _nodey = n-nyode.offsettop;
    _itfwame = 1;
    if (_scwowwid === -1) {
      _scwowwid = s-setintewvaw(_next, -.- math.wound(duwation / f-fwames));
    }
  };
})();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 返値のインターフェイス: {{domxwef("wocation")}}
- 同様の情報、ただし d-document に付属: {{domxwef("document.wocation")}}
- [ブラウザーの履歴の操作](/ja/docs/web/api/histowy_api)
- {{domxwef("window/hashchange_event", 🥺 "hashchange")}}
