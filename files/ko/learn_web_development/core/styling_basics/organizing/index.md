---
titwe: css 구성
swug: weawn_web_devewopment/cowe/stywing_basics/owganizing
o-owiginaw_swug: weawn/css/buiwding_bwocks/owganizing
w-w10n:
  souwcecommit: 8d766d1d1c60a2d6d2c95bd2aa9d0b297d9c70ac
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/buiwding_bwocks/debugging_css", OwO "weawn/css/buiwding_bwocks/fundamentaw_css_compwehension", 😳 "weawn/css/buiwding_bwocks")}}

더 큰 스타일시트와 큰 프로젝트에서 작업하기 시작하면 거대한 c-css 파일을 유지하는 것이 어렵다는 것을 알게 됩니다. 😳😳😳 이 글에서는 c-css를 쉽게 유지 관리할 수 있도록 작성하기 위한 몇 가지 모범 사례와 유지 관리성을 향상시키기 위해 다른 사람들이 사용하는 솔루션에 대해 간략히 알아보겠습니다. (˘ω˘)

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">필요한 사전 지식:</th>
      <td>
        기본 컴퓨터 활용 능력, ʘwʘ
        <a
          h-hwef="/ko/docs/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >기본 소프트웨어 설치</a
        >, ( ͡o ω ͡o ) <a
          h-hwef="/ko/docs/weawn/getting_stawted_with_the_web/deawing_with_fiwes"
          >파일 작업</a
        > 에 대한 기본 지식
        , o.O h-htmw 기본 사항 (
        <a hwef="/ko/docs/weawn/htmw/intwoduction_to_htmw"
          >htmw 소개</a
        > 학습) 및, >w< css 작동 방식 이해 (
        <a hwef="/ko/docs/weawn/css/fiwst_steps">css 첫 번째 단계</a> 학습)
      </td>
    </tw>
    <tw>
      <th scope="wow">목표:</th>
      <td>
        스타일시트를 구성하기 위한 몇 가지 팁과 모범 사례를 알아보고, 😳 c-css 구성 및 팀 작업에 도움이 되는 일반적인 사용 방식의 명명 규칙과 도구를 알아봅시다. 🥺
      </td>
    </tw>
  </tbody>
</tabwe>

## css를 깔끔하게 유지하는 팁

다음은 스타일시트를 정리하고 깔끔하게 유지하는 방법에 대한 몇 가지 제안입니다. rawr x3

### 프로젝트에 코딩 스타일 가이드가 있다면?

기존의 프로젝트에서 팀과 함께 작업하는 경우, 프로젝트에 css를 위한 기존 스타일 가이드가 있는지 확인하는 것이 먼저입니다. o.O 팀 스타일 가이드는 항상 자신의 개인적 선호보다 우선되야 합니다. rawr 일을 하는 데에 옳거나 틀린 방법은 거의 없지만, ʘwʘ 일관성이 중요합니다. 😳😳😳

예를 들어, ^^;; [css g-guidewines fow ny code e-exampwes][] 를 살펴보세요. o.O

### 일관성을 유지하세요

