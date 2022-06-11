---
title: 정규 표현식
slug: Web/JavaScript/Guide/Regular_Expressions
tags:
  - Guide
  - Intermediate
  - JavaScript
  - Reference
  - RegExp
  - Regular Expressions
  - 정규식
translation_of: Web/JavaScript/Guide/Regular_Expressions
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Text_formatting", "Web/JavaScript/Guide/Indexed_collections")}}

정규 표현식, 또는 정규식은 문자열에서 특정 문자 조합을 찾기 위한 패턴입니다. JavaScript에서는 정규 표현식도 객체로서, {{jsxref("RegExp")}}의 {{jsxref("RegExp.exec", "exec()")}}와 {{jsxref("RegExp.test", "test()")}} 메서드를 사용할 수 있습니다. {{jsxref("String")}}의 {{jsxref("String.match", "match()")}}, {{jsxref("String.matchAll", "matchAll()")}}, {{jsxref("String.replace", "replace()")}}, {{jsxref("String.replaceAll", "replaceAll()")}}, {{jsxref("String.search", "search()")}}, {{jsxref("String.split", "split()")}} 메서드와도 함께 사용할 수 있습니다. 이 장에서는 JavaScript의 정규 표현식을 설명합니다.

## 정규 표현식 만들기

정규 표현식은 두 가지 방법으로 만들 수 있습니다.

- 정규 표현식 리터럴. 다음과 같이 슬래시로 패턴을 감싸서 작성합니다.

  ```js
  const re = /ab+c/
  ```

  정규 표현식 리터럴은 스크립트를 불러올 때 컴파일되므로, 바뀔 일이 없는 패턴의 경우 리터럴을 사용하면 성능이 향상될 수 있습니다.

- {{jsxref("RegExp")}} 객체의 생성자 호출.

  ```js
  const re = new RegExp('ab+c')
  ```

  생성자 함수를 사용하면 정규 표현식이 런타임에 컴파일됩니다. 바뀔 수 있는 패턴이나, 사용자 입력 등 외부 출처에서 가져오는 패턴의 경우 이렇게 사용하세요.

## 정규 표현식 패턴 작성하기

