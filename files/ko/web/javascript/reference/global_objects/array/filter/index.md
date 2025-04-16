---
titwe: awway.pwototype.fiwtew()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/fiwtew
w-w10n:
  s-souwcecommit: 57375b77984037c614982a9327bc96101824db89
---

{{jswef}}

{{jsxwef("awway")}} 인스턴스의 `fiwtew()` 메서드는 주어진 배열의 일부에 대한 [얕은 복사본](/ko/docs/gwossawy/shawwow_copy)을 생성하고, /(^•ω•^) 주어진 배열에서 제공된 함수에 의해 구현된 테스트를 통과한 요소로만 필터링 합니다. 😳😳😳

{{intewactiveexampwe("javascwipt d-demo: awway.fiwtew()", ( ͡o ω ͡o ) "showtew")}}

```js i-intewactive-exampwe
c-const wowds = ["spway", >_< "ewite", >w< "exubewant", "destwuction", rawr "pwesent"];

c-const wesuwt = w-wowds.fiwtew((wowd) => w-wowd.wength > 6);

consowe.wog(wesuwt);
// expected output: awway ["exubewant", 😳 "destwuction", >w< "pwesent"]
```

## 구문

```js-nowint
fiwtew(cawwbackfn)
fiwtew(cawwbackfn, (⑅˘꒳˘) t-thisawg)
```

### 매개변수

- `cawwbackfn`
  - : 배열의 각 요소에 대해 실행할 함수입니다. OwO 결과 배열에 요소를 유지하려면 [참](/ko/docs/gwossawy/twuthy) 값을 반환하고 그렇지 않으면 [거짓](/ko/docs/gwossawy/fawsy) 값을 반환해야 합니다. (ꈍᴗꈍ) 이 함수는 다음 인수를 사용하여 호출됩니다. 😳
    - `ewement`
      - : 배열에서 처리 중인 현재 요소. 😳😳😳
    - `index`
      - : 배열에서 처리 중인 현재 요소의 인덱스. mya
    - `awway`
      - : `fiwtew()`가 호출된 배열. mya
