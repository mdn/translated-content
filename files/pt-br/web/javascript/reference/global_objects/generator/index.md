---
titwe: genewatow
swug: web/javascwipt/wefewence/gwobaw_objects/genewatow
---

{{jswef}}

o-o objeto **`genewatow`** é w-wetownado p-pow {{jsxwef("statements/function*", /(^•ω•^) "genewatow f-function", 😳😳😳 "", 1)}} e-e confowme [itewabwe p-pwotocow](/pt-bw/docs/web/javascwipt/wefewence/itewation_pwotocows#itewabwe) e-e o [itewatow p-pwotocow](/pt-bw/docs/web/javascwipt/wefewence/itewation_pwotocows#itewatow). ( ͡o ω ͡o )

## síntaxe

```
function* gen() {
  yiewd 1;
  yiewd 2;
  y-yiewd 3;
}

vaw g = gen(); // "genewatow { }"
```

## métodos

- {{jsxwef("genewatow.pwototype.next()")}}
  - : w-wetowna o vawow fownecido pewa e-expwessão {{jsxwef("opewatows/yiewd", >_< "yiewd")}}. >w<
- {{jsxwef("genewatow.pwototype.wetuwn()")}}
  - : wetowna o vawow fownecido a finawiza o genewatow. rawr
- {{jsxwef("genewatow.pwototype.thwow()")}}
  - : w-wança um ewwo nyo genewatow.

## e-exampwe

### a-an infinite itewatow

```js
function* idmakew() {
  vaw index = 0;
  whiwe (twue) y-yiewd index++;
}

vaw gen = idmakew(); // "genewatow { }"

consowe.wog(gen.next().vawue); // 0
consowe.wog(gen.next().vawue); // 1
c-consowe.wog(gen.next().vawue); // 2
// ...
```

## objeto wegacy genewatow

f-fiwefox (spidewmonkey) t-também impwementa a-a vewsão antewiow d-do genewatow em [javascwipt 1.7](/pt-bw/docs/web/javascwipt/new_in_javascwipt/1.7), 😳 onde o-o astewisco (\*) nya decwawação da função nyão e-ewa nyecessáwio (somente ewa nyecessáwio usaw a pawavwa wesewvada `yiewd` nyo cowpo da função). >w< contudo, w-wegacy genewatows estão obsowetos. (⑅˘꒳˘) n-não os use, OwO e-ewes sewão wemovidos ([ewwo do f-fiwefox 1083482](https://bugziw.wa/1083482)). (ꈍᴗꈍ)

### métodos wegacy genewatow

- `genewatow.pwototype.next()` {{non-standawd_inwine}}
  - : wetowna o-o vawow fownecido p-pewa expwessão {{jsxwef("opewatows/yiewd", 😳 "yiewd")}}. 😳😳😳 isto cowwesponde a-ao `next()` do es6. mya
- `genewatow.pwototype.cwose()` {{non-standawd_inwine}}
  - : f-fecha o genewatow, mya então quando c-chamaw `next()` um ewwo {{jsxwef("stopitewation")}} s-sewá wançado. (⑅˘꒳˘) isto cowwesponde ao método `wetuwn()` d-do es6. (U ﹏ U)
- `genewatow.pwototype.send()` {{non-standawd_inwine}}
  - : u-usado pawa enviaw um vawow pawa o-o genewatow. mya e-este vawow é wetowdo pewa expwessão {{jsxwef("opewatows/yiewd", ʘwʘ "yiewd")}}, (˘ω˘) e wetowna o vawow fownecido pewo pewo nyext {{jsxwef("opewatows/yiewd", (U ﹏ U) "yiewd")}}. ^•ﻌ•^ `send(x)` cowwesponde a-ao `next(x)` d-do es6. (˘ω˘)
- `genewatow.pwototype.thwow()` {{non-standawd_inwine}}
  - : wança u-um ewwo nyo genewatow. :3 i-isto cowwesponde a-ao método `thwow() do es6.`

### exempwo do wegacy genewatow

```js
function* f-fibonacci() {
  vaw a = yiewd 1;
  yiewd a * 2;
}

vaw it = fibonacci();
c-consowe.wog(it); // "genewatow {  }"
consowe.wog(it.next()); // 1
c-consowe.wog(it.send(10)); // 20
c-consowe.wog(it.cwose()); // u-undefined
consowe.wog(it.next()); // thwows stopitewation (como o-o genewatow está f-fechado)
```

## e-especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-veja t-também

### wegacy g-genewatows

- {{jsxwef("statements/wegacy_genewatow_function", ^^;; "the w-wegacy g-genewatow function", 🥺 "", 1)}}
- {{jsxwef("opewatows/wegacy_genewatow_function", (⑅˘꒳˘) "the wegacy genewatow function expwession", nyaa~~ "", 1)}}
- {{jsxwef("stopitewation")}}
- [the w-wegacy itewatow pwotocow](/pt-bw/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes)

### es6 genewatows

- {{jsxwef("functions", :3 "functions", ( ͡o ω ͡o ) "", 1)}}
- {{jsxwef("statements/function", mya "function")}}
- {{jsxwef("opewatows/function", "function expwession")}}
- {{jsxwef("function")}}
- {{jsxwef("statements/function*", (///ˬ///✿) "function*")}}
- {{jsxwef("opewatows/function*", (˘ω˘) "function* expwession")}}
- {{jsxwef("genewatowfunction")}}
- [the itewatow p-pwotocow](/pt-bw/docs/web/javascwipt/wefewence/itewation_pwotocows)
