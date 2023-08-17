---
title: 동일 출처 정책
slug: Web/Security/Same-origin_policy
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{QuickLinksWithSubpages("/ko/docs/Web/Security")}}

**동일 출처 정책**은 어떤 {{Glossary("origin", "출처")}}에서 불러온 문서나 스크립트가 다른 출처에서 가져온 리소스와 상호 작용할 수 있는 방법을 제한하는 중요한 보안 메커니즘입니다.

잠재적 악성 문서를 격리하여 가능한 공격 벡터를 줄이는 데 도움이 됩니다. 예를 들어 인터넷의 악의적인 웹사이트가 브라우저에서 JS를 실행하여 (사용자가 로그인 한) 타사 웹메일 서비스나 회사 인트라넷(공용 IP 주소가 없어 공격자의 직접적인 접근으로부터 보호)에서 데이터를 읽고 공격자에게 전달하는 것을 방지합니다.

## 출처 정의

{{glossary("protocol", "프로토콜")}}, {{glossary("port", "포트")}}(명시된 경우), 그리고 {{glossary("host", "호스트")}}가 같은 경우 두 URL은 동일한 출처를 가집니다. 이것을 "스키마/호스트/포트 튜플" 또는 그냥 "튜플"로 참조되는 것을 볼 수도 있을겁니다. ("튜플"은 함께 전체를 구성하는 항목 집합입니다. 이중/삼중/사중/오중 등의 일반적인 형식입니다.)

아래 표는 URL `http://store.company.com/dir/page.html`의 출처를 비교한 예시입니다.

| URL                                               | 결과      | 이유                                        |
| ------------------------------------------------- | --------- | ------------------------------------------- | --- |
| `http://store.company.com/dir2/other.html`        | 동일 출처 | 경로만 다름                                 |
| `http://store.company.com/dir/inner/another.html` | 동일 출처 | 경로만 다름                                 |
| `https://store.company.com/page.html`             | 실패      | 다른 프로토콜                               |
| `http://store.company.com:81/dir/page.html`       | 실패      | 다른 포트 (`http://` 는 기본적으로 80 포트) |
| `http://news.company.com/dir/page.html`           | 실패      | 다른 호스트                                 |     |

### 출처 상속

`about:blank` 또는 `javascript:` URL이 있는 페이지에서 실행된 스크립트는 해당 URL이 포함된 문서의 출처를 상속합니다. 이러한 유형의 URL에는 원본 서버에 대한 정보가 포함되어 있지 않기 때문입니다.

예를 들어 `about:blank`는 부모 스크립트가 내용을 작성하는(예: {{domxref("Window.open()")}} 메커니즘을 통해) 비어 있는 새 팝업 창의 URL로 자주 사용됩니다. 이 팝업에도 JavaScript가 포함되어 있다면 해당 스크립트는 팝업을 생성한 스크립트와 같은 출처를 상속합니다.

`data:` URL은 새로운 빈 보안 컨텍스트를 받습니다.

### 파일 출처

최신 브라우저는 일반적으로 `file:///` 스키마를 사용하여 로드된 파일의 출처를 불투명한 출처로 취급합니다.
이는 파일에 동일한 폴더(예시로)에 있는 다른 파일이 포함된 경우, 같은 출처에서 온 것으로 간주되지 않으며 {{Glossary("CORS")}} 오류가 발생할 수 있다는 것을 뜻합니다.

