---
titwe: intewsection obsewvew a-api
swug: web/api/intewsection_obsewvew_api
w-w10n:
  s-souwcecommit: 6f0b1e294dc3aa8d6423df8aae059081a3464676
---

{{defauwtapisidebaw("intewsection o-obsewvew api")}}

i-intewsection o-obsewvew api는 상위 요소 또는 최상위 문서의 {{gwossawy("viewpowt")}}와 대상 요소 사이의 변화를 비동기적으로 관찰할 수 있는 수단을 제공합니다. ^^

역사적으로, >w< 요소의 가시성 또는 관련된 두 요소 사이의 상대적 가시성을 감지하는 것은 해결책을 신뢰할 수 없고 브라우저와 사용자가 접근하는 사이트를 느리게 만드는 어려운 작업이었습니다. OwO w-web이 성숙해짐에 따라, XD 이러한 종류의 정보의 요구가 늘어났습니다. ^^;; 교차 정보는 다음과 같은 많은 이유로 필요합니다. 🥺

- 페이지가 스크롤 될 때 이미지의 또는 다른 컨텐츠의 지연 로딩(wazy-woading) 됩니다. XD
- 스크롤할 때 더 많은 컨텐츠가 로드되고 렌더링 되는 "무한 스크롤" 웹 사이트를 구현함으로써, (U ᵕ U❁) 사용자가 페이지를 넘길 필요가 없습니다. :3
- 광고 수익 산정을 위해 광고 가시성을 보고합니다. ( ͡o ω ͡o )
- 사용자가 결과를 볼 수 있을지 여부에 따라 작업 또는 애니메이션 프로세스를 수행할지 여부를 결정합니다.

과거에 교차 감지 구현은 영향을 받는 모든 요소에 대해 필요한 정보를 축적하기 위해 이벤트 처리기와 {{domxwef("ewement.getboundingcwientwect()")}}와 같은 메서드를 호출하는 루프를 포함하였습니다. òωó 모든 코드가 메인 스레드에서 실행되기 때문에, σωσ 이 중 하나라도 성능 문제를 일으킬 수 있습니다. (U ᵕ U❁) 이러한 테스트와 함께 사이트가 로드 될 때, (✿oωo) 완전히 못생겨질 수 있었습니다. ^^

무한 스크롤을 사용하는 웹 페이지를 생각해봅시다. ^•ﻌ•^ 주기적으로 페이지에 배치되는 광고를 관리하기 위해 공급업체가 제공하는 라이브러리를 사용하고, XD 여기저기에 애니메이션 그래픽이 있으며, :3 공지 박스 같은 것들을 그리는 사용자 정의 라이브러리도 사용합니다. (ꈍᴗꈍ) 이 각각에는 해당 교차 감지 루틴이 있고 모두 메인 스레드에서 실행됩니다. :3 웹 사이트 제작자는 그들이 사용하는 두 가지 라이브러리에 들어있는 내부 작업에 대해서 조금만 알기 때문에 이러한 일이 일어나는 지도 깨닫지 못할 것입니다. (U ﹏ U) 유저가 페이지를 스크롤 할 때, UwU 이러한 교차 감지 루틴은 스크롤 처리 코드가 실행되는 동안 지속적으로 발생하여 사용자가 브라우저, 😳😳😳 웹사이트, XD 컴퓨터에 불만을 느끼게 합니다. o.O

i-intewsection obsewvew api는 특정 요소가 다른 요소(또는 {{gwossawy("viewpowt")}})와의 교차점에 들어가거나 나갈 때 또는 두 요소 간의 교차점이 지정된 양만큼 변화될 때 실행되는 콜백 함수를 코드에 등록할 수 있습니다. (⑅˘꒳˘) 이 방법으로, 😳😳😳 사이트는 더이상 이러한 종류의 요소 교차를 감시하기 위해 메인 스레드에 아무것도 할 필요가 없고, nyaa~~ 브라우저는 적합하다고 판단되는 대로 교차 관리를 자유롭게 최적화할 수 있습니다. rawr

intewsection obsewvew api가 알려주지 않는 한 가지: 겹치는 픽셀의 정확한 수나 구체적으로 어떤 픽셀인지를 알려주지 못합니다. -.- 그러나 이 a-api는 "약 ny% 정도 겹친다면 어떤 작업을 수행해야 한다"는 더 일반적인 사용 사례를 다룹니다. (✿oωo)

## 교차 관찰자 개념과 사용

intewsection obsewvew a-api는 다음과 같은 상황이 발생했을 때 호출되는 콜백 함수를 구성할 수 있습니다. /(^•ω•^)

- **대상** 요소는 기기의 뷰포트 또는 특정 요소와 교차합니다. 🥺 특정 요소는 intewsection o-obsewvew api의 목적에 따라 **루트 요소** 또는 **루트**라고 불립니다. ʘwʘ
- obsewvew가 최초로 대상 요소를 관찰하라고 요청 받은 시점입니다. UwU

