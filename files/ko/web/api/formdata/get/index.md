---
title: FormData.get()
slug: Web/API/FormData/get
---

{{APIRef("XMLHttpRequest")}}

{{domxref("FormData")}} 인터페이스의 **`get()`** 메서드는 `FormData` 객체에서 지정한 키와 연관된 첫 번째 값을 반환합니다. 값이 여러개이고, 모든 값을 원하면 이 메서드 대신 {{domxref("FormData.getAll()","getAll()")}} 메서드를 사용하십시오.

> **참고:** 이 메서드는 [Web Worker](/ko/docs/Web/API/Web_Workers_API)에서 사용할 수 있습니다.

## Syntax

```js
formData.get(name);
```

### Parameters

- `name`
  - : 검색하고 싶은 키의 이름을 나타내는 {{domxref("USVString")}} 입니다.

### Return value

값을 포함하는 {{domxref("FormDataEntryValue")}} 입니다.

## Example

다음 코드를 따라 빈 `FormData` 객체를 만듭니다:

```js
var formData = new FormData();
```

{{domxref("FormData.append")}}를 사용하여 `username` 에 두 개의 값을 추가합니다:

```js
formData.append("username", "Chris");
formData.append("username", "Bob");
```

`get()` 함수를 사용하면 `username` 의 첫 번째 value만 반환합니다:

```js
formData.get("username"); // Returns "Chris"
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
