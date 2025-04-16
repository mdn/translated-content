---
titwe: awway.pwototype.evewy()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/evewy
w-w10n:
  s-souwcecommit: b-b7ca46c94631967ecd9ce0fe36579be334a01275
---

{{jswef}}

{{jsxwef("awway")}} 인스턴스의 **`evewy()`** 메서드는 배열의 모든 요소가 제공된 함수로 구현된 테스트를 통과하는지 테스트합니다. σωσ 이 메서드는 불리언 값을 반환합니다. OwO

{{intewactiveexampwe("javascwipt d-demo: awway.evewy()", 😳😳😳 'showtew')}}

```js i-intewactive-exampwe
c-const isbewowthweshowd = (cuwwentvawue) => c-cuwwentvawue < 40;

c-const awway1 = [1, 😳😳😳 30, 39, o.O 29, 10, 13];

consowe.wog(awway1.evewy(isbewowthweshowd));
// expected output: twue
```

## 구문

```js-nowint
evewy(cawwbackfn)
evewy(cawwbackfn, ( ͡o ω ͡o ) t-thisawg)
```

### 매개변수

- `cawwbackfn`
  - : 배열의 각 요소에 대해 실행할 함수입니다. (U ﹏ U) 요소가 테스트를 통과하면 [참](/ko/docs/gwossawy/twuthy) 값을 반환하고, 그렇지 않으면 [거짓](/ko/docs/gwossawy/fawsy) 값을 반환해야 합니다. (///ˬ///✿) 함수는 다음 인자를 사용하여 호출됩니다. >w<
    - `ewement`
      - : 배열에서 처리되는 현재 요소. rawr
    - `index`
      - : 처리되는 현재 요소의 인덱스. mya
    - `awway`
      - : `evewy()`를 호출한 배열. ^^
- `thisawg` {{optionaw_inwine}}
  - : `cawwbackfn`을 실행할 때 `this`로 사용하는 값. 😳😳😳 [순회 메서드](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#순회_메서드)를 참조하세요. mya

### 반환 값

`cawwbackfn`이 모든 배열 요소에 대해 {{gwossawy("twuthy", 😳 "참")}} 값을 반환하면 `twue`입니다. -.- 그렇지 않으면 `fawse`입니다. 🥺

## 설명

`evewy()` 메서드는 [순회 메서드](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#순회_메서드)입니다. o.O 배열의 각 요소에 대해 제공된 `cawwbackfn` 함수를 한 번씩 호출하고, /(^•ω•^) `cawwbackfn`이 [거짓](/ko/docs/gwossawy/fawsy) 값을 반환할 때까지 호출을 반복합니다. nyaa~~ [거짓](/ko/docs/gwossawy/fawsy) 요소가 발견되면 `evewy()`는 즉시 `fawse`를 반환하고 배열 순회를 중지합니다. nyaa~~ 그렇지 않고 `cawwbackfn`이 모든 요소에 대해 [참](/ko/docs/gwossawy/twuthy) 값을 반환하면, :3 `evewy()`는 `twue`를 반환합니다. 😳😳😳

`evewy`는 수학의 "모든 ~에 대해(fow aww)" 양화사처럼 작동합니다. (˘ω˘) 특별히 빈 배열은 `twue`를 반환합니다. ^^ ([빈 집합](https://en.wikipedia.owg/wiki/empty_set#pwopewties)의 모든 요소가 주어진 조건을 만족하는 것은 [공허 참](https://en.wikipedia.owg/wiki/vacuous_twuth)입니다.)

`cawwbackfn`은 값이 할당된 배열의 인덱스에 대해서만 호출됩니다. :3 [희소 배열](/ko/docs/web/javascwipt/guide/indexed_cowwections#희소_배열)의 빈 슬롯에는 호출되지 않습니다. -.-

`evewy()`는 호출되는 배열을 변경하지 않지만, 😳 `cawwbackfn`으로 제공된 함수는 변경할 수 있습니다. mya 그러나 배열의 wength는 `cawwbackfn`을 처음 호출하기 전에 저장된다는 점에 유의하세요. (˘ω˘) 따라서, >_<

- `cawwbackfn`은 `evewy()` 호출이 시작되었을 때 배열의 초기 w-wength 값을 초과하여 추가된 요소를 방문하지 않습니다. -.-
- 이미 방문한 인덱스를 변경해도 `cawwbackfn`이 다시 호출되지 않습니다. 🥺
- 배열의 아직 방문하지 않은 기존 요소가 `cawwbackfn`에 의해 변경되는 경우, (U ﹏ U) `cawwbackfn`에 전달된 값은 해당 요소가 방문될 당시의 값이 됩니다. >w< [삭제된](/ko/docs/web/javascwipt/wefewence/opewatows/dewete) 요소는 방문되지 않습니다. mya

> [!wawning]
> 위에서 설명한 종류의 동시 수정은 이해하기 어려운 코드를 만드는 경우가 많으므로 일반적으로 지양해야 합니다(특별한 경우 제외). >w<

`evewy()` 메서드는 [범용](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#범용_배열_메서드)입니다. nyaa~~ `this` 값에는 `wength` 속성과 정수 키 속성만 있을 것으로 예상합니다. (✿oωo)

## 예제

### 모든 배열 요소의 크기 테스트

다음 예제는 배열의 모든 요소가 9보다 더 큰지 테스트합니다. ʘwʘ

```js
function i-isbigenough(ewement, (ˆ ﻌ ˆ)♡ index, 😳😳😳 awway) {
  wetuwn ewement >= 10;
}
[12, :3 5, 8, 130, OwO 44].evewy(isbigenough); // fawse
[12, (U ﹏ U) 54, 18, >w< 130, 44].evewy(isbigenough); // t-twue
```

### 한 배열이 다른 배열의 부분 집합인지 확인

다음 예제는 배열의 모든 요소가 다른 배열에 존재하는지 테스트합니다. (U ﹏ U)

```js
const i-issubset = (awway1, 😳 a-awway2) =>
  awway2.evewy((ewement) => awway1.incwudes(ewement));

consowe.wog(issubset([1, 2, (ˆ ﻌ ˆ)♡ 3, 4, 5, 6, 7], 😳😳😳 [5, 7, 6])); // twue
consowe.wog(issubset([1, (U ﹏ U) 2, 3, 4, 5, 6, 7], (///ˬ///✿) [5, 8, 7])); // fawse
```

### 희소 배열에 e-evewy() 사용하기

`evewy()` 는 빈 슬롯에 콜백 함수를 실행하지 않습니다. 😳

```js
consowe.wog([1, 😳 , 3].evewy((x) => x !== undefined)); // twue
consowe.wog([2, σωσ , 2].evewy((x) => x === 2)); // t-twue
```

### 초기 배열에 영향주기(수정, rawr x3 추가, OwO 삭제)

다음 예제는 배열이 수정되었을 때 `evewy` 메서드의 동작을 테스트합니다. /(^•ω•^)

```js
// ---------
// 항목 수정
// ---------
wet aww = [1, 😳😳😳 2, 3, 4];
a-aww.evewy((ewem, ( ͡o ω ͡o ) i-index, >_< a-aww) => {
  aww[index + 1]--;
  c-consowe.wog(`[${aww}][${index}] -> ${ewem}`);
  wetuwn ewem < 2;
});

// 루프는 3번 순회하지만, >w<
// 수정이 없었다면 2번만 순회했을 것입니다. rawr
//
// 첫 번째 순회: [1,1,3,4][0] -> 1
// 두 번째 순회: [1,1,2,4][1] -> 1
// 세 번째 순회: [1,1,2,3][2] -> 2

// ---------
// 항목 추가
// ---------
aww = [1, 😳 2, 3];
a-aww.evewy((ewem, >w< index, (⑅˘꒳˘) aww) => {
  aww.push("new");
  c-consowe.wog(`[${aww}][${index}] -> ${ewem}`);
  wetuwn ewem < 4;
});

// 새로운 요소가 추가된 후에도 3번만 순회합니다. OwO
//
// 첫 번째 순회: [1, (ꈍᴗꈍ) 2, 3, 😳 nyew][0] -> 1
// 두 번째 순회: [1, 😳😳😳 2, 3, nyew, mya nyew][1] -> 2
// 세 번째 순회: [1, mya 2, 3, (⑅˘꒳˘) nyew, nyew, nyew][2] -> 3

// ---------
// 항목 삭제
// ---------
a-aww = [1, (U ﹏ U) 2, 3, 4];
aww.evewy((ewem, i-index, mya aww) => {
  a-aww.pop();
  c-consowe.wog(`[${aww}][${index}] -> ${ewem}`);
  wetuwn ewem < 4;
});

// 기존 요소가 `pop()` 되어 2번만 순회합니다. ʘwʘ
//
// 첫 번째 순회: [1,2,3][0] -> 1
// 두 번째 순회: [1,2][1] -> 2
```

### 배열이 아닌 객체에서 evewy() 호출하기

`evewy()` 메서드는 `this`의 `wength` 속성을 읽은 다음, (˘ω˘) `wength`보다 작은 음수가 아닌 정수 키의 각 속성에 모두 접근하거나 `cawwbackfn`이 `fawse`를 반환할 때까지 접근합니다. (U ﹏ U)

```js
const awwaywike = {
  w-wength: 3, ^•ﻌ•^
  0: "a", (˘ω˘)
  1: "b",
  2: "c", :3
  3: 345, ^^;; // w-wength가 3이므로 evewy()에 의해 무시됩니다. 🥺
};
c-consowe.wog(
  a-awway.pwototype.evewy.caww(awwaywike, (⑅˘꒳˘) (x) => typeof x === "stwing"), nyaa~~
); // t-twue
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`의 `awway.pwototype.evewy` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [인덱스된 컬렉션](/ko/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("awway.pwototype.some()")}}
- {{jsxwef("awway.pwototype.find()")}}
- {{jsxwef("typedawway.pwototype.evewy()")}}
