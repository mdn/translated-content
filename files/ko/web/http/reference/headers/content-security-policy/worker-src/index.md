---
title: "CSP: worker-src"
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/worker-src
original_slug: Web/HTTP/Headers/Content-Security-Policy/worker-src
l10n:
  sourceCommit: 45c7ae13178203b4ee58842efbe2a27deab274a6
---

HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`worker-src`** 지시문은 {{domxref("Worker")}}, {{domxref("SharedWorker")}}, 또는 {{domxref("ServiceWorker")}}의 유효한 스크립트 소스를 지정합니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP 버전</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">지시 형식</th>
      <td>{{Glossary("Fetch directive")}}</td>
    </tr>
    <tr>
      <th scope="row">대비책</th>
      <td>
        <p>
          이 지시문이 없으면 사용자 에이전트는 먼저 {{CSP("child-src")}} 지시문을 찾은 다음 {{CSP("script-src")}} 지시문을 찾고, 마지막으로 {{CSP("default-src")}} 지시문을 찾습니다.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## 구문

`worker-src` 정책에 대해 하나 이상의 소스를 허용할 수 있습니다.

```http
Content-Security-Policy: worker-src <source>;
Content-Security-Policy: worker-src <source> <source>;
```

### 소스

`<source>`는 [CSP Source Values](/ko/docs/Web/HTTP/Headers/Content-Security-Policy#fetch_directive_syntax#%ec%86%8c%ec%8a%a4)에 나열된 값 중 하나입니다.

이 값은 모든 {{Glossary("fetch directive", "fetch 지시문")}} 및 [기타 여러 지시문](/ko/docs/Web/HTTP/Headers/Content-Security-Policy#fetch_directive_syntax#%ea%b4%80%eb%a0%a8_%ec%a7%80%ec%8b%9c%eb%ac%b8)에서 사용할 수 있습니다.

## 예제

### 위반 사례

주어진 CSP 해더가 다음과 같다면

```http
Content-Security-Policy: worker-src https://example.com/
```

아래에서 {{domxref("Worker")}}, {{domxref("SharedWorker")}}, {{domxref("ServiceWorker")}}는 차단되어 로드되지 않습니다.

```html
<script>
  let blockedWorker = new Worker("data:application/javascript,…");
  blockedWorker = new SharedWorker("https://not-example.com/");
  navigator.serviceWorker.register("https://not-example.com/sw.js");
</script>
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTTPHeader("Content-Security-Policy")}}
- [웹 워커를 위한 CSP](/ko/docs/Web/API/Web_Workers_API/Using_web_workers#content_security_policy)
- {{domxref("Worker")}}, {{domxref("SharedWorker")}}, {{domxref("ServiceWorker")}}
