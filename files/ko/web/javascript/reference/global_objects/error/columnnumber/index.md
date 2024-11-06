---
title: "Error: columnNumber"
slug: Web/JavaScript/Reference/Global_Objects/Error/columnNumber
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}} {{Non-standard_Header}}

{{jsxref("Error")}} 인스턴스의 **`columnNumber`** 데이터 속성은 이 오류가 발생한 파일의 행의 열 번호를 포함합니다.

## 값

양의 정수.

{{js_property_attributes(1, 0, 1)}}

## 예제

### columnNumber 사용하기

```js
try {
  throw new Error("Could not parse input");
} catch (err) {
  console.log(err.columnNumber); // 9
}
```

## 명세

표준의 일부가 아닙니다.

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("Error.prototype.stack")}}
- {{jsxref("Error.prototype.lineNumber")}}
- {{jsxref("Error.prototype.fileName")}}
