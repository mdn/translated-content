---
title: KeyboardEvent
slug: Web/API/KeyboardEvent
---

{{APIRef("UI Events")}}

**`KeyboardEvent`** objects 用來詳述使用者和網頁之間，經由鍵盤產生的互動。每個事件（`event`）都記錄著一次鍵盤動作。事件類型（`keydown` 、 `keypress` 和 `keyup`）用來表示鍵盤執行哪種動作。

> **備註：** `KeyboardEvent` 僅顯示在鍵盤上發生的事。當你需要進行文字輸入的操作，請使用 HTML5 [`input`](/zh-TW/docs/Web/API/Element/input_event) event 代替 `KeyboardEvent` 。舉例來說，當使用者在手寫系統，例如平板電腦，輸入文字時，並不會啟動 key events 。

## 建構子

- {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}}
  - : 建立一 `KeyboardEvent` 物件。

## 方法

_本介面（interface）亦繼承其父 {{domxref("UIEvent")}} 和 {{domxref("Event")}} 的方法。_

- {{domxref("KeyboardEvent.getModifierState()")}}
  - : 回傳一 {{jsxref("Boolean")}}。用來表示當事件建立時，修飾鍵（例如 <kbd>Alt</kbd>、 <kbd>Shift</kbd>、 <kbd>Ctrl</kbd>、或是 <kbd>Meta</kbd>） 是否是按下的。
- {{domxref("KeyboardEvent.initKeyEvent()")}}{{deprecated_inline}}
  - : 初始化一個 `KeyboardEvent` object。這個 method 只有 Gecko 有在使用（其他瀏覽器是使用 {{domxref("KeyboardEvent.initKeyboardEvent()")}}），並且不應該再繼續使用。現代的標準規範是使用 {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}} constructor。
- {{domxref("KeyboardEvent.initKeyboardEvent()")}}{{deprecated_inline}}
  - : 初始化一個 `KeyboardEvent` object。 Gecko 從未實作過該 method （Gecko 是使用 {{domxref("KeyboardEvent.initKeyEvent()")}}) ，並且不應該再繼續使用。現代的標準規範是使用 {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}} constructor。

## Properties

_本介面（ interface）亦繼承其父，{{domxref("UIEvent")}} 和 {{domxref("Event")}} ，的 properties 。_

- {{domxref("KeyboardEvent.altKey")}} {{Readonlyinline}}
  - : 一個 {{jsxref("Boolean")}} 。用來表示在事件建立時， <kbd>Alt</kbd> （OS X 中是 <kbd>Option</kbd> 或 <kbd>⌥</kbd> ） 鍵是否執行中。
- {{domxref("KeyboardEvent.char")}} {{Non-standard_inline}}{{Deprecated_inline}}{{Readonlyinline}}

  - : 一個 {{domxref("DOMString")}} ，返回鍵盤對應的字符。若是該鍵對應一個實際的字符，則其值為對應該字符的一個非空的 Unicode 字串；若沒對應的話，則返回一個空字串。

    > [!NOTE]
    > If the key is used as a macro that inserts multiple characters, this attribute's value is the entire string, not just the first character.

    > [!WARNING]
    > 在 DOM Level 3 Events ，該 propertie 已被移除。現在只有 IE9+ 支持它。

- {{domxref("KeyboardEvent.charCode")}} {{Deprecated_inline}}{{Readonlyinline}}

  - : Returns a {{jsxref("Number")}} representing the Unicode reference number of the key; this attribute is used only by the `keypress` event. For keys whose `char` attribute contains multiple characters, this is the Unicode value of the first character in that attribute. In Firefox 26 this returns codes for printable characters.

    > [!WARNING]
    > 此 attribute 已被淘汰。如果可以，建議使用 {{domxref("KeyboardEvent.key")}}。

- {{domxref("KeyboardEvent.code")}} {{Readonlyinline}}
  - : 一個 {{domxref("DOMString")}} 。返回事件對應的按鍵的代碼。
