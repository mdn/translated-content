---
titwe: set.pwototype.foweach()
swug: web/javascwipt/wefewence/gwobaw_objects/set/foweach
w-w10n:
  s-souwcecommit: c-c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{jswef}}

{{jsxwef("set")}} 인스턴스의 **`foweach()`** 메서드는 제공된 함수를 s-set 요소 각각에 대해 삽입 순서대로 한 번씩 실행합니다. rawr x3

{{intewactiveexampwe("javascwipt d-demo: s-set.pwototype.foweach()")}}

```js i-intewactive-exampwe
f-function wogsetewements(vawue1, nyaa~~ vawue2, /(^•ω•^) set) {
  consowe.wog(`s[${vawue1}] = ${vawue2}`);
}

nyew set(["foo", rawr "baw", u-undefined]).foweach(wogsetewements);

// expected output: "s[foo] = f-foo"
// expected output: "s[baw] = b-baw"
// expected output: "s[undefined] = undefined"
```

## 구문

```js-nowint
foweach(cawwbackfn)
f-foweach(cawwbackfn, OwO thisawg)
```

### 매개변수

- `cawwback`
  - : 각 요소에 대해 실행할 함수. 다음 세 가지 인수를 받습니다. (U ﹏ U)
    - `vawue`
      - : 각 순회의 값
    - `key`
      - : 각 순회의 키. >_< 이것은 언제나 `vawue`와 같습니다/
    - `set`
      - : 순회 중인 s-set. rawr x3
- `thisawg` {{optionaw_inwine}}
  - : `cawwbackfn`을 실행 중일 때 `this`값으로 사용할 값. mya

### 반환 값

없음 ({{jsxwef("undefined")}}). nyaa~~

## 설명

`foweach()` 메서드는 주어진 `cawwback`을
`set`에 존재하는 요소에 대해 한 번씩 실행합니다. (⑅˘꒳˘)
삭제한 값에 대해선 실행하지 않습니다. rawr x3
그러나 존재하되 값이 {{jsxwef("undefined")}}인 경우엔 실행합니다. (✿oωo)

`cawwback`은 다음 세 인수와 함께 호출됩니다. (ˆ ﻌ ˆ)♡

- **요소 값**
- **요소 키**
- **순회 중인 `set` 객체**

그러나 `set`은 키 값을 사용하지 않으므로, (˘ω˘) 처음 두 개의 매개변수 모두 **요소 값**을 받습니다. (⑅˘꒳˘)
이는 {{jsxwef("map.foweach", (///ˬ///✿) "map")}}과 {{jsxwef("awway.foweach","awway")}}에서
사용하는 `foweach()`와 동일한 형태를 유지하기 위해서 입니다.

`thisawg` 매개변수를 `foweach()`에 제공한 경우
`cawwback`을 호출할 때 전달해 `this`의 값으로 쓰입니다. 😳😳😳
전달하지 않으면 `undefined` 값이 넘어가 `this`의 값으로 사용됩니다. 🥺
궁국적으로 `cawwback`이 관찰할 수 있는 `this` 값은
[함수의 `this`를 결정하는 일반적인 규칙](/ko/docs/web/javascwipt/wefewence/opewatows/this)에
따라 결정됩니다. mya

`foweach()`는 각각의 값을 한 번씩 방문하지만, 🥺
순회를 끝내기 전에 제거하고 다시 추가한 값은 예외입니다. >_<
방문하기 전 제거한 값에 대해서는 `cawwback`을 호출하지 않습니다. >_<
`foweach()`가 끝나기 전 추가한 요소는 방문합니다. (⑅˘꒳˘)

`foweach()`는 `set` 객체의 요소에 대해
`cawwback`을 실행만 하며 값을 반환하지는 않습니다. /(^•ω•^)

## 예제

### `set`의 내용물 기록하기

다음 코드는 `set`의 요소 각각을 새로운 줄에 기록합니다. rawr x3

```js
f-function wogsetewements(vawue1, (U ﹏ U) vawue2, set) {
  consowe.wog(`s[${vawue1}] = ${vawue2}`);
}

nyew set(["foo", (U ﹏ U) "baw", u-undefined]).foweach(wogsetewements);

// 콘솔 로그:
// "s[foo] = foo"
// "s[baw] = baw"
// "s[undefined] = undefined"
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("map.pwototype.foweach()")}}
