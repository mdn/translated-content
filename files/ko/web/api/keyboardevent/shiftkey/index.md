---
title: "KeyboardEvent: shiftKey property"
slug: Web/API/KeyboardEvent/shiftKey
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("UI Events")}}

**`KeyboardEvent.shiftKey`** 는 읽기 전용 속성으로 어떤 이벤트가 발생했을 때 키보드의 <kbd>shift</kbd> 키 가 눌려 있었는지 아닌지 (`true`) 혹은 (`false`) 를 나타내는 읽기 전용 속성입니다.

## 값

불리언 값입니다.

## 예제

```html
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>shiftKey example</title>

    <script>
      function showChar(e) {
        alert(
          "Key Pressed: " +
            String.fromCharCode(e.charCode) +
            "\n" +
            "charCode: " +
            e.charCode +
            "\n" +
            "SHIFT key pressed: " +
            e.shiftKey +
            "\n" +
            "ALT key pressed: " +
            e.altKey +
            "\n",
        );
      }
    </script>
  </head>

  <body onkeypress="showChar(event);">
    <p>
      SHIFT 키를 누른 상태에서든 아니든 아무 문자 키를 눌러보세요.<br />
      ALT 키 또한 SHIFT 키와 함께 사용할 수 있습니다.
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
