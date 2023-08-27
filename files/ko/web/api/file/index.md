---
title: File
slug: Web/API/File
---

{{APIRef}}

**`File`** 인터페이스는 파일에 대한 정보를 제공하고, 웹 페이지가 JavaScript로 파일의 내용에 접근할 수 있는 방법을 제공합니다.

`File` 객체는 보통 {{domxref("FileList")}} 객체가 포함한 것을 사용하게 됩니다. `FileList` 객체는 사용자가 {{htmlelement("input")}} 요소로 파일을 선택한 결과 값으로, 또는 드래그 앤 드롭 작업의 {{domxref("DataTransfer")}} 객체에서 가져올 수 있습니다.

`File` 객체는 {{domxref("Blob")}}의 한 종류로, `Blob`을 사용할 수 있는 모든 맥락에서 사용할 수 있습니다. 특히 {{domxref("FileReader")}}, {{domxref("URL.createObjectURL()")}}, {{domxref("createImageBitmap()")}}, {{domxref("XMLHttpRequest", "", "send()")}}는 `Blob`과 `File`을 모두 허용합니다.

자세한 정보 및 예제는 [웹 애플리케이션에서 파일 사용하기](/ko/docs/Web/API/File/Using_files_from_web_applications)를 참고하세요.

{{InheritanceDiagram}}

## 생성자

- {{domxref("File.File", "File()")}}
  - : 새로 생성한 `File`을 반환합니다.

## 속성

- {{domxref("File.prototype.lastModified")}} {{readonlyinline}}
  - : 파일의 최종 수정 시간을 UNIX 시간(1970년 1월 1일 자정)과의 밀리초 차이로 반환합니다.
- {{domxref("File.prototype.lastModifiedDate")}} {{deprecated_inline}} {{readonlyinline}}
  - : `File` 객체가 참조하는 파일의 마지막 수정 시간을 {{jsxref("Date")}}로 반환합니다.
- {{domxref("File.prototype.name")}} {{readonlyinline}}
  - : `File` 객체가 참조하는 파일의 이름을 반환합니다.
- {{domxref("File.prototype.webkitRelativePath")}} {{non-standard_inline}} {{readonlyinline}}
  - : {{domxref("File")}}의 URL 상대경로를 반환합니다.

`File`은 {{domxref("Blob")}}을 구현하므로 다음 속성도 가집니다.

- {{domxref("File.prototype.size")}} {{readonlyinline}}
  - : `File`의 크기를 바이트 단위로 반환합니다.
- {{domxref("File.prototype.type")}} {{readonlyinline}}
  - : `File`의 [MIME 유형](/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types)을 반환합니다.

## 메서드

`File` 인터페이스는 메서드를 정의하지 않지만, {{domxref("Blob")}} 인터페이스에서 메서드를 상속합니다.

- {{domxref("Blob.prototype.slice()")}}
  - : 지정한 바이트 범위 만큼 소스 {{domxref("Blob")}}의 데이터를 복사한 새로운 `Blob` 객체를 반환합니다.
- {{domxref("Blob.prototype.stream()")}}
  - : `File`을 {{domxref("ReadableStream")}}으로 변환합니다. `ReadableStream`은 파일 내용을 읽을 때 사용할 수 있습니다.
- {{domxref("Blob.prototype.text()")}}
  - : `File`을 스트림으로 변환한 후 끝까지 읽습니다. 문자열로 이행하는 {{jsxref("Promise")}}를 반환합니다.
- {{domxref("Blob.prototype.arrayBuffer()")}}
  - : `File`을 스트림으로 변환한 후 끝까지 읽습니다. {{jsxref("ArrayBuffer")}}로 이행하는 {{jsxref("Promise")}}를 반환합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [웹 애플리케이션에서 파일 사용하기](/ko/docs/Web/API/File/Using_files_from_web_applications)
- {{domxref("FileReader")}}
