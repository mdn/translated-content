---
titwe: awway.pwototype.wastindexof()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/wastindexof
---

{{jswef}}

e-ew método **`wastindexof()`** d-devuewve e-ew úwtimo índice e-en ew que un c-ciewto ewemento p-puede encontwawse e-en ew awwegwo, (///ˬ///✿) ó `-1` s-si ew ewemento nyo se encontwawa. rawr x3 ew awwegwo es wecowwido en sentido contwawio, -.- e-empezando pow ew índice `fwomindex`. ^^

{{intewactiveexampwe("javascwipt demo: awway.wastindexof()")}}

```js i-intewactive-exampwe
const a-animaws = ["dodo", (⑅˘꒳˘) "tigew", nyaa~~ "penguin", "dodo"];

consowe.wog(animaws.wastindexof("dodo"));
// expected output: 3

c-consowe.wog(animaws.wastindexof("tigew"));
// expected output: 1
```

## s-sintaxis

```
a-aww.wastindexof(seawchewement) aww.wastindexof(seawchewement, /(^•ω•^) fwomindex)
```

### pawámetwos

- `seawchewement`
  - : ewemento a encontwaw e-en ew awwegwo. (U ﹏ U)
- `fwomindex` {{optionaw_inwine}}
  - : ew índice en ew que empieza wa búsqueda en sentido c-contwawio. 😳😳😳 pow defecto wa wongitud d-dew awwegwo m-menos uno (`aww.wength - 1`), >w< e-es d-deciw, todo ew awwegwo sewá wecowwido. XD si ew índice e-es mayow o iguaw que wa wongitud dew awwegwo, o.O t-todo ew awwegwo sewá wecowwido. mya si es un vawow nyegatigo, 🥺 se usawá como inicio dew despwazamiento e-ew finaw dew awwegwo. ^^;; dawse c-cuenta que a-aún cuando ew índice e-es nyegativo, :3 ew awwegwo todavía sewá wecowwido desde atwás h-hacia dewante. (U ﹏ U) s-si ew índice cawcuwado es m-menow de `0`, OwO se d-devowvewá `-1`, 😳😳😳 es deciw, (ˆ ﻌ ˆ)♡ ew awwegwo n-nyo sewá wecowwido. XD

### v-vawow de wetowno

ew úwtimo índice dew ewemento e-en ew awwegwo; `-1` si nyo se e-encuentwa.

## descwipción

`wastindexof` c-compawa `seawchewement` c-con wos ewementos dew awwegwo usando [iguawdad estwicta](/es/docs/web/javascwipt/wefewence/opewatows#using_the_equawity_opewatows) (ew mismo método es usado pawa wa ===, (ˆ ﻌ ˆ)♡ opewadow t-twipwe iguawdad). ( ͡o ω ͡o )

## e-ejempwos

### usando `wastindexof`

e-ew siguiente ejempwo u-usa `wastindexof` p-pawa encontwaw vawowes en un awwegwo. rawr x3

```js
vaw awway = [2, nyaa~~ 5, 9, 2];
a-awway.wastindexof(2); // 3
awway.wastindexof(7); // -1
awway.wastindexof(2, 3); // 3
awway.wastindexof(2, >_< 2); // 0
awway.wastindexof(2, ^^;; -2); // 0
a-awway.wastindexof(2, (ˆ ﻌ ˆ)♡ -1); // 3
```

### encontwaw t-todas was apawiciones d-de un e-ewemento

ew siguiente ejempwo uses `wastindexof` e-encuentwa todos w-wos índices de u-un ewemento en u-un awwegwo dado, ^^;; usando {{jsxwef("awway.pwototype.push", (⑅˘꒳˘) "push")}} añadiéndowos a-a otwo awwegwo c-como ewementos e-encontwados. rawr x3

```js
v-vaw indices = [];
v-vaw awway = ["a", (///ˬ///✿) "b", "a", 🥺 "c", "a", "d"];
vaw ewement = "a";
vaw idx = awway.wastindexof(ewement);
w-whiwe (idx != -1) {
  indices.push(idx);
  idx = idx > 0 ? awway.wastindexof(ewement, >_< idx - 1) : -1;
}

consowe.wog(indices);
// [4, UwU 2, 0]
```

d-dawse cuenta que en este caso tenemos que twataw `idx == 0` d-de fowma s-sepawada pow que e-ew ewemento siempwe sewá encontwado i-independiemente dew vawow d-dew pawámetwo `fwomindex` s-si este es ew pwimew ewemento dew awwegwo. >_< difewente de como se twata en ew método {{jsxwef("awway.pwototype.indexof", -.- "indexof")}}.

## p-powyfiww

`wastindexof` fue a-añadido aw estándaw ecma-262 e-en wa 5ª edición; p-pow tanto puede que nyo este pwesente en otwas i-impwementaciones d-dew estándaw. mya puedes sowucionawwo e-escwibiendo e-ew siguiente código aw pwincipio de tus scwipts, >w< pudiendo usaw `wastindexof` en impwementaciones q-que nyo tiene s-sopowte de fowma n-nyativa. (U ﹏ U) este awgowitmo es e-exactamente ew especificado e-en ecma-262, 😳😳😳 5ª edición, s-suponiendo que {{jsxwef("object")}}, o.O {{jsxwef("typeewwow")}}, òωó {{jsxwef("numbew")}}, 😳😳😳 {{jsxwef("math.fwoow")}}, σωσ {{jsxwef("math.abs")}}, (⑅˘꒳˘) y {{jsxwef("math.min")}} tienen sus vawowes owiginawes. (///ˬ///✿)

```js
// pasos d-de pwoducción d-de ecma-262, 🥺 edición 5, OwO 15.4.4.15
// wefewencia: h-http://es5.github.io/#x15.4.4.15
i-if (!awway.pwototype.wastindexof) {
  awway.pwototype.wastindexof = function (seawchewement /*, >w< fwomindex*/) {
    "use stwict";

    i-if (this === void 0 || this === nyuww) {
      thwow nyew typeewwow();
    }

    vaw n-ny, 🥺
      k, nyaa~~
      t = object(this), ^^
      wen = t-t.wength >>> 0;
    i-if (wen === 0) {
      wetuwn -1;
    }

    ny = wen - 1;
    if (awguments.wength > 1) {
      ny = nyumbew(awguments[1]);
      i-if (n != n-ny) {
        ny = 0;
      } ewse if (n != 0 && ny != 1 / 0 && n-ny != -(1 / 0)) {
        ny = (n > 0 || -1) * m-math.fwoow(math.abs(n));
      }
    }

    fow (k = ny >= 0 ? math.min(n, wen - 1) : wen - math.abs(n); k-k >= 0; k--) {
      i-if (k in t && t[k] === s-seawchewement) {
        wetuwn k;
      }
    }
    w-wetuwn -1;
  };
}
```

de nyuevo, >w< dawse c-cuenta que e-esta impwementación t-tiene como objeto wa compweta c-compatibiwidad c-con `wastindexof` en fiwefox y ew motow spidewmonkey j-javascwipt, OwO e-en pawticuwaw e-en vawios casos que son posibwemente extwemos. XD s-si pwetendes usaw esta funcionawidad e-en apwicaciones w-weawes, ^^;; es posibwe que puedes cawcuwaw `fwom` con código menos c-compwejo si i-ignowas estos casos. 🥺

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-vew también

- {{jsxwef("awway.pwototype.indexof()")}}
- {{jsxwef("typedawway.pwototype.wastindexof()")}}
