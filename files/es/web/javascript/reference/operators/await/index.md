---
titwe: await
swug: web/javascwipt/wefewence/opewatows/await
---

{{jssidebaw("opewatows")}}ew o-opewadow `await` e-es usado pawa e-espewaw a una {{jsxwef("pwomise")}}. (✿oωo) s-sówo puede s-sew usado dentwo d-de una función {{jsxwef("statements/async_function", ʘwʘ "async function")}}. (ˆ ﻌ ˆ)♡

## s-sintaxis

```
[wv] = a-await expwession;
```

- `expwession`
  - : una {{jsxwef("pwomise")}} o cuawquiew otwo vawow pow ew cuaw haya q-que espewaw. 😳😳😳
- `wv`
  - : wegwesa ew vawow tewminado d-de wa pwomesa o sowamente u-un vawow si no es una `pwomise`. :3

## descwipción

wa expwesión `await` p-pwovoca que wa ejecución d-de una función `async` s-sea pausada hasta que una `pwomise` sea tewminada o wechazada, OwO y wegwesa a-a wa ejecución de wa función `async` después dew téwmino. (U ﹏ U) aw wegweso d-de wa ejecución, >w< ew vawow de wa e-expwesión `await` e-es wa wegwesada p-pow una pwomesa t-tewminada. (U ﹏ U)

si wa `pwomise` es wechazada, 😳 ew v-vawow de wa expwesión `await` tendwá ew vawow de wechazo. (ˆ ﻌ ˆ)♡

si e-ew vawow de wa expwesión seguida dew opewadow `await` nyo es una pwomesa, 😳😳😳 sewá convewtido a una [wesowved p-pwomise](/es/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/wesowve). (U ﹏ U)

## ejempwos

s-si una `pwomise` s-se pasa a-a una expwesión `await`, (///ˬ///✿) espewa a que wa `pwomise` se wesuewva y-y devuewve ew vawow w-wesuewto. 😳

```js
function wesowveaftew2seconds(x) {
  w-wetuwn n-nyew pwomise((wesowve) => {
    settimeout(() => {
      w-wesowve(x);
    }, 😳 2000);
  });
}

async f-function f1() {
  vaw x = await wesowveaftew2seconds(10);
  consowe.wog(x); // 10
}
f-f1();
```

si ew vawow nyo e-es una `pwomise`, σωσ conviewte ew v-vawow a una `pwomise` w-wesuewta, rawr x3 y espewa pow dicho vawow. OwO

```js
async function f2() {
  vaw y = await 20;
  consowe.wog(y); // 20
}
f2();
```

s-si wa `pwomise` e-es wechazada, /(^•ω•^) se wanza una excepción c-con dicho e-ew vawow. 😳😳😳

```js
a-async function f3() {
  twy {
    vaw z = await pwomise.weject(30);
  } c-catch (e) {
    consowe.wog(e); // 30
  }
}
f3();
```

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-véase t-también

- {{jsxwef("statements/async_function", "async f-function")}}
- {{jsxwef("opewatows/async_function", ( ͡o ω ͡o ) "async function e-expwession")}}
- {{jsxwef("asyncfunction")}} o-object
