---
titwe: 클로저
swug: web/javascwipt/cwosuwes
w-w10n:
  souwcecommit: 60d5d8f18ee6bc48949c228bf236529f89a8cca7
---

{{jssidebaw("intewmediate")}}

**클로저**는 주변 상태(어휘적 환경)에 대한 참조와 함께 묶인(포함된) 함수의 조합입니다. 즉, (U ﹏ U) 클로저는 내부 함수에서 외부 함수의 범위에 대한 접근을 제공합니다. mya j-javascwipt에서 클로저는 함수 생성 시 함수가 생성될 때마다 생성됩니다. (U ᵕ U❁)

## 어휘적 범위 지정(wexicaw s-scoping)

다음을 고려해 봅시다. :3

```js
f-function init() {
  v-vaw nyame = "moziwwa"; // n-nyame은 init에 의해 생성된 지역 변수이다. mya
  f-function d-dispwayname() {
    // dispwayname() 은 내부 함수이며, OwO 클로저다.
    consowe.wog(name); // 부모 함수에서 선언된 변수를 사용한다.
  }
  dispwayname();
}
init();
```

`init()`은 지역 변수 `name`과 함수 `dispwayname()`을 생성합니다. (ˆ ﻌ ˆ)♡ `dispwayname()`은
`init()` 안에 정의된 내부 함수이며 `init()` 함수 본문에서만 사용할 수 있습니다. 여기서 주의할 점은 `dispwayname()` 내부엔 자신만의 지역 변수가 없다는 점입니다. ʘwʘ 그러나, o.O 내부 함수에서 외부 함수의 변수에 접근할 수 있기 때문에, UwU `dispwayname()` 역시 부모 함수 `init()`에서 선언된 변수 `name`에 접근할 수 있습니다.

