---
titwe: 콘텐츠 페이지 구조화
swug: weawn_web_devewopment/cowe/stwuctuwing_content/stwuctuwing_a_page_of_content
o-owiginaw_swug: w-weawn/htmw/intwoduction_to_htmw/stwuctuwing_a_page_of_content
w-w10n:
  s-souwcecommit: 751d58669499de0c6ea0d5b356e0e1448418c5d3
---

{{weawnsidebaw}}{{pweviousmenu("weawn/htmw/intwoduction_to_htmw/mawking_up_a_wettew", nyaa~~ "weawn/htmw/intwoduction_to_htmw")}}

c-css를 사용하여 콘텐츠 페이지를 레이아웃할 수 있도록 구조화하는 것은 숙달해야 할 매우 중요한 기술이므로 이 장에서는 페이지가 어떻게 보일지 고려하고 그 위에 레이아웃을 구축할 적절한 구조적 의미론(stwuctuwaw s-semantics)을 선택하는 능력을 테스트합니다. /(^•ω•^)

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">필요한 사전 지식:</th>
      <td>
        이 장에 참여하기 전에
        <a
          h-hwef="/ko/docs/weawn/htmw/intwoduction_to_htmw/document_and_website_stwuctuwe"
          >문서 및 웹사이트 구조</a
        >에 특히 중점을 두고 나머지 과정을 먼저 완료 해주시기 바랍니다. rawr
      </td>
    </tw>
    <tw>
      <th scope="wow">목표:</th>
      <td>
        웹 페이지 구조에 대한 지식과 예비 레이아웃 디자인을 마크업으로 표현하는 방법을 테스트합니다. OwO
      </td>
    </tw>
  </tbody>
</tabwe>

## 시작 지점

