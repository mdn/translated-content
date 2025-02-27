---
title: Cross-Origin-Embedder-Policy
slug: Web/HTTP/Headers/Cross-Origin-Embedder-Policy
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`Cross-Origin-Embedder-Policy`** (COEP) 응답 헤더는 문서에 교차 출처 리소스를 포함하도록 구성합니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">헤더 유형</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## 구문

```http
Cross-Origin-Embedder-Policy: unsafe-none | require-corp | credentialless
```

### 지시어

- `unsafe-none`
  - : 기본값입니다. 문서가 CORS 프로토콜 또는 {{HTTPHeader("Cross-Origin-Resource-Policy")}} 헤더를 통해 명시적인 권한을 부여하지 않고도 교차 출처 리소스를 가져올 수 있도록 허용합니다.
- `require-corp`
  - : 문서는 동일한 출처의 리소스 또는 다른 출처에서 불러오기 가능한 것으로 명시적으로 표시된 리소스만 불러올 수 있습니다. 교차 출처 리소스가 CORS를 지원하는 경우, COEP에 의해 차단되지 않고 불러오려면 [`crossorigin`](/ko/docs/Web/HTML/Attributes/crossorigin) 속성 또는 {{HTTPHeader("Cross-Origin-Resource-Policy")}} 헤더를 사용해야 합니다.
- `credentialless` {{Experimental_Inline}}
  - : [no-cors](/ko/docs/Web/API/Request/mode) 교차 출처 요청은 자격 증명 없이 전송됩니다. 특히 요청에서 쿠키가 생략되고 응답에서 쿠키가 무시됩니다. 응답은 {{HTTPHeader("Cross-Origin-Resource-Policy")}} 헤더를 통해 명시적인 권한 **없이** 허용됩니다. [Navigate](/ko/docs/Web/API/Request/mode) 응답은 `require-corp` 모드와 유사하게 작동합니다. {{HTTPHeader("Cross-Origin-Resource-Policy")}} 응답 헤더가 필요합니다.

## 예제

### 특정 기능은 교차 출처 격리에 따라 달라집니다

문서에 `require-corp` 또는 `credentialless` 값이 설정된 COEP 헤더가 있는 경우, 스로틀링되지 않은 타이머를 사용하여 {{jsxref("SharedArrayBuffer")}} 객체나 {{domxref("Performance.now()")}} 같은 특정 기능에만 접근할 수 있습니다.

```http
Cross-Origin-Embedder-Policy: require-corp
Cross-Origin-Opener-Policy: same-origin
```

설정해야 하는 {{HTTPHeader("Cross-Origin-Opener-Policy")}} 헤더도 참조하세요.

[`crossOriginIsolated`](/ko/docs/Web/API/Window/crossOriginIsolated)가 성공했는지 확인하려면 창 및 작업자 컨텍스트에서 사용할 수 있는 crossOriginIsolated 속성에 대해 테스트하면 됩니다.

```js
const myWorker = new Worker("worker.js");

if (crossOriginIsolated) {
  const buffer = new SharedArrayBuffer(16);
  myWorker.postMessage(buffer);
} else {
  const buffer = new ArrayBuffer(16);
  myWorker.postMessage(buffer);
}
```

### CORS를 통한 COEP 차단 방지

`require-corp`를 사용하여 COEP를 활성화하고 불러와야 하는 교차 출처 리소스가 있는 경우, 해당 리소스는 [CORS](/ko/docs/Web/HTTP/CORS)를 지원해야 하며 다른 출처에서 불러올 수 있는 것으로 명시적으로 표시해야 COEP의 차단을 방지할 수 있습니다. 예를 들어 타사 사이트의 이 이미지에 [`crossorigin`](/ko/docs/Web/HTML/Attributes/crossorigin) 속성을 사용할 수 있습니다.

```html
<img src="https://thirdparty.com/img.png" crossorigin />
```

일부 이미지에 대해 CORS가 지원되지 않는 경우, 쿠키 없이 요청하는 대신 교차 출처 서버에서 명시적인 동의 없이 이미지를 불러오는 대안으로 `credentialless` COEP 값을 사용할 수 있습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{httpheader("Cross-Origin-Opener-Policy")}}
