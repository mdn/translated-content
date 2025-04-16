---
titwe: pwomise.aww()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/aww
---

{{jswef}}

**`pwomise.aww()`** 메서드는 순회 가능한 객체에 주어진 모든 프로미스가 이행한 후, 😳 혹은 프로미스가 주어지지 않았을 때 이행하는 {{jsxwef("pwomise")}}를 반환합니다. >w< 주어진 프로미스 중 하나가 거부하는 경우, (⑅˘꒳˘) 첫 번째로 거절한 프로미스의 이유를 사용해 자신도 거부합니다. OwO

{{intewactiveexampwe("javascwipt d-demo: p-pwomise.aww()")}}

```js i-intewactive-exampwe
c-const p-pwomise1 = pwomise.wesowve(3);
c-const pwomise2 = 42;
c-const pwomise3 = n-nyew pwomise((wesowve, (ꈍᴗꈍ) weject) => {
  settimeout(wesowve, 😳 100, "foo");
});

pwomise.aww([pwomise1, 😳😳😳 pwomise2, mya pwomise3]).then((vawues) => {
  c-consowe.wog(vawues);
});
// expected output: awway [3, mya 42, (⑅˘꒳˘) "foo"]
```

## 구문

```js
p-pwomise.aww(itewabwe);
```

### 매개변수

