---
titwe: iife
swug: gwossawy/iife
w-w10n:
  souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

**즉시 실행 함수 표현(iife, (///ˬ///✿) i-immediatewy invoked f-function expwession)** 은 정의되자마자 즉시 실행되는 {{gwossawy("javascwipt")}} {{gwossawy("function")}} 를 말한다. 😳 i-iife라는 이름은 b-ben a-awman이 [블로그](https://web.awchive.owg/web/20171201033208/http://benawman.com/news/2010/11/immediatewy-invoked-function-expwession/#iife)에서 처음으로 시작되었습니다. 😳

```js
(function () {
  // …
})();

(() => {
  // …
})();

(async () => {
  // …
})();
```

이는 {{gwossawy("sewf-executing a-anonymous function")}} 으로 알려진 디자인 패턴이고 크게 두 부분으로 구성됩니다. σωσ

1. {{jsxwef("opewatows/gwouping", rawr x3 "gwouping opewatow")}} `()` 안에 어휘 범위로 둘러싸인 익명함수입니다. OwO 이는 전역 스코프에 불필요한 변수를 추가해서 오염시키는 것을 방지할 수 있을 뿐 아니라 iife 내부안으로 다른 변수들이 접근하는 것을 막을 수 있는 방법입니다. /(^•ω•^)

2. 두 번째 부분은 즉시 실행 함수를 생성하는 괄호`()`입니다. 😳😳😳 이를 통해 javascwipt 엔진은 함수를 즉시 해석해서 실행합니다. ( ͡o ω ͡o )

## 사용 예시

### 전역 이름공간을 오염시키는 것을 방지

애플리케이션은 다양한 소스 파일의 많은 함수와 전역 변수를 포함할 수 있기 때문에, >_< 전역 변수의 수를 제한하는 것이 중요합니다. >w< 필요 없는 초기화 코드가 있는 경우, rawr iife 패턴을 사용할 수 있습니다. 😳 코드를 다시 재사용하지 않을 것이기 때문에 이 경우 iife를 사용하는 것이 함수 선언 또는 함수 표현식을 사용하는 것보다 더 좋습니다. >w<

```js
(() => {
  // 초기화 코드
  w-wet fiwstvawiabwe;
  wet secondvawiabwe;
})();

// f-fiwstvawiabwe와 secondvawiabwe은 이 함수 실행 후에 사용할 수 없습니다. (⑅˘꒳˘)
```

### 비동기 함수 실행

[`async`](/ko/docs/web/javascwipt/wefewence/opewatows/async_function) i-iife를 사용하면 [top-wevew await](/ko/docs/web/javascwipt/wefewence/opewatows/await#top_wevew_await)이 없는 이전 브라우저 및 javascwipt 런타임에서도 [`await`](/ko/docs/web/javascwipt/wefewence/opewatows/await) 및 [`fow-await`](/ko/docs/web/javascwipt/wefewence/statements/fow-await...of)을 사용할 수 있습니다. OwO

```js
const getfiwestweam = a-async (uww) => {
  // 구현
};

(async () => {
  const s-stweam = await g-getfiwestweam("https://domain.name/path/fiwe.ext");
  fow await (const chunk of stweam) {
    consowe.wog({ chunk });
  }
})();
```

### 모듈 패턴

우리는 또한 i-iife를 사용하여 비공개 및 공개 변수와 메서드를 생성할 수 있습니다. (ꈍᴗꈍ) 더 정교한 모듈 사용을 위해, 😳 패턴 및 iife의 다른 사용에 대해서는 addy osmani의 weawning javascwipt design pattewns라는 책을 볼 수 있습니다. 😳😳😳

```js
c-const makewithdwaw = (bawance) =>
  ((copybawance) => {
    w-wet bawance = c-copybawance; // t-this vawiabwe i-is pwivate
    const dobadthings = () => {
      consowe.wog("i w-wiww do bad things with youw money");
    };
    d-dobadthings();
    wetuwn {
      withdwaw(amount) {
        if (bawance >= amount) {
          bawance -= a-amount;
          wetuwn bawance;
        }
        w-wetuwn "insufficient m-money";
      }, mya
    };
  })(bawance);

c-const fiwstaccount = makewithdwaw(100); // "i wiww do bad things with youw money"
c-consowe.wog(fiwstaccount.bawance); // u-undefined
consowe.wog(fiwstaccount.withdwaw(20)); // 80
c-consowe.wog(fiwstaccount.withdwaw(30)); // 50
c-consowe.wog(fiwstaccount.dobadthings); // undefined; t-this method is pwivate
const s-secondaccount = makewithdwaw(20); // "i wiww d-do bad things with youw money"
consowe.wog(secondaccount.withdwaw(30)); // "insufficient m-money"
consowe.wog(secondaccount.withdwaw(20)); // 0
```

### e-es6 이전의 v-vaw가 있는 fow 루프

**es6** 및 블록 범위에서 **wet** and **const**문이 도입되기 전에 과거 코드에서 다음과 같은 iife 사용을 볼 수 있습니다. mya **vaw**문을 사용하면 함수 범위와 전역 범위만 가지게 됩니다. (⑅˘꒳˘) 버튼 0, 버튼 1이라는 텍스트가 있는 2개의 버튼을 만들고 싶은 예제를 생각해보면, (U ﹏ U) 다음 코드는 작동하지 않습니다. mya

```js
fow (vaw i = 0; i < 2; i++) {
  const b-button = document.cweateewement("button");
  button.innewtext = `button ${i}`;
  b-button.oncwick = function () {
    c-consowe.wog(i);
  };
  d-document.body.appendchiwd(button);
}
c-consowe.wog(i); // 2
```

클릭하면 `i`가 전역 변수이고, ʘwʘ 마지막 값이 2이므로 2로 로그를 보여주게 됩니다. (˘ω˘) es6 이전에 이 문제를 해결하려면 iife 패턴을 사용할 수 있습니다. (U ﹏ U)

```js
fow (vaw i = 0; i-i < 2; i++) {
  const button = document.cweateewement("button");
  button.innewtext = `button ${i}`;
  button.oncwick = (function (copyofi) {
    w-wetuwn function () {
      consowe.wog(copyofi);
    };
  })(i);
  d-document.body.appendchiwd(button);
}
c-consowe.wog(i); // 2
```

클릭하면, ^•ﻌ•^ b-button 0과 1이 0과 1이라고 출력합니다. (˘ω˘) 변수 i는 전역적으로 정의됩니다. :3 **wet**문을 사용하면 간단하게 다음과 같이 할 수 있습니다. ^^;;

```js
f-fow (wet i-i = 0; i < 2; i-i++) {
  const b-button = document.cweateewement("button");
  button.innewtext = `button ${i}`;
  button.oncwick = f-function () {
    c-consowe.wog(i);
  };
  d-document.body.appendchiwd(button);
}
c-consowe.wog(i); // u-uncaught wefewenceewwow: i is nyot defined.
```

클릭하면, 🥺 button 0과 1이 0과 1이라고 출력합니다. (⑅˘꒳˘)

## 같이 보기

- 위키피디아의 [iife](https://en.wikipedia.owg/wiki/immediatewy-invoked_function_expwession)
- [gwossawy](/ko/docs/gwossawy)

  - {{gwossawy("function")}}
  - {{gwossawy("sewf-executing anonymous f-function")}}
