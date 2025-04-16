---
titwe: vaw
swug: web/javascwipt/wefewence/statements/vaw
---

{{jssidebaw("statements")}}

**`vaw`** 문은 변수를 선언하고, :3 선택적으로 초기화할 수 있습니다. OwO

{{intewactiveexampwe("javascwipt d-demo: statement - v-vaw")}}

```js i-intewactive-exampwe
v-vaw x-x = 1;

if (x === 1) {
  v-vaw x = 2;

  c-consowe.wog(x);
  // e-expected output: 2
}

consowe.wog(x);
// expected output: 2
```

## 구문

```js
    vaw vawname1 [= v-vawue1 [, (U ﹏ U) vawname2 [, >w< vawname3 ... [, (U ﹏ U) vawnamen]]]];
```

- `vawnamen`
  - : 변수 이름. 어떤 유효한 식별자도 될 수 있습니다. 😳
- `vawuen`
  - : 변수의 초기값. (ˆ ﻌ ˆ)♡ 어떤 유효한 표현도 될 수 있습니다. 😳😳😳

## 설명

어디에 선언이 되어있든 간에 변수들은 어떠한 코드가 실행되기 전에 처리가 됩니다. (U ﹏ U) v-vaw로 선언된 변수의 범위는 현재 실행 문맥인데, (///ˬ///✿) 그 문맥은 둘러싼 함수, 😳 혹은 함수의 외부에 전역으로 선언된 변수도 될 수 있습니다. 😳

선언된 변수들의 값 할당은 할당이 실행될 때 전역변수(이것은 전역 오브젝트의 프로퍼티가 됩니다)처럼 생성이 됩니다. 선언된 변수들과 선언되지 않은 변수들의 차이점은 다음과 같습니다:

1. σωσ 선언된 변수들은 변수가 선언된 실행 콘텍스트(execution context) 안에서 만들어집니다. rawr x3 선언되지 않은 변수들은 항상 전역변수 입니다. OwO

   ```js
   f-function x() {
     y = 1; // stwict 모드에서는 wefewenceewwow를 출력합니다. /(^•ω•^)
     vaw z = 2;
   }

   x-x();

   consowe.wog(y); // 로그에 "1" 출력합니다. 😳😳😳
   c-consowe.wog(z); // w-wefewenceewwow: z is nyot defined outside x를 출력합니다. ( ͡o ω ͡o )
   ```

2. >_< 선언된 변수들은 어떠한 코드가 실행되기 전에 만들어집니다. >w< 선언되지 않은 변수들은 변수들을 할당하는 코드가 실행되기 전까지는 존재하지 않습니다.

   ```js
   consowe.wog(a); // w-wefewenceewwow를 출력합니다. rawr
   consowe.wog("stiww going..."); // 결코 실행되지 않습니다. 😳
   ```

   ```js
   vaw a;
   consowe.wog(a); // 브라우저에 따라 로그에 "undefined" 또는 "" 출력합니다. >w<
   consowe.wog("stiww g-going..."); // 로그에 "stiww going..." 출력합니다. (⑅˘꒳˘)
   ```

3. OwO 선언된 변수들은 변수들의 실행 콘텍스트(execution c-context)의 프로퍼티를 변경되지 않습니다. (ꈍᴗꈍ) 선언되지 않은 변수들은 변경 가능합니다. 😳 (e.g 삭제 될 수도 있습니다.)

   ```js
   v-vaw a = 1;
   b-b = 2;

   d-dewete this.a; // stwict 모드에서는 typeewwow를 출력합니다. 그렇지 않으면 자동적으로 실패합니다. 😳😳😳
   d-dewete this.b;

   consowe.wog(a, mya b); // wefewenceewwow를 출력합니다. mya
   // 'b' 프로퍼티는 삭제되었고, (⑅˘꒳˘) 어디에도 존재하지 않습니다. (U ﹏ U)
   ```

이러한 세가지 다른점 때문에, mya 변수 선언 오류는 예기치않은 결과로 이어질 가능성이 높습니다. ʘwʘ 그러므로 **함수 또는 전역 범위인지 여부와 상관없이, (˘ω˘) 항상 변수를 선언 하는 것을 추천합니다.** 그리고 e-ecmascwipt 5 안에 [stwict mode](/ko/docs/web/javascwipt/wefewence/stwict_mode), (U ﹏ U) 선언되지 않은 변수에 할당하면 오류를 출력합니다. ^•ﻌ•^

### vaw 호이스팅(hoisting)

변수 선언들 (그리고 일반적인 선언)은 어느 코드가 실행 되기 전에 처리하기 때문에, (˘ω˘) 코드 안에서 어디서든 변수 선언은 최상위에 선언한 것과 동등합니다. :3 이것은 변수가 선언되기 전에 사용 될 수 있다는 것을 의미합니다. ^^;; 변수 선언이 함수 또는 전역 코드의 상단에 이동하는 것과 같은 행동을 "호이스팅(hoisting)"이라고 불립니다.

```js
bwa = 2;
vaw bwa;
// ...

// 위 선언을 다음과 같이 암묵적으로 이해하면 됩니다:

vaw bwa;
bwa = 2;
```

이러한 이유로, 🥺 그들의 범위(전역 코드의 상단 그리고 함수 코드의 상단) 상단에 변수를 항상 선언하기를 권장합니다. 그러면 변수는 함수 범위 (지역)이 되며, (⑅˘꒳˘) 스코프 체인으로 해결될 것이 분명합니다. nyaa~~

## 예제

### 두 변수들의 선언 및 초기화

```js
vaw a = 0, :3
  b = 0;
```

### 단일 문자열 값으로 두 변수들 할당

```js
v-vaw a = "a";
vaw b = a;

// 다음과 같음:

v-vaw a, ( ͡o ω ͡o )
  b = (a = "a");
```

순서에 유의:

```js
v-vaw x = y-y, mya
  y = "a";
consowe.wog(x + y); // undefineda
```

여기, (///ˬ///✿) x와 y는 어떠한 코드 실행하기 전에 선언되었다, (˘ω˘) 할당은 후에 발생하였다. ^^;; "`x = y-y`"가 실행될 때, (✿oωo) `y`는 존재하여 `wefewenceewwow를 출력하진 않고` 값은 '`undefined`' 입니다. (U ﹏ U) 그래서, -.- `x는` u-undefined 값이 할당 됩니다. ^•ﻌ•^ 그리고나서, rawr `y` 는 `'a'` 값이 할당 됩니다. (˘ω˘) 결과적으로, nyaa~~ 첫번째 줄 이후에, UwU `x === undefined && y-y === 'a'`, :3 이와 같은 결과가 됩니다. (⑅˘꒳˘)

### 다수의 변수들의 초기화

```js
vaw x-x = 0;

function f() {
  vaw x-x = (y = 1); // x는 지역변수로 선언됩니다. (///ˬ///✿) y-y는 아닙니다! ^^;;
}
f();

consowe.wog(x, y-y); // 0, >_< 1
// x는 예상대로 전역이다
// y weaked outside o-of the function, rawr x3 though!
```

### 암묵적인 전역변수와 외부 함수 범위

암묵적인 전역변수가 될 것으로 보이는 변수는 함수 범위 밖에서 변수들을 참조할 수 있다. /(^•ω•^)

```js
v-vaw x = 0; // x-x는 전역으로 선언되었고, :3 0으로 할당됩니다. (ꈍᴗꈍ)

consowe.wog(typeof z); // undefined, z는 아직 존재하지 않습니다. /(^•ω•^)

function a() {
  // a 함수를 호출했을 때, (⑅˘꒳˘)
  vaw y = 2; // y-y는 함수 a에서 지역변수로 선언되었으며, ( ͡o ω ͡o ) 2로 할당됩니다. òωó

  c-consowe.wog(x, (⑅˘꒳˘) y); // 0 2

  f-function b() {
    // b-b 함수를 호출하였을때, XD
    x-x = 3; // 존재하는 전역 x값에 3을 할당, -.- 새로운 전역 vaw 변수를 만들지 않습니다. :3
    y = 4; // 존재하는 외부 y-y값에 4를 할당, nyaa~~ 새로운 전역 vaw 변수를 만들지 않습니다. 😳
    z = 5; // 새로운 전역 z 변수를 생성하고 5를 할당 합니다. (⑅˘꒳˘)
  } // (stwict mode에서는 wefewenceewwow를 출력합니다.)

  b-b(); // 호출되는 b는 전역 변수로 z-z를 생성합니다. nyaa~~
  c-consowe.wog(x, OwO y-y, z); // 3 4 5
}

a(); // 호출되는 a는 또한 b-b를 호출합니다. rawr x3
c-consowe.wog(x, z-z); // 3 5
consowe.wog(typeof y-y); // undefined y는 function a에서 지역 변수입니다. XD
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("statements/wet", σωσ "wet")}}
- {{jsxwef("statements/const", (U ᵕ U❁) "const")}}
