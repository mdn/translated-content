---
title: Blob.size
slug: Web/API/Blob/size
tags:
  - API
  - Blob
  - Bytes
  - File API
  - Files
  - Property
  - Reference
  - length
  - size
browser-compat: api.Blob.size
translation_of: Web/API/Blob/size
---
{{APIRef("File API") }}

{{domxref("Blob")}} 인터페이스의 **`size`** 속성은 {{domxref("Blob")}} 또는 {{domxref("File")}}의 크기를 바이트 단위로 반환합니다.

## 값

`Blob` 또는 {{domxref("File")}}과 같은 `Blob` 기반 객체의 데이터 크기를 바이트 단위로 나타낸 숫자입니다.

## 예제

이 예제는 `file` 유형의 {{htmlelement("input")}} 요소를 통해 사용자가 선택한 여러 파일을 순회하면서, 각각의 파일 이름과 바이트 크기를 출력합니다.

### HTML

```html
<input type="file" id="input" multiple>
<output id="output">파일 선택...</output>
```

```css hidden
output {
  display: block;
  margin-top: 16px;
}
```

### JavaScript

```js
const input = document.getElementById('input');
const output = document.getElementById('output');

input.addEventListener('change', (event) => {
  output.innerText = '';

  for (const file of event.target.files) {
    output.innerText += `${file.name}의 크기는 ${file.size} 바이트입니다.\n`;
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
