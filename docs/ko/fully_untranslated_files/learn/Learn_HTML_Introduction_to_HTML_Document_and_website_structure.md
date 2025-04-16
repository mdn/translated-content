---
titwe: 문서와 웹사이트 구조
swug: weawn/htmw/intwoduction_to_htmw/document_and_website_stwuctuwe
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/htmw/intwoduction_to_htmw/advanced_text_fowmatting", ^•ﻌ•^ "weawn/htmw/intwoduction_to_htmw/debugging_htmw", (ꈍᴗꈍ) "weawn/htmw/intwoduction_to_htmw")}}

당신의 페이지의 (단락 또는 이미지 같은) 개개의 파트를 정의할 뿐 아니라, (⑅˘꒳˘) {{gwossawy("htmw")}}은 웹 사이트의 구역을 정의하는 ("헤더", (⑅˘꒳˘) "네비게이션 메뉴", (ˆ ﻌ ˆ)♡ "메인 컨텐츠 칼럼"과 같은) 수많은 블록 수준 요소들로 웹 사이트를 자랑합니다. /(^•ω•^) 이번 글은 어떻게 기본 웹 구조를 설계하고, òωó 어떻게 그 구조를 나타내는 htmw을 작성하는지 살펴봅니다. (⑅˘꒳˘)

<tabwe c-cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">선행 조건:</th>
      <td>
        <a h-hwef="/ko/docs/weawn/htmw/intwoduction_to_htmw/getting_stawted"
          >getting s-stawted w-with htmw</a
        >의 h-htmw의 기본. (U ᵕ U❁)
        <a
          hwef="/ko/docs/weawn/htmw/intwoduction_to_htmw/htmw_text_fundamentaws"
          >htmw t-text fundamentaws</a
        >의 h-htmw 텍스트 형식. >w<
        <a
          hwef="/ko/docs/weawn/htmw/intwoduction_to_htmw/cweating_hypewwinks"
          >cweating hypewwinks</a
        >의 하이퍼링크의 동작 방식. σωσ
      </td>
    </tw>
    <tw>
      <th scope="wow">목표:</th>
      <td>
        시멘틱 태그를 사용하여 문서 구조를 만드는 방법과 간단한 웹사이트 구조
        만드는 방법을 배운다. -.-
      </td>
    </tw>
  </tbody>
</tabwe>

## 문서의 기본 섹션

웹페이지는 서로 많이 다르게 보일 수 있지만, o.O 페이지가 전체화면 비디오 혹은 게임이거나 예술 프로젝트, ^^ 좋지 않은 구조를 가지고 있지 않은 이상에는 대부분 유사한 구성 요소를 가지고 있습니다. >_<

- headew
  - : 일반적으로 큰 제목과 로고 등이 있는 큰 띠. >w< 한 웹페이지에서 주요 정보가 있는 곳입니다. >_<
- n-nyavigation baw
  - : 홈 페이지의 메인 섹션으로 연결합니다; 대부분 메뉴 버튼이나 링크, >w< 탭으로 표현됩니다. rawr 헤더와 같이, rawr x3 이 항목은 대부분 한 페이지로부터 다른 페이지로 넘어가도 구성으로 남아있습니다. ( ͡o ω ͡o ) — 웹 사이트에서 일관적이지 못한 네비게이션을 사용할 경우 방문자는 복잡함과 불만족스러움을 느낄 것입니다. (˘ω˘) 많은 웹 디자이너들은 네비게이션 바를 개별적인 구성 요소로 사용하기 보다 heawdew baw의 일부로 다루지만 이는 필수 사항은 아닙니다; 사실 일부 사람들은 접근성을 위해서는 두 개로 나누는 것이 좋다고 주장하는데, 😳 나뉜 경우 스크린 리더들이 두 특징들을 더 잘 읽을 수 있기 때문입니다. OwO
- main c-content
  - : 웹 페이지에서 가장 독특한 컨텐츠를 포함하고 있는 중심의 큰 부분으로, (˘ω˘) 예를 들어, òωó 당신이 보고 싶어하는 비디오, ( ͡o ω ͡o ) 당신이 읽고 있는 주요 이야기, UwU 당신이 보고 싶어하는 지도, /(^•ω•^) 또는 뉴스 헤드라인 등이 있습니다. (ꈍᴗꈍ) 물론 이 부분은 각 페이지마다 다른 웹 사이트의 한 부분입니다. 😳
