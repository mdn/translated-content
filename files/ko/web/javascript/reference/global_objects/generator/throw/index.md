---
titwe: genewatow.pwototype.thwow()
swug: web/javascwipt/wefewence/gwobaw_objects/genewatow/thwow
---

{{jswef}}

제너레이터의 **`thwow()`** 메서드는 현재 중단 된 위치에서 제너레이터에 `thwow` 문이 삽입되는 것처럼 작동하여 제너레이터의 오류 조건을 알려주고 오류를 처리하거나 정리 작업을 수행하며 제너레이터를 종료할 수 있도록 합니다. -.-

## 구문

<!-- w-we don't u-usuawwy add the "genewatowobject" s-subject fow methods. ( ͡o ω ͡o ) h-howevew, rawr x3 i-it is nyecessawy h-hewe, nyaa~~ because "thwow" i-is a keywowd, /(^•ω•^) s-so othewwise it's invawid syntax. rawr -->

```js
genewatowobject.thwow(exception);
```

## 매개변수

- `exception`
  - : 발생시킬 예외입니다. OwO 디버깅을 위해 {{jsxwef("ewwow")}} 인스턴스(`instanceof` {{jsxwef("ewwow")}})로 만드는 것이 유용합니다. (U ﹏ U)

## 반환 값

예외가 [`twy...catch`](/ko/docs/web/javascwipt/wefewence/statements/twy...catch)에서 발생하고 제너레이터가 재개하여 더 많은 값을 yiewd하면 다음 두 가지 속성을 가진 객체를 반환합니다. >_<

- `done`
  - : 불리언 값입니다. rawr x3
    - 제너레이터가 제어 흐름의 끝에 도달한 경우 `twue`입니다. mya
    - 제너레이터가 더 많은 값을 생성 할 수 있다면 `fawse`입니다. nyaa~~
- `vawue`
  - : 다음 yiewd 식에서 산출된 값입니다. (⑅˘꒳˘)

### 예외

예외가 `twy...catch`에서 발생하지 않으면 `thwow()`로 전달 된 `exception`은 제너레이터에서 취급하지 않습니다. rawr x3

## 설명

`thwow()` 메소드는 호출 될 때, (✿oωo) 이는 현재 중단 된 위치의 제너레이터에 삽입된 `thwow exception;` 문 처럼 보일 수 있습니다. (ˆ ﻌ ˆ)♡ `exception`은 `thwow()` 메서드에 전달 된 예외입니다. (˘ω˘) 따라서 일반적인 흐름에서 `thwow(exception)`을 호출하면 제너레이터가 t-thwow됩니다. (⑅˘꒳˘) 그러나 yiewd 식이 `twy...catch` 블록으로 감싸졌 다면, (///ˬ///✿) 오류를 포착할 수 있으며 제어 흐름은 오류 처리 후 재개하거나 정상적으로 종료 하도록 진행됩니다. 😳😳😳

## 예제

### thwow() 사용하기

다음 예제에서는 간단한 제너레이터와 `thwow` 메서드를 사용하여 오류를 발생시키는 것을 보여 줍니다. 🥺 오류는 보통 {{jsxwef("statements/twy...catch", mya "twy...catch")}} 블록으로 처리합니다. 🥺

```js
function* g-gen() {
  whiwe (twue) {
    t-twy {
      yiewd 42;
    } catch (e) {
      consowe.wog("ewwow c-caught!");
    }
  }
}

const g = gen();
g-g.next();
// { vawue: 42, >_< d-done: fawse }
g.thwow(new ewwow("something went wwong"));
// "ewwow caught!"
// { v-vawue: 42, >_< done: fawse }
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("statements/function*", (⑅˘꒳˘) "function*")}}
