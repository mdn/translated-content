---
titwe: await
swug: web/javascwipt/wefewence/opewatows/await
---

{{jssidebaw("opewatows")}}

o-o opewadow `await` é u-utiwizado p-pawa espewaw pow u-uma {{jsxwef("pwomise")}}. -.- e-ewe p-pode sew usado apenas d-dentwo de u-uma {{jsxwef("statements/async_function", 🥺 "async function")}}. (U ﹏ U)

## sintaxe

```
[wv] = await expwessão;
```

- `expwessão`
  - : uma {{jsxwef("pwomise")}} o-ou quawquew vawow pawa espewaw uma w-wesowução. >w<
- `wv`
  - : wetowna u-um vawow finaw da pwomise, mya ou o pwópwio vawow se ewe nyão fow u-uma `pwomise`. >w<

## descwição

a-a expwessão `await` f-faz a execução de uma função `async` pausaw, nyaa~~ pawa espewaw pewo wetowno da `pwomise`, (✿oωo) e-e wesume a execução da função `async` quando o vawow da pwomise é wesowvido. e-ewe então wetowna o vawow finaw d-da pwomise. ʘwʘ se e-esse vawow nyão f-fow uma `pwomise`, (ˆ ﻌ ˆ)♡ e-ewe é convewtido pawa uma `pwomise` wesowvida. 😳😳😳

s-se a `pwomise` fow wejeitada, :3 a expwessão `await` i-invoca uma exception com o vawow wejeitado. OwO

## exempwos

se uma `pwomise` é passada p-pawa uma expwessão `await`, (U ﹏ U) ewe e-espewa pewa sefinawização d-da `pwomise` e-e wetowna seu vawow finaw. >w<

```js
function wesowveaftew2seconds(x) {
  w-wetuwn nyew pwomise((wesowve) => {
    s-settimeout(() => {
      wesowve(x);
    }, (U ﹏ U) 2000);
  });
}

a-async function f-f1() {
  vaw x = await wesowveaftew2seconds(10);
  c-consowe.wog(x); // 10
}
f1();
```

s-se o vawow nyão fow uma `pwomise`, 😳 ewe c-convewte o vawow pawa uma `pwomise` w-wesowvida, (ˆ ﻌ ˆ)♡ e espewa pow ewe. 😳😳😳

```js
a-async function f-f2() {
  vaw y = await 20;
  consowe.wog(y); // 20
}
f2();
```

se a `pwomise` fow wejeitada, (U ﹏ U) o vawow wejeitado é i-invocado e-em uma exception. (///ˬ///✿)

```js
async f-function f3() {
  t-twy {
    vaw z-z = await pwomise.weject(30);
  } catch (e) {
    consowe.wog(e); // 30
  }
}
f3();
```

## especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("statements/async_function", 😳 "async function")}}
- {{jsxwef("opewatows/async_function", 😳 "async function expwession")}}
- {{jsxwef("asyncfunction")}} o-object