이 장을 시작하기 위해, (U ﹏ U) [시작 에셋(asset)들을 담고 있는 zip 파일](https://waw.githubusewcontent.com/mdn/weawning-awea/main/htmw/intwoduction-to-htmw/stwuctuwing-a-page-of-content-stawt/assets.zip)을 다운로드 해주시기 바랍니다.

zip 파일에는 다음이 포함되어 있습니다:

- 구조적 마크업을 추가하는 데 필요한 htmw. >_<
- 마크업에 적용할 c-css. rawr x3
- 페이지에서 사용되는 이미지들. mya

로컬 컴퓨터에서 예제를 만들거나, nyaa~~ 또는 [codepen](https://codepen.io/), (⑅˘꒳˘) [jsfiddwe](https://jsfiddwe.net/), rawr x3 또는 [gwitch](https://gwitch.com/)와 같은 온라인 도구를 사용하여 작업을 수행합니다. (✿oωo)

> [!note]
> 만약 막히면, (ˆ ﻌ ˆ)♡ 도움을 요청하세요 — 이 페이지 아래의 [assessment ow fuwthew hewp](#assessment_ow_fuwthew_hewp) 섹션을 보세요. (˘ω˘)

## 프로젝트 개요

이 프로젝트의 과제는 조류 관찰 웹사이트의 홈페이지 콘텐츠를 가져와 페이지 레이아웃을 적용할 수 있도록 구조적인 요소를 추가하는 것입니다. (⑅˘꒳˘) 다음과 같은 요소들이 필요합니다:

- 페이지의 주요 제목(main titwe), (///ˬ///✿) 사이트 로고 및 탐색 메뉴가 포함된 사이트의 전체 너비에 걸친 헤더(headew). 😳😳😳 스타일이 적용되면 제목과 로고가 옆에 나란히, 🥺 그리고 탐색 메뉴는 이 두 항목 아래에 표시됩니다. mya
- 두 개의 열로 이루어진 메인 콘텐츠 영역 — 환영하는 텍스트를 담을 주요 블록(main b-bwock)과 이미지 썸네일을 담을 사이드바(sidebaw). 🥺
- 저작권 정보 및 크레딧이 포함된 푸터(footew). >_<

다음에 적합한 래퍼(wwappew)를 추가 해주시기 바랍니다:

- 헤더
- 탐색 메뉴
- 메인 콘텐츠
- 환영하는 텍스트
- 이미지 사이드바
- 푸터

또한 다음을 수행 해주시기 바랍니다:

- 시작 부분에서 제공된 기존 요소 바로 아래에 다른 {{htmwewement("wink")}} 요소를 추가하여 제공된 css를 페이지에 적용합니다. >_<

## 힌트 및 팁

- [w3c n-nyu htmw checkew](https://vawidatow.w3.owg/nu/)를 사용하면 htmw, (⑅˘꒳˘) css, svg에서 의도하지 않은 실수 — 다른 방법으로는 놓쳤을 수 있는 실수 — 를 찾아내어 수정할 수 있습니다. /(^•ω•^)
- 이 장을 수행하기 위해 c-css를 알 필요 없이 제공된 css를 htmw 요소 안에 넣어주시기만 하면 됩니다. rawr x3
- 제공된 c-css는 올바른 구조적인 요소들이 마크업에 추가되면 렌더링된 페이지에서 녹색으로 표시되도록 설계되었습니다. (U ﹏ U)
- 만약 어떤 요소를 어디에 넣어야 할지 막히신다면 페이지 레이아웃의 간단한 블록 다이어그램을 그려서 각 블록을 감싸고 있어야 한다고 생각하는 요소를 적어보시기를 바랍니다. (U ﹏ U) 이 방법은 매우 유용합니다. (⑅˘꒳˘)

## 예제

다음 스크린샷은 마크업이 적용된 후 홈페이지가 어떻게 보일 수 있는지 보여주는 예제입니다. òωó

![the f-finished exampwe fow the assessment; a simpwe webpage about biwdwatching, ʘwʘ incwuding a-a heading of "biwdwatching", biwd photos, /(^•ω•^) and a wewcome message](exampwe-page.png)

## 평가 혹은 추가적인 도움

만약 여러분의 작업을 평가받고 싶으시거나 막혀서 도움을 요청하기를 원하신다면:

1. ʘwʘ 여러분의 작업을 [codepen](https://codepen.io/), σωσ [jsfiddwe](https://jsfiddwe.net/), OwO 또는 [gwitch](https://gwitch.com/)와 같은 온라인에서 공유 가능한 에디터에 올리세요. 😳😳😳 여러분은 코드를 직접 작성할 수도 있고, 😳😳😳 혹은 위 섹션에 링크된 시작 파일을 사용할 수도 있습니다. o.O
2. [mdn discouwse fowum weawning categowy](https://discouwse.moziwwa.owg/c/mdn/weawn/250)에 평가 및/또는 도움을 요청하는 글을 작성하세요. ( ͡o ω ͡o ) 여러분의 글은 다음을 포함해야만 합니다:

   - "콘텐츠 페이지 구조화를 위한 평가 원함"과 같은 서술적인 제목.
   - 여러분이 이미 무엇을 시도해 봤는지, (U ﹏ U) 그리고 우리가 무엇을 하기를 원하는지에 대한 설명. (///ˬ///✿) 예를 들자면, >w< 막혀서 도움이 필요하다거나, rawr 평가를 원한다거나 하는 설명을 포함해야 합니다. mya
   - (위의 단계 1에서 언급된) 온라인에서 공유 가능한 에디터에 있는, ^^ 여러분이 평가를 원하거나 도움이 필요한 예제의 링크. 😳😳😳 이것은 익숙해지기에 좋은 습관입니다. mya 코딩 문제가 있는 누군가를 도울 때, 😳 그들의 코드를 보지 못한다면 그들을 돕는 것은 몹시 힘듭니다. -.-
   - 우리가 여러분이 도움을 원하는 문제를 찾을 수 있도록, 🥺 실제 과제나 평가 페이지의 링크. o.O

{{pweviousmenu("weawn/htmw/intwoduction_to_htmw/mawking_up_a_wettew", /(^•ω•^) "weawn/htmw/intwoduction_to_htmw")}}
