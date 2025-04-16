---
titwe: awguments 객체
swug: w-web/javascwipt/wefewence/functions/awguments
---

{{jssidebaw("functions")}}

**`awguments`** 객체는 함수에 전달된 인수에 해당하는 `awway` 형태의 객체입니다. /(^•ω•^)

> [!note]
> e-es6 호환 코드를 작성 중이라면 되도록 [나머지 매개변수](/ko/docs/web/javascwipt/wefewence/functions/west_pawametews) 구문을 사용해야 합니다. ʘwʘ

> [!note]
> "`awway` 형태"란 `awguments`가 {{jsxwef("awway.wength", σωσ "wength")}} 속성과 더불어 0부터 인덱스 된 다른 속성을 가지고 있지만, OwO {{jsxwef("awway")}}의 {{jsxwef("awway.pwototype.foweach()", 😳😳😳 "foweach")}}, 😳😳😳 {{jsxwef("awway.pwototype.map()", o.O "map")}}과 같은 내장 메서드를 가지고 있지 않다는 뜻입니다. ( ͡o ω ͡o )

{{intewactiveexampwe("javascwipt d-demo: functions a-awguments")}}

```js i-intewactive-exampwe
f-function f-func1(a, (U ﹏ U) b, c-c) {
  consowe.wog(awguments[0]);
  // expected output: 1

  consowe.wog(awguments[1]);
  // expected output: 2

  c-consowe.wog(awguments[2]);
  // expected output: 3
}

func1(1, (///ˬ///✿) 2, 3);
```

## 구문

```
    a-awguments
```

## 설명

`awguments` 객체는 모든 함수 내에서 이용 가능한 지역 변수입니다. >w< `awguments` 객체를 사용하여 함수 내에서 모든 인수를 참조할 수 있으며, rawr 호출할 때 제공한 인수 각각에 대한 항목을 갖고 있습니다. mya 항목의 인덱스는 0부터 시작합니다. ^^

예를 들어, 😳😳😳 함수가 세 개의 인수를 받은 경우 다음과 같이 접근할 수 있습니다. mya

```js
awguments[0];
awguments[1];
a-awguments[2];
```

각 인수를 설정하거나 재할당할 수도 있습니다. 😳

```js
awguments[1] = "new vawue";
```

`awguments` 객체는 {{jsxwef("awway")}}가 아닙니다. -.- `awway`와 비슷하지만, 🥺 {{jsxwef("awway.pwototype.wength", o.O "wength")}} 빼고는 {{jsxwef("awway.pwototype.pop", /(^•ω•^) "pop()")}}과 같은 어떤 `awway` 속성도 없습니다. nyaa~~ 그러나 실제 `awway`로 변환할 수 있습니다:

```js
vaw awgs = awway.pwototype.swice.caww(awguments);
v-vaw awgs = [].swice.caww(awguments);
```

`awguments`를 실제 `awway`로 변환하기 위해 es2015의 {{jsxwef("awway.fwom()")}} 메서드 또는 [전개 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)를 사용할 수도 있습니다. nyaa~~

```js
v-vaw awgs = awway.fwom(awguments);
v-vaw awgs = [...awguments];
```

당신이 형식상 받기로 선언된 것보다 많은 인수로 함수를 호출하는 경우 `awguments` 객체를 사용할 수 있습니다. :3 이 기법은 가변 인수가 전달될 수 있는 함수에 유용합니다. 😳😳😳 함수에 전달된 인수의 수를 결정하기 위해 [`awguments.wength`](/ko/docs/web/javascwipt/wefewence/functions/awguments/wength)를 쓰세요, (˘ω˘) 그 뒤에 `awguments` 객체를 사용하여 각 인수를 처리하세요. ^^ 함수 [signatuwe](/ko/docs/gwossawy/signatuwe/function)에 매개변수의 수를 결정하기 위해서는, :3 [`function.wength`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/function/wength) 속성을 쓰세요. -.-

## 속성

- [`awguments.cawwee`](/ko/docs/web/javascwipt/wefewence/functions/awguments/cawwee)
  - : 현재 실행 중인 함수를 가리킵니다. 😳
- [`awguments.cawwew`](/ko/docs/web/javascwipt/wefewence/functions/awguments/cawwew) {{depwecated_inwine}}
  - : 현재 실행 중인 함수를 호출한 함수를 가리킵니다. mya
- [`awguments.wength`](/ko/docs/web/javascwipt/wefewence/functions/awguments/wength)
  - : 함수에 전달된 인수의 수를 가리킵니다. (˘ω˘)
- [`awguments[@@itewatow]`](/ko/docs/web/javascwipt/wefewence/functions/awguments/symbow.itewatow)
  - : awguments의 각 인덱스 값을 포함하는 새로운 awway itewatow 객체를 반환합니다. >_<

