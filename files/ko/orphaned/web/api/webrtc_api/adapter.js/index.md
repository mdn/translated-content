---
title: Improving compatibility using WebRTC adapter.js
slug: orphaned/Web/API/WebRTC_API/adapter.js
original_slug: Web/API/WebRTC_API/adapter.js
---

{{DefaultAPISidebar("WebRTC")}}

WebRTC [사양](https://www.w3.org/TR/webrtc/)은 비교적 인정적이지만, 모든 브라우저가 모든 기능이 구현되어 있는 것은 아니다. 또한, 일부 브라우저는 여전히 일부 혹은 모든 WebRTC API에 접두사가 붙어 있는상황이다. 이러한 문제에 대해 수동적으로 코딩을 할 수 있지만, 더 쉬운 방법이 있다.WebRTC 단체는 다른 브라우저의 WebRTC 구현에서 호환성 문제를 해결하기 위해 [WebRTC 어댑터를 GitHub에서 제공한다.](https://github.com/webrtc/adapter/) 어댑터는 WebRTC가 지원되는 모든 브라우저에서 "그냥 작동"되도록 당신이 작성한 코드가 사양에 적합하도록 해 주는 JavaScript 코드 모음이다. 더이상 접두사 API를 조건부로 사용하거나 다른 해결 방법을 구현할 필요가 없다.

> **참고:** WebRTC 및 지원 브라우저에서 API 용어의 기능과 이름 지정이 지속적으로 변경되고 있기 때문에, 일반적으로 이 어댑터의 사용을 권장한다.

이 어댑터는 [BSD 스타일 라이선스](https://github.com/webrtc/adapter/blob/master/LICENSE.md)로 제공된다.

## What adapter.js does

For each version of each browser that supports WebRTC, adapter.js implements the needed polyfills, establishes the non-prefixed names of APIs, and applies any other changes needed to make the browser run code written to the WebRTC specification.

For example, on Firefox versions older than 38, the adapter adds the {{domxref("RTCPeerConnection.urls")}} property; Firefox doesn't natively support this property until Firefox 38, while on Chrome, the adapter adds support for the {{jsxref("Promise")}} based API is added if it's not present. These are just a couple of examples; there are of course other adjustments made for you by the shim.

The WebRTC adapter currently supports Mozilla Firefox, Google Chrome, Apple Safari, and Microsoft Edge.

## Using adapter.js

In order to use adapter.js, you need to include adapter.js on any page that uses WebRTC APIs:

1. Download a copy of the [latest version of adapter.js](https://github.com/webrtc/adapter/tree/master/release) from GitHub.
2. Place it in your site's directory structure (such as in your scripts directory).
3. Include adapter.js in your project: `<script src="adapter.js"></script>`
4. Write your code, using WebRTC APIs per the specification, knowing that your code should work on all browsers.
5. Keep in mind that even a good shim like this one doesn't mean you don't need to test your code on different browsers (and ideally different versions of each browser).

## See also

- [The WebRTC adapter project on GitHub](https://github.com/webrtc/adapter)
