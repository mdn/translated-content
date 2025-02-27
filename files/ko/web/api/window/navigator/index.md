---
title: Window.navigator
short-title: navigator
slug: Web/API/Window/navigator
l10n:
  sourceCommit: dab2246748e9aaf86edb1c06240ff8ad0549120c
---

{{APIRef}}

**`Window.navigator`** 읽기 전용 속성은 스크립트를 구동 중인 애플리케이션에 대한 메서드와 속성을 가진 {{domxref("Navigator")}} 객체의 참조를 반환합니다.

## 값

{{domxref("navigator")}} 객체.

## 예제

### 예제 1: 브라우저를 감지하고 그 이름을 문자열로 반환하기

```js
function getBrowserName(userAgent) {
  // 여기서는 순서가 중요하며, 목록에 없는 브라우저는 거짓 양성이 될 수 있습니다.

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
    return "Google Chrome or Chromium";
  } else if (userAgent.includes("Safari")) {
    // "Mozilla/5.0 (iPhone; CPU iPhone OS 15_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6 Mobile/15E148 Safari/604.1"
    return "Apple Safari";
  } else {
    return "알려지지 않은 브라우저";
  }
}

const browserName = getBrowserName(navigator.userAgent);
console.log(`당신이 사용중인 브라우저는 ${browserName}입니다.`);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
