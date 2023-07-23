---
title: Event.preventDefault()
slug: Web/API/Event/preventDefault
---

{{ ApiRef("DOM") }}

## 概要

如果事件可以被取消，就取消事件（即取消事件的預設行為）。但不會影響事件的傳遞，事件仍會繼續傳遞。

## 語法

```js
event.preventDefault();
```

## 範例

Toggling a checkbox is the default action of clicking on a checkbox. This example demonstrates how to prevent that from happening:

```html
<!doctype html>
<html>
  <head>
    <title>preventDefault example</title>
  </head>

  <body>
    <p>Please click on the checkbox control.</p>
    <form>
      <label for="id-checkbox">Checkbox</label>
      <input type="checkbox" id="id-checkbox" />
    </form>
    <script>
      document.querySelector("#id-checkbox").addEventListener(
        "click",
        function (event) {
          alert("preventDefault will stop you from checking this checkbox!");
          event.preventDefault();
        },
        false,
      );
    </script>
  </body>
</html>
```

You can see `preventDefault` in action [here](/samples/domref/dispatchEvent.html).

The following example demonstrates how invalid text input can be stopped from reaching the input field with preventDefault().

```html hidden
<!DOCTYPE html>
<html>
<head>
<title>preventDefault example</title>

<script>
```

```js hidden
function Init() {
  var myTextbox = document.getElementById("my-textbox");
  myTextbox.addEventListener("keypress", checkName, false);
}

function checkName(evt) {
  var charCode = evt.charCode;
  if (charCode != 0) {
    if (charCode < 97 || charCode > 122) {
      evt.preventDefault();
      alert(
        "Please use lowercase letters only." +
          "\n" +
          "charCode: " +
          charCode +
          "\n",
      );
    }
  }
}
```

```html hidden
</script>
</head>
<body onload="Init ()">
    <p>Please enter your name using lowercase letters only.</p>
    <form>
        <input type="text" id="my-textbox" />
    </form>
</body>
</html>
```

Here is the result of the preceding code:

{{ EmbedLiveSample('範例', '', '', '') }}

## 備註

Calling `preventDefault` during any stage of event flow cancels the event, meaning that any default action normally taken by the implementation as a result of the event will not occur.

> **備註：** As of Gecko 6.0, calling `preventDefault()` causes the {{ domxref("event.defaultPrevented") }} property's value to become `true`.

你可以查看 {{domxref("Event.cancelable")}} 屬性來檢查事件是否能夠被取消。對一個不能被取消的事件呼叫 `preventDefault()` 方法是沒有任何效果的。

`preventDefault()` 方法不會停止事件傳遞。若要停止事件繼續傳遞，可以使用 {{domxref("Event.stopPropagation()")}} 方法。

## 規範

{{Specifications}}