정규 표현식 패턴은 `/abc/`처럼 단순한 문자로 구성하거나, `/ab+c/`와 `/Chapter (\d+)\.\d*/`처럼 단순한 문자와 특수 문자의 조합으로 구성할 수도 있습니다. 특히 `(\d+)`에 나타난 괄호는 정규 표현식에서 기억 장치처럼 쓰여서, 괄호의 안쪽 패턴과 일치한 부분을 나중에 사용할 수 있도록 기억합니다. [그룹 사용하기](/ko/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges#using_groups)에서 더 알아보세요.

### 단순 패턴 사용하기

단순 패턴은 문자열을 있는 그대로 탐색할 때 사용합니다. 예를 들어, `/abc/` 패턴은 문자열에서 정확한 순서로 `"abc"`라는 문자의 조합이 나타나는 부분과 일치합니다. 그러므로 이 패턴은 `"Hi, do you know your abc's?"`와 `"The latest airplane designs evolved from slabcraft."` 두 문자열에서 일치에 성공하고, 일치하는 부분은 `"abc"`일 것입니다. 반면 `"Grab crab"`에서는 일치하지 않는데, 이 문자열은 부분 문자열로 `"ab c"`를 포함하긴 하지만, 정확하게 `"abc"`를 포함하지는 않기 때문입니다.

### 특수 문자 사용하기

하나 이상의 "b"를 찾는다거나 공백 문자를 찾는 등 직접적인 일치 이상의 탐색이 필요할 땐 특수 문자를 사용합니다. 예컨대 "하나의 `"a"` 이후에 0개 이상의 `"b"`, 그 뒤의 `"c"`"와 일치해야 하면 `/ab*c/` 패턴을 사용할 수 있습니다. `"b"` 뒤의 `*`는 "이전 항목의 0번 이상 반복"을 의미합니다. 이 패턴을 문자열 `"cbbabbbbcdebc"`에 대해 사용하면, 일치하는 부분 문자열은 `"abbbbc"`일 것입니다.

아래의 문서들에선 각각의 범주에 속하는 다양한 특수 문자의 목록과 설명, 예제를 찾아볼 수 있습니다.

- [어서션](/ko/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions)
  - : 어서션에는 줄이나 단어의 시작과 끝을 나타내는 경계와, 일치가 가능한 방법을 나타내는 패턴(전방탐색, 후방탐색, 조건 표현식 등)이 포함됩니다.
- [문자 클래스](/ko/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)
  - : 글자와 숫자처럼 다른 유형의 문자를 구분합니다.
- [그룹과 범위](/ko/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges)
  - : 표현 문자의 그룹과 범위를 나타냅니다.
- [수량자](/ko/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)
  - : 일치할 문자나 표현이 반복되어야 할 횟수를 나타냅니다.
- [유니코드 속성 이스케이프](/ko/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes)
  - : 대/소문자, 수학 기호, 문장 부호처럼, 유니코드 문자 속성에 따라 문자를 구분합니다.

아래 표는 정규 표현식에서 사용하는 모든 특수문자의 목록입니다.

<table class="standard-table">
  <caption>
    정규 표현식 특수문자
  </caption>
  <thead>
    <tr>
      <th scope="col">문자 / 조합</th>
      <th scope="col">문서</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>\</code>, <code>.</code>, <code>\cX</code>, <code>\d</code>,
        <code>\D</code>, <code>\f</code>, <code>\n</code>, <code>\r</code>,
        <code>\s</code>, <code>\S</code>, <code>\t</code>, <code>\v</code>,
        <code>\w</code>, <code>\W</code>, <code>\0</code>, <code>\xhh</code>,
        <code>\uhhhh</code>, <code>\uhhhhh</code>, <code>[\b]</code>
      </td>
      <td>
        <p>
          <a
            href="/ko/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes"
            >문자 클래스</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>^</code>, <code>$</code>, <code>x(?=y)</code>,
        <code>x(?!y)</code>, <code>(?&#x3C;=y)x</code>,
        <code>(?&#x3C;!y)x</code>, <code>\b</code>, <code>\B</code>
      </td>
      <td>
        <p>
          <a
            href="/ko/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions"
            >어서션</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>(x)</code>, <code>(?:x)</code>, <code>(?&#x3C;Name>x)</code>,
        <code>x|y</code>, <code>[xyz]</code>, <code>[^xyz]</code>,
        <code>\<em>Number</em></code>
      </td>
      <td>
        <p>
          <a
            href="/ko/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges"
            >그룹과 범위</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>*</code>, <code>+</code>, <code>?</code>,
        <code>x{<em>n</em>}</code>, <code>x{<em>n</em>,}</code>,
        <code>x{<em>n</em>,<em>m</em>}</code>
      </td>
      <td>
        <p>
          <a
            href="/ko/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers"
            >수량자</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>\p{<em>UnicodeProperty</em>}</code>,
        <code>\P{<em>UnicodeProperty</em>}</code>
      </td>
      <td>
        <a
          href="/ko/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes"
          >유니코드 속성 이스케이프</a
        >
      </td>
    </tr>
  </tbody>
</table>

> **참고:** 위 문서의 일부만 발췌해 정리해놓은, [더 큰 치트 시트도 있습니다](/ko/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet).

### 이스케이핑

특수 문자를 있는 그대로 탐색(`"*"`을 직접 찾는 등)해야 하는 경우, 특수 문자 앞에 역슬래시(\\)를 배치해서 이스케이프 해야 합니다. 예를 들어 `"a"` 뒤의 별표(`"*"`) 뒤의 `"b"`와 일치해야 하면 `/a\*b/`를 사용하면 됩니다. 역슬래시가 `"*"`를 "이스케이프"해서, 특수 문자가 아닌 문자 리터럴로 취급합니다.

마찬가지로, 슬래시(/)와 일치해야 하는 경우에도 이스케이프를 해야 합니다. 그냥 빗금을 사용하면 패턴이 끝나버립니다. 예를 들어 문자열 "/example/"과 그 뒤 하나 이상의 알파벳을 찾으려면 `/\/example\/[a-z]/`를 사용할 수 있습니다. 각각의 슬래시 앞에 놓인 역슬래시가 슬래시를 이스케이프합니다.

리터럴 역슬래시에 일치하려면 역슬래시를 이스케이프합니다. "A:\\", "B:\\", "C:\\", ..., "Z:\\"와 일치하는 패턴은 `/[A-Z]:\\/`입니다. 앞의 역슬래시가 뒤의 역슬래시를 이스케이프해서, 결과적으로 하나의 리터럴 역슬래시와 일치하게 됩니다.

`RegExp` 생성자와 문자열 리터럴을 사용하는 경우, 역슬래시가 문자열 리터럴의 이스케이프로도 작동한다는 것을 기억해야 합니다. 그러므로 정규 표현식의 역슬래시를 나타내려면 문자열 리터럴 수준의 이스케이프도 해줘야 합니다. 즉, 앞서 살펴본 `/a\*b/` 패턴을 생성하려면 `new RegExp("a\\*b")`가 되어야 합니다.

이스케이프 되지 않은 문자열을 이미 가지고 있을 땐 {{jsxref("String.replace")}}를 활용해 이스케이프를 해줄 수 있습니다.

```js
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $&은 일치한 문자열 전체를 의미
}
```

정규 표현식 뒤의 "g"는 전체 문자열을 탐색해서 모든 일치를 반환하도록 지정하는 전역 탐색 플래그입니다. 플래그에 대해서는 아래의 [플래그를 활용한 고급 탐색](#플래그를_활용한_고급_탐색)에서 확인할 수 있습니다.

"왜 `escapeRegExp()`가 JavaScript의 일부가 아닌가요?" 관련 제안은 있었으나 [TC39가 거부했습니다](https://github.com/benjamingr/RegExp.escape/issues/37).

### 괄호 사용하기

정규 표현식의 아무 부분이나 괄호로 감싸게 되면, 그 부분과 일치하는 부분 문자열을 기억하게 됩니다. 기억한 부분 문자열은 불러와서 다시 사용할 수 있습니다. [그룹과 범위](/ko/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges#그룹_사용하기) 문서에서 자세히 알아보세요.

## JavaScript에서 정규 표현식 사용하기

정규 표현식은 {{jsxref("RegExp")}}의 메서드 {{jsxref("RegExp/test", "test()")}}와 {{jsxref("RegExp/exec", "exec()")}}, {{jsxref("String")}}의 메서드 {{jsxref("String/match", "match()")}}, {{jsxref("String/replace", "replace()")}}, {{jsxref("String/search", "search()")}}, {{jsxref("String/split", "split()")}}에서 사용할 수 있습니다.

| 메서드                                          | 설명                                                                                                         |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| {{jsxref("RegExp.exec", "exec()")}}             | 문자열에서 일치하는 부분을 탐색합니다. 일치 정보를 나타내는 배열, 또는 일치가 없는 경우 `null`을 반환합니다. |
| {{jsxref("RegExp.test", "test()")}}             | 문자열에 일치하는 부분이 있는지 확인합니다. `true` 또는 `false`를 반환합니다.                                |
| {{jsxref("String.match", "match()")}}           | 캡처 그룹을 포함해서 모든 일치를 담은 배열을 반환합니다. 일치가 없으면 `null`을 반환합니다.                  |
| {{jsxref("String.matchAll", "matchAll()")}}     | 캡처 그룹을 포함해서 모든 일치를 담은 반복기를 반환합니다.                                                   |
| {{jsxref("String.search", "search()")}}         | 문자열에서 일치하는 부분을 탐색합니다. 일치하는 부분의 인덱스, 또는 일치가 없는 경우 `-1`을 반환합니다.      |
| {{jsxref("String.replace", "replace()")}}       | 문자열에서 일치하는 부분을 탐색하고, 그 부분을 대체 문자열로 바꿉니다.                                       |
| {{jsxref("String.replaceAll", "replaceAll()")}} | 문자열에서 일치하는 부분을 모두 탐색하고, 모두 대체 문자열로 바꿉니다.                                       |
| {{jsxref("String.split", "split()")}}           | 정규 표현식 또는 문자열 리터럴을 사용해서 문자열을 부분 문자열의 배열로 나눕니다.                            |

문자열 내부에 패턴과 일치하는 부분이 존재하는지만 알아내려면 `test()`나 `search()` 메서드를 사용하세요. 더 느리더라도 일치에 관한 추가 정보가 필요하면 `exec()`과 `match()` 메서드를 사용하세요. 일치하는 부분이 존재하면, `exec()`과 `match()`는 일치에 관한 데이터를 포함한 배열을 반환하고, 일치에 사용한 정규 표현식 객체의 속성을 업데이트합니다. 일치하지 못한 경우 `null`을 반환합니다. (`null`은 조건 평가 시 `false`와 같습니다)

아래의 예제에서는, 문자열에서 일치하는 부분을 찾기 위해 `exec()` 메서드를 사용합니다.

```js
const myRe = /d(b+)d/g;
const myArray = myRe.exec('cdbbdbsbz');
```

만약 정규 표현식 객체의 속성에 접근할 필요가 없으면 아래와 같이 짧게 쓸 수도 있습니다.

```js
const myArray = /d(b+)d/g.exec('cdbbdbsbz');
// 'cdbbdbsbz'.match(/d(b+)d/g); 와 비슷하지만,
// 'cdbbdbsbz'.match(/d(b+)d/g)의 반환 값은 [ 'dbbd' ]인 반면
// /d(b+)d/g.exec('cdbbdbsbz')의 반환 값은 [ 'dbbd', 'bb', index: 1, input: 'cdbbdbsbz' ]
```

(아래의 [`exec()`과 전역 탐색 플래그 사용하기](#exec과_전역_탐색_플래그_사용하기)에서 동작 방식의 차이에 대해 더 알아보세요)

정규 표현식을 문자열에서 만들고 싶으면 아래처럼 사용할 수도 있습니다.

```js
const myRe = new RegExp('d(b+)d', 'g');
const myArray = myRe.exec('cdbbdbsbz');
```

아래의 표는 위 스크립트에서 일치를 성공한 후, 반환하는 배열과 업데이트되는 정규 표현식 객체의 속성입니다.

<table class="standard-table">
  <caption>
    정규 표현식 실행 결과
  </caption>
  <thead>
    <tr>
      <th scope="col">객체</th>
      <th scope="col">속성 또는 인덱스</th>
      <th scope="col">설명</th>
      <th scope="col">위 예제에서의 값</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="4"><code>myArray</code></td>
      <td></td>
      <td>일치한 문자열 및 기억한 모든 부분 문자열.</td>
      <td><code>['dbbd', 'bb', index: 1, input: 'cdbbdbsbz']</code></td>
    </tr>
    <tr>
      <td><code>index</code></td>
      <td>일치한 부분이 주어진 문자열에서 위치한 인덱스. (0부터 시작)</td>
      <td><code>1</code></td>
    </tr>
    <tr>
      <td><code>input</code></td>
      <td>주어진 원본 문자열.</td>
      <td><code>'cdbbdbsbz'</code></td>
    </tr>
    <tr>
      <td><code>[0]</code></td>
      <td>마지막으로 일치한 부분 문자열.</td>
      <td><code>'dbbd'</code></td>
    </tr>
    <tr>
      <td rowspan="2"><code>myRe</code></td>
      <td><code>lastIndex</code></td>
      <td>
        다음 일치를 시작할 인덱스. (g 옵션을 지정한 정규 표현식의 경우에만 설정됩니다.
        <a href="#플래그를_활용한_고급_탐색">플래그를 활용한 고급 탐색</a>을 참고하세요)
      </td>
      <td><code>5</code></td>
    </tr>
    <tr>
      <td><code>source</code></td>
      <td>
        패턴의 텍스트. 정규 표현식이 생성될 때 갱신됩니다. 실행 시점에는 갱신되지 않습니다.
      </td>
      <td><code>'d(b+)d'</code></td>
    </tr>
  </tbody>
</table>

위 예제의 두 번째 형태처럼, 정규 표현식 객체를 변수에 대입하지 않고도 사용할 수 있습니다. 하지만, 이러면 매 사용마다 정규 표현식 객체가 새로 생성되며, 업데이트되는 속성에 접근할 수 없습니다. 다음과 같은 코드를 생각해보겠습니다.

```js
const myRe = /d(b+)d/g;
const myArray = myRe.exec('cdbbdbsbz');
console.log(`lastIndex의 값은 ${myRe.lastIndex}`);

// "lastIndex의 값은 5"
```

그러나 위의 코드 대신 아래 코드를 사용하게 되면...

```js
const myArray = /d(b+)d/g.exec('cdbbdbsbz');
console.log(`lastIndex의 값은 ${/d(b+)d/g.lastIndex}`);

// "lastIndex의 값은 0"
```

두 개의 `/d(b+)d/g` 는 서로 다른 정규 표현식 객체이므로 별개의 `lastIndex` 속성을 갖습니다. 정규 표현식 객체의 속성에 접근해야 하면, 우선 변수에 할당하세요.

### 플래그를 활용한 고급 탐색

정규 표현식은 전역 탐색이나 대소문자 무시와 같은 특성을 지정하는 플래그를 가질 수 있습니다. 플래그는 단독으로 사용할 수도 있고, 순서에 상관 없이 한꺼번에 여럿을 지정할 수도 있습니다.

| 플래그 | 설명                                                                                                        | 대응하는 속성                             |
| ------ | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| `d`    | 부분 문자열 일치에 대해 인덱스 생성.                                                                        | {{jsxref("RegExp.prototype.hasIndices")}} |
| `g`    | 전역 탐색.                                                                                                  | {{jsxref("RegExp.prototype.global")}}     |
| `i`    | 대소문자를 구분하지 않음.                                                                                   | {{jsxref("RegExp.prototype.ignoreCase")}} |
| `m`    | 여러 줄에 걸쳐 탐색.                                                                                        | {{jsxref("RegExp.prototype.multiline")}}  |
| `s`    | 개행 문자가 `.`과 일치함.                                                                                   | {{jsxref("RegExp.prototype.dotAll")}}     |
| `u`    | "unicode", 패턴을 유니코드 코드 포인트의 시퀀스로 간주함.                                                   | {{jsxref("RegExp.prototype.unicode")}}    |
| `y`    | "접착" 탐색, 대상 문자열의 현재 위치에서 탐색을 시작함. {{jsxref("RegExp.sticky", "sticky")}}를 참고하세요. | {{jsxref("RegExp.prototype.sticky")}}     |

플래그는 다음과 같은 구문으로 정규 표현식에 지정할 수 있습니다.

```js
const re = /pattern/flags;
```

생성자를 사용할 경우 이렇게 지정합니다.

```js
const re = new RegExp('pattern', 'flags');
```

플래그는 정규식과 완전히 합쳐지므로 나중에 추가하거나 제거할 수 없습니다.

예를 들어, `re = /\w+\s/g`는 한 개 이상의 글자와 그 뒤의 공백 하나를, 문자열 전체에 대해 탐색합니다.

```js
const re = /\w+\s/g;
const str = 'fee fi fo fum';
const myArray = str.match(re);
console.log(myArray);

// ["fee ", "fi ", "fo "]
```

아래 코드는...

```js
const re = /\w+\s/g;
```

이렇게 생성자를 사용하도록 바꿀 수도 있습니다.

```js
const re = new RegExp('\\w+\\s', 'g');
```

두 구문 모두 동일한 결과를 낳습니다.

`m` 플래그는 여러 줄에 걸친 입력 문자열을 여러 줄로 취급하게 합니다. 달리 말해, `m` 플래그를 지정할 경우, `^`와 `$`는 각각 전체 입력 문자열의 시작과 끝이 아니라, 각 줄의 시작과 끝에 대응하게 됩니다.

#### exec()과 전역 탐색 플래그 사용하기

{{jsxref("RegExp.prototype.exec()")}} 메서드와 `g` 플래그를 사용하면, 일치한 부분 문자열들과 각각의 인덱스를 하나씩 순차적으로 반환합니다.

```js
const str = 'fee fi fo fum'
const re = /\w+\s/g

console.log(re.exec(str)) // ["fee ", index: 0, input: "fee fi fo fum"]
console.log(re.exec(str)) // ["fi ", index: 4, input: "fee fi fo fum"]
console.log(re.exec(str)) // ["fo ", index: 7, input: "fee fi fo fum"]
console.log(re.exec(str)) // null
```

반면, {{jsxref("String.prototype.match()")}} 메서드는 모든 일치를 한 번에 반환하지만, 각각의 인덱스는 포함하지 않습니다.

```js
console.log(str.match(re)) // ["fee ", "fi ", "fo "]
```

## 예제

> **참고:** 다음 문서에서도 정규 표현식의 사용 예제를 볼 수 있습니다.
>
> - {{jsxref("RegExp.exec", "exec()")}}, {{jsxref("RegExp.test", "test()")}}, {{jsxref("String.match", "match()")}}, {{jsxref("String.matchAll", "matchAll()")}}, {{jsxref("String.search", "search()")}}, {{jsxref("String.replace", "replace()")}}, {{jsxref("String.split", "split()")}} 메서드 참조
> - 이 안내서의 하위 문서: [문자 클래스](/ko/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes), [어서션](/ko/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions), [그룹과 범위](/ko/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges), [수량자](/ko/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers), [유니코드 속성 이스케이프](/ko/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes)

### 정규 표현식 특수 문자를 사용한 입력 값 검증

아래 예제에서는 사용자가 전화번호를 입력해야 합니다. 사용자가 "확인" 버튼을 누르면 입력한 값을 스크립트로 검증합니다. 값이 유효하면, 즉 정규 표현식과 일치하는 문자의 시퀀스를 받았으면, 스크립트는 감사 메시지를 출력합니다. 값이 유효하지 않으면, 사용자에게 올바르지 않은 값임을 알려줍니다.

정규 표현식의 구조는 다음과 같습니다.

1. 데이터의 시작점(`^`)
2. 비캡처 그룹(`(?:)`)으로, 1의 뒤를 잇는 세 개의 숫자(`\d{3}`), 또는(`|`), 여는 괄호(`\(`)의 뒤를 잇는 세 개의 숫자(`\d{3}`)의 뒤를 잇는 닫는 괄호(`\)`)
3. 캡처 그룹(`()`)으로, 2의 뒤를 잇는 하나의 대시, 슬래시, 또는 마침표
4. 3의 뒤를 잇는 네 개의 숫자(`\d{4}`)
5. 4의 뒤를 잇는, 첫 번째 캡처 그룹에서 기억한 부분 문자열(`\1`)
6. 5의 뒤를 잇는 네 개의 숫자(`\d{4}`)
7. 데이터의 끝점(`$`)

#### HTML

```html
<p>
  전화번호를 입력 후 "확인" 버튼을 누르세요.
  <br />
  ###-####-####의 형식으로 입력하세요.
</p>
<form id="form">
  <input id="phone" />
  <button type="submit">확인</button>
</form>
<p id="output"></p>
```

#### JavaScript

```js
const form = document.querySelector('#form')
const input = document.querySelector('#phone')
const output = document.querySelector('#output')

const re = /^(?:\d{3}|\(\d{3}\))([-\/\.])\d{4}\1\d{4}$/

function testInfo(phoneInput) {
  const ok = re.exec(phoneInput.value)

  if (!ok) {
    output.textContent = `형식에 맞지 않는 전화번호입니다. (${phoneInput.value})`
  } else {
    output.textContent = `감사합니다. 전화번호는 ${ok[0]} 입니다.`
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  testInfo(input)
})
```

#### 결과

{{EmbedLiveSample('정규_표현식_특수_문자를_사용한_입력_값_검증')}}

## 도구

- [RegExr](https://regexr.com/)
  - : 정규 표현식을 배우고, 만들고, 시험할 수 있는 온라인 도구입니다.
- [Regex tester](https://regex101.com/)
  - : 정규 표현식 생성기/디버거입니다.
- [Regex visualizer](https://extendsclass.com/regex-tester.html)
  - : 시각적 정규 표현식 테스터입니다.

{{PreviousNext("Web/JavaScript/Guide/Text_formatting", "Web/JavaScript/Guide/Indexed_collections")}}
