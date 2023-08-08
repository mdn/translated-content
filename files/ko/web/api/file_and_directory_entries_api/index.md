---
title: File and Directory Entries API
slug: Web/API/File_and_Directory_Entries_API
---

{{DefaultAPISidebar("File System API")}}{{Non-standard_header}}

The File and Directory Entries API는 탐색 및 파일 접근이 가능한 로컬 파일 시스템을 웹상에 시뮬레이션합니다. 이 API를 통해 당신은 읽고, 쓰고, 파일과 디렉토리를 생성할 수 있는 가상의 파일 시스템을 가진 앱을 개발할 수 있을 것입니다.

> **참고:** 이 API는 아직 표준이 아니기 때문에, 모든 브라우저가 이를 지원하지 않는 다는 점을 유념하십시오. 지원하더라도 일부 기능만을 지원할 수도 있습니다. 자세한 내용은 브라우저 호환성([Browser compatibility](#browser_compatibility)) 항목을 참조하십시오.

동기적 혹은 비동기적인 동작 중 어느 쪽을 필요로 하냐에 따라 만들어진 매우 유사한 두 개의 API가 있습니다. 동기식 API는 {{domxref("Worker")}} 내에서 사용될 수 있도록 확장되어 왔으며 당신이 원하는 값을 반환합니다. 비동기식 API는 브라우저의 동작을 방해하지 않지만 함수와 API가 값을 반환하지 않습니다; 그 대신, 당신은 콜백 함수를 이용해 언제든 응답을 처리할 수 있습니다.

> **경고:** Firefox에 내장된 File and Directory Entries API는 매우 제한적입니다; 해당 환경에서는 파일 생성을 사용할 수 없습니다. {{HTMLElement("input")}}이나 ({{domxref("HTMLInputElement")}} 도 확인하십시오) 앱이나 웹사이트에서 드래그 앤 드롭([drag and drop](/ko/docs/Web/API/HTML_Drag_and_Drop_API))을 통해 유저가 직접 선택한 파일에만 액세스 가능합니다. 또한 Firefox는 동기식 API 역시 지원하지 않습니다. API의 어떤 부분을 사용하려고 하든 반드시 브라우저 호환성을 확인하시고, Firefox에 대한 이 API의 호환성([File and Directory Entries API support in Firefox](/ko/docs/Web/API/File_and_Directory_Entries_API/Firefox_support))을 통해 더 자세하게 알아보도록 하십시오.

## 파일 시스템에 접근하기

현재로서 정의된 파일 시스템에 대한 접근 방법은 두 가지입니다:

- 드래그 앤 드롭({{domxref("HTMLElement/drop_event", "drop")}}) 이벤트를 제어함으로써, 당신은 {{domxref("DataTransferItem.webkitGetAsEntry()")}} 를 통해{{domxref("FileSystemEntry")}}에 드롭한 파일을 전달할 수 있습니다. 만일 결과가 `null`이 아니라면, 드롭한 파일 혹은 디렉토리를 파일 시스템에서 사용할 수 있을 것입니다.
- {{domxref("HTMLInputElement.webkitEntries")}} 속성은 당신이 {{domxref("FileSystemFileEntry")}} 객체에 현재 선택된 파일을 접근시킬 수 있게 하지만, 파일 선택기(File chooser)로 직접 드래그 앤 드롭한 경우에만 가능합니다. ([Firefox bug 1326031](https://bugzil.la/1326031)). 만일 {{domxref("HTMLInputElement.webkitdirectory")}}의 값을 `true`로 두었다면, 디렉토리 선택자(Directory picker) 대신 {{HTMLElement("input")}} 를 사용할 수 있고, 선택된 각 디렉토리에 대해 {{domxref("FileSystemDirectoryEntry")}} 객체로 만들 수 있습니다.

## 비동기식 API

파일 시스템 액세스가 메인 스레드에서 사용될 경우 전체 브라우저를 차단하지 않도록 대부분의 작업은 비동기 API를 이용하여야 합니다. 다음과 같은 인터페이스를 포함하고 있습니다:

- {{domxref("FileSystem")}}
  - : 파일 시스템을 나타냅니다.
- {{domxref("FileSystemEntry")}}
  - : 파일 시스템의 단일 엔트리를 의미하는 기본적인 인터페이스입니다. 이것은 파일이나 디렉토리 등을 나타내는 다른 인터페이스들에 의해 구현됩니다.
- {{domxref("FileSystemFileEntry")}}
  - : 파일 시스템 내의 단일 파일을 나타냅니다.
- {{domxref("FileSystemDirectoryEntry")}}
  - : 파일 시스템 내의 단일 디렉토리를 나타냅니다.
- {{domxref("FileSystemDirectoryReader")}}
  - : {{domxref("FileSystemDirectoryEntry.createReader()")}}를 호출함으로써 만들어지는 인터페이스이며, 디렉토리의 내용물을 읽을 수 있는 기능을 제공합니다.
- {{domxref("FileSystemFlags")}}
  - : [File and Directory Entries API](/ko/docs/Web/API/File_and_Directory_Entries_API)에서 특정 메소드를 호출할 때 옵션 플래그로 사용되는 값들의 집합을 정의합니다.
- {{DOMxRef("FileError")}} {{deprecated_inline}}
  - : 비동기 파일 시스템 호출에 의해 발생한 에러를 나타냅니다.

또한 두 개의 전역 함수가 있습니다(현재로선 명세화되지 않아 Google Chrome에만 내장되어 있습니다). {{domxref("Window")}} 객체 위에서 사용 가능하며 {{domxref("LocalFileSystem")}}에 구현되어 있습니다: 각각 `requestFileSystem()` 과 `resolveLocalFileSystemURL()`.

## 동기식 API

동기식 API는 반드시 {{domxref("Worker")}}s 안에서만 사용되어야 합니다; 이 호출들은 그들이 실행이 완료될 때 까지 브라우저의 동작을 멈추며, 콜백을 보내는 대신 단순히 결과값을 반환합니다. 이 함수들을 메인 스레드에서 사용하는 것은 브라우저의 동작을 멈출 것이며, 그것은 너무 난잡한 방식입니다. 아래의 인터페이스들은 비동기식 API와 기능적으로 거의 유사합니다.

- {{domxref("FileSystemSync")}}
  - : 파일 시스템을 나타냅니다.
- {{domxref("FileSystemEntrySync")}}
  - : 파일 시스템의 단일 엔트리를 의미하는 기본적인 인터페이스입니다. 이것은 파일이나 디렉토리 등을 나타내는 다른 인터페이스들에 의해 구현됩니다.
- {{domxref("FileSystemFileEntrySync")}}
  - : 파일 시스템 내의 단일 파일을 나타냅니다.
- {{domxref("FileSystemDirectoryEntrySync")}}
  - : 파일 시스템 내의 단일 디렉토리를 나타냅니다.
- {{domxref("FileSystemDirectoryReaderSync")}}
  - : {{domxref("FileSystemDirectoryEntrySync.createReader()")}}를 호출함으로써 만들어지는 인터페이스이며, 디렉토리의 내용물을 읽을 수 있는 기능을 제공합니다.
- {{DOMxRef("FileException")}} {{deprecated_inline}}
  - : 동기 파일 시스템 호출에 의해 발생한 에러를 나타냅니다.

또한 두 개의 전역 함수가 있습니다(현재로선 명세화되지 않아 Google Chrome에만 내장되어 있습니다). {{domxref("Worker")}} 객체 위에서 사용 가능하며 {{domxref("LocalFileSystemSync")}}에 구현되어 있습니다: 각각 `requestFileSystemSync()` 과 `resolveLocalFileSystemSyncURL()`.

## 기타 인터페이스

<dl><dt>{{domxref("LocalFileSystem")}}</dt><dd>샌드박스 파일 시스템에 접근할 수 있습니다.</dd><dt>{{domxref("LocalFileSystemSync")}}</dt><dt></dt><dt>{{domxref("LockedFile")}}</dt><dd>필요한 모든 잠금을 사용하여 주어진 파일을 처리할 수 있는 도구를 제공합니다.</dd><dt>{{domxref("Metadata")}}{{experimental_inline}}</dt></dl>

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- File and Directory Entries API 소개([Introduction to the File and Directory Entries API](/ko/docs/Web/API/File_and_Directory_Entries_API/Introduction))
- Firefox에 대한 File and Directory Etnries API의 호환성([File and Directory Entries API support in Firefox](/ko/docs/Web/API/File_and_Directory_Entries_API/Firefox_support))
