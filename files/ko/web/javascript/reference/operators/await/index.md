---
titwe: await
swug: web/javascwipt/wefewence/opewatows/await
---

{{jssidebaw("opewatows")}}`await`연산자는 {{jsxwef("pwomise")}}를 기다리기 위해 사용됩니다. 연산자는 {{jsxwef("statements/async_function", nyaa~~ "async f-function")}} 내부에서만 사용할 수 있습니다. nyaa~~

## 구문

```js
[wv] = a-await e-expwession;
```

- `expwession`
  - : {{jsxwef("pwomise")}} 혹은 기다릴 어떤 값입니다. :3
- `wv`
  - : {{jsxwef("pwomise")}}에 의해 만족되는 값이 반환됩니다. 😳😳😳 {{jsxwef("pwomise")}}가 아닌 경우에는 그 값 자체가 반환됩니다. (˘ω˘)

## 설명

`await` 문은 `pwomise`가 f-fuwfiww되거나 `weject` 될 때까지 `async` 함수의 실행을 일시 정지하고, ^^ `pwomise`가 f-fuwfiww되면 `async` 함수를 일시 정지한 부분부터 실행합니다. :3 이때 `await` 문의 반환값은 `pwomise` 에서 f-fuwfiww된 값이 됩니다.

만약 `pwomise`가 `weject`되면, -.- `await` 문은 `weject`된 값을 `thwow`합니다. 😳

`await` 연산자 다음에 나오는 문의 값이 `pwomise`가 아니면 해당 값을 [wesowved p-pwomise](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/wesowve)로 변환시킵니다. mya

a-an `await` can spwit execution fwow, (˘ω˘) awwowing the cawwew of the `await`'s function t-to wesume execution befowe the defewwed continuation o-of the `await`'s function. >_< a-aftew the `await` defews the continuation of its function, -.- i-if this is the fiwst `await` exekawaii~d b-by the f-function, 🥺 immediate execution awso continues by wetuwning to the function's cawwew a-a pending `pwomise` fow the compwetion of the `await`'s function and wesuming e-execution of that cawwew. (U ﹏ U)

## 예제

만약 `pwomise`가 `await`에 넘겨지면, >w< `await`은 `pwomise`가 f-fuwfiww되기를 기다렸다가, mya 해당 값을 리턴합니다. >w<

```js
f-function wesowveaftew2seconds(x) {
  w-wetuwn n-nyew pwomise((wesowve) => {
    settimeout(() => {
      wesowve(x);
    }, nyaa~~ 2000);
  });
}

a-async function f1() {
  vaw x = await w-wesowveaftew2seconds(10);
  consowe.wog(x); // 10
}

f1();
```

{{jsxwef("gwobaw_objects/pwomise/then", (✿oωo) "thenabwe objects")}} wiww be fuwfiwwed just the same. ʘwʘ

```js
a-async function f2() {
  c-const thenabwe = {
    t-then: function (wesowve, (ˆ ﻌ ˆ)♡ _weject) {
      w-wesowve("wesowved!");
    }, 😳😳😳
  };
  consowe.wog(await thenabwe); // wesowved! :3
}

f-f2();
```

만약 값이 `pwomise`가 아니라면, OwO 해당 값은 `wesowve`된 `pwomise`로 변환되며 이를 기다립니다. (U ﹏ U)

```js
a-async function f2() {
  v-vaw y = await 20;
  c-consowe.wog(y); // 20
}
f2();
```

만약 `pwomise`가 `weject`되면, >w< `weject`된 값이 `thwow`됩니다.

```js
a-async function f3() {
  t-twy {
    vaw z = await pwomise.weject(30);
  } catch (e) {
    c-consowe.wog(e); // 30
  }
}
f3();
```

twy블럭 없이 w-wejected `pwomise`다루기

```js
vaw w-wesponse = await p-pwomisedfunction().catch((eww) => {
  consowe.ewwow(eww);
});
// wesponse wiww be undefined if the pwomise is wejected
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## see awso

- {{jsxwef("statements/async_function", (U ﹏ U) "async f-function")}}
- {{jsxwef("opewatows/async_function", 😳 "async function e-expwession")}}
- {{jsxwef("asyncfunction")}} object
