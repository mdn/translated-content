---
title: window：navigator 属性
slug: Web/API/Window/navigator
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{ApiRef}}

只读属性 **`Window.navigator`** 会返回一个 {{domxref("Navigator")}} 对象的引用，可以用于请求运行当前代码的应用程序的相关信息。

## 值

一个 {{domxref("navigator")}} 对象。

## 示例

### 示例 1：检测浏览器并返回浏览器名称字符串

```js
function getBrowserName(userAgent) {
  // 此处顺序很重要，并且对于未列出的浏览器，这可能会报错。

  if (userAgent.includes("Firefox")) {
    // "Mozilla/5.0 (X11; Linux i686; rv:104.0) Gecko/20100101 Firefox/104.0"
    return "Mozilla Firefox";
  } else if (userAgent.includes("SamsungBrowser")) {
    // "Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-G955F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.4 Chrome/67.0.3396.87 Mobile Safari/537.36"
    return "Samsung Internet";
  } else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
    // "Mozilla/5.0 (Macintosh; Intel Mac OS X 12_5_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36 OPR/90.0.4480.54"
    return "Opera";
  } else if (userAgent.includes("Edge")) {
    // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
    return "Microsoft Edge (Legacy)";
  } else if (userAgent.includes("Edg")) {
    // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36 Edg/104.0.1293.70"
    return "Microsoft Edge (Chromium)";
  } else if (userAgent.includes("Chrome")) {
    // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"
    return "Google Chrome 或 Chromium";
  } else if (userAgent.includes("Safari")) {
    // "Mozilla/5.0 (iPhone; CPU iPhone OS 15_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6 Mobile/15E148 Safari/604.1"
    return "Apple Safari";
  } else {
    return "未知";
  }
}

const browserName = getBrowserName(navigator.userAgent);
console.log(`你正在使用 ${browserName} 浏览器`);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
