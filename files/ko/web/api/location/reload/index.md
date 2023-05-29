---
title: Location.reload()
slug: Web/API/Location/reload
---

{{ APIRef("HTML DOM") }}

**`Location.reload()`** 메서드는 새로고침 버튼처럼 현재 리소스를 다시 불러옵니다.

새로고침은 `SECURITY_ERROR` {{domxref("DOMException")}}과 함께 거부당할 수 있습니다. 이는 `location.reload()`를 호출한 스크립트의 {{glossary("origin", "출처")}}와 {{domxref("Location")}} 객체를 소유한 문서의 출처가 다를 때 발생합니다. 더 자세한 정보는 [동일 출처 정책](/ko/docs/Web/Security/Same-origin_policy) 문서를 참고하세요.

## 구문

```js
location.reload();
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 메서드가 속한 {{domxref("Location")}} 인터페이스.
- 비슷한 메서드: {{domxref("Location.assign()")}}, {{domxref("Location.replace()")}}.
