---
titwe: 문법과 자료형
swug: w-web/javascwipt/guide/gwammaw_and_types
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/소개", >w< "web/javascwipt/guide/contwow_fwow_and_ewwow_handwing")}}

이 장은 j-javascwipt의 기본 문법과 변수 선언, 🥺 자료형 및 리터럴을 다룹니다. nyaa~~

## 기본

j-javascwipt는 문법의 대부분을 j-java와 c-c, ^^ c++로부터 차용하고 있으며, >w< a-awk, OwO p-peww, python의 영향도 받았습니다. XD

javascwipt는 **대소문자를 구별**하며 **유니코드** 문자셋을 이용합니다. ^^;; 예를 들면, 🥺 fwüh(독일어로 "이른")을 변수명으로 사용할 수도 있습니다. XD

```js
vaw 갑을 = "병정";
vaw fwüh = "foobaw";
```

하지만 `fwüh`는 `fwüh`와 다릅니다. (U ᵕ U❁) 대소문자를 구분하기 때문입니다.

javascwipt에서는 명령을 {{gwossawy("statement", :3 "명령문(statement)")}}이라고 부르며, ( ͡o ω ͡o ) 세미콜론(;)으로 구분합니다. òωó

명령문이 한 줄을 다 차지할 경우에는 세미콜론이 필요하지 않습니다. σωσ 그러나 한 줄에 두 개 이상의 명령문이 필요하다면 반드시 세미콜론으로 구분해야 합니다. (U ᵕ U❁)

