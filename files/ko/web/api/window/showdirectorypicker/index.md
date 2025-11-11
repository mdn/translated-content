---
title: "Window: showDirectoryPicker() 메서드"
short-title: showDirectoryPicker()
slug: Web/API/Window/showDirectoryPicker
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{APIRef("File System API")}}{{Securecontext_Header}}{{SeeCompatTable}}

{{domxref("Window")}} 인터페이스의 **`showDirectoryPicker()`** 메서드는
사용자가 디렉터리 한 개를 선택할 수 있는
디렉터리 선택창을 엽니다.

## 구문

```js-nolint
showDirectoryPicker()
```

### 매개변수

- `options` {{optional_inline}}
  - : 아래의 옵션을 포함하는 객체입니다.
    - `id` {{optional_inline}}
      - : ID를 지정하면 브라우저가 선택창의 ID마다 마지막으로 탐색한 디렉터리를 기억합니다.
        다른 선택창에서 같은 ID를 사용한다면, 이전에 해당 ID로 탐색했던 디렉터리에서
        선택창이 열립니다.
    - `mode` {{optional_inline}}
      - : 디렉터리에 대한 읽기 전용 접근 시 `"read"`, 읽기와 쓰기 모두 가능한 접근 시 `"readwrite"`이어야 합니다.
        기본 값은 `"read"`입니다.
    - `startIn` {{optional_inline}}
      - : 선택창이 열릴 때의 최초 디렉터리를 가리키는 `FileSystemHandle`, 또는 널리 알려진 디렉터리 식별자(`"desktop"`, `"documents"`, `"downloads"`, `"music"`, `"pictures"`, 또는 `"videos"`)입니다.

### 반환 값

{{domxref('FileSystemDirectoryHandle')}} 객체로 이행하는 {{jsxref("Promise")}}.

### 예외

- `AbortError` {{domxref("DOMException")}}
  - : 사용자가 디렉터리를 선택하지 않고 선택창을 닫았을 때,
    사용자 에이전트가 판단했을 때 디렉터리가 너무 민감하거나 위험할 때, 또는 지정한 `mode` 옵션에 대해
    선택한 디렉터리의 {{domxref('PermissionStatus.state')}}가 `"granted"`가 아닐 때 발생합니다.
- `SecurityError` {{domxref("DOMException")}}
  - : [동일 출처 정책](/ko/docs/Web/Security/Same-origin_policy)에 의해 호출이 차단됐거나, 버튼 클릭과 같은 사용자 상호작용에 의해 호출된 것이 아니라면 발생합니다.

## 보안

[사용자의 임시 활성화](/ko/docs/Web/Security/User_activation)가 필요합니다. 이 기능이 동작하려면 사용자가 페이지 또는 UI 요소와 상호작용해야 합니다.

## 예제

다음 비동기 함수는 디렉터리 선택창을 열고, 사용자가 디렉터리를 선택한 후에
{{domxref('FileSystemDirectoryHandle')}}를 반환합니다.

```js
async function getDir() {
  const dirHandle = await window.showDirectoryPicker();

  // dirHandle을 사용하는 코드들
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [File System API](/ko/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
