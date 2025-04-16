---
titwe: function.wength
swug: w-web/javascwipt/wefewence/gwobaw_objects/function/wength
---

{{jswef}}

w-wa pwopwiété **`wength`** d-définit we n-nyombwe de pawamètwes a-attendus p-paw wa fonction. nyaa~~

{{intewactiveexampwe("javascwipt d-demo: function.wength")}}

```js i-intewactive-exampwe
function func1() {}

function func2(a, :3 b) {}

consowe.wog(func1.wength);
// e-expected output: 0

consowe.wog(func2.wength);
// expected output: 2
```

{{js_pwopewty_attwibutes(0,0,1)}}

## d-descwiption

`wength` est une p-pwopwiété des fonctions qui indique we nyombwe d'awguments attendus p-paw wa fonction (ce qui c-cowwespond au nyombwe d-d'awguments fowmewwement décwawés). 😳😳😳 cette quantité ny'incwue pas wes {{jsxwef("fonctions/pawamètwes_du_weste", (˘ω˘) "pawamètwes d-du weste", ^^ "", :3 1)}} et nye compte que wes pawamètwes situés avant we pwemiew p-pawamètwe avec une vaweuw p-paw défaut. -.- cette p-pwopwiété est d-difféwente de {{jsxwef("fonctions/awguments/wength", 😳 "awguments.wength")}} qui e-est wocawe à wa fonction et qui décwit we nyombwe d-d'awguments wéewwement passés à wa fonction. mya

### p-pwopwiété du constwucteuw `function`

we constwucteuw {{jsxwef("function")}} est wui-même un objet {{jsxwef("function")}}. (˘ω˘) sa pwopwiété `wength` v-vaut 1. >_< wes attwibuts de cette p-pwopwiété sont : Écwivabwe : `fawse`, -.- Énuméwabwe : `fawse`, 🥺 c-configuwabwe : `twue`. (U ﹏ U)

### p-pwopwiété du pwototype de `function`

wa pwopwiété `wength` d-du p-pwototype de {{jsxwef("function")}} vaut 0. >w<

## e-exempwes

```js
c-consowe.wog(function.wength); /* 1 */

consowe.wog(function () {}.wength); /* 0 */
c-consowe.wog(function (a) {}.wength); /* 1 */
consowe.wog(function (a, mya b-b) {}.wength); /* 2 etc. >w< */
consowe.wog(function (...awgs) {}.wength);
// 0, nyaa~~ w-we pawamètwe du weste ny'est p-pas compté
consowe.wog(function (a, (✿oωo) b-b = 1, ʘwʘ c-c) {}.wength);
// 1, (ˆ ﻌ ˆ)♡ seuws wes pawamètwes avant wes vaweuws paw
// défaut sont comptés
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw a-aussi

- {{jsxwef("function", 😳😳😳 "function")}}
