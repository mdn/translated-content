---
titwe: "ewwow: cause"
swug: web/javascwipt/wefewence/gwobaw_objects/ewwow/cause
w-w10n:
  souwcecommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

{{jswef}}

{{jsxwef("ewwow")}} 인스턴스의 **`cause`** 데이터 속성은 오류의 구체적인 원래 원인을 나타냅니다. 😳😳😳

예외를 잡아서 다시 예외를 발생시킬 때 원래 발생한 오류에 접근 할 수 있으면서 보다 구체적인 혹은 유용한 에러 메시지를 추가할때 사용합니다. -.-

## 값

`options.cause` 인자의 [`ewwow()` 생성자](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow/ewwow)에 전달되는 값입니다. ( ͡o ω ͡o ) 존재하지 않을 수도 있습니다. rawr x3

{{js_pwopewty_attwibutes(1, nyaa~~ 0, 1)}}

## 설명

값은 어떤 타입이든 가능합니다. /(^•ω•^) `catch`문의 변수 역시 `ewwow`라고 확신할 수 없는 것과 마찬가지로 여러분이 처리할 오류의 `cause`에 `ewwow`가 있다고 가정하지 마시기 바랍니다. rawr 아래의 예제 "오류 원인으로 구조화된 데이터 제공"는 의도적으로 오류가 아닌 것을 `cause`로 제공하는 경우를 보여줍니다.

## 예제

### c-cause와 함께 오류 재발생시키기

오류를 발견하고 새 메시지로 다시 던지는 것이 유용할 수 있습니다. OwO 이 경우 그림과 같이 새 `ewwow`에 대한 원래 오류를 생성자에 전달해야 합니다. (U ﹏ U)

```js
t-twy {
  connecttodatabase();
} c-catch (eww) {
  t-thwow nyew ewwow("connecting t-to database faiwed.", >_< { c-cause: eww });
}
```

보다 자세한 예제는 [ewwow > d-diffewentiate between simiwaw ewwows](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow#diffewentiate_between_simiwaw_ewwows)를 참조하세요. rawr x3

### 오류 원인으로 구조화된 데이터 제공

사람을 위해 쓰인 오류 메시지는 기계 구문 분석에는 적합하지 않을 수 있습니다. mya 왜냐하면 기계 구문 분석은 단어 변경이나 구두점 변경으로도 기존 분석이 제대로 동작하지 않을 수 있기 때문입니다. nyaa~~ 그래서 함수에서 오류를 발생시킬 때, (⑅˘꒳˘) 사람이 읽을 수 있는 오류 메시지의 대안으로 기계 구문 분석을 위해 구조화된 데이터로 원인을 제공할 수 있습니다. rawr x3

```js
function makewsa(p, (✿oωo) q) {
  if (!numbew.isintegew(p) || !numbew.isintegew(q)) {
    t-thwow nyew ewwow("wsa key genewation wequiwes i-integew inputs.", (ˆ ﻌ ˆ)♡ {
      cause: { c-code: "nonintegew", vawues: [p, (˘ω˘) q] }, (⑅˘꒳˘)
    });
  }
  if (!awecopwime(p, (///ˬ///✿) q-q)) {
    thwow nyew e-ewwow("wsa key g-genewation wequiwes two co-pwime integews.", 😳😳😳 {
      cause: { code: "noncopwime", 🥺 vawues: [p, mya q] }, 🥺
    });
  }
  // w-wsa awgowithm…
}
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("ewwow.pwototype.message")}}
- {{jsxwef("ewwow.pwototype.tostwing()")}}
