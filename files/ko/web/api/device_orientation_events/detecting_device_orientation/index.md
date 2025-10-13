---
title: 디바이스 방향 감지
slug: Web/API/Device_orientation_events/Detecting_device_orientation
l10n:
  sourceCommit: 49ed411c875121fd7585c379a6549562ceb980a9
---

{{DefaultAPISidebar("Device Orientation Events")}}{{securecontext_header}}

디바이스 내 웹 환경이 발전함에 따라 웹에서도 **방향**을 측정할 수 있습니다. 이는 중력의 변화를 토대로 디바이스의 변위를 측정함을 뜻합니다. 특히, 이러한 정보를 바탕으로 디스플레이를 자동으로 회전시켜 똑바로 화면을 유지할 수 있으며, 웹 콘텐츠에서 와이드 스크린을 제공할 수 있게 됩니다.

이러한 방향 정보를 처리하기 위해서는 두 가지의 자바스크립트 이벤트가 필요합니다. 첫번째로 방향 이벤트 {{domxref("DeviceOrientationEvent")}}가 있습니다. 사용자가 디바이스를 이동하면서 생기는 회전과 고도 변화를 측정할 수 있습니다.

두번째는 가속도계의 변화에 따라 이벤트를 발생시키는 모션 이벤트 {{domxref("DeviceMotionEvent")}} 가 있습니다. 방향이 아닌 가속도의 변화를 감지하기 때문에 가속도계 이벤트와는 다릅니다. {{domxref("DeviceOrientationEvent")}} 는 모바일 장치에서 자주 사용됩니다.

## 방향 이벤트 처리

방향을 감지하기 위해서는 이 이벤트를 addEventListener에 지정해주면 됩니다. {{domxref("Window.deviceorientation_event", "deviceorientation")}}:

```js
window.addEventListener("deviceorientation", handleOrientation, true);
```

이벤트를 등록한 후, 리스너 함수는 업데이트된 방향을 주기적으로 호출하게 됩니다.

방향 이벤트에는 다음 4가지 값이 포함됩니다.

- {{domxref("DeviceOrientationEvent.absolute")}}
- {{domxref("DeviceOrientationEvent.alpha")}}
- {{domxref("DeviceOrientationEvent.beta")}}
- {{domxref("DeviceOrientationEvent.gamma")}}

이벤트 핸들러 함수는 다음과 같이 사용됩니다.

```js
function handleOrientation(event) {
  const absolute = event.absolute;
  const alpha = event.alpha;
  const beta = event.beta;
  const gamma = event.gamma;

  // 방향 데이터로 사용자 작업 수행
}
```

