---
title: KeyboardEvent
slug: Web/API/KeyboardEvent
---

{{APIRef("DOM Events")}}

**`KeyboardEvent`** 对象描述了用户与键盘的交互。每个事件都描述了用户与一个按键（或一个按键和修饰键的组合）的单个交互；事件类型`keydown`， `keypress` 与 `keyup` 用于识别不同的键盘活动类型。

> **备注：** `KeyboardEvent` 只在低级别提示用户与一个键盘按键的交互是什么，不涉及这个交互的上下文含义。当你需要处理文本输入的时候，使用 [`input`](/zh-CN/docs/Web/API/HTMLElement/input_event) 事件代替。用户使用其他方式输入文本时，如使用平板电脑的手写系统或绘图板，键盘事件可能不会触发。

## 构造函数

- {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}}
  - : 创建一个 `KeyboardEvent` 对象。

## 常量

`KeyboardEvent` 接口定义了以下常量。

### 键盘定位

下述常量用于识别产生按键事件的键盘位置，以类似 `KeyboardEvent.DOM_KEY_LOCATION_STANDARD` 的形式来访问。

| 常量                        | 值   | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `DOM_KEY_LOCATION_STANDARD` | 0x00 | The key described by the event is not identified as being located in a particular area of the keyboard; it is not located on the numeric keypad (unless it's the NumLock key), and for keys that are duplicated on the left and right sides of the keyboard, the key is, for whatever reason, not to be associated with that location.Examples include alphanumeric keys on the standard PC 101 US keyboard, the NumLock key, and the space bar. |
| `DOM_KEY_LOCATION_LEFT`     | 0x01 | The key is one which may exist in multiple locations on the keyboard and, in this instance, is on the left side of the keyboard.Examples include the left Control key, the left Command key on a Macintosh keyboard, or the left Shift key.                                                                                                                                                                                                      |
| `DOM_KEY_LOCATION_RIGHT`    | 0x02 | The key is one which may exist in multiple positions on the keyboard and, in this case, is located on the right side of the keyboard.Examples include the right Shift key and the right Alt key (Option on a Mac keyboard).                                                                                                                                                                                                                      |
| `DOM_KEY_LOCATION_NUMPAD`   | 0x03 | The key is located on the numeric keypad, or is a virtual key associated with the numeric keypad if there's more than one place the key could originate from. The NumLock key does not fall into this group and is always encoded with the location `DOM_KEY_LOCATION_STANDARD`.Examples include the digits on the numeric keypad, the keypad's Enter key, and the decimal point on the keypad.                                                  |

## 属性

_此接口从 {{domxref("UIEvent")}} 和 {{domxref("Event")}} 中继承属性。_

- {{domxref("KeyboardEvent.altKey")}} {{Readonlyinline}}

  - : 返回一个 {{jsxref("Boolean")}}，如果按键事件产生时，&#x20;

    <kbd>Alt</kbd>

    &#x20;（OS X 中是&#x20;

    <kbd>Option</kbd>

    &#x20;或&#x20;

    <kbd>⌥</kbd>

    &#x20;）键被按下，则该值为 `true` 。

- {{domxref("KeyboardEvent.code")}} {{Readonlyinline}}

  - : 返回一个 {{domxref("DOMString")}}，其 code 值代表触发事件的物理按键。

    > **警告：** 这个属性会忽略用户的键盘布局，所以如果用户在 QWERTY 布局的键盘上按下“Y”位置（第一行字母按键的中间）的按键时，这个属性会返回“KeyY”，即使用户使用 QWERTZ 布局的键盘（此时用户输入的就是“Z”，其他属性也会提示“Z”）或 Dvorak 键盘（此时用户输入的就是“F”）也是如此。

- {{domxref("KeyboardEvent.ctrlKey")}} {{Readonlyinline}}

  - : 返回一个 {{jsxref("Boolean")}}，如果按键事件发生时 <kbd>Ctrl</kbd> 键被按下，则该值为 `true` 。

- {{domxref("KeyboardEvent.isComposing")}} {{Readonlyinline}}
  - : Returns a {{jsxref("Boolean")}} that is `true` if the event is fired between after `compositionstart` and before `compositionend`.
- {{domxref("KeyboardEvent.key")}} {{Readonlyinline}}
  - : Returns a {{domxref("DOMString")}} representing the key value of the key represented by the event.
- {{domxref("KeyboardEvent.locale")}} {{Readonlyinline}}

  - : Returns a {{domxref("DOMString")}} representing a locale string indicating the locale the keyboard is configured for. This may be the empty string if the browser or device doesn't know the keyboard's locale.

    > **备注：** This does not describe the locale of the data being entered. A user may be using one keyboard layout while typing text in a different language.

- {{domxref("KeyboardEvent.location")}} {{Readonlyinline}}
  - : Returns a {{jsxref("Number")}} representing the location of the key on the keyboard or other input device. A list of the constants identifying the locations is shown above in [Keyboard locations](#键盘定位).
- {{domxref("KeyboardEvent.metaKey")}} {{Readonlyinline}}

  - : Returns a {{jsxref("Boolean")}} that is `true` if the <kbd>Meta</kbd> key (on Mac keyboards, the
    <kbd>⌘ Command</kbd> key; on Windows keyboards, the Windows key (<kbd>⊞</kbd>)) was active when the key event was generated.

- {{domxref("KeyboardEvent.repeat")}} {{Readonlyinline}}
  - : Returns a {{jsxref("Boolean")}} that is `true` if the key is being held down such that it is automatically repeating.
- {{domxref("KeyboardEvent.shiftKey")}} {{Readonlyinline}}

  - : Returns a {{jsxref("Boolean")}} that is `true` if the <kbd>Shift</kbd> key was active when the key event was generated.

## 方法

_此接口从 {{domxref("UIEvent")}} 和 {{domxref("Event")}} 中继承方法。_

- {{domxref("KeyboardEvent.getModifierState()")}}

  - : Returns a {{jsxref("Boolean")}} indicating if a modifier key such as&#x20;

    <kbd>Alt</kbd>

    ,&#x20;

    <kbd>Shift</kbd>

    ,&#x20;

    <kbd>Ctrl</kbd>

    , or&#x20;

    <kbd>Meta</kbd>

    , was pressed when the event was created.

## 过时方法

- {{domxref("KeyboardEvent.initKeyEvent()")}} {{deprecated_inline}}
  - : Initializes a `KeyboardEvent` object. This was implemented only by Firefox, and is no longer supported even there; instead, you should use the {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}} constructor.
- {{domxref("KeyboardEvent.initKeyboardEvent()")}} {{deprecated_inline}}
  - : Initializes a `KeyboardEvent` object. This is now deprecated. You should instead use the {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}} constructor.

