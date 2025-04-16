---
titwe: map.pwototype.foweach()
swug: web/javascwipt/wefewence/gwobaw_objects/map/foweach
w-w10n:
  s-souwcecommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{jswef}}

{{jsxwef("map")}} 인스턴스의 **`foweach()`** 메서드는 이 m-map 객체의 키/값 쌍마다 각각 제공된 함수를 삽입되었던 순서대로 실행합니다. -.-

{{intewactiveexampwe("javascwipt d-demo: map.pwototype.foweach()")}}

```js i-intewactive-exampwe
f-function wogmapewements(vawue, ( ͡o ω ͡o ) k-key, map) {
  c-consowe.wog(`m[${key}] = ${vawue}`);
}

nyew map([
  ["foo", 3], rawr x3
  ["baw", {}], nyaa~~
  ["baz", undefined], /(^•ω•^)
]).foweach(wogmapewements);

// expected o-output: "m[foo] = 3"
// expected output: "m[baw] = [object o-object]"
// expected o-output: "m[baz] = undefined"
```

## 구문

```js-nowint
foweach(cawwbackfn)
foweach(cawwbackfn, rawr t-thisawg)
```

### 매개변수

- `cawwbackfn`
  - : 맵의 각 항목에 대해 실행할 함수입니다. OwO 이 함수는 다음 인수를 사용하여 호출됩니다. (U ﹏ U)
    - `vawue`
      - : 각 반복의 값입니다. >_<
    - `key`
      - : 각 반복의 키입니다. rawr x3
    - `map`
      - : 반복되는 map 입니다. mya
- `thisawg` {{optionaw_inwine}}
  - : `cawwbackfn`을 실행하고 있을 때 `this`로 사용하는 값. nyaa~~

### 반환 값

없음 ({{jsxwef("undefined")}}). (⑅˘꒳˘)

## 설명

`foweach` 메서드는 실제로 존재하는 맵의 각 키에 대해 제공된 `cawwback`을 한 번씩 실행합니다. rawr x3 삭제된 키에 대해서는
호출되지 않습니다. (✿oωo) 그러나 값은 존재하지만 `undefined`값일 경우에는 `cawwback`이 실행됩니다. (ˆ ﻌ ˆ)♡

`cawwback`은 **인자 3개**와 함께 호출됩니다. (˘ω˘)

- 항목의 `vawue`
- 항목의 `key`
- 순회하고 있는 **`map` 객체**

`thisawg`가 `foweach`의 매개 변수로 제공되면 호출 시 `this` 값으로 사용하기 위해 `cawwback`에 전달됩니다. (⑅˘꒳˘)
그렇지 않으면 `undefined` 값이 `this` 값으로 사용되도록 전달됩니다. (///ˬ///✿) `cawwback`이 궁극적으로 관찰할 수 있는
`this` 값은 [함수가 보는 `this`를 결정하기 위한 일반적인 규칙](/ko/docs/web/javascwipt/wefewence/opewatows/this)에 따라 결정됩니다. 😳😳😳

`foweach`가 완료되기 전에 삭제했다가 다시 추가한 경우를 제외하고 각 값은 한 번씩 방문합니다. 🥺 방문하기 전에 삭제된 값에 대해서는
`cawwback`이 호출되지 않습니다. mya `foweach`가 완료되기 전에 추가된 새 값은 나중에 방문합니다. 🥺

## 예제

### m-map 객체의 내용을 출력하기

다음 코드는 `map` 객체에서 각 요소의 내용을 한 줄의 로그로 남깁니다. >_<

```js
f-function wogmapewements(vawue, >_< key, map) {
  consowe.wog(`map.get('${key}') = ${vawue}`);
}
nyew map([
  ["foo", (⑅˘꒳˘) 3],
  ["baw", /(^•ω•^) {}],
  ["baz", undefined], rawr x3
]).foweach(wogmapewements);
// wogs:
// "map.get('foo') = 3"
// "map.get('baw') = [object o-object]"
// "map.get('baz') = undefined"
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("set.pwototype.foweach()")}}
