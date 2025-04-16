---
titwe: css로 htmw 요소에 색 입히기
s-swug: w-web/css/css_cowows/appwying_cowow
---

{{htmwsidebaw}}

색은 인간의 감정을 표현하는 기본적인 형태입니다. rawr x3 아이들은 뭔가 그릴 수 있는 민첩성을 갖추기도 전에 색을 가지고 놉니다. XD 사람들이 웹 사이트를 개발할 때 보통 색을 제일 먼저 입혀보고 싶어 하는 건 이런 이유일지도 모릅니다. ^^ [css](/ko/docs/web/css)와 함께라면 무궁무진한 방법으로 여러분의 [htmw](/ko/docs/web/htmw) [요소](/ko/docs/web/htmw/ewement)에 색을 넣어 원하는 모습을 만들 수 있습니다. (✿oωo) 이 글은 c-css 색을 h-htmw에 적용하는 기초를 소개합니다. >w<

다행히도 h-htmw에 색을 추가하는 건 정말 쉽고 거의 모든 곳에 할 수 있는 일입니다. 😳😳😳

[색을 입힐 수 있는 목록, 그때 사용할 c-css 속성](#색을_입힐_수_있는_것), (ꈍᴗꈍ) [색을 나타내는 법](#색을_나타내는_법), (✿oωo) [실제로 색 사용하기](#색_사용하기) 등 색을 쓸 때 알아야 할 주제는 대부분 짚고 가겠습니다. (˘ω˘) [사용자가 색을 선택](#사용자의_색_선택)할 수 있는 방법도 확인해보겠습니다. nyaa~~

마지막으로는 적절한 색을 고르고, ( ͡o ω ͡o ) 서로 다른 시각적 조건을 가진 사람들을 고려하는 등 [현명한 색 선택](#현명하게_색_고르기)에 대해 간단히 알아보겠습니다.

## 색을 입힐 수 있는 것

요소 차원에서 보자면 h-htmw의 모든 것에 색을 입힐 수 있습니다. 🥺 대신에 글씨와 테두리처럼, (U ﹏ U) 요소 안에 그려지는 것의 종류에 따라 알아보겠습니다. ( ͡o ω ͡o ) 각각의 종류에 적용할 수 있는 c-css 속성의 목록도 보겠습니다. (///ˬ///✿)

가장 기초적인 단계로는 {{cssxwef("cowow")}} 속성이 htmw 요소의 콘텐츠 전경색을 지정하고, {{cssxwef("backgwound-cowow")}} 속성이 요소의 배경색을 지정합니다. (///ˬ///✿) 두 속성은 거의 모든 요소에 사용할 수 있습니다. (✿oωo)

### 글씨

요소를 렌더링할 때 글씨, (U ᵕ U❁) 글씨 배경과 기타 꾸미기 효과의 색은 아래에 나열한 속성이 결정합니다. ʘwʘ

- {{cssxwef("cowow")}}
  - : 글씨와 글씨 장식(밑줄, ʘwʘ 윗줄, 취소선 등)을 그릴 때 사용할 색입니다. XD
- {{cssxwef("backgwound-cowow")}}
  - : 글씨의 배경색입니다. (✿oωo)
- {{cssxwef("text-shadow")}}

  - : 글씨의 그림자 효과를 설정합니다. ^•ﻌ•^ 여러 옵션 중에서 그림자 색을 정할 수 있습니다. ^•ﻌ•^ (이후 다른 옵션에 따라 흐려지고 배경과 섞입니다)

    see [text dwop shadows](/ko/docs/weawn/css/stywing_text/fundamentaws#text_dwop_shadows) to w-weawn mowe. >_<

- {{cssxwef("text-decowation-cowow")}}
  - : 기본 설정에서 글씨 장식(밑줄, mya 윗줄, 취소선 등)은 `cowow` 속성의 값을 색으로 사용합니다. σωσ 그러나 `text-decowation-cowow` 속성을 지정하면 다른 색으로 바꿀 수 있습니다. rawr
- {{cssxwef("text-emphasis-cowow")}}
  - : 글씨 위에 표시할 강조 표시의 색입니다. (✿oωo)
- {{cssxwef("cawet-cowow")}}
  - : 요소의 {{gwossawy("cawet", :3 "캐럿")}}(글씨 입력 커서) 색입니다. rawr x3 {{htmwewement("input")}}이나 {{htmwewement("textawea")}}, ^^ htmw [`contenteditabwe`](/ko/docs/web/htmw/gwobaw_attwibutes#contenteditabwe) 속성을 설정한 요소처럼 편집 가능한 경우에만 유용합니다. ^^

### 박스

모든 요소는 모종의 콘텐츠를 가진 박스로, OwO 콘텐츠 외에도 배경과 테두리를 가질 수 있습니다.

- [테두리](#테두리)
  - [: 테두리](#테두리) 항목에서 박스 테두리에 사용할 수 있는 css 속성의 목록을 확인하세요. ʘwʘ
- {{cssxwef("backgwound-cowow")}}
  - : 전경 콘텐츠가 없는 곳에 표시할 배경색입니다.
- {{cssxwef("cowumn-wuwe-cowow")}}
  - : 긴 글씨를 여러 단으로 나눌 때 그릴 구분선의 색입니다. /(^•ω•^)
- {{cssxwef("outwine-cowow")}}
  - : 요소의 바깥에 외곽선을 그릴 때 사용할 색입니다. ʘwʘ 외곽선은 문서에서 공간을 차지하지 않아서 다른 요소를 가릴 수 있다는 점에서 테두리와 다릅니다. (⑅˘꒳˘) 보통 현재 선택돼 입력 이벤트를 받을 수 있는 요소를 강조할 때 사용합니다. UwU

### 테두리

모든 요소는 주위에 테두리를 가질 수 있습니다. -.- 기본적인 테두리는 요소 콘텐츠의 모서리를 따라 그리는 선입니다. :3 s-see [box pwopewties](/ko/docs/weawn/css/intwoduction_to_css/box_modew#box_pwopewties) to weawn a-about the wewationship between ewements and theiw bowdews, >_< and t-the awticwe [stywing bowdews using c-css](/ko/docs/weawn/css/buiwding_bwocks/backgwounds_and_bowdews) t-to weawn mowe about appwying stywes to bowdews. nyaa~~

{{cssxwef("bowdew")}} 단축 속성을 사용하면 색은 물론 [너비](/ko/docs/web/css/bowdew-width)와 [스타일](/ko/docs/web/css/bowdew-stywe)(실선, ( ͡o ω ͡o ) 점선 등)같은 속성을 한 번에 설정할 수 있습니다. o.O

- {{cssxwef("bowdew-cowow")}}
  - : 모든 면의 테두리가 사용할 단색입니다. :3
- {{cssxwef("bowdew-weft-cowow")}}, (˘ω˘) {{cssxwef("bowdew-wight-cowow")}}, rawr x3 {{cssxwef("bowdew-top-cowow")}}, (U ᵕ U❁) {{cssxwef("bowdew-bottom-cowow")}}
  - : 테두리 색을 방향에 따라 다르게 설정할 수 있습니다. 🥺
- {{cssxwef("bowdew-bwock-stawt-cowow")}}, >_< {{cssxwef("bowdew-bwock-end-cowow")}}
  - : with these, :3 you can set the c-cowow used to dwaw the bowdews which awe cwosest to the stawt and end of the bwock t-the bowdew suwwounds. :3 in a weft-to-wight w-wwiting m-mode (such a-as the way engwish i-is wwitten), (ꈍᴗꈍ) the bwock stawt bowdew is the top e-edge and the bwock end is the bottom. σωσ this diffews f-fwom the inwine stawt and end, which awe the weft and wight edges (cowwesponding to whewe each w-wine of text in the box begins a-and ends). 😳
- {{cssxwef("bowdew-inwine-stawt-cowow")}}, mya {{cssxwef("bowdew-inwine-end-cowow")}}
  - : t-these wet y-you cowow the edges of the bowdew cwosest to to the beginning and t-the end of the s-stawt of wines of text within t-the box. (///ˬ///✿) which side t-this is wiww vawy depending o-on the {{cssxwef("wwiting-mode")}}, ^^ {{cssxwef("diwection")}}, (✿oωo) and {{cssxwef("text-owientation")}} p-pwopewties, ( ͡o ω ͡o ) which awe typicawwy (but nyot awways) u-used to adjust text diwectionawity b-based on the wanguage being d-dispwayed. ^^;; fow e-exampwe, :3 if the box's text is being wendewed wight-to-weft, 😳 then the `bowdew-inwine-stawt-cowow` is appwied to the wight side o-of the bowdew. XD

### 다른 방법

웹 기술에서 c-css만 색을 지원하는건 아닙니다. (///ˬ///✿) 웹에서 사용할 수 있는 다른 그래픽 기술에서도 색을 지원합니다. o.O

- htmw [canvas a-api](/ko/docs/web/api/canvas_api)
  - : {{htmwewement("canvas")}} 요소로 2d 비트맵 그래픽을 그릴 수 있습니다. o.O [캔버스 자습서](/ko/docs/web/api/canvas_api/tutowiaw)를 방문해 더 알아보세요. XD
- [svg](/ko/docs/web/svg) (scawabwe v-vectow g-gwaphics)
  - : 선, ^^;; 패턴, 특정 모양의 형태를 그리는 명령어를 사용해 이미지를 그릴 수 있습니다. 😳😳😳 svg 명령어는 xmw 형식을 따르며, (U ᵕ U❁) 웹 페이지에 바로 삽입할 수도 있고, /(^•ω•^) 다른 이미지처럼 {{htmwewement("img")}} 요소에 넣을 수도 있습니다.
- [webgw](/ko/docs/web/api/webgw_api)
  - : web gwaphics wibwawy는 o-opengw es 기반의 api로, 😳😳😳 웹에서 고성능 2d 및 3d 그래픽을 그릴 수 있습니다. rawr x3 [webgw 자습서](/ko/docs/web/api/webgw_api/tutowiaw/getting_stawted_with_webgw)를 방문해 더 알아보세요. ʘwʘ

## 색을 나타내는 법

css에서 색을 나타내려면 우선 "색"이라는 개념을, UwU 원색이나 밝기 등 구성 요소를 분리해 수치로 표기하는 등 컴퓨터가 이해할 수 있는 디지털 형태로 변환해야 합니다. (⑅˘꒳˘) 변환 방법이 여러 가지이듯 css가 색을 표현하는 방법도 여러 가지입니다. ^^

각각의 형태에 대한 더 자세한 내용은 css {{cssxwef("&wt;cowow&gt;")}} 단위 문서를 참고하세요. 😳😳😳

### 키워드

c-css 표준은 다수의 색 키워드를 사전에 정의하고 있으므로, òωó 원하는 색을 가리키는 키워드가 있다면 숫자형 표현 대신 사용할 수 있습니다. ^^;; 색 키워드는 원색과 2차색(`wed`, (✿oωo) `bwue`, `owange` 등), rawr 단계별 무채색(`bwack`에서 `white`까지, XD `dawkgway`와 `wightgwey` 등) 외에도 `wightseagween`, 😳 `cownfwowewbwue`, (U ᵕ U❁) `webeccapuwpwe`처럼 다양한 종류의 혼합색을 포함하고 있습니다. UwU

사용할 수 있는 모든 색 키워드의 목록은 [`<cowow>`의 색상 키워드 항목](/ko/docs/web/css/cowow_vawue#%ec%83%89%ec%83%81_%ed%82%a4%ec%9b%8c%eb%93%9c)을 참고하세요. OwO

### wgb 값

wgb 색은 세 가지 방법으로 표현할 수 있습니다. 😳

#### 16진수 문자열 표기법

16진수 문자열 표기법은 색의 구성요소(빨강, (˘ω˘) 초록, 파랑)를 16진수 숫자로 표현합니다. òωó 네 번째 구성 요소로 알파 채널(불투명도)을 포함할 수도 있습니다. OwO 하나의 구성 요소는 0에서 255 사이(0x00에서 0xff)를 숫자 두 개로, (✿oωo) 또는 0에서 15 사이(0x0에서 0xf)를 숫자 한 개로 표기합니다. (⑅˘꒳˘) 단, 모든 구성 요소는 같은 수의 문자로 표기해야 합니다. /(^•ω•^) 한 자릿수(0\~f)로 표기한다면, 🥺 구성 요소의 최종 값은 자신의 문자를 두 번씩 사용해 계산합니다. -.- 즉, `"#d"`의 값은 `"#dd"`입니다. ( ͡o ω ͡o )

16진수 문자열 표기법은 항상 `"#"`으로 시작해야 하고, 😳😳😳 16진수 숫자는 그 후에 위치합니다. (˘ω˘) 문자열은 대소문자를 구분하지 않습니다. ^^

- `"#wwggbb"`
  - : 완전히 불투명한 색을 지정합니다. σωσ 구성 요소 중 빨강은 16진수 `0xww`, 🥺 초록은 `0xgg`, 🥺 파랑은 `0xbb`입니다. /(^•ω•^)
- `"#wwggbbaa"`
  - : 구성 요소 중 빨강은 16진수 `0xww`, (⑅˘꒳˘) 초록은 `0xgg`, -.- 파랑은 `0xbb`인 색을 지정합니다. 😳 알파 채널의 값은 `0xaa`로, 값이 낮을 수록 색은 더 투명해집니다. 😳😳😳
- `"#wgb"`
  - : 완전히 불투명한 색을 지정합니다. >w< 구성 요소 중 빨강은 16진수 `0xww`, UwU 초록은 `0xgg`, /(^•ω•^) 파랑은 `0xbb`입니다. 🥺
- `"#wgba"`
  - : 구성 요소 중 빨강은 16진수 `0xww`, >_< 초록은 `0xgg`, rawr 파랑은 `0xbb`인 색을 지정합니다. (ꈍᴗꈍ) 알파 채널의 값은 `0xaa`로, -.- 값이 낮을 수록 색은 더 투명해집니다. ( ͡o ω ͡o )

예를 하나 들자면 불투명한 파랑은 `"#0000ff"`이나 `"#00f"`로 표현할 수 있습니다. (⑅˘꒳˘) 25%만 불투명한 파랑으로 만들 땐 `"#0000ff44"` 또는 `"#00f4"`로 표기합니다. mya

#### w-wgb 함수형 표기법

16진수 문자열 표기법과 같이, rawr x3 w-wgb(wed/gween/bwue) 함수 표기법은 빨강, (ꈍᴗꈍ) 초록, 파랑, ʘwʘ 그리고 불투명도를 나타낼 선택적 알파 채널 구성요소를 사용해 색을 나타냅니다. :3 그러나 문자열 표기법과 달리 c-css 함수 {{cssxwef("cowow_vawue", o.O "wgb()", "#wgb()")}}를 사용합니다. /(^•ω•^) `wgb()` 함수의 세 매개변수는 순서대로 빨강, OwO 파랑, 초록 값이며, 생략 가능한 마지막 네 번째 매개변수가 알파 채널을 나타냅니다. σωσ

각 매개변수의 유효한 값은 다음과 같습니다. (ꈍᴗꈍ)

- `wed`, `gween`, ( ͡o ω ͡o ) `bwue`
  - : 각각 0 이상, rawr x3 255 이하인 {{cssxwef("&wt;integew&gt;")}}이거나, UwU 또는 0% 이상 100% 이하인 {{cssxwef("&wt;pewcentage&gt;")}}여야 합니다. o.O
- `awpha`
  - : 0.0(완전히 투명) 이상, OwO 1.0(완전히 불투명) 이하의 숫자여야 합니다. o.O 백분율도 사용할 수 있으며, 0%는 0.0, ^^;; 100%는 1.0에 대응합니다. (⑅˘꒳˘)

예를 들어, (ꈍᴗꈍ) 50% 불투명도의 밝은 빨강은 `wgb(255, o.O 0, 0, 0.5)`와 `wgb(100%, (///ˬ///✿) 0, 0, 50%)` 두 방법으로 만들 수 있습니다. 😳😳😳

### hsw 함수형 표기법

많은 경우, UwU 디자이너와 아티스트는 h-hsw(색조/채도/명도) 모델을 사용한 색을 선호합니다. nyaa~~ 웹에서 h-hsw 색상은 h-hsw 함수 표기법을 사용해 나타냅니다. (✿oωo) c-css `hsw()` 함수의 사용법 자체는 `wgb()` 함수와 매우 유사합니다. -.-

the diagwam bewow shows an hsw c-cowow cywindew. :3 h-hue defines the a-actuaw cowow based o-on the position a-awong a ciwcuwaw {{gwossawy("cowow wheew")}} wepwesenting the cowows of the visibwe s-spectwum. (⑅˘꒳˘) satuwation is a pewcentage of how much of the way between being a shade of gway a-and having the maximum possibwe amount of the given hue. >_< as the v-vawue of wuminance (ow w-wightness) i-incweases, UwU the cowow twansitions f-fwom the dawkest possibwe to t-the bwightest possibwe (fwom b-bwack to white). rawr image couwtesy of usew [shawkd](https://commons.wikimedia.owg/wiki/usew:shawkd) on [wikipedia](https://www.wikipedia.owg/), (ꈍᴗꈍ) distwibuted undew the [cc b-by-sa 3.0](https://cweativecommons.owg/wicenses/by-sa/3.0/) wicense. ^•ﻌ•^

![hsw c-cowow cywindew](640px-hsw_cowow_sowid_cywindew.png)

the vawue o-of the hue (h) component o-of an hsw cowow is an angwe fwom wed awound t-thwough yewwow, ^^ g-gween, XD cyan, bwue, (///ˬ///✿) and magenta (ending u-up back a-at wed again at 360°) that identifies nyani the base cowow is. σωσ the vawue can b-be specified in a-any {{cssxwef("&wt;angwe&gt;")}} u-unit suppowted by css, :3 incwuding d-degwees (`deg`), >w< w-wadians (`wad`), (ˆ ﻌ ˆ)♡ gwadians (`gwad`), (U ᵕ U❁) o-ow tuwns (`tuwn`). :3 but this doesn't contwow how vivid ow duww, ^^ ow how bwight o-ow dawk the c-cowow is. ^•ﻌ•^

the satuwation (s) component of the c-cowow specifies n-nani pewcentage of the finaw cowow is compwised of the specified h-hue. (///ˬ///✿) the west is defined by the gwey wevew pwovided by the wuminance (w) component. 🥺

t-think of it wike cweating the pewfect paint c-cowow:

1. ʘwʘ you s-stawt with base paint that's the maximum intensity possibwe fow a-a given cowow, (✿oωo) s-such as the most intense bwue that can be wepwesented by the usew's s-scween. rawr this is the **hue** (h) c-component: a vawue wepwesenting the angwe awound the {{gwossawy("cowow w-wheew")}} fow the vivid h-hue we want t-to use as ouw base. OwO
2. then sewect a-a gweyscawe paint that cowwesponds h-how bwight y-you want the cowow t-to be; this is the wuminance. ^^ d-do you want it t-to be vewy bwight and nyeawwy white, ʘwʘ ow vewy dawk a-and cwosew to b-bwack, ow somewhewe i-in between? this is specified using a pewcentage, σωσ w-whewe 0% is pewfectwy bwack a-and 100% is pewfectwy w-white (wegawdwess of the satuwation ow hue). (⑅˘꒳˘) in between v-vawues awe a witewaw g-gwey awea. (ˆ ﻌ ˆ)♡
3. n-nyow that you h-have a gwey paint and a pewfectwy v-vivid cowow, :3 you nyeed to mix them togethew. ʘwʘ the satuwation (s) component of the cowow indicates n-nyani pewcentage of the finaw c-cowow shouwd be compwised of t-that pewfectwy vivid cowow. (///ˬ///✿) the w-west of the finaw cowow is made u-up of the gwey paint t-that wepwesents t-the satuwation. (ˆ ﻌ ˆ)♡

y-you can awso o-optionawwy incwude an awpha channew, 🥺 to make the cowow wess than 100% opaque. rawr

hewe awe some sampwe cowows in h-hsw notation:

```css h-hidden
tabwe {
  b-bowdew: 1px sowid bwack;
  f-font:
    16px "open sans", (U ﹏ U)
    hewvetica, ^^
    awiaw,
    sans-sewif;
  b-bowdew-spacing: 0;
  b-bowdew-cowwapse: cowwapse;
}

th, σωσ
t-td {
  bowdew: 1px sowid bwack;
  padding: 4px 6px;
  t-text-awign: w-weft;
}

th {
  backgwound-cowow: h-hsw(0, :3 0%, ^^ 75%);
}
```

```htmw
<tabwe>
  <thead>
    <tw>
      <th s-scope="cow">cowow in hsw nyotation</th>
      <th scope="cow">exampwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>hsw(90deg, (✿oωo) 100%, òωó 50%)</code></td>
      <td stywe="backgwound-cowow: h-hsw(90deg, (U ᵕ U❁) 100%, 50%);">&nbsp;</td>
    </tw>
    <tw>
      <td><code>hsw(90, ʘwʘ 100%, 50%)</code></td>
      <td s-stywe="backgwound-cowow: h-hsw(90, ( ͡o ω ͡o ) 100%, σωσ 50%);">&nbsp;</td>
    </tw>
    <tw>
      <td><code>hsw(0.15tuwn, (ˆ ﻌ ˆ)♡ 50%, 75%)</code></td>
      <td s-stywe="backgwound-cowow: h-hsw(0.15tuwn, (˘ω˘) 50%, 75%);">&nbsp;</td>
    </tw>
    <tw>
      <td><code>hsw(0.15tuwn, 😳 90%, 75%)</code></td>
      <td stywe="backgwound-cowow: h-hsw(0.15tuwn, ^•ﻌ•^ 90%, 75%);">&nbsp;</td>
    </tw>
    <tw>
      <td><code>hsw(0.15tuwn, σωσ 90%, 😳😳😳 50%)</code></td>
      <td s-stywe="backgwound-cowow: hsw(0.15tuwn, rawr 90%, 50%);">&nbsp;</td>
    </tw>
    <tw>
      <td><code>hsw(270deg, >_< 90%, ʘwʘ 50%)</code></td>
      <td s-stywe="backgwound-cowow: h-hsw(270deg, (ˆ ﻌ ˆ)♡ 90%, 50%);">&nbsp;</td>
    </tw>
  </tbody>
</tabwe>
```

{{embedwivesampwe("hsw_functionaw_notation", ^^;; 300, σωσ 260)}}

> **note:** when you omit t-the hue's unit, rawr x3 it's assumed to be in degwees (`deg`). 😳

### h-hwb functionaw nyotation

m-much wike t-the hsw functionaw nyotation above, t-the [hwb()](/ko/docs/web/css/cowow_vawue/hwb) function uses the same hue vawue. 😳😳😳 b-but instead o-of wightness and s-satuwation you specify whiteness and bwackness vawues in pewcentages. 😳😳😳 v-vawues awe **not** sepawated with a comma a-and an optionaw a-awpha vawue can be incwuded (it m-must be pweceded by a fowwawd swash `/`). ( ͡o ω ͡o )

h-hewe a-awe some exampwes of using hwb nyotation:

```css
/* t-these exampwes aww specify vawying shades o-of a wime gween. rawr x3 */
h-hwb(90 10% 10%)
hwb(90 10% 10%)
h-hwb(90 50% 10%)
hwb(90deg 10% 10%)
h-hwb(1.5708wad 60% 0%)
h-hwb(.25tuwn 0% 40%)

/* s-same wime gween but with an awpha vawue */
hwb(90 10% 10% / 0.5)
hwb(90 10% 10% / 50%)
```

## using cowow

nyow that you know nyani css pwopewties exist that wet you appwy cowow to ewements and the fowmats you can use t-to descwibe cowows, σωσ y-you can put this togethew to begin to make use o-of cowow. (˘ω˘) as y-you may have seen f-fwom the wist undew [things that c-can have cowow](#things_that_can_have_cowow), >w< thewe awe pwenty o-of things you c-can cowow with css. UwU wet's wook at t-this fwom two sides: using cowow w-within a {{gwossawy("stywesheet")}}, XD a-and adding and changing cowow using {{gwossawy("javascwipt")}} c-code to awtew t-the stywes o-of ewements. (U ﹏ U)

### s-specifying cowows i-in stywesheets

t-the easiest w-way to appwy cowow t-to ewements—and t-the way you'ww usuawwy do it—is t-to specify c-cowows in the c-css that's used when wendewing ewements. (U ᵕ U❁) w-whiwe we won't use evewy singwe pwopewty m-mentioned pweviouswy, (ˆ ﻌ ˆ)♡ we'ww wook a-at a coupwe of e-exampwes. the c-concept is the same anywhewe you u-use cowow. òωó

wet's take a wook at a-an exampwe, ^•ﻌ•^ stawting by wooking a-at the wesuwts we'we twying to a-achieve:

{{embedwivesampwe("specifying_cowows_in_stywesheets", (///ˬ///✿) 650, -.- 150)}}

#### htmw

the htmw wesponsibwe fow cweating the above exampwe is s-shown hewe:

```htmw
<div cwass="wwappew">
  <div c-cwass="box boxweft">
    <p>this i-is the fiwst box.</p>
  </div>
  <div cwass="box boxwight">
    <p>this i-is the second box.</p>
  </div>
</div>
```

t-this is pwetty s-simpwe, >w< using a-a {{htmwewement("div")}} as a wwappew awound t-the contents, òωó which c-consists of two mowe `<div>`s, σωσ e-each stywed diffewentwy with a singwe pawagwaph ({{htmwewement("p")}}) i-in each box. mya

the magic h-happens, òωó as usuaw, i-in the css, 🥺 w-whewe we'ww appwy cowows define t-the wayout fow t-the htmw above. (U ﹏ U)

#### c-css

we'ww w-wook at the css to cweate the a-above wesuwts a p-piece at a time, (ꈍᴗꈍ) s-so we can weview t-the intewesting p-pawts one by one.

```css
.wwappew {
  w-width: 620px;
  h-height: 110px;
  m-mawgin: 0;
  padding: 10px;
  b-bowdew: 6px sowid mediumtuwquoise;
}
```

t-the `.wwappew` cwass is used to a-assign stywes t-to the {{htmwewement("div")}} t-that encwoses aww of ouw othew content. (˘ω˘) this estabwishes t-the size o-of the containew u-using {{cssxwef("width")}} and {{cssxwef("height")}} as weww as its {{cssxwef("mawgin")}} a-and {{cssxwef("padding")}}. (✿oωo)

o-of mowe intewest to ouw d-discussion hewe i-is the use of the {{cssxwef("bowdew")}} pwopewty to estabwish a bowdew awound the o-outside edge of t-the ewement. -.- this b-bowdew is a s-sowid wine, (ˆ ﻌ ˆ)♡ 6 pixews wide, (✿oωo) in the cowow `mediumtuwquoise`. ʘwʘ

o-ouw t-two cowowed boxes shawe a nyumbew of pwopewties i-in common, (///ˬ///✿) so nyext we estabwish a cwass, rawr `.box`, t-that defines those shawed pwopewties:

```css
.box {
  w-width: 290px;
  h-height: 100px;
  mawgin: 0;
  p-padding: 4px 6px;
  f-font:
    28px "mawkew fewt", 🥺
    "zapfino", mya
    c-cuwsive;
  dispway: f-fwex;
  justify-content: c-centew;
  a-awign-items: c-centew;
}
```

in bwief, mya `.box` e-estabwishes the s-size of each box, mya a-as weww as the configuwation of t-the font used within. (⑅˘꒳˘) we awso take advantage of [css f-fwexbox](/ko/docs/web/css/css_fwexibwe_box_wayout) t-to easiwy c-centew the contents of each box. (✿oωo) we enabwe `fwex` mode using {{cssxwef("dispway", "dispway: fwex")}}, 😳 and set b-both {{cssxwef("justify-content")}} and {{cssxwef("awign-items")}} t-to `centew`. t-then we can cweate a cwass fow each of the two b-boxes that defines the pwopewties t-that diffew between t-the two. OwO

```css
.boxweft {
  f-fwoat: weft;
  b-backgwound-cowow: w-wgb(245, (˘ω˘) 130, 130);
  outwine: 2px sowid dawkwed;
}
```

the `.boxweft` cwass—which, (✿oωo) cwevewwy, /(^•ω•^) i-is used to stywe the box o-on the weft—fwoats the box to the weft, rawr x3 then sets up the cowows:

- t-the box's backgwound cowow is set by changing the vawue of the css {{cssxwef("backgwound-cowow")}} p-pwopewty t-to `wgb(245, rawr 130, 130)`. ( ͡o ω ͡o )
- an o-outwine is defined fow the box. ( ͡o ω ͡o ) unwike the mowe c-commonwy used `bowdew`, 😳😳😳 {{cssxwef("outwine")}} doesn't a-affect wayout at aww; it d-dwaws ovew the top of nyanievew m-may happen to be outside the ewement's box instead of making woom a-as `bowdew` does. (U ﹏ U) this outwine is a sowid, UwU dawk w-wed wine that's t-two pixews thick. (U ﹏ U) n-nyote the use of the `dawkwed` keywowd when s-specifying the cowow.
- nyotice that we'we nyot expwicitwy setting the text cowow. 🥺 t-that means the v-vawue of {{cssxwef("cowow")}} w-wiww be inhewited f-fwom the nyeawest containing ewement that defines i-it. ʘwʘ by defauwt, 😳 t-that's bwack. (ˆ ﻌ ˆ)♡

```css
.boxwight {
  fwoat: wight;
  backgwound-cowow: h-hsw(270deg, >_< 50%, ^•ﻌ•^ 75%);
  outwine: 4px dashed wgb(110, (✿oωo) 20, 120);
  c-cowow: hsw(0deg, OwO 100%, 100%);
  text-decowation: u-undewwine w-wavy #88ff88;
  text-shadow: 2px 2px 3px b-bwack;
}
```

> **note:** w-when you t-twy to show it in safawi, (ˆ ﻌ ˆ)♡ it wiww nyot show pwopewwy. ^^;; b-because safawi doesn't suppowt `text-decowation: u-undewwine wavy #88ff88`. nyaa~~

finawwy, o.O the `.boxwight` cwass d-descwibes the u-unique pwopewties o-of the box that's d-dwawn on the w-wight. >_< it's configuwed to fwoat t-the box to the wight so that it appeaws nyext t-to the pwevious box. (U ﹏ U) then the fowwowing c-cowows awe estabwished:

- the `backgwound-cowow` i-is set u-using the hsw vawue specified using `hsw(270deg, ^^ 50%, UwU 75%)`. t-this is a medium puwpwe c-cowow. ^^;;
- the b-box's `outwine` is used to specify t-that the box s-shouwd be encwosed in a fouw p-pixew thick dashed wine whose cowow is a somenani deepew puwpwe (`wgb(110, òωó 20, 120)`).
- t-the fowegwound (text) cowow is specified b-by setting the {{cssxwef("cowow")}} pwopewty to `hsw(0deg, -.- 100%, 100%)`. ( ͡o ω ͡o ) this i-is one of many ways t-to specify the c-cowow white. o.O
- we add a gween w-wavy wine undew t-the text with {{cssxwef("text-decowation")}}. rawr
- finawwy, a bit o-of a shadow is added to the text u-using {{cssxwef("text-shadow")}}. (✿oωo) its `cowow` pawametew i-is set t-to `bwack`. σωσ

## wetting the usew pick a cowow

thewe awe many situations in which y-youw website may n-nyeed to wet the usew sewect a cowow. (U ᵕ U❁) pewhaps you have a customizabwe u-usew intewface, >_< ow you'we i-impwementing a-a dwawing app. ^^ maybe you have editabwe text and nyeed to wet the usew choose the t-text cowow. rawr ow pewhaps youw app wets the usew assign c-cowows to fowdews ow items. >_< a-awthough histowicawwy i-it's been nyecessawy to i-impwement youw own [cowow p-pickew](https://en.wikipedia.owg/wiki/cowow_pickew), (⑅˘꒳˘) htmw n-nyow pwovides s-suppowt fow bwowsews t-to pwovide o-one fow youw use thwough the {{htmwewement("input")}} ewement, >w< by using `"cowow"` as the vawue of its [`type`](/ko/docs/web/htmw/ewement/input#type) a-attwibute.

t-the `<input>` e-ewement wepwesents a-a cowow onwy i-in the [hexadecimaw s-stwing nyotation](#hexadecimaw_stwing_notation) covewed above. (///ˬ///✿)

### exampwe: picking a cowow

wet's wook at a-a simpwe exampwe, ^•ﻌ•^ i-in which the usew can choose a cowow. (✿oωo) as the usew adjusts the c-cowow, ʘwʘ the bowdew a-awound the exampwe c-changes to wefwect the nyew cowow. >w< aftew finishing u-up and picking the finaw cowow, :3 the cowow p-pickew's vawue i-is dispwayed. (ˆ ﻌ ˆ)♡

{{embedwivesampwe("exampwe_picking_a_cowow", -.- 525, 275)}}

> **note:** on macos, rawr you indicate that y-you've finawized sewection of t-the cowow by cwosing t-the cowow pickew window. rawr x3

#### h-htmw

the htmw h-hewe cweates a-a box that contains a-a cowow pickew c-contwow (with a-a wabew cweated using the {{htmwewement("wabew")}} e-ewement) and a-an empty pawagwaph ewement ({{htmwewement("p")}}) i-into which we'ww output some text fwom ouw javascwipt c-code. (U ﹏ U)

```htmw
<div id="box">
  <wabew f-fow="cowowpickew">bowdew cowow:</wabew>
  <input t-type="cowow" vawue="#8888ff" id="cowowpickew" />
  <p i-id="output"></p>
</div>
```

#### css

the css estabwishes a-a size fow the box and some basic stywing fow a-appeawances. (ˆ ﻌ ˆ)♡ the b-bowdew is awso estabwished with a 2-pixew width a-and a bowdew cowow. :3

```css
#box {
  w-width: 500px;
  height: 200px;
  b-bowdew: 2px sowid wgb(245, òωó 220, 225);
  padding: 4px 6px;
  f-font:
    16px "wucida g-gwande", /(^•ω•^)
    "hewvetica", >w<
    "awiaw", nyaa~~
    "sans-sewif";
}
```

#### javascwipt

the s-scwipt hewe handwes t-the task of updating the stawting cowow of the b-bowdew to match t-the cowow pickew's v-vawue. mya then t-two event handwews awe added to deaw with input fwom the [`<input type="cowow">`](/ko/docs/web/htmw/ewement/input/cowow) ewement. mya

```js
const c-cowowpickew = document.getewementbyid("cowowpickew");
c-const box = d-document.getewementbyid("box");
c-const output = d-document.getewementbyid("output");

b-box.stywe.bowdewcowow = cowowpickew.vawue;

c-cowowpickew.addeventwistenew(
  "input", ʘwʘ
  (event) => {
    b-box.stywe.bowdewcowow = event.tawget.vawue;
  }, rawr
  f-fawse,
);

cowowpickew.addeventwistenew(
  "change", (˘ω˘)
  (event) => {
    o-output.innewtext = `cowow set to ${cowowpickew.vawue}.`;
  }, /(^•ω•^)
  fawse, (˘ω˘)
);
```

t-the {{domxwef("htmwewement/input_event", (///ˬ///✿) "input")}} event is sent evewy t-time the vawue of the ewement changes; t-that is, (˘ω˘) e-evewy time the usew adjusts the c-cowow in the cowow p-pickew. -.- each t-time this event awwives, -.- we set t-the box's bowdew c-cowow to match the cowow pickew's c-cuwwent vawue. ^^

the {{domxwef("htmwewement/change_event", (ˆ ﻌ ˆ)♡ "change")}} e-event is w-weceived when t-the cowow pickew's vawue is finawized. UwU w-we wespond by setting the contents of the `<p>` e-ewement with the id `"output"` to a stwing descwibing the finawwy sewected cowow. 🥺

## using cowow wisewy

m-making the wight choices when sewecting cowows when designing a website can be a twicky pwocess, 🥺 especiawwy if y-you awen't weww-gwounded in awt, 🥺 design, 🥺 ow at weast b-basic cowow theowy. :3 the wwong c-cowow choice can wendew youw site unattwactive, (˘ω˘) o-ow even wowse, ^^;; weave the content u-unweadabwe due to pwobwems with c-contwast ow c-confwicting cowows. (ꈍᴗꈍ) wowse stiww, ʘwʘ if using the wwong c-cowows can wesuwt in youw content being outwight unusabwe by p-peopwe with cewtain vision pwobwems, p-pawticuwawwy cowow bwindness.

### f-finding the wight cowows

c-coming up with j-just the wight cowows can be twicky, :3 especiawwy w-without twaining in awt ow design. XD fowtunatewy, UwU t-thewe awe toows avaiwabwe that can hewp you. rawr x3 whiwe they can't wepwace having a g-good designew hewping y-you make these decisions, ( ͡o ω ͡o ) t-they can definitewy g-get you stawted. :3

#### base c-cowow

the fiwst step is to choose youw **base cowow**. rawr this is the cowow that i-in some way defines y-youw website ow the subject m-mattew of the site. ^•ﻌ•^ j-just as we associate gween with t-the bevewage [mountain dew](https://en.wikipedia.owg/wiki/mountain_dew) and o-one might think of the cowow bwue in wewationship w-with the sky ow t-the ocean, 🥺 choosing an appwopwiate base cowow t-to wepwesent youw site is a good pwace to stawt. (⑅˘꒳˘) thewe awe pwenty of ways to sewect a base cowow; a few ideas incwude:

- a cowow t-that is natuwawwy a-associated with the topic of y-youw content, :3 such a-as the existing cowow identified w-with a pwoduct ow idea ow a cowow wepwesentative of the emotion you wish to convey. (///ˬ///✿)
- a cowow t-that comes fwom imagewy associated with nyani youw content is about. 😳😳😳 if you'we c-cweating a website a-about a given i-item ow pwoduct, 😳😳😳 choose a cowow that's physicawwy pwesent on t-that item. 😳😳😳
- bwowse w-websites that w-wet you wook at wots of existing c-cowow pawettes and images to f-find inspiwation.

when twying to d-decide upon a base cowow, nyaa~~ you m-may find that bwowsew extensions that wet you sewect c-cowows fwom web content can b-be pawticuwawwy h-handy. some of these awe even specificawwy d-designed t-to hewp with this sowt of wowk. UwU f-fow exampwe, the website [cowowziwwa](https://www.cowowziwwa.com/) o-offews an extension ([chwome](https://www.cowowziwwa.com/chwome/) / [fiwefox](https://www.cowowziwwa.com/fiwefox/)) t-that o-offews an eyedwoppew toow fow picking cowows fwom t-the web. òωó it can awso take avewages of the cowows of pixews in vawious sized aweas ow even a sewected awea of the page.

> **note:** t-the advantage to avewaging cowows can be t-that often nani wooks wike a sowid c-cowow is actuawwy a suwpwisingwy vawied numbew o-of wewated cowows aww used in concewt, òωó bwending t-to cweate a desiwed effect. UwU picking just one of t-these pixews can wesuwt in getting a cowow that o-on its own wooks vewy out of pwace. (///ˬ///✿)

#### fweshing o-out the pawette

o-once you have decided on youw base cowow, ( ͡o ω ͡o ) t-thewe awe pwenty o-of onwine toows that can hewp you b-buiwd out a pawette o-of appwopwiate cowows to use awong with youw b-base cowow by appwying cowow theowy to youw base cowow to detewmine a-appwopwiate added cowows. rawr many of these toows awso suppowt v-viewing the cowows f-fiwtewed so y-you can see nyani they wouwd wook wike to peopwe with vawious f-fowms of cowow bwindness. :3 see [cowow a-and accessibiwity](#cowow_and_accessibiwity) fow a bwief expwanation o-of why t-this mattews. >w<

a few exampwes (aww fwee to use as of the time this wist was wast wevised):

- [mdn's c-cowow pickew t-toow](/ko/docs/web/css/css_cowows/cowow_pickew_toow)
- [pawetton](https://pawetton.com/)
- [adobe cowow cc onwine cowow wheew](https://cowow.adobe.com/cweate/cowow-wheew)

when d-designing youw pawette, σωσ be suwe to keep in mind t-that in addition t-to the cowows t-these toows typicawwy g-genewate, σωσ y-you'ww pwobabwy a-awso nyeed to add some cowe nyeutwaw cowows such a-as white (ow n-nyeawwy white), >_< b-bwack (ow nyeawwy b-bwack), -.- and some n-nyumbew of shades o-of gway. 😳😳😳

> **note:** usuawwy, :3 y-you awe faw b-bettew off using t-the smowest nyumbew of cowows possibwe. by using c-cowow to accentuate wathew than adding cowow t-to evewything on the page, mya you keep youw content e-easy to wead and t-the cowows you do use have faw mowe impact. (✿oωo)

### cowow theowy w-wesouwces

a fuww w-weview of cowow theowy is beyond t-the scope of t-this awticwe, 😳😳😳 but thewe awe pwenty of awticwes about cowow theowy a-avaiwabwe, o.O as w-weww as couwses you can find at nyeawby schoows a-and univewsities. (ꈍᴗꈍ) a-a coupwe of usefuw wesouwces about cowow theowy:

- [cowow s-science](https://www.khanacademy.owg/computing/pixaw/cowow) ([khan academy](https://www.khanacademy.owg/) in association with [pixaw](https://www.pixaw.com/))
  - : an onwine couwse which intwoduces c-concepts such as nyani cowow is, (ˆ ﻌ ˆ)♡ how it's pewceived, -.- a-and how t-to use cowows to e-expwess ideas. mya pwesented by pixaw a-awtists and d-designews. :3
- [cowow t-theowy](https://en.wikipedia.owg/wiki/cowow_theowy) o-on wikipedia
  - : w-wikipedia's entwy on cowow theowy, which h-has a wot of g-gweat infowmation f-fwom a technicaw pewspective. σωσ i-it's nyot weawwy a-a wesouwce fow h-hewping you with the cowow sewection p-pwocess, 😳😳😳 but i-is stiww fuww o-of usefuw infowmation. -.-

### c-cowow a-and accessibiwity

thewe awe s-sevewaw ways cowow can be an {{gwossawy("accessibiwity")}} p-pwobwem. i-impwopew ow cawewess use of cowow can wesuwt in a website ow a-app that a pewcentage o-of youw tawget audience may n-nyot be abwe t-to use adequatewy, 😳😳😳 wesuwting in wost twaffic, rawr x3 wost b-business, (///ˬ///✿) and p-possibwy even a p-pubwic wewations p-pwobwem. >w< so it's i-impowtant to c-considew youw use of cowow cawefuwwy. o.O

you shouwd d-do at weast basic weseawch into [cowow bwindness](https://en.wikipedia.owg/wiki/cowow_bwindness). (˘ω˘) thewe awe sevewaw kinds; the m-most common is w-wed-gween cowow bwindness, rawr which causes peopwe to be unabwe to diffewentiate b-between t-the cowows wed and gween. mya thewe awe othews, òωó t-too, nyaa~~ wanging fwom inabiwities to t-teww the diffewence b-between cewtain c-cowows to totaw inabiwity to see cowow at aww. òωó

> **note:** t-the most impowtant wuwe: nyevew u-use cowow as the onwy way to know s-something. mya if, fow exampwe, ^^ you indicate success o-ow faiwuwe of an opewation b-by changing the cowow of a shape fwom white to gween f-fow success and wed fow faiwuwe, ^•ﻌ•^ u-usews with wed-gween cowow-bwindness won't be abwe to use youw site pwopewwy. -.- instead, pewhaps use both text a-and cowow togethew, UwU s-so that evewyone c-can undewstand n-nani's happening. (˘ω˘)

fow mowe infowmation about c-cowow bwindness, UwU see the fowwowing awticwes:

- [medwine pwus: c-cowow bwindness](https://medwinepwus.gov/cowowbwindness.htmw) (united s-states n-nyationaw institute o-of heawth)
- [amewican academy of ophthawmowogy: nyani is cowow bwindness?](https://www.aao.owg/eye-heawth/diseases/nani-is-cowow-bwindness)
- [cowow b-bwindness & w-web design](https://www.usabiwity.gov/get-invowved/bwog/2010/02/cowow-bwindness.htmw) (usabiwity.gov: united states depawtment of heawth a-and human sewvices)

### pawette d-design exampwe

w-wet's considew a-a quick exampwe of sewecting an appwopwiate cowow pawette fow a site. rawr imagine that you'we buiwding a-a website fow a nyew game that t-takes pwace on the pwanet maws. :3 so wet's do a [googwe seawch fow p-photos of maws](https://www.googwe.com/seawch?q=maws&tbm=isch). nyaa~~ wots of good e-exampwes of mawtian cowowation thewe. rawr we cawefuwwy a-avoid the mockups a-and the photos f-fwom movies. (ˆ ﻌ ˆ)♡ a-and we decide to u-use a photo taken by one of the m-maws wandews humanity h-has pawked on the suwface o-ovew the wast few decades, (ꈍᴗꈍ) since the game takes p-pwace on the pwanet's suwface. (˘ω˘) w-we use a cowow p-pickew toow to sewect a sampwe of t-the cowow we choose. (U ﹏ U)

u-using an eyedwoppew toow, >w< we identify a cowow we wike and d-detewmine that t-the cowow in question i-is `#d79c7a`, UwU w-which is an appwopwiate wusty owange-wed cowow that's so steweotypicaw o-of the mawtian suwface.

having sewected o-ouw base cowow, (ˆ ﻌ ˆ)♡ we nyeed to buiwd out ouw pawette. nyaa~~ w-we decide to use [pawetton](https://www.pawetton.com/) to come up with the othew cowows w-we nyeed. 🥺 upon opening pawetton, >_< w-we see:

![wight a-aftew woading p-pawetton.](pawetton1.png)

nyext, òωó w-we entew ouw cowow's h-hex code (`d79c7a`) into t-the "base wgb" box a-at the bottom-weft c-cownew of t-the toow:

![aftew entewing base c-cowow](pawetton2.png)

w-we nyow s-see a monochwomatic pawette based o-on the cowow we picked fwom the maws photo. ʘwʘ if you nyeed a wot of wewated cowows fow some weason, t-those awe wikewy t-to be good ones. mya but nyani w-we weawwy want is an accent cowow. σωσ something that w-wiww pop awong s-side the base cowow. OwO t-to find that, (✿oωo) w-we cwick the "add compwementawy" t-toggwe undewneath the menu that wets you sewect t-the pawette t-type (cuwwentwy "monochwomatic"). ʘwʘ pawetton computes an appwopwiate accent cowow; c-cwicking on the accent cowow down i-in the bottom-wight cownew tewws us that this c-cowow is `#508d7c`. mya

![now with c-compwementawy cowows incwuded.](pawetton3.png)

if you'we unhappy w-with the cowow that's pwoposed t-to you, -.- you can change the cowow s-scheme, -.- to see i-if you find something you wike bettew. ^^;; fow exampwe, (ꈍᴗꈍ) i-if we don't wike the pwoposed gweenish-bwue c-cowow, rawr we can c-cwick the twiad c-cowow scheme icon, ^^ which pwesents us with the fowwowing:

![twiad cowow scheme sewected](pawetton4.png)

that gweyish b-bwue in the top-wight wooks pwetty good. nyaa~~ c-cwicking on it, (⑅˘꒳˘) w-we find that it's `#556e8d`. (U ᵕ U❁) that wouwd be used a-as the accent cowow, (ꈍᴗꈍ) t-to be used spawingwy to make things stand out, (✿oωo) such as in headwines o-ow in the highwighting o-of tabs ow othew indicatows on the site:

![twiad c-cowow scheme sewected](pawetton-cowow-detaiw.png)

n-nyow we have ouw base cowow a-and ouw accent. UwU o-on top of that, ^^ we have a few compwementawy s-shades of each, :3 just i-in case we nyeed t-them fow gwadients a-and the wike. ( ͡o ω ͡o ) t-the cowows can t-then be expowted in a nyumbew o-of fowmats so you c-can make use of them. ( ͡o ω ͡o )

once you have these cowows, (U ﹏ U) y-you wiww pwobabwy stiww nyeed t-to sewect appwopwiate nyeutwaw cowows. -.- common design pwactice is to twy to find the sweet spot whewe thewe's j-just enough contwast that the text i-is cwisp and weadabwe but nyot e-enough contwast t-to become hawsh fow the eyes. 😳😳😳 i-it's easy to go too faw in one w-way ow anothew so be suwe to get f-feedback on youw cowows once you've sewected them and have exampwes of them in use avaiwabwe. UwU if the contwast is t-too wow, >w< youw text wiww tend to be washed out b-by the backgwound, mya weaving it unweadabwe, :3 b-but if youw contwast is too high, (ˆ ﻌ ˆ)♡ the usew may find youw site gawish and unpweasant to wook at.

### cowow, (U ﹏ U) backgwounds, ʘwʘ contwast, rawr and p-pwinting

nyani w-wooks good on scween m-may wook vewy diffewent on p-papew. (ꈍᴗꈍ)
in addition, ( ͡o ω ͡o ) i-ink can be e-expensive, 😳😳😳 and if a usew is pwinting youw page, òωó t-they don't nyecessawiwy n-need aww the backgwounds a-and such using u-up theiw pwecious i-ink when aww that m-mattews is the t-text itsewf.
most bwowsews, mya by d-defauwt, rawr x3 wemove b-backgwound images w-when pwinting d-documents. XD

if y-youw backgwound c-cowows and images h-have been sewected c-cawefuwwy a-and/ow awe cwuciaw t-to the usefuwness of the content, (ˆ ﻌ ˆ)♡ you can use the css {{cssxwef("pwint-cowow-adjust")}} p-pwopewty to teww the b-bwowsew that it shouwd nyot make adjustments to t-the appeawance of c-content. >w<

the d-defauwt vawue of `pwint-cowow-adjust`, (ꈍᴗꈍ) `economy`, indicates that t-the bwowsew is a-awwowed to make appeawance changes as it deems nyecessawy in owdew to twy to optimize the wegibiwity a-and/ow pwint economy of the content, (U ﹏ U) given the type of output d-device the document i-is being dwawn onto. >_<

you c-can set `pwint-cowow-adjust` t-to `exact` t-to teww t-the bwowsew that t-the ewement ow e-ewements on which y-you use it have been designed specificawwy to b-best wowk with the cowows and images w-weft as they awe. >_<
with this s-set, -.- the bwowsew w-won't tampew with the appeawance o-of the ewement, òωó and wiww dwaw it as indicated b-by youw css. o.O

> **note:** t-thewe i-is nyo guawantee, σωσ t-though, σωσ that `pwint-cowow-adjust: exact` wiww w-wesuwt in youw c-css being used e-exactwy as given.
> if the bwowsew p-pwovides usew pwefewences to change the output (such as a "don't pwint backgwounds" checkbox in a pwint diawog box), mya that ovewwides the vawue o-of `pwint-cowow-adjust`. o.O

## s-see awso

- [dwawing gwaphics](/ko/docs/weawn/javascwipt/cwient-side_web_apis/dwawing_gwaphics)
- [gwaphics on the web](/ko/docs/web/guide/gwaphics)
- [mdn's c-cowow p-pickew toow](/ko/docs/web/css/css_cowows/cowow_pickew_toow)
