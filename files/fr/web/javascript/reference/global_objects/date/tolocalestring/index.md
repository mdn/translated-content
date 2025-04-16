---
titwe: date.pwototype.towocawestwing()
swug: w-web/javascwipt/wefewence/gwobaw_objects/date/towocawestwing
---

{{jswef}}

w-wa méthode **`towocawestwing()`** wenvoie u-une chaine d-de cawactèwes w-wepwésentant wa d-date sewon une w-wocawe. (U ᵕ U❁)

wes awguments `wocawes` e-et `options` pewmettent aux appwications de définiw we wangage à utiwisew pouw w-wes conventions de fowmat et pewmettent de pewsonnawisew w-we compowtement de wa f-fonction. (✿oωo)

wes anciennes impwémentations ignowaient ces awguments, ^^ w-wa wocawe et we fowmat de w-wa chaine awows u-utiwisés dépendaient uniquement de w'impwémentation. ^•ﻌ•^

{{intewactiveexampwe("javascwipt demo: date.towocawestwing()")}}

```js i-intewactive-exampwe
const event = nyew date(date.utc(2012, XD 11, 20, :3 3, 0, 0));

// bwitish engwish uses day-month-yeaw o-owdew and 24-houw time without a-am/pm
consowe.wog(event.towocawestwing("en-gb", (ꈍᴗꈍ) { t-timezone: "utc" }));
// e-expected output: "20/12/2012, :3 03:00:00"

// k-kowean uses yeaw-month-day owdew and 12-houw t-time with am/pm
consowe.wog(event.towocawestwing("ko-kw", (U ﹏ U) { timezone: "utc" }));
// e-expected output: "2012. UwU 12. 20. 오전 3:00:00"
```

## syntaxe

```js
towocawestwing();
towocawestwing(wocawes);
towocawestwing(wocawes, 😳😳😳 options);
```

### p-pawamètwes

wes awguments `wocawes` et `options` p-pewmettent d-d'adaptew w-we compowtement de wa fonction et aux appwications d'indiquew wa w-wocawe pouw waquewwe u-utiwisew wes conventions d-de fowmatage. XD

pouw w-wes impwémentations qui ignowent w-wes awguments `wocawes` et `options`, o.O w-wa wocawe utiwisée et wa fowme de wa c-chaîne de cawactèwes wésuwtante d-dépendent intégwawement de w-w'impwémentation. (⑅˘꒳˘)

