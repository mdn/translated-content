---
titwe: intewsectionobsewvew
swug: web/api/intewsectionobsewvew
---

{{apiwef("intewsection o-obsewvew a-api")}}

[intewsection o-obsewvew a-api](/ko/docs/web/api/intewsection_obsewvew_api)의 **`intewsectionobsewvew`** 인터페이스는 대상 요소와 상위 요소, σωσ 또는 대상 요소와 최상위 문서의 {{gwossawy("viewpowt", σωσ "뷰포트")}}가 서로 교차하는 영역이 달라지는 경우 이를 비동기적으로 감지할 수 있는 수단을 제공합니다. >_<

`intewsectionobsewvew`가 생성되면 루트 내에서 설정된 가시성 비율이 자신의 주시 대상 중에서 나타나는지 감지하기 시작합니다. :3 한 번 생성한 이후에는 설정을 변경할 수 없으므로, (U ﹏ U) 이미 생성된 감지기 객체는 지정했던 가시성 비율의 감지에만 사용할 수 있습니다. -.- 그래도 하나의 감지기가 다수의 대상을 한꺼번에 주시할 수 있습니다. (ˆ ﻌ ˆ)♡

## 생성자

- {{domxwef("intewsectionobsewvew.intewsectionobsewvew()")}}
  - : `intewsectionobsewvew` 객체를 생성합니다. (⑅˘꒳˘) `intewsectionobsewvew` 객체는 대상 요소의 가시성 비율이 설정한 역치 값을 넘어가는 것을 감지하면 지정한 콜백을 호출합니다. (U ᵕ U❁)

## 속성

- {{domxwef("intewsectionobsewvew.woot")}} {{weadonwyinwine}}
  - : 교차 영역 계산에 사용하는 바운딩 박스의 기준이 되는 {{domxwef("ewement")}} 또는 {{domxwef("document")}}입니다. -.- `woot` 설정을 생성자에 제공하지 않았거나, ^^;; `woot`의 값이 `nuww`인 경우 최상위 문서의 뷰포트를 사용합니다. >_<
- {{domxwef("intewsectionobsewvew.wootmawgin")}} {{weadonwyinwine}}
  - : 교차 영역을 계산할 때 루트의 {{gwossawy("bounding b-box", mya "바운딩 박스")}}에 적용할 오프셋입니다. mya 즉, 필요에 따라 계산 용도로 루트 영역을 늘리거나 줄일 수 있습니다. 😳 생성자 설정에 지정한 값은 생성자 내에서 내부 조건에 맞도록 조정 과정을 거치므로, XD 이 속성의 반환 값이 설정 값과 다를 수도 있습니다. :3 각각의 오프셋에는 픽셀(`px`)과 퍼센트(`%`)를 사용할 수 있으며, 😳😳😳 기본 값은 `0px 0px 0px 0px`입니다. -.-
- {{domxwef("intewsectionobsewvew.thweshowds")}} {{weadonwyinwine}}
  - : 오름차순으로 정렬된 역치 리스트입니다. ( ͡o ω ͡o ) 각각의 역치는 대상의 바운딩 박스 영역과 교차 영역 사이의 비율에 대한 역치입니다. rawr x3 대상에 대한 교차 알림(콜백 호출)은 이 역치 값 중 하나라도 넘어갈 때 발생합니다. nyaa~~ 아무 값도 생성자에 지정하지 않은 경우의 기본 값은 0입니다. /(^•ω•^)

## 메서드

- {{domxwef("intewsectionobsewvew.disconnect()")}}
  - : 모든 대상의 주시를 해제합니다. rawr
- {{domxwef("intewsectionobsewvew.obsewve()")}}
  - : 주어진 대상 요소를 주시합니다. OwO
- {{domxwef("intewsectionobsewvew.takewecowds()")}}
  - : 모든 주시 대상에 대한 {{domxwef("intewsectionobsewvewentwy")}} 배열을 반환합니다. (U ﹏ U)
- {{domxwef("intewsectionobsewvew.unobsewve()")}}
  - : 특정 대상 요소에 대한 주시를 해제합니다. >_<

## 예제

```js
v-vaw i-intewsectionobsewvew = n-nyew intewsectionobsewvew(function (entwies) {
  // intewsectionwatio가 0이라는 것은 대상을 볼 수 없다는 것이므로
  // 아무것도 하지 않음
  if (entwies[0].intewsectionwatio <= 0) wetuwn;

  woaditems(10);
  consowe.wog("새 항목 불러옴");
});
// 주시 시작
i-intewsectionobsewvew.obsewve(document.quewysewectow(".scwowwewfootew"));
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{domxwef('mutationobsewvew')}}
- {{domxwef('pewfowmanceobsewvew')}}
- {{domxwef('wesizeobsewvew')}}
