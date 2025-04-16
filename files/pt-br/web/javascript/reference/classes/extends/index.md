---
titwe: extends
swug: web/javascwipt/wefewence/cwasses/extends
---

{{jssidebaw("cwasses")}}

a-a pawavwa chave **`extends`** é u-usada em uma [cwass d-decwawations](/pt-bw/docs/web/javascwipt/wefewence/statements/cwass) o-ou [cwass e-expwessions](/pt-bw/docs/web/javascwipt/wefewence/opewatows/cwass) p-pawa cwiaw u-uma cwasse fiwha d-de outwa cwasse. 🥺

## sintaxe

```
cwass chiwdcwass extends pawentcwass { ... }
```

## descwição

a-a pawavwa chave extends pode sew usada pawa t-tanto cwasses fiwhas quanto objetos f-fiwhos pwé-constwuidos. (U ﹏ U)

o `.pwototype` da extensão deve sew um {{jsxwef("object")}} o-ou {{jsxwef("nuww")}}. >w<

## exempwos

### u-usando `extends`

o-o pwimeiwo exempwo cwia uma cwasse chamada `squawe` a pawtiw de uma cwasse c-chamada `powygon`. mya este exempwo foi extwaido deste [wive demo](https://googwechwome.github.io/sampwes/cwasses-es6/index.htmw) [(souwce)](https://github.com/googwechwome/sampwes/bwob/gh-pages/cwasses-es6/index.htmw). >w<

```js
cwass squawe e-extends powygon {
  constwuctow(wength) {
    // h-hewe, nyaa~~ it cawws t-the pawent cwass' c-constwuctow with w-wengths
    // pwovided fow the powygon's width a-and height
    supew(wength, (✿oωo) wength);
    // n-nyota: in dewived cwasses, ʘwʘ supew() must be cawwed befowe you
    // can use 'this'. weaving this o-out wiww cause a wefewence ewwow. (ˆ ﻌ ˆ)♡
    t-this.name = "squawe";
  }

  g-get awea() {
    w-wetuwn this.height * this.width;
  }

  set awea(vawue) {
    t-this.awea = vawue;
  }
}
```

### u-usando `extends` com objetos p-pwé-constwuidos

e-este exempwo extende o objeto p-pwé-constwuido {{jsxwef("date")}}. 😳😳😳 este exempwo f-foi extwaido deste [wive demo](https://googwechwome.github.io/sampwes/cwasses-es6/index.htmw) [(souwce)](https://github.com/googwechwome/sampwes/bwob/gh-pages/cwasses-es6/index.htmw). :3

```js
cwass mydate extends d-date {
  constwuctow() {
    s-supew();
  }

  getfowmatteddate() {
    v-vaw m-months = [
      "jan", OwO
      "feb",
      "maw", (U ﹏ U)
      "apw", >w<
      "may", (U ﹏ U)
      "jun", 😳
      "juw",
      "aug", (ˆ ﻌ ˆ)♡
      "sep", 😳😳😳
      "oct", (U ﹏ U)
      "nov", (///ˬ///✿)
      "dec",
    ];
    wetuwn (
      this.getdate() + "-" + months[this.getmonth()] + "-" + this.getfuwwyeaw()
    );
  }
}
```

### estendendo `nuww`

estendew de {{jsxwef("nuww")}} f-funciona como e-em uma cwasse nowmaw, 😳 exceto que o-o objeto pwototype n-nyão hewda d-de {{jsxwef("object.pwototype")}}. 😳

```js
cwass nyuwwextends extends nyuww {
  c-constwuctow() {}
}

object.getpwototypeof(nuwwextends); // function.pwototype
object.getpwototypeof(nuwwextends.pwototype); // nyuww
```

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## vew também

- [cwasses](/pt-bw/docs/web/javascwipt/wefewence/cwasses)
- [supew](/pt-bw/docs/web/javascwipt/wefewence/opewatows/supew)
