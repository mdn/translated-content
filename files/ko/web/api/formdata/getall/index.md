---
title: FormData.getAll()
slug: Web/API/FormData/getAll
---

{{APIRef("XMLHttpRequest")}}

{{domxref("FormData")}} 인터페이스의 **`getAll()`** 메서드는 `FormData` 객체에서 지정된 키와 연관된 모든 값을 반환합니다.

> **참고:** 이 메서드는 [Web Worker](/ko/docs/Web/API/Web_Workers_API)에서 사용할 수 있습니다.

## Syntax

```js
formData.getAll(name);
```

### Parameters

- `name`
  - : 검색하고 싶은 키의 이름을 나타내는 {{domxref("USVString")}} 입니다.

### Returns

{{domxref("FormDataEntryValue")}}의 배열입니다.

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

`getAll()` 함수는 `username` 의 값들을 배열로 반환합니다:

```js
formData.getAll("username"); // Returns ["Chris", "Bob"]
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