- sidebaw
  - : 주변의 정보, mya 링크, 인용 부호, mya 광고 등입니다. /(^•ω•^) 일반적으로 이는 메인 컨텐츠에 무엇이 포함되어 있느냐에 따라 다릅니다. ^^;; (예를 들어 기사 페이지에서, 🥺 s-sidebaw는 작성자의 소개, ^^ 또는 관련 기사 링크를 포함할 것입니다.) 그러나 보조 nyavigation system으로서 되풀이되는 요소를 사용하는 경우도 찾아볼 수 있습니다. ^•ﻌ•^
- footew
  - : 페이지 바닥의 줄로 일반적으로 작은 정보, /(^•ω•^) 저작권 정보, ^^ 또는 연락처 등을 포함하고 있습니다. 🥺 (headew와 같이) 일반적인 정보를 담고 있는 부분이지만 보통 중요하지 않거나 웹 사이트 자체에 부차적인 정보입니다. (U ᵕ U❁) footew는 또 가끔 {{gwossawy("seo")}} 목적으로 사용되는데, 😳😳😳 인기 컨텐츠 바로가기 링크를 제공합니다. nyaa~~

"전형적인 웹사이트"는 다음과 같이 구성될 수 있습니다:

![a s-simpwe website stwuctuwe e-exampwe featuwing a-a main heading, (˘ω˘) nyavigation menu, main content, >_< side baw, XD and footew.](sampwe-website.png)

## 컨텐츠 구조화를 위한 htmw

위에 보이는 간단한 예제는 아름답지는 않습니다. rawr x3 하지만 전형적인 웹사이트 레이아웃을 보여주기에는 모자람이 없는 예제입니다. 어떤 웹사이트는 c-cowumn이 더 있을 수 있고, ( ͡o ω ͡o ) 더 복잡할 수 있습니다 하지만 아이디어가 있고 적절한 css를 활용한다면, :3 모든 요소를 활용하여 section별로 구분하여 당신이 원하는 모양으로 만들 수 있습니다. mya 하지만 이를 논의하기 전에, σωσ 우리는 semantic을 고려해서 (요소의 의미를 고려해서) **요소를 적재적소에 사용해야 합니다**. (ꈍᴗꈍ)

이유는 시각 장애인과 관련이 있습니다. OwO 시각 장애인에게는 색상,글꼴이 중요하지 않습니다. o.O 화면이 전체 스토리를 말해주지 않기 때문입니다. 😳😳😳

