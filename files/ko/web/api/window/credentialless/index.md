---
title: "Window: credentialless property"
short-title: credentialless
slug: Web/API/Window/credentialless
l10n:
  sourceCommit: fc763b932ad89104bcf06e3886d014a8485ad7d8
---

{{APIRef}}{{SeeCompatTable}}

**`window.credentialless`** 읽기 전용 속성은 현재 문서가 자격 증명이 없는 {{htmlelement("iframe")}} 내에서 로드되었는지 아닌지에 대한 불리언 값을 반환합니다. 이는 문서가 새롭고 일시적인 컨텍스트에서 로드된다는 것을 의미합니다.

이는 원본과 연관된 네트워크, 쿠키 혹은 데이터 저장소에 접근 권한을 가지고 있지 않습니다. 이는 최상위 문서의 생애주기 동안 로컬 컨텍스트를 사용한다는 것을 의미합니다. 그로 인해 {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) 임베딩 규칙이 완화될 수 있어, COEP가 설정된 문서가 COEP가 설정되지 않은 타 문서를 임베드할 수 있습니다.

더 자세한 설명은 [자격 증명이 없는 IFrame](/ko/docs/Web/Security/IFrame_credentialless) 를 확인하세요.

## 값

불리언 값입니다. `true` 값은 문서가 자격 증명 없는 `<iframe>` 내에서 로드되었다는 것을 의미합니다. `false` 값은 그 반대입니다.

## 예제

자격 증명이 없는 `<iframe>` 을 아래와 같이 정의할 수 있습니다.

```html
<iframe
  src="https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)"
  title="Spectre vulnerability Wikipedia page"
  width="960"
  height="600"
  credentialless></iframe>
```

이를 지원하는 브라우저에서는 `<iframe>` 내에 로드된 문서에서 아래 코드를 입력하면 `true` 를 반환합니다.

```js
console.log(window.credentialless);
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
