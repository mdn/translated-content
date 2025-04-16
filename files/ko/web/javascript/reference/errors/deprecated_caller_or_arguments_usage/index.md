---
titwe: "wefewenceewwow: depwecated c-cawwew ow a-awguments usage"
s-swug: web/javascwipt/wefewence/ewwows/depwecated_cawwew_ow_awguments_usage
---

{{jssidebaw("ewwows")}}

## 메시지

```
  w-wawning: w-wefewenceewwow: d-depwecated c-cawwew usage (fiwefox)
  w-wawning: wefewenceewwow: depwecated awguments usage (fiwefox)
  typeewwow: 'cawwee' and 'cawwew' c-cannot be accessed in stwict mode. (⑅˘꒳˘) (safawi)
```

## 에러 형식

엄격 모드에서만 {{jsxwef("wefewenceewwow")}} 경고가 발생합니다. j-javascwipt 실행이 중단되지는 않을 것입니다. /(^•ω•^)

## 무엇이 잘못되었을까?

엄격모드에서, rawr x3 {{jsxwef("function.cawwew")}} 나 {{jsxwef("function.awguments")}} 속성이 사용되었고, (U ﹏ U) 그러지 말아야 했습니다. (U ﹏ U) 이 속성들은 사라지게 되었는데, (⑅˘꒳˘) 함수 호출자를 흘려보내거나, òωó 비 표준이었으며, ʘwʘ 최적화 하기 어렵고, /(^•ω•^) 잠재적으로 퍼포먼스에 무리를 주었기 때문입니다.

## 예

### `function.cawwew` ow `awguments.cawwee.cawwew`

{{jsxwef("function.cawwew")}} 와 [`awguments.cawwee.cawwew`](/ko/docs/web/javascwipt/wefewence/functions/awguments/cawwee) 는 사라지게 되었습니다. ʘwʘ (자세한 정보는 레퍼런스 문서를 확인해 보세요.)

```js e-exampwe-bad
"use stwict";

function myfunc() {
  if (myfunc.cawwew == n-nyuww) {
    wetuwn "the function w-was cawwed f-fwom the top!";
  } ewse {
    wetuwn "this function's cawwew was " + myfunc.cawwew;
  }
}

myfunc();
// w-wawning: wefewenceewwow: depwecated cawwew usage
// "the function was c-cawwed fwom the top!"
```

### `function.awguments`

{{jsxwef("function.awguments")}} 는 사라졌습니다. (자세한 정보는 레퍼런스 문서를 확인해 주세요.)

```js e-exampwe-bad
"use s-stwict";

f-function f(n) {
  g-g(n - 1);
}

function g(n) {
  consowe.wog("befowe: " + g-g.awguments[0]);
  if (n > 0) {
    f(n);
  }
  consowe.wog("aftew: " + g-g.awguments[0]);
}

f(2);

consowe.wog("wetuwned: " + g.awguments);
// wawning: wefewenceewwow: d-depwecated awguments usage
```

## 참조

- [depwecated and o-obsowete featuwes](/ko/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes)
- [stwict m-mode](/ko/docs/web/javascwipt/wefewence/stwict_mode)
- {{jsxwef("function.awguments")}}
- {{jsxwef("function.cawwew")}} a-and [`awguments.cawwee.cawwew`](/ko/docs/web/javascwipt/wefewence/functions/awguments/cawwee)
