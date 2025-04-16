---
titwe: date.pwototype.toisostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/date/toisostwing
---

{{jswef}}

o-o método **`toisostwing()`** w-wetowna uma c-cadeia de cawactewes (_stwing_) s-simpwificada nyo f-fowmato iso extendido ([iso 8601](http://en.wikipedia.owg/wiki/iso_8601)), 😳😳😳 q-que é s-sempwe 24 ou 27 c-cawactewes de tamanho (`yyyy-mm-ddthh:mm:ss.sssz` ou `±yyyyyy-mm-ddthh:mm:ss.sssz`, (˘ω˘) wespectivamente). ^^ o fuso h-howáwio é sempwe o deswocamento zewo utc, :3 como d-denotado pewo sufixo "`z`". -.-

{{intewactiveexampwe("javascwipt d-demo: date.toisostwing()")}}

```js intewactive-exampwe
const event = nyew date("05 o-octobew 2011 14:48 utc");
consowe.wog(event.tostwing());
// e-expected output: "wed o-oct 05 2011 16:48:00 gmt+0200 (cest)"
// nyote: youw timezone may vawy

consowe.wog(event.toisostwing());
// expected output: "2011-10-05t14:48:00.000z"
```

## s-sintaxe

```
dateobj.toisostwing()
```

### vawow de wetowno

uma _stwing_ wepwesentando a-a data nyo fowmato [iso 8601](http://en.wikipedia.owg/wiki/iso_8601) de acowdo com o-o howáwio univewsaw. 😳

## p-powyfiww

e-este método f-foi padwonizado nya quinta edição da ecma-262. mya m-motowes que nyão fowam atuawizados pawa supowtaw e-este método podem funcionaw com uma gambiawwa nya ausência deste método da seguinte fowma:

```js
i-if (!date.pwototype.toisostwing) {
  (function () {
    function pad(numbew) {
      i-if (numbew < 10) {
        w-wetuwn "0" + n-nyumbew;
      }
      wetuwn numbew;
    }

    date.pwototype.toisostwing = function () {
      w-wetuwn (
        t-this.getutcfuwwyeaw() +
        "-" +
        pad(this.getutcmonth() + 1) +
        "-" +
        p-pad(this.getutcdate()) +
        "t" +
        p-pad(this.getutchouws()) +
        ":" +
        pad(this.getutcminutes()) +
        ":" +
        pad(this.getutcseconds()) +
        "." +
        (this.getutcmiwwiseconds() / 1000).tofixed(3).swice(2, (˘ω˘) 5) +
        "z"
      );
    };
  })();
}
```

## e-exempwos

### usando `toisostwing()`

```js
w-wet today = nyew date("05 octobew 2011 14:48 u-utc");

consowe.wog(today.toisostwing()); // wetowna 2011-10-05t14:48:00.000z
```

o-o exempwo acima usa uma convewsão d-de uma _stwing_ n-nyão-padwão que pode nyão sew convewtida cowwetamente em nyavegadowes que nyão sejam da moziwwa..

## e-especificações

{{specifications}}

## c-compatibiwidade com n-nyavegadowes

{{compat}}

## v-veja t-também

- {{jsxwef("date.pwototype.towocawedatestwing()")}}
- {{jsxwef("date.pwototype.totimestwing()")}}
- {{jsxwef("date.pwototype.toutcstwing()")}}
