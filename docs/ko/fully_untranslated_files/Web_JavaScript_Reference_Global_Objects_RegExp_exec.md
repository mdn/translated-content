---
title: RegExp.prototype.exec()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/exec
---

{{JSRef}}

**`exec()`** 메서드는 주어진 문자열에서 일치 탐색을 수행한 결과를 배열 혹은 {{jsxref("null")}}로 반환합니다.

JavaScript {{jsxref("RegExp")}} 객체는 {{jsxref("RegExp.global", "global")}} 또는 {{jsxref("RegExp.sticky", "sticky")}} 플래그를 설정(`/foo/g`, `/foo/y` 등)한 경우 이전 일치의 인덱스를 저장하므로 **상태를 가지고**(stateful) 있습니다. 이를 내부적으로 사용하여, {{jsxref("String.prototype.match()")}}와는 다르게 (캡처 그룹을 포함한) 문자열 내의 일치 다수를 반복해 순회할 수 있습니다.

(캡처 그룹을 포함한) 문자열 내의 다수 일치를 수행할 수 있는 보다 간편한 신규 메서드, {{jsxref("String.prototype.matchAll()")}}이 제안된 상태입니다.

단순히 `true`/`false`가 필요한 경우 {{jsxref("RegExp.prototype.test()")}} 메서드 혹은 {{jsxref("String.prototype.search()")}}를 사용하세요.

{{EmbedInteractiveExample("pages/js/regexp-prototype-exec.html")}}

## 구문

```js
regexObj.exec(str);
```

### 매개변수

- `str`
  - : 정규 표현식 검색을 수행할 대상 문자열.

### 반환 값

정규 표현식이 일치하면, `exec()` 메서드는 배열(추가 속성 `index`와 `input` 포함, 아래 설명을 참고하세요)을 반환하고, 정규 표현식 객체의 {{jsxref("RegExp.lastIndex", "lastIndex")}} 속성을 업데이트합니다. 반환하는 배열은 일치한 텍스트를 첫 번째 원소로, 각각의 괄호 캡처 그룹을 이후 원소로 포함합니다.

정규표현식 검색에 실패하면, `exec()` 메서드는 {{jsxref("null")}}을 반환하고 {{jsxref("RegExp.lastIndex", "lastIndex")}}를 `0`으로 설정합니다.

## 설명

다음과 같은 예제를 고려해보세요.

```js
// Match "quick brown" followed by "jumps", ignoring characters in between
// Remember "brown" and "jumps"
// Ignore case
let re = /quick\s(brown).+?(jumps)/gi;
let result = re.exec("The Quick Brown Fox Jumps Over The Lazy Dog");
```

다음의 표는 이 스크립트의 결과에 대해 보여줍니다.

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="row">객체</th>
      <th scope="col">속성/인덱스</th>
      <th scope="col">설명</th>
      <th scope="col">예제</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="1" rowspan="4" scope="row" style="vertical-align: top">
        <code>result</code>
      </th>
      <td><code>[0]</code></td>
      <td>일치한 전체 문자.</td>
      <td><code>"Quick Brown Fox Jumps"</code></td>
    </tr>
    <tr>
      <td><code>[1], ...[<var>n</var>]</code></td>
      <td>
        <p>(존재하는 경우) 괄호로 감싼 부분문자열.</p>
        <p>괄호로 감싼 부분문자열 숫자의 제한은 없습니다.</p>
      </td>
      <td>
        <p><code>result[1] === "Brown"</code></p>
        <p><code>result[2] === "Jumps"</code></p>
      </td>
    </tr>
    <tr>
      <td><code>index</code></td>
      <td>일치가 문자열에서 위치하는 인덱스. (0 시작)</td>
      <td><code>4</code></td>
    </tr>
    <tr>
      <td><code>input</code></td>
      <td>원본 문자열.</td>
      <td><code>"The Quick Brown Fox Jumps Over The Lazy Dog"</code></td>
    </tr>
    <tr>
      <th colspan="1" rowspan="5" scope="row" style="vertical-align: top">
        <code>re</code>
      </th>
      <td><code>lastIndex</code></td>
      <td>
        <p>다음 일치를 시작할 인덱스.</p>
        <p><code>g</code>를 누락하면 항상 <code>0</code>입니다.</p>
      </td>
      <td><code>25</code></td>
    </tr>
    <tr>
      <td><code>ignoreCase</code></td>
      <td><code>i</code> 플래그로 대소문자를 무시했는지 여부.</td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td><code>global</code></td>
      <td><code>g</code> 플래그로 전역 일치를 수행하는지 여부.</td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td><code>multiline</code></td>
      <td><code>m</code> 플래그로 여러 줄에 걸친 탐색을 수행하는지 여부.</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>source</code></td>
      <td>패턴 문자열.</td>
      <td><code>"quick\s(brown).+?(jumps)"</code></td>
    </tr>
  </tbody>
</table>

## 예제

### Finding successive matches

If your regular expression uses the "`g`" flag, you can use the `exec()` method multiple times to find successive matches in the same string. When you do so, the search starts at the substring of `str` specified by the regular expression's {{jsxref("RegExp.lastIndex", "lastIndex")}} property ({{jsxref("RegExp.prototype.test()", "test()")}} will also advance the {{jsxref("RegExp.lastIndex", "lastIndex")}} property). For example, assume you have this script:

```js
var myRe = /ab*/g;
var str = "abbcdefabh";
var myArray;
while ((myArray = myRe.exec(str)) !== null) {
  var msg = "Found " + myArray[0] + ". ";
  msg += "Next match starts at " + myRe.lastIndex;
  console.log(msg);
}
```

This script displays the following text:

```
Found abb. Next match starts at 3
Found ab. Next match starts at 9
```

Note: Do not place the regular expression literal (or {{jsxref("RegExp")}} constructor) within the `while` condition or it will create an infinite loop if there is a match due to the {{jsxref("RegExp.lastIndex", "lastIndex")}} property being reset upon each iteration. Also be sure that the global flag is set or a loop will occur here also.

### Using `exec()` with `RegExp` literals

You can also use `exec()` without creating a {{jsxref("RegExp")}} object:

```js
var matches = /(hello \S+)/.exec("This is a hello world!");
console.log(matches[1]);
```

This will log a message containing 'hello world!'.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Regular Expressions](/ko/docs/Web/JavaScript/Guide/Regular_Expressions) chapter in the [JavaScript Guide](/ko/docs/Web/JavaScript/Guide)
- {{jsxref("RegExp")}}
