---
title: 405 Method Not Allowed
slug: Web/HTTP/Status/405
---

{{HTTPSidebar}}

하이퍼텍스트 전송 프로토콜(HTTP)의 **`405 Method Not Allowed`** 응답 상태 코드는 서버가 요청 메서드를 알고 있지만
대상 리소스가 이 메서드를 지원하지 않음을 가리킵니다.

서버는 405 코드를 응답할 경우 **반드시** **`Allow`** 헤더 필드를 생성해야 합니다. 이 필드에는 반드시 현재 대상 리소스에서
지원하는 메서드의 리스트가 들어있어야 합니다.

## 상태

```http
405 Method Not Allowed
```

## 명세서

{{Specifications}}

## 같이 보기

- {{HTTPHeader("Allow")}}
- [HTTP/1.1: Status Code Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
- [How to Fix 405 Method Not Allowed](https://kinsta.com/blog/405-method-not-allowed-error/)
- [Troubleshooting HTTP 405](https://docs.microsoft.com/aspnet/web-api/overview/testing-and-debugging/troubleshooting-http-405-errors-after-publishing-web-api-applications)
  Footer
