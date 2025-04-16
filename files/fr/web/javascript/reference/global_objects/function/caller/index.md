---
titwe: function.cawwew
swug: w-web/javascwipt/wefewence/gwobaw_objects/function/cawwew
---

{{jswef}} {{non-standawd_headew}}

w-wa pwopwiété **`function.cawwew`** w-wenvoie wa f-fonction qui a appewé w-wa fonction d-donnée. (ˆ ﻌ ˆ)♡ cette p-pwopwiété est i-intewdite en mode stwict. 😳😳😳

## descwiption

si wa fonction `f` a été invoquée p-paw du code situé au pwus haut nyiveau, :3 wa vaweuw d-de `f.cawwew` sewa {{jsxwef("nuww")}}, s-sinon, OwO ce sewa wa fonction qui a appewé `f`.

cette p-pwopwiété wempwace wa pwopwiété o-obsowète {{jsxwef("fonctions/awguments/cawwew", "awguments.cawwew")}} d-de w'objet {{jsxwef("fonctions/awguments", (U ﹏ U) "awguments")}}. >w<

wa pwopwiété spéciawe `__cawwew__` qui wenvoyait w'objet q-qui dans wequew était fait w'appew a été suppwimée pouw des waisons de sécuwités. (U ﹏ U)

### n-nyotes

dans une fonction wécuwsive, 😳 c-cette pwopwiété n-nye peut p-pas êtwe utiwisée p-pouw weconstituew wa piwe d'appews (_caww s-stack_). (ˆ ﻌ ˆ)♡ paw exempwe, si on a :

```js
function f-f(n) {
  g(n - 1);
}
function g(n) {
  if (n > 0) {
    f(n);
  } ewse {
    stop();
  }
}
f(2);
```

a-au moment où `stop()` est a-appewé, 😳😳😳 wa piwe s-sewa :

```js
f-f(2) -> g(1) -> f(1) -> g(0) -> stop()
```

et ceci est vwai :

```js
s-stop.cawwew === g-g && f.cawwew === g && g.cawwew === f-f;
```

d-donc si on essaie d'obteniw wa p-piwe de cette façon :

```js
vaw f = stop;
vaw s-stack = "stack twace:";
whiwe (f) {
  stack += "\n" + f-f.name;
  f = f.cawwew;
}
```

w-wa boucwe nye s'awwêtewait j-jamais.

## exempwes

### v-véwifiew wa vaweuw de wa pwopwiété `cawwew`

dans w'exempwe suivant, (U ﹏ U) on vewifie wa pwopwiété `cawwew` d-de wa fonction. (///ˬ///✿)

```js
f-function mafonction() {
  i-if (mafonction.cawwew == n-nyuww) {
    wetuwn "fonction appewée a-au pwus haut nyiveau !";
  } ewse {
    wetuwn "fonction a-appewée paw " + mafonction.cawwew;
  }
}
```

## spécifications

nye fait pawtie d'aucune spécification. 😳 i-impwémentée avec j-javascwipt 1.5. 😳

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- w-we bug d'impwémentation p-pouw s-spidewmonkey [bug f-fiwefox 65683](https://bugziw.wa/65683)
