---
title: File API
slug: Web/API/File_API
l10n:
  sourceCommit: 381c51574a3e6a07ee09c63493452440f046038d
---

{{DefaultAPISidebar("File API")}}

## 개념 및 사용법

File API를 사용하면 웹 애플리케이션이 파일과 그 콘텐츠에 접근할 수 있습니다.

웹 애플리케이션은 사용자가 [파일 `<input>` 요소](/ko/docs/Web/HTML/Reference/Elements/input/file)를 사용하거나 [드래그 앤드 드롭](/ko/docs/Web/API/DataTransfer/files)을 통해 파일을 사용할 수 있도록 설정하면 파일에 접근할 수 있습니다.

이러한 방식으로 제공되는 파일 세트는 웹 애플리케이션에서 개별 {{domxref("File")}} 객체를 검색할 수 있는 {{domxref("FileList")}} 객체로 표시됩니다. {{domxref("File")}} 객체는 파일의 이름, 크기, 유형, 마지막 수정 날짜 등의 메타데이터에 대한 접근을 제공합니다.

{{domxref("File")}} 객체를 {{domxref("FileReader")}} 객체에 전달하여 파일 내용에 접근할 수 있습니다. {{domxref("FileReader")}} 인터페이스는 비동기식이지만 [웹 워커](/ko/docs/Web/API/Web_Workers_API)에서만 사용할 수 있는 동기식 버전은 {{domxref("FileReaderSync")}} 인터페이스에서 제공됩니다.

## 인터페이스

- {{domxref("Blob")}}
  - : {{domxref("Blob")}}은 "이진 대용량 객체(Binary Large Object)"를 나타내며, 텍스트 또는 이진 데이터로 읽거나 해당 메서드를 사용하여 데이터를 처리할 수 있도록 {{domxref("ReadableStream")}}으로 변환할 수 있습니다.
- {{domxref("File")}}
  - : 파일에 대한 정보를 제공하고 웹 페이지의 Javascript가 해당 콘텐츠에 접근할 수 있도록 허용합니다.
- {{domxref("FileList")}}
  - : {{HTMLElement("input")}} 요소의 `files` 속성으로 반환되며, 이를 통해 `<input type="file">` 요소로 선택한 파일 목록에 접근할 수 있습니다. 또한 드래그 앤드 드롭 API를 사용할 때 웹 콘텐츠에 끌어다 놓은 파일 목록에도 사용됩니다. 이 사용법에 대한 자세한 내용은 {{domxref("DataTransfer")}} 객체를 참조하세요.
- {{domxref("FileReader")}}
  - : 웹 애플리케이션이 {{domxref("File")}} 또는 {{domxref("Blob")}} 객체를 사용하여 읽을 파일 또는 데이터를 지정하여 사용자 컴퓨터에 저장된 파일(또는 원시 데이터 버퍼)의 내용을 비동기적으로 읽을 수 있도록 합니다.
- {{domxref("FileReaderSync")}}
  - : 웹 애플리케이션이 {{domxref("File")}} 또는 {{domxref("Blob")}} 객체를 사용하여 읽을 파일 또는 데이터를 지정하여 사용자 컴퓨터에 저장된 파일(또는 원시 데이터 버퍼)의 내용을 동기적으로 읽을 수 있도록 합니다.

### 다른 인터페이스로의 확장

- {{domxref("URL.createObjectURL()")}}
  - : {{domxref("File")}} 또는 {{domxref("Blob")}} 객체를 가져오는 데 사용할 수 있는 URL을 만듭니다.
- {{domxref("URL.revokeObjectURL()")}}
  - : 이전에 {{domxref("URL.createObjectURL()")}}을 호출하여 생성한 기존 개체 URL을 해제합니다.

## 예제

### 파일 읽기

이 예제에서는 [파일 `<input>` 요소](/ko/docs/Web/HTML/Reference/Elements/input/file)를 제공하고, 사용자가 파일을 선택하면 선택한 첫 번째 파일의 내용을 텍스트로 읽고 그 결과를 {{HTMLElement("div")}}에 표시합니다.

#### HTML

```html
<input type="file" />
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
const fileInput = document.querySelector("input[type=file]");
const output = document.querySelector(".output");

fileInput.addEventListener("change", async () => {
  const [file] = fileInput.files;

  if (file) {
    output.innerText = await file.text();
  }
});
```

### 결과

{{EmbedLiveSample("Reading a file", "", "300")}}

## 명세서

{{Specifications}}

## 같이 보기

- [`<input type="file">`](/ko/docs/Web/HTML/Reference/Elements/input/file): 파일 input 요소
- [`text() method`](/ko/docs/Web/API/Blob/text): .text()
- {{domxref("DataTransfer")}} 인터페이스