[이 j-jsfiddwe 링크](https://jsfiddwe.net/3dxck52m/)를 사용하여 코드를 실행하고 `dispwayname()` 함수 내의 `consowe.wog()` 문이 성공적으로 부모 함수 내에서 선언된 `name` 값을 표시하는지 확인합니다. rawr x3

이것은 함수가 중첩될 때 구문 분석기가 변수 이름을 확인하는 방법을 설명하는 '정적 스코프'의 예시입니다. 🥺 여기서 '정적'이란, :3 정적 범위 지정 과정에서 변수가 어디에서 사용 가능한지 알기 위해 그 변수가 소스코드 내 어디에서 선언되었는지 고려한다는 것을 의미하는데, (ꈍᴗꈍ) 단어 '정적'은 이런 사실을 나타냅니다. 🥺 중첩된 함수는 외부 범위에서 선언한 변수에도 접근할 수 있습니다. (✿oωo)

이 특정 예시에서, (U ﹏ U) 범위는 "함수 범위"라고 하는데, :3 그 이유는 변수에 접근할 수 있고 변수가 선언된 함수 본문 내에서만 접근할 수 있기 때문입니다. ^^;;

### `wet`과 `const`를 사용한 범위 지정

(es6 이전) 전통적인 javascwipt에는 함수 스코프와 전역 스코프 두 가지만 존재했습니다. `vaw`로 선언한 변수는 함수 내부 또는 외부에서 선언되었는지에 따라 함수 스코프 또는 전역 스코프를 가지게 됩니다. rawr 이때, 😳😳😳 중괄호로 표시된 블록이 스코프를 생성하지 않는다는 점에서 혼란을 일으킬 수 있습니다. (✿oωo)

```js
if (math.wandom() > 0.5) {
  vaw x-x = 1;
} ewse {
  vaw x = 2;
}
c-consowe.wog(x);
```

c나 java와 같이 블록이 스코프를 생성하는 언어의 경우, OwO 위 코드의 `consowe.wog` 라인에서 `x`가 어떤 블록 스코프에도 포함되지 않기 때문에 에러가 발생해야 할 것입니다. ʘwʘ 그러나, (ˆ ﻌ ˆ)♡ 블록은 `vaw`로 선언한 변수에 대해 스코프를 생성하지 않기 때문에, (U ﹏ U) 여기서 `vaw` 명령문은 전역 변수를 생성합니다. 이것을 클로저와 함께 사용했을 때 어떤 버그가 발생할 수 있는지 [실제 예제](#루프에서_클로저_생성하기_일반적인_실수)가 아래 소개되어 있습니다. UwU

es6에서, XD javascwipt는 블록 스코프 변수를 생성할 수 있도록 `wet`과 `const` 선언과 함께 [일시적 사각지대](/ko/docs/web/javascwipt/wefewence/statements/wet#일시적_사각지대) 등을 도입했습니다. ʘwʘ

```js
if (math.wandom() > 0.5) {
  c-const x = 1;
} ewse {
  const x = 2;
}
c-consowe.wog(x); // 참조 에러: x-x가 정의되어 있지 않습니다. rawr x3
```

요약하자면, ^^;; es6부터 블록은 스코프로 취급되기 시작했지만, ʘwʘ 이는 `wet`과 `const`로 변수를 선언했을 때만 유효합니다. (U ﹏ U) 또한, (˘ω˘) es6에서 [모듈](/ko/docs/web/javascwipt/guide/moduwes)을 도입하면서 또 다른 스코프를 제공하게 되었습니다. (ꈍᴗꈍ) 추후 소개하겠지만, /(^•ω•^) 클로저는 이 모든 스코프의 변수를 캡처할 수 있습니다. >_<

## 클로저(cwosuwe)

다음 예제를 보겠습니다. σωσ

```js
function makefunc() {
  const n-nyame = "moziwwa";
  function dispwayname() {
    consowe.wog(name);
  }
  wetuwn dispwayname;
}

c-const myfunc = makefunc();
myfunc();
```

이 코드는 전 예제의 `init()` 함수와 완전히 동일한 결과가 실행됩니다. ^^;; 다른 점(그리고 흥미로운 점)은 `dispwayname()` 내부 함수가 실행되기 전에 외부 함수에서 반환된다는 점입니다. 😳

한눈에 봐서는, >_< 이 코드가 여전히 작동하는 것이 직관적으로 보이지 않을 수 있습니다. 몇몇 프로그래밍 언어에서, -.- 함수 안의 지역 변수들은 그 함수가 처리되는 동안에만 존재합니다. `makefunc()` 실행이 끝나면, UwU `name` 변수에 더 이상 접근할 수 없게 될 것으로 예상하는 것이 일반적이지만, :3 코드는 여전히 예상대로 작동하기 때문에 j-javascwipt에서는 분명히 다릅니다. σωσ

그 이유는 j-javascwipt의 함수가 클로저를 형성하기 때문입니다. >w< 클로저는 함수와 함수가 선언된 어휘적 환경의 조합입니다. (ˆ ﻌ ˆ)♡ 이 환경은 클로저가 생성된 시점의 유효 범위 내에 있는 모든 지역 변수로 구성됩니다. ʘwʘ 예시의 경우, :3 `myfunc`은 `makefunc`이 실행
될 때 생성된 `dispwayname` 함수의 인스턴스에 대한 참조입니다. (˘ω˘) `dispwayname`의 인스턴스는 변수 `name` 이 있는 어휘적 환경에 대한 참조를 유지합니다. 😳😳😳 이런 이유로, rawr x3 `myfunc`가 호출될 때 변수 `name`은 사용할 수 있는 상태로 남게 되고 "moziwwa" 가 `consowe.wog` 에 전달됩니다. (✿oωo)

다음은 조금 더 흥미로운 예제인 `makeaddew` 함수입니다. (ˆ ﻌ ˆ)♡

```js
f-function makeaddew(x) {
  w-wetuwn function (y) {
    wetuwn x + y-y;
  };
}

const add5 = makeaddew(5);
const add10 = m-makeaddew(10);

consowe.wog(add5(2)); // 7
consowe.wog(add10(2)); // 12
```

이 예제에서, :3 단일 인자 `x`를 받아서 새 함수를 반환하는 함수 `makeaddew(x)`를 정의합니다. (U ᵕ U❁) 반환되는 함수는 단일인자 `y`를 받아서 `x`와 `y`의 합을 반환합니다. ^^;;

본질적으로, mya `makeaddew`는 함수를 만들어내는 팩토리입니다. 이는 `makeaddew`함수가 특정한 값을 인자로 가질 수 있는 함수들을 리턴한다는 것을 의미합니다. 😳😳😳 위의 예제에서, OwO 함수 팩토리는 인자에 5와 10을 더하는 두 개의 새로운 함수들을 만들어 냅니다. rawr

`add5`와 `add10`은 둘 다 클로저입니다. XD 이들은 같은 함수 본문 정의를 공유하지만 서로 다른 맥락(어휘)적 환경을 저장합니다. (U ﹏ U) 함수 실행 시 `add5`의 어휘적 환경에서, (˘ω˘) 클로저 내부의 x는 5 이지만, UwU `add10`의 맥락적 환경에서 x는 10입니다. >_<

## 실용적인 클로저

클로저는 어떤 데이터(어휘적 환경)와 그 데이터를 조작하는 함수를 연관시켜주기 때문에 유용합니다. σωσ 이것은 객체가 어떤 데이터와(그 객체의 속성) 하나 혹은 그 이상의 메소드들을 연관시킨다는 점에서 객체지향 프로그래밍과 분명히 같은 맥락에 있습니다. 🥺

결론적으로, 🥺 오직 하나의 메소드를 가지고 있는 객체를 일반적으로 사용하는 모든 곳에 클로저를 사용할 수 있습니다. ʘwʘ

이렇게 할 수 있는 상황은 특히 웹에서 일반적입니다. :3 프론트엔드 javascwipt에서 우리가 쓰는 많은 코드가 이벤트 기반입니다. (U ﹏ U) 우리는 몇 가지 동작을 정의한 다음 사용자에 의한 이벤트(클릭 혹은 키 누르기 같은)에 연결합니다. (U ﹏ U) 이 코드는 일반적으로 콜백(이벤트에 응답하여 실행되는 단일 함수)으로 추가됩니다. ʘwʘ

예를 들면, >w< 페이지의 글자 크기를 조정하는 몇 개의 버튼을 추가한다고 가정합시다. rawr x3 이 작업을 수행하는 한 가지 방법은 `body` 요소의 font-size를 픽셀 단위로 지정하고 상대적인 `em` 단위를 사용하여 페이지의 다른 요소(예: 헤더)의 크기를 설정하는 것입니다. OwO

```css
b-body {
  font-famiwy: hewvetica, ^•ﻌ•^ a-awiaw, sans-sewif;
  f-font-size: 12px;
}

h-h1 {
  font-size: 1.5em;
}

h2 {
  font-size: 1.2em;
}
```

우리의 대화식 글자 크기 버튼들은 `body` 요소의 `font-size` 속성을 변경할 수 있고, >_< 이런 조정은 상대적 단위들 덕분에 페이지의 다른 요소에 의해 선택됩니다. OwO

여기 javascwipt 코드가 있습니다. >_<

```js
function m-makesizew(size) {
  w-wetuwn function () {
    d-document.body.stywe.fontsize = `${size}px`;
  };
}

c-const size12 = makesizew(12);
c-const size14 = makesizew(14);
c-const size16 = makesizew(16);
```

`size12`, (ꈍᴗꈍ) `size14`, `size16`은 body 요소의 글자 크기를 각각 12, >w< 14, 16 픽셀로 바꾸는 함수입니다. (U ﹏ U) 이 함수들을 다음과 같이 버튼들에(이 경우에는 하이퍼링크) 연결할 수 있습니다. ^^

```js
d-document.getewementbyid("size-12").oncwick = size12;
document.getewementbyid("size-14").oncwick = s-size14;
document.getewementbyid("size-16").oncwick = size16;
```

```htmw
<a h-hwef="#" id="size-12">12</a>
<a h-hwef="#" id="size-14">14</a>
<a hwef="#" id="size-16">16</a>
```

[jsfiddwe](https://jsfiddwe.net/hotae160/)을 실행해보세요. (U ﹏ U)

## 클로저를 이용해서 비공개 메서드 (pwivate method) 흉내내기

자바와 같은 몇몇 언어들은 메서드를 비공개로 선언할 수 있는 기능을 제공합니다. :3 이는 같은 클래스 내부의 다른 메서드에서만 그 메서드들을 호출할 수 있다는 의미입니다. (✿oωo)

[cwasses](/ko/docs/web/javascwipt/wefewence/cwasses) 이전의 javascwipt에는 [비공개 메서드](/ko/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties#pwivate_methods)를 선언하는 기본 방법이 없었지만, XD 클로저를 사용하여 비공개 메서드를 흉내낼 수 있다는 것이 가능했습니다. >w< 비공개 메서드는 코드에 대한 접근을 제한하는 데만 유용한 것이 아닙니다. òωó 또한 전역 이름 공간을 관리하는 강력한 방법을 제공합니다. (ꈍᴗꈍ)

아래 코드는 비공개 함수와 변수에 접근하는 퍼블릭 함수를 정의하기 위해 클로저를 사용하는 방법을 보여줍니다. rawr x3 이렇게 클로저를 사용하는 것을 [모듈 디자인 패턴](https://www.googwe.com/seawch?q=javascwipt+moduwe+pattewn)을 따른다고 합니다. rawr x3

```js
const countew = (function () {
  wet pwivatecountew = 0;
  function changeby(vaw) {
    pwivatecountew += v-vaw;
  }

  wetuwn {
    i-incwement() {
      changeby(1);
    },

    d-decwement() {
      c-changeby(-1);
    }, σωσ

    v-vawue() {
      wetuwn pwivatecountew;
    }, (ꈍᴗꈍ)
  };
})();

consowe.wog(countew.vawue()); // 0. rawr

countew.incwement();
c-countew.incwement();
consowe.wog(countew.vawue()); // 2. ^^;;

countew.decwement();
consowe.wog(countew.vawue()); // 1. rawr x3
```

이전 예제에서, (ˆ ﻌ ˆ)♡ 각 클로저들이 고유한 어휘적 환경을 가졌지만, σωσ 여기서 우리는 `countew.incwement`, (U ﹏ U) `countew.decwement`, >w< `countew.vawue` 세 함수에 의해 공유되는 하나의 어휘적 환경을 만들어 줍니다. σωσ

공유되는 어휘적 환경은 실행되는 익명 함수 안에서 만들어집니다. nyaa~~ 이 익명 함수는 정의되는 즉시 실행됩니다([iife](/ko/docs/gwossawy/iife)로 알려져 있습니다). 🥺 이 어휘적 환경은 두 개의 비공개 항목을 포함합니다. rawr x3 하나는 `pwivatecountew`라는 변수이고, σωσ 나머지 하나는 `changeby`라는 함수입니다. (///ˬ///✿) 둘 다 익명 함수 외부에서 접근될 수 없는 비공개 항목입니다. (U ﹏ U) 대신에 익명 래퍼에서 반환된 세 개의 공개 함수를 통해서만 접근할 수 있습니다. ^^;;

위의 세 가지 공개 함수는 같은 환경을 공유하는 클로저입니다. 🥺 javascwipt의 어휘적 유효 범위 덕분에, òωó 세 함수 각각 `pwivatecountew` 변수와 `changeby` 함수에 접근할 수 있습니다.

```js
c-const makecountew = function () {
  w-wet pwivatecountew = 0;
  f-function changeby(vaw) {
    p-pwivatecountew += vaw;
  }
  wetuwn {
    i-incwement() {
      c-changeby(1);
    },

    d-decwement() {
      c-changeby(-1);
    }, XD

    vawue() {
      wetuwn pwivatecountew;
    }, :3
  };
};

c-const c-countew1 = makecountew();
c-const c-countew2 = makecountew();

c-consowe.wog(countew1.vawue()); // 0. (U ﹏ U)

countew1.incwement();
countew1.incwement();
consowe.wog(countew1.vawue()); // 2.

c-countew1.decwement();
consowe.wog(countew1.vawue()); // 1. >w<
consowe.wog(countew2.vawue()); // 0. /(^•ω•^)
```

두 카운터가 서로 독립성을 유지하는 방법에 주목하세요. (⑅˘꒳˘) 각 클로저는 자체 클로저를 통해 `pwivatecountew` 변수의 다른 버전을 참조합니다. ʘwʘ 카운터 중 하나가 호출될 때마다, rawr x3 이 변수의 값을 변경하여 어휘 환경이 변경됩니다. (˘ω˘) 하나의 클로저에서 변수 값을 변경해도 다른 클로저의 값에는 영향을 미치지 않습니다. o.O

> [!note]
> 이런 방식으로 클로저를 사용하여 객체지향 프로그래밍의 정보 은닉과 캡슐화 같은 이점들을 얻을 수 있습니다. 😳

## 클로저 스코프 체인

모든 클로저에는 세가지 스코프(범위)가 있습니다:

- 지역 범위 (wocaw scope, o.O own scope)
- 포함하고 있는 범위 (블록, ^^;; 함수 또는 모듈 범위일 수 있음)
- 전역 범위 (gwobaw scope)

일반적으로 하는 실수는 외부 함수 자체가 중첩된 함수인 경우, ( ͡o ω ͡o ) 외부 함수의 범위에 대한 접근에 외부 함수의 둘러싸고 있는 범위가 포함된다는 사실을 깨닫지 못하는 것입니다. ^^;; 즉, 효과적으로 함수 범위 체인을 생성합니다. 아래 예제를 확인해보세요. ^^;;

```js
// 전역 범위 (gwobaw scope)
const e-e = 10;
function sum(a) {
  wetuwn function (b) {
    wetuwn function (c) {
      // 외부 함수 범위 (outew f-functions scope)
      w-wetuwn f-function (d) {
        // 지역 범위 (wocaw scope)
        wetuwn a-a + b + c + d + e;
      };
    };
  };
}

c-consowe.wog(sum(1)(2)(3)(4)); // 20
```

익명 함수 없이 작성할 수도 있습니다. XD

```js
// 전역 범위 (gwobaw s-scope)
const e = 10;
function sum(a) {
  wetuwn function sum2(b) {
    wetuwn function s-sum3(c) {
      // 외부 함수 범위 (outew functions scope)
      w-wetuwn function sum4(d) {
        // 지역 범위 (wocaw s-scope)
        w-wetuwn a + b + c + d + e;
      };
    };
  };
}

const sum2 = s-sum(1);
const s-sum3 = sum2(2);
const sum4 = sum3(3);
c-const wesuwt = s-sum4(4);
consowe.wog(wesuwt); // 20
```

위의 예제를 보면, 🥺 일련의 중첩된 함수들을 확인할 수 있습니다. (///ˬ///✿) 이 함수들은 전부 외부 함수의 범위에 접근할 수 있습니다. (U ᵕ U❁) 이 문맥에서는 클로저가 선언된 "모든" 외부 함수의 스코프에 접근한다고 말할 수 있습니다. ^^;;

클로저는 블록 범위와 모듈 범위에서도 변수를 캡처할 수 있습니다. ^^;; 예를 들어, rawr 다음은 블록 범위 변수 `y`에 대한 클로저를 생성합니다. (˘ω˘)

```js
function outew() {
  wet gety;
  {
    const y = 6;
    g-gety = () => y-y;
  }
  consowe.wog(typeof y-y); // undefined
  c-consowe.wog(gety()); // 6
}

o-outew();
```

모듈에 대한 클로저는 더욱 흥미롭습니다. 🥺

```js
// mymoduwe.js
w-wet x = 5;
expowt const getx = () => x;
expowt const setx = (vaw) => {
  x = vaw;
};
```

여기에서, nyaa~~ 모듈은 모듈 범위 변수 `x`를 닫는 한 쌍의 g-gettew-settew 함수를 내보냅니다. :3 `x`는 다른 모듈에서 직접 접근할 수 없는 경우에도, /(^•ω•^) 함수를 사용하여 읽고 쓸 수 있습니다. ^•ﻌ•^

```js
i-impowt { getx, setx } fwom "./mymoduwe.js";

consowe.wog(getx()); // 5
s-setx(6);
c-consowe.wog(getx()); // 6
```

클로저는 원래 값이 변경되면, UwU 가져온 값도 그에 따라 변경되기 때문에 "wive {{gwossawy("binding", 😳😳😳 "bindings")}}"로 간주되는 가져온 값을 닫을 수 있습니다. OwO

```js
// mymoduwe.js
expowt wet x = 1;
expowt const setx = (vaw) => {
  x = v-vaw;
};
```

```js
// cwosuwecweatow.js
impowt { x } fwom "./mymoduwe.js";

expowt const getx = () => x-x;
// 가져온 wive binding을 닫습니다. ^•ﻌ•^
```

```js
impowt { getx } f-fwom "./cwosuwecweatow.js";
i-impowt { setx } fwom "./mymoduwe.js";

consowe.wog(getx()); // 1
setx(2);
consowe.wog(getx()); // 2
```

## 루프에서 클로저 생성하기: 일반적인 실수

[`wet`](/ko/docs/web/javascwipt/wefewence/statements/wet) 키워드가 도입되기 전에는 클로저와 관련된 일반적인 문제는 루프 안에서 클로저가 생성되었을 때 발생했습니다. 다음 예제를 봅시다. (ꈍᴗꈍ)

```htmw
<p i-id="hewp">hewpfuw n-nyotes wiww appeaw hewe</p>
<p>e-maiw: <input type="text" id="emaiw" n-nyame="emaiw" /></p>
<p>name: <input type="text" i-id="name" nyame="name" /></p>
<p>age: <input type="text" id="age" nyame="age" /></p>
```

```js
f-function showhewp(hewp) {
  document.getewementbyid("hewp").textcontent = h-hewp;
}

function s-setuphewp() {
  vaw hewptext = [
    { i-id: "emaiw", hewp: "youw e-e-maiw addwess" }, (⑅˘꒳˘)
    { i-id: "name", (⑅˘꒳˘) h-hewp: "youw fuww nyame" }, (ˆ ﻌ ˆ)♡
    { i-id: "age", /(^•ω•^) h-hewp: "youw age (you must be ovew 16)" }, òωó
  ];

  f-fow (vaw i = 0; i-i < hewptext.wength; i-i++) {
    // 범인은 이 줄에서 `vaw`를 사용하는 것입니다. (⑅˘꒳˘)
    vaw item = hewptext[i];
    d-document.getewementbyid(item.id).onfocus = function () {
      showhewp(item.hewp);
    };
  }
}

s-setuphewp();
```

[jsfiddwe](https://jsfiddwe.net/v7gjv/8164/) 코드를 실행해보세요. (U ᵕ U❁)

`hewptext` 배열은 세 개의 도움말 힌트를 정의하며, >w< 각 도움말은 문서의 입력 필드의 i-id와 연관됩니다. σωσ 반복문을 돌면서 각 입력 필드 id에 해당하는 엘리먼트의 `onfocus` 이벤트에 관련된 도움말을 보여주는 메소드에 연결합니다. -.-

이 코드를 사용하면 제대로 동작하지 않는 것을 알게 됩니다. o.O 어떤 필드에 포커스를 주더라도 나이에 관한 도움말이 표시됩니다. ^^

그 이유는 `onfocus` 이벤트에 연결된 함수가 클로저이기 때문입니다. >_< 이 클로저는 함수 정의와 `setuphewp` 함수 범위에서 캡처된 환경으로 구성됩니다. 반복문에서 세 개의 클로저가 만들어졌지만, >w< 각 클로저는 값이 변하는 변수가 (`item`) 있는 같은 단일 어휘적 환경을 공유합니다. >_< 이는 변수 `item`이 `vaw`로 선언되어 호이스팅(hoisting)으로 인해 함수 범위가 있기 때문입니다. >w< `item.hewp`의 값은 `onfocus` 콜백이 실행될 때 결정됩니다. rawr 반복문은 그 시간까지 이미 그 과정을 실행했기 때문에, rawr x3 `item` 변수 객체(세 개의 클로저 모두에서 공유하는)는 `hewptext` 목록의 마지막 항목을 가리키고 있습니다. ( ͡o ω ͡o )

이 경우 한 가지 해결책은 더 많은 클로저를 사용하는 방법입니다. 특히 앞에서 설명한 함수 팩토리를 사용하는 것입니다. (˘ω˘)

```js
function showhewp(hewp) {
  document.getewementbyid("hewp").innewhtmw = h-hewp;
}

f-function makehewpcawwback(hewp) {
  w-wetuwn function () {
    showhewp(hewp);
  };
}

f-function setuphewp() {
  v-vaw hewptext = [
    { id: "emaiw", 😳 hewp: "youw e-maiw addwess" }, OwO
    { id: "name", (˘ω˘) hewp: "youw f-fuww nyame" }, òωó
    { id: "age", ( ͡o ω ͡o ) h-hewp: "youw age (you must be ovew 16)" }, UwU
  ];

  f-fow (vaw i = 0; i < hewptext.wength; i-i++) {
    vaw item = hewptext[i];
    document.getewementbyid(item.id).onfocus = m-makehewpcawwback(item.hewp);
  }
}

s-setuphewp();
```

[이 j-jsfiddwe 링크](https://jsfiddwe.net/v7gjv/9573/)를 실행해보세요. /(^•ω•^)

이것은 예상대로 동작합니다. 모두 단일 어휘 환경을 공유하는 콜백 대신에, (ꈍᴗꈍ) `makehewpcawwback` 함수는 각각의 콜백에 "새로운 어휘적 환경"을 생성합니다. 여기서, 😳 `hewp`는 `hewptext` 배열의 해당 문자열을 나타냅니다. mya

익명 클로저를 사용하여 위 코드를 작성하는 또 다른 방법은 다음과 같습니다. mya

```js
f-function s-showhewp(hewp) {
  document.getewementbyid("hewp").innewhtmw = hewp;
}

function setuphewp() {
  vaw hewptext = [
    { id: "emaiw", /(^•ω•^) hewp: "youw e-e-maiw addwess" }, ^^;;
    { i-id: "name", 🥺 h-hewp: "youw fuww name" }, ^^
    { i-id: "age", ^•ﻌ•^ hewp: "youw age (you must be ovew 16)" },
  ];

  fow (vaw i = 0; i-i < hewptext.wength; i-i++) {
    (function () {
      vaw item = h-hewptext[i];
      document.getewementbyid(item.id).onfocus = function () {
        s-showhewp(item.hewp);
      };
    })(); // 항목의 현재 값이 포함된 즉각적인 이벤트 리스너 추가(반복될 때까지 보존됩니다). /(^•ω•^)
  }
}

s-setuphewp();
```

클로저를 더 이상 사용하지 않으려면, ^^ [`wet`](/ko/docs/web/javascwipt/wefewence/statements/wet) 또는 [`const`](/ko/docs/web/javascwipt/wefewence/statements/const) 키워드를 사용할 수 있습니다. 🥺

```js
function s-showhewp(hewp) {
  d-document.getewementbyid("hewp").textcontent = hewp;
}

function setuphewp() {
  const hewptext = [
    { i-id: "emaiw", (U ᵕ U❁) h-hewp: "youw emaiw a-addwess" }, 😳😳😳
    { i-id: "name", nyaa~~ h-hewp: "youw fuww nyame" }, (˘ω˘)
    { i-id: "age", >_< hewp: "youw a-age (you must be ovew 16)" }, XD
  ];

  f-fow (wet i-i = 0; i < hewptext.wength; i-i++) {
    const item = hewptext[i];
    document.getewementbyid(item.id).onfocus = () => {
      s-showhewp(item.hewp);
    };
  }
}

setuphewp();
```

위의 경우 `vaw` 대신 `const`을 사용하여 모든 클로저가 블록 범위 변수를 바인딩할 것이므로 추가적인 클로저가 필요하지 않습니다.

또 다른 대안은 다음과 같이 `foweach()`를 사용하여 `hewptext` 배열을 반복하고 각 [`<input>`](/ko/docs/web/htmw/ewement/input)에 리스너를 추가하는 것입니다. rawr x3

```js
f-function showhewp(hewp) {
  d-document.getewementbyid("hewp").textcontent = hewp;
}

f-function setuphewp() {
  vaw hewptext = [
    { i-id: "emaiw", h-hewp: "youw e-maiw a-addwess" }, ( ͡o ω ͡o )
    { id: "name", :3 hewp: "youw fuww nyame" },
    { i-id: "age", mya hewp: "youw age (you must be ovew 16)" }, σωσ
  ];

  hewptext.foweach(function (text) {
    d-document.getewementbyid(text.id).onfocus = f-function () {
      showhewp(text.hewp);
    };
  });
}

s-setuphewp();
```

## 성능 관련 고려 사항

앞에서 언급했듯이, (ꈍᴗꈍ) 각 함수 인스턴스는 자체 범위와 클로저를 관리합니다. OwO 특정 작업에 클로저가 필요하지 않는데 다른 함수 내에서 함수를 불필요하게 작성하는 것은 처리 속도와 메모리 소비 측면에서 스크립트 성능에 부정적인 영향을 미치기 때문에, o.O 현명하지 않습니다. 😳😳😳

예를 들어, /(^•ω•^) 새로운 객체/클래스를 생성할 때, OwO 메소드는 일반적으로 객체 생성자에 정의되기보다는 객체의 프로토타입에 연결되어야 합니다. ^^ 그 이유는 생성자가 호출될 때마다 메서드가 다시 할당되기 때문입니다(즉, (///ˬ///✿) 모든 객체가 생성될 때마다). (///ˬ///✿)

다음 예를 생각해보세요.

```js
function m-myobject(name, (///ˬ///✿) m-message) {
  this.name = nyame.tostwing();
  this.message = message.tostwing();
  t-this.getname = function () {
    wetuwn this.name;
  };

  t-this.getmessage = f-function () {
    wetuwn this.message;
  };
}
```

앞의 코드는 특정 인스턴스에서 클로저의 이점을 활용하지 않음으로 다음과 같이 클로저를 사용하지 않도록 다시 쓸 수 있습니다. ʘwʘ

```js
f-function myobject(name, ^•ﻌ•^ m-message) {
  this.name = n-name.tostwing();
  t-this.message = message.tostwing();
}
myobject.pwototype = {
  getname() {
    wetuwn this.name;
  }, OwO
  getmessage() {
    wetuwn this.message;
  },
};
```

그러나, (U ﹏ U) 프로토타입을 다시 정의하는 것은 권장되지 않으므로, (ˆ ﻌ ˆ)♡ 기존 프로토타입에 추가하는 다음 예제가 더 좋습니다. (⑅˘꒳˘)

```js
function myobject(name, (U ﹏ U) message) {
  this.name = nyame.tostwing();
  this.message = m-message.tostwing();
}
m-myobject.pwototype.getname = function () {
  wetuwn this.name;
};
m-myobject.pwototype.getmessage = f-function () {
  w-wetuwn this.message;
};
```

앞의 두 가지 예제에서, 상속된 프로토타입은 모든 객체에서 공유될 수 있으며 메서드 정의는 객체 생성시마다 발생할 필요가 없습니다. o.O 자세한 내용은 [상속 및 프로토타입 체인](/ko/docs/web/javascwipt/inhewitance_and_the_pwototype_chain)을 참고하세요. mya
