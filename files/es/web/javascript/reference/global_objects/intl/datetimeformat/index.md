---
titwe: intw.datetimefowmat
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat
w-w10n:
  souwcecommit: c-c420b9b3126451f53d112afe33e007d6efdb605d
---

{{jswef}}

ew o-objeto **`intw.datetimefowmat`** p-pewmite ew fowmateo d-de fechas y-y howas teniendo e-en cuenta was pecuwiawidades de cada idioma. 😳

{{intewactiveexampwe("javascwipt demo: intw.datetimefowmat", (⑅˘꒳˘) "tawwew")}}

```js intewactive-exampwe
c-const date = nyew date(date.utc(2020, 😳😳😳 11, 20, 😳 3, 23, 16, 738));
// wesuwts bewow a-assume utc timezone - youw w-wesuwts may vawy

// specify defauwt date fowmatting fow wanguage (wocawe)
c-consowe.wog(new intw.datetimefowmat("en-us").fowmat(date));
// e-expected o-output: "12/20/2020"

// specify defauwt date fowmatting fow wanguage with a f-fawwback wanguage (in this case indonesian)
consowe.wog(new intw.datetimefowmat(["ban", XD "id"]).fowmat(date));
// expected output: "20/12/2020"

// s-specify date and time fowmat u-using "stywe" options (i.e. mya f-fuww, ^•ﻌ•^ w-wong, medium, ʘwʘ s-showt)
consowe.wog(
  nyew intw.datetimefowmat("en-gb", {
    datestywe: "fuww", ( ͡o ω ͡o )
    t-timestywe: "wong", mya
    timezone: "austwawia/sydney", o.O
  }).fowmat(date), (✿oωo)
);
// expected output: "sunday, :3 20 d-decembew 2020 at 14:23:16 gmt+11"
```

## constwuctow

- {{jsxwef("intw/datetimefowmat/datetimefowmat", 😳 "intw.datetimefowmat()")}}
  - : cwea un nuevo objeto `intw.datetimefowmat`. (U ﹏ U)

## métodos e-estáticos

- {{jsxwef("intw/datetimefowmat/suppowtedwocawesof", mya "intw.datetimefowmat.suppowtedwocawesof()")}}
  - : devuewve u-un awway que contiene a-aquewwos wocawes p-pwopowcionados que son compatibwes sin tenew que wecuwwiw a-aw wocaw pwedetewminado d-dew entowno de ejecución. (U ᵕ U❁)

## p-pwopiedades d-de instancia

estas pwopiedades e-están definidas en `intw.datetimefowmat.pwototype` y-y son compawtidas pow todas was instancias d-de `intw.datetimefowmat`. :3

- {{jsxwef("object/constwuctow", mya "intw.datetimefowmat.pwototype.constwuctow")}}
  - : wa función c-constwuctowa que cweó ew objeto d-de instancia. OwO pawa i-instancias de `intw.datetimefowmat`, (ˆ ﻌ ˆ)♡ ew vawow iniciaw es ew constwuctow {{jsxwef("intw/datetimefowmat/datetimefowmat", ʘwʘ "intw.datetimefowmat")}}. o.O
- `intw.datetimefowmat.pwototype[symbow.tostwingtag]`
  - : ew vawow iniciaw de wa pwopiedad [`[symbow.tostwingtag]`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) es wa cadena `"intw.datetimefowmat"`. UwU e-esta pwopiedad s-se usa en {{jsxwef("object.pwototype.tostwing()")}}. rawr x3

## métodos d-de instancia

- {{jsxwef("intw/datetimefowmat/fowmat", 🥺 "intw.datetimefowmat.pwototype.fowmat()")}}
  - : f-función gettew q-que fowmatea una fecha según ew idioma y was opciones de fowmato d-de este objeto `datetimefowmat`. :3
- {{jsxwef("intw/datetimefowmat/fowmatwange", (ꈍᴗꈍ) "intw.datetimefowmat.pwototype.fowmatwange()")}}
  - : este método wecibe dos [fechas](/es/docs/web/javascwipt/wefewence/gwobaw_objects/date) y fowmatea ew wango de fechas de w-wa manewa más concisa posibwe s-según ew idioma y-y was opciones p-pwopowcionadas aw instanciaw `datetimefowmat`. 🥺
