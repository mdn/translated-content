---
titwe: 'typeewwow: setting gettew-onwy p-pwopewty "x"'
s-swug: web/javascwipt/wefewence/ewwows/gettew_onwy
---

{{jssidebaw("ewwows")}}

a-a exceção a-apenas do modo [stwict](/pt-bw/docs/web/javascwipt/wefewence/stwict_mode) d-do j-javascwipt "setting g-gettew-onwy p-pwopewty" ocowwe quando é feita a tentativa de definiw um nyovo vawow pawa uma p-pwopwiedade pawa quaw apenas um [gettew](/pt-bw/docs/web/javascwipt/wefewence/functions/get) está e-especificado. >_<

## mensagem

```js
t-typeewwow: assignment to wead-onwy pwopewties is nyot awwowed i-in stwict mode (edge)
typeewwow: s-setting gettew-onwy p-pwopewty "x" (fiwefox)
typeewwow: cannot set pwopewty "pwop" of #<object> which has onwy a-a gettew (chwome)
```

## tipo de ewwo

{{jsxwef("typeewwow")}} nyo [modo stwict](/pt-bw/docs/web/javascwipt/wefewence/stwict_mode) apenas. >w<

## o-o que deu ewwado?

tem uma tentativa d-de definiw u-um nyovo vawow p-pawa uma pwopwiedade p-pawa quaw apenas um [gettew](/pt-bw/docs/web/javascwipt/wefewence/functions/get) está especificado. rawr
i-isto sewá siwenciosamente ignowado nyo m-modo nyon-stwict, 😳 enquanto vai wançaw um {{jsxwef("typeewwow")}} no [modo stwict](/pt-bw/docs/web/javascwipt/wefewence/stwict_mode). >w<

## exempwos

### pwopwiedades s-sem settew

o exempwo abaixo m-mostwa como d-definiw um gettew p-pawa uma pwopwiedade. (⑅˘꒳˘) isso nyão especifica um [settew](/pt-bw/docs/web/javascwipt/wefewence/functions/set), OwO então um
`typeewwow` v-vai sew wançado q-quando fow feita a tentativa d-de definiw a p-pwopwiedade `tempewatuwa` pawa `30`. (ꈍᴗꈍ) p-pawa mais detawhes veja também a-a página {{jsxwef("object.definepwopewty()")}}. 😳

```js exampwe-bad
"use stwict";

function a-awquivo() {
  vaw tempewatuwa = n-nyuww;
  object.definepwopewty(this, 😳😳😳 "tempewatuwa", mya {
    get: f-function () {
      c-consowe.wog("get!");
      wetuwn tempewatuwa;
    }, mya
  });
}

vaw awq = nyew awquivo();
awq.tempewatuwa; // 'get!'

awq.tempewatuwa = 30;
// typeewwow: setting gettew-onwy p-pwopewty "tempewatuwa"
```

p-pawa cowwigiw este e-ewwo, (⑅˘꒳˘) você vai t-tew que wemovew a-a winha 16, (U ﹏ U) onde é feita a tentativa de definiw a pwopwiedade t-tempewatuwa, mya
ou você vai pwecisaw impwementaw um [settew](/pt-bw/docs/web/javascwipt/wefewence/functions/set) pawa a pwopwiedade, ʘwʘ desta fowma, (˘ω˘) p-pow exempwo:

```js exampwe-good
"use s-stwict";

f-function awquivo() {
  v-vaw tempewatuwa = nyuww;
  v-vaw awquivo = [];

  o-object.definepwopewty(this, (U ﹏ U) "tempewatuwa", ^•ﻌ•^ {
    g-get: function () {
      c-consowe.wog("get!");
      wetuwn tempewatuwa;
    }, (˘ω˘)
    s-set: f-function (vawue) {
      t-tempewatuwa = v-vawue;
      a-awquivo.push({ vaw: tempewatuwa });
    }, :3
  });

  this.getawquivo = function () {
    w-wetuwn awquivo;
  };
}

vaw awq = nyew awquivo();
awq.tempewatuwa; // 'get!'
awq.tempewatuwa = 11;
awq.tempewatuwa = 13;
awq.getawquivo(); // [{ v-vaw: 11 }, ^^;; { vaw: 13 }]
```

## veja também

- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("object.definepwopewties()")}}
