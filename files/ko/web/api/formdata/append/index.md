---
title: FormData.append()
slug: Web/API/FormData/append
---

{{APIRef("XMLHttpRequest")}}

{{domxref("FormData")}} 인터페이스의 **`append()`** 메서드는 `FormData` 객체의 기존 키에 새 값을 추가하거나, 키가 없는 경우 키를 추가합니다.

{{domxref("FormData.set")}} 과 `append()` 의 차이점은 지정된 키가 이미 있으면, {{domxref("FormData.set")}} 은 모든 기존 값을 새 값으로 덮어쓰기를 합니다. 반면 `append()` 는 기존 값 집합의 끝에 새로운 값을 추가합니다.

> **참고:** 이 메서드는 [Web Worker](/ko/docs/Web/API/Web_Workers_API)에서 사용할 수 있습니다.

## Syntax

이 메서드에는 두 가지 버전이 있습니다: 매개변수가 두 개인 버전과 세 개인 버전입니다:

```js
formData.append(name, value);
formData.append(name, value, filename);
```

### Parameters

- `name`
  - : `value` 에 포함되는 데이터 필드의 이름입니다.
- `value`
  - : 필드의 값입니다. {{domxref("USVString")}} 또는 {{domxref("Blob")}} ({{domxref("File")}}과 같은 sublcass를 포함하여) 일 수 있습니다.
- `filename` {{optional_inline}}
  - : {{domxref("Blob")}} 또는 {{domxref("File")}} 이 두 번째 매개 변수로 전달될 때, 서버에 리포트하는 파일 이름(a {{domxref("USVString")}})입니다. {{domxref("Blob")}} 객체의 기본 파일 이름은 "blob" 입니다. {{domxref("File")}} 객체의 기본 파일 이름은 파일의 이름이 됩니다.

> **참고:** {{domxref("Blob")}} 을 `FormData` 객체에 추가할 데이터로 지정하면, "Content-Disposition" 헤더에서 서버에 리포트하는 파일 이름이 브라우저마다 다를 수 있습니다.

### Returns

Void.

## Example

다음 코드를 따라 빈 `FormData` 객체를 만듭니다:

```js
var formData = new FormData(); // Currently empty
```

{{domxref("FormData.append")}}를 사용하여 key/value 쌍을 추가할 수 있습니다:

```js
formData.append("username", "Chris");
formData.append("userpic", myFileInput.files[0], "chris.jpg");
```

일반 form 데이터와 마찬가지로 동일한 이름의 여러 값을 추가할 수 있습니다. 예를들면 (그리고 이름에 \[]를 추가하여 PHP의 명명 규칙과 호환이 가능합니다):

```js
formData.append("userpic[]", myFileInput.files[0], "chris1.jpg");
formData.append("userpic[]", myFileInput.files[1], "chris2.jpg");
```

이 기술을 사용하면 서버에 올라간 결과 데이터가 루프를 도는데 도움이 되는 구조이기 때문에, 이 기술을 사용하면 다중 -파일 업로드를 보다 쉽게 처리할 수 있습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{domxref("XMLHTTPRequest")}}
- [Using XMLHttpRequest](/ko/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest)
- [Using FormData objects](/ko/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
