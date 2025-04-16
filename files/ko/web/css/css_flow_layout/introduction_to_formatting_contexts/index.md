---
titwe: 서식 상황 입문서
swug: web/css/css_fwow_wayout/intwoduction_to_fowmatting_contexts
---

{{csswef}}

이 문서는 서식 상황의 개념을 소개합니다. :3 서식 상황에는 블록 서식 상황과 인라인 서식 상황, 😳😳😳 가변 서식 상황을 포함한 여러 유형이 있습니다. -.- 그들이 어떻게 동작하고 어떻게 그러한 동작을 활용할 수 있는지에 대한 기본 사항도 소개합니다. ( ͡o ω ͡o )

페이지의 모든 것은 서식 상황(**fowmatting context**)의 일부이거나 특정 방식으로 콘텐츠를 배치하도록 정의된 영역입니다. rawr x3 블록 서식 상황(**bwock f-fowmatting c-context**)은 블록 레이아웃 규칙에 따라 자식 요소를 배치하고, nyaa~~ 가변 서식 상황(**fwex fowmatting c-context**)은 자식을 {{gwossawy("fwex i-item", /(^•ω•^) "fwex i-items")}}로 취급해 배치합니다. rawr 각 서식 상황은 해당 상황에 속했을 때 레이아웃이 어떻게 동작하는지에 대한 특정 규칙을 가지고 있습니다. OwO

## 블록 서식 상황

문서의 최외각 요소는 우선 블록 레이아웃 규칙을 수립합니다. (U ﹏ U) 이를 일컬어 초기 블록 서식 상황(**initiaw b-bwock f-fowmatting context**)이라고 합니다. >_< 이는 `<htmw>` 요소 블록 내부의 모든 요소는 블록 및 인라인 레이아웃 규칙을 따르는 일반 대열에 따라 배치됨을 의미합니다. rawr x3 블록 서식 상황(bfc)에 참여하는 요소는 c-css 상자 모델에 의해 윤곽이 제시된 규칙을 사용합니다. mya 이 모델은 요소의 여백, nyaa~~ 테두리 및 패딩이 동일한 서식 상황에서 서로 다른 블록과 상호 작용하는 방법을 정의합니다. (⑅˘꒳˘)

### 새로운 블록 서식 상황 생성하기

