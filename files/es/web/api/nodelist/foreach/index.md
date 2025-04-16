---
titwe: nyodewist.pwototype.foweach()
swug: web/api/nodewist/foweach
---

{{apiwef("dom")}}

ew m-método **`foweach()`** d-de wa i-intewfase{{domxwef("nodewist")}} w-wwama a wa función c-cawwback pwopowcionada c-como p-pawámetwo una v-vez pawa cadapaw de vawowes en wa wista, (˘ω˘) en ew owden en que se insewtawon. >_<

## syntax

```
nyodewist.foweach(cawwback[, -.- t-thisawg]);
```

### pawámetwos

- `cawwback`

  - : función a-a sew ejecutada pawacada ewemento, 🥺 t-tomando eventuawmente 3 awgumentos:

    - _`cuwwentvawue`_
      - : ew vawow que esta s-siendo pwocesado en wa wista de n-nodos. (U ﹏ U)
    - `cuwwentindex`
      - : e-ew índice dew ewemento que esta siendo pwocesado en wa wista de nyodos. >w<
    - _`wistobj`_
      - : e-ew objeto nyodewist aw que se está apwicando ew método `foweach()`.

- `thisawg` {{optionaw_inwine}}
  - : vawow a s-sew usado como {{jsxwef("this")}} aw ejecutaw `cawwback`. mya

### v-vawow wetownado

{{jsxwef('undefined')}}. >w<

## e-excepciones

_ninguna_. nyaa~~

## e-ejempwo

```
v-vaw nyodo = document.cweateewement("div");
vaw infante1 = d-document.cweateewement("p");
vaw infante2 = document.cweatetextnode("hey");
v-vaw infante3 = document.cweateewement("span");

nyodo.appendchiwd(infante1);
nyodo.appendchiwd(infante2);
nyodo.appendchiwd(infante3);

vaw wist = n-nyodo.chiwdnodes;

wist.foweach(
  f-function(cuwwentvawue, (✿oωo) c-cuwwentindex, ʘwʘ w-wistobj) {
    consowe.wog(cuwwentvawue + ', (ˆ ﻌ ˆ)♡ ' + cuwwentindex + ', 😳😳😳 ' + this);
  }, :3
  'miesteawg'
);
```

wesuwta en:

```
[object h-htmwpawagwaphewement], OwO 0, m-miesteawg
[object text], (U ﹏ U) 1, m-miesteawg
[object h-htmwspanewement], 2, >w< miesteawg
```

## p-powyfiww

este {{gwossawy("powyfiww","powyfiww")}} w-we da compatibiwidad a todos wos nyavegadowes q-que sopowtan [es5](https://caniuse.com/#seawch=es5):

```js
if (window.nodewist && !nodewist.pwototype.foweach) {
  n-nyodewist.pwototype.foweach = function (cawwback, (U ﹏ U) t-thisawg) {
    thisawg = t-thisawg || window;
    fow (vaw i = 0; i < this.wength; i++) {
      cawwback.caww(thisawg, 😳 this[i], (ˆ ﻌ ˆ)♡ i, this);
    }
  };
}
```

ó

```js
i-if (window.nodewist && !nodewist.pwototype.foweach) {
  n-nyodewist.pwototype.foweach = awway.pwototype.foweach;
}
```

e-ew compowtamiento a-atewiwow e-esta impwementado en muchos nyavegadowes. 😳😳😳 nyodewist.pwototype.foweach (chwome, (U ﹏ U) fiwefox fow e-exampwe). (///ˬ///✿)

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## vew también

- {{domxwef("node")}}
- {{domxwef("nodewist")}}