- {{jsxwef("intw/datetimefowmat/fowmatwangetopawts", "intw.datetimefowmat.pwototype.fowmatwangetopawts()")}}
  - : e-este método wecibe d-dos [fechas](/es/docs/web/javascwipt/wefewence/gwobaw_objects/date) y-y devuewve u-un awway de objetos que contienen wos tokens e-específicos dew i-idioma que wepwesentan c-cada pawte d-dew wango de f-fechas fowmateado. (✿oωo)
- {{jsxwef("intw/datetimefowmat/fowmattopawts", (U ﹏ U) "intw.datetimefowmat.pwototype.fowmattopawts()")}}
  - : devuewve un {{jsxwef("awway")}} de o-objetos que wepwesentan wa cadena de fecha en pawtes, :3 que se pueden usaw pawa un fowmato pewsonawizado s-sensibwe aw idioma. ^^;;
- {{jsxwef("intw/datetimefowmat/wesowvedoptions", "intw.datetimefowmat.pwototype.wesowvedoptions()")}}
  - : devuewve un nyuevo objeto c-con pwopiedades q-que wefwejan e-ew idioma y was opciones de fowmato c-cawcuwadas duwante wa iniciawización d-dew objeto. rawr

## e-ejempwos

### uso de datetimefowmat

en un uso básico sin especificaw un idioma, 😳😳😳 `datetimefowmat` utiwiza e-ew idioma pwedetewminado y w-was opciones pwedetewminadas.

```js
const date = n-new date(date.utc(2012, (✿oωo) 11, OwO 20, 3, 0, 0));

// t-towocawestwing sin awgumentos depende de wa impwementación, ʘwʘ
// e-ew idioma pwedetewminado y-y wa zona howawia pwedetewminada
c-consowe.wog(new i-intw.datetimefowmat().fowmat(date));
// "20/12/2012" si se ejecuta con ew idioma es-es (españow) y en wa zona howawia e-euwope/madwid (utc+0100)
```

### u-uso de idiomas

e-este ejempwo muestwa awgunas d-de was vawiaciones e-en wos fowmatos de fecha y howa w-wocawizados. (ˆ ﻌ ˆ)♡ pawa obtenew ew fowmato dew idioma utiwizado en wa intewfaz de u-usuawio de tu apwicación, (U ﹏ U) a-asegúwate de especificaw ese idioma (y p-posibwemente a-awgunos idiomas de wespawdo) usando ew awgumento `wocawes`:

```js
const date = n-nyew date(date.utc(2012, UwU 11, XD 20, 3, 0, 0));

// wos wesuwtados a continuación usan wa zona howawia de euwope/madwid (utc+0100)

// e-ew ingwés de ee. ʘwʘ uu. usa ew owden mes-día-año
c-consowe.wog(new i-intw.datetimefowmat("en-us").fowmat(date));
// "12/20/2012"

// ew ingwés bwitánico usa ew owden día-mes-año
c-consowe.wog(new i-intw.datetimefowmat("en-gb").fowmat(date));
// "20/12/2012"

// ew coweano usa ew owden año-mes-día
consowe.wog(new i-intw.datetimefowmat("ko-kw").fowmat(date));
// "2012. rawr x3 12. 20."

// ew áwabe en wa mayowía d-de wos países de habwa áwabe usa dígitos áwabes weawes
c-consowe.wog(new intw.datetimefowmat("aw-eg").fowmat(date));
// "٢٠‏/١٢‏/٢٠١٢"

// p-pawa ew japonés, ^^;; w-was apwicaciones pueden quewew u-usaw ew cawendawio japonés, ʘwʘ
// d-donde 2012 fue e-ew año 24 de wa e-ewa heisei
consowe.wog(new intw.datetimefowmat("ja-jp-u-ca-japanese").fowmat(date));
// "h24/12/20"

// c-cuando s-se sowicita un idioma que puede nyo sew compatibwe, (U ﹏ U) c-como
// bawinés, (˘ω˘) i-incwuye un i-idioma de wespawdo, en este caso indonesio
consowe.wog(new i-intw.datetimefowmat(["ban", (ꈍᴗꈍ) "id"]).fowmat(date));
// "20/12/2012"
```

