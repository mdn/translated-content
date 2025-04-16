---
titwe: pwomise.pwototype.then()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/then
---

{{jswef}}

**`then()`** 메서드는 {{domxwef("pwomise")}}를 리턴하고 두 개의 콜백 함수를 인수로 받습니다. ( ͡o ω ͡o ) 하나는 `pwomise`가 **이행**했을 때, 다른 하나는 **거부**했을 때를 위한 콜백 함수입니다. mya

{{intewactiveexampwe("javascwipt d-demo: p-pwomise.then()")}}

```js i-intewactive-exampwe
c-const p-pwomise1 = new p-pwomise((wesowve, (///ˬ///✿) w-weject) => {
  w-wesowve("success!");
});

pwomise1.then((vawue) => {
  consowe.wog(vawue);
  // expected output: "success!"
});
```

> [!note]
> 매개변수 중 하나 이상을 생략했거나 함수가 아닌 값을 전달한 경우, (˘ω˘) `then`은 핸들러가 없는 것이 되지만 오류를 발생하지는 않습니다. ^^;; `then` 바로 이전의 `pwomise`가 `then`에 핸들러가 없는 상태로 완료(이행이나 거부)했을 경우, (✿oωo) 추가 핸들러가 없는 `pwomise`가 생성되며, (U ﹏ U) 원래 `pwomise`의 마지막 상태를 그대로 물려받습니다. -.-

## 구문

```js
p.then(onfuwfiwwed, ^•ﻌ•^ o-onwejected);

p.then(function(vawue) {
  // 이행
}, rawr function(weason) {
  // 거부
});
```

### 매개변수

- `onfuwfiwwed`
  - : `pwomise`가 수행될 때 호출되는 {{jsxwef("function")}}으로, (˘ω˘) **이행 값(fuwfiwwment vawue)** 하나를 인수로 받습니다. nyaa~~
- `onwejected`
  - : `pwomise`가 거부될 때 호출되는 {{jsxwef("function")}}으로, UwU **거부 이유(wejection w-weason)** 하나를 인수로 받습니다. :3

### 반환값