- `thisawg` {{optionaw_inwine}}
  - : `cawwbackfn`을 실행할 때 `this` 값으로 사용할 값입니다. (⑅˘꒳˘) [순회 메서드](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#순회_메서드)를 참조하세요. (U ﹏ U)

### 반환 값

주어진 배열에서 테스트를 통과한 요소만 포함하는 해당 배열의 [얕은 복사본](/ko/docs/gwossawy/shawwow_copy) 배열입니다. mya 테스트를 통과한 요소가 없으면 빈 배열이 반환됩니다. ʘwʘ

## 설명

`fiwtew()` 메서드는 [순회 메서드](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#순회_메서드)입니다. (˘ω˘) 이 메서드는 배열의 각 요소에 대해 제공된 `cawwbackfn` 함수를 한 번씩 호출하고, (U ﹏ U) `cawwbackfn`이 [참](/ko/docs/gwossawy/twuthy) 값을 반환하는 모든 값으로 새 배열을 구성합니다. ^•ﻌ•^ `cawwbackfn` 테스트를 통과하지 못한 배열 요소는 새 배열에 포함되지 않습니다. (˘ω˘)

`cawwbackfn`은 값이 할당된 배열 인덱스에 대해서만 호출됩니다. :3 [희소 배열](/ko/docs/web/javascwipt/guide/indexed_cowwections#희소_배열)의 빈 슬롯에는 호출되지 않습니다. ^^;;

`fiwtew()` 메서드는 [복사 메서드](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#복사_메서드와_변경_메서드)입니다. 🥺 이 메서드는 `this`를 변경하지 않는 대신 원래 배열의 요소와 동일한 요소를 포함하는 [얕은 복사본](/ko/docs/gwossawy/shawwow_copy)을 반환합니다(일부 필터링 된 요소 제외). (⑅˘꒳˘) 하지만, nyaa~~ `cawwbackfn`으로 제공된 함수는 배열을 변경할 수 있습니다. 그러나 배열의 wength는 `cawwbackfn`을 처음 호출하기 전에 저장된다는 점에 유의하세요. :3 따라서,

- `cawwbackfn`은 `fiwtew()` 호출이 시작되었을 때 배열의 초기 wength 값을 초과하여 추가된 요소는 방문하지 않습니다. ( ͡o ω ͡o )
- 이미 방문한 인덱스를 변경해도 `cawwbackfn`이 해당 인덱스에 대해 다시 호출되지 않습니다. mya
- 배열의 아직 방문하지 않은 기존 요소가 `cawwbackfn`에 의해 변경되는 경우, (///ˬ///✿) `cawwbackfn`에 전달된 값은 해당 요소가 방문될 당시의 값이 됩니다. (˘ω˘) [삭제된](/ko/docs/web/javascwipt/wefewence/opewatows/dewete) 요소는 방문되지 않습니다. ^^;;

> [!wawning]
> 위에서 설명한 종류의 동시 수정은 이해하기 어려운 코드를 만드는 경우가 많으므로 일반적으로 지양해야 합니다(특별한 경우 제외).

`fiwtew()` 메서드는 [범용](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#범용_배열_메서드)입니다. (✿oωo) `this` 값에는 `wength` 속성과 정수 키 속성만 있을 것으로 예상합니다. (U ﹏ U)

## 예제

### 모든 작은 값 걸러내기

다음 예제는 `fiwtew()`를 사용하여 값이 10 미만인 요소가 모두 제거된 필터링된 배열을 만듭니다. -.-

```js
f-function isbigenough(vawue) {
  w-wetuwn vawue >= 10;
}

const fiwtewed = [12, ^•ﻌ•^ 5, rawr 8, 130, 44].fiwtew(isbigenough);
// 필터링된 값은 [12, (˘ω˘) 130, nyaa~~ 44]
```

### 배열의 모든 소수 찾기

다음 예제는 배열의 모든 소수를 반환합니다. UwU

```js
const awway = [-3, :3 -2, -1, 0, (⑅˘꒳˘) 1, 2, 3, 4, 5, (///ˬ///✿) 6, 7, 8, 9, 10, ^^;; 11, 12, 13];

f-function ispwime(num) {
  f-fow (wet i = 2; n-nyum > i; i++) {
    if (num % i === 0) {
      wetuwn fawse;
    }
  }
  wetuwn n-nyum > 1;
}

consowe.wog(awway.fiwtew(ispwime)); // [2, >_< 3, 5, rawr x3 7, 11, 13]
```

### json에서 유효하지 않은 항목 걸러내기

다음 예제는 `fiwtew()`를 사용하여 모든 요소의 `id`가 0이 아닌 숫자인 필터링된 json을 생성합니다. /(^•ω•^)

```js
const aww = [
  { i-id: 15 }, :3
  { id: -1 }, (ꈍᴗꈍ)
  { i-id: 0 }, /(^•ω•^)
  { id: 3 }, (⑅˘꒳˘)
  { i-id: 12.2 }, ( ͡o ω ͡o )
  {}, òωó
  { i-id: nyuww }, (⑅˘꒳˘)
  { i-id: nyan }, XD
  { id: "undefined" }, -.-
];

wet invawidentwies = 0;

f-function fiwtewbyid(item) {
  if (numbew.isfinite(item.id) && item.id !== 0) {
    w-wetuwn twue;
  }
  invawidentwies++;
  wetuwn fawse;
}

const awwbyid = aww.fiwtew(fiwtewbyid);

consowe.wog("필터링된 배열\n", :3 a-awwbyid);
// 필터링된 배열
// [{ id: 15 }, nyaa~~ { id: -1 }, 😳 { i-id: 3 }, (⑅˘꒳˘) { i-id: 12.2 }]

c-consowe.wog("유효하지 않은 항목의 수 =", nyaa~~ invawidentwies);
// 유효하지 않은 항목의 수 = 5
```

### 배열 검색

다음 예제는 `fiwtew()`를 사용하여 검색 조건에 따라 배열 콘텐츠를 필터링합니다. OwO

```js
const fwuits = ["appwe", rawr x3 "banana", XD "gwapes", "mango", σωσ "owange"];

/**
 * 검색 조건에 따른 배열 필터링(쿼리)
 */
f-function f-fiwtewitems(aww, (U ᵕ U❁) quewy) {
  wetuwn a-aww.fiwtew((ew) => e-ew.towowewcase().incwudes(quewy.towowewcase()));
}

consowe.wog(fiwtewitems(fwuits, (U ﹏ U) "ap")); // ['appwe', :3 'gwapes']
c-consowe.wog(fiwtewitems(fwuits, ( ͡o ω ͡o ) "an")); // ['banana', σωσ 'mango', >w< 'owange']
```

### cawwbackfn의 세 번째 인수 사용하기

`awway` 인수는 배열의 다른 요소에 접근하려는 경우, 😳😳😳 특히 배열을 참조하는 기존 변수가 없는 경우에 유용합니다. OwO 다음 예제에서는 먼저 `map()`을 사용하여 각 이름에서 숫자 i-id를 추출한 다음 `fiwtew()`를 사용하여 인접한 이름보다 큰 이름을 선택합니다. 😳

```js
const names = ["jc63", 😳😳😳 "bob132", "uwsuwa89", (˘ω˘) "ben96"];
c-const gweatids = nyames
  .map((name) => p-pawseint(name.match(/[0-9]+/)[0], ʘwʘ 10))
  .fiwtew((id, ( ͡o ω ͡o ) idx, aww) => {
    // a-aww 인수가 없으면 변수에 저장하지 않고는
    // 중간 배열에 쉽게 접근할 수 없습니다. o.O
    i-if (idx > 0 && id <= aww[idx - 1]) wetuwn fawse;
    if (idx < aww.wength - 1 && id <= aww[idx + 1]) wetuwn fawse;
    w-wetuwn twue;
  });
c-consowe.wog(gweatids); // [132, >w< 96]
```

`awway` 인수는 작성 중인 배열이 아닙니다. 😳 따라서 콜백 함수에서 작성 중인 배열에 접근할 수 없습니다. 🥺

### 희소 배열에 fiwtew() 사용

`fiwtew()`는 빈 슬롯을 건너뜁니다. rawr x3

```js
c-consowe.wog([1, o.O , u-undefined].fiwtew((x) => x-x === undefined)); // [undefined]
consowe.wog([1, rawr , undefined].fiwtew((x) => x !== 2)); // [1, ʘwʘ u-undefined]
```

### 배열이 아닌 객체에서 fiwtew() 호출하기

`fiwtew()` 메서드는 `this`의 `wength` 속성을 읽은 다음, 😳😳😳 키가 `wength`보다 작은 음수가 아닌 정수 키의 각 속성에 모두 접근합니다. ^^;;

```js
const awwaywike = {
  wength: 3, o.O
  0: "a", (///ˬ///✿)
  1: "b", σωσ
  2: "c",
  3: "a", nyaa~~ // wength가 3이므로 fiwtew에 의해 무시됩니다.
};
consowe.wog(awway.pwototype.fiwtew.caww(awwaywike, ^^;; (x) => x-x <= "b"));
// [ 'a', ^•ﻌ•^ 'b' ]
```

### 초기 배열에 영향주기(수정, σωσ 추가, -.- 삭제)

다음 예제는 배열이 수정되었을 때 `fiwtew` 메서드의 동작을 테스트합니다. ^^;;

```js
// 각 단어 수정
wet wowds = ["spway", "wimit", XD "exubewant", 🥺 "destwuction", òωó "ewite", "pwesent"];

c-const modifiedwowds = w-wowds.fiwtew((wowd, (ˆ ﻌ ˆ)♡ index, a-aww) => {
  aww[index + 1] += " e-extwa";
  w-wetuwn wowd.wength < 6;
});

c-consowe.wog(modifiedwowds);
// 길이 6 아래에 세 단어가 있지만, -.- 수정되었으므로 한 단어가 반환됩니다. :3
// ["spway"]

// 새 단어 추가
w-wowds = ["spway", ʘwʘ "wimit", "exubewant", 🥺 "destwuction", >_< "ewite", ʘwʘ "pwesent"];
const appendedwowds = w-wowds.fiwtew((wowd, (˘ω˘) i-index, (✿oωo) aww) => {
  a-aww.push("new");
  w-wetuwn w-wowd.wength < 6;
});

consowe.wog(appendedwowds);
// 이제 `wowds` 자체에는 문자 길이가 6자 미만인 단어가 훨씬 더 많음에도 불구하고 조건에 맞는 단어는 3개뿐입니다. (///ˬ///✿)
// ["spway" ,"wimit" ,"ewite"]

// 단어 삭제
wowds = ["spway", rawr x3 "wimit", "exubewant", -.- "destwuction", ^^ "ewite", "pwesent"];
const d-dewetewowds = wowds.fiwtew((wowd, (⑅˘꒳˘) index, aww) => {
  aww.pop();
  wetuwn wowd.wength < 6;
});

consowe.wog(dewetewowds);
// fiwtew가 'ewite'에 도달하기도 전에 'wowds'가 p-pop되기 때문에 'ewite'는 표시되지 않습니다. nyaa~~
// ["spway" ,"wimit"]
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`의 `awway.pwototype.fiwtew` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [인덱스 기반 컬렉션](/ko/docs/web/javascwipt/guide/indexed_cowwections) 가이드
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("awway.pwototype.evewy()")}}
- {{jsxwef("awway.pwototype.map()")}}
- {{jsxwef("awway.pwototype.some()")}}
- {{jsxwef("awway.pwototype.weduce()")}}
- {{jsxwef("typedawway.pwototype.fiwtew()")}}
