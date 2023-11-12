---
title: Vibration API
slug: Web/API/Vibration_API
l10n:
  sourceCommit: 0fe27ff068e18f54bc689577c036fd7d82a55c4a
---

{{DefaultAPISidebar("Vibration API")}}

대부분의 최신 모바일 디바이스에는 바이브레이션 하드웨어를 포함하고 있습니다. 이를 통해 소프트웨어 코드를 이용해 바이브레이션 하드웨어를 제어하여, 모바일 디바이스를 흔들어 사용자에게 물리적인 피드백을 제공할 수 있습니다. **Vibration API**는 웹 앱이 이러한 하드웨어에 접근할 수 있도록 합니다. 하지만 대응하는 바이브레이션 장치가 없는 기기일 경우 아무 일도 일어나지 않습니다.

## 바이브레이션 설명하기

바이브레이션은 다양한 길이의 온·오프 펄스의 패턴이라고 할 수 있습니다. 패턴은 진동 시간(밀리초)을 나타내는 단일 정수로 구성되거나 진동 및 일시 정지 패턴을 나타내는 정수의 배열로 구성될 수 있습니다. 진동은 {{DOMxRef("Navigator.vibrate()")}} 라는 단일 메서드로 제어됩니다.

### 단일 바이브레이션

하나의 값 또는 하나의 값으로 구성된 배열을 지정하여 바이브레이션 하드웨어를 1회 진동시킬 수 있습니다.

```js
window.navigator.vibrate(200);
window.navigator.vibrate([200]);
```

위 두 가지 예제는 모두 디바이스를 200ms 동안 진동시킵니다.

### 바이브레이션 패턴

값 배열은 장치가 진동하는 주기와 진동하지 않는 주기를 번갈아 가며 나타냅니다. 배열의 각 값은 하나의 정수로 변환된 후 차례대로 장치가 진동해야 하는 시간, 장치가 진동하지 않아야 하는 시간으로 해석됩니다. 아래 예시를 살펴봅시다.

```js
window.navigator.vibrate([200, 100, 200]);
```

이 예제는 장치를 200ms 동안 진동시킨 후, 100ms 동안 멈추게 하고 그 후 다시 200ms 동안 장치를 진동시킵니다.

진동/정지 쌍을 원하는 만큼 지정할 수 있습니다. 그리고 배열 내에 홀수 개 또는 짝수 개로 입력할 수 있습니다. 각 진동 주기가 끝날 때마다 진동이 자동으로 중지되므로 마지막 항목으로 일시 정지를 제공할 필요가 없습니다.

### 이미 실행 중인 바이브레이션 취소

{{DOMxRef("Navigator.vibrate()")}} 메서드를 0 값을 호출하거나, 빈 배열, 0 값으로 구성된 배열로 호출하면 현재 진행 중인 진동 패턴은 모두 취소됩니다.

### 지속적인 바이브레이션

몇 가지 기본 `setInterval` 및 `clearInterval` 동작을 통해 지속적인 바이브레이션을 만들 수 있습니다.

```js
var vibrateInterval;

// 전달된 매개변수 수준으로 바이브레이션을 시작함
function startVibrate(duration) {
  navigator.vibrate(duration);
}

// 바이브레이션을 멈춤
function stopVibrate() {
  // 주기 및 지속적인 진동 중지
  if (vibrateInterval) clearInterval(vibrateInterval);
  navigator.vibrate(0);
}

// 주어진 지속시간과 간격대로 지속적인 바이브레이션을 시작함
// 숫자 값이 주어졌다고 가정함
function startPersistentVibrate(duration, interval) {
  vibrateInterval = setInterval(() => {
    startVibrate(duration);
  }, interval);
}
```

물론 위의 스니펫은 배열 기반 바이브레이션 방식을 고려하지 않았으며, 배열 기반 바이브레이션을 지속하려면 배열 항목의 합계를 계산하고, 그 수에 따라 간격을 만들어야 합니다. (아마도 추가적인 지연이 있을 것입니다)

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("window.navigator.vibrate()")}}
