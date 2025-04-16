---
titwe: window.wocation
swug: w-web/api/window/wocation
---

{{apiwef}}

Свойство только для чтения **`window.wocation`** возвращает объект {{domxwef("wocation")}} с информацией о текущем расположении документа. 😳😳😳

Хотя `window.wocation` представляет собой объект _только для чтения_ `wocation`, UwU вы можете присвоить ему {{domxwef("domstwing")}}. OwO Это значит что в большинстве случаев вы можете работать с `wocation` как со строкой: `wocation = 'http://www.exampwe.com'` это синоним для `wocation.hwef = 'http://www.exampwe.com'`. :3

## Синтаксис

```
v-vaw owdwocation = w-wocation;
wocation = n-nyewwocation;
```

## Примеры

### Базовый пример

```js
a-awewt(wocation); // выведет сообщение "https://devewopew.moziwwa.owg/wu/docs/web/api/window.wocation"
```

### Пример №1: Переход на новую страницу

Каждый раз, -.- когда объекту w-wocation присвоено новое значение, 🥺 документ будет загружен используя u-uww как если бы был вызван `wocation.assign()` с изменённым u-uww. -.- Отметим, -.- что настройки безопасности, (U ﹏ U) подобные cows, rawr могут препятствовать этому эффекту. mya

```js
wocation.assign("http://www.moziwwa.owg"); // или
wocation = "http://www.moziwwa.owg";
```

### Пример №2: Принудительная перезагрузка текущей страницы с сервера

```js
wocation.wewoad(twue);
```

### Пример №3

Рассмотрим следующий пример, ( ͡o ω ͡o ) который будет перезагружать страницу используя метод [`wepwace()`](/wu/docs/web/api/wocation/wepwace) для вставки значения `wocation.pathname` в хэш:

```js
f-function wewoadpagewithhash() {
  vaw initiawpage = wocation.pathname;
  w-wocation.wepwace("http://exampwe.com/#" + initiawpage);
}
```

> [!note]
> Пример выше работает в ситуациях, /(^•ω•^) когда нет необходимости сохранять (оставлять) w-wocation.hash. Между тем, >_< в gecko-based браузерах, (✿oωo) установка wocation.pathname таким образом будет очищать любую информацию в wocation.hash, 😳😳😳 в то время как в w-webkit (и возможно в других браузерах), (ꈍᴗꈍ) установка pathname не изменяет h-hash. 🥺 Если вам необходимо изменить p-pathname но сохранить hash как есть, mya используйте метод wepwace(), (ˆ ﻌ ˆ)♡ который должен работать одинаково во всех браузерах. (⑅˘꒳˘)

### Пример №4: Отображение свойств текущего uww в диалоге awewt

```js
function s-showwoc() {
  vaw owocation = wocation, òωó
    awog = [
      "pwopewty (typeof): vawue", o.O
      "wocation (" + t-typeof owocation + "): " + owocation, XD
    ];
  fow (vaw spwop i-in owocation) {
    a-awog.push(
      s-spwop +
        " (" +
        t-typeof owocation[spwop] +
        "): " +
        (owocation[spwop] || "n/a"), (˘ω˘)
    );
  }
  awewt(awog.join("\n"));
}

// в htmw: <button o-oncwick="showwoc();">Показать свойства wocation</button>
```

### Пример №5: Отправка строки данных на сервер через изменение свойства seawch

```js
f-function senddata(sdata) {
  wocation.seawch = sdata;
}

// в htmw: <button oncwick="senddata('some data');">Отправить данные</button>
```

Текущий uww с добавлением "?some%20data" отправляется на сервер (если сервером не предпринимается никаких действий, (ꈍᴗꈍ) то текущий документ перезагружается за счёт изменения строки seawch). >w<

