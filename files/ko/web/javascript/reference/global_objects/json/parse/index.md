---
title: JSON.parse()
slug: Web/JavaScript/Reference/Global_Objects/JSON/parse
---

{{JSRef}}

**`JSON.parse()`** 메서드는 JSON 문자열의 구문을 분석하고, 그 결과에서 JavaScript 값이나 객체를 생성합니다. 선택적으로, `reviver` 함수를 인수로 전달할 경우, 결과를 반환하기 전에 변형할 수 있습니다.

{{EmbedInteractiveExample("pages/js/json-parse.html")}}

## 구문

```js
    JSON.parse(text[, reviver])
```

### 매개변수

- `text`
  - : JSON으로 변환할 문자열. JSON 구문은 {{jsxref("JSON")}} 객체의 설명을 참고하세요.
- `reviver` {{optional_inline}}
  - : 함수라면, 변환 결과를 반환하기 전에 이 인수에 전달해 변형함.

### 반환 값

주어진 JSON 문자열에 대응하는 {{jsxref("Object")}}.

### 예외

변환할 문자열이 유효한 JSON이 아닐 경우 {{jsxref("SyntaxError")}}.

## 예제

### `JSON.parse()` 사용하기

```js
JSON.parse("{}"); // {}
JSON.parse("true"); // true
JSON.parse('"foo"'); // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse("null"); // null
```

### `reviver` 매개변수 사용하기

`reviver`가 주어지면 분석한 값을 반환하기 전에 변환합니다. 구체적으로는, 분석한 값과 그 모든 속성(가장 깊게 중첩된 속성부터 시작해 제일 바깥의 원래 값까지)을 각각 `reviver`에 전달합니다. `reviver`의 `this` 문맥은 분석한 값으로 설정되고, 속성 명(문자열)과 값을 인자로 전달받습니다. `reviver`가 {{jsxref("undefined")}}를 반환하거나 반환하지 않는다면, 예컨대 함수가 중간에 실패한다면 그 속성은 최종 결과에서 제외됩니다. 그 외에는 반환 값으로 속성의 값을 재설정합니다.

만약 `reviver`가 일부 값만 변환하고 나머지는 건드리지 않는다면, 나머지 값을 그대로 반환하는걸 잊지 마세요. 그렇지 않으면 변환한 값 외에는 결과에서 모두 제외됩니다.

```js
JSON.parse(
  '{"p": 5}',
  (key, value) =>
    typeof value === "number"
      ? value * 2 // 숫자라면 2배
      : value, // 나머진 그대로
);

// { p: 10 }

JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', (key, value) => {
  console.log(key); // 현재 속성명 출력, 마지막은 빈 문자열("")
  return value; // 변환하지 않고 그대로 반환
});

// 1
// 2
// 4
// 6
// 5
// 3
// ""
```

### 후행 쉼표 사용 불가

```js example-bad
// 둘 다 SyntaxError
JSON.parse("[1, 2, 3, 4, ]");
JSON.parse('{"foo" : 1, }');
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("JSON.stringify()")}}