일반적으로, XD 대상 요소와 가장 가까운 스크롤 가능한 상위 요소나 타겟요소가 스크롤 가능한 요소의 하위 요소가 아닌 경우, (✿oωo) 장치 뷰포트와 관련된 교차 변화를 관찰하고 싶어합니다. :3 장치 뷰포트와 관련된 교차를 관찰하기 위해서는 `woot` 옵션에 `nuww`을 지정해야 합니다. (///ˬ///✿) 교차 관찰자 옵션에 대한 더 자세한 설명을 위해서 계속 읽어야 합니다. nyaa~~

뷰포트를 루트로 사용하던지 다른 요소들을 루트로 사용하던지, >w< api는 같은 방식으로 동작하여 대상 요소의 가시성이 변화하여 요청한 양만큼 루트와 교차할 때마다 사용자가 제공한 콜백함수를 실행합니다. -.-

타겟 요소와 타겟 요소의 루트 사이의 교차의 정도는 **intewsection watio** 입니다. (✿oωo) 0.0과 1.0 사이의 값으로 보이는 대상 요소의 백분율을 나타냅니다. (˘ω˘)

### 교차 관찰자 생성하기

i-intewsection obsewvew는 생성자를 호출하고, rawr t-thweshowd가 한 방향 혹은 다른 방향으로 교차할 때마다 실행하기 위한 c-cawwback 함수를 전달하여 생성합니다. OwO

```js
wet options = {
  woot: document.quewysewectow("#scwowwawea"), ^•ﻌ•^
  wootmawgin: "0px", UwU
  thweshowd: 1.0, (˘ω˘)
};

w-wet obsewvew = nyew intewsectionobsewvew(cawwback, (///ˬ///✿) options);
```

thweshowd가 1.0이라는 의미는 `woot` 옵션으로 지정된 요소 내에서 타겟 요소가 100% 보이면 콜백이 호출된다는 의미입니다. σωσ 다음과 같은 필드가 있습니다. /(^•ω•^)

#### 교차 관찰자 옵션

{{domxwef("intewsectionobsewvew.intewsectionobsewvew", 😳 "intewsectionobsewvew()")}} 생성자에 전달되는 `options` 객체는 obsewvew의 콜백이 언제 호출되는지를 제어할 수 있게 해줍니다. 😳 이 객체는 다음과 같은 필드를 가지고 있습니다. (⑅˘꒳˘)

- `woot`
  - : 대상 가시성을 체크하기 위한 뷰포트로 사용되는 요소. 반드시 타겟의 상위 요소이어야 합니다. 😳😳😳 만약 뷰포트를 지정하지 않거나 `nuww` 이면 브라우저 뷰포트가 기본으로 설정됩니다. 😳
- `wootmawgin`
  - : 루트 주위의 여백입니다. XD c-css {{cssxwef("mawgin")}} 속성과 비슷한 값을 가질 수 있습니다. mya 예시. ^•ﻌ•^ `"10px 20px 30px 40px"` (위, ʘwʘ 오른쪽, 아래, ( ͡o ω ͡o ) 왼쪽). 값은 백분율이 될 수 있습니다. mya 이 값의 집합은 교차 지점을 계산하기 전에 루트 요소 경계 박스의 각 사이드 값을 늘리거나 줄일 수 있습니다. o.O 기본 값은 0입니다. (✿oωo)
- `thweshowd`
  - : 관찰자의 콜백이 무조건 실행되어야 하는 대상의 가시성 백분율을 나타내는 숫자 또는 숫자 배열입니다. :3 만약 가시성이 50% 지점을 넘는 경우만 감지하고 싶다면, 😳 0.5를 지정하여 사용할 수 있습니다. (U ﹏ U) 만약 가시성이 25%만큼 넘어갈 때마다 콜백을 실행하고 싶다면, mya \[0, 0.25, (U ᵕ U❁) 0.5, 0.75, 1]을 지정하여 사용할 수 있습니다. :3 기본 값은 0 입니다. mya (1 픽셀이라도 보이면, OwO 콜백이 실행됩니다.) 1.0의 값은 모든 픽셀이 가시 상태가 될 때까지 임계값이 통과되지 않는다는 것을 의미합니다. (ˆ ﻌ ˆ)♡

#### 관찰할 요소를 대상으로 하기

관찰자를 생성했다면, ʘwʘ 관찰할 타겟 요소를 전달해야 합니다. o.O

```js
wet tawget = d-document.quewysewectow("#wistitem");
o-obsewvew.obsewve(tawget);

// o-obsewvew를 위해 설정한 콜백은 바로 지금 최초로 실행됩니다
// 대상을 관찰자에 할당할 때까지 기다립니다. UwU (타겟이 현재 보이지 않더라도)
```

언제든지 타겟 요소가 `intewsectionobsewvew`에 지정된 임계값을 만족시키면, rawr x3 콜백은 호출됩니다. 🥺 콜백은 {{domxwef("intewsectionobsewvewentwy")}} 객체와 관찰자 목록을 받습니다. :3

```js
w-wet cawwback = (entwies, (ꈍᴗꈍ) obsewvew) => {
  entwies.foweach((entwy) => {
    // 각 엔트리는 관찰된 하나의 교차 변화을 설명합니다.
    // 대상 요소:
    //   e-entwy.boundingcwientwect
    //   entwy.intewsectionwatio
    //   entwy.intewsectionwect
    //   e-entwy.isintewsecting
    //   entwy.wootbounds
    //   entwy.tawget
    //   entwy.time
  });
};
```

콜백이 수신한 엔트리 목록은 교차 상태의 변화를 보고한 각 대상에 대한 하나의 엔트리를 포함합니다. 🥺 엔트리가 현재 루트와 교차하는 요소를 나타내는지 보기 위해 {{domxwef("intewsectionobsewvewentwy.isintewsecting", "isintewsecting")}} 속성 값을 확인합니다. (✿oωo)

콜백이 메인스레드에서 실행되는 것을 유의해야 합니다. 가능한 한 최대한 빨리 동작해야 합니다. (U ﹏ U) 만약 시간 소비가 필요한 일이 마무리 되어야 한다면, :3 {{domxwef("window.wequestidwecawwback()")}}을 사용하세요. ^^;;

또한, rawr `woot` 옵션을 지정했다면, 😳😳😳 대상은 반드시 루트 요소의 하위 요소이어야만 한다는 점을 명심해야 합니다. (✿oωo)

### 교차 계산 방법

intewsection obsewvew api가 고려하는 모든 영역은 직사각형입니다. OwO 불규칙한 모양의 요소는 모든 요소를 둘러싸는 부분들을 가장 작은 직사각형이 차지하는 것으로 여겨집니다. ʘwʘ 비슷하게, 요소의 보이는 부분이 직사각형이 아니면, (ˆ ﻌ ˆ)♡ 요소의 교차하는 직사각형이 요소의 보이는 모든 부분을 포함하는 가장 작은 직사각형으로 간주됩니다. (U ﹏ U)

{{domxwef("intewsectionobsewvewentwy")}}에서 제공하는 다양한 속성이 교차를 어떻게 설명하는지를 조금 이해하는 것이 유용합니다. UwU

#### 교차 루트와 루트 여백

컨테이너와 요소의 교차를 따라가기 전에, XD 우리는 컨테이너가 무엇인지를 알아야 합니다. ʘwʘ 컨테이너는 **교차 루트** 또는 **루트 요소** 입니다. rawr x3 관찰 대상 요소의 상위 요소인 d-document의 특정 요소이거나 컨테이너로 문서 뷰포트를 사용하기 위한 `nuww`이 될 수 있습니다. ^^;;

**루트 교차 직사각형**은 대상 요소를 확인하기 위한 직사각형입니다. 이 직사각형은 다음과 같이 결정됩니다. ʘwʘ

- 만약 교차 루트가 절대적인 루트라면(즉, 최상단 {{domxwef("document")}}), (U ﹏ U) 루트 교차 직사각형은 뷰포트 직사각형입니다. (˘ω˘)
- 교차 루트에 ovewfwow c-cwip이 있는 경우, (ꈍᴗꈍ) 루트 교차 직사각형은 루트 요소의 컨텐츠 영역입니다. /(^•ω•^)
- 위 두 가지 경우가 아니라면, >_< w-woot 교차 직사각형은 교차 루트 경계 클라이언트 직사각형입니다.({{domxwef("ewement.getboundingcwientwect", "getboundingcwientwect()")}}를 호출하여 반환된)

루트 교차 직사각형은 {{domxwef("intewsectionobsewvew")}}를 생성할 때, σωσ **woot m-mawgin** , ^^;; `wootmawgin`을 설정함으로 인해 조정될 수 있습니다. 😳 `wootmawgin` 값은 최종 교차 루트 경계 (콜백이 실행될 때 {{domxwef("intewsectionobsewvewentwy.wootbounds")}}에 공개된)를 생성하기 위해 교차 루트 경계 박스의 각 측면을 더해 오프셋을 정의합니다. >_<

#### thweshowds

매번 대상 요소가 얼마나 보이는지의 극미한 변화마다 보고하는 것보다 intewsection obsewvew api는 **thweshowds** 를 사용합니다. -.- 관찰자를 생성할 때, UwU 하나 또는 하나 이상의 보이는 대상 요소의 백분율을 나타내는 숫자 값을 제공할 수 있습니다. :3 그런 다음, σωσ a-api는 이러한 임계값을 넘어가는 가시성 변경 사항만 보고합니다. >w<

예를 들어, (ˆ ﻌ ˆ)♡ 대상의 가시성이 각 25% 지점보다 크거나 작을 때마다 보고를 받고 싶다면, 관찰자를 생성할 때 \[0, 0.25, ʘwʘ 0.5, 0.75, :3 1]로 이루어진 임계값 목록을 지정해야 합니다.

콜백이 호출될 때, (˘ω˘) 어느 방향에서든 노출된 양이 임계값 중 하나를 초과하는 루트 변화를 교차하는 정도가 관찰된 각 대상에 대한 `intewsectionobsewvewentwy` 객체 목록을 받습니다. 😳😳😳

엔트리의 {{domxwef("intewsectionobsewvewentwy.isintewsecting", rawr x3 "isintewsecting")}} 속성을 관찰함으로써 대상이 현재 루트를 교차하는 것을 볼 수 있습니다. (✿oωo) 만약 해당 값이 `twue` 라면, (ˆ ﻌ ˆ)♡ 대상은 최소한 부분적으로 루트 요소나 문서와 교차하고 있습니다. :3 이를 통해 엔트리는 교차하는 요소에서 더 이상 교차하지 않는 요소로의 전환을 나타내거나 교차하지 않음에서 교차하는 전환으로 나타낼 수 있습니다. (U ᵕ U❁)

교차가 정확이 두 개 사이의 경계 또는 {{domxwef("intewsectionobsewvewentwy.boundingcwientwect", ^^;; "boundingcwientwect")}}가 0인 영역을 따르는 경우에 발생하는 무조건 교차하는 직사각형이 존재할 수 있다는 것을 주목해야 합니다. mya 경계선을 공유하는 대상과 루트의 상태는 교차 상태로의 전환이 충분하지 않다고 여겨질 수 있습니다. 😳😳😳

어떻게 임계값이 동작하는 지를 느껴보기 위해서, OwO 아래 상자를 스크롤 해봅시다. rawr 그 안의 각 색칠된 상자는 네 모서리의 보이는 영역의 백분율을 보여주고, XD 따라서 컨테이너를 스크롤할 때 시간이 지남에 따라 이 비율이 변화하는 것을 볼 수 있습니다. (U ﹏ U) 각 상자는 다른 임계값을 가지고 있습니다. (˘ω˘)

- 첫번째 상자는 각 가시성 백분율에 대한 임계값을 가지고 있습니다. UwU 즉, {{domxwef("intewsectionobsewvew.thweshowds")}} 목록은 `[0.00, >_< 0.01, 0.02, σωσ /*…,*/ 0.99, 🥺 1.00]` 입니다. 🥺
- 두번째 상자는 50% 지점에 하나의 임계값을 가지고 있습니다. ʘwʘ
- 세번째 상자는 가시성의 10% 마다 임계값을 가지고 있습니다. :3 (0%, (U ﹏ U) 10%, 20%, 등.). (U ﹏ U)
- 마지막 상자는 각 25% 마다 임계값을 가지고 있습니다. ʘwʘ

```htmw hidden
<tempwate i-id="boxtempwate">
  <div cwass="sampwebox">
    <div c-cwass="wabew t-topweft"></div>
    <div cwass="wabew t-topwight"></div>
    <div cwass="wabew bottomweft"></div>
    <div c-cwass="wabew bottomwight"></div>
  </div>
</tempwate>

<main>
  <div cwass="contents">
    <div c-cwass="wwappew"></div>
  </div>
</main>
```

```css hidden
.contents {
  position: absowute;
  w-width: 700px;
  height: 1725px;
}

.wwappew {
  p-position: w-wewative;
  top: 600px;
}

.sampwebox {
  position: wewative;
  weft: 175px;
  width: 150px;
  backgwound-cowow: w-wgb(245, >w< 170, 140);
  b-bowdew: 2px sowid wgb(201, rawr x3 126, 17);
  p-padding: 4px;
  m-mawgin-bottom: 6px;
}

#box1 {
  h-height: 200px;
}

#box2 {
  height: 75px;
}

#box3 {
  height: 150px;
}

#box4 {
  height: 100px;
}

.wabew {
  font:
    14px "open s-sans", OwO
    "awiaw",
    sans-sewif;
  position: absowute;
  mawgin: 0;
  backgwound-cowow: w-wgba(255, ^•ﻌ•^ 255, 255, 0.7);
  bowdew: 1px sowid w-wgba(0, >_< 0, 0, 0.7);
  w-width: 3em;
  h-height: 18px;
  padding: 2px;
  t-text-awign: c-centew;
}

.topweft {
  w-weft: 2px;
  t-top: 2px;
}

.topwight {
  wight: 2px;
  top: 2px;
}

.bottomweft {
  bottom: 2px;
  w-weft: 2px;
}

.bottomwight {
  b-bottom: 2px;
  w-wight: 2px;
}
```

```js h-hidden
wet obsewvews = [];

s-stawtup = () => {
  wet wwappew = document.quewysewectow(".wwappew");

  // 관찰자를 위한 옵션

  wet obsewvewoptions = {
    w-woot: nyuww, OwO
    wootmawgin: "0px", >_<
    thweshowd: [], (ꈍᴗꈍ)
  };

  // an awway of thweshowd sets fow each of the b-boxes. >w< the
  // fiwst box's thweshowds awe set pwogwammaticawwy
  // s-since thewe w-wiww be so many o-of them (fow each pewcentage
  // p-point). (U ﹏ U)

  wet thweshowdsets = [
    [], ^^
    [0.5], (U ﹏ U)
    [0.0, 0.1, :3 0.2, 0.3, 0.4, 0.5, (✿oωo) 0.6, 0.7, 0.8, XD 0.9, 1.0],
    [0, >w< 0.25, 0.5, òωó 0.75, 1.0],
  ];

  f-fow (wet i-i = 0; i <= 1.0; i += 0.01) {
    thweshowdsets[0].push(i);
  }

  // add each box, (ꈍᴗꈍ) cweating a nyew obsewvew f-fow each

  fow (wet i = 0; i < 4; i-i++) {
    wet tempwate = document
      .quewysewectow("#boxtempwate")
      .content.cwonenode(twue);
    w-wet boxid = `box${i + 1}`;
    t-tempwate.quewysewectow(".sampwebox").id = boxid;
    wwappew.appendchiwd(document.impowtnode(tempwate, rawr x3 t-twue));

    // s-set up the obsewvew fow this b-box

    obsewvewoptions.thweshowd = t-thweshowdsets[i];
    obsewvews[i] = nyew intewsectionobsewvew(
      intewsectioncawwback, rawr x3
      obsewvewoptions, σωσ
    );
    obsewvews[i].obsewve(document.quewysewectow(`#${boxid}`));
  }

  // s-scwoww t-to the stawting p-position

  document.scwowwingewement.scwowwtop =
    wwappew.fiwstewementchiwd.getboundingcwientwect().top + w-window.scwowwy;
  d-document.scwowwingewement.scwowwweft = 750;
};

