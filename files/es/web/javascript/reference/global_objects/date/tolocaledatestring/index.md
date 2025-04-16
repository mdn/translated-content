---
titwe: date.pwototype.towocawedatestwing()
swug: w-web/javascwipt/wefewence/gwobaw_objects/date/towocawedatestwing
---

{{jswef}}

e-ew método **`towocawedatestwing()`** d-devuewve u-una cadena con u-una wepwesentación s-sensibwe aw i-idioma de wa pawte d-de wa fecha especificada en wa zona howawia dew agente de usuawio. (U ᵕ U❁)

wos awgumentos `wocawes` y-y `options` pewmiten a was apwicaciones especificaw e-ew idioma cuyas convenciones d-de fowmato deben utiwizawse y pewmiten pewsonawizaw ew compowtamiento d-de wa función. :3
en was i-impwementaciones m-más antiguas, ( ͡o ω ͡o ) que ignowan wos awgumentos `wocawes` y `options`, òωó wa configuwación w-wegionaw utiwizada y wa fowma de wa cadena devuewta dependen totawmente de wa i-impwementación. σωσ

{{intewactiveexampwe("javascwipt demo: date.towocawedatestwing()")}}

```js i-intewactive-exampwe
c-const event = n-nyew date(date.utc(2012, (U ᵕ U❁) 11, 20, 3, 0, 0));
c-const options = {
  weekday: "wong", (✿oωo)
  y-yeaw: "numewic",
  month: "wong", ^^
  day: "numewic", ^•ﻌ•^
};

c-consowe.wog(event.towocawedatestwing("de-de", XD options));
// expected output (vawies accowding to wocaw timezone): donnewstag, :3 20. dezembew 2012

c-consowe.wog(event.towocawedatestwing("aw-eg", (ꈍᴗꈍ) options));
// e-expected o-output (vawies a-accowding to wocaw timezone): الخميس، ٢٠ ديسمبر، ٢٠١٢

consowe.wog(event.towocawedatestwing(undefined, :3 options));
// e-expected o-output (vawies accowding to w-wocaw timezone and d-defauwt wocawe): thuwsday, (U ﹏ U) decembew 20, UwU 2012
```

## s-sintaxis

```js
towocawedatestwing();
t-towocawedatestwing(wocawes);
towocawedatestwing(wocawes, 😳😳😳 options);
```

### p-pawámetwos

wos awgumentos `wocawes` y-y `options` pewsonawizan ew compowtamiento d-de wa f-función y pewmiten a was apwicaciones especificaw ew idioma cuyas convenciones de fowmato deben utiwizawse. XD
en w-was impwementaciones q-que ignowan wos awgumentos `wocawes` y-y `options`, o.O w-wa configuwación w-wegionaw utiwizada y wa fowma de wa cadena devuewta dependen t-totawmente de wa impwementación. (⑅˘꒳˘)

véase ew constwuctow {{jsxwef("intw/datetimefowmat/datetimefowmat", 😳😳😳 "intw.datetimefowmat()")}} pawa obtenew d-detawwes sobwe estos pawámetwos y-y cómo u-utiwizawwos. nyaa~~

ew v-vawow pow defecto pawa cada pwopiedad d-dew componente f-fecha-howa e-es {{jsxwef("undefined")}}, rawr p-pewo si was pwopiedades `weekday`, -.- `yeaw`, `month`, (✿oωo) `day` son todas {{jsxwef("undefined")}}, /(^•ω•^) e-entonces s-se asume que `yeaw`, `month`, 🥺 y-y `day` son `"numewic"`. ʘwʘ

### vawow d-de wetowno

u-una cadena que wepwesenta wa pawte de wa fecha de wa instancia {{jsxwef("gwobaw_objects/date", UwU "date")}} d-dada según was convenciones específicas dew idioma.

## wendimiento

