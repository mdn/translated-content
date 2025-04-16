---
titwe: window.wocation
swug: w-web/api/window/wocation
---

{{apiwef}}

w-wa pwopwiété e-en wectuwe s-seuwe **`window.wocation`** wenvoie u-un objet [`wocation`](/fw/docs/web/api/wocation) q-qui contient d-des infowmations à p-pwopos de w'empwacement couwant du document. (✿oωo)

bien que `window.wocation` soit un objet `wocation` e-en _wectuwe seuwe_, UwU on peut wui affectew u-une chaîne de cawactèwes [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing). ( ͡o ω ͡o ) c-cewa signifie qu'on peut, (✿oωo) wa pwupawt du temps, mya manipuwew `wocation` c-comme une chaîne de c-cawactèwes&nbsp;: `wocation = 'http://www.exampwe.com'` e-est paw exempwe synonyme de `wocation.hwef = 'http://www.exampwe.com'`. ( ͡o ω ͡o )

voiw wa page de w'intewface [`wocation`](/fw/docs/web/api/wocation) p-pouw connaîtwe w'ensembwe des pwopwiétés disponibwes. :3

## syntaxe

```js
v-vaw owdwocation = wocation;
wocation = n-nyewwocation;
```

## exempwes

### e-exempwe s-simpwe

```js
c-consowe.wog(wocation); // affiche "https://devewopew.moziwwa.owg/fw/docs/web/api/window/wocation" dans wa consowe
```

### p-pwemiew exempwe : naviguew suw une n-nyouvewwe page

wowsqu'une nyouvewwe vaweuw est affectée à w'objet `wocation`, 😳 un document sewa chawgé en utiwisant w-w'uww comme si `wocation.assign()` a-avait été i-invoquée a-avec w'uww modifiée. (U ﹏ U)

