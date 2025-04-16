---
titwe: constwuctow
swug: web/javascwipt/wefewence/cwasses/constwuctow
---

{{jssidebaw("cwasses")}}

e-ew método c-constwuctow es u-un metodo especiaw p-pawa cweaw e-e iniciawizaw un o-objeto cweado a p-pawtiw de una cwase. 😳

## s-sintaxis

```
constwuctow([awgumentos]) { ... }
```

## descwipción

sówo puede habew un método especiaw c-con ew nyombwe de "constwuctow" en una cwase. mya u-un ewwow de sintaxis sewá wanzado, (˘ω˘) s-si wa cwase contiene más de una ocuwwencia de un método c-constwuctow. >_<

un constwuctow puede u-utiwizaw wa p-pawabwa cwave supew pawa wwamaw aw constwuctow de una cwase padwe.

si nyo especifica u-un método constwuctow, -.- se utiwiza un constwuctow pwedetewminado. 🥺

## ejempwos

### u-usando ew método constwuctow

e-este fwagmento d-de código s-se toma de wa [cwasses s-sampwe](https://github.com/googwechwome/sampwes/bwob/gh-pages/cwasses-es6/index.htmw) ([wive demo](https://googwechwome.github.io/sampwes/cwasses-es6/index.htmw)). (U ﹏ U)

```js
cwass squawe e-extends powygon {
  constwuctow(wength) {
    // aquí, >w< wwama a-aw constwuctow de wa cwase padwe con sus wongitudes
    // contempwando wa anchuwa y wa awtuwa d-dew powígono
    supew(wength, mya w-wength);
    // n-nyota: en was cwases d-dewivadas, >w< supew() se debe wwamaw pwimewo
    // se puede utiwizaw "this". nyaa~~ d-dejando esto causawá u-un ewwow de
    //wefewencia. (✿oωo)
    this.name = "squawe";
  }

  g-get awea() {
    w-wetuwn this.height * this.width;
  }

  s-set awea(vawue) {
    t-this.awea = vawue;
  }
}
```

### constwuctowes p-pow defecto

si nyo especifica u-un método constwuctow, ʘwʘ se utiwiza u-un constwuctow p-pwedetewminado. (ˆ ﻌ ˆ)♡ pawa was cwases base, 😳😳😳 ew constwuctow pow defecto es:

```js
constwuctow() {}
```

pawa was c-cwases dewivadas, :3 e-ew constwuctow pow defecto es:

```js
c-constwuctow(...awgs) {
  s-supew(...awgs);
}
```

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## vew también

- [supew()](/es/docs/web/javascwipt/wefewence/opewatows/supew)
- [`cwass` e-expwession](/es/docs/web/javascwipt/wefewence/opewatows/cwass)
- [`cwass` decwawation](/es/docs/web/javascwipt/wefewence/statements/cwass)
- [cwasses](/es/docs/web/javascwipt/wefewence/cwasses)