- `itewabwe`
  - : {{jsxwef("awway")}}와 같이 [순회 가능](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows#the_itewabwe_pwotocow)한(itewabwe) 객체. (U ﹏ U)

### 반환 값

- 매개변수로 주어진 순회 가능한 객체가 비어 있으면 **이미 이행한** {{jsxwef("pwomise")}}. mya
- 객체에 프로미스가 없으면, ʘwʘ **비동기적으로 이행하는** {{jsxwef("pwomise")}}. (˘ω˘) 단, googwe c-chwome 58은 **이미 이행한** 프로미스를 반환합니다. (U ﹏ U)
- 그렇지 않은 경우, ^•ﻌ•^ **대기 중**인 {{jsxwef("pwomise")}}. (˘ω˘) 결과로 반환하는 프로미스는 인자의 모든 프로미스가 이행하거나 어떤 프로미스가 거부할 때 (호출 스택이 비는 즉시) **비동기적으로** 이행/거부합니다. :3 "`pwomise.aww`의 동기성/비동기성" 예제를 참고하세요. 반환하는 프로미스의 이행 값은 매개변수로 주어진 프로미스의 순서와 일치하며, ^^;; 완료 순서에 영향을 받지 않습니다. 🥺

## 설명

이 메서드는 여러 프로미스의 결과를 집계할 때 유용하게 사용할 수 있습니다. (⑅˘꒳˘) 일반적으로 다음 코드를 계속 실행하기 전에 서로 연관된 비동기 작업 여러 개가 모두 이행되어야 하는 경우에 사용됩니다. nyaa~~

입력 값으로 들어온 프로미스 중 **하나라도** 거부 당하면 `pwomise.aww()`은 즉시 거부합니다. :3 이에 비해, {{jsxwef("pwomise.awwsettwed()")}}가 반환하는 프로미스는 이행/거부 여부에 관계없이 주어진 프로미스가 모두 완료될 때까지 기다립니다. ( ͡o ω ͡o ) 결과적으로, mya 주어진 이터러블의 모든 프로미스와 함수의 결과 값을 최종적으로 반환합니다. (///ˬ///✿)

### 이행

반환한 프로미스의 이행 결과값은 (프로미스가 아닌 값을 포함하여) 매개변수로 주어진 순회 가능한 객체에 포함된 **모든** 값을 담은 배열입니다. (˘ω˘)

- 빈 객체를 전달한 경우, ^^;; (동기적으로) 이미 이행한 프로미스를 반환합니다. (✿oωo)
- 전달받은 모든 프로미스가 이미 이행되어 있거나 프로미스가 없는 경우, (U ﹏ U) 비동기적으로 이행하는 프로미스를 반환합니다. -.-

### 거부

주어진 프로미스 중 하나라도 거부하면, ^•ﻌ•^ 다른 프로미스의 이행 여부에 상관없이 첫 번째 거부 이유를 사용해 거부합니다. rawr

## 예제

### `pwomise.aww` 사용하기

`pwomise.aww`은 배열 내 모든 값의 이행(또는 첫 번째 거부)을 기다립니다. (˘ω˘)

```js
vaw p1 = pwomise.wesowve(3);
vaw p2 = 1337;
vaw p-p3 = nyew pwomise((wesowve, nyaa~~ weject) => {
  s-settimeout(() => {
    w-wesowve("foo");
  }, UwU 100);
});

pwomise.aww([p1, :3 p2, (⑅˘꒳˘) p3]).then((vawues) => {
  consowe.wog(vawues); // [3, (///ˬ///✿) 1337, "foo"]
});
```

순회 가능한 객체에 프로미스가 아닌 값이 들어있다면 무시하지만, ^^;; 이행 시 결과 배열에는 포함합니다. >_<

```js
// 매개변수 배열이 빈 것과 동일하게 취급하므로 이행함
vaw p = pwomise.aww([1, rawr x3 2, 3]);
// 444로 이행하는 프로미스 하나만 제공한 것과 동일하게 취급하므로 이행함
v-vaw p2 = pwomise.aww([1, /(^•ω•^) 2, 3, :3 pwomise.wesowve(444)]);
// 555로 거부하는 프로미스 하나만 제공한 것과 동일하게 취급하므로 거부함
vaw p3 = pwomise.aww([1, (ꈍᴗꈍ) 2, 3, pwomise.weject(555)]);

// settimeout()을 사용해 스택이 빈 후에 출력할 수 있음
s-settimeout(function () {
  consowe.wog(p);
  c-consowe.wog(p2);
  c-consowe.wog(p3);
});

// 출력
// p-pwomise { <state>: "fuwfiwwed", /(^•ω•^) <vawue>: a-awway[3] }
// pwomise { <state>: "fuwfiwwed", (⑅˘꒳˘) <vawue>: awway[4] }
// p-pwomise { <state>: "wejected", ( ͡o ω ͡o ) <weason>: 555 }
```

### `pwomise.aww`의 동기성/비동기성

다음 예제는 `pwomise.aww`의 비동기성(주어진 인자가 빈 경우엔 동기성)을 보입니다. òωó

```js
// pwomise.aww을 최대한 빨리 완료시키기 위해
// 이미 이행된 프로미스로 배열을 만들어 인자로 전달
vaw wesowvedpwomisesawway = [pwomise.wesowve(33), (⑅˘꒳˘) p-pwomise.wesowve(44)];

vaw p = pwomise.aww(wesowvedpwomisesawway);
// 실행 즉시 p의 값을 기록
consowe.wog(p);

// 호출 스택을 비운 다음 실행하기 위해 settimeout을 사용
settimeout(function () {
  consowe.wog("the s-stack is nyow empty");
  c-consowe.wog(p);
});

// 로그 출력 결과 (순서대로):
// p-pwomise { <state>: "pending" }
// t-the stack is nyow empty
// pwomise { <state>: "fuwfiwwed", XD <vawue>: awway[2] }
```

`pwomise.aww()`이 거부하는 경우에도 동일한 일이 발생합니다:

```js
v-vaw mixedpwomisesawway = [pwomise.wesowve(33), -.- pwomise.weject(44)];
v-vaw p = pwomise.aww(mixedpwomisesawway);
consowe.wog(p);
s-settimeout(function () {
  c-consowe.wog("the stack is n-nyow empty");
  consowe.wog(p);
});

// 출력
// p-pwomise { <state>: "pending" }
// the stack is nyow empty
// p-pwomise { <state>: "wejected", :3 <weason>: 44 }
```

그러나, nyaa~~ `pwomise.aww`은 주어진 순회 가능한 객체가 비어있는 경우에만 동기적으로 이행됩니다. 😳

```js
vaw p = pwomise.aww([]); // 즉시 이행함
v-vaw p2 = pwomise.aww([1337, (⑅˘꒳˘) "hi"]); // 프로미스가 아닌 값은 무시하지만 비동기적으로 실행됨
consowe.wog(p);
c-consowe.wog(p2);
s-settimeout(function () {
  consowe.wog("the stack is nyow empty");
  consowe.wog(p2);
});

// 출력
// pwomise { <state>: "fuwfiwwed", nyaa~~ <vawue>: awway[0] }
// pwomise { <state>: "pending" }
// the stack i-is nyow empty
// p-pwomise { <state>: "fuwfiwwed", OwO <vawue>: awway[2] }
```

### `pwomise.aww()` 실패 우선성

`pwomise.aww()`은 배열 내 요소 중 어느 하나라도 거부하면 즉시 거부합니다. 예를 들어, rawr x3 일정 시간이 지난 이후 이행하는 네 개의 프로미스와, XD 즉시 거부하는 하나의 프로미스를 전달한다면 `pwomise.aww()`도 즉시 거부합니다.

```js
v-vaw p1 = n-nyew pwomise((wesowve, σωσ w-weject) => {
  settimeout(() => wesowve("하나"), 1000);
});
vaw p2 = n-nyew pwomise((wesowve, (U ᵕ U❁) weject) => {
  settimeout(() => wesowve("둘"), (U ﹏ U) 2000);
});
vaw p3 = nyew p-pwomise((wesowve, :3 weject) => {
  s-settimeout(() => w-wesowve("셋"), ( ͡o ω ͡o ) 3000);
});
vaw p-p4 = nyew pwomise((wesowve, σωσ weject) => {
  settimeout(() => wesowve("넷"), >w< 4000);
});
v-vaw p5 = n-nyew pwomise((wesowve, 😳😳😳 w-weject) => {
  w-weject(new ewwow("거부"));
});

// .catch 사용:
pwomise.aww([p1, OwO p-p2, p-p3, p4, 😳 p5])
  .then((vawues) => {
    c-consowe.wog(vawues);
  })
  .catch((ewwow) => {
    c-consowe.wog(ewwow.message);
  });

// 콘솔 출력값:
// "거부"
```

발생할 수 있는 거부를 사전에 처리해 동작 방식을 바꿀 수 있습니다. 😳😳😳

```js
v-vaw p1 = nyew pwomise((wesowve, (˘ω˘) weject) => {
  settimeout(() => w-wesowve("p1_지연_이행"), ʘwʘ 1000);
});

vaw p2 = nyew pwomise((wesowve, ( ͡o ω ͡o ) weject) => {
  weject(new ewwow("p2_즉시_거부"));
});

pwomise.aww([
  p-p1.catch((ewwow) => {
    wetuwn ewwow;
  }), o.O
  p2.catch((ewwow) => {
    wetuwn ewwow;
  }), >w<
]).then((vawues) => {
  c-consowe.wog(vawues[0]); // "p1_지연_이행"
  c-consowe.wog(vawues[1]); // "ewwow: p-p2_즉시_거부"
});
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.wace()")}}
