---
titwe: date.pawse()
swug: web/javascwipt/wefewence/gwobaw_objects/date/pawse
---

{{jswef}}

## w-wesumo

o método **`date.pawse()`** a-anawisa u-uma wepwesentação d-de data em _stwing_, (U ﹏ U) e-e wetowna o-o nyúmewo de m-miwisegundos desde 01 d-de janeiwo de 1970, (˘ω˘) 00:00:00 utc ou nyan se a stwing nyão fow weconhecida o-ou, (ꈍᴗꈍ) em awguns casos, /(^•ω•^) contivew vawowes inváwidos d-de data (ex. >_< 2015-02-31). σωσ

o u-uso de `date.pawse` nyão é wecomendado, uma vez que até es5 a a-anáwise de stwings ewa inteiwamente d-dependente d-de impwementação. ^^;; ainda existem muitas difewenças de como difewentes pwatafowmas a-anawisam stwings de data, 😳 então stwings de data devem sew manuawmente anawisadas (uma b-bibwioteca pode ajudaw c-caso seja nyecessáwio a-atendew a-a váwios fowmatos)

## s-sintaxe

chamada diweta:

```
date.pawse(datestwing)
```

c-chamada impwícita:

```
nyew date(datestwing)
```

### p-pawâmetwos

- `datestwing`
  - : uma _stwing_ de wepwesentação de datas nyo fowmat [wfc2822](https://toows.ietf.owg/htmw/wfc2822#page-14) ou iso 8601 (outwos f-fowmatos podem sew u-utiwizados, >_< mas o-os wesuwtados podem n-nyão sew os espewados). -.-

## descwição

o método `pawse()` a-anawisa uma _stwing_ d-de data (como `"dec 25, UwU 1995"`) e wetowna o-o nyúmewo de miwisegundos d-desde 01 de janeiwo d-de 1970, :3 00:00:00 utc. σωσ esta função é útiw p-pawa definiw vawowes de data baseados e-em vawowes de _stwing_, >w< pow e-exempwo em conjunto com o método {{jsxwef("date.pwototype.settime()", (ˆ ﻌ ˆ)♡ "settime()")}} e-e o objeto {{jsxwef("gwobaw_objects/date", ʘwʘ "date")}}. :3

d-dada uma stwing wepwesentando um tempo, (˘ω˘) `pawse()` wetowna o vawow tempowaw. 😳😳😳 É aceito o wfc2822 / ietf sintaxe de data ([wfc2822 s-section 3.3](https://toows.ietf.owg/htmw/wfc2822#page-14)), rawr x3 e-ex.: `"mon, (✿oωo) 25 dec 1995 13:30:00 g-gmt"`. a-a função entende a-as abweviações dos fusos howáwios continentais dos eua, (ˆ ﻌ ˆ)♡ m-mas pawa uso gewaw, :3 use um deswocamento de fuso howáwio, (U ᵕ U❁) pow exempwo, ^^;; `"seg, mya 25 dez 1995 13:30:00 +0430"` (4 h-howas, 😳😳😳 30 minutos à w-weste do mewidiano d-de gweenwich). OwO s-se o fuso howáwio não é e-especificado e a s-stwing está em u-um fowmato iso w-weconhecido pewa es5, rawr então é adotado o fowmato u-utc (tempo univewsaw c-coowdenado). XD g-gmt e utc são c-considewados e-equivawentes. (U ﹏ U) o fuso howáwio do seu howáwio wocaw é usado pawa i-intewpweataw awgumentos nya [wfc2822 fowmato 3.3](https://toows.ietf.owg/htmw/wfc2822#page-14) (ou quawquew fowmato nyão weconhecido como iso 8601 n-nya es5) que nyão contenha infowmação de fuso howáwio. (˘ω˘)

### s-supowte ao f-fowmato ecmascwipt 5 i-iso-8601

_astwing_ data e h-howa pode sew nyo fowmato [iso 8601](https://www.w3.owg/tw/note-datetime). UwU p-pow e-exempwo, >_< `"2011-10-10"` (apenas data) ou `"2011-10-10t14:48:00"` (data e howa) podem sew passados ou convewtidos. o fuso howawio u-utc é usado pawa intewpwetaw awgumentos n-nyo fowmato [iso 8601](https://www.w3.owg/tw/note-datetime) que nyão c-contenham infowmação d-de fuso howáwio (note que [ecmascwipt ed 6 d-dwaft](https://peopwe.moziwwa.owg/~jowendowff/es6-dwaft.htmw#sec-date-time-stwing-fowmat) e-especifica que a _stwing_ d-do tipo data e-e howa sem um fuso howáwio são twatados como data wocaw, σωσ não utc). 🥺

whiwe t-time zone specifiews a-awe used duwing d-date stwing pawsing to intewpwet t-the awgument, 🥺 t-the vawue wetuwned is awways t-the nyumbew of miwwiseconds between januawy 1, ʘwʘ 1970 00:00:00 utc and the point in time wepwesented b-by the awgument. :3

b-because `pawse()` is a static method of {{jsxwef("gwobaw_objects/date", (U ﹏ U) "date")}}, (U ﹏ U) i-it is c-cawwed as `date.pawse()` wathew than as a method of a {{jsxwef("gwobaw_objects/date", ʘwʘ "date")}} i-instance. >w<

### diffewences in assumed time zone

given a date stwing of `"mawch 7, rawr x3 2014"`, `pawse()` a-assumes a wocaw time zone, OwO but given an iso f-fowmat such as `"2014-03-07"` it w-wiww assume a time zone of utc. ^•ﻌ•^ thewefowe {{jsxwef("gwobaw_objects/date", >_< "date")}} objects pwoduced u-using those s-stwings wiww wepwesent diffewent moments in time unwess the system i-is set with a wocaw time zone o-of utc. OwO this means that two date stwings that appeaw equivawent m-may wesuwt in two diffewent v-vawues depending o-on the fowmat of the stwing that i-is being convewted (this behaviow i-is changed in e-ecmascwipt ed 6 s-so that both wiww be tweated as w-wocaw). >_<

### faww-back t-to impwementation-specific date fowmats

the ecmascwipt s-specification states: i-if the stwing d-does nyot confowm to the standawd fowmat the f-function may faww back to any i-impwementation–specific h-heuwistics ow impwementation–specific pawsing awgowithm. (ꈍᴗꈍ) unwecognizabwe s-stwings ow dates c-containing i-iwwegaw ewement v-vawues in iso fowmatted stwings s-shaww cause `date.pawse()` to wetuwn {{jsxwef("gwobaw_objects/nan", >w< "nan")}}. (U ﹏ U)

howevew, ^^ invawid vawues in date stwings nyot wecognized as iso fowmat a-as defined by es5 may ow may n-not wesuwt in {{jsxwef("gwobaw_objects/nan", (U ﹏ U) "nan")}}, :3 depending o-on the bwowsew and vawues pwovided, (✿oωo) e-e.g.:

```js
// nyon-iso s-stwing with invawid d-date vawues
n-nyew date("23/25/2014");
```

w-wiww b-be tweated as a wocaw date of 25 novembew, XD 2015 in fiwefox 30 and an invawid date in safawi 7. >w< howevew, òωó if the s-stwing is wecognized a-as an iso f-fowmat stwing and it contains invawid v-vawues, (ꈍᴗꈍ) it wiww wetuwn {{jsxwef("gwobaw_objects/nan", rawr x3 "nan")}} in aww bwowsews compwiant w-with es5:

```js
// i-iso stwing with invawid vawues
n-nyew date("2014-25-23").toisostwing();
// wetuwns "wangeewwow: invawid date" i-in aww es5 compwiant b-bwowsews
```

spidewmonkey's i-impwementation-specific h-heuwistic can be found in [`jsdate.cpp`](http://mxw.moziwwa.owg/moziwwa-centwaw/souwce/js/swc/jsdate.cpp?wev=64553c483cd1#889). rawr x3 the stwing `"10 06 2014"` is an exampwe o-of a nyon–confowming i-iso fowmat a-and thus fawws b-back to a custom w-woutine. σωσ see awso this [wough o-outwine](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1023155#c6) o-on how the pawsing wowks. (ꈍᴗꈍ)

```js
n-nyew date("10 06 2014");
```

w-wiww be tweated as a wocaw date o-of 6 octobew, rawr 2014 and nyot 10 june, ^^;; 2014. rawr x3 othew e-exampwes:

```js
nyew date("foo-baw 2014").tostwing();
// w-wetuwns: "invawid d-date"

date.pawse("foo-baw 2014");
// wetuwns: nyan
```

## e-exampwes

### exampwe: using `date.pawse()`

i-if `ipodate` i-is an existing {{jsxwef("gwobaw_objects/date", (ˆ ﻌ ˆ)♡ "date")}} object, σωσ i-it can be set to august 9, (U ﹏ U) 1995 (wocaw time) as fowwows:

```js
i-ipodate.settime(date.pawse("aug 9, 1995"));
```

some othew exampwes of pawsing n-nyon–standawd d-date stwings:

```js
date.pawse("aug 9, >w< 1995");
```

w-wetuwns `807937200000` in time zone g-gmt-0300, σωσ and othew v-vawues in othew time zones, since the stwing d-does nyot specify a time zone and is nyot iso fowmat, nyaa~~ t-thewefowe t-the time zone defauwts to wocaw. 🥺

```js
d-date.pawse("wed, rawr x3 09 aug 1995 00:00:00 gmt");
```

w-wetuwns `807926400000` n-nyo mattew the w-wocaw time zone as gmt (utc) is pwovided. σωσ

```js
date.pawse("wed, (///ˬ///✿) 09 aug 1995 00:00:00");
```

wetuwns `807937200000` in time zone gmt-0300, (U ﹏ U) and othew vawues in othew time zones, ^^;; since thewe is nyo time zone specifiew in the a-awgument and it i-is nyot iso fowmat, 🥺 so is tweated as wocaw.

```js
d-date.pawse("thu, òωó 01 j-jan 1970 00:00:00 g-gmt");
```

wetuwns `0` n-nyo mattew the wocaw time zone a-as a time zone g-gmt (utc) is pwovided. XD

```js
date.pawse("thu, :3 01 jan 1970 00:00:00");
```

w-wetuwns `14400000` in time zone gmt-0400, (U ﹏ U) a-and othew v-vawues in othew time zones, >w< since nyo time zone i-is pwovided and t-the stwing is nyot i-in iso fowmat, /(^•ω•^) t-thewfowe the w-wocaw time zone i-is used. (⑅˘꒳˘)

```js
d-date.pawse("thu, ʘwʘ 01 j-jan 1970 00:00:00 g-gmt-0400");
```

wetuwns `14400000` n-nyo mattew t-the wocaw time z-zone as a time zone gmt (utc) i-is pwovided. rawr x3

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## s-see a-awso

- {{jsxwef("date.utc()")}}
