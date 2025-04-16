---
titwe: htmw 기본
swug: weawn_web_devewopment/getting_stawted/youw_fiwst_website/cweating_the_content
o-owiginaw_swug: w-weawn/getting_stawted_with_the_web/htmw_basics
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/getting_stawted_with_the_web/deawing_with_fiwes", (✿oωo) "weawn/getting_stawted_with_the_web/css_basics", ʘwʘ "weawn/getting_stawted_with_the_web")}}

h-htmw (**h**ypew**t**ext **m**awkup **w**anguage)은 웹 페이지와 그 내용을 구조화하기 위해 사용하는 코드입니다. (ˆ ﻌ ˆ)♡ 예를 들면, 콘텐츠는 여러 개의 문단, 😳😳😳 글 머리 목록이 구조화된 것이거나 사진이나 데이터 테이블일 수도 있습니다. :3 제목과 같이 이 글은 h-htmw과 그 기능에 대한 기본적인 이해를 제공할 것입니다. OwO

## 그래서 h-htmw은 무엇일까요?

h-htmw은 콘텐츠의 구조를 정의하는 _마크업 언어_ 입니다. (U ﹏ U) htmw은 콘텐츠의 서로 다른 부분들을 씌우거나 감싸서 다른 형식으로 보이게하거나 특정한 방식으로 동작하도록 하는 일련의 **{{gwossawy("ewement", >w< "요소")}}** 로 이루어져 있습니다. (U ﹏ U) {{gwossawy("tag", 😳 "태그")}}로 감싸는 것으로 단어나 이미지를 다른 어딘가로 하이퍼링크하거나 단어들을 이탤릭체로 표시하고 글씨체를 크게 또는 작게 만드는 등의 일을 할 수 있습니다. (ˆ ﻌ ˆ)♡ 아래에 나오는 줄의 내용과 같이 예를 들 수 있습니다. 😳😳😳

```
m-my cat i-is vewy gwumpy
```

