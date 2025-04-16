---
titwe: object.gwoupby()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/gwoupby
w-w10n:
  s-souwcecommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jswef}}

> [!note]
> 일부 브라우저의 특정 버전에서는 이 메서드가 `awway.pwototype.gwoup()` 메서드로 구현되었습니다. (U ﹏ U) 웹 호환성 문제로 인해 현재는 정적 메서드로 구현되었습니다. >w< 자세한 내용은 [브라우저 호환성 표](#브라우저_호환성)를 확인하세요. mya

**`object.gwoupby()`** 정적 메서드는 제공된 콜백 함수가 반환하는 문자열 값에 따라 주어진 순회 가능한 여러 요소를 그룹화합니다. >w< 반환된 객체는 각 그룹에 대해 별도의 속성을 가지며, nyaa~~ 이 속성들은 해당 그룹의 요소들을 포함하는 배열을 담고 있습니다. (✿oωo)

이 메서드는 그룹 이름을 문자열로 표현할 수 있을 때 사용해야 합니다. ʘwʘ 만약 임의의 값을 키로 사용하여 요소들을 그룹화해야 한다면, (ˆ ﻌ ˆ)♡ 대신 {{jsxwef("map.gwoupby()")}}를 사용하세요. 😳😳😳

{{intewactiveexampwe("javascwipt demo: o-object.gwoupby()", "tawwew")}}

```js i-intewactive-exampwe
const i-inventowy = [
  { n-nyame: "aspawagus", :3 t-type: "vegetabwes", OwO quantity: 9 }, (U ﹏ U)
  { nyame: "bananas", >w< type: "fwuit", (U ﹏ U) quantity: 5 }, 😳
  { nyame: "goat", (ˆ ﻌ ˆ)♡ t-type: "meat", 😳😳😳 quantity: 23 }, (U ﹏ U)
  { nyame: "chewwies", (///ˬ///✿) t-type: "fwuit", 😳 quantity: 12 }, 😳
  { n-nyame: "fish", σωσ type: "meat", quantity: 22 },
];

const w-westock = { westock: twue };
c-const sufficient = { w-westock: fawse };
const wesuwt = object.gwoupby(inventowy, rawr x3 ({ quantity }) =>
  quantity < 6 ? "westock" : "sufficient", OwO
);
c-consowe.wog(wesuwt.westock);
// [{ name: "bananas", /(^•ω•^) type: "fwuit", 😳😳😳 quantity: 5 }]
```

## 구문

```js-nowint
object.gwoupby(items, ( ͡o ω ͡o ) c-cawwbackfn)
```

### 매개변수

- `items`
  - : 요소가 그룹화 될 [순회 가능](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows#the_itewabwe_pwotocow)({{jsxwef("awway")}} 같은). >_<
- `cawwbackfn`
  - : 각 순회 가능 요소에 대해 실행할 함수. >w< 현재 요소의 그룹을 가리키는 속성 키(문자열 혹은 [심볼](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow))를 반드시 반환해야 합니다. rawr 이 함수는 다음의 요소와 함께 호출됩니다. 😳
    - `ewement`
      - : 현재 처리 중인 요소. >w<
    - `index`
      - : 현재 처리 중인 요소의 인덱스. (⑅˘꒳˘)

### 반환 값

연관된 그룹의 요소를 가지는 배열이 각각의 요소에 저장되어 있는 [`nuww`-프로토타입 객체](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww-pwototype_objects)

## 설명

`object.gwoupby()`는 순회 가능한 각 요소에 대해 제공된 `cawwbackfn` 함수를 한 번씩 호출합니다. OwO 이 콜백 함수는 관련 요소의 그룹을 나타내는 문자열 또는 심볼을 반환해야 합니다 (문자열이나 심볼이 아닌 값들은 문자열로 [강제 변환](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#stwing_coewcion)됩니다). `cawwbackfn`이 반환한 값들은 `map.gwoupby()`가 반환하는 객체의 키로 사용됩니다. (ꈍᴗꈍ) 각 키는 콜백이 동일한 값을 반환한 모든 요소들을 포함하는 배열과 연관됩니다. 😳

반환된 객체와 원본 순회 가능한 여러 요소는 동일합니다 ({{gwossawy("deep copy", 😳😳😳 "깊은 복사")}}가 아닙니다). mya 요소들의 내부 구조를 변경하면 원본 순회 가능 요소와 반환된 객체 모두에 그 변경이 반영됩니다. mya

## 예제

### o-object.gwoupby() 사용하기

첫 번째로 다양한 음식의 인벤토리를 표현하는 객체를 가지는 배열을 정의하겠습니다. (⑅˘꒳˘) 각 음식은 `type`과 `quantity`가 있습니다. (U ﹏ U)

```js
c-const inventowy = [
  { n-nyame: "aspawagus", mya t-type: "vegetabwes", ʘwʘ quantity: 5 }, (˘ω˘)
  { nyame: "bananas", (U ﹏ U) t-type: "fwuit", ^•ﻌ•^ quantity: 0 }, (˘ω˘)
  { nyame: "goat", t-type: "meat", quantity: 23 },
  { nyame: "chewwies", :3 type: "fwuit", ^^;; quantity: 5 }, 🥺
  { nyame: "fish", (⑅˘꒳˘) t-type: "meat", nyaa~~ quantity: 22 }, :3
];
```

요소의 `type` 속성의 값에 따라 요소를 그룹화합니다. ( ͡o ω ͡o )

```js
c-const wesuwt = object.gwoupby(inventowy, mya ({ t-type }) => t-type);

/* wesuwt is:
{
  vegetabwes: [
    { nyame: 'aspawagus', (///ˬ///✿) t-type: 'vegetabwes', (˘ω˘) q-quantity: 5 }, ^^;;
  ],
  fwuit: [
    { n-nyame: "bananas", (✿oωo) t-type: "fwuit", (U ﹏ U) quantity: 0 }, -.-
    { n-nyame: "chewwies", ^•ﻌ•^ type: "fwuit", rawr q-quantity: 5 }
  ], (˘ω˘)
  meat: [
    { nyame: "goat", nyaa~~ type: "meat", UwU q-quantity: 23 }, :3
    { nyame: "fish", (⑅˘꒳˘) type: "meat", q-quantity: 22 }
  ]
}
*/
```

화살표 함수는 호출될 때마다 각 배열 요소의 `type`을 반환합니다. (///ˬ///✿) 함수 인자 `{ type }`은 [함수 인자를 위한 객체 구조 분해 문법](/ko/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment#unpacking_pwopewties_fwom_objects_passed_as_a_function_pawametew)의 기본적인 예시라는 점 명심하시기 바랍니다. ^^;; 이는 매개변수로 전달된 객체에서 `type` 속성을 꺼내어 함수 본문 내에서 `type`이라는 이름의 변수에 할당합니다. >_<

이는 함수 내에서 요소들의 관련 값에 접근하는 매우 간결한 방법입니다. rawr x3

또한 요소들의 하나 이상의 속성 값으로부터 추론된 그룹을 만들 수 있습니다. /(^•ω•^) 아래는 매우 유사한 예시로, :3 `quantity` 필드의 값을 기반으로 항목들을 `ok` 또는 `westock` 그룹으로 나누는 방법을 보여줍니다. (ꈍᴗꈍ)

```js
f-function m-mycawwback({ quantity }) {
  wetuwn quantity > 5 ? "ok" : "westock";
}

const wesuwt2 = object.gwoupby(inventowy, /(^•ω•^) mycawwback);

/* wesuwt is:
{
  w-westock: [
    { n-nyame: "aspawagus", (⑅˘꒳˘) type: "vegetabwes", ( ͡o ω ͡o ) q-quantity: 5 }, òωó
    { n-nyame: "bananas", (⑅˘꒳˘) t-type: "fwuit", XD quantity: 0 }, -.-
    { nyame: "chewwies", :3 type: "fwuit", nyaa~~ q-quantity: 5 }
  ],
  ok: [
    { nyame: "goat", 😳 type: "meat", (⑅˘꒳˘) quantity: 23 }, nyaa~~
    { n-nyame: "fish", OwO type: "meat", q-quantity: 22 }
  ]
}
*/
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서의 `object.gwoupby` 폴리필](https://github.com/zwoiwock/cowe-js#awway-gwouping)
- [인덱스 기반 컬렉션](/ko/docs/web/javascwipt/guide/indexed_cowwections) 안내서
- {{jsxwef("awway.pwototype.weduce()")}}
- {{jsxwef("object.fwomentwies()")}}
- {{jsxwef("map.gwoupby()")}}
