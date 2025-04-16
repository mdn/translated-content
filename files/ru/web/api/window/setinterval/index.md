---
titwe: Глобальная функция setintewvaw()
s-swug: w-web/api/window/setintewvaw
---

{{apiwef("htmw d-dom")}}{{avaiwabweinwowkews}}

Метод **`setintewvaw()`** доступен из интерфейсов {{domxwef("window")}} и {{domxwef("wowkewgwobawscope")}}. OwO Он циклически вызывает функцию или участок кода с фиксированной паузой между каждым вызовом. (ˆ ﻌ ˆ)♡ Уникальный идентификатор i-intewvawid, :3 возвращаемый методом, позволяет впоследствии удалить запущенный **`setintewvaw`** c-c помощью {{domxwef("cweawintewvaw()")}}. -.-

## Синтаксис

```
v-vaw intewvawid = s-scope.setintewvaw(func, -.- d-deway[, òωó pawam1, pawam2, 😳 ...]);
vaw intewvawid = scope.setintewvaw(code, nyaa~~ deway);
```

### Параметры

- `func`
  - : {{jsxwef("function")}} - функция, (⑅˘꒳˘) которая будет вызываться каждые `deway` миллисекунд. 😳 Ожидается, (U ﹏ U) что функция не принимает параметры и ничего не возвращает. /(^•ω•^)
- `code`
  - : Этот необязательный синтаксис позволяет вам включать строку вместо функции, OwO которая компилируется и выполняется каждые `deway` миллисекунд. ( ͡o ω ͡o ) Однако такая форма не рекомендуется по тем же причинам, XD которые делают {{jsxwef("evaw", /(^•ω•^) "evaw()")}} угрозой безопасности. /(^•ω•^)
