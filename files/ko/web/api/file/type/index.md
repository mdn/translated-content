---
title: File.type
slug: Web/API/File/type
tags:
  - API
  - File API
  - Property
  - Read-only
  - Reference
browser-compat: api.File.type
translation_of: Web/API/File/type
---
{{APIRef("File API")}}

**`type`** 속성은 {{domxref("File")}} 객체가 나타내는 파일의 미디어 유형([MIME](/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types))을 반환합니다.

## 값

파일의 미디어 유형(MIME)을 포함한 문자열입니다. 예를 들어, PNG 이미지라면 "image/png"입니다.

## 예제

### HTML

```html
<input type="file" id="filepicker" name="fileList" multiple />
<output id="output"></output>
```

```css hidden
output {
  display: block;
  white-space: pre-wrap;
}
```

### JavaScript

```js
const output = document.getElementById('output');
const filepicker = document.getElementById('filepicker');

filepicker.addEventListener('change', (event) => {
  const files = event.target.files;
  output.textContent = '';

  for (const file of files) {
    output.textContent += `${file.name}: ${file.type || '알 수 없음'}\n`;
  }
});
```

### 결과

{{EmbedLiveSample('예제')}}

> **참고:** 현재 구현에서, 브라우저들은 파일의 미디어 유형을 확인할 때 실제 바이트스트림을 읽지 않으며 대신 파일의 확장자로 추측할 뿐입니다. 즉, PNG 이미지 파일의 이름을 .txt로 바꾸면 "_image/png_"가 아니라 "_text/plain_"을 반환합니다. 그리고 `type` 속성은 이미지, HTML 문서, 오디오와 비디오처럼 흔한 파일 확장자만 인지할 수 있고, 보다 덜 일반적인 확장자에 대해서는 빈 문자열을 반환합니다. 게다가 클라이언트 설정(Windows 레지스트리 등)에 따라서 흔한 파일 유형에서도 예상치 못한 값을 반환할 가능성이 있습니다. **`type` 속성을 유일한 유효성 검증 수단으로 사용하는 건 권장하지 않습니다.**

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [웹 어플리케이션에서 파일 사용하기](/ko/docs/Web/API/File/Using_files_from_web_applications)
- [Be skeptical of client-reported MIME types](https://textslashplain.com/2018/07/26/be-skeptical-of-client-reported-mime-content-types/)