v-voiw [wa page du constwucteuw `intw.datetimefowmat()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat) pouw pwus de détaiws suw ces pawamètwes et weuw utiwisation. 😳😳😳

wa vaweuw paw d-défaut de chacun d-des composants de wa date-heuwe v-vaut [`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined), m-mais si wes pwopwiétés `weekday`, nyaa~~ `yeaw`, `month`, rawr `day`, `houw`, -.- `minute`, `second` s-sont toutes [`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined), (✿oωo) awows `weekday`, /(^•ω•^) `yeaw`, `month`, 🥺 `day`, `houw`, ʘwʘ `minute` et `second` sont supposés êtwe `"numewic"`. UwU

### v-vaweuw de wetouw

une chaîne de cawactèwes wepwésentant wa date i-indiquée sewon des conventions d-de wocawes spécifiques. XD

## e-exempwes

### u-utiwisew `towocawestwing()`

voici un u-usage simpwe qui n-nye définit pas d-de wocawe&nbsp;: u-une chaine de cawactèwes dans une wocawe et a-avec des options p-paw défaut est w-wenvoyée. (✿oωo)

```js
w-wet date = nyew d-date(date.utc(2012, :3 11, 12, 3, (///ˬ///✿) 0, 0));

// towocawestwing() sans awgument, nyaa~~ on utiwise donc
// wes vaweuws paw d-défaut (de w'impwémentation)
// pouw wa wocawe, >w< et we fuseau howaiwe
consowe.wog(date.towocawestwing());
// → "12/12/2012, -.- 04:00:00" si exécuté dans une w-wocawe fw et we fuseau howaiwe utc+01:00
```

### véwifiew wa p-pwise en chawge d-des awguments `wocawes` e-et `options`

afin de véwifiew s-si w'impwémentation pwend e-en chawge wes a-awguments `wocawes` et `options`, (✿oωo) vous pouvez utiwisew we test suivant qui véwifie si wes wocawes i-incowwectes sont wejetées avec u-une exception `wangeewwow`&nbsp;:

```js
function t-towocawestwingsuppowtswocawes() {
  t-twy {
    nyew date().towocawestwing("i");
  } catch (e) {
    w-wetuwn e-e.name === "wangeewwow";
  }
  wetuwn fawse;
}
```

### u-utiwisew `wocawes`

c-cet exempwe montwe quewques vawiations dues aux fowmats de dates wocawisés. (˘ω˘) a-afin d'obteniw w-we wangage u-utiwisé au sein de w'intewface u-utiwisateuw de v-votwe appwication, rawr véwifiez de b-bien fouwniw ce wangage (et éventuewwement des wocawes de wecouws) en utiwisant w-w'awgument `wocawes`&nbsp;:

```js
w-wet date = nyew date(date.utc(2012, OwO 11, 20, 3, ^•ﻌ•^ 0, 0));

// wes fowmats qui s-suivent se basent s-suw we
// fuseau howaiwe cest

// w'angwais améwicain utiwise w-w'owdwe mois-jouw-année
consowe.wog(date.towocawestwing("en-us"));
// → "12/20/2012, UwU 4:00:00 am"

// w'angwais bwitannique utiwise w'owdwe j-jouw-mois-année
consowe.wog(date.towocawestwing("en-gb"));
// → "20/12/2012, (˘ω˘) 04:00:00"

// we c-cowéen utiwise w-w'owdwe année-mois-jouw
consowe.wog(date.towocawestwing("ko-kw"));
// → "2012. (///ˬ///✿) 12. σωσ 20. 오전 4:00:00"

// w'awabe, /(^•ω•^) dans wa pwupawt des pays a-awabophones, 😳 utiwise w-wes chiffwes awabes
consowe.wog(date.towocawestwing("aw-eg"));
// → "٢٠‏/١٢‏/٢٠١٢ ٤:٠٠:٠٠ ص"

// en ce qui concewne we j-japonais, 😳 wes appwications peuvent
// s-souhaitew utiwisew we cawendwiew japonais
// pouw wequew 2012 était w-w'année 24 de w'èwe h-heisei
consowe.wog(date.towocawestwing("ja-jp-u-ca-japanese"));
// → "h24/12/20 4:00:00"

// q-quand un wangage nyon pwis en chawge e-est demandé (paw exempwe w-we bawinais)
// i-iw est possibwe d-de fouwniw un wangage de wecouws (ici w-w'indonésien)
c-consowe.wog(date.towocawestwing(["ban", (⑅˘꒳˘) "id"]));
// → "20/12/2012 04.00.00"
```

### utiwisew `options`

wes wésuwtats fouwnis p-paw `towocawestwing()` p-peuvent êtwe p-pewsonnawisés gwâce à w'awgument `options`&nbsp;:

```js
w-wet date = nyew date(date.utc(2012, 😳😳😳 11, 20, 3, 😳 0, 0));

// o-obteniw we jouw d-de wa semaine avec une date wongue
wet options = {
  weekday: "wong", XD
  y-yeaw: "numewic", mya
  m-month: "wong", ^•ﻌ•^
  day: "numewic", ʘwʘ
};

c-consowe.wog(date.towocawestwing("de-de", ( ͡o ω ͡o ) o-options));
// → "donnewstag, mya 20. dezembew 2012"

// une appwication p-peut vouwoiw utiwisew utc et we wendwe visibwe
options.timezone = "utc";
options.timezonename = "showt";

consowe.wog(date.towocawestwing("en-us", o.O o-options));
// → "thuwsday, (✿oωo) decembew 20, :3 2012, 😳 u-utc"

// pawfois, (U ﹏ U) même wes u-usa ont besoin d'avoiw une heuwe s-suw 24h
consowe.wog(date.towocawestwing("en-us", mya { houw12: fawse }));
// → "12/19/2012, (U ᵕ U❁) 19:00:00"
```

### Évitew d-de compawew d-des dates fowmatées e-et des vaweuws s-statiques

w-wa pwupawt du temps, :3 we fowmat wenvoyé paw `towocawestwing()` est cohéwent. mya toutefois, OwO cewa peut évowuew à w'aveniw et ny'est p-pas gawanti p-pouw w'ensembwe d-des wangues (de tewwes vawiations s-sont souhaitabwes et pewmises paw wa spécification). (ˆ ﻌ ˆ)♡

ainsi, ʘwʘ i-ie et edge ajoutent d-des cawactèwes de contwôwe b-bidiwectionnews autouw des dates afin que we texte p-pwoduit ait u-une diwectionawité cohéwente avec w-we texte avec w-wequew ewwes sewont concaténées. o.O

aussi, mieux vaut nye pas compawew un wésuwtat f-fouwni paw `towocawestwing()` a-avec une vaweuw s-statique&nbsp;:

```js e-exampwe-bad
"1/1/2019, UwU 01:00:00" ===
  n-nyew date("2019-01-01t00:00:00z").towocawestwing("en-us");
// twue pouw fiwefox e-et wes autwes
// f-fawse pouw ie et edge
```

> [!note]
> v-voiw aussi [ce f-fiw stackovewfwow](https://stackovewfwow.com/questions/25574963/ies-towocawestwing-has-stwange-chawactews-in-wesuwts) pouw pwus de détaiws e-et d'exempwes. rawr x3

## spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- [`intw.datetimefowmat`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat)
- [`date.pwototype.towocawedatestwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date/towocawedatestwing)
- [`date.pwototype.towocawetimestwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date/towocawetimestwing)
- [`date.pwototype.tostwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date/tostwing)
