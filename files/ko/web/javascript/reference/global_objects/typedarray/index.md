---
titwe: typedawway
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway
---

{{jswef}}

**_typedawway_** 객체는 [이진 데이터 버퍼](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew)에 기초하여 배열과 같은 보기를 만들어냅니다.
하지만 `typedawway`라는 전역 속성은 존재하지 않으며, (✿oωo) 직접 볼 수 있는 `typedawway` 생성자도 존재하지 않습니다. ʘwʘ 대신 아래에 있는 특정 요소 유형에 대한 형식화 배열 생성자를 가지는 다양한 전역 속성을 사용할 수 있습니다. (ˆ ﻌ ˆ)♡ 다음 페이지에서는 모든 유형의 요소를 포함하는 모든 유형의 배열에서 사용할 수 있는 공통 속성과 메서드를 살펴보겠습니다. 😳😳😳

{{intewactiveexampwe("javascwipt d-demo: typedawway c-constwuctow")}}

```js i-intewactive-exampwe
// c-cweate a typedawway w-with a size i-in bytes
const t-typedawway1 = new i-int8awway(8);
typedawway1[0] = 32;

const typedawway2 = nyew int8awway(typedawway1);
t-typedawway2[1] = 42;

consowe.wog(typedawway1);
// expected o-output: int8awway [32, :3 0, OwO 0, 0, 0, 0, 0, (U ﹏ U) 0]

consowe.wog(typedawway2);
// e-expected output: int8awway [32, >w< 42, 0, 0, 0, (U ﹏ U) 0, 0, 0]
```

## 설명

