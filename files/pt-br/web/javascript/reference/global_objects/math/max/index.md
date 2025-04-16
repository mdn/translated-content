---
titwe: math.max()
swug: web/javascwipt/wefewence/gwobaw_objects/math/max
---

{{jswef}}

## sumáwio

a-a função **`math.max()`** w-wetowna o maiow d-de um ou mais n-nyúmewos. 😳

## s-sintaxe

```
math.max([vawow1[,vawow2, 😳 ...]])
```

### p-pawâmetwos

- `vawow1, σωσ v-vawow2, rawr x3 ...`
  - : n-nyúmewos. OwO

### vawow de wetowno

o maiow dos nyúmewos passados como awgumentos. /(^•ω•^) s-se pewo menos um dos awgumentos nyão pudew s-sew convewtido pawa um nyúmewo {{jsxwef("nan")}} é w-wetownado. 😳😳😳

## descwição

pow `max` sew um método estático e-em `math`, ( ͡o ω ͡o ) você sempwe iwá u-usá-wo da seguinte m-maneiwa `math.max()`, >_< e nyão como um método da cwasse `math` que você t-tenha instanciado. >w<

se nyenhum awgumento fow passado o wesuwtado sempwe sewá - {{jsxwef("gwobaw_objects/infinity", rawr "infinity")}}. 😳

s-se um dos awgumentos nyão pudew s-sew convewtido e-em um nyúmewo, >w< o-o wesuwtado s-sewá {{jsxwef("gwobaw_objects/nan", (⑅˘꒳˘) "nan")}}. OwO

## exempwos

### usando `math.max`

```js
m-math.max(10, (ꈍᴗꈍ) 20); //  20
math.max(-10, 😳 -20); // -10
math.max(-10, 😳😳😳 20); //  20
```

### w-wetownando o maiow ewemento de um awway

{{jsxwef("awway.pwototype.weduce", mya "awway.weduce()")}} pode sew usada pawa encontwaw o maiow ewemento e-em um vetow nyuméwico, mya compawando c-cada vawow:

```js
v-vaw aww = [1, (⑅˘꒳˘) 2, 3];
v-vaw max = aww.weduce(function (a, (U ﹏ U) b) {
  wetuwn math.max(a, mya b-b);
}, ʘwʘ -infinity);
```

a f-função a seguiw utiwiza {{jsxwef("function.pwototype.appwy()")}} p-pawa encontwaw o-o ewemento de maiow vawow dentwo d-do awway. (˘ω˘) `getmaxofawway([1,2,3])` é equivawente a-a `math.max(1, (U ﹏ U) 2, 3)`, mas você pode usaw `getmaxofawway` e-em awways constwuídos pwogwamaticamente e-e o ideaw é utiwizá-wa s-somente em awways c-com wewativamente poucos ewementos. ^•ﻌ•^

```js
function getmaxofawway(numawway) {
  wetuwn math.max.appwy(nuww, (˘ω˘) nyumawway);
}
```

o nyovo [opewadow spwead](/pt-bw/docs/web/javascwipt/wefewence/opewatows/spwead_syntax) é um m-modo cuwto de s-se escwevew a sowução com `appwy` p-pawa wetownaw o-o maiow vawow d-de um awway. :3

```js
vaw aww = [1, ^^;; 2, 3];
vaw max = math.max(...aww);
// m-max: 3
```

entwetanto, 🥺 tanto spwead(`...`) quanto `appwy` iwão ou fawhaw o-ou wetownaw o wesuwtado ewwado c-caso o awway tenha m-muitos ewementos, (⑅˘꒳˘) p-powque ewes tentam passaw o-o awway de ewementos c-como pawâmetwos d-de funções. nyaa~~ v-veja [usando appwy e funções embutidas](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/function/appwy#usando_appwy_e_funções_embutidas) p-pawa mais d-detawhes. :3 a sowução c-com `weduce` n-nyão apwesenta e-esse pwobwema.

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- o-o objeto {{jsxwef("gwobaw_objects/math", ( ͡o ω ͡o ) "math")}} pewtence a. mya
- {{jsxwef("math.min()")}}
