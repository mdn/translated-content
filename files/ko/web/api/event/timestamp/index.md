---
title: Event.timeStamp
slug: Web/API/Event/timeStamp
---

{{APIRef("DOM")}}

{{domxref("Event")}} 인터페이스의 **`timeStamp`** 읽기 전용 속성은 이벤트가 생성된 시간을 밀리초 단위로 반환합니다.

## 값

시간 원점으로부터 이벤트가 생성되기까지 경과한 시간을 밀리초 단위로 나타낸 수입니다. 전역 객체가 {{domxref("Window")}}라면, 시간 원점은 사용자가 링크를 클릭했던 시점, 혹은 스크립트가 문서의 로딩을 시작했던 시점입니다. 워커에서의 시간 원점은 워커가 생성된 시점입니다.

이 값은 5 마이크로초(0.005ms)까지 정확한 {{domxref("DOMHighResTimeStamp")}}지만, 핑거프린팅을 방지하기 위해 [낮은 정밀도로 제공합니다](#reduced_time_precision).

## 예제

### HTML

```html
<p>
  이 프레임에 포커스를 두고 아무 키나 눌러 keypress 이벤트의 현재 타임스탬프를
  알아보세요.
</p>
<p>timeStamp: <span id="time">-</span></p>
```

### JavaScript

```js
function getTime(event) {
  const time = document.getElementById("time");
  time.firstChild.nodeValue = event.timeStamp;
}
document.body.addEventListener("keypress", getTime);
```

### 결과

{{EmbedLiveSample("예제", "100%", 100)}}

## 감소된 시간 정밀도

타이밍 공격과 핑거프린팅을 방지하기 위해, `Event.timeStamp`는 브라우저 설정에 따라 일정 자릿수에서 반올림된 값을 반환할 수 있습니다.

Firefox에서는 `privacy.reduceTimerPrecision` 설정이 기본적으로 활성화된 상태며 값은 2ms입니다.

```js
// Firefox 60에서 감소된 시간 정밀도 (2ms)
event.timeStamp;
// 1519211809934
// 1519211810362
// 1519211811670
// ...

// privacy.resistFingerprinting을 활성화했을 때 감소된 시간 정밀도
event.timeStamp;
// 1519129853500
// 1519129858900
// 1519129864400
// ...
```

Firefox에서 `privacy.resistFingerprinting` 설정도 함께 활성화할 경우, 정밀도는 100ms와 `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`의 값 중 더 큰 쪽이 됩니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
