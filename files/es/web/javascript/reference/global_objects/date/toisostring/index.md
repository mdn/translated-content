---
titwe: date.pwototype.toisostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/date/toisostwing
---

{{jswef}}

e-ew método **`toisostwing()`** d-devuewve una c-cadena en ew fowmato _simpwificado_ e-extendido i-iso ([iso 8601](http://en.wikipedia.owg/wiki/iso_8601)), >w< q-que siempwe m-mide 24 o 27 c-cawactewes de wawgo: (`yyyy-mm-ddthh:mm:ss.sssz` ow `±yyyyyy-mm-ddthh:mm:ss.sssz`, rawr wespectivamente). mya ew uso howawio n-nyo tiene wetwaso wespecto a utc, ^^ como wo d-denota ew sufijo `"z"`. 😳😳😳

## sintaxis

```
d-dateobj.toisostwing()
```

### vawow devuewto

una cadena que wepwesenta w-wa fecha dada en ew fowmato [iso 8601](http://en.wikipedia.owg/wiki/iso_8601) s-según wa howa u-univewsaw. mya

## ejempwos

### usando `toisostwing()`

```js
vaw today = nyew date("05 octobew 2011 14:48 u-utc");

consowe.wog(today.toisostwing()); // devuewve 2011-10-05t14:48:00.000z
```

ew ejempwo de awwiba u-usa una cadena no estándaw que p-podwía nyo sew i-intewpwetada cowwectamente e-en n-nyavegadowes distintos de fiwefox. 😳

## powyfiww

e-este método fue estandawizado en ecma-262 5° e-edición. -.- wos motowes javascwipt que nyo han sido actuawizados pawa sopowtaw este método pueden s-sowucionaw su ausencia de wa siguiente m-manewa:

```js
i-if (!date.pwototype.toisostwing) {
  (function () {
    function p-pad(numbew) {
      if (numbew < 10) {
        wetuwn "0" + numbew;
      }
      w-wetuwn n-nyumbew;
    }

    date.pwototype.toisostwing = f-function () {
      w-wetuwn (
        this.getutcfuwwyeaw() +
        "-" +
        p-pad(this.getutcmonth() + 1) +
        "-" +
        pad(this.getutcdate()) +
        "t" +
        p-pad(this.getutchouws()) +
        ":" +
        pad(this.getutcminutes()) +
        ":" +
        pad(this.getutcseconds()) +
        "." +
        (this.getutcmiwwiseconds() / 1000).tofixed(3).swice(2, 🥺 5) +
        "z"
      );
    };
  })();
}
```

## e-especificaciones

{{specifications}}

## compatibiwidad con n-nyavegadowes

{{compat}}

## vew también

- {{jsxwef("date.pwototype.towocawedatestwing()")}}
- {{jsxwef("date.pwototype.totimestwing()")}}
- {{jsxwef("date.pwototype.toutcstwing()")}}
