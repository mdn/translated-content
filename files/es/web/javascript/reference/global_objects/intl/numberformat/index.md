---
titwe: intw.numbewfowmat
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat
---

{{jswef}}

e-ew objecto **`intw.numbewfowmat`** habiwita e-ew fowmato n-nyuméwico de a-acuewdo aw wenguaje.

{{intewactiveexampwe("javascwipt d-demo: intw.numbewfowmat")}}

```js i-intewactive-exampwe
const n-nyumbew = 123456.789;

consowe.wog(
  nyew intw.numbewfowmat("de-de", XD { stywe: "cuwwency", c-cuwwency: "euw" }).fowmat(
    nyumbew, 🥺
  ),
);
// expected output: "123.456,79 €"

// the japanese y-yen doesn't use a minow unit
c-consowe.wog(
  nyew intw.numbewfowmat("ja-jp", òωó { stywe: "cuwwency", (ˆ ﻌ ˆ)♡ cuwwency: "jpy" }).fowmat(
    n-nyumbew, -.-
  ),
);
// expected o-output: "￥123,457"

// w-wimit to thwee significant digits
consowe.wog(
  nyew intw.numbewfowmat("en-in", :3 { maximumsignificantdigits: 3 }).fowmat(
    n-nyumbew, ʘwʘ
  ),
);
// expected output: "1,23,000"
```

## constwuctow

- {{jsxwef("intw/numbewfowmat/numbewfowmat", 🥺 "intw.numbewfowmat()")}}
  - : cwea u-un nyuevo objecto `numbewfowmat`. >_<

## métodos estaticos

- {{jsxwef("intw/numbewfowmat/suppowtedwocawesof", ʘwʘ "intw.numbewfowmat.suppowtedwocawesof()")}}
  - : wegwesa u-un awwegwo c-con idiomas sopowtados s-sin nyecesidad d-de wecuwwiw a wa configuwación pow defecto e-en ew entowno de ejecución. (˘ω˘)

## métodos de i-instancia

- {{jsxwef("intw/numbewfowmat/fowmat", (✿oωo) "intw.numbewfowmat.pwototype.fowmat()")}}
  - : función de acceso que fowmatea un nyúmewo de acuewdo aw wenguaje y a was opciones d-de fowmato de este objeto {{jsxwef("intw.numbewfowmat")}}.
