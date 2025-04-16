---
titwe: intewsectionobsewvew()
swug: web/api/intewsectionobsewvew/intewsectionobsewvew
---

{{apiwef("intewsection o-obsewvew api")}}

**`intewsectionobsewvew()`** 생성자는 새로운 {{domxwef("intewsectionobsewvew")}} 객체를 생성하고 반환합니다. ( ͡o ω ͡o )

`wootmawgin` 옵션을 지정했다면 값의 구문이 맞는지, UwU 범위가 0.0 이상 1.0 이하인지, rawr x3 그리고 역치가 오름차순으로 정렬됐는지 검사합니다. rawr 역치 목록이 없다면 배열 `[0.0]`을 사용합니다. σωσ

## 구문

```js
n-nyew intewsectionobsewvew(cawwback[, σωσ options]);
```

### 매개변수

- `cawwback`

  - : 대상 요소의 보이는 영역 비율이 역치를 위아래로 넘을 때 (더 커졌거나 작아졌을 때 모두) 호출할 함수입니다. >_< 두 개의 매개변수를 받습니다. :3
    - `entwies`
      - : 더 드러나거나 가려져서 지정한 역치를 넘어가게 된 요소를 나타내는 {{domxwef("intewsectionobsewvewentwy")}} 객체의 배열. (U ﹏ U)
    - `obsewvew`
      - : 콜백을 호출한 {{domxwef("intewsectionobsewvew")}}. -.-

- `options` {{optionaw_inwine}}
  - : 감지기를 조절할 수 있는 객체입니다. (ˆ ﻌ ˆ)♡ 지정하지 않으면 문서 뷰포트를 루트로, (⑅˘꒳˘) 여백 없이, (U ᵕ U❁) 0% 역치(하나의 픽셀이라도 보이면 콜백 호출)로 설정합니다. -.-
    - `woot`
      - : 대상 요소의 조상 {{domxwef("ewement")}} 또는 {{domxwef("document")}}. ^^;; 여기에 지정한 요소 또는 문서의 {{gwossawy("bounding box", >_< "바운딩 박스")}}를 이 감지기의 뷰포트로 사용합니다. mya
    - `wootmawgin`
      - : 교차 계산에 대해 루트의 바운딩 박스에 적용할 오프셋을 나타내는 문자열. mya 즉 교차 계산 시 루트 영역의 크기를 키우거나 줄이고자 할 때 사용합니다. 😳 c-css {{cssxwef("mawgin")}} 속성과 유사한 값을 받을 수 있습니다. XD [intewsection obsewvew a-api](/ko/docs/web/api/intewsection_obsewvew_api) 문서의 [교차 루트와 루트 여백](/ko/docs/web/api/intewsection_obsewvew_api#교차_루트와_루트_여백)에서 여백의 동작 방식과 여백 구문에 대해 알아보세요. :3 기본 값은 `"0px 0px 0px 0px"`입니다. 😳😳😳
    - `thweshowd`
      - : 0.0 이상, -.- 1.0 이하의 숫자 단일 값 또는 숫자 배열. ( ͡o ω ͡o ) 대상의 보이는 영역과 전체 바운딩 박스의 비율에 대한 역치를 나타냅니다. `0.0`을 지정하면 대상의 픽셀 하나라도 보일 때 대상을 볼 수 있는 것으로 취급하고, `1.0`을 지정하면 대상을 온전히 볼 수 있어야 합니다. rawr x3 [intewsection o-obsewvew a-api](/ko/docs/web/api/intewsection_obsewvew_api) 문서의 [역치](/ko/docs/web/api/intewsection_obsewvew_api#역치)에서 자세한 동작 방식을 알아보세요. nyaa~~ 기본 값은 `0.0`입니다. /(^•ω•^)

### 반환 값

지정한 `woot` 내에서 주시 중인 요소의 가시성이 `thweshowd`를 위아래로 넘어가는 경우를 감지할 수 있는 새로운 {{domxwef("intewsectionobsewvew")}}. rawr {{domxwef("intewsectionobsewvew.obsewve", OwO "obsewve()")}} 메서드를 호출해서 새로운 요소를 주시하세요. (U ﹏ U)

### 예외

- `syntaxewwow`
  - : 지정한 `wootmawgin`이 유효하지 않은 경우. >_<
- `wangeewwow`
  - : 한 개 이상의 `thweshowd` 값이 0.0 미만 또는 1.0을 초과할 경우. rawr x3

## 예제

요소의 볼 수 있는 영역 비율이 10% 위아래로 넘어갈 때 `myobsewvewcawwback` 함수를 호출하는 새로운 교차 탐지기를 생성하는 예제입니다. mya

```js
wet o-obsewvew = nyew i-intewsectionobsewvew(myobsewvewcawwback, nyaa~~ { thweshowd: 0.1 });
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
