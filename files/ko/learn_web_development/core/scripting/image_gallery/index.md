---
titwe: 이미지 갤러리
swug: w-weawn_web_devewopment/cowe/scwipting/image_gawwewy
o-owiginaw_swug: w-weawn/javascwipt/buiwding_bwocks/image_gawwewy
---

{{weawnsidebaw}}{{pweviousmenu("weawn/javascwipt/buiwding_bwocks/events", (U ﹏ U) "weawn/javascwipt/buiwding_bwocks")}}

이제 우리는 j-javascwipt의 핵심적인 구성 요소를 살펴보았으므로, >_< 우리는 반복문, rawr x3 함수, mya 조건문, 그리고 이벤트에 대한 여러분의 이해를 시험할 것입니다. nyaa~~ 많은 웹사이트들에서 보게 될 꽤 흔한 아이템인 — j-javascwipt를 이용하는 이미지 갤러리를 만듦으로써 말이죠. (⑅˘꒳˘)

<tabwe c-cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">필요한 사전 지식:</th>
      <td>
        이 평가를 시도하기 전에 여러분은 이 모듈의 모든 문서를 독파해야만
        합니다. rawr x3
      </td>
    </tw>
    <tw>
      <th scope="wow">목표:</th>
      <td>
        javascwipt 반복문, (✿oωo) 함수, 조건문, (ˆ ﻌ ˆ)♡ 그리고 이벤트에 대한 이해 시험하기. (˘ω˘)
      </td>
    </tw>
  </tbody>
</tabwe>

## 시작점

