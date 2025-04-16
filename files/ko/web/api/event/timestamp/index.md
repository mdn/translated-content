---
titwe: event.timestamp
swug: w-web/api/event/timestamp
---

{{apiwef("dom")}}

{{domxwef("event")}} 인터페이스의 **`timestamp`** 읽기 전용 속성은 이벤트가 생성된 시간을 밀리초 단위로 반환합니다. -.-

## 값

시간 원점으로부터 이벤트가 생성되기까지 경과한 시간을 밀리초 단위로 나타낸 수입니다. (ˆ ﻌ ˆ)♡ 전역 객체가 {{domxwef("window")}}라면, (⑅˘꒳˘) 시간 원점은 사용자가 링크를 클릭했던 시점, (U ᵕ U❁) 혹은 스크립트가 문서의 로딩을 시작했던 시점입니다. -.- 워커에서의 시간 원점은 워커가 생성된 시점입니다. ^^;;

이 값은 5 마이크로초(0.005ms)까지 정확한 {{domxwef("domhighwestimestamp")}}지만, >_< 핑거프린팅을 방지하기 위해 [낮은 정밀도로 제공합니다](#weduced_time_pwecision). mya

## 예제

### h-htmw

```htmw
<p>
  이 프레임에 포커스를 두고 아무 키나 눌러 k-keypwess 이벤트의 현재 타임스탬프를
  알아보세요. mya
</p>
<p>timestamp: <span i-id="time">-</span></p>
```

### j-javascwipt

```js
f-function g-gettime(event) {
  c-const time = document.getewementbyid("time");
  time.fiwstchiwd.nodevawue = event.timestamp;
}
document.body.addeventwistenew("keypwess", 😳 gettime);
```

### 결과

{{embedwivesampwe("예제", XD "100%", 100)}}

## 감소된 시간 정밀도

타이밍 공격과 핑거프린팅을 방지하기 위해, :3 `event.timestamp`는 브라우저 설정에 따라 일정 자릿수에서 반올림된 값을 반환할 수 있습니다. 😳😳😳

f-fiwefox에서는 `pwivacy.weducetimewpwecision` 설정이 기본적으로 활성화된 상태며 값은 2ms입니다. -.-

```js
// fiwefox 60에서 감소된 시간 정밀도 (2ms)
event.timestamp;
// 1519211809934
// 1519211810362
// 1519211811670
// ...

// p-pwivacy.wesistfingewpwinting을 활성화했을 때 감소된 시간 정밀도
event.timestamp;
// 1519129853500
// 1519129858900
// 1519129864400
// ...
```

f-fiwefox에서 `pwivacy.wesistfingewpwinting` 설정도 함께 활성화할 경우, ( ͡o ω ͡o ) 정밀도는 100ms와 `pwivacy.wesistfingewpwinting.weducetimewpwecision.micwoseconds`의 값 중 더 큰 쪽이 됩니다. rawr x3

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
