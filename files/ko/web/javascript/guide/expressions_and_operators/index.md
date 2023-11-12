---
title: 표현식과 연산자
slug: Web/JavaScript/Guide/Expressions_and_operators
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_dates")}}

이번 장에서는 JavaScript의 표현식과 함께 할당, 비교, 산술, 비트 계산, 논리, 문자열, 삼항 등 다양한 연산자를 살펴보겠습니다.

[참고서](/ko/docs/Web/JavaScript/Reference/Operators)에서 모든 연산자와 표현식의 자세한 목록도 확인할 수 있습니다.

## 연산자

JavaScript의 연산자는 다음과 같은 유형으로 나눌 수 있습니다. 이 절은 각각의 연산자에 대해 설명하고, 연산자 우선순위에 관한 정보를 제공합니다.

- [할당 연산자](#할당_연산자)
- [비교 연산자](#비교_연산자)
- [산술 연산자](#산술_연산자)
- [비트 연산자](#비트_연산자)
- [논리 연산자](#논리_연산자)
- [문자열 연산자](#문자열_연산자)
- [조건 (삼항) 연산자](#조건_삼항_연산자)
- [쉼표 연산자](#쉼표_연산자)
- [단항 연산자](#단항_연산자)
- [관계 연산자](#관계_연산자)

JavaScript는 이항 연산자와 단항 연산자를 모두 포함하며, 유일한 삼항 연산자로 조건 연산자도 가지고 있습니다. 이항 연산자는 연산자의 앞과 뒤에 하나씩 총 두 개의 피연산자가 필요합니다.

```js
피연산자1 연산자 피연산자2
```

이항 연산자의 예시로는 `3+4`와 `x*y`가 있습니다.

단항 연산자는 연산자의 앞이나 뒤에 하나의 피연산자가 필요합니다.

```js
연산자 피연산자
```

또는

```js
피연산자 연산자
```

단항 연산자의 예시로는 `x++` 또는 `++x`가 있습니다.

### 할당 연산자

할당 연산자는 오른쪽 피연산자의 값을 왼쪽 피연산자에 할당합니다. 기본적인 할당 연산자는 오른쪽의 피연산자 값을 왼쪽
피연산자 값에 할당하는 등호(`=`)로, `x = y` 는 `y`의 값을 `x`에
할당합니다.

아래의 표에서 볼 수 있듯, 연산과 할당을 동시에 수행하는 복합 할당 연산자도 존재합니다.

| 이름                                                                                                        | 단축 연산자 | 뜻               |
| ----------------------------------------------------------------------------------------------------------- | ----------- | ---------------- |
| [할당](/ko/docs/Web/JavaScript/Reference/Operators/Assignment)                                              | `x = y`     | `x = y`          |
| [더하기 할당](/ko/docs/Web/JavaScript/Reference/Operators/Addition_assignment)                              | `x += y`    | `x = x + y`      |
| [빼기 할당](/ko/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment)                             | `x -= y`    | `x = x - y`      |
| [곱하기 할당](/ko/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment)                        | `x *= y`    | `x = x * y`      |
| [나누기 할당](/ko/docs/Web/JavaScript/Reference/Operators/Division_assignment)                              | `x /= y`    | `x = x / y`      |
| [나머지 할당](/ko/docs/Web/JavaScript/Reference/Operators/Remainder_assignment)                             | `x %= y`    | `x = x % y`      |
| [거듭제곱 할당](/ko/docs/Web/JavaScript/Reference/Operators/Exponentiation_assignment)                      | `x **= y`   | `x = x ** y`     |
| [왼쪽 시프트 할당](/ko/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment)                       | `x <<= y`   | `x = x << y`     |
| [오른쪽 시프트 할당](/ko/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment)                    | `x >>= y`   | `x = x >> y`     |
| [부호 없는 오른쪽 시프트 할당](/ko/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment) | `x >>>= y`  | `x = x >>> y`    |
| [비트 AND 할당](/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)                         | `x &= y`    | `x = x & y`      |
| [비트 XOR 할당](/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment)                         | `x ^= y`    | `x = x ^ y`      |
| [비트 OR 할당](/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)                           | `x \|= y`   | `x = x \| y`     |
| [논리 AND 할당](/ko/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)                         | `x &&= y`   | `x && (x = y)`   |
| [논리 OR 할당](/ko/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)                           | `x \|\|= y` | `x \|\| (x = y)` |
| [널 병합 할당](/ko/docs/Web/JavaScript/Reference/Operators/Logical_nullish_assignment)                      | `x ??= y`   | `x ?? (x = y)`   |

#### 속성 할당

어떤 표현식이 [객체](/ko/docs/Web/JavaScript/Guide/Working_with_Objects)로 평가된다면, 할당 표현식의 좌항은 객체로 평가되는 표현식의 속성에 할당할 수 있습니다. 예를 들어,

```js
let obj = {};

obj.x = 3;
console.log(obj.x); // 3 출력.
console.log(obj); // { x: 3 } 출력.

const key = "y";
obj[key] = 5;
console.log(obj[key]); // 5 출력.
console.log(obj); // { x: 3, y: 5 } 출력.
```

객체에 관한 더 많은 정보를 [객체로 작업하기](/ko/docs/Web/JavaScript/Guide/Working_with_Objects)에서 찾아보세요.

어떤 표현식이 객체로 평가되지 않으면, 그 표현식의 속성에 대한 할당 표현식은 실제로는 할당하지 않습니다.

```js
let val = 0;

console.log((val.x = 3)); // 3 출력.
console.log(val.x); // undefined 출력.
console.log(val); // 0 출력.
```

수정 불가능한 속성이나, 속성이 없는 표현식(`null`이나 `undefined`)으로 할당을 시도하면 오류가 발생합니다.

#### 구조 분해

[구조 분해 할당](/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) 구문은 JavaScript 표현식 중 하나로, 객체나 배열을 생성할 때와 비슷한 구문으로 사용해서 어떤 객체나 배열에서 데이터를 추출할 수 있습니다.

```js
var foo = ["one", "two", "three"];

// 구조 분해 없음
var one = foo[0];
var two = foo[1];
var three = foo[2];

// 구조 분해 사용
var [one, two, three] = foo;
```

#### 반환 값과 체이닝

일반적으로, 할당 표현식은 변수 선언([`const`][], [`let`][], [`var`][])과 함께 쓰이거나 독립적인 명령문으로 사용됩니다.

```js
// 변수 x를 선언해서 f()의 결과로 초기화,
// x = f() 할당 표현식의 결과는 버려짐.
let x = f();

// 변수 x를 선언해서 g()의 결과로 초기화,
// x = g() 할당 표현식의 결과는 버려짐.
x = g(); // 변수 x를 g()의 결과로 재할당.
```

[`const`]: /ko/docs/Web/JavaScript/Reference/Statements/const
[`let`]: /ko/docs/Web/JavaScript/Reference/Statements/let
[`var`]: /ko/docs/Web/JavaScript/Reference/Statements/var

그런데, 다른 표현식들처럼 `x = f()`와 같은 할당 표현식도 결과 값으로 평가됩니다. 보통 이 값을 사용하진 않지만, 그래도 다른 평가식의 값으로 사용할 수 있다는 점은 바뀌지 않습니다.

할당 체이닝이나, 다른 표현식에 중첩된 할당은 예상하기 힘든 동작을 보일 수 있습니다. 그래서 어떤 JavaScript 스타일 가이드에서는 [할당을 체이닝하거나 중첩하는 걸 지양하라 말합니다][중첩 체인 지양]. 어쨌든, 할당 체이닝과 중첩을 가끔 마주치게 되므로 어떻게 동작하는지는 알아두는 게 좋습니다.

[중첩 체인 지양]: https://github.com/airbnb/javascript/blob/master/README.md#variables--no-chain-assignment

할당 표현식을 체이닝하거나 중첩함으로써 할당의 결과를 다시 다른 변수에 할당할 수 있습니다. 아니면 콘솔에 기록할 수도 있고, 배열 리터럴이나 함수 호출에 사용할 수도 있습니다.

```js
let x;
const y = (x = f()); // 또는 const y = x = f(); 와 같음.
console.log(y); // x = f() 할당의 반환 값을 기록.

console.log((x = f())); // 반환 값을 직접 기록.

// 할당 표현식은 보통 표현식을 기대하는 곳이라면
// 어디에나 중첩해 사용할 수 있으며
// 배열 리터럴의 요소나 함수의 매개변수도 그런 곳 중 일부임.
console.log([0, (x = f()), 0]);
console.log(f(0, (x = f()), 0));
```

평가 결과는 위쪽 표의 "뜻" 열에서 `=` 기호의 우항 표현식 결과와 같습니다. 그래서 `x = f()`의 평가 결과는 `f()`의 평가 결과와 같고, `x += f()`의 평가 결과는 `x + f()`와 같으며, `x **= f()`는 `x ** y`와 같습니다.

논리 할당인 `(x &&= y)`, `(x ||= y)`, `(x ??= y)`의 경우에는 할당 부분을 제외한 논리 연산의 결과를 반환합니다. 따라서 각각 `x && y`, `x || y`, `x ?? y`의 결과를 반환합니다.

할당 표현식을 괄호나 배열 리터럴같은 그룹 연산자 없이 체이닝하면, 할당 표현식은 **오른쪽에서 왼쪽으로 묶이지만**([우측 결합][]), **왼쪽에서 오른쪽으로 평가됩니다**.

[우측 결합]: https://en.wikipedia.org/wiki/Operator_associativity

참고로, 순수한 `=`을 제외한 모든 할당 연산자의 평가 결과 값은 항상 계산하기 전의 값에 기반합니다.

예를 들어, 다음과 같은 함수 `f`, `g`와 변수 `x`, `y`가 선언된 상황을 가정해 보겠습니다.

```js
function f() {
  console.log("F!");
  return 2;
}
function g() {
  console.log("G!");
  return 3;
}
let x, y;
```

다음 세 예제를 확인해 보세요.

```js
y = x = f();
y = [f(), (x = g())];
x[f()] = g();
```

##### 평가 예제 1

`=`은 우측 결합을 하기 때문에 `y = x = f()`는 `y = (x = f())`와 같습니다. 하지만 평가는 왼쪽에서 오른쪽으로 나아가므로,

1. 할당 표현식 `y = x = f()`의 평가를 시작합니다.
   1. 이 할당의 좌항인 `y`가, `y`라는 이름의 변수 참조로 평가됩니다.
   2. 할당 표현식 `x = f()`의 평가를 시작합니다.
      1. 이 할당의 좌항인 `x`가, `x`라는 이름의 변수 참조로 평가됩니다.
      2. 함수 호출 `f()`가 콘솔에 "F!"를 기록한 후 숫자 `2`로 평가됩니다.
      3. `f()`의 결과인 `2`를 `x`에 할당합니다.
   3. 할당 표현식 `x = f()`의 평가가 끝났습니다. 표현식의 결과 값은 `x`의 새로운 값, 즉 `2`입니다.
   4. 위의 결과인 `2`를 `y`에도 할당합니다.
2. 할당 표현식 `y = x = f()`의 평가가 끝났습니다. 표현식의 결과 값은 `y`의 새로운 값, 즉 `2`입니다. `x`와 `y`에 `2`를 할당했고, 콘솔에는 "F!"를 기록했습니다.

##### 평가 예제 2

`y = [ f(), x = g() ]` 또한 왼쪽에서 오른쪽으로 평가합니다.

1. 할당 표현식 `y = [ f(), x = g() ]`의 평가를 시작합니다.
   1. 이 할당의 좌항인 `y`가, `y`라는 이름의 변수 참조로 평가됩니다.
   2. 배열 리터럴 `[ f(), x = g() ]`의 평가를 시작합니다.
      1. 함수 호출 `f()`가 콘솔에 "F!"를 기록한 후 숫자 `2`로 평가됩니다.
      2. 할당 표현식 `x = g()`의 평가를 시작합니다.
         1. 이 할당의 좌항인 `x`가, `x`라는 이름의 변수 참조로 평가됩니다.
         2. 함수 호출 `g()`가 콘솔에 "G!"를 기록한 후 숫자 `3`으로 평가됩니다.
         3. `g()`의 결과인 `3`을 `x`에 할당합니다.
      3. 할당 표현식 `x = g()`의 평가가 끝났습니다. 표현식의 결과 값은 `x`의 새로운 값, 즉 `3`입니다. 이 결과인 `3`이 배열 리터럴의 두 번째 요소가 됩니다. (첫 번째 요소는 `f()`의 결과인 `2`입니다)
   3. 배열 리터럴 `[ f(), x = g() ]`의 평가가 끝났습니다. 그 결과는 두 개의 요소를 가진 배열, `[ 2, 3 ]`입니다.
   4. 위의 결과인 `[ 2, 3 ]` 배열을 `y`에 할당합니다.
2. 할당 표현식 `y = [ f(), x = g() ]`의 평가가 끝났습니다. 표현식의 결과 값은 `y`의 새로운 값, 즉 `[ 2, 3 ]`입니다. `x`에는 `3`, `y`에는 `[ 2, 3 ]`이 할당됐고, 콘솔에는 "F!" 후에 "G!"를 기록했습니다.

##### 평가 예제 3

`x[f()] = g()` 또한 왼쪽에서 오른쪽으로 평가합니다. (이 예제는 어떤 객체가 `x`에 할당됐다는 추가 가정 하에 진행합니다. 객체에 관한 더 많은 정보는 [객체로 작업하기](/ko/docs/Web/JavaScript/Guide/Working_with_Objects)를 참고하세요)

1. 할당 표현식 `x[f()] = g()`의 평가를 시작합니다.
   1. 이 할당의 좌항인 `x[f()]` 속성 접근의 평가를 시작합니다.
      1. 이 속성 접근의 `x`가, `x`라는 이름의 변수 참조로 평가됩니다.
      2. 함수 호출 `f()`가 콘솔에 "F!"를 기록한 후 숫자 `2`로 평가됩니다.
   2. 이 할당의 속성 접근 `x[f()]`의 평가가 끝났습니다. 그 결과 값은 변수 속성 참조 `x[2]`입니다.
   3. 다음으로, 함수 호출 `g()`가 콘솔에 "G!"를 기록한 후 숫자 `3`으로 평가됩니다.
   4. `g()`의 결과인 `3`을 `x[2]`에 할당합니다. (이 단계는 `x`에 [객체](/ko/docs/Web/JavaScript/Guide/Working_with_Objects)를 미리 할당한 경우에만 성공합니다)
2. 할당 표현식 `x[f()] = g()`의 평가가 끝났습니다. 표현식의 결과 값은 `x[2]`의 새로운 값, 즉 `3`입니다. `x[2]`에는 `3`이 할당됐고, 콘솔에는 "F!" 후에 "G!"를 기록했습니다.

#### 할당 체이닝을 피해야 할 이유

할당 체이닝이나, 다른 표현식에 중첩된 할당은 예상하기 힘든 동작을 보일 수 있습니다. 그래서 [하나의 명령문 내에서 할당을 체이닝하는 것은 추천하지 않습니다][중첩 체인 지양].

특히 [`const`][], [`let`][], [`var`][] 명령문에 변수 체인을 사용하면 종종 제대로 동작하지 않고, 가장 바깥 (왼쪽) 변수만 선언되며 나머지는 `const`/`let`/`var`가 선언하지 않을 것입니다. 예를 들어,

```js
let z = (y = x = f());
```

위 명령문은 얼핏 봤을 땐 `x`, `y`, `z` 세 변수를 선언하는 모습처럼 보입니다. 하지만 사실 위 코드는 변수 `z`만 선언합니다. 나머지 두 `y`와 `x`는 ([엄격 모드][/ko/docs/web/javascript/reference/strict_mode]에선) 존재하지 않는 변수를 향하는 유효하지 않은 참조거나, 심지어 ([느슨한 모드](/ko/docs/Glossary/Sloppy_mode)에선) `x`와 `y`를 암묵적인 [전역 변수][/ko/docs/glossary/global_variable]로 선언할 수도 있습니다

### 비교 연산자

비교 연산자는 피연산자를 서로 비교하고, 비교 결과가 참인지에 따라 논리 값을 반환합니다. 피연산자로는 숫자, 문자열, 논리형, [객체](/ko/docs/Web/JavaScript/Guide/Working_with_Objects) 값을 사용할 수 있습니다. 문자열은 Unicode 값을 사용한 표준 사전식 순서에 따라 비교합니다. 만약 두 피연산자가 서로 다른 타입이면, JavaScript는 피연산자들을 서로 비교하기에 적합한 타입으로 변환합니다. 이 동작은 대개 두 값을 모두 숫자로 변환한 후 비교한 결과를 낳습니다. 비교 연산에서 발생하는 타입 변환의 유일한 예외는
`===`과 `!==` 연산자를 사용해 엄격 일치와 불일치 비교를 수행하는 경우인데, 두 연산자는
비교 전에 피연산자를 변환하지 않습니다. 아래의 표는 다음 예제 코드를 사용해 각각의 비교 연산자를 설명합니다.

```js
const var1 = 3;
const var2 = 4;
```

<table class="standard-table">
  <caption>
    비교 연산자
  </caption>
  <thead>
    <tr>
      <th scope="col">연산자</th>
      <th scope="col">설명</th>
      <th scope="col"><code>true</code>를 반환하는 예제</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Equality">동등</a>
        (<code>==</code>)
      </td>
      <td>피연산자가 서로 같으면 <code>true</code>를 반환합니다.</td>
      <td>
        <code>3 == var1</code>
        <p><code>"3" == var1</code></p>
        <code>3 == '3'</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Inequality"
          >부등</a
        >
        (<code>!=</code>)
      </td>
      <td>피연산자가 서로 다르면 <code>true</code>를 반환합니다.</td>
      <td>
        <code>var1 != 4<br />var2 != "3"</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Strict_equality"
          >일치</a
        >
        (<code>===</code>)
      </td>
      <td>
        두 피연산자의 값과 타입이 모두 같은 경우 <code>true</code>를 반환합니다.
        {{jsxref("Object.is")}}와
        <a href="/ko/docs/Web/JavaScript/Equality_comparisons_and_sameness"
          >JavaScript에서의 같음</a
        >을 참고하세요.
      </td>
      <td><code>3 === var1</code></td>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Strict_inequality"
          >불일치</a
        >
        (<code>!==</code>)
      </td>
      <td>
        피연산자의 값 또는 타입이 서로 다를 경우 <code>true</code>를 반환합니다.
      </td>
      <td>
        <code>var1 !== "3"<br />3 !== '3'</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Greater_than"
          >큼</a
        >
        (<code>></code>)
      </td>
      <td>
        왼쪽 피연산자가 오른쪽 피연산자보다 크면 <code>true</code>를 반환합니다.
      </td>
      <td>
        <code>var2 > var1<br />"12" > 2</code>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/ko/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal"
          >크거나 같음</a
        >
        (<code>>=</code>)
      </td>
      <td>
        왼쪽 피연산자가 오른쪽 피연산자와 같거나 크면 <code>true</code>를
        반환합니다.
      </td>
      <td>
        <code>var2 >= var1<br />var1 >= 3</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Less_than">작음</a>
        (<code>&#x3C;</code>)
      </td>
      <td>
        왼쪽 피연산자가 오른쪽 피연산자보다 작으면 <code>true</code>를
        반환합니다.
      </td>
      <td>
        <code>var1 &#x3C; var2<br />"2" &#x3C; 12</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal"
          >작거나 같음</a
        >
        (<code>&#x3C;=</code>)
      </td>
      <td>
        왼쪽 피연산자가 오른쪽 피연산자와 같거나 작으면 <code>true</code>를
        반환합니다.
      </td>
      <td>
        <p>
          <code>var1 &#x3C;= var2<br />var2 &#x3C;= 5</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>

> **참고:** `=>`는 연산자가 아니라
> [화살표 함수](/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions)의 표기법입니다.

### 산술 연산자

산술 연산자는 두 개의 숫자 값(리터럴 또는 변수)을 피연산자로 받아서 하나의 숫자 값을 반환합니다. 표준 산술 연산자는
더하기(`+`), 빼기(`-`), 곱하기(`*`), 나누기(`/`)입니다. 이 연산자들은
대부분의 다른 프로그래밍 언어에서 부동소수점 값을 연산할 때와 동일하게 동작합니다. (0 으로 나눌 경우
{{jsxref("Infinity")}}를 반환하는 것에 주의하세요) 예를 들어,

```js
1 / 2; // 0.5
1 / 2 == 1.0 / 2.0; // 참
```

JavaScript는 표준 산술 연산자(`+`, `-`, `*`, `/`) 외에도 아래의 표에
나열된 산술 연산자를 제공합니다.

<table class="standard-table">
  <caption>
    산술 연산자
  </caption>
  <thead>
    <tr>
      <th scope="col">연산자</th>
      <th scope="col">설명</th>
      <th scope="col">예제</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Remainder">나머지</a>
        (<code>%</code>)
      </td>
      <td>이항 연산자입니다. 두 피연산자를 나눴을 때의 나머지를 반환합니다.</td>
      <td>12 % 5 는 2를 반환합니다.</td>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Increment">증가</a>
        (<code>++</code>)
      </td>
      <td>
        단항 연산자입니다. 피연산자에 1을 더합니다. 전위 연산자(<code>++x</code>)로 사용하면 피연산자에 1을 더한 값을
        반환합니다. 후위 연산자(<code>x++</code>)로 사용한 경우 피연산자에 1을 더하기 전의 값을 반환합니다.
      </td>
      <td>
        <code>x</code>가 3일 때, <code>++x</code>는 <code>x</code>에 4를 할당한 후 4를 반환합니다. 반면
        <code>x++</code>는 3을 먼저 반환한 후 <code>x</code>에 4를 할당합니다.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Decrement">감소</a>
        (<code>--</code>)
      </td>
      <td>단항 연산자입니다. 피연산자에서 1을 뺍니다. 반환 값은 증가 연산자처럼 동작합니다.</td>
      <td>
        <code>x</code>가 3일 때, <code>--x</code>는 <code>x</code>에 2를 할당한 후 2를 반환합니다. 반면
        <code>x--</code>는 3을 먼저 반환한 후 <code>x</code>에 2를 할당합니다.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Unary_negation">단항 부정</a>
        (<code>-</code>)
      </td>
      <td>단항 연산자입니다. 피연산자의 부호를 반대로 바꾼 값을 반환합니다.</td>
      <td><code>x</code>가 3일 때, <code>-x</code>는 -3을 반환합니다.</td>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Unary_plus">단항 플러스</a>
        (<code>+</code>)
      </td>
      <td>단항 연산자입니다. 피연산자가 숫자 타입이 아니면 숫자로 변환을 시도합니다.</td>
      <td>
        <code>+"3"</code>은 <code>3</code>을 반환합니다.<br />
        <code>+true</code>는 <code>1</code>을 반환합니다.
      </td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Exponentiation">거듭제곱</a> (<code>**</code>)</td>
      <td><code>base^exponent</code>, 즉 <code>base</code>를 <code>exponent</code>로 거듭제곱한 결과를 반환합니다.</td>
      <td>
        <code>2 ** 3</code>은 <code>8</code>을 반환합니다.<br />
        <code>10 ** -1</code>은 <code>0.1</code>을 반환합니다.
      </td>
    </tr>
  </tbody>
</table>

### 비트 연산자

비트 연산자는 피연산자를 10진수, 16진수, 8진수 숫자로 취급하지 않고, 대신 32개 비트의 집합으로 취급합니다. 예를 들어,
10진수 9는 2진수 1001로 나타냅니다. 비트 연산자는 이러한 이진법 표현에 대해 연산을 수행하지만, 반환할 땐 JavaScript
표준 숫자로 반환합니다.

아래의 표에서 JavaScript 비트 연산자의 요약본을 볼 수 있습니다.

| 연산자                                                                                      | 사용법    | 설명                                                                                                                                    |
| ------------------------------------------------------------------------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| [비트 AND](/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)                         | `a & b`   | 두 피연산자의 각 자리 비트의 값이 모두 1인 위치에 1을 반환합니다.                                                                       |
| [비트 OR](/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)                           | `a \| b`  | 두 피연산자의 각 자리 비트의 값이 모두 0인 위치에 0을 반환합니다.                                                                       |
| [비트 XOR](/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR)                         | `a ^ b`   | 두 피연산자의 각 자리 비트의 값이 서로 같은 위치에 0을 반환합니다. [두 피연산자의 각 자리 비트의 값이 서로 다른 위치에 1을 반환합니다.] |
| [비트 NOT](/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT)                         | `~ a`     | 피연산자의 각 자리의 비트를 뒤집습니다.                                                                                                 |
| [왼쪽 시프트](/ko/docs/Web/JavaScript/Reference/Operators/Left_shift)                       | `a << b`  | `a`의 이진 표현을 `b`만큼 왼쪽으로 이동하고, 오른쪽은 0으로 채웁니다.                                                                   |
| [오른쪽 시프트](/ko/docs/Web/JavaScript/Reference/Operators/Right_shift)                    | `a >> b`  | `a`의 이진 표현을 `b`만큼 오른쪽으로 이동하고, 1 미만으로 이동한 비트는 버립니다.                                                       |
| [부호 없는 오른쪽 시프트](/ko/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) | `a >>> b` | `a`의 이진 표현을 `b`만큼 오른쪽으로 이동하고, 1 미만으로 이동한 비트는 버립니다. 왼쪽은 0으로 채웁니다.                                |

#### 비트 논리 연산자

개념적으로, 비트 논리 연산자는 다음과 같이 동작합니다.

- 두 피연산자를 32비트 정수로 변환해서 비트(0 과 1)의 연속으로 표현합니다. 숫자가 32비트를 초과할 경우 가장 큰
  비트부터 버립니다. 다음은 32비트가 넘는 정수의 변환 예제입니다.

  ```
  전: 1110 0110 1111 1010 0000 0000 0000 0110 0000 0000 0001
  후:                1010 0000 0000 0000 0110 0000 0000 0001
  ```

- 왼쪽 피연산자의 각 비트와 오른쪽 피연산자의 각 비트를 순서대로 쌍으로 만듭니다. 즉, 첫 비트는 첫 비트와, 두 번째
  비트는 두 번째 비트와, ... 32번째 비트는 32번째 비트와 짝을 짓습니다.
- 연산자를 각각의 비트 쌍에 대해 적용한 결과를 비트 단위로 구축합니다.

예를 들어, 9의 이진 표현은 1001이고, 15의 이진 표현은 1111입니다. 비트 연산자를 이 두 값에 적용했을 때의 결과는 다음과 같습니다.

| 표현식    | 결과  | 이진법 설명                                           |
| --------- | ----- | ----------------------------------------------------- |
| `15 & 9`  | `9`   | `1111 & 1001 = 1001`                                  |
| `15 \| 9` | `15`  | `1111 \| 1001 = 1111`                                 |
| `15 ^ 9`  | `6`   | `1111 ^ 1001 = 0110`                                  |
| `~15`     | `-16` | `~ 0000 0000 ... 0000 1111 = 1111 1111 ... 1111 0000` |
| `~9`      | `-10` | `~ 0000 0000 ... 0000 1001 = 1111 1111 ... 1111 0110` |

참고로, 비트 NOT 연산자를 사용하면 32개의 비트를 모두 반전하는데, 가장 큰 (맨 왼쪽) 비트가 1이면 음수를 나타냅니다(2의
보수 표현법). `~x`는 `-x - 1`과 같은 값으로 평가됩니다.

#### 비트 시프트 연산자

비트 시프트 연산자는 시프트를 적용할 값과, 시프트할 자릿수를 피연산자로 받습니다. 시프트 방향은 사용하는 연산자에 따라
다릅니다.

시프트 연산자는 피연산자를 32비트 정수로 변환하고, 결과 값을 {{jsxref("Number")}}나 {{jsxref("BigInt")}}로 반환합니다.
정확히는, 왼쪽 피연산자가 `BigInt`면 `BigInt`를 반환하고, 그 외에는 `Number`를
반환합니다.

아래의 표에서 시프트 연산자의 종류를 볼 수 있습니다.

<table class="standard-table">
  <caption>
    비트 시프트 연산자
  </caption>
  <thead>
    <tr>
      <th scope="col">연산자</th>
      <th scope="col">설명</th>
      <th scope="col">예제</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Left_shift">왼쪽 시프트 (<code>&lt;&lt;</code>)</a>
      </td>
      <td>
        왼쪽 피연산자를 오른쪽 피연산자만큼 왼쪽으로 시프트합니다. 왼쪽으로 넘치는 비트는 버리고, 오른쪽을 0으로
        채웁니다.
      </td>
      <td><code>9&lt;&lt;2</code>는, 1001을 왼쪽으로 2번 시프트하면 100100이므로 36입니다.</td>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Right_shift">오른쪽 시프트 (<code>&gt;&gt;</code>)</a>
      </td>
      <td>
        왼쪽 피연산자를 오른쪽 피연산자만큼 오른쪽으로 시프트합니다. 오른쪽으로 넘치는 비트는 버리고, 왼쪽은 제일 큰
        비트의 값으로 채웁니다.
      </td>
      <td>
        <code>9&gt;&gt;2</code>는, 1001을 오른쪽으로 2번 시프트하면 10이므로 2입니다. 마찬가지로
        <code>-9&gt;&gt;2</code>는, 부호를 유지하므로 -3을 반환합니다.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift"
          >부호 없는 오른쪽 시프트 (<code>&gt;&gt;&gt;</code>)</a
        >
      </td>
      <td>
        왼쪽 피연산자를 오른쪽 피연산자만큼 오른쪽으로 시프트합니다. 오른쪽으로 넘치는 비트는 버리고, 왼쪽은 0으로
        채웁니다.
      </td>
      <td>
        <code>19&gt;&gt;&gt;2</code>는, 10011을 오른쪽으로 2번 시프트하면 100이므로 4입니다. 양의 수에 대해서는 오른쪽
        시프트와 부호 없는 오른쪽 시프트 둘 다 같은 결과를 반환합니다.
      </td>
    </tr>
  </tbody>
</table>

### 논리 연산자

논리 연산자는 보통 불리언(논리) 값과 함께 사용해서 불리언 값을 반환합니다. 그러나
`&&`와 `||` 연산자는 사실 두 피연산자 중 하나를 반환하는 것으로, 만약 둘 중 하나가
불리언 값이 아니라면 논리 연산자의 반환 값도 불리언 값이 아닐 수 있습니다. 아래의 표에서 논리 연산자의 설명을 볼 수
있습니다.

<table class="standard-table">
  <caption>
    논리 연산자
  </caption>
  <tbody>
    <tr>
      <th scope="col">연산자</th>
      <th scope="col">사용법</th>
      <th scope="col">설명</th>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Logical_AND">논리 AND</a>
        (<code>&amp;&amp;</code>)
      </td>
      <td>
        <code>expr1 &amp;&amp; expr2</code>
      </td>
      <td>
        <code>expr1</code>을 <code>false</code>로 변환할 수 있으면 <code>expr1</code>을 반환합니다. 그 외의 경우에는
        <code>expr2</code>를 반환합니다. 따라서 불리언 값과 함께 사용한 경우, 둘 다 참일 때 <code>true</code>를, 그
        외에는 <code>false</code>를 반환합니다.
      </td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Logical_OR">논리 OR</a> (<code>||</code>)</td>
      <td><code>expr1 || expr2</code></td>
      <td>
        <code>expr1</code>을 <code>true</code>로 변환할 수 있으면 <code>expr1</code>을 반환합니다. 그 외의 경우에는
        <code>expr2</code>를 반환합니다. 따라서 불리언 값과 함께 사용한 경우, 둘 중 하나가 참일 때 <code>true</code>를,
        그 외에는 <code>false</code>를 반환합니다.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Logical_NOT">논리 NOT</a>
        (<code>!</code>)
      </td>
      <td><code>!expr</code></td>
      <td>
        단일 피연산자를 <code>true</code>로 변환할 수 있으면 <code>false</code>를 반환합니다. 그 외에는
        <code>true</code>를 반환합니다.
      </td>
    </tr>
  </tbody>
</table>

`false`로 변환할 수 있는 표현식은 평가 결과가 {{jsxref("null")}}, `0`, {{jsxref("NaN")}}, 빈
문자열(`""`), {{jsxref("undefined")}}인 경우입니다.

다음 코드는 `&&` (논리 AND) 연산자의 예제입니다.

```js
var a1 = true && true; // t && t는 true 반환
var a2 = true && false; // t && f는 false 반환
var a3 = false && true; // f && t는 false 반환
var a4 = false && 3 == 4; // f && f는 false 반환
var a5 = "Cat" && "Dog"; // t && t는 Dog 반환
var a6 = false && "Cat"; // f && t는 false 반환
var a7 = "Cat" && false; // t && f는 false 반환
```

다음 코드는 `||` (논리 OR) 연산자의 예제입니다.

```js
var o1 = true || true; // t || t는 true 반환
var o2 = false || true; // f || t는 true 반환
var o3 = true || false; // t || f는 true 반환
var o4 = false || 3 == 4; // f || f는 false 반환
var o5 = "Cat" || "Dog"; // t || t는 Cat 반환
var o6 = false || "Cat"; // f || t는 Cat 반환
var o7 = "Cat" || false; // t || f는 Cat 반환
```

다음 코드는 `!` (논리 NOT) 연산자의 예제입니다.

```js
var n1 = !true; // !t는 false 반환
var n2 = !false; // !f는 true 반환
var n3 = !"Cat"; // !t는 false 반환
```

#### 단락 평가

논리 연산자는 왼쪽에서 오른쪽의 순서로 평가하므로, 다음 규칙을 사용해서 "단락"(short-circuit) 평가가 가능한지
판별합니다.

- `false && 아무거나`는 거짓으로 단락 평가합니다.
- `true || 아무거나`는 참으로 단락 평가합니다.

논리 규칙은 위의 단락 평가가 항상 옳음을 보증합니다. _아무거나_ 부분의 표현식은 평가도 하지 않으므로, 해당
표현식에서 유발하게 되는 부수 효과도 전혀 발생하지 않음에 주의하세요.

참고로 `||`을 사용한 두 번째 단락 평가의 경우, 최근 코드에서는 새로운
[널 병합 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
(`??`)를 사용할 수도 있습니다. 널 병합 연산자는 첫 번째 연산자가 "[널과 유사](/ko/docs/Glossary/Nullish)"한, 즉 {{jsxref("null")}}이거나 {{jsxref("undefined")}}일 때만 두 번째 피연산자를 반환합니다. `''`와
`0`도 유효한 값이라면 널 병합 연산자가 기본 값을 나타낼 때 더 좋은 선택지입니다.

### 문자열 연산자

문자열에 사용할 수 있는 비교 연산자들 외에도, 문자열 연결(`+`) 연산자는 두 문자열의 값을 서로 연결한 새로운
문자열을 반환합니다.

예를 들어,

```js
console.log("나만의 " + "문자열"); // 콘솔에 "나만의 문자열"을 기록
```

단축 할당 연산자인 `+=` 또한 문자열을 연결결할 때 사용할 수 있습니다.

예를 들어,

```js
var mystring = "한";
mystring += "글"; // "한글"로 평가되며, mystring에 "한글"을 할당함
```

### 조건 (삼항) 연산자

[조건 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)는 JavaScript에서 세 개의 피연산자를 받는 유일한 연산자입니다. 조건 연산자는 주어진 조건에 따라 두 값 중 하나를 반환하며, 구문은 다음과 같습니다.

```js
condition ? val1 : val2;
```

만약 `condition`이 참이라면, 조건 연산자는 `val1`을 반환하고, 그 외에는 `val2`를
반환합니다. 다른 연산자를 사용할 수 있는 곳이라면 조건 연산자도 사용할 수 있습니다.

에들 들어,

```js
var status = age >= 18 ? "성인" : "미성년자";
```

위의 명령문은 `age`가 18 이상이라면 `status` 변수에 "성인"을 할당하고, 그렇지 않으면
"미성년자"를 할당합니다.

### 쉼표 연산자

[쉼표 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Comma_Operator)(`,`)는 두 피연산자를 모두 평가한 후 오른쪽 피연산자의 값을 반환합니다. 쉼표 연산자는 주로 `for` 반복문 안에서 사용하여 한 번의 반복으로 여러 변수를 변경할 때 사용합니다. 꼭 필요하지 않다면, 그 외의 상황에 사용하는 것은 좋지 않은 코드 스타일로 여겨집니다. 대개 쉼표 연산자보다는 두 개의 분리된 명령문을 사용하는 편이 낫습니다.

쉼표 연산자의 예제로, 10행 10열의 2차원 배열 `a`를 가정할 때, 아래의 코드는 쉼표 연산자를 사용해서 두 개의 변수를 한번에 업데이트하는 모습을 보입니다. 코드의 실행 결과는 `a`의 요소를 대각선((0, 0\), (1, 1), (2, 2), ...)으로 출력한 것입니다.

```js
var x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var a = [x, x, x, x, x];

for (var i = 0, j = 9; i <= j; i++, j--);
//                                  ^
console.log("a[" + i + "][" + j + "]= " + a[i][j]);
```

### 단항 연산자

단항 연산은 오직 하나의 피연산자만 사용하는 연산입니다.

#### `delete`

[`delete`](/ko/docs/Web/JavaScript/Reference/Operators/delete)연산자는 객체의 속성을 삭제합니다. 구문은 다음과 같습니다.

```js
delete object.property;
delete object[propertyKey];
delete objectName[index];
```

위의 구문에서, `objectName`은 객체의 이름이고, `property`는 객체에 존재하는 속성,
`propertyKey`는 존재하는 속성을 가리키는 문자열이나 심볼입니다.

`delete` 연산자가 속성을 성공적으로 삭제한 이후, 해당 속성을 접근하려고 하면 `undefined`가
반환됩니다. `delete`는 속성을 제거할 수 있는 경우에는 `true`를 반환하고, 제거할 수 없을 땐
`false`를 반환합니다.

```js
delete Math.PI; // false 반환 (설정 불가한 속성 삭제 불가)

const myObj = { h: 4 };
delete myobj.h; // true 반환 (사용자 정의 속성 삭제 가능)
```

##### 배열의 원소 삭제하기

배열도 평범한 객체이므로, 기술적으로는 `delete`를 사용해서 요소를 제거하는 것이 가능합니다. 그러나 이는
좋은 방법이 아니므로 피해야 합니다. 배열의 속성을 제거해도 배열 길이 속성은 영향을 받지 않으며, 다른 요소의 인덱스도
그대로 남아있습니다. 이런 동작을 원한다면 단순히 값을 `undefined`로 덮어쓰는 편이 훨씬 낫습니다. 실제로
배열을 변형하고자 하면 {{jsxref("Array.splice", "splice")}}와 같은 다양한 배열 메서드를 사용하세요.

#### `typeof`

[`typeof` 연산자](/ko/docs/Web/JavaScript/Reference/Operators/typeof)는 다음과 같은 방법으로
사용합니다.

```js-nolint
typeof operand;
typeof (operand);
```

`typeof` 연산자는 평가 전의 피연산자 타입을 나타내는 문자열을 반환합니다. `operand`는 문자열,
변수, 키워드, 객체 등 타입을 알아낼 값입니다. 주위의 괄호는 선택 사항입니다.

다음과 같은 변수를 가정하겠습니다.

```js
var myFun = new Function("5 + 2");
var shape = "round";
var size = 1;
var foo = ["Apple", "Mango", "Orange"];
var today = new Date();
```

`typeof` 연산자는 위의 변수들에 대해서 다음과 같은 값을 반환합니다.

```js
typeof myFun; // "function" 반환
typeof shape; // "string" 반환
typeof size; // "number" 반환
typeof foo; // "object" 반환
typeof today; // "object" 반환
typeof dontExist; // "undefined" 반환
```

키워드 `true`와 `null`에 대해서는 다음과 같은 결과를 반환합니다.

```js
typeof true; // "boolean" 반환
typeof null; // "object" 반환
```

숫자와 문자열에서는 다음과 같은 결과를 반환합니다.

```js
typeof 62; // "number" 반환
typeof "Hello world"; // "string" 반환
```

객체의 속성에 사용하면 속성이 갖고 있는 값의 타입을 반환합니다.

```js
typeof document.lastModified; // "string" 반환
typeof window.length; // "number" 반환
typeof Math.LN2; // "number" 반환
```

메서드와 함수에 대해선 다음과 같은 결과를 반환합니다.

```js
typeof blur; // "function" 반환
typeof eval; // "function" 반환
typeof parseInt; // "function" 반환
typeof shape.split; // "function" 반환
```

사전 정의된 객체에 대해선 다음과 같은 결과를 반환합니다.

```js
typeof Date; // "function" 반환
typeof Function; // "function" 반환
typeof Math; // "object" 반환
typeof Option; // "function" 반환
typeof String; // "function" 반환
```

#### `void`

[`void` 연산자](/ko/docs/Web/JavaScript/Reference/Operators/void)는 다음과 같이 사용합니다.

```js-nolint
void (expression);
void expression;
```

`void` 연산자는 표현식을 평가할 때 값을 반환하지 않도록 지정합니다. `expression`은 평가할
JavaScript 표현식입니다. 주위 괄호는 선택 사항이지만, 사용하면 좋습니다.

### 관계 연산자

관계 연산자는 피연산자를 서로 비교하고, 비교 결과가 참인지에 따라 불리언 값을 반환합니다.

#### `in`

[`in` 연산자](/ko/docs/Web/JavaScript/Reference/Operators/in)는 지정한 속성이 지정한 객체에
존재할 경우 `true`를 반환합니다. 구문은 다음과 같습니다.

```js
propNameOrNumber in objectName;
```

`propNameOrNumber`는 속성이나 배열 인덱스를 나타내는 문자열, 숫자, 심볼 표현식이며
`objectName`은 객체의 이름입니다.

다음 코드는 `in` 연산자의 예제입니다.

```js
// 배열
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
0 in trees; // true 반환
3 in trees; // true 반환
6 in trees; // false 반환
"bay" in trees; // false 반환 (인덱스에 위치한 값이 아니라
// 인덱스 자체를 지정해야 함)
"length" in trees; // true 반환 (length는 Array의 속성임)

// 내장 객체
"PI" in Math; // true 반환
var myString = new String("coral");
"length" in myString; // true 반환

// 사용자 정의 객체
var mycar = { make: "Honda", model: "Accord", year: 1998 };
"make" in mycar; // true 반환
"model" in mycar; // true 반환
```

#### `instanceof`

[`instanceof` 연산자](/ko/docs/Web/JavaScript/Reference/Operators/instanceof)는 지정한 객체가
지정한 객체 타입에 속하면 `true`를 반환합니다.

```js
objectName instanceof objectType;
```

`objectName`은 `objectType`과 비교할 객체의 이름이고, `objectType`은
{{jsxref("Date")}}, {{jsxref("Array")}}와 같은 객체 타입입니다.

런타임에 객체의 타입을 확인할 필요가 있으면 `instanceof` 연산자를 사용하세요. 예컨대 예외 처리 시에, 잡아낸
예외의 타입에 따라 다른 방법으로 처리할 수 있습니다.

다음의 코드는 `instanceof` 연산자를 사용해서 `theDay` 객체가 `Date` 객체인지 알아내는
예제입니다. `theDay` 객체는 `Date` 객체이기 때문에, `if` 명령문 안의 내용이
실행됩니다.

```js
var theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // 실행할 명령문
}
```

### 연산자 우선순위

연산자의 우선순위는 표현식을 평가할 때 연산자를 적용하는 순서를 결정합니다. 괄호를 사용하면 우선순위를 바꿀 수
있습니다.

아래 표는 우선순위가 높은 순서에서 낮은 순서로 연산자를 나열합니다.

| 연산자 유형        | 개별 연산자                                                                               |
| ------------------ | ----------------------------------------------------------------------------------------- |
| 맴버 접근          | `.` `[]`                                                                                  |
| 인스턴스 호출/생성 | `()` `new`                                                                                |
| 증감               | `!` `~` `-` `+` `++` `--` `typeof` `void` `delete`                                        |
| 거듭제곱           | `**`                                                                                      |
| 곱하기/나누기      | `*` `/` `%`                                                                               |
| 더하기/빼기        | `+` `-`                                                                                   |
| 비트 시프트        | `<<` `>>` `>>>`                                                                           |
| 관계               | `<` `<=` `>` `>=` `in` `instanceof`                                                       |
| 동등/일치          | `==` `!=` `===` `!==`                                                                     |
| 비트 AND           | `&`                                                                                       |
| 비트 XOR           | `^`                                                                                       |
| 비트 OR            | `\|`                                                                                      |
| 논리 AND           | `&&`                                                                                      |
| 논리 OR            | `\|\|`                                                                                    |
| 조건               | `?:`                                                                                      |
| 할당               | `=` `+=` `-=` `**=` `*=` `/=` `%=` `<<=` `>>=` `>>>=` `&=` `^=` `\|=` `&&=` `\|\|=` `??=` |
| 쉼표               | `,`                                                                                       |

각각의 연산자로 향하는 링크를 포함한 더 자세한 표는
[JavaScript 참고서](/ko/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table)에서 찾을 수
있습니다.

## 표현식

표현식이란 어떤 값으로 이행하는 임의의 유효한 코드 단위를 말합니다.

모든 표현식은 구문이 유효하다면 어떤 값으로 이행하지만, 개념적으로는 두 가지 범주로 나뉩니다. 하나는 부수 효과가 있는 (예시: 변수에 값을 할당) 표현식이고, 다른 하나는 평가하면 어떤 값으로 이행하는 표현식입니다.

`x = 7`은 앞의 범주에 포함됩니다. 이 표현식은 `=` 연산자를 사용해서 값 7을 `x` 변수에
할당합니다. 표현식 자체도 7로 평가됩니다.

`3 + 4`는 뒤쪽 범주로 들어갑니다. 이 표현식은 `+` 연산자를 사용해서 3과 4를 더하지만, 결과인 7을
변수에 할당하지는 않습니다.

JavaScript의 표현식은 다음과 같은 범주로 구분할 수 있습니다.

- 산수: 숫자, 예컨대 3.14159로 평가됩니다. 보통 [산술 연산자](#arithmetic_operators)를 사용합니다.
- 문자열: 문자열, 예컨대 "프레디", "234" 등으로 평가됩니다. 보통 [문자열 연산자](#string_operators)를
  사용합니다.
- 논리: 참이나 거짓으로 평가됩니다. 대개 [논리 연산자](#logical_operators)를 포함합니다.
- 일차 표현식: JavaScript의 키워드와 일반 표현식입니다.
- 좌변 표현식: 좌변 값은 할당의 목적지입니다.

### 일차 표현식

JavaScript의 키워드와 일반 표현식입니다.

#### `this`

현재 객체를 참조하려면
[`this` 키워드](/ko/docs/Web/JavaScript/Reference/Operators/this)를 사용하세요. 일반적으로
`this`는 메서드의 호출 객체를 참조합니다. 다음과 같이, `this`를 점이나 대괄호 표기법과 함께
사용하세요.

```js
this["propertyName"];
this.propertyName;
```

최대와 최소 값을 받아서, 어떤 객체의 `value` 속성 유효성을 검증하는 `validate`라는 함수를
가정해봅시다.

```js
function validate(obj, lowval, hival) {
  if (obj.value < lowval || obj.value > hival) console.log("잘못된 값!");
}
```

다음과 같이, 각 양식 요소의 `onchange` 이벤트 처리기에서 `validate`를 호출할 때 `this`를 사용해서 양식 요소의 참조를 제공할 수 있습니다.

```html
<p>18과 99 사이의 수를 입력:</p>
<input type="text" name="age" size="3" onchange="validate(this, 18, 99);" />
```

#### 그룹 연산자

그룹연산자 `()`는 표현식 평가의 우선순위를 조절합니다. 예를 들어, 곱하기와 나누기보다 더하기와 빼기 연산을
먼저 수행할 수 있습니다.

```js-nolint
var a = 1;
var b = 2;
var c = 3;

// 기본 우선순위에서는
a + b * c; // 7
// 이런 순서로 평가함
a + (b * c); // 7

// 우선순위 재정의
// 곱하기보다 더하기를 먼저 수행
(a + b) * c; // 9

// ...하면 아래와 같음
a * c + b * c; // 9
```

### 좌변 표현식

좌변 값은 할당의 목적지입니다.

#### `new`

[`new` 연산자](/ko/docs/Web/JavaScript/Reference/Operators/new)를 사용하면 사용자 정의 객체
타입이나 내장 객체 타입의 인스턴스를 생성할 수 있습니다. 아래 코드처럼 사용하세요.

```js
var objectName = new objectType([param1, param2, ..., paramN]);
```

#### super

[super 키워드](/ko/docs/Web/JavaScript/Reference/Operators/super)는 객체의 부모가 가진 함수를 호출할 때
사용합니다. 예를 하나 들면, [클래스](/ko/docs/Web/JavaScript/Reference/Classes)에서 부모의 생성자를
호출해야 할 때 유용하게 쓸 수 있습니다.

```js
super([arguments]); // 부모 생성자 호출
super.functionOnParent([arguments]);
```

{{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_dates")}}
