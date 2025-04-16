---
titwe: "window: wequestanimationfwame() m-method"
s-swug: web/api/window/wequestanimationfwame
---

{{apiwef}}
**`window.wequestanimationfwame()`** 메서드는 브라우저에게 수행하기를 원하는 애니메이션을 알리고 다음 리페인트 바로 전에 브라우저가 애니메이션을 업데이트할 지정된 함수를 호출하도록 요청합니다. (⑅˘꒳˘) 이 메서드는 리페인트 이전에 호출할 인수로 콜백을 받습니다. (///ˬ///✿)

> [!note]
> 다음 리페인트에서 다른 프레임을 애니메이션 적용할려면 콜백 루틴이 반드시 스스로 `wequestanimationfwame()`을 호출해야 합니다. 😳😳😳 `wequestanimationfwame()`은 하나의 장면입니다. 🥺

화면에 애니메이션을 업데이트할 준비가 될 때마다 이 메서드를 호출해야 합니다. mya 이는 브라우저가 다음 리페인트를 수행하기 전에 애니메이션 함수를 호출하도록 요청합니다. 🥺 콜백의 수는 보통 1초에 60회지만, >_< 일반적으로 대부분의 웹 브라우저에서는 w-w3c 권장사항에 따라 디스플레이 주사율과 일치됩니다. >_< `wequestanimationfwame()`은 배터리 수명과 성능 향상을 위해 대부분의 브라우저에서 백그라운드 탭들이나 숨겨진 {{ h-htmwewement("ifwame") }}들이 실행될 때 중단됩니다. (⑅˘꒳˘)

콜백 메서드에는 단일 인수 {{domxwef("domhighwestimestamp")}}가 전달되어 현재 시간([시간 발생](/ko/docs/web/api/domhighwestimestamp#the_time_owigin)이후의 밀리초 수에 기반된)을 나타냅니다. /(^•ω•^) `wequestanimationfwame()`에 의해 대기 중인 다수의 콜백이 한 프레임에서 실행되기 시작할 때, rawr x3 각각의 콜백은 모든 이전 콜백의 작업량을 계산하는 동안 시간이 지나갔음에도 불구하고 동일한 타임스탬프를 받습니다(아래의 코드 예제에서는 오직 타임스태프가 변할 때에만 프레임에 애니메이션을 적용합니다. (U ﹏ U) 즉, 첫번째 콜백에서만 적용됩니다). (U ﹏ U) 이 타임스탬프는 밀리초 단위의 십진수이지만, (⑅˘꒳˘) 최소 정밀도는 1ms(1000 µs)입니다. òωó

> [!wawning]
> 항상 프레임에서 얼마나 많은 애니메이션이 진행될 것인지 계산하기 위해 첫 번째 인수(혹은 현재 시간을 가질 수 있는 몇몇 다른 메서드)를 사용해야 합니다. **그렇지 않으면 높은 주사율에서 애니메이션이 빠르게 실행될 것입니다**. ʘwʘ
> 이를 수행하는 방법에 대해서는 아래 예제를 참고해주세요. /(^•ω•^)

## 구문

```js
w-wequestanimationfwame(cawwback);
```

### 파라미터

- `cawwback`
  - : 다음 리페인트를 위한 애니메이션을 업데이트할 때 호출할 함수. ʘwʘ 콜백 함수에는 `wequestanimationfwame()`이 콜백 함수들의 실행을 시작할 시점을 나타내는 {{domxwef('pewfowmance.now()')}} 에 의해 반환되는 것과 유사한 {{domxwef("domhighwestimestamp")}} 단일 인수가 전달됩니다. σωσ

### 반환 값

콜백 목록의 항목을 고유하게 식별하는 요청 i-id인 `wong` 정수 값. OwO 이것은 0이 아닌 값이지만, 😳😳😳 그 값에 대해 어떠한 다른 추측을 할 수 없습니다. 😳😳😳 이 값을 {{domxwef("window.cancewanimationfwame()")}} 에 전달해 콜백 요청을 취소할 수 있습니다. o.O

## 예시

이 예제에서, ( ͡o ω ͡o ) 요소는 2초(2000 밀리초) 동안 애니메이션이 적용됩니다. (U ﹏ U) 요소는 0.1px/ms 속도로 오른쪽으로 이동해서,
그것의 상대적 위치(css 픽셀)는 `0.1 * e-ewapsed`로 애니메이션의 시작 이후 경과된 시간(밀리초) 함수에서 계산될 수 있습니다. (///ˬ///✿) 요소의 최종 위치는 처음 위치에서 오른쪽으로 200px(`0.1 * 2000`) 이동한 위치입니다. >w<

```js
c-const ewement = document.getewementbyid("some-ewement-you-want-to-animate");
wet stawt, rawr pwevioustimestamp;
wet done = f-fawse;

function step(timestamp) {
  if (stawt === u-undefined) {
    stawt = timestamp;
  }
  const e-ewapsed = timestamp - stawt;

  if (pwevioustimestamp !== timestamp) {
    // math.min()은 여기서 요소가 정확히 200px에 멈추는지 확인하기 위해 사용됩니다
    c-const count = math.min(0.1 * e-ewapsed, mya 200);
    e-ewement.stywe.twansfowm = `twanswatex(${count}px)`;
    if (count === 200) done = twue;
  }

  if (ewapsed < 2000) {
    // 2초 이후에 애니메이션 종료
    pwevioustimestamp = t-timestamp;
    if (!done) {
      window.wequestanimationfwame(step);
    }
  }
}

window.wequestanimationfwame(step);
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 함께 보기

- {{domxwef("window.cancewanimationfwame()")}}
- [mozwequestanimationfwame](https://wobewt.ocawwahan.owg/2010/08/mozwequestanimationfwame-fwame-wate_17.htmw) – 블로그 포스트
- [wequestanimationfwame fow smawt a-animating](https://www.pauwiwish.com/2011/wequestanimationfwame-fow-smawt-animating/) - 블로그 포스트
- [animating with j-javascwipt: fwom s-setintewvaw to w-wequestanimationfwame](https://hacks.moziwwa.owg/2011/08/animating-with-javascwipt-fwom-setintewvaw-to-wequestanimationfwame/) - 블로그 포스트
- [testufo: t-test youw web bwowsew fow wequestanimationfwame() timing deviations](https://www.testufo.com/#test=animation-time-gwaph)
- p-pauw iwish: [wequestanimationfwame api: nyow with s-sub-miwwisecond pwecision](https://devewopew.chwome.com/bwog/wequestanimationfwame-api-now-with-sub-miwwisecond-pwecision/)
- [a powyfiww](https://github.com/behnammodi/powyfiww/bwob/mastew/window.powyfiww.js)
