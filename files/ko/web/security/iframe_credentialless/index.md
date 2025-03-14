---
title: 무인증 IFrame
slug: Web/Security/IFrame_credentialless
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{QuickLinksWithSubpages("/ko/docs/Web/Security")}}{{SeeCompatTable}}{{Non-standard_header}}

**무인증 IFrame**은 개발자가 새로운 임시 컨텍스트를 사용하여 {{htmlelement("iframe")}}에서 타사 리소스를 로드할 수 있는 메커니즘을 제공합니다. 이는 일반 원본의 네트워크, 쿠키, 그리고 저장소 데이터에 액세스할 수 없습니다. 최상위 문서의 수명에 대해 새로운 컨텍스트 공간을 사용합니다. 그 결과 {{httpheader("Cross-Origin-Embedder-Policy")}}(COEP)가 해제될 수 있으므로 COEP가 설정된 문서는 COEP가 설정되지 않은 타사 문서를 포함할 수 있습니다.

## 문제점

다양한 웹 API 기능은 교차 출처 격리를 선택한 사이트에서만 사용할 수 있습니다. 그 예로는 {{jsxref("SharedArrayBuffer")}}와 {{domxref("DOMHighResTimeStamp", "고해상도 타이머", "", "nocode")}}가 있습니다. 그 이유는 이러한 기능들이 [스펙터 공격](https://spectreattack.com/spectre.pdf)에 악용되어 사이드 채널을 통해 피해자의 기밀 정보가 유출되고 공격자가 캡처할 수 있는 위험이 있기 때문입니다.

교차 출처 격리를 선택하려면 `same-origin`(공격자로부터 출처를 보호) 값을 갖는 {{httpheader("Cross-Origin-Opener-Policy")}}와 `credentialless`나 `require-corp`(원본으로부터 피해자를 보호) 값을 갖는 {{httpheader("Cross-Origin-Embedder-Policy")}}를 사용하여 리소스를 제공해야 합니다. 후자는 {{httpheader("Cross-Origin-Resource-Policy")}} 또는 [교차 출처 리소스 공유](/ko/docs/Web/HTTP/CORS)를 사용하여 문서에 명시적으로 권한을 부여하지 않은 인증된 교차 출처 리소스를 문서에 로드하지 못하도록 합니다.

교차 출처 격리 채택을 제한하는 핵심적인 문제는 `Cross-Origin-Embedder-Policy`가 재귀적으로 적용된다는 사실입니다. 즉, `Cross-Origin-Embedder-Policy`가 설정된 문서에 있는 `<iframe>`에 로드된 모든 타사 콘텐츠도 `Cross-Origin-Embedder-Policy`를 배포해야 콘텐츠를 성공적으로 불러올 수 있습니다. 이는 자신의 앱에 타사 콘텐츠(예: 애드 네트워크 콘텐츠)를 삽입하는 개발자가 일반적으로 이를 제어할 수 없기 때문에 문제가 되는데, 지금까지는 타사 콘텐츠 제공 업체가 `Cross-Origin-Embedder-Policy`를 구현할 때까지 기다리는 것이 유일한 선택지였습니다.

이 문제는 무인증 IFrame으로 해결할 수 있습니다.

## 해결책 - 무인증 IFrame

`<iframe>`에 [`credentialless`](/ko/docs/Web/HTML/Element/iframe#credentialless) 속성을 적용하거나 이에 상응하는 DOM 속성인 {{domxref("HTMLIFrameElement.credentialless")}}를 `true`로 설정하여 무인증 상태로 만들 수 있습니다.

```html
<iframe
  src="https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)"
  title="Spectre vulnerability Wikipedia page"
  width="960"
  height="600"
  credentialless></iframe>
```

또는

```html
<iframe width="960" height="600"> </iframe>
```

```js
const iframeElem = document.querySelector("iframe");

iframeElem.credentialless = true;
iframeElem.title = "Spectre vulnerability Wikipedia page";
iframeElem.src =
  "https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)";
```

> **참고:** `<iframe>`에 삽입된 문서가 {{domxref("window.credentialless")}} 속성을 쿼리 하여 무인증 컨텍스트에서 실행되고 있는지 테스트할 수 있습니다. 값이 `true` 이면 삽입된 `<iframe>`이 무인증 상태임을 의미합니다.

그 결과 무인증 `<iframe>` 내부의 문서는 새롭고 임시적인 컨텍스트를 사용하여 로드되며, 이러한 컨텍스트는 출처와 관련된 데이터(예: [쿠키](/ko/docs/Web/HTTP/Cookies)와 [localStorage](/ko/docs/Web/API/Window/localStorage))에 접근할 수 없습니다. 무인증 저장소는 최상위 문서 당 한 번씩 설정되는 nonce("한 번 사용된 번호") 값으로 수정된 저장소 키를 통해 개별적으로 분할됩니다. 따라서 하나의 무인증 `<iframe>`에서 설정된 쿠키는 동일한 최상위 문서 아래에 삽입된 다른 동일 출처의 무인증 `<iframe>`에서만 접근할 수 있습니다.

nonce는 동일한 최상위 문서의 하위 문서인 모든 무인증 iframe에 공유되지만, 사용자가 탐색하는 각각의 최상위 문서마다 다르며, 사용자가 탐색하던 곳을 벗어나면 저장소에 더 이상 액세스할 수 없습니다. 무인증 IFrame은 여러 페이지에서 저장 공간을 공유하지 않습니다. 위에서 언급한 쿠키로 다시 돌아가자면, 문서를 다시 로드하면 또 다른 컨텍스트에서 무인증 `<iframe>`이 로드되므로 이전에 설정한 쿠키를 사용할 수 없게 됩니다.

추가로,

- 무인증 iframe에서 열리는 팝업은 [`rel="noopener"`](/ko/docs/Web/HTML/Attributes/rel/noopener)가 설정된 상태로 열립니다. 이렇게 하면 무인증 iframe에서 OAuth 팝업 흐름이 사용되는 것을 방지할 수 있습니다.
- 무인증 `<iframes>`에서 브라우저 자동 완성 또는 비밀번호 관리자 기능을 사용할 수 없습니다.

그 결과, 무인증 `<iframe>`에 로드된 문서는 사용자의 민감한 정보로 꾸며지지 않은, 사실상 순정 또는 "공개" 버전으로 로드됩니다. 이러한 문서에서 유출될 수 있는 민감한 정보는 없기 때문에, 공격자에게 쓸모 있는 내용은 없고, 해당 IFrame에 대한 교차 출처 삽입 정책 요구 사항은 삭제됩니다.

## 하위 IFrame 내부의 재귀적 무인증

만약 `<iframe>`에 `credentialless`가 설정되어 있다면, 해당 `<iframe>`에 내장된 자식 `<iframe>`에도 `credentialless` 설정이 상속됩니다.

## 실시간 데모

[https://anonymous-iframe.glitch.me/](https://anonymous-iframe.glitch.me/) 데모를 사용하여 무인증 IFrame의 작동 방식을 확인할 수 있습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{httpheader("Cross-Origin-Opener-Policy")}}
- {{httpheader("Cross-Origin-Embedder-Policy")}}
- {{httpheader("Cross-Origin-Resource-Policy")}}
- [교차 출처 리소스 공유](/ko/docs/Web/HTTP/CORS)
- `<iframe>` [`credentialless`](/ko/docs/Web/HTML/Element/iframe#credentialless) 속성
- {{domxref("HTMLIFrameElement.credentialless")}}
