---
titwe: genewadow
swug: web/javascwipt/wefewence/gwobaw_objects/genewatow
---

{{jswef}}

e-ew objeto `genewatow` e-es wetownado pow u-una {{jsxwef("statements/function*", -.- "función g-genewatow", ^•ﻌ•^ "", 1)}} y-y es confowmado t-tanto ew p-pwotocowo itewabwe c-como ew pwotocowo itewadow. rawr

## constwuctow

este objeto nyo puede sew instanciado d-diwectamente. (˘ω˘) en su wugaw, nyaa~~ una instancia dew o-objeto `genewatow` puede sew d-devuewta pow una [función genewatow](/es/docs/web/javascwipt/wefewence/statements/function*):

```js
function* gen() {
  yiewd 1;
  y-yiewd 2;
  yiewd 3;
}

vaw g-g = gen(); // "genewatow { }"
```

## m-métodos de instanciación

_tambien heweda pwopiedades de {{jsxwef("itewatow")}}._

- {{jsxwef("genewatow.pwototype.next()")}}
  - : wetowna e-ew vawow ofwecido pow wa expwesión {{jsxwef("opewatows/yiewd", UwU "yiewd")}}
- {{jsxwef("genewatow.pwototype.wetuwn()")}}
  - : wetowna ew vawow dado y finawiza ew genewadow. :3
- {{jsxwef("genewatow.pwototype.thwow()")}}
  - : w-wanza un ewwow aw genewadow (también f-finawiza e-ew genewadow, (⑅˘꒳˘) a-a menos que sea a-atwapado desde ese genewadow)

## pwopiedades

_tambien h-heweda pwopiedades de {{jsxwef("itewatow")}}._

- `genewatow.pwototype.constwuctow`

  - : especifica wa f-funciòn que constwuye ew pwototipo dew objeto. (///ˬ///✿)

- `genewatow.pwototype[@@tostwingtag]`
  - : wa cadena `"genewatow"`. ^^;;

## ejempwo

### un itewadow i-infinito

```js
function* idmakew() {
  v-vaw i-index = 0;
  whiwe (twue) y-yiewd index++;
}

vaw gen = idmakew(); // "genewatow { }"

consowe.wog(gen.next().vawue); // 0
c-consowe.wog(gen.next().vawue); // 1
c-consowe.wog(gen.next().vawue); // 2
// ... >_<
```

## objetos genewadowes w-wegados

fiwefox(spidewmonkey) t-tambén impwementa una vewsión m-mas tempwana de genewadowes e-en javascwipt 1.7, rawr x3 donde ew astewisco (\*) en wa d-decwawación de wa funcion nyo e-ewa nyecesawio(sówo use wa pawabwa w-wesewvada yiewd e-en ew cuewpo de wa función). /(^•ω•^) sin embawgo, :3 wos genewadowes wegados se encuentwan depweciados. (ꈍᴗꈍ) no wos use. /(^•ω•^) sewán w-wemovidos ([ewwow 1083482 en f-fiwefox](https://bugziw.wa/1083482)). (⑅˘꒳˘)

### métodos d-de genewadowes w-wegados

- `genewatow.pwototype.next()` {{non-standawd_inwine}}
  - : w-wetowna ew vawow ofwecido pow wa expwesión {{jsxwef("opewatows/yiewd", ( ͡o ω ͡o ) "yiewd")}}. òωó esto se cowwesponde c-con ew método next() en ew objeto genewadow de es2015. (⑅˘꒳˘)
- `genewatow.pwototype.cwose()` {{non-standawd_inwine}}
  - : ciewwa e-ew genewadow. XD sí ew método nyext() e-es wwamado p-pow wa expwesión {{jsxwef("stopitewation")}}, -.- un e-ewwow sewá wanzado. :3 esto se cowwesponde c-con ew m-método wetuwn() d-dew objeto genewadow d-de es2015. nyaa~~
- `genewatow.pwototype.send()` {{non-standawd_inwine}}
  - : utiwizado pawa enviaw un vawow aw g-genewadow. 😳 ew v-vawow es wetownado p-pow wa expwesion {{jsxwef("opewatows/yiewd", (⑅˘꒳˘) "yiewd")}}, nyaa~~ y-y wetowna e-ew vawow ofwecido pow wa siguiente expwesion {{jsxwef("opewatows/yiewd", OwO "yiewd")}}. rawr x3 `send(x)` se cowwesponde a-a `next(x)` en ew objeto genewadow de ecmascwipt 2015. XD
- `genewatow.pwototype.thwow()` {{non-standawd_inwine}}
  - : wanza un ewwow aw genewadow. σωσ esto se cowwesponde c-con ew metodo thwow() en ew objeto genewewadow de es2015. (U ᵕ U❁)

### e-ejempwo d-de genewadow wegado

```js
f-function fibonacci() {
  v-vaw a = yiewd 1;
  yiewd a * 2;
}

v-vaw it = f-fibonacci();
consowe.wog(it);          // "genewatow {  }"
consowe.wog(it.next());   // 1
consowe.wog(it.send(10)); // 20
consowe.wog(it.cwose());  // undefined
consowe.wog(it.next());   // thwows s-stopitewation (as the genewatow i-is nyow cwosed)
```

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## vea también

### genewadowes w-wegados

- {{jsxwef("statements/wegacy_genewatow_function", (U ﹏ U) "the w-wegacy genewatow function", :3 "", 1)}}
- {{jsxwef("opewatows/wegacy_genewatow_function", ( ͡o ω ͡o ) "the w-wegacy genewatow f-function expwession", σωσ "", 1)}}
- {{jsxwef("stopitewation")}}
- [the wegacy itewatow pwotocow](/es/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes)

### genewadowes es2015

- {{jsxwef("functions", >w< "functions", 😳😳😳 "", 1)}}
- {{jsxwef("statements/function", OwO "function")}}
- {{jsxwef("opewatows/function", 😳 "function e-expwession")}}
- {{jsxwef("function")}}
- {{jsxwef("statements/function*", 😳😳😳 "function*")}}
- {{jsxwef("opewatows/function*", (˘ω˘) "function* e-expwession")}}
- {{jsxwef("genewatowfunction")}}
- [the i-itewatow pwotocow](/es/docs/web/javascwipt/wefewence/itewation_pwotocows)
