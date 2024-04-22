---
title: Blob.type
slug: Web/API/Blob/type
---

{{APIRef("File API")}}

{{domxref("Blob")}} 객체의 **`type`** 속성은 데이터의 {{Glossary("MIME type", "MIME 유형")}}을 반환합니다.

## 값

파일의 MIME 유형을 나타내는 {{domxref("DOMString")}}. 유형을 알아낼 수 없는 경우 빈 문자열입니다.

## 예제

이 예제는 사용자가 선택한 모든 파일 각각에 대해, 허용된 이미지 파일 유형 중 하나인지 검사합니다.

### HTML

```html
<input type="file" id="input" multiple />
<output id="output">이미지 파일 선택...</output>
```

```css hidden
output {
  display: block;
  margin-top: 16px;
}
```

### JavaScript

```js
// 우리 애플리케이션에서는 GIF, PNG, JPEG 이미지만 허용
const allowedFileTypes = ["image/png", "image/jpeg", "image/gif"];

const input = document.getElementById("input");
const output = document.getElementById("output");

input.addEventListener("change", (event) => {
  const files = event.target.files;

  if (files.length === 0) {
    output.innerText = "이미지 파일 선택...";
    return;
  }

  if (Array.from(files).every((file) => allowedFileTypes.includes(file.type))) {
    output.innerText = "모든 파일 사용 가능!";
  } else {
    output.innerText = "이미지 파일만 선택하세요.";
  }
});
```

### 결과

{{EmbedLiveSample("예제")}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("Blob")}}
- [웹 애플리케이션에서 파일 사용하기](/ko/docs/Web/API/File/Using_files_from_web_applications)