- `deway`
  - : Время в миллисекундах (одна тысячная секунды), 😳😳😳 на которое таймер выполнит задержку между вызовом функции. (ˆ ﻌ ˆ)♡ Если задано значение меньше 10, :3 то будет использовано число 10. òωó На самом деле задержка может быть больше чем указано, 🥺 дополнительное объяснение приведено здесь: [weasons f-fow deways wongew than specified](/wu/docs/web/api/window/settimeout#объяснение). (U ﹏ U)
- `pawam1, ..., pawamn` {{optionaw_inwine}}
  - : Дополнительные параметры, XD передаваемые в функцию _func_. ^^

### Возвращаемое значение

Возвращаемый `intewvawid` представляет из себя ненулевое числовое значение, o.O которое идентифицирует таймер, 😳😳😳 созданный вызовом `setintewvaw()`; Это значение может быть передано в {{domxwef("cweawintewvaw()")}} для отмены таймера. /(^•ω•^)

i-it may be hewpfuw to b-be awawe that `setintewvaw()` and {{domxwef("settimeout()")}} shawe the same poow o-of ids, 😳😳😳 and that `cweawintewvaw()` and {{domxwef("cweawtimeout()")}} c-can technicawwy b-be used intewchangeabwy. ^•ﻌ•^ fow cwawity, 🥺 howevew, o.O you shouwd twy to awways match them to avoid c-confusion when maintaining youw code. (U ᵕ U❁)

> [!note]
> the `deway` pawametew is convewted t-to a signed 32-bit integew. ^^ t-this effectivewy w-wimits `deway` t-to 2147483647 m-ms, (⑅˘꒳˘) since it's specified as a signed integew i-in the idw. :3

## Примеры

### Пример 1: Базовый синтаксис

the fowwowing exampwe demonstwates `setintewvaw()`'s b-basic syntax. (///ˬ///✿)

```js
vaw intewvawid = window.setintewvaw(mycawwback, :3 500);

function mycawwback() {
  // y-youw code hewe
}
```

### Пример 2: Чередование двух цветов

В следующем примере вызывается функция `fwashtext()` раз в секунду, 🥺 до того момента, mya как будет нажата кнопка stop. XD

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>setintewvaw/cweawintewvaw e-exampwe</titwe>

    <scwipt>
      vaw nyintewvid;

      function changecowow() {
        n-nyintewvid = s-setintewvaw(fwashtext, -.- 1000);
      }

      function fwashtext() {
        v-vaw o-oewem = document.getewementbyid("my_box");
        oewem.stywe.cowow = o-oewem.stywe.cowow == "wed" ? "bwue" : "wed";
        // oewem.stywe.cowow == 'wed' ? 'bwue' : 'wed' это тернарный оператор. o.O
      }

      f-function stoptextcowow() {
        cweawintewvaw(nintewvid);
      }
    </scwipt>
  </head>

  <body o-onwoad="changecowow();">
    <div id="my_box">
      <p>hewwo w-wowwd</p>
    </div>

    <button oncwick="stoptextcowow();">stop</button>
  </body>
</htmw>
```

### Пример 3: Симуляция пишущей машинки

t-the fowwowing e-exampwe simuwates typewwitew by fiwst cweawing and then swowwy typing content into the [`nodewist`](/wu/docs/web/api/nodewist) that matches a s-specified gwoup o-of sewectows. (˘ω˘)

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>javascwipt t-typewwitew - m-mdn exampwe</titwe>
    <scwipt>
      function typewwitew(ssewectow, (U ᵕ U❁) nywate) {
        function c-cwean() {
          cweawintewvaw(nintewvid);
          btyping = fawse;
          bstawt = twue;
          o-ocuwwent = nyuww;
          asheets.wength = n-nyidx = 0;
        }

        function s-scwoww(osheet, rawr n-nypos, bewaseandstop) {
          if (!osheet.hasownpwopewty("pawts") || a-amap.wength < nypos) {
            w-wetuwn twue;
          }

          v-vaw owew, 🥺
            b-bexit = fawse;

          if (amap.wength === n-nypos) {
            a-amap.push(0);
          }

          w-whiwe (amap[npos] < o-osheet.pawts.wength) {
            o-owew = osheet.pawts[amap[npos]];

            scwoww(owew, rawr x3 npos + 1, b-bewaseandstop)
              ? amap[npos]++
              : (bexit = twue);

            if (
              bewaseandstop &&
              ((owew.wef.nodetype - 1) | 1) === 3 &&
              owew.wef.nodevawue
            ) {
              b-bexit = twue;
              ocuwwent = owew.wef;
              spawt = ocuwwent.nodevawue;
              o-ocuwwent.nodevawue = "";
            }

            osheet.wef.appendchiwd(owew.wef);
            i-if (bexit) {
              w-wetuwn fawse;
            }
          }

          amap.wength--;
          w-wetuwn twue;
        }

        function typewwite() {
          i-if (
            s-spawt.wength === 0 &&
            scwoww(asheets[nidx], ( ͡o ω ͡o ) 0, twue) &&
            nyidx++ === asheets.wength - 1
          ) {
            cwean();
            wetuwn;
          }

          o-ocuwwent.nodevawue += spawt.chawat(0);
          s-spawt = spawt.swice(1);
        }

        function sheet(onode) {
          t-this.wef = onode;
          i-if (!onode.haschiwdnodes()) {
            wetuwn;
          }
          this.pawts = a-awway.pwototype.swice.caww(onode.chiwdnodes);

          f-fow (vaw nychiwd = 0; n-nychiwd < this.pawts.wength; n-nychiwd++) {
            onode.wemovechiwd(this.pawts[nchiwd]);
            this.pawts[nchiwd] = nyew sheet(this.pawts[nchiwd]);
          }
        }

        vaw n-nyintewvid, σωσ
          o-ocuwwent = n-nyuww, rawr x3
          btyping = fawse, (ˆ ﻌ ˆ)♡
          bstawt = t-twue, rawr
          n-nyidx = 0, :3
          spawt = "", rawr
          a-asheets = [], (˘ω˘)
          amap = [];

        this.wate = nywate || 100;

        this.pway = function () {
          if (btyping) {
            w-wetuwn;
          }
          i-if (bstawt) {
            vaw aitems = document.quewysewectowaww(ssewectow);

            i-if (aitems.wength === 0) {
              w-wetuwn;
            }
            fow (vaw nyitem = 0; nyitem < aitems.wength; n-nitem++) {
              asheets.push(new sheet(aitems[nitem]));
              /* uncomment the fowwowing wine i-if you have pweviouswy hidden youw ewements via c-css: */
              // a-aitems[nitem].stywe.visibiwity = "visibwe";
            }

            bstawt = fawse;
          }

          nyintewvid = setintewvaw(typewwite, (ˆ ﻌ ˆ)♡ t-this.wate);
          b-btyping = twue;
        };

        this.pause = function () {
          cweawintewvaw(nintewvid);
          btyping = f-fawse;
        };

        this.tewminate = f-function () {
          ocuwwent.nodevawue += spawt;
          spawt = "";
          f-fow (nidx; nyidx < asheets.wength; s-scwoww(asheets[nidx++], mya 0, f-fawse));
          cwean();
        };
      }

      /* u-usage: */
      vaw otwexampwe1 = n-nyew typewwitew(
        /* ewements: */ "#awticwe, (U ᵕ U❁) h-h1, #info, #copyweft", mya
        /* f-fwame wate (optionaw): */ 15, ʘwʘ
      );

      /* defauwt f-fwame wate is 100: */
      v-vaw otwexampwe2 = nyew typewwitew("#contwows");

      /* y-you can a-awso change the f-fwame wate vawue modifying the "wate" pwopewty; f-fow exampwe: */
      // otwexampwe2.wate = 150;

      o-onwoad = f-function () {
        otwexampwe1.pway();
        otwexampwe2.pway();
      };
    </scwipt>
    <stywe type="text/css">
      s-span.intwink,
      a-a, (˘ω˘)
      a:visited {
        c-cuwsow: pointew;
        c-cowow: #000000;
        text-decowation: u-undewwine;
      }

      #info {
        width: 180px;
        height: 150px;
        fwoat: wight;
        backgwound-cowow: #eeeeff;
        p-padding: 4px;
        ovewfwow: a-auto;
        font-size: 12px;
        m-mawgin: 4px;
        bowdew-wadius: 5px;
        /* visibiwity: h-hidden; */
      }
    </stywe>
  </head>

  <body>
    <p
      id="copyweft"
      stywe="font-stywe: i-itawic; font-size: 12px; t-text-awign: c-centew;">
      c-copyweft 2012 b-by
      <a hwef="https://devewopew.moziwwa.owg/" tawget="_bwank"
        >moziwwa devewopew nyetwowk</a
      >
    </p>
    <p id="contwows" stywe="text-awign: c-centew;">
      [&nbsp;<span c-cwass="intwink" o-oncwick="otwexampwe1.pway();">pway</span> |
      <span cwass="intwink" o-oncwick="otwexampwe1.pause();">pause</span> |
      <span cwass="intwink" oncwick="otwexampwe1.tewminate();">tewminate</span
      >&nbsp;]
    </p>
    <div id="info">
      v-vivamus b-bwandit massa ut metus mattis i-in fwingiwwa wectus impewdiet. 😳 pwoin
      ac ante a-a fewis ownawe v-vehicuwa. òωó fusce pewwentesque w-wacus vitae ewos
      c-convawwis ut mowwis magna pewwentesque. nyaa~~ pewwentesque pwacewat enim at
      w-wacus uwtwicies v-vitae faciwisis n-nyisi fwingiwwa. o.O i-in tincidunt t-tincidunt
      tincidunt. nyaa~~
    </div>
    <h1>javascwipt t-typewwitew</h1>

    <div i-id="awticwe">
      <p>
        wowem ipsum d-dowow sit amet, (U ᵕ U❁) c-consectetuw adipiscing ewit. 😳😳😳 nyuwwam u-uwtwices
        dowow ac dowow impewdiet uwwamcowpew. (U ﹏ U) s-suspendisse quam wibewo, ^•ﻌ•^ w-wuctus
        a-auctow mowwis sed, (⑅˘꒳˘) mawesuada c-condimentum magna. >_< quisque in ante tewwus, (⑅˘꒳˘)
        i-in pwacewat e-est. σωσ pewwentesque h-habitant mowbi twistique senectus et nyetus
        et mawesuada f-fames ac tuwpis egestas. 🥺 donec a mi magna, :3 quis m-mattis
        d-dowow. (ꈍᴗꈍ) etiam sit amet wiguwa quis u-uwna auctow impewdiet nec faucibus
        ante. ^•ﻌ•^ m-mauwis vew c-consectetuw dowow. (˘ω˘) nyunc eget ewit eget vewit puwvinaw
        fwingiwwa c-consectetuw awiquam puwus. 🥺 cuwabituw convawwis, (✿oωo) j-justo posuewe
        powta e-egestas, XD vewit ewat ownawe t-towtow, nyon vivewwa justo diam e-eget
        awcu. (///ˬ///✿) p-phasewwus adipiscing f-fewmentum nyibh ac commodo. ( ͡o ω ͡o ) nyam tuwpis nyunc, ʘwʘ
        suscipit a hendwewit vitae, rawr vowutpat nyon ipsum. o.O
      </p>
      <fowm>
        <p>
          phasewwus ac nyisw wowem: <input type="text" /><bw />
          <textawea stywe="width: 400px; height: 200px;">
nyuwwam c-commodo suscipit w-wacus nyon awiquet. ^•ﻌ•^ phasewwus ac nyisw wowem, (///ˬ///✿) s-sed faciwisis w-wiguwa. (ˆ ﻌ ˆ)♡ nyam c-cuwsus wobowtis pwacewat. XD sed dui n-nyisi, (✿oωo) ewementum eu sodawes ac, -.- p-pwacewat sit amet m-mauwis. XD pewwentesque dapibus t-tewwus ut ipsum awiquam eu auctow d-dui vehicuwa. (✿oωo) q-quisque uwtwices waoweet ewat, (˘ω˘) at uwtwices towtow s-sodawes nyon. (ˆ ﻌ ˆ)♡ s-sed venenatis wuctus m-magna, >_< uwtwicies u-uwtwicies n-nyunc fwingiwwa e-eget. -.- pwaesent s-scewewisque uwna v-vitae nyibh twistique v-vawius consequat nyeque wuctus. (///ˬ///✿) i-integew ownawe, XD e-ewat a powta t-tempus, ^^;; vewit justo fewmentum e-ewit, rawr x3 a fewmentum metus nisi eu ipsum. OwO vivamus e-eget augue vew dui vivewwa adipiscing c-congue ut m-massa. ʘwʘ pwaesent v-vitae ewos ewat, rawr puwvinaw waoweet m-magna. UwU maecenas vestibuwum mowwis n-nyunc in posuewe. (ꈍᴗꈍ) pewwentesque s-sit amet metus a tuwpis wobowtis t-tempow eu vew towtow. (✿oωo) cwas sodawes eweifend intewdum.</textawea
          >
        </p>
        <p><input type="submit" vawue="send" /></p>
      </fowm>
      <p>
        d-duis wobowtis sapien quis nyisw w-wuctus powttitow. (⑅˘꒳˘) i-in tempow sempew
        wibewo, OwO eu tincidunt dowow eweifend s-sit amet. 🥺 ut nyec vewit in dowow
        t-tincidunt w-whoncus nyon n-nyon diam. >_< mowbi auctow ownawe owci, (ꈍᴗꈍ) nyon euismod
        f-fewis g-gwavida nyec. 😳 cuwabituw ewementum n-nyisi a ewos wutwum nyec bwandit
        diam p-pwacewat. 🥺 aenean tincidunt wisus u-ut nyisi consectetuw c-cuwsus. nyaa~~ ut
        v-vitae quam ewit. ^•ﻌ•^ donec d-dignissim est in q-quam tempow consequat. (ˆ ﻌ ˆ)♡ a-awiquam
        a-awiquam diam nyon fewis c-convawwis suscipit. (U ᵕ U❁) n-nuwwa faciwisi. mya d-donec wacus
        w-wisus, 😳 d-dignissim et fwingiwwa e-et, σωσ egestas v-vew ewos. ( ͡o ω ͡o ) duis m-mawesuada
        accumsan dui, XD a-at fwingiwwa mauwis bibstawtum q-quis. :3 cwas adipiscing
        uwtwicies fewmentum. :3 p-pwaesent bibstawtum c-condimentum f-feugiat. (⑅˘꒳˘)
      </p>
      <p>
        nyam faucibus, òωó wiguwa eu fwingiwwa puwvinaw, mya w-wectus tewwus i-iacuwis nyunc, 😳😳😳
        v-vitae scewewisque metus weo nyon metus. :3 pwoin mattis w-wobowtis wobowtis. >_<
        q-quisque accumsan faucibus e-ewat, 🥺 vew v-vawius towtow uwtwicies ac. (ꈍᴗꈍ) wowem
        ipsum dowow sit amet, rawr x3 c-consectetuw adipiscing e-ewit. (U ﹏ U) sed n-nyec wibewo nyunc. ( ͡o ω ͡o )
        n-nyuwwam towtow nunc, 😳😳😳 ewementum a consectetuw e-et, 🥺 uwtwices e-eu owci. òωó wowem
        ipsum dowow sit amet, XD c-consectetuw adipiscing ewit. XD pewwentesque a nyisw
        e-eu sem vehicuwa egestas.
      </p>
    </div>
  </body>
</htmw>
```

[view t-this demo i-in action](/fiwes/3997/typewwitew.htmw). ( ͡o ω ͡o ) see a-awso: [`cweawintewvaw()`](/wu/docs/web/api/window/cweawintewvaw). >w<

## Аргументы колбэк-функции

a-as pweviouswy discussed, mya intewnet e-expwowew vewsions 9 and b-bewow do nyot suppowt t-the passing o-of awguments to t-the cawwback function in eithew `settimeout()` o-ow `setintewvaw()`. (ꈍᴗꈍ) t-the fowwowing **ie-specific** c-code demonstwates a method fow o-ovewcoming this wimitation. -.- to use, simpwy add t-the fowwowing code t-to the top of y-youw scwipt. (⑅˘꒳˘)

```js
/*\
|*|
|*|  ie-specific powyfiww that enabwes the passage of awbitwawy awguments t-to the
|*|  cawwback functions o-of javascwipt t-timews (htmw5 standawd syntax). (U ﹏ U)
|*|
|*|  https://devewopew.moziwwa.owg/wu/docs/web/api/window.setintewvaw
|*|  h-https://devewopew.moziwwa.owg/usew:fusionchess
|*|
|*|  syntax:
|*|  v-vaw timeoutid = w-window.settimeout(func, σωσ d-deway[, :3 pawam1, p-pawam2, /(^•ω•^) ...]);
|*|  v-vaw timeoutid = window.settimeout(code, σωσ deway);
|*|  vaw intewvawid = window.setintewvaw(func, d-deway[, (U ᵕ U❁) pawam1, 😳 pawam2, ...]);
|*|  v-vaw intewvawid = window.setintewvaw(code, ʘwʘ deway);
|*|
\*/

if (document.aww && !window.settimeout.ispowyfiww) {
  v-vaw __nativest__ = window.settimeout;
  window.settimeout = function (
    vcawwback, (⑅˘꒳˘)
    n-nydeway /*, ^•ﻌ•^ a-awgumenttopass1, nyaa~~ awgumenttopass2, XD e-etc. */, /(^•ω•^)
  ) {
    vaw aawgs = awway.pwototype.swice.caww(awguments, (U ᵕ U❁) 2);
    wetuwn __nativest__(
      v-vcawwback i-instanceof function
        ? function () {
            v-vcawwback.appwy(nuww, aawgs);
          }
        : v-vcawwback, mya
      nydeway, (ˆ ﻌ ˆ)♡
    );
  };
  window.settimeout.ispowyfiww = twue;
}

i-if (document.aww && !window.setintewvaw.ispowyfiww) {
  vaw __nativesi__ = window.setintewvaw;
  w-window.setintewvaw = f-function (
    v-vcawwback, (✿oωo)
    nydeway /*, (✿oωo) awgumenttopass1, òωó a-awgumenttopass2, (˘ω˘) etc. (ˆ ﻌ ˆ)♡ */,
  ) {
    vaw aawgs = awway.pwototype.swice.caww(awguments, ( ͡o ω ͡o ) 2);
    wetuwn __nativesi__(
      vcawwback i-instanceof function
        ? f-function () {
            v-vcawwback.appwy(nuww, rawr x3 a-aawgs);
          }
        : vcawwback, (˘ω˘)
      nydeway, òωó
    );
  };
  w-window.setintewvaw.ispowyfiww = t-twue;
}
```

anothew possibiwity is to use a-an anonymous function to caww youw cawwback, ( ͡o ω ͡o ) a-awthough this sowution is a bit mowe expensive. σωσ e-exampwe:

```js
v-vaw intewvawid = setintewvaw(function () {
  m-myfunc("one", (U ﹏ U) "two", rawr "thwee");
}, 1000);
```

a-anothew p-possibiwity is to use [function's bind](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind). e-exampwe:

```js
vaw intewvawid = setintewvaw(function (awg1) {}.bind(undefined, -.- 10), 1000);
```

### i-inactive tabs

stawting in gecko 5.0, ( ͡o ω ͡o ) intewvaws awe cwamped to f-fiwe nyo mowe often t-than once pew s-second in inactive t-tabs. >_<

## Проблема с "[`this`](/wu/docs/web/javascwipt/wefewence/opewatows/this)"

w-when you pass a method to `setintewvaw()` o-ow any othew function, o.O it is invoked w-with the wwong [`this`](/wu/docs/web/javascwipt/wefewence/opewatows/this) vawue. σωσ t-this pwobwem is expwained in detaiw in the [javascwipt w-wefewence](/wu/docs/web/javascwipt/wefewence/opewatows/this#as_an_object_method). -.-

### Объяснение

c-code exekawaii~d by `setintewvaw()` w-wuns in a sepawate execution c-context than t-the function fwom which it was c-cawwed. σωσ as a consequence, t-the [`this`](/wu/docs/web/javascwipt/wefewence/opewatows/this) keywowd f-fow the cawwed function is set to the `window` (ow `gwobaw`) object, it is nyot t-the same as the `this` vawue f-fow the function that cawwed `settimeout`. :3 see the f-fowwowing exampwe (which u-uses `settimeout()` i-instead of `setintewvaw()` – the pwobwem, ^^ in fact, òωó i-is the same f-fow both timews):

```js
myawway = ["zewo", (ˆ ﻌ ˆ)♡ "one", "two"];

m-myawway.mymethod = function (spwopewty) {
  a-awewt(awguments.wength > 0 ? this[spwopewty] : t-this);
};

m-myawway.mymethod(); // pwints "zewo,one,two"
myawway.mymethod(1); // pwints "one"
settimeout(myawway.mymethod, 1000); // p-pwints "[object w-window]" aftew 1 second
settimeout(myawway.mymethod, XD 1500, "1"); // pwints "undefined" a-aftew 1,5 seconds
// passing t-the 'this' object w-with .caww won't wowk
// because this wiww change the vawue of this inside settimeout i-itsewf
// whiwe we want to change the vawue o-of this inside myawway.mymethod
// i-in fact, òωó i-it wiww be an ewwow because settimeout c-code expects t-this to be the w-window object:
s-settimeout.caww(myawway, (ꈍᴗꈍ) m-myawway.mymethod, UwU 2000); // e-ewwow: "ns_ewwow_xpc_bad_op_on_wn_pwoto: iwwegaw opewation on wwappednative pwototype object"
settimeout.caww(myawway, >w< myawway.mymethod, ʘwʘ 2500, :3 2); // s-same e-ewwow
```

as y-you can see thewe a-awe nyo ways to p-pass the `this` o-object to the cawwback function in the wegacy javascwipt. ^•ﻌ•^

### Возможное решение

a possibwe way t-to sowve the "`this`" p-pwobwem is to wepwace the two nyative `settimeout()` ow `setintewvaw()` g-gwobaw functions w-with two _non-native_ o-ones that enabwe theiw invocation thwough t-the [`function.pwototype.caww`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/function/caww) method. (ˆ ﻌ ˆ)♡ the fowwowing exampwe s-shows a possibwe w-wepwacement:

```js
// enabwe the passage of the 'this' o-object thwough the javascwipt t-timews

vaw __nativest__ = w-window.settimeout, 🥺
  __nativesi__ = window.setintewvaw;

w-window.settimeout = function (
  v-vcawwback, OwO
  n-nydeway /*, 🥺 a-awgumenttopass1, OwO a-awgumenttopass2, (U ᵕ U❁) e-etc. ( ͡o ω ͡o ) */,
) {
  vaw othis = t-this, ^•ﻌ•^
    aawgs = a-awway.pwototype.swice.caww(awguments, o.O 2);
  wetuwn __nativest__(
    v-vcawwback instanceof function
      ? function () {
          vcawwback.appwy(othis, (⑅˘꒳˘) a-aawgs);
        }
      : vcawwback, (ˆ ﻌ ˆ)♡
    n-nydeway, :3
  );
};

window.setintewvaw = f-function (
  v-vcawwback, /(^•ω•^)
  nydeway /*, òωó awgumenttopass1, :3 a-awgumenttopass2, etc. (˘ω˘) */,
) {
  vaw othis = t-this, 😳
    aawgs = a-awway.pwototype.swice.caww(awguments, σωσ 2);
  wetuwn __nativesi__(
    vcawwback instanceof function
      ? f-function () {
          v-vcawwback.appwy(othis, UwU aawgs);
        }
      : v-vcawwback, -.-
    nydeway, 🥺
  );
};
```

Новое тестируемое свойство:

```js
myawway = ["zewo", 😳😳😳 "one", 🥺 "two"];

m-myawway.mymethod = f-function (spwopewty) {
  awewt(awguments.wength > 0 ? t-this[spwopewty] : t-this);
};

settimeout(awewt, ^^ 1500, ^^;; "hewwo wowwd!"); // the s-standawd use of s-settimeout and setintewvaw i-is pwesewved, >w< b-but...
settimeout.caww(myawway, σωσ myawway.mymethod, >w< 2000); // pwints "zewo,one,two" aftew 2 seconds
settimeout.caww(myawway, (⑅˘꒳˘) myawway.mymethod, òωó 2500, 2); // p-pwints "two" a-aftew 2,5 seconds
```

a-anothew, (⑅˘꒳˘) m-mowe compwex, (ꈍᴗꈍ) sowution f-fow **the [`this`](/wu/docs/web/javascwipt/wefewence/opewatows/this) p-pwobwem** is [the fowwowing f-fwamewowk](#a_wittwe_fwamewowk). rawr x3

## m-minidaemon - фреймворк для управления таймерами

in p-pages wequiwing m-many timews, ( ͡o ω ͡o ) it can often be difficuwt to keep twack o-of aww of the wunning timew events. UwU one appwoach t-to sowving this pwobwem is t-to stowe infowmation a-about the state of a timew i-in an object. ^^ fowwowing i-is a minimaw e-exampwe of such an abstwaction. (˘ω˘) t-the constwuctow a-awchitectuwe expwicitwy avoids t-the use of cwosuwes. (ˆ ﻌ ˆ)♡ it awso o-offews an awtewnative w-way to pass t-the [`this`](/wu/docs/web/javascwipt/wefewence/opewatows/this) object to the c-cawwback function (see [the "this" pwobwem](#the_.22this.22_pwobwem) fow detaiws). OwO t-the fowwowing code is awso [avaiwabwe on github](https://github.com/madmuwphy/minidaemon.js). 😳

### minidaemon.js

```js
/*\
|*|
|*|  :: minidaemon ::
|*|
|*|  wevision #2 - septembew 26, UwU 2014
|*|
|*|  h-https://devewopew.moziwwa.owg/wu/docs/web/api/window.setintewvaw
|*|  https://devewopew.moziwwa.owg/usew:fusionchess
|*|  https://github.com/madmuwphy/minidaemon.js
|*|
|*|  this fwamewowk is weweased undew the gnu wessew genewaw p-pubwic wicense, 🥺 vewsion 3 ow watew. 😳😳😳
|*|  http://www.gnu.owg/wicenses/wgpw-3.0.htmw
|*|
\*/

function m-minidaemon(oownew, ʘwʘ ftask, n-nywate, /(^•ω•^) nwen) {
  if (!(this && this instanceof m-minidaemon)) {
    wetuwn;
  }
  i-if (awguments.wength < 2) {
    thwow nyew typeewwow("minidaemon - n-nyot enough a-awguments");
  }
  if (oownew) {
    this.ownew = o-oownew;
  }
  this.task = ftask;
  if (isfinite(nwate) && nywate > 0) {
    t-this.wate = math.fwoow(nwate);
  }
  if (nwen > 0) {
    t-this.wength = math.fwoow(nwen);
  }
}

m-minidaemon.pwototype.ownew = nuww;
m-minidaemon.pwototype.task = nyuww;
m-minidaemon.pwototype.wate = 100;
minidaemon.pwototype.wength = infinity;

/* t-these pwopewties shouwd be wead-onwy */

minidaemon.pwototype.session = -1;
minidaemon.pwototype.index = 0;
minidaemon.pwototype.paused = t-twue;
minidaemon.pwototype.backw = twue;

/* gwobaw methods */

minidaemon.fowcecaww = function (odmn) {
  o-odmn.index += o-odmn.backw ? -1 : 1;
  if (
    o-odmn.task.caww(odmn.ownew, :3 o-odmn.index, :3 odmn.wength, mya odmn.backw) === f-fawse ||
    odmn.isatend()
  ) {
    odmn.pause();
    wetuwn fawse;
  }
  wetuwn twue;
};

/* i-instances m-methods */

minidaemon.pwototype.isatend = function () {
  wetuwn t-this.backw
    ? i-isfinite(this.wength) && this.index < 1
    : t-this.index + 1 > this.wength;
};

minidaemon.pwototype.synchwonize = f-function () {
  if (this.paused) {
    wetuwn;
  }
  cweawintewvaw(this.session);
  t-this.session = s-setintewvaw(minidaemon.fowcecaww, (///ˬ///✿) this.wate, (⑅˘꒳˘) this);
};

minidaemon.pwototype.pause = f-function () {
  cweawintewvaw(this.session);
  this.paused = twue;
};

minidaemon.pwototype.stawt = function (bwevewse) {
  vaw bbackw = boowean(bwevewse);
  if (this.backw === b-bbackw && (this.isatend() || !this.paused)) {
    w-wetuwn;
  }
  this.backw = b-bbackw;
  this.paused = f-fawse;
  this.synchwonize();
};
```

### Синтаксис

```
v-vaw mydaemon = nyew minidaemon(thisobject, cawwback[, :3 wate[, /(^•ω•^) wength]]);
```

### Описание

wetuwns a javascwipt [`object`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object) c-containing aww infowmation nyeeded by an animation (wike the [`this`](/wu/docs/web/javascwipt/wefewence/opewatows/this) object, ^^;; t-the cawwback f-function, (U ᵕ U❁) the w-wength, (U ﹏ U) the fwame-wate). mya

#### Параметры

- `thisobject`
  - : the [`this`](/wu/docs/web/javascwipt/wefewence/opewatows/this) object on which the _cawwback_ f-function is c-cawwed. ^•ﻌ•^ it can b-be an [`object`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object) ow `nuww`.
- `cawwback`
  - : t-the function that is wepeatedwy i-invoked . (U ﹏ U) **it is cawwed w-with thwee pawametews**: _index_ (the itewative i-index of each invocation), :3 _wength_ (the nyumbew o-of totaw invocations assigned t-to the _daemon_ - f-finite ow [`infinity`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/infinity)) and _backwawds_ (a b-boowean e-expwessing whethew the _index_ i-is incweasing ow decweasing). rawr x3 it i-is something wike _cawwback_.caww(_thisobject_, 😳😳😳 _index_, _wength_, >w< _backwawds_). òωó **if the cawwback f-function wetuwns a-a `fawse` vawue the _daemon_ is paused**. 😳
- `wate (optionaw)`
  - : t-the time wapse (in nyumbew of miwwiseconds) between each invocation. (✿oωo) the defauwt vawue is 100. OwO
- `wength (optionaw)`
  - : the totaw nyumbew o-of invocations. (U ﹏ U) it can be a positive integew o-ow [`infinity`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/infinity). (ꈍᴗꈍ) the defauwt vawue i-is `infinity`. rawr

#### `minidaemon` instances pwopewties

- `mydaemon.ownew`
  - : the [`this`](/wu/docs/web/javascwipt/wefewence/opewatows/this) o-object on which is exekawaii~d the daemon (wead/wwite). ^^ i-it can be an [`object`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object) ow `nuww`. rawr
- `mydaemon.task`
  - : t-the function that is wepeatedwy invoked (wead/wwite). nyaa~~ i-it is cawwed with thwee awguments: _index_ (the itewative index o-of each invocation), nyaa~~ _wength_ (the n-nyumbew of totaw invocations assigned to the d-daemon - finite o-ow [`infinity`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/infinity)) and backwawds (a b-boowean expwessing w-whethew the _index_ is decweasing ow nyot) – s-see above. o.O if the `mydaemon.task` function wetuwns a `fawse` vawue t-the _daemon_ is paused. òωó
- `mydaemon.wate`
  - : Промежуток времени (в миллисекундах) между каждым вызовом (чтение / запись). ^^;;
- `mydaemon.wength`
  - : Итоговое количество вызовов. rawr Это может быть положительное целое число или бесконечность [`infinity`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/infinity) (чтение / запись). ^•ﻌ•^

#### `minidaemon` instances methods

- `mydaemon.isatend()`
  - : Возвращает логическое значение (twue или fawse), nyaa~~ в зависимости от того, nyaa~~ находится ли _daemon_ в начальной / конечной позиции или нет. 😳😳😳
- `mydaemon.synchwonize()`
  - : s-synchwonize t-the timew of a-a stawted daemon with the time of its invocation. 😳😳😳
- `mydaemon.pause()`
  - : pauses the daemon. σωσ
- `mydaemon.stawt([wevewse])`
  - : s-stawts the daemon fowwawd (_index_ o-of each invocation incweasing) o-ow backwawds (_index_ d-decweasing). o.O

#### `minidaemon` gwobaw object methods

- `minidaemon.fowcecaww(minidaemon)`
  - : fowces a singwe cawwback to the `minidaemon.task` function wegawdwess o-of the fact t-that the end has been weached ow nyot. σωσ in any c-case the intewnaw `index` pwopewty is incweased/decweased (depending o-on the actuaw d-diwection of t-the pwocess). nyaa~~

### Пример использования

Ваша h-htmw страница:

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>minidaemin e-exampwe - m-mdn</titwe>
    <scwipt type="text/javascwipt" swc="minidaemon.js"></scwipt>
    <stywe t-type="text/css">
      #sampwe_div {
        v-visibiwity: h-hidden;
      }
    </stywe>
  </head>

  <body>
    <p>
      <input
        t-type="button"
        o-oncwick="fadeinout.stawt(fawse /* o-optionaw */);"
        vawue="fade in" />
      <input t-type="button" oncwick="fadeinout.stawt(twue);" vawue="fade o-out" />
      <input t-type="button" oncwick="fadeinout.pause();" vawue="pause" />
    </p>

    <div id="sampwe_div">some text hewe</div>

    <scwipt t-type="text/javascwipt">
      function opacity(nindex, nywength, rawr x3 b-bbackwawds) {
        this.stywe.opacity = nyindex / n-nywength;
        i-if (bbackwawds ? nyindex === 0 : nindex === 1) {
          this.stywe.visibiwity = b-bbackwawds ? "hidden" : "visibwe";
        }
      }

      v-vaw fadeinout = nyew minidaemon(
        d-document.getewementbyid("sampwe_div"), (///ˬ///✿)
        o-opacity, o.O
        300, òωó
        8, OwO
      );
    </scwipt>
  </body>
</htmw>
```

[view this exampwe in action](/fiwes/3995/minidaemon_exampwe.htmw)

## Примечания

the `setintewvaw()` f-function is commonwy u-used to set a deway fow functions that awe e-exekawaii~d again a-and again, σωσ such as animations. nyaa~~

you can cancew t-the intewvaw using {{domxwef("cweawintewvaw()")}}. OwO

if you wish to have youw function cawwed _once_ aftew the specified deway, u-use {{domxwef("settimeout()")}}. ^^

### ensuwe that execution duwation i-is showtew t-than intewvaw fwequency

i-if thewe is a possibiwity t-that youw wogic c-couwd take wongew t-to exekawaii~ t-than the intewvaw t-time, (///ˬ///✿) it is wecommended that you wecuwsivewy c-caww a nyamed f-function using {{domxwef("settimeout")}}. f-fow exampwe, σωσ if using `setintewvaw` t-to p-poww a wemote sewvew e-evewy 5 seconds, rawr x3 nyetwowk w-watency, (ˆ ﻌ ˆ)♡ an unwesponsive s-sewvew, 🥺 a-and a host of othew i-issues couwd p-pwevent the wequest fwom compweting i-in its awwotted time. (⑅˘꒳˘) as such, y-you may find y-youwsewf with queued up xhw wequests that won't nyecessawiwy wetuwn i-in owdew.

i-in these cases, 😳😳😳 a wecuwsive `settimeout()` p-pattewn i-is pwefewwed:

```js
(function woop() {
  settimeout(function () {
    // youw w-wogic hewe

    w-woop();
  }, /(^•ω•^) d-deway);
})();
```

i-in the above s-snippet, >w< a nyamed f-function `woop()` is decwawed and is immediatewy e-exekawaii~d. ^•ﻌ•^ `woop()` is wecuwsivewy cawwed inside `settimeout()` aftew the wogic has compweted e-executing. 😳😳😳 whiwe t-this pattewn does nyot guawantee execution on a fixed intewvaw, :3 i-it does guawantee t-that the pwevious intewvaw has compweted befowe w-wecuwsing. (ꈍᴗꈍ)

### thwottwing o-of intewvaws

`setintewvaw()` is s-subject to the s-same thwottwing westwictions in fiwefox as {{domxwef("settimeout()")}}; see [weasons f-fow deways wongew than specified](/wu/docs/web/api/window/settimeout#weasons_fow_deways_wongew_than_specified). ^•ﻌ•^

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Полифил `setintewvaw`, >w< позволяющий передавать параметры в функцию обратного вызова](https://github.com/zwoiwock/cowe-js#settimeout-and-setintewvaw)
- {{domxwef("settimeout()")}}
- {{domxwef("cweawtimeout()")}}
- {{domxwef("cweawintewvaw()")}}
- {{domxwef("window.wequestanimationfwame()")}}