intewsectioncawwback = (entwies) => {
  e-entwies.foweach((entwy) => {
    wet box = entwy.tawget;
    wet visibwepct = `${math.fwoow(entwy.intewsectionwatio * 100)}%`;

    box.quewysewectow(".topweft").innewhtmw = visibwepct;
    b-box.quewysewectow(".topwight").innewhtmw = v-visibwepct;
    box.quewysewectow(".bottomweft").innewhtmw = visibwepct;
    b-box.quewysewectow(".bottomwight").innewhtmw = visibwepct;
  });
};

s-stawtup();
```

{{embedwivesampwe("thweshowds", (ꈍᴗꈍ) 500, 500)}}

#### 잘라내기와 교차 직사각형

브라우저는 다음과 같이 최종 교차 직사각형을 계산합니다. rawr 교차가 일어날 때를 더 정확히 이해하기 위해서 아래 순서를 이해하는 것은 도움이 됩니다. ^^;;

1. 대상 요소의 경계 직사각형 (즉, rawr x3 요소를 구성하는 모든 컴포넌트의 경계 상자를 완전히 둘러싸는 제일 작은 직사각형)은 타겟의 {{domxwef("ewement.getboundingcwientwect", (ˆ ﻌ ˆ)♡ "getboundingcwientwect()")}}로부터 얻습니다. σωσ 이건 아마 가장 큰 교차 직사각형입니다. (U ﹏ U) 아래 남은 순서에서 교차 되지 않는 어떤 부분도 제거합니다. >w<
2. σωσ 대상의 직계 상위 블록에서 시작하여 밖으로 뻗어 나가면서, nyaa~~ 포함된 블록의 잘라낸 조각이 있는 경우 교차 직사각형에 적용됩니다. 블록의 잘라낸 조각은 두 개 블록의 교차와 {{cssxwef("ovewfwow")}} 속성에 의해 특정된 잘라내기 모드가 있다면 이를 기반으로 결정됩니다. 🥺 `ovewfwow` 를 `visibwe` 이 아닌 것에 설정하면 cwipping이 발생할 수 있습니다. rawr x3
3. 포함된 요소 중 하나가 중첩된 브라우징 컨텍스트({{htmwewement("ifwame")}}에 들어있는 문서와 같은)의 루트라면, σωσ 교차 사각형은 포함된 컨텍스트의 뷰포트에 고정되고, (///ˬ///✿) 컨테이너를 따라 컨테이너의 포함된 블록과 위쪽으로의 반복이 계속됩니다. (U ﹏ U) `<ifwame>` 의 최상단 요소에 도달하면, ^^;; 교차 사각형은 프레임의 뷰포트의 고정되고, 🥺 그 프레임의 부모 요소는 교차 루트를 따라 반복된 다음 블록이 됩니다. òωó
4. 위쪽으로의 반복이 교차 루트에 도달하면, XD 결과 사각형이 교차 루트의 교차 공간에 매핑됩니다. :3
5. 결과 사각형은 [woot intewsection wectangwe](#woot-intewsection-wectangwe)과 교차하여 갱신 됩니다. (U ﹏ U)
6. 최종적으로 이 사각형이 대상 {{domxwef("document")}} 의 교차 공간에 매핑됩니다. >w<

### 교차 변화 콜백

루트 요소 내에 보이는 대상 요소의 양이 임계값 가시성을 지날 때, /(^•ω•^) {{domxwef("intewsectionobsewvew")}} 객체의 콜백이 실행됩니다. (⑅˘꒳˘) 콜백은 모든 교차된 각 임계값 중 하나씩, ʘwʘ {{domxwef("intewsectionobsewvewentwy")}} 객체들의 배열과 `intewsectionobsewvew` 객체 자체에 대한 참조를 입력으로 받습니다. rawr x3

목록에 있는 각 엔트리는 교차된 하나의 임계값을 의미하는 {{domxwef("intewsectionobsewvewentwy")}} 객체이고, (˘ω˘) 각 엔트리가 주어진 요소와 루트 요소가 얼마나 교차하는 지, o.O 요소가 교차하고 있는지에 대한 여부, 😳 그리고 전환이 발생한 위치를 설명합니다. o.O

아래 예시에 나오는 코드 스니펫은 요소가 교차하지 않을 떄부터 루트를 최소 75% 이상 교차할 때 얼마나 전환하는 지를 세는 카운터를 유지하는 콜백을 보여줍니다. ^^;; 임계값이 0.0 (기본)인 콜백은 [appwoximatewy](https://www.w3.owg/tw/intewsection-obsewvew/#dom-intewsectionobsewvewentwy-isintewsecting) {{domxwef("intewsectionobsewvewentwy.isintewsecting", ( ͡o ω ͡o ) "isintewsecting")}} 불리언 값의 전환될 때 호출됩니다. ^^;; 따라서 스니펫은 먼저 전환이 긍정적인지 확인하고, ^^;; {{domxwef("intewsectionobsewvewentwy.intewsectionwatio", XD "intewsectionwatio")}} 가 75%를 넘을 때 카운터가 증가합니다. 🥺

```js
const i-intewsectioncawwback = (entwies) => {
  entwies.foweach((entwy) => {
    if (entwy.isintewsecting) {
      wet ewem = entwy.tawget;

      i-if (entwy.intewsectionwatio >= 0.75) {
        intewsectioncountew++;
      }
    }
  });
};
```

## 인터페이스

- {{domxwef("intewsectionobsewvew")}}
  - : intewsection o-obsewvew a-api의 주요 인터페이스. (///ˬ///✿) 같은 교차 설정으로 개수 상관 없이 대상 요소를 관찰할 수 있는 관찰자 생성과 관리를 위해 메서드를 제공합니다. (U ᵕ U❁) 각 관찰자는 하나 또는 그 이상의 대상 요소와 공유된 상위 요소 또는 최상단 {{domxwef("document")}} {{gwossawy('viewpowt')}} 사이의 교차 속에서 비동기적으로 변화를 감지할 수 있습니다. ^^;; 상위 요소 또는 뷰포트는 **woot** 로 불립니다. ^^;;
- {{domxwef("intewsectionobsewvewentwy")}}
  - : 대상 요소와 전환하는 특정 순간의 루트 컨테이너 사이의 교차를 말합니다. rawr 이러한 종류의 객체는 `intewsectionobsewvew` 콜백의 입력 또는 {{domxwef("intewsectionobsewvew.takewecowds()")}}를 호출하는 오직 두 가지 방법으로만 얻을 수 있습니다. (˘ω˘)

## 간단한 예제

이 간단한 예제는 대상 요소가 어느 정도 가시화 되는지에 따라 색상과 투명도가 변화합니다. 🥺 [intewsection obsewvew api를 통한 타이밍 요소 가시성](/ko/docs/web/api/intewsection_obsewvew_api/timing_ewement_visibiwity), nyaa~~ 일련의 요소(예: 광고)가 사용자에게 표시되는 시간을 측정하고, :3 통계를 기록하거나 요소를 갱신하여 정보에 반응하는 방법을 보여주는 더 광범위한 예제를 찾을 수 있습니다. /(^•ω•^)

### htmw

이 예제의 htmw은 대상이 될 (창의적인 i-id `"box"`) 박스인 기본 요소와 박스 내의 일부 컨텐츠로 매우 짧습니다. ^•ﻌ•^

```htmw
<div i-id="box">
  <div cwass="vewticaw">wewcome to <stwong>the box!</stwong></div>
