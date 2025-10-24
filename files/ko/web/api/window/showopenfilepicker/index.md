---
title: "Window: showOpenFilePicker() 메서드"
short-title: showOpenFilePicker()
slug: Web/API/Window/showOpenFilePicker
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{APIRef("File System API")}}{{SecureContext_Header}}{{SeeCompatTable}}

{{domxref("Window")}} 인터페이스의 **`showOpenFilePicker()`** 메서드는
사용자가 파일 한 개 또는 여러 개를 선택할 수 있는 파일 선택창을 열고
선택한 파일들의 핸들을 반환합니다.

## 구문

```js-nolint
showOpenFilePicker()
```

### 매개변수

- `options` {{Optional_Inline}}
  - : 아래의 옵션을 포함하는 객체입니다.
    - `excludeAcceptAllOption` {{Optional_Inline}}
      - : 기본 값 `false`인 불리언입니다.
        기본적으로 파일 선택창에는 파일 유형 필터(아래의 `type` 참고)를
        적용하지 않는 옵션이 존재합니다.
        이 옵션을 `true`로 설정하면 사용자가 해당 옵션을 선택할 수 없습니다.
    - `id` {{Optional_Inline}}
      - : ID를 지정하면 브라우저가 선택창의 ID마다 마지막으로 탐색한 디렉터리를 기억합니다.
        다른 선택창에서 같은 ID를 사용한다면, 이전에 해당 ID로 탐색했던 디렉터리에서
        선택창이 열립니다.
    - `multiple` {{Optional_Inline}}
      - : 기본 값 `false`인 불리언입니다.
        `true`로 설정 시 여러 파일을 선택할 수 있습니다.
    - `startIn` {{Optional_Inline}}
      - : 선택창이 열릴 때의 최초 디렉터리를 가리키는 `FileSystemHandle`, 또는 널리 알려진 디렉터리 식별자(`"desktop"`, `"documents"`, `"downloads"`, `"music"`, `"pictures"`, 또는 `"videos"`)입니다.
    - `types` {{Optional_Inline}}
      - : 선택 가능한 파일 유형들의 {{jsxref('Array')}}입니다.
        각 요소는 아래의 옵션을 포함하는 객체입니다.
        - `description` {{Optional_Inline}}
          - : 사용 가능한 파일 유형에 대한 설명입니다. 기본 값은 빈 문자열입니다.
        - `accept`
          - : 키는 [MIME 유형](/ko/docs/Web/HTTP/Guides/MIME_types/Common_types)이고 값은 파일 확장자들의 {{jsxref('Array')}}인 {{jsxref('Object')}}입니다
            (아래 예제를 참고하세요).

### 반환 값

{{domxref('FileSystemFileHandle')}} 객체들의 {{jsxref('Array')}}로 이행하는 {{jsxref("Promise")}}.

### 예외

- `AbortError` {{domxref("DOMException")}}
  - : 사용자가 파일을 선택하지 않고 선택창을 닫았을 때, 또는 사용자 에이전트가 판단했을 때
    파일이 너무 민감하거나 위험할 때 발생합니다.
- `SecurityError` {{domxref("DOMException")}}
  - : [동일 출처 정책](/ko/docs/Web/Security/Same-origin_policy)에 의해 호출이 차단됐거나, 버튼 클릭과 같은 사용자 상호작용에 의해 호출된 것이 아니라면 발생합니다.
- {{jsxref("TypeError")}}
  - : 다음과 같은 상황에 의해 허용하는 파일 유형을 처리할 수 없으면 발생합니다.
    - `types` 옵션의 `accept` 옵션 내 어떤 키가 유효한 MIME 유형이 아닌 경우.
    - `types` 옵션의 `accept` 옵션 내 어떤 값이 유효하지 않은 경우, 예컨대 `.`로 시작하지 않거나, `.`로 끝나거나, 유효하지 않은 코드 포인트를 포함하거나, 길이가 16 초과할 때.
    - `types` 옵션이 비어있는데 `excludeAcceptAllOption` 옵션이 `true`인 경우.

## 보안

[사용자의 임시 활성화](/ko/docs/Web/Security/User_activation)가 필요합니다. 이 기능이 동작하려면 사용자가 페이지 또는 UI 요소와 상호작용해야 합니다.

## 예제

다음 코드에서는 `showOpenFilePicker()` 메서드에 전달할 옵션 객체를 정의합니다.
이미지 파일 유형을 선택할 수 있고, 모든 파일 유형 허용 옵션이나 다중 선택은
비활성화합니다.

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
```

다음으로는 파일 선택창을 열고 선택한 파일을 반환하는 비동기 함수를
생성합니다.

```js
// 파일 핸들 참조 생성
let fileHandle;

async function getFile() {
  // 파일 선택창을 열고, 반환 배열의 첫 번째 값을 가져오기 위해 구조 분해
  [fileHandle] = await window.showOpenFilePicker(pickerOpts);

  // 파일 핸들을 사용하는 코드들
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [File System API](/ko/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