## 过时属性

- {{domxref("KeyboardEvent.char")}} {{Non-standard_inline}}{{Deprecated_inline}}{{Readonlyinline}}

  - : Returns a {{domxref("DOMString")}} representing the character value of the key. If the key corresponds to a printable character, this value is a non-empty Unicode string containing that character. If the key doesn't have a printable representation, this is an empty string.

    > **备注：** If the key is used as a macro that inserts multiple characters, this attribute's value is the entire string, not just the first character.

- {{domxref("KeyboardEvent.charCode")}} {{Deprecated_inline}}{{Readonlyinline}}

  - : Returns a {{jsxref("Number")}} representing the Unicode reference number of the key; this attribute is used only by the `keypress` event. For keys whose `char` attribute contains multiple characters, this is the Unicode value of the first character in that attribute. In Firefox 26 this returns codes for printable characters.

    > **警告：** This attribute is deprecated; you should use {{domxref("KeyboardEvent.key")}} instead, if available.

- {{domxref("KeyboardEvent.keyCode")}} {{deprecated_inline}}{{Readonlyinline}}

  - : Returns a {{jsxref("Number")}} representing a system and implementation dependent numerical code identifying the unmodified value of the pressed key.

    > **警告：** This attribute is deprecated; you should use {{domxref("KeyboardEvent.key")}} instead, if available.

- {{domxref("KeyboardEvent.keyIdentifier")}} {{Non-standard_inline}}{{deprecated_inline}}{{Readonlyinline}}
  - : This property is non-standard and has been deprecated in favor of {{domxref("KeyboardEvent.key")}}. It was part of an old version of DOM Level 3 Events.
- {{domxref("KeyboardEvent.keyLocation")}} {{Non-standard_inline}}{{deprecated_inline}}{{Readonlyinline}}
  - : This is a non-standard deprecated alias for {{domxref("KeyboardEvent.location")}}. It was part of an old version of DOM Level 3 Events.
- {{domxref("KeyboardEvent.which")}} {{deprecated_inline}} {{Readonlyinline}}

  - : Returns a {{jsxref("Number")}} representing a system and implementation dependent numeric code identifying the unmodified value of the pressed key; this is usually the same as `keyCode`.

    > **警告：** This attribute is deprecated; you should use {{domxref("KeyboardEvent.key")}} instead, if available.

## 事件

The following events are based on the `KeyboardEvent` type. They can be delivered to any object which implements {{domxref("GlobalEventHandlers")}}, including {{domxref("Element")}}, {{domxref("Document")}}, and {{domxref("Window")}}. In the list below, each event links to the documentation for the `Document` handler for the event, which applies generally to all of the recipients.

- {{domxref("Document.keydown_event", "keydown")}}
  - : A key has been pressed.
- {{domxref("Document.keyup_event", "keyup")}}
  - : A key has been released.

### 过时事件

- {{domxref("Document.keypress_event", "keypress")}} {{Deprecated_Inline}}
  - : 通常在一个按键被按下时触发，并产生一个字符串值，这个事件高度依赖硬件 (highly device-dependent ) 且废弃，您不应该使用它

## 用法说明

There are three types of keyboard events: [`keydown`](/zh-CN/docs/Web/API/Element/keydown_event), [`keypress`](/zh-CN/docs/Web/API/Element/keypress_event), and [`keyup`](/zh-CN/docs/Web/API/Element/keyup_event). For most keys, Gecko dispatches a sequence of key events like this:

