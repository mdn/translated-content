---
title: Web audio 공간화 기초
slug: Web/API/Web_Audio_API/Web_audio_spatialization_basics
---

{{DefaultAPISidebar("Web Audio API")}}

Web Audio API의 사운드 프로세싱 (그리고 다른 것들) 의 광범위한 다양성이 마치 충분하지 않다는 것처럼, Web Audio API는 또한 리스너가 음원 주위에서 움직일 때 소리의 차이를 모방할 수 있게 하는 기능을 포함하고 있습니다. 그 예시로는 3D 게임에서 음원 주위에서 움직일 때의 패닝 기능을 들 수 있습니다. 이 기능에 대한 공식적인 용어는 **spatialization**(공간화)이고, 이 글은 어떻게 그런 시스템을 구현하는지에 대한 기초를 다룰 것입니다.

## 공간화 기초

Web Audio에서, 복잡한 3D 공간화는 {{domxref("PannerNode")}}를 사용하여 생성되는데, 쉽게 말하자면 이는 기본적으로 오디오가 3D 공간에 나타날 수 있게 하는 멋진 수학적 마법입니다. 위로 날아가는, 뒤에서 슬금슬금 다가오는, 앞을 가로질러 가는 소리들을 생각해 보세요. 그런 종류의 것들을 다룹니다.

