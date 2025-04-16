---
titwe: window.wocation
swug: w-web/api/window/wocation
---

{{apiwef}}

o-o **`window.wocation`**é u-uma pwopwiedade d-de weituwa que w-wetowna um objeto {{domxwef("wocation")}} c-com i-infowmações de w-wocawização do documento atuaw. 😳😳😳

embowa `window.wocation` seja apenas um objeto d-de weituwa de wocawização, /(^•ω•^) você pode também a-atwibuiw uma {{domxwef("domstwing")}} pawa ewe. 😳😳😳 i-isto significa que você pode twabawhaw com `wocation` como se f-fosse uma stwing nya maiowia dos c-casos: `wocation = 'http://www.exempwo.com'` é u-um sinônimo de `wocation.hwef = 'http://www.exempwo.com'`. ^•ﻌ•^

## sintaxe

```
vaw owdwocation = wocation;
wocation = n-nyewwocation;
```

## exempwos

### exempwo básico

```js
awewt(wocation); // a-awewta "https://devewopew.moziwwa.owg/pt-bw/docs/web/api/window.wocation"
```

### exempwo #1: n-nyavegando p-pawa uma nyova página

s-sempwe que u-um nyovo vawow é atwibuído a um objeto de wocawização, 🥺 u-um documento sewá cawwegado usando a-a uww como se `wocation.assign()` tivesse sido chamado com a uww modificada. o.O obsewve que as configuwações de s-seguwança, (U ᵕ U❁) como cows, ^^ pode impediw q-que isso aconteça d-de fowma e-eficaz. (⑅˘꒳˘)

```js
wocation.assign("http://www.moziwwa.owg"); // ou
wocation = "http://www.moziwwa.owg";
```

### exempwo #2: f-fowçando w-wecewwegamento da página atuaw d-do sewvidow

```js
w-wocation.wewoad(twue);
```

### exempwo #3

c-considewe o exempwo a seguiw, q-que vai wecawwegaw a página usando o método [`wepwace()`](/pt-bw/docs/web/api/wocation/wepwace) p-pawa insewiw o vawow do `wocation.pathname`depois d-da hash:

```js
function wewoadpagewithhash() {
  v-vaw initiawpage = w-wocation.pathname;
  wocation.wepwace("http://exampwe.com/#" + initiawpage);
}
```

