---
title: FileReader.readAsText()
slug: Web/API/FileReader/readAsText
---

{{APIRef("File API")}}

**`readAsText()`** 메서드는 지정된 {{domxref("Blob")}} 이나 {{domxref("File")}} 의 컨텐츠를 읽기 위해 사용합니다. 읽기 연산이 끝나면, {{domxref("FileReader.readyState","readyState")}} 가 `DONE`으로 바뀌고, {{event("loadend")}} 이벤트가 트리거 되고, {{domxref("FileReader.result","result")}} 프로퍼티는 파일의 내용을 텍스트 문자열로 가집니다.

> **참고:** {{domxref("Blob.text()")}} 메서드는 파일을 텍스트로 읽는 프로미스 기반의 새 API 입니다.

## 문법

```js
instanceOfFileReader.readAsText(blob[, encoding]);
```

### 매개변수

- `blob`
  - : 읽어 들일 {{domxref("Blob")}} 이나 {{domxref("File")}}
- `encoding` {{optional_inline}}
  - : 반환 데이터에 사용될 문자열 인코딩을 지정. 매개변수가 지정되지 않으면 기본적으로 UTF-8이라고 가정합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 보기

- {{domxref("FileReader")}}
