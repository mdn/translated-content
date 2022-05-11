---
title: File.File()
slug: Web/API/File/File
tags:
  - API
  - Constructor
  - File
  - Reference
  - 파일
translation_of: Web/API/File/File
---
{{APIRef("File")}}

**`File()`** 생성자는 {{domxref("File")}} 객체의 새로운 인스턴스를 생성합니다.

## 구문

```
new File(bits, name[, options]);
```

### 매개변수

- `bits`
  - : {{jsxref("ArrayBuffer")}}, {{domxref("ArrayBufferView")}}, {{domxref("Blob")}}, 또는 {{domxref("DOMString")}} 객체로 이루어진 {{jsxref("Array")}}. UTF-8로 인코딩한 파일 내용입니다.
- `name`
  - : 파일명이나 파일의 경로를 나타내는 {{domxref("USVString")}}.
- `options` {{optional_inline}}

  - : 파일의 추가 속성을 담은 옵션 객체. 가능한 옵션은 다음과 같습니다.

    - `type`: 파일 내용의 MIME 유형을 나타내는 {{domxref("DOMString")}}. 기본값은 빈 문자열입니다.
    - `lastModified`: 유닉스 시간(1970-01-01T00:00:00Z)과 파일이 마지막으로 변경된 시각의 밀리초 차이. 기본값은 {{jsxref("Date.now()")}}의 값입니다.

## 예제

```js
var file = new File(["foo"], "foo.txt", {
  type: "text/plain",
});
```

## 명세

| Specification                    | Status                       | Comment            |
| -------------------------------- | ---------------------------- | ------------------ |
| {{SpecName('File API')}} | {{Spec2('File API')}} | Initial definition |

## 브라우저 호환성

{{Compat("api.File.File")}}

## 같이 보기

- {{domxref("FileReader")}}
- {{domxref("Blob")}}
