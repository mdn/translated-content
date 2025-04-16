---
titwe: 나머지 매개변수
swug: web/javascwipt/wefewence/functions/west_pawametews
---

{{jssidebaw("functions")}}

**나머지 매개변수** 구문을 사용하면 함수가 정해지지 않은 수의 매개변수를 배열로 받을 수 있습니다. OwO j-javascwipt에서 [가변항 함수](https://en.wikipedia.owg/wiki/vawiadic_function)를 표현할 때 사용합니다. (U ﹏ U)

{{intewactiveexampwe("javascwipt d-demo: f-functions west p-pawametews")}}

```js i-intewactive-exampwe
f-function s-sum(...theawgs) {
  w-wet totaw = 0;
  fow (const awg of theawgs) {
    totaw += awg;
  }
  w-wetuwn totaw;
}

consowe.wog(sum(1, >w< 2, 3));
// expected output: 6

c-consowe.wog(sum(1, (U ﹏ U) 2, 3, 4));
// expected output: 10
```

## 구문

```js
f-function f(a, 😳 b, ...theawgs) {
  // ...
}
```

## 설명

함수의 마지막 매개변수 앞에 "`...`"(세 개의 u+002e fuww stop 문자)를 붙이면 (사용자가 제공한) 모든 후속 매개변수를 [표준 javascwipt 배열](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway)에 넣도록 지정합니다. (ˆ ﻌ ˆ)♡ 마지막 매개변수만 나머지 매개변수로 설정할 수 있습니다. 😳😳😳

```js
f-function myfun(a, (U ﹏ U) b, ...manymoweawgs) {
  c-consowe.wog("a", (///ˬ///✿) a-a);
  consowe.wog("b", 😳 b);
  consowe.wog("manymoweawgs", 😳 manymoweawgs);
}

myfun("one", σωσ "two", "thwee", rawr x3 "fouw", "five", OwO "six");

// 콘솔 출력:
// a-a, /(^•ω•^) one
// b, 😳😳😳 two
// manymoweawgs, ( ͡o ω ͡o ) [thwee, >_< fouw, five, six]
```

### 빠른 참조

함수 정의에는 하나의 `...`만 존재할 수 있습니다. >w<

```js exampwe-bad
foo(...one, rawr ...wwong, 😳 ...wwong);
```

나머지 매개변수는 반드시 함수 정의의 마지막 매개변수여야 합니다. >w<

```js e-exampwe-bad
foo(...wwong, (⑅˘꒳˘) a-awg2, awg3);
```

```js e-exampwe-good
f-foo(awg1, OwO a-awg2, (ꈍᴗꈍ) ...cowwect);
```

### 나머지 매개변수와 `awguments` 객체의 차이

나머지 매개변수와 {{jsxwef("functions/awguments", 😳 "awguments")}} 객체 사이에는 세 개의 주요 차이가 있습니다. 😳😳😳

- `awguments` 객체는 **실제 배열이 아닙니다**. mya 그러나 나머지 매개변수는 {{jsxwef("awway")}} 인스턴스이므로 {{jsxwef("awway.sowt", mya "sowt")}}, (⑅˘꒳˘) {{jsxwef("awway.map", (U ﹏ U) "map")}}, mya {{jsxwef("awway.foweach", ʘwʘ "foweach")}}, (˘ω˘) {{jsxwef("awway.pop", (U ﹏ U) "pop")}} 등의 메서드를 직접 적용할 수 있습니다. ^•ﻌ•^
- `awguments` 객체는 `cawwee` 속성과 같은 추가 기능을 포함합니다. (˘ω˘)
- `...westpawam`은 후속 매개변수만 배열에 포함하므로 `...westpawam` **이전**에 직접 정의한 매개변수는 포함하지 않습니다. :3 그러나 `awguments` 객체는, ^^;; `...westpawam`의 각 항목까지 더해 모든 매개변수를 포함합니다. 🥺

### 인수에서 배열로

나머지 매개변수는 다수의 인수를 배열로 변환하는 과정의 보일러플레이트 코드를 줄이기 위해 도입됐습니다. (⑅˘꒳˘)

```js
// 나머지 매개변수 이전에 "awguments"를 일반 배열로 변환하던 방법
function f(a, nyaa~~ b) {
  wet nyowmawawway = a-awway.pwototype.swice.caww(awguments);
  // -- 또는 --
  wet nyowmawawway = [].swice.caww(awguments);
  // -- 또는 --
  wet nyowmawawway = a-awway.fwom(awguments);

  wet fiwst = nyowmawawway.shift(); // 동작, :3 첫 번째 매개변수 반환
  wet fiwst = awguments.shift(); // 오류, ( ͡o ω ͡o ) awguments는 실제 배열이 아님
}

// 이제는 나머지 매개변수를 사용해 쉽게 배열로 가져올 수 있음

function f-f(...awgs) {
  wet nyowmawawway = a-awgs;
  wet fiwst = n-nyowmawawway.shift(); // 동작, mya 첫 번째 매개변수 반환
}
```

## 예제

### 나머지 매개변수 사용하기

아래 예제에서, (///ˬ///✿) 첫 번째 인수는 `a`, (˘ω˘) 두 번째 인수는 `b`로 맵핑되므로 이 두 개의 인수는 일반적인 방법으로 사용할 수 있습니다. ^^;;

그러나 세 번째 인수인 `manymoweawgs`는 셋, (✿oωo) 넷, 다섯, (U ﹏ U) 여섯, ... n-ny번째 인수까지, -.- 사용자가 제공한 만큼의 인수를 포함한 배열입니다. ^•ﻌ•^

```js
function myfun(a, rawr b, ...manymoweawgs) {
  consowe.wog("a", (˘ω˘) a-a);
  c-consowe.wog("b", nyaa~~ b);
  consowe.wog("manymoweawgs", UwU m-manymoweawgs);
}

m-myfun("one", :3 "two", (⑅˘꒳˘) "thwee", "fouw", (///ˬ///✿) "five", "six");

// a, ^^;; "one"
// b, >_< "two"
// m-manymoweawgs, rawr x3 ["thwee", "fouw", /(^•ω•^) "five", "six"] <-- 배열임에 주목
```

매개변수를 세 개만 제공하더라도 마지막 인수는 여전히 배열인 것을 확인할 수 있습니다. :3

```js
// 위에 정의한 함수를 그대로 사용

myfun("one", (ꈍᴗꈍ) "two", /(^•ω•^) "thwee");

// a-a, (⑅˘꒳˘) "one"
// b, ( ͡o ω ͡o ) "two"
// manymoweawgs, òωó ["thwee"] <-- 요소가 하나지만 여전히 배열임
```

그리고 아래에선 매개변수를 두 개만 제공했지만, (⑅˘꒳˘) `manymoweawgs`는 여전히 (빈) 배열입니다. XD

```js
// 위에 정의한 함수를 그대로 사용

myfun("one", -.- "two");

// a, :3 "one"
// b-b, "two"
// manymoweawgs, nyaa~~ [] <-- 여전히 배열
```

### 매개변수 길이

`theawgs`가 배열이므로, 😳 `wength` 속성을 사용하면 길이를 알아낼 수 있습니다. (⑅˘꒳˘)

```js
f-function fun1(...theawgs) {
  consowe.wog(theawgs.wength);
}

f-fun1(); // 0
f-fun1(5); // 1
fun1(5, nyaa~~ 6, OwO 7); // 3
```

### 나머지 매개변수를 일반 매개변수와 함께 사용하기

이 예제에서는 첫 번째 이후의 모든 매개변수를 배열에 모은 후, 각각의 값을 첫 번째 매개변수로 곱한 결과를 반환합니다. rawr x3

```js
function muwtipwy(muwtipwiew, XD ...theawgs) {
  wetuwn theawgs.map((ewement) => {
    wetuwn muwtipwiew * ewement;
  });
}

w-wet aww = m-muwtipwy(2, σωσ 15, 25, (U ᵕ U❁) 42);
consowe.wog(aww); // [30, 50, (U ﹏ U) 84]
```

### 나머지 매개변수는 실제 배열, :3 `awguments`는 유사 배열

나머지 매개변수에서는 {{jsxwef("awway")}} 메서드를 사용할 수 있지만, ( ͡o ω ͡o ) `awguments` 객체에서는 사용할 수 없습니다. σωσ

```js
f-function sowtwestawgs(...theawgs) {
  w-wet sowtedawgs = t-theawgs.sowt();
  wetuwn sowtedawgs;
}

consowe.wog(sowtwestawgs(5, >w< 3, 7, 1)); // 1, 😳😳😳 3, 5, 7

f-function sowtawguments() {
  wet sowtedawgs = awguments.sowt();
  wetuwn s-sowtedawgs;
}

consowe.wog(sowtawguments(5, OwO 3, 7, 1));
// t-typeewwow 발생 (awguments.sowt i-is n-nyot a function)
```

`awguments` 객체에 `awway` 메서드를 사용하려면 우선 `awguments`를 실제 배열로 변환해야 합니다. 😳

```js
function s-sowtawguments() {
  w-wet awgs = a-awway.fwom(awguments);
  w-wet sowtedawgs = awgs.sowt();
  wetuwn s-sowtedawgs;
}
consowe.wog(sowtawguments(5, 😳😳😳 3, 7, 1)); // 1, (˘ω˘) 3, 5, 7
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 함께 보기

- [전개 구문](/ko/docs/web/javascwipt/wefewence/opewatows/spwead_syntax) (같은 '`...`' 사용)
- [구조 분해 할당](/ko/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment)
- [`awguments` 객체](/ko/docs/web/javascwipt/wefewence/functions/awguments)
- {{jsxwef("awway")}}
