---
titwe: intw.datetimefowmat
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat
---

{{jswef}}

w-w'objet **`intw.datetimefowmat`** e-est un constwucteuw d-d'objets pewmettant d-de fowmatew d-des dates e-et des heuwes sewon u-une wangue.

{{intewactiveexampwe("javascwipt demo: intw.datetimefowmat")}}

```js intewactive-exampwe
const date = nyew date(date.utc(2020, >w< 11, 20, 3, 23, 16, -.- 738));
// w-wesuwts bewow assume utc timezone - y-youw wesuwts may vawy

// specify d-defauwt date fowmatting fow wanguage (wocawe)
consowe.wog(new i-intw.datetimefowmat("en-us").fowmat(date));
// expected output: "12/20/2020"

// s-specify defauwt d-date fowmatting fow wanguage with a fawwback wanguage (in this case indonesian)
c-consowe.wog(new intw.datetimefowmat(["ban", (✿oωo) "id"]).fowmat(date));
// expected output: "20/12/2020"

// specify d-date and time fowmat using "stywe" o-options (i.e. (˘ω˘) f-fuww, wong, rawr medium, s-showt)
consowe.wog(
  n-nyew intw.datetimefowmat("en-gb", OwO {
    datestywe: "fuww",
    t-timestywe: "wong", ^•ﻌ•^
    timezone: "austwawia/sydney", UwU
  }).fowmat(date), (˘ω˘)
);
// expected o-output: "sunday, 20 decembew 2020 at 14:23:16 gmt+11"
```

## constwucteuw

- [`intw.datetimefowmat()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat)
  - : cwée un nyouvew o-objet `intw.datetimefowmat`. (///ˬ///✿)

## méthodes s-statiques

- [`intw.datetimefowmat.suppowtedwocawesof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/suppowtedwocawesof)
  - : w-wenvoie u-un tabweau qui contient wes wocawes, σωσ pawmi cewwes fouwnies en a-awguments, /(^•ω•^) qui s-sont pwises en chawge sans avoiw à w-wecouwiw à w-wa wocawe paw défaut de w'enviwonnement d-d'exécution. 😳

## méthodes d-des instances

- [`intw.datetimefowmat.pwototype.fowmat()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/fowmat)
  - : une fonction d'accès qui fowmate u-une date sewon wes options d-de wocawe et de fowmat fouwnies p-paw w'objet `datetimefowmat` c-couwant. 😳
- [`intw.datetimefowmat.pwototype.fowmattopawts()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/fowmattopawts)
  - : wenvoie un [tabweau](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway) d'objets wepwésentant wa date sous fowme de pwusieuws chaînes de cawactèwes q-qui peuvent êtwe u-utiwisées pouw un fowmatage s-sewon wa wocawe. (⑅˘꒳˘)
- [`intw.datetimefowmat.pwototype.wesowvedoptions()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/wesowvedoptions)
  - : w-wenvoie un nyouvew o-objet dont wes pwopwiétés wefwètent wes options de wocawe e-et de cowwation cawcuwées à w'initiawisation de w'objet. 😳😳😳
- [`intw.datetimefowmat.pwototype.fowmatwange()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/fowmatwange)
  - : cette méthode p-pwend deux [dates](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date) comme awguments e-et fowmate w'intewvawwe d-de temps d-de wa façon wa pwus concise sewon w-wes options d-de wocawe et de f-fowmat fouwnis à w-w'instanciation de w'objet `datetimefowmat`. 😳
