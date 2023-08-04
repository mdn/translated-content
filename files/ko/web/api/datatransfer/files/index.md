---
title: "DataTransfer: files 속성"
short-title: files
slug: Web/API/DataTransfer/files
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("HTML Drag and Drop API")}}

[`DataTransfer`](/ko/docs/Web/API/DataTransfer) 객체의 **`files`** 속성은 드래그 작업에서의 {{domxref("FileList","파일 목록")}}입니다. 작업에 파일이 없으면 목록은 비어 있습니다.

이 기능은 사용자의 데스크탑에서 브라우저로 파일을 드래그하기 위해 사용될 수 있습니다.

> **참고:** [`DataTransfer`](/ko/docs/Web/API/DataTransfer) 객체의 `files` 속성은 `drop` 이벤트 내에서만 접근될 수 있습니다. 모든 다른 이벤트의 경우 기본 데이터 저장소가 [보호 모드](https://html.spec.whatwg.org/multipage/dnd.html#the-drag-data-store)이기 때문에 `files` 속성은 비어 있을 것입니다.

## 값

드래그 작업에서 파일의 {{domxref("FileList","목록")}}으로 작업의 각 파일은 하나의 목록 항목입니다. 드래그 작업에 파일이 없으면 목록은 비어 있습니다.

## 예제

이 인터페이스에는 두 가지 실제 예제가 있습니다.

- Firefox: <https://jsfiddle.net/9C2EF/>
- 모든 브라우저: [https://jsbin.com/hiqasek/](https://jsbin.com/hiqasek/edit?html,js,output)

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
