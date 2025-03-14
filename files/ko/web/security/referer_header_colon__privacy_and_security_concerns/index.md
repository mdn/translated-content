---
title: "Referer 헤더: 개인 정보 보호 및 보안 문제"
slug: Web/Security/Referer_header:_privacy_and_security_concerns
l10n:
  sourceCommit: 590c1bef13f965a00be626abe963f330a6f96aa1
---

{{QuickLinksWithSubpages("/ko/docs/Web/Security")}}

[Referer HTTP 헤더](/ko/docs/Web/HTTP/Headers/Referer)와 관련된 개인 정보 및 보안 위험이 있습니다. 이 문서는 이런 위험에 대해 설명하고, 이를 완화하는 방법에 대한 조언을 제공합니다.

## 리퍼러 문제

{{httpheader("Referer")}} (철자 주의) 헤더에는 요청 주소가 들어있습니다(예를 들어, 현재 요청된 페이지의 링크로 이어진 이전 웹 페이지의 주소, 이미지나 기타 리소스를 로드하는 페이지의 주소). 이는 분석, 로깅, 최적화된 캐싱을 포함하여 악의 없는 용도로 많이 사용됩니다. 하지만, 정보를 추적하거나 훔치는 것과 같이 문제가 있는 용도가 더 많이 쓰이고, 실수로 민감한 정보를 유출하는 것과 같은 부작용도 있습니다.

예를 들어, "비밀번호 재설정" 페이지 푸터에 소셜 미디어 링크가 있다고 생각해 보겠습니다. 링크를 따라갔다면, 정보가 어떻게 공유됐는지에 따라 소셜 미디어 사이트는 암호 재설정 URL을 받을 수도 있고, 공유된 정보를 계속 사용할 수 있으므로 잠재적으로 사용자 보안이 침해될 수 있습니다.

같은 논리로, 페이지에 포함된 타사 사이트의 이미지로 인해 민감한 정보가 타사에 유출될 수 있습니다. 보안이 침해되지 않더라도, 이런 정보는 사용자가 공유하길 원하지 않을 수 있습니다.

## 어떻게 해결할 수 있을까요?

이러한 위험의 대부분은 애플리케이션의 현명한 설계로 완화할 수 있습니다. 현명한 애플리케이션은 일회용 비밀번호 재설정 URL을 만들거나 이를 고유한 사용자 토큰과 결합하여 위험을 제거합니다. 민감한 데이터를 보다 안전한 방식으로 전송함으로써 위험을 줄일 수도 있습니다.

URL을 통해 민감한 데이터를 다른 위치로 전달하지 않기 위해선 가능한한 {{HTTPMethod("GET")}} 대신 {{HTTPMethod("POST")}}를 사용해야 합니다.

항상 {{glossary("HTTPS")}} 사이트를 사용해야 합니다. HTTPS 사이트는 HTTPS가 아닌 사이트에 리퍼러 정보를 전송하지 않는다는 사실을 포함하여 많은 보안 이점이 있습니다. 이 조언은 현재 대부분의 웹이 HTTPS를 사용하고 있기 때문에 관련성이 적지만 여전히 고려할 가치가 있습니다.

또한 비밀번호 재설정 페이지, 결제 양식, 로그인 영역 등과 같은 웹사이트의 보안 영역에서 제3자의 콘텐츠(예: {{htmlelement("iframe")}}에 포함된 소셜 네트워크 위젯)를 제거하는 것을 고려해야 합니다.

다음을 사용하여 위험을 완화할 수도 있습니다.

- 서버의 {{httpheader("Referrer-Policy")}} 헤더는 {{httpheader("Referer")}} 헤더를 통해 전송되는 정보를 제어합니다. 예를 들어 `no-referrer` 지시문은 Referer 헤더를 완전히 생략합니다.
- 이러한 정보가 유출될 위험이 있는 HTML 요소(예: {{HTMLElement("img")}}와 {{HTMLElement("a")}})의 `referrerpolicy` 속성입니다. 예를 들어 `Referer` 헤더가 전송되는 것을 중지하도록 `no-referrer`로 설정할 수 있습니다.
- 이러한 정보가 유출될 위험이 있는 HTML 요소(예: {{HTMLElement("img")}}와 {{HTMLElement("a")}})에서 [`rel`](/ko/docs/Web/HTML/Attributes/rel) 속성을 [`noreferrer`](/ko/docs/Web/HTML/Attributes/rel/noreferrer)로 설정합니다.
- 전체 문서에 대한 Referer 헤더를 비활성화하기 위해 `referrer`의 [name](/ko/docs/Web/HTML/Element/meta#name)과 콘텐츠가 `no-referrer`으로 설정된 {{HTMLElement("meta")}} 요소. [HTML과 Referrer-Policy 통합](/ko/docs/Web/HTTP/Headers/Referrer-Policy#html%EA%B3%BC_%ED%86%B5%ED%95%A9)을 참조하십시오.
- [Exit page](https://geekthis.net/post/hide-http-referer-headers/#exit-page-redirect) 기술.

보안에 민감한 서버 측 프레임워크는 이러한 문제에 대한 완화 기능을 내장하는 경우가 많습니다. 예를 들어 다음과 같습니다.

- [Django의 보안](https://docs.djangoproject.com/en/stable/topics/security/)(특히 [교차 사이트 요청 위조(CSRF) 보호](https://docs.djangoproject.com/en/stable/topics/security/#cross-site-request-forgery-csrf-protection) 참조).
- [helmetjs referrer-policy](https://github.com/helmetjs/helmet/tree/main/middlewares/referrer-policy) — Node.js/Express 앱에서 Referrer-Policy를 설정하기 위한 미들웨어입니다(자세한 보안 규정은 [helmetjs](https://github.com/helmetjs) 참조).

## 정책 및 요구 사항

관련 위험을 완화하기 위해 프로젝트 팀에 이러한 기능의 사용을 특정하는 일련의 보안 및 개인 정보 보호 요구 사항을 정하는 것이 좋습니다. 웹 보안 전문가의 도움을 받아 이런 요구 사항을 작성하고, 사용자 요구 사항과 복지는 물론, [EU 일반 데이터 보호 규정(GDPR)](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN)과 같은 법률에 의해 시행되는 정책과 규정과 같은 기타 문제도 모두 고려해야 합니다.

## 같이 보기

- [Referrer-Policy에 대한 Mozilla 보안 팀 지침](https://infosec.mozilla.org/guidelines/web_security.html#referrer-policy)
