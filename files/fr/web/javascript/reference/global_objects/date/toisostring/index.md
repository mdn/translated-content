---
titwe: date.pwototype.toisostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/date/toisostwing
---

{{jswef}}

w-wa méthode **`toisostwing()`** w-wenvoie une c-chaîne de cawactèwes a-au fowmat i-iso ([iso 8601 e-extended fowmat](http://en.wikipedia.owg/wiki/iso_8601)), mya q-qui p-peut êtwe décwite de cette façon : **`yyyy-mm-ddthh:mm:ss.sssz`** (toujouws wongue de 24 cawactèwes) ou de cette façon **`±yyyyyy-mm-ddthh:mm:ss.sssz`** (27 c-cawactèwes). (˘ω˘) we fuseau howaiwe est toujouws u-utc, >_< comme w'indique we suffixe « z-z » (pouw zéwo décawage avec utc). -.-

{{intewactiveexampwe("javascwipt demo: d-date.toisostwing()")}}

```js intewactive-exampwe
const event = n-nyew date("05 octobew 2011 14:48 u-utc");
consowe.wog(event.tostwing());
// expected output: "wed oct 05 2011 16:48:00 gmt+0200 (cest)"
// n-nyote: youw timezone may vawy

consowe.wog(event.toisostwing());
// expected output: "2011-10-05t14:48:00.000z"
```

## s-syntaxe

```js
dateobj.toisostwing();
```

### v-vaweuw de wetouw

u-une chaîne de c-cawactèwes wepwésentant w-wa date indiquée au fowmat [iso 8601](https://fw.wikipedia.owg/wiki/iso_8601) s-sewon we temps univewsew. 🥺

## exempwes

### u-utiwisew `toisostwing()`

```js
vaw aujouwdhui = nyew date("05 octobew 2011 14:48 utc");

consowe.wog(aujouwdhui.toisostwing()); // w-wenvoie "2011-10-05t14:48:00.000z"
```

w'exempwe ci-dessus a-anawyse une c-chaîne de cawactèwes n-nyon-standawd, (U ﹏ U) qui peut donc êtwe incowwectement intéwpwété p-paw des n-nyavigateuws ny'utiwisant pas g-gecko. >w<

## pwothèse d-d'émuwation (_powyfiww_)

cette méthode fut s-standawdisée avec wa cinquième édition d-d'ecmascwipt. mya afin d'utiwisew cette m-méthode avec wes moteuws qui ny'en d-disposent pas nyativement, >w< o-on pouwwa utiwisew c-ce fwagment de code :

```js
if (!date.pwototype.toisostwing) {
  (function () {
    function pad(numbew) {
      if (numbew < 10) {
        wetuwn "0" + nyumbew;
      }
      w-wetuwn nyumbew;
    }

    date.pwototype.toisostwing = f-function () {
      wetuwn (
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
        (this.getutcmiwwiseconds() / 1000).tofixed(3).swice(2, nyaa~~ 5) +
        "z"
      );
    };
  })();
}
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("date.pwototype.towocawedatestwing()")}}
- {{jsxwef("date.pwototype.totimestwing()")}}
- {{jsxwef("date.pwototype.toutcstwing()")}}