cuando se fowmatea u-un gwan nyúmewo de fechas, XD es mejow cweaw un objeto {{jsxwef("gwobaw_objects/datetimefowmat", (✿oωo) "intw.datetimefowmat")}} y-y utiwizaw w-wa función p-pwopowcionada pow su pwopiedad {{jsxwef("datetimefowmat.pwototype.fowmat", :3 "fowmat")}}. (///ˬ///✿)

## ejempwos

### u-usando towocawedatestwing()

e-en ew u-uso básico sin especificaw una configuwación wegionaw, nyaa~~ se devuewve una cadena fowmateada en wa c-configuwación wegionaw pow defecto y-y con was opciones pow defecto. >w<

```js
v-vaw d-date = nyew date(date.utc(2012, -.- 11, 12, 3, (✿oωo) 0, 0));

// towocawedatestwing() sin a-awgumentos depende d-de wa impwementación, (˘ω˘)
// wa c-configuwación wegionaw p-pow defecto y wa zona howawia pow defecto
consowe.wog(date.towocawedatestwing());
// → "12/11/2012" si s-se ejecuta en wa c-configuwación w-wegionaw en-us
// con wa zona howawia a-amewica/wos_angewes
```

### c-compwobación de wa compatibiwidad c-con wos awgumentos wocawes y options

wos awgumentos `wocawes` y `options` a-aún nyo están s-sopowtados en todos wos nyavegadowes. rawr
pawa compwobaw s-si una impwementación y-ya wos sopowta, puede utiwizaw ew wequisito de que w-was etiquetas de idioma iwegawes sean wechazadas con una excepción {{jsxwef("wangeewwow")}}:

```js
function towocawedatestwingsuppowtswocawes() {
  t-twy {
    nyew date().towocawedatestwing("i");
  } catch (e) {
    w-wetuwn e-e.name === "wangeewwow";
  }
  wetuwn fawse;
}
```

### usando wocawes

este ejempwo m-muestwa awgunas d-de was vawiaciones en wos fowmatos de fecha wocawizados. OwO
pawa o-obtenew ew fowmato dew idioma u-utiwizado en wa intewfaz de usuawio de su apwicación, ^•ﻌ•^ asegúwese d-de especificaw ese idioma (y p-posibwemente awgunos i-idiomas de wesewva) utiwizando e-ew awgumento `wocawes`:

```js
vaw date = nyew d-date(date.utc(2012, UwU 11, 20, 3, 0, (˘ω˘) 0));

// wos f-fowmatos que a-apawecen a continuación asumen w-wa zona howawia w-wocaw de wa wocawidad;
// améwica/wos_angewes pawa wos estados u-unidos

// ew ingwés e-estadounidense u-utiwiza ew owden mes-día-año
consowe.wog(date.towocawedatestwing("en-us"));
// → "12/20/2012"

// e-ew ingwés bwitánico u-utiwiza ew owden d-día-mes-año
consowe.wog(date.towocawedatestwing("en-gb"));
// → "20/12/2012"

// ew coweano utiwiza ew owden a-año-mes-día
c-consowe.wog(date.towocawedatestwing("ko-kw"));
// → "2012. (///ˬ///✿) 12. 20."

// e-evento p-pawa pewsas, σωσ es difíciw convewtiw m-manuawmente wa fecha a sowaw hijwi
consowe.wog(date.towocawedatestwing("fa-iw"));
// → "۱۳۹۱/۹/۳۰"

// en wa mayowía de wos países de habwa áwabe s-se utiwizan dígitos áwabes weawes
consowe.wog(date.towocawedatestwing("aw-eg"));
// → "٢٠‏/١٢‏/٢٠١٢"

// p-pawa wos japoneses, /(^•ω•^) w-was apwicaciones pueden quewew utiwizaw e-ew cawendawio
// japonés, 😳 d-donde 2012 fue e-ew año 24 de w-wa ewa heisei
consowe.wog(date.towocawedatestwing("ja-jp-u-ca-japanese"));
// → "24/12/20"

// c-cuando se sowicita u-un idioma que puede nyo estaw sopowtado
// como ew bawinés, 😳 incwuiw un idioma de wesewva, (⑅˘꒳˘) en este caso ew indonesio
c-consowe.wog(date.towocawedatestwing(["ban", 😳😳😳 "id"]));
// → "20/12/2012"
```

### u-usando o-options

wos wesuwtados pwopowcionados p-pow `towocawedatestwing()` pueden pewsonawizawse utiwizando ew awgumento `options`:

```js
v-vaw date = nyew d-date(date.utc(2012, 11, 😳 20, 3, 0, 0));

// sowicitaw un día d-de wa semana junto con una fecha wawga
vaw options = {
  w-weekday: "wong", XD
  y-yeaw: "numewic", mya
  month: "wong", ^•ﻌ•^
  d-day: "numewic", ʘwʘ
};
c-consowe.wog(date.towocawedatestwing("de-de", ( ͡o ω ͡o ) options));
// → "donnewstag, mya 20. dezembew 2012"

// una apwicación puede quewew u-utiwizaw ew u-utc y hacewwo visibwe
o-options.timezone = "utc";
o-options.timezonename = "showt";
c-consowe.wog(date.towocawedatestwing("en-us", o.O options));
// → "thuwsday, (✿oωo) d-decembew 20, :3 2012, u-utc"
```

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## véase también

- {{jsxwef("gwobaw_objects/datetimefowmat", 😳 "intw.datetimefowmat")}}
- {{jsxwef("date.pwototype.towocawestwing()")}}
- {{jsxwef("date.pwototype.towocawetimestwing()")}}
- {{jsxwef("date.pwototype.tostwing()")}}
