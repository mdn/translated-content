---
title: Idle Detection API
slug: Web/API/Idle_Detection_API
l10n:
  sourceCommit: 21d3e89589aaf9e5cfa667de679134513ab833f3
---

{{securecontext_header}}{{DefaultAPISidebar("Idle Detection API")}}{{SeeCompatTable}}

The Idle Detection API는 특히 사용자의 유휴 상태(활성 상태, 유휴 상태, 잠금 상태)를 감지하고, 스크립트에서 주기적으로 조회하지 않고도 유휴 상태 변경에 대한 알림을 받을 수 있는 수단을 제공합니다.

## 개념 및 사용법

네이티브 애플리케이션과 브라우저 확장 프로그램은 유휴 상태 감지를 사용하여, 사용자가 디바이스와 상호 작용하는 시간을 기준으로 사용자 환경을 구성합니다. 예를 들어 채팅 애플리케이션은 애플리케이션의 다른 사용자에게 어떤 사람이 이용 중인지 여부를 표시할 수 있습니다. 다른 애플리케이션은 사용자가 앱과 상호 작용할 때만 알림을 표시하도록 선택할 수 있습니다. 웹 애플리케이션도 유사한 사용 사례에 이 API를 사용할 수 있습니다. 또한 프로그레시브 웹 앱은 유휴 상태 감지 기능을 사용하여 앱이 사용되지 않을 때 서비스 워커 업데이트를 실행할 수 있습니다.

## 인터페이스

- {{domxref("IdleDetector")}} {{Experimental_Inline}}
  - : 디바이스 또는 화면에서 사용자 활동을 감지하는 방법과 이벤트를 제공합니다.

## 예제

다음 예는 탐지기를 만들고, 사용자의 유휴 상태에 대한 변경 사항을 기록하는 방법을 보여줍니다. 버튼은 권한을 요청하기 전에 필요한 사용자 활성화를 가져오는 데 사용됩니다.

```js
const controller = new AbortController();
const signal = controller.signal;

startButton.addEventListener("click", async () => {
  if ((await IdleDetector.requestPermission()) !== "granted") {
    console.error("Idle detection permission denied.");
    return;
  }

  try {
    const idleDetector = new IdleDetector();
    idleDetector.addEventListener("change", () => {
      const userState = idleDetector.userState;
      const screenState = idleDetector.screenState;
      console.log(`Idle change: ${userState}, ${screenState}.`);
    });

    await idleDetector.start({
      threshold: 60_000,
      signal,
    });
    console.log("IdleDetector is active.");
  } catch (err) {
    // 권한 거부나 최상위 프레임 외부에서의 실행 등
    // 초기화와 관련된 오류를 처리합니다.
    console.error(err.name, err.message);
  }
});

stopButton.addEventListener("click", () => {
  controller.abort();
  console.log("IdleDetector is stopped.");
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