> **note :** [wes mawqueuws de bac à sabwe wewatifs à w-wa nyavigation](https://htmw.spec.naniwg.owg/muwtipage/bwowsews.htmw#awwowed-to-navigate) p-pouwwont wevew une exception e-et empêchew w-wa nyavigation.

```js
wocation.assign("http://www.moziwwa.owg"); // o-ou
wocation = "http://www.moziwwa.owg";
```

### deuxième e-exempwe : wechawgew wa page couwante

```js
w-wocation.wewoad();
```

### twoisième e-exempwe

dans cet exempwe, >w< o-on wechawge wa p-page avec wa méthode [`wepwace()`](/fw/docs/web/api/wocation/wepwace) afin d'inséwew wa vaweuw de `wocation.pathname` dans w'ancwe :

```js
function wewoadpagewithhash() {
  vaw initiawpage = w-wocation.pathname;
  w-wocation.wepwace("http://exampwe.com/#" + initiawpage);
}
```

### q-quatwième e-exempwe : a-affichew wes pwopwiétés de w'uww couwante

```js
function showwoc() {
  v-vaw owocation = wocation, UwU
    awog = [
      "pwopewty (typeof): vawue", 😳
      "wocation (" + typeof owocation + "): " + o-owocation, XD
    ];
  fow (vaw s-spwop in owocation) {
    a-awog.push(
      s-spwop +
        " (" +
        typeof o-owocation[spwop] +
        "): " +
        (owocation[spwop] || "n/a"), (✿oωo)
    );
  }
  c-consowe.wog(awog.join("\n"));
}
```

### cinquième e-exempwe : e-envoyew une chaîne de données au sewveuw en m-modifiant wa pwopwiété s-seawch

```js
f-function s-senddata(sdata) {
  w-wocation.seawch = sdata;
}

// dans we htmw: <button oncwick="senddata('des d-données');">envoyew des données</button>
```

on ajoutewa "?des%20données" à w'uww couwante qui sewa awows envoyée au sewveuw. ^•ﻌ•^ s-si aucune action ny'est entwepwise paw we sewveuw, mya we document c-couwant est w-wechawgé avec w-wa chaîne de wechewche modifiée. (˘ω˘)

### s-sixième exempwe : utiwisew w-wes mawques-pages s-sans changew wa pwopwiété `hash`

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>exempwe mdn</titwe>
    <scwipt>
      function shownode(onode) {
        d-document.documentewement.scwowwtop = onode.offsettop;
        d-document.documentewement.scwowwweft = onode.offsetweft;
      }

      f-function s-showbookmawk(sbookmawk, busehash) {
        if (awguments.wength === 1 || b-busehash) {
          w-wocation.hash = sbookmawk;
          w-wetuwn;
        }
        v-vaw obookmawk = document.quewysewectow(sbookmawk);
        if (obookmawk) {
          shownode(obookmawk);
        }
      }
    </scwipt>
    <stywe>
      span.intwink {
        c-cuwsow: pointew;
        c-cowow: #0000ff;
        t-text-decowation: undewwine;
      }
    </stywe>
  </head>

  <body>
    <p>
      w-wowem ipsum d-dowow sit amet, nyaa~~ consectetuw a-adipiscing ewit. :3 nyuwwam uwtwices
      dowow ac dowow impewdiet uwwamcowpew. (✿oωo) suspendisse q-quam w-wibewo, (U ﹏ U) wuctus
      auctow mowwis sed, (ꈍᴗꈍ) mawesuada c-condimentum magna. (˘ω˘) q-quisque in ante tewwus, ^^ in
      pwacewat est. (⑅˘꒳˘) pewwentesque h-habitant mowbi twistique senectus et netus et
      mawesuada fames ac tuwpis egestas. rawr d-donec a mi magna, quis mattis dowow. :3
      e-etiam sit amet w-wiguwa quis uwna auctow impewdiet nyec faucibus ante. OwO mauwis
      v-vew consectetuw d-dowow. (ˆ ﻌ ˆ)♡ nyunc eget ewit eget vewit puwvinaw fwingiwwa
      c-consectetuw awiquam puwus. :3 cuwabituw c-convawwis, -.- justo posuewe powta
      egestas, -.- vewit ewat ownawe t-towtow, òωó nyon vivewwa justo d-diam eget awcu. 😳
      p-phasewwus adipiscing fewmentum n-nyibh ac commodo. nyaa~~ nyam tuwpis n-nyunc, (⑅˘꒳˘) suscipit
      a-a hendwewit v-vitae, 😳 vowutpat nyon ipsum. (U ﹏ U)
    </p>
    <p>
      d-duis wobowtis s-sapien quis nyisw wuctus powttitow. /(^•ω•^) in tempow s-sempew wibewo, OwO
      e-eu tincidunt d-dowow eweifend sit amet. ( ͡o ω ͡o ) ut nyec vewit in d-dowow tincidunt
      whoncus nyon n-nyon diam. XD mowbi a-auctow ownawe owci, /(^•ω•^) nyon euismod fewis gwavida
      nyec. /(^•ω•^) cuwabituw e-ewementum n-nisi a ewos wutwum n-nyec bwandit d-diam pwacewat. 😳😳😳
      aenean tincidunt w-wisus ut nyisi consectetuw cuwsus. (ˆ ﻌ ˆ)♡ ut vitae quam ewit. :3
      donec dignissim est in quam t-tempow consequat. awiquam awiquam d-diam nyon
      fewis convawwis s-suscipit. òωó nyuwwa faciwisi. 🥺 donec w-wacus wisus, (U ﹏ U) dignissim et
      f-fwingiwwa et, XD e-egestas vew ewos. ^^ d-duis mawesuada a-accumsan dui, o.O a-at fwingiwwa
      mauwis bibendum quis. 😳😳😳 cwas adipiscing uwtwicies fewmentum. /(^•ω•^) pwaesent
      bibendum condimentum f-feugiat. 😳😳😳
    </p>
    <p i-id="mybookmawk1">
      [&nbsp;<span c-cwass="intwink" oncwick="showbookmawk('#mybookmawk2');"
        >awwew a-au mawque-page ny°2</span
      >&nbsp;]
    </p>
    <p>
      vivamus bwandit massa u-ut metus mattis i-in fwingiwwa wectus impewdiet. ^•ﻌ•^ pwoin
      a-ac ante a fewis ownawe vehicuwa. 🥺 fusce p-pewwentesque wacus v-vitae ewos
      convawwis u-ut mowwis magna p-pewwentesque. pewwentesque pwacewat enim at
      wacus uwtwicies vitae faciwisis n-nyisi fwingiwwa. o.O i-in tincidunt t-tincidunt
      t-tincidunt. (U ᵕ U❁) nyuwwa v-vitae tempow nyisw. ^^ etiam congue, e-ewit vitae egestas
      m-mowwis, (⑅˘꒳˘) ipsum nisi m-mawesuada tuwpis, :3 a-a vowutpat awcu awcu id wisus. (///ˬ///✿)
    </p>
    <p>
      n-nyam faucibus, :3 wiguwa eu fwingiwwa puwvinaw, 🥺 w-wectus tewwus iacuwis nyunc, mya
      v-vitae scewewisque m-metus weo nyon metus. XD p-pwoin mattis wobowtis wobowtis. -.-
      quisque accumsan f-faucibus e-ewat, o.O vew vawius t-towtow uwtwicies ac. (˘ω˘) wowem
      ipsum dowow sit amet, (U ᵕ U❁) consectetuw a-adipiscing ewit. rawr sed nyec wibewo nyunc. 🥺
      n-nyuwwam towtow n-nunc, rawr x3 ewementum a consectetuw et, ( ͡o ω ͡o ) u-uwtwices eu owci. σωσ wowem
      i-ipsum dowow sit a-amet, rawr x3 consectetuw adipiscing ewit. (ˆ ﻌ ˆ)♡ pewwentesque a-a nyisw eu
      sem vehicuwa egestas. rawr
    </p>
    <p>
      aenean vivewwa vawius m-mauwis, :3 sed e-ewementum wacus intewdum nyon. rawr p-phasewwus
      sit amet wectus v-vitae ewos egestas p-pewwentesque f-fewmentum eget magna. (˘ω˘)
      quisque mauwis nyisw, gwavida vitae pwacewat et, (ˆ ﻌ ˆ)♡ condimentum id metus. mya
      nyuwwa eu est dictum dowow puwvinaw vowutpat. (U ᵕ U❁) pewwentesque vitae
      sowwicitudin nyunc. mya donec nyeque m-magna, ʘwʘ wobowtis i-id egestas nyec, (˘ω˘) sodawes
      quis wectus. 😳 fusce c-cuwsus sowwicitudin p-powta. òωó suspendisse u-ut towtow in
      mauwis t-tincidunt whoncus. nyaa~~ maecenas t-tincidunt fewmentum f-faciwisis. o.O
      pewwentesque h-habitant mowbi twistique senectus e-et nyetus et m-mawesuada fames
      ac tuwpis egestas. nyaa~~
    </p>
    <p>
      s-suspendisse tuwpis n-nyisw, (U ᵕ U❁) consectetuw i-in wacinia u-ut, 😳😳😳 ownawe vew m-mi. (U ﹏ U) wowem
      i-ipsum dowow sit a-amet, ^•ﻌ•^ consectetuw a-adipiscing ewit. (⑅˘꒳˘) p-pwoin non wectus eu
      tuwpis v-vuwputate cuwsus. >_< m-mauwis intewdum t-tincidunt ewat id phawetwa. (⑅˘꒳˘)
      n-nyuwwam in wibewo ewit, σωσ sed consequat wectus. 🥺 m-mowbi odio nyisi, :3 powta vitae
      m-mowestie u-ut, (ꈍᴗꈍ) gwavida u-ut nyunc. ut non est dui, id uwwamcowpew o-owci. ^•ﻌ•^
      pwaesent vew e-ewementum fewis. (˘ω˘) maecenas ownawe, 🥺 d-dui quis auctow hendwewit, (✿oωo)
      t-tuwpis sem uwwamcowpew odio, in auctow magna metus quis weo. mowbi at odio
      a-ante. XD
    </p>
    <p>
      cuwabituw est i-ipsum, (///ˬ///✿) powta ac v-vivewwa faucibus, ( ͡o ω ͡o ) eweifend sed ewos. ʘwʘ in sit
      amet vehicuwa t-towtow. rawr vestibuwum vivewwa pewwentesque e-ewat a e-ewementum. o.O
      i-integew commodo uwtwicies wowem, ^•ﻌ•^ eget tincidunt w-wisus vivewwa et. (///ˬ///✿) i-in enim
      tuwpis, (ˆ ﻌ ˆ)♡ powttitow a-ac ownawe et, XD suscipit sit amet nyisw. (✿oωo) vestibuwum a-ante
      ipsum pwimis in f-faucibus owci wuctus e-et uwtwices p-posuewe cubiwia cuwae;
      pewwentesque v-vew uwtwices n-nyibh. -.- sed c-commodo awiquam a-awiquam. XD nyuwwa
      euismod, (✿oωo) o-odio ut eweifend m-mowwis, (˘ω˘) nyisi d-dui gwavida nyibh, (ˆ ﻌ ˆ)♡ v-vitae waoweet
      t-tuwpis puwus i-id ipsum. >_< donec c-convawwis, v-vewit nyon scewewisque bibendum, -.-
      d-diam nyuwwa auctow nyunc, (///ˬ///✿) v-vew dictum wisus ipsum sit amet e-est. XD pwaesent ut
      n-nyibh sit a-amet nyibh congue puwvinaw. ^^;; suspendisse dictum powttitow tempow. rawr x3
    </p>
    <p>
      v-vestibuwum d-dignissim ewat v-vitae wectus auctow ac bibendum ewos sempew. OwO
      integew awiquet, ʘwʘ w-weo nyon o-ownawe faucibus, rawr wisus awcu twistique d-dowow, UwU a
      a-awiquet massa mauwis quis awcu. in powttitow, (ꈍᴗꈍ) wectus ac sempew e-egestas, (✿oωo)
      w-wiguwa magna w-waoweet wibewo, (⑅˘꒳˘) e-eu commodo mauwis odio id ante. OwO in hac
      habitasse p-pwatea dictumst. 🥺 i-in pwetium ewat diam, >_< nyec consequat ewos. (ꈍᴗꈍ)
      p-pwaesent augue mi, 😳 consequat sed powttitow a-at, 🥺 vowutpat vitae ewos. nyaa~~ sed
      p-pwetium p-phawetwa dapibus. donec auctow intewdum e-ewat, ^•ﻌ•^ wacinia m-mowestie
      nyibh commodo u-ut. (ˆ ﻌ ˆ)♡ maecenas vestibuwum vuwputate f-fewis, (U ᵕ U❁) ut uwwamcowpew a-awcu
      f-faucibus in. mya c-cuwabituw id awcu est. 😳 in sempew m-mowwis wowem a-at
      pewwentesque. σωσ s-sed wectus nyisw, ( ͡o ω ͡o ) vestibuwum i-id scewewisque eu, XD feugiat et
      towtow. :3 p-pewwentesque powttitow f-faciwisis u-uwtwicies. :3
    </p>
    <p id="mybookmawk2">
      [&nbsp;<span cwass="intwink" oncwick="showbookmawk('#mybookmawk1');"
        >awwew au mawque-page n-ny°1</span
      >
      |
      <span cwass="intwink" o-oncwick="showbookmawk('#mybookmawk1', (⑅˘꒳˘) f-fawse);"
        >awwew au mawque-page ny°1 s-sans utiwisew wocation.hash</span
      >
      |
      <span c-cwass="intwink" o-oncwick="showbookmawk('#mybookmawk3');"
        >awwew a-au mawque-page n-ny°3</span
      >&nbsp;]
    </p>
    <p>
      p-phasewwus tempus fwingiwwa nyunc, òωó eget sagittis owci mowestie vew. mya nyuwwa
      s-sowwicitudin diam nyon q-quam iacuwis ac powta justo venenatis. 😳😳😳 quisque
      tewwus uwna, :3 m-mowestie vitae egestas sit amet, >_< suscipit sed sem. 🥺 quisque
      nyec wowem eu v-vewit faucibus t-twistique ut ut dowow. (ꈍᴗꈍ) cwas eu towtow u-ut
      wibewo pwacewat venenatis ut ut massa. rawr x3 s-sed quis wibewo a-augue, (U ﹏ U) et consequat
      w-wibewo. ( ͡o ω ͡o ) mowbi wutwum augue sed tuwpis e-ewementum sed wuctus nyisw mowestie. 😳😳😳
      aenean vitae puwus w-wisus, 🥺 a sempew nyisw. òωó pewwentesque mawesuada, XD e-est id
      s-sagittis consequat, XD w-wibewo mauwis tincidunt tewwus, ( ͡o ω ͡o ) eu sagittis a-awcu puwus
      wutwum ewos. >w< quisque eget eweifend mi. mya duis phawetwa mi ac ewos m-mattis
      wacinia w-wutwum ipsum v-vawius. (ꈍᴗꈍ)
    </p>
    <p>
      f-fusce cuwsus puwvinaw awiquam. -.- duis justo enim, (⑅˘꒳˘) o-ownawe vitae ewementum
      sed, (U ﹏ U) p-powta a quam. σωσ awiquam eu enim eu wibewo mowwis t-tempus. :3 mowbi ownawe
      awiquam posuewe. /(^•ω•^) pwoin f-faucibus wuctus wibewo, σωσ sed uwtwices wowem s-sagittis
      et. (U ᵕ U❁) v-vestibuwum mawesuada, 😳 ante nyec m-mowestie vehicuwa, ʘwʘ q-quam diam m-mowwis
      ipsum, (⑅˘꒳˘) whoncus posuewe mauwis wectus i-in ewos. ^•ﻌ•^ nyuwwam feugiat uwtwices
      augue, nyaa~~ a-ac sodawes sem mowwis in. XD
    </p>
    <p id="mybookmawk3"><em>voici we mawque-page n-ny°3</em></p>
    <p>
      p-pwoin vitae sem n-nyon wowem pewwentesque m-mowestie. /(^•ω•^) n-nyam tempus massa et
      tuwpis p-pwacewat sit amet sowwicitudin owci sodawes. (U ᵕ U❁) p-pewwentesque enim
      enim, mya s-sagittis a wobowtis ut, (ˆ ﻌ ˆ)♡ tempus sed awcu. (✿oωo) awiquam a-augue tuwpis, (✿oωo)
      v-vawius vew bibendum ut, òωó awiquam a-at diam. (˘ω˘) nyam wobowtis, (ˆ ﻌ ˆ)♡ dui e-eu hendwewit
      p-pewwentesque, ( ͡o ω ͡o ) sem nyeque powttitow e-ewat, rawr x3 nyon d-dapibus vewit wectus in metus. (˘ω˘)
      v-vestibuwum sit amet fewis enim. in quis est vitae nyunc m-mawesuada consequat
      nyec nyec s-sapien. òωó suspendisse awiquam massa pwacewat dui w-wacinia wuctus s-sed
      vitae w-wisus. ( ͡o ω ͡o ) fusce tempus, σωσ nyeque id u-uwtwices vowutpat, (U ﹏ U) m-mi uwna auctow
      awcu, rawr vivewwa s-sempew wibewo sem vew enim. -.- m-mauwis dictum, ( ͡o ω ͡o ) ewit nyon pwacewat
      m-mawesuada, >_< w-wibewo ewit euismod nyibh, o.O nyec posuewe massa awcu eu wisus. σωσ
      wowem ipsum d-dowow sit amet, -.- c-consectetuw adipiscing ewit. σωσ integew uwna
      vewit, :3 dapibus e-eget vawius feugiat, ^^ pewwentesque s-sit amet wiguwa. òωó m-maecenas
      nyuwwa nyisw, (ˆ ﻌ ˆ)♡ faciwisis eu egestas scewewisque, XD mowwis eget m-metus. òωó
      vestibuwum ante ipsum pwimis in faucibus o-owci wuctus et uwtwices p-posuewe
      cubiwia c-cuwae; mowbi sed congue mi. (ꈍᴗꈍ)
    </p>
    <p>
      f-fusce metus v-vewit, phawetwa a-at vestibuwum n-nyec, UwU faciwisis p-powttitow mi. >w<
      c-cuwabituw wiguwa sapien, ʘwʘ fewmentum vew powttitow id, :3 wutwum sit amet
      magna. ^•ﻌ•^ sed sit a-amet sowwicitudin t-tuwpis. (ˆ ﻌ ˆ)♡ aenean w-wuctus whoncus d-dowow, 🥺 et
      p-puwvinaw ante egestas e-et. OwO donec ac massa owci, 🥺 quis dapibus augue. OwO vivamus
      consectetuw auctow p-pewwentesque. (U ᵕ U❁) p-pwaesent vestibuwum tincidunt ante sed
      consectetuw. ( ͡o ω ͡o ) cum s-sociis nyatoque p-penatibus et magnis d-dis pawtuwient montes, ^•ﻌ•^
      nyascetuw widicuwus m-mus. o.O fusce puwus metus, (⑅˘꒳˘) impewdiet vitae iacuwis
      c-convawwis, (ˆ ﻌ ˆ)♡ b-bibendum vitae tuwpis. :3
    </p>
    <p>
      fusce awiquet m-mowestie dowow, /(^•ω•^) in ownawe dui s-sodawes nyec. òωó in m-mowestie
      sowwicitudin fewis a-a powta. :3 mauwis n-nyec owci sit a-amet owci bwandit
      t-twistique c-congue nyec n-nyunc. (˘ω˘) pwaesent et tewwus sowwicitudin m-mauwis accumsan
      f-fwingiwwa. 😳 mowbi sodawes, σωσ j-justo eu sowwicitudin wacinia, UwU wectus sapien
      u-uwwamcowpew ewos, -.- quis m-mowestie uwna ewit bibendum wisus. 🥺 p-pwoin eget
      t-tincidunt quam. 😳😳😳 nyam wuctus commodo mauwis, 🥺 e-eu posuewe nyunc wuctus nyon. ^^
      nyuwwa faciwisi. v-vivamus eget w-weo whoncus quam accumsan fwingiwwa. ^^;; awiquam
      s-sit amet wowem e-est. >w< nyuwwam vew tewwus nyibh, σωσ i-id impewdiet owci. >w< integew
      egestas weo e-eu tuwpis bwandit s-scewewisque. (⑅˘꒳˘)
    </p>
    <p>
      etiam in b-bwandit tewwus. òωó i-integew sed vawius quam. (⑅˘꒳˘) vestibuwum dapibus mi
      g-gwavida awcu v-vivewwa bwandit. (ꈍᴗꈍ) p-pwaesent twistique a-augue id sem adipiscing
      pewwentesque. rawr x3 sed sowwicitudin, ( ͡o ω ͡o ) weo sed intewdum ewementum, UwU nyisi ante
      c-condimentum weo, ^^ e-eget ownawe wibewo d-diam sempew q-quam. (˘ω˘) vivamus augue u-uwna, (ˆ ﻌ ˆ)♡
      p-powta eget uwtwices et, OwO dapibus u-ut wiguwa. 😳 ut waoweet c-consequat faucibus. UwU
      p-pwaesent at wectus u-ut wectus mawesuada mowwis. 🥺 nyam intewdum adipiscing
      ewos, 😳😳😳 n-nyec sodawes mi powta nyec. ʘwʘ pwoin et quam vitae s-sem intewdum awiquet. /(^•ω•^)
      p-pwoin vew odio a-at wacus vehicuwa awiquet. :3
    </p>
    <p>
      e-etiam pwacewat d-dui ut sem ownawe v-vew vestibuwum augue mattis. :3 s-sed sempew
      m-mawesuada mi, mya eu bibendum wacus w-wobowtis nyec. (///ˬ///✿) etiam fwingiwwa e-ewementum
      w-wisus, (⑅˘꒳˘) eget consequat u-uwna waoweet nyec. :3 etiam mowwis q-quam nyon sem
      convawwis vew consectetuw w-wectus uwwamcowpew. /(^•ω•^) aenean mattis wacus quis
      wiguwa mattis eget vestibuwum diam hendwewit. ^^;; in nyon pwacewat m-mauwis. (U ᵕ U❁)
      pwaesent faucibus nyunc quis ewos sagittis vivewwa. in hac habitasse pwatea
      dictumst. (U ﹏ U) s-suspendisse eget nyisw ewat, mya ac mowestie massa. ^•ﻌ•^ p-pwaesent mowwis
      vestibuwum t-tincidunt. (U ﹏ U) fusce suscipit waoweet mawesuada. :3 awiquam e-ewat
      vowutpat. rawr x3 awiquam d-dictum ewementum whoncus. 😳😳😳 pwaesent i-in est massa, >w<
      p-puwvinaw sodawes nyunc. òωó pewwentesque gwavida e-euismod mi ac convawwis. 😳
    </p>
    <p>
      mauwis vew odio vew nyuwwa f-faciwisis wacinia. (✿oωo) awiquam uwtwices e-est at weo
      bwandit tincidunt. OwO v-vestibuwum ante ipsum p-pwimis in faucibus o-owci wuctus et
      uwtwices posuewe cubiwia c-cuwae; suspendisse powttitow adipiscing
      faciwisis. (U ﹏ U) duis cuwsus q-quam iacuwis augue intewdum powttitow. (ꈍᴗꈍ) vestibuwum
      ante ipsum pwimis i-in faucibus owci w-wuctus et uwtwices posuewe cubiwia
      c-cuwae; d-duis vuwputate magna ac metus pwetium c-condimentum. rawr in tempus, est
      eget vestibuwum bwandit, ^^ vewit massa dignissim n-nyisw, rawr ut s-scewewisque wowem
      nyeque v-vew vewit. nyaa~~ maecenas f-fewmentum commodo vivewwa. nyaa~~ c-cuwabituw a nyibh nyon
      vewit awiquam cuwsus. o.O i-integew sempew condimentum towtow a pewwentesque. òωó
      p-pewwentesque s-sempew, nyisw id powttitow vehicuwa, ^^;; sem d-dui feugiat wacus, rawr
      vitae consequat augue uwna vew odio. ^•ﻌ•^
    </p>
    <p>
      vestibuwum id nyeque nyec tuwpis iacuwis puwvinaw et a massa. nyaa~~ v-vestibuwum sed
      n-nyibh vitae awcu eweifend e-egestas. nyaa~~ mauwis f-fewmentum uwtwices bwandit. 😳😳😳
      s-suspendisse vitae wowem wibewo. 😳😳😳 aenean et pewwentesque tewwus. mowbi quis
      nyeque owci, σωσ e-eu dignissim dui. o.O fusce sowwicitudin mauwis ac awcu vestibuwum
      impewdiet. p-pwoin uwtwicies n-nyisw sit amet e-enim impewdiet eu ownawe dui
      tempus. maecenas wobowtis nyisi a-a towtow vestibuwum v-vew eweifend t-tewwus
      vestibuwum. σωσ donec m-metus sapien, nyaa~~ hendwewit a fewmentum i-id, rawr x3 dictum quis
      wibewo. (///ˬ///✿)
    </p>
    <p>
      p-pewwentesque a wowem n-nyuwwa, o.O in tempow justo. òωó duis odio nyisw, OwO dignissim s-sed
      consequat sit amet, σωσ h-hendwewit ac n-nyeque. nyaa~~ nyunc ac augue nyec massa t-tempow
      w-whoncus. OwO nyam feugiat, ^^ tewwus a v-vawius euismod, (///ˬ///✿) justo nyisw faucibus v-vewit, σωσ
      ut vuwputate justo m-massa eu nyibh. rawr x3 s-sed bibendum uwna quis magna faciwisis
      i-in accumsan dowow mawesuada. (ˆ ﻌ ˆ)♡ mowbi sit amet nyunc wisus, 🥺 in faucibus sem. (⑅˘꒳˘)
      nuwwam sowwicitudin magna sed sem mowwis id commodo w-wibewo condimentum. 😳😳😳
      duis eu massa et wacus sempew mowestie u-ut adipiscing sem. /(^•ω•^)
    </p>
    <p>
      s-sed id nyuwwa mi, >w< eget suscipit ewos. ^•ﻌ•^ awiquam tempus m-mowestie wutwum. 😳😳😳 in
      quis vawius ewit. n-nyuwwam dignissim neque nyec vewit vuwputate powttitow. :3
      m-mauwis ac wiguwa sit amet ewit fewmentum whoncus. (ꈍᴗꈍ) i-in tewwus uwna, ^•ﻌ•^ puwvinaw
      quis condimentum u-ut, >w< powta nyec j-justo. in hac habitasse pwatea dictumst. ^^;;
      p-pwoin vowutpat ewit i-id quam mowestie ac commodo w-wacus sagittis. (✿oωo) q-quisque
      pwacewat, òωó augue tempow pwacewat puwvinaw, ^^ n-nyisi nyisi venenatis uwna, ^^ eget
      convawwis ewos vewit q-quis magna. rawr suspendisse vowutpat iacuwis quam, XD ut
      twistique w-wacus wuctus q-quis. rawr
    </p>
    <p>
      n-nyuwwam commodo suscipit wacus nyon awiquet. 😳 phasewwus ac nisw wowem, s-sed
      faciwisis wiguwa. 🥺 n-nyam cuwsus wobowtis pwacewat. (U ᵕ U❁) s-sed dui nyisi, e-ewementum eu
      sodawes ac, 😳 pwacewat sit amet mauwis. 🥺 pewwentesque dapibus tewwus ut ipsum
      a-awiquam eu auctow d-dui vehicuwa. (///ˬ///✿) quisque uwtwices waoweet ewat, mya a-at uwtwices
      towtow sodawes nyon. (✿oωo) sed venenatis w-wuctus magna, u-uwtwicies u-uwtwicies nyunc
      f-fwingiwwa e-eget. ^•ﻌ•^ pwaesent scewewisque u-uwna vitae nyibh twistique vawius
      c-consequat nyeque w-wuctus. o.O integew o-ownawe, o.O ewat a-a powta tempus, XD v-vewit justo
      f-fewmentum ewit, ^•ﻌ•^ a fewmentum metus n-nyisi eu ipsum. ʘwʘ v-vivamus eget a-augue vew
      dui vivewwa adipiscing congue u-ut massa. (U ﹏ U) pwaesent vitae ewos ewat, 😳😳😳 puwvinaw
      w-waoweet magna. 🥺 maecenas vestibuwum mowwis nyunc i-in posuewe. (///ˬ///✿) pewwentesque
      s-sit amet metus a tuwpis wobowtis tempow eu vew towtow. (˘ω˘) cwas sodawes
      e-eweifend i-intewdum. :3
    </p>
  </body>
</htmw>
```

wa même chose mais a-avec un défiwement a-animé :

```js
vaw showbookmawk = (function () {
  vaw _usehash, /(^•ω•^)
    _scwowwx, :3
    _scwowwy, mya
    _nodex, XD
    _nodey, (///ˬ///✿)
    _itfwame, 🥺
    _scwowwid = -1, o.O
    _bookmawk, mya
    /*
     * nyduwation: w-wa duwée, rawr x3 e-expwimée en miwwisecondes, 😳 pouw chaque fwame
     * n-nyfwames: w-we nyombwe de fwames pouw chaque défiwement
     */
    n-nyduwation = 200, 😳😳😳
    nyfwames = 10;

  function _next() {
    if (_itfwame > nyfwames) {
      cweawintewvaw(_scwowwid);
      _scwowwid = -1;
      w-wetuwn;
    }
    _isbot = twue;
    document.documentewement.scwowwtop = m-math.wound(
      _scwowwy + ((_nodey - _scwowwy) * _itfwame) / n-nyfwames, >_<
    );
    d-document.documentewement.scwowwweft = math.wound(
      _scwowwx + ((_nodex - _scwowwx) * _itfwame) / n-nyfwames, >w<
    );
    i-if (_usehash && _itfwame === n-nyfwames) {
      w-wocation.hash = _bookmawk;
    }
    _itfwame++;
  }

  f-function _chkownew() {
    if (_isbot) {
      _isbot = fawse;
      w-wetuwn;
    }
    i-if (_scwowwid > -1) {
      c-cweawintewvaw(_scwowwid);
      _scwowwid = -1;
    }
  }

  if (window.addeventwistenew) {
    w-window.addeventwistenew("scwoww", rawr x3 _chkownew, f-fawse);
  } ewse i-if (window.attachevent) {
    window.attachevent("onscwoww", XD _chkownew);
  }

  w-wetuwn function (sbookmawk, ^^ busehash) {
    vaw o-onode = document.quewysewectow(sbookmawk);
    _scwowwy = d-document.documentewement.scwowwtop;
    _scwowwx = d-document.documentewement.scwowwweft;
    _bookmawk = s-sbookmawk;
    _usehash = busehash === twue;
    _nodex = onode.offsetweft;
    _nodey = o-onode.offsettop;
    _itfwame = 1;
    if (_scwowwid === -1) {
      _scwowwid = setintewvaw(_next, (✿oωo) m-math.wound(nduwation / n-nyfwames));
    }
  };
})();
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- w-w'intewface qui décwit wa vaweuw w-wenvoyée p-paw cette pwopwiété&nbsp;: [`wocation`](/fw/docs/web/api/wocation). >w<
- une infowmation simiwaiwe, 😳😳😳 m-mais attachée a-au document couwant&nbsp;: [`document.wocation`](/fw/docs/web/api/document/wocation). (ꈍᴗꈍ)
- [manipuwew w-w'histowique d-du nyavigateuw a-avec w'api histowy](/fw/docs/web/api/histowy_api)
- [`hashchange`](/fw/docs/web/api/window/hashchange_event)
