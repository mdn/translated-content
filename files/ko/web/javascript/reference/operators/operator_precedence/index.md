---
title: 연산자 우선순위
slug: Web/JavaScript/Reference/Operators/Operator_precedence
---

{{jsSidebar("Operators")}}

**연산자 우선순위**는 연산자를 실행하는 순서를 결정합니다. 우선순위가 높은 연산자가 먼저 실행됩니다.

{{EmbedInteractiveExample("pages/js/expressions-operatorprecedence.html")}}

## 우선순위와 결합성

아래와 같이 표현할 수 있는 표현식을 생각해 봅시다. 연산자1과 연산자2의 자리에는 아무 연산자를 넣을 수 있습니다.

```
a 연산자1 b 연산자2 c
```

두 연산자의 우선순위(아래 표 참조)가 다를 경우, 우선순위가 높은 연산자가 먼저 실행되고 결합성은 영향을 미치지 않습니다. 아래 예제에서는 덧셈이 곱셈보다 먼저 쓰였음에도 곱셈의 우선순위가 높기 때문에 먼저 실행됩니다.

```js
console.log(3 + 10 * 2); // 23을 출력
console.log(3 + 10 * 2); // 23을 출력, 괄호는 불필요함
console.log((3 + 10) * 2); // 26을 출력, 괄호로 인해 실행 순서가 바뀜
```

좌결합성(왼쪽에서 오른쪽으로)은 표현식이 `(a 연산자1 b) 연산자2 c`와 같이, 우결합성(오른쪽에서 왼쪽으로)은 `a 연산자1 (b 연산자2 c)`와 같이 계산된다는 의미입니다. 대입 연산자는 우결합성이므로 다음과 같은 코드를 작성할 수 있습니다.

```js
a = b = 5; // a = (b = 5);와 같음
```

이때 대입 연산자는 대입된 값을 반환하므로 `a`와 `b`의 값이 5가 됨을 예상할 수 있습니다. 우선 `b`의 값이 5로 설정되고, 그 다음에는 `a`의 값이 우변인 `b = 5`의 반환값 5로 설정됩니다.

다른 예시로, 좌결합성인 다른 산술 연산자와 달리 거듭제곱 연산자 (`**`)만은 우결합성입니다. 흥미로운 점으로 표현식의 평가는 결합성과 무관하게 항상 왼쪽에서 오른쪽으로 진행됩니다.

<table class="standard-table">
  <tbody>
    <tr>
      <td>코드</td>
      <td>출력</td>
    </tr>
    <tr>
      <td>
        <pre class="brush: js">
function echo(name, num) {
    console.log(name + " 항 평가함");
    return num;
}
// 나눗셈 연산자 (/)에 주목
console.log(echo("첫째", 6) / echo("둘째", 2));
</pre
        >
      </td>
      <td>
        <pre>
첫째 항 평가함
둘째 항 평가함
3
</pre
        >
      </td>
    </tr>
    <tr>
      <td>
        <pre class="brush: js">
function echo(name, num) {
    console.log(name + " 항 평가함");
    return num;
}
// 거듭제곱 연산자 (**)에 주목
console.log(echo("첫째", 2) ** echo("둘째", 3));</pre
        >
      </td>
      <td>
        <pre>
첫째 항 평가함
둘째 항 평가함
8</pre
        >
      </td>
    </tr>
  </tbody>
</table>

여러 연산자의 우선순위가 같을 때는 결합성을 고려합니다. 위에서와 같이 연산자가 하나이거나 연산자끼리 우선순위가 다를 경우에는 결합성이 결과에 영향을 미치지 않습니다. 아래의 예제에서 같은 종류의 연산자를 여러 번 사용했을 때 결합성이 결과에 영향을 미치는 것을 확인할 수 있습니다.

<table class="standard-table">
  <tbody>
    <tr>
      <td>코드</td>
      <td>출력</td>
    </tr>
    <tr>
      <td>
        <pre class="brush: js">
function echo(name, num) {
    console.log(name + " 항 평가함");
    return num;
}
// 나눗셈 연산자 (/)에 주목
console.log(echo("첫째", 6) / echo("둘째", 2) / echo("셋째", 3));
</pre
        >
      </td>
      <td>
        <pre>
첫째 항 평가함
둘째 항 평가함
셋째 항 평가함
1
</pre
        >
      </td>
    </tr>
    <tr>
      <td>
        <pre class="brush: js">
