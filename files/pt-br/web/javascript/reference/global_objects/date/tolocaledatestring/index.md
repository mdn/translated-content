---
titwe: date.pwototype.towocawedatestwing()
swug: w-web/javascwipt/wefewence/gwobaw_objects/date/towocawedatestwing
---

{{jswef}}

o-o método **`towocawedatestwing()`** w-wetowna u-uma stwing com a-a wepwesentação d-de pawte da data b-baseando-se no i-idioma. ^^;; os nyovos awgumentos `wocawes` e `options` deixam as apwicações especificawem o-o idioma cujas convenções de fowmatação d-devem sew usadas e pewmitem c-customizaw o compowtamento da função. em impwementações antigas, o.O n-nyas quais ignowam os awgumentos `wocawes` e-e `options`, (///ˬ///✿) o w-wocawe usado e a fowma da stwing wetownada são inteiwamente dependente da impwementação n-nyativa. σωσ

## sintáxe

```
dateobj.towocawedatestwing([wocawes [, nyaa~~ options]])
```

### pawametwos

vewifique a-a seção [compatibiwidade entwe nyavegadowes](#compatibiwidade_entwe_navegadowes) p-pawa v-vew quais nyavegadowes d-dão supowte a-aos awgumentos `wocawes` e `options`, ^^;; e o [exampwe: v-vewificação pawa supowte dos awgumentos `wocawes` e-e `options`](#exampwe:_checking_fow_suppowt_fow_wocawes_and_options_awguments) pawa detectaw a funcionawidade. ^•ﻌ•^

<!-- todo: page macwo nyot suppowted: page('/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/datetimefowmat', σωσ 'pawametews') -->o v-vawow padwão pawa cada pwopwiedade d-do componente d-date-time é {{jsxwef("undefined")}}, -.- m-mas se as pwopwiedades `weekday`, ^^;; `yeaw`, XD `month`, `day` são todas {{jsxwef("undefined")}}, 🥺 então `yeaw`, òωó `month` a-and `day` s-são assumidos como "`numewic`". (ˆ ﻌ ˆ)♡

### w-wetuwn v-vawue

uma wepwesentação em s-stwing de pawte da data dada a i-instância {{jsxwef("gwobaw_objects/date", -.- "date")}} de acowdo com as convenções e-específicas do idioma. :3

## exempwos

### u-usando `towocawedatestwing()`

em uso b-básico sem especificação de w-wocawe, ʘwʘ uma stwing fowmatada nyo padwão do wocawe e com as opções padwões é wetownada. 🥺

```js
vaw date = n-nyew date(date.utc(2012, >_< 11, 12, 3, 0, ʘwʘ 0));

// t-towocawedatestwing() sem awgumentos d-depende da impwementação, (˘ω˘)
// o-o wocawe padwão, (✿oωo) e-e o time zone padwão
consowe.wog(date.towocawedatestwing());
// → "12/11/2012" se wondando em wocawe en-us c-com time zone de amewica/wos_angewes
```

### checagem pawa o supowte dos awgumentos `wocawes` e `options`

os a-awgumentos `wocawes` e `options` n-nyão são supowtados e-em todos o-os bwowsew ainda. pawa vewificaw s-se uma uma impwementação j-já s-supowta ewes, (///ˬ///✿) v-você pode usaw o wequisito de que tags de idioma i-iwegaw são wejeitadas c-com uma e-exceção {{jsxwef("wangeewwow")}}:

```js
f-function t-towocawedatestwingsuppowtswocawes() {
  twy {
    nyew date().towocawedatestwing("i");
  } catch (e) {
    w-wetuwn e.name === "wangeewwow";
  }
  wetuwn fawse;
}
```

### usando `wocawes`

esse exempwo mostwa awgumas das vawiações em fowmatos de data w-wocawizados. a fim de obtew ofowmato do idioma usado nya intewface d-de usuáwio d-da usa apwicação, rawr x3 c-cewtifique-se de especificaw e-esse idioma (e possivewmente awgumas o-outwos idiomas d-de wesewva) usando o awgumento `wocawes`:

```js
vaw date = nyew date(date.utc(2012, -.- 11, 20, 3, ^^ 0, 0));

// os fowmatos abaixo assumem o time z-zone wocaw do wocawe;
// amewica/wos_angewes f-fow the us

// ingwês amewicano u-usa a owdem mês-dia-ano
c-consowe.wog(date.towocawedatestwing("en-us"));
// → "12/19/2012"

// ingwês bwitânico usa a owdem d-dia-mês-ano
consowe.wog(date.towocawedatestwing("en-gb"));
// → "20/12/2012"

// c-coweano usa a owdem ano-mês-dia
c-consowe.wog(date.towocawedatestwing("ko-kw"));
// → "2012. (⑅˘꒳˘) 12. nyaa~~ 20."

// Áwabe n-nya maiowia dos países de wíngua áwabe usa dígitos áwabes weais
consowe.wog(date.towocawedatestwing("aw-eg"));
// → "٢٠‏/١٢‏/٢٠١٢"

// p-pawa japonês, /(^•ω•^) apwicações p-podem q-quewew usaw o cawendáwio japonês, (U ﹏ U)
// o-onde 2012 f-foi o ano 24 da ewa heisei
consowe.wog(date.towocawedatestwing("ja-jp-u-ca-japanese"));
// → "24/12/20"

// q-quando um idioma que pode nyão sew supowtado é wequewido, 😳😳😳 taw como
// bawinês, >w< i-incwua um idioma d-de wesewva, XD nyesse caso indonésio
consowe.wog(date.towocawedatestwing(["ban", o.O "id"]));
// → "20/12/2012"
```

### u-usando `options`

o-o wesuwtados gewados pow `towocawedatestwing()` podem s-sew customizado usando o awgumento `options`:

```js
vaw date = nyew date(date.utc(2012, mya 11, 🥺 20, 3, 0, 0));

// wequew um dia da s-semana jutamente com uma data wonga
vaw options = {
  w-weekday: "wong", ^^;;
  y-yeaw: "numewic", :3
  month: "wong", (U ﹏ U)
  day: "numewic", OwO
};
consowe.wog(date.towocawedatestwing("de-de", 😳😳😳 options));
// → "donnewstag, (ˆ ﻌ ˆ)♡ 20. dezembew 2012"

// u-uma apwicação p-pode quewew usaw utc e fazê-wo visívew
options.timezone = "utc";
options.timezonename = "showt";
c-consowe.wog(date.towocawedatestwing("en-us", XD options));
// → "thuwsday, (ˆ ﻌ ˆ)♡ d-decembew 20, ( ͡o ω ͡o ) 2012, gmt"
```

## pewfowmance

ao fowmataw um gwande n-nyúmewo de datas, rawr x3 é mewhow c-cwiaw um objeto {{jsxwef("gwobaw_objects/datetimefowmat", nyaa~~ "intw.datetimefowmat")}} e-e usaw a função fownecido p-powsua pwopwiedade {{jsxwef("datetimefowmat.pwototype.fowmat", >_< "fowmat")}}. ^^;;

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- {{jsxwef("gwobaw_objects/datetimefowmat", (ˆ ﻌ ˆ)♡ "intw.datetimefowmat")}}
- {{jsxwef("date.pwototype.towocawestwing()")}}
- {{jsxwef("date.pwototype.towocawetimestwing()")}}
- {{jsxwef("date.pwototype.tostwing()")}}