> [!NOTE]
> [parallax](https://github.com/wagerfield/parallax) 는 가속도계와 자이로스코프를 모바일에서 처리하기 위한 폴리필 입니다. 디바이스 호환성 처리를 극복하는데 유용할 수 있습니다.

### 방향 값 설명

각 축의 값은 좌표 프레임을 기준으로 주어진 축을 중심으로 변한 회전량을 나타냅니다. 이는 아래에 요약된 [방향과 모션 데이터 설명](/ko/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained) 아티클에서 자세하게 설명됩니다.

- {{domxref("DeviceOrientationEvent.alpha")}} Z축을 중심으로 움직임을 나타냅니다. 0에서 360 사이의 값을 가지는 degree 단위로 표기됩니다.
- {{domxref("DeviceOrientationEvent.beta")}} X축을 중심으로 움직임을 나타냅니다. -180에서 180도 사이의 값을 가지며 디바이스의 앞면과 뒷면의 움직임을 나타냅니다.
- {{domxref("DeviceOrientationEvent.gamma")}} Y축을 중심으로 움직임을 나타냅니다. -90에서 90도 내의 사이의 값을 가지며 디바이스의 좌우 움직임을 나타냅니다.

### 예제

이 예제는 {{domxref("Window.deviceorientation_event", "deviceorientation")}} 이벤트를 지원하는 모든 브라우저와 방향을 감지할 수 있는 디바이스에서 작동합니다.

아래 예제에서는 배경에 있는 공을 표시합니다.

```html
<div class="garden">
  <div class="ball"></div>
</div>
디바이스를 바닥에 놓고 XY축을 따라 회전하면 공이 각각 상하좌우로 움직입니다.
<pre class="output"></pre>
```

배경의 너비는 200픽셀 단위고 공은 중앙에 위치합니다.

```css
.garden {
  position: relative;
  width: 200px;
  height: 200px;
  border: 5px solid #ccc;
  border-radius: 10px;
}

.ball {
  position: absolute;
  top: 90px;
  left: 90px;
  width: 20px;
  height: 20px;
  background: green;
  border-radius: 100%;
}
```

이제 장치를 움직이면서 공을 움직일 수 있습니다.

```js
const ball = document.querySelector(".ball");
const garden = document.querySelector(".garden");
const output = document.querySelector(".output");

const maxX = garden.clientWidth - ball.clientWidth;
const maxY = garden.clientHeight - ball.clientHeight;

function handleOrientation(event) {
  let x = event.beta; // 각도의 범위는 [-180,180)
  let y = event.gamma; // 각도의 범위는 [-90,90)

  output.textContent = `beta: ${x}\n`;
  output.textContent += `gamma: ${y}\n`;

  // 장치를 반대로 인지하지 않게 하기 위해
  // X 값을 다음과 같이 제한합니다. [-90,90]
  if (x > 90) {
    x = 90;
  }
  if (x < -90) {
    x = -90;
  }

  // 계산을 편하게 하기 위해 다음과 같이 범위를 조정합니다.
  // x와 y는 [0,180]
  x += 90;
  y += 90;

  // 10은 공의 절반 크기입니다.
  // 공의 지점을 중앙으로 이동하기 위합입니다.
  ball.style.left = `${(maxY * y) / 180 - 10}px`; // y축을 중심으로 회전하면 공은 수평 방향으로 이동합니다.
  ball.style.top = `${(maxX * x) / 180 - 10}px`; // x축을 중심으로 회전하면 공은 수직 방향으로 이동합니다.
}

window.addEventListener("deviceorientation", handleOrientation);
```

{{LiveSampleLink("Orientation_example", "여기를 클릭하여")}} 예제를 새 창에서 엽니다.

{{EmbedLiveSample('Orientation_example', '230', '260')}}

## 모션 이벤트 처리

모션 이벤트는 다음과 같은 경우를 제외하고는 방향 이벤트와 동일하게 작동합니다. {{domxref("Window.devicemotion_event", "devicemotion")}}

```js
window.addEventListener("devicemotion", handleMotion, true);
```

실제로 변하는 것은 이벤트 리스너의 파라미터로 전달된, {{domxref("DeviceMotionEvent")}} 객체 내에서 제공되는 정보인 `handleMotion()` 입니다.

모션 이벤트는 아래 4가지 속성을 포함합니다.

- {{domxref("DeviceMotionEvent.acceleration")}}
- {{domxref("DeviceMotionEvent.accelerationIncludingGravity")}}
- {{domxref("DeviceMotionEvent.rotationRate")}}
- {{domxref("DeviceMotionEvent.interval")}}

### 모션 값 설명

{{domxref("DeviceMotionEvent")}} 객체는 디바이스의 위치와 방향에 대한 변경 속도를 포함합니다. 변경 사항은 3개의 축으로 제공됩니다. (자세한 내용은 [방향과 모션 데이터 설명](/ko/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained) 참조하십시오).

{{domxref("DeviceMotionEvent.acceleration","acceleration")}} 과 {{domxref("DeviceMotionEvent.accelerationIncludingGravity","accelerationIncludingGravity")}} 이 축들은 다음과 같습니다.

- `x`
  - : 서쪽에서 동쪽으로 가는 축을 나타냅니다.
- `y`
  - : 남쪽에서 북쪽으로 가는 축을 나타냅니다.
- `z`
  - : 바닥에 수직인 축을 나타냅니다.

{{domxref("DeviceMotionEvent.rotationRate","rotationRate")}} 회전의 경우 다음과 같습니다.

- `alpha`
  - : 화면에 수직인 축을 따라 회전 속도를 나타냅니다.
- `beta`
  - : 왼쪽에서 오른쪽으로 가는 축을 따라 회전 속도를 나타냅니다.
- `gamma`
  - : 디바이스를 평면으로 놓은 상태에서 아래에서 위로 가는 축을 따라 회전 속도를 나타냅니다.

마지막으로, {{domxref("DeviceMotionEvent.interval","interval")}} 는 디바이스에서 데이터를 가져오는 간격을 나타냅니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("DeviceOrientationEvent")}}
- {{domxref("DeviceMotionEvent")}}
- [Orientation and motion data explained](/ko/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
- [Using deviceorientation in 3D Transforms](/ko/docs/Web/API/Device_orientation_events/Using_device_orientation_with_3D_transforms)
- [Cyber Orb: 2D maze game with device orientation](/ko/docs/Games/Tutorials/HTML5_Gamedev_Phaser_Device_Orientation)