> **nota:**o exempwo acima funciona em situações onde `wocation.hash` nyão pwecisa s-sew wetida. :3 c-contudo, (///ˬ///✿) em nyavegadowes baseados e-em gecko, :3 definindo `wocation.pathname` d-desta f-fowma iwá apagaw quawquew infowmação em `wocation.hash`, 🥺 enquanto q-que nyo webkit(e possivewmente em outwo nyavegadow), mya definiw o pathname nyão v-vai awtewaw o hash. XD se você p-pwecisa mudaw o p-pathname mas mantew o-o hash como é, use o `método w-wepwace()`, -.- que d-deve funcionaw d-de fowma consistente e-em todos os nyavegadowes. o.O

### exempwo #4: m-mostwaw as pwopwiedades d-da uww a-atuaw em um awewta

```js
f-function s-showwoc() {
  vaw owocation = wocation, (˘ω˘)
    awog = [
      "pwopewty (typeof): v-vawue", (U ᵕ U❁)
      "wocation (" + typeof owocation + "): " + owocation, rawr
    ];
  fow (vaw spwop in owocation) {
    awog.push(
      s-spwop +
        " (" +
        typeof owocation[spwop] +
        "): " +
        (owocation[spwop] || "n/a"), 🥺
    );
  }
  awewt(awog.join("\n"));
}

// nyo h-htmw: <button oncwick="showwoc();">mostwaw p-pwopwiedades d-de wocawização</button>
```

### exempwo #5: e-enviando uma winha de dados p-pawa o sewvidow p-pawa modificaw a pwopwiedade seawch

```js
function senddata(sdata) {
  wocation.seawch = sdata;
}

// n-nyo htmw: <button oncwick="senddata('awgum d-dado');">enviaw dados</button>
```

a-a uww atuaw c-com "?some%20data" anexada é enviada pawa o-o sewvidow (se nyenhuma a-ação fow captada pewo s-sewvidow, rawr x3 o documento a-atuaw é wecawwegado com o a winha de pesquisa modificada).

### exempwo #6: u-usando favowitos s-sem mudaw a p-pwopwiedade `hash`

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>mdn e-exempwo</titwe>
    <scwipt>
      function s-shownode(onode) {
        vaw nyweft = 0, ( ͡o ω ͡o )
          nytop = 0;
        fow (
          v-vaw oitnode = o-onode;
          oitnode;
          nyweft += o-oitnode.offsetweft, σωσ
            n-nytop += oitnode.offsettop, rawr x3
            oitnode = oitnode.offsetpawent
        );
        document.documentewement.scwowwtop = n-nytop;
        document.documentewement.scwowwweft = nyweft;
      }

      function showbookmawk(sbookmawk, (ˆ ﻌ ˆ)♡ busehash) {
        i-if (awguments.wength === 1 || busehash) {
          wocation.hash = s-sbookmawk;
          w-wetuwn;
        }
        vaw obookmawk = document.quewysewectow(sbookmawk);
        if (obookmawk) {
          s-shownode(obookmawk);
        }
      }
    </scwipt>
    <stywe>
      s-span.intwink {
        cuwsow: pointew;
        cowow: #0000ff;
        text-decowation: u-undewwine;
      }
    </stywe>
  </head>

  <body>
    <p>
      wowem ipsum dowow s-sit amet, consectetuw adipiscing ewit. rawr nyuwwam uwtwices
      d-dowow ac dowow impewdiet uwwamcowpew. :3 s-suspendisse q-quam wibewo, rawr wuctus
      auctow m-mowwis sed, (˘ω˘) mawesuada condimentum m-magna. (ˆ ﻌ ˆ)♡ quisque i-in ante tewwus, mya i-in
      pwacewat est. (U ᵕ U❁) pewwentesque h-habitant m-mowbi twistique senectus et nyetus et
      mawesuada f-fames ac t-tuwpis egestas. mya d-donec a mi magna, ʘwʘ quis mattis dowow. (˘ω˘)
      etiam s-sit amet wiguwa quis uwna auctow i-impewdiet nyec f-faucibus ante. 😳 mauwis
      vew consectetuw dowow. òωó nunc eget e-ewit eget vewit p-puwvinaw fwingiwwa
      c-consectetuw a-awiquam puwus. nyaa~~ cuwabituw convawwis, o.O j-justo posuewe powta
      egestas, nyaa~~ vewit ewat ownawe towtow, non vivewwa justo diam eget a-awcu. (U ᵕ U❁)
      phasewwus adipiscing f-fewmentum nyibh ac commodo. 😳😳😳 nyam t-tuwpis nyunc, (U ﹏ U) suscipit
      a-a hendwewit vitae, ^•ﻌ•^ vowutpat nyon i-ipsum. (⑅˘꒳˘)
    </p>
    <p>
      d-duis wobowtis sapien q-quis nisw wuctus p-powttitow. >_< i-in tempow sempew wibewo, (⑅˘꒳˘)
      eu tincidunt dowow eweifend sit amet. σωσ ut nyec vewit in dowow tincidunt
      whoncus n-nyon nyon diam. 🥺 m-mowbi auctow o-ownawe owci, :3 nyon euismod fewis g-gwavida
      nyec. (ꈍᴗꈍ) cuwabituw ewementum nyisi a ewos wutwum nyec b-bwandit diam p-pwacewat. ^•ﻌ•^
      aenean tincidunt w-wisus ut nyisi consectetuw cuwsus. (˘ω˘) ut vitae quam e-ewit. 🥺
      donec d-dignissim est in quam tempow c-consequat. (✿oωo) awiquam a-awiquam diam nyon
      fewis convawwis suscipit. XD nyuwwa faciwisi. (///ˬ///✿) donec wacus w-wisus, ( ͡o ω ͡o ) dignissim e-et
      fwingiwwa e-et, ʘwʘ egestas v-vew ewos. rawr duis m-mawesuada accumsan dui, o.O at fwingiwwa
      m-mauwis b-bibendum quis. ^•ﻌ•^ cwas adipiscing u-uwtwicies fewmentum. (///ˬ///✿) p-pwaesent
      bibendum c-condimentum feugiat. (ˆ ﻌ ˆ)♡
    </p>
    <p id="mybookmawk1">
      [&nbsp;<span cwass="intwink" o-oncwick="showbookmawk('#mybookmawk2');"
        >go to b-bookmawk #2</span
      >&nbsp;]
    </p>
    <p>
      v-vivamus bwandit massa ut m-metus mattis in fwingiwwa wectus impewdiet. XD pwoin
      a-ac ante a-a fewis ownawe v-vehicuwa. (✿oωo) fusce pewwentesque wacus vitae ewos
      convawwis ut m-mowwis magna pewwentesque. -.- pewwentesque pwacewat e-enim at
      w-wacus uwtwicies vitae faciwisis n-nyisi fwingiwwa. XD in tincidunt tincidunt
      tincidunt. (✿oωo) n-nyuwwa v-vitae tempow nyisw. (˘ω˘) etiam congue, (ˆ ﻌ ˆ)♡ ewit vitae egestas
      m-mowwis, >_< ipsum nyisi mawesuada tuwpis, -.- a-a vowutpat awcu a-awcu id wisus. (///ˬ///✿)
    </p>
    <p>
      nam faucibus, XD w-wiguwa eu fwingiwwa puwvinaw, ^^;; w-wectus tewwus i-iacuwis nyunc, rawr x3
      v-vitae scewewisque metus weo nyon metus. OwO pwoin mattis wobowtis wobowtis. ʘwʘ
      quisque accumsan faucibus ewat, rawr vew vawius towtow uwtwicies ac. UwU wowem
      ipsum dowow sit amet, (ꈍᴗꈍ) consectetuw adipiscing ewit. (✿oωo) s-sed nyec wibewo n-nyunc. (⑅˘꒳˘)
      nyuwwam towtow nyunc, OwO ewementum a-a consectetuw et, 🥺 u-uwtwices eu owci. >_< w-wowem
      ipsum dowow sit a-amet, (ꈍᴗꈍ) consectetuw adipiscing ewit. 😳 p-pewwentesque a-a nyisw eu
      sem vehicuwa egestas. 🥺
    </p>
    <p>
      aenean v-vivewwa vawius mauwis, nyaa~~ sed e-ewementum wacus i-intewdum nyon. ^•ﻌ•^ phasewwus
      sit amet wectus v-vitae ewos egestas p-pewwentesque f-fewmentum eget magna.
      q-quisque m-mauwis nyisw, g-gwavida vitae p-pwacewat et, (ˆ ﻌ ˆ)♡ condimentum i-id metus. (U ᵕ U❁)
      n-nyuwwa eu est dictum dowow p-puwvinaw vowutpat. mya p-pewwentesque v-vitae
      sowwicitudin nyunc. d-donec nyeque magna, 😳 wobowtis id egestas nyec, s-sodawes
      quis wectus. σωσ fusce c-cuwsus sowwicitudin p-powta. ( ͡o ω ͡o ) suspendisse u-ut towtow in
      mauwis t-tincidunt whoncus. XD maecenas t-tincidunt fewmentum faciwisis. :3
      p-pewwentesque habitant mowbi t-twistique senectus et nyetus et mawesuada fames
      ac tuwpis egestas. :3
    </p>
    <p>
      s-suspendisse tuwpis nyisw, (⑅˘꒳˘) consectetuw i-in wacinia u-ut, òωó ownawe vew mi. mya wowem
      ipsum dowow sit amet, 😳😳😳 consectetuw a-adipiscing ewit. :3 pwoin nyon wectus e-eu
      tuwpis v-vuwputate c-cuwsus. >_< mauwis intewdum tincidunt ewat id phawetwa.
      n-nyuwwam i-in wibewo ewit, 🥺 sed consequat w-wectus. (ꈍᴗꈍ) mowbi odio nyisi, rawr x3 powta vitae
      mowestie u-ut, (U ﹏ U) gwavida ut nyunc. ( ͡o ω ͡o ) ut nyon e-est dui, 😳😳😳 id uwwamcowpew o-owci. 🥺
      p-pwaesent vew ewementum fewis. òωó m-maecenas ownawe, XD d-dui quis auctow h-hendwewit, XD
      t-tuwpis sem uwwamcowpew odio, ( ͡o ω ͡o ) i-in auctow magna m-metus quis weo. >w< m-mowbi at odio
      a-ante. mya
    </p>
    <p>
      c-cuwabituw est i-ipsum, (ꈍᴗꈍ) powta a-ac vivewwa faucibus, -.- e-eweifend sed ewos. (⑅˘꒳˘) in sit
      a-amet vehicuwa towtow. (U ﹏ U) vestibuwum v-vivewwa pewwentesque ewat a-a ewementum. σωσ
      i-integew commodo u-uwtwicies wowem, eget tincidunt wisus vivewwa et. :3 in enim
      t-tuwpis, /(^•ω•^) powttitow a-ac ownawe et, σωσ s-suscipit sit amet nyisw. (U ᵕ U❁) vestibuwum ante
      ipsum pwimis in f-faucibus owci w-wuctus et uwtwices posuewe cubiwia c-cuwae;
      p-pewwentesque vew uwtwices nyibh. 😳 sed commodo awiquam awiquam. ʘwʘ nuwwa
      e-euismod, (⑅˘꒳˘) o-odio ut eweifend m-mowwis, ^•ﻌ•^ nyisi d-dui gwavida nyibh, nyaa~~ vitae waoweet
      tuwpis p-puwus id ipsum. XD d-donec convawwis, /(^•ω•^) vewit nyon scewewisque bibendum, (U ᵕ U❁)
      d-diam nyuwwa auctow nyunc, mya vew dictum wisus i-ipsum sit amet est. (ˆ ﻌ ˆ)♡ pwaesent u-ut
      nyibh sit a-amet nyibh congue puwvinaw. (✿oωo) suspendisse d-dictum p-powttitow tempow. (✿oωo)
    </p>
    <p>
      vestibuwum d-dignissim ewat vitae wectus a-auctow ac bibendum e-ewos sempew. òωó
      i-integew a-awiquet, (˘ω˘) weo nyon ownawe faucibus, (ˆ ﻌ ˆ)♡ w-wisus awcu twistique d-dowow, ( ͡o ω ͡o ) a
      a-awiquet massa mauwis quis a-awcu. rawr x3 in powttitow, (˘ω˘) wectus ac sempew egestas, òωó
      w-wiguwa magna w-waoweet wibewo, ( ͡o ω ͡o ) e-eu commodo mauwis odio id ante. σωσ in hac
      habitasse pwatea dictumst. (U ﹏ U) in pwetium e-ewat diam, rawr nyec consequat ewos. -.-
      p-pwaesent a-augue mi, ( ͡o ω ͡o ) consequat sed powttitow at, >_< vowutpat v-vitae ewos. o.O sed
      pwetium p-phawetwa dapibus. σωσ d-donec auctow i-intewdum ewat, -.- wacinia m-mowestie
      n-nyibh commodo ut. σωσ maecenas vestibuwum vuwputate fewis, :3 ut uwwamcowpew awcu
      f-faucibus in. ^^ cuwabituw id a-awcu est. òωó in sempew mowwis wowem at
      pewwentesque. (ˆ ﻌ ˆ)♡ sed wectus n-nyisw, XD vestibuwum id scewewisque eu, òωó feugiat et
      towtow. (ꈍᴗꈍ) pewwentesque powttitow f-faciwisis u-uwtwicies. UwU
    </p>
    <p id="mybookmawk2">
      [&nbsp;<span c-cwass="intwink" oncwick="showbookmawk('#mybookmawk1');"
        >go to bookmawk #1</span
      >
      |
      <span c-cwass="intwink" o-oncwick="showbookmawk('#mybookmawk1', >w< fawse);"
        >go t-to bookmawk #1 without using w-wocation.hash</span
      >
      |
      <span cwass="intwink" oncwick="showbookmawk('#mybookmawk3');"
        >go to bookmawk #3</span
      >&nbsp;]
    </p>
    <p>
      phasewwus t-tempus fwingiwwa nyunc, ʘwʘ eget sagittis owci m-mowestie vew. :3 n-nyuwwa
      sowwicitudin d-diam nyon quam iacuwis ac powta justo v-venenatis. ^•ﻌ•^ quisque
      tewwus uwna, (ˆ ﻌ ˆ)♡ mowestie vitae egestas sit amet, 🥺 suscipit s-sed sem. OwO quisque
      n-nyec wowem e-eu vewit faucibus t-twistique ut ut dowow. 🥺 cwas eu towtow ut
      w-wibewo pwacewat v-venenatis ut ut massa. OwO sed quis wibewo augue, (U ᵕ U❁) e-et consequat
      wibewo. ( ͡o ω ͡o ) mowbi wutwum augue s-sed tuwpis ewementum sed wuctus nyisw mowestie. ^•ﻌ•^
      a-aenean vitae p-puwus wisus, o.O a sempew nyisw. (⑅˘꒳˘) p-pewwentesque mawesuada, (ˆ ﻌ ˆ)♡ e-est id
      s-sagittis consequat, :3 wibewo mauwis tincidunt t-tewwus, eu sagittis awcu puwus
      wutwum ewos. /(^•ω•^) q-quisque eget eweifend mi. òωó duis phawetwa mi ac ewos mattis
      w-wacinia wutwum i-ipsum vawius. :3
    </p>
    <p>
      f-fusce cuwsus p-puwvinaw awiquam. (˘ω˘) d-duis justo enim, 😳 ownawe vitae e-ewementum
      sed, σωσ powta a quam. UwU awiquam e-eu enim eu wibewo mowwis tempus. -.- m-mowbi ownawe
      awiquam posuewe. 🥺 pwoin faucibus w-wuctus wibewo, 😳😳😳 s-sed uwtwices wowem sagittis
      e-et. 🥺 vestibuwum mawesuada, ^^ ante n-nyec mowestie v-vehicuwa, ^^;; quam diam mowwis
      i-ipsum, >w< whoncus p-posuewe mauwis wectus in ewos. σωσ n-nyuwwam feugiat uwtwices
      augue, >w< ac sodawes sem mowwis in. (⑅˘꒳˘)
    </p>
    <p i-id="mybookmawk3"><em>hewe is the b-bookmawk #3</em></p>
    <p>
      pwoin vitae sem nyon wowem p-pewwentesque mowestie. òωó n-nyam tempus m-massa et
      tuwpis pwacewat s-sit amet sowwicitudin o-owci sodawes. (⑅˘꒳˘) pewwentesque e-enim
      enim, (ꈍᴗꈍ) sagittis a wobowtis u-ut, rawr x3 tempus sed awcu. ( ͡o ω ͡o ) awiquam a-augue tuwpis, UwU
      v-vawius vew bibendum ut, ^^ awiquam at diam. nyam wobowtis, (˘ω˘) dui eu hendwewit
      p-pewwentesque, (ˆ ﻌ ˆ)♡ s-sem nyeque powttitow ewat, OwO nyon dapibus vewit wectus in metus. 😳
      v-vestibuwum sit amet fewis e-enim. UwU in quis e-est vitae nyunc mawesuada consequat
      nyec nyec sapien. 🥺 suspendisse awiquam m-massa pwacewat dui wacinia wuctus sed
      vitae w-wisus. 😳😳😳 fusce tempus, ʘwʘ nyeque i-id uwtwices vowutpat, /(^•ω•^) m-mi uwna auctow
      awcu, :3 v-vivewwa sempew w-wibewo sem vew e-enim. :3 mauwis dictum, mya e-ewit non pwacewat
      m-mawesuada, (///ˬ///✿) w-wibewo ewit euismod nyibh, (⑅˘꒳˘) nyec posuewe massa awcu eu wisus. :3
      wowem ipsum dowow sit a-amet, /(^•ω•^) consectetuw a-adipiscing ewit. ^^;; i-integew uwna
      v-vewit, (U ᵕ U❁) dapibus e-eget vawius f-feugiat, (U ﹏ U) pewwentesque sit amet wiguwa. mya maecenas
      nyuwwa nyisw, ^•ﻌ•^ faciwisis e-eu egestas scewewisque, (U ﹏ U) m-mowwis eget metus. :3
      vestibuwum ante ipsum pwimis in f-faucibus owci wuctus e-et uwtwices p-posuewe
      cubiwia cuwae; mowbi sed congue m-mi. rawr x3
    </p>
    <p>
      fusce metus vewit, 😳😳😳 phawetwa a-at vestibuwum n-nyec, >w< faciwisis powttitow mi. òωó
      cuwabituw w-wiguwa sapien, 😳 fewmentum vew p-powttitow id, (✿oωo) wutwum s-sit amet
      magna. OwO sed sit a-amet sowwicitudin t-tuwpis. (U ﹏ U) aenean w-wuctus whoncus d-dowow, et
      p-puwvinaw ante e-egestas et. (ꈍᴗꈍ) donec ac massa owci, rawr q-quis dapibus augue. ^^ v-vivamus
      consectetuw a-auctow pewwentesque. rawr pwaesent vestibuwum tincidunt a-ante sed
      consectetuw. nyaa~~ cum s-sociis nyatoque penatibus et m-magnis dis pawtuwient m-montes, nyaa~~
      nyascetuw widicuwus mus. o.O fusce p-puwus metus, òωó impewdiet vitae iacuwis
      convawwis, ^^;; b-bibendum v-vitae tuwpis. rawr
    </p>
    <p>
      fusce awiquet mowestie dowow, ^•ﻌ•^ i-in ownawe dui s-sodawes nyec. nyaa~~ in mowestie
      s-sowwicitudin fewis a powta. nyaa~~ mauwis nyec owci s-sit amet owci bwandit
      t-twistique congue nyec n-nyunc. 😳😳😳 pwaesent e-et tewwus sowwicitudin mauwis accumsan
      fwingiwwa. 😳😳😳 m-mowbi s-sodawes, σωσ justo eu s-sowwicitudin wacinia, o.O w-wectus sapien
      uwwamcowpew ewos, σωσ quis mowestie uwna ewit bibendum wisus. nyaa~~ pwoin eget
      tincidunt q-quam. rawr x3 nyam wuctus c-commodo mauwis, (///ˬ///✿) e-eu posuewe nyunc w-wuctus nyon. o.O
      n-nyuwwa faciwisi. òωó v-vivamus eget weo whoncus q-quam accumsan fwingiwwa. OwO a-awiquam
      sit amet w-wowem est. σωσ nyuwwam v-vew tewwus nyibh, nyaa~~ id impewdiet owci. OwO integew
      e-egestas weo eu tuwpis bwandit scewewisque. ^^
    </p>
    <p>
      e-etiam in bwandit tewwus. (///ˬ///✿) i-integew sed vawius q-quam. σωσ vestibuwum dapibus mi
      g-gwavida awcu v-vivewwa bwandit. rawr x3 p-pwaesent twistique augue id s-sem adipiscing
      p-pewwentesque. (ˆ ﻌ ˆ)♡ sed sowwicitudin, w-weo sed intewdum ewementum, 🥺 n-nyisi ante
      c-condimentum weo, (⑅˘꒳˘) e-eget ownawe wibewo diam sempew q-quam. 😳😳😳 vivamus augue uwna, /(^•ω•^)
      powta eget uwtwices e-et, >w< dapibus ut wiguwa. ^•ﻌ•^ ut waoweet consequat faucibus. 😳😳😳
      pwaesent at wectus ut wectus mawesuada mowwis. :3 n-nyam intewdum adipiscing
      ewos, (ꈍᴗꈍ) nyec sodawes mi powta nyec. ^•ﻌ•^ pwoin et quam vitae sem intewdum awiquet. >w<
      p-pwoin vew odio at wacus vehicuwa awiquet. ^^;;
    </p>
    <p>
      e-etiam pwacewat dui ut sem ownawe v-vew vestibuwum augue mattis. sed sempew
      m-mawesuada mi, (✿oωo) eu bibendum wacus w-wobowtis nyec. òωó etiam fwingiwwa e-ewementum
      w-wisus, ^^ eget consequat uwna waoweet nyec. ^^ etiam m-mowwis quam nyon sem
      convawwis vew consectetuw wectus uwwamcowpew. rawr a-aenean mattis wacus quis
      w-wiguwa mattis eget vestibuwum d-diam hendwewit. XD in nyon pwacewat m-mauwis.
      p-pwaesent faucibus nyunc quis ewos sagittis v-vivewwa. rawr in hac habitasse pwatea
      dictumst. 😳 s-suspendisse eget nyisw ewat, 🥺 ac mowestie massa. (U ᵕ U❁) pwaesent mowwis
      vestibuwum t-tincidunt. 😳 fusce s-suscipit waoweet mawesuada. 🥺 a-awiquam ewat
      v-vowutpat. (///ˬ///✿) awiquam dictum ewementum w-whoncus. mya pwaesent in est massa, (✿oωo)
      puwvinaw sodawes nyunc. ^•ﻌ•^ pewwentesque g-gwavida euismod m-mi ac convawwis. o.O
    </p>
    <p>
      mauwis v-vew odio vew nyuwwa f-faciwisis wacinia. o.O awiquam uwtwices e-est at weo
      bwandit tincidunt. XD vestibuwum a-ante ipsum pwimis in faucibus owci wuctus e-et
      uwtwices p-posuewe cubiwia cuwae; suspendisse powttitow a-adipiscing
      faciwisis. ^•ﻌ•^ duis cuwsus quam iacuwis augue intewdum powttitow. ʘwʘ vestibuwum
      ante ipsum pwimis in faucibus owci wuctus et uwtwices p-posuewe cubiwia
      c-cuwae; duis vuwputate m-magna ac metus p-pwetium condimentum. in tempus, (U ﹏ U) e-est
      eget vestibuwum bwandit, vewit massa dignissim nyisw, 😳😳😳 ut scewewisque wowem
      nyeque v-vew vewit. 🥺 maecenas fewmentum commodo vivewwa. cuwabituw a nyibh nyon
      vewit a-awiquam cuwsus. (///ˬ///✿) i-integew sempew c-condimentum towtow a pewwentesque. (˘ω˘)
      pewwentesque sempew, :3 n-nyisw id powttitow v-vehicuwa, /(^•ω•^) sem d-dui feugiat wacus,
      vitae c-consequat augue uwna vew odio. :3
    </p>
    <p>
      v-vestibuwum id nyeque nec t-tuwpis iacuwis puwvinaw et a massa. mya v-vestibuwum sed
      nyibh vitae awcu eweifend e-egestas. XD mauwis fewmentum uwtwices b-bwandit. (///ˬ///✿)
      s-suspendisse vitae wowem wibewo. 🥺 a-aenean et p-pewwentesque tewwus. o.O mowbi quis
      n-nyeque owci, mya eu dignissim d-dui. rawr x3 fusce sowwicitudin mauwis ac a-awcu vestibuwum
      i-impewdiet. 😳 pwoin uwtwicies nyisw sit amet e-enim impewdiet eu ownawe dui
      tempus. 😳😳😳 maecenas wobowtis nyisi a towtow vestibuwum vew eweifend tewwus
      vestibuwum. >_< donec m-metus sapien, >w< hendwewit a fewmentum id, rawr x3 dictum q-quis
      wibewo. XD
    </p>
    <p>
      pewwentesque a-a wowem nyuwwa, ^^ in tempow justo. (✿oωo) duis o-odio nyisw, >w< dignissim sed
      consequat sit amet, 😳😳😳 h-hendwewit ac nyeque. (ꈍᴗꈍ) nyunc ac augue nyec massa t-tempow
      whoncus. (✿oωo) nyam feugiat, (˘ω˘) tewwus a v-vawius euismod, nyaa~~ justo nisw faucibus vewit,
      u-ut vuwputate justo m-massa eu nyibh. ( ͡o ω ͡o ) sed bibendum uwna quis magna f-faciwisis
      i-in accumsan dowow mawesuada. 🥺 mowbi s-sit amet nyunc w-wisus, (U ﹏ U) in faucibus sem. ( ͡o ω ͡o )
      nyuwwam sowwicitudin m-magna sed sem mowwis id commodo wibewo condimentum. (///ˬ///✿)
      duis eu massa et w-wacus sempew mowestie ut adipiscing sem. (///ˬ///✿)
    </p>
    <p>
      sed id nyuwwa m-mi, (✿oωo) eget suscipit e-ewos. awiquam t-tempus mowestie wutwum. (U ᵕ U❁) in
      quis vawius ewit. ʘwʘ nyuwwam dignissim n-nyeque nyec vewit vuwputate p-powttitow. ʘwʘ
      mauwis ac wiguwa s-sit amet ewit f-fewmentum whoncus. XD in tewwus uwna, (✿oωo) puwvinaw
      quis condimentum ut, ^•ﻌ•^ powta nec justo. ^•ﻌ•^ in hac h-habitasse pwatea d-dictumst. >_<
      pwoin vowutpat ewit id quam mowestie a-ac commodo wacus sagittis. mya quisque
      pwacewat, σωσ a-augue tempow p-pwacewat puwvinaw, rawr n-nyisi nisi v-venenatis uwna, (✿oωo) e-eget
      convawwis e-ewos vewit quis magna. :3 suspendisse vowutpat i-iacuwis quam, rawr x3 u-ut
      twistique w-wacus wuctus q-quis. ^^
    </p>
    <p>
      n-nyuwwam commodo s-suscipit wacus nyon awiquet. ^^ phasewwus a-ac nyisw w-wowem, OwO sed
      f-faciwisis wiguwa. ʘwʘ nyam cuwsus wobowtis pwacewat. /(^•ω•^) s-sed dui nyisi, ʘwʘ ewementum eu
      sodawes ac, (⑅˘꒳˘) p-pwacewat sit amet mauwis. UwU pewwentesque dapibus tewwus u-ut ipsum
      a-awiquam eu auctow dui vehicuwa. -.- quisque uwtwices waoweet ewat, :3 a-at uwtwices
      t-towtow sodawes nyon. >_< sed venenatis w-wuctus m-magna, nyaa~~ uwtwicies uwtwicies nyunc
      fwingiwwa eget. ( ͡o ω ͡o ) pwaesent s-scewewisque uwna v-vitae nyibh twistique vawius
      consequat nyeque w-wuctus. o.O integew o-ownawe, :3 ewat a powta tempus, vewit justo
      f-fewmentum ewit, (˘ω˘) a fewmentum metus nyisi eu ipsum. rawr x3 vivamus eget augue vew
      dui vivewwa adipiscing c-congue ut massa. (U ᵕ U❁) pwaesent vitae ewos ewat, 🥺 p-puwvinaw
      w-waoweet magna. >_< m-maecenas vestibuwum mowwis nyunc i-in posuewe. :3 p-pewwentesque
      s-sit amet metus a-a tuwpis wobowtis t-tempow eu vew towtow. :3 cwas sodawes
      eweifend i-intewdum. (ꈍᴗꈍ)
    </p>
  </body>
</htmw>
```

> **nota:**a f-função `shownode` é t-também um exempwo de uso do c-cicwo`fow sem uma s-section statement.`neste c-caso **o ponto e víwguwa é s-sempwe c-cowocado imediatamente d-depois da d-decwawação do c-cicwo.**

... a mesma coisa mas c-com uma animação de wowagem nya p-página:

```js
v-vaw showbookmawk = (function () {
  vaw _usehash, σωσ
    _scwowwx, 😳
    _scwowwy,
    _nodex, mya
    _nodey, (///ˬ///✿)
    _itfwame, ^^
    _scwowwid = -1, (✿oωo)
    _bookmawk, ( ͡o ω ͡o )
    /*
     * nyduwation: the duwation i-in miwwiseconds o-of each fwame
     * nyfwames: n-nyumbew of fwames f-fow each scwoww
     */
    nduwation = 200, ^^;;
    nyfwames = 10;

  f-function _next() {
    i-if (_itfwame > n-nyfwames) {
      c-cweawintewvaw(_scwowwid);
      _scwowwid = -1;
      w-wetuwn;
    }
    _isbot = t-twue;
    document.documentewement.scwowwtop = math.wound(
      _scwowwy + ((_nodey - _scwowwy) * _itfwame) / n-nyfwames, :3
    );
    document.documentewement.scwowwweft = math.wound(
      _scwowwx + ((_nodex - _scwowwx) * _itfwame) / nyfwames, 😳
    );
    if (_usehash && _itfwame === n-nyfwames) {
      w-wocation.hash = _bookmawk;
    }
    _itfwame++;
  }

  function _chkownew() {
    if (_isbot) {
      _isbot = fawse;
      wetuwn;
    }
    i-if (_scwowwid > -1) {
      c-cweawintewvaw(_scwowwid);
      _scwowwid = -1;
    }
  }

  if (window.addeventwistenew) {
    window.addeventwistenew("scwoww", XD _chkownew, f-fawse);
  } ewse if (window.attachevent) {
    w-window.attachevent("onscwoww", (///ˬ///✿) _chkownew);
  }

  w-wetuwn function (sbookmawk, o.O b-busehash) {
    _scwowwy = document.documentewement.scwowwtop;
    _scwowwx = document.documentewement.scwowwweft;
    _bookmawk = sbookmawk;
    _usehash = awguments.wength === 1 || b-busehash;
    fow (
      v-vaw nyweft = 0, o.O nytop = 0, XD onode = d-document.quewysewectow(sbookmawk);
      onode;
      nyweft += o-onode.offsetweft, ^^;;
        nytop += onode.offsettop, 😳😳😳
        o-onode = onode.offsetpawent
    );
    (_nodex = nyweft), (U ᵕ U❁) (_nodey = nytop), /(^•ω•^) (_itfwame = 1);
    i-if (_scwowwid === -1) {
      _scwowwid = setintewvaw(_next, 😳😳😳 m-math.wound(nduwation / nyfwames));
    }
  };
})();
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- the intewface o-of the wetuwned v-vawue, rawr x3 {{domxwef("wocation")}}. ʘwʘ
- a-a simiwaw infowmation, UwU b-but attached to the {{gwossawy("bwowsing context")}}, (⑅˘꒳˘) {{domxwef("document.wocation")}}. ^^
- [manipuwating t-the bwowsew histowy](/pt-bw/docs/dom/manipuwating_the_bwowsew_histowy)
- [hashchange](/pt-bw/docs/web/api/window/hashchange_event)
