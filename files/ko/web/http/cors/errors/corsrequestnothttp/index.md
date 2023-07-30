---
title: "Reason: CORS request not HTTP"
slug: Web/HTTP/CORS/Errors/CORSRequestNotHttp
---

{{HTTPSidebar}}

## 이유

```
Reason: CORS request not HTTP
```

## 무엇이 잘못되었는가?

{{Glossary("CORS")}} 요청은 오직 HTTPS URL 스키마만을 사용할 수 있지만 요청에 의해 지정된 URL은 다른 타입이다. 이는 URL이 `file:///` URL을 사용해 로컬 파일을 지정할 경우 종종 발생한다.

이 문제를 해결하려면, {{domxref("XMLHttpRequest")}}, [Fetch](/ko/docs/Web/API/Fetch_API) APIs, 웹 폰트 (`@font-face`), [WebGL textures](/ko/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL), XSL 스타일시트와 같은 CORS를 포함하는 요청이 발생할 때 HTTPS URL을 사용하고 있는지 확인하도록 한다.

### Firefox 68에서의 로컬 파일 보안

Firefox 67 이전 버전에서 `file:///` URI를 사용하는 페이지를 열때 페이지의 오리진은 페이지가 열린 디렉토리로 정의된다. 동일한 디렉토리와 그 하위 디렉토리의 리소스들은 CORS 동일-오리진 규칙의 목적을 위한 동일 오리진을 갖는 것으로 처리된다.

[CVE-2019-11730](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730)에 대한 응답으로, Firefox 68 이후 버전에서는 `file:///` URI를 사용해 열린 페이지의 오리진은 유니크한 것으로 정의된다. 그러므로, 동일 디렉토리나 그 하위 디렉토리의 다른 리소스들은 더 이상 CORS 동일-오리진 규칙을 충족하지 않는다. 이는 `privacy.file_unique_origin` 구성을 사용하여 기본으로 활성화되는 새로운 동작이다.

## 함께 보기

- [CORS 에러](/ko/docs/Web/HTTP/CORS/Errors)
- Glossary: {{Glossary("CORS")}}
- [CORS 소개](/ko/docs/Web/HTTP/CORS)
- [URL이 무엇인가?](/ko/docs/Learn/Common_questions/What_is_a_URL)