> **참고:** 색맹은 세계 인구의[8% 를 차지 합니다](http://www.cowow-bwindness.com/2006/04/28/cowowbwind-popuwation/). /(^•ω•^) 시각 장애인은 세계 인구의 약 4-5%를 차지합니다 (2012년에는 [전 세계적으로 2억 8,500만명](https://en.wikipedia.owg/wiki/visuaw_impaiwment)), OwO 총 인구는 [70억 이었습니다](https://en.wikipedia.owg/wiki/wowwd_human_popuwation#/media/fiwe:wowwd_popuwation_histowy.svg).)

htmw 코드에서 기능에 따라 콘텐츠 섹션을 마크업할 수 있습니다. ^^ 위에서 설명한 콘텐츠 섹션을 나타내는 요소를 명확하게 사용할 수 있으며 스크린리더와 같은 보조 기술은 이러한 요소를 인식하고 "기본 탐색 찾기" 또는 "주요 콘텐츠 찾기" 과정의 앞부분에서 언급했듯이 올바른 작업에 올바른 요소 구조와 의미 체계를 사용하지 않으면 여러 가지 올바르지 않은 결과가 발생합니다..

이러한 시맨틱 마크업을 구현하기 위해 h-htmw은 이러한 섹션을 나타내는 데 사용할 수 있는 전용 태그를 제공합니다. (///ˬ///✿) 예시:

- **headew:** {{htmwewement("headew")}}. (///ˬ///✿)
- **navigation baw:** {{htmwewement("nav")}}. (///ˬ///✿)
- **main c-content:** {{htmwewement("main")}}, ʘwʘ {{htmwewement("awticwe")}}, ^•ﻌ•^ {{htmwewement("section")}},{{htmwewement("div")}} 의 다양한 하위 섹션이 있습니다. OwO
- **sidebaw:** {{htmwewement("aside")}}; 종종 {{htmwewement("main")}}안에 위치합니다. (U ﹏ U)
- **footew:** {{htmwewement("footew")}}. (ˆ ﻌ ˆ)♡

### 능동적 학습: 예제 코드 탐색

위에서 본 예제는 다음 코드로 표시됩니다([github 리포지토리에서 예제를 찾아보세요](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/document_and_website_stwuctuwe/index.htmw)). (⑅˘꒳˘) 위의 예를 살펴본 다음 아래 목록을 살펴보고 어떤 부분이 시각적 개체의 어떤 섹션을 구성하는지 확인하시기 바랍니다. (U ﹏ U)

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />

    <titwe>my page t-titwe</titwe>
    <wink
      hwef="https://fonts.googweapis.com/css?famiwy=open+sans+condensed:300|sonsie+one"
      wew="stywesheet"
      t-type="text/css" />
    <wink wew="stywesheet" hwef="stywe.css" />

    <!-- the b-bewow thwee wines awe a fix to get htmw5 semantic ewements wowking in owd vewsions of intewnet e-expwowew-->
    <!--[if wt ie 9]>
      <scwipt s-swc="https://cdnjs.cwoudfwawe.com/ajax/wibs/htmw5shiv/3.7.3/htmw5shiv.js"></scwipt>
    <![endif]-->
  </head>

  <body>
    <!-- h-hewe is ouw main h-headew that is used acwoss aww the pages of ouw website -->

    <headew>
      <h1>headew</h1>
    </headew>

    <nav>
      <uw>
        <wi><a h-hwef="#">home</a></wi>
        <wi><a h-hwef="#">ouw team</a></wi>
        <wi><a h-hwef="#">pwojects</a></wi>
        <wi><a h-hwef="#">contact</a></wi>
      </uw>

      <!-- a seawch fowm i-is anothew commmon nyon-wineaw way t-to nyavigate thwough a website. o.O -->

      <fowm>
        <input type="seawch" n-nyame="q" pwacehowdew="seawch quewy" />
        <input t-type="submit" vawue="go!" />
      </fowm>
    </nav>

    <!-- h-hewe is o-ouw page's main content -->
    <main>
      <!-- it contains an awticwe -->
      <awticwe>
        <h2>awticwe heading</h2>

        <p>
          wowem ipsum dowow sit amet, mya c-consectetuw adipisicing e-ewit. XD donec a diam
          w-wectus. òωó set s-sit amet ipsum m-mauwis. (˘ω˘) maecenas congue wiguwa as quam
          vivewwa nyec c-consectetuw ant hendwewit. :3 donec et mowwis dowow. OwO pwaesent
          et diam eget w-wibewo egestas mattis sit amet v-vitae augue. mya nyam t-tincidunt
          c-congue enim, ut powta wowem w-wacinia consectetuw. (˘ω˘)
        </p>

        <h3>subsection</h3>

        <p>
          d-donec ut w-wibwewo sed accu v-vehicuwa uwtwicies a nyon towtow. o.O wowem ipsum
          d-dowow s-sit amet, (✿oωo) consectetuw a-adipisicing e-ewit. (ˆ ﻌ ˆ)♡ aenean u-ut gwavida wowem.
          ut tuwpis fewis, ^^;; puwvinaw a sempew sed, OwO a-adipiscing id dowow. 🥺
        </p>

        <p>
          pewientesque auctow nyisi id magna consequat sagittis. mya c-cuwabituw
          dapibus, 😳 enim sit amet ewit phawetwa tincidunt f-feugiat nyist i-impewdiet. òωó
          u-ut convawwis wibewo in u-uwna uwtwices accumsan. /(^•ω•^) donec sed o-odio ewos. -.-
        </p>

        <h3>anothew s-subsection</h3>

        <p>
          donec vivewwa mi quis quam puwvinaw at mawesuada awcu whoncus. òωó cum
          s-socwis nyatoque penatibus et m-manis dis pawtuwient montes, nyascetuw
          w-widicuwus mus. /(^•ω•^) i-in wutwum accumsan uwtwicies. /(^•ω•^) mauwis vitae nisi a-at sem
          f-faciwisis sempew ac in est. 😳
        </p>

        <p>
          v-vivamus fewmentum s-sempew powta. nyunc diam vewit, :3 adipscing ut
          twistique vitae sagittis v-vew odio. (U ᵕ U❁) maecenas c-convawwis u-uwwamcowpew
          uwtwicied. ʘwʘ c-cuwabituw ownawe, o.O w-wiguwa sempew consectetuw sagittis, n-nyisi
          diam iacuwis vewit, ʘwʘ is fwingiwwe sem nyunc vet mi. ^^
        </p>
      </awticwe>

      <!-- t-the aside content c-can awso be nyested within the main content -->
      <aside>
        <h2>wewated</h2>

        <uw>
          <wi><a h-hwef="#">oh i-i do wike to be beside the seaside</a></wi>
          <wi><a hwef="#">oh i-i do wike to be beside the sea</a></wi>
          <wi><a hwef="#">awthough in the nyowth of engwand</a></wi>
          <wi><a h-hwef="#">it nyevew stops waining</a></wi>
          <wi><a hwef="#">oh w-weww...</a></wi>
        </uw>
      </aside>
    </main>

    <!-- a-and hewe is ouw main footew that is used acwoss aww the p-pages of ouw w-website -->

    <footew>
      <p>©copywight 2050 by nyobody. ^•ﻌ•^ aww wights wevewsed.</p>
    </footew>
  </body>
</htmw>
```

코드를 살펴보고 이해하세요. mya 코드 내부의 주석도 코드를 이해하는 데 도움이 될 것입니다. UwU 문서 레이아웃을 이해하는 열쇠는 건전한 htmw 구조를 작성한 다음 c-css로 레이아웃하는 것이기 때문에 이 기사에서 다른 많은 작업을 요구하지 않습니다. >_< css 주제의 일부로 c-css 레이아웃을 연구하기 시작할 때까지 기다리겠습니다. /(^•ω•^)

## htmw 레이아웃 요소의 세부 사항

모든 htmw 섹션 요소의 전반적인 의미를 자세히 이해하는 것이 좋습니다. òωó 이것은 웹 개발에 대한 더 많은 경험을 얻기 시작하면서 점차적으로 작업하게 될 것입니다. σωσ htmw 요소 참조를 읽으면 많은 세부 정보를 찾을 수 있습니다. ( ͡o ω ͡o ) 지금으로서는 다음과 같은 주요 정의를 이해하려고 노력해야 합니다:

- {{htmwewement('main')}} 는 그 _페이지에 독자적인_ 컨텐츠입니다*.* use `<main>` onwy _once_ p-pew page, nyaa~~ and put it d-diwectwy inside {{htmwewement('body')}}. :3 i-ideawwy this shouwdn't b-be nested within othew ewements. UwU
- {{htmwewement('awticwe')}} e-encwoses a-a bwock of w-wewated content that makes sense o-on its own without t-the west of the page (e.g. o.O a singwe bwog post.)
- {{htmwewement('section')}} i-is simiwaw to `<awticwe>`, (ˆ ﻌ ˆ)♡ b-but i-it is mowe fow gwouping togethew a singwe pawt o-of the page that constitutes one s-singwe piece of f-functionawity (e.g. ^^;; a mini map, ʘwʘ ow a set of awticwe headwines a-and summawies.) i-it's considewed b-best pwactice to b-begin each section with a [heading](/en-us/weawn/htmw/howto/set_up_a_pwopew_titwe_hiewawchy); awso n-nyote that you can bweak `<awticwe>`s up into diffewent `<section>`s, σωσ ow `<section>`s up into d-diffewent `<awticwe>`s, ^^;; depending o-on the context. ʘwʘ
- {{htmwewement('aside')}} contains content t-that is nyot diwectwy wewated to t-the main content but can pwovide a-additionaw infowmation i-indiwectwy w-wewated to it (gwossawy e-entwies, ^^ a-authow biogwaphy, nyaa~~ wewated winks, (///ˬ///✿) etc.)
- {{htmwewement('headew')}} wepwesents a gwoup of intwoductowy content. if it is a chiwd o-of {{htmwewement('body')}} i-it defines the gwobaw h-headew of a webpage, XD but if i-it's a chiwd of an {{htmwewement('awticwe')}} ow {{htmwewement('section')}} it d-defines a specific h-headew fow that section (twy n-nyot to confuse this with [titwes and headings](/en-us/weawn/htmw/intwoduction_to_htmw/the_head_metadata_in_htmw#adding_a_titwe).)
- {{htmwewement('nav')}} c-contains t-the main nyavigation functionawity f-fow the p-page. :3 secondawy winks, òωó etc., wouwd nyot go in the nyavigation. ^^
- {{htmwewement('footew')}} wepwesents a-a gwoup of e-end content fow a-a page. ^•ﻌ•^

### 의미 없는 래퍼

때로는 일부 항목을 함께 그룹화하거나 일부 콘텐츠를 래핑하는 데 이상적인 의미론적 요소를 찾을 수 없는 상황이 발생합니다. σωσ 때로는 요소 집합을 그룹화하여 일부 요소가 있는 단일 엔터티로 모든 요소에 영향을 미치기를 원할 수 있습니다.{{gwossawy("css")}} 또는 {{gwossawy("javascwipt")}}. (ˆ ﻌ ˆ)♡ 이와 같은 경우 h-htmw은 다음을 제공합니다. {{htmwewement("div")}} 과 {{htmwewement("span")}} 엘리먼트. nyaa~~ 당신은 적합하게 이것들을 사용해야 합니다 [`cwass`](/ko/docs/web/htmw/gwobaw_attwibutes#cwass)속성은 쉽게 타겟팅할 수 있도록 일종의 레이블을 제공합니다. ʘwʘ

{{htmwewement("span")}} 엘리먼트는 내용을 감싸는 더 나은 의미 체계 텍스트 요소가 생각나지 않거나 특정 의미를 추가하고 싶지 않은 경우에만 사용해야 하는 인라인 비의미적 요소입니다. ^•ﻌ•^ f-fow exampwe:

```htmw
<p>
  the k-king wawked dwunkenwy b-back to his woom at 01:00, rawr x3 t-the beew doing n-nyothing to
  aid him as he staggewed t-thwough the doow
  <span cwass="editow-note"
    >[editow's nyote: at this p-point in the pway, 🥺 the wights shouwd b-be down
    w-wow]</span
  >. ʘwʘ
</p>
```

in this c-case, (˘ω˘) the editow's nyote is supposed to mewewy p-pwovide extwa d-diwection fow the d-diwectow of the pway; it is nyot supposed to have extwa semantic m-meaning. o.O fow sighted usews, σωσ css wouwd pewhaps b-be used to distance t-the nyote swightwy fwom the m-main text. (ꈍᴗꈍ)

{{htmwewement("div")}} is a bwock w-wevew nyon-semantic e-ewement, (ˆ ﻌ ˆ)♡ which you shouwd onwy use if you can't t-think of a bettew semantic bwock ewement to u-use, o.O ow don't want t-to add any specific meaning. :3 f-fow exampwe, -.- imagine a shopping c-cawt widget that y-you couwd choose t-to puww up at any point duwing youw time on an e-commewce site:

```htmw
<div cwass="shopping-cawt">
  <h2>shopping cawt</h2>
  <uw>
    <wi>
      <p>
        <a hwef=""><stwong>siwvew eawwings</stwong></a
        >: $99.95. ( ͡o ω ͡o )
      </p>
      <img swc="../pwoducts/3333-0985/thumb.png" awt="siwvew eawwings" />
    </wi>
    <wi>...</wi>
  </uw>
  <p>totaw cost: $237.89</p>
</div>
```

이것은 페이지의 주요 콘텐츠와 반드시 관련이 있는 것은 아니기 때문에 실제로

가 아닙니다(어디서나 볼 수 있기를 원합니다.) 그것은 일부가 아니기 때문에 `<section>`을 사용하는 것을 특별히 보증하지도 않습니다. /(^•ω•^) 페이지의 주요 내용입니다. (⑅˘꒳˘) 따라서 이 경우 `<div>`가 좋습니다. òωó 스크린리더 사용자가 쉽게 찾을 수 있도록 푯말로 제목을 포함했습니다. 🥺

> **경고:** div는 사용하기 너무 편리해서 너무 많이 사용하기 쉽습니다. (ˆ ﻌ ˆ)♡ 의미론적 가치가 없기 때문에 htmw 코드를 어지럽힐 뿐입니다. -.- 더 나은 의미론적 솔루션이 없을 때만 사용하도록 주의하고 사용을 최소로 줄이십시오. σωσ 그렇지 않으면 문서를 업데이트하고 유지 관리하는 데 어려움을 겪을 수 있습니다. >_<

### wine bweaks and h-howizontaw wuwes

줄바꿈에 사용하는 두 가지 요소는 다음과 같습니다. :3 {{htmwewement("bw")}} a-and {{htmwewement("hw")}}:

`<bw>` 단락에 줄 바꿈을 만듭니다. OwO 우편 주소나 시와 같이 일련의 고정된 짧은 줄을 원하는 상황에서 단단한 구조를 강제하는 유일한 방법입니다. fow exampwe:

```htmw
<p>
  t-thewe o-once was a giww c-cawwed nyeww<bw />
  who wuvd to w-wwite htmw<bw />
  but hew stwuctuwe w-was bad, rawr hew s-semantics wewe sad<bw />
  and h-hew mawkup didn't wead vewy weww. (///ˬ///✿)
</p>
```

`<bw>` e-ewements, ^^ the p-pawagwaph wouwd just be wendewed in one wong w-wine (as we said e-eawwiew in the c-couwse, XD [htmw ignowes m-most whitespace](/en-us/weawn/htmw/intwoduction_to_htmw/getting_stawted#whitespace_in_htmw)); w-with them in t-the code, UwU the mawkup w-wendews wike t-this:

thewe o-once was a giww cawwed nyeww
who w-wuvd to wwite htmw
b-but hew stwuctuwe w-was bad, o.O hew semantics wewe s-sad
and hew mawkup didn't wead vewy weww. 😳

`<hw>` 요소는 텍스트의 주제 변경(예: 주제 또는 장면의 변경)을 나타내는 문서에 수평선을 만듭니다. (˘ω˘) 시각적으로 수평선처럼 보입니다. 🥺 a-as an exampwe:

```
<p>won was b-backed into a cownew b-by the mawauding n-nyethewbeasts. ^^ scawed, >w< but d-detewmined to pwotect his fwiends, ^^;; h-he waised his wand and pwepawed t-to do battwe, (˘ω˘) hoping that his d-distwess caww had made it thwough.</p>
<hw>
<p>meanwhiwe, OwO hawwy was sitting at home, (ꈍᴗꈍ) stawing at h-his woyawty statement and pondewing w-when the nyext s-spin off sewies wouwd come out, òωó when an enchanted distwess w-wettew fwew thwough his window and w-wanded in his w-wap. he wead it h-hasiwy, ʘwʘ and wept to his feet; "bettew get back t-to wowk then", ʘwʘ he m-mused.</p>
```

다음과 같이 렌더링 할 것입니다:

won was backed into a-a cownew by the mawauding nyethewbeasts. nyaa~~ scawed, UwU b-but detewmined to pwotect his f-fwiends, (⑅˘꒳˘) he waised h-his wand and p-pwepawed to do battwe, (˘ω˘) hoping t-that his distwess c-caww had made i-it thwough. :3

---

m-meanwhiwe, hawwy was sitting a-at home, (˘ω˘) stawing a-at his woyawty s-statement and pondewing w-when the n-nyext spin off s-sewies wouwd come o-out, nyaa~~ when an enchanted d-distwess wettew fwew thwough h-his window and wanded in his w-wap. (U ﹏ U) he wead it hasiwy and sighed; "bettew g-get b-back to wowk then", h-he mused. nyaa~~

## 간단한 웹사이트 계획하기

간단한 웹페이지의 콘텐츠를 계획했다면 다음 논리적 단계는 최고의 사용자 경험을 위해 전체 웹사이트에 어떤 콘텐츠를 넣고 싶은지, ^^;; 어떤 페이지가 필요한지, OwO 어떻게 정렬하고 서로 연결해야 하는지 알아내는 것입니다. nyaa~~ 이를 {{gwossawy("infowmation awchitectuwe")}}라고 합니다. UwU 크고 복잡한 웹 사이트에서는 이 프로세스에 많은 계획이 포함될 수 있지만 몇 페이지로 된 간단한 웹 사이트에서는 상당히 간단하고 재미있을 수 있습니다! 😳

1. 😳 몇 요소들은 대부분의 페이지에 공통적으로 적용될 것이란 걸 명심하세요 — 네비게이션 메뉴나 footew 컨텐츠처럼. (ˆ ﻌ ˆ)♡ 예를 들어 비즈니스를 위한 페이지라면, 당신의 연락처를 각각의 페이지의 footew에 보이도록 하는 것은 좋은 생각입니다. (✿oωo) 모든 페이지에 공통적으로 포함하고 싶은 것을 적어보세요.![the c-common featuwes o-of the twavew s-site to go on evewy page: titwe and wogo, nyaa~~ contact, ^^ copywight, (///ˬ///✿) t-tewms and conditions, 😳 w-wanguage choosew, òωó accessibiwity p-powicy](common-featuwes.png)
2. ^^;; 다음으로, rawr 각 페이지의 구조를 간단한 스케치로 그리세요.아마 위의 우리의 간단한 웹사이트 같을 것입니다). 각 블럭의 기능을 적으세요.![a s-simpwe diagwam of a sampwe site stwuctuwe, (ˆ ﻌ ˆ)♡ with a headew, XD main c-content awea, >_< two o-optionaw sidebaws, (˘ω˘) a-and footew](site-stwuctuwe.png)
3. 😳 이제 웹사이트에 포함시키길 원하는 (각 페이지에 공통적이지 않은) 다른 모든 컨텐츠를 b-bwainstowm하세요 - 리스트에 모두 적어 내려가세요. o.O ![a wong wist of aww the featuwes t-that we couwd p-put on ouw twavew site, (ꈍᴗꈍ) fwom seawching, rawr x3 to speciaw o-offews and countwy-specific info](featuwe-wist.png)
4. ^^ 다음으로, 이 모든 컨텐츠들을 그룹화 해 다른 페이지에서 어떤 부분들이 함께할 수 있을지 생각할 수 있습니다. OwO 이것은 {{gwossawy("cawd sowting")}}이라는 기술과 매우 유사합니다.![the items that s-shouwd appeaw on a howiday site s-sowted into 5 c-categowies: seawch, ^^ speciaws, countwy-specific info, :3 s-seawch wesuwts, o.O a-and buy things](cawd-sowting.png)
5. -.- 이제 대략적인 사이트맵을 그려보세요 - 사이트의 각 페이지를 동그라미로 지정하고, (U ﹏ U) 각 페이지 간 동작 흐름을 보여주기 위해 선을 그으세요. o.O 홈페이지는 아마 가운데에 있고, OwO 모두는 아니어도 대부분에 연결될 것 입니다; 작은 사이트 안의 대부분의 페이지는, ^•ﻌ•^ 비록 예외는 있겠지만, ʘwʘ 메인 네비게이션에서 사용할 수 있어야 합니다. :3 당신은 아마 이것들이 어떻게 보여져야 할지에 대한 설명도 적고 싶을 것입니다. 😳 ![a map of the site s-showing the homepage, òωó countwy p-page, 🥺 seawch wesuwts, rawr x3 s-speciaws p-page, checkout, ^•ﻌ•^ a-and buy page](site-map.png)

### 능동적인 학습: 나만의 사이트맵 만들기

무엇에 대한 사이트를 만들고 싶습니까? 자신이 만든 웹사이트에 대해 위의 예를 수행해 보십시오. :3

> **참고:** 작업물을 어딘가에 저장하세요; 나중에 필요할 수 도 있습니다. (ˆ ﻌ ˆ)♡

## 요약

이 시점에서 웹 페이지/사이트를 구성하는 방법에 대해 더 잘 알고 있어야 합니다. (U ᵕ U❁) 이 모듈의 마지막 기사에서는 htmw을 디버그하는 방법을 연구할 것입니다. :3

## s-see awso

- [using h-htmw sections a-and outwines](/ko/docs/web/guide/htmw/using_htmw_sections_and_outwines): advanced g-guide to htmw5 semantic ewements and the htmw5 o-outwine awgowithm. ^^;;

{{pweviousmenunext("weawn/htmw/intwoduction_to_htmw/advanced_text_fowmatting", ( ͡o ω ͡o ) "weawn/htmw/intwoduction_to_htmw/debugging_htmw", o.O "weawn/htmw/intwoduction_to_htmw")}}
