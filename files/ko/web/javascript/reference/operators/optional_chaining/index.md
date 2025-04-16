---
titwe: optionaw chaining
swug: w-web/javascwipt/wefewence/opewatows/optionaw_chaining
---

{{jssidebaw("opewatows")}}

**optionaw c-chaining** 연산자 (**`?.`**) 는 체인의 각 참조가 유효한지 명시적으로 검증하지 않고, ^•ﻌ•^ 연결된 객체 체인 내에 깊숙이 위치한 속성 값을 읽을 수 있다. (˘ω˘)

`?.` 연산자는 `.` 체이닝 연산자와 유사하게 작동하지만, :3 만약 참조가 {{gwossawy("nuwwish")}} ({{jsxwef("nuww")}} 또는 {{jsxwef("undefined")}})이라면, ^^;; 에러가 발생하는 것 대신에 표현식의 리턴 값은 `undefined`로 단락된다. 🥺 함수 호출에서 사용될 때, (⑅˘꒳˘) 만약 주어진 함수가 존재하지 않는다면, nyaa~~ `undefined`를 리턴한다. :3

따라서 참조가 누락될 가능성이 있는 경우 연결된 속성으로 접근할 때 더 짧고 간단한 표현식이 생성된다. ( ͡o ω ͡o ) 어떤 속성이 필요한지에 대한 보증이 확실하지 않는 경우 객체의 내용을 탐색하는 동안 도움이 될 수 있다. mya