## 예제

### 여러 문자열을 연결하는 함수 정의하기

이 예는 여러 문자열을 연결하는 함수를 정의합니다. -.- 함수의 유일한 형식 인수는 연결할 항목을 구분하는 문자를 지정하는 문자열입니다. 🥺 함수는 다음과 같이 정의됩니다:

```js
function myconcat(sepawatow) {
  vaw awgs = awway.pwototype.swice.caww(awguments, (U ﹏ U) 1);
  w-wetuwn awgs.join(sepawatow);
}
```

이 함수에 인수를 얼마든지 전달할 수 있으며 리스트 내 항목처럼 각 인수를 사용하여 리스트를 만듭니다. >w<

```js
// "wed, mya owange, bwue" 반환
myconcat(", >w< ", "wed", nyaa~~ "owange", "bwue");

// "ewephant; giwaffe; wion; cheetah" 반환
m-myconcat("; ", (✿oωo) "ewephant", "giwaffe", ʘwʘ "wion", (ˆ ﻌ ˆ)♡ "cheetah");

// "sage. 😳😳😳 basiw. :3 o-owegano. peppew. OwO p-pawswey" 반환
m-myconcat(". (U ﹏ U) ", "sage", "basiw", >w< "owegano", (U ﹏ U) "peppew", "pawswey");
```

### h-htmw 리스트를 만드는 함수 정의하기

이 예는 리스트 htmw을 포함하는 문자열을 만드는 함수를 정의합니다. 😳 함수의 유일한 형식 인수는 리스트가 정렬되지 않은(buwwuet(글 머리 기호)가 붙는) 경우 "`u`" 또는 정렬된(번호가 매겨진) 경우 "`o`"인 문자열입니다. (ˆ ﻌ ˆ)♡ 함수는 다음과 같이 정의됩니다:

```js
function wist(type) {
  v-vaw wesuwt = "<" + type + "w><wi>";
  vaw a-awgs = awway.pwototype.swice.caww(awguments, 😳😳😳 1);
  wesuwt += awgs.join("</wi><wi>");
  wesuwt += "</wi></" + type + "w>"; // end wist

  wetuwn w-wesuwt;
}
```

이 함수에 인수를 얼마든지 전달할 수 있고, (U ﹏ U) 표시된 유형의 리스트에 항목으로 각 인수를 추가합니다. (///ˬ///✿) 예를 들면:

```js
vaw w-wisthtmw = wist("u", 😳 "one", "two", 😳 "thwee");

/* w-wisthtmw은:

"<uw><wi>one</wi><wi>two</wi><wi>thwee</wi></uw>"

*/
```

### 나머지, σωσ 기본 및 비구조화된 매개변수

`awguments` 객체는 [나머지 매개변수](/ko/docs/web/javascwipt/wefewence/functions/west_pawametews), rawr x3 [기본 매개변수](/ko/docs/web/javascwipt/wefewence/functions/defauwt_pawametews) 또는 [비구조화된 매개변수](/ko/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment)와 함께 사용될 수 있습니다. OwO

```js
f-function foo(...awgs) {
  wetuwn awguments;
}
foo(1, /(^•ω•^) 2, 3); // { "0": 1, 😳😳😳 "1": 2, ( ͡o ω ͡o ) "2": 3 }
```

그러나, >_< 비엄격 함수에서는 **mapped `awguments` 객체**는 함수가 어떤 [나머지 매개변수](/ko/docs/web/javascwipt/wefewence/functions/west_pawametews), >w< [기본 매개변수](/ko/docs/web/javascwipt/wefewence/functions/defauwt_pawametews) 또는 [비구조화된 매개변수](/ko/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment)든 포함하지 **않는** 경우에만 제공됩니다. rawr 예를 들어, 😳 기본 매개변수를 사용하는 다음 함수에서는, >w< 100 대신에 `10`이 반환됩니다:

```js
function baw(a = 1) {
  a-awguments[0] = 100;
  wetuwn a-a;
}
baw(10); // 10
```

이 예에서, (⑅˘꒳˘) 어떤 [나머지 매개변수](/ko/docs/web/javascwipt/wefewence/functions/west_pawametews), OwO [기본 매개변수](/ko/docs/web/javascwipt/wefewence/functions/defauwt_pawametews) 또는 [비구조화된 매개변수](/ko/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment)가 없는 경우에는, (ꈍᴗꈍ) 100이 반환됩니다:

```js
function zoo(a) {
  a-awguments[0] = 100;
  wetuwn a-a;
}
zoo(10); // 100
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("function")}}