function echo(name, num) {
    console.log(name + " 항 평가함");
    return num;
}
// 거듭제곱 연산자 (**)에 주목
console.log(echo("첫째", 2) ** echo("둘째", 3) ** echo("셋째", 2));
</pre
        >
      </td>
      <td>
        <pre>
첫째 항 평가함
둘째 항 평가함
셋째 항 평가함
512
</pre
        >
      </td>
    </tr>
    <tr>
      <td>
        <pre class="brush: js">
function echo(name, num) {
    console.log(name + " 항 평가함");
    return num;
}
// 첫 번째 거듭제곱 연산자 주변의 괄호에 주목
console.log((echo("첫째", 2) ** echo("둘째", 3)) ** echo("셋째", 2));</pre
        >
      </td>
      <td>
        <pre>
첫째 항 평가함
둘째 항 평가함
셋째 항 평가함
64</pre
        >
      </td>
    </tr>
  </tbody>
</table>

위의 예제에서 나눗셈은 좌결합성이므로 `6 / 3 / 2`는 `(6 / 3) / 2`와 같습니다. 한편 거듭제곱은 우결합성이므로 `2 ** 3 ** 2`는 `2 ** (3 ** 2)`와 같습니다. 그러므로 `(2 ** 3) ** 2`는 괄호로 인해 실행 순서가 바뀌기 때문에 위 표와 같이 64로 평가됩니다.

우선순위는 결합성보다 항상 우선하므로, 거듭제곱과 나눗셈을 같이 사용하면 나눗셈보다 거듭제곱이 먼저 계산됩니다. 예를 들어 `2 ** 3 / 3 ** 2`는 `(2 ** 3) / (3 ** 2)`와 같으므로 0.8888888888888888로 계산됩니다.

## 예제

```js
3 > 2 && 2 > 1;
// true를 반환

3 > 2 > 1;
// 3 > 2는 true인데, 부등호 연산자에서 true는 1로 변환되므로
// true > 1은 1 > 1이 되고, 이는 거짓이다.
// 괄호를 추가하면 (3 > 2) > 1과 같다.
```

## 그룹화와 단락에 대한 참고사항

아래 표에서 그룹화는 우선 순위가 가장 높은 것으로 나열됩니다. 그러나 이것이 항상 그룹화 기호`( … )` 내의 표현식이, 특히 단락과 관련하여 먼저 평가된다는 것을 의미하지는 않습니다.

단락은 조건부 평가의 전문 용어입니다. 예를 들어 표현식 `a &&(b + c)`에서 `a`가 {{Glossary("falsy")}}이면 하위 표현식`(b + c)`은 괄호 안에 있어도 평가되지 않습니다. 논리 분리 연산자("OR")가 "단락"되었다고 말할 수 있습니다. 논리적 분리와 함께 다른 단락 연산자에는 논리적 연결("AND"), nullish-coalescing, 선택적 연결 및 조건부 연산자가 포함됩니다. 몇 가지 예가 더 있습니다.

```js
a || b * c; // `a`를 먼저 평가하고, `a`가 "truthy"라면  `a`를 생성합니다.
a && b < c; // `a`를 먼저 평가하고, `a`가 "falsy"라면  `a`를 생성합니다.
a ?? (b || c); // `a`를 먼저 평가하고, `a`가 `null`과 `undefined`가 아니라면 `a`를 생성합니다.
a?.b.c; // `a`를 먼저 평가하고, `a`가 `null`또는 `undefined`라면 `undefined`를 생성합니다.
```

## 표

