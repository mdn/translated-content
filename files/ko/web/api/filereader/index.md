---
title: FileReader
slug: Web/API/FileReader
---

{{APIRef("File API")}}

**`FileReader`** 객체는 웹 애플리케이션이 비동기적으로 데이터를 읽기 위하여 읽을 파일을 가리키는{{ domxref("File") }} 혹은 {{ domxref("Blob") }} 객체를 이용해 파일의 내용을(혹은 raw data버퍼로) 읽고 사용자의 컴퓨터에 저장하는 것을 가능하게 해줍니다.

File 객체는 {{ HTMLElement("input") }} 태그를 이용하여 유저가 선택한 파일들의 결과로 반환된 {{ domxref("FileList") }} 객체, 드래그 앤 드랍으로 반환된 [`DataTransfer`](/ko/docs/DragDrop/DataTransfer) 객체 혹은 {{ domxref("HTMLCanvasElement") }}의 `mozGetAsFile()` API로 부터 얻습니다.

## 생성자

- {{domxref("FileReader.FileReader", "FileReader()")}}
  - : Returns a newly constructed `FileReader`.

See [Using files from web applications](/ko/docs/Using_files_from_web_applications) for details and examples.

## 속성

- {{domxref("FileReader.error")}} {{readonlyinline}}
  - : {{domxref("DOMError")}} 파일을 읽는 도중에 발생한 에러를 나타냅니다.
- {{domxref("FileReader.readyState")}} {{readonlyinline}}

  - : FileReader의 상태를 나타내는 숫자입니다.

    - `EMPTY` : `0` : 아직 데이터가 로드 되지 않았음.
    - `LOADING` : `1` : 데이터가 로딩 중.
    - `DONE` : `2` : 모든 읽기 요청이 완료됨.

- {{domxref("FileReader.result")}} {{readonlyinline}}
  - : 파일의 컨텐츠입니다. 이 속성은 읽기 작업이 완료되고 읽기 작업의 초기화에 사용한 방식으로 결정된 데이터의 포맷이 정해진 후에 유효합니다.

### 이벤트 핸들러

- {{domxref("FileReader.onabort")}}
  - : {{event("abort")}} 이벤트의 핸들러. 이 이벤트는 읽기 동작이 중단 될 때마다 발생합니다.
- {{domxref("FileReader.onerror")}}
  - : {{event("error")}} 이벤트의 핸들러. 이 이벤트는 읽기 동작에 에러가 생길 때마다 발생합니다.
- {{domxref("FileReader.onload")}}
  - : {{event("load")}} 이벤트의 핸들러. 이 이벤트는 읽기 동작이 성공적으로 완료 되었을 때마다 발생합니다.
- {{domxref("FileReader.onloadstart")}}
  - : {{event("loadstart")}} 이벤트 핸들러. 이 이벤트는 읽기 동작이 실행 될 때마다 발생합니다.
- {{domxref("FileReader.onloadend")}}
  - : {{event("loadend")}} 이벤트 핸들러. 이 이벤트는 읽기 동작이 끝났을 때마다 발생합니다. (읽기의 성공이나 실패 여부는 상관 않습니다.)
- {{domxref("FileReader.onprogress")}}
  - : {{event("progress")}} 이벤트 핸들러. 이 이벤트는 {{domxref("Blob")}} 컨텐트를 읽는 동안 호출됩니다.

> **참고:** `FileReader`는 {{domxref("EventTarget")}} 으로 부터 상속 받았습니다, 언급된 모든 이벤트들은 {{domxref("EventTarget.addEventListener()","addEventListener")}} 메소드를 사용하여 listen 하게 할 수 있습니다.

## 메서드

- {{domxref("FileReader.abort()")}}
  - : 읽기 요청을 중단시킵니다. 리턴이 되면 readyState 는 DONE이 됩니다.
- {{domxref("FileReader.readAsArrayBuffer()")}}
  - : Starts reading the contents of the specified {{ domxref("Blob") }}, once finished, the `result` attribute contains an {{domxref("ArrayBuffer")}} representing the file's data.
- {{domxref("FileReader.readAsBinaryString()")}}
  - : Starts reading the contents of the specified {{ domxref("Blob") }}, once finished, the `result` attribute contains the raw binary data from the file as a string.
- {{domxref("FileReader.readAsDataURL()")}}
  - : Starts reading the contents of the specified {{ domxref("Blob") }}, once finished, the `result` attribute contains a `data:` URL representing the file's data.
- {{domxref("FileReader.readAsText()")}}
  - : Starts reading the contents of the specified {{ domxref("Blob") }}, once finished, the `result` attribute contains the contents of the file as a text string.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Using files from web applications](/en/Using_files_from_web_applications)
- {{ domxref("File") }}
- {{ domxref("Blob") }}
- [nsIDOMFileReader \[en-US\]](/ko/docs/nsIDOMFileReader) - For addons/privelaged scope
