---
title: Window.navigator
slug: Web/API/Window/navigator
---

{{APIRef}}

The `Window.navigator` read-only property returns a reference to the {{domxref("Navigator")}} object, which can be queried for information about the application running the script.

## 語法

```plain
navigatorObject = window.navigator
```

## 範例

### Example #1: Browser detect and return a string

```js
var sBrowser,
  sUsrAg = navigator.userAgent;

if (sUsrAg.indexOf("Chrome") > -1) {
  sBrowser = "Google Chrome";
} else if (sUsrAg.indexOf("Safari") > -1) {
  sBrowser = "Apple Safari";
} else if (sUsrAg.indexOf("Opera") > -1) {
  sBrowser = "Opera";
} else if (sUsrAg.indexOf("Firefox") > -1) {
  sBrowser = "Mozilla Firefox";
} else if (sUsrAg.indexOf("MSIE") > -1) {
  sBrowser = "Microsoft Internet Explorer";
}

alert("You are using: " + sBrowser);
```

### Example #2: Browser detect and return an index

```js
function getBrowserId() {
  var aKeys = ["MSIE", "Firefox", "Safari", "Chrome", "Opera"],
    sUsrAg = navigator.userAgent,
    nIdx = aKeys.length - 1;

  for (nIdx; nIdx > -1 && sUsrAg.indexOf(aKeys[nIdx]) === -1; nIdx--);

  return nIdx;
}

console.log(getBrowserId());
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見
