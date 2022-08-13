---
title: KeyboardEvent.altKey
slug: Web/API/KeyboardEvent/altKey
translation_of: Web/API/KeyboardEvent/altKey
---
{{APIRef("DOM Events")}}

Der Konstruktor **`KeyboardEvent.altKey`** hat die Eigenschaft {{jsxref("Boolean")}} und zeigt an ob <kbd>alt</kbd> Taste (<kbd>Option</kbd> oder <kbd>⌥</kbd> in OS X) gedrückt wurde (`true`) oder (`false`) nicht gerdrückt wurde, wenn das Ereignis eintritt.

## Syntax

    var altKeyPressed = instanceOfKeyboardEvent.altKey

## Examples

```js
<html>
<head>
<title>altKey example</title>

<script type="text/javascript">

function showChar(e){
  alert(
    "Key Pressed: " + String.fromCharCode(e.charCode) + "\n"
    + "charCode: " + e.charCode + "\n"
    + "ALT key pressed: " + e.altKey + "\n"
  );
}

</script>
</head>

<body onkeypress="showChar(event);">
<p>
Press any character key,
with or without holding down the ALT key.<br />
You can also use the SHIFT key together with the ALT key.
</p>
</body>
</html>
```

## Specifications

| Specification                                                                                            | Status                           | Comment             |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName('DOM3 Events','#widl-KeyboardEvent-altKey','KeyboardEvent.altkey')}} | {{Spec2('DOM3 Events')}} | Initial definition. |

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("KeyboardEvent") }}
