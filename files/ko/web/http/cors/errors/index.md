---
title: CORS errors
slug: Web/HTTP/CORS/Errors
---

{{HTTPSidebar}}

[교차 출처 자원 공유](/ko/docs/Web/HTTP/CORS) ({{Glossary("CORS")}})는 서버가 same
origin 정책([same-origin policy](/ko/docs/Web/Security/Same-origin_policy))을 완화할 수 있게 해 주는 표준입니다. 이는 일부
교차 출처 요청은 명시적으로 허용하고 다른 요청은 거부하는 데 사용됩니다. 예를 들어서, 어떤 사이트가 embeddable service를 제공하는 경우, 특정 제한을
완화하는 것이 필요할 수 있습니다. CORS 설정을 세팅하는 것은 그리 쉬운 일이 아니며, 도전일 수 있습니다. 이 페이지에서는, 몇 가지 일반적인 CORS 에러 메시지를 소개하고 그에 맞는 해결법을
알아보겠습니다.

만약 CORS 설정이 제대로 세팅되어 있지 않다면, 브라우저 콘솔에는 다음과 같은 메시지가 표시될 것입니다:
`"Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at $somesite"`
이 메시지는 CORS 보안 규칙 위반으로 인해 요청이 차단되었음을 알려줍니다. 이것은 꼭 설정 실수라고 볼 수는 없습니다.
사실은 해당 요청이 유저 쪽의 웹 어플리케이션과 외부 서비스에 의해 거부당했을 수 있습니다. 하지만 만약 엔드포인트가 사용 가능한 걸로 확인된다면, 약간의 디버깅이 필요 할 수 있습니다.

## 이슈 파악하기

CORS 설정 이슈를 근본적으로 이해하려면 어떤 요청이 문제이고 왜 문제인지를 파악할 필요가 있습니다. 다음 단계들을 따라하면 도움이 될 것입니다.

1. 웹사이트나 웹앱으로 이동하여 [Developer Tools](/ko/docs/Tools)을 여세요.
2. 실패한 요청을 재현하고 나서 CORS 위반 에러 메시지가 떴다면 [console](/ko/docs/Tools/Web_Console)을 확인하세요. 메시지는 다음과 같을 겁니다:

![Firefox console showing CORS error](cors-error2.png)

에러 메시지 내용은 다음과 비슷할 수 있습니다.

```
Cross-Origin Request Blocked: The Same Origin Policy disallows
reading the remote resource at https://some-url-here. (Reason:
additional information here).
```

> **참고:** **Note:**보안상의 이유로, CORS 요청에서 정확히 무엇을 위반했는지에 대한 사항은 _자바스크립트 코드상에서 사용할 수 없습니다._ 코드상에서 알 수 있는 것은 에러가 발생했다는 것 뿐입니다.
> 정확히 무엇이 잘못됐는지 파악하려면 브라우저 콘솔을 살피는 수밖에 없습니다.

## CORS 에러 메시지

Firefox 콘솔은 CORS에 의해 요청이 실패했을 때 메시지를 출력합니다. 에러내용의 일부분은 "Reason"에 관한 메시지로서 무엇이 잘못되었는지에 대한 힌트를 제공합니다.
"Reason" 메시지들이 아래에 정리되어 있으니 더 자세한 에러에 대한 설명과 솔루션을 보고 싶으시다면 링크로 이동하세요.

- [Reason: CORS disabled](/ko/docs/Web/HTTP/CORS/Errors/CORSDisabled)
- [Reason: CORS request did not succeed](/ko/docs/Web/HTTP/CORS/Errors/CORSDidNotSucceed)
- [Reason: CORS header 'Origin' cannot be
  added](/ko/docs/Web/HTTP/CORS/Errors/CORSOriginHeaderNotAdded)
- [Reason: CORS request external redirect
  not allowed](/ko/docs/Web/HTTP/CORS/Errors/CORSExternalRedirectNotAllowed)
- [Reason: CORS request not http](/ko/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp)
- [Reason: CORS header
  'Access-Control-Allow-Origin' missing](/ko/docs/Web/HTTP/CORS/Errors/CORSMissingAllowOrigin)
- [Reason: CORS header
  'Access-Control-Allow-Origin' does not match 'xyz'](/ko/docs/Web/HTTP/CORS/Errors/CORSAllowOriginNotMatchingOrigin)
- [Reason: Credential is not supported if the
  CORS header 'Access-Control-Allow-Origin' is '\*'](/ko/docs/Web/HTTP/CORS/Errors/CORSNotSupportingCredentials)
- [Reason: Did not find method in CORS header
  'Access-Control-Allow-Methods'](/ko/docs/Web/HTTP/CORS/Errors/CORSMethodNotFound)
- [Reason: expected 'true' in CORS header
  'Access-Control-Allow-Credentials'](/ko/docs/Web/HTTP/CORS/Errors/CORSMissingAllowCredentials)
- [Reason: CORS preflight channel did not
  succeed](/ko/docs/Web/HTTP/CORS/Errors/CORSPreflightDidNotSucceed)
- [Reason: invalid token 'xyz' in CORS header
  'Access-Control-Allow-Methods'](/ko/docs/Web/HTTP/CORS/Errors/CORSInvalidAllowMethod)
- [Reason: invalid token 'xyz' in CORS header
  'Access-Control-Allow-Headers'](/ko/docs/Web/HTTP/CORS/Errors/CORSInvalidAllowHeader)
- [Reason: missing token 'xyz' in CORS
  header 'Access-Control-Allow-Headers' from CORS preflight channel](/ko/docs/Web/HTTP/CORS/Errors/CORSMissingAllowHeaderFromPreflight)
- [Reason: Multiple CORS header
  'Access-Control-Allow-Origin' not allowed](/ko/docs/Web/HTTP/CORS/Errors/CORSMultipleAllowOriginNotAllowed)

## 더보기

- Glossary: {{Glossary("CORS")}}
- [CORS introduction](/ko/docs/Web/HTTP/CORS)
- [Server-side CORS settings](/ko/docs/Web/HTTP/Server-Side_Access_Control)
- [CORS enabled image](/ko/docs/Web/HTML/CORS_enabled_image)
- [CORS settings attributes](/ko/docs/Web/HTML/CORS_settings_attributes)
- <https://www.test-cors.org> – page to test CORS requests