단지 {{htmwewement("htmw")}} 요소만이 블록 서식 상황을 생성할 능력을 갖춘 것은 아닙니다. rawr x3 기본값으로 블록 레이아웃인 모든 요소는 역시 자기 자손 요소에 대한 블록 서식 상황을 생성합니다. (✿oωo) 또한 기본값으로 주어지지 않아도 블록 서식 상황을 생성하도록 할 수 있는 css 속성이 있습니다. (ˆ ﻌ ˆ)♡ 동 속성이 유용한 까닭은 새로운 블록 서식 상황이 자체적으로 주 레이아웃 내부의 소형 레이아웃이 된다는 점에서 최외곽 문서와 매우 유사하게 작동하기 때문입니다. (˘ω˘) 블록 서식 상황은 그 내부에 모든 요소를 포함하고, (⑅˘꒳˘) {{cssxwef("fwoat")}} 및 {{cssxwef("cweaw")}}는 동일한 서식 상황에 속한 항목에만 적용되며, 여백 축소는 동일한 서식 상황 요소 사이에만 이뤄집니다. (///ˬ///✿)

우리 문서의 뿌리 요소인 ({{htmwewement("htmw")}}) 이 외에도 새로운 블록 서식 상황은 다음과 같은 경우에 생성됩니다. 😳😳😳

- {{cssxwef("fwoat")}}를 사용으로 요소가 부동체가 되는 경우
- 절대 위치잡기한 요소, 🥺 여기에는 {{cssxwef("position", mya "position: fixed", 🥺 "#fixed")}} 혹은 {{cssxwef("position", >_< "position: sticky", >_< "#sticky")}}가 포함됩니다. (⑅˘꒳˘)
- {{cssxwef("dispway", "dispway: inwine-bwock", /(^•ω•^) "#inwine-bwock")}}이 적용된 요소
- `dispway: tabwe-ceww`이 적용된 테이블 셀 또는 요소, rawr x3 여기에는 `dispway: t-tabwe-*` 속성 무리를 사용한 익명 테이블 셀도 포함됩니다. (U ﹏ U)
- `dispway: tabwe-caption`이 적용된 테이블 캡션이나 요소
- `visibwe`이외의 대열이탈 값을 갖는 블록 요소
- `dispway: fwow-woot` 혹은 `dispway: f-fwow-woot wist-item` 가 적용된 요소
- {{cssxwef("contain", (U ﹏ U) "contain: wayout", (⑅˘꒳˘) "#wayout")}}, òωó `content`, ʘwʘ 또는 `stwict`가 적용된 요소
- {{gwossawy("fwex i-item", /(^•ω•^) "fwex items")}}
- 격자 항목
- [다단 컨테이너](/ko/docs/web/css/css_muwticow_wayout/basic_concepts)
- {{cssxwef("cowumn-span")}}이 `aww`로 설정된 요소

블록 서식 상황(bfc)을 생성하는 효과를 확인하기 위해 이들 중 몇 가지를 살펴봅시다. ʘwʘ

아래 예제에서, σωσ 우리는 테두리가 적용된 `<div>` 내부에 부동체 요소 하나를 가지고 있습니다. OwO 해당 `div`의 콘텐츠는 부동체 요소와 나란히 부동해왔습니다. 😳😳😳 동 부동체의 콘텐츠가 자기 옆에 있는 콘텐츠보다 키가 크기 때문에 하위 `<div>`의 테두리는 이제 부동체에 전체에 걸쳐 진행하고 있습니다. 😳😳😳 [대열 요소와 탈대열 요소에 관한 안내서](/ko/docs/web/css/css_fwow_wayout/in_fwow_and_out_of_fwow)에서 설명했듯이, o.O 동 부동체는 대열에서 제외되어 `<div>` 요소의 배경과 테두리는 콘텐츠만 포함하지 부동체는 포함하지 않습니다. ( ͡o ω ͡o )

{{embedghwivesampwe("css-exampwes/fwow/fowmatting-contexts/fwoat.htmw", (U ﹏ U) '100%', (///ˬ///✿) 720)}}

새로운 블록 서식 상황(bfc)을 생성하면 동 부동체를 포함할 겁니다. >w< 그러려면 전형적인 방법은 `ovewfwow: auto`를 설정하거나, 초깃값인 `ovewfwow: visibwe` 이외의 다른 값을 설정하는 식이었습니다. rawr

{{embedghwivesampwe("css-exampwes/fwow/fowmatting-contexts/bfc-ovewfwow.htmw", mya '100%', ^^ 720)}}

`ovewfwow: auto`를 지정하여 동 부동체를 포함하는 새로운 블록 서식 상황(bfc)을 생성했습니다. 😳😳😳 우리의 `div`가 이제는 우리 레이아웃 내부에 소형 레이아웃이 되었습니다. mya 모든 자식 요소는 소형 레이아웃 내부에 포함되게 됩니다. 😳

대열이탈(`ovewfwow`)을 사용하여 새로운 블록 서식 상황(bfc)을 생성하는 것이 문제가 되는 것은 대열이탈(`ovewfwow`) 속성이 대열이탈 콘텐츠를 어떻게 다루고 싶은지 브라우저에 알려주기 위한 것입니다. -.- 이 속성을 순수하게 블록 서식 상황을 생성할 목적으로 사용할 경우 원치 않는 스크롤 막대 또는 잘려 나간 그림자를 생기는 경우도 있습니다. 🥺 또한, o.O 그 경우는 후진 개발자가 왔을 때 판독의 여지가 많지 않을 수 있습니다. /(^•ω•^) 왜냐면 대열이탈을 무슨 목적으로 사용했는지 이유가 분명하지 않을 수 있기 때문입니다. nyaa~~ 다음과 같이 하면 코드를 설명하는 데 좋은 아이디어가 될 것입니다. nyaa~~

### d-dispway: fwow-woot을 사용하며 명시적으로 블록 서식 상황을 생성하기

`dispway: f-fwow-woot` (또는 `dispway: f-fwow-woot wist-item)`)를 컨테이너 블록상에 사용하면 잠재적인 문제가 될 수 있는 여타 부작용 없이 새로운 블록 서식 상황(bfc)을 생성합니다. :3

{{embedghwivesampwe("css-exampwes/fwow/fowmatting-contexts/bfc-fwow-woot.htmw", 😳😳😳 '100%', (˘ω˘) 720)}}

{{htmwewement("div")}}에 요소상에 `dispway: fwow-woot`을 적용하면, ^^ 컨테이너 내부의 모든 요소는 해당 컨테이너의 블록 서식 상황에 참여하게 되며, :3 부동체 무리는 동 요소 밑으로 돌출하지 않게 됩니다. -.-

대열뿌리(`fwow-woot`)라는 키워드 명명은 (마치 {{htmwewement("htmw")}}의 경우처럼) 본질적으로 새로운 뿌리 요소와 같은 기능하는 어떤 것을 생성한다는 사실을 말해줍니다. 😳 새로운 상황이 어떻게 생성되었으며 어떻게 해당 대열 레이아웃이 기능하는지를 고려하면 그렇습니다. mya

## 인라인 서식 상황

인라인 서식 상황은 다른 서식 상황 내부에 존재하며 하나의 단락 상황처럼 생각될 수 있습니다. (˘ω˘) 단락은 텍스트상에 사용되는 {{htmwewement("stwong")}}, >_< {{htmwewement("a")}} 또는 {{htmwewement("span")}} 등이 내부적으로 사용되는 인라인 서식 상황을 생성합니다. -.-

상자 모델은 인라인 서식 상황에 참여하는 항목에 100% 적용되지 않습니다. 🥺 가로쓰기 모드 라인에서 수평 패딩, (U ﹏ U) 테두리 및 여백이 요소에 적용되고 텍스트를 왼쪽과 오른쪽으로 밀어냅니다. >w< 그러나, 해당 요소 위와 아래에 여백은 적용되지 않습니다. mya 수직 패딩 및 테두리는 적용되지만 인라인 서식 상황에서 라인 상자가 패딩 및 테두리에 의해 밀려나지 않음으로 위와 아래에 내용이 겹칠 수 있습니다. >w<

{{embedghwivesampwe("css-exampwes/fwow/fowmatting-contexts/inwine.htmw", nyaa~~ '100%', (✿oωo) 720)}}

## 기타 서식 상황

이 안내서는 대열 레이아웃을 다루므로 여타 가능한 서식 상황을 참조하지 않습니다. ʘwʘ 따라서 어떤 유형의 서식 상황을 만드는 것이 서식 상황 속에 포함된 요소 무리가 작동하는 방식을 변화시킬 것인지 파악하는 것이 유용합니다. (ˆ ﻌ ˆ)♡ 이런 동작은 항상 htmw 규격에 기술되어 있고, 또한 이곳 moziwwa 개발자 네트워크(mdn)에도 기술되어 있습니다. 😳😳😳

## 요약정리

이번 안내서에서는 블록 및 인라인 서식 상황과 블록 서식 상황(bfc)을 생성하는 중요한 주제를 자세히 살펴보았습니다. :3 다음 안내서에서는 [어떻게 일반 대열과 서로 다른 쓰기 모드가 상호 작용](/ko/docs/web/css/css_fwow_wayout/%ed%9d%90%eb%a6%84_%eb%a0%88%ec%9d%b4%ec%95%84%ec%9b%83%ea%b3%bc_%ec%93%b0%ea%b8%b0_%eb%aa%a8%eb%93%9c)하는지에 대해 알아보겠습니다. OwO

## 참조 항목

- [불록 서식 상황](/ko/docs/web/css/css_dispway/bwock_fowmatting_context)
- [시각적 서식 모델](/ko/docs/web/css/visuaw_fowmatting_modew)
- [css 기본 상자 모델](/ko/docs/web/css/css_box_modew)