[URL 사양](https://url.spec.whatwg.org/#origin)에 따르면 파일의 출처는 구현에 따라 다르며 일부 브라우저는 [보안에 영향](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730)을 미치더라도 같은 디렉토리 또는 하위 디렉토리에 있는 파일을 동일한 출처로 취급할 수 있습니다.

## 출처 변경

> **경고:** 여기에 설명된 접근 방식({{domxref("document.domain")}} setter 사용)은 동일 출처 정책에서 제공하는 보안 보호를 약화시키고 브라우저의 출처 모델을 복잡하게 하여 상호 운용성 문제와 보안 버그로 이어지기 때문에 더 이상 권장되지 않습니다.

페이지는 일부 제한 사항과 함께 자신의 출처를 변경할 수 있습니다. 스크립트는 {{domxref("document.domain")}}의 값을 현재 도메인 또는 현재 도메인의 상위 도메인으로 설정할 수 있습니다. 현재 도메인의 상위 도메인으로 설정하면 더 짧은 상위 도메인이 동일 출처 검사에 사용됩니다.

예를 들어 `http://store.company.com/dir/other.html`에 있는 문서의 스크립트가 다음을 실행한다고 가정해보겠습니다.

```js
document.domain = "company.com";
```

그런 다음, 페이지는 `http://company.com/dir/page.html`과의 동일 출처 검사를 통과할 수 있습니다. (`http://company.com/dir/page.html` 이를 표시하기 위해 `document.domain`을 `"company.com"`으로 설정한다고 가정합니다. 자세한 내용은 {{domxref("document.domain")}}을 참조하십시오.) 그러나 `othercompany.com`은 `company.com`의 상위 도메인이 아니므로 `company.com`에서 `document.domain`을 `othercompany.com`으로 설정할 수 **없습니다**.

포트 번호는 브라우저에서 별도로 확인합니다. `document.domain = document.domain`을 포함하여 어떤 방식으로든 `document.domain`을 호출하면 포트 번호가 `null`로 덮어쓰입니다. 따라서 처음 대상에만 `document.domain = "company.com"`을 설정하면 `company.com:8080`은 `company.com`과 통신할 수 없습니다. 포트 번호가 모두 `null`이 되도록 둘 다 설정해 줘야 합니다.

이 메커니즘에는 몇 가지 제한 사항이 있습니다. 예를 들어 [`document-domain`](/ko/docs/Web/HTTP/Headers/Permissions-Policy/document-domain) [`Permissions-Policy`](/ko/docs/Web/HTTP/Headers/Permissions-Policy)가 활성화되었거나, 문서가 샌드박스된 [`<iframe>`](/ko/docs/Web/HTML/Element/iframe)에 있는 경우 "`SecurityError`" [`DOMException`](/ko/docs/Web/API/DOMException)이 발생하며, 이러한 방식으로 출처를 변경하더라도 많은 Web API에서 사용되는 출처 확인에는 영향을 미치지 않습니다. (예: [`localStorage`](/ko/docs/Web/API/Window/localStorage), [`indexedDB`](/ko/docs/Web/API/IndexedDB_API), [`BroadcastChannel`](/ko/docs/Web/API/BroadcastChannel), [`SharedWorker`](/ko/docs/Web/API/SharedWorker)). 실패 사례의 전체 목록은 [Document.domain > Failures](/ko/docs/Web/API/Document/domain#failures)에서 찾을 수 있습니다.

> **참고:** 하위 도메인이 상위 도메인에 액세스하도록 허용하기 위해 `document.domain`을 사용하는 경우 상위 도메인과 하위 도메인 모두에서 `document.domain`을 같은 값으로 설정해야 합니다. 이는 상위 도메인을 원래 값으로 다시 설정하는 경우에도 필요합니다. 이렇게 하지 않으면 권한 오류가 발생할 수 있습니다.

## 교차 출처 네트워크 접근

동일 출처 정책은 {{domxref("XMLHttpRequest")}}이나 {{htmlelement("img")}} 요소를 사용하는 경우와 같이 서로 다른 두 출처 간의 상호 작용을 제어합니다. 이러한 상호 작용은 일반적으로 세 가지 범주로 분류됩니다.

- 교차 출처 쓰기는 보통 허용합니다. 예시로는 링크, 리다이렉트, 그리고 양식 제출 등이 있습니다. 일부 HTTP 요청은 [프리플라이트](/ko/docs/Web/HTTP/CORS#Preflighted_requests)를 요구합니다.
- 교차 출처 삽입은 보통 허용합니다. (예시는 아래에 있습니다.)
- 교차 출처 읽기는 보통 허용하지 않지만, 종종 교차 출처 삽입 과정에서 읽기 권한이 누출됩니다. 예를 들어 삽입된 이미지의 크기, 삽입된 스크립트의 작업, 또는 [삽입된 리소스의 가용성](https://bugzil.la/629094)을 읽을 수 있습니다.

다음은 교차 출처로 삽입할 수 있는 리소스의 일부 예시입니다.

- `<script src="…"></script>`를 사용하는 JavaScript. 구문 오류에 대한 오류 세부 정보는 동일 출처 스크립트에서만 사용할 수 있습니다.
- `<link rel="stylesheet" href="…">`로 적용된 CSS. CSS의 완화된 구문 규칙으로 인해 교차 출처 CSS에는 올바른 `Content-Type` 헤더가 요구됩니다. 브라우저는 MIME 유형이 올바르지 않고 리소스가 유효한 CSS 구성으로 시작하지 않는 교차 출처 로드인 경우 스타일시트 로드를 차단합니다.
- {{htmlelement("img")}}로 표시하는 이미지.
- {{htmlelement("video")}}와 {{htmlelement("audio")}}로 재생하는 미디어.
- {{htmlelement("object")}}와 {{htmlelement("embed")}}로 삽입하는 외부 리소스.
- {{cssxref("@font-face")}}로 적용하는 글꼴. 일부 브라우저는 교차 충처를 허용하지만, 다른 브라우드는 동일 출처를 요구할 수도 있습니다.
- {{htmlelement("iframe")}}으로 삽입하는 모든 것. 사이트는 {{httpheader("X-Frame-Options")}} 헤더를 사용하여 출처 간 프레이밍을 방지할 수 있습니다.

### 교차 출처 접근을 허용하는 방법

[CORS](/ko/docs/Web/HTTP/CORS)를 사용하여 교차 출처의 접근를 허용합니다. CORS는 서버가 브라우저에 콘텐츠 로드를 허용하는 다른 호스트를 지정할 수 있도록 하는 {{Glossary("HTTP")}}의 일부입니다.

### 교차 출처 접근을 막는 방법

- 교차 출처 쓰기를 방지하려면 [CSRF(Cross-Site Request Forgery)](https://owasp.org/www-community/attacks/csrf) 토큰이라고 하는 요청에서 추측할 수 없는 토큰을 확인하십시오. 이 토큰이 필요한 페이지의 교차 출처 읽기를 막아야 합니다.
- 리소스의 교차 출처 읽기를 방지하려면 리로스를 삽입 할 수 없도록 설정하세요. 리소스 삽입 과정에서 일부 정보가 새어 나가므로 삽입을 방지하는 경우가 많습니다.
- 교차 출처 삽입을 방지하려면 리소스가 앞서 나열된 삽입 가능 형식 중 하나로 해석되지 않도록 해야 합니다. 브라우저는 `Content-Type` 헤더를 준수하지 않을 수 있습니다. 예를 들어 HTML 문서에서 `<script>` 태그를 가리키면 브라우저는 HTML을 JavaScript로 파싱려고합니다. 리소스가 사이트의 진입점이 아닌 경우 CSRF 토큰을 사용하여 삽입을 방지할 수도 있습니다.

## 교차 출처 스크립트 API 접근

{{domxref("HTMLIFrameElement.contentWindow", "iframe.contentWindow")}}, {{domxref("window.parent")}}, {{domxref("window.open")}}, 그리고 {{domxref("window.opener")}}와 같은 JavaScript API를 사용하면 문서가 서로를 직접 참조할 수 있습니다. 두 문서의 원본이 동일하지 않은 경우 이러한 참조는 다음 두 섹션에서 설명하는 것처럼 {{domxref("Window")}}와 {{domxref("Location")}} 객체에 대해 매우 제한된 액세스를 제공합니다.

서로 다른 출처의 문서간 통신을 하려면 {{domxref("window.postMessage")}}를 사용하세요.

명세: [HTML Living Standard § Cross-origin objects](https://html.spec.whatwg.org/multipage/browsers.html#cross-origin-objects).

### Window

다음 `Window` 속성에 대한 교차 출처 접근이 허용됩니다.

| 메서드                            |
| --------------------------------- |
| {{domxref("window.blur")}}        |
| {{domxref("window.close")}}       |
| {{domxref("window.focus")}}       |
| {{domxref("window.postMessage")}} |

| 속성                           |            |
| ------------------------------ | ---------- |
| {{domxref("window.closed")}}   | 읽기 전용. |
| {{domxref("window.frames")}}   | 읽기 전용. |
| {{domxref("window.length")}}   | 읽기 전용. |
| {{domxref("window.location")}} | 읽기/쓰기. |
| {{domxref("window.opener")}}   | 읽기 전용. |
| {{domxref("window.parent")}}   | 읽기 전용. |
| {{domxref("window.self")}}     | 읽기 전용. |
| {{domxref("window.top")}}      | 읽기 전용. |
| {{domxref("window.window")}}   | 읽기 전용. |

일부 브라우저는 위의 항목보다 더 많은 접근을 허용할 수도 있습니다.

### Location

다음 `Location` 속성에 대한 교차 출처 접근이 허용됩니다.

| 메서드                          |
| ------------------------------- |
| {{domxref("location.replace")}} |

| 속성                         |            |
| ---------------------------- | ---------- |
| {{domxref("location.href")}} | 쓰기 전용. |

일부 브라우저는 위의 항목보다 더 많은 접근을 허용할 수도 있습니다.

## 교차 출처 데이터 저장소 접근

[Web Storage](/ko/docs/Web/API/Web_Storage_API)와 [IndexedDB](/ko/docs/Web/API/IndexedDB_API)와 같은 브라우저에 저장된 데이터에 대한 액세스는 출처별로 구분됩니다. 각 출처는 별도의 저장소를 가지며 한 출처의 JavaScript는 다른 출처에 속한 저장소에서 읽거나 쓸 수 없습니다.

{{glossary("Cookie", "쿠키")}}는 출처에 대한 별도의 정의를 사용합니다. 페이지는 상위 도메인이 공개 접미사가 아닌 한 자체 도메인 또는 상위 도메인에 대한 쿠키를 설정할 수 있습니다. Firefox와 Chrome은 [공개 접미사 목록](https://publicsuffix.org/)을 사용하여 도메인이 공개 접미사인지 확인합니다. 쿠키를 설정할 때 `Domain`, `Path`, `Secure`, 그리고 `HttpOnly` 플래그를 사용하여 가용성을 제한할 수 있습니다. 쿠키를 읽을 때 쿠키가 어디에서 설정되었는지 알 수 없습니다. 안전한 https 연결만 사용하더라도 보이는 모든 쿠키는 안전하지 않은 연결을 사용하여 설정되었을 수 있습니다.

## 같이 보기

- [W3C의 Same-Origin Policy](https://www.w3.org/Security/wiki/Same_Origin_Policy)
- [web.dev의 Same-origin policy](https://web.dev/secure/same-origin-policy)
- {{httpheader("Cross-Origin-Resource-Policy")}}
- {{httpheader("Cross-Origin-Embedder-Policy")}}