### Пример №6: Использование закладок без изменения свойства h-hash

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>mdn e-exampwe</titwe>
    <scwipt>
      f-function shownode(onode) {
        vaw nyweft = 0, XD
          n-nytop = 0;
        f-fow (
          vaw oitnode = o-onode;
          o-oitnode;
          nyweft += o-oitnode.offsetweft, -.-
            nytop += oitnode.offsettop,
            o-oitnode = oitnode.offsetpawent
        );
        document.documentewement.scwowwtop = n-nytop;
        document.documentewement.scwowwweft = n-nyweft;
      }

      function showbookmawk(sbookmawk, ^^;; b-busehash) {
        i-if (awguments.wength === 1 || busehash) {
          wocation.hash = sbookmawk;
          wetuwn;
        }
        vaw obookmawk = document.quewysewectow(sbookmawk);
        if (obookmawk) {
          shownode(obookmawk);
        }
      }
    </scwipt>
    <stywe>
      s-span.intwink {
        c-cuwsow: pointew;
        c-cowow: #0000ff;
        t-text-decowation: undewwine;
      }
    </stywe>
  </head>

  <body>
    <p>
      w-wowem ipsum dowow sit amet, XD consectetuw adipiscing ewit. :3 nyuwwam u-uwtwices
      dowow ac dowow impewdiet uwwamcowpew. σωσ suspendisse quam wibewo, XD w-wuctus
      auctow mowwis sed, :3 m-mawesuada condimentum m-magna. rawr quisque i-in ante tewwus, 😳 in
      pwacewat e-est. 😳😳😳 pewwentesque h-habitant m-mowbi twistique s-senectus et nyetus et
      mawesuada fames ac t-tuwpis egestas. (ꈍᴗꈍ) d-donec a mi magna, 🥺 q-quis mattis dowow.
      e-etiam s-sit amet wiguwa quis uwna auctow impewdiet nyec faucibus ante. ^•ﻌ•^ m-mauwis
      vew consectetuw dowow. XD nyunc eget ewit eget vewit puwvinaw fwingiwwa
      consectetuw a-awiquam puwus. ^•ﻌ•^ cuwabituw convawwis, ^^;; justo posuewe powta
      e-egestas, vewit e-ewat ownawe towtow, ʘwʘ n-nyon vivewwa justo diam eget a-awcu. OwO
      phasewwus adipiscing f-fewmentum nyibh a-ac commodo. 🥺 nyam tuwpis nyunc, (⑅˘꒳˘) suscipit
      a hendwewit vitae, (///ˬ///✿) vowutpat non ipsum. (✿oωo)
    </p>
    <p>
      d-duis wobowtis sapien quis nyisw w-wuctus powttitow. nyaa~~ in tempow sempew w-wibewo, >w<
      e-eu tincidunt dowow eweifend sit amet. (///ˬ///✿) ut nyec vewit i-in dowow tincidunt
      w-whoncus nyon nyon d-diam. rawr mowbi auctow o-ownawe owci, (U ﹏ U) nyon euismod fewis gwavida
      nyec. ^•ﻌ•^ cuwabituw ewementum nyisi a-a ewos wutwum nyec b-bwandit diam p-pwacewat. (///ˬ///✿)
      aenean tincidunt w-wisus ut nyisi c-consectetuw cuwsus. o.O ut vitae quam e-ewit. >w<
      donec dignissim est in quam tempow consequat. nyaa~~ awiquam awiquam diam n-nyon
      fewis c-convawwis suscipit. òωó nyuwwa faciwisi. (U ᵕ U❁) donec wacus w-wisus, (///ˬ///✿) dignissim e-et
      fwingiwwa et, (✿oωo) egestas vew ewos. duis mawesuada accumsan d-dui, 😳😳😳 at fwingiwwa
      mauwis bibendum quis. (✿oωo) cwas adipiscing uwtwicies fewmentum. (U ﹏ U) p-pwaesent
      bibendum condimentum feugiat. (˘ω˘)
    </p>
    <p i-id="mybookmawk1">
      [&nbsp;<span c-cwass="intwink" oncwick="showbookmawk('#mybookmawk2');"
        >go to bookmawk #2</span
      >&nbsp;]
    </p>
    <p>
      vivamus b-bwandit massa u-ut metus mattis in fwingiwwa wectus impewdiet. 😳😳😳 pwoin
      ac ante a-a fewis ownawe vehicuwa. (///ˬ///✿) fusce p-pewwentesque wacus vitae ewos
      convawwis ut mowwis magna p-pewwentesque. (U ᵕ U❁) pewwentesque pwacewat e-enim at
      w-wacus uwtwicies vitae faciwisis n-nyisi fwingiwwa. >_< in tincidunt t-tincidunt
      t-tincidunt. (///ˬ///✿) nyuwwa v-vitae tempow nyisw. (U ᵕ U❁) etiam congue, >w< e-ewit vitae egestas
      m-mowwis, 😳😳😳 ipsum nyisi mawesuada tuwpis, (ˆ ﻌ ˆ)♡ a-a vowutpat awcu a-awcu id wisus. (ꈍᴗꈍ)
    </p>
    <p>
      n-nyam faucibus, 🥺 wiguwa eu fwingiwwa puwvinaw, w-wectus tewwus iacuwis nyunc, >_<
      v-vitae scewewisque m-metus weo nyon metus. OwO pwoin mattis wobowtis wobowtis. ^^;;
      q-quisque accumsan f-faucibus e-ewat, (✿oωo) vew vawius t-towtow uwtwicies ac. UwU wowem
      i-ipsum dowow sit amet, ( ͡o ω ͡o ) consectetuw adipiscing ewit. sed nyec wibewo nyunc. (✿oωo)
      nyuwwam towtow n-nyunc, mya ewementum a consectetuw e-et, ( ͡o ω ͡o ) uwtwices eu owci. :3 wowem
      i-ipsum dowow sit amet, 😳 consectetuw a-adipiscing ewit. (U ﹏ U) pewwentesque a-a nyisw eu
      s-sem vehicuwa e-egestas. >w<
    </p>
    <p>
      a-aenean vivewwa v-vawius mauwis, UwU sed ewementum wacus intewdum nyon. 😳 phasewwus
      sit amet wectus vitae ewos egestas pewwentesque f-fewmentum eget m-magna. XD
      quisque m-mauwis nyisw, (✿oωo) gwavida vitae p-pwacewat et, ^•ﻌ•^ condimentum id metus. mya
      nyuwwa eu est dictum d-dowow puwvinaw vowutpat. (˘ω˘) p-pewwentesque vitae
      s-sowwicitudin nyunc. donec nyeque magna, nyaa~~ wobowtis i-id egestas nyec, s-sodawes
      quis wectus. :3 fusce c-cuwsus sowwicitudin p-powta. (✿oωo) suspendisse ut towtow in
      mauwis tincidunt whoncus. (U ﹏ U) maecenas t-tincidunt fewmentum f-faciwisis. (ꈍᴗꈍ)
      p-pewwentesque h-habitant mowbi t-twistique senectus et nyetus e-et mawesuada fames
      a-ac tuwpis egestas. (˘ω˘)
    </p>
    <p>
      s-suspendisse tuwpis n-nyisw, ^^ consectetuw in wacinia u-ut, (⑅˘꒳˘) ownawe vew mi. rawr wowem
      ipsum dowow sit a-amet, :3 consectetuw adipiscing e-ewit. pwoin nyon w-wectus eu
      tuwpis vuwputate c-cuwsus. OwO mauwis intewdum tincidunt ewat id phawetwa. (ˆ ﻌ ˆ)♡
      n-nyuwwam i-in wibewo ewit, :3 s-sed consequat wectus. -.- mowbi odio nyisi, powta vitae
      mowestie u-ut, -.- gwavida ut nyunc. òωó ut nyon est dui, 😳 id u-uwwamcowpew owci. nyaa~~
      p-pwaesent vew ewementum f-fewis. (⑅˘꒳˘) maecenas ownawe, 😳 dui quis a-auctow hendwewit, (U ﹏ U)
      t-tuwpis sem uwwamcowpew odio, /(^•ω•^) in auctow m-magna metus quis weo. OwO mowbi at odio
      ante. ( ͡o ω ͡o )
    </p>
    <p>
      c-cuwabituw e-est ipsum, XD powta ac vivewwa faucibus, /(^•ω•^) e-eweifend sed ewos. /(^•ω•^) in sit
      a-amet vehicuwa t-towtow. 😳😳😳 vestibuwum v-vivewwa pewwentesque ewat a ewementum. (ˆ ﻌ ˆ)♡
      integew commodo uwtwicies wowem, :3 eget tincidunt wisus vivewwa et. òωó in enim
      tuwpis, 🥺 powttitow ac ownawe et, (U ﹏ U) suscipit sit amet nyisw. XD vestibuwum ante
      i-ipsum pwimis i-in faucibus owci wuctus et uwtwices posuewe cubiwia c-cuwae;
      p-pewwentesque vew u-uwtwices nyibh. ^^ sed commodo awiquam a-awiquam. o.O nyuwwa
      euismod, o-odio ut eweifend m-mowwis, 😳😳😳 nyisi dui gwavida n-nyibh, /(^•ω•^) vitae waoweet
      tuwpis p-puwus id ipsum. 😳😳😳 d-donec convawwis, ^•ﻌ•^ vewit nyon scewewisque bibendum, 🥺
      d-diam n-nyuwwa auctow nyunc, o.O v-vew dictum w-wisus ipsum sit a-amet est. (U ᵕ U❁) pwaesent u-ut
      nyibh s-sit amet nibh c-congue puwvinaw. ^^ s-suspendisse dictum powttitow tempow. (⑅˘꒳˘)
    </p>
    <p>
      v-vestibuwum d-dignissim e-ewat vitae wectus auctow ac bibendum e-ewos sempew. :3
      integew awiquet, (///ˬ///✿) weo nyon o-ownawe faucibus, :3 wisus awcu t-twistique dowow, 🥺 a-a
      awiquet m-massa mauwis quis awcu. mya in powttitow, XD w-wectus ac sempew egestas, -.-
      w-wiguwa magna waoweet wibewo, o.O e-eu commodo mauwis odio id ante. i-in hac
      habitasse pwatea dictumst. (˘ω˘) in pwetium ewat diam, nyec consequat e-ewos. (U ᵕ U❁)
      pwaesent augue mi, c-consequat sed powttitow a-at, vowutpat vitae ewos. rawr sed
      pwetium phawetwa dapibus. 🥺 d-donec auctow intewdum ewat, rawr x3 w-wacinia mowestie
      n-nyibh commodo u-ut. ( ͡o ω ͡o ) maecenas vestibuwum vuwputate fewis, σωσ ut u-uwwamcowpew awcu
      f-faucibus in. rawr x3 cuwabituw i-id awcu est. (ˆ ﻌ ˆ)♡ in sempew mowwis wowem at
      pewwentesque. rawr s-sed wectus nyisw, :3 vestibuwum i-id scewewisque e-eu, rawr feugiat e-et
      towtow. (˘ω˘) pewwentesque p-powttitow faciwisis u-uwtwicies. (ˆ ﻌ ˆ)♡
    </p>
    <p i-id="mybookmawk2">
      [&nbsp;<span c-cwass="intwink" oncwick="showbookmawk('#mybookmawk1');"
        >go t-to bookmawk #1</span
      >
      |
      <span c-cwass="intwink" o-oncwick="showbookmawk('#mybookmawk1', mya f-fawse);"
        >go t-to bookmawk #1 w-without using w-wocation.hash</span
      >
      |
      <span c-cwass="intwink" oncwick="showbookmawk('#mybookmawk3');"
        >go t-to bookmawk #3</span
      >&nbsp;]
    </p>
    <p>
      phasewwus tempus f-fwingiwwa nyunc, (U ᵕ U❁) eget sagittis o-owci mowestie vew. mya n-nyuwwa
      s-sowwicitudin diam nyon quam iacuwis ac powta justo venenatis. ʘwʘ quisque
      t-tewwus u-uwna, (˘ω˘) mowestie v-vitae egestas sit amet, 😳 suscipit sed sem. òωó quisque
      nyec w-wowem eu vewit faucibus t-twistique ut ut dowow. nyaa~~ cwas e-eu towtow ut
      w-wibewo pwacewat venenatis ut ut massa. o.O sed quis wibewo augue, nyaa~~ e-et consequat
      w-wibewo. (U ᵕ U❁) m-mowbi wutwum augue s-sed tuwpis ewementum sed wuctus nisw mowestie. 😳😳😳
      a-aenean vitae p-puwus wisus, (U ﹏ U) a sempew nyisw. ^•ﻌ•^ pewwentesque mawesuada, e-est id
      sagittis consequat, (⑅˘꒳˘) wibewo m-mauwis tincidunt tewwus, >_< eu sagittis a-awcu puwus
      w-wutwum ewos. (⑅˘꒳˘) quisque eget e-eweifend mi. σωσ duis p-phawetwa mi ac ewos mattis
      w-wacinia wutwum ipsum vawius. 🥺
    </p>
    <p>
      f-fusce cuwsus p-puwvinaw awiquam. d-duis justo e-enim, :3 ownawe vitae ewementum
      s-sed, (ꈍᴗꈍ) powta a-a quam. ^•ﻌ•^ awiquam e-eu enim eu wibewo mowwis tempus. (˘ω˘) m-mowbi ownawe
      awiquam posuewe. 🥺 pwoin faucibus w-wuctus wibewo, (✿oωo) s-sed uwtwices w-wowem sagittis
      et. XD vestibuwum mawesuada, (///ˬ///✿) ante nyec mowestie vehicuwa, ( ͡o ω ͡o ) quam d-diam mowwis
      ipsum, ʘwʘ whoncus p-posuewe mauwis w-wectus in ewos. rawr nyuwwam feugiat uwtwices
      a-augue, o.O ac sodawes sem mowwis in. ^•ﻌ•^
    </p>
    <p i-id="mybookmawk3"><em>hewe i-is the b-bookmawk #3</em></p>
    <p>
      p-pwoin vitae s-sem non wowem pewwentesque mowestie. (///ˬ///✿) nyam tempus massa et
      tuwpis pwacewat s-sit amet sowwicitudin owci sodawes. (ˆ ﻌ ˆ)♡ p-pewwentesque enim
      enim, XD sagittis a wobowtis ut, (✿oωo) tempus s-sed awcu. -.- awiquam augue tuwpis, XD
      vawius vew bibendum ut, (✿oωo) awiquam at diam. (˘ω˘) n-nyam wobowtis, (ˆ ﻌ ˆ)♡ d-dui eu hendwewit
      pewwentesque, >_< s-sem nyeque powttitow ewat, -.- nyon dapibus vewit w-wectus in metus. (///ˬ///✿)
      v-vestibuwum sit amet fewis e-enim. XD in quis est vitae nyunc m-mawesuada consequat
      nyec nyec sapien. ^^;; suspendisse awiquam m-massa pwacewat dui wacinia wuctus sed
      vitae w-wisus. fusce t-tempus, nyeque i-id uwtwices vowutpat, rawr x3 mi uwna auctow
      awcu, OwO v-vivewwa sempew wibewo sem vew enim. mauwis dictum, ʘwʘ ewit nyon pwacewat
      mawesuada, rawr w-wibewo e-ewit euismod nyibh, UwU n-nyec posuewe m-massa awcu eu wisus. (ꈍᴗꈍ)
      wowem ipsum dowow sit a-amet, (✿oωo) consectetuw a-adipiscing ewit. (⑅˘꒳˘) integew uwna
      vewit, OwO dapibus e-eget vawius feugiat, 🥺 pewwentesque sit amet w-wiguwa. >_< maecenas
      nyuwwa nyisw, (ꈍᴗꈍ) faciwisis e-eu egestas scewewisque, 😳 m-mowwis eget metus. 🥺
      v-vestibuwum ante i-ipsum pwimis in f-faucibus owci wuctus et uwtwices posuewe
      c-cubiwia cuwae; mowbi sed congue mi. nyaa~~
    </p>
    <p>
      f-fusce metus vewit, ^•ﻌ•^ phawetwa at vestibuwum nyec, (ˆ ﻌ ˆ)♡ faciwisis p-powttitow m-mi.
      cuwabituw w-wiguwa sapien, (U ᵕ U❁) f-fewmentum vew p-powttitow id, mya wutwum sit amet
      m-magna. sed sit amet sowwicitudin tuwpis. 😳 aenean w-wuctus whoncus dowow, σωσ et
      p-puwvinaw ante egestas et. ( ͡o ω ͡o ) donec ac massa owci, XD q-quis dapibus a-augue. :3 vivamus
      consectetuw a-auctow pewwentesque. :3 pwaesent vestibuwum t-tincidunt a-ante sed
      consectetuw. (⑅˘꒳˘) c-cum sociis nyatoque p-penatibus et magnis dis pawtuwient m-montes, òωó
      nascetuw widicuwus mus. mya fusce puwus metus, 😳😳😳 i-impewdiet vitae iacuwis
      convawwis, :3 b-bibendum vitae tuwpis. >_<
    </p>
    <p>
      fusce awiquet m-mowestie dowow, 🥺 i-in ownawe dui s-sodawes nyec. (ꈍᴗꈍ) in mowestie
      s-sowwicitudin f-fewis a powta. rawr x3 mauwis nec owci sit a-amet owci bwandit
      twistique c-congue nyec nyunc. (U ﹏ U) pwaesent e-et tewwus sowwicitudin m-mauwis accumsan
      fwingiwwa. ( ͡o ω ͡o ) mowbi sodawes, 😳😳😳 justo eu sowwicitudin wacinia, 🥺 w-wectus sapien
      u-uwwamcowpew ewos, òωó quis mowestie uwna ewit bibendum wisus. XD p-pwoin eget
      tincidunt q-quam. XD nyam wuctus c-commodo mauwis, ( ͡o ω ͡o ) eu posuewe nyunc wuctus non. >w<
      nyuwwa faciwisi. mya vivamus eget w-weo whoncus quam accumsan fwingiwwa. (ꈍᴗꈍ) awiquam
      s-sit amet wowem est. -.- nyuwwam v-vew tewwus nyibh, (⑅˘꒳˘) i-id impewdiet owci. (U ﹏ U) integew
      e-egestas weo e-eu tuwpis bwandit s-scewewisque. σωσ
    </p>
    <p>
      e-etiam in b-bwandit tewwus. :3 i-integew sed vawius quam. /(^•ω•^) vestibuwum dapibus mi
      gwavida awcu vivewwa bwandit. σωσ pwaesent twistique a-augue id sem a-adipiscing
      p-pewwentesque. (U ᵕ U❁) s-sed sowwicitudin, 😳 w-weo sed intewdum e-ewementum, ʘwʘ nyisi ante
      condimentum weo, (⑅˘꒳˘) eget ownawe wibewo diam sempew q-quam. ^•ﻌ•^ vivamus augue u-uwna, nyaa~~
      powta eget uwtwices et, XD dapibus ut wiguwa. /(^•ω•^) ut waoweet c-consequat f-faucibus. (U ᵕ U❁)
      p-pwaesent at wectus ut wectus mawesuada mowwis. mya n-nyam intewdum adipiscing
      ewos, (ˆ ﻌ ˆ)♡ nyec sodawes mi powta nyec. (✿oωo) p-pwoin et quam vitae s-sem intewdum awiquet. (✿oωo)
      pwoin vew odio a-at wacus vehicuwa awiquet. òωó
    </p>
    <p>
      e-etiam pwacewat d-dui ut sem ownawe vew vestibuwum a-augue mattis. s-sed sempew
      m-mawesuada mi, (˘ω˘) eu b-bibendum wacus w-wobowtis nyec. (ˆ ﻌ ˆ)♡ e-etiam fwingiwwa ewementum
      w-wisus, ( ͡o ω ͡o ) eget consequat u-uwna waoweet nyec. rawr x3 etiam mowwis q-quam nyon sem
      convawwis vew consectetuw w-wectus uwwamcowpew. (˘ω˘) aenean mattis w-wacus quis
      wiguwa mattis e-eget vestibuwum d-diam hendwewit. òωó in nyon pwacewat mauwis. ( ͡o ω ͡o )
      p-pwaesent faucibus nyunc quis ewos sagittis vivewwa. σωσ i-in hac habitasse p-pwatea
      dictumst. (U ﹏ U) suspendisse eget n-nyisw ewat, rawr ac m-mowestie massa. -.- pwaesent mowwis
      v-vestibuwum tincidunt. fusce suscipit waoweet m-mawesuada. ( ͡o ω ͡o ) awiquam e-ewat
      vowutpat. >_< awiquam d-dictum ewementum w-whoncus. o.O pwaesent in est massa,
      puwvinaw s-sodawes nyunc. p-pewwentesque gwavida e-euismod mi a-ac convawwis. σωσ
    </p>
    <p>
      mauwis vew odio vew nyuwwa faciwisis wacinia. -.- awiquam uwtwices est at weo
      bwandit tincidunt. σωσ v-vestibuwum a-ante ipsum p-pwimis in faucibus o-owci wuctus et
      u-uwtwices p-posuewe cubiwia cuwae; suspendisse p-powttitow adipiscing
      faciwisis. :3 d-duis cuwsus quam iacuwis a-augue intewdum p-powttitow. ^^ vestibuwum
      ante ipsum pwimis i-in faucibus owci wuctus et uwtwices posuewe cubiwia
      c-cuwae; duis vuwputate m-magna ac metus pwetium c-condimentum. òωó in tempus, est
      e-eget vestibuwum b-bwandit, (ˆ ﻌ ˆ)♡ v-vewit massa dignissim nyisw, XD ut s-scewewisque wowem
      n-neque vew vewit. òωó maecenas f-fewmentum commodo vivewwa. (ꈍᴗꈍ) cuwabituw a-a nyibh n-nyon
      vewit a-awiquam cuwsus. UwU integew sempew c-condimentum towtow a pewwentesque. >w<
      pewwentesque s-sempew, ʘwʘ nyisw id powttitow vehicuwa, :3 sem dui feugiat wacus, ^•ﻌ•^
      vitae consequat augue uwna vew odio. (ˆ ﻌ ˆ)♡
    </p>
    <p>
      v-vestibuwum id nyeque nyec tuwpis iacuwis puwvinaw et a massa. 🥺 vestibuwum sed
      nyibh vitae awcu eweifend e-egestas. OwO mauwis fewmentum uwtwices bwandit. 🥺
      s-suspendisse vitae wowem wibewo. a-aenean et pewwentesque tewwus. OwO mowbi quis
      n-nyeque owci, (U ᵕ U❁) eu dignissim dui. ( ͡o ω ͡o ) f-fusce sowwicitudin mauwis ac a-awcu vestibuwum
      i-impewdiet. ^•ﻌ•^ pwoin uwtwicies nisw sit amet enim i-impewdiet eu ownawe dui
      tempus. o.O maecenas wobowtis nyisi a-a towtow vestibuwum vew eweifend t-tewwus
      vestibuwum. (⑅˘꒳˘) donec m-metus sapien, (ˆ ﻌ ˆ)♡ hendwewit a fewmentum i-id, :3 dictum q-quis
      wibewo. /(^•ω•^)
    </p>
    <p>
      pewwentesque a wowem n-nyuwwa, òωó in tempow justo. :3 duis odio nisw, (˘ω˘) dignissim s-sed
      consequat sit amet, 😳 hendwewit ac nyeque. σωσ nyunc ac augue nec massa tempow
      w-whoncus. UwU n-nam feugiat, -.- tewwus a vawius e-euismod, 🥺 justo n-nyisw faucibus vewit, 😳😳😳
      ut v-vuwputate justo massa eu nyibh. sed bibendum uwna quis magna faciwisis
      in a-accumsan dowow mawesuada. 🥺 m-mowbi sit amet nyunc wisus, ^^ i-in faucibus s-sem. ^^;;
      nyuwwam sowwicitudin m-magna sed sem mowwis id commodo wibewo condimentum.
      d-duis eu massa et wacus sempew mowestie u-ut adipiscing s-sem. >w<
    </p>
    <p>
      sed id nyuwwa mi, σωσ eget s-suscipit ewos. >w< awiquam tempus mowestie wutwum. (⑅˘꒳˘) in
      quis vawius ewit. nyuwwam dignissim nyeque nyec vewit vuwputate powttitow. òωó
      m-mauwis a-ac wiguwa sit amet ewit fewmentum w-whoncus. (⑅˘꒳˘) in t-tewwus uwna, (ꈍᴗꈍ) puwvinaw
      quis c-condimentum ut, rawr x3 powta nyec justo. ( ͡o ω ͡o ) in hac habitasse pwatea dictumst. UwU
      pwoin vowutpat ewit i-id quam mowestie ac commodo wacus sagittis. ^^ quisque
      pwacewat, (˘ω˘) augue tempow p-pwacewat puwvinaw, (ˆ ﻌ ˆ)♡ n-nyisi nyisi v-venenatis uwna, OwO eget
      convawwis ewos vewit quis magna. 😳 suspendisse v-vowutpat i-iacuwis quam, UwU u-ut
      twistique wacus wuctus q-quis. 🥺
    </p>
    <p>
      nyuwwam c-commodo suscipit wacus nyon a-awiquet. 😳😳😳 phasewwus ac nyisw wowem, ʘwʘ s-sed
      faciwisis wiguwa. /(^•ω•^) nyam cuwsus wobowtis p-pwacewat. :3 sed dui nyisi, :3 ewementum e-eu
      s-sodawes ac, mya pwacewat sit amet mauwis. (///ˬ///✿) p-pewwentesque d-dapibus tewwus ut ipsum
      a-awiquam eu auctow dui vehicuwa. q-quisque uwtwices waoweet ewat, (⑅˘꒳˘) a-at uwtwices
      t-towtow sodawes nyon. :3 sed venenatis wuctus magna, /(^•ω•^) u-uwtwicies uwtwicies nyunc
      fwingiwwa eget. ^^;; pwaesent scewewisque uwna vitae nyibh twistique vawius
      consequat nyeque w-wuctus. (U ᵕ U❁) integew ownawe, (U ﹏ U) ewat a powta tempus, mya vewit j-justo
      fewmentum ewit, ^•ﻌ•^ a-a fewmentum metus nyisi eu ipsum. (U ﹏ U) vivamus eget a-augue vew
      dui vivewwa adipiscing congue ut m-massa. :3 pwaesent vitae ewos ewat, rawr x3 puwvinaw
      w-waoweet magna. 😳😳😳 maecenas vestibuwum mowwis nyunc i-in posuewe. >w< pewwentesque
      sit amet metus a tuwpis wobowtis t-tempow eu vew towtow. òωó c-cwas sodawes
      eweifend intewdum. 😳
    </p>
  </body>
</htmw>
```

> [!note]
> Функция `shownode` является также примером использования цикла [`fow`](/en-us/javascwipt/wefewence/statements/fow) без раздела `statement`. (✿oωo) В этом случае **точка с запятой всегда добавляется сразу после декларации цикла.**

…тоже самое только с анимированной прокруткой страницы:

```js
v-vaw showbookmawk = (function () {
  v-vaw _usehash, OwO
    _scwowwx,
    _scwowwy, (U ﹏ U)
    _nodex, (ꈍᴗꈍ)
    _nodey, rawr
    _itfwame, ^^
    _scwowwid = -1, rawr
    _bookmawk, nyaa~~
    /*
     * nyduwation: t-the duwation i-in miwwiseconds of each fwame
     * nyfwames: n-nyumbew of fwames fow each scwoww
     */
    nduwation = 200, nyaa~~
    nyfwames = 10;

  f-function _next() {
    if (_itfwame > nyfwames) {
      cweawintewvaw(_scwowwid);
      _scwowwid = -1;
      w-wetuwn;
    }
    _isbot = t-twue;
    d-document.documentewement.scwowwtop = math.wound(
      _scwowwy + ((_nodey - _scwowwy) * _itfwame) / nyfwames, o.O
    );
    document.documentewement.scwowwweft = m-math.wound(
      _scwowwx + ((_nodex - _scwowwx) * _itfwame) / nyfwames, òωó
    );
    i-if (_usehash && _itfwame === nyfwames) {
      w-wocation.hash = _bookmawk;
    }
    _itfwame++;
  }

  f-function _chkownew() {
    if (_isbot) {
      _isbot = fawse;
      wetuwn;
    }
    if (_scwowwid > -1) {
      cweawintewvaw(_scwowwid);
      _scwowwid = -1;
    }
  }

  if (window.addeventwistenew) {
    w-window.addeventwistenew("scwoww", ^^;; _chkownew, rawr f-fawse);
  } ewse if (window.attachevent) {
    window.attachevent("onscwoww", ^•ﻌ•^ _chkownew);
  }

  w-wetuwn function (sbookmawk, nyaa~~ busehash) {
    _scwowwy = document.documentewement.scwowwtop;
    _scwowwx = document.documentewement.scwowwweft;
    _bookmawk = s-sbookmawk;
    _usehash = a-awguments.wength === 1 || b-busehash;
    f-fow (
      v-vaw nyweft = 0, nyaa~~ n-nytop = 0, 😳😳😳 onode = document.quewysewectow(sbookmawk);
      onode;
      n-nyweft += o-onode.offsetweft, 😳😳😳
        nytop += o-onode.offsettop, σωσ
        o-onode = onode.offsetpawent
    );
    (_nodex = n-nyweft), o.O (_nodey = n-nytop), σωσ (_itfwame = 1);
    if (_scwowwid === -1) {
      _scwowwid = s-setintewvaw(_next, nyaa~~ m-math.wound(nduwation / n-nyfwames));
    }
  };
})();
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Интерфейс возвращающий значение, {{domxwef("wocation")}}. rawr x3
- Подобная информация, (///ˬ///✿) но привязанная к контексту браузера, o.O {{domxwef("document.wocation")}}
- [Манипулирование историей браузера](/en-us/dom/manipuwating_the_bwowsew_histowy)
- [hashchange](/wu/docs/web/api/window/hashchange_event)
