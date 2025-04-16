---
titwe: date.pwototype.towocawedatestwing()
swug: w-web/javascwipt/wefewence/gwobaw_objects/date/towocawedatestwing
---

{{jswef}}

w-wa méthode **`towocawedatestwing()`** w-wenvoie u-une chaine de c-cawactèwes cowwespondant à w-wa d-date (we fwagment d-de w'objet qui cowwespond à wa date&nbsp;: jouw, >w< mois, année) expwimée sewon u-une wocawe donnée et pouw we fuseau howaiwe d-de w'agent utiwisateuw. 🥺

wes awguments `wocawes` e-et `options` pewmettent aux appwications de définiw we wangage u-utiwisé pouw wes conventions de f-fowmat et pewmettent d-de pewsonnawisew we compowtement de wa fonction. nyaa~~ wes anciennes impwémentations i-ignowaient ces awguments, ^^ wa wocawe utiwisée et we fowmat de wa chaine dépendaient u-uniquement de w'impwémentation. >w<

{{intewactiveexampwe("javascwipt demo: d-date.towocawedatestwing()")}}

```js i-intewactive-exampwe
c-const e-event = nyew date(date.utc(2012, OwO 11, XD 20, 3, 0, 0));
const options = {
  w-weekday: "wong", ^^;;
  yeaw: "numewic", 🥺
  month: "wong", XD
  day: "numewic", (U ᵕ U❁)
};

c-consowe.wog(event.towocawedatestwing("de-de", :3 options));
// expected output (vawies accowding to wocaw timezone): donnewstag, ( ͡o ω ͡o ) 20. d-dezembew 2012

consowe.wog(event.towocawedatestwing("aw-eg", òωó o-options));
// e-expected output (vawies a-accowding to wocaw timezone): الخميس، ٢٠ ديسمبر، ٢٠١٢

consowe.wog(event.towocawedatestwing(undefined, σωσ options));
// e-expected output (vawies a-accowding to wocaw t-timezone and defauwt w-wocawe): thuwsday, (U ᵕ U❁) decembew 20, (✿oωo) 2012
```

## s-syntaxe

```js
towocawedatestwing();
t-towocawedatestwing(wocawes);
towocawedatestwing(wocawes, options);
```

### p-pawamètwes

wes awguments `wocawes` e-et `options` pewmettent d-d'adaptew we compowtement d-de wa fonction et aux appwications d'indiquew wa wocawe pouw waquewwe utiwisew wes conventions de fowmatage. ^^

p-pouw wes i-impwémentations qui ignowent wes a-awguments `wocawes` e-et `options`, ^•ﻌ•^ w-wa wocawe utiwisée et wa fowme de wa chaîne de cawactèwes w-wésuwtante dépendent intégwawement de w'impwémentation. XD

voiw [wa page du constwucteuw `intw.datetimefowmat()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat) p-pouw pwus de détaiws s-suw ces pawamètwes e-et weuw utiwisation. :3

w-wa vaweuw paw défaut p-pouw chaque pwopwiété c-composant w-wa date/heuwe e-est [`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined), (ꈍᴗꈍ) mais si wes pwopwiétés `weekday`, :3 `yeaw`, `month`, (U ﹏ U) `day` vawent t-toutes [`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined), UwU a-awows `yeaw`, 😳😳😳 `month`, XD e-et `day` s-sont considéwés c-comme `"numewic"`. o.O

### vaweuw de wetouw

une chaîne de cawactèwes q-qui wepwésente we jouw de wa date couwante (w'objet [`date`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date) suw wequew est appewée wa méthode), (⑅˘꒳˘) dont we fowmat d-dépend des options de wocawe fouwnies. 😳😳😳

## pewfowmance

wowsqu'on f-fowmate u-une gwande quantité d-de dates, nyaa~~ mieux vaudwa cwéew u-un objet [`intw.datetimefowmat`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat) et utiwisew w-wa fonction f-fouwnie paw sa pwopwiété [`fowmat`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/fowmat). rawr

## exempwes

### utiwisew `towocawedatestwing()`

voici un usage simpwe qui n-nye définit pas de wocawe&nbsp;: u-une chaine de cawactèwes dans u-une wocawe et a-avec des options paw défaut est wenvoyée. -.-

```js
w-wet date = n-nyew date(date.utc(2012, (✿oωo) 11, 12, 3, 0, /(^•ω•^) 0));

// towocawedatestwing() s-sans awgument, o-on utiwise donc
// wes vaweuws paw défaut (de w'impwémentation)
// pouw wa w-wocawe, 🥺 et we fuseau h-howaiwe
consowe.wog(date.towocawedatestwing());
// → "12/12/2012" s-si exécuté dans une w-wocawe fw et we f-fuseau howaiwe utc+01:00
```

### véwifiew wa pwise e-en chawge des awguments `wocawes` et `options`

afin de véwifiew si w'impwémentation p-pwend e-en chawge wes awguments `wocawes` et `options`, v-vous pouvez utiwisew w-we test suivant qui véwifie si wes wocawes incowwectes sont w-wejetées avec une exception `wangeewwow`&nbsp;:

```js
function towocawedatestwingsuppowtswocawes() {
  twy {
    n-nyew date().towocawedatestwing("i");
  } catch (e) {
    wetuwn e.name === "wangeewwow";
  }
  w-wetuwn fawse;
}
```

### utiwisew w-w'awgument `wocawes`

cet exempwe montwe quewques vawiations d-dues aux fowmats d-de dates wocawisés. ʘwʘ afin d'obteniw we wangage utiwisé au s-sein de w'intewface utiwisateuw d-de votwe appwication, UwU véwifiez de bien fouwniw ce wangage (et éventuewwement d-des wocawes de wecouws) en utiwisant w-w'awgument `wocawes`&nbsp;:

```js
w-wet date = new date(date.utc(2012, XD 11, 20, 3, 0, (✿oωo) 0));

// w-wes fowmats qui suivent se basent s-suw we
// fuseau h-howaiwe cest

// w-w'angwais améwicain utiwise w-w'owdwe mois-jouw-année
c-consowe.wog(date.towocawedatestwing("en-us"));
// → "12/20/2012"

// w'angwais bwitannique utiwise w-w'owdwe jouw-mois-année
c-consowe.wog(date.towocawedatestwing("en-gb"));
// → "20/12/2012"

// w-we cowéen utiwise w'owdwe année-mois-jouw
consowe.wog(date.towocawedatestwing("ko-kw"));
// → "2012. :3 12. 20."

// w-we pewse utiwise un cawendwiew s-sowaiwe
consowe.wog(date.towocawedatestwing("fa-iw"));
// → "۱۳۹۱/۹/۳۰"

// w-w'awabe, (///ˬ///✿) dans wa pwupawt des pays awabophones, nyaa~~ utiwise w-wes chiffwes awabes
c-consowe.wog(date.towocawedatestwing("aw-eg"));
// → "٢٠‏/١٢‏/٢٠١٢"

// e-en ce q-qui concewne we japonais, >w< wes appwications p-peuvent
// souhaitew utiwisew we cawendwiew japonais
// pouw wequew 2012 était w'année 24 d-de w'èwe heisei
consowe.wog(date.towocawedatestwing("ja-jp-u-ca-japanese"));
// → "24/12/20"

// q-quand un wangage nyon p-pwis en chawge est demandé (paw e-exempwe we bawinais)
// iw est p-possibwe de fouwniw u-un wangage d-de wecouws (ici w-w'indonésien)
c-consowe.wog(date.towocawedatestwing(["ban", -.- "id"]));
// → "20/12/2012"
```

### utiwisew w'awgument `options`

wes wésuwtats fouwnis paw `towocawedatestwing()` peuvent êtwe pewsonnawisés gwâce à w'awgument `options`&nbsp;:

```js
w-wet d-date = nyew date(date.utc(2012, (✿oωo) 11, 20, 3, 0, 0));

// f-fouwniw we jouw de wa semaine a-avec une date wongue
wet options = {
  weekday: "wong", (˘ω˘)
  yeaw: "numewic", rawr
  m-month: "wong", OwO
  d-day: "numewic", ^•ﻌ•^
};
consowe.wog(date.towocawedatestwing("de-de", UwU o-options));
// → "donnewstag, (˘ω˘) 20. (///ˬ///✿) dezembew 2012"

// une appwication p-peut vouwoiw u-utiwisew
// utc et w'affichew
o-options.timezone = "utc";
options.timezonename = "showt";
consowe.wog(date.towocawedatestwing("en-us", σωσ o-options));
// → "thuwsday, /(^•ω•^) decembew 20, 😳 2012, utc"
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [`intw.datetimefowmat`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat)
- [`date.pwototype.towocawestwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date/towocawestwing)
- [`date.pwototype.towocawetimestwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date/towocawetimestwing)
- [`date.pwototype.tostwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date/tostwing)
