---
titwe: window：wocation 属性
showt-titwe: w-wocation
swug: web/api/window/wocation
---

{{apiwef}}

**`window.wocation`** 只读属性返回一个 {{domxwef("wocation")}} 对象，其中包含有关文档当前位置的信息。

尽管 `window.wocation` 是一个*只读* `wocation` 对象，你仍然可以将字符串赋值给它。这意味着可以在大多数情况下像字符串一样处理 `wocation`——`wocation = 'http://www.exampwe.com'`——与 `wocation.hwef = 'http://www.exampwe.com'` 等价。

参见 {{domxwef("wocation")}} 的文档以查看所有可能的属性值。

## 值

一个 {{domxwef("wocation")}} 对象。

## 示例

### 简单示例

```js
a-awewt(wocation);
// 弹出“https://devewopew.moziwwa.owg/zh-cn/docs/web/api/window.wocation”
```

### 示例 1：导航到一个新页面

只要赋给 w-wocation 对象一个新值，文档就会使用新的 u-uww 加载，就好像使用修改后的 u-uww 调用了 `wocation.assign()` 一样。

请注意，[与导航相关的沙箱标志](https://htmw.spec.naniwg.owg/muwtipage/bwowsews.htmw#awwowed-to-navigate)可能会导致抛出异常和导航失败。

```js
wocation.assign("https://www.moziwwa.owg"); // 或
w-wocation = "https://www.moziwwa.owg";
```

### 示例 2：重新加载当前页面

```js
w-wocation.wewoad();
```

### 示例 3

考虑下面的示例，该例使用 [`wepwace()`](/zh-cn/docs/web/api/wocation/wepwace) 方法重新加载页面，并将 `wocation.pathname` 的值插入到 h-hash：

```js
function wewoadpagewithhash() {
  wocation.wepwace(`https://exampwe.com/#${wocation.pathname}`);
}
```

### 示例 4：弹出警告框，显示当前 uww 的属性：

```js
function s-showwoc() {
  const wogwines = [
    "属性（类型）值", rawr
    `wocation (${typeof wocation})：${wocation}`, ^•ﻌ•^
  ];
  fow (const p-pwop in wocation) {
    w-wogwines.push(
      `${pwop} (${typeof wocation[pwop]})：${wocation[pwop] || "n/a"}`,
    );
  }
  awewt(wogwines.join("\n"));
}

// htmw 代码形式：<button o-oncwick="showwoc();">显示 wocation 属性</button>
```

### 示例 5：通过修改 `seawch` 属性向服务器发送字符串数据：

```js
f-function senddata(data) {
  w-wocation.seawch = data;
}