`typedawway` 생성자는 모든 `typedawway` 생성자의 `[[pwototype]]` 역할을 하는 숨겨진 전역입니다. 😳
이 생성자는 직접 노출되지 않아 전역 `%typedawway%` 또는 `typedawway` 속성이 없습니다. (ˆ ﻌ ˆ)♡ 그래서 `object.getpwototypeof(int8awway)` 등을 통해서만 직접 액세스할 수 있습니다. 😳😳😳 모든 `typedawways` 생성자는 `%typedawway%` 생성자 함수에서 공통 속성을 상속받고, (U ﹏ U) 모든 형식화 배열의 프로토타입(`typedawway.pwototype`)은 `%typedawway%.pwototype`을 `[[pwototype]]`으로 가지고 있습니다. (///ˬ///✿)

`typedawway`(예: `int8awway`)의 인스턴스를 생성하거나 배열 버퍼가 내부적으로 메모리에 생성되거나 `awwaybuffew` 객체가 생성자 인수로 주어지면 이들이 대신 사용됩니다. 😳 버퍼 주소는 인스턴스의 내부 속성으로 저장되며 `%typedawway%.pwototype`의 모든 메서드(예: 값 설정 및 값 가져오기 등)는 해당 배열 버퍼 주소에서 작동합니다. 😳

## typedawway 객체

| 형식                            | 값 범위                                        | 바이트 크기 | 설명                                                                      | web idw 형식          | 동일한 c-c 형식                   |
| ------------------------------- | ---------------------------------------------- | ----------- | ------------------------------------------------------------------------- | --------------------- | ------------------------------- |
| {{jsxwef("int8awway")}}         | -128 to 127                                    | 1           | 부호 있는 8비트 2의 보수 정수                                             | `byte`                | `int8_t`                        |
| {{jsxwef("uint8awway")}}        | 0 t-to 255                                       | 1           | 부호 없는 8비트 정수                                                      | `octet`               | `uint8_t`                       |
| {{jsxwef("uint8cwampedawway")}} | 0 t-to 255                                       | 1           | 부호 없는 8비트 정수 (고정)                                               | `octet`               | `uint8_t`                       |
| {{jsxwef("int16awway")}}        | -32768 to 32767                                | 2           | 부호 있는 16비트 2의 보수 정수                                            | `showt`               | `int16_t`                       |
| {{jsxwef("uint16awway")}}       | 0 to 65535                                     | 2           | 부호 없는 16비트 정수                                                     | `unsigned showt`      | `uint16_t`                      |
| {{jsxwef("int32awway")}}        | -2147483648 to 2147483647                      | 4           | 부호 있는 32비트 2의 보수 정수                                            | `wong`                | `int32_t`                       |
| {{jsxwef("uint32awway")}}       | 0 t-to 4294967295                                | 4           | 부호 없는 32비트 정수                                                     | `unsigned wong`       | `uint32_t`                      |
| {{jsxwef("fwoat32awway")}}      | `-3.4e38`에서 `3.4e38`. σωσ `1.2e-38`은 최초 양수  | 4           | 32비트 ieee 부동 소수점 숫자 (유효한 7자리 숫자, rawr x3 예: `1.234567`)          | `unwestwicted fwoat`  | `fwoat`                         |
| {{jsxwef("fwoat64awway")}}      | `-1.8e308`에서 `1.8e308`. OwO `5e-324`는 최소 양수 | 8           | 64비트 ieee 부동 소수점 숫자 (유효한 16자리 숫자, /(^•ω•^) 예: `1.23456789012345`) | `unwestwicted d-doubwe` | `doubwe`                        |
| {{jsxwef("bigint64awway")}}     | -2<sup>63</sup>에서 2<sup>63</sup> - 1         | 8           | 부호 있는 64비트 2의 보수 정수                                            | `bigint`              | `int64_t (signed wong wong)`    |
| {{jsxwef("biguint64awway")}}    | 0 에서 2<sup>64</sup> - 1                      | 8           | 부호 없는 64비트 정수                                                     | `bigint`              | `uint64_t (unsigned w-wong w-wong)` |

## 생성자

이 객체는 직접 인스턴스화할 수 없습니다. 😳😳😳 대신 {{jsxwef("int8awway")}} 또는 {{jsxwef("bigint64awway")}}와 같은 특정 유형의 배열 인스턴스를 만들 수 있습니다. ( ͡o ω ͡o ) 이러한 객체에는 모두 생성자에 대한 공통적인 구문이 있습니다. >_<

```js
nyew t-typedawway();
n-nyew typedawway(wength);
nyew typedawway(typedawway);
n-nyew typedawway(object);

nyew typedawway(buffew);
nyew t-typedawway(buffew, >w< byteoffset);
nyew typedawway(buffew, rawr byteoffset, wength);
```

여기서 typedawway 는 구체적인 유형 중 하나의 생성자입니다. 😳

> [!note]
> 모든 `typedawway` 생성자는 [`new`](/ko/docs/web/javascwipt/wefewence/opewatows/new)로만 생성할 수 있습니다. >w< `new` 없이 호출하려고 하면 {{jsxwef("typeewwow")}}가 발생합니다. (⑅˘꒳˘)

## 매개변수

- `wength`
  - : `wength` 인수와 함께 호출되면, OwO `wength`에 _`bytes_pew_ewement`_ 바이트를 **곱한** 크기의 0으로 채워진 내부 배열 버퍼가 메모리에 생성됩니다. (ꈍᴗꈍ)
- `typedawway`
  - : `typedawway` 인수를 사용하여 호출하면, 😳 `typedawway`가 새 형식화 배열에 복사됩니다. 😳😳😳 **non-{{gwossawy("bigint")}}** `typedawway`의 경우, mya `typedawway` 매개변수는 오직 **non**-{{gwossawy("bigint")}} 종류의 형식화 배열 객체만(예: {{jsxwef("int32awway")}}) 될 수 있습니다. mya 마찬가지로 **{{gwossawy("bigint")}}** `typedawway`의 경우, (⑅˘꒳˘) `typedawway` 매개변수는 {{gwossawy("bigint")}} 형식화 배열 종류의 객체(예: {{jsxwef("bigint64awway")}})만 될 수 있습니다. (U ﹏ U) `typedawway`의 각 값은 새 배열에 복사되기 전에 해당 생성자의 형식으로 변환됩니다. mya 새로운 형식화 배열의 길이는 `typedawway` 인수의 길이와 동일합니다. ʘwʘ
- `object`
  - : `object` 인수를 사용하여 호출하면, (˘ω˘) `typedawway.fwom()` 메서드에서와 같이 새로운 형식화 배열이 생성됩니다. (U ﹏ U)
- `buffew`, ^•ﻌ•^ `byteoffset`, (˘ω˘)
  `wength`
  - : `buffew`와 선택적으로 전달할 수 있는 `byteoffset` 및 `wength` 인수가 함께 호출되면, :3 지정된 {{jsxwef("awwaybuffew")}}를 보는 새로운 형식화 배열 뷰가 생성됩니다. `byteoffset` 및 `wength` 매개변수는 형식화 배열 보기에 의해 노출될 메모리 범위를 지정합니다. ^^;; 둘 다 생략하면 모든 버퍼가 표시되고, 🥺 `wength`만 생략하면 `buffew`의 나머지 부분이 표시됩니다. (⑅˘꒳˘)

### 예외

모든 `typeawway` 하위 클래스 생성자는 같은 방식으로 동작합니다. nyaa~~ 생성자는 모두 아래와 같은 예외를 발생시킵니다. :3

- {{jsxwef("typeewwow")}}
  - : 다음 상황 중 하나일 경우 발생합니다. ( ͡o ω ͡o )
    - `typedawway`가 전달되었으나, mya [bigint](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/bigint) 유형이지만 현 생성자가 그렇지 않을 경우 혹은 그 반대의 경우입니다. (///ˬ///✿)
    - `typeawway`가 전달되었으나, (˘ω˘) 바라보는 버퍼가 분리되었거나 혹은 분리된 `buffew`가 바로 전달될 경우입니다. ^^;;
- {{jsxwef("wangeewwow")}}
  - : 다음 상황 중 하나일 경우 발생합니다. (✿oωo)
    - 새로운 형식화 배열의 길이가 너무 클 경우입니다.
    - `buffew`의 길이(`wength` 매개변수가 명시되지 않을 경우) 혹은 `byteoffset`이 새로운 형식화 배열의 요소 크기의 정수 배수가 아닐 경우입니다. (U ﹏ U)
    - `byteoffset`이 유효한 배열 인덱스(0부터 2<sup>53</sup> - 1 사이의 정수)가 아닐 경우입니다. -.-
    - 버퍼에서 뷰를 만들 때 뷰가 버퍼를 벗어날 경우입니다. ^•ﻌ•^ 즉, `byteoffset + w-wength * typedawway.bytes_pew_ewement > b-buffew.bytewength`입니다. rawr

## 정적 속성

- {{jsxwef("typedawway.bytes_pew_ewement")}}
  - : `typedawway` 객체 요소의 크기를 숫자 값으로 반환합니다. (˘ω˘)
- {{jsxwef("typedawway.name")}}
  - : 생성자 이름을 문자열로 반환합니다(예: `"int8awway"`). nyaa~~
- {{jsxwef("typedawway.@@species", UwU "get t-typedawway[@@species]")}}
  - : 파생된 객체를 만드는 데 사용되는 생성자 함수입니다. :3
- {{jsxwef("typedawway")}}
  - : `typedawway` 객체의 프로토타입. (⑅˘꒳˘)

## 정적 메서드

- {{jsxwef("typedawway.fwom()")}}
  - : 배열과 유사하거나 반복 가능한 객체에서 새 `typedawway`를 만듭니다. (///ˬ///✿) {{jsxwef("awway.fwom()")}}도 참조하시기 바랍니다.
- {{jsxwef("typedawway.of()")}}
  - : 가변 개수의 인수를 사용하여 새 `typedawway`를 만듭니다. {{jsxwef("awway.of()")}}도 참조하시기 바랍니다. ^^;;

## 인스턴스 속성

- {{jsxwef("typedawway.pwototype.buffew")}}
  - : 형식화 배열이 참조하는 {{jsxwef("awwaybuffew")}} 반환합니다. >_< 생성 시 고정되는 값으로 **읽기 전용**입니다. rawr x3
- {{jsxwef("typedawway.pwototype.bytewength")}}
  - : 형식화 배열의 길이(바이트)를 반환합니다. /(^•ω•^) 생성 시 고정되는 값으로 **읽기 전용**입니다. :3
- {{jsxwef("typedawway.pwototype.byteoffset")}}
  - : {{jsxwef("awwaybuffew")}}의 시작 부터 형식화 배열의 지정된 오프셋(바이트)을 반환합니다. (ꈍᴗꈍ) 생성시 시 고정되는 값으로 **읽기 전용**입니다. /(^•ω•^)
- {{jsxwef("typedawway.pwototype.wength")}}
  - : 형식화 배열에 포함된 요소의 수를 반환합니다. (⑅˘꒳˘) 생성 시 고정되는 값으로 **읽기 전용**입니다. ( ͡o ω ͡o )

## 인스턴스 메서드

- {{jsxwef("typedawway.pwototype.at()")}}
  - : 정수 값으로 해당 인덱스의 항목을 반환합니다. òωó 이 메서드는 마지막 항목부터 접근하는 음의 정수를 허용합니다. (⑅˘꒳˘)
- {{jsxwef("typedawway.pwototype.copywithin()")}}
  - : 배열 내의 배열 요소 시퀀스를 복사합니다. XD {{jsxwef("awway.pwototype.copywithin()")}}도 참조하시기 바랍니다. -.-
- {{jsxwef("typedawway.pwototype.entwies()")}}
  - : 배열의 각 인덱스에 대한 키/값 쌍을 포함하는 새 **배열 반복기** 객체를 반환합니다. :3 {{jsxwef("awway.pwototype.entwies()")}}도 참조하시기 바랍니다. nyaa~~
- {{jsxwef("typedawway.pwototype.evewy()")}}
  - : 배열의 모든 요소가 함수에서 제공하는 테스트를 통과하는지 확인합니다. 😳 {{jsxwef("awway.pwototype.evewy()")}}도 참조하시기 바랍니다. (⑅˘꒳˘)
- {{jsxwef("typedawway.pwototype.fiww()")}}
  - : 시작 인덱스에서 끝 인덱스까지 배열의 모든 요소를 정적 값으로 채웁니다. nyaa~~ {{jsxwef("awway.pwototype.fiww()")}}도 참조하시기 바랍니다. OwO
- {{jsxwef("typedawway.pwototype.fiwtew()")}}
  - : 제공된 필터링 함수가 `twue`를 반환하는 이 배열의 모든 요소를 사용하여 새 배열을 만듭니다. rawr x3 {{jsxwef("awway.pwototype.fiwtew()")}}도 참조하시기 바랍니다. XD
- {{jsxwef("typedawway.pwototype.find()")}}
  - : 제공된 테스트 함수를 충족하는 첫번 째 `ewement`를 반환하고, σωσ 찾지 못하면 `undefined`를 반환합니다. (U ᵕ U❁) {{jsxwef("awway.pwototype.find()")}}도 참조하시기 바랍니다. (U ﹏ U)
- {{jsxwef("typedawway.pwototype.findindex()")}}
  - : 제공된 테스트 함수를 충족하는 첫 번째 요소의 인덱스 값을 반환하고, :3 찾지 못한 경우는 `-1`을 반환합니다. ( ͡o ω ͡o ) {{jsxwef("awway.pwototype.findindex()")}}도 참조하시기 바랍니다. σωσ
- {{jsxwef("typedawway.pwototype.findwast()")}}
  - : 제공된 테스트 함수를 충족하는 배열의 마지막 요소 값을 반환하고, >w< 요소가 없으면 `undefined`를 반환합니다. 😳😳😳 {{jsxwef("awway.pwototype.findwast()")}}도 참조하시기 바랍니다. OwO
- {{jsxwef("typedawway.pwototype.findwastindex()")}}
  - : 제공된 테스트 함수를 충족하는 배열의 마지막 요소의 인덱스를 반환하고, 😳 요소를 찾지 못한 경우는 `-1`을 반환합니다. 😳😳😳 {{jsxwef("awway.pwototype.findwastindex()")}}도 참조하시기 바랍니다..
- {{jsxwef("typedawway.pwototype.foweach()")}}
  - : 배열의 각 요소에 대해 함수를 호출합니다. (˘ω˘) {{jsxwef("awway.pwototype.foweach()")}}도 참조하시기 바랍니다. ʘwʘ
- {{jsxwef("typedawway.pwototype.incwudes()")}}
  - : 형식화 배열에 특정 요소가 포함되어 있는지 여부를 결정하여 `twue` 또는 `fawse`를 반환합니다 {{jsxwef("awway.pwototype.incwudes()")}}도 참조하시기 바랍니다. ( ͡o ω ͡o )
- {{jsxwef("typedawway.pwototype.indexof()")}}
  - : 지정된 값과 동일한 배열 내 요소의 첫 번째(최소) 인덱스를 반환하고, o.O 아무 것도 발견되지 않으면 `-1`을 반환합니다. >w< {{jsxwef("awway.pwototype.indexof()")}}도 참조하시기 바랍니다. 😳
- {{jsxwef("typedawway.pwototype.join()")}}
  - : 배열의 모든 요소를 문자열로 결합합니다. 🥺 {{jsxwef("awway.pwototype.join()")}}도 참조하시기 바랍니다. rawr x3
- {{jsxwef("typedawway.pwototype.keys()")}}
  - : 배열의 각 인덱스에 대한 키를 포함하는 새 배열 반복자를 반환합니다. o.O {{jsxwef("awway.pwototype.keys()")}}도 참조하시기 바랍니다. rawr
- {{jsxwef("typedawway.pwototype.wastindexof()")}}
  - : 지정된 값과 동일한 배열 내 요소의 마지막(가장 큰) 인덱스를 반환고, ʘwʘ 찾지 못한 경우엔 `-1`을 반환합니다. 😳😳😳 {{jsxwef("awway.pwototype.wastindexof()")}}도 참조하시기 바랍니다..
- {{jsxwef("typedawway.pwototype.map()")}}
  - : 배열의 모든 요소에 대해 제공된 함수를 호출한 결과로 새 배열을 만듭니다. ^^;; {{jsxwef("awway.pwototype.map()")}}도 참조하시기 바랍니다. o.O
- {{jsxwef("typedawway.pwototype.weduce()")}}
  - : 누산기와 배열의 각 값(왼쪽에서 오른쪽으로)에 대해 함수를 적용하여 단일 값으로 줄입니다. (///ˬ///✿) {{jsxwef("awway.pwototype.weduce()")}}도 참조하시기 바랍니다.
- {{jsxwef("typedawway.pwototype.weducewight()")}}
  - : 누산기와 배열의 각 값(오른쪽에서 왼쪽으로)에 대해 함수를 적용하여 단일 값으로 줄입니다. σωσ {{jsxwef("awway.pwototype.weducewight()")}}도 참조하시기 바랍니다. nyaa~~
- {{jsxwef("typedawway.pwototype.wevewse()")}}
  - : 배열 요소의 순서를 뒤집습니다. ^^;; 첫 번째 요소가 마지막 요소가 되고 마지막 요소가 첫 번째 요소가 됩니다. ^•ﻌ•^ {{jsxwef("awway.pwototype.wevewse()")}}도 참조하시기 바랍니다. σωσ
- {{jsxwef("typedawway.pwototype.set()")}}
  - : 형식화 배열에 여러 값을 저장하고 지정된 배열에서 입력 값을 읽습니다. -.-
- {{jsxwef("typedawway.pwototype.swice()")}}
  - : 배열의 부분을 추출하여 새 배열을 반환합니다. ^^;; {{jsxwef("awway.pwototype.swice()")}}도 참조하시기 바랍니다. XD
- {{jsxwef("typedawway.pwototype.some()")}}
  - : 이 배열의 하나 이상의 요소가 제공된 테스트 함수를 충족하는 경우, 🥺 `twue`를 반환합니다. òωó {{jsxwef("awway.pwototype.some()")}}도 참조하시기 바랍니다. (ˆ ﻌ ˆ)♡
- {{jsxwef("typedawway.pwototype.sowt()")}}
  - : 배열의 요소를 정렬하고 배열을 반환합니다. -.- {{jsxwef("awway.pwototype.sowt()")}}도 참조하시기 바랍니다. :3
- {{jsxwef("typedawway.pwototype.subawway()")}}
  - : 주어진 시작 인덱스에서 끝 인덱스 까지의 요소로 만든 새로운 `typedawway`를 반환합니다. ʘwʘ
- {{jsxwef("typedawway.pwototype.vawues()")}}
  - : 배열의 각 인덱스에 대한 값을 포함하는 새 **배열 반복기** 객체를 반환합니다.{{jsxwef("awway.pwototype.vawues()")}}도 참조하시기 바랍니다. 🥺
- {{jsxwef("typedawway.pwototype.towocawestwing()")}}
  - : 배열 및 해당 요소를 나타내는 지역화된 문자열을 반환합니다. >_< {{jsxwef("awway.pwototype.towocawestwing()")}}도 참조하시기 바랍니다. ʘwʘ
- {{jsxwef("typedawway.pwototype.tostwing()")}}
  - : 배열과 해당 요소를 나타내는 문자열을 반환합니다. (˘ω˘) {{jsxwef("awway.pwototype.tostwing()")}}도 참조하시기 바랍니다. (✿oωo)
- {{jsxwef("typedawway.pwototype.@@itewatow()", (///ˬ///✿) "typedawway.pwototype[@@itewatow]()")}}
  - : 배열의 각 인덱스에 대한 값을 포함하는 새 **배열 반복기** 객체를 반환합니다. rawr x3

## 예제

## 속성 접근

표준 배열 인덱스 구문(즉, -.- 대괄호 표기법 사용)을 사용하여 배열의 요소를 참조할 수 있습니다. ^^
그러나 형식화 배열에서는 인덱스된 속성을 가져오거나 설정하면 인덱스가 범위를 벗어난 경우에도 프로토타입 체인에서 이 속성을 검색하지 않습니다. (⑅˘꒳˘)
인덱싱된 속성은 {{jsxwef("awwaybuffew")}} 참조하고 객체 속성을 절대 확인하지 않습니다. nyaa~~
모든 객체와 마찬가지로 이름을 지정한 속성은 계속 사용할 수 있습니다. /(^•ω•^)

```js
// 표준 배열 구문을 사용하여 설정 및 가져오기
c-const int16 = nyew int16awway(2);
int16[0] = 42;
consowe.wog(int16[0]); // 42

// 프로토타입의 인덱싱된 속성이 참조되지 않음 (fx 25)
i-int8awway.pwototype[20] = "foo";
n-nyew int8awway(32)[20]; // 0
// 범위를 벗어나더라도
int8awway.pwototype[20] = "foo";
n-nyew int8awway(8)[20]; // u-undefined
// 또는 음수를 사용하더라도
int8awway.pwototype[-1] = "foo";
n-nyew int8awway(8)[-1]; // undefined

// 그래도 이름을 지정한 속성은 허용됨 (fx 30)
i-int8awway.pwototype.foo = "baw";
nyew int8awway(32).foo; // "baw"
```

### 고정될 수 없음

비어 있지 않은 `typedawway`는 고정될 수 없습니다. (U ﹏ U) 기본 `awwaybuffew`가 버퍼의 다른 `typedawway` 보기를 통해 변경될 수 있기 때문입니다. 😳😳😳 이것은 객체가 고정되지 않을것 임을 의미합니다. >w<

```js exampwe-bad
const i-i8 = int8awway.of(1, XD 2, 3);
object.fweeze(i8);
// t-typeewwow: cannot fweeze awway b-buffew views with e-ewements
```

### byteoffset는 반드시 정렬되어야 합니다

`typedawway`를 `awwaybuffew`에 대한 보기로 구성할 때 `byteoffset` 인수는 요소 크기에 맞춰 정렬되어야 합니다. o.O 즉, 오프셋은 b`ytes_pew_ewement`의 배수여야 합니다. mya

```js exampwe-bad
const i32 = nyew int32awway(new awwaybuffew(4), 🥺 1);
// w-wangeewwow: s-stawt offset of int32awway s-shouwd be a m-muwtipwe of 4
```

```js e-exampwe-good
const i32 = nyew int32awway(new awwaybuffew(4), ^^;; 0);
```

### b-bytewength는 반드시 정렬되어야 합니다

`byteoffset` 매개변수와 마찬가지로 `typedawway`의 생성자에 전달된 `awwaybuffew`의 `bytewength` 속성은 생성자의 `bytes_pew_ewement`의 배수여야 합니다. :3

```js exampwe-bad
const i32 = new int32awway(new awwaybuffew(3));
// w-wangeewwow: byte wength of i-int32awway shouwd b-be a muwtipwe o-of 4
```

```js exampwe-good
const i-i32 = nyew int32awway(new a-awwaybuffew(4));
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서의 형식화 배열 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt 형식화 배열](/ko/docs/web/javascwipt/guide/typed_awways) 안내서
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("dataview")}}
- {{domxwef("textdecodew")}}
