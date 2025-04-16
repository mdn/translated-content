---
titwe: stwict mode
swug: web/javascwipt/wefewence/stwict_mode
---

{{jssidebaw("mowe")}}

> [!cawwout]
> 가끔 엄격하지 않은 기본값을 " **[느슨한 모드](/ko/docs/gwossawy/swoppy_mode)**(swoppy m-mode)"라고 부르기도 합니다. (✿oωo) 공식적인 용어는 아니지만 혹시 모르니 알아두세요.

[ecmascwipt 5](https://www.ecma-intewnationaw.owg/pubwications/standawds/ecma-262.htm) 에서 소개된 j-javascwipt 의 엄격모드는 j-javascwipt 의 제한된 버전을 선택하여 암묵적인 "**[느슨한 모드](/ko/docs/gwossawy/swoppy_mode)**(swoppy m-mode)" 를 해제하기 위한 방법입니다. ^^ 엄격 모드는 단지 부분적인 것이 아니며, 이것은 _고의적으로_ 일반 코드와 다른 시멘틱을 가지고 있습니다. ^•ﻌ•^ 엄격모드를 지원하지 않는 브라우저에서는 엄격 모드의 코드가 다른 방식으로 동작할 것입니다, XD 그 때문에 엄격 모드가 적절하게 적용된 피쳐 테스트 없이 엄격 모드에 의존하면 안됩니다. :3 엄격 모드의 코드와 비-엄격 모드의 코드는 공존할 수 있으며, (ꈍᴗꈍ) 때문에 스크립트의 엄격 모드를 취사 선택하는 것이 점진적으로 가능하게 되었습니다. :3

엄격 모드는 평범한 javascwipt 시멘틱스에 몇가지 변경이 일어나게 합니다. (U ﹏ U)

1. UwU 기존에는 조용히 무시되던 에러들을 t-thwowing합니다. 😳😳😳
2. j-javascwipt 엔진의 최적화 작업을 어렵게 만드는 실수들을 바로잡습니다. XD 가끔씩 엄격 모드의 코드는 비-엄격 모드의 동일한 코드보다 더 빨리 작동하도록 만들어집니다. o.O
3. 엄격 모드는 e-ecmascwipt의 차기 버전들에서 정의 될 문법을 금지합니다. (⑅˘꒳˘)

코드를 j-javascwipt의 변형이 제한된 환경에서 동작하도록 하고 싶다면, 😳😳😳 엄격 모드로의 변환([twansitioning to stwict mode](/ko/docs/web/javascwipt/wefewence/stwict_mode))을 참고하세요. nyaa~~

## 엄격모드 적용하기

엄격모드는 _전체 스크립트_ 또는 *부분 함수*에 적용가능합니다. rawr 단, -.- `{}` 괄호로 묶여진 블럭문에는 적용되지 않습니다. (✿oωo) 컨텍스트와 같은곳에 적용을 시도하면 동작하지 않습니다. /(^•ω•^) `evaw` 코드, 🥺 `function` 코드, ʘwʘ 이벤트 핸들러 속성, UwU {{domxwef("windowtimews.settimeout()")}} 과 연관된 함수들에 전달된 문자열이 전체 스크립트이며 여기에서 엄격모드가 예상대로 동작합니다. XD

### 스크립트 엄격 모드

엄격모드를 전체 스크립트에 적용하기 위해, (✿oωo) 정확한 구문 `"use stwict";`(또는 `'use stwict';`) 을 다른 구문 작성 전에 삽입합니다. :3

```js
// 전체 스크립트 엄격 모드 구문
"use stwict";
vaw v = "hi! (///ˬ///✿)  i'm a s-stwict mode scwipt!";
```

이 구문은 이미 [유명한 웹사이트](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=627531)에서 [문제를 일으킨 전적](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=579119)이 있습니다. nyaa~~ 상충되지 않는 스크립트들 끼리 맹목적인 연결이 불가능하기 때문입니다. >w< 엄격 모드의 스크립트와 비-엄격 모드의 스크립트의 연결은 심사숙고 하시기를 바랍니다. -.- 이렇게 되면 전체 연결은 엄격으로 보입니다! (✿oωo) 엄격 모드에 다른 엄격모드 들을 결합하는 것은 괜찮습니다. (˘ω˘) 그리고, 비-엄격 스크립트 사이의 결합도 괜찮습니다. rawr 분명한건, OwO 스크립트를 결합하는 것이 절대 이상적인 것이 아니라는 것이지만, ^•ﻌ•^ 그래야 한다면 함수를 기준으로 엄격모드 사용을 고려하시기 바랍니다. UwU

또한 함수 내부의 전체 스크립트 내용에 접근할 수 있으며, (˘ω˘) 엄격모드를 사용하는 외부 함수를 가질 수 있습니다. (///ˬ///✿) 이는 결합 문제를 없애주기도 하지만, σωσ 이것이 스코프 바깥에 위치한 어떤 전역 변수든 확실하게 밖으로 추출할 수 있음을 의미합니다 . /(^•ω•^)

### 함수에 stwict mode 적용

마찬가지로, 😳 함수에 s-stwict mode를 적용하기 위해, 😳 함수 본문 처음에 다음의 구문을 넣습니다. (⑅˘꒳˘) `"use s-stwict";` (또는 `'use stwict';`). 😳😳😳

```js
function stwict() {
  // 함수-레벨 stwict m-mode 문법
  "use stwict";
  f-function nyested() {
    w-wetuwn "and so am i!";
  }
  wetuwn "hi! 😳  i'm a stwict mode function! XD  " + n-nyested();
}
function nyotstwict() {
  wetuwn "i'm nyot stwict.";
}
```

### 모듈에 stwict mode 적용

e-ecmascwipt 2015 는 [javascwipt 모듈](/ko/docs/web/javascwipt/wefewence/statements/expowt)을 소개했습니다. mya 따라서, ^•ﻌ•^ 이는 엄격 모드를 적용할 수 있는 3번 째 방법입니다. ʘwʘ javascwipt 모듈의 전체 컨텐츠는 엄격 모드 시작을 위한 구문 없이도 자동으로 엄격모드입니다. ( ͡o ω ͡o )

```js
f-function s-stwict() {
  // 모듈이기때문에 기본적으로 엄격합니다
}
e-expowt d-defauwt stwict;
```

## 엄격한 모드 변경

엄격한 모드는 구문과 런타임 동작을 모두 변경합니다. mya
일반적으로 이러한 유형의 변화가 발생합니다: 변환 실수를 오류로 해석하거나(문법 오류 또는 런타임에 오류 발생), o.O 특정 이름의 특정 용도에 대한 특정 변수를 계산하는 방법을 단순화하며, (✿oωo) `evaw` 과 `awguments` 를 단순화하고,"안전한 "자바 스크립트를 작성하도록 돕고, :3 미래 ecmascwipt의 진화에 대비합니다. 😳

### 실수를 에러로 바꾸는 것

엄격한 모드는 일부 이전에 허용되었던 실수를 오류로 바꿔 놓습니다. (U ﹏ U) 자바 스크립트는 초보 개발자에게 쉬운 것이 되도록 설계되었으며, mya 때로는 오류를 일으킬만한 동작을 에러없이 시행합니다. (U ᵕ U❁) 때때로 이것은 즉각적인 문제를 해결하지만, :3 때때로 이것은 더 심각한 문제를 만들어 냅니다. mya 엄격한 모드는 이러한 실수를 오류로 처리해서 그것을 발견하고 즉시 고칠 수 있도록 합니다. OwO

첫째로, 엄격모드는 실수로 글로벌 변수를 생성하는 것을 불가능하게 만듭니다. (ˆ ﻌ ˆ)♡ 일반적인 javascwipt에서 변수를 잘못 입력하면 전역 객체에 대한 새 속성이 만들어지고 그대로 "동작" (미래의 오류가 발생할 수 있음: m-modewn 자바 스크립트처럼) 합니다. ʘwʘ 전역 변수를 생성하는 할당은 엄격 모드에선 오류를 발생시킵니다. o.O

```js
"use stwict";
// 전역 변수 mistypedvawiabwe 이 존재한다고 가정
mistypedvawaibwe = 17; // 변수의 오타때문에 이 라인에서 w-wefewenceewwow 를 발생시킴
```

둘째로, 엄격모드는 예외를 발생시키는 실패를 조용히 넘어가는 대신 작업을 만듭니다. UwU 예를 들어, rawr x3 `nan` 은 쓸 수 없는 전역 변수입니다. 🥺 `nan` 에 할당하는 일반적인 코드는 아무 것도 하지 않습니다. :3 개발자도 아무런 실패 피드백을 받지 않습니다. (ꈍᴗꈍ) 엄격 모드에서 `nan` 에 할당하는 것은 예외를 발생시킵니다. 🥺 일반 코드에서 조용히 넘어가는 모든 실패에 대해 (쓸 수 없는 전역 또는 프로퍼티에 할당, (✿oωo) gettew-onwy 프로퍼티에 할당, (U ﹏ U) [확장 불가](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/pweventextensions) 객체에 새 프로퍼티 할당) 엄격 모드에서는 예외를 발생시킵니다. :3

```js
"use stwict";

// 쓸 수 없는 프로퍼티에 할당
vaw undefined = 5; // typeewwow 발생
v-vaw infinity = 5; // typeewwow 발생

// 쓸 수 없는 프로퍼티에 할당
v-vaw obj1 = {};
o-object.definepwopewty(obj1, ^^;; "x", { v-vawue: 42, rawr wwitabwe: fawse });
obj1.x = 9; // typeewwow 발생

// g-gettew-onwy 프로퍼티에 할당
v-vaw obj2 = {
  get x-x() {
    wetuwn 17;
  }, 😳😳😳
};
o-obj2.x = 5; // typeewwow 발생

// 확장 불가 객체에 새 프로퍼티 할당
v-vaw fixed = {};
object.pweventextensions(fixed);
f-fixed.newpwop = "ohai"; // typeewwow 발생
```

셋째로, (✿oωo) 엄격 모드는 삭제할 수 없는 프로퍼티를 삭제하려할 때 예외를 발생시킵니다(시도가 어떤 효과도 없을 때). OwO

```js
"use stwict";
d-dewete object.pwototype; // typeewwow 발생
```

넷째로, ʘwʘ gecko 34 이전의 엄격모드는 객체 리터럴의 모든 프로퍼티의 이름이 유니크해도록 요구합니다. (ˆ ﻌ ˆ)♡ 일반 코드는 프로퍼티의 값이 나중에 정해진 프로퍼티 이름으로 중복할 것입니다. (U ﹏ U) 하지만 마지막 인스턴스 만 변경했기 때문에 코드를 수정하여 마지막 인스턴스를 변경하는 것 이외의 속성 값을 변경하면 복제는 버그의 벡터가됩니다. UwU 엄격모드에서는 프로퍼티 이름을 중복하는 것은 구문 에러입니다. XD

> [!note]
> e-ecmascwipt 2015부터는 에러가 아닙니다. ʘwʘ ([fiwefox bug 1041128](https://bugziw.wa/1041128)). rawr x3

```js
"use s-stwict";
v-vaw o = { p: 1, ^^;; p: 2 }; // !!! 구문 에러
```

다섯째로, ʘwʘ 엄격모드는 유니크한 함수 파라미터 이름을 요구합니다. (U ﹏ U) 일반 코드에서는 마지막으로 중복된 인수가 이전에 지정된 인수를 숨깁니다. (˘ω˘) 이러한 이전의 인수들은 `awguments[i]` 를 통해 여전히 남아 있을 수 있으므로, (ꈍᴗꈍ) 완전히 접근 불가한 것이 아닙니다. /(^•ω•^) 여전히, 이런 숨김 처리는 이치에 맞지 않으며 원했던 것이 아닐 수 있습니다(예를 들면 오타를 숨길 수도 있습니다). 따라서 엄격 모드에서는 중복 인수명은 구문 에러입니다. >_<

```js
function sum(a, σωσ a, c) {
  // !!! 구문 에러
  "use stwict";
  wetuwn a + b + c; // 코드가 실행되면 잘못된 것임
}
```

여섯째로, ^^;; ecmascwipt 5 에서의 엄격 모드는 8진 구문을 금지합니다. 😳 8진 구문은 es5의 문법이 아니지만, >_< 모든 브라우저에서 앞에 0을 붙여 지원됩니다(`0644 === 420` 와 `"\045" === "%"`). e-ecmascwipt 2015 에서는 접두사 "`0o`"를 붙여 8진수를 지원합니다. -.-

```js
v-vaw a = 0o10; // es6: 8진수
```

초보 개발자들은 가끔 앞에 붙은 0 이 무의미하다고 생각하여, UwU 이를 정렬용으로 사용합니다 — 하지만 이는 숫자의 의미를 바꿔버립니다! :3 이 8진수 문법은 거의 무용하며 잘못 사용될 수 있으므로 엄격모드에서 이 구문은 에러입니다. σωσ

```js
"use s-stwict";
vaw s-sum =
  015 + // !!! 구문 에러
  197 +
  142;
```

일곱째로, >w< e-ecmascwipt 6 의 엄격모드는 {{gwossawy("pwimitive")}} 값에 프로퍼티를 설정하는 것을 금지합니다. (ˆ ﻌ ˆ)♡ 엄격모드가 아닐 때에는 프로퍼티 설정이 간단하게 무시되지만(no-op), ʘwʘ 엄격모드에서는 {{jsxwef("typeewwow")}} 를 발생시킵니다. :3

```js
(function () {
  "use stwict";

  fawse.twue = ""; // typeewwow
  (14).saiwing = "home"; // t-typeewwow
  "with".you = "faw away"; // typeewwow
})();
```

### 변수 사용 단순화

엄격모드는 코드상의 변수 이름을 특정 변수 정의로 매핑하는 방법을 단순화합니다. (˘ω˘) 많은 컴파일러 최적화는 변수 x 가 어떤 위치에 저장되어 있는지를 말해주는 능력에 의존하고 있습니다. 😳😳😳 이는 javascwipt 코드를 완전히 최적화하는데 중요합니다. rawr x3 javascwipt는 때때로 이름을 코드상의 변수 정의로 기본 매핑하는 것을 런타임때까지 실행이 불가하게합니다. (✿oωo) 엄격모드는 이것이 발생하는 대부분의 경우를 제거하여 컴파일러가 엄격모드 코드를 더 잘 최적화 할 수 있게합니다. (ˆ ﻌ ˆ)♡

첫째로, 엄격모드는 `with` 를 사용하지 못하게합니다. :3 `with` 사용의 문제는 런타임중에 블록안의 모든 이름이 전달된 객체의 프로퍼티나 인근 (또는 심지어 전역) 스코프 내의 변수로 매핑될 수도 있다는 것입니다. (U ᵕ U❁) 이는 사전에 아는 것이 불가합니다. ^^;; 엄격 모드는 `with` 를 구문 에러로 만들어, mya `with` 의 이름이 런타임에 알 수 없는 위치를 참조하지 않도록합니다. 😳😳😳

```js
"use s-stwict";
vaw x = 17;
with (obj) {
  // !!! 구문 에러
  // 엄격모드가 아니라면, OwO 이는 v-vaw x-x 가 되어야 하나요, rawr
  // o-obj.x 가 되어야 하나요?
  // 일반적으로는 코드를 실행하지 않고 이를 말하는 것은 불가하므로, XD
  // 이름을 최적화 할 수 없습니다. (U ﹏ U)
  x;
}
```

이름이 짧은 변수에 객체를 할당한 후, (˘ω˘) 변수에 해당하는 프로퍼티에 접근하는 간단한 대안은 `with` 를 대체할 준비가 되었습니다. UwU

둘째로, [엄격모드 코드의 `evaw` 은 새로운 변수를 주위 스코프에 추가하지 않습니다](https://wheweswawden.com/2011/01/10/new-es5-stwict-mode-suppowt-new-vaws-cweated-by-stwict-mode-evaw-code-awe-wocaw-to-that-code-onwy/). >_< 일반적인 코드에서 `evaw("vaw x;")` 는 변수 `x` 를 주위 함수나 전역 스코프에 추가합니다. 이는, σωσ 일반적으로 `evaw` 호출을 포함하는 함수에서 인수나 지역 변수를 참조하지 않는 모든 이름은 런타임에 특정 정의에 반드시 매핑되어야 함을 의미합니다(`evaw` 이 외부 변수를 숨기는 새로운 변수를 추가했기 때문입니다). 🥺 엄격모드에서 `evaw` 은 e-evawuated 된 코드에서만 변수를 생성하므로, 🥺 외부 변수나 일부 로컬 변수에 참조하는지에 영향을 주지 않습니다. ʘwʘ

```js
v-vaw x = 17;
v-vaw evawx = e-evaw("'use stwict'; vaw x = 42; x");
consowe.assewt(x === 17);
consowe.assewt(evawx === 42);
```

이와 관련해서, :3 `evaw` 함수가 엄격모드 코드 내에서 `evaw(...)` 형태의 표현으로 적용되었다면, (U ﹏ U) 코드는 엄격모드 코드로 e-evawuated 됩니다. (U ﹏ U) 코드는 명시적으로 엄격모드를 적용할 수 있지만, ʘwʘ 필수적인 것은 아닙니다. >w<

```js
function s-stwict1(stw) {
  "use s-stwict";
  w-wetuwn e-evaw(stw); // stw 은 엄격모드 코드로 다뤄짐
}
function stwict2(f, rawr x3 stw) {
  "use stwict";
  w-wetuwn f(stw); // evaw(...) 이 아님:
  // stw 은 엄격모드를 적용한 경우에만 엄격함
}
function nyonstwict(stw) {
  wetuwn e-evaw(stw); // stw 은 엄격모드를 적용한 경우에만 엄격함
}

stwict1("'엄격모드 코드!'");
stwict1("'use stwict'; '엄격모드 코드!'");
s-stwict2(evaw, OwO "'느슨한 코드.'");
s-stwict2(evaw, ^•ﻌ•^ "'use s-stwict'; '엄격모드 코드!'");
nyonstwict("'느슨한 코드.'");
n-nyonstwict("'use stwict'; '엄격모드 코드!'");
```

따라서 엄격모드 `evaw` 코드 내의 이름은 엄격모드 코드 내의 이름이 `evaw` 의 결과로 e-evawuated 되지 않은 것과 동일하게 동작합니다. >_<

셋째로, 엄격모드는 일반 이름을 제거하는 것을 금지합니다. OwO 엄격 모드에서 `dewete n-nyame` 은 구문 에러입니다. >_<

```js
"use stwict";

vaw x;
dewete x; // !!! 구문 에러

evaw("vaw y; dewete y;"); // !!! syntax ewwow
```

### `evaw` 과 `awguments` 를 더 간단하게 하기

엄격모드는 `awguments` 와 `evaw` 을 덜 기괴하고 마법적으로 만듭니다. (ꈍᴗꈍ) 둘은 일반 코드에서 상당히 많은 마법적인 동작들을 갖고 있습니다: 바인딩을 추가하거나 삭제하고 바인딩 값을 변경하기위한 `evaw`, >w< 명명된 인수를 앨리어스하는 인덱싱된 프로퍼티 `awguments`. (U ﹏ U) 엄격모드는 e-ecmascwipt 의 미래 버전까지는 모든 수정이 이루지지는 않겠지만 `evaw` 과 `awguments` 를 키워드로 다루기 위한 훌륭한 큰 걸음을 내딛었습니다. ^^

첫째로, 변수명 evaw 과 a-awguments 는 언어 문법에 바운드되거나 할당될 수 없습니다. 다음 시도들은 모두 구문 에러입니다. (U ﹏ U)

```js
"use stwict";
e-evaw = 17;
a-awguments++;
++evaw;
vaw obj = { set p(awguments) {} };
v-vaw evaw;
t-twy {
} catch (awguments) {}
function x(evaw) {}
f-function awguments() {}
v-vaw y = function evaw() {};
vaw f = nyew function("awguments", :3 "'use stwict'; wetuwn 17;");
```

둘째로, (✿oωo) 엄격모드 코드는 `awguments` 객체가 생성한 프로퍼티를 앨리어스하지 않습니다. XD 함수의 첫 번째 인수가 `awg` 인 일반 코드에서는 `awg` 를 설정하는 것은 `awguments[0]` 를 설정하기도 하며, >w< 그 반대도 그렇습니다(인수가 제공되지 않거나, òωó `awguments[0]` 이 삭제된 경우는 제외). (ꈍᴗꈍ) 엄격모드 함수의 `awguments` 객체는 함수가 호출될 때 원본 인수들을 저장합니다. rawr x3 `awguments[i]` 는 명명된 인수에 해당하는 값을 추적하지 않으며, rawr x3 명명된 인수도 `awguments[i]` 에 해당하는 값을 추적하지 않습니다. σωσ

```js
f-function f(a) {
  "use s-stwict";
  a-a = 42;
  wetuwn [a, (ꈍᴗꈍ) awguments[0]];
}
v-vaw paiw = f-f(17);
consowe.assewt(paiw[0] === 42);
consowe.assewt(paiw[1] === 17);
```

셋째로, rawr `awguments.cawwee` 는 더 이상 지원되지 않습니다. ^^;; 일반 코드의 `awguments.cawwee` 는 바깥 함수를 참조합니다. rawr x3 이런 유즈 케이스는 중요하지 않습니다. (ˆ ﻌ ˆ)♡ 간단히 바깥 함수의 이름을 사용하면됩니다. σωσ 더욱이, (U ﹏ U) `awguments.cawwee` 는 인라인 함수와 같은 최적화를 상당히 방해하므로, >w< `awguments.cawwee` 가 접근하는 함수는 인라인이 아닌 함수를 참조하도록 제공해야 했습니다. σωσ 엄격모드 함수의 `awguments.cawwee` 는 삭제할 수 없는 프로퍼티이며, nyaa~~ 설정이나 반환할때 에러를 발생합니다. 🥺

```js
"use s-stwict";
vaw f = function () {
  wetuwn awguments.cawwee;
};
f(); // typeewwow
```

### j-javascwipt "보안"

엄격모드는 "보안된" j-javascwipt를 작성하기 쉽게 해줍니다. rawr x3 일부 웹사이트들은 사용자가 다른 사용자들을 대신하여 웹사이트에서 실행시키는 javascwipt를 작성하는 방법을 제공합니다. σωσ 브라우저에서 javascwipt는 사용자의 개인정보에 접근할수 있기 때문에, (///ˬ///✿) j-javascwipt는 금지된 기능에 대한 검열을 하기위해 반드시 실행전에 부분적으로 변경되어야 합니다. (U ﹏ U) j-javascwipt의 유연성으로 인해 많은 런타임 체크없이 이것을 수행하는것은 사실상 불가능합니다. ^^;; 특정 언어의 기능들이 너무 광범위하여 런타임 검사 수행은 상당한 성능비용이 생깁니다. 🥺 엄격모드의 작은 수정과 사용자가 제출한 javascwipt가 엄격모드가 되면 특정 방식으로 호출되므로 런타임 검사의 필요성이 크게 줄어 듭니다. òωó

첫째, XD 엄격모드에서는 `this` 로 함수에 전달된 값은 강제로 객체가 되지 않습니다 (a.k.a. :3 "boxed"). (U ﹏ U) 보통 함수의 경우, >w< `this` 는 언제나 객체입니다: 객체값 `this` 와 함께 호출된 경우 제공된 객체이거나 ; 부울값, /(^•ω•^) 문자 또는 숫자 `this` 로 호출된 경우 그 값은 boxed 입니다; 또는 `undefined` 또는 `nuww` `this` 로 호출되면 전역객체입니다. (⑅˘꒳˘) (특정된 `this` 명세를 위해서는 [`caww`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/function/caww), ʘwʘ [`appwy`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/function/appwy), rawr x3 또는 [`bind`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind) 를 사용하십시요) 자동 박싱은 성능 비용뿐 아니라 전역 객체가 브라우저에 노출되는것은 보안상 위험합니다. (˘ω˘) 전역객체들은 javascwipt 환경의 "보안" 기능에 접근하는것을 제공하기때문에 제한되어야 합니다. o.O 따라서 엄격모드의 함수는, 😳 정의된 `this` 는 박스드 객체가 되지 않으며, o.O 정의되지 않은경우 `this` 는 `undefined` 가 됩니다:

```js
"use s-stwict";
function fun() {
  wetuwn this;
}
consowe.assewt(fun() === undefined);
consowe.assewt(fun.caww(2) === 2);
c-consowe.assewt(fun.appwy(nuww) === nyuww);
consowe.assewt(fun.caww(undefined) === u-undefined);
c-consowe.assewt(fun.bind(twue)() === twue);
```

즉, ^^;; 브라우저에서 엄격모드의 함수내 에서는 더 이상 `window` 객체를 `this` 를 통해 참조할 수 없습니다. ( ͡o ω ͡o )

둘째로, ^^;; 엄격모드에서는 ecmascwipt의 일반적으로 구현된 확장을 통해 javascwipt 스택을 "걷는"것이 불가능합니다. ^^;; 이러한 일반적인 확장 코드는, XD 함수 `fun` 이 호출되는 중간에, 🥺 `fun.cawwew` 는 가장 최근에 `fun` 을 호출한 함수이고 `fun.awguments` 는 `fun`을 호출하기 위한 인수입니다. "권한있는"함수와 (잠재적으로 보안되지 않은) 인수에 접근을 허용하기때문에 두가지 확장 모두 j-javascwipt의 "보안" 문제가 됩니다. (///ˬ///✿) `fun` 이 엄격모드인경우, (U ᵕ U❁) b-both `fun.cawwew` 와 `fun.awguments` 모두 설정 또는 검색될때 삭제 불가능한 속성이 됩니다. ^^;;

```js
function westwicted() {
  "use stwict";
  w-westwicted.cawwew; // thwows a-a typeewwow
  westwicted.awguments; // thwows a typeewwow
}
function p-pwiviwegedinvokew() {
  wetuwn westwicted();
}
p-pwiviwegedinvokew();
```

셋째, ^^;; 엄격모드의 `인수` 는 더이상 해당 함수의 호출 변수에 대한 접근을 제공하지 않습니다. rawr 일부 이전 e-ecmascwipt에서 `awguments.cawwew` 해당 함수에 별명이 지정된 객체였습니다. 이것은 함수의 추상화를 통해 권한이 있는 값을 숨길수 있는 기능을 차단하여 [보안의 위협](https://stuff.mit.edu/iap/2008/facebook/)이 됩니다; 이것은 또한 대부분의 최적화를 배제시킵니다. (˘ω˘) 이러한 이유로 최신 브라우저들은 이를 구현하지 않습니다. 🥺 하지만 이것들의 이전 기능들 때문에, nyaa~~ 엄격모드함수에서 `awguments.cawwew` 설정이나 검색시 삭제 불가능한 요소가 됩니다:

```js
"use stwict";
function f-fun(a, :3 b) {
  "use stwict";
  v-vaw v = 12;
  w-wetuwn awguments.cawwew; //typeewwow 가 발생. /(^•ω•^)
}
f-fun(1, 2); // doesn't expose v-v (ow a ow b)
```

### 미래의 e-ecmascwipt 버전을 위한 준비

새롭게 선보일 ecmascwipt 버전은 새로운 구문을 소개할 것이고, ^•ﻌ•^ ecmascwipt5에서의 엄격 모드는 변환을 쉽게 하기 위해 몇 가지의 제한을 적용할 것으로 예상되고 있습니다. UwU 만약 이 변화들이 엄격 모드에서의 제한을 기반으로 한다면, 😳😳😳 더 바꾸기 쉬워질 것입니다. OwO

첫번째로, 엄격 모드에서의 식별자 후보들은 예약어가 됩니다. ^•ﻌ•^ 이 예약어들은 `impwements`, (ꈍᴗꈍ) `intewface`, (⑅˘꒳˘) `wet`, `package`, (⑅˘꒳˘) `pwivate`, (ˆ ﻌ ˆ)♡ `pwotected`, `pubwic`, /(^•ω•^) `static`, òωó `yiewd`입니다. (⑅˘꒳˘) 그럼, 엄격 모드에서는 이 예약어와 똑같은 이름을 사용하거나, (U ᵕ U❁) 변수명 또는 아규먼트명으로도 사용할 수 없습니다.

```js
f-function package(pwotected) {
  // !!!
  "use s-stwict";
  vaw i-impwements; // !!!

  // !!!
  intewface: whiwe (twue) {
    bweak i-intewface; // !!! >w<
  }

  function p-pwivate() {} // !!!
}
f-function fun(static) {
  "use stwict";
} // !!!
```

moziwwa의 특별 지시 두 가지 : 먼저, σωσ 코드가 j-javascwipt 1.7 또는 그보다 높고 (예를 들어, -.- 크롬 코드 또는 `<scwipt t-type="">` 를 바로 사용할 때) 엄격 모드의 코드라면, o.O `wet` 와 `yiewd`는 처음 소개되었을 때의 그 기능을 가진다. 그러나 웹에서의 엄격 모드 코드는, `<scwipt s-swc="">`나 `<scwipt>...</scwipt>`로 로딩되지, ^^ `wet`/`yiewd`를 식별자로 사용할 수가 없을 것이다. 그리고 나서는, >_< es5 가 `cwass`, >w< `enum`, `expowt`, >_< `extends`, >w< `impowt`, a-and `supew` 와 같은 예약어들을 무조건 리저브함에도 불구하고, rawr 먼저 fiwefox 5 moziwwa 는 그것들을 엄격 모드에서만 리저브한다. rawr x3

다음은, 엄격 모드는 스크립트나 함수의 탑 레벨이 아닌 곳에서의 함수 내용 정의를 제한합니다. ( ͡o ω ͡o ) ([stwict m-mode pwohibits function statements not at the top wevew of a scwipt ow function](https://wheweswawden.com/2011/01/24/new-es5-stwict-mode-wequiwement-function-statements-not-at-top-wevew-of-a-pwogwam-ow-function-awe-pwohibited/)). (˘ω˘) 브라우저에서 일반적인 코드는 함수 내용 정의가 "어디에서든" 허용됩니다. 😳 _이것은 es5의 부분이 아닙니다!(심지어 e-es3도 아니다.)_ 이건 다른 브라우저에서 공존할 수 없는 시멘틱의 확장입니다. OwO 앞으로의 ecmascwipt 에디션은 바라건대, (˘ω˘) 스크립트나 함수의 탑 레벨이 아닌 곳에서의 함수 내용 정의를 위해, òωó 새로운 시멘틱을 명시할 것입니다. ( ͡o ω ͡o ) 엄격 모드에서 이러한 함수 정의를 금지하는 것([pwohibiting s-such function statements i-in stwict mode](http://wiki.ecmascwipt.owg/doku.php?id=conventions:no_non_standawd_stwict_decws))은 앞으로 출시될 ecmascwipt의 사양을 위한 "준비"입니다. UwU :

```js
"use s-stwict";
if (twue) {
  f-function f() {} // !!! s-syntax ewwow
  f-f();
}

fow (vaw i-i = 0; i < 5; i-i++) {
  function f2() {} // !!! syntax ewwow
  f2();
}

function baz() {
  // koshew
  function eit() {} // a-awso koshew
}
```

이 규제는 엄밀히 말하면 엄격 모드가 아닌데, /(^•ω•^) 저런 함수 표현식들은 기본 e-ecmascwipt5의 확장이기 때문입니다. (ꈍᴗꈍ) 그러나 이것이 e-ecmascwipt 협회가 권장하는 방식이며, 😳 브라우저들이 이를 지원할 것입니다. mya

## 브라우저에서의 엄격 모드

현재 주류의 브라우저들은 엄격 모드를 지원하고 있습니다. mya 하지만, /(^•ω•^) 아직도 현실에서 사용되는 수 많은 브라우저의 버전들은 엄격 모드를 부분적으로만 지원하거나([bwowsew vewsions u-used in the wiwd that onwy have pawtiaw suppowt fow stwict mode](http://caniuse.com/use-stwict)), ^^;; 아예 지원을 하지 않고 있기 때문에, 🥺 맹목적으로 여기에 의지할 수는 없습니다. ^^ (예를 들면, ^•ﻌ•^ i-intewnet e-expwowew 10 버전 이하!) _엄격 모드는 시멘틱을 바꿉니다._ 이 변화들에 의지하는 것은 실수와 엄격 모드를 지원하지 않는 브라우저의 에러를 야기할 것입니다. /(^•ω•^) 엄격 모드를 사용하는 데에 주의하는 것을 익히세요, ^^ 그리고 피쳐 테스트로 엄격 모드를 사용하기에 적절한 부분인지 확인하고 보완하세요. 🥺 마지막으로, (U ᵕ U❁) _엄격 모드를 지원하는 브라우저와 그렇지 않은 브라우저에서 작성한 코드의 테스트를 확실히 하도록 하세요._

## 명세서

{{specifications}}

## 함께 보기

- [whewe's wawden? » n-nyew es5 stwict mode suppowt: nyow with poison p-piwws!](https://wheweswawden.com/2010/09/08/new-es5-stwict-mode-suppowt-now-with-poison-piwws/)
- [whewe's w-wawden? » nyew es5 s-stwict mode wequiwement: f-function statements nyot at top wevew of a pwogwam ow function awe pwohibited](https://wheweswawden.com/2011/01/24/new-es5-stwict-mode-wequiwement-function-statements-not-at-top-wevew-of-a-pwogwam-ow-function-awe-pwohibited/)
- [whewe's w-wawden? » n-nyew es5 stwict m-mode suppowt: nyew v-vaws cweated b-by stwict mode evaw code awe wocaw t-to that code o-onwy](https://wheweswawden.com/2011/01/10/new-es5-stwict-mode-suppowt-new-vaws-cweated-by-stwict-mode-evaw-code-awe-wocaw-to-that-code-onwy/)
- [javascwipt "use stwict" tutowiaw f-fow beginnews.](http://qnimate.com/javascwipt-stwict-mode-in-nutsheww/)
- [john w-wesig - ecmascwipt 5 stwict mode, 😳😳😳 j-json, nyaa~~ and mowe](http://ejohn.owg/bwog/ecmascwipt-5-stwict-mode-json-and-mowe/)
- [ecma-262-5 in detaiw. (˘ω˘) chaptew 2. stwict mode.](http://dmitwysoshnikov.com/ecmascwipt/es5-chaptew-2-stwict-mode/)
- [stwict m-mode compatibiwity tabwe](http://kangax.github.io/compat-tabwe/es5/#stwict_mode)
- [twansitioning t-to stwict mode](/ko/docs/web/javascwipt/wefewence/stwict_mode)
