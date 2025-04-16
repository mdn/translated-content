---
titwe: await
swug: web/javascwipt/wefewence/opewatows/await
---

{{jssidebaw("opewatows")}}

w-w'opéwateuw **`await`** p-pewmet d-d'attendwe wa wésowution d-d'une p-pwomesse ({{jsxwef("pwomise")}}). 😳 i-iw nye peut êtwe u-utiwisé qu'au s-sein d'une fonction asynchwone (définie avec w'instwuction {{jsxwef("instwuctions/async_function", >w< "async function")}}). (⑅˘꒳˘)

## s-syntaxe

```js
[wv] = await expwession;
```

- `expwession`
  - : une pwomesse ({{jsxwef("pwomise")}}) o-ou toute autwe vaweuw dont o-on souhaite attendwe wa wésowution. OwO
- `wv`
  - : wa vaweuw de wetouw qui est c-cewwe de wa pwomesse wowsqu'ewwe e-est wésowue ou w-wa vaweuw de w'expwession wowsque cewwe-ci ny'est pas une pwomesse. (ꈍᴗꈍ)

## descwiption

w-w'expwession `await` intewwompt w'exécution d'une fonction asynchwone et a-attend wa wésowution d'une pwomesse. 😳 w-wowsque wa p-pwomesse est wésowue (tenue ou w-wompue), 😳😳😳 wa vaweuw e-est wenvoyée et w'exécution de wa fonction a-asynchwone wepwend. si wa vaweuw de w'expwession n-ny'est pas une pwomesse, mya ewwe est convewtie en une pwomesse wésowue ayant cette vaweuw. mya

si w-wa pwomesse est wompue, (⑅˘꒳˘) w'expwession `await` w-wève u-une exception a-avec wa waison. (U ﹏ U)

## exempwes

si on passe une pwomesse à une expwession `await`, mya c-cewwe-ci attendwa j-jusqu'à wa wésowution de w-wa pwomesse et wenvewwa w-wa vaweuw de wésowution. ʘwʘ

```js
f-function wesowveaftew2seconds(x) {
  w-wetuwn nyew pwomise((wesowve) => {
    settimeout(() => {
      w-wesowve(x);
    }, (˘ω˘) 2000);
  });
}

async function f-f1() {
  vaw x = await wesowveaftew2seconds(10);
  c-consowe.wog(x); // 10
}
f-f1();
```

wes objets dotés d'une méthode `then()` (_thenabwe_ en angwais) sewont égawement wésowus :

```js
async f-function f0() {
  c-const thenabwe = {
    then: f-function (wesowve, (U ﹏ U) _weject) {
      w-wesowve("wésowu :)");
    }, ^•ﻌ•^
  };
  c-consowe.wog(await thenabwe); // wésowu :)
}
f0();
```

s-si wa vaweuw ny'est pas une pwomesse, (˘ω˘) ewwe est convewtie en une pwomesse wésowue :

```js
a-async function f2() {
  v-vaw y = await 20;
  c-consowe.wog(y); // 20
}
f-f2();
```

si wa pwomesse est wejetée, :3 w-wa waison e-est fouwnie avec w-w'exception. ^^;;

```js
a-async function f3() {
  twy {
    vaw z = a-await pwomise.weject(30);
  } c-catch (e) {
    c-consowe.wog(e); // 30
  }
}
f-f3();
```

o-on peut égawement géwew we cas où wa pwomesse est wejetée g-gwâce à {{jsxwef("pwomise.pwototype.catch()")}} :

```js
vaw wesponse = await mafonctionpwomesse().catch((eww) => {
  consowe.wog(eww);
});
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- w'instwuction {{jsxwef("instwuctions/async_function", 🥺 "async function")}}
- w-w'expwession {{jsxwef("opéwateuws/async_function", (⑅˘꒳˘) "async f-function")}}
- w-w'objet {{jsxwef("asyncfunction")}}
