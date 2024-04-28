---
title: "KeyboardEvent: altKey property"
slug: Web/API/KeyboardEvent/altKey
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("UI Events")}}

**`KeyboardEvent.altKey`** 는 어떤 이벤트가 발생했을 때 키보드의 <kbd>alt</kbd> 키 (맥 OS 에서는 <kbd>Option</kbd> 또는 <kbd>⌥</kbd>) 가 눌려 있었는지 아닌지 (`true`) 혹은 (`false`) 를 나타내는 읽기 전용 속성입니다.

## 값

불리언 값입니다.

## 예제

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>altKey example</title>

    <script>
      function showChar(e) {
        alert(
          "Key KeyDown: " +
            String.fromCharCode(e.charCode) +
            "\n" +
            "charCode: " +
            e.charCode +
            "\n" +
            "ALT key KeyDown: " +
            e.altKey +
            "\n",
        );
      }
    </script>
  </head>

  <body onkeydown="showChar(event);">
    <p>
      Press any character key, with or without holding down the ALT key.<br />
      You can also use the SHIFT key together with the ALT key.
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
