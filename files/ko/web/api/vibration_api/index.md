---
title: Vibration API
slug: Web/API/Vibration_API
---

{{DefaultAPISidebar("Vibration API")}}

요즘 나오는 대부분은 모바일 디바이스는 바이브레이션 하드웨어를 포함하고 있다. 소프트웨어 코드를 이용해 바이브레이션 하드웨어를 제어하면, 모바일 디바이스를 흔들리게 만들어 사용자에게 물리적인 피드백을 제공할 수 있다.

**Vibration API**는 웹앱들이 기기에 장착된 물리 진동장치를 통해 진동을 전달할 수 있도록 해줍니다. 하지만 대응하는 진동 장치가 없는 기기일 경우 아무일도 일어나지 않습니다.

## Describing vibrations

바이브레이션은 온오프 펄스들의 패턴이라고 할 수 있는데, 이 펄스들은 아마도 다양한 길이를 가질 것이다. 이 패턴은 아마 하나의 정수값으로 구성될 수 있는데 이 정수값은 진동이 일어날 밀리세컨드 수를 의미한다. 또한 이 패턴은 정수 배열이 될 수도 있는데 이것은 진동과 정지들의 패턴을 의미한다. 바이브레이션은 {{domxref("window.navigator.vibrate()")}} 라는 하나의 메소드로 제어된다.

### 한번 진동시키기

여러분은 다음과 같이 하나의 값 또는 하나의 값으로 구성된 배열을 명시함으로써 바이브레이션 하드웨어를 1회 진동시킬 수 있을 것이다.

```js
window.navigator.vibrate(200);
window.navigator.vibrate([200]);
```

이 두 가지 예제들은 디바이스를 200ms 동안 진동시킨다.

### 패턴이 있는 진동 만들기

배 열에 있는 값들은 다바이스가 진동해야 하는 시간과 진동하지 않아야 하는 시간을 번갈아가며 적어놓은 것이다. 배열에 있는 각 값은 하나의 정수로 변환된 후 차례대로 장치가 진동해야 하는 시간, 장치가 진동하지 않아야 하는 시간으로 해석된다. 다음 예제를 보자.

```js
window.navigator.vibrate([200, 100, 200]);
```

이 예제는 장치를 200ms 동안 진동시킨 후 100ms 동안 멈추게 하고 그 후 다시 200ms 동안 장치를 진동시킨다.

여 러분은 여러분이 원하는 진동/정지 페어를 명시할 수 있다. 그리고 배열 내에 홀수 또는 짝수개의 값들을 명시할 수도 있다. 이렇게 하는 이유는 각각의 진동 시간이 끝나면 디바이스의 진동은 자동적으로 멈추게 되므로 배열의 마지막 값이 정지에 해당하는 값이라면 그 값은 아무 의미가 없기 때문이다.

### 이미 실행중인 진동 캔슬하기

{{domxref("window.navigator.vibrate()")}} 메소드를 0값을 호출하거나, 빈 배열, 0값으로 구성된 배열로 호출하면 현재 진행중인 진동패턴은 취소될 것이다.

### 지속적인 진동 내보내기

Some basic `setInterval` and `clearInterval` action will allow you to create persistent vibration:

```js
var vibrateInterval;

// Starts vibration at passed in level
function startVibrate(duration) {
  navigator.vibrate(duration);
}

// Stops vibration
function stopVibrate() {
  // Clear interval and stop persistent vibrating
  if (vibrateInterval) clearInterval(vibrateInterval);
  navigator.vibrate(0);
}

// Start persistent vibration at given duration and interval
// Assumes a number value is given
function startPeristentVibrate(duration, interval) {
  vibrateInterval = setInterval(function () {
    startVibrate(duration);
  }, interval);
}
```

Of course the snippet above doesn't take into account the array method of vibration; persistent array-based vibration will require calculating the sum of the array items and creating an interval based on that number (with an additional delay, probably).

### Why use Vibration API?

This API is clearly targeted toward mobile devices. The Vibration API would be good for alerts within mobile web applications, and would be especially awesome when used in games or media-heavy applications. Imagine watching a video on your mobile device, and during an explosion scene, your phone got a bit of a shake. Or playing Bomberman and feeling a gentle kick when a block explodes!

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("window.navigator.vibrate()")}}
