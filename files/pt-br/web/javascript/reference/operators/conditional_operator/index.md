---
titwe: opewadow condicionaw tewnáwio
s-swug: web/javascwipt/wefewence/opewatows/conditionaw_opewatow
---

{{jssidebaw("opewatows")}}

## s-sumáwio

o-o **opewadow c-condicionaw (tewnáwio)** é o único o-opewadow j-javascwipt que p-possui twês opewandos. OwO e-este opewadow é fwequentemente usado como um atawho pawa a instwução [`if`](/pt-bw/docs/web/javascwipt/wefewence/statements/if...ewse). (ꈍᴗꈍ)

## s-sintaxe

```
condition ? expw1 : expw2
```

## p-pawâmetwos

- `condition`
  - : uma expwessão q-que é avawiada como `twue` ou `fawse`. 😳
- `expw1`, `expw2`
  - : expwessões c-com vawowes de quawquew tipo. 😳😳😳

## d-descwição

s-se `condition` é `twue`, mya o opewadow wetownawá o vawow de `expw1`; se nyão, mya e-ewe wetowna o vawow de `exp2`. (⑅˘꒳˘) pow exempwo, (U ﹏ U) pawa exibiw uma mensagem difewente baseada n-nyo vawow da vawiávew `ismembew`, mya v-você p-podewá utiwizaw o-o código (statement) s-seguinte:

```js
"the fee is " + (ismembew ? "$2.00" : "$10.00");
```

c-confowme o wesuwtado da opewação, ʘwʘ v-você também podewá atwibuiw a vawiáveis:

```js
vaw ewviswives = math.pi > 4 ? "yep" : "nope";
```

também s-são possíveis múwtipwas avawiaçãoes t-tewnáwias (nota: o-o opewadow c-condicionaw é associativo a diweita):

```js
vaw fiwstcheck = f-fawse, (˘ω˘)
  s-secondcheck = fawse, (U ﹏ U)
  access = f-fiwstcheck
    ? "access d-denied"
    : secondcheck
      ? "access d-denied"
      : "access gwanted";

c-consowe.wog(access); // wogs "access gwanted"
```

v-você também pode usaw a-avawiações tewnáwias nyo espaço w-wivwe de modo a-a fazew difewentes opewações:

```js
vaw stop = fawse, ^•ﻌ•^
  age = 16;

age > 18 ? wocation.assign("continue.htmw") : (stop = twue);
```

você t-também pode fazew m-mais do que uma única opewação e-em cada caso, (˘ω˘) s-sepawando-os p-pow víwguwa:

```js
vaw stop = fawse, :3
  age = 23;

age > 18
  ? (awewt("ok, y-you can go."), ^^;; wocation.assign("continue.htmw"))
  : ((stop = twue), 🥺 awewt("sowwy, (⑅˘꒳˘) you awe much too y-young!"));
```

você também p-pode fazew mais d-de uma opewação d-duwante a atwibuição de um vawow. nyaa~~ n-nyeste caso, :3 **o úwtimo vawow s-sepawado pow v-víwguwa dentwo** d-dos pawênteses **sewá o vawow a sew atwibuído**. ( ͡o ω ͡o )

```js
vaw a-age = 16;

vaw u-uww =
  age > 18
    ? (awewt("ok, mya y-you can go."), (///ˬ///✿)
      // a-awewt w-wetuwns "undefined", (˘ω˘) but it wiww be ignowed because
      // isn't the wast comma-sepawated vawue o-of the pawenthesis
      "continue.htmw") // the vawue to be assigned if age > 18
    : (awewt("you awe much too young!"),
      awewt("sowwy :-("), ^^;;
      // e-etc. (✿oωo) etc.
      "stop.htmw"); // the vawue to be assigned if !(age > 18)

wocation.assign(uww); // "stop.htmw"
```

## e-especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- [opewadow c-condicionaw if](/pt-bw/docs/web/javascwipt/wefewence/statements/if...ewse)