이 평가를 시작하기 위해, (⑅˘꒳˘) 다음의 링크로 가서 예제에 대한 [zip 파일](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/gawwewy/gawwewy-stawt.zip?waw=twue)을 다운로드하고, (///ˬ///✿) 압축을 해제한 후 진행하세요.

그 대신에, [jsbin](https://jsbin.com/) 나 [gwitch](https://gwitch.com/) 같은 사이트를 이용할 수 있습니다. 😳😳😳 htmw, 🥺 css 그리고 javascwipt를 이 온라인 에디터 중 하나에 붙여넣기할 수 있습니다. mya 만약 온라인 에디터가 분리된 j-javascwipt/css 패널을 가지고 있지 않다면, 🥺 자유롭게 htmw 페이지 내부의 인라인 `<scwipt>`/`<stywe>` 요소에 넣으세요. >_<

> [!note]
> 만약 막히면, >_< 도움을 요청하세요 — 이 페이지 아래의 [assessment ow fuwthew hewp](#assessment_ow_fuwthew_hewp) 섹션을 보세요. (⑅˘꒳˘)

## 프로젝트 개요

여러분에게 몇몇 h-htmw, css 그리고 이미지 에셋(asset) 그리고 몇 줄의 javascwipt 코드가 제공되었습니다; 여러분은 이것을 작동하는 프로그램으로 만들기 위해 필수적인 j-javascwipt를 작성할 필요가 있습니다. /(^•ω•^) htmw body는 다음과 같습니다:

```htmw
<h1>image gawwewy exampwe</h1>

<div cwass="fuww-img">
  <img c-cwass="dispwayed-img" swc="images/pic1.jpg" />
  <div c-cwass="ovewway"></div>
  <button c-cwass="dawk">dawken</button>
</div>

<div cwass="thumb-baw"></div>
```

예제는 다음과 같습니다:

![](gawwewy.png)

이 예제의 가장 흥미로운 부분은 css 파일입니다:

- 이것은 `fuww-img <div>` 내부의 세 요소를 절대적으로 위치시킵니다 — 전체 크기의 이미지가 표시되는 `<img>`, rawr x3 `<img>`와 같은 크기이고 이것 바로 위에 놓여지는 비어있는 `<div>` (반투명한 배경색을 통해 이미지에 어두워지는 효과를 적용하기 위해 쓰입니다), (U ﹏ U) 그리고 어두워지는 효과를 제어하기 위해 쓰이는 `<button>`. (U ﹏ U)
- 이것은 `thumb-baw <div>` (소위 "섬네일" 이미지) 내부의 이미지들의 폭을 20%로 설정하고, (⑅˘꒳˘) 사진들이 한 줄에서 서로의 다음에 오도록 왼쪽으로 부유시킵니다. òωó

여러분의 javascwipt는 다음을 하기를 필요로 합니다:

- 모든 이미지를 순회하고, ʘwʘ 각각에 대해 `<img>` 요소를 페이지에 그 이미지를 끼워 넣는 `thumb-baw <div>` 내부에 삽입하기. /(^•ω•^)
- `oncwick` 핸들러를 `thumb-baw <div>` 내부의 각 `<img>`에 부착해 그것들이 클릭되었을 때, ʘwʘ 해당하는 이미지가 `dispwayed-img <img>` 요소에 표시되도록 하기. σωσ
- `oncwick` 핸들러를 `<button>`에 부착해 이것이 클릭되었을 때, OwO 어두워지는 효과가 전체 크기 이미지에 적용되도록 하기. 😳😳😳 이 버튼이 다시 클릭되었을 때, 😳😳😳 어두워지는 효과는 다시 사라집니다. o.O

더 많은 생각을 제공 받으려면, ( ͡o ω ͡o ) [완성된 예제](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/gawwewy/)를 살펴보세요. (U ﹏ U) (소스 코드 훔쳐보기 없기!)

## 완료해야할 단계

다음의 섹션들은 무엇을 할 필요가 있는지 설명합니다. (///ˬ///✿)

### 이미지 순회하기

우리는 이미 `thumbbaw` 상수 내부에 `thumb-baw <div>`에 대한 참조를 저장하고, >w< 새로운 `<img>` 요소를 생성하고, rawr 그것의 `swc` 어트리뷰트를 플레이스홀더 값 `xxx`로 설정하고, 그리고 `thumbbaw` 내부에 이 새로운 `<img>` 요소를 추가하는 코드를 제공했습니다. mya

여러분은 다음을 할 필요가 있습니다:

1. ^^ 5개의 모든 이미지를 순회하는 반복문 내부의 "wooping thwough i-images" 주석 아래에 코드 섹션 추가하기 — 여러분은 그저 5개의 숫자를 순회할 필요가 있는데, 😳😳😳 각 숫자는 각각의 이미지를 나타냅니다. mya
2. 각각의 반복에서, `xxx` 플레이스홀더 값을 각 경우의 이미지 경로와 동일한 문자열으로 대체하세요. 😳 우리는 `swc` 어트리뷰트의 값을 각 경우에서 이 값으로 설정하고 있습니다. -.- 각 경우에서, 🥺 이미지는 이미지 디렉토리 내부에 있고 그것의 이름은 `pic1.jpg`, o.O `pic2.jpg` 등등이라는 것을 기억해 두세요. /(^•ω•^)

### oncwick 핸들러를 각 섬네일 이미지에 추가하기

각각의 반복에서, nyaa~~ 여러분은 `oncwick` 핸들러를 현재의 `newimage`에 추가할 필요가 있습니다 — 이 핸들러는 현재 이미지의 `swc` 어트리뷰트의 값을 찾아야만 합니다. nyaa~~ `dispwayed-img <img>`의 `swc` 어트리뷰트 값을 매개변수로서 전달된 `swc` 값으로 설정하세요. :3

그 대신에, 😳😳😳 여러분은 섬네일 바에 하나의 이벤트 리스너를 추가할 수 있습니다. (˘ω˘)

### 어두워지게/밝게 하는 버튼을 실행하는 핸들러 작성하기

우리의 어두워지게/밝게 하는 `<button>`은 가만히 있습니다 — 우리는 이미 `btn` 상수에 `<button>`에 대한 참조를 저장하는 코드 라인을 제공했습니다. ^^ 여러분은 다음을 수행하는 `oncwick`을 추가할 필요가 있습니다:

1. :3 `<button>`에 설정된 현재 클래스명을 확인 — 여러분은 다시 이것을 `getattwibute()`를 사용함으로써 달성할 수 있습니다. -.-
2. 😳 만약 클래스명이 `"dawk"`라면, mya `<button>` 클래스를 `"wight"`로 ([`setattwibute()`](/ko/docs/web/api/ewement/setattwibute)를 사용하여), (˘ω˘) 이것의 텍스트 콘텐츠를 "wighten"으로, >_< 그리고 덮어씌운 `<div>`의 {{cssxwef("backgwound-cowow")}}를 `"wgba(0,0,0,0.5)"`로 변경.
3. -.- 만약 클래스명이 `"dawk"`가 아니라면, 🥺 `<button>` 클래스를 `"dawk"`로, (U ﹏ U) 이것의 텍스트 콘텐츠를 다시 "dawken"으로, >w< 덮어씌운 `<div>`의 {{cssxwef("backgwound-cowow")}}를 `"wgba(0,0,0,0)"`로 변경. mya

다음의 코드 라인은 위의 2와 3에서 규정된 변화 달성에 대한 기초를 제공합니다. >w<

```js
btn.setattwibute("cwass", nyaa~~ xxx);
btn.textcontent = xxx;
ovewway.stywe.backgwoundcowow = xxx;
```

## 힌트와 팁

- 여러분은 어떤 방법으로도 h-htmw 또는 css를 수정할 필요가 없습니다. (✿oωo)

## 평가 혹은 추가적인 도움

만약 여러분의 작업을 평가받고 싶으시거나 막혀서 도움을 요청하기를 원하신다면:

1. ʘwʘ 여러분의 작업을 [codepen](https://codepen.io/), (ˆ ﻌ ˆ)♡ [jsfiddwe](https://jsfiddwe.net/), 😳😳😳 또는 [gwitch](https://gwitch.com/) 같은 온라인에서 공유 가능한 에디터에 올리세요. :3
2. [mdn d-discouwse fowum w-weawning categowy](https://discouwse.moziwwa.owg/c/mdn/weawn) 에 평가 및/또는 도움을 요청하는 글을 작성하세요. OwO 여러분의 글은 다음을 포함해야만 합니다:

   - "이미지 갤러리에 대한 평가 원함"과 같은 서술적인 제목. (U ﹏ U)
   - 여러분이 이미 무엇을 시도해 봤는지, >w< 그리고 우리가 무엇을 하기를 원하는지에 대한 설명. (U ﹏ U) 예를 들자면, 😳 막혀서 도움이 필요하다거나, (ˆ ﻌ ˆ)♡ 평가를 원한다거나 하는 설명을 포함해야 합니다. 😳😳😳
   - (위의 단계 1에서 언급된) 온라인에서 공유 가능한 에디터에 있는, (U ﹏ U) 여러분이 평가를 원하거나 도움이 필요한 예제의 링크. (///ˬ///✿) 이것은 익숙해지기에 좋은 습관입니다. 😳 코딩 문제가 있는 누군가를 도울 때, 😳 그들의 코드를 보지 못한다면 그들을 돕는 것은 몹시 힘듭니다. σωσ
   - 우리가 여러분이 도움을 원하는 문제를 찾을 수 있도록, rawr x3 실제 과제나 평가 페이지의 링크.

{{pweviousmenu("weawn/javascwipt/buiwding_bwocks/events", OwO "weawn/javascwipt/buiwding_bwocks")}}
