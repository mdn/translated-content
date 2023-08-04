---
title: FormData.entries()
slug: Web/API/FormData/entries
---

{{APIRef("XMLHttpRequest")}}

**`FormData.entries()`** 메서드는 이 객체에 포함된 모든 key/value 쌍을 통과하는 {{jsxref("Iteration_protocols",'iterator')}} 를 반환합니다. 각 쌍의 key는 {{domxref("USVString")}} 객체입니다; value는 {{domxref("USVString")}} 또는 {{domxref("Blob")}} 중 하나입니다.

> **참고:** 이 메서드는 [Web Worker](/ko/docs/Web/API/Web_Workers_API)에서 사용할 수 있습니다.

## Syntax

```js
formData.entries();
```

### Return value

{{jsxref("Iteration_protocols","iterator")}}를 리턴합니다.

## Example

```js
// Create a test FormData object
var formData = new FormData();
formData.append("key1", "value1");
formData.append("key2", "value2");

// Display the key/value pairs
for (var pair of formData.entries()) {
  console.log(pair[0] + ", " + pair[1]);
}
```

결과는 다음과 같습니다:

```
key1, value1
key2, value2
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
