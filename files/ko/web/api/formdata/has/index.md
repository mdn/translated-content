---
title: FormData.has()
slug: Web/API/FormData/has
---

{{APIRef("XMLHttpRequest")}}

{{domxref("FormData")}} 인터페이스의 **`has()`** 메서드는 `FormData` 객체에 특정 키가 들어 있는지 여부를 나타내는 boolean 을 반환합니다.

> **참고:** 이 메서드는 [Web Worker](/ko/docs/Web/API/Web_Workers_API)에서 사용할 수 있습니다.

## Syntax

```js
formData.has(name);
```

### Parameters

- `name`
  - : 테스트 하려는 키의 이름을 나타내는 {{domxref("USVString")}} 입니다.

### Returns

{{domxref("Boolean")}}.

## Example

다음 코드를 따라 빈 `FormData` 객체를 만듭니다:

```js
var formData = new FormData();
```

다음 스니펫(코드 조각)은 `FormData` 객체안에 `username` 이 존재하는지 테스트한 결과와, {{domxref("FormData.append")}}를 사용하여 `username` 에 값을 추가한 이후의 결과를 보여줍니다 :

```js
formData.has("username"); // Returns false
formData.append("username", "Chris");
formData.has("username"); // Returns true
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
