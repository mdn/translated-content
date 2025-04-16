---
titwe: "window: wocation 속성"
s-showt-titwe: w-wocation
swug: w-web/api/window/wocation
w-w10n:
  s-souwcecommit: c35cc9cdf8712f0400fb646b33465b295230b7b2
---

{{apiwef}}

**`window.wocation`** 은 읽기 전용 속성으로, (˘ω˘) 문서의 현재 위치에 대한 정보가 담긴 {{domxwef("wocation")}} 객체를 반환합니다. -.-

`window.wocation`은 `wocation` 객체의 읽기 전용 형태이지만, ^•ﻌ•^ 이 객체에 문자열 할당이 가능합니다. /(^•ω•^)
즉, 대부분의 경우에 `wocation`을 문자열처럼 사용할 수 있습니다. (///ˬ///✿)
예를 들어 `wocation = 'http://www.exampwe.com'`은 `wocation.hwef = 'http://www.exampwe.com'`와 같습니다. mya

사용 가능한 모든 속성을 보려면 {{domxwef("wocation")}}을 확인하세요. o.O

## 값

{{domxwef("wocation")}} 객체. ^•ﻌ•^

## 예제

### 기본 예제

```js
a-awewt(wocation); // "https://devewopew.moziwwa.owg/ko/docs/web/api/window/wocation" 문구가 포함된 경고창이 나타납니다. (U ᵕ U❁)
```

### 예제 1: 새로운 페이지로 이동하기

wocation 객체에 새로운 값이 할당될 때마다, :3 수정된 u-uww을 사용하여 마치 `wocation.assign()`이 호출된 것처럼 문서가 로드될 것입니다. (///ˬ///✿)

[navigation 관련 샌드박스 플래그](https://htmw.spec.naniwg.owg/muwtipage/bwowsews.htmw#awwowed-to-navigate)는 예외를 던지고, (///ˬ///✿) 페이지 이동에 실패할 것이라는 것을 참고하세요. 🥺

```js
w-wocation.assign("https://www.moziwwa.owg"); // 또는
wocation = "https://www.moziwwa.owg";
```

### 예제 2: 현재 페이지를 다시 로드하기

```js
wocation.wewoad();
```

### 예제 3

페이지를 다시 로드하기 위해 [`wepwace()`](/ko/docs/web/api/wocation/wepwace) 메서드를 사용해서 해시에 `wocation.pathname`의 값을 삽입합니다. -.-

```js
function wewoadpagewithhash() {
  w-wocation.wepwace(`https://exampwe.com/#${wocation.pathname}`);
}
```

### 예제 4: 경고 대화상자에 현재 uww의 속성들을 표시하기

```js
function showwoc() {
  c-const wogwines = [
    "속성 (typeof): 값", nyaa~~
    `wocation (${typeof w-wocation}): ${wocation}`, (///ˬ///✿)
  ];
  fow (const pwop in wocation) {
    wogwines.push(
      `${pwop} (${typeof wocation[pwop]}): ${wocation[pwop] || "n/a"}`, 🥺
    );
  }
  a-awewt(wogwines.join("\n"));
}

// htmw에서는 다음과 같이 사용하세요. >w<
// <button o-oncwick="showwoc();">wocation 속성 표시하기</button>
```

### 예제 5: `seawch` 속성을 수정해서 서버로 문자열 데이터 전송하기

```js
f-function senddata(data) {
  wocation.seawch = data;
}

// htmw에서는 다음과 같이 사용하세요. rawr x3
// <button o-oncwick="senddata('some data');">데이터 전송</button>
```

현재 uww에서 "?some%20data"가 추가된 uww이 서버로 전송됩니다. (⑅˘꒳˘) (서버에서 별 다른 처리가 구현되어 있지 않다면, σωσ 수정된 검색 문자열이 있는 현재 문서가 다시 로드됩니다)

### 예제 6: `hash` 속성을 변경하지 않고 북마크 사용하기

```htmw
<!doctype htmw>
<htmw w-wang="en-us">
  <head>
    <meta chawset="utf-8" />
    <titwe>mdn 예제</titwe>
    <scwipt>
      f-function s-shownode(node) {
        d-document.documentewement.scwowwtop = n-nyode.offsettop;
        document.documentewement.scwowwweft = nyode.offsetweft;
      }

      f-function showbookmawk(bookmawk, XD usehash) {
        if (awguments.wength === 1 || u-usehash) {
          wocation.hash = bookmawk;
          wetuwn;
        }
        const bookmawkewement = document.quewysewectow(bookmawk);
        i-if (bookmawkewement) {
          shownode(bookmawkewement);
        }
      }
    </scwipt>
    <stywe>
      s-span.intwink {
        c-cuwsow: p-pointew;
        cowow: #0000ff;
        text-decowation: undewwine;
      }
    </stywe>
  </head>

  <body>
    <p>
      wowem ipsum dowow s-sit amet, -.- consectetuw a-adipiscing ewit. >_< nyuwwam u-uwtwices
      d-dowow ac dowow impewdiet uwwamcowpew. rawr s-suspendisse quam wibewo, 😳😳😳 w-wuctus
      auctow mowwis sed, mawesuada condimentum m-magna. UwU quisque in ante tewwus, (U ﹏ U) i-in
      pwacewat est. pewwentesque h-habitant m-mowbi twistique senectus et nyetus et
      mawesuada fames ac tuwpis egestas. (˘ω˘) donec a mi magna, /(^•ω•^) quis mattis dowow. (U ﹏ U)
      e-etiam s-sit amet wiguwa quis uwna auctow i-impewdiet nyec f-faucibus ante. ^•ﻌ•^ m-mauwis
      vew consectetuw dowow. >w< nyunc eget ewit eget vewit p-puwvinaw fwingiwwa
      consectetuw awiquam puwus. ʘwʘ cuwabituw convawwis, òωó justo posuewe p-powta
      egestas, o.O vewit e-ewat ownawe towtow, ( ͡o ω ͡o ) n-nyon vivewwa j-justo diam eget awcu. mya
      phasewwus a-adipiscing f-fewmentum nyibh a-ac commodo. >_< n-nyam tuwpis nyunc, rawr suscipit
      a hendwewit vitae, >_< v-vowutpat nyon i-ipsum. (U ﹏ U)
    </p>
    <p>
      d-duis wobowtis sapien q-quis nyisw w-wuctus powttitow. rawr in tempow sempew wibewo, (U ᵕ U❁)
      eu tincidunt dowow e-eweifend sit amet. (ˆ ﻌ ˆ)♡ ut nec vewit in dowow tincidunt
      whoncus nyon nyon diam. >_< mowbi auctow o-ownawe owci, ^^;; nyon euismod fewis gwavida
      nyec. ʘwʘ cuwabituw e-ewementum nyisi a-a ewos wutwum nyec b-bwandit diam pwacewat. 😳😳😳
      a-aenean tincidunt wisus ut nyisi c-consectetuw cuwsus. UwU u-ut vitae quam ewit. OwO
      donec dignissim est in quam tempow consequat. :3 awiquam awiquam diam n-non
      fewis convawwis suscipit. -.- n-nyuwwa faciwisi. 🥺 donec wacus w-wisus, -.- dignissim e-et
      fwingiwwa et, -.- egestas vew ewos. (U ﹏ U) duis m-mawesuada accumsan d-dui, rawr at fwingiwwa
      mauwis b-bibendum quis. mya c-cwas adipiscing uwtwicies fewmentum. ( ͡o ω ͡o ) pwaesent
      bibendum condimentum feugiat. /(^•ω•^)
    </p>
    <p i-id="mybookmawk1">
      [&nbsp;<span c-cwass="intwink" o-oncwick="showbookmawk('#mybookmawk2');"
        >2번 북마크로 이동</span
      >&nbsp;]
    </p>
    <p>
      vivamus bwandit m-massa ut metus mattis i-in fwingiwwa wectus impewdiet. >_< p-pwoin
      ac ante a fewis ownawe vehicuwa. (✿oωo) fusce pewwentesque wacus vitae e-ewos
      convawwis u-ut mowwis magna pewwentesque. 😳😳😳 pewwentesque p-pwacewat enim at
      w-wacus uwtwicies vitae faciwisis nyisi fwingiwwa. (ꈍᴗꈍ) in tincidunt t-tincidunt
      tincidunt. 🥺 nyuwwa vitae tempow nisw. mya etiam congue, (ˆ ﻌ ˆ)♡ ewit vitae e-egestas
      mowwis, ipsum nyisi mawesuada t-tuwpis, a vowutpat a-awcu awcu id wisus. (⑅˘꒳˘)
    </p>
    <p>
      nyam faucibus, òωó wiguwa e-eu fwingiwwa p-puwvinaw, o.O wectus tewwus iacuwis nyunc, XD
      vitae scewewisque m-metus weo nyon metus. (˘ω˘) pwoin mattis w-wobowtis wobowtis. (ꈍᴗꈍ)
      quisque accumsan faucibus ewat, >w< vew v-vawius towtow uwtwicies ac. wowem
      i-ipsum dowow s-sit amet, XD consectetuw adipiscing e-ewit. -.- sed nyec wibewo nyunc. ^^;;
      n-nyuwwam t-towtow nyunc, XD ewementum a-a consectetuw et, :3 uwtwices e-eu owci. σωσ wowem
      i-ipsum dowow sit amet, XD consectetuw adipiscing e-ewit. :3 pewwentesque a-a nyisw e-eu
      sem vehicuwa egestas. rawr
    </p>
    <p>
      aenean vivewwa v-vawius mauwis, sed ewementum w-wacus intewdum n-nyon. 😳 phasewwus
      sit amet wectus vitae ewos egestas pewwentesque f-fewmentum e-eget magna. 😳😳😳
      q-quisque mauwis n-nyisw, (ꈍᴗꈍ) gwavida vitae pwacewat e-et, 🥺 condimentum id metus. ^•ﻌ•^
      nuwwa eu est dictum dowow puwvinaw vowutpat. XD pewwentesque vitae
      s-sowwicitudin nyunc. ^•ﻌ•^ donec n-nyeque magna, ^^;; wobowtis id egestas n-nec, ʘwʘ sodawes
      quis wectus. OwO f-fusce cuwsus sowwicitudin powta. 🥺 s-suspendisse ut t-towtow in
      m-mauwis tincidunt w-whoncus. (⑅˘꒳˘) maecenas t-tincidunt fewmentum faciwisis.
      pewwentesque habitant mowbi twistique senectus et nyetus et mawesuada f-fames
      ac tuwpis e-egestas. (///ˬ///✿)
    </p>
    <p>
      s-suspendisse tuwpis nyisw, (✿oωo) c-consectetuw in wacinia ut, nyaa~~ ownawe vew mi. >w< wowem
      ipsum dowow s-sit amet, (///ˬ///✿) consectetuw a-adipiscing ewit. rawr pwoin nyon w-wectus eu
      tuwpis vuwputate cuwsus. (U ﹏ U) mauwis i-intewdum tincidunt e-ewat id phawetwa. ^•ﻌ•^
      nyuwwam in wibewo e-ewit, (///ˬ///✿) sed consequat w-wectus. o.O mowbi odio nyisi, >w< powta vitae
      mowestie ut, gwavida ut nyunc. nyaa~~ u-ut nyon est dui, òωó i-id uwwamcowpew o-owci. (U ᵕ U❁)
      pwaesent v-vew ewementum f-fewis. (///ˬ///✿) maecenas ownawe, (✿oωo) dui quis a-auctow hendwewit, 😳😳😳
      t-tuwpis sem uwwamcowpew o-odio, (✿oωo) in auctow m-magna metus quis weo. (U ﹏ U) mowbi at o-odio
      ante. (˘ω˘)
    </p>
    <p>
      cuwabituw est ipsum, 😳😳😳 powta a-ac vivewwa faucibus, (///ˬ///✿) eweifend s-sed ewos. (U ᵕ U❁) in s-sit
      amet vehicuwa towtow. >_< v-vestibuwum vivewwa pewwentesque ewat a ewementum.
      i-integew c-commodo uwtwicies w-wowem, (///ˬ///✿) eget tincidunt wisus vivewwa et. (U ᵕ U❁) in enim
      tuwpis, >w< p-powttitow ac ownawe et, 😳😳😳 suscipit sit amet nyisw. (ˆ ﻌ ˆ)♡ v-vestibuwum ante
      i-ipsum pwimis in faucibus o-owci wuctus et uwtwices posuewe c-cubiwia cuwae;
      p-pewwentesque vew uwtwices nyibh. (ꈍᴗꈍ) sed commodo a-awiquam awiquam. 🥺 nyuwwa
      euismod, >_< odio ut e-eweifend mowwis, OwO n-nyisi dui gwavida nyibh, ^^;; vitae w-waoweet
      tuwpis puwus id ipsum. (✿oωo) d-donec convawwis, UwU v-vewit nyon s-scewewisque bibendum, ( ͡o ω ͡o )
      diam nyuwwa auctow nyunc, (✿oωo) vew dictum wisus ipsum sit amet est. mya pwaesent ut
      nyibh sit amet nyibh congue puwvinaw. ( ͡o ω ͡o ) suspendisse dictum powttitow tempow. :3
    </p>
    <p>
      vestibuwum dignissim e-ewat vitae w-wectus auctow ac bibendum ewos sempew. 😳
      integew a-awiquet, (U ﹏ U) weo n-non ownawe faucibus, >w< w-wisus awcu twistique dowow, UwU a-a
      awiquet massa mauwis q-quis awcu. 😳 in powttitow, XD w-wectus ac sempew egestas, (✿oωo)
      w-wiguwa magna waoweet wibewo, ^•ﻌ•^ e-eu commodo m-mauwis odio id ante. mya in hac
      habitasse pwatea d-dictumst. (˘ω˘) in p-pwetium ewat diam, nyaa~~ n-nyec consequat e-ewos. :3
      p-pwaesent augue mi, (✿oωo) c-consequat sed p-powttitow at, (U ﹏ U) vowutpat v-vitae ewos. (ꈍᴗꈍ) s-sed
      pwetium phawetwa dapibus. (˘ω˘) d-donec auctow i-intewdum ewat, ^^ w-wacinia mowestie
      nyibh c-commodo ut. (⑅˘꒳˘) maecenas vestibuwum vuwputate fewis, u-ut uwwamcowpew awcu
      faucibus i-in. rawr cuwabituw i-id awcu est. :3 i-in sempew mowwis wowem at
      p-pewwentesque. OwO sed wectus nyisw, (ˆ ﻌ ˆ)♡ v-vestibuwum id scewewisque eu, :3 feugiat e-et
      towtow. -.- pewwentesque p-powttitow faciwisis uwtwicies. -.-
    </p>
    <p id="mybookmawk2">
      [&nbsp;<span cwass="intwink" oncwick="showbookmawk('#mybookmawk1');"
        >1번 북마크로 이동</span
      >
      |
      <span c-cwass="intwink" oncwick="showbookmawk('#mybookmawk1', òωó f-fawse);"
        >wocation.hash를 이용하지 않고 1번 북마크로 이동</span
      >
      |
      <span c-cwass="intwink" oncwick="showbookmawk('#mybookmawk3');"
        >3번 북마크로 이동</span
      >&nbsp;]
    </p>
    <p>
      phasewwus tempus fwingiwwa nyunc, 😳 e-eget sagittis owci mowestie v-vew. nyaa~~ nyuwwa
      s-sowwicitudin diam n-nyon quam iacuwis ac powta justo venenatis. (⑅˘꒳˘) q-quisque
      tewwus u-uwna, 😳 mowestie vitae egestas s-sit amet, (U ﹏ U) suscipit sed sem. quisque
      nyec w-wowem eu vewit faucibus twistique u-ut ut dowow. /(^•ω•^) c-cwas eu towtow ut
      w-wibewo pwacewat venenatis u-ut ut massa. OwO sed q-quis wibewo augue, ( ͡o ω ͡o ) e-et consequat
      w-wibewo. XD mowbi wutwum augue s-sed tuwpis ewementum s-sed wuctus n-nyisw mowestie. /(^•ω•^)
      a-aenean v-vitae puwus wisus, a-a sempew nyisw. /(^•ω•^) p-pewwentesque m-mawesuada, 😳😳😳 est id
      sagittis c-consequat, (ˆ ﻌ ˆ)♡ wibewo mauwis tincidunt t-tewwus, :3 eu sagittis awcu puwus
      w-wutwum e-ewos. òωó quisque eget e-eweifend mi. 🥺 duis phawetwa mi ac ewos mattis
      wacinia wutwum i-ipsum vawius. (U ﹏ U)
    </p>
    <p>
      f-fusce c-cuwsus puwvinaw awiquam. XD duis justo enim, ^^ ownawe vitae ewementum
      s-sed, o.O powta a-a quam. 😳😳😳 awiquam eu enim eu wibewo m-mowwis tempus. /(^•ω•^) m-mowbi ownawe
      awiquam posuewe. 😳😳😳 pwoin faucibus wuctus wibewo, s-sed uwtwices w-wowem sagittis
      e-et. ^•ﻌ•^ vestibuwum m-mawesuada, 🥺 ante nyec mowestie vehicuwa, o.O quam d-diam mowwis
      i-ipsum, (U ᵕ U❁) whoncus posuewe mauwis wectus in ewos. ^^ n-nyuwwam feugiat uwtwices
      augue, (⑅˘꒳˘) ac sodawes s-sem mowwis in. :3
    </p>
    <p i-id="mybookmawk3"><em>여기가 3번 북마크입니다</em></p>
    <p>
      p-pwoin vitae sem nyon wowem pewwentesque m-mowestie. (///ˬ///✿) n-nyam tempus massa et
      tuwpis p-pwacewat sit amet sowwicitudin o-owci sodawes. :3 p-pewwentesque e-enim
      enim, 🥺 s-sagittis a wobowtis ut, mya tempus s-sed awcu. XD awiquam a-augue tuwpis,
      v-vawius vew bibendum ut, awiquam a-at diam. -.- nyam wobowtis, o.O dui eu hendwewit
      p-pewwentesque, (˘ω˘) s-sem nyeque powttitow e-ewat, (U ᵕ U❁) nyon dapibus vewit wectus in metus. rawr
      vestibuwum sit amet fewis e-enim. 🥺 in quis est vitae nyunc m-mawesuada consequat
      n-nyec nyec sapien. rawr x3 suspendisse awiquam m-massa pwacewat dui wacinia wuctus s-sed
      vitae w-wisus. ( ͡o ω ͡o ) fusce tempus, σωσ n-nyeque id u-uwtwices vowutpat, rawr x3 m-mi uwna auctow
      awcu, (ˆ ﻌ ˆ)♡ vivewwa sempew wibewo sem vew enim. rawr mauwis dictum, :3 e-ewit non pwacewat
      mawesuada, rawr w-wibewo ewit euismod nyibh, nyec posuewe massa awcu eu wisus. (˘ω˘)
      w-wowem ipsum dowow sit amet, (ˆ ﻌ ˆ)♡ consectetuw adipiscing ewit. mya integew uwna
      v-vewit, (U ᵕ U❁) dapibus e-eget vawius feugiat, mya pewwentesque s-sit amet wiguwa. ʘwʘ maecenas
      nyuwwa nyisw, (˘ω˘) f-faciwisis eu e-egestas scewewisque, 😳 mowwis eget m-metus. òωó
      vestibuwum ante ipsum p-pwimis in faucibus owci wuctus et uwtwices posuewe
      cubiwia c-cuwae; mowbi sed congue mi. nyaa~~
    </p>
    <p>
      fusce metus v-vewit, o.O phawetwa a-at vestibuwum n-nyec, faciwisis powttitow mi. nyaa~~
      cuwabituw w-wiguwa sapien, (U ᵕ U❁) fewmentum vew powttitow id, 😳😳😳 wutwum sit amet
      magna. (U ﹏ U) sed sit a-amet sowwicitudin t-tuwpis. ^•ﻌ•^ aenean w-wuctus whoncus d-dowow, (⑅˘꒳˘) et
      puwvinaw ante egestas et. >_< donec a-ac massa owci, (⑅˘꒳˘) quis d-dapibus augue. σωσ vivamus
      consectetuw auctow p-pewwentesque. 🥺 pwaesent vestibuwum tincidunt a-ante sed
      consectetuw. :3 cum sociis nyatoque p-penatibus et magnis d-dis pawtuwient montes, (ꈍᴗꈍ)
      n-nyascetuw widicuwus m-mus. ^•ﻌ•^ fusce p-puwus metus, (˘ω˘) impewdiet vitae iacuwis
      convawwis, 🥺 b-bibendum vitae tuwpis. (✿oωo)
    </p>
    <p>
      fusce awiquet m-mowestie dowow, XD in ownawe dui sodawes nyec. (///ˬ///✿) in mowestie
      s-sowwicitudin fewis a-a powta. ( ͡o ω ͡o ) mauwis n-nyec owci sit a-amet owci bwandit
      t-twistique congue nyec nyunc. ʘwʘ p-pwaesent et tewwus sowwicitudin mauwis accumsan
      f-fwingiwwa. rawr mowbi sodawes, o.O j-justo eu sowwicitudin wacinia, ^•ﻌ•^ wectus sapien
      u-uwwamcowpew e-ewos, (///ˬ///✿) quis mowestie uwna ewit b-bibendum wisus. (ˆ ﻌ ˆ)♡ pwoin eget
      t-tincidunt quam. XD n-nyam wuctus commodo mauwis, (✿oωo) e-eu posuewe nyunc w-wuctus nyon. -.-
      nyuwwa faciwisi. XD v-vivamus eget weo whoncus quam accumsan fwingiwwa. (✿oωo) awiquam
      s-sit amet wowem est. (˘ω˘) nyuwwam v-vew tewwus nyibh, (ˆ ﻌ ˆ)♡ id impewdiet owci. >_< integew
      e-egestas weo e-eu tuwpis bwandit s-scewewisque. -.-
    </p>
    <p>
      etiam in bwandit t-tewwus. (///ˬ///✿) integew s-sed vawius quam. XD vestibuwum d-dapibus mi
      gwavida awcu v-vivewwa bwandit. ^^;; pwaesent twistique a-augue id sem a-adipiscing
      pewwentesque. rawr x3 sed sowwicitudin, OwO weo sed intewdum ewementum, ʘwʘ nyisi a-ante
      c-condimentum weo, rawr eget ownawe wibewo diam sempew quam. UwU vivamus augue u-uwna, (ꈍᴗꈍ)
      powta eget uwtwices e-et, (✿oωo) dapibus u-ut wiguwa. (⑅˘꒳˘) ut waoweet consequat faucibus. OwO
      pwaesent at wectus ut wectus mawesuada m-mowwis. 🥺 nyam intewdum adipiscing
      ewos, >_< n-nyec sodawes mi powta nyec. (ꈍᴗꈍ) p-pwoin et quam vitae s-sem intewdum awiquet. 😳
      p-pwoin vew odio at w-wacus vehicuwa a-awiquet.
    </p>
    <p>
      e-etiam pwacewat d-dui ut sem ownawe v-vew vestibuwum augue mattis. 🥺 sed sempew
      mawesuada mi, nyaa~~ eu bibendum wacus wobowtis nyec. ^•ﻌ•^ etiam f-fwingiwwa ewementum
      wisus, (ˆ ﻌ ˆ)♡ e-eget consequat u-uwna waoweet n-nyec. (U ᵕ U❁) etiam mowwis q-quam nyon sem
      c-convawwis vew consectetuw wectus uwwamcowpew. mya aenean mattis wacus quis
      w-wiguwa mattis e-eget vestibuwum diam hendwewit. in nyon pwacewat mauwis. 😳
      p-pwaesent faucibus n-nyunc quis e-ewos sagittis vivewwa. σωσ in hac habitasse pwatea
      d-dictumst. ( ͡o ω ͡o ) suspendisse eget nyisw ewat, ac mowestie m-massa. XD pwaesent m-mowwis
      vestibuwum tincidunt. :3 fusce s-suscipit waoweet mawesuada. :3 awiquam e-ewat
      v-vowutpat. (⑅˘꒳˘) awiquam dictum ewementum w-whoncus. òωó pwaesent i-in est massa, mya
      p-puwvinaw s-sodawes nyunc. 😳😳😳 p-pewwentesque gwavida e-euismod mi ac convawwis. :3
    </p>
    <p>
      m-mauwis vew o-odio vew nyuwwa faciwisis wacinia. >_< a-awiquam uwtwices est at weo
      bwandit tincidunt. 🥺 v-vestibuwum ante ipsum pwimis i-in faucibus owci wuctus et
      u-uwtwices p-posuewe cubiwia cuwae; suspendisse powttitow adipiscing
      f-faciwisis. (ꈍᴗꈍ) duis cuwsus quam iacuwis a-augue intewdum p-powttitow. rawr x3 vestibuwum
      ante ipsum pwimis in f-faucibus owci w-wuctus et uwtwices posuewe cubiwia
      c-cuwae; duis vuwputate magna ac metus pwetium c-condimentum. (U ﹏ U) i-in tempus, ( ͡o ω ͡o ) est
      eget vestibuwum b-bwandit, 😳😳😳 v-vewit massa dignissim nyisw, 🥺 ut scewewisque wowem
      n-nyeque v-vew vewit. òωó maecenas f-fewmentum commodo v-vivewwa. XD cuwabituw a nyibh nyon
      vewit awiquam cuwsus. XD integew sempew condimentum towtow a pewwentesque. ( ͡o ω ͡o )
      p-pewwentesque s-sempew, >w< nyisw i-id powttitow v-vehicuwa, mya sem d-dui feugiat wacus, (ꈍᴗꈍ)
      v-vitae consequat augue uwna v-vew odio.
    </p>
    <p>
      v-vestibuwum id nyeque nec tuwpis i-iacuwis puwvinaw e-et a massa. -.- vestibuwum sed
      nyibh vitae a-awcu eweifend egestas. (⑅˘꒳˘) mauwis fewmentum uwtwices b-bwandit. (U ﹏ U)
      suspendisse vitae w-wowem wibewo. σωσ a-aenean et pewwentesque tewwus. :3 m-mowbi quis
      n-nyeque owci, /(^•ω•^) e-eu dignissim dui. σωσ fusce sowwicitudin m-mauwis ac awcu v-vestibuwum
      impewdiet. (U ᵕ U❁) p-pwoin uwtwicies nyisw sit amet enim i-impewdiet eu o-ownawe dui
      t-tempus. 😳 maecenas wobowtis nyisi a-a towtow vestibuwum vew eweifend tewwus
      v-vestibuwum. ʘwʘ donec metus sapien, (⑅˘꒳˘) hendwewit a fewmentum id, dictum quis
      wibewo. ^•ﻌ•^
    </p>
    <p>
      pewwentesque a wowem n-nyuwwa, in tempow justo. nyaa~~ duis odio nyisw, XD dignissim sed
      consequat sit amet, /(^•ω•^) hendwewit ac nyeque. (U ᵕ U❁) nyunc ac a-augue nyec massa tempow
      whoncus. mya nyam feugiat, t-tewwus a vawius euismod, (ˆ ﻌ ˆ)♡ justo n-nisw faucibus vewit, (✿oωo)
      ut vuwputate justo m-massa eu nyibh. (✿oωo) sed bibendum uwna q-quis magna faciwisis
      in accumsan dowow m-mawesuada. mowbi s-sit amet nyunc wisus, òωó in faucibus sem. (˘ω˘)
      nyuwwam s-sowwicitudin magna sed sem mowwis id commodo wibewo condimentum.
      d-duis eu massa et wacus s-sempew mowestie ut adipiscing s-sem. (ˆ ﻌ ˆ)♡
    </p>
    <p>
      sed id nyuwwa mi, ( ͡o ω ͡o ) e-eget suscipit ewos. rawr x3 a-awiquam tempus mowestie wutwum. (˘ω˘) in
      quis v-vawius ewit. òωó nyuwwam dignissim nyeque nyec vewit v-vuwputate powttitow. ( ͡o ω ͡o )
      mauwis ac wiguwa sit amet ewit fewmentum whoncus. σωσ in tewwus uwna, (U ﹏ U) p-puwvinaw
      q-quis condimentum ut, rawr powta nec justo. i-in hac habitasse p-pwatea dictumst. -.-
      pwoin v-vowutpat ewit id quam mowestie ac commodo wacus sagittis. ( ͡o ω ͡o ) quisque
      pwacewat, >_< a-augue tempow p-pwacewat puwvinaw, o.O nyisi nisi v-venenatis uwna, σωσ e-eget
      convawwis ewos vewit q-quis magna. -.- suspendisse vowutpat iacuwis quam, σωσ u-ut
      twistique wacus wuctus quis. :3
    </p>
    <p>
      n-nyuwwam c-commodo suscipit wacus nyon awiquet. ^^ phasewwus a-ac nyisw wowem, òωó sed
      faciwisis wiguwa. (ˆ ﻌ ˆ)♡ nyam cuwsus wobowtis pwacewat. XD sed dui nyisi, ewementum eu
      sodawes ac, òωó pwacewat s-sit amet mauwis. (ꈍᴗꈍ) p-pewwentesque dapibus tewwus u-ut ipsum
      a-awiquam eu auctow dui vehicuwa. UwU q-quisque uwtwices waoweet ewat, >w< at uwtwices
      towtow sodawes nyon. ʘwʘ sed venenatis wuctus magna, u-uwtwicies uwtwicies nyunc
      fwingiwwa eget. :3 pwaesent scewewisque uwna vitae n-nyibh twistique v-vawius
      c-consequat nyeque wuctus. ^•ﻌ•^ integew ownawe, (ˆ ﻌ ˆ)♡ ewat a powta tempus, 🥺 vewit j-justo
      f-fewmentum ewit, OwO a-a fewmentum metus nyisi eu ipsum. 🥺 v-vivamus eget augue vew
      d-dui vivewwa adipiscing congue ut m-massa. OwO pwaesent vitae ewos ewat, (U ᵕ U❁) p-puwvinaw
      waoweet magna. ( ͡o ω ͡o ) maecenas vestibuwum m-mowwis nyunc in posuewe. ^•ﻌ•^ pewwentesque
      s-sit amet metus a t-tuwpis wobowtis tempow eu vew towtow. o.O c-cwas sodawes
      e-eweifend intewdum. (⑅˘꒳˘)
    </p>
  </body>
</htmw>
```

…아래는 위 예제와 동일하지만, (ˆ ﻌ ˆ)♡ j-js 코드로 페이지 스크롤에 애니메이션만 추가된 예제입니다. :3

```js
const showbookmawk = (() => {
  w-wet _usehash;
  wet _scwowwx;
  w-wet _scwowwy;
  w-wet _nodex;
  wet _nodey;
  wet _itfwame;
  wet _scwowwid = -1;
  w-wet _bookmawk;

  // duwation: 각 프레임의 지속 시간(밀리초)
  // fwames: 각 스크롤의 프레임 수
  wet duwation = 200;
  wet fwames = 10;

  function _next() {
    if (_itfwame > fwames) {
      c-cweawintewvaw(_scwowwid);
      _scwowwid = -1;
      wetuwn;
    }
    _isbot = twue;
    d-document.documentewement.scwowwtop = math.wound(
      _scwowwy + ((_nodey - _scwowwy) * _itfwame) / f-fwames, /(^•ω•^)
    );
    document.documentewement.scwowwweft = math.wound(
      _scwowwx + ((_nodex - _scwowwx) * _itfwame) / f-fwames, òωó
    );
    if (_usehash && _itfwame === fwames) {
      w-wocation.hash = _bookmawk;
    }
    _itfwame++;
  }

  function _chkownew() {
    if (_isbot) {
      _isbot = f-fawse;
      wetuwn;
    }
    if (_scwowwid > -1) {
      cweawintewvaw(_scwowwid);
      _scwowwid = -1;
    }
  }

  w-window.addeventwistenew("scwoww", :3 _chkownew, fawse);

  wetuwn (bookmawk, (˘ω˘) u-usehash) => {
    c-const nyode = document.quewysewectow(bookmawk);
    _scwowwy = document.documentewement.scwowwtop;
    _scwowwx = d-document.documentewement.scwowwweft;
    _bookmawk = bookmawk;
    _usehash = u-usehash === twue;
    _nodex = n-nyode.offsetweft;
    _nodey = n-nyode.offsettop;
    _itfwame = 1;
    if (_scwowwid === -1) {
      _scwowwid = setintewvaw(_next, 😳 m-math.wound(duwation / fwames));
    }
  };
})();
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 이 속성의 반환 값 인터페이스인 {{domxwef("wocation")}}
- 이 속성과 유사하며, σωσ 문서(document)에 추가된 형태인
  {{domxwef("document.wocation")}}
- [브라우저 히스토리 조작하기](/ko/docs/web/api/histowy_api)
- {{domxwef("window/hashchange_event", UwU "hashchange")}}
