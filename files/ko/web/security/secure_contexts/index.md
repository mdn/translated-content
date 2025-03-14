---
title: 보안 컨텍스트
slug: Web/Security/Secure_Contexts
l10n:
  sourceCommit: 199c317d91bf506a81a6f68f53d6c63499651dff
---

{{QuickLinksWithSubpages("/ko/docs/Web/Security")}}

**보안 컨텍스트**는 특정한 최소 인증 및 기밀성 표준이 충족되는 `Window` 또는 `Worker`입니다. 많은 웹 API와 기능들은 보안 컨텍스트에서만 액세스할 수 있습니다. 보안 컨텍스트의 주요 목표는 [MITM 공격자](https://en.wikipedia.org/wiki/Man-in-the-middle_attack)가 공격의 피해자를 추가로 손상시킬 수 있는 강력한 API에 접근하지 못하도록 방지하는 것입니다.

## 왜 일부 기능을 제한해야하나요?

웹의 일부 API는 매우 강력하여 공격자가 다음과 같은 작업을 수행할 수 있습니다.

- 사용자의 프라이버시 침해
- 사용자 컴퓨터에 대한 저수준 엑세스 권한을 얻음
- 사용자 자격 증명과 같은 데이터에 대한 액세스 권한을 얻음

## 컨텍스트는 언제 안전한가요?

컨텍스트는 [보안 컨텍스트](https://w3c.github.io/webappsec-secure-contexts/) 명세서에 정의된 특정한 최소 인증 및 기밀성 표준을 충족할 때 안전하다고 간주됩니다. 특정 문서는 보안 컨텍스트인 [최상위 브라우징 컨텍스트](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context)(창 또는 탭)의 [활성 문서](https://html.spec.whatwg.org/multipage/browsers.html#active-document)일 때 보안 컨텍스트에 있는 것으로 간주됩니다.

예를 들어 {{HTMLElement("iframe")}} 내에서 TLS를 통해 전달된 문서의 경우에도 TLS를 통해 전달되지 **않은** 상위 항목이 있는 경우 해당 컨텍스트는 안전한 것으로 간주되지 않습니다.

그러나 비(非)보안 컨텍스트로 인해 새 창이 생성되는 경우([noopener](/ko/docs/Web/API/Window/open)를 지정하거나 지정하지 않고), 오프너가 안전하지 않다는 사실은 새 창이 안전한 것으로 간주되는것에 영향을 미치지 않는다는 점에 유의해야 합니다. 특정 문서가 보안 컨텍스트에 있는지 여부를 결정하는 것은 비보안 컨텍스트가 문서를 만들었는지가 아니라 연결된 최상위 브라우징 컨텍스트 내에서만 고려하기 때문입니다.

`http://127.0.0.1` URL, `http://localhost` 및 `http://*.localhost` URL(예: `http://dev.whatever.localhost/`) 그리고 `file://`과 같은 로컬에서 제공된 리소스도 안전하게 전달된 것으로 간주됩니다.

> [!NOTE]
> Firefox 84 이상에서는 `http://localhost`와 `http://*.localhost` URL을 신뢰할 수 있는 원본으로 지원합니다(`localhost`가 로컬/루프백 주소로 매핑되는 것이 보장되지 않았기 때문에 이전 버전에서는 지원하지 않음).

로컬이 아닌 리소스가 안전한 것으로 간주되려면 다음 기준을 충족해야 합니다.

- `https://` 또는 `wss://` URL을 통해 제공되어야 한다.
- 리소스를 전달하는 데 사용되는 네트워크 채널의 보안 속성이 더 이상 사용되지 않는(deprecated) 것이 아니어야 한다.

## 기능 감지

페이지는 전역 스코프에 있는 {{domxref("isSecureContext")}} 불리언 값을 사용하여 보안 컨텍스트에 있는지 여부를 확인하기 위해 기능 감지를 사용할 수 있습니다.

```js
if (window.isSecureContext) {
  // 페이지는 보안 컨텍스트이므로 이제 서비스 워커를 사용할 수 있습니다.
  navigator.serviceWorker.register("/offline-worker.js").then(() => {
    // …
  });
}
```

## 명세서

{{Specifications}}

## 같이 보기

- [보안 컨텍스트로 제한된 플랫폼 기능](/ko/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) — 보안 컨텍스트에서만 사용할 수 있는 기능 목록
- {{domxref("isSecureContext")}}
- <https://permission.site> — HTTP 및 HTTPS를 통해 브라우저가 사용하는 API 권한 검사를 확인할 수 있는 사이트
- [Strict-Transport-Security](/ko/docs/Web/HTTP/Headers/Strict-Transport-Security) HTTP 헤더
