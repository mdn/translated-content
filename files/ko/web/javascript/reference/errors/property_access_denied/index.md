---
title: 'Error: Permission denied to access property "x"'
slug: Web/JavaScript/Reference/Errors/Property_access_denied
---

{{jsSidebar("Errors")}}

## 메시지

```
    Error: Permission denied to access property "x"
```

## 에러 형식

{{jsxref("Error")}}.

## 무엇이 잘못되었을까?

접근이 허가되지 않은 객체에 접근하기 위한 시도가 있었습니다. 아마 동일 출처 정책([same-origin policy](/ko/docs/Web/Security/Same-origin_policy))을 침해하여 다른 도메인으로부터 로드된 {{HTMLElement("iframe")}} 엘리먼트에 대한 것이었을 겁니다.

## 예

```html
<!doctype html>
<html>
  <head>
    <iframe
      id="myframe"
      src="http://www1.w3c-test.org/common/blank.html"></iframe>
    <script>
      onload = function () {
        console.log(frames[0].document);
        // Error: Permission denied to access property "document"
      };
    </script>
  </head>
  <body></body>
</html>
```

## 참조

- {{HTMLElement("iframe")}}
- [Same-origin policy](/ko/docs/Web/Security/Same-origin_policy)
