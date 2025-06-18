---
title: Web Share API
slug: Web/API/Web_Share_API
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("Web Share API")}}{{securecontext_header}}

**Web Share API**는 사용자가 선택한 공유 대상에 텍스트, 링크, 파일 및 기타 콘텐츠를 공유할 수 있는 메커니즘을 제공합니다.

> [!NOTE]
> 이 API는 [Web Workers](/ko/docs/Web/API/Web_Workers_API)에서 사용할 수 없습니다 ({{domxref("WorkerNavigator")}}를 통해 노출되지 않음).

> [!NOTE]
> 이 API를 웹사이트가 자신을 공유 대상으로 지정할 수 있도록 해주는 [Web Share Target API](/ko/docs/Web/Manifest/share_target)와 혼동해서는 안 됩니다.

## 개념 및 사용 방법

**Web Share API**는 사이트가 텍스트, 링크, 파일 및 기타 콘텐츠를 사용자가 선택한 공유 대상으로 공유할 수 있도록 하며, 기본 운영 체제의 공유 메커니즘을 활용합니다. 이러한 공유 대상에는 일반적으로 시스템 클립보드, 이메일, 연락처 또는 메시징 애플리케이션, Bluetooth 또는 Wi-Fi 채널이 포함됩니다.

이 API는 두 가지 메서드를 제공합니다. {{domxref("navigator.canShare()")}} 메서드는 데이터를 {{domxref("navigator.share()")}}에 전달하여 공유하기 전에 해당 데이터가 "공유 가능"한지 검증하는 데 사용할 수 있습니다.

{{domxref("navigator.share()")}} 메서드는 기본 운영 체제의 네이티브 공유 메커니즘을 호출하고 지정된 데이터를 전달합니다. 이 메서드는 {{Glossary("transient activation", "임시 활성화")}}가 필요하므로 반드시 버튼 클릭과 같은 UI 이벤트에서 트리거되어야 하며, 메서드에 전달되는 데이터는 네이티브 구현에서 지원하는 유효한 데이터여야 합니다.

**Web Share API**는 [web-share](/ko/docs/Web/HTTP/Headers/Permissions-Policy/web-share) 권한 정책에 의해 제한됩니다. 권한 정책이 지원되지만 허용되지 않은 경우, 두 메서드 모두 데이터를 공유할 수 없다고 표시합니다.

## 인터페이스

### 다른 인터페이스로의 확장

- {{domxref("navigator.canShare()")}}
  - : 지정된 데이터가 공유 가능한지 여부를 나타내는 불리언 값을 반환합니다.
- {{domxref("navigator.share()")}}
  - : 전달된 데이터가 공유 대상에게 성공적으로 전송되었을 경우, 이를 해결하는 {{jsxref("Promise")}}를 반환합니다. 이 메서드는 버튼 클릭 또는 기타 사용자 활성화에서 호출되어야 합니다 ({{Glossary("transient activation", "임시 활성화")}} 필요).

## 예제

아래 코드는 버튼 클릭을 통해 {{domxref("navigator.share()")}}를 사용하여 링크를 공유하는 방법을 보여줍니다.

```js
const shareData = {
  title: "MDN",
  text: "Learn web development on MDN!",
  url: "https://developer.mozilla.org",
};

const btn = document.querySelector("button");
const resultPara = document.querySelector(".result");

// Share must be triggered by "user activation"
btn.addEventListener("click", async () => {
  try {
    await navigator.share(shareData);
    resultPara.textContent = "MDN shared successfully";
  } catch (err) {
    resultPara.textContent = `Error: ${err}`;
  }
});
```

위 예제는 [Web share test](https://mdn.github.io/dom-examples/web-share/)에서 가져왔습니다 ([소스 코드 보기](https://github.com/mdn/dom-examples/blob/main/web-share/index.html)). 또한, {{domxref("navigator.share()")}}에서 실시간 예제를 확인할 수 있습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Share Target API](/ko/docs/Web/Manifest/share_target)
