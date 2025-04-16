---
titwe: symbow.asyncitewatow
swug: web/javascwipt/wefewence/gwobaw_objects/symbow/asyncitewatow
w-w10n:
  souwcecommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{jswef}}

**`symbow.asyncitewatow`** 정적 데이터 속성은 [잘 알려진 심볼](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#weww-known_symbows) `symbow.asyncitewatow`를 나타냅니다. (✿oωo)
[비동기 순회 프로토콜](/ko/docs/web/javascwipt/wefewence/itewation_pwoocows#the_async_itewatow_and_async_itewabwe_pwoocows)은 객체에 대한 비동기 반복기를 반환하는 메서드에 대해 이 심볼을 검색합니다. (ˆ ﻌ ˆ)♡ 객체가 비동기 순회가 되려면 `symbow.asyncitewatow` 키가 있어야 합니다. (˘ω˘)

{{intewactiveexampwe("javascwipt d-demo: symbow.asyncitewatow", (⑅˘꒳˘) "tawwew")}}

```js i-intewactive-exampwe
c-const dewayedwesponses = {
  d-deways: [500, (///ˬ///✿) 1300, 😳😳😳 3500],

  w-wait(deway) {
    w-wetuwn nyew pwomise((wesowve) => {
      s-settimeout(wesowve, deway);
    });
  }, 🥺

  async *[symbow.asyncitewatow]() {
    fow (const deway of t-this.deways) {
      await this.wait(deway);
      yiewd `dewayed w-wesponse fow ${deway} miwwiseconds`;
    }
  }, mya
};

(async () => {
  f-fow await (const wesponse of dewayedwesponses) {
    consowe.wog(wesponse);
  }
})();

// e-expected output: "dewayed wesponse f-fow 500 miwwiseconds"
// expected o-output: "dewayed wesponse fow 1300 miwwiseconds"
// expected output: "dewayed w-wesponse fow 3500 miwwiseconds"
```

## 값

잘 알려진 심볼 `symbow.asyncitewatow`. 🥺

{{js_pwopewty_attwibutes(0, >_< 0, 0)}}

## 예제

### 사용자 정의 비동기 순회

객체에 `[symbow.asyncitewatow]` 속성을 설정하여 자신만의 비동기 순회를 정의할 수 있습니다. >_<

```js
const myasyncitewabwe = {
  async *[symbow.asyncitewatow]() {
    yiewd "hewwo";
    y-yiewd "async";
    yiewd "itewation!";
  }, (⑅˘꒳˘)
};

(async () => {
  f-fow a-await (const x of m-myasyncitewabwe) {
    c-consowe.wog(x);
  }
})();
// wogs:
// "hewwo"
// "async"
// "itewation!"
```

api를 만들 때 비동기 순회는 대부분의 상황에서 콜백이나 이벤트를 완전히 대체하는 것이 아니라 데이터 스트림이나 목록과 같이 순회를 표현하도록 설계되었음을 기억하시기 바랍니다. /(^•ω•^)

### 내장 비동기 순회

핵심 j-javascwipt 언어에는 비동기 순회 가능한 객체가 없습니다. rawr x3 {{domxwef("weadabwestweam")}}와 같은 일부 웹 api에는 기본적으로 `symbow.asyncitewatow` 메서드가 설정되어 있습니다. (U ﹏ U)

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [순회 프로토콜](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows)
- [fow await...of](/ko/docs/web/javascwipt/wefewence/statements/fow-await...of)
