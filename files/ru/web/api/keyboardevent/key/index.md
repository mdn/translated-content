---
title: KeyboardEvent.key
slug: Web/API/KeyboardEvent/key
---

{{APIRef("События DOM")}}

Ключ события {{domxref("KeyboardEvent")}} **`key`** доступен только для чтения, возвращает значение клавиши, нажатой пользователем, принимая во внимание состояние клавиш-модификаторов, таких как <kbd>Shift</kbd> , а также локаль и раскладку клавиатуры. Его значение определяется следующим образом:

#### Key values

See a full list of [key values](/docs/Web/API/KeyboardEvent/key/Key_Values).

- If the pressed key has a printed representation, the returned value is a non-empty Unicode character string containing the printable representation of the key.
- If the pressed key is a control or special character, the returned value is one of the [pre-defined key values](/docs/Web/API/KeyboardEvent/key/Key_Values).
- If the `KeyboardEvent` represents the press of a dead key, the key value must be "`Dead`".
- Some specialty keyboard keys (such as the extended keys for controlling media on multimedia keyboards) don't generate key codes on Windows; instead, they trigger `WM_APPCOMMAND` events. These events get mapped to DOM keyboard events, and are listed among the "Virtual key codes" for Windows, even though they aren't actually key codes.
- If the key cannot be identified, the returned value is `"Unidentified"`.

## KeyboardEvent sequence

Every `KeyboardEvent` is fired in a pre-determined sequence. For a given key press, the sequence of `KeyboardEvent`s fired is as follows assuming that {{domxref("Event.preventDefault")}} is not called:

1. A {{event("keydown")}} event is first fired. If the key is held down further and the key produces a character key, then the event continues to be emitted in a platform implementation dependent interval and the {{domxref("KeyboardEvent.repeat")}} read only property is set to `true`.
2. If the key produces a character key that would result in a character being inserted into possibly an {{HTMLElement("input")}}, {{HTMLElement("textarea")}} or an element with {{domxref("HTMLElement.contentEditable")}} set to true, the {{event("beforeinput")}} and {{event("input")}} event types are fired in that order. Note that some other implementations may fire {{event("keypress")}} event if supported. The events will be fired repeatedly while the key is held down.
3. A {{event("keyup")}} event is fired once the key is released. This completes the process.

In sequence 1 & 3, the `KeyboardEvent.key` attribute is defined and is set appropriately to a value according to the rules defined ealier.

## KeyboardEvent sequence example

Consider the event sequence generated when we interact with the <kbd>Shift</kbd> and the <kbd>2</kbd> key using a U.S keyboard layout as compared to when we do so using a UK keyboard layout.

Try experimenting using the following two test cases:

1. Press and hold the&#x20;

   <kbd>Shift</kbd>

   &#x20;key, then press&#x20;

   <kbd>2</kbd>

   &#x20;and release it. Next, release the&#x20;

   <kbd>Shift</kbd>

   &#x20;key.

2. Press and hold the&#x20;

   <kbd>Shift</kbd>

   &#x20;key, then press and hold&#x20;

   <kbd>2</kbd>

   . Release the&#x20;

   <kbd>Shift</kbd>

   &#x20;key. Finally, release&#x20;

   <kbd>2</kbd>

   .

### HTML

```html
<div class="fx">
  <div>
    <textarea rows="5" name="test-target" id="test-target"></textarea>
    <button type="button" name="btn-clear-console" id="btn-clear-console">clear console</button>
  </div>
  <div class="flex">
    <pre id="console-log"></div>
  </div>
</div>
```

### CSS

```css
.fx {
  -webkit-display: flex;
  display: flex;
  margin-left: -20px;
  margin-right: -20px;
}

.fx > div {
  padding-left: 20px;
  padding-right: 20px;
}

.fx > div:first-child {
  width: 30%;
}

.flex {
  -webkit-flex: 1;
  flex: 1;
}

#test-target {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}
```

### JavaScript

