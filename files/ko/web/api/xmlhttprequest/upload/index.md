---
title: XMLHttpRequest.upload
slug: Web/API/XMLHttpRequest/upload
---

{{APIRef('XMLHttpRequest')}}

{{domxref("XMLHttpRequest")}} `upload` 프로퍼티는 업로드 진행 상황을 모니터링 할 수 있는 {{domxref("XMLHttpRequestUpload")}} 객체를 반환합니다. 불투명한 객체(opaque object)이지만 {{domxref("XMLHttpRequestEventTarget")}} 이기도 하기 때문에 이벤트 리스너를 연결하여 프로세스를 추적할 수 있습니다.

upload 이벤트에서 다음 이벤트가 트리거되어 업로드를 모니터링하는데 사용할 수 있습니다.

| Event                  | Event listener                                           | Description                                                                                                                                                                                                                       |
| ---------------------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{event("loadstart")}} | {{domxref("XMLHttpRequest.onloadstart", "onloadstart")}} | 업로드가 시작되었습니다.                                                                                                                                                                                                          |
| {{event("progress")}}  | {{domxref("XMLHttpRequest.onprogress", "onprogress")}}   | 지금까지 진행된 상태를 정기적으로 제공합니다.                                                                                                                                                                                     |
| {{event("abort")}}     | {{domxref("XMLHttpRequest.onabort", "onabort")}}         | 업로드가 중단되었습니다.                                                                                                                                                                                                          |
| {{event("error")}}     | {{domxref("XMLHttpRequest.onerror", "onerror")}}         | 에러로 인해 업로드에 실패했습니다.                                                                                                                                                                                                |
| {{event("load")}}      | {{domxref("XMLHttpRequest.onload", "onload")}}           | 업로드가 성공적으로 완료되었습니다.                                                                                                                                                                                               |
| {{event("timeout")}}   | {{domxref("XMLHttpRequest.ontimeout", "ontimeout")}}     | {{domxref("XMLHttpRequest.timeout")}}에 명시되어 있는 시간 간격 내에 응답이 도착하지 않아, 업로드 시간이 초과되었습니다.                                                                                                          |
| {{event("loadend")}}   | {{domxref("XMLHttpRequest.onloadend", "onloadend")}}     | 업로드가 완료되었습니다. 이 이벤트는 성공과 실패를 구분하지 않고 결과에 관계없이 업로드가 끝나면 전송됩니다. 이 이벤트 발생 이전에는 전송이 종료된 이유를 나타내기 위해 `load`, `error`, `abort`, `timeout` 중 하나를 전달합니다. |

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [Using XMLHttpRequest](/ko/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [FileHandle API](/ko/docs/Web/API/File_Handle_API)
- [File and Directory Entries API](/ko/docs/Web/API/File_and_Directory_Entries_API)
