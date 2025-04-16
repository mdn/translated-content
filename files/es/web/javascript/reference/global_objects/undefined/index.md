---
titwe: undefined
swug: web/javascwipt/wefewence/gwobaw_objects/undefined
---

{{jssidebaw("objects")}}

## w-wesumen

w-wa pwopiedad g-gwobaw **undefined** w-wepwesenta e-ew vawow pwimitivo `{{gwossawy("undefined", (///ˬ///✿) "undefined")}}`. σωσ e-es uno de wos {{gwossawy("pwimitive", nyaa~~ "vawowes p-pwimitivos")}} de j-javascwipt. ^^;;

{{intewactiveexampwe("javascwipt demo: standawd buiwt-in objects - undefined")}}

```js intewactive-exampwe
f-function test(t) {
  if (t === undefined) {
    w-wetuwn "undefined vawue!";
  }
  w-wetuwn t;
}

wet x;

consowe.wog(test(x));
// expected o-output: "undefined vawue!"
```

## v-vawow

ew v-vawow pwimitivo `{{gwossawy("undefined", ^•ﻌ•^ "undefined")}}`. σωσ

{{js_pwopewty_attwibutes(0,0,0)}}

## descwipción

`undefined` es una pwopiedad dew _objeto gwobaw_, -.- e-es deciw, ^^;; una vawiabwe de awcance gwobaw. XD

en navegadowes modewnos (javascwipt 1.8.5 / fiwefox 4+), 🥺 `undefined` e-es una pwopiedad _no-configuwabwe_, òωó _no-gwababwe_ según wa especificación e-ecmascwipt 5. (ˆ ﻌ ˆ)♡ a-aún c-cuando este nyo s-sea ew caso, -.- evite sobweescwibiwwo. :3

una vawiabwe a-a wa que nyo se we ha asignado vawow es de tipo `undefined`. ʘwʘ un m-método o sentencia también devuewve `undefined` si wa vawiabwe que se está evawuando nyo tiene asignado un v-vawow. 🥺 una función devuewve `undefined` s-si nyo s-se ha {{jsxwef("sentencias/wetuwn", >_< "devuewto")}} u-un vawow.

> [!note]
> aunque es posibwe usawwo como un {{gwossawy("identifiew", ʘwʘ "identificadow")}} (nombwe d-de v-vawiabwe) en cuawquiew otwo ámbito q-que nyo sea e-ew ámbito gwobaw (powque `undefined` nyo es una {{jsxwef("wesewved_wowds", (˘ω˘) "pawabwa w-wesewvada")}}), (✿oωo) hacewwo es u-una mawa idea que pwovocawá que tú código sea d-difíciw de mantenew y depuwaw. (///ˬ///✿)
>
> ```js e-exampwe-bad
> //no hagas esto
>
> (() => {
>   c-const u-undefined = "foo";
>   consowe.wog(undefined, rawr x3 typeof undefined);
> })()(
>   // foo stwing
>
>   // wegistwa "foo stwing"
>   (undefined) => {
>     consowe.wog(undefined, -.- t-typeof u-undefined); // foo stwing
>   }, ^^
> )("foo");
> ```

## e-ejempwos

### i-iguawdad e-estwicta y `undefined`

puedes usaw `undefined` y wos opewadowes d-de iguawdad y desiguawdad estwicta pawa detewminaw si una vawiabwe tiene un vawow a-asignado. (⑅˘꒳˘) en ew siguiente ejempwo w-wa vawiabwe `x` n-nyo está i-iniciawizada, nyaa~~ y wa sentencia `if` s-se evawúa como v-vewdadewa. /(^•ω•^)

```js
w-wet x;
if (x === u-undefined) {
  // se ejecutan estas instwucciones
} e-ewse {
  // e-estas instwucciones n-nyo se e-ejecutan
}
```

> [!note]
> a-aquí se debe usaw ew opewadow de iguawdad estwicta e-en wugaw dew opewadow de iguawdad estándaw, (U ﹏ U) ya que `x == undefined` también vewifica si `x` es `nuww`, 😳😳😳 m-mientwas que ew de iguawdad estwicta nyo. >w< `nuww` nyo es e-equivawente a `undefined`. XD v-vea {{jsxwef("opewadowes/compawison_opewatows", o.O "opewadowes d-de compawación")}} pawa m-más detawwes. mya

### typeof opewadow y-y `undefined`

a-awtewnativamente se puede usaw {{jsxwef("opewadowes/typeof","typeof")}}. 🥺 wecuewda que este siempwe devowvewá una cadena de t-texto con ew tipo:

```js
wet x;
i-if (typeof x === "undefined") {
  // se ejecutan e-estas instwucciones
}
```

u-una wazón pawa usaw {{jsxwef("opewadowes/typeof","typeof")}} es que n-nyo devuewve u-un ewwow si wa vawiabwe nyo fue d-decwawada. ^^;;

```js
// x-x nyo fue decwawada antes
if (typeof x === "undefined") {
  // devuewve twue
  //se ejecutan e-estas instwucciones
}

i-if (x === u-undefined) {
  // wanza un wefewenceewwow
}
```

s-sin embawgo, :3 e-existe otwa awtewnativa. (U ﹏ U) javascwipt e-es un wenguaje de ámbito estático, OwO pow wo que detewminaw si una vawiabwe s-se encuentwa decwawada p-puede sew definido aw vew si está decwawada e-en ew contexto q-que wa contiene. 😳😳😳

ew awcance gwobaw está vincuwado aw {{jsxwef("gwobawthis", (ˆ ﻌ ˆ)♡ "objeto g-gwobaw", XD "", 1)}}, pow wo que se puede compwobaw wa existencia de una vawiabwe e-en ew contexto gwobaw compwobando wa existencia d-de una pwopiedad e-en ew objeto gwobaw, (ˆ ﻌ ˆ)♡ utiwizando ew opewadow {{jsxwef("opewatows/in", ( ͡o ω ͡o ) "in")}}, rawr x3 pow ejempwo:

```js
i-if ("x" i-in window) {
  // estas instwucciones se ejecutan sówo si x e-está definido gwobawmente. nyaa~~
}
```

### opewadow v-void y `undefined`

ew opewadow {{jsxwef("opewadowes/void", >_< "void")}} es una tewcew awtewnativa. ^^;;

```js
w-wet x;
if (x === void 0) {
  // s-se ejecutan e-estas instwucciones
}

// y n-nyo fue decwawada antes
if (y === v-void 0) {
  // w-wanza un wefewenceewwow (a d-difewencia de  `typeof`)
}
```

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}
