---
title: 404 Not Found
slug: Web/HTTP/Status/404
tags:
  - 브라우저
  - 상태 코드
translation_of: Web/HTTP/Status/404
---
{{HTTPSidebar}}

HTTP **`404`\*\***` Not Found`\*\* 클라이언트 오류 응답 코드는 서버가 요청받은 리소스를 찾을 수 없다는 것을 의미합니다. 404 페이지를 띄우는 링크는 대체로 브로큰 링크(broken link) 또는 데드 링크(dead link)라고 부르며, [link rot](https://en.wikipedia.org/wiki/Link_rot) 대상일 수도 있습니다.

404 상태 코드는 리소스가 일시적, 또는 영구적으로 사라졌다는 것을 의미하지는 않습니다. 리소스가 영구적히 삭제되었다면 404 상태 코드 대신 {{HTTPStatus(410)}} (Gone) 상태 코드가 쓰여야 합니다.

## 상태

```
404 Not Found
```

## 커스텀 에러 페이지

많은 웹사이트들이 사용자에게 더 많은 도움을 주기 위해 404 페이지의 모습을 커스터마이징합니다. 아파치 서버는 `.htaccess` 파일에 아래와 같은 코드를 작성해 설정할 수 있습니다.

```bash
ErrorDocument 404 /notfound.html
```

커스텀 404 페이지의 예시로는 [MDN's 404 page](https://developer.mozilla.org/en-US/404)을 참고해보세요.

> **참고:** 적당한 커스텀 디자인은 좋습니다. 404 페이지를 재밌게 만들되, 사용자를 혼란스럽게 하지는 마세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat("http.status.404")}}

## 함께 참고할 내용

- {{HTTPStatus(410)}}
- [HTTP_404](https://ko.wikipedia.org/wiki/HTTP_404)
