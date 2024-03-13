---
title: 406 Not Acceptable
slug: Web/HTTP/Status/406
---

{{HTTPSidebar}}

하이퍼텍스트 전송 프로토콜(HTTP)의 **`406 Not Acceptable`** 클라이언트 에러 응답 코드는 서버가 요청의 주도적인 [콘텐츠 협상](/ko/docs/Web/HTTP/Content_negotiation) 헤더에 정의된 허용 가능한 값 목록과 일치하는 응답을 생성할 수 없으며, 서버가 기본 표현을 제공하지 않음을 나타냅니다.

주도적인 콘텐츠 협상 헤더는 다음과 같습니다.

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Accept-Language")}}

실제로 이 오류가 사용되는 경우는 거의 드뭅니다. 서버는 최종 사용자에게 이런 비밀스럽고 수정하기 어려운 오류 코드로 응답하는 대신, 관련 헤더를 무시하고 사용자에게 실제 페이지를 제공합니다. 사용자가 이 결과에 완벽하게 만족하진 않더라도, 에러 코드보다는 선호할 것입니다.

서버가 이러한 오류 상태를 반환하는 경우, 메시지 본문에는 사용 가능한 리소스 표현 목록이 포함되어야 하며, 사용자가 그 중에서 선택할 수 있어야 합니다.

## 상태

```http
406 Not Acceptable
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Accept-Language")}}
- HTTP [콘텐츠 협상](/ko/docs/Web/HTTP/Content_negotiation)