```js
let textarea = document.getElementById("test-target"),
  consoleLog = document.getElementById("console-log"),
  btnClearConsole = document.getElementById("btn-clear-console");

function logMessage(message) {
  document.getElementById("console-log").innerHTML += message + "<br>";
}

textarea.addEventListener("keydown", (e) => {
  if (!e.repeat) logMessage(`Key "${e.key}" pressed  [event: keydown]`);
  else logMessage(`Key "${e.key}" repeating  [event: keydown]`);
});

textarea.addEventListener("beforeinput", (e) => {
  logMessage(`Key "${e.data}" about to be input  [event: beforeinput]`);
});

textarea.addEventListener("input", (e) => {
  logMessage(`Key "${e.data}" input  [event: input]`);
});

textarea.addEventListener("keyup", (e) => {
  logMessage(`Key "${e.key}" released  [event: keyup]`);
});

btnClearConsole.addEventListener("click", (e) => {
  let child = consoleLog.firstChild;
  while (child) {
    consoleLog.removeChild(child);
    child = consoleLog.firstChild;
  }
});
```

### Result

{{EmbedLiveSample('KeyboardEvent_sequence_example')}}

> **Примечание:** On browsers that don't fully implement the {{domxref("InputEvent")}} interface which is used for the {{event("beforeinput")}} and {{event("input")}} events, you may get incorrect output on those lines of the log output.

### Case 1

When the shift key is pressed, a {{event("keydown")}} event is first fired, and the `key` property value is set to the string `"Shift"`. As we keep holding this key, the {{event("keydown")}} event does not continue to fire repeatedly because it does not produce a character key.

When `key 2` is pressed, another {{event("keydown")}} event is fired for this new key press, and the `key` property value for the event is set to the string `"@"` for the U.S keyboard type and `"""` for the UK keyboard type, because of the active modifier `shift` key. The {{event("beforeinput")}} and {{event("input")}} events are fired next because a character key has been produced.

As we release the `key 2`, a {{event("keyup")}} event is fired and the `key` property will maintain the string values `"@"` and `"""` for the different keyboard layouts respectively.

As we finally release the `shift` key, another {{event("keyup")}} event is fired for it, and the key attribute value remains `"Shift"`.

### Case 2

When the shift key is pressed, a {{event("keydown")}} event is first fired, and the `key` property value is set to be the string `"Shift"`. As we keep holding this key, the keydown event does not continue to fire repeatedly because it produced no character key.

When `key 2` is pressed, another {{event("keydown")}} event is fired for this new key press, and the `key` property value for the event is set to be the string `"@"` for the U.S keyboard type and `"""` for the UK keyboard type, because of the active modifier `shift` key. The {{event("beforeinput")}} and {{event("input")}} events are fired next because a character key has been produced. As we keep holding the key, the {{event("keydown")}} event continues to fire repeatedly and the {{domxref("KeyboardEvent.repeat")}} property is set to `true`. The {{event("beforeinput")}} and {{event("input")}} events are fired repeatedly as well.

As we release the `shift` key, a {{event("keyup")}} event is fired for it, and the key attribute value remains `"Shift"`. At this point, notice that the `key` property value for the repeating keydown event of the `key 2` key press is now "2" because the modifier `shift` key is no longer active. The same goes for the {{domxref("InputEvent.data")}} property of the {{event("beforeinput")}} and {{event("input")}} events.

As we finally release the `key 2`, a {{event("keyup")}} event is fired but the `key` property will be set to the string value `"2"` for both keyboard layouts because the modifier `shift` key is no longer active.

## Example

This example uses {{domxref("EventTarget.addEventListener()")}} to listen for {{event("keydown")}} events. When they occur, the key's value is checked to see if it's one of the keys the code is interested in, and if it is, it gets processed in some way (possibly by steering a spacecraft, perhaps by changing the selected cell in a spreadsheet).

```js
window.addEventListener(
  "keydown",
  function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }

    switch (event.key) {
      case "Down": // IE/Edge specific value
      case "ArrowDown":
        // Do something for "down arrow" key press.
        break;
      case "Up": // IE/Edge specific value
      case "ArrowUp":
        // Do something for "up arrow" key press.
        break;
      case "Left": // IE/Edge specific value
      case "ArrowLeft":
        // Do something for "left arrow" key press.
        break;
      case "Right": // IE/Edge specific value
      case "ArrowRight":
        // Do something for "right arrow" key press.
        break;
      case "Enter":
        // Do something for "enter" or "return" key press.
        break;
      case "Esc": // IE/Edge specific value
      case "Escape":
        // Do something for "esc" key press.
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }

    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  },
  true,
);
```

## Specification

{{Specifications}}

## Browser compatibility

{{Compat}}