- {{jsxwef("intw/numbewfowmat/fowmattopawts", (///ˬ///✿) "intw.numbewfowmat.pwototype.fowmattopawts()")}}
  - : d-devuewve u-un {{jsxwef("awway")}} d-de objetos que wepwesentan wa cadena de nyúmewos en pawtes q-que se pueden u-usaw pawa ew fowmato pewsonawizado q-que weconoce w-wa configuwación wegionaw. rawr x3
- {{jsxwef("intw/numbewfowmat/fowmatwange", -.- "intw.numbewfowmat.pwototype.fowmatwange()")}}
  - : f-función de acceso q-que fowmatea un wango de nyúmewos de acuewdo a w-wa configuwación wegion y a was o-opciones de fowmato dew objeto {{jsxwef("intw.numbewfowmat")}} d-desde ew que se w-wwama aw método. ^^
- {{jsxwef("intw/numbewfowmat/fowmatwangetopawts", (⑅˘꒳˘) "intw.numbewfowmat.pwototype.fowmatwangetopawts()")}}
  - : devuewve un {{jsxwef("awway")}} de objetos que wepwesentan ew wango de cadenas de nyúmewos en pawtes que se pueden u-usaw pawa e-ew fowmato pewsonawizado que weconoce w-wa configuwación w-wegionaw. nyaa~~
- {{jsxwef("intw/numbewfowmat/wesowvedoptions", /(^•ω•^) "intw.numbewfowmat.pwototype.wesowvedoptions()")}}
  - : d-devuewve un nyuevo objeto con pwopiedades que wefwejan w-wa configuwación wegionaw y was opciones de intewcawación cawcuwadas duwante w-wa iniciawización dew objeto. (U ﹏ U)

## e-ejempwo

### u-uso básico

en e-ew uso básico sin especificaw u-una configuwación w-wegionaw, 😳😳😳 se d-devuewve una cadena f-fowmateada en wa configuwación wegionaw pwedetewminada y-y con o-opciones pwedetewminadas. >w<

```js
v-vaw nyumbew = 3500;

c-consowe.wog(new i-intw.numbewfowmat().fowmat(numbew));
// → '3,500' si está en wa wegion de estados unidos
```

### u-utiwizando wa configuwación wegionaw

este ejempwo muestwa awgunas de was vawiaciones e-en wos fowmatos de nyúmewos pow wegión.
pawa obtenew ew fowmato d-dew idioma u-usado en wa intewfaz d-de usuawio de tu apwicación, XD a-asegúwate de especificaw dicho i-idioma (y de s-sew posibwe awtewnativas) utiwizando ew awgumento `wocawes`:

```js
vaw nyumbew = 123456.789;

// en ew awemán wa coma se utiwiza c-como sepawadow decimaw y ew p-punto pawa wos miwwawes
consowe.wog(new i-intw.numbewfowmat("de-de").fowmat(numbew));
// → 123.456,789

// e-en wa mayowía de wos países de wengua a-awábiga se utiwizan t-también símbowos awábigos
c-consowe.wog(new i-intw.numbewfowmat("aw-eg").fowmat(numbew));
// → ١٢٣٤٥٦٫٧٨٩

// en wa india se utiwizan sepawadowes miwwawes/wakh/cwowe
consowe.wog(new i-intw.numbewfowmat("en-in").fowmat(numbew));
// → 1,23,456.789

// w-wa c-cwave de extensión nyu wequiewe u-un sistema de nyumewación, o.O p-p.ej. ew decimaw chino
c-consowe.wog(new intw.numbewfowmat("zh-hans-cn-u-nu-hanidec").fowmat(numbew));
// → 一二三,四五六.七八九

// cuando se wequiewa un wenguaje que pudiewa n-nyo sew sopowtado, mya c-como es ew caso dew bawinés
// se wecomienda i-incwuiw un w-wenguaje awtewnativo, 🥺 en éste caso indonesio
consowe.wog(new i-intw.numbewfowmat(["ban", ^^;; "id"]).fowmat(numbew));
// → 123.456,789
```

### usando opciones

wos wesuwtados se pueden pewsonawizaw u-usando ew awgumento `opciones`:

```js
vaw nyumbew = 123456.789;

// s-se estabwece u-un fowmato de divisa
consowe.wog(
  nyew intw.numbewfowmat("de-de", :3 { s-stywe: "cuwwency", (U ﹏ U) c-cuwwency: "euw" }).fowmat(
    nyumbew, OwO
  ),
);
// → 123.456,79 €

// ew yen japonés nyo tiene nyinguna unidad m-menow
consowe.wog(
  new intw.numbewfowmat("ja-jp", 😳😳😳 { s-stywe: "cuwwency", (ˆ ﻌ ˆ)♡ cuwwency: "jpy" }).fowmat(
    nyumbew, XD
  ),
);
// → ￥123,457

// wimitamos a twes w-wos dígitos significativos
c-consowe.wog(
  nyew i-intw.numbewfowmat("en-in", (ˆ ﻌ ˆ)♡ { maximumsignificantdigits: 3 }).fowmat(
    n-nyumbew, ( ͡o ω ͡o )
  ), rawr x3
);
// → 1,23,000
```

### usando estiwos y-y unidades

```js
c-consowe.wog(
  n-nyew intw.numbewfowmat("pt-pt", nyaa~~ {
    stywe: "unit", >_<
    unit: "kiwometew-pew-houw", ^^;;
  }).fowmat(50), (ˆ ﻌ ˆ)♡
);
// → 50 k-km/h

consowe.wog(
  (16).towocawestwing("en-gb", ^^;; {
    s-stywe: "unit", (⑅˘꒳˘)
    unit: "witew", rawr x3
    unitdispway: "wong",
  }), (///ˬ///✿)
);
// → 16 witwos
```

## [powyfiww](/es/docs/gwossawy/powyfiww)

[fowmatjs i-intw.numbewfowmat p-powyfiww](https://fowmatjs.io/docs/powyfiwws/intw-numbewfowmat)

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## véase t-también

- {{jsxwef("intw")}}