1. When the key is first pressed, the `keydown` event is sent.
2. If the key is not a modifier key, the `keypress` event is sent.
3. When the user releases the key, the `keyup` event is sent.

### 特殊情况

Some keys toggle the state of an indicator light; these include keys such as Caps Lock, Num Lock, and Scroll Lock. On Windows and Linux, these keys dispatch only the `keydown` and `keyup` events.

> **备注：** On Linux, Firefox 12 and earlier also dispatched the `keypress` event for these keys.

However, a limitation of the macOS event model causes Caps Lock to dispatch only the `keydown` event. Num Lock was supported on some older laptop models (2007 models and older), but since then, macOS hasn't supported Num Lock even on external keyboards. On older MacBooks with a Num Lock key, that key doesn't generate any key events. Gecko does support the Scroll Lock key if an external keyboard which has an F14 key is connected. In certain older versions of Firefox, this key generated a `keypress` event; this inconsistent behavior was [Firefox bug 602812](https://bugzil.la/602812).

### Auto-repeat handling

When a key is pressed and held down, it begins to auto-repeat. This results in a sequence of events similar to the following being dispatched:

1. `keydown`
2. `keypress`
3. `keydown`
4. `keypress`
5. <\<repeating until the user releases the key>>
6. `keyup`

This is what the DOM Level 3 specification says should happen. There are some caveats, however, as described below.

#### Auto-repeat on some GTK environments such as Ubuntu 9.4

In some GTK-based environments, auto-repeat dispatches a native key-up event automatically during auto-repeat, and there's no way for Gecko to know the difference between a repeated series of keypresses and an auto-repeat. On those platforms, then, an auto-repeat key will generate the following sequence of events:

1. `keydown`
2. `keypress`
3. `keyup`
4. `keydown`
5. `keypress`
6. `keyup`
7. <\<repeating until the user releases the key>>
8. `keyup`

In these environments, unfortunately, there's no way for web content to tell the difference between auto-repeating keys and keys that are just being pressed repeatedly.

#### Auto-repeat handling prior to Gecko 5.0

Before Gecko 5.0, keyboard handling was less consistent across platforms.

- Windows
  - : Auto-repeat behavior is the same as in Gecko 4.0 and later.
- Mac
  - : After the initial keydown event, only keypress events are sent until the keyup event occurs; the inter-spaced keydown events are not sent.
- Linux
  - : The event behavior depends on the specific platform. It will either behave like Windows or Mac depending on what the native event model does.

**Note:** Manually firing an event does _not_ generate the default action associated with that event. For example, manually firing a key event does not cause that letter to appear in a focused text input. In the case of UI events, this is important for security reasons, as it prevents scripts from simulating user actions that interact with the browser itself.

## 示例

```js
<!DOCTYPE html>
<html>
<head>
<script>
'use strict';

document.addEventListener('keydown', (event) => {
  const keyName = event.key;

  if (keyName === 'Control') {
    // do not alert when only Control key is pressed.
    return;
  }

  if (event.ctrlKey) {
    // Even though event.key is not 'Control' (e.g., 'a' is pressed),
    // event.ctrlKey may be true if Ctrl key is pressed at the same time.
    alert(`Combination of ctrlKey + ${keyName}`);
  } else {
    alert(`Key pressed ${keyName}`);
  }
}, false);

document.addEventListener('keyup', (event) => {
  const keyName = event.key;

  // As the user releases the Ctrl key, the key is no longer active,
  // so event.ctrlKey is false.
  if (keyName === 'Control') {
    alert('Control key was released');
  }
}, false);

</script>
</head>

<body>
</body>
</html>
```

## 规范

{{Specifications}}

The `KeyboardEvent` interface specification went through numerous draft versions, first under DOM Events Level 2 where it was dropped as no consensus arose, then under DOM Events Level 3. This led to the implementation of non-standard initialization methods, the early DOM Events Level 2 version, {{domxref("KeyboardEvent.initKeyEvent()")}} by Gecko browsers and the early DOM Events Level 3 version, {{domxref("KeyboardEvent.initKeyboardEvent()")}} by others. Both have been superseded by the modern usage of a constructor: {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}}.

## 浏览器兼容性

{{Compat}}

### 兼容性说明

- As of Firefox 65, the `keypress` event is no longer fired for [non-printable keys](</zh-CN/docs/Web/API/KeyboardEvent/keyCode#Non-printable_keys_(function_keys)>) ([Firefox bug 968056](https://bugzil.la/968056)), except for the&#x20;

  <kbd>Enter</kbd>

  &#x20;key, and the&#x20;

  <kbd>Shift</kbd>

  &#x20;\+&#x20;

  <kbd>Enter</kbd>

  &#x20;and&#x20;

  <kbd>Ctrl</kbd>

  &#x20;\+&#x20;

  <kbd>Enter</kbd>

  &#x20;key combinations (these were kept for cross-browser compatibility purposes).

## 参见

- {{domxref("KeyboardEvent.code")}}.
- {{domxref("KeyboardEvent.key")}}.
- {{domxref("KeyboardEvent.getModifierState()")}}
