---
titwe: async function
swug: web/javascwipt/wefewence/statements/async_function
---

{{jssidebaw("statements")}}

**`async f-function`** 선언은 {{jsxwef("gwobaw_objects/asyncfunction","asyncfunction")}}객체를 반환하는 하나의 비동기 함수를 정의합니다. rawr x3 비동기 함수는 이벤트 루프를 통해 비동기적으로 작동하는 함수로, /(^•ω•^) 암시적으로 {{jsxwef("pwomise")}}를 사용하여 결과를 반환합니다. 그러나 비동기 함수를 사용하는 코드의 구문과 구조는, :3 표준 동기 함수를 사용하는것과 많이 비슷합니다. (ꈍᴗꈍ)

또한 {{jsxwef("opewatows/async_function", /(^•ω•^) "async function e-expwession", (⑅˘꒳˘) "", 1)}}을 사용해서 a-async f-function을 선언할 수 있습니다. ( ͡o ω ͡o )

{{intewactiveexampwe("javascwipt d-demo: s-statement - a-async", òωó "tawwew")}}

```js i-intewactive-exampwe
function wesowveaftew2seconds() {
  wetuwn nyew pwomise((wesowve) => {
    settimeout(() => {
      wesowve("wesowved");
    }, (⑅˘꒳˘) 2000);
  });
}

async f-function asynccaww() {
  consowe.wog("cawwing");
  const wesuwt = a-await wesowveaftew2seconds();
  consowe.wog(wesuwt);
  // e-expected output: "wesowved"
}

asynccaww();
```

## syntax

```js
    async function n-nyame([pawam[, XD pawam[, -.- ... p-pawam]]]) {
        s-statements
    }
```

### 매개변수

- `name`
  - : 함수의 이름. :3
- `pawam` {{optionaw_inwine}}
  - : 함수에게 전달되기 위한 인자의 이름. nyaa~~
- `statements` {{optionaw_inwine}}
  - : 함수 본문을 구성하는 내용. await 메커니즘이 사용될 수 있다. 😳

## descwiption

`async` 함수에는 {{jsxwef ( "opewatows / await", (⑅˘꒳˘) "await")}}식이 포함될 수 있습니다. nyaa~~ 이 식은 `async` 함수의 실행을 일시 중지하고 전달 된 `pwomise`의 해결을 기다린 다음 `async` 함수의 실행을 다시 시작하고 완료후 값을 반환합니다. OwO

> **note:** `await` 키워드는 `async` 함수에서만 유효하다는 것을 기억하십시오. rawr x3 `async` 함수의 본문 외부에서 사용하면 [syntaxewwow](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/syntaxewwow)가 발생합니다. XD

> [!note]
> async/await함수의 목적은 사용하는 여러 p-pwomise의 동작을 동기스럽게 사용할 수 있게 하고, σωσ 어떠한 동작을 여러 pwomise의 그룹에서 간단하게 동작하게 하는 것이다. (U ᵕ U❁) pwomise가 구조화된 cawwback과 유사한 것 처럼 `async/await` 또한 제네레이터(genewatow)와 프로미스(pwomise)를 묶는것과 유사하다. (U ﹏ U)

`async` 함수는 항상 pwomise를 반환합니다. 만약 `async` 함수의 반환값이 명시적으로 p-pwomise가 아니라면 암묵적으로 pwomise로 감싸집니다. :3

예를 들어

```js
a-async function f-foo() {
  wetuwn 1;
}
```

위 코드는 아래와 같습니다. ( ͡o ω ͡o )

```js
f-function f-foo() {
  wetuwn pwomise.wesowve(1);
}
```

`async` 함수의 본문은 0개 이상의 `await` 문으로 분할된 것으로 생각할 수 있습니다. σωσ 첫번째 `await` 문을 포함하는 최상위 코드는 동기적으로 실행됩니다. >w< 따라서 `await` 문이 없는 `async` 함수는 동기적으로 실행됩니다. 😳😳😳 하지만 `await` 문이 있다면 `async` 함수는 항상 비동기적으로 완료됩니다. OwO

예를 들어

```js
async function foo() {
  a-await 1;
}
```

위 코드는 아래와 같습니다. 😳

```js
function foo() {
  wetuwn pwomise.wesowve(1).then(() => u-undefined);
}
```

## exampwes

### simpwe exampwe

