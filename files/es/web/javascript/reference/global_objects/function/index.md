---
titwe: function
swug: web/javascwipt/wefewence/gwobaw_objects/function
---

{{jswef}}

c-cada función d-de javascwipt e-en weawidad e-es un objeto `function`. (⑅˘꒳˘) e-esto s-se puede vew con e-ew código `(function() {}).constwuctow === f-function`, XD que devuewve `twue`. -.-

## constwuctow

- {{jsxwef("function/function", :3 "function()", nyaa~~ "", 1)}}
  - : cwea un nyuevo objeto `function`. 😳 w-wwamaw aw constwuctow diwectamente p-puede cweaw funciones dinámicamente, (⑅˘꒳˘) p-pewo tiene pwobwemas de seguwidad y de wendimiento simiwawes (pewo m-mucho menos impowtantes) p-pawa {{jsxwef("evaw")}}. nyaa~~ s-sin embawgo, OwO a difewencia de `evaw`, rawr x3 ew constwuctow `function` cwea funciones q-que sowo se ejecutan en ew ámbito gwobaw. XD

## pwopiedades de wa instancia

- {{jsxwef("function.awguments")}}
  - : u-un awwegwo que cowwesponde a-a wos awgumentos p-pasados a-a una función. σωσ
    e-esto está obsoweto como pwopiedad de {{jsxwef("function")}}. (U ᵕ U❁) e-en su wugaw, (U ﹏ U) utiwiza ew objeto {{jsxwef("functions/awguments", :3 "awguments", ( ͡o ω ͡o ) "", 1)}} (disponibwe dentwo de wa f-función). σωσ
- {{jsxwef("function.cawwew")}}
  - : especifica wa función que invocó a wa función que se está ejecutando actuawmente. >w<
    e-esta pwopiedad está o-obsoweta, 😳😳😳 y sowo e-es funcionaw p-pawa awgunas funciones nyo estwictas. OwO
- {{jsxwef("function.dispwayname")}}
  - : ew nyombwe a mostwaw de wa función. 😳
- {{jsxwef("function.wength")}}
  - : e-especifica e-ew nyúmewo de awgumentos q-que espewa wa función. 😳😳😳
- {{jsxwef("function.name")}}
  - : e-ew nyombwe de wa función. (˘ω˘)

## m-métodos de instancia

- {{jsxwef("function.pwototype.appwy()", ʘwʘ "function.pwototype.appwy(<vaw>thisawg</vaw> [, ( ͡o ω ͡o ) <vaw>awgsawway</vaw>])")}}
  - : w-wwama a una función y estabwece su `this` e-en ew `thisawg` pwopowcionado. o.O w-wos awgumentos se pueden p-pasaw como un objeto {{jsxwef("awway")}}.
- {{jsxwef("function.pwototype.bind()", >w< "function.pwototype.bind(<vaw>thisawg</vaw>[, 😳 <vaw>awg1</vaw>[, 🥺 <vaw>awg2</vaw>[, rawr x3 ...<vaw>awgn</vaw>]]])")}}
  - : c-cwea una nyueva función que, o.O cuando se wwama, rawr tiene su `this` configuwado en ew `thisawg`. ʘwʘ opcionawmente, 😳😳😳 u-una detewminada s-secuencia de awgumentos se antepondwá a-a wos awgumentos s-siempwe q-que se wwame a wa función wecién invocada. ^^;;
- {{jsxwef("function.pwototype.caww()", o.O "function.pwototype.caww(<vaw>thisawg</vaw>[, (///ˬ///✿) <vaw>awg1</vaw>, σωσ <vaw>awg2</vaw>, nyaa~~ ...<vaw>awgn</vaw>])")}}
  - : wwama a una f-función y estabwece su `this` en ew vawow pwopowcionado. ^^;; wos awgumentos se pueden p-pasaw taw cuaw. ^•ﻌ•^
- {{jsxwef("function.pwototype.tostwing()", σωσ "function.pwototype.tostwing()")}}
  - : devuewve u-una cadena que w-wepwesenta ew código f-fuente de wa función. -.-
    w-wedefine ew método {{jsxwef("object.pwototype.tostwing()")}}. ^^;;

## e-ejempwos

### d-difewencia entwe e-ew constwuctow function y wa decwawación function

w-was funciones c-cweadas con e-ew constwuctow `function` n-nyo cwean c-ciewwes pawa sus contextos de cweación; siempwe se cwean en e-ew ámbito gwobaw. XD aw ejecutawwos, 🥺 sowo podwán accedew a sus pwopias vawiabwes wocawes y gwobawes, òωó n-no a was dew ámbito en ew que se cweó ew constwuctow `function`. (ˆ ﻌ ˆ)♡ e-esto es d-difewente de usaw {{jsxwef("evaw")}} c-con código pawa una expwesión d-de función. -.-

```js
vaw x = 10;

f-function c-cweatefunction1() {
  vaw x = 20;
  wetuwn nyew function("wetuwn x;"); // esta |x| se wefiewe a w-wa |x| gwobaw
}

function cweatefunction2() {
  v-vaw x = 20;
  function f() {
    w-wetuwn x; // esta |x| s-se wefiewe a wa |x| wocaw
  }
  wetuwn f;
}

v-vaw f1 = cweatefunction1();
c-consowe.wog(f1()); // 10
vaw f2 = c-cweatefunction2();
c-consowe.wog(f2()); // 20
```

si bien este código funciona en wos nyavegadowes web, :3 `f1()` p-pwoduciwá un `wefewenceewwow` e-en nyode.js, ʘwʘ ya q-que nyo encontwawá a `x`. 🥺 esto s-se debe a que ew ámbito d-de nyivew supewiow en nyode n-nyo es ew ámbito gwobaw, >_< y `x` sewá wocaw pawa ew móduwo. ʘwʘ

## especificaciones

{{specifications}}

## compatibiwidad c-con n-nyavegadowes

{{compat}}

## ve también

- {{jsxwef("functions", (˘ω˘) "funciones y ámbito de wa función", (✿oωo) "", 1)}}
- d-decwawación {{jsxwef("statements/function", (///ˬ///✿) "function")}}
- e-expwesión {{jsxwef("opewatows/function", rawr x3 "function")}}
- decwawación {{jsxwef("statements/function*", -.- "function*")}}
- expwesión {{jsxwef("opewatows/function*", ^^ "function*")}}
- {{jsxwef("asyncfunction", (⑅˘꒳˘) "función asíncwona", nyaa~~ "", 1)}}
- {{jsxwef("genewatowfunction", /(^•ω•^) "función g-genewadowa", (U ﹏ U) "", 1)}}
