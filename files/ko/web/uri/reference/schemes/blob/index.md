---
title: "blob: URLs"
short-title: "blob:"
slug: Web/URI/Reference/Schemes/blob
l10n:
  sourceCommit: ca1647a3e2b77cdf9df220244998f25b86629048
---

**Blob(또는 객체) URL**은 `blob:` 스킴이 접두사로 붙은 URL로, {{domxref("Blob")}} 또는 {{domxref("MediaSource")}} 객체를 {{HTMLElement("img")}} 요소와 같이 URL 기반으로만 동작하는 다른 API와 통합할 수 있도록 해줍니다. Blob URL은 로컬에서 생성된 데이터를 탐색하거나 다운로드를 작동시키는 데에도 사용할 수 있습니다. 이 URL들은 불투명 식별자로 설계되어 있으므로 직접 작성해서 사용할 수 없으며, {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} 및 {{domxref("URL.revokeObjectURL_static", "URL.revokeObjectURL()")}} 함수를 통해 생성 및 관리해야 합니다.

Blob URL은 [데이터 URL](/ko/docs/Web/URI/Reference/Schemes/data)과 유사합니다. 두 방식 모두 메모리에 존재하는 리소스를 URL 형태로 표현할 수 있도록 한다는 공통점이 있습니다. 다만 데이터 URL은 리소스를 자체적으로 내장하며 크기 제한이 심한 반면, Blob URL은 `Blob` 또는 `MediaSource`를 기반으로 하여 더 큰 리소스를 표현할 수 있다는 차이점이 있습니다.

## 구문

```url
blob:<origin>/<uuid>
```

- `blob:`
  - : URL의 스킴 입니다.
- `<origin>`
  - : 이 URL을 생성한 [출처](/ko/docs/Web/API/URL/origin)를 나타냅니다. 생성자의 출처가 불투명한 경우, 이 부분은 구현에 따라 정의됩니다.
- `<uuid>`
  - : {{glossary("UUID")}} 입니다.

## 사용 일람

### 메모리 관리

`createObjectURL()`을 호출할 때마다, 동일한 객체에 대해 이미 생성된 URL이 있더라도 새로운 객체 URL이 생성됩니다. 이렇게 생성된 각 객체 URL은 더 이상 필요하지 않을 때 {{domxref("URL.revokeObjectURL_static", "URL.revokeObjectURL()")}}을 호출하여 반드시 해제해야 합니다. 하나의 객체 URL이라도 활성 상태로 남아 있는 동안에는 해당 객체가 가비지 컬렉션 되지 않으며, 이로 인해 메모리 누수가 발생할 수 있습니다.

브라우저는 문서가 언로드될 때 자동으로 객체 URL을 해제하지만, 최적의 성능과 메모리 사용 효율을 위해 명시적으로 안전하게 해제할 수 있는 시점이 있다면 그렇게 하는 것이 좋습니다.

하지만, 너무 이른 시점에 객체 URL을 해제하는 것은 피해야 합니다. 다음은 흔히 발생하는 잘못된 사용 예입니다.

```js example-bad
const url = URL.createObjectURL(blob);
img.src = url;
img.addEventListener("load", () => {
  URL.revokeObjectURL(url);
});
document.body.appendChild(img);
```

이미지가 렌더링된 직후 blob URL을 해제하면, 사용자가 이미지와 상호작용할 수 없게 됩니다. 예를 들어 이미지를 마우스 오른쪽 버튼으로 저장하거나 새 탭에서 여는 동작이 불가능합니다. 장시간 실행되는 애플리케이션의 경우, 리소스가 사용자에게 더 이상 접근 불가능할 때만 객체 URL을 해제해야 합니다. 예를 들어 이미지가 DOM에서 제거되었을 때 객체 URL을 해제합니다.

### 스토리지 분리

blob URL을 통한 리소스 접근은 다른 모든 저장 메커니즘과 동일한 제한을 받습니다. 즉, [상태 분리](/ko/docs/Web/Privacy/Guides/State_Partitioning)의 영향을 받습니다. blob URL은 출처가 함께 저장되어 있으며, 이는 URL 자체에 포함됩니다. 또한 저장 키가 생성 환경의 키와 일치하는 환경에서만 가져올 수 있습니다. 단, blob URL을 탐색하는 경우에는 이러한 제한이 적용되지 않습니다. 다만 브라우저는 사이트 간 Blob URL 탐색 시 [`noopener`](/ko/docs/Web/HTML/Reference/Attributes/rel/noopener)와 같은 프라이버시 보호 조치를 적용할 수 있습니다.

### 미디어 스트림에 객체 URL 사용하기

이전 버전의 미디어 자료 명세서에서는 {{HTMLElement("video")}} 요소에 스트림을 연결하기 위해 {{domxref("MediaStream")}}에 대한 객체 URL을 생성해야 했습니다. 그러나 이제는 더 이상 그럴 필요가 없으며, 브라우저에서도 이러한 방식에 대한 지원을 점차 제거하고 있습니다.

> [!WARNING]
> 여전히 `createObjectURL()`을 사용하여 미디어 요소에 스트림을 연결하는 코드가 있다면, 해당 코드를 {{domxref("HTMLMediaElement.srcObject", "srcObject")}} 속성에 `MediaStream`을 직접 설정하는 방식으로 수정해야 합니다.

### Range 헤더를 사용한 Fetch 요청

blob URL은 부분 콘텐츠 요청을 위해 [`Range`](/ko/docs/Web/HTTP/Reference/Headers/Range) 헤더를 사용하는 Fetch 요청을 지원합니다. 이 기능은 특히 대형 blob를 다룰 때 유용하며, 전체 내용을 불러오지 않고 필요한 부분만 선택적으로 가져올 수 있습니다. 예시는 [blob URL에서 범위를 지정하여 가져오기](/ko/docs/Web/HTTP/Reference/Headers/Range#fetching_a_range_from_a_blob_url) 문서를 참고하세요.

## 예시

### 유효한 blob URL

```url
blob:https://example.org/40a5fb5a-d56d-4a33-b4e2-0acf6a8e5f64
```

### blob URL 생성하기

이 예제에서는 먼저 {{HTMLElement("canvas")}} 요소로부터 {{domxref("Blob")}}을 생성하고, 그것에 대한 blob URL을 만든 뒤, 마지막으로 해당 URL을 {{HTMLElement("img")}} 요소에 연결합니다.

```js
const canvas = document.querySelector("canvas");
canvas.toBlob((blob) => {
  const img = document.createElement("img");
  img.src = URL.createObjectURL(blob);
  document.body.appendChild(img);
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [웹 어플리케이션에서 파일 사용하기](/ko/docs/Web/API/File_API/Using_files_from_web_applications)
- [객체 URL을 사용하여 이미지 표시하기](/ko/docs/Web/API/File_API/Using_files_from_web_applications#example_using_object_urls_to_display_images)
- {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}}
- {{domxref("URL.revokeObjectURL_static", "URL.revokeObjectURL()")}}
- [IANA list of URI schemes](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)
