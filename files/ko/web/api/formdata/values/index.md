---
title: FormData.values()
slug: Web/API/FormData/values
---

{{APIRef("XMLHttpRequest")}}

**`FormData.values()`** 메서드는 이 객체에 포함 된 모든 value를 통과하는 {{jsxref("Iteration_protocols",'iterator')}}를 반환합니다. value는 {{domxref("USVString")}} 또는 {{domxref("Blob")}} 객체입니다.

> **참고:** 이 메서드는 [Web Worker](/ko/docs/Web/API/Web_Workers_API)에서 사용할 수 있습니다.

## Syntax

```js
formData.values();
```

### Return value

{{jsxref("Iteration_protocols","iterator")}}를 반환합니다.

## Example

```js
// Create a test FormData object
var formData = new FormData();
formData.append("key1", "value1");
formData.append("key2", "value2");

// Display the values
for (var value of formData.values()) {
  console.log(value);
}
```

결과는 다음과 같습니다:

```
value1
value2
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{domxref("XMLHTTPRequest")}}
- [Using XMLHttpRequest](/ko/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest)
- [Using FormData objects](/ko/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