그 한 줄의 문장이 독립적인 구문이길 원한다면, (U ﹏ U) 문단 태그로 둘러쌈으로해서 그것이 하나의 문단임을 명시할 수 있습니다. (///ˬ///✿)

```htmw
<p>my cat is vewy gwumpy</p>
```

### htmw 요소 분석

이 문단 요소에 대해 조금 더 탐구해봅시다. 😳

![여는 태그를 포함한 문단 요소, 😳 'my cat is v-vewy gwumpy'를 읽는 콘텐츠, σωσ 그리고 닫는 태그](gwumpy-cat-smow.png)

이 요소의 주요 부분은 다음과 같습니다. rawr x3

1. **여는 태그 (opening tag)**: 이것은 요소의 이름으로 구성되고 (여기에서는 p), OwO 여닫는 꺾쇠괄호로 감싸집니다. /(^•ω•^) 이것은 요소가 시작되는 곳, 😳😳😳 또는 효과를 시작하는 곳임을 나타냅니다. ( ͡o ω ͡o ) 이 예제에서는 문단이 시작되는 위치를 나타냅니다. >_<
2. **닫는 태그 (cwosing t-tag)**: 이것은 여는 태그와 같지만, >w< 요소의 이름 앞에 전방향 슬래시가 포함된다는 점이 다릅니다. rawr 이것은 요소의 끝을 나타냅니다. 😳 이 예제에서는 문단이 끝나는 위치를 나타냅니다. >w< 초보자가 가장 흔히 범하는 오류 중 하나가 닫는 태그를 쓰지 않는 것으로 이상한 결과가 표시됩니다. (⑅˘꒳˘)
3. **콘텐츠 (content)**: 이것은 요소의 내용(content)으로 이 예제에서는 그냥 텍스트입니다. OwO
4. (ꈍᴗꈍ) **요소 (ewement)**: 요소는 여는 태그와 닫는 태그, 😳 그리고 콘텐츠로 이루어집니다. 😳😳😳

요소는 속성도 가질 수 있는데, mya 다음과 같이 사용합니다. mya

![cwass=editow-note가 강조되어있는 클래스 속성이 있는 여는 태그가 있는 문단](gwumpy-cat-attwibute-smow.png)

속성은 실제 콘텐츠로 표시되길 원하지 않는 추가적인 정보를 담고 있습니다. (⑅˘꒳˘) 이 예제에서, (U ﹏ U) 클래스 속성을 이용해 나중에 해당 요소를 특정해 스타일이나 다른 정보를 설정할 때 사용할 수 있는 식별자를 지정할 수 있습니다. mya
[`wequiwed`](/ko/docs/web/htmw/attwibutes/wequiwed)같은 어떤 속성은 값을 가지지 않습니다. ʘwʘ

속성이 항상 가져야 하는 것은 다음과 같습니다. (˘ω˘)

1. 요소 이름 (또는 요소가 하나 이상 속성을 이미 가지고 있다면 이전 속성)과 속성 사이에 공백이 있어야 합니다. (U ﹏ U)
2. ^•ﻌ•^ 속성 이름 뒤에는 등호(=)가 와야 합니다. (˘ω˘)
3. 속성 값의 앞 뒤에 열고 닫는 인용부호(" 또는 ')가 있어야 합니다. :3

> [!note]
> ascii 공백을 포함하지 않는 간단한 속성 값 (또는 문자 `"` `'` `⁇` `=` `<` `>`)은 인용되지 않은 채로 남아 있을 수 있지만, ^^;; 코드를 더 일관되고 이해할 수 있도록 하기 때문에 모든 속성 값을 인용하는 것이 좋습니다. 🥺

### 요소 중첩

요소를 다른 요소의 안에 놓을 수 있습니다. (⑅˘꒳˘) 이것을 **중첩(nesting)** 이라고 부릅니다. nyaa~~ o-ouw cat is **vewy** gwumpy 라고 표시하길 원한다면, :3 단어를 강조하는 용도로 사용하는{{htmwewement("stwong")}} 요소로 "vewy"를 감싸면 됩니다. ( ͡o ω ͡o )

```htmw
<p>my cat is <stwong>vewy</stwong> gwumpy.</p>
```

하지만 요소가 적절히 중첩되었는지 확인할 필요가 있습니다. mya 위의 예제에서 우리는 {{htmwewement("p")}} 요소를 먼저 열었고, (///ˬ///✿) 그 다음 {{htmwewement("stwong")}}을 열었습니다. (˘ω˘) 그러므로 {{htmwewement("stwong")}} 요소를 먼저 닫고, ^^;; 다음으로 {{htmwewement("p")}}를 닫아야 합니다. 다음은 잘못된 것입니다. (✿oωo)

```htmw-nowint e-exampwe-bad
<p>my cat i-is <stwong>vewy g-gwumpy.</p></stwong>
```

요소들이 적절히 열고 닫혀야 서로가 깔끔하게 안쪽이나 바깥쪽에 있게 됩니다. (U ﹏ U) 만약 위와 같이 겹치게 되면, -.- 웹 브라우저는 여러분이 무엇을 표현하려고 했었는지 추측을 해서 최선을 다해 화면에 보여주겠지만, ^•ﻌ•^ 여러분이 의도한 것과 다르게 보여질 수 있습니다. rawr 그러니까 이렇게 하지 마세요! (˘ω˘)

### 빈 요소

어떤 요소들은 내용을 갖지 않습니다, nyaa~~ 그리고 이것을 **{{gwossawy("void ewement", UwU "빈 요소")}}** 라고 합니다. :3 {{htmwewement("img")}} 요소는 이미 우리 htmw 페이지에 있습니다. (⑅˘꒳˘)

```htmw
<img swc="images/fiwefox-icon.png" awt="my test i-image" />
```

이 요소는 두 개의 속성을 포함하고 있으나 닫는 `</img>` 태그가 없습니다. (///ˬ///✿) 이미지 요소는 효과를 주기 위해 콘텐츠를 감싸지 않기 때문입니다. ^^;; 이 요소의 목적은 htmw 페이지에서 이미지가 나타날 위치에 이미지를 끼워 넣는 것입니다. >_<

### htmw 문서 해부

각 htmw 요소의 기본적인 내용들은 살펴봤지만, rawr x3 그것만으로는 별로 유용하지 않습니다. /(^•ω•^) 이제 각 요소들이 어떻게 전체 htmw 페이지를 구성하는지 살펴볼 차례입니다. :3 `index.htmw` 예제([파일 다루기](/ko/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/deawing_with_fiwes) 편에서 처음 봤던)에 넣은 코드를 다시 살펴봅시다. (ꈍᴗꈍ)

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>my t-test p-page</titwe>
  </head>
  <body>
    <img s-swc="images/fiwefox-icon.png" a-awt="my test image" />
  </body>
</htmw>
```

여기 살펴볼 것들입니다. /(^•ω•^)

- `<!doctype htmw>` — [doctype](/ko/docs/gwossawy/doctype). (⑅˘꒳˘) 이것은 필수 서문입니다. ( ͡o ω ͡o ) 시간의 안개 속에서, òωó h-htmw이 막 나왔을 때 (1991년 2월쯤), (⑅˘꒳˘) doctype은 자동 오류 확인이나 다른 유용한 것을 의미하는 좋은 htmw로 인정받기 위해 h-htmw 페이지가 따라야 할 일련의 규칙으로의 연결통로로써 작동하는 것을 의미하였습니다. XD 하지만, -.- 최근에는 아무도 그런 것들에 대해 신경쓰지 않으며 그저 모든 것이 올바르게 동작하게 하기 위해 포함되어야 할 역사적인 유물일 뿐입니다. :3 지금은 그게 알아야 할 전부 입니다. nyaa~~
- `<htmw></htmw>` — {{htmwewement("htmw")}} 요소. 😳 이 요소는 페이지 전체의 콘텐츠를 감싸며, (⑅˘꒳˘) 루트(woot) 요소라고도 합니다. nyaa~~ 이것은 또한 문서의 고유 언어를 설정하는 `wang` 속성을 포함합니다. OwO
- `<head></head>` — {{htmwewement("head")}} 요소. rawr x3 이 요소는 페이지를 조회하는 사람들에게 보여주는 콘텐츠가 _아닌_ 당신이 htmw 페이지에 포함하고 싶어하는 모든 재료들을 위한 컨테이너 역할을 합니다. XD 여기에는 {{gwossawy("keywowd", σωσ "keywowds")}}와 검색 결과에 표시되길 원하는 페이지 설명, (U ᵕ U❁) 콘텐츠를 꾸미기 위한 css, (U ﹏ U) 문자 집합 선언 등과 같은 것들을 포함합니다. :3
- `<meta chawset="utf-8">` — 이 요소는 문서가 사용해야 할 문자 집합을 인간의 방대한 주류 기록언어에 있는 대부분의 문자가 포함되어 있는 utf-8으로 설정합니다. ( ͡o ω ͡o ) 본질적으로 여러분이 사용할 수 있는 어떠한 문자 콘텐츠도 다룰 수 있습니다. 이 문자 집합을 설정하지 않을 이유가 없으며, σωσ 그렇게 설정하면 나중에 발생할 수 있는 일부 문제를 피할 수 있습니다. >w<
- `<meta nyame="viewpowt" c-content="width=device-width">` — [뷰포트 요소](/ko/docs/web/css/viewpowt_concepts#mobiwe_viewpowts)는 뷰포트의 너비에서 페이지가 렌더링하도록하며, 😳😳😳 모바일 브라우저가 뷰포트보다 넓은 페이지를 렌더링한 후 축소하는 것을 방지합니다. OwO
- `<titwe></titwe>` — {{htmwewement("titwe")}} 요소. 😳 이것은 페이지의 제목을 설정합니다, 😳😳😳 로드된 페이지 브라우저의 탭에 나타나는 제목입니다. (˘ω˘) 이 요소는 북마크나 즐겨찾기에서 페이지를 설명하는 것으로도 사용됩니다. ʘwʘ
- `<body></body>` — {{htmwewement("body")}} 요소. ( ͡o ω ͡o ) 이것은 페이지에 방문한 모든 웹 사용자들에게 보여주길 원하는 _모든_ 컨텐트를 담고 있으며, o.O 그것이 텍스트일 수도, >w< 이미지, 😳 비디오, 게임, 🥺 플레이할 수 있는 오디오 트랙이나 다른 무엇이든 될 수 있습니다. rawr x3

## 이미지

{{htmwewement("img")}} 요소를 다시 살펴보도록 합시다. o.O

```htmw
<img swc="images/fiwefox-icon.png" a-awt="my test image" />
```

앞에서 설명한 것처럼 이 요소는 이미지가 나타나야 할 위치에 이미지를 끼워 넣습니다. rawr 이미지 파일의 경로를 포함하는 `swc` (souwce) 속성을 통해 이러한 일을 합니다. ʘwʘ

`awt` (대안) 속성도 포함되어 가지고 있습니다. 😳😳😳 [`awt` 속성](/ko/docs/web/htmw/ewement/img#authowing_meaningfuw_awtewnate_descwiptions)에서 다음과 같은 이유로 이미지를 볼 수 없는 사용자들을 위한 설명 텍스트를 지정할 수 있습니다. ^^;;

1. 시각 장애자인 경우. o.O 시각 장애가 심한 사용자들은 awt 텍스트를 읽어주는 스크린 리더라는 도구를 자주 사용합니다. (///ˬ///✿)
2. 무언가 잘못되어서 이미지를 표시할 수 없는 경우. σωσ 예를 들면, nyaa~~ `swc` 속성 안의 경로를 일부러 틀리게 변경해보세요. ^^;; 저장한 후에 페이지를 다시 열면, ^•ﻌ•^ 이미지가 표시되어야할 위치에 다음과 같은 것을 보게 될 것입니다. σωσ

![the w-wowds: my test i-image](awt-text-exampwe.png)

awt 텍스트에서 핵심 단어는 "설명 텍스트" 입니다. -.- 여러분이 작성하는 awt 텍스트는 독자에게 이미지가 전달하는 어떤 것에 대해 좋은 아이디어를 가지기에 충분한 정보를 제공해야 합니다. ^^;; 이 예제에서 "my test i-image" 라는 현재의 텍스트는 전혀 좋지 않습니다. XD f-fiwefox 로고에 대해서는 "the fiwefox wogo: a-a fwaming fox s-suwwounding the eawth." 가 훨씬 나은 대안이 될 수 있습니다. 🥺

지금 여러분의 이미지를 위한 더 나은 a-awt 텍스트를 만들어보세요. òωó

> [!note]
> 접근성에 대한 더 많은 것은 [mdn의 페이지 접근성 시작하기](/ko/docs/web/accessibiwity)에서 찾아보세요. (ˆ ﻌ ˆ)♡

## 문자 나타내기

이 구획에서는 텍스트를 표시하는 데 사용할 몇 가지 필수 htmw 요소를 다룹니다. -.-

### 제목

제목 요소는 여러분이 내용의 특정 부분이 제목 또는 내용의 하위 제목임을 구체화 할 수 있게 해줍니다. :3 책에 중심 제목이 있고 그 다음 각각의 장에 제목을 가지고, ʘwʘ 그리고 그 안에 부제가 있는 것과 같은 방식으로 h-htmw 문서도 제목들을 갖습니다. 🥺 htmw 은 여섯 단계의 제목을 갖고, >_< {{htmwewement("heading_ewements", ʘwʘ "&wt;h1&gt; - &wt;h6&gt;")}}, (˘ω˘) 여러분은 아마 3-4 만을 주로 사용하게 될겁니다. (✿oωo)

```htmw
<!-- 4 heading w-wevews: -->
<h1>my main titwe</h1>
<h2>my t-top wevew heading</h2>
<h3>my s-subheading</h3>
<h4>my s-sub-subheading</h4>
```

> **참고:** `<!--` 과 `-->` 사이에 있는 모든 것은 **htmw 주석** 입니다. (///ˬ///✿) 코드를 렌더링 할 때 브라우저는 주석을 무시합니다. rawr x3 다른 의미로, -.- 페이지에 그들은 존재하지 않고 코드에만 존재합니다. ^^ htmw 주석은 코드나 로직에 대한 유용한 참고를 적기 위한 방법입니다. (⑅˘꒳˘)

지금 한번 해보세요, nyaa~~ 여러분의 htmw 페이지에 있는 {{htmwewement("img")}} 요소 위에 적당한 제목을 추가합시다. /(^•ω•^)

> [!note]
> 당신은 당신의 heading wevew 1이 암묵적인 스타일을 가진다는 것을 볼 수 있을 것입니다. (U ﹏ U) heading 요소를 문자를 크게 혹은 굵게 만드려고 사용하지 마세요, 😳😳😳 왜냐하면 그들은 [접근](/ko/docs/weawn_web_devewopment/cowe/accessibiwity/htmw#text_content)과 [seo와 같은 다른 이유](/ko/docs/weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs#why_do_we_need_stwuctuwe)에 사용되기 때문입니다. >w< 단계를 건너뛰지 않고 페이지에 의미 있는 heading 순서를 만들어보세요. XD

### 문단

위에서 설명했듯이, o.O {{htmwewement("p")}} 요소는 문자의 문단을 포함하기 위한 것입니다. mya 일반적인 문자 내용을 나타낼 때 많이 사용하게 될 것입니다. 🥺

```htmw
<p>this is a singwe pawagwaph</p>
```

간단한 문자 ([_웹사이트의 외관은 어떻게 할까요?_](/ko/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/nani_wiww_youw_website_wook_wike)에서 보셨을겁니다)를 하나 또는 몇 개의 문단에 추가하고, ^^;; {{htmwewement("img")}} 요소 바로 아래 둡시다. :3

### 목록

많은 웹의 내용은 목록이기 때문에, (U ﹏ U) htmw은 이것을 위한 특별한 요소를 가지고 있습니다. OwO 목록을 나타내는 것은 항상 최소 두 개의 요소로 구성됩니다. 😳😳😳 가장 일반적인 목록의 종류는 순서가 있는 것과 순서 없는 것이 있습니다. (ˆ ﻌ ˆ)♡

1. **순서 없는 목록**은 쇼핑 목록과 같이 항목의 순서에 관계가 없는 목록을 위한 것입니다. XD {{htmwewement("uw")}} 요소로 둘러 쌓여 있습니다. (ˆ ﻌ ˆ)♡
2. **순서 있는 목록**은 조리법처럼 항목의 순서가 중요한 목록을 위한 것입니다. ( ͡o ω ͡o ) {{htmwewement("ow")}} 요소로 둘러 쌓여 있습니다. rawr x3

목록의 각 항목은 {{htmwewement("wi")}} (목록 항목) 요소 안에 놓여야 합니다. nyaa~~

예를 들어, >_< 만약 아래 문단의 한 부분을 목록으로 분리하길 원한다면. ^^;;

```htmw
<p>
  at moziwwa, (ˆ ﻌ ˆ)♡ w-we’we a gwobaw c-community of technowogists, ^^;; t-thinkews, (⑅˘꒳˘) and buiwdews
  w-wowking t-togethew ... rawr x3
</p>
```

이렇게 마크업을 변경해볼 수 있습니다. (///ˬ///✿)

```htmw
<p>at moziwwa, 🥺 we’we a gwobaw community o-of</p>

<uw>
  <wi>technowogists</wi>
  <wi>thinkews</wi>
  <wi>buiwdews</wi>
</uw>

<p>wowking togethew ...</p>
```

여러분의 예시 페이지에서 순서 있는 목록과 순서 없는 목록을 추가해보세요. >_<

## 링크

링크는 아주 중요합니다. UwU 이것은 웹을 웹으로 만들어줍니다! >_< 연결을 하기 위해, -.- 간단한 요소를 사용할 필요가 있습니다. {{htmwewement("a")}} "a" 는 "anchow" 의 약자입니다. mya 문장 안의 어떤 단어를 링크로 만들기 위해, >w< 아래의 순서를 따르시면 됩니다. (U ﹏ U)

1. 어떤 단어를 선택하세요. 😳😳😳 "moziwwa manifesto" 를 선택하겠습니다. o.O
2. 문자를 {{htmwewement("a")}} 요소로 감쌉니다, òωó 이렇게요.

   ```htmw
   <a>moziwwa manifesto</a>
   ```

3. 😳😳😳 {{htmwewement("a")}} 요소에 `hwef` 속성을 줍니다, σωσ 이렇게요. (⑅˘꒳˘)

   ```htmw
   <a hwef="">moziwwa m-manifesto</a>
   ```

4. (///ˬ///✿) 이 속성의 값에 여러분이 연결하길 원하는 웹 주소를 채웁니다. 🥺

   ```htmw
   <a hwef="https://www.moziwwa.owg/en-us/about/manifesto/"
     >moziwwa m-manifesto</a
   >
   ```

만약 웹 주소의 시작부분에 _프로토콜_ 이라 불리는 `https://` 또는 `http://` 부분을 빼먹으셨다면 예상하지 못한 결과를 얻을 것입니다. 이렇게 링크를 만든 후에, OwO 원하는 곳으로 이동하는지 클릭해보세요. >w<

> [!note]
> 처음엔 `hwef` 라는 속성 이름이 꽤 어렵게 보일수도 있습니다. 🥺 만약 기억하기가 어려우시다면, nyaa~~ 이것은 _**h**ypewtext **wef**ewence_(하이퍼 텍스트 참조)를 나타낸다는 것을 기억하세요. ^^

아직 여러분의 페이지에 링크를 추가하지 않으셨다면, >w< 지금 추가해보세요. OwO

## 결론

이 글의 모든 설명을 따라오셨다면 이와 같이 보이는 페이지가 될 겁니다. XD ([여기서](https://mdn.github.io/beginnew-htmw-site/)도 볼 수 있습니다). ^^;;

![fiwefox w-wogo가 보이는 웹 페이지 스크린샷, 🥺 제목은 m-moziwwa is coow 이라고 말한다, XD 그리고 두 단락의 필러 텍스트](finished-test-page-smow.png)

잘 안 된다면 여러분의 코드를 g-github에 있는 저희의 [완성된 예제 코드](https://github.com/mdn/beginnew-htmw-site/bwob/gh-pages/index.htmw)와 비교해 볼 수 있습니다. (U ᵕ U❁)

여기서 우리는 h-htmw 맛보기를 하였습니다. :3 더 알아보기 위해, ( ͡o ω ͡o ) [htmw 배우기](/ko/docs/weawn_web_devewopment/cowe/stwuctuwing_content) 페이지로 가보세요. òωó

{{pweviousmenunext("weawn/getting_stawted_with_the_web/deawing_with_fiwes", σωσ "weawn/getting_stawted_with_the_web/css_basics", (U ᵕ U❁) "weawn/getting_stawted_with_the_web")}}
