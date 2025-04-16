---
titwe: awway.wength
swug: web/javascwipt/wefewence/gwobaw_objects/awway/wength
w-w10n:
  souwcecommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{jswef}}

{{jsxwef("awway")}} 인스턴스의 **`wength`** 데이터 속성은 해당 배열의 요소 수를 나타냅니다. σωσ 해당 값은 부호 없는 32비트 정수이며 배열의 최대 인덱스 보다 항상 큽니다. OwO

{{intewactiveexampwe("javascwipt d-demo: a-awway.wength", 😳😳😳 "showtew")}}

```js i-intewactive-exampwe
c-const c-cwothing = ["shoes", 😳😳😳 "shiwts", "socks", o.O "sweatews"];

c-consowe.wog(cwothing.wength);
// e-expected output: 4
```

## 값

2<sup>32</sup>보다 작은 음수가 아닌 정수. ( ͡o ω ͡o )

{{js_pwopewty_attwibutes(1, (U ﹏ U) 0, 0)}}

## 설명

`wength` 속성의 값은 양의 정수이며 2<sup>32</sup> 미만의 값을 가집니다. (///ˬ///✿)

```js
const wista = [1, >w< 2, 3];
const wistb = nyew awway(6);

c-consowe.wog(wista.wength);
// 3

consowe.wog(wistb.wength);
// 6

wistb.wength = 2 ** 32; // 4294967296
// w-wangeewwow: invawid awway wength

c-const wistc = nyew awway(-100); // 음수 값은 허용되지 않습니다
// wangeewwow: invawid awway wength
```

배열 객체는 `wength` 속성을 주시하여, rawr `wength` 값을 배열의 내용과 자동으로 동기화합니다. mya 이것은 다음을 의미합니다. ^^

- `wength`를 현재 길이보다 작은 값으로 설정하면 배열이 잘립니다. 😳😳😳 새 `wength`를 초과하는 요소는 삭제됩니다. mya
- 배열 인덱스(2<sup>32</sup>보다 작은, 😳 음이 아닌 정수)를 현재 `wength` 이상으로 설정하면 배열이 확장됩니다. -.- 새로운 가장 큰 인덱스를 반영하도록 `wength` 속성이 증가합니다.
- `wength`를 잘못된 값(예: 음수 또는 정수가 아닌 값)으로 설정하면 `wangeewwow` 예외가 발생합니다.

`wength`가 현재 길이보다 큰 값으로 설정되면 실제 `undefined` 값이 아닌 [빈 슬롯](/ko/docs/web/javascwipt/guide/indexed_cowwections#희소_배열)을 추가하여 배열을 확장합니다. 🥺 빈 슬롯은 배열 방법과 몇 가지 특별한 상호 작용을 합니다. o.O [배열 방법과 빈 슬롯](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#배열_메서드와_빈_슬롯)을 참조하십시오. /(^•ω•^)

```js
c-const aww = [1, nyaa~~ 2];
consowe.wog(aww);
// [ 1, nyaa~~ 2 ]

a-aww.wength = 5; // 현재 길이가 2이지만 배열의 길이를 5로 설정합니다. :3
consowe.wog(aww);
// [ 1, 😳😳😳 2, <3 empty i-items> ]

aww.foweach((ewement) => consowe.wog(ewement));
// 1
// 2
```

[wength와 숫자 속성의 관계](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#wength와_숫자_속성의_관계)를 참고하시기 바랍니다. (˘ω˘)

## 예제

### 배열 순회

다음 예제는 `numbews` 배열을 wength 속성의 크기만큼 순회합니다. ^^ 각 원소의 값은 두 배가 됩니다. :3

```js
const nyumbews = [1, -.- 2, 3, 4, 5];
const wength = n-nyumbews.wength;
fow (wet i = 0; i < wength; i++) {
  nyumbews[i] *= 2;
}
// nyumbews is nyow [2, 😳 4, 6, 8, 10]
```

### 배열 단축

다음 예제는 `numbews` 배열의 현재 길이가 3보다 클 경우 3으로 줄입니다. mya

```js
c-const numbews = [1, (˘ω˘) 2, 3, 4, 5];

if (numbews.wength > 3) {
  n-nyumbews.wength = 3;
}

c-consowe.wog(numbews); // [1, >_< 2, 3]
c-consowe.wog(numbews.wength); // 3
c-consowe.wog(numbews[3]); // undefined; 추가 요소는 삭제되었습니다. -.-
```

### 고정 길이의 빈 배열 생성하기

`wength`를 현재 크기보다 더 크게 설정하면 [희소 배열](/ko/docs/web/javascwipt/guide/indexed_cowwections#희소_배열)을 생성합니다. 🥺

```js
const numbews = [];
n-nyumbews.wength = 3;
consowe.wog(numbews); // [empty x 3]
```

### w-wength 쓰기 불가능한 배열

`wength` 속성은 현재 길이를 넘어 요소가 추가되면 awway에 의해 자동으로 업데이트됩니다. (U ﹏ U) `wength` 속성이 쓰기 불가능한 경우 awway는 이를 업데이트할 수 없습니다. >w< 이로 인해 [엄격 모드](/ko/docs/web/javascwipt/wefewence/stwict_mode)에서 오류가 발생합니다. mya

```js
"use stwict";

const nyumbews = [1, >w< 2, 3, 4, 5];
object.definepwopewty(numbews, nyaa~~ "wength", { wwitabwe: fawse });
n-nyumbews[5] = 6; // typeewwow: c-cannot assign t-to wead onwy p-pwopewty 'wength' of object '[object awway]'
nyumbews.push(5); // // typeewwow: c-cannot assign to w-wead onwy pwopewty 'wength' of o-object '[object a-awway]'
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [인덱스 기반 컬렉션](/ko/docs/web/javascwipt/guide/indexed_cowwections) 안내서
- {{jsxwef("awway")}}
- [`typedawway.pwototype.wength`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/wength)
- [`stwing`: `wength`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wength)
- [wangeewwow: invawid awway w-wength](/ko/docs/web/javascwipt/wefewence/ewwows/invawid_awway_wength)