- {{domxref("KeyboardEvent.ctrlKey")}} {{Readonlyinline}}
  - : 一個 {{jsxref("Boolean")}} 。用來表示在事件建立時， <kbd>Ctrl</kbd> 鍵是否執行中。
- {{domxref("KeyboardEvent.isComposing")}} {{Readonlyinline}}
  - : 一個 {{jsxref("Boolean")}} 。用來表示其觸發時間是否在 `compositionstart` 和 `compositionend` 之間。
- {{domxref("KeyboardEvent.key")}} {{Readonlyinline}}
  - : 一個 {{domxref("DOMString")}} ，用來事件對應的按鍵的值（key value）。
- {{domxref("KeyboardEvent.keyCode")}} {{deprecated_inline}}{{Readonlyinline}}

  - : Returns a {{jsxref("Number")}} representing a system and implementation dependent numerical code identifying the unmodified value of the pressed key.

    > [!WARNING]
    > 此 attribute 已被淘汰。如果可以，建議使用{{domxref("KeyboardEvent.key")}}。

- {{domxref("KeyboardEvent.locale")}} {{Readonlyinline}}

  - : Returns a {{domxref("DOMString")}} representing a locale string indicating the locale the keyboard is configured for. This may be the empty string if the browser or device doesn't know the keyboard's locale.

    > [!NOTE]
    > This does not describe the locale of the data being entered. A user may be using one keyboard layout while typing text in a different language.

- {{domxref("KeyboardEvent.location")}} {{Readonlyinline}}
  - : Returns a {{jsxref("Number")}} representing the location of the key on the keyboard or other input device.
- {{domxref("KeyboardEvent.metaKey")}} {{Readonlyinline}}
  - : Returns a {{jsxref("Boolean")}} that is `true` if the <kbd>Meta</kbd> (on Mac keyboards, the <kbd>⌘ Command</kbd> key; on Windows keyboards, the Windows key (<kbd>⊞</kbd>)) key was active when the key event was generated.
- {{domxref("KeyboardEvent.repeat")}} {{Readonlyinline}}
  - : Returns a {{jsxref("Boolean")}} that is `true` if the key is being held down such that it is automatically repeating.
- {{domxref("KeyboardEvent.shiftKey")}} {{Readonlyinline}}
  - : Returns a {{jsxref("Boolean")}} that is `true` if the <kbd>Shift</kbd> key was active when the key event was generated.
- {{domxref("KeyboardEvent.which")}} {{deprecated_inline}}{{Readonlyinline}}

  - : Returns a {{jsxref("Number")}} representing a system and implementation dependent numeric code identifying the unmodified value of the pressed key; this is usually the same as `keyCode`.

    > [!WARNING]
    > 此 attribute 已被淘汰。如果可以，建議使用 {{domxref("KeyboardEvent.key")}}。

## 注意

KeyboardEvent 有 `keydown`、`keypress`、`keyup` 三種事件。對大多數的按鍵而言，Gecko 觸發事件的順序如下：

1. 當按鍵按下時，會送出 `keydown` event。
2. 當按鍵不是特殊鍵（modifier key），例如 <kbd>Ctrl</kbd>、<kbd>Alt</kbd>……等等，會送出 `keypress` event。
3. 當按鍵放開時，會送出 `keyup` event。

### 特殊狀況

某些按鍵，例如 <kbd>Caps Lock</kbd>、<kbd>Num Lock</kbd> 和 <kbd>Scroll Lock</kbd> 能切換鍵盤上的 LED 燈。在 Windows 和 Linux 系統上，這些按鍵只會觸發 `keydown` 和 `keyup` 事件。但是 Linux 上的 Firefox 12 或更早的版本亦會觸發 `keypress` 事件。