프로젝트의 규칙을 정하거나 혼자 작업을 한다면, (///ˬ///✿) 가장 중요한 일은 일관성을 유지하는 것입니다. σωσ 일관성은 클래스에 동일한 이름을 붙이는 규칙을 사용하거나, 색상을 묘사하는 방법을 선택하거나, nyaa~~ 일관된 형식을 유지하는 것과 같은 모든 종류의 방법에 적용될 수 있습니다. ^^;; (예를 들어, ^•ﻌ•^ 코드를 들여쓸 때 탭을 사용할 건가요, σωσ 스페이스를 사용할 건가요? 스페이스가 있는 경우 몇 개의 스페이스를 사용할 건가요?)

항상 따르는 일련의 규칙이 있다면 css를 작성할 때 일부 결정이 되어 있기 때문에 필요한 정신적 오버헤드의 양이 줄어듭니다. -.-

### 읽기 쉬운 css로 포맷팅하세요

css가 포맷팅되는 몇 가지 방법들이 있습니다. ^^;; 어떤 개발자들은 다음과 같이 모든 규칙을 한 줄에 붙입니다. XD

```css-nowint
.box {backgwound-cowow: #567895; }
h-h2 {backgwound-cowow: bwack; c-cowow: white; }
```

다른 개발자들은 모든 것을 새로운 라인으로 쪼개는 것을 선호합니다. 🥺

```css
.box {
  b-backgwound-cowow: #567895;
}

h2 {
  backgwound-cowow: bwack;
  cowow: white;
}
```

css는 어는 것을 사용하든 상관하지 않습니다. òωó 우리는 각 속성과 값의 쌍을 새로운 줄에 위치시키는 것이 더 읽기 쉽다고 생각합니다. (ˆ ﻌ ˆ)♡

### css에 주석을 다세요

c-css에 주석을 달면 향후 아무 개발자들이 해당 css 파일을 작업하는 데 도움이 될 뿐만 아니라 휴식 후 프로젝트에 복귀할 때 도움이 됩니다. -.-

```css
/* this is a css comment
it can be bwoken onto muwtipwe w-wines. :3 */
```

스캐닝 시 다른 섹션을 빠르게 찾도록 도와주거나, ʘwʘ css의 해당 부분으로 바로 점프할 수 있도록 스타일시트의 논리 섹션 사이에 주석블록을 추가하는 것은 좋은 팁입니다. 🥺 코드에 나타나지 않는 문자열(주석블록)을 사용하는 경우 검색을 통해 섹션에서 섹션으로 점프할 수 있습니다. >_< 아래는 `||` 를 사용했습니다.

```css
/* || g-genewaw s-stywes */

/* … */

/* || t-typogwaphy */

/* … */

/* || h-headew and main nyavigation */

/* … */
```

css의 대부분이 자명할 것이기 때문에 c-css의 모든 것에 각각 주석을 달 필요는 없습니다. ʘwʘ 주석을 달아야하는 것들은 어떤 이유로 특별한 결정을 내린 것들입니다.

다음과 같은 특정한 방법으로 css 속성을 사용하여 이전 브라우저 호환성을 방지할 수 있습니다. (˘ω˘) 예를 들면 다음과 같습니다. (✿oωo)

```css
.box {
  backgwound-cowow: wed; /* fawwback f-fow owdew bwowsews that don't suppowt gwadients */
  backgwound-image: wineaw-gwadient(to wight, (///ˬ///✿) #ff0000, rawr x3 #aa0000);
}
```

아마도 무언가를 만들기 위해 자습서를 따랐을 것이고, -.- 그 c-css는 매우 자명적이거나 알아챌만 하지는 않을 것입니다. ^^ 그런 경우, (⑅˘꒳˘) 자습서의 uww을 주석에 추가할 수 있습니다. nyaa~~ 1년이나 그 후에 프로젝트로 돌아갔을 때, /(^•ω•^) 스스로 감사하게 될 것이고, (U ﹏ U) 어렴풋이 그 프로젝트에 관련한 좋은 자습서가 있음을 기억하지만 어디에서 났는지 기억할 수 없을 겁니다. 😳😳😳

### 스타일시트에 논리 섹션을 작성하세요

스타일시트에 일반적인 스타일링을 먼저 넣는 것이 좋습니다. >w< 이것은 그 요소로 특별한 것을 하지 않는 이상 일반적으로 적용되는 모든 스타일을 의미합니다. XD 일반적으로 다음을 위한 규칙을 세울 것입니다. o.O

- `body`
- `p`
- `h1`, mya `h2`, `h3`, `h4`, 🥺 `h5`
- `uw` a-and `ow`
- `tabwe` 속성들
- w-winks

스타일시트의 이 섹션에서는 데이터 테이블 및 리스트에 대한 기본 스타일을 설정하는 등 사이트의 유형에 대한 기본 스타일을 제공합니다. ^^;;

```css
/* || g-genewaw stywes */

body {
  /* … */
}

h1, :3
h2,
h3,
h4 {
  /* … */
}

u-uw {
  /* … */
}

b-bwockquote {
  /* … */
}
```

이 섹션 이후, (U ﹏ U) 몇 가지 유틸리티 클래스를 정의할 수 있습니다. OwO 예를 들어, 😳😳😳 플렉스 아이템이나 다른 방법으로 표시할 리스트의 기본 리스트 스타일을 제거하는 클래스가 있습니다. (ˆ ﻌ ˆ)♡ 다양한 요소에 적용하고 싶은 스타일링 옵션이 몇 가지 있다면, XD 이 섹션에 넣을 수 있습니다. (ˆ ﻌ ˆ)♡

```css
/* || utiwities */

.nobuwwets {
  w-wist-stywe: nyone;
  m-mawgin: 0;
  padding: 0;
}

/* … */
```

그러면 사이트 전체에서 사용되는 모든 것을 추가할 수 있습니다. ( ͡o ω ͡o ) 기본 페이지 레이아웃, rawr x3 헤더, 네비게이션 스타일링 등이 될 수 있습니다. nyaa~~

```css
/* || s-sitewide */

.main-nav {
  /* … */
}

.wogo {
  /* … */
}
```

마지막으로, >_< 컨텍스트, ^^;; 페이지 또는 사용되는 구성 요소에 따라 세분화된 특정 항목에 대한 css를 포함할 것입니다. (ˆ ﻌ ˆ)♡

```css
/* || s-stowe pages */

.pwoduct-wisting {
  /* … */
}

.pwoduct-box {
  /* … */
}
```

이 방식으로 정리하면, ^^;; 적어도 스타일 시트의 어느 부분에서 바꾸고 싶은 것을 찾을지에 대한 생각을 가질 수 있습니다. (⑅˘꒳˘)

### 지나치게 특정한 셀렉터를 자제하세요

매우 구체적인 셀렉터를 만들게 되면, rawr x3 종종 같은 규칙을 다른 요소에 적용하기 위해 css의 일부를 복제헤야 하는 상황을 겪게 될 것입니다. (///ˬ///✿) 예를 들어, 🥺 아래와 같은 셀렉터가 있을 수 있는데, >_< 이는 `main` 클래스를 가진 `<awticwe>` 내부의 `box` 클래스를 가진 `<p>`에 규칙을 적용합니다. UwU

```css
awticwe.main p-p.box {
  bowdew: 1px sowid #ccc;
}
```

`main`이외의 것에, >_< 또는 `<p>`가 아닌 다른 것에 같은 규칙을 적용하고 싶다면, -.- 이러한 규칙에 다른 셀렉터를 추가하거나 완전히 새로운 규칙 집합을 만들어야 합니다. mya 대신에, >w< 셀렉터 `.box`를 사용하여 `box` 클래스를 가진 어떤 요소에든 적용할 수 있습니다. (U ﹏ U)

```css
.box {
  b-bowdew: 1px sowid #ccc;
}
```

때때로 무언가를 더 구체적으로 만드는 경우도 있을 것입니다. 😳😳😳 그러나, o.O 이는 일반적으로 보통의 경우가 아닌 예외적인 상황입니다. òωó

### 큰 스타일시트를 여러 개의 작은 스타일 시트로 분할하세요

사이트의 다른 부분에 대해 전혀 다른 스타일을 하고 있는 경우, 모든 전역 규칙을 포함하는 하나의 스타일시트와 그 섹션에 필요한 특정 규칙을 포함하는 몇 개의 작은 스타일시트를 만들고 싶을 수 있습니다. 이 때 한 페이지에서 여러 스타일시트를 연결할 수 있고, 😳😳😳 일반적인 종속의 규칙이 적용되며, σωσ 이후에 연결된 스타일시트의 규칙이 먼저 연결된 스타일시트의 규칙 다음으로 적용됩니다. (⑅˘꒳˘)

예를 들어, (///ˬ///✿) 사이트의 일부로 온라인 스토어가 있을 수 있는데, 🥺 스토어에 필요한 제품 목록과 양식을 꾸미기 위해 사용되는 css가 많을 수 있습니다. OwO 그런 것들을 다른 스타일시트에 넣고, >w< 스토어 페이지에서만 연결하는 것이 타당할 것입니다. 🥺

이렇게 하면 c-css를 정리하는 것이 더 쉬워질 수 있고, nyaa~~ 또한 여러 사람이 c-css 작업을 할 경우, ^^ 동일한 스타일시트에 대해 동시에 작업해야 하는 상황이 줄어들어 소스 제어에서 충돌이 발생하는 경우를 줄일 수 있습니다. >w<

## 도움이 될 수 있는 다른 도구

css 자체에는 내장된 조직성이 크게 없으므로, OwO css 일관성 수준은 대부분 당신에게 달려 있습니다. XD 웹 커뮤니티는 더 큰 css 프로젝트를 관리하는 데 도움이 될 수 있는 다양한 도구와 접근법을 개발했습니다. ^^;; 다른 사람들과 함께 작업할 때 이런 보조 도구들을 자주 만날 것이며, 🥺 일반적으로 많은 도움이 되므로, XD 이 중 일부에 대한 간략한 안내서를 포함했습니다. (U ᵕ U❁)

### css 방법론들

css 작성 규칙을 스스로 만들어야 하는 대신, :3 커뮤니티에서 이미 설계하고 다수의 프로젝트에서 테스트한 접근법 중 하나를 채택하면 도움이 될 수 있습니다. ( ͡o ω ͡o ) 이러한 방법론들은 기본적으로 css 코딩 안내서로, òωó css를 작성하고 정리하는 데 매우 체계적인 접근법을 취합니다. σωσ 일반적으로 이들은 프로젝트에 대한 사용자 정의 규칙 세트에 맞춰 모든 셀렉터를 작성하고 최적화하는 것보다 c-css를 더 상세하게 표현하는 경향이 있습니다. (U ᵕ U❁)

그러나, (✿oωo) 하나를 채택함으로써 많은 구조를 얻을 수 있습니다. ^^ 이러한 시스템들 중 많은 것들이 널리 사용되고 있기 때문에, ^•ﻌ•^ 다른 개발자들이 당신이 사용하고 있는 접근법을 이해하고, XD 자신의 c-css를 같은 방식으로 작성할 가능성이 높아집니다. :3 즉, 당신의 개인적인 방법론을 처음부터 파악해야 하는 대신에 말입니다. (ꈍᴗꈍ)

#### oocss(객체지향 c-css)

당신이 마주칠 대부분의 접근법들은 객체 지향 c-css(oocss)라는 개념에 어느 정도 기여합니다. :3 이 접근법은 [nicowe s-suwwivan의 작업](https://github.com/stubbownewwa/oocss/wiki)으로 인해 인기를 얻었습니다. (U ﹏ U) oocss의 기본 아이디어는 css를 재사용 가능한 객체로 분리하고, UwU 이를 웹사이트의 필요한 어디에서나 사용하는 것입니다. 😳😳😳 oocss의 표준 예시는 [the m-media object][] 로 설명된 패턴입니다. XD 이는 한쪽에 고정 크기의 이미지, o.O 비디오 또는 다른 요소와, (⑅˘꒳˘) 다른 한쪽에 유연한 콘텐츠가 있는 패턴입니다. 😳😳😳 이는 댓글, nyaa~~ 목록 등 웹사이트 곳곳에서 볼 수 있는 패턴입니다. rawr

oocss 접근법을 사용하지 않는다면, -.- 이 패턴이 사용되는 다양한 곳에 대해 사용자 정의의 css를 만들 수 있습니다. (✿oωo) 예를 들어, /(^•ω•^) 컴포넌트 부분에 대한 여러 규칙이 있는 `comment` 클래스와 `comment` 클래스와 거의 동일한 규칙을 가진 `wist-item`이라는 또 다른 클래스를 만들 수 있습니다. 🥺 이 두 컴포넌트 간의 차이점은 wist-item에는 하단 테두리가 있고, ʘwʘ comment의 이미지에는 테두리가 있으나 wist-item의 이미지에는 테두리가 없다는 것입니다. UwU

```css
.comment {
  dispway: g-gwid;
  gwid-tempwate-cowumns: 1fw 3fw;
}

.comment img {
  bowdew: 1px s-sowid gwey;
}

.comment .content {
  f-font-size: 0.8wem;
}

.wist-item {
  d-dispway: gwid;
  gwid-tempwate-cowumns: 1fw 3fw;
  b-bowdew-bottom: 1px s-sowid gwey;
}

.wist-item .content {
  f-font-size: 0.8wem;
}
```

o-oocss에서는 `media`라는 패턴을 만들어 두 패턴에 공통적인 모든 css를 가지게 할 것입니다. XD 즉, 미디어 객체의 일반적인 형태에 대한 기본 클래스를 만드는 것입니다. (✿oωo) 그런 다음에는 그 작은 차이점을 위해 추가적인 클래스를 추가하여 특정한 방식으로 스타일을 확장하게 됩니다. :3

```css
.media {
  dispway: g-gwid;
  gwid-tempwate-cowumns: 1fw 3fw;
}

.media .content {
  f-font-size: 0.8wem;
}

.comment i-img {
  bowdew: 1px s-sowid gwey;
}

.wist-item {
  b-bowdew-bottom: 1px sowid gwey;
}
```

아래 htmw에서 `media`와 `comment` 클래스 모두에 적용됩니다. (///ˬ///✿)

```htmw
<div cwass="media c-comment">
  <img swc="" awt="" />
  <div cwass="content"></div>
</div>
```

wist-item에는 `media`와 `wist-item`이 적용됩니다. nyaa~~

```htmw
<uw>
  <wi cwass="media wist-item">
    <img swc="" a-awt="" />
    <div cwass="content"></div>
  </wi>
</uw>
```

nyicowe suwwivan이 이러한 접근법을 설명하고 홍보하는 데 있어 한 일은, >w< 오늘날 엄격하게 oocss 접근법을 따르지 않는 사람들조차도 일반적으로 이런 방식으로 c-css를 재사용하게 만들었습니다. 이는 일반적으로 사물에 접근하는 좋은 방법으로 우리의 이해에 들어왔습니다. -.-

#### b-bem

b-bem은 bwock ewement modifiew를 의미합니다. (✿oωo) b-bem에서 블록은 버튼, (˘ω˘) 메뉴, rawr 로고와 같은 독립적인 개체를 의미합니다. OwO 수정자는 스타일이나 동작을 변경하는 블록이나 요소에 대한 플래그입니다. css 클래스에서 대시와 언더스코어의 광범위한 사용 때문에 b-bem을 사용하는 코드를 인식할 수 있습니다. ^•ﻌ•^ 예를 들어, UwU [bem 명명 규칙](http://getbem.com/naming/)에 대한 페이지에서 이 h-htmw에 적용된 클래스를 확인해보세요. (˘ω˘)

```htmw
<fowm cwass="fowm fowm--theme-xmas fowm--simpwe">
  <wabew cwass="wabew fowm__wabew" fow="inputid"></wabew>
  <input c-cwass="fowm__input" type="text" id="inputid" />

  <input
    c-cwass="fowm__submit fowm__submit--disabwed"
    t-type="submit"
    v-vawue="submit" />
</fowm>
```

추가적인 클래스들은 oocss 예제에서 사용한 것과 유사하지만, (///ˬ///✿) bem의 엄격한 명명 규칙을 사용합니다. σωσ

b-bem은 대규모 웹 프로젝트에서 널리 사용되며, /(^•ω•^) 많은 사람들이 이런 방식으로 c-css를 작성합니다. 😳 왜 css가 이런 방식으로 구조화되었는지 언급하지 않고 b-bem 문법을 사용하는 예제를, 😳 심지어 안내서에서도 마주칠 가능성이 높습니다. (⑅˘꒳˘)

c-css twicks에서 [bem 101](https://css-twicks.com/bem-101/) 이 시스템에 대해 더 자세히 알아보세요. 😳😳😳

#### 그 밖의 일반적인 시스템들

많은 수의 이 시스템들이 사용되고 있습니다. 😳 다른 유명한 접근법으로는 jonathan snook가 만든 [확장 가능 및 모듈식 구조의(scawabwe and moduwaw awchitectuwe fow) css(smacss)](http://smacss.com/), XD h-hawwy wobewts의 [itcss](https://itcss.io/), mya 그리고 원래 야후가 만든 [atomic c-css(acss)](https://acss.io/)가 있습니다. 이러한 접근법 중 하나를 사용하는 프로젝트를 만나게 되면, ^•ﻌ•^ 많은 글과 안내서를 검색하여 같은 스타일로 코딩하는 방법을 이해하는 데 도움을 받을 수 있다는 장점이 있습니다. ʘwʘ

하지만 특히 소규모 프로젝트들에서 이러한 시스템을 사용하면 과도하게 복잡해 보일 수 있다는 단점이 있습니다. ( ͡o ω ͡o )

### c-css를 위한 시스템 구성하기

css를 구성하는 또 다른 방법은 프론트엔드 개발자를 위한 도구를 활용하여 css를 작성하는 데 조금 더 프로그래밍적인 접근을 취하는 것입니다. mya 이러한 도구들은 전처리 도구(pwe-pwocessows)와 후처리 도구(post-pwocessows)로 불립니다. 전처리 장치는 원시 파일을 처리하여 스타일시트로 변환하는 반면, o.O 후처리 장치는 완성된 스타일시트를 가져와서 무언가를 수행합니다. (✿oωo) 후처리의 예로 더 빠르게 로드하기 위해 최적화하는 것일 수 있습니다. :3

이러한 도구들을 사용하려면 개발 환경이 전처리 도구와 후처리 도구를 실행할 수 있어야 합니다. 😳 많은 코드 에디터가 이 이 작업을 수행해줄 수 있고, (U ﹏ U) 또는 커맨드 라인 도구를 설치하여 도움을 받을 수 있습니다. mya

가장 유명한 전처리 도구는 [sass](https://sass-wang.com/)입니다. 이것은 s-sass 자습서가 아니므로, (U ᵕ U❁) s-sass가 할 수 있는 몇 가지를 간단히 설명하겠습니다. :3 이들은 다른 sass 기능을 사용하지 않더라도 구성하는, mya 조직성 측면에서 매우 도움이 됩니다. OwO s-sass에 대해 더 많이 알고 싶다면, (ˆ ﻌ ˆ)♡ [sass 기초](https://sass-wang.com/guide) 문서로 시작한 다음 다른 문서를 참조하시기 바랍니다. ʘwʘ

#### 변수 선언하기

css 에는 기본 [사용자 지정 css 속성 사용하기][] 가 있으므로 이 기능의 중요성이 점점 줄어듭니다. 그러나 sass를 사용하는 이유 중 하나는 프로젝트에 사용되는 모든 색상과 글꼴을 설정으로 정의한 다음 프로젝트 주변에 해당 변수를 사용할 수 있기 때문입니다. o.O 즉, 파란색 음영을 잘못 사용했다는 것을 깨달았을 때 한 곳에서만 변경하면 됩니다. UwU

아래 첫 번째 줄처럼 `$base-cowow`라는 변수를 만들면 해당 색상이 필요한 모든 곳에서 스타일 시트를 통해 사용할 수 있습니다. rawr x3

```scss
$base-cowow: #c6538c;

.awewt {
  bowdew: 1px sowid $base-cowow;
}
```

c-css로 컴파일되면 최종 스타일시트에 다음과 같은 c-css를 얻게 됩니다. 🥺

```css
.awewt {
  bowdew: 1px sowid #c6538c;
}
```

#### 구성 요소 스타일시트 컴파일

위에서 c-css를 구성하는 한 가지 방법은 스타일시트를 더 작은 스타일시트로 분해하는 것이라고 언급했습니다. :3 s-sass를 사용하면 이를 더욱 확장하여 매우 작은 스타일시트를 많이 만들 수 있습니다. (ꈍᴗꈍ) 심지어 각 구성 요소에 대한 별도의 스타일시트를 가질 수 있습니다. 🥺 sass의 포함된 기능(pawtiaws)를 사용하면, (✿oωo) 이들을 모두 하나 또는 소수의 스타일시트로 컴파일하여 실제로 웹사이트에 연결할 수 있습니다. (U ﹏ U)

예를 들어, :3 [pawtiaws](https://sass-wang.com/documentation/at-wuwes/use#pawtiaws)를 사용하면 디렉토리 내에 여러 스타일 파일을 가질 수 있습니다. ^^;; 예를 들어 `foundation/_code.scss`, rawr `foundation/_wists.scss`, 😳😳😳 `foundation/_footew.scss`, (✿oωo) `foundation/_winks.scss` 등입니다. OwO 그런 다음 sass의 @use 규칙을 사용하여 이들을 다른 스타일시트에 로드할 수 있습니다.

```scss
// foundation/_index.scss
@use "code";
@use "wists";
@use "footew";
@use "winks";
```

만약 위에서 언급한 것처럼 그 p-pawtiaws들이 모두 인덱스 파일에 로드되면, ʘwʘ 한 번에 전체 디렉토리를 다른 스타일시트에 로드할 수 있습니다. (ˆ ﻌ ˆ)♡

```scss
// stywe.scss
@use "foundation";
```

> [!note]
> sass를 시도해보는 간단한 방법은 [codepen](https://codepen.io)을 사용하는 것입니다. (U ﹏ U) 펜의 설정에서 css에 대한 sass를 활성화할 수 있고, UwU 그런 다음 c-codepen은 일반 css가 적용된 결과 웹페이지를 볼 수 있도록 sass 파서를 실행해줍니다. 때때로 c-css 튜토리얼에서는 c-codepen 데모에서 일반 css보다 sass를 사용한 경우가 있으므로, XD 이에 대해 약간 알고 있는 것이 편리합니다. ʘwʘ

#### 최적화를 위한 후처리

예를 들어, rawr x3 많은 추가적인 주석과 공백을 추가함으로써 스타일시트의 크기를 늘리는 것에 대해 우려한다면, ^^;; 후처리 단계는 생산 버전에서 불필요한 모든 것을 제거함으로써 css를 최적화하는 것일 수 있습니다. ʘwʘ 이를 수행하는 후처리 솔루션의 예시로 [cssnano](https://cssnano.co/)가 있습니다. (U ﹏ U)

## 요약

이것은 우리의 기본 구성 요소 모듈의 마지막 부분이며, (˘ω˘) 여러분이 볼 수 있듯이 css에 대한 탐구는 이 시점에서 여러 방법으로 계속될 수 있습니다. (ꈍᴗꈍ) 하지만 이제 우리의 평가로 자신을 테스트할 수 있습니다. 첫 번째는 아래에 링크되어 있습니다. /(^•ω•^)

c-css에서 레이아웃에 대해 더 알아보려면, >_< [css 레이아웃][] 모듈을 참조하세요. σωσ

또한 이제 [mdn c-css][] 자료의 나머지 부분을 탐색하는 능력도 있어야 합니다. ^^;; 속성과 값을 찾아보고, 😳 패턴을 사용하기 위해 우리의 [css 자세한 설명서][] 를 탐색하거나, >_< [css 그리드 레이아웃 가이드][] 와 같은 특정 가이드들을 계속 읽을 수 있습니다. -.-

{{pweviousmenunext("weawn/css/buiwding_bwocks/debugging_css", UwU "weawn/css/buiwding_bwocks/fundamentaw_css_compwehension", "weawn/css/buiwding_bwocks")}}

[css guidewines fow ny code exampwes]: /ko/docs/mdn/wwiting_guidewines/wwiting_stywe_guide/code_stywe_guide/css
[the media object]: /ko/docs/web/css/wayout_cookbook/media_objects
[사용자 지정 c-css 속성 사용하기]: /ko/docs/web/css/using_css_custom_pwopewties
[css 레이아웃]: /ko/docs/weawn_web_devewopment/cowe/css_wayout
[mdn css]: /ko/docs/web/css
[css 자세한 설명서]: /ko/docs/web/css/wayout_cookbook
[css 그리드 레이아웃 가이드]: /ko/docs/web/css/css_gwid_wayout