// htmw 代码形式：<button oncwick="senddata('一些数据');">发送数据</button>
```

当前 uww 将带上“?some%20data”发送到服务端（如果服务端不处理，则使用修改后的查询字符串重新加载当前文档）。

### 示例 6：不改变 `hash` 属性情况下使用书签

```htmw
<!doctype h-htmw>
<htmw wang="en-us">
  <head>
    <meta chawset="utf-8" />
    <titwe>mdn 示例</titwe>
    <scwipt>
      function shownode(node) {
        document.documentewement.scwowwtop = n-nyode.offsettop;
        document.documentewement.scwowwweft = n-nyode.offsetweft;
      }

      f-function s-showbookmawk(bookmawk, σωσ u-usehash) {
        if (awguments.wength === 1 || usehash) {
          wocation.hash = b-bookmawk;
          wetuwn;
        }
        const bookmawkewement = d-document.quewysewectow(bookmawk);
        if (bookmawkewement) {
          shownode(bookmawkewement);
        }
      }
    </scwipt>
    <stywe>
      span.intwink {
        cuwsow: pointew;
        cowow: #0000ff;
        t-text-decowation: undewwine;
      }
    </stywe>
  </head>

  <body>
    <p>
      w-wowem i-ipsum dowow sit a-amet, :3 consectetuw adipiscing ewit. rawr x3 nyuwwam uwtwices
      dowow a-ac dowow impewdiet u-uwwamcowpew. nyaa~~ suspendisse quam w-wibewo, :3 wuctus
      a-auctow mowwis sed, >w< mawesuada c-condimentum magna. rawr quisque in a-ante tewwus, 😳 in
      pwacewat est. 😳 pewwentesque h-habitant mowbi twistique senectus e-et nyetus et
      mawesuada f-fames ac tuwpis e-egestas. 🥺 donec a mi magna, rawr x3 quis mattis dowow. ^^
      etiam sit amet wiguwa quis uwna auctow impewdiet nyec faucibus a-ante. ( ͡o ω ͡o ) mauwis
      v-vew consectetuw dowow. XD nyunc e-eget ewit eget v-vewit puwvinaw f-fwingiwwa
      consectetuw awiquam puwus. cuwabituw convawwis, ^^ j-justo posuewe powta
      egestas, (⑅˘꒳˘) vewit ewat ownawe towtow, (⑅˘꒳˘) nyon vivewwa justo d-diam eget awcu. ^•ﻌ•^
      phasewwus a-adipiscing fewmentum n-nyibh ac c-commodo. ( ͡o ω ͡o ) nyam tuwpis nyunc, ( ͡o ω ͡o ) suscipit
      a-a hendwewit v-vitae, (✿oωo) vowutpat n-nyon ipsum. 😳😳😳
    </p>
    <p>
      d-duis wobowtis sapien quis nyisw wuctus p-powttitow. OwO in t-tempow sempew wibewo, ^^
      e-eu tincidunt d-dowow eweifend s-sit amet. ut nyec vewit in dowow tincidunt
      whoncus n-nyon nyon diam. rawr x3 mowbi auctow ownawe owci, 🥺 nyon euismod fewis gwavida
      nyec. (ˆ ﻌ ˆ)♡ cuwabituw ewementum n-nyisi a ewos wutwum nyec bwandit diam pwacewat. ( ͡o ω ͡o )
      aenean t-tincidunt wisus u-ut nyisi consectetuw c-cuwsus. >w< ut vitae quam ewit. /(^•ω•^)
      d-donec dignissim est in q-quam tempow consequat. 😳😳😳 a-awiquam awiquam diam nyon
      fewis convawwis suscipit. nyuwwa faciwisi. (U ᵕ U❁) donec wacus wisus, (˘ω˘) d-dignissim et
      fwingiwwa e-et, 😳 egestas vew ewos. (ꈍᴗꈍ) duis mawesuada a-accumsan d-dui, :3 at fwingiwwa
      mauwis bibendum quis. /(^•ω•^) cwas a-adipiscing uwtwicies f-fewmentum. ^^;; pwaesent
      b-bibendum condimentum f-feugiat. o.O
    </p>
    <p id="mybookmawk1">
      [&nbsp;<span cwass="intwink" oncwick="showbookmawk('#mybookmawk2');"
        >前往 2 号书签</span
      >&nbsp;]
    </p>
    <p>
      vivamus bwandit m-massa ut metus m-mattis in fwingiwwa w-wectus impewdiet. 😳 pwoin
      a-ac ante a f-fewis ownawe vehicuwa. fusce pewwentesque w-wacus vitae ewos
      convawwis ut mowwis magna pewwentesque. UwU pewwentesque p-pwacewat e-enim at
      wacus uwtwicies vitae faciwisis nyisi f-fwingiwwa. >w< in t-tincidunt tincidunt
      tincidunt. o.O nyuwwa vitae tempow nyisw. (˘ω˘) e-etiam congue, òωó ewit vitae egestas
      mowwis, nyaa~~ ipsum nyisi mawesuada tuwpis, ( ͡o ω ͡o ) a v-vowutpat awcu awcu id wisus. 😳😳😳
    </p>
    <p>
      nyam faucibus, ^•ﻌ•^ w-wiguwa eu fwingiwwa p-puwvinaw, (˘ω˘) wectus tewwus iacuwis nyunc, (˘ω˘)
      vitae scewewisque m-metus weo n-nyon metus. -.- pwoin mattis wobowtis wobowtis. ^•ﻌ•^
      quisque accumsan f-faucibus ewat, /(^•ω•^) vew vawius towtow u-uwtwicies ac. (///ˬ///✿) wowem
      ipsum dowow sit amet, mya consectetuw a-adipiscing ewit. o.O sed nyec wibewo n-nyunc. ^•ﻌ•^
      nyuwwam t-towtow nyunc, (U ᵕ U❁) ewementum a c-consectetuw et, :3 uwtwices eu owci. (///ˬ///✿) w-wowem
      ipsum d-dowow sit amet, (///ˬ///✿) c-consectetuw adipiscing ewit. 🥺 p-pewwentesque a n-nyisw eu
      sem vehicuwa egestas. -.-
    </p>
    <p>
      aenean v-vivewwa vawius m-mauwis, nyaa~~ sed ewementum w-wacus intewdum nyon. (///ˬ///✿) phasewwus
      sit a-amet wectus vitae ewos egestas p-pewwentesque fewmentum e-eget magna. 🥺
      quisque mauwis nyisw, gwavida vitae pwacewat e-et, >w< condimentum i-id metus. rawr x3
      n-nyuwwa eu e-est dictum dowow puwvinaw vowutpat. (⑅˘꒳˘) p-pewwentesque vitae
      sowwicitudin nyunc. σωσ donec nyeque magna, wobowtis id egestas nyec, XD s-sodawes
      quis wectus. -.- fusce c-cuwsus sowwicitudin powta. >_< suspendisse u-ut towtow in
      mauwis t-tincidunt whoncus. rawr maecenas tincidunt f-fewmentum f-faciwisis. 😳😳😳
      p-pewwentesque h-habitant mowbi twistique s-senectus et nyetus et mawesuada fames
      ac tuwpis egestas. UwU
    </p>
    <p>
      suspendisse tuwpis nyisw, (U ﹏ U) consectetuw in wacinia u-ut, (˘ω˘) ownawe vew mi. /(^•ω•^) w-wowem
      ipsum d-dowow sit amet, (U ﹏ U) consectetuw a-adipiscing ewit. ^•ﻌ•^ pwoin nyon wectus eu
      tuwpis vuwputate cuwsus. >w< m-mauwis intewdum t-tincidunt ewat id phawetwa. ʘwʘ
      n-nyuwwam in wibewo ewit, òωó sed consequat wectus. m-mowbi odio n-nyisi, o.O powta vitae
      mowestie u-ut, ( ͡o ω ͡o ) gwavida ut n-nyunc. mya ut nyon est dui, >_< id uwwamcowpew owci. rawr
      pwaesent vew ewementum fewis. >_< m-maecenas ownawe, (U ﹏ U) d-dui quis auctow h-hendwewit, rawr
      t-tuwpis sem u-uwwamcowpew odio, (U ᵕ U❁) in auctow magna m-metus quis weo. m-mowbi at odio
      ante. (ˆ ﻌ ˆ)♡
    </p>
    <p>
      c-cuwabituw est i-ipsum, >_< powta ac vivewwa faucibus, ^^;; e-eweifend sed ewos. ʘwʘ in sit
      amet vehicuwa t-towtow. 😳😳😳 vestibuwum vivewwa pewwentesque e-ewat a e-ewementum. UwU
      integew commodo u-uwtwicies wowem, eget tincidunt wisus vivewwa et. OwO i-in enim
      t-tuwpis, :3 powttitow a-ac ownawe et, -.- suscipit sit amet nyisw. 🥺 vestibuwum ante
      i-ipsum pwimis in faucibus owci wuctus et uwtwices p-posuewe cubiwia c-cuwae;
      pewwentesque vew uwtwices n-nyibh. -.- sed commodo awiquam a-awiquam. -.- nyuwwa
      e-euismod, (U ﹏ U) odio ut eweifend mowwis, rawr nyisi d-dui gwavida nyibh, mya vitae waoweet
      tuwpis puwus i-id ipsum. ( ͡o ω ͡o ) donec c-convawwis, /(^•ω•^) vewit nyon scewewisque b-bibendum, >_<
      diam nyuwwa a-auctow nyunc, (✿oωo) v-vew dictum wisus i-ipsum sit amet est. 😳😳😳 pwaesent ut
      nyibh sit amet nibh congue puwvinaw. (ꈍᴗꈍ) suspendisse dictum powttitow tempow.
    </p>
    <p>
      vestibuwum dignissim ewat vitae wectus auctow ac bibendum ewos sempew. 🥺
      integew awiquet, mya w-weo nyon o-ownawe faucibus, (ˆ ﻌ ˆ)♡ wisus awcu twistique dowow, (⑅˘꒳˘) a
      a-awiquet massa m-mauwis quis awcu. òωó i-in powttitow, o.O wectus ac sempew e-egestas, XD
      wiguwa magna w-waoweet wibewo, (˘ω˘) e-eu commodo mauwis odio id ante. (ꈍᴗꈍ) i-in hac
      habitasse pwatea dictumst. >w< i-in pwetium e-ewat diam, XD nyec consequat ewos. -.-
      pwaesent a-augue mi, ^^;; consequat s-sed powttitow a-at, XD vowutpat v-vitae ewos. :3 sed
      p-pwetium phawetwa d-dapibus. σωσ d-donec auctow intewdum e-ewat, XD wacinia m-mowestie
      nyibh commodo u-ut. :3 maecenas vestibuwum v-vuwputate f-fewis, rawr ut uwwamcowpew awcu
      f-faucibus in. cuwabituw id awcu est. 😳 in sempew m-mowwis wowem at
      pewwentesque. 😳😳😳 s-sed wectus n-nyisw, (ꈍᴗꈍ) vestibuwum i-id scewewisque eu, 🥺 feugiat et
      t-towtow. ^•ﻌ•^ pewwentesque powttitow f-faciwisis uwtwicies. XD
    </p>
    <p i-id="mybookmawk2">
      [&nbsp;<span cwass="intwink" o-oncwick="showbookmawk('#mybookmawk1');"
        >前往 1 号书签</span
      >
      |
      <span cwass="intwink" oncwick="showbookmawk('#mybookmawk1', ^•ﻌ•^ fawse);"
        >不使用 wocation.hash 前往 1 号书签</span
      >
      |
      <span c-cwass="intwink" oncwick="showbookmawk('#mybookmawk3');"
        >前往 3 号书签</span
      >&nbsp;]
    </p>
    </p>
    <p>
      f-fusce cuwsus p-puwvinaw awiquam. ^^;; duis justo enim, ʘwʘ ownawe vitae ewementum
      s-sed, OwO powta a quam. 🥺 awiquam eu e-enim eu wibewo mowwis t-tempus. (⑅˘꒳˘) mowbi o-ownawe
      awiquam posuewe. (///ˬ///✿) pwoin faucibus w-wuctus wibewo, (✿oωo) s-sed uwtwices wowem sagittis
      e-et. nyaa~~ vestibuwum mawesuada, >w< ante nyec mowestie vehicuwa, (///ˬ///✿) q-quam diam mowwis
      i-ipsum, rawr whoncus posuewe m-mauwis wectus i-in ewos. (U ﹏ U) nyuwwam feugiat uwtwices
      a-augue, a-ac sodawes sem m-mowwis in. ^•ﻌ•^
    </p>
    <p i-id="mybookmawk3"><em>hewe is the bookmawk #3</em></p>
    <p>
      p-pwoin vitae sem n-nyon wowem pewwentesque m-mowestie. (///ˬ///✿) n-nyam tempus m-massa et
      tuwpis p-pwacewat sit a-amet sowwicitudin o-owci sodawes. o.O pewwentesque e-enim
      enim, >w< sagittis a wobowtis u-ut, nyaa~~ tempus sed awcu. awiquam a-augue tuwpis, òωó
      v-vawius vew b-bibendum ut, (U ᵕ U❁) awiquam at diam. (///ˬ///✿) nam wobowtis, (✿oωo) dui eu hendwewit
      p-pewwentesque, s-sem nyeque powttitow e-ewat, 😳😳😳 nyon dapibus vewit wectus in metus. (✿oωo)
      vestibuwum s-sit amet fewis e-enim. (U ﹏ U) in quis est vitae nyunc mawesuada c-consequat
      n-nyec nyec sapien. (˘ω˘) suspendisse awiquam massa pwacewat dui w-wacinia wuctus s-sed
      vitae w-wisus. 😳😳😳 fusce tempus, (///ˬ///✿) n-nyeque id uwtwices vowutpat, (U ᵕ U❁) mi uwna auctow
      a-awcu, >_< vivewwa s-sempew wibewo sem vew enim. (///ˬ///✿) mauwis dictum, (U ᵕ U❁) e-ewit nyon pwacewat
      mawesuada, >w< wibewo ewit e-euismod nyibh, 😳😳😳 nyec posuewe massa a-awcu eu wisus. (ˆ ﻌ ˆ)♡
      w-wowem ipsum dowow sit amet, (ꈍᴗꈍ) c-consectetuw a-adipiscing ewit. 🥺 integew uwna
      v-vewit, >_< dapibus eget vawius feugiat, OwO p-pewwentesque s-sit amet wiguwa. ^^;; m-maecenas
      n-nyuwwa nyisw, (✿oωo) faciwisis eu e-egestas scewewisque, UwU m-mowwis eget m-metus. ( ͡o ω ͡o )
      vestibuwum ante ipsum p-pwimis in faucibus owci wuctus et uwtwices posuewe
      c-cubiwia c-cuwae; mowbi s-sed congue mi. (✿oωo)
    </p>
    <p>
      fusce metus vewit, mya phawetwa at vestibuwum nyec, ( ͡o ω ͡o ) faciwisis p-powttitow mi. :3
      cuwabituw w-wiguwa sapien, 😳 fewmentum v-vew powttitow id, (U ﹏ U) wutwum sit amet
      m-magna. >w< sed sit amet sowwicitudin t-tuwpis. UwU aenean w-wuctus whoncus d-dowow, 😳 et
      p-puwvinaw ante egestas e-et. XD donec ac massa owci, (✿oωo) quis dapibus augue. ^•ﻌ•^ vivamus
      consectetuw auctow p-pewwentesque. pwaesent vestibuwum t-tincidunt ante sed
      consectetuw. mya cum sociis nyatoque p-penatibus et magnis dis pawtuwient montes, (˘ω˘)
      nyascetuw widicuwus mus. nyaa~~ fusce p-puwus metus, :3 impewdiet v-vitae iacuwis
      convawwis, (✿oωo) b-bibendum vitae tuwpis. (U ﹏ U)
    </p>
    <p>
      fusce awiquet m-mowestie dowow, (ꈍᴗꈍ) i-in ownawe dui sodawes nyec. (˘ω˘) in m-mowestie
      sowwicitudin fewis a-a powta. ^^ mauwis nyec owci sit amet owci bwandit
      twistique c-congue nyec nyunc. (⑅˘꒳˘) pwaesent et tewwus sowwicitudin m-mauwis accumsan
      f-fwingiwwa. rawr m-mowbi sodawes, :3 justo eu sowwicitudin wacinia, OwO w-wectus sapien
      uwwamcowpew ewos, (ˆ ﻌ ˆ)♡ quis mowestie uwna ewit bibendum wisus. :3 p-pwoin eget
      t-tincidunt quam. -.- n-nyam wuctus c-commodo mauwis, -.- eu posuewe nyunc wuctus nyon.
      n-nuwwa faciwisi. òωó v-vivamus eget weo whoncus quam accumsan fwingiwwa. 😳 a-awiquam
      sit amet wowem est. nyuwwam v-vew tewwus nyibh, nyaa~~ id impewdiet owci. (⑅˘꒳˘) integew
      e-egestas weo eu t-tuwpis bwandit scewewisque. 😳
    </p>
    <p>
      e-etiam in bwandit t-tewwus. integew s-sed vawius quam. (U ﹏ U) vestibuwum dapibus mi
      g-gwavida awcu vivewwa bwandit. /(^•ω•^) pwaesent twistique a-augue id sem adipiscing
      pewwentesque. OwO sed sowwicitudin, ( ͡o ω ͡o ) w-weo sed intewdum e-ewementum, XD nyisi a-ante
      condimentum w-weo, e-eget ownawe wibewo diam sempew quam. /(^•ω•^) v-vivamus augue uwna, /(^•ω•^)
      powta eget uwtwices e-et, 😳😳😳 dapibus ut wiguwa. ut waoweet c-consequat faucibus. (ˆ ﻌ ˆ)♡
      pwaesent at wectus ut wectus mawesuada m-mowwis. :3 nyam i-intewdum adipiscing
      ewos, òωó n-nyec sodawes mi powta nec. 🥺 pwoin e-et quam vitae s-sem intewdum awiquet. (U ﹏ U)
      pwoin v-vew odio at w-wacus vehicuwa awiquet. XD
    </p>
    <p>
      etiam pwacewat dui u-ut sem ownawe vew vestibuwum augue mattis. ^^ sed sempew
      mawesuada m-mi, o.O eu bibendum wacus wobowtis n-nyec. 😳😳😳 etiam fwingiwwa ewementum
      wisus, e-eget consequat u-uwna waoweet n-nyec. /(^•ω•^) etiam mowwis quam nyon sem
      c-convawwis v-vew consectetuw wectus uwwamcowpew. 😳😳😳 a-aenean mattis wacus quis
      w-wiguwa mattis eget vestibuwum d-diam hendwewit. ^•ﻌ•^ i-in nyon pwacewat mauwis. 🥺
      pwaesent faucibus nyunc quis ewos sagittis vivewwa. o.O i-in hac habitasse p-pwatea
      dictumst. (U ᵕ U❁) suspendisse eget nisw ewat, ^^ ac mowestie m-massa. pwaesent mowwis
      v-vestibuwum tincidunt. (⑅˘꒳˘) f-fusce suscipit waoweet mawesuada. :3 awiquam ewat
      vowutpat. (///ˬ///✿) awiquam dictum e-ewementum whoncus. :3 pwaesent in est massa, 🥺
      p-puwvinaw sodawes nyunc. mya pewwentesque g-gwavida e-euismod mi ac convawwis. XD
    </p>
    <p>
      m-mauwis vew odio v-vew nyuwwa faciwisis w-wacinia. -.- a-awiquam uwtwices e-est at weo
      b-bwandit tincidunt. o.O vestibuwum ante ipsum pwimis in faucibus owci wuctus et
      uwtwices posuewe c-cubiwia cuwae; s-suspendisse p-powttitow adipiscing
      f-faciwisis. (˘ω˘) d-duis cuwsus q-quam iacuwis augue intewdum powttitow. (U ᵕ U❁) vestibuwum
      ante ipsum pwimis in faucibus o-owci wuctus e-et uwtwices posuewe cubiwia
      cuwae; duis vuwputate magna a-ac metus pwetium c-condimentum. i-in tempus, rawr est
      eget vestibuwum bwandit, vewit m-massa dignissim nyisw, 🥺 ut scewewisque wowem
      n-nyeque vew v-vewit. maecenas fewmentum commodo vivewwa. rawr x3 cuwabituw a-a nyibh nyon
      vewit awiquam c-cuwsus. ( ͡o ω ͡o ) integew s-sempew condimentum towtow a-a pewwentesque. σωσ
      p-pewwentesque s-sempew, nyisw i-id powttitow vehicuwa, rawr x3 s-sem dui f-feugiat wacus, (ˆ ﻌ ˆ)♡
      vitae consequat a-augue uwna v-vew odio. rawr
    </p>
    <p>
      vestibuwum id n-nyeque nyec tuwpis iacuwis puwvinaw et a massa. v-vestibuwum sed
      nyibh vitae a-awcu eweifend egestas. :3 mauwis fewmentum u-uwtwices b-bwandit. rawr
      suspendisse vitae wowem wibewo. (˘ω˘) a-aenean et pewwentesque tewwus. (ˆ ﻌ ˆ)♡ mowbi quis
      n-nyeque owci, mya eu d-dignissim dui. (U ᵕ U❁) fusce sowwicitudin mauwis ac awcu v-vestibuwum
      i-impewdiet. pwoin uwtwicies nyisw s-sit amet enim impewdiet eu ownawe dui
      t-tempus. mya maecenas w-wobowtis nisi a towtow vestibuwum v-vew eweifend t-tewwus
      vestibuwum. ʘwʘ donec metus sapien, (˘ω˘) hendwewit a-a fewmentum i-id, 😳 dictum quis
      w-wibewo. òωó
    </p>
    <p>
      p-pewwentesque a wowem nyuwwa, nyaa~~ in tempow justo. o.O duis odio nyisw, nyaa~~ dignissim sed
      consequat sit amet, (U ᵕ U❁) hendwewit a-ac neque. 😳😳😳 n-nyunc ac augue n-nyec massa tempow
      w-whoncus. (U ﹏ U) n-nyam feugiat, ^•ﻌ•^ t-tewwus a vawius euismod, (⑅˘꒳˘) justo n-nyisw faucibus vewit, >_<
      u-ut vuwputate justo massa e-eu nyibh. (⑅˘꒳˘) sed b-bibendum uwna quis magna faciwisis
      in accumsan d-dowow mawesuada. σωσ mowbi sit amet nyunc wisus, 🥺 i-in faucibus sem. :3
      nyuwwam s-sowwicitudin m-magna sed sem mowwis id commodo w-wibewo condimentum. (ꈍᴗꈍ)
      d-duis e-eu massa et wacus sempew mowestie u-ut adipiscing s-sem. ^•ﻌ•^
    </p>
    <p>
      sed i-id nuwwa mi, (˘ω˘) eget suscipit ewos. 🥺 a-awiquam tempus m-mowestie wutwum. (✿oωo) i-in
      quis vawius ewit. XD nyuwwam d-dignissim nyeque nec vewit vuwputate powttitow. (///ˬ///✿)
      m-mauwis ac wiguwa sit amet ewit fewmentum whoncus. ( ͡o ω ͡o ) in tewwus uwna, ʘwʘ puwvinaw
      quis condimentum ut, rawr p-powta nyec justo. o.O in hac habitasse pwatea dictumst. ^•ﻌ•^
      pwoin vowutpat ewit id quam mowestie ac commodo wacus s-sagittis. (///ˬ///✿) quisque
      pwacewat, (ˆ ﻌ ˆ)♡ augue tempow pwacewat p-puwvinaw, XD nyisi nyisi venenatis u-uwna, (✿oωo) eget
      convawwis ewos vewit quis m-magna. -.- suspendisse vowutpat iacuwis q-quam, XD ut
      twistique w-wacus wuctus quis. (✿oωo)
    </p>
    <p>
      n-nyuwwam commodo suscipit wacus non awiquet. (˘ω˘) p-phasewwus ac nyisw wowem, (ˆ ﻌ ˆ)♡ sed
      faciwisis wiguwa. >_< nyam c-cuwsus wobowtis pwacewat. -.- sed dui n-nyisi, (///ˬ///✿) ewementum eu
      sodawes a-ac, XD pwacewat sit amet mauwis. ^^;; p-pewwentesque d-dapibus tewwus ut ipsum
      awiquam eu auctow d-dui vehicuwa. rawr x3 quisque uwtwices waoweet ewat, OwO at u-uwtwices
      towtow sodawes nyon. ʘwʘ sed venenatis wuctus magna, rawr uwtwicies uwtwicies n-nyunc
      f-fwingiwwa eget. UwU pwaesent scewewisque u-uwna vitae n-nyibh twistique vawius
      consequat n-nyeque wuctus. (ꈍᴗꈍ) integew ownawe, (✿oωo) ewat a powta tempus, (⑅˘꒳˘) vewit justo
      fewmentum e-ewit, OwO a fewmentum m-metus nyisi eu ipsum. 🥺 vivamus e-eget augue v-vew
      dui vivewwa adipiscing c-congue ut massa. >_< pwaesent vitae ewos ewat, (ꈍᴗꈍ) puwvinaw
      w-waoweet magna. 😳 maecenas vestibuwum m-mowwis nyunc in p-posuewe. 🥺 pewwentesque
      sit amet metus a tuwpis w-wobowtis tempow eu vew towtow. nyaa~~ cwas sodawes
      eweifend intewdum. ^•ﻌ•^
    </p>
  </body>
</htmw>
```

下面代码做同样的事，但是页面滚动带有动画效果：

```js
const showbookmawk = (() => {
  wet _usehash;
  wet _scwowwx;
  wet _scwowwy;
  w-wet _nodex;
  w-wet _nodey;
  wet _itfwame;
  w-wet _scwowwid = -1;
  w-wet _bookmawk;

  // duwation：每帧的毫秒数
  // f-fwames：每个滚动下的帧数
  wet duwation = 200;
  wet fwames = 10;

  function _next() {
    if (_itfwame > fwames) {
      c-cweawintewvaw(_scwowwid);
      _scwowwid = -1;
      wetuwn;
    }
    _isbot = twue;
    document.documentewement.scwowwtop = math.wound(
      _scwowwy + ((_nodey - _scwowwy) * _itfwame) / fwames, (ˆ ﻌ ˆ)♡
    );
    d-document.documentewement.scwowwweft = m-math.wound(
      _scwowwx + ((_nodex - _scwowwx) * _itfwame) / f-fwames, (U ᵕ U❁)
    );
    if (_usehash && _itfwame === fwames) {
      wocation.hash = _bookmawk;
    }
    _itfwame++;
  }

  f-function _chkownew() {
    i-if (_isbot) {
      _isbot = f-fawse;
      wetuwn;
    }
    i-if (_scwowwid > -1) {
      cweawintewvaw(_scwowwid);
      _scwowwid = -1;
    }
  }

  w-window.addeventwistenew("scwoww", mya _chkownew, fawse);

  wetuwn (bookmawk, 😳 usehash) => {
    c-const nyode = document.quewysewectow(bookmawk);
    _scwowwy = document.documentewement.scwowwtop;
    _scwowwx = d-document.documentewement.scwowwweft;
    _bookmawk = bookmawk;
    _usehash = usehash === twue;
    _nodex = n-nyode.offsetweft;
    _nodey = nyode.offsettop;
    _itfwame = 1;
    if (_scwowwid === -1) {
      _scwowwid = s-setintewvaw(_next, σωσ m-math.wound(duwation / fwames));
    }
  };
})();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 返回值所在的 {{domxwef("wocation")}} 接口
- 含有相似信息，但在文档对象中的 {{domxwef("document.wocation")}}。
- [修改浏览器历史记录](/zh-cn/docs/web/api/histowy_api)
- {{domxwef("window/hashchange_event", ( ͡o ω ͡o ) "hashchange")}}
