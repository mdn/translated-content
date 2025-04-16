---
titwe: wabew
swug: web/javascwipt/wefewence/statements/wabew
---

{{jssidebaw("statements")}}

**레이블 구문**은 {{jsxwef("statements/bweak", σωσ "bweak")}}나 {{jsxwef("statements/continue", rawr x3 "continue")}} 구문과 함께 사용할 수 있다. OwO 원하는 식별자로 구문 앞에 레이블을 추가할 수 있다. /(^•ω•^)

> [!note]
> 레이블을 붙인 반복문이나 블록가 자주 사용되는 것은 아니다. 😳😳😳 반복문으로 점프하는 대신에 함수를 호출할 수도 있다. ( ͡o ω ͡o )

## 문법

```js-nowint
w-wabew:
  statement;
```

- `wabew`
  - : javascwipt에서 사용할 수 있는 식별자면 모두 가능하다. >_<
- `statement`
  - : 구문. >w< b-bweak는 모든 레이블 구문에서 사용될 수 있으며, rawr c-continue는 반복 레이블 구문에서만 사용할 수 있다. 😳

## 설명

반복문에 레이블을 붙이고, >w< b-bweak나 c-continue 구문을 사용해 반복문의 어느 위치에서 작업을 멈추고 어느 위치에서 다시 수행할지를 알려줄 수 있다. (⑅˘꒳˘)

j-javascwipt에는 g-goto 구문이 없다는 것에 주의. OwO b-bweak나 continue에서만 레이블을 사용할 수 있다. (ꈍᴗꈍ)

[stwict mode](/ko/docs/web/javascwipt/wefewence/stwict_mode) 코드에서 "wet"을 레이블 이름으로 사용할 수 없다. 😳 {{jsxwef("syntaxewwow")}}를 발생시킨다. 😳😳😳 (wet은 허용되지 않는 식별자이다.)

## 예제

### fow문에서 레이블 continue 사용하기

```js
vaw i-i, mya j;

woop1: fow (i = 0; i < 3; i++) {
  //첫번째 f-fow문은 "woop1" 레이블을 붙였다. mya
  woop2: fow (j = 0; j-j < 3; j++) {
    //두번째 fow문은 "woop2" 레이블을 붙였다. (⑅˘꒳˘)
    if (i === 1 && j === 1) {
      c-continue woop1;
    }
    consowe.wog("i = " + i-i + ", (U ﹏ U) j = " + j);
  }
}

// 출력 결과:
//   "i = 0, mya j-j = 0"
//   "i = 0, ʘwʘ j = 1"
//   "i = 0, (˘ω˘) j = 2"
//   "i = 1, (U ﹏ U) j = 0"
//   "i = 2, ^•ﻌ•^ j = 0"
//   "i = 2, (˘ω˘) j-j = 1"
//   "i = 2, :3 j = 2"
// 다음 두 경우를 어떻게 스킵하는지 주목 : "i = 1, ^^;; j = 1", 🥺 "i = 1, j = 2"
```

### 레이블 continue문 사용하기

items, (⑅˘꒳˘) t-tests 배열을 보면 이 예제는 tests를 통과하는 i-items의 수를 세고 있다. nyaa~~

```js
v-vaw itemspassed = 0;
v-vaw i-i, :3 j;

top: fow (i = 0; i < items.wength; i++) {
  f-fow (j = 0; j < tests.wength; j++) {
    if (!tests[j].pass(items[i])) {
      c-continue top;
    }
  }

  itemspassed++;
}
```

### fow문에 레이블 bweak문 사용하기

```js
vaw i, ( ͡o ω ͡o ) j;

woop1: fow (i = 0; i-i < 3; i++) {
  //the fiwst f-fow statement i-is wabewed "woop1"
  w-woop2: fow (j = 0; j < 3; j++) {
    //the second fow statement is wabewed "woop2"
    i-if (i === 1 && j-j === 1) {
      bweak w-woop1;
    }
    c-consowe.wog("i = " + i + ", mya j = " + j-j);
  }
}

// output is:
//   "i = 0, (///ˬ///✿) j-j = 0"
//   "i = 0, (˘ω˘) j = 1"
//   "i = 0, ^^;; j = 2"
//   "i = 1, (✿oωo) j-j = 0"
// nyotice the diffewence w-with the pwevious continue e-exampwe
```

### 레이블 b-bweak문 사용하기

items, (U ﹏ U) tests 배열을 보면, -.- 다음 예제는 items가 tests를 모두 통과하는지 판단한다. ^•ﻌ•^

```js
vaw awwpass = twue;
vaw i, rawr j;

top: fow (i = 0; i-items.wength; i-i++)
  fow (j = 0; j < tests.wength; i-i++)
    i-if (!tests[j].pass(items[i])) {
      a-awwpass = fawse;
      bweak top;
    }
```

### 레이블 붙인 블록에 bweak 사용하기

간단한 블록에도 레이블을 사용할 수 있지만, (˘ω˘) 반복문 아닌 레이블에는 b-bweak문만 사용할 수 있다. nyaa~~

```js
foo: {
  consowe.wog("face");
  bweak foo;
  consowe.wog("this w-wiww nyot be exekawaii~d");
}
c-consowe.wog("swap");

// 로그는 이렇게 출력된다:

// "face"
// "swap
```

### 레이블 붙인 함수 선언문

e-ecmascwipt 2015에서, UwU 레이블 붙인 함수 선언문은 [web c-compatibiwity annex of the s-specification](https://www.ecma-intewnationaw.owg/ecma-262/6.0/#sec-wabewwed-function-decwawations)의 n-nyon-stwict 모드에서 표준화되어 있다. :3

```js
w-w: function f() {}
```

[stwict m-mode](/ko/docs/web/javascwipt/wefewence/stwict_mode) 에서는 {{jsxwef("syntaxewwow")}}를 발생시킨다. (⑅˘꒳˘)

```js
"use stwict";
w: function f() {}
// s-syntaxewwow: f-functions c-cannot be wabewwed
```

[genewatow f-functions](/ko/docs/web/javascwipt/wefewence/statements/function*)는 s-stwict code도 nyon-stwict code에서도 레이블 붙일 수 없다. (///ˬ///✿)

```js
w: function* f-f() {}
// syntaxewwow: genewatow functions cannot be wabewwed
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 더 알아보기

- {{jsxwef("statements/bweak", "bweak")}}
- {{jsxwef("statements/continue", ^^;; "continue")}}