而在 Mac 電腦則不同，<kbd>Caps Lock</kbd> 只會觸發 `keydown` 事件；而 <kbd>Num Lock</kbd> 則是只有舊版的 Mac 電腦（2007 或之前的版本）才有，現在的 Mac 即便使用外部鍵盤也不支援 <kbd>Num Lock</kbd>。雖說舊版的 Mac 電腦支援 <kbd>Num Lock</kbd> 鍵，但 <kbd>Num Lock</kbd> 並不會執行任何 KeyboardEvent；而 Gecko 瀏覽器在特殊情況（外接一個有 <kbd>F14</kbd> 的鍵盤）下能支援 <kbd>Scroll Lock</kbd>，但是它會產生 `keypress` 事件。這個異常狀態是個 bug，詳情可參考 [Firefox bug 602812](https://bugzil.la/602812)。

### 自動迴圈（Auto-Repeat）的執行

當按鍵按下去不放時，它會開始一個自動迴圈。並導致觸發一系列的相似事件，如下所示：

1. `keydown`
2. `keypress`
3. `keydown`
4. `keypress`
5. （不斷重複，直到使用者放開按鍵）
6. `keyup`

在 DOM Level 3 說明書有提及這問題是會發生的。其中所存在的問題如下說明：

#### 部分 GTK 環境，例如 Ubuntu 9.4，的自動迴圈

部分的 GTK-based 環境之中，自動迴圈在發生的過程中會自動觸發電腦本機的 key-up 事件。然而，對 Gecko 而言，並沒有方法可以分辨使用者重複點擊按鍵與自動迴圈（按鍵按住不放）的差異。在這類的環境下，按鍵按住不放會重複執行下列事件：

1. `keydown`
2. `keypress`
3. `keyup`
4. `keydown`
5. `keypress`
6. `keyup`
7. （不斷重複，直到使用者放開按鍵）
8. `keyup`

不幸地，在這些環境之下，web content 亦沒有方法告訴使用者重複點擊按鍵與自動迴圈的差異。

#### Gecko 5.0 以前的自動迴圈

Gecko 5.0 以前，在不同平台上，鍵盤的處理與現在相比較不統一。

- Windows
  - : 自動迴圈的結果與 Gecko 4.0 或更新的版本類似
- Mac
  - : 在第一個 keydown 執行後，僅執行 keypress 事件，一直到案件放開（即送出 keyup 事件指令），過程中不會送出任何 keydown 事件。
- Linux
  - : 鍵盤事件的執行根據平台不同而有所不同。它有可能表現得像是 Windows 也有可能像 Mac ，這取決於本地的事件模型（native event model）是如何執行的。

## 範例

```js
<!DOCTYPE html>
<html>
<head>
<script>
var metaChar = false;
var exampleKey = 16;

function keyEvent(event) {
  var key = event.keyCode || event.which;
  var keychar = String.fromCharCode(key);
  if (key == exampleKey) {
    metaChar = true;
  }
  if (key != exampleKey) {
    if (metaChar) {
      alert("Combination of metaKey + " + keychar);
      metaChar = false;
    } else {
      alert("Key pressed " + key);
    }
  }
}

function metaKeyUp (event) {
  var key = event.keyCode || event.which;

  if (key == exampleKey) {
    metaChar = false;
  }
}
</script>
</head>

<body onkeydown="keyEvent(event)" onkeyup="metaKeyUp(event)">
</body>
</html>
```

## 規格

{{Specifications}}

The `KeyboardEvent` interface specification went through numerous draft versions, first under DOM Events Level 2 where it was dropped as no consensus arose, then under DOM Events Level 3. This led to the implementation of non-standard initialization methods, the early DOM Events Level 2 version, {{domxref("KeyboardEvent.initKeyEvent()")}} by Gecko browsers and the early DOM Events Level 3 version, {{domxref("KeyboardEvent.initKeyboardEvent()")}} by others. Both have been superseded by the modern usage of a constructor: {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}}.

## 瀏覽器支援度

More compatibility data is available on other pages:

- `.code` ：請參考《瀏覽器支援度》的 {{domxref("KeyboardEvent.code")}} 部分。
- `.key`：請參考《瀏覽器支援度》的 {{domxref("KeyboardEvent.key")}} 部分。
- `.getModifierState()` ：請參考《瀏覽器支援度》的 {{domxref("KeyboardEvent.getModifierState")}} 部分。

{{Compat}}
