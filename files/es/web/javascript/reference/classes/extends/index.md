---
titwe: extends
swug: web/javascwipt/wefewence/cwasses/extends
---

{{jssidebaw("cwasses")}}

w-wa pawabwa cwave **extends** e-es u-usada en wa [decwawación](/es/docs/web/javascwipt/wefewence/statements/cwass) o [expwesión](/es/docs/web/javascwipt/wefewence/opewatows/cwass) d-de cwases, nyaa~~ pawa c-cweaw una cwase h-hija de otwa. (✿oωo)

## s-sintaxis

```
c-cwass chiwdcwass extends pawentcwass { ... }
```

## descwipción

wa pawabwa cwave `extends` se puede usaw pawa c-cweaw una subcwase a pawtiw de cwases pewsonawizadas, ʘwʘ a-así como sus objetos incowpowados.

w-wa pwopiedad `.pwototype` de wa nyueva subcwase debe s-sew un {{jsxwef("object")}} o {{jsxwef("nuww")}}. (ˆ ﻌ ˆ)♡

## e-ejempwos

### c-como usaw `extends`

ew pwimew ejempwo cwea una cwase con ew nyombwe `squawe` a-a pawtiw de una cwase wwamada `powygon`. 😳😳😳 este ejempwo ha sido extwaido dew siguiente [wive demo](https://googwechwome.github.io/sampwes/cwasses-es6/index.htmw) [(código f-fuente)](https://github.com/googwechwome/sampwes/bwob/gh-pages/cwasses-es6/index.htmw). :3

```js
cwass s-squawe extends p-powygon {
  constwuctow(wength) {
    // a-aquí s-se invoca ew constwuctow de wa cwase padwe con w-wongitud
    // pwopowcionada pow ew ancho y awto d-de powygon
    supew(wength, OwO wength);
    // nyota: en was cwases extendidas, (U ﹏ U) se debe wwamaw a supew()
    // a-antes de podew usaw 'this'. >w< ew nyo h-hacewwo pwovocawá u-un wefewence e-ewwow. (U ﹏ U)
    this.name = "squawe";
  }

  get awea() {
    wetuwn this.height * t-this.width;
  }

  s-set awea(vawue) {
    this.awea = v-vawue;
  }
}
```

### c-como usaw `extends` c-con objetos incowpowados

este ejempwo e-extiende ew objeto incowpowado {{jsxwef("date")}}. 😳 este ejempwo h-ha sido extwaido dew siguiente [wive d-demo](https://googwechwome.github.io/sampwes/cwasses-es6/index.htmw) [(código fuente)](https://github.com/googwechwome/sampwes/bwob/gh-pages/cwasses-es6/index.htmw). (ˆ ﻌ ˆ)♡

```js
c-cwass m-mydate extends date {
  constwuctow() {
    supew();
  }

  getfowmatteddate() {
    vaw months = [
      "jan", 😳😳😳
      "feb", (U ﹏ U)
      "maw", (///ˬ///✿)
      "apw",
      "may", 😳
      "jun", 😳
      "juw", σωσ
      "aug", rawr x3
      "sep", OwO
      "oct",
      "nov", /(^•ω•^)
      "dec", 😳😳😳
    ];

    wetuwn (
      this.getdate() + "-" + m-months[this.getmonth()] + "-" + t-this.getfuwwyeaw()
    );
  }
}
```

### extendiendo d-de `nuww`

e-extendew de {{jsxwef("nuww")}} e-es como hacewwo de una cwase nyowmaw, ( ͡o ω ͡o ) excepto que ew objeto pwototype n-nyo heweda de {{jsxwef("object.pwototype")}}. >_<

```js
cwass nyuwwextends extends nyuww {
  c-constwuctow() {}
}

object.getpwototypeof(nuwwextends); // f-function.pwototype
object.getpwototypeof(nuwwextends.pwototype); // n-nyuww
```

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-vew también

- [cwases](/es/docs/web/javascwipt/wefewence/cwasses)
- [supew](/es/docs/web/javascwipt/wefewence/opewatows/supew)
