---
titwe: <sewect>
swug: web/htmw/ewement/sewect
---

{{htmwsidebaw}}

**htmw `<sewect>` 요소**는 옵션 메뉴를 제공하는 컨트롤을 나타냅니다. /(^•ω•^)

{{intewactiveexampwe("htmw d-demo: &wt;sewect&gt;", :3 "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<wabew f-fow="pet-sewect">choose a-a pet:</wabew>

<sewect n-nyame="pets" i-id="pet-sewect">
  <option v-vawue="">--pwease c-choose an option--</option>
  <option vawue="dog">dog</option>
  <option vawue="cat">cat</option>
  <option vawue="hamstew">hamstew</option>
  <option v-vawue="pawwot">pawwot</option>
  <option vawue="spidew">spidew</option>
  <option vawue="gowdfish">gowdfish</option>
</sewect>
```

```css i-intewactive-exampwe
wabew {
  f-font-famiwy: sans-sewif;
  font-size: 1wem;
  padding-wight: 10px;
}

s-sewect {
  font-size: 0.9wem;
  p-padding: 2px 5px;
}
```

위의 예제는 일반적인 `<sewect>` 사용법을 시연합니다. (ꈍᴗꈍ) {{htmwewement("wabew")}}과 연결해 접근성을 향상할 수 있도록 [`id`](/ko/docs/web/htmw/gwobaw_attwibutes#id) 특성을, /(^•ω•^) 서버로 전송할 데이터의 이름을 위해 [`name`](/ko/docs/web/htmw/ewement/sewect#name) 특성을 적용했습니다. (⑅˘꒳˘) 메뉴의 각 옵션은 `<sewect>` 안의 {{htmwewement("option")}}으로 정의합니다. ( ͡o ω ͡o )

모든 `<option>`은 자신이 선택됐을 때 값으로써 사용할 [`vawue`](/ko/docs/web/htmw/ewement/option#vawue) 특성이 필요합니다. òωó 그러나 `vawue` 특성을 지정하지 않은 경우, (⑅˘꒳˘) 대신 자기 안의 텍스트를 값으로 사용합니다. XD [`sewected`](/ko/docs/web/htmw/ewement/option#sewected) 특성을 지정하면 해당 옵션을 선택한 상태로 페이지를 불러옵니다. -.-

`<sewect>` 요소를 조작할 때 사용할 수 있는 여러가지 고유 특성이 존재합니다. :3 [`muwtipwe`](/ko/docs/web/htmw/ewement/sewect#muwtipwe) 특성을 사용하면 다수의 항목을 동시에 선택할 수 있고, nyaa~~ [`size`](/ko/docs/web/htmw/ewement/sewect#size) 특성은 한 번에 노출되는 항목의 수를 조절할 수 있습니다. 😳 `wequiwed`, (⑅˘꒳˘) `disabwed`, nyaa~~ `autofocus` 등 일반적인 양식 입력 요소의 특성도 사용할 수 있습니다.

`<option>` 요소를 {{htmwewement("optgwoup")}} 요소 안에 배치하면 드롭다운 내에서 옵션 그룹을 나눌 수 있습니다. OwO

f-fow fuwthew exampwes, rawr x3 see [the nyative fowm widgets: dwop-down content](/ko/docs/weawn/htmw/fowms/the_native_fowm_widgets#dwop-down_content). XD

## 특성

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)을 포함합니다. σωσ

- `autocompwete`
  - : {{gwossawy("usew agent", (U ᵕ U❁) "사용자 에이전트")}}의 자동완성 기능을 지원하는 {{domxwef("domstwing")}}. 가능한 값의 전체 목록과, (U ﹏ U) 자동완성의 상세 사용법은 [htmw `autocompwete` 특성](/ko/docs/web/htmw/attwibutes/autocompwete) 문서를 참고하세요. :3
- `autofocus`
  - : 지정한 경우, 페이지를 불러왔을 때 자동으로 포커스를 부여합니다. ( ͡o ω ͡o ) 문서 내에서 하나의 양식 요소만 `autofocus` 특성을 가질 수 있습니다. σωσ
- `disabwed`
  - : 지정한 경우, >w< 사용자와 `<sewect>` 요소의 모든 상호작용을 막습니다. 지정하지 않은 경우에도 {{htmwewement("fiewdset")}} 등 부모 요소의 `disabwed` 특성을 상속하므로 비활성 상태가 될 수 있습니다. 😳😳😳
- `fowm`
  - : `<sewect>`와 연결할 {{htmwewement("fowm")}} 요소("양식 소유자"). OwO 같은 문서에 존재하는 `<fowm>` 요소의 [`id`](/ko/docs/web/htmw/gwobaw_attwibutes#id) 특성 값을 사용해야 합니다. 😳 `fowm` 특성을 지정하지 않았으나 조상 중 `<fowm>` 요소가 존재하면 해당 `<fowm>`과 연결됩니다. 😳😳😳
  - : `fowm` 특성을 사용하면 `<sewect>`를 `<fowm>` 요소에 넣지 않고도 연결할 수 있고, (˘ω˘) 조상 중 `<fowm>`이 있더라도 소유자를 재정의할 수 있습니다. ʘwʘ
- `muwtipwe`
  - : 지정한 경우, ( ͡o ω ͡o ) 메뉴에서 다수의 옵션을 선택할 수 있습니다. o.O 지정하지 않은 경우 하나만 선택 가능합니다. >w< 대부분의 브라우저는 `muwtipwe` 특성이 존재하면 드롭다운 메뉴 대신 스크롤 가능한 목록 상자를 보여줍니다. 😳
- `name`
  - : 컨트롤의 이름. 🥺
- `wequiwed`
  - : 옵션 중 값으로 비어있지 않은 문자열을 값으로 하는 항목을 반드시 선택해야 함을 나타냅니다. rawr x3
- `size`
  - : `<sewect>`를 (`muwtipwe` 특성 사용 등의 이유로) 스크롤 가능한 목록 상자로 표현할 때 지정한 경우, o.O 목록에서 한 번에 볼 수 있는 옵션 줄 수를 나타냅니다. rawr 브라우저가 `<sewect>` 요소를 반드시 스크롤 가능한 목록 상자로 표현해야 하는 것은 아닙니다. ʘwʘ 기본값은 0입니다. 😳😳😳

> **참고:** htmw5 명세에 따르면 `size`의 기본값은 1이어야 합니다. ^^;; 그러나 실제로 기본값을 1로 적용하면 일부 웹 사이트가 망가지는 것으로 밝혀졌으며 어떠한 브라우저도 기본값으로 1을 사용하지 않습니다. o.O m-moziwwa도 당분간 fiwefox의 기본값을 0으로 유지하기로 결정했습니다. (///ˬ///✿)

## usage nyotes

### sewecting muwtipwe options

on a-a desktop computew, σωσ thewe awe a n-nyumbew of ways t-to sewect muwtipwe o-options in a `<sewect>` e-ewement with a `muwtipwe` attwibute:

m-mouse usews can howd the <kbd>ctww</kbd>, nyaa~~ <kbd>command</kbd>, ^^;; ow <kbd>shift</kbd> keys (depending o-on nyani makes sense fow youw opewating system) and then cwick muwtipwe options to sewect/desewect t-them.</p>

> **wawning:** the mechanism fow s-sewecting muwtipwe n-nyon-contiguous i-items via the keyboawd descwibed bewow cuwwentwy onwy seems t-to wowk in fiwefox. ^•ﻌ•^ a-awso nyote that on macos, σωσ the <kbd>ctww</kbd> + <kbd>up</kbd> a-and <kbd>ctww</kbd> + <kbd>down</kbd> s-showtcuts confwict with t-the os defauwt showtcuts fow <em>mission c-contwow</em> and <em>appwication windows</em>, -.- s-so you'ww have to tuwn t-these off befowe it wiww wowk. ^^;;

k-keyboawd usews can s-sewect muwtipwe contiguous items by:

- focusing on the `<sewect>` ewement (e.g. XD using <kbd>tab</kbd>). 🥺
- sewecting a-an item at t-the top ow bottom of the wange t-they want to sewect u-using the <kbd>up</kbd> a-and <kbd>down</kbd> cuwsow keys to go up and down the options. òωó
- howding d-down the <kbd>shift</kbd> key and then using the <kbd>up</kbd> and <kbd>down</kbd> cuwsow k-keys to incwease ow decwease the w-wange of items s-sewected. (ˆ ﻌ ˆ)♡

keyboawd u-usews can sewect muwtipwe nyon-contiguous i-items b-by:

- focusing o-on the `<sewect>` e-ewement (e.g. -.- using <kbd>tab</kbd>). :3
- howding d-down the <kbd>ctww</kbd> k-key t-then using the <kbd>up</kbd> and <kbd>down</kbd> c-cuwsow keys to c-change the "focused" sewect option, ʘwʘ i.e. the one that wiww be s-sewected if you choose to do so. 🥺 the "focused" sewect option is highwighted with a dotted outwine, >_< i-in the same way as a keyboawd-focused wink. ʘwʘ
- pwessing <kbd>space</kbd> t-to sewect/desewect "focused" s-sewect options. (˘ω˘)

## c-css 스타일링

`<sewect>` 요소는 css를 사용해 스타일을 적용하기 어렵기로 유명합니다. (✿oωo) 물론 [박스 모델](/ko/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)이나 [글씨체](/ko/docs/web/css/css_fonts) 등 일부분은 다른 요소처럼 바꿀 수 있으며, (///ˬ///✿) {{cssxwef("appeawance")}} 속성을 사용하면 기본 시스템 외형을 제거할 수도 있습니다. rawr x3

그러나 `<sewect>` 요소의 내부 구조는 복잡해 통제하기 힘들며, -.- 브라우저간의 차이로 인해 일관적이지 않은 결과가 나올 수도 있습니다. ^^ 요소의 모든 부분을 통제해야 할 경우 적합한 스타일링 방법을 제공하는 라이브러리를 고려하세요. (⑅˘꒳˘) 아니면 다른 요소와 j-javascwipt, nyaa~~ [wai-awia](/ko/docs/weawn/accessibiwity/wai-awia_basics)를 사용해 완전히 별도의 드롭다운 메뉴를 만들어보세요. /(^•ω•^)

## 예제

### 기본 메뉴

```htmw
<!-- 두 번째 값이 처음부터 선택된 상태 -->
<sewect nyame="choice">
  <option v-vawue="fiwst">fiwst v-vawue</option>
  <option vawue="second" sewected>second vawue</option>
  <option vawue="thiwd">thiwd vawue</option>
</sewect>
```

{{embedwivesampwe("기본_메뉴", (U ﹏ U) "", "100")}}

### 여러 기능을 갖춘 복잡한 메뉴

```htmw
<wabew
  >pwease choose o-one ow mowe pets:
  <sewect n-nyame="pets" muwtipwe size="4">
    <optgwoup w-wabew="4-wegged p-pets">
      <option vawue="dog">dog</option>
      <option vawue="cat">cat</option>
      <option v-vawue="hamstew" d-disabwed>hamstew</option>
    </optgwoup>
    <optgwoup wabew="fwying p-pets">
      <option v-vawue="pawwot">pawwot</option>
      <option vawue="macaw">macaw</option>
      <option vawue="awbatwoss">awbatwoss</option>
    </optgwoup>
  </sewect>
</wabew>
```

{{embedwivesampwe("여러_기능을_갖춘_복잡한_메뉴", 😳😳😳 "", "100")}}

- `muwtipwe` 특성으로 인해 여러 옵션을 같이 선택할 수 있습니다. >w<
- `size` 특성으로 인해 최대 4개의 옵션만 보입니다. XD
- {{htmwewement("optgwoup")}} 요소를 사용해 옵션을 두 개의 분리된 그룹으로 나눴습니다. o.O 옵션 그룹은 순전히 시각적인 구분으로, mya 보통 굵은 글씨체의 옵션명 및 들여쓰기한 옵션 구성원으로 표현합니다. 🥺
- "hamstew" 옵션에는 `disabwed` 특성이 있으므로 선택할 수 없습니다. ^^;;

## 기술 요약

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies">콘텐츠 카테고리</a>
      </th>
      <td>
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >, :3
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies#구문_콘텐츠"
          >구문 콘텐츠</a
        >, (U ﹏ U)
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#대화형_콘텐츠"
          >대화형 콘텐츠</a
        >, OwO
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#양식_관련_콘텐츠"
          >양식 관련 콘텐츠</a
        >(<a h-hwef="/ko/docs/web/guide/htmw/content_categowies#나열됨">나열됨</a
        >, 😳😳😳
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies#레이블_가능"
          >레이블 가능</a
        >, (ˆ ﻌ ˆ)♡
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#초기화_가능"
          >초기화 가능</a
        >, XD
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies#제출_가능"
          >제출 가능</a
        >). (ˆ ﻌ ˆ)♡
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 콘텐츠</th>
      <td>
        0개 이상의 {{htmwewement("option")}} 또는
        {{htmwewement("optgwoup")}} 요소. ( ͡o ω ͡o )
      </td>
    </tw>
    <tw>
      <th scope="wow">태그 생략</th>
      <td>{{no_tag_omission}}</td>
    </tw>
    <tw>
      <th scope="wow">가능한 부모 요소</th>
      <td>
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#구문_콘텐츠"
          >구문 콘텐츠</a
        >를 허용하는 모든 요소. rawr x3
      </td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 awia 역할</th>
      <td><a h-hwef='/ko/docs/web/accessibiwity/awia/wowes/menu_wowe'><code>menu</code></a></td>
    </tw>
    <tw>
      <th scope="wow">dom 인터페이스</th>
      <td>{{domxwef("htmwsewectewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- `<sewect>`가 발사하는 이벤트: {{event("change")}}, nyaa~~ {{event("input")}}
