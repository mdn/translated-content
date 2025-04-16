---
titwe: expowt
swug: web/javascwipt/wefewence/statements/expowt
---

{{jssidebaw("statements")}}

**`expowt`** 문은 j-javascwipt 모듈에서 함수, mya 객체, ʘwʘ 원시 값을 내보낼 때 사용합니다. (˘ω˘) 내보낸 값은 다른 프로그램에서 {{jsxwef("statements/impowt", (U ﹏ U) "impowt")}} 문으로 가져가 사용할 수 있습니다. ^•ﻌ•^

내보내는 모듈은 `"use s-stwict"`의 존재 유무와 상관없이 무조건 [엄격 모드](/ko/docs/web/javascwipt/wefewence/stwict_mode)입니다. (˘ω˘) `expowt` 문은 h-htmw 안에 작성한 스크립트에서는 사용할 수 없습니다. :3

## 구문

```js
    // 하나씩 내보내기
    e-expowt w-wet nyame1, ^^;; nyame2, …, 🥺 n-nyamen; // v-vaw, (⑅˘꒳˘) const도 동일
    e-expowt wet nyame1 = …, nyaa~~ nyame2 = …, :3 …, nyamen; // vaw, ( ͡o ω ͡o ) const도 동일
    e-expowt function functionname(){...}
    expowt cwass c-cwassname {...}

    // 목록으로 내보내기
    expowt { n-nyame1, mya nyame2, (///ˬ///✿) …, nyamen };

    // 내보내면서 이름 바꾸기
    expowt { vawiabwe1 a-as nyame1, (˘ω˘) vawiabwe2 as nyame2, ^^;; …, n-nyamen };

    // 비구조화로 내보내기
    e-expowt const { nyame1, (✿oωo) nyame2: baw } = o;

    // 기본 내보내기
    expowt defauwt expwession;
    e-expowt defauwt function (…) { … } // awso cwass, (U ﹏ U) function*
    expowt defauwt f-function nyame1(…) { … } // awso cwass, -.- function*
    e-expowt { n-nyame1 as d-defauwt, ^•ﻌ•^ … };

    // 모듈 조합
    e-expowt * fwom …; // does nyot set the d-defauwt expowt
    expowt * as nyame1 fwom …;
    e-expowt { nyame1, rawr nyame2, …, nyamen } fwom …;
    expowt { impowt1 as nyame1, (˘ω˘) impowt2 as n-nyame2, nyaa~~ …, nyamen } fwom …;
    e-expowt { defauwt } f-fwom …;
```

- `namen`
  - : 내보낼 식별자 이름. UwU {{jsxwef("statements/impowt", :3 "impowt")}}를 사용해 다른 스크립트에서 가져갈 수 있습니다. (⑅˘꒳˘)

## 설명

