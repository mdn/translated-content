---
title: "KeyboardEvent: altKey 속성"
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
      ALT 키를 누른 상태에서든 아니든 아무 문자 키를 눌러보세요.<br />
      SHIFT 키 또한 ALT 키와 함께 사용할 수 있습니다.
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