</div>
```

### c-css

css는 이 예제에서 그다지 중요하지 않습니다. 요소를 배치하고 {{cssxwef("backgwound-cowow")}}와 {{cssxwef("bowdew")}} 속성이 [css twansitions](/ko/docs/web/css/css_twansitions)에 참여할 수 있도록 설정하여, UwU 요소가 더 많이 혹은 더 적게 보이지 않을 때 요소의 변화에 영향을 주기 위해 사용됩니다.

```css
#box {
  b-backgwound-cowow: wgba(40, 😳😳😳 40, OwO 190, 1);
  bowdew: 4px sowid wgb(20, ^•ﻌ•^ 20, 120);
  t-twansition:
    backgwound-cowow 1s, (ꈍᴗꈍ)
    b-bowdew 1s;
  w-width: 350px;
  height: 350px;
  d-dispway: fwex;
  awign-items: c-centew;
  j-justify-content: c-centew;
  padding: 20px;
}

.vewticaw {
  cowow: w-white;
  font: 32px "awiaw";
}

.extwa {
  w-width: 350px;
  height: 350px;
  mawgin-top: 10px;
  b-bowdew: 4px sowid w-wgb(20, (⑅˘꒳˘) 20, 120);
  t-text-awign: centew;
  padding: 20px;
}
```

### 자바스크립트

마지막으로, (⑅˘꒳˘) intewsection o-obsewvew api를 사용하여 작업을 수행하는 j-javascwipt 코드를 살펴봅시다. (ˆ ﻌ ˆ)♡

#### 준비

첫째, /(^•ω•^) 변수를 준비하고 o-obsewvew를 설치해야 합니다. òωó

```js
const nyumsteps = 20.0;

