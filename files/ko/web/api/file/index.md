---
title: File
slug: Web/API/File
tags:
  - API
  - File API
  - Interface
  - Reference
  - Web
  - 파일
translation_of: Web/API/File
---
{{APIRef}}

**`File`** 인터페이스는 파일에 대한 정보를 제공하고, 웹 페이지의 JavaScript가 해당 내용에 접근할 수 있는 방법을 제공합니다.

`File` 객체는 보통 {{domxref("FileList")}} 객체에서 가져올 수 있습니다. 그리고 `FileList` 객체는 사용자가 {{HTMLElement("input")}} 요소에서 파일을 선택했을 때, 드래그 앤 드롭 작업의 {{domxref("DataTransfer")}} 객체에서, 그리고 {{domxref("HTMLCanvasElement")}}의 `mozGetAsFile()` API에서 반환합니다.

`File` 객체는 특정 종류의 {{domxref("Blob")}}이며, `Blob`을 사용할 수 있는 모든 맥락에서 사용할 수 있습니다. 특히 {{domxref("FileReader")}}, {{domxref("URL.createObjectURL()")}}, {{domxref("ImageBitmapFactories.createImageBitmap()", "createImageBitmap()")}}, {{domxref("XMLHttpRequest", "", "send()")}}는 `Blob`과 `File`을 모두 허용합니다.

자세한 정보 및 예제는 [웹 애플리케이션에서 파일 사용하기](/ko/docs/Web/API/File/Using_files_from_web_applications)를 참고하세요.

{{InheritanceDiagram}}

## 생성자

- {{domxref("File.File", "File()")}}
  - : 새로 생성한 `File`을 반환합니다.

## 속성

- {{domxref("File.lastModified")}} {{readonlyinline}}
  - : 파일의 최종 수정 시간을 UNIX 시간(1970년 1월 1일 자정)과의 밀리초 차이로 반환합니다.
- {{domxref("File.lastModifiedDate")}} {{readonlyinline}} {{deprecated_inline}}
  - : `File` 객체가 참조하는 파일의 마지막 수정 시간을 {{jsxref("Date")}}로 반환합니다.
- {{domxref("File.name")}} {{readonlyinline}}
  - : `File` 객체가 참조하는 파일의 이름을 반환합니다.
- {{domxref("File.webkitRelativePath")}} {{readonlyinline}} {{non-standard_inline}}
  - : {{domxref("File")}}의 URL 상대경로를 반환합니다.

`File`이 {{domxref("Blob")}} 을 구현하기 때문에 사용할 수 있는 속성도 있습니다.

- {{domxref("File.size")}} {{readonlyinline}}
  - : `File`의 크기를 바이트 단위로 반환합니다.
- {{domxref("File.type")}} {{readonlyinline}}
  - : `File`의 [MIME 유형](/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types)을 반환합니다.

## 메서드

_`File` 인터페이스는 메서드를 정의하지 않지만, {{domxref("Blob")}} 인터페이스에서 메서드를 상속합니다._

- {{domxref("Blob.slice()")}}
  - : 소스 `Blob`에서 지정한 바이트 범위 만큼의 데이터를 포함하는, 새로운 `Blob` 객체를 반환합니다.
- {{domxref("Blob.stream()")}}
  - : `File`을 {{domxref("ReadableStream")}}으로 변환합니다. `ReadableStream`은 파일 내용을 읽을 때 사용할 수 있습니다.
- {{domxref("Blob.text()")}}
  - : `File`을 스트림으로 변환한 후 끝까지 읽습니다. {{domxref("USVString")}}으로 이행하는 {{jsxref("Promise")}}를 반환합니다.
- {{domxref("Blob.arrayBuffer()")}}
  - : `File`을 스트림으로 변환한 후 끝까지 읽습니다. {{domxref("ArrayBuffer")}}로 이행하는 {{jsxref("Promise")}}를 반환합니다.

## 명세

| Specification                                                                                        | Status                       | Comment            |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------ |
| {{SpecName('File API', "#file-section", "The <code>File</code> interface")}} | {{Spec2('File API')}} | Initial definition |

## 브라우저 호환성

{{Compat("api.File")}}

## 같이 보기

- [웹 애플리케이션에서 파일 사용하기](/ko/docs/Web/API/File/Using_files_from_web_applications)
- {{domxref("FileReader")}}
