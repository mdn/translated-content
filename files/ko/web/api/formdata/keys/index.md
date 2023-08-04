---
title: FormData.keys()
slug: Web/API/FormData/keys
---

{{APIRef("XMLHttpRequest")}}

**`FormData.keys()`** 메서드는 이 객체에 포함된 모든 키를 통과하는 {{jsxref("Iteration_protocols",'iterator')}} 를 반환합니다. 키는 {{domxref("USVString")}} 객체입니다.

> **참고:** 이 메서드는 [Web Worker](/ko/docs/Web/API/Web_Workers_API)에서 사용할 수 있습니다.

## Syntax

```js
formData.keys();
```

### Return value

{{jsxref("Iteration_protocols","iterator")}}를 반환합니다.

## Example

```js
// Create a test FormData object
var formData = new FormData();
formData.append("key1", "value1");
formData.append("key2", "value2");

// Display the keys
for (var key of formData.keys()) {
  console.log(key);
}
```

결과는 다음과 같습니다:

```
key1
key2
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
