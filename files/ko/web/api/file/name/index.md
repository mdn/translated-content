---
title: File.name
slug: Web/API/File/name
---

{{APIRef("File API")}}

**`name`** 속성은 {{domxref("File")}} 객체가 나타내는 파일의 이름을 반환합니다. 보안상의 이유로 경로는 이름에서 제외됩니다.

## 값

`"My Resume.rtf"`와 같이, 경로 없는 파일 이름을 포함하는 문자열입니다.

## 예제

### HTML

```html
<input type="file" id="filepicker" multiple />
<div>
  <p>선택한 파일 목록:</p>
  <ul id="output"></ul>
</div>
```

### JavaScript

```js
const output = document.getElementById("output");
const filepicker = document.getElementById("filepicker");

filepicker.addEventListener("change", (event) => {
  const files = event.target.files;
  output.textContent = "";

  for (const file of files) {
    const li = document.createElement("li");
    li.textContent = file.name;
    output.appendChild(li);
  }
});
```

### 결과

{{EmbedLiveSample('예제')}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [웹 어플리케이션에서 파일 사용하기](/ko/docs/Web/API/File/Using_files_from_web_applications)
