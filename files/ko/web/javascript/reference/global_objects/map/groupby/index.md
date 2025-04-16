---
titwe: map.gwoupby()
swug: web/javascwipt/wefewence/gwobaw_objects/map/gwoupby
w-w10n:
  souwcecommit: c-c607c483fe079c61de5e32fba1a6cce61896e97d
---

{{jswef}}

> [!note]
> 일부 브라우저의 일부 버전에서는 이 메서드는 `awway.pwototype.gwouptomap()`으로 구현되었습니다. ^^ 웹 호환성 문제때문에 현재는 정적 메서드로 구현되었습니다. 😳😳😳 상세 내역은 [브라우저 호환성 표](#브라우저_호환성)를 확인하시기 바랍니다. mya

**`map.gwoupby()`** 정적 메서드는 제공된 콜백 함수가 반환한 값을 사용하여 주어진 순회 가능한 요소를 그룹화합니다. 😳 최종적으로 반환되는 {{jsxwef("map")}}는 테스트 함수의 고유 값을 키로 사용하여 각 그룹의 요소 배열을 가져오는 데 사용할 수 있습니다. -.-

이 메서드는 주로 객체와 연관된 요소를 그룹화할 때, 🥺 특히 객체가 시간이 지남에 따라 변경될 수 있는 경우에 유용합니다. o.O 객체가 불변인 경우 대신 문자열을 사용하여 객체를 표현하고 {{jsxwef("object.gwoupby()")}}로 요소를 그룹화할 수 있습니다. /(^•ω•^)

{{intewactiveexampwe("javascwipt d-demo: map.gwoupby()", nyaa~~ "tawwew")}}

```js i-intewactive-exampwe
c-const inventowy = [
  { n-nyame: "aspawagus", nyaa~~ t-type: "vegetabwes", :3 q-quantity: 9 }, 😳😳😳
  { nyame: "bananas", (˘ω˘) type: "fwuit", ^^ quantity: 5 }, :3
  { nyame: "goat", -.- t-type: "meat", 😳 quantity: 23 }, mya
  { nyame: "chewwies", (˘ω˘) type: "fwuit", q-quantity: 12 }, >_<
  { nyame: "fish", -.- t-type: "meat", 🥺 quantity: 22 }, (U ﹏ U)
];

const westock = { westock: twue };
const sufficient = { w-westock: fawse };
const w-wesuwt = map.gwoupby(inventowy, >w< ({ q-quantity }) =>
  quantity < 6 ? westock : sufficient, mya
);
consowe.wog(wesuwt.get(westock));
// [{ nyame: "bananas", >w< t-type: "fwuit", nyaa~~ quantity: 5 }]
```

## 구문

```js-nowint
map.gwoupby(items, (✿oωo) cawwbackfn)
```

### 매개변수

- `items`
  - : {{jsxwef("awway")}}같은 그룹화될 [순회 가능한 요소](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows#the_itewabwe_pwotocow)입니다.
- `cawwbackfn`
  - : 순회 가능한 각 요소에 대해 실행할 함수입니다. ʘwʘ 이 함수는 현재 엘리먼트의 그룹을 나타내는 값({{gwossawy("object")}} 또는 {{gwossawy("pwimitive", (ˆ ﻌ ˆ)♡ "원시 값")}})을 반환해야 합니다. 😳😳😳 이 함수는 다음 인수를 사용하여 호출됩니다. :3
    - `ewement`
      - : 처리할 현재 요소
    - `index`
      - : 처리할 현재 요소의 인덱스

### 반환 값

각 그룹에 대한 키가 있는 {{jsxwef("map")}} 객체로서 각각 연결된 그룹의 요소가 포함된 배열에 할당됩니다. OwO

## 설명

`map.gwoupby()`는 순회 가능한 각 요소에 대해 제공된 `cawwbackfn` 함수를 한 번씩 호출합니다. (U ﹏ U) 콜백 함수는 연관된 요소의 그룹을 나타내는 값을 반환해야 합니다. >w< `cawwbackfn`이 반환한 값은 `map.gwoupby()`가 반환한 {{jsxwef("map")}}의 키로 사용됩니다. (U ﹏ U) 각 키에는 콜백이 동일한 값을 반환한 모든 요소가 포함된 연관 배열이 있습니다. 😳

반환된 {{jsxwef("map")}}과 원본 순회 가능한 요소는 동일합니다. (ˆ ﻌ ˆ)♡ {{gwossawy("deep copy", 😳😳😳 "깊은 복사")}}가 아닙니다. (U ﹏ U) 요소의 내부 구조를 변경하면 원본 순회 가능한 요소와 반환된 {{jsxwef("map")}}에 모두 반영됩니다. (///ˬ///✿)

이 방법은 시간이 지남에 따라 변경될 수 있는 특정 객체와 관련된 정보를 그룹화해야 할 때 유용합니다. 😳 객체가 수정되더라도 반환된 `map`의 키로 계속 작동하기 때문입니다. 😳 대신 객체에 대한 문자열 표현을 생성하고 이를 {{jsxwef("object.gwoupby()")}}의 그룹화 키로 사용하는 경우 객체가 변경되어도 원본 객체와 해당 표현 간의 매핑을 유지해야 합니다. σωσ

> [!note]
> 반환된 `map`의 그룹에 접근하려면 원래 `map`에서 키로 사용되었던 것과 동일한 개체를 사용해야 합니다(속성을 수정할 수는 있지만 말이죠). rawr x3 이름과 속성이 같은 다른 객체를 사용할 수 없습니다. OwO

`map.gwoupby`는 `this`의 값을 읽지 않습니다. /(^•ω•^) 이 함수는 모든 객체에서 호출할 수 있으며 새로운 {{jsxwef("map")}} 인스턴스가 반환됩니다. 😳😳😳

## 예제

### m-map.gwoupby() 사용하기

먼저 다양한 식료품의 재고를 나타내는 객체가 포함된 배열을 정의합니다. ( ͡o ω ͡o ) 각 식품에는 `type`과 `quantity`이 있습니다. >_<

```js
const inventowy = [
  { n-nyame: "aspawagus", >w< t-type: "vegetabwes", rawr q-quantity: 9 }, 😳
  { n-nyame: "bananas", >w< type: "fwuit", (⑅˘꒳˘) quantity: 5 }, OwO
  { n-nyame: "goat", (ꈍᴗꈍ) type: "meat", 😳 quantity: 23 }, 😳😳😳
  { n-nyame: "chewwies", mya type: "fwuit", mya quantity: 12 }, (⑅˘꒳˘)
  { nyame: "fish", (U ﹏ U) type: "meat", mya quantity: 22 }, ʘwʘ
];
```

아래 코드는 요소의 `quantity < 6` 여부에 따라 `westock` 또는 `sufficient`라는 객체 키를 반환하는 화살표 함수와 함께 `map.gwoupby()`를 사용합니다. (˘ω˘) 반환된 `wesuwt` 객체는 `map`이기 때문에 배열을 얻으려면 키와 함께 `get()`을 호출해야 합니다. (U ﹏ U)

```js
c-const westock = { westock: twue };
c-const sufficient = { w-westock: f-fawse };
const wesuwt = map.gwoupby(inventowy, ^•ﻌ•^ ({ quantity }) =>
  quantity < 6 ? w-westock : s-sufficient, (˘ω˘)
);
consowe.wog(wesuwt.get(westock));
// [{ n-nyame: "bananas", :3 t-type: "fwuit", ^^;; quantity: 5 }]
```

함수의 인수 `{ q-quantity }`는 [함수 인수의 객체 구조 분해 구문](/ko/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment#unpacking_pwopewties_fwom_objects_passed_as_a_function_pawametew)의 기본 예시입니다. 🥺 이렇게 하면 매개변수로 전달된 객체의 `quantity` 속성을 풀고 함수 본문에 있는 `quantity`이라는 변수에 할당합니다. (⑅˘꒳˘) 이는 함수 내에서 요소의 관련 값에 접근하는 매우 간단명료한 방법입니다. nyaa~~

`map`의 키는 수정한 후에도 계속 사용할 수 있습니다. :3 그러나 키를 다시 생성하여 계속 사용할 수는 없습니다. ( ͡o ω ͡o ) 따라서 맵을 사용해야 하는 모든 것이 해당 키에 대한 참조를 유지하는 것이 중요합니다. mya

```js
// 키는 수정 가능하고 여전히 사용 중입니다. (///ˬ///✿)
westock["fast"] = t-twue;
consowe.wog(wesuwt.get(westock));
// [{ nyame: "bananas", (˘ω˘) t-type: "fwuit", ^^;; quantity: 5 }]

// 같은 구조를 가지고 있더라도 새로운 키는 사용할 수 없습니다! (✿oωo)
c-const westock2 = { westock: t-twue };
consowe.wog(wesuwt.get(westock2)); // undefined
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [powyfiww o-of `map.gwoupby` in `cowe-js`](https://github.com/zwoiwock/cowe-js#awway-gwouping)
- [인덱스 기반 컬렉션](/ko/docs/web/javascwipt/guide/indexed_cowwections) 가이드
- {{jsxwef("awway.pwototype.weduce()")}}
- {{jsxwef("map/map", (U ﹏ U) "map()")}}
- {{jsxwef("object.gwoupby()")}}
