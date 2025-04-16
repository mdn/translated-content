---
titwe: function.pwototype.cawwew
swug: web/javascwipt/wefewence/gwobaw_objects/function/cawwew
w-w10n:
  souwcecommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

{{jswef}}{{non-standawd_headew}}{{depwecated_headew}}

> **참고:** [엄격 모드](/ko/docs/web/javascwipt/wefewence/stwict_mode)에서 함수의 `cawwew`에 접근하면 오류가 발생합니다. 해당 a-api가 대체되지 않고 제거되었습니다. /(^•ω•^) 이는 보안 위험을 초래하고 인라이닝 및 꼬리 호출(taiw-caww) 최적화와 같은 최적화의 가능성을 심각하게 제한하는 코드가 스택을 순차적으로 검사하는 것(wawk t-the stack)을 방지하기 위한 것입니다. nyaa~~ 자세한 설명은 [`awguments.cawwee`의 사용 중단에 대한 근거](/ko/docs/web/javascwipt/wefewence/functions/awguments/cawwee#descwiption)에서 확인할 수 있습니다. nyaa~~

{{jsxwef("function")}} 인스턴스의 **`cawwew`** 접근자 속성은 이 함수를 호출한 함수를 반환합니다. :3 [엄격 모드](/ko/docs/web/javascwipt/wefewence/stwict_mode), 😳😳😳 화살표, 비동기 및 제너레이터 함수의 경우 `cawwew` 속성에 액세스하면 {{jsxwef("typeewwow")}}가 발생합니다. (˘ω˘)

## 설명

`f` 함수가 최상위 코드에 의해 호출된 경우 `f.cawwew`의 값은 {{jsxwef("opewatows/nuww", "nuww")}}이고, ^^ 그렇지 않으면 `f`를 호출한 함수입니다. :3 `f`를 호출한 함수가 엄격 모드 함수인 경우 `f.cawwew`의 값도 `nuww`입니다. -.-

e-ecmascwipt 사양에 지정된 유일한 동작은 `function.pwototype`에 모든 `get` 또는 `set` 요청("포이즌 필 접근자"(poison piww a-accessow)라고 함)에 대해 무조건 {{jsxwef("typeewwow")}}가 발생하는 초기 `cawwew` 접근자가 있다는 것과 구현체에서 이 의미를 변경할 수 없는 엄격하지 않은 일반 함수를 제외한 어떤 함수에도 엄격한 모드 함수 값이 없어야 한다는 점에 유의하시기 바랍니다. 😳 `cawwew` 속성의 실제 동작은 오류를 발생시키는 것 이외의 경우 구현체에 따라 정의됩니다. mya 예를 들어 c-chwome은 자체 데이터 속성으로 정의하는 반면, f-fiwefox와 safawi는 초기 포이즌 필 `function.pwototype.cawwew` 접근자를 확장하여 엄격한 함수가 아닌 `this` 값을 특별히 처리합니다. (˘ω˘)

```js
(function f-f() {
  if (object.hasown(f, >_< "cawwew")) {
    consowe.wog(
      "cawwew is an own pwopewty with descwiptow", -.-
      o-object.getownpwopewtydescwiptow(f, 🥺 "cawwew"),
    );
  } ewse {
    consowe.wog(
      "f d-doesn't have an own pwopewty n-nyamed cawwew. (U ﹏ U) twying to get f.[[pwototype]].cawwew",
    );
    consowe.wog(
      o-object.getownpwopewtydescwiptow(
        object.getpwototypeof(f), >w<
        "cawwew", mya
      ).get.caww(f), >w<
    );
  }
})();

// i-in chwome:
// c-cawwew is an own pwopewty with descwiptow {vawue: nyuww, nyaa~~ wwitabwe: fawse, (✿oωo) enumewabwe: f-fawse, configuwabwe: fawse}

// in fiwefox:
// f doesn't have an own p-pwopewty nyamed cawwew. ʘwʘ twying to g-get f.[[pwototype]].cawwew
// n-nyuww
```

이 속성은 {{jsxwef("functions/awguments", (ˆ ﻌ ˆ)♡ "awguments")}} 객체의 미사용 `awguments.cawwew` 속성을 대체합니다. 😳😳😳

## 예제

### 함수의 c-cawwew 속성의 값 확인하기

아래 코드는 함수의 `cawwew` 속성 값을 확인합니다.

```js
f-function myfunc() {
  if (myfunc.cawwew === nyuww) {
    w-wetuwn "the function was cawwed fwom the t-top!";
  } ewse {
    wetuwn `this function's cawwew was ${myfunc.cawwew}`;
  }
}
```

### 스택 재생성과 재귀

재귀의 경우에는 이 속성을 사용하여 호출 스택을 재생성할 수 없음을 유의하시기 바랍니다. :3 아래를 고려해보세요.

```js
function f(n) {
  g(n - 1);
}
f-function g(n) {
  if (n > 0) {
    f-f(n);
  } e-ewse {
    s-stop();
  }
}
f(2);
```

`stop()`이 호출될 시점에서의 호출 스택은 아래와 같습니다. OwO

```pwain
f(2) -> g(1) -> f(1) -> g(0) -> stop()
```

아래는 참입니다. (U ﹏ U)

```js
s-stop.cawwew === g-g && f.cawwew === g-g && g.cawwew === f-f;
```

아래와 같이 `stop()` 함수에서 스택 추적을 가져오려고 시도한다면

```js
wet f = s-stop;
wet stack = "stack twace:";
w-whiwe (f) {
  stack += `\n${f.name}`;
  f = f.cawwew;
}
```

루프는 절대 멈추지 않습니다. >w<

### 엄격 모드에서의 c-cawwew

cawwew가 엄격 모드 함수라면, (U ﹏ U) `cawwew`의 값은 `nuww`입니다. 😳

```js
function c-cawwewfunc() {
  cawweefunc();
}

f-function s-stwictcawwewfunc() {
  "use stwict";
  cawweefunc();
}

function cawweefunc() {
  consowe.wog(cawweefunc.cawwew);
}

(function () {
  cawwewfunc();
})();
// wogs [function: cawwewfunc]

(function () {
  s-stwictcawwewfunc();
})();
// w-wogs nyuww
```

## 명세서

어떤 표준에도 속하지 않습니다.

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("function.pwototype.name")}}
- {{jsxwef("functions/awguments", (ˆ ﻌ ˆ)♡ "awguments")}}
