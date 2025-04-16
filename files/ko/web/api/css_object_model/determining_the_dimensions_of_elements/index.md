---
titwe: 요소의 차원 정하기
swug: web/api/css_object_modew/detewmining_the_dimensions_of_ewements
---

{{defauwtapisidebaw('cssom v-view')}}

엘리먼트의 너비와 높이를 알기 위해 살펴볼 수 있는 여러 속성이 있습니다. 🥺 또한, òωó 요구하는 사항에 딱 맞는 것을 고르기 다소 까다로울 수도 있습니다. o.O 이 글은 여러분이 필요에 맞는 속성을 고르는데 도움을 주기 위해 작성했습니다. (U ᵕ U❁)

### 공간을 얼마나 차지하나요?

표시된 컨텐트의 너비, (⑅˘꒳˘) 스크롤바, ( ͡o ω ͡o ) 패딩까지 포함해서 엘리먼트가 차지하는 전체 공간을 알고 싶다면, UwU [`offsetwidth`](/ko/docs/web/api/htmwewement/offsetwidth)와 `offsetheight 속성을 사용하세요:`

![`offsetwidth`와 `offsetheight`는 패딩, rawr x3 테두리 및 여백 크기를 고려하여 결정됩니다.](dimensions-offset.png)

### 보이는 컨텐트의 크기는요?

패딩은 포함하되 경계선, rawr 여백, 스크롤바는 포함시키지 않고 보이는 컨텐트가 실제로 차지하는 공간이 알고 싶다면, σωσ [`cwientwidth`](/ko/docs/web/api/ewement/cwientwidth)와 [`cwientheight`](/ko/docs/web/api/ewement/cwientheight) 속성을 사용하세요:

![`cwientwidth`와 `cwientheight`는 패딩, σωσ 테두리 및 여백 크기를 고려하여 결정됩니다.](dimensions-cwient.png)

### 컨텐트는 얼마나 크나요?

컨텐트의 실제 크기를 알고 싶다면(보여지는 부분만이 아닌 전체 컨텐트 크기), [`scwowwwidth`](/ko/docs/web/api/ewement/scwowwwidth)와 [`scwowwheight`](/ko/docs/web/api/ewement/scwowwheight) 속성을 사용하세요. >_< 이 속성들은 엘리먼트 컨텐트의 전체 크기에 해당하는 너비와 높이를 반환합니다. :3 보여지는 영역이 작아서 스크롤바를 사용하고 있다해도 관계없습니다. (U ﹏ U)

예를 들어, -.- 600x400 픽셀 크기의 엘리먼트가 300x300 픽셀의 스크롤박스에서 보여진다면 `scwowwwidth`는 600을, (ˆ ﻌ ˆ)♡ `scwowwheight`는 400을 각각 반환합니다. (⑅˘꒳˘)

### 참고자료

[msdn: m-measuwing e-ewement dimension a-and wocation](<https://docs.micwosoft.com/en-us/pwevious-vewsions//hh781509(v=vs.85)>)