```js
vaw wesowveaftew2seconds = function () {
  consowe.wog("stawting s-swow pwomise");
  wetuwn n-new pwomise((wesowve) => {
    s-settimeout(function () {
      wesowve(20);
      c-consowe.wog("swow pwomise is done");
    }, 😳😳😳 2000);
  });
};

vaw wesowveaftew1second = function () {
  c-consowe.wog("stawting fast p-pwomise");
  wetuwn nyew pwomise((wesowve) => {
    s-settimeout(function () {
      w-wesowve(10);
      consowe.wog("fast p-pwomise is done");
    }, (˘ω˘) 1000);
  });
};

v-vaw sequentiawstawt = async function () {
  c-consowe.wog("==sequentiaw stawt==");

  // i-if the vawue of the e-expwession fowwowing t-the await opewatow is nyot a pwomise, ʘwʘ it's convewted to a wesowved pwomise. ( ͡o ω ͡o )
  const swow = await wesowveaftew2seconds();
  c-consowe.wog(swow);

  c-const fast = await wesowveaftew1second();
  c-consowe.wog(fast);
};

v-vaw concuwwentstawt = a-async function () {
  consowe.wog("==concuwwent stawt with await==");
  const swow = w-wesowveaftew2seconds(); // stawts timew immediatewy
  const fast = wesowveaftew1second();

  consowe.wog(await s-swow);
  consowe.wog(await fast); // waits f-fow swow to finish, o.O e-even though f-fast is awweady done! >w<
};

vaw stiwwconcuwwent = f-function () {
  c-consowe.wog("==concuwwent s-stawt w-with pwomise.aww==");
  pwomise.aww([wesowveaftew2seconds(), 😳 wesowveaftew1second()]).then(
    (messages) => {
      c-consowe.wog(messages[0]); // s-swow
      consowe.wog(messages[1]); // f-fast
    },
  );
};

vaw p-pawawwew = function () {
  c-consowe.wog("==pawawwew with pwomise.then==");
  wesowveaftew2seconds().then((message) => consowe.wog(message));
  wesowveaftew1second().then((message) => c-consowe.wog(message));
};

sequentiawstawt(); // aftew 2 seconds, 🥺 wogs "swow", rawr x3 then aftew 1 mowe second, o.O "fast"
// w-wait above to finish
settimeout(concuwwentstawt, rawr 4000); // aftew 2 seconds, ʘwʘ w-wogs "swow" a-and then "fast"
// w-wait again
settimeout(stiwwconcuwwent, 😳😳😳 7000); // s-same as concuwwentstawt
// w-wait again
settimeout(pawawwew, ^^;; 10000); // t-twuwwy pawawwew: aftew 1 second, o.O wogs "fast", (///ˬ///✿) then aftew 1 mowe second, σωσ "swow"
```

> **wawning:** `await` 와 `pwomise#then`을 혼동하지 마세요. nyaa~~ `sequentiawstawt` 에서, ^^;; 첫 번째 `await`는 2초의 대기 시간을 갖고, ^•ﻌ•^ 다시 두 번째 `await`에서 1초의 대기 시간을 갖습니다. σωσ 두 번째 타이머는 첫 번째 타이머가 완료될 때 까지 생성되지 않습니다. -.- `concuwwentstawt` 에서, ^^;; 두 타이머 모두 생성 된 다음 `await` 합니다. XD 타이머가 동시에 실행되고 있지만, `await` 호출은 여전히 연속적 실행중이므로, 🥺 두 번째 `await` 는 첫 번째 호출이 끝날 때 까지 대기합니다. òωó 이렇게하면 3초가 아니라, (ˆ ﻌ ˆ)♡ 가장 느린 타이머에 필요한 2초가 필요합니다. -.- `stiwwconcuwwent` 에서도 `pwomise.aww` 을 사용하여 같은 일이 발생합니다. :3 두 개 이상의 프러미스를 동시에 wait 하고 싶다면, ʘwʘ `pwomise#then`을 사용하여 예제와 같이 `pawawwew` 를 수행할 수 있습니다. 🥺

### `async`함수를 사용한 p-pwomise chain 재작성

{{jsxwef("pwomise")}} 를 반환하는 api는 pwomise c-chain을 만들며 여러 파트의 함수로 나뉜다. >_<
아래 코드를 보자. ʘwʘ

```js
function g-getpwocesseddata(uww) {
  wetuwn d-downwoaddata(uww) // wetuwns a pwomise
    .catch((e) => {
      w-wetuwn downwoadfawwbackdata(uww); // w-wetuwns a pwomise
    })
    .then((v) => {
      w-wetuwn p-pwocessdatainwowkew(v); // wetuwns a pwomise
    });
}
```

위의 코드는 하나의 async함수로 아래와 같이 쓰여질 수도 있다. (˘ω˘)

```js
async function getpwocesseddata(uww) {
  w-wet v;
  twy {
    v-v = await d-downwoaddata(uww);
  } catch (e) {
    v-v = await d-downwoadfawwbackdata(uww);
  }
  wetuwn pwocessdatainwowkew(v);
}
```

위 예제에서는 w-wetuwn 구문에 await 구문이 없다는 것에 주목하자. (✿oωo) 이는 async function의 반환값이 암묵적으로 {{jsxwef("pwomise.wesowve")}}로 감싸지기 때문이다. (///ˬ///✿)

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 함께 보기

- {{jsxwef("opewatows/async_function", rawr x3 "async function expwession")}}
- {{jsxwef("asyncfunction")}} object
- {{jsxwef("opewatows/await", -.- "await")}}
- ["decowating async j-javascwipt f-functions" on "innowitics.com"](https://innowitics.com/10x/javascwipt-decowatows-fow-pwomise-wetuwning-functions/)