다음 표는 우선순위 내림차순(19부터 1까지)으로 정렬되어 있습니다.

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>우선순위</th>
      <th>연산자 유형</th>
      <th>결합성</th>
      <th>연산자</th>
    </tr>
    <tr>
      <td>19</td>
      <td>{{jsxref("Operators/Grouping", "그룹", "", 1)}}</td>
      <td>없음</td>
      <td><code>( … )</code></td>
    </tr>
    <tr>
      <td rowspan="5">18</td>
      <td>
        {{jsxref("Operators/Property_Accessors", "멤버 접근", "#점_표기법", 1)}}
      </td>
      <td>좌결합성</td>
      <td><code>… . …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Property_Accessors", "계산된 멤버 접근","#괄호_표기법", "1")}}
      </td>
      <td>좌결합성</td>
      <td><code>… [ … ]</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/new","new")}} (인자 리스트 제공)
      </td>
      <td>없음</td>
      <td><code>new … ( … )</code></td>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Guide/Functions">함수 호출</a>
      </td>
      <td>좌결합성</td>
      <td>
        <code>… ( <var>… </var>)</code>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining"
          >옵셔널 체이닝</a
        >
      </td>
      <td>좌결합성</td>
      <td><code>?.</code></td>
    </tr>
    <tr>
      <td>17</td>
      <td>
        {{jsxref("Operators/new","new")}} (인자 리스트 생략)
      </td>
      <td>우결합성</td>
      <td><code>new …</code></td>
    </tr>
    <tr>
      <td rowspan="2">16</td>
      <td>
        <a
          href="/ko/docs/Web/JavaScript/Reference/Operators/Increment"
          >후위 증가</a
        >
      </td>
      <td rowspan="2">없음</td>
      <td><code>… ++</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/ko/docs/Web/JavaScript/Reference/Operators/Decrement"
          >후위 감소</a
        >
      </td>
      <td><code>… --</code></td>
    </tr>
    <tr>
      <td rowspan="10">15</td>
      <td>
        <a
          href="/ko/docs/Web/JavaScript/Reference/Operators/Logical_NOT"
          >논리 NOT</a
        >
      </td>
      <td rowspan="10">우결합성</td>
      <td><code>! …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT"
          >비트 NOT</a
        >
      </td>
      <td><code>~ …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/ko/docs/Web/JavaScript/Reference/Operators/Unary_plus"
          >단항 양부호</a
        >
      </td>
      <td><code>+ …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/ko/docs/Web/JavaScript/Reference/Operators/Unary_negation"
          >단항 부정</a
        >
      </td>
      <td><code>- …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/ko/docs/Web/JavaScript/Reference/Operators/Increment"
          >전위 증가</a
        >
      </td>
      <td><code>++ …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/ko/docs/Web/JavaScript/Reference/Operators/Decrement"
          >전위 감소</a
        >
      </td>
      <td><code>-- …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/typeof", "typeof")}}</td>
      <td><code>typeof …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/void", "void")}}</td>
      <td><code>void …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/delete", "delete")}}</td>
      <td><code>delete …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/await", "await")}}</td>
      <td><code>await …</code></td>
    </tr>
    <tr>
      <td>14</td>
      <td>
        <a
          href="/ko/docs/Web/JavaScript/Reference/Operators/Exponentiation"
          >거듭제곱</a
        >
      </td>
      <td>우결합성</td>
      <td><code>… ** …</code></td>
    </tr>
    <tr>
      <td rowspan="3">13</td>
      <td>
        <a
          href="/ko/docs/Web/JavaScript/Reference/Operators/Multiplication"
          >곱하기</a
        >
      </td>
      <td colspan="1" rowspan="3">좌결합성</td>
      <td><code>… * …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/ko/docs/Web/JavaScript/Reference/Operators/Division"
          >나누기</a
        >
      </td>
      <td><code>… / …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/ko/docs/Web/JavaScript/Reference/Operators/Remainder"
          >나머지</a
        >
      </td>
      <td><code>… % …</code></td>
    </tr>
    <tr>
      <td rowspan="2">12</td>
      <td>
        <a
          href="/ko/docs/Web/JavaScript/Reference/Operators/Addition"
          >더하기</a
        >
      </td>
      <td rowspan="2">좌결합성</td>
      <td><code>… + …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/ko/docs/Web/JavaScript/Reference/Operators/Subtraction"
          >빼기</a
        >
      </td>
      <td><code>… - …</code></td>
    </tr>
    <tr>
      <td rowspan="3">11</td>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Left_shift"
          >비트 왼쪽 시프트</a
        >
      </td>
      <td rowspan="3">좌결합성</td>
      <td><code>… &#x3C;&#x3C; …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Right_shift"
          >비트 오른쪽 시프트</a
        >
      </td>
      <td><code>… >> …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift"
          >비트 부호 없는 오른쪽 시프트</a
        >
      </td>
      <td><code>… >>> …</code></td>
    </tr>
    <tr>
      <td rowspan="6">10</td>
      <td>
        <a
          href="/ko/docs/Web/JavaScript/Reference/Operators/Less_than"
          >미만</a
        >
      </td>
      <td rowspan="6">좌결합성</td>
      <td><code>… &#x3C; …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/ko/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal"
          >이하</a
        >
      </td>
      <td><code>… &#x3C;= …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/ko/docs/Web/JavaScript/Reference/Operators/Greater_than"
          >초과</a
        >
      </td>
      <td><code>… > …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/ko/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal"
          >이상</a
        >
      </td>
      <td><code>… >= …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/in", "in")}}</td>
      <td><code>… in …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/instanceof", "instanceof")}}</td>
      <td><code>… instanceof …</code></td>
    </tr>
    <tr>
      <td rowspan="4">9</td>
      <td>
        <a
          href="/ko/docs/Web/JavaScript/Reference/Operators/Equality"
          >동등</a
        >
      </td>
      <td rowspan="4">좌결합성</td>
      <td><code>… == …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/ko/docs/Web/JavaScript/Reference/Operators/Inequality"
          >부등</a
        >
      </td>
      <td><code>… != …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/ko/docs/Web/JavaScript/Reference/Operators/Strict_equality"
          >일치</a
        >
      </td>
      <td><code>… === …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/ko/docs/Web/JavaScript/Reference/Operators/Strict_inequality"
          >불일치</a
        >
      </td>
      <td><code>… !== …</code></td>
    </tr>
    <tr>
      <td>7</td>
      <td>
        <a
          href="/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_AND"
          >비트 AND</a
        >
      </td>
      <td>좌결합성</td>
      <td><code>… &#x26; …</code></td>
    </tr>
    <tr>
      <td>7</td>
      <td>
        <a
          href="/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR"
          >비트 XOR</a
        >
      </td>
      <td>좌결합성</td>
      <td><code>… ^ …</code></td>
    </tr>
    <tr>
      <td>6</td>
      <td>
        <a
          href="/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_OR"
          >비트 OR</a
        >
      </td>
      <td>좌결합성</td>
      <td><code>… | …</code></td>
    </tr>
    <tr>
      <td>5</td>
      <td>
        <a
          href="/ko/docs/Web/JavaScript/Reference/Operators/Logical_AND"
          >논리 AND</a
        >
      </td>
      <td>좌결합성</td>
      <td><code>… &#x26;&#x26; …</code></td>
    </tr>
    <tr>
      <td rowspan="2">4</td>
      <td>
        <a
          href="/ko/docs/Web/JavaScript/Reference/Operators/Logical_OR"
          >논리 OR</a
        >
      </td>
      <td>좌결합성</td>
      <td><code>… || …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator"
          >널 병합 연산자</a
        >
      </td>
      <td>좌결합성</td>
      <td><code>… ?? …</code></td>
    </tr>
    <tr>
      <td>3</td>
      <td>
        <a
          href="/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator"
          >조건 (삼항)</a
        >
      </td>
      <td>우결합성</td>
      <td><code>… ? … : …</code></td>
    </tr>
    <tr>
      <td rowspan="18">2</td>
      <td rowspan="16">
        <a
          href="/ko/docs/Web/JavaScript/Reference/Operators/Assignment_Operators"
          >할당</a
        >
      </td>
      <td rowspan="16">우결합성</td>
      <td><code>… = …</code></td>
    </tr>
    <tr>
      <td><code>… += …</code></td>
    </tr>
    <tr>
      <td><code>… -= …</code></td>
    </tr>
    <tr>
      <td><code>… **= …</code></td>
    </tr>
    <tr>
      <td><code>… *= …</code></td>
    </tr>
    <tr>
      <td><code>… /= …</code></td>
    </tr>
    <tr>
      <td><code>… %= …</code></td>
    </tr>
    <tr>
      <td><code>… &#x3C;&#x3C;= …</code></td>
    </tr>
    <tr>
      <td><code>… >>= …</code></td>
    </tr>
    <tr>
      <td><code>… >>>= …</code></td>
    </tr>
    <tr>
      <td><code>… &#x26;= …</code></td>
    </tr>
    <tr>
      <td><code>… ^= …</code></td>
    </tr>
    <tr>
      <td><code>… |= …</code></td>
    </tr>
    <tr>
      <td><code>… &#x26;&#x26;= …</code></td>
    </tr>
    <tr>
      <td><code>… ||= …</code></td>
    </tr>
    <tr>
      <td><code>… ??= …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/yield", "yield")}}</td>
      <td rowspan="2">우결합성</td>
      <td><code>yield …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/yield*", "yield*")}}</td>
      <td><code>yield* …</code></td>
    </tr>
    <tr>
      <td>1</td>
      <td>
        <a href="/ko/docs/Web/JavaScript/Reference/Operators/Comma_Operator"
          >쉼표 / 시퀀스</a
        >
      </td>
      <td>좌결합성</td>
      <td><code>… , …</code></td>
    </tr>
  </tbody>
</table>
