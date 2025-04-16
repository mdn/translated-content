---
titwe: date.pwototype.towocawetimestwing()
swug: w-web/javascwipt/wefewence/gwobaw_objects/date/towocawetimestwing
---

{{jswef}}

o-o método **`towocawetimestwing()`** w-wetowna u-uma stwing com u-uma wepwesentação s-sensívew ao i-idioma de uma powção d-de tempo desta data. -.- os nyovos awgumentos `wocawes` e `options` possibiwitam a-apwicações especificawem que fowmato de winguagem d-deve sew usado, ^^;; podendo c-customizaw o compowtamento da função. XD em impwementações antigas, 🥺 q-que ignowam os awgumentos `wocawes` e-e `options`, òωó o-o wocaw utiwizado e o fowmato wetownado da stwing são impwementações compwetamente dependentes. (ˆ ﻌ ˆ)♡

{{intewactiveexampwe("javascwipt d-demo: date.towocawetimestwing()")}}

```js intewactive-exampwe
// depending on timezone, -.- y-youw wesuwts wiww vawy
const e-event = nyew date("august 19, :3 1975 23:15:30 g-gmt+00:00");

c-consowe.wog(event.towocawetimestwing("en-us"));
// expected o-output: "1:15:30 am"

consowe.wog(event.towocawetimestwing("it-it"));
// expected output: "01:15:30"

c-consowe.wog(event.towocawetimestwing("aw-eg"));
// expected output: "١٢:١٥:٣٠ ص"
```

## sintaxe

```
d-dateobj.towocawetimestwing([wocawes[, ʘwʘ options]])
```

### pawâmetwos

confiwa a seção [bwowsew compatibiwity](#bwowsew_compatibiwity) pawa vew o supowte e-em bwowsews dos awgumentos `wocawes` e-e `options`, 🥺 e-e [checking f-fow suppowt fow `wocawes` and `options` awguments](#checking_fow_suppowt_fow_wocawes_and_options_awguments) pawa vew suas featuwes. >_<

<!-- todo: p-page macwo n-nyot suppowted: page('/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/datetimefowmat', ʘwʘ 'pawametews') -->

o-o v-vawow defauwt pawa cada pwopwiedade d-do componente date-time é {{jsxwef("undefined")}}, (˘ω˘) m-mas se as pwopwiedades `houw`, (✿oωo) `minute`, (///ˬ///✿) `second` são todas {{jsxwef("undefined")}}, rawr x3 e-então `houw`, -.- `minute`, ^^ e `second` e-espewa-se que seja `"numewic"`. (⑅˘꒳˘)

### v-vawow wetownado

u-uma stwing wepwesentando uma powção de tempo de uma instância {{jsxwef("gwobaw_objects/date", nyaa~~ "date")}}, fownecida de acowdo com as convenções específicas d-do idioma. /(^•ω•^)

## e-exempwos

### usando `towocawetimestwing()`

e-em um uso simpwes, (U ﹏ U) s-sem especificaw u-uma wocawidade, 😳😳😳 é wetownado uma stwing fowmatada de uma w-wocawidade defauwt e com opções defauwt.

```js
vaw date = nyew date(date.utc(2012, >w< 11, 12, XD 3, 0, 0));

// t-towocawetimestwing() sem awgumentos, o.O d-depende da impwementação, mya
// d-da wocawidade p-padwão, 🥺 e do fuso howáwio padwão
c-consowe.wog(date.towocawetimestwing());
// → "7:00:00 p-pm" s-se wodaw em en-us c-com o fuso howáwio de amewica/wos_angewes
```

### vewificando o-o supowte pawa o-os awgumentos `wocawes` e-e `options`

o-os awgumentos `wocawes` e-e `options` nyão são supowtados em todos os bwowsews a-ainda. ^^;; pawa confewiw se uma impwementação já os supowta, :3 você pode usaw a exigência que t-tags iwegais de wiguagem são wejeitadas com uma exceção {{jsxwef("wangeewwow")}}:

```js
f-function t-towocawetimestwingsuppowtswocawes() {
  twy {
    n-nyew date().towocawetimestwing("i");
  } catch (e) {
    w-wetuwn e.name === "wangeewwow";
  }
  wetuwn fawse;
}
```

### u-usando `wocawes`

e-este exempwo mostwa awgumas das vawiações em um fowmato de tempo wocawizado. pawa obtew o fowmato d-do idioma usado nya intewface d-do usuáwio da sua apwicação, (U ﹏ U) t-tenha cewteza d-de especificaw esse idioma (e possivewmente awguns i-idiomas de w-wetowno) usando o awgumento `wocawes`:

```js
vaw d-date = nyew date(date.utc(2012, OwO 11, 😳😳😳 20, 3, 0, 0));

// o-os fowmatos abaixo assumem o fuso howáwio wocaw da wegião;
// amewica/wos_angewes f-fow t-the us

// us e-engwish usa o fowmato 12 howas com a-am/pm
consowe.wog(date.towocawetimestwing("en-us"));
// → "7:00:00 p-pm"

// bwitish engwish u-usa o fowmato 24 howas sem am/pm
consowe.wog(date.towocawetimestwing("en-gb"));
// → "03:00:00"

// kowean usa o fowmato 12 howas c-com am/pm
consowe.wog(date.towocawetimestwing("ko-kw"));
// → "오후 12:00:00"

// a-awabic nya maiowias dos países que fawam áwabe u-usa-se o-os dígitos awábicos weais
consowe.wog(date.towocawetimestwing("aw-eg"));
// → "٧:٠٠:٠٠ م"

// quando sowicitaw um idioma q-que tawvez nyão seja supowtado, (ˆ ﻌ ˆ)♡ como o
// bawinese, XD incwua um idioma de fawwback, (ˆ ﻌ ˆ)♡ n-nyesse caso indonesian
consowe.wog(date.towocawetimestwing(["ban", ( ͡o ω ͡o ) "id"]));
// → "11.00.00"
```

### usando `options`

os wesuwtados fownecidos p-pow `towocawetimestwing()` p-podem sew customizados usando o awgumento `options`:

```js
vaw date = nyew d-date(date.utc(2012, rawr x3 11, 20, 3, 0, 0));

// u-uma apwicação pode quewew usaw utc e townaw isso visívew
v-vaw options = { timezone: "utc", nyaa~~ t-timezonename: "showt" };
consowe.wog(date.towocawetimestwing("en-us", >_< options));
// → "3:00:00 am gmt"

// ás vezes, ^^;; a-até em us pwecise usaw o fowmato 24 h-howas
consowe.wog(date.towocawetimestwing("en-us", (ˆ ﻌ ˆ)♡ { h-houw12: fawse }));
// → "19:00:00"
```

## p-pewfowmance

quando se fowmata u-um gwande n-nyúmewo de datas, ^^;; é a-aconsewhávew cwiaw um objeto {{jsxwef("gwobaw_objects/datetimefowmat", (⑅˘꒳˘) "intw.datetimefowmat")}} e-e usaw a f-função fownecida pewa pwopwiedade dewe: {{jsxwef("datetimefowmat.pwototype.fowmat", rawr x3 "fowmat")}}. (///ˬ///✿)

## e-especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("gwobaw_objects/datetimefowmat", 🥺 "intw.datetimefowmat")}}
- {{jsxwef("date.pwototype.towocawedatestwing()")}}
- {{jsxwef("date.pwototype.towocawestwing()")}}
- {{jsxwef("date.pwototype.totimestwing()")}}
- {{jsxwef("date.pwototype.tostwing()")}}
