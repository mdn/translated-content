---
title: "HTML attribute: crossorigin"
slug: Web/HTML/Attributes/crossorigin
l10n:
  - sourceCommit: c831fd582259995fc7cfbc2555b41f389b1a5849
---

{{HTMLSidebar}}

**`crossorigin`** 속성은 {{HTMLElement("audio")}}, {{HTMLElement("img")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}}, {{HTMLElement("video")}} 요소에서 유효하며 [CORS](/ko/docs/Web/HTTP/CORS)를 지원하여 요소가 교차 출처 요청을 처리하는 방식을 정의 하므로 요소에서 가져온 데이터에 대한 CORS 요청을 구성할 수 있도록 합니다. 요소에 따라 해당 속성은 CORS 설정 속성일 수 있습니다.

media element의 `crossorigin` 속성은 CORS 설정 속성입니다.

이러한 속성은 [열거형](/ko/docs/Glossary/Enumerated)이며 아래의 값을 사용할 수 있습니다.

- `anonymous`
  - : 요청이 CORS 헤더를 사용하고 자격증명 플래그가 `'same-origin'`로 설정되어 있습니다. 목적지가 동일한 출처가 아니라면 쿠키, 클러아인트 측 SSL 인증서 또는 HTTP 인증을 통해 **사용자 자격 증명**을 교환하지 않습니다.
- `use-credentials`
  - : 요청이 CORS 헤더를 사용하고 자극증명 플래그가 `'include'`로 지정되고 **사용자 자격 증명**은 항상 포함됩니다.
- `""`
  - : `crossorigin` 또는 `crossorigin=""`처럼 빈 값을 할당하는건 `anonymous`와 동일합니다.

빈 문자열이나 잘못된 값일 경우 `anonymous` 와 동일하게 동작합니다.

기본적으로 (attribute를 명시하지 않으면) CORS는 전혀 사용되지 않습니다. 유저 에이전트는 리소스에 대한 전체 엑세스 권한을 요청하지 않으며 교차 출처 요청의 경우 해당 요소의 유형에 따라 특정 제한이 적용됩니다.

<table class="no-markdown">
  <tbody>
    <tr>
      <td class="header">요소</td>
      <td class="header">제한사항</td>
    </tr>
    <tr>
      <td><code>img</code>, <code>audio</code>, <code>video</code></td>
      <td>
        리소스가 {{HTMLElement("canvas")}}에 배치되면 요소는 <a href="/ko/docs/Web/HTML/CORS_enabled_image#security_and_tainted_canvases">오염된</a> 것으로 표시됩니다.
      </td>
    </tr>
    <tr>
      <td><code>script</code></td>
      <td>
        {{domxref('Window.error_event', 'window.onerror')}}를 통한 오류 로깅에 대한 접근이 제한됩니다.
      </td>
    </tr>
    <tr>
      <td><code>link</code></td>
      <td>
        적절한 <code>crossorigin</code> 헤더가 없는 요청은 삭제될 수 있습니다.
      </td>
    </tr>
  </tbody>
</table>

> **참고:** `crossorigin` 속성은 Chromium 기반 브라우저에서 [`rel="icon"`](/ko/docs/Web/HTML/Attributes/rel#icon)에 대해 지원되지 않습니다. [미해결 Chromium 이슈](https://crbug.com/1121645)를 참조하세요.

### 예시: `<script>`의 `crossorigin`

아래의 {{HTMLElement("script")}} element를 통해 브라우저로 하여금 `https://example.com/example-framework.js` 스크립트를 user-credential 없이 요청하도록 명시할 수 있습니다.

```html
<script
  src="https://example.com/example-framework.js"
  crossorigin="anonymous"></script>
```

### 예시: credentials 포함한 Webmanifest

[manifest](/ko/docs/Web/Manifest) 요청 시 credential이 필요하다면 same-origin의 리소스라 하여도 `use-credentials` 값을 사용해야 합니다.

```html
<link rel="manifest" href="/app.webmanifest" crossorigin="use-credentials" />
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 더 보기

- [교차 출처 리소스 공유 (CORS)](/ko/docs/Web/HTTP/CORS)
- [HTML 속성: `rel`](/ko/docs/Web/HTML/Attributes/rel)

{{QuickLinksWithSubpages("/ko/docs/Web/HTML/")}}