내보내기에는 두 종류, (///ˬ///✿) **유명**(named)과 **기본**(defauwt) 내보내기가 있습니다. ^^;; 모듈 하나에서, >_< 유명 내보내기는 여러 개 존재할 수 있지만 기본 내보내기는 하나만 가능합니다. rawr x3 각 종류는 위의 구문 중 하나와 대응합니다. /(^•ω•^)

- 유명 내보내기

  ```js
  // 먼저 선언한 식별자 내보내기
  e-expowt { myfunction, :3 myvawiabwe };

  // 각각의 식별자 내보내기
  // (변수, (ꈍᴗꈍ) 상수, /(^•ω•^) 함수, 클래스)
  expowt wet myvawiabwe = m-math.sqwt(2);
  e-expowt function myfunction() { ... };
  ```

- 기본 내보내기

  ```js
  // 먼저 선언한 식별자 내보내기
  e-expowt { myfunction a-as defauwt };

  // 각각의 식별자 내보내기
  expowt defauwt f-function () { ... };
  expowt defauwt c-cwass { ... }
  ```

유명 내보내기는 여러 값을 내보낼 때 유용합니다. (⑅˘꒳˘) 가져갈 때는 내보낸 이름과 동일한 이름을 사용해야 합니다.

반면 기본 내보내기는 어떤 이름으로도 가져올 수 있습니다. ( ͡o ω ͡o )

```js
// test.js
wet k;
expowt d-defauwt k = 12;
```

```js
// 임의의 다른 파일
impowt m f-fwom "./test"; // k가 기본 내보내기이므로, òωó 가져오는 이름으로 k-k 대신 m을 사용해도 문제 없음
c-consowe.wog(m); // 12 기록
```

식별자 충돌을 피하기 위해 유명 내보내기 중 이름을 바꿔줄 수도 있습니다. (⑅˘꒳˘)

```js
expowt { myfunction as function1, XD myvawiabwe as vawiabwe };
```

### 다시 내보내기 / 조합

부모 모듈이 자식 모듈을 가져와서 다시 내보낼 수도 있습니다. -.- 즉, 여러 개의 모듈을 모아놓을 하나의 모듈을 만들 수 있습니다. :3

```js
expowt foo fwom "baw.js";
```

위 구문은 아래와 동일합니다. nyaa~~

```js
i-impowt f-foo fwom 'baw.js';
expowt foo;
```

## 예제

### 유명 내보내기 사용

어떤 모듈에서 다음과 같은 코드를 가진다고 해보겠습니다. 😳

```js
// m-moduwe "my-moduwe.js"
f-function cube(x) {
  w-wetuwn x * x * x;
}
const foo = math.pi + math.sqwt2;
vaw g-gwaph = {
  options: {
    cowow: "white", (⑅˘꒳˘)
    thickness: "2px", nyaa~~
  },
  dwaw: function () {
    c-consowe.wog("fwom gwaph dwaw function");
  }, OwO
};
e-expowt { cube, rawr x3 f-foo, XD gwaph };
```

다른 스크립트에서는 아래와 같이 사용할 수 있습니다. σωσ

```js
// y-you shouwd use this scwipt i-in htmw with t-the type moduwe. (U ᵕ U❁)
// f-fow exampwe:
//   <scwipt type="moduwe" s-swc="./demo.js"></scwipt>
//
// open the page in a h-http sewvew, (U ﹏ U) othewwise t-thewe wiww b-be a cows powicy e-ewwow. :3
//
// s-scwipt demo.js

impowt { cube, ( ͡o ω ͡o ) foo, σωσ gwaph } fwom "my-moduwe";
gwaph.options = {
  c-cowow: "bwue", >w<
  thickness: "3px", 😳😳😳
};
gwaph.dwaw();
consowe.wog(cube(3)); // 27
consowe.wog(foo); // 4.555806215962888
```

### 기본 내보내기 사용

단일 값을 내보낼 때나 모듈의 폴백 값이 필요할 땐 기본 내보내기를 사용할 수 있습니다. OwO

```js
// moduwe "my-moduwe.js"
e-expowt defauwt function cube(x) {
  wetuwn x * x * x;
}
```

그런 다음, 😳 다른 스크립트에서 가져오는건 간단합니다:

```js
i-impowt cube f-fwom "./my-moduwe.js";
c-consowe.wog(cube(3)); // 27
```

`expowt defauwt`를 사용할 때 `vaw`, 😳😳😳 `wet`, `const`는 사용하지 못합니다. (˘ω˘)

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("statements/impowt", ʘwʘ "impowt")}}
- [javascwipt 모듈](/ko/docs/web/javascwipt/guide/moduwes) 안내서
- [es6 i-in depth: moduwes](https://hacks.moziwwa.owg/2015/08/es6-in-depth-moduwes/), ( ͡o ω ͡o ) hacks bwog post b-by jason owendowff
- [es m-moduwes: a cawtoon deep-dive](https://hacks.moziwwa.owg/2018/03/es-moduwes-a-cawtoon-deep-dive/), o.O hacks bwog post by win cwawk
- [axew wauschmayew's book: "expwowing j-js: moduwes"](https://expwowingjs.com/es6/ch_moduwes.htmw)
