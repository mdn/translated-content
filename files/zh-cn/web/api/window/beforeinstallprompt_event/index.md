---
title: Window.onbeforeinstallprompt
slug: Web/API/Window/beforeinstallprompt_event
---

{{ ApiRef() }}

**`Window.onbeforeinstallprompt`** 属性是一个事件处理程序，用于处理一个 `beforeinstallprompt`，当一个 Web 清单存在时，它将在移动设备上发送，但是在提示用户将网站保存到主屏幕之前。

## 句法

```plain
window.addEventListener("beforeinstallprompt", function(event) { ... });

window.onbeforeinstallprompt = function(event) { ...};
```

## 范例

The following example uses the beforeinstallprompt function to verify that it is an appropriate time to display an installation prompt to the user. If it is not, the event is redispatched.

```js
let isTooSoon = true;
window.addEventListener("beforeinstallprompt", function (e) {
  if (isTooSoon) {
    e.preventDefault(); // Prevents prompt display
    // Prompt later instead:
    setTimeout(function () {
      isTooSoon = false;
      e.prompt(); // Shows prompt
    }, 10000);
  }

  // The event was re-dispatched in response to our request
  // ...
});
```

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("BeforeInstallPromptEvent.prompt")}}
- {{domxref("BeforeInstallPromptEvent")}}
