---
title: "SharedWorker: SharedWorker() 생성자"
short-title: SharedWorker()
slug: Web/API/SharedWorker/SharedWorker
l10n:
  sourceCommit: 4f58b2f343774ccb19cb262e64c19b5ae4d6702b
---

{{APIRef("Web Workers API")}}

> [!WARNING]
> `url` 인수로 전달된 스크립트는 실행됩니다.
> 이런 API는 [주입 싱크(injection sink)](/ko/docs/Web/API/Trusted_Types_API#concepts_and_usage)로 알려져 있으며, [교차 사이트 스크립팅(XSS)](/ko/docs/Web/Security/Attacks/XSS) 공격의 경로가 될 수 있습니다.
>
> 자세한 내용은 `Worker()` 생성자의 [보안 고려사항](/ko/docs/Web/API/Worker/Worker#security_considerations)을 참고하세요.

**`SharedWorker()`** 생성자는 지정한 URL의 스크립트를 실행하는 {{domxref("SharedWorker")}} 객체를 생성합니다.

## 구문

```js
new SharedWorker(url)
new SharedWorker(url, name)
new SharedWorker(url, options)
```

### 매개변수

- `url`
  - : 워커가 실행할 스크립트 또는 모듈의 URL을 나타내는 {{domxref("TrustedScriptURL")}} 객체 또는 문자열입니다.
    호출 문서와 동일 출처이거나 `blob:` 또는 `data:` URL이어야 합니다.
    URL은 현재 HTML 페이지 위치를 기준으로 해석됩니다.
- `name` {{optional_inline}}
  - : 워커 범위를 나타내는 {{domxref("SharedWorkerGlobalScope")}}의 식별 이름을 지정하는 문자열입니다. 같은 `SharedWorker`의 새 인스턴스를 만들거나 디버깅할 때 유용합니다.
- `options` {{optional_inline}}
  - : 객체 인스턴스를 생성할 때 설정할 수 있는 옵션 속성을 담은 객체입니다.
    사용할 수 있는 속성은 다음과 같습니다.
    - `type`
      - : 생성할 워커 유형을 지정하는 문자열입니다.
        값은 `classic` 또는 `module`입니다.
        기본 값은 `classic`입니다.
    - `credentials`
      - : 브라우저가 모듈 워커로 모듈을 가져올 때 자격 증명을 전송할지 지정하는 문자열입니다.
        허용 값은 [`fetch()` 요청](/ko/docs/Web/API/RequestInit#credentials)에 전달할 수 있는 값과 동일하게 `omit`, `same-origin`, `include`입니다.
        기본 값은 `same-origin`입니다(동일 출처 요청에만 자격 증명 포함).

        이 옵션은 classic 워커에서는 무시됩니다.
    - `name`
      - : 워커 범위를 나타내는 {{domxref("SharedWorkerGlobalScope")}}의 식별 이름을 지정하는 문자열입니다.
        주로 디버깅 목적에 유용합니다.
    - `sameSiteCookies`
      - : 워커에서 어떤 [`SameSite` 쿠키](/ko/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)를 사용할 수 있는지 지정하는 문자열입니다. 다음 두 값 중 하나를 사용할 수 있습니다.
        - 'all'
          - : 워커에서 `SameSite=Strict`, `SameSite=Lax`, `SameSite=None` 쿠키를 모두 사용할 수 있습니다.
            이 옵션은 퍼스트파티 컨텍스트에서만 지원되며, 퍼스트파티 컨텍스트의 기본 값입니다.
        - 'none'
          - : 워커에서 `SameSite=None` 쿠키만 사용할 수 있습니다.
            이 옵션은 퍼스트파티/서드파티 컨텍스트 모두에서 지원되며, 서드파티 컨텍스트의 기본 값입니다.

### 예외

- `SecurityError` {{domxref("DOMException")}}
  - : 문서가 워커 시작 권한이 없거나, URL 문법이 잘못되었거나, 동일 출처 정책을 위반하거나, 지정한 컨텍스트에서 `sameSiteCookies` 값이 지원되지 않으면 발생합니다.
- `NetworkError` {{domxref("DOMException")}}
  - : 워커 스크립트의 MIME 타입이 올바르지 않으면 발생합니다. MIME 타입은 `text/javascript`여야 합니다(역사적 이유로 [다른 JavaScript MIME 타입](/ko/docs/Web/HTTP/Guides/MIME_types#textjavascript)도 허용될 수 있습니다).
- `SyntaxError` {{domxref("DOMException")}}
  - : `url`을 파싱할 수 없으면 발생합니다.
- `TypeError`
  - : [Trusted Types](/ko/docs/Web/API/Trusted_Types_API)가 [CSP에 의해 강제](/ko/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types)되고 기본 정책이 정의되지 않은 상황에서 `url` 매개변수에 문자열을 전달하면 발생합니다.

## 설명

**`SharedWorker()`** 생성자는 지정한 URL에서 classic 스크립트 또는 모듈을 실행하는 {{domxref("SharedWorker")}} 객체를 생성합니다.

스크립트는 연관된 문서와 [동일 출처](/ko/docs/Web/Security/Defenses/Same-origin_policy)여야 합니다. 단, 스크립트 내부에서 CORS 등 제한을 만족한다면 교차 출처 스크립트나 모듈을 가져올 수 있습니다.
교차 출처 워커가 필요한 경우, 중간 동일 출처 워커나 blob을 통해 로드해야 합니다.

자세한 내용은 `Worker()` 생성자의 [설명](/ko/docs/Web/API/Worker/Worker#설명)을 참고하세요.

## 예제

간결함을 위해 아래 예제에서는 [Trusted Types](/ko/docs/Web/API/Trusted_Types_API)를 사용하지 않습니다.
프로덕션 환경에서는 사용자로부터 비롯된 데이터를 주입 싱크에 전달할 때 항상 Trusted Types를 사용해야 합니다.

예제는 `Worker()` 생성자 예제의 [Trusted Types 사용](/ko/docs/Web/API/Worker/Worker#using_trusted_types)을 참고하세요.

### 기본 사용법

다음 코드 조각은 `SharedWorker()` 생성자로 {{domxref("SharedWorker")}} 객체를 생성하고, 이어서 해당 객체를 사용하는 방법을 보여 줍니다.

```js
const myWorker = new SharedWorker("worker.js");

myWorker.port.start();

[first, second].forEach((input) => {
  input.onchange = () => {
    myWorker.port.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };
});

myWorker.port.onmessage = (e) => {
  result1.textContent = e.data;
  console.log("Message received from worker");
};
```

전체 예제는 [기본 shared worker 예제](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker)와 [실행 페이지](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)를 참고하세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 이 생성자가 속한 {{domxref("SharedWorker")}} 인터페이스