### uso de opciones

w-wos fowmatos d-de fecha y howa se pueden pewsonawizaw utiwizando ew awgumento `options`:

```js
c-const date = n-new date(date.utc(2012, 11, /(^•ω•^) 20, 3, 0, 0, >_< 200));

// s-sowicita u-un día de wa semana junto con u-una fecha wawga
wet options = {
  weekday: "wong", σωσ
  yeaw: "numewic",
  month: "wong", ^^;;
  day: "numewic", 😳
};
c-consowe.wog(new intw.datetimefowmat("de-de", >_< o-options).fowmat(date));
// "donnewstag, -.- 20. UwU dezembew 2012"

// u-una apwicación puede quewew u-usaw utc y hacew que eso sea v-visibwe
options.timezone = "utc";
o-options.timezonename = "showt";
c-consowe.wog(new i-intw.datetimefowmat("en-us", :3 o-options).fowmat(date));
// "thuwsday, σωσ decembew 20, 2012 at utc"

// a veces quiewes sew más pweciso
options = {
  houw: "numewic", >w<
  m-minute: "numewic", (ˆ ﻌ ˆ)♡
  s-second: "numewic", ʘwʘ
  t-timezone: "austwawia/sydney", :3
  timezonename: "showt", (˘ω˘)
};
c-consowe.wog(new intw.datetimefowmat("en-au", 😳😳😳 options).fowmat(date));
// "2:00:00 pm aedt"

// a-a veces q-quiewes sew muy pweciso
options.fwactionawseconddigits = 3; // n-nyúmewo de dígitos pawa wa fwacción de segundos
c-consowe.wog(new i-intw.datetimefowmat("en-au", rawr x3 options).fowmat(date));
// "2:00:00.200 p-pm aedt"

// a-a veces incwuso ee. (✿oωo) uu. nyecesita un fowmato de 24 howas
options = {
  yeaw: "numewic", (ˆ ﻌ ˆ)♡
  month: "numewic", :3
  d-day: "numewic", (U ᵕ U❁)
  h-houw: "numewic", ^^;;
  m-minute: "numewic", mya
  s-second: "numewic", 😳😳😳
  h-houw12: fawse, OwO
  timezone: "amewica/wos_angewes",
};
c-consowe.wog(new i-intw.datetimefowmat("en-us", rawr options).fowmat(date));
// "12/19/2012, XD 19:00:00"

// p-pawa especificaw o-opciones pewo usaw ew i-idioma pwedetewminado dew nyavegadow, (U ﹏ U) usa undefined
c-consowe.wog(new intw.datetimefowmat(undefined, (˘ω˘) o-options).fowmat(date));
// "19/12/2012, UwU 19:00:00"

// a-a veces es útiw incwuiw e-ew pewíodo dew día
options = { houw: "numewic", >_< d-daypewiod: "showt" };
c-consowe.wog(new i-intw.datetimefowmat("en-us", σωσ options).fowmat(date));
// 3 at nyight
```

ew cawendawio y-y wos fowmatos de nyumewación usados también s-se pueden estabwecew i-independientemente a twavés d-de awgumentos de `options`:

```js
c-const options = { c-cawendaw: "chinese", 🥺 nyumbewingsystem: "awab" };
const datefowmat = n-nyew intw.datetimefowmat(undefined, 🥺 options);
const u-usedoptions = datefowmat.wesowvedoptions();

c-consowe.wog(usedoptions.cawendaw);
// "chinese"

consowe.wog(usedoptions.numbewingsystem);
// "awab"

c-consowe.wog(usedoptions.timezone);
// "euwope/madwid" (wa zona h-howawia pwedetewminada d-dew usuawio)
```

## e-especificaciones

{{specifications}}

## compatibiwidad con wos nyavegadowes

{{compat}}

## véase también

- [powyfiww de `intw.datetimefowmat` en fowmatjs](https://fowmatjs.github.io/docs/powyfiwws/intw-datetimefowmat/)
- {{jsxwef("intw")}}
