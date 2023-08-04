---
title: FormData()
slug: Web/API/FormData/FormData
---

{{APIRef("XMLHttpRequest")}}

**`FormData()`** 생성자(Constructor)는 새로운 {{domxref("FormData")}}객체를 만듭니다.

> **참고:** 이 기능은 [Web Worker](/ko/docs/Web/API/Web_Workers_API)에서 사용할 수 있습니다.

## Syntax

```js
var formData = new FormData(form);
```

### Parameters

- `form` {{optional_inline}}
  - : HTML {{HTMLElement("form")}} 요소 — 지정된 경우 {{domxref("FormData")}} 객체는 form의 현재 key/value 들로 채워집니다. key/value는 submit한 각 요소의 name property와 value를 사용합니다. 또한 파일 입력 내용을 인코딩합니다.

## Example

다음 코드는 빈 `FormData` 객체를 만듭니다:

```js
var formData = new FormData(); // Currently empty
```

{{domxref("FormData.append")}}을 사용하여 key/value 쌍을 추가할 수 있습니다:

```js
formData.append("username", "Chris");
```

또는 `FormData` 객체를 만들 때 선택적으로 `form` argument를 지정할 수 있는데, 지정된 양식대로 value를 미리 채우는 것입니다:

```html
<form id="myForm" name="myForm">
  <div>
    <label for="username">Enter name:</label>
    <input type="text" id="username" name="username" />
  </div>
  <div>
    <label for="useracc">Enter account number:</label>
    <input type="text" id="useracc" name="useracc" />
  </div>
  <div>
    <label for="userfile">Upload file:</label>
    <input type="file" id="userfile" name="userfile" />
  </div>
  <input type="submit" value="Submit!" />
</form>
```

> **참고:** 모든 입력 요소는 'name' 속성(attribute) 을 갖고 있습니다. 나중에 value에 접근하는데 필요합니다.

```js
var myForm = document.getElementById("myForm");
formData = new FormData(myForm);
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