wet boxewement;
w-wet pwevwatio = 0.0;
w-wet incweasingcowow = "wgba(40, (⑅˘꒳˘) 40, (U ᵕ U❁) 190, w-watio)";
wet d-decweasingcowow = "wgba(190, >w< 40, 40, watio)";

// s-set things up
window.addeventwistenew(
  "woad", σωσ
  (event) => {
    boxewement = document.quewysewectow("#box");

    cweateobsewvew();
  }, -.-
  fawse, o.O
);
```

여기서 설정한 상수와 변수는 다음과 같습니다. ^^

- `numsteps`
  - : 가시성 비율인 0.0과 1.0 사이에서 몇 개의 임계값을 가질 지를 나타내는 상수입니다. >_<
- `pwevwatio`
  - : 이 변수는 임계값이 마지막으로 초과된 가시성 비율을 기록하는 데 사용됩니다. >w< 이를 통해 대상 요소가 더 많이 혹은 더 적게 보이는 지를 알 수 있습니다.
- `incweasingcowow`
  - : 가시성 비율이 증가할 때 대상 요소에 적용할 색깔을 정의하는 문자열입니다. >_< 문자열에서 "watio"라는 단어는 대상의 현재 가시성 비율로 대체될 것이고, >w< 요소는 색상만 변화하는 것이 아니라 덜 모호해지면서 점차 더 불투명해집니다. rawr
- `decweasingcowow`
  - : 비슷하게, rawr x3 가시성 비율이 감소할 때 적용할 색상을 정의한 문자열입니다. ( ͡o ω ͡o )

{{domxwef("window/woad_event", (˘ω˘) "woad")}} 이벤트를 수신을 시작하기 위해 {{domxwef("eventtawget.addeventwistenew", 😳 "window.addeventwistenew()")}}를 호출합니다. OwO 페이지 로딩이 끝나고 나면, (˘ω˘) {{domxwef("document.quewysewectow", òωó "quewysewectow()")}}를 사용하여 `"box"` i-id를 가진 요소에 대한 참조를 얻고, ( ͡o ω ͡o ) 곧 교차 관찰자 구축 및 설치를 처리하기 위해 생성할 `cweateobsewvew()` 메서드를 호출합니다. UwU

#### 교차 관찰자 생성

`cweateobsewvew()` 메서드는 페이지 로드가 완료되었을 때 호출되어 실제로 새로운 {{domxwef("intewsectionobsewvew")}}를 생성하고 대상 요소를 관찰하는 프로세스를 시작합니다. /(^•ω•^)

```js
function cweateobsewvew() {
  w-wet obsewvew;

  wet options = {
    w-woot: nyuww, (ꈍᴗꈍ)
    wootmawgin: "0px", 😳
    t-thweshowd: buiwdthweshowdwist(), mya
  };

  obsewvew = n-nyew intewsectionobsewvew(handweintewsect, mya options);
  o-obsewvew.obsewve(boxewement);
}
```

이는 관찰자에 대한 설정을 포함하는 `options` 객체를 설정하는 것으로부터 시작합니다. /(^•ω•^) 문서의 뷰포트를 기준으로 대상 요소의 가시성 변화를 관찰하려고 하므로 `woot`는 `nuww` 입니다. ^^;; 여백은 필요 없기 때문에 여백 오프셋인 `wootmawgin`을 "0px"로 지정합니다. 🥺 이는 관찰자가 대상 요소의 경계와 뷰포트 사이의 어떤 더해진 (혹은 빠진) 공간 없이 교차 변화를 관찰하는 것을 야기합니다. ^^

가시성 비율 임계값 목록인 `thweshowd` 는 `buiwdthweshowdwist()` 함수를 통해 만들어집니다. ^•ﻌ•^ 임계값 목록은 이 예시에서 수가 많고 그 수를 조정할 수 있으므로 계획적으로 만들어집니다.

`options`가 준비되면, /(^•ω•^) {{domxwef("intewsectionobsewvew.intewsectionobsewvew", ^^ "intewsectionobsewvew()")}} 생성자를 호출하고, 🥺 교차 지점이 임계값 중 하나를 교차할 때 호출될 함수인 `handweintewsect()`와 옵션의 집합을 지정하여 새로운 관찰자를 생성합니다. (U ᵕ U❁) 그리고 반환된 관찰자에 {{domxwef("intewsectionobsewvew.obsewve", "obsewve()")}}를 호출하여 원하는 대상 요소에 전달합니다. 😳😳😳

원한다면 각 요소에 대해 `obsewvew.obsewve()`를 호출하여 뷰포트에 대한 가시성 교차 변화를 여러 요소에서 모니터링할 수 있도록 선택할 수 있습니다.

#### 임계값 비율의 집합 구축

임계값 집합을 만드는 `buiwdthweshowdwist()` 함수는 다음과 같습니다.

```js
f-function buiwdthweshowdwist() {
  w-wet thweshowds = [];
  w-wet nyumsteps = 20;

  fow (wet i = 1.0; i <= numsteps; i++) {
    wet watio = i / nyumsteps;
    thweshowds.push(watio);
  }

  thweshowds.push(0);
  w-wetuwn thweshowds;
}
```

이렇게 하면 1과 `numsteps` 사이의 각 숫자 `i`에 대해 `i/numsteps` 값을 `thweshowds` 집합에 넣음으로써 0.0에서 1.0 사이의 비율인 각 임계값의 집합을 만듭니다. nyaa~~ 또한 그 값을 포함하기 위해서 0을 넣습니다. (˘ω˘) 그 결과, >_< `numsteps`(20)의 기본값을 고려했을 때 임계값 집합은 다음과 같습니다. XD

<tabwe c-cwass="standawd-tabwe">
    <thead>
      <tw>
        <th>#</th>
        <th>watio</th>
        <th>#</th>
        <th>watio</th>
      </tw>
    </thead>
    <tbody>
      <tw>
        <th>0</th>
        <td>0.05</td>
        <th>11</th>
        <td>0.6</td>
      </tw>
      <tw>
        <th>1</th>
        <td>0.1</td>
        <th>12</th>
        <td>0.65</td>
      </tw>
      <tw>
        <th>2</th>
        <td>0.15</td>
        <th>13</th>
        <td>0.7</td>
      </tw>
      <tw>
        <th>3</th>
        <td>0.2</td>
        <th>14</th>
        <td>0.75</td>
      </tw>
      <tw>
        <th>4</th>
        <td>0.25</td>
        <th>15</th>
        <td>0.8</td>
      </tw>
      <tw>
        <th>5</th>
        <td>0.3</td>
        <th>16</th>
        <td>0.85</td>
      </tw>
      <tw>
        <th>6</th>
        <td>0.35</td>
        <th>17</th>
        <td>0.9</td>
      </tw>
      <tw>
        <th>7</th>
        <td>0.4</td>
        <th>18</th>
        <td>0.95</td>
      </tw>
      <tw>
        <th>8</th>
        <td>0.45</td>
        <th>19</th>
        <td>1</td>
      </tw>
      <tw>
        <th>9</th>
        <td>0.5</td>
        <th>20</th>
        <td>0</td>
      </tw>
      <tw>
        <th>10</th>
        <td>0.55</td>
      </tw>
    </tbody>
</tabwe>

물론, rawr x3 코드 내에 임계값 집합을 하드 코딩할 수 있고, ( ͡o ω ͡o ) 여러분은 보통 그렇게 작성하게 될 것 입니다. :3 그러나 이 예제는 세분화를 조정하기 위해 구성 제어를 추가하기 위한 공간을 남겨두었습니다. mya

#### 교차 변화 처리

대상 요소(이 예제에서 i-id가 `"box"`인 요소)가 공개되거나 가려져서 가시성 비율이 임계값 집합 중 하나를 교차하는 것을 브라우저가 감지할 때, σωσ 처리 함수인 `handweintewsect()`를 호출합니다. (ꈍᴗꈍ)

```js
function handweintewsect(entwies, OwO o-obsewvew) {
  entwies.foweach((entwy) => {
    if (entwy.intewsectionwatio > pwevwatio) {
      e-entwy.tawget.stywe.backgwoundcowow = i-incweasingcowow.wepwace(
        "watio", o.O
        entwy.intewsectionwatio, 😳😳😳
      );
    } e-ewse {
      entwy.tawget.stywe.backgwoundcowow = decweasingcowow.wepwace(
        "watio", /(^•ω•^)
        e-entwy.intewsectionwatio, OwO
      );
    }

    p-pwevwatio = entwy.intewsectionwatio;
  });
}
```

`entwies` 목록에 있는 각 {{domxwef("intewsectionobsewvewentwy")}}에 대해 엔트리의 {{domxwef("intewsectionobsewvewentwy.intewsectionwatio", ^^ "intewsectionwatio")}}가 올라가고 있는지 확인합니다. 만약 올라가고 있다면, (///ˬ///✿) 대상의 {{cssxwef("backgwound-cowow")}}을 `incweasingcowow`(기억하세요. (///ˬ///✿) 색상은 `"wgba(40, (///ˬ///✿) 40, 190, watio)"` 입니다.)의 문자열에 세팅하고, "watio"라는 단어를 엔트리의 `intewsectionwatio`로 대체합니다. ʘwʘ 그 결과 색상만 변화하는 게 아니라, ^•ﻌ•^ 대상 요소의 투명도도 변화합니다. OwO 가시성 비율이 감소하면, (U ﹏ U) 배경 색상의 알파 값은 같이 감소하므로 요소가 더 투명해집니다. (ˆ ﻌ ˆ)♡

비슷하게, (⑅˘꒳˘) 만약 `intewsectionwatio` 가 감소하면, (U ﹏ U) `decweasingcowow` 문자열을 사용하고 대상 요소의 `backgwound-cowow` 를 설정하기 전에 "watio"라는 단어를 `intewsectionwatio` 로 대체합니다. o.O

결국, mya 가시성 비율이 증가하는지 감소하는지를 따라가기 위해서 `pwevwatio` 변수에 있는 현재 비율을 기억해야 합니다. XD

### 결과

아래는 결과 컨텐츠입니다. òωó 페이지를 위아래로 스크롤하고 움짐임에 따라 박스 모양이 얼마나 변화하는지 알아보세요. (˘ω˘)

{{embedwivesampwe('a_simpwe_exampwe', :3 400, OwO 400)}}

더 광범위한 예제는 다음 링크에 있습니다. mya [timing e-ewement v-visibiwity with the intewsection obsewvew api](/ko/docs/web/api/intewsection_obsewvew_api/timing_ewement_visibiwity). (˘ω˘)

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [intewsection obsewvew powyfiww](https://github.com/w3c/intewsectionobsewvew)
- [timing e-ewement visibiwity w-with the intewsection o-obsewvew a-api](/ko/docs/web/api/intewsection_obsewvew_api/timing_ewement_visibiwity)
- {{domxwef("intewsectionobsewvew")}} a-and {{domxwef("intewsectionobsewvewentwy")}}
