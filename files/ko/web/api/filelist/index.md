---
title: FileList
slug: Web/API/FileList
---

{{APIRef("File API")}}

**`FileList`** 유형의 객체는 HTML {{htmlelement("input")}} 요소의 `files` 속성이나 [Drag and Drop API](/ko/docs/Web/API/HTML_Drag_and_Drop_API)의 {{domxref("DataTransfer")}}에서 가져올 수 있으며, `<input type="file">` 요소로 선택했거나 웹 콘텐츠 위에 끌어다 놓은 파일 목록에 대한 접근을 제공합니다.

모든 `<input>` 요소 노드에는 `FileList`를 반환하는 `files` 특성이 있어서 파일의 목록에 접근할 수 있습니다. 예를 들어, 다음과 같은 HTML 코드를 가정하면,

```html
<input id="fileItem" type="file" />
```

아래 코드로 노드의 파일 리스트에서 첫 번째 항목을 [`File`](/ko/docs/Web/API/File) 객체로 가져올 수 있습니다.

```js
const file = document.getElementById("fileItem").files[0];
```

## 속성

- {{DOMxRef("FileList/length", "length")}}{{ReadOnlyInline}}
  - : 리스트가 포함한 파일의 수를 나타내는 읽기 전용 값입니다.

## 메서드

- {{DOMxRef("FileList/item", "item()")}}{{ReadOnlyInline}}
  - : 파일 리스트에서 지정한 인덱스에 위치한 파일을 나타내는 {{domxref("File")}} 객체를 반환합니다.

## 예제

### 파일 이름 기록하기

이 예제에서는 사용자가 선택한 파일들의 이름을 기록합니다.

#### HTML

```html
<!--'multiple'을 지정해서 여러 파일의 선택을 허용-->
<input id="myfiles" multiple type="file" />
<div class="output"></div>
```

#### CSS

```css
.output {
  overflow: scroll;
  margin: 1rem 0;
  height: 200px;
}
```

#### JavaScript

```js
const output = document.querySelector(".output");
const myFiles = document.querySelector("#myfiles");

function logFilenames() {
  const fileInput = document.querySelector("#myfiles");
  const files = fileInput.files;
  const fileListLength = files.length;
  for (let i = 0; i < fileListLength; i++) {
    output.innerText = `${output.innerText}\n${files.item(i).name}`;
  }
}

myFiles.addEventListener("change", logFilenames);
```

#### 결과

{{EmbedLiveSample("파일 이름 기록하기")}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [웹 애플리케이션에서 파일 사용하기](/ko/docs/Web/API/File/Using_files_from_web_applications)
- [`File`](/ko/docs/Web/API/File)
- [`FileReader`](/ko/docs/Web/API/FileReader)
