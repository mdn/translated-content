---
title: "Error: lineNumber"
slug: Web/JavaScript/Reference/Global_Objects/Error/lineNumber
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}} {{Non-standard_Header}}

{{jsxref("Error")}} 인스턴스의 **`lineNumber`** 데이터 속성은 이 오류가 발생한 파일의 행 번호를 포함합니다.

## 값

양의 정수.

{{js_property_attributes(1, 0, 1)}}

## 예제

### lineNumber 사용하기

```js
try {
  throw new Error("Could not parse input");
} catch (err) {
  console.log(err.lineNumber); // 2
}
```

### 오류 이벤트를 사용하는 또 다른 예제

```js
window.addEventListener("error", function (e) {
  console.log(e.lineNumber); // 5
});
const e = new Error("Could not parse input");
throw e;
```

이는 표준 기능이 아니며 광범위하게 지원되지 않습니다. 아래 브라우저 호환성 표를 참고하십시오.

## 명세

표준의 일부가 아닙니다.

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Error.prototype.stack")}}
- {{jsxref("Error.prototype.columnNumber")}}
- {{jsxref("Error.prototype.fileName")}}
