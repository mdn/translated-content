---
title: File System API
slug: Web/API/File_System_API
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{securecontext_header}}{{DefaultAPISidebar("File System API")}}{{AvailableInWorkers}}

**File System API**는 파일을 읽고, 쓰고, 관리하는 기능을 제공합니다. [**File System Access API**](https://wicg.github.io/file-system-access/) 명세에서 추가하는 기능을 통해 기기의 파일 시스템에 직접 접근할 수 있습니다.

## 개념과 사용법

File System API를 사용하여 사용자의 로컬 기기 또는 사용자가 접근 가능한 네트워크 파일 시스템의 파일과 상호작용할 수 있습니다. 이 API의 핵심 기능은 파일 읽기, 쓰기 또는 저장, 디렉터리 구조에 대한 접근입니다.

파일 및 디렉터리와의 상호작용 대부분은 핸들을 통해 진행합니다. 부모 {{domxref('FileSystemHandle')}} 클래스를 기반으로, 각각 파일과 디렉터리 핸들을 정의하는 자식 클래스인 {{domxref('FileSystemFileHandle')}}과 {{domxref('FileSystemDirectoryHandle')}} 클래스가 존재합니다.

핸들은 사용자 시스템의 어느 파일이나 디렉터리를 나타냅니다. 핸들에 접근하려면 우선 {{domxref('window.showOpenFilePicker()')}}나 {{domxref('window.showDirectoryPicker()')}} 등의 메서드를 호출해 사용자에게 파일 또는 디렉터리 선택창을 보여줘야 합니다. 사용자가 선택창을 통해 파일 또는 디렉터리를 성공적으로 선택하면 핸들이 반환됩니다.

다음 방법으로도 핸들을 얻을 수 있습니다.

- [HTML Drag and Drop API](/ko/docs/Web/API/HTML_Drag_and_Drop_API)의 {{domxref('DataTransferItem.getAsFileSystemHandle()')}} 메서드
- [File Handling API](https://developer.chrome.com/docs/capabilities/web-apis/file-handling)

각각의 핸들 종류는 자신만의 기능을 가지고 있으며, 서로 약간의 차이가 존재합니다([인터페이스](#인터페이스)에서 자세한 내용을 확인하세요). 이렇게 핸들을 얻은 후에는 파일 데이터에 접근하거나, 선택한 디렉터리의 내용물을 포함한 정보에 접근할 수 있습니다. File System API는 웹이 그동안 부족했던 파일 관련 기능을 제공합니다. 그러나 이 API의 설계에서 제일 중요한 부분은 보안이었고, 파일과 디렉터리로 데이터로의 접근은 사용자가 명시적으로 허용하지 않는 한 불가능합니다([출처 전용 파일 시스템](#출처_전용_파일_시스템)은 일반 파일 시스템과 달리 사용자가 볼 수 없으므로 예외).

> [!NOTE] 이 API의 구성 기능을 사용할 때 발생할 수 있는 예외들은 명세에 정의된 것과 동일하게 각 기능의 문서에 나열돼있습니다. 그러나 API와 운영체제 사이의 상호작용 중 발생할 수 있는 예외때문에 실제로는 상황이 좀 더 복잡합니다. [오류 매핑을 명세에 추가하자는 제안](https://github.com/whatwg/fs/issues/57)이 올라온 상태며, 이 제안에서도 오류에 대한 유용한 추가 정보를 볼 수 있습니다.

> [!NOTE] {{domxref("FileSystemHandle")}} 기반 객체는 {{domxref("IndexedDB API", "IndexedDB", "", "nocode")}} 데이터베이스 인스턴스로 직렬화할 수 있고, {{domxref("window.postMessage", "postMessage()")}}로 전송할 수도 있습니다.

### 출처 전용 파일 시스템

출처 전용 파일 시스템(Origin Private File System, OPFS)은 File System API가 제공하는 저장소 엔드포인트로, 일반 파일 시스템과 달리 사용자는 볼 수 없으며 페이지의 출처에서만 접근할 수 있습니다. OPFS는 콘텐츠의 직접 쓰기 접근을 허용하는, 고도로 성능 최적화된 특별한 유형의 파일을 제공합니다.

[출처 전용 파일 시스템](/ko/docs/Web/API/File_System_API/Origin_private_file_system) 문서에서 사용법을 알아보세요.

### 파일 저장하기

- 비동기 핸들에서는 {{domxref('FileSystemWritableFileStream')}} 인터페이스를 사용하세요. 저장할 데이터를 {{domxref('Blob')}}, {{jsxref("String")}} 객체, 문자열 리터럴, 또는 {{jsxref('ArrayBuffer')}}로 만든 후, 스트림을 열어 데이터를 파일에 저장할 수 있습니다. 대상 파일은 새로운 파일일 수도 있고 기존 파일일 수도 있습니다.
- 동기 핸들인 {{domxref('FileSystemSyncAccessHandle')}}의 경우 {{domxref('FileSystemSyncAccessHandle.write', 'write()')}} 메서드를 사용해 변경점들을 파일에 쓸 수 있습니다. 선택적으로, 특정 시점에 변경점들을 디스크에 작성해야 한다면 {{domxref('FileSystemSyncAccessHandle.flush', 'flush()')}}를 호출할 수 있습니다. (호출하지 않으면 운영체제가 적당한 시점에 처리하며 대부분의 경우 이것으로도 충분합니다)

## 인터페이스

- {{domxref("FileSystemHandle")}}
  - : 파일 또는 디렉터리 항목을 나타내는 객체입니다. 다수의 핸들이 같은 항목을 가리킬 수 있습니다. 대부분의 경우 `FileSystemHandle`을 직접 다루지 않고 자식 인터페이스인 {{domxref('FileSystemFileHandle')}}과 {{domxref('FileSystemDirectoryHandle')}}을 사용합니다.
- {{domxref("FileSystemFileHandle")}}
  - : 파일 시스템 항목에 대한 핸들을 제공합니다.
- {{domxref("FileSystemDirectoryHandle")}}
  - : 파일 시스템 디렉터리에 대한 핸들을 제공합니다.
- {{domxref("FileSystemSyncAccessHandle")}}
  - : 파일 시스템 항목에 대한 동기적 핸들을 제공합니다. 단일 파일의 데이터를 디스크에 직접 쓸 수 있는 핸들입니다. 파일 읽기와 쓰기의 동기적 작동 방식을 활용하면 비동기적 작업이 높은 오버헤드를 유발하는 [WebAssembly](/ko/docs/WebAssembly) 등의 컨텍스트에서 고성능을 유지할 수 있습니다. 이 클래스는 전용 [웹 워커](/ko/docs/Web/API/Web_Workers_API)에서만, 그리고 [출처 전용 파일 시스템](#출처_전용_파일_시스템) 내의 파일에 대해서만 사용할 수 있습니다.
- {{domxref("FileSystemWritableFileStream")}}
  - : {{domxref('WritableStream')}} 객체에 편의 메서드를 추가한 인터페이스로, 디스크의 단일 파일에서 동작합니다.

### 다른 인터페이스 확장

- {{domxref("Window.showDirectoryPicker()")}}
  - : 사용자가 디렉터리를 선택할 수 있는 디렉터리 선택창을 엽니다.
- {{domxref("Window.showOpenFilePicker()")}}
  - : 사용자가 파일 한 개 또는 여러 개를 선택할 수 있는 파일 선택창을 엽니다.
- {{domxref("Window.showSaveFilePicker()")}}
  - : 사용자가 파일을 저장할 수 있는 파일 선택창을 엽니다.
- {{domxref("DataTransferItem.getAsFileSystemHandle()")}}
  - : 드래그된 아이템이 파일이라면 {{domxref('FileSystemFileHandle')}}을, 디렉터리라면 {{domxref('FileSystemDirectoryHandle')}}을 반환합니다.
- {{domxref("StorageManager.getDirectory()")}}
  - : [출처 전용 파일 시스템](/ko/docs/Web/API/File_System_API/Origin_private_file_system)의 디렉터리와 콘텐츠에 접근할 때 사용하는 {{domxref("FileSystemDirectoryHandle")}} 객체의 참조를 가져올 때 사용합니다. {{domxref("FileSystemDirectoryHandle")}} 객체로 이행하는 {{jsxref('Promise')}}를 반환합니다.

## 예제

### 파일 접근하기

다음 코드는 사용자가 파일을 선택할 수 있는 파일 선택창을 엽니다.

```js
async function getFile() {
  // 파일 선택창을 열고 구조 분해로 첫 번째 핸들을 가져옴
  const [fileHandle] = await window.showOpenFilePicker();
  const file = await fileHandle.getFile();
  return file;
}
```

다음 비동기 함수는 파일 선택창을 열고, 사용자가 파일을 선택하면 `getFile()` 메서드를 사용해 그 파일의 내용을 가져옵니다.

```js
const pickerOpts = {
  types: [
    {
      description: "Images",
      accept: {
        "image/*": [".png", ".gif", ".jpeg", ".jpg"],
      },
    },
  ],
  excludeAcceptAllOption: true,
  multiple: false,
};

async function getTheFile() {
  // 파일 선택창을 열고 구조 분해로 첫 번째 핸들을 가져옴
  const [fileHandle] = await window.showOpenFilePicker(pickerOpts);

  // 파일 내용 가져오기
  const fileData = await fileHandle.getFile();
}
```

### 디렉터리 접근하기

다음 예제에서는 주어진 이름을 가진 디렉터리의 핸들을 가져옵니다. 주어진 이름의 디렉터리가 존재하지 않으면 생성됩니다.

```js
const dirName = "directoryToGetName";

// 'currentDirHandle'이라는 이름의 디렉터리 핸들이 이미 존재한다고 가정
const subDir = currentDirHandle.getDirectoryHandle(dirName, { create: true });
```

다음 비동기 함수는 주어진 디렉터리 핸들을 기준으로, `resolve()`를 사용해 사용자가 선택한 파일의 상대 경로를 찾습니다.

```js
async function returnPathDirectories(directoryHandle) {
  // 파일 선택창을 열어 파일 핸들 가져오기
  const [handle] = await self.showOpenFilePicker();
  if (!handle) {
    // 사용자가 취소했거나 다른 이유로 파일 열기 실패
    return;
  }

  // 위의 파일 핸들이 주어진 디렉터리 핸들 내에 위치하는지 확인
  const relativePaths = await directoryHandle.resolve(handle);

  if (relativePaths === null) {
    // 디렉터리 핸들 밖에 있음
  } else {
    // relativePaths는 상대 경로를 구성하는 경로 이름의 배열임

    for (const name of relativePaths) {
      // 각 항목 기록
      console.log(name);
    }
  }
}
```

### 파일 쓰기

다음 비동기 함수는 저장 파일 선택창을 엽니다. 저장 파일 선택창은 파일이 선택된 후 {{domxref('FileSystemFileHandle')}}을 반환합니다. 그 후 {{domxref('FileSystemFileHandle.createWritable()')}} 메서드로 쓰기 스트림을 생성할 수 있습니다.

다음으로, 스트림에 사용자의 {{domxref('Blob')}}을 쓰고, 스트림을 닫습니다.

```js
async function saveFile() {
  // 새 핸들 생성
  const newHandle = await window.showSaveFilePicker();

  // Blob을 쓸 FileSystemWritableFileStream 생성
  const writableStream = await newHandle.createWritable();

  // 파일에 쓰기
  await writableStream.write(imgBlob);

  // 파일을 닫아서 콘텐츠 쓰기가 디스크에 반영되도록 하기
  await writableStream.close();
}
```

다음 코드는 `write()` 메서드에 전달할 수 있는 다양한 옵션을 보입니다.

```js
// 옵션 없이 데이터만
writableStream.write(data);

// 스트림에 쓸 때 사전에 결정한 위치부터 시작
writableStream.write({ type: "write", position, data });

// 현재 파일 커서를 지정된 위치로 변경
writableStream.write({ type: "seek", position });

// 파일이 size 바이트 크기가 되도록 변경
writableStream.write({ type: "truncate", size });
```

### 동기적으로 OPFS 파일 읽고 쓰기

이 예제는 [출처 전용 파일 시스템](#출처_전용_파일_시스템)에서 파일을 동기적으로 읽고 쓰는 방법을 보입니다.

다음은 웹 워커 내의 비동기 이벤트 처리기 함수입니다. 메인 스레드로부터 메시지를 받으면

- 동기적 파일 접근 핸들을 생성합니다.
- 파일의 크기를 가져와서, 내용을 담을 {{jsxref("ArrayBuffer")}}를 생성합니다.
- 파일 내용을 읽어 버퍼에 넣습니다.
- 메시지를 인코딩 후 파일 끝에 붙입니다.
- 디스크에 변경점 반영 후 접근 핸들을 닫습니다.

```js
onmessage = async (e) => {
  // 메인 스크립트에서 받은 메시지 회수
  const message = e.data;

  // OPFS 파일 작성을 위한 핸들 가져오기
  const root = await navigator.storage.getDirectory();
  const draftHandle = await root.getFileHandle("draft.txt", { create: true });
  // 동기적 접근 핸들 가져오기
  const accessHandle = await draftHandle.createSyncAccessHandle();

  // 파일 크기 가져오기
  const fileSize = accessHandle.getSize();
  // 파일 내용을 버퍼에 넣기
  const buffer = new DataView(new ArrayBuffer(fileSize));
  const readBuffer = accessHandle.read(buffer, { at: 0 });

  // 메시지를 파일 끝에 붙이기
  const encoder = new TextEncoder();
  const encodedMessage = encoder.encode(message);
  const writeBuffer = accessHandle.write(encodedMessage, { at: readBuffer });

  // 디스크에 반영
  accessHandle.flush();

  // 작업 종료 후엔 항상 FileSystemSyncAccessHandle 닫아주기
  accessHandle.close();
};
```

> [!NOTE] 초기 명세에서는 {{domxref("FileSystemSyncAccessHandle.close()", "close()")}}, {{domxref("FileSystemSyncAccessHandle.flush()", "flush()")}}, {{domxref("FileSystemSyncAccessHandle.getSize()", "getSize()")}}, {{domxref("FileSystemSyncAccessHandle.truncate()", "truncate()")}}가 비동기 메서드로 정의돼 불편했습니다. [지금은 수정됐지만](https://github.com/whatwg/fs/issues/7), 일부 브라우저에서는 아직 비동기 메서드로서 제공됩니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
- [The origin private file system](https://web.dev/articles/origin-private-file-system)
