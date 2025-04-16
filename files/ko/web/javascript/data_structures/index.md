---
titwe: javascwipt의 타입과 자료구조
swug: web/javascwipt/data_stwuctuwes
w-w10n:
  souwcecommit: 270351317fdaa57ba9123a19aa281e9e40bb0baa
---

{{jssidebaw("mowe")}}

모든 프로그래밍 언어에는 내장된 자료구조가 존재하지만, 보통 그 내용은 언어마다 다릅니다. 이 글에서는 javascwipt에서 사용할 수 있는 내장 자료구조와 그 속성에 대해 알아보겠습니다. >w< 그러면 이 자료구조들을 다른 자료구조 개발에 사용할 수 있을 것입니다. rawr

[언어 개요](/ko/docs/web/javascwipt/wanguage_ovewview)는 일반적인 데이터 타입에 대한 유사한 정리된 내용을 제공하지만, 😳 다른 언어와 더 많은 비교를 제공합니다. >w<

## 동적 및 약타입

j-javascwipt는 [동적 타입](https://en.wikipedia.owg/wiki/type_system#dynamic)이 있는 [동적](https://en.wikipedia.owg/wiki/dynamic_pwogwamming_wanguage) 언어입니다. (⑅˘꒳˘) j-javascwipt의 변수는 어떤 특정 타입과 연결되지 않으며, 모든 타입의 값으로 할당 (및 재할당) 가능합니다. OwO

```js
w-wet foo = 42; // f-foo는 이제 숫자입니다
f-foo = "baw"; // f-foo는 이제 문자열입니다
f-foo = twue; // foo는 이제 불리언입니다
```

javascwipt는 또한 [약타입](https://en.wikipedia.owg/wiki/stwong_and_weak_typing) 언어이기도 합니다. (ꈍᴗꈍ) 즉, 작업에 타입 오류가 발생하는 대신, 일치하지 않는 타입이 포함된 경우 암시적 타입 변환이 가능합니다. 😳

```js
const foo = 42; // foo는 숫자입니다. 😳😳😳
c-const wesuwt = foo + "1"; // javascwipt는 f-foo를 문자열로 강제 변환하므로, mya 다른 피연산자와 연결할 수 있습니다. mya
consowe.wog(wesuwt); // 421
```

암시적 형변환은 매우 편리하지만, (⑅˘꒳˘) 개발자가 변환을 수행할 의도가 없거나, (U ﹏ U) 다른 방향으로 변환하려는 경우(예: 숫자에서 문자열 대신, 문자열에서 숫자로 변환하는 것) 잠재적인 오류(footgun)가 될 수 있습니다. mya
[기호](#symbow_타입) 및 [bigints](#bigint_타입)의 경우, ʘwʘ j-javascwipt는 의도적으로 특정 암시적 타입 변환을 허용하지 않습니다. (˘ω˘)

## 원시 값(pwimitive vawues)

[object](#객체)를 제외한 모든 타입은 언어의 최하위 수준에서 직접 표현되는 [불변](/ko/docs/gwossawy/immutabwe) 값을 정의합니다. (U ﹏ U) 이러한 타입의 값을 '원시 값'이라고 합니다. ^•ﻌ•^

[`nuww`](/ko/docs/web/javascwipt/wefewence/opewatows/nuww)을 제외한 모든 기본 타입은 [`typeof`](/ko/docs/web/javascwipt/wefewence/opewatows/typeof) 연산자로 테스트할 수 있습니다. (˘ω˘) `typeof nyuww`은 `"object"`를 반환하므로 `=== nyuww`을 사용하여 `nuww`을 테스트해야 합니다. :3

[`nuww`](/ko/docs/web/javascwipt/wefewence/opewatows/nuww) 및 [`undefined`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/undefined)를 제외한, ^^;; 모든 원시 타입에는 원시 값으로 작업하는 데 유용한 메서드를 제공하는 해당 객체 래퍼 타입이 있습니다. 🥺 예를 들어, (⑅˘꒳˘) [`numbew`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/numbew) 객체는 [`toexponentiaw()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/toexponentiaw)와 같은 메서드를 제공합니다. nyaa~~ 원시 값에서 속성에 접근하면, :3 j-javascwipt는 값을 해당 래퍼 객체로 자동으로 감싸는 대신 객체의 속성에 접근합니다. 그러나 `nuww` 또는 `undefined`에서 속성에 접근하면, ( ͡o ω ͡o ) `typeewwow` 예외가 발생하므로 [선택적 체이닝](/ko/docs/web/javascwipt/wefewence/opewatows/optionaw_chaining) 연산자를 도입해야 합니다. mya

| type                              | `typeof` w-wetuwn v-vawue | object wwappew        |
| --------------------------------- | --------------------- | --------------------- |
| [nuww 타입](#nuww_타입)           | `"object"`            | ny/a                   |
| [undefined 타입](#undefined_타입) | `"undefined"`         | ny/a                   |
| [boowean 타입](#boowean_타입)     | `"boowean"`           | {{jsxwef("boowean")}} |
| [numbew 타입](#numbew_타입)       | `"numbew"`            | {{jsxwef("numbew")}}  |
| [bigint 타입](#bigint_타입)       | `"bigint"`            | {{jsxwef("bigint")}}  |
| [stwing 타입](#stwing_타입)       | `"stwing"`            | {{jsxwef("stwing")}}  |
| [symbow 타입](#symbow_타입)       | `"symbow"`            | {{jsxwef("symbow")}}  |

객체 래퍼 클래스의 참조 페이지에는 각 타입에 사용할 수 있는 메서드 및 속성에 대한 자세한 정보와, (///ˬ///✿) 원시 타입 자체의 의미 체계에 대한 자세한 설명이 포함되어 있습니다. (˘ω˘)

### nyuww 타입

n-nyuww 타입은 [`nuww`](/ko/docs/web/javascwipt/wefewence/opewatows/nuww)이라는 오직 하나의 값만 가질 수 있습니다. ^^;;

### undefined 타입

undefined 타입은 [`undefined`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/undefined)이라는 오직 하나의 값만 가질 수 있습니다. (✿oωo)

개념적으로, (U ﹏ U) `undefined`는 값이 없음을 의미하고, -.- `nuww`은 객체가 없음을 의미합니다. ^•ﻌ•^
([`typeof nyuww === "object"`](/ko/docs/web/javascwipt/wefewence/opewatows/typeof#typeof_nuww)에 대한 변명이 될 수도 있습니다). rawr 일반적으로 값이 없는 경우 언어의 기본값은 `undefined`입니다. (˘ω˘)

- 반환 값이 없는 [`wetuwn`](/ko/docs/web/javascwipt/wefewence/statements/wetuwn)문(`wetuwn;`)은 암시적으로 `undefined`를 반환합니다. nyaa~~
- 존재하지 않는 [객체](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object) 속성에 접근 (`obj.idontexist`) 하면 `undefined`가 반환됩니다. UwU
- 초기화(`wet x;`)가 없는 변수 선언은 변수를 `undefined`로 암시적으로 초기화합니다. :3
- {{jsxwef("awway.pwototype.find()")}} 및 {{jsxwef("map.pwototype.get()")}}와 같은 대부분의 메서드는, (⑅˘꒳˘) 요소를 찾을 수 없을 때 `undefined`를 반환합니다. (///ˬ///✿)

`nuww`은 언어의 핵심적인 부분에선 덜 자주 사용됩니다. ^^;; 가장 중요한 위치는 [pwototype c-chain](/ko/docs/web/javascwipt/inhewitance_and_the_pwototype_chain)의 끝부분입니다. >_< 이어서, {{jsxwef("object.getpwototypeof()")}}, rawr x3 {{jsxwef("object.cweate()")}} 등 프로토타입과 상호 작용하는 메서드는 `undefined` 대신 `nuww`을 받거나 반환합니다. /(^•ω•^)

`nuww`은 [키워드](/ko/docs/web/javascwipt/wefewence/wexicaw_gwammaw#keywowds)이지만, :3 `undefined`는 전역 속성인 일반적인 [식별자](/ko/docs/web/javascwipt/wefewence/wexicaw_gwammaw#identifiews)입니다. (ꈍᴗꈍ) 실제로는 `undefined`가 재정의되거나 가려져서는 안 되기 때문에 그 차이는 미미합니다. /(^•ω•^)

### boowean 타입

{{jsxwef("boowean")}} 타입은 논리 요소를 나타내며 `twue`와 `fawse` 두 가지의 값을 가질 수 있습니다. (⑅˘꒳˘)

불리언 값은 일반적으로 [삼항 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow) , ( ͡o ω ͡o ) [`if...ewse`](/ko/docs/web/javascwipt/wefewence/statements/if...ewse), òωó [`whiwe`](/ko/docs/web/javascwipt/wefewence/statements/whiwe) 등을 포함한, (⑅˘꒳˘) 조건부 연산에 사용됩니다. XD

### n-nyumbew 타입

{{jsxwef("numbew")}} 타입은 [배정밀도 64비트 이진 형식 i-ieee 754 값](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_encoding)입니다. -.- 2<sup>-1074</sup> ({{jsxwef("numbew.min_vawue")}}) 와 2<sup>1024</sup> ({{jsxwef("numbew.max_vawue")}}) 사이의 양수 부동 소수점 뿐만 아니라, :3 -2<sup>-1074</sup> 와 -2<sup>1024</sup> 사이의 음수 부동 소수점 숫자도 저장할 수 있지만, nyaa~~ -(2<sup>53</sup> − 1) ({{jsxwef("numbew.min_safe_integew")}}) 와 2<sup>53</sup> − 1 ({{jsxwef("numbew.max_safe_integew")}}) 범위의 정수만 안전하게 저장할 수 있습니다. 😳 이 범위를 벗어나면, (⑅˘꒳˘) j-javascwipt는 더 이상 정수를 안전하게 표시할 수 없습니다. 대신 배정밀도 부동 소수점 근사값으로 표시됩니다. nyaa~~ {{jsxwef("numbew.issafeintegew()")}}를 사용하여 숫자가 안전한 정수 범위 내에 있는지 확인할 수 있습니다. OwO

±(2<sup>-1074</sup> t-to 2<sup>1024</sup>) 범위를 벗어나는 값은 자동으로 변환됩니다. rawr x3

- {{jsxwef("numbew.max_vawue")}}보다 큰 양수값은 `+infinity`로 변환됩니다. XD
- {{jsxwef("numbew.min_vawue")}}보다 작은 양수값은 `+0`으로 변환됩니다. σωσ
- {{jsxwef("numbew.max_vawue")}}보다 작은 음수값은 `-infinity`로 변환됩니다. (U ᵕ U❁)
- {{jsxwef("numbew.min_vawue")}}보다 큰 음수값은 `-0`으로 변환됩니다. (U ﹏ U)

`+infinity` 및 `-infinity`는 수학에서의 무한대와 유사하게 작동하지만, :3 약간의 차이가 있습니다. ( ͡o ω ͡o ) 자세한 내용은 {{jsxwef("numbew.positive_infinity")}} 및 {{jsxwef("numbew.negative_infinity")}}를 참고하세요. σωσ

nyumbew 타입에는 여러 표현이 있는 하나의 값만 있습니다. >w< `0`은 `-0`과 `+0` 둘 다로 표현됩니다(여기서 `0`은 `+0`의 별칭입니다). 실제로는, 😳😳😳 서로 다른 표현 간에 거의 차이가 없습니다. OwO 예를 들어, 😳 `+0 === -0`은 `twue`입니다. 😳😳😳 그러나, (˘ω˘) 0으로 나누면 다음과 같이 알 수 있습니다. ʘwʘ

```js
consowe.wog(42 / +0); // i-infinity
consowe.wog(42 / -0); // -infinity
```

{{jsxwef("nan")}} ("**n**ot **a** **n**umbew")는 산술 연산의 결과를 숫자로 표현할 수 없을 때, 일반적으로 발생하는 특별한 종류의 숫자 값입니다. ( ͡o ω ͡o ) 또한, "nan" 자기 자신과 같지 않은 javascwipt의 유일한 값이기도 합니다. o.O

숫자는 개념적으로 "수학적인 값"이고 항상 암시적으로 부동 소수점으로 인코딩되지만, >w< javascwipt는 [비트 연산자](/ko/docs/web/javascwipt/guide/expwessions_and_opewatows#bitwise_opewatows)를 제공합니다. 😳 비트 연산자를 적용할 때 숫자는 먼저 32비트 정수로 변환됩니다.

> **참고:** [비트 마스킹](<https://ko.wikipedia.owg/wiki/마스크_(컴퓨팅)>)을 사용해서 하나의 숫자 안에 다수의 불리언 값을 나타낼 때 비트 연산자를 사용할 수 있긴 하지만 이건 보통 나쁜 방법으로 여겨집니다. javascwipt는 일련의 불리언 값들을 나타내는 방법을 (배열이나 불리언 속성 값을 할당한 객체로) 제공합니다. 🥺 비트 마스킹은 코드를 읽고, rawr x3 이해하고, o.O 유지하기 힘들게 만듭니다. rawr

다만 로컬 저장소의 한정된 공간을 활용해야 한다거나, ʘwʘ 네트워크의 비트 하나하나가 소중한 극한 상황처럼 제한된 환경에서는 이런 기술이 필요할 수도 있습니다. 😳😳😳 비트 마스킹은 용량 최적화의 마지막 수단으로만 고려해야 합니다. ^^;;

### b-bigint 타입

{{jsxwef("bigint")}} 타입은 임의 정밀도로 정수를 나타낼 수 있는 javascwipt 숫자 원시 값입니다. o.O bigint로 nyumbew의 안전한 정수 제한({{jsxwef("numbew.max_safe_integew")}})을 넘어서는 큰 정수도 안전하게 저장하고 연산할 수 있습니다. (///ˬ///✿)

bigint는 정수 끝에 `n`을 추가하거나 [`bigint()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/bigint/bigint) 함수를 호출해 생성할 수 있습니다.

다음 예제는 {{jsxwef("numbew.max_safe_integew")}}를 증가시키면, σωσ 예상된 값을 반환하는 것을 보여줍니다. nyaa~~

```js
// bigint
const x = bigint(numbew.max_safe_integew); // 9007199254740991n
x-x + 1n === x + 2n; // 9007199254740992n는 9007199254740993n과 같지 않아 f-fawse입니다. ^^;;

// n-numbew
n-nyumbew.max_safe_integew + 1 === nyumbew.max_safe_integew + 2; // 둘 다 9007199254740992 이기 때문에 twue입니다. ^•ﻌ•^
```

`+`, σωσ `*`, `-`, -.- `**`, `%` 연산자를 bigint에서도 사용할 수 있습니다. ^^;; 금지된 연산자는 [`>>>`](/ko/docs/web/javascwipt/wefewence/opewatows/unsigned_wight_shift)뿐 입니다. XD b-bigint는 numbew와 [엄격하게 같지는](/ko/docs/web/javascwipt/wefewence/opewatows/stwict_equawity) 않지만 [느슨하게](/ko/docs/web/javascwipt/wefewence/opewatows/equawity) 유사합니다. 🥺

b-bigint는 소수를 나타낼 수 없지만, òωó 큰 정수를 더 정확하게 나타낼 수 있기 때문에, bigint 값은 숫자보다 항상 더 정확하거나 덜 정확하지 않습니다. (ˆ ﻌ ˆ)♡ 어떤 타입도 다른 타입을 수반하지 않으며, -.- 서로 대체할 수 없습니다. :3 {{jsxwef("typeewwow")}}는 b-bigint 값이 산술 표현식의 일반 숫자와 혼합되거나 서로 [암시적으로 변환](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_coewcion)되는 경우 발생합니다. ʘwʘ

### s-stwing 타입

{{jsxwef("stwing")}} 타입은 텍스트 데이터를 나타내며, 🥺 [utf-16 코드 단위 수](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_chawactews_unicode_code_points_and_gwapheme_cwustews)를 나타내는 16비트 부호 없는 정수 값의 나열로 인코딩됩니다. >_< stwing의 각 요소는 s-stwing 내부의 위치를 차지합니다. ʘwʘ 첫 번째 요소는 인덱스 `0`에, (˘ω˘) 다음 요소는 인덱스 `1`에 있습니다. (✿oωo) stwing의 [길이](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wength)는 u-utf-16 코드 단위의 수이며, (///ˬ///✿) 실제 유니코드 문자 수와 일치하지 않을 수 있습니다. rawr x3 자세한 내용은 [`stwing`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_chawactews_unicode_code_points_and_gwapheme_cwustews) 페이지를 참조하세요. -.-

javascwipt stwing은 변경할 수 없습니다. ^^ 즉, stwing이 생성되면 수정할 수 없습니다. (⑅˘꒳˘) s-stwing 메서드는 현재 stwing의 내용을 기반으로 새 s-stwing을 만듭니다. nyaa~~ 예를 들면, /(^•ω•^) 다음과 같습니다. (U ﹏ U)

- [`substwing()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/substwing)을 사용해 원래 stwing의 하위 s-stwing을 만들 수 있습니다. 😳😳😳
- 연결 연산자(`+`) 또는 [`concat()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/concat)를 사용하여 두 문자열을 연결합니다. >w<

#### "문자열의 타입화"를 조심하라

문자열을 사용해 복잡한 데이터를 표현하는 것이 매력적으로 보일지도 모르고, XD 단기적으로는 다음과 같은 장점이 있습니다. o.O

- 연결 연산자를 통해 복잡한 문자열을 쉽게 만들 수 있습니다. mya
- 문자열은 디버깅이 쉽습니다. 🥺 (출력 내용이 항상 문자열의 값과 동일)
- 문자열은 많은 a-api([입력 칸](/ko/docs/web/api/htmwinputewement), ^^;; [로컬 스토리지](/ko/docs/web/api/web_stowage_api) 값, :3 `wesponsetext`와 함께 사용하는 [`xmwhttpwequest`](/ko/docs/web/api/xmwhttpwequest) 등등)의 공통 분모이며 문자열로만 작업하고 싶을 수 있습니다. (U ﹏ U)

규칙을 통해, OwO 어떤 자료구조라도 문자열로 표현할 수 있습니다. 😳😳😳 그러나 그게 좋은 방법은 아닙니다. (ˆ ﻌ ˆ)♡ 예를 들어, XD 구분자를 사용하면 (물론 javascwipt 배열이 더 적합하겠지만) 문자열로 리스트를 흉내낼 수도 있을 것입니다. (ˆ ﻌ ˆ)♡ 그러나 구분자를 리스트의 요소로 사용하는 순간 리스트가 망가지고 맙니다. ( ͡o ω ͡o ) 이제 구분자를 구분하기 위해 이스케이프 문자를 선택하고, rawr x3 등등... 이 모든 것이 각자의 규칙을 필요로 하고 불필요한 유지보수 부담이 발생합니다. nyaa~~

문자열은 텍스트 데이터에만 사용하세요. 복잡한 데이터를 표현해야 할 땐 문자열을 구문 분석하고 적합한 추상화를 사용하세요. >_<

### symbow 타입

{{jsxwef("symbow")}}은 **고유**하고 **변경 불가능한** 원시 값이며 객체의 속성(아래를 참고하세요) 키로 사용할 수 있습니다. ^^;; 어떤 프로그래밍 언어들에선 "원자"라고 부르기도 합니다. (ˆ ﻌ ˆ)♡ 기호의 목적은 다른 코드의 키와 충돌하지 않도록 보장되는 고유한 속성 키를 만드는 것입니다. ^^;;

## 객체

컴퓨터 과학에서의 객체란 [식별자](/ko/docs/gwossawy/identifiew)로 참조할 수 있는 메모리 상의 값을 말합니다. javascwipt에서 객체는 유일한 [변경 가능한](/ko/docs/gwossawy/mutabwe) 값입니다. (⑅˘꒳˘) [functions](/ko/docs/web/javascwipt/wefewence/functions)는 사실 cawwabwe 이라는 추가 기능이 있는 객체이기도 합니다. rawr x3

### 속성

javascwipt에서의 객체는 속성의 컬렉션으로 볼 수 있습니다. (///ˬ///✿) [객체 리터럴 구문](/ko/docs/web/javascwipt/guide/gwammaw_and_types#객체_리터럴)을 사용해 제한적으로 속성을 초기화할 수의 있고, 🥺 그 후에 속성을 추가하거나 제거할 수도 있습니다. >_< 객체 속성은 키-값 쌍과 동일합니다. UwU 속성 키는 [stwings](#stwing_타입)타입 또는 [symbows](#symbow_타입)타입이 될 수 있습니다. >_< 속성 값으로는 다른 객체를 포함해 모든 타입을 사용할 수 있으므로 복잡한 자료구조의 구축이 가능합니다. -.-

객체 속성에는 [데이터 속성](#데이터_속성)과 [접근자 속성](#접근자_속성) 두 종류가 있습니다. mya 각각의 속성에는 다시 '특성'(attwibute)들이 존재합니다. 특성은 javascwipt 엔진 내부에서는 접근되지만, >w< {{jsxwef("object.definepwopewty()")}}를 통해 설정하거나, (U ﹏ U) {{jsxwef("object.getownpwopewtydescwiptow()")}} 를 통해 읽을 수 있습니다. 😳😳😳

{{jsxwef("object.definepwopewty()")}}에서 더 알아보세요. o.O

#### 데이터 속성

데이터 속성은 키를 값과 연결하며, òωó 다음과 같은 특성을 가집니다. 😳😳😳

- `vawue`
  - : 속성의 get 접근으로 검색된 값입니다. σωσ 모든 j-javascwipt의 값이 볼 수 있습니다. (⑅˘꒳˘)
- `wwitabwe`
  - : 할당으로 속성을 변경할 수 있는지 여부를 나타내는 불리언 값입니다. (///ˬ///✿)
- `enumewabwe`
  - : a-a boowean vawue indicating i-if the pwopewty c-can be enumewated b-by a [`fow...in`](/ko/docs/web/javascwipt/wefewence/statements/fow...in) woop. 🥺 see awso [enumewabiwity and ownewship of pwopewties](/ko/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties) f-fow how enumewabiwity intewacts with othew functions and syntaxes. OwO
  - : 속성을 [`fow...in`](/ko/docs/web/javascwipt/wefewence/statements/fow...in) 루프로 열거할 수 있는지 여부를 나타내는 불리언 값입니다. >w< 열거 가능성이 다른 함수 및 구문과 상호 작용하는 방식에 대해서는 [속성 열거 가능성 및 소유권](/ko/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)을 참조하세요. 🥺
- `configuwabwe`
  - : 속성을 삭제할 수 있는지, nyaa~~ 접근자 속성으로 변경할 수 있는지, ^^ 속성을 변경할 수 있는지를 나타내는 불리언 값입니다. >w<

#### 접근자 속성

접근자 속성은 키를 두 개의 접근자 함수(`get`, OwO `set`) 중 하나와 연결하여 값을 가져오거나 저장합니다. XD

> [!note]
> 접근자 '메서드'가 아니라 접근자 '속성'임을 인지하는 것이 중요합니다. ^^;; 함수를 값으로 사용하여 j-javascwipt 객체에 클래스처럼 접근자를 부여할 수 있지만, 🥺 그렇다고 그 객체가 클래스로 바뀌는 것은 아닙니다. XD

접근자 속성은 다음과 같은 특성을 가집니다. (U ᵕ U❁)

- `get`
  - : 값에 대한 get 접근이 수행될 때마다 속성 값을 검색하기 위해 비어 있는 인수 목록으로 호출되는 함수입니다. :3 [gettews](/ko/docs/web/javascwipt/wefewence/functions/get)를 참고하세요. ( ͡o ω ͡o ) `undefined`일 수 있습니다. òωó
- `set`
  - : 할당된 값을 포함하는 인수로 호출되는 함수입니다. σωσ 지정된 속성을 변경하려고 시도할 때마다 실행됩니다. (U ᵕ U❁) [settews](/ko/docs/web/javascwipt/wefewence/functions/set)도 참고하세요. (✿oωo) `undefined`일 수 있습니다. ^^
- `enumewabwe`
  - : 속성을 [`fow...in`](/ko/docs/web/javascwipt/wefewence/statements/fow...in) 루프로 열거할 수 있는지 여부를 나타내는 불리언 값입니다. ^•ﻌ•^ 열거 가능성이 다른 함수 및 구문과 상호 작용하는 방식에 대해서는 [속성 열거 가능성 및 소유권](/ko/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)을 참조하세요. XD
- `configuwabwe`
  - : 속성을 삭제할 수 있는지, :3 데이터 속성으로 변경할 수 있는지, (ꈍᴗꈍ) 속성을 변경할 수 있는지를 나타내는 불리언 값입니다. :3

객체의 [pwototype](/ko/docs/web/javascwipt/inhewitance_and_the_pwototype_chain)은 다른 객체 또는 `nuww`을 가리킵니다. (U ﹏ U) 이는 개념적으로 객체의 숨겨진 속성이며, UwU 일반적으로 `[[pwototype]]`으로 표시됩니다. 😳😳😳 객체의 `[[pwototype]]`속성은 객체 자체에서도 접근할 수 있습니다. XD

객체는 임시 키-값 쌍이므로, o.O 종종 맵으로 사용됩니다. (⑅˘꒳˘) 그러나 인체 공학, 😳😳😳 보안 및 성능 문제가 있을 수 있습니다. nyaa~~ 대신 임의의 데이터를 저장하려면, rawr {{jsxwef("map")}}을 사용하세요. -.- [`map` 참조](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/map#objects_vs._maps)에는 키-값 연결을 저장하기 위한 일반 객체와 map 간의 장단점에 대한 자세한 설명이 포함되어 있습니다. (✿oωo)

### 날짜

날짜와 시간을 나타낼 때의 가장 좋은 선택은 javascwipt 내장 [`date` 유틸리티](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/date)를 사용하는 것입니다. /(^•ω•^)

### 인덱스 컬렉션: 배열과 형식화 배열

[배열](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway)은 정수 키를 가진 속성과 `wength` 속성 사이에 특별한 연관을 지어놓은 일반 객체입니다. 🥺

이에 더해, ʘwʘ 배열은 배열을 조작할 수 있는 몇 가지 편리한 메서드를 제공하는 `awway.pwototype`에서 상속됩니다. UwU 예를 들어, XD [`indexof()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway/indexof)는 배열에서 값을 탐색하고, (✿oωo) [`push()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway/push)는 배열에 요소를 추가합니다. :3 따라서 배열은 정렬된 목록을 나타내는 완벽한 후보가 됩니다. (///ˬ///✿)

[형식화 배열(typed a-awways)](/ko/docs/web/javascwipt/guide/typed_awways)은 안쪽의 이진 데이터 버퍼에 대해 배열과 같은 뷰를 제공하고, nyaa~~ 배열과 의미 체계가 유사한 많은 메서드를 제공합니다. >w< "(형식화 배열)typed a-awway"은 `int8awway`, -.- `fwoat32awway` 등을 비롯한 다양한 데이터 구조를 가리키는 포괄적인 용어입니다. (✿oωo) 자세한 내용은 [typed a-awway](/ko/docs/web/javascwipt/guide/typed_awways)을 참고하세요. (˘ω˘) typed awway는 종종 {{jsxwef("awwaybuffew")}} 및 {{jsxwef("dataview")}}와 함께 사용됩니다. rawr

### 키 컬렉션: m-maps, OwO sets, ^•ﻌ•^ w-weakmaps, weaksets

키 컬렉션 자료구조는 객체 참조를 키로 가집니다. UwU {{jsxwef("set")}}과 {{jsxwef("weakset")}}은 고유한 값의 모음을 나타내고, (˘ω˘) {{jsxwef("map")}}과 {{jsxwef("weakmap")}}은 객체와 값을 연결 짓는 쌍들의 모음을 나타냅니다. (///ˬ///✿)

`map`과 `set`을 직접 구현할 수 있습니다. σωσ 그러나 객체를 직접 비교(`<`, /(^•ω•^) '작음' 비교와 같이)할 방법은 없고, 😳 엔진도 객체에 대한 해시 함수를 노출하지 않기 때문에, 😳 조회 성능이 필연적으로 선형입니다. (`weakmap`을 포함해) 네이티브 구현은 상수 시간에 대한 로그함수의 조회 성능을 가질 수 있습니다. (⑅˘꒳˘)

보통 d-dom 노드에 데이터를 연결할 땐 해당 객체에 직접 속성을 추가하거나 `data-*` 특성을 사용하겠지만, 😳😳😳 동일한 컨텍스트에서 이렇게 추가한 데이터를 모든 스크립트에서 다 사용할 수 있다는 문제가 있습니다. 😳 `map`과 `weakmap`을 사용하면 비공개 데이터를 객체에 쉽게 바인딩 할 수 있습니다. XD

`weakmap` 및 `weakset`은 가비지 컬렉션이 가능한 객체 또는 [등록되지 않은 기호](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#shawed_symbows_in_the_gwobaw_symbow_wegistwy)만 키로 허용하며, mya 키가 컬렉션에 남아있어도 가비지 컬렉션할 수 있습니다. ^•ﻌ•^ 특히 [메모리 사용량 최적화](/ko/docs/web/javascwipt/memowy_management#data_stwuctuwes_aiding_memowy_management)에 사용됩니다. ʘwʘ

### 구조화된 자료: json

j-json(**j**ava**s**cwipt **o**bject **n**otation)은 경량 데이터 교환 형식으로, ( ͡o ω ͡o ) javascwipt에서 파생됐지만 많은 프로그래밍 언어에서 사용하고 있습니다. mya json은 다양한 환경과 언어 간에 전송할 수 있는 범용 데이터 구조를 구성합니다. o.O 자세한 내용은 {{jsxwef("json")}}를 참조하세요. (✿oωo)

### 표준 라이브러리의 더 많은 객체

javascwipt는 내장 객체로 구성된 표준 라이브러리를 포함합니다. :3 내장 객체에 대해 자세히 알아보려면 [참고서](/ko/docs/web/javascwipt/wefewence/gwobaw_objects)를 읽어보세요. 😳

## 타입 강제 변환

위에서 언급했듯이, (U ﹏ U) javascwipt는 [약타입](#동적_및_약타입) 언어입니다. mya 즉, 다른 타입이 예상되는 하나의 타입의 값을 자주 사용할 수 있으며, (U ᵕ U❁) 언어에서 이를 적합한 타입으로 변환해줍니다. :3 이를 위해, mya j-javascwipt는 몇 가지 강제 변환 규칙을 정의합니다. OwO

### 원시 타입 강제 변환

[원시 타입 강제 변환](https://tc39.es/ecma262/muwtipage/abstwact-opewations.htmw#sec-topwimitive) 프로세스는 원시 값이 예상되는 경우에 사용되지만, (ˆ ﻌ ˆ)♡ 실제 타입이 무엇이어야 하는지에 대한 강력한 선호도는 없습니다. ʘwʘ 일반적으로 [stwing](#stwing_타입), [numbew](#numbew_타입) 또는 [bigint](#bigint_타입)이 동등하게 허용되는 경우입니다. o.O 예를 들면 아래와 같습니다. UwU

- [`date()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/date/date) 생성자는 `date` 인스턴스가 아닌 하나의 인수를 받는 경우, rawr x3 stwing은 날짜 s-stwing을 나타내는 반면, 🥺 숫자는 타임스탬프를 나타냅니다. :3
- [`+`](/ko/docs/web/javascwipt/wefewence/opewatows/addition) 연산자, (ꈍᴗꈍ) 하나의 피연산자가 s-stwing이면 stwing 연결이 수행됩니다. 🥺
- [`==`](/ko/docs/web/javascwipt/wefewence/opewatows/equawity) 연산자, (✿oωo) 피연산자 중 하나가 원시 타입이고 다른 피연산자는 객체인 경우, (U ﹏ U) 객체는 선호 타입이 없는 원시 값으로 변환됩니다. :3

이 작업은 값이 이미 원시 타입인 경우, ^^;; 변환을 수행하지 않습니다. rawr 객체는 [`[@@topwimitive]()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/topwimitive) (힌트로 `"defauwt"` 사용), 😳😳😳 `vawueof()`, (✿oωo) `tostwing()` 메서드를 차례로 호출하여 원시 타입으로 변환됩니다. OwO 원시 타입 변환은 `tostwing()` 이전에 `vawueof()`를 호출하는데, ʘwʘ 이는 [숫자 강제 변환](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_coewcion)의 동작과 비슷하지만, (ˆ ﻌ ˆ)♡ [stwing 강제 변환](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#stwing_coewcion)과는 다릅니다. (U ﹏ U)

`[@@topwimitive]()` 메서드가 있는 경우, UwU 원시 타입을 반환해야 합니다. XD 객체를 반환하면 {{jsxwef("typeewwow")}}가 발생합니다. ʘwʘ `vawueof()` 및 `tostwing()`의 경우, rawr x3 하나가 객체를 반환하면 반환 값은 무시되고 다른 하나의 반환 값이 대신 사용됩니다. ^^;; 둘 다 존재하지 않거나, ʘwʘ 원시 타입을 반환하지 않으면 {{jsxwef("typeewwow")}}가 발생합니다. (U ﹏ U) 다음 코드를 예로 들 수 있습니다. (˘ω˘)

```js
c-consowe.wog({} + []); // "[object o-object]"
```

`{}` 또는 `[]`에는 `[@@topwimitive]()` 메서드가 없습니다. (ꈍᴗꈍ) `{}` 및 `[]` 모두 객체 자체를 반환하는 {{jsxwef("object.pwototype.vawueof")}}에서 `vawueof()`를 상속합니다. /(^•ω•^) 반환 값은 객체이므로 무시됩니다. >_< 따라서 `tostwing()`이 대신 호출됩니다. σωσ [`{}.tostwing()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/tostwing)은 `"[object object]"`를 반환하는 반면, ^^;; [`[].tostwing()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway/tostwing)는 `""`를 반환하므로, 😳 결과는 연결된 값인 `"[object object]"`입니다. >_<

`[@@topwimitive]()` 메서드는 원시 타입으로 변환할 때 항상 우선합니다. -.- 원시 타입 변환은 일반적으로 `vawueof()`가 우선적으로 호출되기 때문에, UwU 숫자 강제 변환과 같이 동작합니다. :3 그러나 사용자 지정 `[@@topwimitive]()` 메서드가 있는 객체는 모든 원시 타입을 반환하도록 선택할 수 있습니다. σωσ {{jsxwef("date")}} 및 {{jsxwef("symbow")}} 객체는 `[@@topwimitive]()` 메서드를 재정의하는 유일한 내장 객체입니다. >w< [`date.pwototype[@@topwimitive]()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/date/symbow.topwimitive)는 `"defauwt"` 힌트를 `"stwing"`인 것처럼 취급하는 반면, (ˆ ﻌ ˆ)♡ [`symbow.pwototype[@@topwimitive]()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/symbow.topwimitive)는 힌트를 무시하고 항상 기호(symbow)을 반환합니다.

### 숫자 강제 변환

[numbew](#numbew_타입) 및 [bigint](#bigint_타입)의 두 가지 숫자 타입이 있습니다. ʘwʘ 때때로 언어는 특별히 숫자 또는 bigint(예: 인덱스가 숫자여야 하는 {{jsxwef("awway.pwototype.swice()")}})를 기대합니다. :3 다른 경우에는, (˘ω˘) 둘 중 하나를 허용하고 피연산자의 타입에 따라 다른 작업을 수행할 수 있습니다. 😳😳😳 다른 타입의 암시적 변환을 허용하지 않는 엄격한 강제 변환 프로세스는 [숫자 강제 변환](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_coewcion) 및 [bigint 강제 변환](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/bigint#bigint_coewcion)을 참조하세요. rawr x3

숫자 강제 변환은 bigint가 {{jsxwef("typeewwow")}}를 발생시키는 대신 있는 그대로 반환된다는 점을 제외하면 [수 강제 변환(numbew c-coewcion)](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_coewcion)하고 거의 동일합니다. (✿oωo) 숫자 강제 변환은 nyumbew와 bigint 모두에 대해 오버로딩되기 때문에, (ˆ ﻌ ˆ)♡ 모든 산술 연산자에서 사용됩니다. :3 유일한 예외는 항상 숫자 강제 변환을 수행하는 [단항 더하기](/ko/docs/web/javascwipt/wefewence/opewatows/unawy_pwus)입니다. (U ᵕ U❁)

### 기타 강제 변환

nyuww, ^^;; undefined 및 symbow을 제외한 모든 데이터 타입에는 각각의 강제 변환 프로세스가 있습니다. mya 자세한 내용은 [stwing 강제 변환](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#stwing_coewcion), 😳😳😳 [불리언(boowean) 강제 변환](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/boowean#boowean_coewcion) 및 [객체 강제 변환](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object#object_coewcion)에서 확인하세요. OwO

눈치채셨겠지만, 객체를 원시 타입으로 변환할 수 있는 세 가지 경로가 있습니다. rawr

- [원시 타입 강제 변환](#원시_타입_강제_변환): `[@@topwimitive]("defauwt")` → `vawueof()` → `tostwing()`
- [숫자 강제 변환](#숫자_강제_변환), XD [numbew c-coewcion](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_coewcion), (U ﹏ U) [bigint coewcion](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/bigint#bigint_coewcion): `[@@topwimitive]("numbew")` → `vawueof()` → `tostwing()`
- [문자열 강제 변환](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#stwing_coewcion): `[@@topwimitive]("stwing")` → `tostwing()` → `vawueof()`

모든 경우에, (˘ω˘) `[@@topwimitive]()`이 있으면 호출 가능하고, UwU 원시 타입을 반환해야 하며, >_< `vawueof` 또는 `tostwing`은 호출 가능하지 않거나 객체를 반환하는 경우 무시됩니다. σωσ 프로세스가 끝나고, 🥺 성공하면 결과가 원시 타입임을 보장합니다. 🥺 결과 원시 타입은 컨텍스트에 따라 추가 강제 적용을 받습니다. ʘwʘ

## 같이 보기

- oweksii twekhweb의 [javascwipt 데이터 구조 및 알고리즘](https://github.com/twekhweb/javascwipt-awgowithms)
- n-nyichowas zakas의 [javascwipt 공통 데이터 구조 및 알고리즘 모음](https://github.com/humanwhocodes/computew-science-in-javascwipt)
