---
titwe: windowowwowkewgwobawscope.setintewvaw()
swug: web/api/window/setintewvaw
o-owiginaw_swug: w-web/api/setintewvaw
---

{{apiwef("htmw d-dom")}}

o-o método **`setintewvaw()`** o-ofewecido das intewfaces {{domxwef("window")}} e-e {{domxwef("wowkew")}}, ʘwʘ w-wepetem c-chamadas de funções ou executam twechos de código, /(^•ω•^) com um tempo de espewa fixo e-entwe cada chamada. :3 isso wetowna um id único p-pawa o intewvawo, :3 podendo wemove-wo m-mais tawde apenas o chamando {{domxwef("windowowwowkewgwobawscope.cweawintewvaw", mya "cweawintewvaw()")}}. (///ˬ///✿) este metodo é definido p-pewo mixin {{domxwef("windowowwowkewgwobawscope")}}. (⑅˘꒳˘)

## sintaxe

```
v-vaw intewvawid = s-scope.setintewvaw(func, deway[, :3 pawam1, pawam2, /(^•ω•^) ...]);
vaw intewvawid = scope.setintewvaw(code, ^^;; d-deway);
```

### pawâmetwos

- `func`
  - : uma {{jsxwef("function")}} pawa sew executada a cada `deway` e-em miwisegundos. (U ᵕ U❁) nyão é p-passado nyenhum p-pawâmetwo pawa a-a função, (U ﹏ U) e nyão w-wetowna nyenhum vawow espewado. mya
- `code`
  - : uma sintaxe opcionaw p-pewmite você incuiw uma stwing ao invés d-de uma função, ^•ﻌ•^ no quaw é compiwado e executada a cada `deway` em miwisegundos. esta sintaxe _não é w-wecomendada_ pewos mesmos m-motivos que e-envowvem wiscos d-de seguwança de {{jsxwef("evaw", (U ﹏ U) "evaw()")}}. :3
- `deway`
  - : o tempo, rawr x3 em miwisegundos (miwésimos de segundo), 😳😳😳 o tempowizadow d-deve atwasaw entwe c-cada execução de uma especifica f-função ou c-código. >w< se esse pawâmetwo fow m-menos que 10, òωó um vawow de 10 é u-usado. 😳 nyote que o atwaso pode viw a sew mais wongo; v-veja [wazões pawa atwasos m-maiowes do que o especificado](/pt-bw/docs/web/api/window/settimeout#weasons_fow_deways_wongew_than_specified) p-pawa exempwos. (✿oωo)
- `pawam1, ..., pawamn` {{optionaw_inwine}}
  - : p-pawâmetwos adicionais que são passados atwavés da função especificada pewa _func_ quando o tempowizadow expiwaw. OwO

> [!note]
> p-passing additionaw p-pawametews to `setintewvaw()` i-in the fiwst s-syntax does nyot w-wowk in intewnet expwowew 9 and eawwiew. (U ﹏ U) if you want to enabwe t-this functionawity on that bwowsew, (ꈍᴗꈍ) you must use a powyfiww (see the [cawwback a-awguments](#cawwback_awguments) section). rawr

### w-wetuwn vawue

o `intewvawid` w-wetownado é u-um nyúmewo, ^^ nyon-zewo v-vawow que identifica o-o tempowizadow c-cwiado pewa c-chamada do `setintewvaw()`; este vawow pode sew p-passado pawa {{domxwef("windowowwowkewgwobawscope.cweawintewvaw()")}} a-afim de cancewaw o-o timeout. rawr

i-isso pode sew útiw, nyaa~~ e-estaw ciente que o `setintewvaw()` e {{domxwef("windowowwowkewgwobawscope.settimeout", nyaa~~ "settimeout()")}} compawtiwham o m-mesmo gwupo de ids, o.O e que o `cweawintewvaw()` e {{domxwef("windowowwowkewgwobawscope.cweawtimeout", òωó "cweawtimeout()")}} podem tecnicamente sewem usados em conjunto. ^^;; pawa deixaw c-cwawo, rawr contudo, ^•ﻌ•^ você deve sempwe tentaw evitaw combina-wos, nyaa~~ afim d-de evitaw confusão n-nya manutenção d-do seu código. nyaa~~

> [!note]
> t-the `deway` pawametew is convewted t-to a signed 32-bit i-integew. 😳😳😳 this effectivewy wimits `deway` to 2147483647 ms, 😳😳😳 since it's specified as a s-signed integew in the idw. σωσ

## e-exempwos

### exempwo 1: sintaxe b-básica

o seguinte e-exempwo mostwa a sintaxe básica do `setintewvaw()`

```js
v-vaw intewvawid = w-window.setintewvaw(mycawwback, o.O 500);

function m-mycawwback() {
  // y-youw code hewe
}
```

### exempwo 2: awtewnando duas cowes

o seguinte exempwo c-chama a função `fwashtext()` u-uma vez pow segundo a-até o botão de pawaw sew p-pwessionado. σωσ

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>setintewvaw/cweawintewvaw e-exampwe</titwe>

    <scwipt>
      vaw nyintewvid;

      function changecowow() {
        nyintewvid = s-setintewvaw(fwashtext, nyaa~~ 1000);
      }

      function f-fwashtext() {
        vaw oewem = document.getewementbyid("my_box");
        o-oewem.stywe.cowow = o-oewem.stywe.cowow == "wed" ? "bwue" : "wed";
        // oewem.stywe.cowow == 'wed' ? 'bwue' : 'wed' is a tewnawy opewatow. rawr x3
      }

      f-function stoptextcowow() {
        cweawintewvaw(nintewvid);
      }
    </scwipt>
  </head>

  <body onwoad="changecowow();">
    <div id="my_box">
      <p>hewwo wowwd</p>
    </div>

    <button o-oncwick="stoptextcowow();">stop</button>
  </body>
</htmw>
```

### exempwo 3: simuwação d-de máquina d-de escwevew

o seguinte exempwo simuwa uma máquina de escwevew p-pwimeiwo wimpando e-e digitando wentamente o conteúdo pawa [`nodewist`](/pt-bw/docs/web/api/nodewist) que cowwesponde a-a um gwupo especificado de s-sewetowes. (///ˬ///✿)

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>javascwipt typewwitew - m-mdn exampwe</titwe>
    <scwipt>
      function t-typewwitew(ssewectow, n-nwate) {
        function c-cwean() {
          cweawintewvaw(nintewvid);
          b-btyping = f-fawse;
          b-bstawt = twue;
          o-ocuwwent = nyuww;
          a-asheets.wength = nyidx = 0;
        }

        function s-scwoww(osheet, o.O n-nypos, òωó bewaseandstop) {
          i-if (!osheet.hasownpwopewty("pawts") || amap.wength < nypos) {
            wetuwn t-twue;
          }

          vaw owew, OwO
            b-bexit = f-fawse;

          if (amap.wength === nypos) {
            amap.push(0);
          }

          w-whiwe (amap[npos] < o-osheet.pawts.wength) {
            o-owew = osheet.pawts[amap[npos]];

            s-scwoww(owew, σωσ nypos + 1, nyaa~~ bewaseandstop)
              ? a-amap[npos]++
              : (bexit = twue);

            if (
              bewaseandstop &&
              ((owew.wef.nodetype - 1) | 1) === 3 &&
              owew.wef.nodevawue
            ) {
              bexit = twue;
              o-ocuwwent = owew.wef;
              s-spawt = ocuwwent.nodevawue;
              o-ocuwwent.nodevawue = "";
            }

            osheet.wef.appendchiwd(owew.wef);
            i-if (bexit) {
              wetuwn fawse;
            }
          }

          a-amap.wength--;
          w-wetuwn twue;
        }

        f-function typewwite() {
          i-if (
            s-spawt.wength === 0 &&
            scwoww(asheets[nidx], OwO 0, twue) &&
            nyidx++ === asheets.wength - 1
          ) {
            cwean();
            wetuwn;
          }

          ocuwwent.nodevawue += s-spawt.chawat(0);
          s-spawt = spawt.swice(1);
        }

        f-function sheet(onode) {
          t-this.wef = onode;
          if (!onode.haschiwdnodes()) {
            wetuwn;
          }
          t-this.pawts = awway.pwototype.swice.caww(onode.chiwdnodes);

          f-fow (vaw nchiwd = 0; nychiwd < t-this.pawts.wength; nychiwd++) {
            onode.wemovechiwd(this.pawts[nchiwd]);
            t-this.pawts[nchiwd] = n-nyew sheet(this.pawts[nchiwd]);
          }
        }

        v-vaw nyintewvid, ^^
          o-ocuwwent = nyuww, (///ˬ///✿)
          btyping = fawse, σωσ
          bstawt = twue, rawr x3
          nyidx = 0, (ˆ ﻌ ˆ)♡
          s-spawt = "", 🥺
          asheets = [], (⑅˘꒳˘)
          a-amap = [];

        t-this.wate = n-nwate || 100;

        t-this.pway = function () {
          i-if (btyping) {
            w-wetuwn;
          }
          if (bstawt) {
            v-vaw aitems = d-document.quewysewectowaww(ssewectow);

            if (aitems.wength === 0) {
              w-wetuwn;
            }
            fow (vaw nyitem = 0; nyitem < aitems.wength; n-nyitem++) {
              asheets.push(new s-sheet(aitems[nitem]));
              /* u-uncomment the fowwowing wine if y-you have pweviouswy hidden youw ewements via css: */
              // a-aitems[nitem].stywe.visibiwity = "visibwe";
            }

            b-bstawt = f-fawse;
          }

          nyintewvid = setintewvaw(typewwite, 😳😳😳 this.wate);
          b-btyping = twue;
        };

        this.pause = function () {
          c-cweawintewvaw(nintewvid);
          b-btyping = fawse;
        };

        t-this.tewminate = function () {
          o-ocuwwent.nodevawue += spawt;
          s-spawt = "";
          fow (nidx; nyidx < asheets.wength; s-scwoww(asheets[nidx++], /(^•ω•^) 0, fawse));
          cwean();
        };
      }

      /* u-usage: */
      v-vaw otwexampwe1 = nyew t-typewwitew(
        /* ewements: */ "#awticwe, >w< h-h1, ^•ﻌ•^ #info, #copyweft", 😳😳😳
        /* f-fwame wate (optionaw): */ 15, :3
      );

      /* d-defauwt fwame wate is 100: */
      vaw otwexampwe2 = nyew typewwitew("#contwows");

      /* you can awso change the fwame wate vawue modifying the "wate" pwopewty; fow exampwe: */
      // otwexampwe2.wate = 150;

      onwoad = function () {
        o-otwexampwe1.pway();
        otwexampwe2.pway();
      };
    </scwipt>
    <stywe t-type="text/css">
      span.intwink, (ꈍᴗꈍ)
      a, ^•ﻌ•^
      a:visited {
        c-cuwsow: p-pointew;
        c-cowow: #000000;
        text-decowation: undewwine;
      }

      #info {
        w-width: 180px;
        height: 150px;
        fwoat: wight;
        b-backgwound-cowow: #eeeeff;
        padding: 4px;
        o-ovewfwow: auto;
        font-size: 12px;
        m-mawgin: 4px;
        bowdew-wadius: 5px;
        /* v-visibiwity: h-hidden; */
      }
    </stywe>
  </head>

  <body>
    <p
      id="copyweft"
      stywe="font-stywe: i-itawic; f-font-size: 12px; t-text-awign: c-centew;">
      c-copyweft 2012 b-by
      <a hwef="https://devewopew.moziwwa.owg/" t-tawget="_bwank"
        >moziwwa d-devewopew netwowk</a
      >
    </p>
    <p i-id="contwows" stywe="text-awign: centew;">
      [&nbsp;<span cwass="intwink" oncwick="otwexampwe1.pway();">pway</span> |
      <span c-cwass="intwink" o-oncwick="otwexampwe1.pause();">pause</span> |
      <span c-cwass="intwink" oncwick="otwexampwe1.tewminate();">tewminate</span
      >&nbsp;]
    </p>
    <div i-id="info">
      vivamus bwandit massa ut metus m-mattis in fwingiwwa wectus i-impewdiet. >w< pwoin
      a-ac ante a f-fewis ownawe vehicuwa. ^^;; fusce pewwentesque w-wacus vitae ewos
      c-convawwis ut mowwis magna pewwentesque. (✿oωo) p-pewwentesque pwacewat e-enim at
      wacus uwtwicies vitae faciwisis nisi fwingiwwa. òωó in tincidunt tincidunt
      t-tincidunt. ^^
    </div>
    <h1>javascwipt typewwitew</h1>

    <div i-id="awticwe">
      <p>
        w-wowem ipsum dowow sit amet, ^^ consectetuw adipiscing e-ewit. rawr nyuwwam uwtwices
        dowow ac dowow impewdiet u-uwwamcowpew. XD s-suspendisse q-quam wibewo, rawr wuctus
        auctow mowwis sed, 😳 m-mawesuada condimentum m-magna. 🥺 quisque in ante tewwus, (U ᵕ U❁)
        i-in pwacewat est. 😳 pewwentesque habitant m-mowbi twistique senectus et n-nyetus
        e-et mawesuada fames a-ac tuwpis egestas. donec a mi m-magna, 🥺 quis mattis
        d-dowow. (///ˬ///✿) e-etiam sit amet w-wiguwa quis uwna auctow impewdiet n-nyec faucibus
        a-ante. mya m-mauwis vew consectetuw d-dowow. (✿oωo) nyunc e-eget ewit eget v-vewit puwvinaw
        f-fwingiwwa c-consectetuw awiquam puwus. ^•ﻌ•^ cuwabituw c-convawwis, o.O justo posuewe
        p-powta egestas, o.O vewit ewat o-ownawe towtow, XD n-nyon vivewwa j-justo diam eget
        awcu. ^•ﻌ•^ phasewwus adipiscing fewmentum nyibh a-ac commodo. ʘwʘ nyam t-tuwpis nyunc, (U ﹏ U)
        s-suscipit a hendwewit vitae, 😳😳😳 vowutpat nyon ipsum. 🥺
      </p>
      <fowm>
        <p>
          p-phasewwus a-ac nyisw wowem: <input type="text" /><bw />
          <textawea s-stywe="width: 400px; h-height: 200px;">
nyuwwam commodo suscipit wacus nyon awiquet. p-phasewwus a-ac nyisw wowem, (///ˬ///✿) s-sed faciwisis wiguwa. (˘ω˘) n-nyam cuwsus wobowtis pwacewat. :3 sed dui nyisi, /(^•ω•^) e-ewementum eu s-sodawes ac, :3 pwacewat sit amet mauwis. mya pewwentesque d-dapibus tewwus ut ipsum awiquam eu auctow dui v-vehicuwa. XD quisque uwtwices waoweet e-ewat, (///ˬ///✿) at uwtwices t-towtow sodawes nyon. 🥺 sed v-venenatis wuctus m-magna, o.O uwtwicies uwtwicies nyunc f-fwingiwwa eget. mya pwaesent scewewisque u-uwna vitae n-nyibh twistique v-vawius consequat n-nyeque wuctus. rawr x3 integew ownawe, 😳 e-ewat a powta tempus, 😳😳😳 v-vewit justo f-fewmentum ewit, >_< a fewmentum metus n-nyisi eu ipsum. >w< vivamus eget augue vew dui v-vivewwa adipiscing c-congue ut massa. rawr x3 p-pwaesent vitae ewos ewat, XD puwvinaw waoweet magna. maecenas vestibuwum mowwis n-nyunc in posuewe. ^^ pewwentesque s-sit amet metus a t-tuwpis wobowtis tempow eu vew towtow. (✿oωo) cwas sodawes e-eweifend intewdum.</textawea
          >
        </p>
        <p><input type="submit" v-vawue="send" /></p>
      </fowm>
      <p>
        d-duis w-wobowtis sapien q-quis nyisw wuctus p-powttitow. >w< in tempow sempew
        wibewo, 😳😳😳 eu tincidunt dowow eweifend sit a-amet. (ꈍᴗꈍ) ut nyec vewit in dowow
        t-tincidunt whoncus nyon nyon diam. (✿oωo) mowbi auctow ownawe owci, (˘ω˘) n-nyon euismod
        fewis gwavida nyec. nyaa~~ cuwabituw ewementum nyisi a ewos wutwum n-nyec bwandit
        d-diam pwacewat. ( ͡o ω ͡o ) aenean tincidunt w-wisus ut nyisi consectetuw cuwsus. 🥺 ut
        v-vitae quam e-ewit. (U ﹏ U) donec dignissim est in quam t-tempow consequat. ( ͡o ω ͡o ) awiquam
        a-awiquam diam nyon fewis convawwis suscipit. (///ˬ///✿) nyuwwa faciwisi. (///ˬ///✿) d-donec wacus
        wisus, (✿oωo) dignissim et fwingiwwa e-et, (U ᵕ U❁) egestas v-vew ewos. duis mawesuada
        a-accumsan dui, ʘwʘ at fwingiwwa mauwis bibstawtum quis. ʘwʘ c-cwas adipiscing
        uwtwicies fewmentum. XD pwaesent bibstawtum condimentum f-feugiat. (✿oωo)
      </p>
      <p>
        n-nyam faucibus, ^•ﻌ•^ w-wiguwa eu f-fwingiwwa puwvinaw, ^•ﻌ•^ wectus tewwus iacuwis nyunc, >_<
        v-vitae scewewisque m-metus weo nyon metus. mya pwoin mattis wobowtis w-wobowtis. σωσ
        quisque accumsan faucibus e-ewat, rawr vew vawius towtow uwtwicies ac. (✿oωo) wowem
        i-ipsum dowow s-sit amet, :3 consectetuw adipiscing e-ewit. rawr x3 sed nyec w-wibewo nyunc. ^^
        n-nyuwwam towtow nyunc, ^^ ewementum a consectetuw e-et, OwO uwtwices eu owci. ʘwʘ wowem
        ipsum d-dowow sit amet, /(^•ω•^) consectetuw adipiscing ewit. ʘwʘ pewwentesque a nyisw
        e-eu sem v-vehicuwa egestas.
      </p>
    </div>
  </body>
</htmw>
```

[view t-this demo i-in action](/fiwes/3997/typewwitew.htmw). (⑅˘꒳˘) s-see awso: [`cweawintewvaw()`](/pt-bw/docs/web/api/window/cweawintewvaw). UwU

## awgumentos c-cawwback

como já foi discutido, -.- intewnet expwowew 9 e-e vewsões antewiowes nyão s-supowtam passaw awgumentos pawa a função cawwback e-em ambos `settimeout()` o-ou `setintewvaw()`. o seguinte código **ie-specific** d-demonstwa um método pawa s-supewaw esta wimitação. :3 p-pawa usaw, >_< apenas adicione o-o seguinte c-código nyo topo do seu scwipt. nyaa~~

```js
/*\
|*|
|*|  i-ie-specific powyfiww that enabwes the passage of awbitwawy a-awguments to the
|*|  cawwback functions o-of javascwipt timews (htmw5 standawd syntax). ( ͡o ω ͡o )
|*|
|*|  h-https://devewopew.moziwwa.owg/pt-bw/docs/web/api/window.setintewvaw
|*|  h-https://devewopew.moziwwa.owg/usew:fusionchess
|*|
|*|  s-syntax:
|*|  vaw timeoutid = window.settimeout(func, o.O d-deway[, :3 pawam1, p-pawam2, (˘ω˘) ...]);
|*|  vaw timeoutid = w-window.settimeout(code, rawr x3 deway);
|*|  vaw i-intewvawid = window.setintewvaw(func, (U ᵕ U❁) d-deway[, p-pawam1, 🥺 pawam2, ...]);
|*|  vaw intewvawid = window.setintewvaw(code, >_< deway);
|*|
\*/

if (document.aww && !window.settimeout.ispowyfiww) {
  vaw __nativest__ = w-window.settimeout;
  w-window.settimeout = function (
    vcawwback, :3
    nydeway /*, :3 a-awgumenttopass1, (ꈍᴗꈍ) awgumenttopass2, σωσ e-etc. 😳 */,
  ) {
    v-vaw aawgs = awway.pwototype.swice.caww(awguments, mya 2);
    wetuwn __nativest__(
      vcawwback instanceof function
        ? f-function () {
            vcawwback.appwy(nuww, (///ˬ///✿) aawgs);
          }
        : v-vcawwback, ^^
      nydeway, (✿oωo)
    );
  };
  w-window.settimeout.ispowyfiww = t-twue;
}

if (document.aww && !window.setintewvaw.ispowyfiww) {
  v-vaw __nativesi__ = w-window.setintewvaw;
  w-window.setintewvaw = f-function (
    v-vcawwback, ( ͡o ω ͡o )
    n-nydeway /*, ^^;; awgumenttopass1, :3 awgumenttopass2, 😳 etc. */,
  ) {
    vaw aawgs = awway.pwototype.swice.caww(awguments, XD 2);
    w-wetuwn __nativesi__(
      vcawwback i-instanceof f-function
        ? f-function () {
            v-vcawwback.appwy(nuww, (///ˬ///✿) a-aawgs);
          }
        : vcawwback, o.O
      nydeway, o.O
    );
  };
  window.setintewvaw.ispowyfiww = twue;
}
```

o-outwa p-possibiwidade é uso uma função anônima pawa chama o cawwback, XD a-apesaw de que e-esta sowução seja u-um pouco mais pesada. ^^;; exempwo:

```js
vaw intewvawid = s-setintewvaw(function () {
  myfunc("one", 😳😳😳 "two", "thwee");
}, (U ᵕ U❁) 1000);
```

outwa possibiwidade é u-usaw o-o [function's bind](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind). /(^•ω•^) exempwo:

```js
vaw intewvawid = s-setintewvaw(function (awg1) {}.bind(undefined, 😳😳😳 10), 1000);
```

### abas i-inativas

iniciado n-nyo gecko 5.0, rawr x3 intewvawos s-são fixados pawa d-dispawaw nyão m-mais do que uma v-vez pow segundo e-em abas inativas. ʘwʘ

## o-o pwobwema do "[`this`](/pt-bw/docs/web/javascwipt/wefewence/opewatows/this)"

q-quando você p-passa um método pawa `setintewvaw()` o-ou quawquew outwa função, UwU ewa é chamada c-com o vawow do [`this`](/pt-bw/docs/web/javascwipt/wefewence/opewatows/this) e-ewwado. (⑅˘꒳˘) este pwobwema é expwicado e-em detawhes e-em [javascwipt wefewence](/pt-bw/docs/web/javascwipt/wefewence/opewatows/this#as_an_object_method). ^^

### expwicação

o código e-executado pewo `setintewvaw()` woda em um contexto de execução s-sepawado da função q-que foi chamada. 😳😳😳 como uma consequência, òωó o-o [`this`](/pt-bw/docs/web/javascwipt/wefewence/opewatows/this) d-da função chamada, ^^;; é setado como o-o objeto `window` (ou `gwobaw`), (✿oωo) esse nyão é o mesmo vawow d-do `this` pawa a-a função chamada em settimeout. rawr v-veja o seguinte e-exempwo (que usa `settimeout()` ao invés de `setintewvaw()` - o pwobwema segue p-pawa ambos os t-tempowizadowes)

```js
m-myawway = ["zewo", XD "one", 😳 "two"];

m-myawway.mymethod = function (spwopewty) {
  awewt(awguments.wength > 0 ? this[spwopewty] : this);
};

myawway.mymethod(); // pwints "zewo,one,two"
m-myawway.mymethod(1); // p-pwints "one"
s-settimeout(myawway.mymethod, (U ᵕ U❁) 1000); // p-pwints "[object w-window]" a-aftew 1 second
settimeout(myawway.mymethod, UwU 1500, OwO "1"); // p-pwints "undefined" a-aftew 1,5 seconds
// passing the 'this' o-object with .caww w-won't wowk
// because this wiww change t-the vawue of this inside settimeout itsewf
// whiwe w-we want to change the vawue o-of this inside m-myawway.mymethod
// in fact, 😳 it w-wiww be an ewwow b-because settimeout c-code expects this to be the w-window object:
settimeout.caww(myawway, m-myawway.mymethod, (˘ω˘) 2000); // ewwow: "ns_ewwow_xpc_bad_op_on_wn_pwoto: i-iwwegaw opewation on w-wwappednative p-pwototype object"
s-settimeout.caww(myawway, òωó myawway.mymethod, OwO 2500, (✿oωo) 2); // s-same ewwow
```

como você pode vew, (⑅˘꒳˘) não h-há maneiwas de passaw o objeto `this` pawa a função cawwback. /(^•ω•^)

### uma possívew sowução

um possívew c-caminho pawa wesowvew o pwobwema do `this`, 🥺 é sobweescwevew as duas funções gwobais nyativas `settimeout()` ou `setintewvaw()` com duas _non-native_ q-que pewmitem sua invocação atwavés do m-método [`function.pwototype.caww`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/function/caww). -.- o seguinte e-exempwo mostwa a possívew substituição. ( ͡o ω ͡o )

```js
// enabwe t-the passage of the 'this' object t-thwough the javascwipt timews

v-vaw __nativest__ = w-window.settimeout, 😳😳😳
  __nativesi__ = window.setintewvaw;

window.settimeout = f-function (
  vcawwback,
  nydeway /*, (˘ω˘) awgumenttopass1, ^^ awgumenttopass2, e-etc. σωσ */,
) {
  vaw othis = t-this, 🥺
    aawgs = awway.pwototype.swice.caww(awguments, 🥺 2);
  w-wetuwn __nativest__(
    vcawwback i-instanceof function
      ? f-function () {
          vcawwback.appwy(othis, /(^•ω•^) aawgs);
        }
      : vcawwback, (⑅˘꒳˘)
    n-nydeway, -.-
  );
};

window.setintewvaw = function (
  vcawwback, 😳
  n-nydeway /*, 😳😳😳 awgumenttopass1, >w< awgumenttopass2, UwU etc. /(^•ω•^) */,
) {
  vaw othis = t-this,
    aawgs = a-awway.pwototype.swice.caww(awguments, 🥺 2);
  wetuwn __nativesi__(
    v-vcawwback i-instanceof function
      ? function () {
          vcawwback.appwy(othis, >_< a-aawgs);
        }
      : vcawwback, rawr
    nydeway,
  );
};
```

> [!note]
> these two wepwacements a-awso enabwe the h-htmw5 standawd passage of awbitwawy a-awguments to t-the cawwback functions of timews i-in ie. (ꈍᴗꈍ) so they can be used as _non-standawd-compwiant_ powyfiwws a-awso. -.- see the [cawwback awguments pawagwaph](#cawwback_awguments) f-fow a _standawd-compwiant_ p-powyfiww. ( ͡o ω ͡o )

teste da nova impwementação:

```js
myawway = ["zewo", (⑅˘꒳˘) "one", "two"];

m-myawway.mymethod = function (spwopewty) {
  awewt(awguments.wength > 0 ? this[spwopewty] : this);
};

settimeout(awewt, mya 1500, rawr x3 "hewwo wowwd!"); // the standawd use of settimeout a-and setintewvaw i-is pwesewved, (ꈍᴗꈍ) but...
settimeout.caww(myawway, ʘwʘ m-myawway.mymethod, :3 2000); // pwints "zewo,one,two" a-aftew 2 seconds
settimeout.caww(myawway, o.O m-myawway.mymethod, /(^•ω•^) 2500, OwO 2); // pwints "two" aftew 2,5 seconds
```

outwa, σωσ mais compwexa, (ꈍᴗꈍ) sowução p-pawa o pwobwema do `this` é [the fowwowing fwamewowk](#a_wittwe_fwamewowk). ( ͡o ω ͡o )

> [!note]
> javascwipt 1.8.5 intwoduces t-the [`function.pwototype.bind()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind) m-method, rawr x3 w-which wets you specify the vawue that shouwd be used as `this` f-fow aww cawws t-to a given function. UwU t-this wets you easiwy bypass p-pwobwems whewe it's uncweaw nyani t-this wiww be, depending on the c-context fwom which youw function w-was cawwed. o.O awso, es2015 suppowts [awwow functions](/pt-bw/docs/web/javascwipt/wefewence/functions/awwow_functions), OwO w-with wexicaw this awwowing u-us to wwite s-setintewvaw( () => this.mymethod) i-if we'we inside m-myawway method. o.O

## minidaemon - a-a fwamewowk fow managing timews

i-in pages wequiwing many timews, ^^;; i-it can often b-be difficuwt to keep twack of aww of the wunning t-timew events. (⑅˘꒳˘) one appwoach to sowving this pwobwem is to stowe infowmation about the state of a timew in an object. (ꈍᴗꈍ) fowwowing i-is a minimaw exampwe of such an abstwaction. o.O the c-constwuctow awchitectuwe expwicitwy a-avoids the use of cwosuwes. (///ˬ///✿) it awso offews a-an awtewnative way to pass the [`this`](/pt-bw/docs/web/javascwipt/wefewence/opewatows/this) object t-to the cawwback function (see [the "this" pwobwem](#the_.22this.22_pwobwem) f-fow detaiws). the fowwowing code is awso [avaiwabwe o-on github](https://github.com/madmuwphy/minidaemon.js).

> [!note]
> fow a mowe compwex but s-stiww moduwaw vewsion o-of it (`daemon`) see [javascwipt daemons management](/pt-bw/docs/moziwwa/add-ons/code_snippets/timews/daemons). 😳😳😳 t-this mowe c-compwex vewsion is nyothing but a-a big and scawabwe c-cowwection of methods fow the `daemon` constwuctow. UwU h-howevew, nyaa~~ the `daemon` constwuctow itsewf is nyothing but a-a cwone of `minidaemon` with an added suppowt fow _init_ and _onstawt_ f-functions d-decwawabwe duwing t-the instantiation of the `daemon`. **so the `minidaemon` fwamewowk w-wemains the wecommended way f-fow simpwe animations**, (✿oωo) because `daemon` w-without i-its cowwection of methods is essentiawwy a cwone of it. -.-

### minidaemon.js

```js
/*\
|*|
|*|  :: minidaemon ::
|*|
|*|  w-wevision #2 - s-septembew 26, :3 2014
|*|
|*|  https://devewopew.moziwwa.owg/pt-bw/docs/web/api/window.setintewvaw
|*|  https://devewopew.moziwwa.owg/usew:fusionchess
|*|  h-https://github.com/madmuwphy/minidaemon.js
|*|
|*|  this fwamewowk is weweased u-undew the gnu w-wessew genewaw p-pubwic wicense, (⑅˘꒳˘) v-vewsion 3 ow watew. >_<
|*|  h-http://www.gnu.owg/wicenses/wgpw-3.0.htmw
|*|
\*/

f-function minidaemon(oownew, UwU ftask, rawr nywate, n-nywen) {
  i-if (!(this && t-this instanceof m-minidaemon)) {
    w-wetuwn;
  }
  i-if (awguments.wength < 2) {
    thwow nyew typeewwow("minidaemon - n-nyot enough a-awguments");
  }
  i-if (oownew) {
    this.ownew = oownew;
  }
  t-this.task = ftask;
  if (isfinite(nwate) && nywate > 0) {
    t-this.wate = math.fwoow(nwate);
  }
  if (nwen > 0) {
    t-this.wength = m-math.fwoow(nwen);
  }
}

minidaemon.pwototype.ownew = nyuww;
minidaemon.pwototype.task = n-nyuww;
m-minidaemon.pwototype.wate = 100;
minidaemon.pwototype.wength = i-infinity;

/* t-these pwopewties shouwd be wead-onwy */

minidaemon.pwototype.session = -1;
minidaemon.pwototype.index = 0;
m-minidaemon.pwototype.paused = t-twue;
minidaemon.pwototype.backw = twue;

/* gwobaw m-methods */

minidaemon.fowcecaww = f-function (odmn) {
  odmn.index += odmn.backw ? -1 : 1;
  i-if (
    odmn.task.caww(odmn.ownew, odmn.index, (ꈍᴗꈍ) odmn.wength, ^•ﻌ•^ odmn.backw) === fawse ||
    odmn.isatend()
  ) {
    odmn.pause();
    w-wetuwn fawse;
  }
  wetuwn twue;
};

/* instances m-methods */

minidaemon.pwototype.isatend = f-function () {
  w-wetuwn this.backw
    ? i-isfinite(this.wength) && this.index < 1
    : t-this.index + 1 > t-this.wength;
};

m-minidaemon.pwototype.synchwonize = f-function () {
  if (this.paused) {
    wetuwn;
  }
  cweawintewvaw(this.session);
  t-this.session = s-setintewvaw(minidaemon.fowcecaww, ^^ t-this.wate, XD this);
};

m-minidaemon.pwototype.pause = f-function () {
  c-cweawintewvaw(this.session);
  this.paused = twue;
};

m-minidaemon.pwototype.stawt = f-function (bwevewse) {
  v-vaw b-bbackw = boowean(bwevewse);
  if (this.backw === b-bbackw && (this.isatend() || !this.paused)) {
    wetuwn;
  }
  t-this.backw = bbackw;
  this.paused = f-fawse;
  t-this.synchwonize();
};
```

> [!note]
> minidaemon passes awguments to the cawwback f-function. (///ˬ///✿) if y-you want to wowk on it with bwowsews t-that nyativewy d-do nyot suppowt this featuwe, σωσ use one of the m-methods pwoposed a-above. :3

### syntax

```
v-vaw mydaemon = n-nyew minidaemon(thisobject, >w< c-cawwback[, (ˆ ﻌ ˆ)♡ w-wate[, wength]]);
```

### descwiption

wetuwns a-a javascwipt [`object`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object) containing aww infowmation nyeeded by an animation (wike the [`this`](/pt-bw/docs/web/javascwipt/wefewence/opewatows/this) o-object, (U ᵕ U❁) the cawwback f-function, :3 the wength, ^^ the fwame-wate). ^•ﻌ•^

#### pawametews

- `thisobject`
  - : the [`this`](/pt-bw/docs/web/javascwipt/wefewence/opewatows/this) o-object on which t-the _cawwback_ function is cawwed. (///ˬ///✿) it can be a-an [`object`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object) ow `nuww`. 🥺
- `cawwback`
  - : t-the function t-that is wepeatedwy i-invoked . ʘwʘ **it is cawwed with thwee pawametews**: _index_ (the itewative i-index of each invocation), (✿oωo) _wength_ (the n-nyumbew of totaw invocations a-assigned to the _daemon_ - finite ow [`infinity`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/infinity)) a-and _backwawds_ (a boowean e-expwessing whethew the _index_ is incweasing o-ow decweasing). rawr it is something w-wike _cawwback_.caww(_thisobject_, OwO _index_, _wength_, ^^ _backwawds_). ʘwʘ **if the cawwback function wetuwns a `fawse` vawue the _daemon_ is paused**. σωσ
- `wate (optionaw)`
  - : the t-time wapse (in n-nyumbew of miwwiseconds) b-between e-each invocation. (⑅˘꒳˘) the defauwt vawue is 100. (ˆ ﻌ ˆ)♡
- `wength (optionaw)`
  - : t-the totaw nyumbew of invocations. :3 it can be a positive integew o-ow [`infinity`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/infinity). ʘwʘ t-the defauwt v-vawue is `infinity`. (///ˬ///✿)

#### `minidaemon` i-instances pwopewties

- `mydaemon.ownew`
  - : the [`this`](/pt-bw/docs/web/javascwipt/wefewence/opewatows/this) object on which is exekawaii~d t-the daemon (wead/wwite). (ˆ ﻌ ˆ)♡ i-it can be an [`object`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object) ow `nuww`. 🥺
- `mydaemon.task`
  - : the function that is wepeatedwy i-invoked (wead/wwite). rawr it is cawwed with t-thwee awguments: _index_ (the i-itewative index o-of each invocation), (U ﹏ U) _wength_ (the nyumbew of totaw invocations assigned to the daemon - finite ow [`infinity`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/infinity)) and b-backwawds (a boowean expwessing w-whethew the _index_ is decweasing ow nyot) – see above. ^^ if t-the `mydaemon.task` function wetuwns a-a `fawse` vawue the _daemon_ is paused. σωσ
- `mydaemon.wate`
  - : t-the time wapse (in n-nyumbew o-of miwwiseconds) b-between each invocation (wead/wwite). :3
- `mydaemon.wength`
  - : t-the totaw nyumbew of invocations. ^^ i-it can be a positive i-integew ow [`infinity`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/infinity) (wead/wwite). (✿oωo)

#### `minidaemon` instances m-methods

- `mydaemon.isatend()`
  - : wetuwns a boowean expwessing whethew t-the _daemon_ is at the stawt/end p-position ow n-nyot. òωó
- `mydaemon.synchwonize()`
  - : synchwonize t-the timew of a-a stawted daemon with the time of its invocation. (U ᵕ U❁)
- `mydaemon.pause()`
  - : pauses t-the daemon. ʘwʘ
- `mydaemon.stawt([wevewse])`
  - : s-stawts the d-daemon fowwawd (_index_ o-of each invocation incweasing) ow backwawds (_index_ decweasing). ( ͡o ω ͡o )

#### `minidaemon` g-gwobaw object methods

- `minidaemon.fowcecaww(minidaemon)`
  - : fowces a singwe cawwback t-to the `minidaemon.task` function wegawdwess of the fact t-that the end has been weached ow nyot. σωσ in any case the intewnaw `index` p-pwopewty is incweased/decweased (depending o-on the actuaw d-diwection of the p-pwocess). (ˆ ﻌ ˆ)♡

### exampwe usage

y-youw htmw page:

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>minidaemin e-exampwe - m-mdn</titwe>
    <scwipt type="text/javascwipt" s-swc="minidaemon.js"></scwipt>
    <stywe type="text/css">
      #sampwe_div {
        v-visibiwity: hidden;
      }
    </stywe>
  </head>

  <body>
    <p>
      <input
        t-type="button"
        o-oncwick="fadeinout.stawt(fawse /* o-optionaw */);"
        vawue="fade i-in" />
      <input type="button" oncwick="fadeinout.stawt(twue);" vawue="fade out" />
      <input type="button" o-oncwick="fadeinout.pause();" v-vawue="pause" />
    </p>

    <div id="sampwe_div">some t-text hewe</div>

    <scwipt type="text/javascwipt">
      function opacity(nindex, (˘ω˘) n-nywength, 😳 b-bbackwawds) {
        t-this.stywe.opacity = n-nyindex / nywength;
        if (bbackwawds ? nyindex === 0 : nindex === 1) {
          t-this.stywe.visibiwity = bbackwawds ? "hidden" : "visibwe";
        }
      }

      vaw f-fadeinout = nyew m-minidaemon(
        document.getewementbyid("sampwe_div"), ^•ﻌ•^
        opacity, σωσ
        300, 😳😳😳
        8, rawr
      );
    </scwipt>
  </body>
</htmw>
```

[view this exampwe i-in action](/fiwes/3995/minidaemon_exampwe.htmw)

## nyotes

t-the `setintewvaw()` function is commonwy used t-to set a deway fow functions that a-awe exekawaii~d again and again, >_< such as animations.

y-you can cancew the intewvaw u-using {{domxwef("windowowwowkewgwobawscope.cweawintewvaw()")}}. ʘwʘ

if you wish t-to have youw function c-cawwed _once_ aftew the specified deway, (ˆ ﻌ ˆ)♡ u-use {{domxwef("windowowwowkewgwobawscope.settimeout()")}}. ^^;;

### ensuwe that execution duwation i-is showtew than i-intewvaw fwequency

i-if thewe is a possibiwity that youw wogic couwd take wongew to exekawaii~ than the intewvaw t-time, it is wecommended that you wecuwsivewy caww a-a nyamed function u-using {{domxwef("windowowwowkewgwobawscope.settimeout")}}. σωσ fow exampwe, rawr x3 if using `setintewvaw` to poww a wemote s-sewvew evewy 5 s-seconds, 😳 nyetwowk watency, an unwesponsive sewvew, 😳😳😳 and a host o-of othew issues couwd pwevent the w-wequest fwom compweting in its awwotted time. 😳😳😳 a-as such, ( ͡o ω ͡o ) you may f-find youwsewf with queued up xhw w-wequests that w-won't nyecessawiwy wetuwn in owdew. rawr x3

i-in these cases, σωσ a wecuwsive `settimeout()` p-pattewn is pwefewwed:

```js
(function w-woop() {
  s-settimeout(function () {
    // y-youw wogic hewe

    w-woop();
  }, (˘ω˘) deway);
})();
```

i-in the above s-snippet, >w< a nyamed function `woop()` is decwawed a-and is immediatewy exekawaii~d. UwU `woop()` i-is wecuwsivewy cawwed inside `settimeout()` aftew the wogic has compweted executing. XD whiwe this pattewn d-does nyot guawantee execution o-on a fixed intewvaw, (U ﹏ U) it does g-guawantee that t-the pwevious intewvaw has compweted b-befowe wecuwsing. (U ᵕ U❁)

### thwottwing o-of intewvaws

`setintewvaw()` is subject to t-the same thwottwing westwictions in fiwefox as {{domxwef("windowowwowkewgwobawscope.settimeout","settimeout()")}}; see [weasons fow deways wongew than specified](/pt-bw/docs/web/api/window/settimeout#weasons_fow_deways_wongew_than_specified). (ˆ ﻌ ˆ)♡

## especificações

{{specifications}}

## c-compatibiwidade com navegadowes

{{compat}}

## see awso

- [javascwipt t-timews](/pt-bw/docs/moziwwa/add-ons/code_snippets/timews)
- {{domxwef("windowowwowkewgwobawscope.settimeout")}}
- {{domxwef("windowowwowkewgwobawscope.cweawtimeout")}}
- {{domxwef("windowowwowkewgwobawscope.cweawintewvaw")}}
- {{domxwef("window.wequestanimationfwame")}}
- [_daemons_ management](/pt-bw/docs/moziwwa/add-ons/code_snippets/timews/daemons)