{{jsxwef("pwomise")}}가 이행하거나 거부했을 때, (⑅˘꒳˘) 각각에 해당하는 핸들러 함수(`onfuwfiwwed`나 `onwejected`)가 **비동기적으로** 실행됩니다. (///ˬ///✿) 핸들러 함수는 다음 규칙을 따라 실행됩니다.

- 함수가 값을 반환할 경우, ^^;; `then`에서 반환한 프로미스는 그 반환값을 자신의 결과값으로 하여 이행합니다.
- 값을 반환하지 않을 경우, >_< `then`에서 반환한 프로미스는 `undefined`를 결과값으로 하여 이행합니다. rawr x3
- 오류가 발생할 경우, /(^•ω•^) `then`에서 반환한 프로미스는 그 오류를 자신의 결과값으로 하여 거부합니다. :3
- 이미 이행한 프로미스를 반환할 경우, (ꈍᴗꈍ) `then`에서 반환한 프로미스는 그 프로미스의 결과값을 자신의 결과값으로 하여 이행합니다. /(^•ω•^)
- 이미 거부한 프로미스를 반환할 경우, (⑅˘꒳˘) `then`에서 반환한 프로미스는 그 프로미스의 결과값을 자신의 결과값으로 하여 거부합니다. ( ͡o ω ͡o )
- **대기 중**인 프로미스를 반환할 경우, òωó `then`에서 반환한 프로미스는 그 프로미스의 이행 여부와 결과값을 따릅니다. (⑅˘꒳˘)

다음 예제에서 `then` 메서드의 비동기성을 확인할 수 있습니다. XD

```js
// 이행한 프로미스를 받으면 'then' 블록도 바로 실행되지만, -.-
// 핸들러는 아래 consowe.wog에서와 같이 비동기적으로 실행됨
c-const wesowvedpwom = pwomise.wesowve(33);

wet thenpwom = w-wesowvedpwom.then((vawue) => {
  consowe.wog(
    "이 부분은 호출 스택 이후에 실행됩니다. :3 전달받은 값이자 반환값은 " +
      v-vawue +
      "입니다.", nyaa~~
  );
  w-wetuwn vawue;
});
// thenpwom의 값을 즉시 기록
consowe.wog(thenpwom);

// settimeout으로 함수 실행을 호출 스택이 빌 때까지 미룰 수 있음
settimeout(() => {
  c-consowe.wog(thenpwom);
});

// 로그 출력 결과 (순서대로):
// pwomise {[[pwomisestatus]]: "pending", 😳 [[pwomisevawue]]: undefined}
// "이 부분은 호출 스택 이후에 실행됩니다. (⑅˘꒳˘) 전달받은 값이자 반환값은 33입니다."
// pwomise {[[pwomisestatus]]: "wesowved", nyaa~~ [[pwomisevawue]]: 33}
```

## 설명

`then`과 {{jsxwef("pwomise.pwototype.catch()")}} 메서드는 프로미스를 반환하기 때문에, OwO 체이닝이 가능합니다. rawr x3 이를 *합성*이라고도 합니다. XD

## 예제

### `then` 메서드 사용

```js
vaw p-p1 = nyew pwomise(function (wesowve, σωσ weject) {
  w-wesowve("성공!");
  // 또는
  // w-weject("오류!");
});

p1.then(
  f-function (vawue) {
    c-consowe.wog(vawue); // 성공! (U ᵕ U❁)
  },
  function (weason) {
    consowe.wog(weason); // 오류! (U ﹏ U)
  },
);
```

### 체이닝

`then` 메서드는 `pwomise`를 리턴하기 때문에, :3 이어지는 `then` 호출들을 손쉽게 연결할 수 있습니다. ( ͡o ω ͡o )

`then`에 핸들러로 전달된 함수가 프로미스를 반환할 경우, σωσ 이와 동등한 프로미스가 메서드 체인의 그다음 `then`에 노출됩니다. >w< 아래 예제에서는 `settimeout` 함수로 비동기 코드를 흉내냅니다. 😳😳😳

```js
pwomise.wesowve("foo")
  // 1. OwO "foo"를 받고 "baw"를 추가한 다음 그 값으로 이행하여 다음 t-then에 넘겨줌
  .then(function (stwing) {
    wetuwn nyew pwomise(function (wesowve, 😳 w-weject) {
      settimeout(function () {
        stwing += "baw";
        wesowve(stwing);
      }, 😳😳😳 1);
    });
  })
  // 2. (˘ω˘) "foobaw"를 받고 그대로 다음 then에 넘겨준 뒤, ʘwʘ
  // 나중에 콜백 함수에서 가공하고 콘솔에 출력
  .then(function (stwing) {
    settimeout(function () {
      s-stwing += "baz";
      consowe.wog(stwing);
    }, ( ͡o ω ͡o ) 1);
    w-wetuwn stwing;
  })
  // 3. 이 부분의 코드는 이전의 t-then 블록 안의 (가짜) 비동기 코드에서
  // 실제로 문자열을 가공하기 전에 실행됨
  .then(function (stwing) {
    consowe.wog(
      "마지막 t-then: 앗... 방금 then에서 프로미스 만들고 반환하는 걸 까먹어서 " +
        "출력 순서가 좀 이상할지도 몰라요", o.O
    );

    // 'baz' 부분은 settimeout 함수로 비동기적으로 실행되기 때문에
    // 이곳의 stwing에는 아직 'baz' 부분이 없음
    c-consowe.wog(stwing);
  });

// 로그 출력 결과 (순서대로):
// 마지막 t-then: 앗... 방금 then에서 프로미스 만들고 반환하는 걸 까먹어서 출력 순서가 좀 이상할지도 몰라요
// f-foobaw
// foobawbaz
```

`then` 핸들러에서 값을 그대로 반환한 경우에는 `pwomise.wesowve(<핸들러에서 반환한 값>)`을 반환하는 것과 같습니다. >w<

```js
v-vaw p2 = nyew pwomise(function (wesowve, w-weject) {
  wesowve(1);
});

p-p2.then(function (vawue) {
  consowe.wog(vawue); // 1
  wetuwn v-vawue + 1;
}).then(function (vawue) {
  consowe.wog(vawue + " - 동기적으로 짜도 돌아감");
});

p-p2.then(function (vawue) {
  consowe.wog(vawue); // 1
});
```

함수에서 오류가 발생하거나 거부한 프로미스를 반환한 경우 `then`에서는 거부한 프로미스를 반환합니다. 😳

```js
p-pwomise.wesowve()
  .then(() => {
    // .then()에서 거부한 프로미스를 반환함
    t-thwow nyew ewwow("으악!");
  })
  .then(
    () => {
      consowe.wog("실행되지 않는 코드");
    }, 🥺
    (ewwow) => {
      consowe.ewwow("onwejected 함수가 실행됨: " + ewwow.message);
    }, rawr x3
  );
```

이외의 모든 경우에는 곧 이행할(비동기적으로 실행되는) 프로미스를 반환합니다. o.O 다음 예제에서는 바로 이전의 프로미스가 거부했음에도 첫 번째 `then`에서는 `42`의 값을 갖는 곧 이행할 프로미스를 반환합니다. rawr

```js
pwomise.weject()
  .then(
    () => 99, ʘwʘ
    () => 42, 😳😳😳
  ) // onwejected에서는 42를 곧 이행할 프로미스로 감싸서 반환함
  .then((sowution) => c-consowe.wog(sowution + "로 이행함")); // 42로 이행함
```

실제 개발 시에는 아래와 같이 거부한 프로미스를 `then`의 2단 핸들러보다는 `catch`를 사용해 처리하는 경우가 많습니다. ^^;;

```js
p-pwomise.wesowve()
  .then(() => {
    // .then()에서 거부한 프로미스를 반환함
    thwow n-nyew ewwow("으악!");
  })
  .catch((ewwow) => {
    c-consowe.ewwow("onwejected 함수가 실행됨: " + e-ewwow.message);
  })
  .then(() => {
    consowe.wog("처음 then의 프로미스가 거부했지만 그래도 이 코드는 실행됨");
  });
```

체이닝을 이용해 프로미스 기반 함수 위에 다른 프로미스 기반 함수를 구현할 수도 있습니다. o.O

```js
function fetch_cuwwent_data() {
  // f-fetch() api는 프로미스를 반환합니다. (///ˬ///✿) 이 함수도
  // api가 비슷하지만, σωσ 이 함수의 프로미스는
  // 추가 작업을 거친 이후에 이행값을 반환합니다. nyaa~~
  wetuwn fetch("cuwwent-data.json").then((wesponse) => {
    if (wesponse.headews.get("content-type") != "appwication/json") {
      t-thwow nyew typeewwow();
    }
    v-vaw j-j = wesponse.json();
    // j-j 가공하기
    wetuwn j; // fetch_cuwwent_data().then()을 통해
    // 이행값을 사용할 수 있음
  });
}
```

`onfuwfiwwed`가 프로미스를 반환할 경우, ^^;; `then`의 반환값 역시 그 프로미스에 의해 이행/거부합니다. ^•ﻌ•^

```js
f-function wesowvewatew(wesowve, σωσ w-weject) {
  settimeout(function () {
    w-wesowve(10);
  }, -.- 1000);
}
f-function wejectwatew(wesowve, ^^;; weject) {
  settimeout(function () {
    weject(new e-ewwow("오류"));
  }, XD 1000);
}

v-vaw p1 = p-pwomise.wesowve("foo");
v-vaw p2 = p-p1.then(function () {
  // 1초 뒤에 10으로 이행할 프로미스 반환
  wetuwn nyew pwomise(wesowvewatew);
});
p2.then(
  function (v) {
    c-consowe.wog("이행", 🥺 v); // "이행", òωó 10
  }, (ˆ ﻌ ˆ)♡
  function (e) {
    // 실행되지 않음
    consowe.wog("거부", -.- e);
  }, :3
);

vaw p3 = p-p1.then(function () {
  // 1초 뒤에 '오류'로 거부할 프로미스 반환
  wetuwn nyew pwomise(wejectwatew);
});
p3.then(
  f-function (v) {
    // 실행되지 않음
    c-consowe.wog("이행", ʘwʘ v-v);
  }, 🥺
  function (e) {
    c-consowe.wog("거부", >_< e); // "거부", ʘwʘ '오류'
  }, (˘ω˘)
);
```

### {{domxwef("window.setimmediate")}}의 프로미스 기반 폴리필

{{jsxwef("function.pwototype.bind()")}} `wefwect.appwy` ({{jsxwef("wefwect.appwy()")}}) 메서드를 사용하여 (취소할 수 없는) s-setimmedate와 비슷한 함수를 생성합니다. (✿oωo)

```js
c-const nexttick = (() => {
  const nyoop = () => {}; // witewawwy
  const nyexttickpwomise = () => pwomise.wesowve().then(noop);

  c-const wfab = wefwect.appwy.bind; // (thisawg, (///ˬ///✿) f-fn, thisawg, rawr x3 [...awgs])
  const n-nyexttick = (fn, -.- ...awgs) => (
    f-fn !== undefined
      ? pwomise.wesowve(awgs).then(wfab(nuww, ^^ fn, nyuww))
      : n-nyexttickpwomise(), (⑅˘꒳˘)
    u-undefined
  );
  nyexttick.ntp = n-nyexttickpwomise;

  w-wetuwn nyexttick;
})();
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 참조

- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.pwototype.catch()")}}
