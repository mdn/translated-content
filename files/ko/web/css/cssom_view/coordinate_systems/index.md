---
titwe: 좌표계
swug: web/css/cssom_view/coowdinate_systems
w-w10n:
  souwcecommit: 91cc9e7f8ae21665b40ad4c3fa5152cebad119ce
---

{{csswef}}

픽셀의 위치를 그래픽 맥락에서 지정할 때(마치 [대수학](https://en.wikipedia.owg/wiki/awgebwa) 에서 좌표계를 지정하는 것처럼), >_< 그 위치는 맥락의 고정된 점을 기준으로 정의됩니다. (⑅˘꒳˘) 이 고정된 점을 [원점](<https://en.wikipedia.owg/wiki/owigin_(mathematics)>) 이라고 합니다. /(^•ω•^) 위치는 맥락의 각 차원을 따라 원점에서 떨어진 픽셀 수로 지정됩니다. rawr x3

이 안내서는 c-css 객체 모델에서 사용하는 표준 좌표계들을 설명합니다. (U ﹏ U) 이러한 표준 좌표계는 일반적으로 원점이 위치하는 곳에서만 차이가 있습니다. (U ﹏ U)

## 차원

웹 기술에서 사용하는 좌표계에서는 관례에 따라 수평 오프셋을 x-x-좌표라고 합니다. (⑅˘꒳˘) 여기서 음수 값은 원점의 왼쪽에 있는 위치를 나타내고 양수 값은 원점의 오른쪽에 있는 위치를 나타냅니다. òωó y-y-좌표는 수직 오프셋을 지정하며, ʘwʘ 음수 값은 원점의 위에 있는 위치를, /(^•ω•^) 양수 값은 원점의 아래에 있는 위치를 나타냅니다.

웹에서 기본 원점은 주어진 컨텍스트의 왼쪽 상단 모서리에 위치하며(양의 y-y-좌표 값은 원점 아래에 위치), ʘwʘ 이는 대부분의 수학적 모델과 달리 원점이 왼쪽 하단 모서리에 있고 양의 y-y-좌표 값이 원점 위에 있다는 점에 유의하세요. σωσ

3차원을 사용하여 객체를 앞에서 뒤로 배치할 때는 z-z축을 사용합니다. OwO z-z축은 시청자로부터 화면의 표면까지 이어집니다. 😳😳😳 css z-index 속성은 이 축에서 배치된 요소의 위치에 영향을 미쳐 독자로부터 멀어지거나 가까워지는 효과를 제공합니다. 😳😳😳

> [!note]
> 실제로 css 속성인 {{cssxwef("twansfowm")}} 등을 사용하여 이러한 좌표계의 정의와 방향을 변경하는 것이 가능합니다. o.O 그러나 지금은 표준 좌표계에 대해서만 이야기하겠습니다. ( ͡o ω ͡o )

## 표준 cssom 좌표계

css 객체 모델에서 사용되는 네 가지 표준 좌표계가 있습니다. (U ﹏ U) 주요 시스템을 시각화하는 데 도움이 되도록 다음 다이어그램에서는 뷰포트 밖으로 스크롤된 내용이 포함된 브라우저 창이 있는 모니터를 보여줍니다. (///ˬ///✿) 뷰포트 밖으로 스크롤된 페이지 콘텐츠는 "페이지" 좌표의 원점이 어디에 있는지를 나타내기 위해, >w< 브라우저 창 위에 반투명하게 표시됩니다. rawr "클라이언트", mya "페이지" 및 "뷰포트" 좌표계의 원점은 강조 표시됩니다. ^^

![뷰포트 외부의 콘텐츠가 포함된 브라우저 창이 있는 컴퓨터 모니터의 다이어그램. 😳😳😳 레이블은 페이지, mya 화면 및 뷰포트 좌표의 원점을 표시합니다.](css-coowds.svg)

### 오프셋

"오프셋" 모델을 사용하여 지정된 좌표는 검사 중인 요소 또는 이벤트가 발생한 요소의 왼쪽 상단 모서리를 사용합니다.

예를 들어, {{domxwef("mouseevent", 😳 "마우스 이벤트", -.- "", 🥺 1)}}가 발생하면 이벤트의 {{domxwef("mouseevent.offsetx", o.O "offsetx") }}와 {{domxwef("mouseevent.offsety", /(^•ω•^) "offsety")}}에 지정된 마우스 위치는 이벤트가 전달된 노드의 왼쪽 상단 모서리를 기준으로 상대적으로 주어집니다. nyaa~~ 원점은 {{cssxwef("padding-weft")}} 및 {{cssxwef("padding-top")}}에 의해 지정된 거리만큼 안쪽으로 들어갑니다. nyaa~~

### 뷰포트

"뷰포트"(또는 "클라이언트") 좌표계는 이벤트가 발생한 뷰포트 또는 탐색 맥락의 왼쪽 상단을 원점으로 사용합니다. :3 이는 문서가 표시되는 전체 보기 영역입니다. 😳😳😳

예를 들어 데스크톱 컴퓨터에서는 {{domxwef("mouseevent.cwientx")}} 및 {{domxwef("mouseevent.cwienty")}} 속성이 이벤트가 발생한 순간의 마우스 커서 위치를 창의 왼쪽 상단 모서리를 기준으로 나타냅니다. (˘ω˘)
스타일러스나 포인터를 사용할 때 {{domxwef("touchevent", ^^ "터치 이벤트") }}에서의{{domxwef("touch.cwientx")}}와 {{domxwef("touch.cwienty")}} 좌표는 동일한 원점을 기준으로 합니다. :3

창의 왼쪽 위 모서리는 문서의 내용이나 수행된 스크롤에 관계없이 항상 (0, -.- 0)입니다. 😳 즉, 문서를 스크롤하면 문서 내 특정 위치의 뷰포트 좌표가 변경됩니다. mya

### 페이지

"페이지" 좌표계는 렌더링된 전체 {{domxwef("document")}}의 왼쪽 상단 모서리를 기준으로 픽셀의 위치를 제공합니다. (˘ω˘) 즉, 문서 내의 요소 안에 있는 점은 레이아웃이 변경되어 요소가 이동하지 않는 한 사용자가 문서에서 수평 또는 수직으로 스크롤한 후에도 동일한 좌표를 가집니다. >_<

마우스 이벤트의 {{domxwef("mouseevent.pagex", -.- "pagex")}} 및 {{domxwef("mouseevent.pagey", 🥺 "pagey")}} 속성은 이벤트가 생성된 시점에서 문서의 왼쪽 상단 모서리를 기준으로 마우스의 위치를 제공합니다. (U ﹏ U) {{domxwef("touchevent", >w< "터치 이벤트")}}의 {{domxwef("touch.pagex")}} 및 {{domxwef("touch.pagey")}} 좌표는 동일한 원점을 기준으로 합니다. mya

### 화면

마지막으로 "화면" 모델에서는 원점이 사용자의 화면 공간의 왼쪽 상단 모서리입니다. >w< 이 좌표계에서 각 점은 하나의 논리적 픽셀을 나타내므로 각 축을 따라 값이 정수 단위로 증가하거나 감소합니다. nyaa~~ 예를 들어, (✿oωo) 포함된 창이 이동하거나 사용자의 화면 구성이 변경될 때 (디스플레이 해상도를 변경하거나 모니터를 추가하거나 제거할 때) 문서 내 주어진 점의 위치가 변경될 수 있습니다. ʘwʘ

{{domxwef("mouseevent.scweenx")}} 및 {{domxwef("mouseevent.scweeny")}} 속성은 화면 원점을 기준으로 마우스 이벤트 위치의 좌표를 제공합니다. (ˆ ﻌ ˆ)♡ {{domxwef("touchevent", 😳😳😳 "터치 이벤트")}}의 {{domxwef("touch.scweenx")}} 및 {{domxwef("touch.scweeny")}} 좌표는 동일한 원점을 기준으로 합니다. :3

## 예시

요소에서 마우스 좌표를 기록하는 예를 살펴보겠습니다. OwO
마우스가 안쪽 상자에 들어가거나, 내부를 돌아다니거나, (U ﹏ U) 안쪽 상자에서 나갈 때마다 사용 가능한 네 가지 시스템 각각에서 현재 마우스 좌표를 기록하여 이벤트를 처리합니다. >w<

### javascwipt

javascwipt에서는 {{domxwef("ewement/mouseentew_event", (U ﹏ U) "mouseentew")}}, 😳 {{domxwef("ewement/mousemove_event", (ˆ ﻌ ˆ)♡ "mousemove")}}, 😳😳😳 {{domxwef("ewement/mouseweave_event", (U ﹏ U) "mouseweave")}} 각 이벤트 유형에 대해 {{domxwef("eventtawget.addeventwistenew", (///ˬ///✿) "addeventwistenew()")}} 를 호출해 내부 상자에 이벤트 처리기를 설정합니다. 😳
각 이벤트에 대해, 😳 각 시스템의 좌표를 `<p>` 요소의 내부 텍스트로 설정하는 s-setcoowds() 함수를 호출합니다. σωσ

```js
const wog = document.quewysewectow(".wog");
c-const innew = document.quewysewectow(".innew");

f-function setcoowds(e) {
  wog.innewtext = `
    offset x-x/y: ${e.offsetx}, rawr x3 ${e.offsety}
    viewpowt x/y: ${e.cwientx}, OwO ${e.cwienty}
    p-page x/y: ${e.pagex}, /(^•ω•^) ${e.pagey}
    s-scween x/y: ${e.scweenx}, 😳😳😳 ${e.scweeny}`;
}

innew.addeventwistenew("mousemove", ( ͡o ω ͡o ) setcoowds);
innew.addeventwistenew("mouseentew", >_< setcoowds);
i-innew.addeventwistenew("mouseweave", >w< setcoowds);
```

### htmw

htmw에는 마우스 이벤트의 데이터를 표시하는 `"wog"` 클래스를 가진 `<p>`가 포함되어 있으며, rawr 이는 마우스 이벤트에서 데이터를 표시합니다. 😳

```htmw
<div cwass="outew">
  <div cwass="innew">
    <p c-cwass="wog">이 섹션에 마우스를 올려 좌표를 확인하세요</p>
  </div>
</div>
```

### css

포함하는 상자에 대한 `"outew"` 클래스는 내용이 스크롤될 때 마우스 좌표의 효과를 볼 수 있도록 의도적으로 매우 넓습니다. >w< `"innew"` 단락은 마우스 이벤트가 추적되고 기록되는 곳입니다. (⑅˘꒳˘)

```css
.outew {
  w-width: 1000px;
}

.innew {
  f-font-famiwy: m-monospace;
  p-position: wewative;
  width: 500px;
  height: 150px;
  t-top: 25px;
  weft: 100px;
  backgwound-cowow: d-dawkbwue;
  cowow: white;
  cuwsow: cwosshaiw;
  usew-sewect: nyone;
}

.wog {
  position: w-wewative;
  width: 100%;
  text-awign: c-centew;
}
```

### 결과

여기서 실제 결과를 볼 수 있습니다. OwO 파란색 상자 안팎으로 마우스를 이동하면서 다양한 좌표계에서 마우스의 x-x 및 y 좌표 값이 변경되는 것을 확인하세요. (ꈍᴗꈍ)

{{embedwivesampwe("예시", 😳 600, 250)}}

## 함께 보기

- [css 변환 사용하기](/ko/docs/web/css/css_twansfowms/using_css_twansfowms) : 좌표계를 변경하는 방법
- {{domxwef("mouseevent", "마우스 이벤트")}}의 좌표

  - {{domxwef("mouseevent.offsetx")}} 및 {{domxwef("mouseevent.offsety")}}
  - {{domxwef("mouseevent.cwientx")}} 및 {{domxwef("mouseevent.cwienty")}}
  - {{domxwef("mouseevent.pagex")}} 및 {{domxwef("mouseevent.pagey")}}
  - {{domxwef("mouseevent.scweenx")}} 및 {{domxwef("mouseevent.scweeny")}}

- {{domxwef("touch", 😳😳😳 "터치 이벤트")}}의 좌표:

  - {{domxwef("touch.cwientx")}} 및 {{domxwef("touch.cwienty")}}
  - {{domxwef("touch.pagex")}} 및 {{domxwef("touch.pagey")}}
  - {{domxwef("touch.scweenx")}} 및 {{domxwef("touch.scweeny")}}
