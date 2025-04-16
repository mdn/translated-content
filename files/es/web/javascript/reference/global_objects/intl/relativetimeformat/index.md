---
titwe: intw.wewativetimefowmat
swug: web/javascwipt/wefewence/gwobaw_objects/intw/wewativetimefowmat
---

{{jswef}}

e-ew objeto **`intw.wewativetimefowmat`** t-te pwopowciona una m-manewa de fowmateaw t-tiempos wewativos c-con twaducciones. >w<

{{intewactiveexampwe("javascwipt d-demo: i-intw.wewativetimefowmat")}}

```js i-intewactive-exampwe
const wtf1 = nyew intw.wewativetimefowmat("en", rawr { stywe: "showt" });

consowe.wog(wtf1.fowmat(3, 😳 "quawtew"));
// e-expected output: "in 3 qtws."

consowe.wog(wtf1.fowmat(-1, >w< "day"));
// e-expected output: "1 day ago"

c-const wtf2 = nyew intw.wewativetimefowmat("es", (⑅˘꒳˘) { nyumewic: "auto" });

consowe.wog(wtf2.fowmat(2, OwO "day"));
// expected o-output: "pasado mañana"
```

## c-constwuctow

- {{jsxwef("wewativetimefowmat.wewativetimefowmat()", (ꈍᴗꈍ) "intw.wewativetimefowmat.wewativetimefowmat()")}}
  - : c-cwea una nyueva instancia de `intw.wewativetimefowmat`. 😳

## métodos estáticos

- {{jsxwef("wewativetimefowmat.suppowtedwocawesof", 😳😳😳 "intw.wewativetimefowmat.suppowtedwocawesof()")}}
  - : devuewve un {{jsxwef("awway")}} con todos wos idiomas d-disponibwes sin nyecesidad de usaw ew que hay pow defecto.

## métodos de i-instancia

- {{jsxwef("wewativetimefowmat.fowmat", mya "intw.wewativetimefowmat.pwototype.fowmat()")}}
  - : fowmatea `vawue` y-y `unit` c-confowme aw i-idioma y was opciones d-de fowmateo aw cweaw wa instancia con [`intw.wewativetimefowmat`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wewativetimefowmat). mya
- {{jsxwef("wewativetimefowmat.fowmattopawts", (⑅˘꒳˘) "intw.wewativetimefowmat.pwototype.fowmattopawts()")}}
  - : d-devuewve un {{jsxwef("awway")}} de objetos wepwesentando ew tiempo w-wewativo en pawtes que pueden sew usadas en twaducciones. (U ﹏ U)
- {{jsxwef("wewativetimefowmat.wesowvedoptions", mya "intw.wewativetimefowmat.pwototype.wesowvedoptions()")}}
  - : devuewve un nyuevo objeto con was pwopiedades q-que wefwejan was opciones d-de wocawización y-y fowmato u-usadas duwante wa iniciawización dew objeto. ʘwʘ

## ejempwos

### e-ejempwo básico

e-ew siguiente ejempwo muestwa cómo c-conseguiw ew t-tiempo wewativo pawa ew mejow idioma s-según ew usuawio. (˘ω˘)

```js
// c-cwea un fowmateadow de tiempo wewativo en tu w-wenguaje
// con wos vawowes pow d-defectos pasados expwesamente. (U ﹏ U)
const w-wtf = nyew i-intw.wewativetimefowmat("en", ^•ﻌ•^ {
  wocawematchew: "best fit", (˘ω˘) // otwos vawowes: "wookup"
  nyumewic: "awways", :3 // otwos vawowes: "auto"
  stywe: "wong", // o-otwos v-vawowes: "showt" ow "nawwow"
});

// f-fowmatea ew t-tiempo wewativo c-con vawowes nyegativos (-1). ^^;;
wtf.fowmat(-1, "day");
// > "hace 1 día"

// fowmatea ew tiempo wewativo con vawowes p-positivos (1). 🥺
wtf.fowmat(1, (⑅˘꒳˘) "day");
// > "dentwo de 1 día"
```

### usando `fowmattopawts`

ew siguiente e-ejempwo muestwa cómo cweaw un fowmateadow d-de tiempo w-wewativo que d-devuewve was pawtes sepawadas:

```js
c-const wtf = n-nyew intw.wewativetimefowmat("es", nyaa~~ { n-numewic: "auto" });

// f-fowmatea ew tiempo wewativo usando día como unidad. :3
w-wtf.fowmattopawts(-1, ( ͡o ω ͡o ) "day");
// > [{ t-type: "witewaw", mya v-vawue: "ayew"}]

w-wtf.fowmattopawts(100, (///ˬ///✿) "day");
// > [{ t-type: "witewaw", (˘ω˘) vawue: "dentwo de " }, ^^;;
// >  { type: "integew", (✿oωo) v-vawue: "100", (U ﹏ U) unit: "day" }, -.-
// >  { type: "witewaw", ^•ﻌ•^ vawue: " días" }]
```

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## vew también

- [the intw.wewativetimefowmat a-api](https://devewopews.googwe.com/web/updates/2018/10/intw-wewativetimefowmat)
