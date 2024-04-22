---
title: "HTML attribute: crossorigin"
slug: Web/HTML/Attributes/crossorigin
---

{{ HTMLElement("audio") }}, {{ HTMLElement("img") }}, {{ HTMLElement("link") }}, {{ HTMLElement("script") }}, {{ HTMLElement("video") }}에 있는 crossOrigin 속성은 element가 CORS 요청을 처리하는 방식을 명시하여 element가 fetch한 데이터를 [CORS](/ko/docs/Web/HTTP/CORS) 가능하게 합니다. 특정 element에서는 CORS 세팅 속성이 될 수도 있습니다.

Media element의 `crossorigin` 속성은 CORS 세팅입니다.

세팅 속성은 열거형이며 아래의 값을 가질 수 있습니다:

| Keyword           | Description                                                                          |
| ----------------- | ------------------------------------------------------------------------------------ |
| `anonymous`       | element의 CORS 요청의 credentials flag가 'same-origin'으로 지정됩니다.               |
| `use-credentials` | element의 CORS 요청의 crendentials flag가 'include'로 지정됩니다.                    |
| `""`              | `crossorigin` 또는 `crossorigin=""`처럼 빈 값을 할당하는건 `anonymous`와 동일합니다. |

기본적으로 (attribute를 명시하지 않으면) CORS 요청은 할 수 없습니다. "anonymous" 키워드는 쿠키를 통한 **user credentials** 교환이 필요 없음을 의미합니다. Same origin이 아닌 경우 client-side SSL certificates/HTTP 인증은 [Terminology section of the CORS specification](http://www.w3.org/TR/cors/#user-credentials)에서 기술하고 있습니다.

빈 문자열이나 잘못된 값일 경우 `anonymous` 와 동일하게 동작합니다.

### 예시: script element의 crossorigin

아래의 {{HTMLElement("script")}} element를 통해 브라우저로 하여금 `https://example.com/example-framework.js` 스크립트를 user-credential 없이 요청하도록 명시할 수 있습니다.

```html
<script
  src="https://example.com/example-framework.js"
  crossorigin="anonymous"></script>
```

### 예시: credential 포함한 Webmanifest

[Manifest](/ko/docs/Web/Manifest) 요청 시 credential이 필요하다면 same-origin의 리소스라 하여도 `use-credentials` 값을 사용해야 합니다.

```html
<link rel="manifest" href="/app.webmanifest" crossorigin="use-credentials" />
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 더 보기

- [Cross-Origin Resource Sharing (CORS)](/ko/docs/Web/HTTP/CORS)
- [HTML attribute: `rel`](/ko/docs/Web/HTML/Attributes/rel)

{{QuickLinksWithSubpages("/ko/docs/Web/HTML/")}}
