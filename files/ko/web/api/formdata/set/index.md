---
title: FormData.set()
slug: Web/API/FormData/set
---

{{APIRef("XMLHttpRequest")}}

{{domxref("FormData")}} 인터페이스의 **`set()`** 메서드는 `FormData` 객체 내에 있는 기존 키에 새 값을 설정하거나, 존재하지 않을 경우 key/value을 추가합니다.

`set()` 과 {{domxref("FormData.append")}} 의 차이점은 지정된 키가 이미 존재할 경우에, `set()` 은 모든 기존 값들을 새로운 값으로 덮어쓰기하는 반면, {{domxref("FormData.append")}} 는 기존 값의 끝에 새 값을 추가합니다.

> **참고:** 이 메서드는 [Web Worker](/ko/docs/Web/API/Web_Workers_API)에서 사용할 수 있습니다.

## Syntax

이 메서드에는 두 가지 버전이 있습니다: 매개변수가 두 개인 버전과 세 개인 버전입니다:

```js
formData.set(name, value);
formData.set(name, value, filename);
```

### Parameters

- `name`
  - : `value` 에 포함되는 데이터 필드의 이름입니다.
- `value`
  - : 필드의 값입니다. 파라미터가 두 개인 버전에서는 {{domxref("USVString")}}이고, 그렇지 않은 경우 문자열로 변환됩니다. 파라미터가 세 개인 버전에서는 {{domxref("Blob")}}, {{domxref("File")}}, {{domxref("USVString")}}이 될 수 있습니다. 이들 중 어느것도 지정되지 않으면 값은 문자열로 변환됩니다.
- `filename` {{optional_inline}}
  - : {{domxref("Blob")}} 또는 {{domxref("File")}} 이 두 번째 매개 변수로 전달될 때, 서버에 리포트하는 파일 이름(a {{domxref("USVString")}})입니다. {{domxref("Blob")}} 객체의 기본 파일 이름은 "blob"입니다.

> **참고:** {{domxref("Blob")}} 을 `FormData` 객체에 추가할 데이터로 지정하면, "Content-Disposition" 헤더에서 서버에 리포트하는 파일 이름이 브라우저마다 다를 수 있습니다.

## Example

다음 코드를 따라 빈 `FormData` 객체를 만듭니다:

```js
var formData = new FormData(); // Currently empty
```

{{domxref("FormData.set")}}를 사용하여 key/value 쌍을 추가할 수 있습니다::

```js
formData.set("username", "Chris");
formData.set("userpic", myFileInput.files[0], "chris.jpg");
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
