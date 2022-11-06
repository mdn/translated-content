---
title: BeforeInstallPromptEvent.prompt()
slug: Web/API/BeforeInstallPromptEvent/prompt
---

{{APIRef("")}}

{{SeeCompatTable}}

{{domxref("BeforeInstallPromptEvent")}} 接口的 **`prompt()`** 方法允许一个开发人员在自己选择的一个时间显示安装提示。

## 句法

```
BeforeInstallPromptEvent.prompt()
```

### 参数

无

### 返回

一个空的 {{jsxref("Promise")}}.

## 范例

```
let isTooSoon = true;
window.addEventListener("beforeinstallprompt", function(e) {
  if (isTooSoon) {
    e.preventDefault(); // Prevents prompt display
    // Prompt later instead:
    setTimeout(function() {
      isTooSoon = false;
      e.prompt(); // Throws if called more than once or default not prevented
    }, 10000);
  }

  // The event was re-dispatched in response to our request
  // ...
});
```

## 规范

This method is not part of a specification.

## 浏览器兼容性

{{Compat}}