이 노드는 WebXR과 게이밍에 정말로 유용할 뿐만 아니라, 3D 공간에서 현실적인 오디오 효과를 낼 수 있게 하는 유일한 방법입니다. [three.js](https://threejs.org/)와 [A-frame](https://aframe.io/)같은 라이브러리들은 소리를 다룰 때 이 노드의 가능성을 활용합니다. 또한 주목할 가치가 있는 것은 **꼭** 3D 공간 내에서 사운드를 움직일 필요가 없다는 것입니다. 2D 평면 또한 사용할 수 있으므로, 만약 2D 게임을 계획하고 있다면 이것은 여전히 필요한 노드일 것입니다.

> [!NOTE]
> 간단한 좌우 스테레오 패닝 이펙트를 생성하는 경우를 다루기 위해 설계된 {{domxref("StereoPannerNode")}}가 있습니다. 이 노드는 사용하기가 더욱 단순하긴 하지만, 명백히 다재다능하지는 않습니다. 만약 단지 간단한 스테레오 패닝 이펙트가 필요하다면, [StereoPannerNode 예제](https://mdn.github.io/webaudio-examples/stereo-panner-node/) ([소스 코드는 여기서 보실 수 있습니다](https://github.com/mdn/webaudio-examples/tree/master/stereo-panner-node)) 에서 충분한 정보를 얻을 수 있을 것입니다.

## 3D 라디오 데모

3D 공간화를 시연하기 위해 기초 [Web Audio API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) 가이드에서 만든 라디오 데모가 수정되었습니다. [3D 공간화 작동 예제](https://mdn.github.io/webaudio-examples/spacialization/)를 구경해 보세요 (그리고 [소스 코드](https://github.com/mdn/webaudio-examples/tree/master/spacialization) 또한 보실 수 있습니다).

![회전된 라디오와 이것을 좌우, 안팎으로 이동하고 회전시키기 위한 조종 버튼을 가진 단순한 UI](web-audio-spatialization.png)

이 라디오는 (브라우저 뷰포트의 가장자리에 의해 정의되는) 방 안에 위치하고 있고, 이 예제에서, 라디오는 여러 버튼을 통해 움직여지거나 회전될 수 있습니다. 라디오가 움직일 때, 라디오가 생성하는 사운드는 방의 좌우를 향해 움직여질 때 패닝되거나, 사용자로부터 떨어지거나 회전되어 스피커가 사용자를 등졌을 때 조용해지는 등 상황에 맞춰 변화합니다. 이러한 기능은 공간화를 모방하기 위해 그러한 움직임에 관한 `PannerNode` 객체 인스턴스의 여러 속성들을 설정함으로써 이루어질 수 있습니다.

> [!NOTE]
> 위 예제가 제공하는 경험은 헤드폰을 사용하거나 컴퓨터에 연결할 서라운드 시스템 같은 것을 가지고 있다면 훨씬 낫게 다가올 것입니다.

## 오디오 리스너 생성하기

그럼 시작해 봅시다! ({{domxref("AudioContext")}}가 상속받는 인터페이스인) {{domxref("BaseAudioContext")}}는 {{domxref("AudioListener")}} 객체를 반환하는 [`listener`](/ko/docs/Web/API/BaseAudioContext/listener) 속성을 가지고 있습니다. 이것은 현장의 리스너를 나타내는데, 보통 사용자입니다. 여러분은 사용자가 공간 내에서 어디에 있는지, 그리고 어떤 방향을 향하고 있는지를 정의할 수 있습니다. 사용자는 고정되어 있습니다. 그리고 나서 `pannerNode`가 리스너의 위치에 관해서 자신의 사운드 위치를 계산할 수 있습니다.

컨텍스트와 리스너를 생성하고 리스너의 위치를 설정하여 방 안을 바라보고 있는 사람을 모방해 봅시다.

```js
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
const listener = audioCtx.listener;

const posX = window.innerWidth / 2;
const posY = window.innerHeight / 2;
const posZ = 300;

listener.positionX.value = posX;
listener.positionY.value = posY;
listener.positionZ.value = posZ - 5;
```

`positionX`를 통해 리스너를 좌우로 움직이거나, `positionY`를 통해 위아래로 움직이거나, `positionZ`를 통해 방의 안팎으로 움직일 수 있습니다. 위 코드에서 리스너의 위치는 뷰포트의 중앙 그리고 라디오의 살짝 앞에 있는 것으로 설정되었습니다. 또한, 리스너가 향하고 있는 방향도 설정할 수 있습니다. 이 속성들의 기본 값이면 충분할 것입니다.

```js
listener.forwardX.value = 0;
listener.forwardY.value = 0;
listener.forwardZ.value = -1;
listener.upX.value = 0;
listener.upY.value = 1;
listener.upZ.value = 0;
```

forward 속성은 리스너 앞 방향의 3D 좌표 위치를 나타냅니다 (예: 리스너가 마주하고 있는 방향), 한편 up 속성들은 리스너 머리 위의 3D 좌표 위치를 나타냅니다. 방향은 이 두 속성에 의해 잘 설정될 수 있습니다.

## 패너 노드 생성하기

{{domxref("PannerNode")}}를 생성해 봅시다. 이 노드와 관련된 많은 속성들이 있습니다. 각 속성들을 살펴봅시다.

첫번째로 [`panningModel`](/ko/docs/Web/API/PannerNode/panningModel)을 알아봅시다. 이 속성은 3D 공간에서 오디오를 위치시키기 위해 사용되는 알고리즘입니다. 설정될 수 있는 값은 다음과 같습니다.

`equalpower` — 기본값이며, 패닝이 계산되는 일반적인 방법

`HRTF` — HRTF는 'Head-related transfer function' 의 약자이고 사운드가 어디 있는지를 계산할 때 사람의 머리를 고려하는 것으로 보입니다.

꽤 똑똑한 것이군요. `HRTF` 모델을 사용합시다!

```js
const pannerModel = "HRTF";
```

[`coneInnerAngle`](/ko/docs/Web/API/PannerNode/coneInnerAngle)과 [`coneOuterAngle`](/ko/docs/Web/API/PannerNode/coneOuterAngle) 속성은 어디서 볼륨이 발생되는지를 명시합니다. 둘 다 기본 값은 360도입니다. 이 예제의 라디오는 기본 값보다 작은 원뿔을 가지도록 정의될 것입니다. 내부 원뿔은 gain (볼륨) 이 항상 최대로 발생되는 곳이고 외부 원뿔은 gain이 줄어들기 시작하는 곳입니다. 이 gain은 [`coneOuterGain`](/ko/docs/Web/API/PannerNode/coneOuterGain)의 값에 의해 감소됩니다. 이 매개변수들의 값을 저장할 상수를 생성합시다.

```js
const innerCone = 60;
const outerCone = 90;
const outerGain = 0.3;
```

다음 매개변수는 [`distanceModel`](/ko/docs/Web/API/PannerNode/distanceModel)입니다. 이 매개변수는 오직 `linear`, `inverse`, 또는 `exponential`로만 설정될 수 있습니다. 이 값들은 각기 다른 알고리즘인데, 리스너로부터 멀어질 때 오디오 소스의 볼륨을 감소시키기 위해 사용됩니다. `linear`를 사용합시다. 간단하니까요.

```js
const distanceModel = "linear";
```

우리는 리스너와 음원 사이의 최대 거리 ([`maxDistance`](/ko/docs/Web/API/PannerNode/maxDistance)) 를 설정할 수 있습니다. 만약 음원이 이 지점으로부터 더 멀리 이동하면 볼륨은 더 이상 감소되지 않을 것입니다. 최대 거리 설정은 유용할 수 있습니다. 거리감을 흉내내고자 하나 볼륨이 꺼져 버린다면 곤란할 수 있겠죠. 최대 거리는 기본값으로 10,000 (단위없는 상대 값) 입니다. 아래와 같이 설정할 수 있습니다.

```js
const maxDistance = 10000;
```

또한 참조 거리 ([`refDistance`](/ko/docs/Web/API/PannerNode/refDistance))가 있는데, 이는 거리 모델에 의해 사용됩니다. 이 또한 기본값 `1`로 설정할 수 있습니다.

```js
const refDistance = 1;
```

그리고 roll-off 인자 ([`rolloffFactor`](/ko/docs/Web/API/PannerNode/rolloffFactor)) 가 있습니다. 이것은 패너가 리스너로부터 멀어질 때 얼마나 빨리 볼륨이 감소하는지를 정의합니다. 기본값은 1입니다. 이동을 과장시키는 효과를 주기 위해 이 값을 조금 더 크게 설정해 봅시다.

```js
const rollOff = 10;
```

이제 라디오의 위치와 방향 설정을 시작해 봅시다. 이는 리스너를 설정한 과정과 많이 비슷합니다. 인터페이스의 버튼들이 사용되었을 때 변경될 매개변수들은 아래와 같습니다.

```js
const positionX = posX;
const positionY = posY;
const positionZ = posZ;

const orientationX = 0.0;
const orientationY = 0.0;
const orientationZ = -1.0;
```

z 방향의 음수 값에 주목하세요. 음수 값은 라디오가 우리를 바라보게 만듭니다. 양수 값은 음원이 우리를 등지게 만들 것입니다.

생성자를 사용해 패너 노드를 생성하고 위에서 설정한 모든 매개변수들을 전달합시다.

```js
const panner = new PannerNode(audioCtx, {
  panningModel: pannerModel,
  distanceModel: distanceModel,
  positionX: positionX,
  positionY: positionY,
  positionZ: positionZ,
  orientationX: orientationX,
  orientationY: orientationY,
  orientationZ: orientationZ,
  refDistance: refDistance,
  maxDistance: maxDistance,
  rolloffFactor: rollOff,
  coneInnerAngle: innerCone,
  coneOuterAngle: outerCone,
  coneOuterGain: outerGain,
});
```

## 라디오 이동시키기

이제 라디오를 '방' 주위에서 움직일 것입니다. 이를 위해 준비된 조종 버튼들이 있습니다. 라디오를 좌우로, 위아래로, 앞뒤로 움직일 수 있고, 회전시킬 수도 있습니다. 소리의 방향은 앞에 있는 라디오 스피커에서부터 오므로, 라디오를 회전시키면 소리의 방향을 변경할 수 있습니다. 예: 라디오가 180도 회전되어 우리를 등지고 있을 때 소리의 방향이 뒤를 향하도록 만들기.

인터페이스에 대한 것들을 설정해 봅시다. 첫째로, 우리가 움직이기를 원하는 요소들에 대한 참조를 얻습니다. 그리고 나서 실제로 움직임을 수행하기 위해 [CSS transforms](/ko/docs/Web/CSS/CSS_Transforms)을 설정했을 때 변경될 값들에 대한 참조를 저장합니다. 마지막으로, 경계를 설정해 라디오가 어떠한 방향으로든 너무 멀리 가지 않도록 할 것입니다.

```js
const moveControls = document
  .querySelector("#move-controls")
  .querySelectorAll("button");
const boombox = document.querySelector(".boombox-body");

// css transforms를 위한 값들
let transform = {
  xAxis: 0,
  yAxis: 0,
  zAxis: 0.8,
  rotateX: 0,
  rotateY: 0,
};

// 경계 설정
const topBound = -posY;
const bottomBound = posY;
const rightBound = posX;
const leftBound = -posX;
const innerBound = 0.1;
const outerBound = 1.5;
```

매개변수로 우리가 움직이기를 원하는 방향을 취하고, CSS transform을 수정할 뿐만 아니라 적절하게 소리를 변경하기 위해 패너 노드 속성들의 위치와 방향 값을 갱신하는 함수를 만들어 봅시다.

상하좌우 값들은 아주 간단하므로, 우선 이 값들을 살펴봅시다. 우리는 라디오를 이 축들을 따라 이동시키고 적절한 위치로 갱신할 것입니다.

```js
function moveBoombox(direction) {
  switch (direction) {
    case "left":
      if (transform.xAxis > leftBound) {
        transform.xAxis -= 5;
        panner.positionX.value -= 0.1;
      }
      break;
    case "up":
      if (transform.yAxis > topBound) {
        transform.yAxis -= 5;
        panner.positionY.value -= 0.3;
      }
      break;
    case "right":
      if (transform.xAxis < rightBound) {
        transform.xAxis += 5;
        panner.positionX.value += 0.1;
      }
      break;
    case "down":
      if (transform.yAxis < bottomBound) {
        transform.yAxis += 5;
        panner.positionY.value += 0.3;
      }
      break;
  }
}
```

안팎으로 이동하는 것에 대한 설정도 위와 비슷합니다.

```js
case 'back':
    if (transform.zAxis > innerBound) {
        transform.zAxis -= 0.01;
        panner.positionZ.value += 40;
    }
break;
case 'forward':
    if (transform.zAxis < outerBound) {
        transform.zAxis += 0.01;
        panner.positionZ.value -= 40;
    }
break;
```

그러나 회전 값들은 조금 더 복잡한데, 왜냐하면 소리를 **주위로** 이동시켜야 할 필요가 있기 때문입니다 (예: 만약 객체를 x축 주위로 회전시킨다면, y와 z좌표를 갱신해야 합니다). 두 축의 값을 갱신해야 할 뿐만 아니라, 이를 위해 수학 계산을 좀 할 필요도 있습니다. 회전은 원이고 이 원을 그리기 위해 [`Math.sin`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/sin)과 [`Math.cos`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/cos)이 필요합니다.

라디오를 회전시켰을 때 새로운 좌표를 계산할 수 있도록 추후에 `Math.sin`과 `Math.cos`에서의 사용을 위해 라디안 범위 값으로 전환할 회전 비율을 설정해 봅시다.

```js
// 회전 상수 설정
const rotationRate = 60; // 더 큰 수일수록 소리 회전은 더 느려짐

const q = Math.PI / rotationRate; // 회전 증가 (라디안)
```

또한 이를 사용하여 회전된 각도를 계산할 수 있는데, 이는 CSS transform에 사용될 것입니다 (CSS transform을 위해 x축과 y축 모두가 필요하다는 것에 주목하세요).

```js
// css를 위해 각도 얻기
const degreesX = (q * 180) / Math.PI;
const degreesY = (q * 180) / Math.PI;
```

예제로써 좌회전을 살펴봅시다. y축을 주위로 이동하기 위해, 패너 좌표의 x방향과 z방향을 변경할 필요가 있습니다.

```js
case 'rotate-left':
  transform.rotateY -= degreesY;

  // '좌' 는 음수 각 증가를 가지는 y축에 대한 회전입니다
  z = panner.orientationZ.value*Math.cos(q) - panner.orientationX.value*Math.sin(q);
  x = panner.orientationZ.value*Math.sin(q) + panner.orientationX.value*Math.cos(q);
  y = panner.orientationY.value;

  panner.orientationX.value = x;
  panner.orientationY.value = y;
  panner.orientationZ.value = z;
break;
```

이것은 **조금 혼란**스럽지만, 지금 하고 있는 것은 sin과 cos을 사용해 라디오의 회전에 필요한 좌표인 원운동을 계산하는 것입니다.

이 작업은 모든 축에 대해 이루어질 수 있습니다. 필요한 건 단지 갱신할 옳은 방향과 양수 또는 음수 증가 중 어느 쪽을 원하는지를 선택하는 것입니다.

```js
case 'rotate-right':
  transform.rotateY += degreesY;
  // '우' 는 양수 각 증가를 가지는 y축에 대한 회전입니다
  z = panner.orientationZ.value*Math.cos(-q) - panner.orientationX.value*Math.sin(-q);
  x = panner.orientationZ.value*Math.sin(-q) + panner.orientationX.value*Math.cos(-q);
  y = panner.orientationY.value;
  panner.orientationX.value = x;
  panner.orientationY.value = y;
  panner.orientationZ.value = z;
break;
case 'rotate-up':
  transform.rotateX += degreesX;
  // '상' 은 음수 각 증가를 가지는 x축에 대한 회전입니다
  z = panner.orientationZ.value*Math.cos(-q) - panner.orientationY.value*Math.sin(-q);
  y = panner.orientationZ.value*Math.sin(-q) + panner.orientationY.value*Math.cos(-q);
  x = panner.orientationX.value;
  panner.orientationX.value = x;
  panner.orientationY.value = y;
  panner.orientationZ.value = z;
break;
case 'rotate-down':
  transform.rotateX -= degreesX;
  // '하' 는 양수 각 증가를 가지는 x축에 대한 회전입니다
  z = panner.orientationZ.value*Math.cos(q) - panner.orientationY.value*Math.sin(q);
  y = panner.orientationZ.value*Math.sin(q) + panner.orientationY.value*Math.cos(q);
  x = panner.orientationX.value;
  panner.orientationX.value = x;
  panner.orientationY.value = y;
  panner.orientationZ.value = z;
break;
```

마지막 하나! CSS를 갱신하고 마우스 이벤트의 마지막 움직임에 대한 참조를 유지할 필요가 있습니다. 아래가 완성된 `moveBoombox` 함수입니다.

```js
function moveBoombox(direction, prevMove) {
  switch (direction) {
    case "left":
      if (transform.xAxis > leftBound) {
        transform.xAxis -= 5;
        panner.positionX.value -= 0.1;
      }
      break;
    case "up":
      if (transform.yAxis > topBound) {
        transform.yAxis -= 5;
        panner.positionY.value -= 0.3;
      }
      break;
    case "right":
      if (transform.xAxis < rightBound) {
        transform.xAxis += 5;
        panner.positionX.value += 0.1;
      }
      break;
    case "down":
      if (transform.yAxis < bottomBound) {
        transform.yAxis += 5;
        panner.positionY.value += 0.3;
      }
      break;
    case "back":
      if (transform.zAxis > innerBound) {
        transform.zAxis -= 0.01;
        panner.positionZ.value += 40;
      }
      break;
    case "forward":
      if (transform.zAxis < outerBound) {
        transform.zAxis += 0.01;
        panner.positionZ.value -= 40;
      }
      break;
    case "rotate-left":
      transform.rotateY -= degreesY;

      // '좌' 는 음수 각 증가를 가지는 y축에 대한 회전입니다
      z =
        panner.orientationZ.value * Math.cos(q) -
        panner.orientationX.value * Math.sin(q);
      x =
        panner.orientationZ.value * Math.sin(q) +
        panner.orientationX.value * Math.cos(q);
      y = panner.orientationY.value;

      panner.orientationX.value = x;
      panner.orientationY.value = y;
      panner.orientationZ.value = z;
      break;
    case "rotate-right":
      transform.rotateY += degreesY;
      // '우' 는 양수 각 증가를 가지는 y축에 대한 회전입니다
      z =
        panner.orientationZ.value * Math.cos(-q) -
        panner.orientationX.value * Math.sin(-q);
      x =
        panner.orientationZ.value * Math.sin(-q) +
        panner.orientationX.value * Math.cos(-q);
      y = panner.orientationY.value;
      panner.orientationX.value = x;
      panner.orientationY.value = y;
      panner.orientationZ.value = z;
      break;
    case "rotate-up":
      transform.rotateX += degreesX;
      // '상' 은 음수 각 증가를 가지는 x축에 대한 회전입니다
      z =
        panner.orientationZ.value * Math.cos(-q) -
        panner.orientationY.value * Math.sin(-q);
      y =
        panner.orientationZ.value * Math.sin(-q) +
        panner.orientationY.value * Math.cos(-q);
      x = panner.orientationX.value;
      panner.orientationX.value = x;
      panner.orientationY.value = y;
      panner.orientationZ.value = z;
      break;
    case "rotate-down":
      transform.rotateX -= degreesX;
      // '하' 는 양수 각 증가를 가지는 x축에 대한 회전입니다
      z =
        panner.orientationZ.value * Math.cos(q) -
        panner.orientationY.value * Math.sin(q);
      y =
        panner.orientationZ.value * Math.sin(q) +
        panner.orientationY.value * Math.cos(q);
      x = panner.orientationX.value;
      panner.orientationX.value = x;
      panner.orientationY.value = y;
      panner.orientationZ.value = z;
      break;
  }

  boombox.style.transform =
    "translateX(" +
    transform.xAxis +
    "px) translateY(" +
    transform.yAxis +
    "px) scale(" +
    transform.zAxis +
    ") rotateY(" +
    transform.rotateY +
    "deg) rotateX(" +
    transform.rotateX +
    "deg)";

  const move = prevMove || {};
  move.frameId = requestAnimationFrame(() => moveBoombox(direction, move));
  return move;
}
```

## 조종 버튼 연결하기

조종 버튼을 연결하는 것은 비교적 단순합니다. 이제 우리는 조종 장치에 대한 마우스 이벤트를 수신하고 이 함수를 실행시킬 수 있을 뿐만 아니라, 마우스가 떼졌을 때 멈출 수도 있습니다.

```js
// 각각의 조종 버튼에 대해, 라디오를 움직이고 위치 값을 변경합니다
moveControls.forEach(function (el) {
  let moving;
  el.addEventListener(
    "mousedown",
    function () {
      let direction = this.dataset.control;
      if (moving && moving.frameId) {
        window.cancelAnimationFrame(moving.frameId);
      }
      moving = moveBoombox(direction);
    },
    false,
  );

  window.addEventListener(
    "mouseup",
    function () {
      if (moving && moving.frameId) {
        window.cancelAnimationFrame(moving.frameId);
      }
    },
    false,
  );
});
```

## 그래프 연결하기

HTML에는 패너 노드에 의해 영향을 받을 audio 요소가 있습니다.

```html
<audio src="myCoolTrack.mp3"></audio>
```

이 요소로부터 소스를 취해 {{domxref('AudioContext.createMediaElementSource')}}를 사용해 Web Audio API에 연결합시다.

```js
// audio 요소를 얻습니다
const audioElement = document.querySelector("audio");

// audio 요소를 오디오 컨텍스트에 전달합니다
const track = audioContext.createMediaElementSource(audioElement);
```

다음으로 오디오 그래프를 연결해야 합니다. 목적지 (이 경우 스피커) 에 연결되는 수정 노드 (패너) 에 입력 (이 곡) 을 연결합니다.

```js
track.connect(panner).connect(audioCtx.destination);
```

클릭되었을 때 현재 상태에 따라 오디오를 재생하거나 멈추는, 재생 버튼을 만듭시다.

```html
<button data-playing="false" role="switch">Play/Pause</button>
```

```js
// 재생 버튼을 선택합니다
const playButton = document.querySelector("button");

playButton.addEventListener(
  "click",
  function () {
    // 컨텍스트가 연기(suspended) 상태에 있는지 검사합니다 (자동 재생 정책)
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    // 상태에 따라 곡을 재생하거나 정지합니다
    if (this.dataset.playing === "false") {
      audioElement.play();
      this.dataset.playing = "true";
    } else if (this.dataset.playing === "true") {
      audioElement.pause();
      this.dataset.playing = "false";
    }
  },
  false,
);
```

오디오의 재생/제어와 오디오 그래프에 대한 더욱 자세한 정보는 [Web Audio API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)에서 찾아볼 수 있습니다.

## 요약

이 글이 여러분께 어떻게 Web Audio 공간화가 작동하는지, 그리고 {{domxref("PannerNode")}}의 각 속성들이 무슨 일을 하는지 (속성들 중 상당수가 있습니다) 에 대한 이해를 주었기를 바랍니다. 값들은 때때로 조작하기 어려울 수 있고 사용하는 경우에 따라 그것들을 바르게 하는 데 시간이 필요할 수 있습니다.

> [!NOTE]
> 각기 다른 브라우저 간에 오디오 공간화가 들리는 방식에 약간의 차이가 있습니다. 패너 노드는 아주 복잡한 수학 계산을 필요로 합니다. [여기 몇 개의 테스트](https://wpt.fyi/results/webaudio/the-audio-api/the-pannernode-interface?label=stable&aligned=true)가 있으니 여러분은 각기 다른 플랫폼들 사이에서 이 노드의 내부 작동 상태를 확인할 수 있습니다.

다시 말하지만, 여러분은 다음의 링크에서 [최종 결과물](https://mdn.github.io/webaudio-examples/spacialization/)과, [소스 코드](https://github.com/mdn/webaudio-examples/tree/master/spacialization)를 확인할 수 있습니다. [Codepen 데모](https://codepen.io/Rumyra/pen/MqayoK?editors=0100) 또한 있습니다.

만약 여러분이 3D 게임 그리고/또는 WebXR으로 작업한다면 그러한 기능을 만들기 위해 처음부터 직접 모든 것을 하려고 시도하기보다는 3D 라이브러리를 활용하는 것이 좋은 생각입니다. 우리는 이 글에서 여러분에게 어떻게 이것이 작동하는지에 대한 아이디어를 주기 위해 직접 만들었지만, 여러분에 앞서 남들이 해 놓은 작업을 이용함으로써 많은 시간을 절약할 수 있을 것입니다.