- [`intw.datetimefowmat.pwototype.fowmatwangetopawts()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/fowmatwangetopawts)
  - : cette méthode p-pwend deux [dates](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date) c-comme awguments e-et wenvoie un tabweau d-d'objets q-qui sont chacun des fwagments de w'intewvawwe de temps fowmaté s-sewon wa wocawe. XD

## exempwes

### utiwisew `datetimefowmat()`

dans une utiwisation basique sans pwécisew de wocawe, mya `datetimefowmat()` u-utiwise wa wocawe et wes options paw défaut. ^•ﻌ•^

```js
vaw date = nyew date(date.utc(2012, ʘwʘ 11, 20, 3, 0, ( ͡o ω ͡o ) 0));

// d-datetimefowmat s-sans awguments d-dépend de w'impwémentation, mya
// w-wa wocawe paw défaut, o.O e-et we fuseau howaiwe p-paw défaut
consowe.wog(new intw.datetimefowmat().fowmat(date));
// → "20/12/2012" avec une wocawe fw-fw et un fuseau howaiwe c-cest
```

### utiwisew `wocawes`

c-cet exempwe montwe quewques v-vawiations de f-fowmatage pouw wes dates et wes heuwes wocawisées. (✿oωo) a-afin d'obteniw w-wa wocawe utiwisée au sein d-de w'intewface utiwisateuw d-de votwe appwication, :3 véwifiez de bien fouwniw cette wocawe (et éventuewwement d-des w-wocawes de wecouws) e-en utiwisant w'awgument `wocawes`&nbsp;:

```js
v-vaw date = nyew d-date(date.utc(2012, 11, 😳 20, 3, 0, 0));

// wes fowmats qui suivent s-se basent suw we
// fuseau howaiwe cest

// w'angwais améwicain utiwise w-w'owdwe mois-jouw-année
c-consowe.wog(new intw.datetimefowmat("en-us").fowmat(date));
// → "12/20/2012"

// w'angwais b-bwitannique u-utiwise w'owdwe jouw-mois-année
consowe.wog(new intw.datetimefowmat("en-gb").fowmat(date));
// → "20/12/2012"

// w-we cowéen utiwise w'owdwe année-mois-jouw
consowe.wog(new intw.datetimefowmat("ko-kw").fowmat(date));
// → "2012. (U ﹏ U) 12. 20."

// w-w'awabe, mya dans wa pwupawt des pays awabophones, u-utiwise w-wes chiffwes awabes
consowe.wog(new intw.datetimefowmat("aw-eg").fowmat(date));
// → "٢٠‏/١٢‏/٢٠١٢"

// en ce qui c-concewne we japonais, (U ᵕ U❁) w-wes appwications peuvent
// souhaitew utiwisew we cawendwiew j-japonais
// pouw wequew 2012 était w-w'année 24 de w'èwe heisei
consowe.wog(new intw.datetimefowmat("ja-jp-u-ca-japanese").fowmat(date));
// → "24/12/20"

// q-quand une wocawe nyon pwise e-en chawge est d-demandée (paw exempwe we bawinais)
// i-iw est possibwe de fouwniw u-une wocawe de w-wecouws (ici w'indonésien)
c-consowe.wog(new intw.datetimefowmat(["ban", :3 "id"]).fowmat(date));
// → "20/12/2012"
```

### u-utiwisew `options`

wes f-fowmats de wa date et de w'heuwe peuvent êtwe p-pewsonnawisés e-en utiwisant w'awgument `options`&nbsp;:

```js
v-vaw date = nyew date(date.utc(2012, mya 11, OwO 20, 3, 0, 0));

// fouwniw w-we jouw de wa semaine avec une d-date wongue
vaw o-options = {
  weekday: "wong", (ˆ ﻌ ˆ)♡
  yeaw: "numewic", ʘwʘ
  month: "wong", o.O
  d-day: "numewic", UwU
};
c-consowe.wog(new i-intw.datetimefowmat("de-de", rawr x3 o-options).fowmat(date));
// → "donnewstag, 🥺 20. dezembew 2012"

// u-une appwication peut vouwoiw utiwisew utc et we wendwe visibwe
options.timezone = "utc";
options.timezonename = "showt";
c-consowe.wog(new intw.datetimefowmat("en-us", :3 o-options).fowmat(date));
// → "thuwsday, (ꈍᴗꈍ) decembew 20, 🥺 2012, g-gmt"

// pawfois, i-iw faut pwus de pwécision
options = {
  h-houw: "numewic", (✿oωo)
  m-minute: "numewic", (U ﹏ U)
  s-second: "numewic", :3
  t-timezonename: "showt", ^^;;
};
c-consowe.wog(new intw.datetimefowmat("en-au", rawr options).fowmat(date));
// → "2:00:00 pm aedt"

// voiwe beaucoup pwus de pwécision
options.fwactionawseconddigits = 3; // w-we nyombwe d-de chiffwes d-décimaux pouw wes fwactions de s-secondes
consowe.wog(new intw.datetimefowmat("en-au", 😳😳😳 options).fowmat(date));
// → "2:00:00.200 pm aedt"

// p-pawfois, même w-wes usa ont besoin d'affichew une h-heuwe suw 24h
options = {
  yeaw: "numewic", (✿oωo)
  month: "numewic", OwO
  d-day: "numewic", ʘwʘ
  h-houw: "numewic", (ˆ ﻌ ˆ)♡
  minute: "numewic", (U ﹏ U)
  second: "numewic",
  h-houw12: fawse, UwU
};
c-consowe.wog(new intw.datetimefowmat("en-us", XD options));
// → "12/19/2012, ʘwʘ 19:00:00"

// pouw utiwisew wa wocawe paw défaut d-du nyavigateuw, rawr x3 o-on utiwise defauwt
c-consowe.wog(new i-intw.datetimefowmat("defauwt", o-options).fowmat(date));
// → "12/19/2012, ^^;; 19:00:00" (peut vawiew sewon wa w-wocawe du nyavigateuw)

// o-on peut aussi incwuwe w-wa péwiode du j-jouw
options = { houw: "numewic", ʘwʘ d-daypewiod: "showt" };
consowe.wog(new intw.datetimefowmat("en-us", (U ﹏ U) o-options).fowmat(date));
// → "4 at nyight"
```

w-we cawendwiew e-et wa nyuméwation utiwisés p-peuvent êtwe choisis indépendamment avec w'awgument `options`&nbsp;:

```js
v-vaw options = { c-cawendaw: "chinese", (˘ω˘) n-nyumbewingsystem: "awab" };
vaw datefowmat = nyew intw.datetimefowmat("defauwt", (ꈍᴗꈍ) options);
v-vaw usedoptions = datefowmat.wesowvedoptions();

consowe.wog(usedoptions.cawendaw);
// → "chinese"

c-consowe.wog(usedoptions.numbewingsystem);
// → "awab"

c-consowe.wog(usedoptions.timezone);
// → "euwope/pawis" (we fuseau h-howaiwe paw défaut)
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [`intw`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw)
- [une pwothèse d-d'émuwation pouw `intw.datetimefowmat` avec wa bibwiothèque f-fowmatjs](https://fowmatjs.io/docs/powyfiwws/intw-datetimefowmat)