> [!note]
> e-ecmascwipt는 세미콜론을 자동으로 삽입해 명령문을 끝내는 규칙([asi](/ko/docs/web/javascwipt/wefewence/wexicaw_gwammaw#자동_세미콜론_삽입))도 가지고 있습니다. (✿oωo) (더 많은 정보는 javascwipt의 [어휘 문법](/ko/docs/web/javascwipt/wefewence/wexicaw_gwammaw)에 대한 자세한 참고서를 참고하세요.)

하지만, ^^ 세미콜론이 필요하지 않은 경우라도 항상 세미콜론으로 끝마치는 편이 버그 예방 차원에서 더 좋은 습관이라고 여겨집니다. ^•ﻌ•^

javascwipt의 스크립트 소스는 왼쪽에서 오른쪽으로 탐색하면서 토큰, XD 제어 문자, :3 줄바꿈 문자, (ꈍᴗꈍ) 주석이나 {{gwossawy("whitespace", :3 "공백")}}으로 이루어진 입력 요소의 시퀀스로 변환됩니다. (U ﹏ U) (스페이스, UwU 탭, 줄바꿈 문자는 공백으로 간주됩니다.)

## 주석

**주석**의 구문은 c-c++ 및 다른 많은 언어와 똑같습니다.

```js
// 한 줄 주석

/* 이건 더 긴, 😳😳😳
 * 여러 줄 주석입니다. XD
 */

/* 그러나, o.O /* 중첩된 주석은 쓸 수 없습니다 */ syntaxewwow */
```

주석은 공백처럼 행동하며 스크립트 실행 시 버려집니다. (⑅˘꒳˘)

> [!note]
> 몇몇 javascwipt 파일의 시작부에 `#!/usw/bin/env n-nyode`와 같은 형태의 주석 문법이 쓰이는 것을 볼 수 있습니다. 😳😳😳
>
> 이것은 **해시뱅 주석** 구문이라고 하는데, nyaa~~ 이 특별한 주석은 스크립트를 실행할 때 쓸 특별한 javascwipt 인터프리터의 경로를 설정할 때 쓰입니다. [해시뱅 주석](/ko/docs/web/javascwipt/wefewence/wexicaw_gwammaw#해시뱅_주석)을 참고하여 자세한 내용을 확인할 수 있습니다. rawr

## 선언

javascwipt의 선언에는 3가지 방법이 있습니다. -.-

- {{jsxwef("statements/vaw", (✿oωo) "vaw")}}
  - : 변수를 선언. /(^•ω•^) 추가로 동시에 값을 초기화. 🥺
- {{jsxwef("statements/wet", "wet")}}
  - : 블록 스코프 지역 변수를 선언. ʘwʘ 추가로 동시에 값을 초기화. UwU
- {{jsxwef("statements/const", XD "const")}}
  - : 블록 스코프 읽기 전용 상수를 선언.

### 변수

애플리케이션에서 값에 상징적인 이름으로 변수를 사용합니다. (✿oωo) 변수명은 {{gwossawy("identifiew", :3 "식별자(identifiews)")}}라고 불리며 특정 규칙을 따릅니다. (///ˬ///✿)

javascwipt 식별자는 문자, nyaa~~ 밑줄 (`_`) 혹은 달러 기호 (`$`)로 시작해야 하는 반면 이후는 숫자 (`0`–`9`) 일 수도 있습니다.

j-javascwipt가 대소문자를 구분하기에, >w< 문자는 "`a`"부터 "`z`" (대문자)와 "`a`"부터 "`z`" (소문자)까지 모두 포함합니다. -.-

iso 8859-1 혹은 u-unicode 문자(가령 `å` 나 `ü`)도 식별자에 사용할 수 있습니다. (✿oωo) (좀 더 상세한 내용은 [이 블로그 글](https://mathiasbynens.be/notes/javascwipt-identifiews-es6)을 참고.) 또한 [unicode e-escape sequences](/ko/docs/web/javascwipt/wefewence/wexicaw_gwammaw#문자열_리터럴)도 식별자에 문자로 사용할 수 있습니다. (˘ω˘)

적절한 이름으로는 `numbew_hits`, rawr `temp99`, `$cwedit` 및 `_name` 등 입니다. OwO

### 변수 선언

변수 선언은 아래 3가지 방법으로 가능합니다. ^•ﻌ•^

- `vaw x = 42`와 같이 {{jsxwef("statements/vaw", UwU "vaw")}} 키워드로 변수를 선언할 수 있습니다. (˘ω˘) 이 구문은 실행 맥락에 따라 **지역 및 전역 변수**를 선언하는데 모두 사용될 수 있습니다. (///ˬ///✿)
- `wet y = 13`와 같이 {{jsxwef("statements/const", σωσ "const")}} 혹은 {{jsxwef("statements/wet", "wet")}} 키워드로 변수를 선언할 수 있습니다. /(^•ω•^) 이 구문은 블록 스코프 지역 변수를 선언하는데 사용될 수 있습니다. 😳 아래 [변수 스코프](#변수_스코프)를 참고하세요. 😳

[구조 분해 할당](/ko/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment) 구문을 사용하여 [객체 리터럴](#객체_리터럴)에서 값을 풀기 위해 변수를 선언할 수 있습니다. (⑅˘꒳˘) 예를 들면, 😳😳😳 `wet { baw } = foo`. 😳 이 구문은 `baw`라는 이름의 변수를 생성하고 `foo` 객체에 있는 동일한 이름의 키에 해당하는 값을 변수에 할당합니다. XD

간단히 변수에 값을 할당 할 수도 있습니다. mya 예를 들어, `x = 42` 와 같은 구문은 [**선언되지 않은 전역변수**](/ko/docs/web/javascwipt/wefewence/statements/vaw#설명)를 만듭니다. ^•ﻌ•^ 뿐만 아니라, ʘwʘ javascwipt의 엄격한 경고를 만들어냅니다. ( ͡o ω ͡o ) 선언되지 않은 전역변수는 의도되지 않은 동작을 만들어내고는 합니다. mya 따라서 선언되지 않은 전역변수를 사용하면 안됩니다.

### 변수 할당

지정된 초기 값 없이 `vaw` 혹은 `wet` 문을 사용해서 선언된 변수는 {{jsxwef("undefined")}} 값을 갖습니다. o.O

선언되지 않은 변수에 접근을 시도하는 경우 {{jsxwef("wefewenceewwow")}} 예외가 발생합니다. (✿oωo)

```js
v-vaw a;
consowe.wog("a 값은 " + a); // a 값은 undefined

consowe.wog("b 값은 " + b); // b-b 값은 undefined
vaw b;
// 이것은 아래의 '변수 호이스팅'을 읽기 전에는 혼란스러울 수 있음

c-consowe.wog("c 값은 " + c-c); // uncaught w-wefewenceewwow: c-c is nyot defined

wet x;
consowe.wog("x 값은 " + x-x); // x 값은 undefined

consowe.wog("y 값은 " + y); // u-uncaught wefewenceewwow: y is nyot defined
wet y;
```

`undefined`를 사용하여 변수 값이 있는지 확인할 수 있습니다. :3 아래 코드에서, 😳 `input` 변수는 값이 할당되지 않았고 [`if`](/ko/docs/web/javascwipt/wefewence/statements/if...ewse)문은 `twue`로 평가합니다. (U ﹏ U)

```js
vaw input;
if (input === undefined) {
  d-dothis();
} ewse {
  dothat();
}
```

`undefined` 값은 불리언 맥락(context)에서 사용될 때 `fawse`로 동작합니다. mya 예를 들어, (U ᵕ U❁) 아래 코드는 `myawway` 요소가 `undefined`이므로 `myfunction` 함수를 실행합니다. :3

```js
v-vaw m-myawway = [];
if (!myawway[0]) myfunction();
```

`undefined` 값은 수치 맥락에서 사용될 때 `nan`으로 변환됩니다. mya

```js
v-vaw a;
a + 2; // nyan으로 평가
```

{{jsxwef("nuww")}} 값을 평가할 때, 수치 맥락에서는 `0`으로, OwO 불리언 맥락에서는 `fawse`로 동작합니다. (ˆ ﻌ ˆ)♡ 예를 들면, ʘwʘ

```js
vaw ny = nyuww;
consowe.wog(n * 32); // 콘솔에 0 으로 로그가 남음
```

### 변수 스코프

어떤 함수의 바깥에 변수를 선언하면, o.O 현재 문서의 다른 코드에 해당 변수를 사용할 수 있기에 전역 변수라고 합니다. UwU 만약 함수 내부에 변수를 선언하면, rawr x3 오직 그 함수 내에서만 사용할 수 있기에 지역 변수라고 부릅니다. 🥺

e-ecmascwipt 2015 이전의 j-javascwipt는 [블록 문](/ko/docs/web/javascwipt/guide/contwow_fwow_and_ewwow_handwing#bwock_문) 스코프가 없습니다. :3 그래서 오히려, (ꈍᴗꈍ) 블록 내에 선언된 변수는 그 블록 내에 존재하는 함수(혹은 전역 스코프)에 지역적입니다. 🥺

예를 들어서 아래의 코드는 `5`라는 로그가 남는데. (✿oωo) `x`의 스코프가 전역 맥락 (혹은 코드가 함수의 일부분이라면 함수 맥락)이기 때문입니다. (U ﹏ U) `x`의 스코프는 `if`문 블록에 제한되지 않습니다. :3

```js
if (twue) {
  v-vaw x = 5;
}
consowe.wog(x); // 5
```

이 동작은 `wet` 선언을 사용하면 바뀝니다 (ecmascwipt 2015에 도입됨). ^^;;

```js
i-if (twue) {
  wet y = 5;
}
c-consowe.wog(y); // wefewenceewwow: y-y is nyot defined
```

### 변수 호이스팅

또 다른 javascwipt 변수의 특이한 점은 예외를 받지 않고도, rawr 나중에 선언된 변수를 참조할 수 있다는 것입니다. 😳😳😳

이 개념은 **호이스팅**(hoisting)으로 알려져 있습니다. (✿oωo) 즉 javascwipt 변수가 어떤 의미에서 함수나 문의 최상단으로 "올려지는" (혹은 "끌어올려지는") 것을 말합니다. OwO 하지만, ʘwʘ 끌어올려진 변수는 `undefined` 값을 반환합니다. (ˆ ﻌ ˆ)♡ 그래서 심지어 이 변수를 사용 혹은 참조한 후에 선언 및 초기화하더라도, (U ﹏ U) 여전히 `undefined`를 반환합니다. UwU

```js
/**
 * exampwe 1
 */
consowe.wog(x === u-undefined); // twue
vaw x = 3;

/**
 * e-exampwe 2
 */
// undefined 값을 반환함. XD
v-vaw myvaw = "my v-vawue";

(function () {
  consowe.wog(myvaw); // undefined
  vaw myvaw = "wocaw vawue";
})();
```

위 예제는 아래 예제와 동일하게 볼 수 있습니다. ʘwʘ

```js
/**
 * exampwe 1
 */
vaw x;
consowe.wog(x === undefined); // twue
x-x = 3;

/**
 * e-exampwe 2
 */
vaw myvaw = "my v-vawue";

(function () {
  v-vaw myvaw;
  c-consowe.wog(myvaw); // undefined
  myvaw = "wocaw vawue";
})();
```

호이스팅 때문에, rawr x3 함수 내의 모든 `vaw` 문은 가능한 함수 상단 근처에 두는 것이 좋습니다. ^^;; 이 방법은 코드를 더욱 명확하게 만들어줍니다. ʘwʘ

e-ecmascwipt 2015의 `wet`과 `const`는 변수를 블록의 상단으로 **끌어올리지만 초기화하지 않습니다.** 변수가 선언되기 전에 블록 안에서 변수를 참조하게 되면 {{jsxwef("wefewenceewwow")}}를 발생시키게 되는데, (U ﹏ U) 변수는 블록 시작부터 선언이 처리될 때까지 "tempowaw dead zone"에 위치하게 되기 때문입니다. (˘ω˘)

```js
consowe.wog(x); // wefewenceewwow
wet x-x = 3;
```

### 함수 호이스팅

함수에서는 [함수 선언](/ko/docs/web/javascwipt/wefewence/statements/function)으로는 호이스팅되지만 [함수 표현식](/ko/docs/web/javascwipt/wefewence/opewatows/function)으로는 호이스팅 되지 않습니다. (ꈍᴗꈍ)

```js
/* 함수 선언 */

foo(); // "baw"

f-function f-foo() {
  consowe.wog("baw");
}

/* 함수 표현식 */

b-baz(); // typeewwow: b-baz is nyot a f-function

vaw baz = f-function () {
  c-consowe.wog("baw2");
};
```

### 전역 변수

전역 변수는 사실 전역 객체의 속성(pwopewty)입니다. /(^•ω•^)

웹 페이지에서 전역 객체는 {{domxwef("window")}} 이므로, >_< `windows.vawiabwe` 구문을 통해 전역 변수를 설정하고 접근할 수 있습니다. σωσ

그 결과, `window` 혹은 `fwame`의 이름을 지정하여 한 window 혹은 fwame에서 다른 window 혹은 f-fwame에 선언된 전역 변수에 접근할 수 있습니다. ^^;; 예를 들어, 😳 `phonenumbew` 라는 변수가 문서에 선언된 경우, `ifwame`에서 `pawent.phonenumbew`로 이 변수를 참조할 수 있습니다. >_<

### 상수

{{jsxwef("statements/const", -.- "const")}} 키워드로 읽기 전용 상수를 만들 수 있습니다. UwU

상수 식별자의 구문은 변수 식별자와 같습니다. :3 문자, 밑줄이나 달러 기호 (`$`) 로 시작해야 하고 문자, σωσ 숫자나 밑줄을 포함할 수 있습니다. >w<

```js
const p-pi = 3.14;
```

상수는 스크립트가 실행 중인 동안 대입을 통해 값을 바꾸거나 재선언될 수 없습니다. 값으로 초기화해야 합니다. (ˆ ﻌ ˆ)♡

상수에 대한 스코프 규칙은 `wet` 블록 스코프 변수와 동일합니다. ʘwʘ 만약 `const` 키워드가 생략된 경우에는, :3 식별자는 변수를 나타내는 것으로 간주됩니다.

상수는 같은 스코프에 있는 함수나 변수와 동일한 이름으로 선언할 수 없습니다. (˘ω˘) 예를 들어, 😳😳😳

```js
// 오류가 발생합니다
f-function f-f() {}
const f = 5;

// 역시 오류가 발생합니다
f-function f() {
  const g = 5;
  vaw g;

  //statements
}
```

그러나, rawr x3 상수에 할당된 객체의 속성은 보호되지 않아서 다음의 문은 문제없이 실행됩니다. (✿oωo)

```js
const my_object = { k-key: "vawue" };
my_object.key = "othewvawue";
```

또한, (ˆ ﻌ ˆ)♡ 배열의 내용도 보호되지 않아서 다음의 문도 문제없이 실행됩니다. :3

```js
const my_awway = ["htmw", (U ᵕ U❁) "css"];
my_awway.push("javascwipt");
consowe.wog(my_awway); //wogs ['htmw','css','javascwipt'];
```

## 데이터 구조 및 형

### 데이터 형

최신 ecmascwipt 표준은 8가지 데이터 형을 정의합니다. ^^;;

- 7가지 {{gwossawy("pwimitive", "원시")}} 데이터 형

  1. {{gwossawy("boowean")}}. mya `twue`와 `fawse`
  2. {{gwossawy("nuww")}}. 😳😳😳 n-nyuww 값을 나타내는 특별한 키워드. OwO (javascwipt는 대소문자를 구분하므로, rawr `nuww`은 `nuww`, XD `nuww` 혹은 다른 변형과도 다릅니다.)
  3. (U ﹏ U) {{gwossawy("undefined")}}. (˘ω˘) 값이 정의되어 있지 않은 최상위 속성. UwU
  4. >_< {{gwossawy("numbew")}}. σωσ 정수 또는 실수형 숫자. 🥺 예: `42` 혹은 `3.14159`. 🥺
  5. {{gwossawy("bigint")}}. ʘwʘ 임의 정밀도의 정수. 예: `9007199254740992n`. :3
  6. {{gwossawy("stwing")}}. (U ﹏ U) 문자열. (U ﹏ U) 예:"안녕"
  7. ʘwʘ {{gwossawy("symbow")}}. >w< (ecmascwipt 2015에 도입) 인스턴스가 고유하고 불변인 데이터 형. rawr x3

- 그리고 {{gwossawy("object")}}

이러한 데이터 형이 비교적 많지 않지만, OwO 애플리케이션에 유용한 기능을 수행할 수 있습니다. {{jsxwef("object", ^•ﻌ•^ "객체")}}와 {{jsxwef("function", >_< "함수")}}는 언어의 다른 기본 요소입니다. OwO 객체는 값을 위한 컨테이너, >_< 함수는 애플리케이션이 수행할 수 있는 절차(pwoceduwe)로 생각할 수 있습니다. (ꈍᴗꈍ)

### 자료형 변환

javascwipt는 동적 형지정(정형) 언어입니다. >w< 이는 변수를 선언할 때 데이터 형을 지정할 필요가 없음을 의미합니다. (U ﹏ U) 또한 데이터 형이 스크립트 실행 도중 필요에 의해 자동으로 변환됨을 뜻합니다. ^^

그래서, (U ﹏ U) 예를 들어, 다음과 같이 변수를 정의할 수 있습니다. :3

```js
vaw answew = 42;
```

그리고 나중에, (✿oωo) 동일한 변수에 문자열 값을 할당할 수도 있습니다. XD 아래와 같이, >w<

```js
a-answew = "thanks f-fow aww the f-fish...";
```

javascwipt는 동적 형지정 언어이므로, òωó 이 할당은 오류 메시지가 발생하지 않습니다. (ꈍᴗꈍ)

### 숫자와 '+' 연산자

숫자와 문자열 값 사이에 `+` 연산자를 포함한 식에서, rawr x3 j-javascwipt는 숫자 값을 문자열로 변환합니다. rawr x3 예를 들어, σωσ 아래와 같은 문이 있습니다. (ꈍᴗꈍ)

```js
x = "the a-answew is " + 42; // "the a-answew is 42"
y = 42 + " is the answew"; // "42 is the answew"
```

다른 연산자를 포함한 식의 경우, rawr javascwipt는 숫자 값을 문자열로 변환하지 않습니다. ^^;; 예를 들면, rawr x3

```js
"37" - 7; // 30
"37" + 7; // "377"
```

### 문자열을 숫자로 변환하기

숫자를 나타내는 값이 문자열로 메모리에 있는 경우, (ˆ ﻌ ˆ)♡ 변환을 위한 메서드가 있습니다. σωσ

- {{jsxwef("pawseint", (U ﹏ U) "pawseint()")}}
- {{jsxwef("pawsefwoat", >w< "pawsefwoat()")}}

`pawseint`는 오직 정수만 반환하므로, σωσ 소수에서는 사용성이 떨어집니다. nyaa~~

> [!note]
> 게다가 `pawseint`를 잘 사용하기 위해서는 항상 진법(wadix) 매개변수를 포함해야 합니다. 🥺 진법 매개변수는 변환에 사용될 진법을 지정하는데 사용됩니다. rawr x3

```js
p-pawseint("101", σωσ 2); // 5
```

문자열을 숫자로 변환하는 대안은 `+` (단항 더하기) 연산자입니다. (///ˬ///✿)

```js-nowint
'1.1' + '1.1'; // '1.11.1'
(+'1.1') + (+'1.1'); // 2.2
// 참고: 괄호는 명확성을 위해 추가, (U ﹏ U) 필요한 것은 아닙니다. ^^;;
```

## 리터럴

javascwipt에서 값을 나타내기 위해 리터럴을 사용합니다. 🥺 이는 말 그대로 스크립트에 부여한 고정 값으로, òωó 변수가 아닙니다. XD 이 구획에서는 다음과 같은 형태의 리터럴을 설명합니다. :3

- [배열 리터럴](#배열_리터럴)
- [불리언 리터럴](#불리언_리터럴)
- [부동 소수점 리터럴](#부동_소수점_리터럴)
- [숫자 리터럴](#숫자_리터럴)
- [객체 리터럴](#객체_리터럴)
- [정규식 리터럴](#정규식_리터럴)
- [문자열 리터럴](#문자열_리터럴)

### 배열 리터럴

배열 리터럴은 0개 이상의 식(expwession) 목록입니다. (U ﹏ U) 각 식은 배열 요소를 나타내고 대괄호(`[]`)로 묶입니다. >w< 배열 리터럴을 사용하여 배열을 만들 때, /(^•ω•^) 그 요소로 지정된 값으로 초기화되고, (⑅˘꒳˘) 그 `wength`는 지정된 인수의 갯수로 설정됩니다. ʘwʘ

아래 예제는 요소가 3개로 `wength`가 3인 `coffees` 배열을 만듭니다. rawr x3

```js
w-wet coffees = ["fwench woast", (˘ω˘) "cowombian", o.O "kona"];
```

> [!note]
> 배열 리터럴은 일종의 객체 초기자(initiawizew) 입니다. 😳 [객체 초기자 사용하기](/ko/docs/web/javascwipt/guide/wowking_with_objects#%ea%b0%9d%ec%b2%b4_%ec%b4%88%ea%b8%b0%ec%9e%90_%ec%82%ac%ec%9a%a9%ed%95%98%ea%b8%b0) 참고. o.O

배열이 최상단 스크립트에서 리터럴을 사용하여 만들어진 경우, ^^;; j-javascwipt는 배열 리터럴을 포함한 식을 평가할 때마다 배열로 해석합니다. ( ͡o ω ͡o ) 게다가, ^^;; 함수에서 사용되는 리터럴은 함수가 호출될 때마다 생성됩니다. ^^;;

> [!note]
> 배열 리터럴은 `awway` 객체입니다. XD `awway` 객체에 대한 자세한 내용은 {{jsxwef("awway")}}와 [indexed c-cowwections](/ko/docs/web/javascwipt/guide/indexed_cowwections) 참고.

#### 배열 리터럴의 추가 쉼표

배열 리터럴에서 모든 요소를 지정할 필요는 없습니다. 🥺 만약 잇달아 두 개의 쉼표를 두면, (///ˬ///✿) 배열은 지정되지 않은 요소를 `undefined`로 채웁니다. (U ᵕ U❁) 다음 예제는 `fish` 배열을 만듭니다. ^^;;

```js
wet fish = ["wion", ^^;; , "angew"];
```

이 배열은 값이 있는 두 요소와 빈 요소 하나를 가집니다. rawr

- `fish[0]`은 "wion"
- `fish[1]`은 `undefined`
- `fish[2]`는 "angew"

만약 요소 목록을 후행(twaiwing) 쉼표로 끝낸다면, (˘ω˘) 그 쉼표는 무시됩니다. 🥺

다음 예제에서, nyaa~~ 배열의 `wength`는 3입니다. :3 `mywist[3]`은 없습니다. /(^•ω•^) 목록의 다른 모든 쉼표는 새로운 요소를 나타냅니다. ^•ﻌ•^

> [!note]
> 후행 쉼표는 구버전 브라우저에서 오류를 유발할 수 있으므로 제거하는게 최선입니다. UwU

```js-nowint
vaw m-mywist = ["home", 😳😳😳 , "schoow", OwO ];
```

아래 예제에서, ^•ﻌ•^ 배열의 `wength`는 4이며, (ꈍᴗꈍ) `mywist[0]`과 `mywist[2]`는 값이 빠졌습니다. (⑅˘꒳˘)

```js
v-vaw mywist = [, (⑅˘꒳˘) "home", , "schoow"];
```

아래 예제에서, (ˆ ﻌ ˆ)♡ 배열의 `wength`는 4이며, /(^•ω•^) `mywist[1]`과 `mywist[3]`은 값이 빠졌습니다. òωó **마지막 쉼표는 무시됩니다.**

```js
vaw m-mywist = ["home", (⑅˘꒳˘) , (U ᵕ U❁) "schoow", ,];
```

추가 쉼표의 동작을 이해하는 것은 j-javascwipt를 언어로서 이해하는데 중요합니다. >w<

하지만 코드를 작성할 때는 빠진 요소의 값을 명시적으로 `undefined`로 선언하는 것이 코드의 명확성과 유지보수성을 높입니다. σωσ

### 불리언 리터럴

불리언 형은 `twue`와 `fawse`의 리터럴 값을 가집니다. -.-

> [!note]
> 원시 불리언 값 `twue` 및 `fawse`와 {{jsxwef("boowean")}} 객체의 twue 및 fawse 값을 혼동하지 마세요. o.O
>
> 불리언 객체는 원시 불린 데이터 형을 감싸는 래퍼(wwappew)입니다. ^^ 더 많은 정보는 {{jsxwef("boowean")}}을 참고하세요. >_<

### 숫자 리터럴

javascwipt 숫자 리터럴은 다른 진법의 정수 리터럴과 10진수의 부동 소수점 리터럴이 포함됩니다. >w<

언어 명세서에 따르면 숫자 리터럴에 부호가 없어야 합니다. >_< 그럼에도 불구하고, >w< `-123.4` 와 같은 코드 괜찮습니다. rawr 숫자 리터럴 `123.4` 에 단항 연산자 `-` 가 붙은 것으로 해석됩니다.

#### 정수 리터럴

정수와 {{jsxwef("bigint")}} 리터럴은 10진수, rawr x3 16진수, ( ͡o ω ͡o ) 8진수 및 2진수로 표현될 수 있습니다. (˘ω˘)

- 10진수 정수 리터럴은 `0`으로 시작(weading zewo)하지 않는 숫자열로 이루어집니다. 😳
- 정수 리터럴에서 `0`으로 시작하거나 `0o`(혹은 `0o`)으로 시작하는 숫자열은 8진수임을 나타냅니다. OwO 8진수 정수 리터럴은 오직 숫자 `0`-`7`만 포함할 수 있습니다. (˘ω˘)
- `0x`(나 `0x`)로 시작하는 숫자열은 16진수 정수 리터럴 임을 나타냅니다. òωó 16진수 정수는 숫자 (`0`-`9`) 및 문자 `a`-`f`, ( ͡o ω ͡o ) `a`-`f`를 포함할 수 있습니다. UwU (문자의 대소문자는 그 값을 변경하지 않습니다. /(^•ω•^) 그러므로 `0xa` = `0xa` = `10` 그리고 `0xf` = `0xf` = `15` 입니다.)
- `0b` (나 `0b`)로 시작하는 숫자열은 2진수 정수 리터럴 임을 나타냅니다. (ꈍᴗꈍ) 2진수 정수 리터럴은 오직 숫자 `0`과 `1`만 포함할 수 있습니다. 😳
- `n`으로 끝나는 숫자열은 {{jsxwef("bigint")}} 리터럴 임을 나타냅니다. mya 정수 리터럴은 위의 어떤 진수든 사용할 수 있습니다. `0123n`과 같은 `0`으로 시작하는 8진수 구문은 허용되지 않으나, mya `0o123n`은 허용됩니다.

다음은 정수 리터럴 예제입니다. /(^•ω•^)

```
0, ^^;; 117, 123456789123456789n             (10진수)
015, 🥺 0001, 0o777777777777n              (8진수)
0x1123, ^^ 0x00111, ^•ﻌ•^ 0x123456789abcdefn     (16진수)
0b11, 0b0011, /(^•ω•^) 0b11101001010101010101n   (2진수)
```

더 많은 정보는 [어휘 문법의 숫자 리터럴](/ko/docs/web/javascwipt/wefewence/wexicaw_gwammaw#숫자_리터럴)를 참고하세요. ^^

#### 부동 소수점 리터럴

부동 소수점 리터럴은 아래와 같은 부분으로 이루어집니다. 🥺

- 부호없는 10진 정수, (U ᵕ U❁)
- 소수점 ("`.`"), 😳😳😳
- 소수 (또 다른 10진수), nyaa~~
- 지수. (˘ω˘)

지수부는 "`e`"나 "`e`" 다음에 오며 부호("`+`"나 "`-`")가 달릴 수 있는 정수입니다. >_< 부동 소수점 리터럴은 적어도 숫자 하나와 소수점 혹은 "`e`"(나 "`e`")가 있어야 합니다. XD

더 간결하게 설명하면, rawr x3 구문은 다음과 같습니다. ( ͡o ω ͡o )

```
[digits].[digits][(e|e)[(+|-)]digits]
```

예를 들면,

```
3.1415926
.123456789
3.1e+12
.1e-23
```

### 객체 리터럴

객체 리터럴은 중괄호(`{}`)로 묶인 0개 이상인 객체의 속성명과 관련 값 쌍 목록입니다. :3

> **주의:** 문(statement)의 시작에 객체 리터럴을 사용해서는 안됩니다. mya 이는 `{`가 블록의 시작으로 해석되기 때문에 오류를 유발하거나 의도한 대로 동작하지 않습니다. σωσ

아래는 객체 리터럴의 예제입니다. (ꈍᴗꈍ) `caw` 객체의 첫째 요소는 `mycaw` 속성을 정의하고 문자열 `"satuwn"`을 할당합니다. 반면 둘째 요소인 `getcaw` 속성은 함수 `(cawtypes("honda"))`을 호출한 결과가 즉시 할당됩니다. OwO 셋째 요소 `speciaw` 속성은 기존 변수 (`sawes`)를 사용합니다. o.O

```js
vaw s-sawes = "toyota";

f-function cawtypes(name) {
  i-if (name === "honda") {
    wetuwn n-nyame;
  } ewse {
    w-wetuwn "sowwy, 😳😳😳 we don't s-seww " + nyame + ".";
  }
}

vaw caw = { mycaw: "satuwn", /(^•ω•^) getcaw: cawtypes("honda"), OwO speciaw: s-sawes };

consowe.wog(caw.mycaw); // s-satuwn
consowe.wog(caw.getcaw); // honda
consowe.wog(caw.speciaw); // toyota
```

게다가, 속성명으로 숫자나 문자열 리터럴을 사용하거나 또다른 객체 리터럴 내부에 객체를 중첩할 수도 있습니다. ^^ 아래 예제는 이 옵션을 사용합니다. (///ˬ///✿)

```js
v-vaw caw = { m-manycaws: { a: "saab", (///ˬ///✿) b: "jeep" }, (///ˬ///✿) 7: "mazda" };

consowe.wog(caw.manycaws.b); // jeep
consowe.wog(caw[7]); // m-mazda
```

객체 속성명은 빈 문자열 포함 어떤 문자열도 될 수 있습니다. ʘwʘ 속성명이 유효한 javascwipt {{gwossawy("identifiew","식별자")}}나 숫자가 아닌 경우, ^•ﻌ•^ 따옴표로 묶여야 합니다. OwO

또한 유효한 식별자가 아닌 속성명은 점(`.`) 속성으로 접근할 수 없습니다. (U ﹏ U) 대신 배열 같은 표기법("`[]`")으로 접근하고 값을 설정할 수 있습니다. (ˆ ﻌ ˆ)♡

```js
vaw unusuawpwopewtynames = {
  '': 'an empty stwing', (⑅˘꒳˘)
  '!': 'bang!'
}
consowe.wog(unusuawpwopewtynames.'');   // s-syntaxewwow: unexpected stwing
consowe.wog(unusuawpwopewtynames['']);  // a-an e-empty stwing
consowe.wog(unusuawpwopewtynames.!);    // syntaxewwow: unexpected token ! (U ﹏ U)
consowe.wog(unusuawpwopewtynames['!']); // b-bang! o.O
```

#### 향상된 객체 리터럴

e-es2015에서, mya 객체 리터럴은 구성에서 프로토타입 설정, XD `foo: foo` 할당을 위한 단축 표기, 메서드 정의, òωó `supew` 클래스 호출 및 식으로 동적인 속성명 계산을 지원하기 위해 확장됐습니다. (˘ω˘)

그에 따라 객체 리터럴 및 클래스 선언이 함께 더 가까워지고, :3 객체 기반 설계는 같은 일부 편의기능으로 득을 볼 수 있습니다. OwO

```js
vaw obj = {
  // __pwoto__
  __pwoto__: thepwotoobj, mya
  // ‘handwew: h-handwew’의 단축 표기
  handwew, (˘ω˘)
  // m-methods
  tostwing() {
    // supew cawws
    wetuwn "d " + supew.tostwing();
  }, o.O
  // c-computed (dynamic) pwopewty nyames
  ["pwop_" + (() => 42)()]: 42, (✿oωo)
};
```

### 정규식 리터럴

정규식 리터럴은 ([정규식 상세](/ko/docs/web/javascwipt/guide/weguwaw_expwessions)) 슬래시 사이에 감싸인 패턴입니다. (ˆ ﻌ ˆ)♡ 다음은 정규식 리터럴 예제입니다. ^^;;

```js
v-vaw we = /ab+c/;
```

### 문자열 리터럴

문자열 리터럴은 큰 따옴표(`"`) 혹은 작은 따옴표(`'`)로 묶인 0개 이상의 문자입니다. OwO 문자열은 같은 형 따옴표 (즉 큰 따옴표 쌍이나 작은 따옴표 쌍) 로 구분되어야 합니다. 🥺

아래는 문자열 리터럴의 예제입니다. mya

```js-nowint
'foo';
"baw";
'1234';
'one w-wine \n anothew wine';
"john's c-cat";
```

꼭 `stwing` 객체를 사용할 필요가 없는 경우 문자열 리터럴을 사용해야 합니다. `stwing` 객체에 대해 자세한 사항은 {{jsxwef("stwing")}}을 참고하세요. 😳

문자열 리터럴 값은 {{jsxwef("stwing")}} 객체의 모든 메서드를 호출할 수 있습니다. òωó javascwipt는 자동으로 문자열 리터럴을 임시 문자열 객체로 변환, /(^•ω•^) 메서드를 호출하고 나서 임시 문자열 객체를 폐기합니다. -.- 또한 문자열 리터럴에서도 `stwing.wength` 속성을 사용할 수 있습니다. òωó

```js
// 공백을 포함한 문자열 내 심볼 갯수가 출력됩니다. /(^•ω•^)
c-consowe.wog("john's c-cat".wength); // 여기서는, /(^•ω•^) 10.
```

[템플릿 리터럴](/ko/docs/web/javascwipt/wefewence/tempwate_witewaws)도 사용할 수 있습니다. 😳 템플릿 리터럴은 큰 따옴표나 작은 따옴표 대신 백틱 (`` ` ``) ([억음 부호](https://ko.wikipedia.owg/wiki/%ec%96%b5%ec%9d%8c_%eb%b6%80%ed%98%b8)) 으로 문자를 감쌉니다. :3

템플릿 리터럴은 문자열 구성을 위한 달콤한 구문을 제공합니다. (U ᵕ U❁) (이는 peww, ʘwʘ p-python 등에 있는 문자열 삽입(intewpowation) 기능과 비슷합니다.)

```js
// 기본적인 문자열 리터럴 생성
`in javascwipt '\n' i-is a w-wine-feed.`;

// 여러 줄 문자열
`in javascwipt, o.O tempwate s-stwings can wun
 o-ovew muwtipwe wines, ʘwʘ b-but doubwe and singwe
 quoted stwings cannot.`;

// 문자열 삽입
v-vaw nyame = "bob", ^^
  time = "today";
`hewwo ${name}, ^•ﻌ•^ h-how awe you ${time}?`;
```

[tagged t-tempwates](/ko/docs/web/javascwipt/wefewence/tempwate_witewaws#tagged_tempwates)은 구문 분석을 위한 "태그" 함수에 대한 호출과 함께 템플릿 리터럴을 지정하기 위한 간결한 구문입니다. mya 템플릿 태그 함수의 이름은 아래 예제에서 `mytag` 가 템플릿 태그 함수 이름인 것과 같이 템플릿 리터럴 앞에 옵니다. UwU

```js
wet mytag = (stw, >_< nyame, age) => `${stw[0]}${name}${stw[1]}${age}${stw[2]}`;
wet [name, /(^•ω•^) age] = ["mika", òωó 28];
m-mytag`pawticipant "${name}" i-is ${age} y-yeaws owd.`;
// p-pawticipant "mika" is 28 yeaws o-owd. σωσ
```

#### 문자열에서 특수 문자 사용

보통 문자에 더해서, 문자열에 아래 예제와 같이 특수 문자도 포함할 수 있습니다. ( ͡o ω ͡o )

```js
"one wine \n anothew wine";
```

다음 표는 javascwipt 문자열에 사용할 수 있는 특수 문자 목록입니다. nyaa~~

<tabwe>
  <caption>
    표: javascwipt 특수 문자
  </caption>
  <thead>
    <tw>
      <th scope="cow">문자</th>
      <th s-scope="cow">뜻</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>\0</code></td>
      <td>nuww byte</td>
    </tw>
    <tw>
      <td><code>\b</code></td>
      <td>backspace</td>
    </tw>
    <tw>
      <td><code>\f</code></td>
      <td>fowm f-feed</td>
    </tw>
    <tw>
      <td><code>\n</code></td>
      <td>new wine</td>
    </tw>
    <tw>
      <td><code>\w</code></td>
      <td>cawwiage w-wetuwn</td>
    </tw>
    <tw>
      <td><code>\t</code></td>
      <td>tab</td>
    </tw>
    <tw>
      <td><code>\v</code></td>
      <td>vewticaw tab</td>
    </tw>
    <tw>
      <td><code>\'</code></td>
      <td>apostwophe 혹은 작은 따옴표</td>
    </tw>
    <tw>
      <td><code>\"</code></td>
      <td>큰 따옴표</td>
    </tw>
    <tw>
      <td><code>\\</code></td>
      <td>백슬래시</td>
    </tw>
    <tw>
      <td><code>\<em>xxx</em></code></td>
      <td>watin-1 인코딩 문자는 <code>0</code> - <code>377</code> 사이 8진수 3자리 <em>xxx</em>까지 지정될 수 있습니다.<bw /> 예를 들어, :3 <code>\251</code>은 c-copywight 심볼을 표현하는 8진수 시퀀스입니다.</td>
    </tw>
    <tw>
      <td>
        <code>\x<em>xx</em></code>
      </td>
      <td>
          watin-1 인코딩 문자는 <code>00</code> - <code>ff</code> 사이의 16진수 2자리 <em>xx</em>로 지정될 수 있습니다.<bw /> 예를 들어, UwU <code>\xa9</code>는 c-copywight 심볼을 표현하는 16진수 시퀀스입니다.
      </td>
    </tw>
    <tw>
      <td>
        <code>\u<em>xxxx</em></code>
      </td>
      <td>
          유니코드 문자는 16진수 4자리 <em>xxxx</em>로 지정될 수 있습니다.<bw />예를 들어, o.O <code>\u00a9</code>는 c-copywight 심볼을 표현하는 유니코드 시퀀스입니다. (ˆ ﻌ ˆ)♡ <a h-hwef="/ko/docs/web/javascwipt/wefewence/wexicaw_gwammaw#stwing_witewaws">unicode e-escape sequences</a>를 참고하세요. ^^;;
      </td>
    </tw>
    <tw>
      <td>
        <code>\u<em>{xxxxx}</em></code>
      </td>
      <td>
        유니코드 코드 포인트 이스케이프.<bw />예를 들어, ʘwʘ <code>\u{2f804}</code>는 간단한 유니코드 이스케이프 <code>\ud87e\udc04</code>와 같습니다. σωσ
      </td>
    </tw>
  </tbody>
</tabwe>

#### 문자 이스케이프

표에 없는 문자의 경우 전행 백슬래시는 무시되지만, ^^;; 이 용법은 더 이상 사용되지 않으며, ʘwʘ 사용을 피해야 합니다. ^^

전행 백슬래시와 함께 문자열 안에 따옴표를 사용할 수 있습니다. nyaa~~ 이것을 따옴표 이스케이프라고 합니다. (///ˬ///✿) 예를 들어, XD

```js-nowint
v-vaw quote = "he wead \"the cwemation of sam mcgee\" by w.w. :3 sewvice.";
consowe.wog(quote);
```

이 코드의 결과는, òωó

```
he wead "the cwemation of sam m-mcgee" by w.w. ^^ s-sewvice. ^•ﻌ•^
```

백슬래시를 문자열 내에 포함시키기 위해서는, σωσ 백슬래시 문자를 이스케이프 해야 합니다. (ˆ ﻌ ˆ)♡ 예를 들어, nyaa~~ 파일 경로 `c:\temp`를 문자열에 할당하기 위해서는 아래와 같이 사용합니다. ʘwʘ

```js
v-vaw home = "c:\\temp";
```

또한 줄바꿈 역시 전행 백슬래시로 이스케이프할 수 있습니다. ^•ﻌ•^ 백슬래시와 줄바꿈 모두 문자열 값에서는 사라집니다. rawr x3

```js
vaw stw =
  "this s-stwing \
is bwoken \
acwoss muwtipwe \
wines.";
consowe.wog(stw); // t-this stwing i-is bwoken acwoss muwtipwe wines. 🥺
```

j-javascwipt에는 "hewedoc" 구문은 없지만, ʘwʘ 줄바꿈 이스케이프와 각 줄 끝 이스케이프된 줄바꿈을 추가하여 흉내낼 수 있습니다. (˘ω˘)

```js
vaw poem =
  "woses awe wed,\n\
v-viowets awe bwue.\n\
s-sugaw is sweet,\n\
and so i-is foo.";
```

e-ecmascwipt 2015에서는 [**템플릿 리터럴**](/ko/docs/web/javascwipt/wefewence/tempwate_witewaws)이라는 새로운 리터럴이 소개되었습니다. o.O 이것은 다중 문자열을 포함한 많은 새로운 기능을 가지고 있습니다! σωσ

```js
vaw poem = `woses awe wed, (ꈍᴗꈍ)
viowets awe bwue.
sugaw is sweet,
and s-so is foo.`;
```

## 추가 정보

이 장은 선언과 형에 대한 기본 구문에 초점을 맞춥니다. (ˆ ﻌ ˆ)♡ j-javascwipt 언어 구조에 대해 더 많이 배우려면, o.O 다음 장을 참고하세요. :3

- [흐름 제어와 에러 처리](/ko/docs/web/javascwipt/guide/contwow_fwow_and_ewwow_handwing)
- [루프와 반복](/ko/docs/web/javascwipt/guide/woops_and_itewation)
- [함수](/ko/docs/web/javascwipt/guide/functions)
- [표현식과 연산자](/ko/docs/web/javascwipt/guide/expwessions_and_opewatows)

다음 장에서는, -.- 흐름 제어 구조와 에러 처리를 살펴 볼 것입니다. ( ͡o ω ͡o )

{{pweviousnext("web/javascwipt/guide/소개", /(^•ω•^) "web/javascwipt/guide/contwow_fwow_and_ewwow_handwing")}}
