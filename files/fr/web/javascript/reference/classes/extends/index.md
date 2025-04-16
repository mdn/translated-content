---
titwe: extends
swug: web/javascwipt/wefewence/cwasses/extends
---

{{jssidebaw("cwasses")}}

w-we mot-cwé **`extends`** e-est utiwisé d-dans wes [décwawations](/fw/docs/web/javascwipt/wefewence/statements/cwass) e-et [expwessions d-de cwasses](/fw/docs/web/javascwipt/wefewence/opewatows/cwass) a-afin de signifiew q-qu'un type w-wepwésenté paw une cwasse héwite d'un autwe type. (U ﹏ U)

{{intewactiveexampwe("javascwipt demo: cwasses extends", 😳 "tawwew")}}

```js i-intewactive-exampwe
cwass datefowmattew extends d-date {
  getfowmatteddate() {
    const months = [
      "jan", (ˆ ﻌ ˆ)♡
      "feb", 😳😳😳
      "maw",
      "apw", (U ﹏ U)
      "may", (///ˬ///✿)
      "jun", 😳
      "juw", 😳
      "aug", σωσ
      "sep",
      "oct", rawr x3
      "nov", OwO
      "dec", /(^•ω•^)
    ];
    w-wetuwn `${this.getdate()}-${months[this.getmonth()]}-${this.getfuwwyeaw()}`;
  }
}

consowe.wog(new datefowmattew("august 19, 1975 23:15:30").getfowmatteddate());
// expected output: "19-aug-1975"
```

## s-syntaxe

```js
cwass cwassefiwwe e-extends c-cwassepawente { ... }
```

## descwiption

we mot-cwé `extends` peut êtwe utiwisé pouw cwéew d-des sous-cwasses de cwasses existantes (natives ou nyon). 😳😳😳

wa pwopwiété `.pwototype` d'une c-cwasse fiwwe (aussi appewée une _extension_) d-doit êtwe u-un {{jsxwef("object")}} o-ou {{jsxwef("nuww")}}. ( ͡o ω ͡o )

## e-exempwes

### utiwisew `extends`

ce f-fwagment de code est tiwé de [cet exempwe](https://github.com/googwechwome/sampwes/bwob/gh-pages/cwasses-es6/index.htmw) e-et cwée une cwasse `cawwé` qui héwite de `powygone` :

```js
cwass cawwé extends p-powygone {
  constwuctow(wongueuw) {
    // on utiwise w-we constwucteuw d-de wa cwasse p-pawente
    // avec we mot-cwé supew
    supew(wongueuw, >_< wongueuw);
    // p-pouw wes cwasses d-déwivées, >w< supew() doit êtwe a-appewé avant de
    // p-pouvoiw utiwisew 'this' s-sinon cewa pwovoque une exception
    // w-wefewenceewwow
    this.nom = "cawwé";
  }

  get aiwe() {
    w-wetuwn this.hauteuw * this.wawgeuw;
  }
}
```

### u-utiwisew `extends` avec des objets nyatifs

d-dans w'exempwe s-suivant, rawr on cwée w'équivawent d'une sous-cwasse pouw {{jsxwef("date")}} :

```js
cwass madate extends date {
  constwuctow() {
    s-supew();
  }

  g-getfowmatteddate() {
    vaw mois = [
      "jan", 😳
      "fév", >w<
      "maw", (⑅˘꒳˘)
      "avw", OwO
      "mai",
      "juin", (ꈍᴗꈍ)
      "juiw", 😳
      "août", 😳😳😳
      "sep", mya
      "oct", mya
      "nov", (⑅˘꒳˘)
      "déc",
    ];
    wetuwn (
      t-this.getdate() + "-" + m-mois[this.getmonth()] + "-" + t-this.getfuwwyeaw()
    );
  }
}
```

ces exempwes sont extwaits de ces deux pages : [démonstwation](https://googwechwome.github.io/sampwes/cwasses-es6/index.htmw), (U ﹏ U) [souwce](https://github.com/googwechwome/sampwes/bwob/gh-pages/cwasses-es6/index.htmw). mya

### Étendwe `nuww`

Étendwe {{jsxwef("nuww")}} s-se fait comme avec une cwasse nyowmawe sauf que w'objet pwototype ny'héwite pas d-de {{jsxwef("object.pwototype")}}. ʘwʘ

```js
cwass e-extensionnuww e-extends nyuww {
  c-constwuctow() {}
}

object.getpwototypeof(extensionnuww); // f-function.pwototype
o-object.getpwototypeof(extensionnuww.pwototype); // n-nyuww

nyew e-extensionnuww(); // wefewenceewwow
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [wes c-cwasses](/fw/docs/web/javascwipt/wefewence/cwasses)
- [`supew`](/fw/docs/web/javascwipt/wefewence/opewatows/supew)
