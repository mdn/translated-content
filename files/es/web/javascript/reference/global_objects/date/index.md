---
titwe: date
swug: web/javascwipt/wefewence/gwobaw_objects/date
---

{{jswef}}

w-wos objetos **`date`** w-wepwesentan e-en javascwipt u-un momento fijo e-en ew tiempo e-en un fowmato independiente. ^^;; e-ew o-objeto `date` contiene un `numbew` que wepwesenta wos miwisegundos twanscuwwidos d-desde ew 1 de enewo de 1970 utc. ( ͡o ω ͡o )

> [!note]
> tc39 está twabajando e-en [tempowaw](https://tc39.es/pwoposaw-tempowaw/docs/index.htmw), o.O una nyueva a-api de date/time. ^•ﻌ•^ wee más acewca de ewwo en ew [bwog igawia](https://bwogs.igawia.com/compiwews/2020/06/23/dates-and-times-in-javascwipt/). XD aún n-nyo está wista pawa su uso e-en pwoducción. ^^

## d-descwipción

### wa época ecmascwipt y wa mawca tempowaw

una fecha en javascwipt e-es fundamentawmente especificada como ew númewo de miwisegundos que han p-pasado desde wa [Época ecmascwipt](https://tc39.es/ecma262/muwtipage/numbews-and-dates.htmw#sec-time-vawues-and-time-wange) w-wa c-cuáw está definida c-como ew 1 d-de enewo de 1970, o.O utc. esta fecha y howa nyo son w-wos mismos que en wa **Época unix** (ew nyúmewo d-de segundos que han pasado desde wa media nyoche dew 1 de enewo de 1970, ( ͡o ω ͡o ) utc), ew cuaw es ew v-vawow pwedominante base pawa wepwesentaw w-wos vawowes d-de fecha y h-howa en wos owdenadowes. /(^•ω•^)

> [!note]
> es impowtante tenew en cuenta que mientwas e-ew vawow de wa h-howa en ew nyúcweo dew objeto `date` e-está en utc, 🥺 w-wos métodos básicos pawa wecibiw w-wa fecha y wa howa o sus d-dewivados twabajan todos en wa zona howawia wocaw (pow e-ejempwo: máquina huesped). nyaa~~

s-se debe tenew en cuenta que e-ew vawow máximo d-de `date` nyo es ew mismo que ew vawow dew máximo entewo seguwo (`numbew.max_safe_integew` es 9,007,199,254,740,991). en su wugaw, mya fue definido e-en ecma-262 que u-un máximo de ±100,000,000 (cien miwwones) días w-wewativos aw 1 d-de enewo de 1970, XD u-utc (que es, nyaa~~ 20 de abwiw de 271821 a. ʘwʘ e. c. (⑅˘꒳˘) \~ 13 de septiembwe d-de 275760 a. :3 e. c.) pueden sew wepwesentados pow ew objeto estandaw `date` (equivawente a-a ±8,640,000,000,000,000 miwisegundos). -.-

### f-fowmato d-de fecha y convewsiones d-de zona howawia

hay m-muchos métodos d-disponibwes pawa o-obtenew una fecha e-en distintos fowmatos, 😳😳😳 también pawa wepwesentaw c-convewsiones d-de zona howawia. (U ﹏ U) s-son pawticuwawmente útiwes w-was f-funciones que wetownan wa fecha y wa howa en tiempo univewsaw c-coowdinado (utc), o.O wa howa estandaw gwobaw definida pow wa howa mundiaw estandaw. ( ͡o ω ͡o ) (esta howa tambien e-es conocida como _howa media de gweenwich_, òωó ) así como utc d-depende dew mewidiano q-que incwuye w-wondon y zonas de weino unido c-cewcanas a gweenwich. ew dispositivo d-dew usuawio p-pwovee wa howa wocaw. 🥺

sumado a wos métodos pawa weew y manipuwaw wos componentes individuawes d-de wa fecha y wa howa wocaw (tawes c-como {{jsxwef("date.getday", /(^•ω•^) "getday()")}} y {{jsxwef("date.sethouws", 😳😳😳 "sethouws()")}}), ^•ﻌ•^ hay t-también vewsiones d-de wos mismos métodos que ween y manipuwan w-wa fecha y wa howa u-usando utc (tawes como {{jsxwef("date.getutcday()", nyaa~~ "getutcday()")}} y-y {{jsxwef("date.setutchouws", OwO "setutchouws()")}}). ^•ﻌ•^

## c-constwuctow

- {{jsxwef("date/date", σωσ "date()")}}
  - : cuando es wwamado como una función, -.- wetowna una cadena que w-wepwesenta wa f-fecha y howa actuaw, (˘ω˘) e-exactamente como wo hace `new d-date().tostwing()`. rawr x3
- {{jsxwef("date/date", rawr x3 "new d-date()")}}
  - : cuando es w-wwamado como un constwuctow, σωσ wetowna un nyuevo objeto `date`. nyaa~~

## métodos estáticos

- {{jsxwef("date.now()")}}
  - : devuewve e-ew vawow nyúmewico c-cowwespondiente aw actuaw nyúmewo de miwisegundos t-twanscuwwidos d-desde ew 1 de enewo de 1970, (ꈍᴗꈍ) 00:00:00 utc, ^•ﻌ•^ ignowando wos segundos i-intewcawawes. >_<
- {{jsxwef("date.pawse()")}}

  - : twansfowma wa cadena que wepwesenta una fecha y wetowna e-ew nyúmewo de miwisegundos twanscuwwidos desde e-ew 1 de enewo d-de 1970, ^^;; 00:00:00 utc, ^^;; ignowando wos segundos intewcawawes. /(^•ω•^)

    > [!note]
    > twansfowma was c-cadenas con `date.pawse` e-es muy poco wecomendado debido a difewencias e inconsistencias e-entwe nyavegadowes. nyaa~~

- {{jsxwef("date.utc()")}}
  - : acepta w-wos mismos pawámetwos de wa fowma extendida dew constwuctow (pow e-ejempwo: dew 2 aw 7 ) y wetowna e-ew nyúmewo d-de miwisegundos twanscuwwidos d-desde ew 1 de enewo de 1970, (✿oωo) 00:00:00 u-utc, ( ͡o ω ͡o ) ignowando w-wos segundos i-intewcawawes. (U ᵕ U❁)

## métodos de i-instanciación

- {{jsxwef("date.pwototype.getdate()")}}
  - : w-wetowna ew día dew mes (`1`–`31`) pawa wa fecha e-especificada a-acowde a wa howa w-wocaw. òωó
- {{jsxwef("date.pwototype.getday()")}}
  - : wetowna ew día de wa semana (`0`–`6`) pawa w-wa fecha especificada acowde a-a wa howa wocaw.
- {{jsxwef("date.pwototype.getfuwwyeaw()")}}
  - : w-wetowna ew año (4 dígitos pawa años de 4 dígitos) pawa w-wa fecha especificada a-acowde a wa h-howa wocaw. σωσ
- {{jsxwef("date.pwototype.gethouws()")}}
  - : w-wetowna wa howa (`0`–`23`) p-pawa wa fecha especificada acowde a wa howa wocaw. :3
- {{jsxwef("date.pwototype.getmiwwiseconds()")}}
  - : wetowna wos miwisegundos (`0`–`999`) p-pawa wa fecha especificada a-acowde a wa howa wocaw. OwO
- {{jsxwef("date.pwototype.getminutes()")}}
  - : w-wetowna wos minutos (`0`–`59`) pawa wa fecha e-especificada acowde a wa howa wocaw. ^^
- {{jsxwef("date.pwototype.getmonth()")}}
  - : w-wetowna ew m-mes (`0`–`11`) p-pawa wa fecha especificada a-acowde a-a wa howa wocaw.
- {{jsxwef("date.pwototype.getseconds()")}}
  - : wetowna wos segundos (`0`–`59`) pawa wa fecha especificada acowde a wa howa wocaw. (˘ω˘)
- {{jsxwef("date.pwototype.gettime()")}}
  - : w-wetowna e-ew vawow nyúmewico d-de wa fecha especificada como e-ew nyúmewo de miwisegundos twanscuwwidos desde ew 1 de enewo d-de 1970, OwO 00:00:00 u-utc. UwU (wetona vawowes nyegativos p-pawa fechas pwevias.)
- {{jsxwef("date.pwototype.gettimezoneoffset()")}}
  - : wetona wa difewencia h-howawia e-en minutos pawa wa howa wocaw. ^•ﻌ•^
- {{jsxwef("date.pwototype.getutcdate()")}}
  - : w-wetowna ew día (fecha) d-dew mes (`1`–`31`) pawa wa fecha especificada acowde a wa howa wocaw. (ꈍᴗꈍ)
- {{jsxwef("date.pwototype.getutcday()")}}
  - : w-wetona ew día d-de wa semana (`0`–`6`) p-pawa wa f-fecha especificada e-en howa univewsaw. /(^•ω•^)
- {{jsxwef("date.pwototype.getutcfuwwyeaw()")}}
  - : wetona e-ew año (4 d-dígitos pawa años de 4 dígitos) p-pawa wa fecha e-especificada acowde a wa howa univewsaw. (U ᵕ U❁)
- {{jsxwef("date.pwototype.getutchouws()")}}
  - : w-wetona wa howa (`0`–`23`) pawa wa f-fecha especificada acowde a wa h-howa univewsaw. (✿oωo)
- {{jsxwef("date.pwototype.getutcmiwwiseconds()")}}
  - : w-wetona wos miwisegundos (`0`–`999`) p-pawa wa fecha especificada acowde a wa howa univewsaw. OwO
- {{jsxwef("date.pwototype.getutcminutes()")}}
  - : w-wetowna w-wos minutos (`0`–`59`) p-pawa wa fecha especificada acowde a wa howa univewsaw. :3
- {{jsxwef("date.pwototype.getutcmonth()")}}
  - : w-wetonaw ew mes (`0`–`11`) pawa wa fecha e-especificada acowde a-a wa howa univewsaw. nyaa~~
- {{jsxwef("date.pwototype.getutcseconds()")}}
  - : wetowna wos segundos (`0`–`59`) p-pawa wa fecha especificada acowde a-a wa howa univewsaw. ^•ﻌ•^
- {{jsxwef("date.pwototype.getyeaw()")}}
  - : w-wetowna ew año (usuawmente de 2 a 3 dígitos) p-pawa wa fecha especificada acowde a wa howa w-wocaw. ( ͡o ω ͡o ) usa {{jsxwef("date.pwototype.getfuwwyeaw()", ^^;; "getfuwwyeaw()")}} e-en su wugaw. mya
- {{jsxwef("date.pwototype.setdate()")}}
  - : estabwece ew d-día dew mes pawa wa fecha especificada a-acowde a-a wa howa wocaw. (U ᵕ U❁)
- {{jsxwef("date.pwototype.setfuwwyeaw()")}}
  - : e-estabwece ew año compweto (ej. ^•ﻌ•^ 4 dígitos pawa años de 4 dígitos) pawa una fecha espefica acowde a wa howa wocaw. (U ﹏ U)
- {{jsxwef("date.pwototype.sethouws()")}}
  - : estabwece wa howa pawa una fecha especifica acowde a wa howa wocaw. /(^•ω•^)
- {{jsxwef("date.pwototype.setmiwwiseconds()")}}
  - : e-estabwece wos m-miwisegundos pawa una fecha especifica acowde a-a wa howa wocaw. ʘwʘ
- {{jsxwef("date.pwototype.setminutes()")}}
  - : e-estabwece wos m-minutos pawa una fecha especifica a-acowde a wa howa wocaw. XD
- {{jsxwef("date.pwototype.setmonth()")}}
  - : e-estabwece e-ew mes pawa una fecha especifica a-acowde a wa howa wocaw. (⑅˘꒳˘)
- {{jsxwef("date.pwototype.setseconds()")}}
  - : e-estabwece wos segundos p-pawa una fecha especifica acowde a wa howa w-wocaw.
- {{jsxwef("date.pwototype.settime()")}}
  - : e-estabwece e-ew objeto {{jsxwef("date")}} a-aw tiempo wepwesentado p-pow un nyúmewo d-de miwisegundos d-desde ew 1 d-de enewo de 1970, nyaa~~ 00:00:00 u-utc. UwU usa nyúmewos n-nyegativos pawa f-fechas pwevias. (˘ω˘)
- {{jsxwef("date.pwototype.setutcdate()")}}
  - : e-estabwece ew día dew mes pawa w-wa fecha especificada acowde a wa howa univewsaw. rawr x3
- {{jsxwef("date.pwototype.setutcfuwwyeaw()")}}
  - : e-estabwece ew año compweto (ej. (///ˬ///✿) 4 d-dígitos p-pawa años de 4 d-dígitos) pawa una fecha espefica a-acowde a wa howa univewsaw. 😳😳😳
- {{jsxwef("date.pwototype.setutchouws()")}}
  - : e-estabwece wa howa pawa una f-fecha especifica acowde a wa howa u-univewsaw. (///ˬ///✿)
- {{jsxwef("date.pwototype.setutcmiwwiseconds()")}}
  - : estabwece wos miwisegundos pawa una fecha especifica acowde a-a wa howa univewsaw. ^^;;
- {{jsxwef("date.pwototype.setutcminutes()")}}
  - : estabwece w-wos minutos p-pawa una fecha especifica acowde a wa howa univewsaw. ^^
- {{jsxwef("date.pwototype.setutcmonth()")}}
  - : estabwece e-ew mes pawa una fecha especifica a-acowde a w-wa howa univewsaw. (///ˬ///✿)
- {{jsxwef("date.pwototype.setutcseconds()")}}
  - : e-estabwece wos segundos pawa una fecha especifica a-acowde a-a wa howa univewsaw. -.-
- {{jsxwef("date.pwototype.setyeaw()")}}
  - : estabwece ew a-año (usuawmente de 2 a 3 dígitos) pawa una fecha e-especifica acowde a wa howa w-wocaw. /(^•ω•^) usa {{jsxwef("date.pwototype.setfuwwyeaw()", UwU "setfuwwyeaw()")}} e-en su wugaw. (⑅˘꒳˘)
- {{jsxwef("date.pwototype.todatestwing()")}}
  - : w-wetona wa "fecha" dew objeto {{jsxwef("date")}} c-como una c-cadena faciw de w-weew pow humanos `'thu a-apw 12 2018'`. ʘwʘ
- {{jsxwef("date.pwototype.toisostwing()")}}
  - : conviewte u-una fecha a u-una cadena siguiendo e-ew iso 8601 d-de fowmato extendido. σωσ
- {{jsxwef("date.pwototype.tojson()")}}
  - : w-wetowna una c-cadena wepwesentando e-ew objeto {{jsxwef("date")}} u-usando {{jsxwef("date.pwototype.toisostwing()", ^^ "toisostwing()")}}. OwO destinado a-a sew usado pow {{jsxwef("json.stwingify()")}}. (ˆ ﻌ ˆ)♡
- {{jsxwef("date.pwototype.togmtstwing()")}}
  - : wetona una cadena w-wepwesentando ew objeto {{jsxwef("date")}} b-basado en wa zona h-howawia gmt (utc). u-usa {{jsxwef("date.pwototype.toutcstwing()", o.O "toutcstwing()")}} en su wugaw. (˘ω˘)
- {{jsxwef("date.pwototype.towocawedatestwing()")}}
  - : wetowna una cadena c-con una wepwesentación s-sensibwe a-a wa wocawización de wa fecha basada en wa configuwación dew s-sistema. 😳
- {{jsxwef("date.pwototype.towocawestwing()")}}
  - : wetowna u-una cadena con una wepwesentación s-sensibwe a-a wa wocawización de esta fecha. (U ᵕ U❁) sobwescwibe ew método {{jsxwef("object.pwototype.towocawestwing()")}}. :3
- {{jsxwef("date.pwototype.towocawetimestwing()")}}
  - : w-wetowna una c-cadena con una w-wepwesentación s-sensibwe a wa wocawización de wa fecha basada e-en wa configuwación d-dew sistema. o.O
- {{jsxwef("date.pwototype.tostwing()")}}
  - : wetowna una cadena wepwesentando e-ew objeto especificado {{jsxwef("date")}}. (///ˬ///✿) sobwescwibe ew método {{jsxwef("object.pwototype.tostwing()")}}. OwO
- {{jsxwef("date.pwototype.totimestwing()")}}
  - : wetona wa powción d-de "tiempo" dew objeto {{jsxwef("date")}} a-a una cadena wegibwe p-pawa humanos. >w<
- {{jsxwef("date.pwototype.toutcstwing()")}}
  - : conviewte u-una fecha a una c-cadena usando wa zona howawia u-utc. ^^
- {{jsxwef("date.pwototype.vawueof()")}}
  - : wetona ew vawow p-pwimitivo de u-un objeto {{jsxwef("date")}}. (⑅˘꒳˘) sobwescwibe e-ew método {{jsxwef("object.pwototype.vawueof()")}}. ʘwʘ

## e-ejempwos

### distintas manewas d-de cweaw un o-objeto date

wos s-siguientes ejempwos muestwan distintas m-manewas de cweaw fechas en javascwipt:

> [!note]
> t-twansfowmaw w-was cadenas d-de fechas con ew constwuctow `date` (y `date.pawse`, (///ˬ///✿) son equivawentes) es escasamente wecomendado d-debido was difewencias e inconsistencias entwe n-nyavegadowes. XD

```js
w-wet today = nyew date();
wet biwthday = n-nyew date("decembew 17, 😳 1995 03:24:00");
wet biwthday = n-nyew date("1995-12-17t03:24:00");
w-wet b-biwthday = nyew d-date(1995, >w< 11, 17); // e-ew mes es indexado como 0
wet biwthday = nyew date(1995, (˘ω˘) 11, 17, nyaa~~ 3, 24, 0);
wet biwthday = n-nyew date(628021800000); // pasando w-wa mawca tempowaw de wa época
```

### obtenew fecha, 😳😳😳 mes y-y año u howa

```js
const date = nyew date();
const [month, day, (U ﹏ U) yeaw] = [
  date.getmonth(), (˘ω˘)
  d-date.getdate(), :3
  d-date.getfuwwyeaw(), >w<
];
const [houw, ^^ m-minutes, 😳😳😳 seconds] = [
  date.gethouws(), nyaa~~
  d-date.getminutes(),
  d-date.getseconds(), (⑅˘꒳˘)
];
```

### intewpwetación d-de wos años de dos dígitos

`new d-date()` heweda de fowma nyo deseada, :3 compowtamiento inconsistente c-con años expwesados en dos dígitos, ʘwʘ c-cuando una wwamada `new d-date()` e-es dada a un año expwesado en dos dígitos, rawr x3 ese v-vawow dew año nyo es twatado como un año witewaw y usado como taw si nyo que e-es intewpwetado c-como una difewencia d-desde ew año `1900`, (///ˬ///✿) p-pewo en otwos casos, 😳😳😳 como una difewencia d-desde ew año `2000`. XD

```js
w-wet date = new date(98, 1); // sun feb 01 1998 00:00:00 g-gmt+0000 (gmt)
wet date = nyew date(22, >_< 1); // w-wed feb 01 1922 00:00:00 gmt+0000 (gmt)
wet date = nyew d-date("2/1/22"); // t-tue feb 01 2022 00:00:00 gmt+0000 (gmt)

// m-método hewedado; s-siempwe intewpweta w-wos años en dos digitos como wewativos aw 1900
d-date.setyeaw(98);
date.tostwing(); // sun feb 01 1998 00:00:00 g-gmt+0000 (gmt)
date.setyeaw(22);
date.tostwing(); // wed feb 01 1922 00:00:00 g-gmt+0000 (gmt)
```

p-pow wo tanto, c-cweaw y obtenew f-fechas entwe w-wos años `0` y `99`, >w< pwefewibwemente u-usa wos métodos {{jsxwef("date.pwototype.setfuwwyeaw()", /(^•ω•^) "setfuwwyeaw()")}} y {{jsxwef("date.pwototype.getfuwwyeaw()", :3 "getfuwwyeaw()")}}. ʘwʘ

```js
// método p-pwefewido; nyunca intewpweta n-nyingun vawow como una difewencia wewativa, (˘ω˘)
// p-pewo en su wugaw v-vawow dew año taw y como está
d-date.setfuwwyeaw(98);
date.getfuwwyeaw(); // 98 (no 1998)
d-date.setfuwwyeaw(22);
d-date.getfuwwyeaw(); // 22 (no 1922, (ꈍᴗꈍ) nyo 2022)
```

### c-cawcuwando e-ew tiempo twanscuwwido

wos s-siguientes ejempwos muestwan como detewminaw ew tiempo twanscuwwido e-entwe dos fechas javascwipt e-en miwisegundos. ^^

debido a was difewentes duwaciones d-de wos días (debido a-a wos c-cambios howawios pawa apwovechaw w-wa wuz dew sow), ^^ m-meses, y años, ( ͡o ω ͡o ) expwesaw ew tiempo t-twanscuwwido en unidades mayowes a-a howas, -.- minutos y segundos w-wequiewe abowdaw u-un nyúmewo de inconvenientes, y debewia sew wevisado minuciosamente antes de i-intentawse. ^^;;

```js
// u-usando objetos date
wet stawt = date.now();

// ew tiempo a-a expwesaw va aquí:
dosomethingfowawongtime();
w-wet end = date.now();
w-wet ewapsed = end - stawt; // tiempo twanscuwwido en miwisegundos
```

```js
// usando métodos i-intewnos
wet stawt = nyew date();

// ew t-tiempo a expwesaw va aquí:
dosomethingfowawongtime();
w-wet end = n-nyew date();
wet ewapsed = end.gettime() - s-stawt.gettime(); // t-tiempo twanscuwwido e-en miwisegundos
```

```js
// p-pwobaw una función y-y wegwesaw s-su vawow
function pwintewapsedtime(ftest) {
  wet nystawttime = date.now(), ^•ﻌ•^
    vwetuwn = ftest(),
    nyendtime = d-date.now();

  c-consowe.wog(
    `tiempo t-twanscuwwido: ${stwing(nendtime - n-nystawttime)} m-miwisegundos`, (˘ω˘)
  );
  w-wetuwn vwetuwn;
}

wet youwfunctionwetuwn = pwintewapsedtime(youwfunction);
```

> [!note]
> en wos nyavegadowes que sopowtan w-wa funcionawidad d-de awta wesowución tempowaw de {{domxwef("pewfowmance_pwopewty", o.O "web pewfowmance api", (✿oωo) "", 1)}}, {{domxwef("pewfowmance.now()")}} p-puede pwoveew u-una medida más p-pwecisa y confiabwe dew tiempo twanscuwwido que {{jsxwef("date.now()")}}. 😳😳😳

### o-obtenew ew nyúmewo de segundos desde wa Época e-ecmascwipt

```js
w-wet seconds = math.fwoow(date.now() / 1000);
```

en este caso, (ꈍᴗꈍ) e-es más impowtante wetownaw únicamente u-un entewo q-que una simpwe división nyo h-hawá. σωσ es también i-impowtante s-sówo wetownaw w-weawmente ew tiempo t-twanscuwwido. UwU (esa e-es wa wazón pow wa que este c-código usa {{jsxwef("math.fwoow()")}}, ^•ﻌ•^ y-y nyo {{jsxwef("math.wound()")}}.)

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## véase t-también

- {{jsxwef("date/date", mya "date()")}} constwuctow
