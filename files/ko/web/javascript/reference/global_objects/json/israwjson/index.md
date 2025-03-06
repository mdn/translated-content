---
title: JSON.isRawJSON()
slug: Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON
l10n:
  sourceCommit: 47962c4ebad5a138673422ec63a282ab9a63d454
---

{{JSRef}}

**`JSON.isRawJSON()`** 정적 메서드는 값이 {{jsxref("JSON.rawJSON()")}}에 의해 반환된 객체인지 확인합니다.

## 구문

```js-nolint
JSON.isRawJSON(value)
```

### 매개변수

- `value`
  - : 테스트할 값입니다.

### 반환 값

`value`가 {{jsxref("JSON.rawJSON()")}}에 의해 생성된 경우 `true`, 그렇지 않으면 `false`를 반환합니다.

## 설명

"Raw JSON" 객체는 JSON으로 직렬화될 때 이미 JSON의 일부로 간주됩니다. 게다가 {{jsxref("JSON.rawJSON()")}}의 작동 방식으로 인해 Raw JSON은 문법적으로 유효한 JSON임이 보장됩니다. Raw JSON 객체의 모양과 동작에 대한 자세한 내용은 {{jsxref("JSON.rawJSON()")}}를 참조하십시오. 이 메서드는 다른 직렬화 라이브러리들이 Raw JSON 객체에 대해 `JSON.stringify()`와 유사한 동작을 구현할 수 있도록 하기 위해 존재합니다.

## 예제

### JSON.isRawJSON() 사용하기

아래 예제는 `JSON.isRawJSON()`을 사용하여 객체가 `JSON.rawJSON()`에 의해 반환되었는지 확인하는 방법을 보여줍니다. 이 예제에서는 데이터를 YAML과 같은 형식으로 직렬화하는 사용자 정의 직렬화 코드를 구현합니다.

```js
function mySerializer(value, indent = "") {
  if (typeof value !== "object" || value === null) {
    return JSON.stringify(value);
  }
  if (JSON.isRawJSON(value)) {
    return value.rawJSON;
  }
  const subIndent = `${indent}  `;
  if (Array.isArray(value)) {
    return `- ${value.map((v) => mySerializer(v, subIndent)).join(`\n${indent}- `)}`;
  }
  return Object.entries(value)
    .map(([key, value]) => {
      const subValue = mySerializer(value, subIndent);
      if (subValue.includes("\n")) {
        return `${key}:\n${subIndent}${subValue}`;
      }
      return `${key}: ${subValue}`;
    })
    .join(`\n${indent}`);
}

console.log(
  mySerializer({
    name: "Josh",
    userId: JSON.rawJSON("12345678901234567890"),
    friends: [
      { name: "Alice", userId: JSON.rawJSON("9876543210987654321") },
      { name: "Bob", userId: JSON.rawJSON("56789012345678901234") },
    ],
  }),
);

// name: "Josh"
// userId: 12345678901234567890
// friends:
//   - name: "Alice"
//     userId: 9876543210987654321
//   - name: "Bob"
//     userId: 56789012345678901234
```

위 예제에서 `userId` 값이 `JSON.rawJSON()`으로 생성되지 않고 숫자로 직접 전달되었다면, JS의 부동소수점 정밀도 제한으로 인해 값이 정확도를 잃게 됩니다.

```js
console.log(
  mySerializer({
    name: "Josh",
    userId: 12345678901234567890,
    friends: [
      { name: "Alice", userId: 9876543210987654321 },
      { name: "Bob", userId: 56789012345678901234 },
    ],
  }),
);

// name: "Josh"
// userId: 12345678901234567000
// friends:
//   - name: "Alice"
//     userId: 9876543210987655000
//   - name: "Bob"
//     userId: 56789012345678900000
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`JSON.isRawJSON`의 `core-js` 폴리필](https://github.com/zloirock/core-js#jsonparse-source-text-access)
- {{jsxref("JSON")}}
- {{jsxref("JSON.stringify()")}}
- {{jsxref("JSON.rawJSON()")}}