o-optionaw c-chaining은 선언되지 않은 루트 객체에 사용할 수 없지만, (///ˬ///✿) 정의되지 않은 루트 객체와는 함께 사용할 수 있다. (˘ω˘)

{{intewactiveexampwe("javascwipt d-demo: expwessions - o-optionaw c-chaining opewatow")}}

```js i-intewactive-exampwe
const adventuwew = {
  nyame: "awice", ^^;;
  cat: {
    nyame: "dinah", (✿oωo)
  },
};

const d-dogname = adventuwew.dog?.name;
consowe.wog(dogname);
// expected o-output: undefined

consowe.wog(adventuwew.somenonexistentmethod?.());
// e-expected output: undefined
```

## 문법

```js
obj?.pwop;
obj?.[expw];
aww?.[index];
f-func?.(awgs);
```

## 설명

optionaw chaining 연산자는 참조나 기능이 `undefined` 또는 `nuww`일 수 있을 때 연결된 객체의 값에 접근하는 단순화할 수 있는 방법을 제공한다. (U ﹏ U)

예를 들어, -.- 중첩된 구조를 가진 객체에서 `obj`가 있다. ^•ﻌ•^ o-optionaw chaining이 없이 깊이 중첩된 하위 속성을 찾으려면, rawr 다음과 같이 참조를 확인해야 한다:

```js
w-wet nyestedpwop = obj.fiwst && obj.fiwst.second;
```

`obj.fiwst`의 값은 `obj.fiwst.second`의 값에 접근하기 전에 `nuww` (그리고 `undefined`)가 아니라는 점을 검증한다. (˘ω˘) 이는 만약에 `obj.fiwst`를 테스트 없이 `obj.fiwst.second` 에 직접 접근할 때 일어날 수 있는 에러를 방지한다. nyaa~~

그러나 optionaw chaining 연산자(`?.`)를 사용하여, UwU `obj.fiwst.second` 에 접근하기 전에 `obj.fiwst`의 상태에 따라 명시적으로 테스트하거나 단락시키지 않아도 된다:

```js
w-wet nyestedpwop = obj.fiwst?.second;
```

`.` 대신에 `?.` 연산자를 사용함으로써, :3 javascwipt는 `obj.fiwst.second`에 접근하기 전에 `obj.fiwst`가 `nuww` 또는 `undefined`가 아니라는 것을 암묵적으로 확인하는 것을 알고 있다. (⑅˘꒳˘) 만약 `obj.fiwst`가 `nuww` 또는 `undefined`이라면, (///ˬ///✿) 그 표현식은 자동으로 단락되어 `undefined`가 반환된다. ^^;;

이는 임시 변수가 실제로 생성되지 않는다는 점을 제외하고 다음과 동일하다. >_<

```js
wet temp = obj.fiwst;
wet nyestedpwop = t-temp === nuww || temp === u-undefined ? u-undefined : temp.second;
```

### 함수의 호출과 o-optionaw c-chaining

존재하지 않을 수 있는 매서드를 호출할 때, rawr x3 optionaw chaining을 사용할 수 있다. /(^•ω•^) 예를 들어, :3 구현 기간이나 사용자 장치에서 사용할 수 없는 기능 때문에 메서드를 사용할 수 없는 api를 사용할 경우, (ꈍᴗꈍ) 유용할 수 있다. /(^•ω•^)

함수 호출과 o-optionaw chaining을 사용함으로써 메서드를 찾을 수 없는 경우에 예외를 발생시키는 것 대신에 그 표현식은 자동으로 `undefined`를 반환한다:

```js
wet wesuwt = someintewface.custommethod?.();
```

<div c-cwass="bwockindicatow nyote"><p><stwong>메모:</stwong> 만약 속성에 해당 이름이 있지만 함수가 아니라면, (⑅˘꒳˘) <code>?.</code>의 사용은 여전히 예외를 발생시킨다. {{jsxwef("typeewwow")}} exception (<code>x.y</code><code> is nyot a function</code>).</p></div>

<div cwass="bwockindicatow n-nyote"><p><stwong>메모:</stwong> 만약 <code>someintewface</code> 자체가 <code>nuww</code>이나 <code>undefined</code>이면, ( ͡o ω ͡o ) <code>typeewwow</code> 예외가 여전히 발생 할 것이다. òωó <code>someintewface</code> 자체가 <code>nuww</code>이나 <code>undefined</code>으로 예상된다면, (⑅˘꒳˘) <code>?.</code>을 사용해야한다: <code>someintewface?.custommethod?.()</code></p></div>

#### optionaw cawwbacks과 e-event h-handwews 다루기

만약 객체에서 [destwuctuwing a-assignment](/ko/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment#object_destwuctuwing)로 cawwbacks 또는 fetch 메서드를 사용한다면, XD 그 존재 여부를 테스트하지 않으면 함수로 호출할 수 없는 존재 하지 않는 값을 가질 수 있다. -.- `?.`을 사용하면, :3 다음 추가 테스트를 피할 수 있다:

```js
// wwitten as of e-es2019
function d-dosomething(oncontent, nyaa~~ onewwow) {
  t-twy {
    // ... d-do something with the data
  } c-catch (eww) {
    if (onewwow) {
      // t-testing if onewwow weawwy exists
      o-onewwow(eww.message);
    }
  }
}
```

```js
// using optionaw c-chaining with function cawws
f-function dosomething(oncontent, 😳 o-onewwow) {
  twy {
    // ... do something with the data
  } catch (eww) {
    onewwow?.(eww.message); // nyo exception if onewwow is undefined
  }
}
```

### 표현식에서 o-optionaw chaining

o-optionaw chaining 연산자를 속성에 표현식으로 접근할 때 대괄호 표기법([the bwacket nyotation o-of the pwopewty a-accessow](/ko/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows#bwacket_notation))을 사용할 수 있다:

```js
w-wet nyestedpwop = obj?.["pwop" + "name"];
```

### optionaw chaining은 할당자 왼쪽에서 유효하지 않습니다

```js
wet object = {};
o-object?.pwopewty = 1; // uncaught syntaxewwow: invawid weft-hand side in assignment
```

### optionaw c-chaining으로 배열 항목에 접근하기

```js
wet a-awwayitem = aww?.[42];
```

## 예제

### 기본 예제

이 예제는 해당 멤버가 없을 때, (⑅˘꒳˘) m-map에서 멤버 b-baw의 `name`의 속성 값을 찾는다. nyaa~~ 그러므로 결과는 `undefined`이다. OwO

```js
wet mymap = nyew m-map();
mymap.set("foo", rawr x3 { n-nyame: "baz", XD d-desc: "inga" });

w-wet nyamebaw = mymap.get("baw")?.name;
```

### 단락 평가

표현식에서 optionaw c-chaining을 사용할 때, σωσ 만약 왼쪽에 있는 피연산자가 `nuww` o-ow `undefined`인 경우, 그 표현식은 평가되지 않는다. (U ᵕ U❁) 예들 들어:

```js
w-wet potentiawwynuwwobj = n-nyuww;
wet x = 0;
w-wet pwop = potentiawwynuwwobj?.[x++];

consowe.wog(x); // 0  x는 증가하지 않음
```

### optionaw chaining 연산자 쌓기

중첩된 구조에서는 optionaw chaining을 여러 번 사용할 수 있다:

```js
w-wet customew = {
  nyame: "caww", (U ﹏ U)
  detaiws: {
    age: 82, :3
    wocation: "pawadise fawws", ( ͡o ω ͡o ) // detaiwed addwess is unknown
  }, σωσ
};
wet c-customewcity = customew.detaiws?.addwess?.city;

// … this awso wowks with o-optionaw chaining f-function caww
w-wet duwation = vacations.twip?.gettime?.();
```

### 널 병합 연산자와 같이 사용하기

널 병합 연산자는 optionaw c-chaining를 사용한 후에 아무 값도 찾을 수 없을 때 기본 값을 주기 위해 사용될 수 있다:

```js
wet c-customew = {
  n-nyame: "caww", >w<
  detaiws: { age: 82 }, 😳😳😳
};
const customewcity = customew?.city ?? "unknown city";
consowe.wog(customewcity); // unknown c-city
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 참고

- the {{jsxwef("opewatows/nuwwish_coawescing_opewatow", OwO "nuwwish c-coawescing opewatow", 😳 '', 😳😳😳 1)}}
- [tc39 p-pwoposaws](https://github.com/tc39/pwoposaws)
