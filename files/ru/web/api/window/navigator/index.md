---
title: Window.navigator
slug: Web/API/Window/navigator
---

{{APIRef}}

`Window.navigator` является свойством только для чтения и возвращает ссылку на объект {{domxref("Navigator")}}, который может запросить информацию о приложении, запустившем скрипт.

## Синтаксис

```
navigatorObject = window.navigator
```

## Примеры

### Пример #1: Распознаётся браузер и возвращается строкой

```js
var sBrowser,
  sUsrAg = navigator.userAgent;

//The order matters here, and this may report false positives for unlisted browsers.

if (sUsrAg.indexOf("Firefox") > -1) {
  sBrowser = "Mozilla Firefox";
  //"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
} else if (sUsrAg.indexOf("Opera") > -1) {
  sBrowser = "Opera";
} else if (sUsrAg.indexOf("Trident") > -1) {
  sBrowser = "Microsoft Internet Explorer";
  //"Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
} else if (sUsrAg.indexOf("Edge") > -1) {
  sBrowser = "Microsoft Edge";
  //"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
} else if (sUsrAg.indexOf("Chrome") > -1) {
  sBrowser = "Google Chrome or Chromium";
  //"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
} else if (sUsrAg.indexOf("Safari") > -1) {
  sBrowser = "Apple Safari";
  //"Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
} else {
  sBrowser = "unknown";
}

alert("You are using: " + sBrowser);
```

### Пример #2: Распознаётся браузер и возвращается его индекс

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

## Спецификация

{{Specifications}}

## Совместимые браузеры

{{Compat}}
