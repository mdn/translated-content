---
title: "KeyboardEvent: ctrlKey property"
slug: Web/API/KeyboardEvent/ctrlKey
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("UI Events")}}
 
**`KeyboardEvent.ctrlKey`** 는 어떤 이벤트가 발생했을 때 키보드의 <kbd>control</kbd> 키 가 눌려 있었는지 아닌지 (`true`) 혹은 (`false`) 를 나타내는 읽기 전용 속성입니다.

## 값

불리언 값입니다.

## 예제

```html
<html lang="en">
  <head>
    <title>ctrlKey example</title>
    <script>
      function showChar(e) {
        alert(`Key Pressed: ${e.key}\nCTRL key pressed: ${e.ctrlKey}\n`);
      }
    </script>
  </head>
  <body onkeypress="showChar(event);">
    <p>
      Press any character key, with or without holding down the CTRL key.<br />
      You can also use the SHIFT key together with the CTRL key.
    </p>
  </body>
</html>
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{ domxref("KeyboardEvent") }}
