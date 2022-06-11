---
title: File()
slug: Web/API/File/File
tags:
  - API
  - Constructor
  - File
  - Reference
browser-compat: api.File.File
translation_of: Web/API/File/File
---
{{APIRef("File")}}

**`File()`** 생성자는 {{domxref("File")}} 객체의 새로운 인스턴스를 생성합니다.

## 구문

```js
new File(bits, name)
new File(bits, name, options)
```

### 매개변수

- `bits`
  - : {{domxref("File")}} 객체 내에 저장할 데이터를 나타내는 {{jsxref("Array")}}입니다. {{jsxref("ArrayBuffer")}}, {{domxref("ArrayBufferView")}}, {{domxref("Blob")}}, 문자열을 요소로 제공할 수 있습니다. `USVString` 객체는 UTF-8로 인코딩해 사용합니다.
- `name`
  - : 파일의 이름이나 경로를 나타내는 문자열입니다.
- `options` {{optional_inline}}

  - : 파일 특성을 추가로 지정할 수 있는 옵션 객체입니다. 가능한 옵션은 다음과 같습니다.

    - `type`: 파일 내용의 MIME 유형을 나타내는 문자열입니다. 기본값은 빈 문자열(`""`)입니다.
    - `lastModified`: 파일이 마지막으로 변경된 시간입니다. Unix 시간에서부터 경과한 밀리초 정수로 지정해야 합니다. 기본값은 {{jsxref("Date.now()")}}와 같습니다.

## 예제

```js
const file = new File(["foo"], "foo.txt", {
  type: "text/plain",
});
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("FileReader")}}
- {{domxref("Blob")}}
