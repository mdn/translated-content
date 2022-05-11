---
title: File.name
slug: Web/API/File/name
tags:
  - API
  - File API
  - Property
  - Reference
  - 파일
translation_of: Web/API/File/name
---
{{APIRef("File API")}}

**`name`** 속성은 {{domxref("File")}} 객체가 나타내는 파일의 이름을 반환합니다. 보안상의 이유로 경로는 이름에서 제외됩니다.

## 값

`"My Resume.rtf"`와 같이 경로가 없는 파일의 이름을 포함하는 문자열입니다.

## 예제

```html
<input type="file" multiple onchange="processSelectedFiles(this)">
```

```js
function processSelectedFiles(fileInput) {
  var files = fileInput.files;

  for (var i = 0; i < files.length; i++) {
    alert("Filename " + files[i].name);
  }
}
```

아래에서 결과를 확인해보세요.

{{ EmbedLiveSample('예제', 300, 50) }}

## 명세

| Specification                                                    | Status                       | Comment             |
| ---------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('File API', '#file-attrs', 'name')}} | {{Spec2('File API')}} | Initial definition. |

## 브라우저 호환성

{{Compat("api.File.name")}}

## 같이 보기

- [웹 어플리케이션에서 파일 사용하기](/ko/docs/Web/API/File/Using_files_from_web_applications)
