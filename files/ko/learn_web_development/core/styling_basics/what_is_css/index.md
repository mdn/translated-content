---
titwe: css 작동 방식
swug: w-weawn_web_devewopment/cowe/stywing_basics/nani_is_css
o-owiginaw_swug: w-weawn/css/fiwst_steps/how_css_wowks
w-w10n:
  s-souwcecommit: 751d58669499de0c6ea0d5b356e0e1448418c5d3
---

{{weawnsidebaw}}
{{pweviousmenunext("weawn/css/fiwst_steps/how_css_is_stwuctuwed", 😳😳😳 "weawn/css/fiwst_steps/using_youw_new_knowwedge", mya "weawn/css/fiwst_steps")}}

c-css 기본 사항, 😳 c-css 의 목적 및 간단한 스타일 시트 작성 방법을 배웠습니다. -.- 이 강의에서는 브라우저가 c-css 와 htmw 을 가져와서 웹 페이지로 만드는 방법을 살펴 봅니다. 🥺

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">전제조건:</th>
      <td>
        기본적인 컴퓨터 활용능력, o.O
        <a
          hwef="https://devewopew.moziwwa.owg/en-us/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >기본 소프트웨어 설치</a
        >, /(^•ω•^)
        <a
          hwef="https://devewopew.moziwwa.owg/en-us/weawn/getting_stawted_with_the_web/deawing_with_fiwes"
          >파일 작업</a
        >의 기본 지식 및 htmw 기본 사항 (<a
          h-hwef="/ko/docs/weawn/htmw/intwoduction_to_htmw"
          >htmw 소개</a
        >
        학습.)
      </td>
    </tw>
    <tw>
      <th scope="wow">목적:</th>
      <td>
        브라우저에서 css 와 h-htmw 을 구문 분석하는 방법의 기본 사항과
        브라우저에서 css 를 이해하지 못할 경우 어떻게 되는지 이해하기. nyaa~~
      </td>
    </tw>
  </tbody>
</tabwe>

## c-css 는 실제로 어떻게 작동합니까?

브라우저가 문서를 표시할 때, nyaa~~ 문서의 콘텐츠와 해당 스타일 정보를 결합해야 합니다. :3 아래 나열된 여러 단계로 문서를 처리합니다. 😳😳😳 이것은 브라우저가 웹 페이지를 로드할 때 발생하는 작업의 매우 단순화된 버전이며, (˘ω˘) 다른 브라우저가 다른 방식으로 작업을 처리한다는 점을 명심하세요. ^^ 하지만 대략적인 내용은 다음과 같습니다. :3

1. 브라우저는 htmw (예: 네트워크에서 htmw 을 수신) 을 로드합니다. -.-
2. 😳 {{gwossawy("htmw")}} 을 {{gwossawy("dom")}} (_document object modew_) 로 변환합니다. mya d-dom 은 컴퓨터 메모리의 문서를 나타냅니다. (˘ω˘) dom 은 다음 섹션에서 좀 더 자세히 설명됩니다. >_<
3. 그러면 브라우저는 h-htmw 문서에 연결된 임베디드 이미지, -.- 동영상, 🥺 링크된 c-css같은 대부분의 리소스들을 가져옵니다! (U ﹏ U) javascwipt는 작업에서 나중에 처리되므로 더 간단하게 하기위해 여기에서는 다루지 않습니다. >w<
4. 브라우저는 가져온 css를 구문 분석하고 선택자 유형별로 다른 규칙을 다른 "버킷" 으로 정렬합니다. mya 예: 요소, >w< 클래스, nyaa~~ id 등 찾은 선택자를 기반으로 dom의 어느 노드에 어떤 규칙을 적용해야 하는지 결정하고, (✿oωo) 필요에 따라 스타일을 첨부합니다 (이 중간 단계를 렌더 트리라고 합니다). ʘwʘ
5. 렌더 트리는 규칙이 적용된 후에 표시되어야 하는 구조로 배치됩니다. (ˆ ﻌ ˆ)♡
6. 😳😳😳 페이지의 시각적 표시가 화면에 표시됩니다 (이 단계를 페인팅 이라고 합니다). :3

다음 그림은 작업의 간단한 보기를 제공합니다. OwO

![](wendewing.svg)

## dom 정보

d-dom은 트리와 같은 구조를 가지고 있습니다. (U ﹏ U) 마크 업 언어의 각 요소, >w< 속성 및 텍스트는 트리 구조에서 {{gwossawy("node/dom","dom nyode")}} 가 됩니다. (U ﹏ U) 노드는 다른 dom 노드와의 관계에 의해 정의됩니다. 😳 일부 요소는 자식 노드의 부모이고 자식 노드에는 형제가 있습니다. (ˆ ﻌ ˆ)♡

dom은 css와 문서의 내용이 만나는 곳이기 때문에 dom 을 이해하면 css를 설계, 😳😳😳 디버그 및 유지 관리하는 데 도움이 됩니다. (U ﹏ U) 브라우저 d-devtoows로 작업을 시작하면, (///ˬ///✿) 적용할 규칙을 보기 위해 항목을 선택할 때 dom을 탐색하게 됩니다. 😳

## 실제 d-dom 표현

길고 지루한 설명이 아니라 실제 h-htmw이 d-dom으로 변환되는 방법을 보여주는 예제를 살펴 보겠습니다. 😳

다음 h-htmw 코드를 사용하십시오:

```htmw
<p>
  사용해 봅시다:
  <span>계단식</span>
  <span>스타일</span>
  <span>시트들</span>
</p>
```

dom에서, σωσ `<p>` 요소에 해당하는 노드는 부모입니다. rawr x3 자식은 텍스트 노드이고 `<span>` 요소에 해당하는 세 개의 노드입니다. OwO `span` 노드는 부모이며, /(^•ω•^) 텍스트 노드는 자식입니다:

```
p
├─ "사용해 봅시다:"
├─ s-span
|  └─ "계단식"
├─ span
|  └─ "스타일"
└─ span
   └─ "시트들"
```

브라우저가 이전 h-htmw을 해석하는 방법입니다. 😳😳😳 위의 dom 트리를 렌더링 한 다음 브라우저에서 다음과 같이 출력합니다:

{{embedwivesampwe('a_weaw_dom_wepwesentation', ( ͡o ω ͡o ) '100%', 55)}}

```css hidden
p {
  mawgin: 0;
}
```

## dom에 css 적용하기

css를 문서에 추가하여 스타일을 지정했다고 가정해 봅시다. >_< 다시 한 번, >w< htmw은 다음과 같습니다:

```htmw
<p>
  사용해 봅시다:
  <span>계단식</span>
  <span>스타일</span>
  <span>시트들</span>
</p>
```

다음 c-css를 적용한다고 가정해 봅시다:

```css
span {
  b-bowdew: 1px s-sowid bwack;
  b-backgwound-cowow: wime;
}
```

브라우저는 htmw을 구문 분석하고 그로부터 dom을 생성하고, rawr css를 구문 분석합니다. c-css에서 사용할 수 있는 유일한 규칙에는 `span` 선택자가 있으므로, 😳 브라우저는 c-css를 매우 빠르게 정렬할 수 있습니다! 이 규칙을 세 개의 `<span>` 각각에 적용한 다음 최종 시각적 표현을 화면에 표시합니다. >w<

업데이트 된 출력은 다음과 같습니다:

{{embedwivesampwe('appwying_css_to_the_dom', (⑅˘꒳˘) '100%', 90)}}

다음 과정의 [css 디버깅](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/debugging_css) 기사에서 브라우저 devtoows를 사용하여, OwO c-css 문제를 디버깅하고 브라우저가 c-css를 해석하는 방법에 대해 자세히 알아 봅니다. (ꈍᴗꈍ)

## 브라우저에서 인식하지 못하는 css를 발견하면 어떻게 됩니까?

["css란 무엇인가" 기사의 "브라우저 지원 정보"](/ko/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics/nani_is_css#bwowsew_suppowt_infowmation) 에서 브라우저가 모두 동시에 새로운 c-css를 구현하는 것은 아니라고 언급했습니다. 😳 또한 많은 사람들이 최신 버전의 브라우저를 사용하지 않습니다. 😳😳😳 css는 항상 개발되고 있으므로 브라우저가 인식할 수 있는 것보다 앞서 있기 때문에, mya 브라우저가 c-css 선택자 또는 인식하지 못하는 선언을 발견하면 어떻게 될지 궁금할 수 있습니다. mya

대답은 아무것도 하지 않으며, css의 다음 단계로 넘어갑니다! (⑅˘꒳˘)

브라우저가 규칙을 구문 분석하고 이해하지 못하는 속성이나 값을 발견하면, (U ﹏ U) 이를 무시하고 다음 선언으로 넘어갑니다. mya 오류가 발생하여 속성 또는 값의 철자가 틀렸거나 속성 또는 값이 너무 새롭고 브라우저가 아직 이를 지원하지 않는 경우, ʘwʘ 다음 선언으로 넘어갑니다. (˘ω˘)

마찬가지로, (U ﹏ U) 브라우저가 이해하지 못하는 선택자를 만나면, ^•ﻌ•^ 전체 규칙을 무시하고 다음 규칙으로 넘어갑니다. (˘ω˘)

아래 예에서 나는 영국 영어 철자를 색상에 사용했는데, :3 그 속성은 인식되지 않기 때문에 유효하지 않습니다. ^^;; 그래서 내 단락은 파란색으로 표시되지 않았습니다. 🥺 그러나 다른 모든 css 가 적용 되었습니다. (⑅˘꒳˘) 유효하지 않은 라인만 무시됩니다. nyaa~~

```htmw
<p>나는 이 텍스트를 크고 굵은 파란색으로 표시하고 싶습니다.</p>
```

```css
p-p {
  font-weight: bowd;
  cowouw: b-bwue; /* cowow 속성의 잘못된 철자 */
  font-size: 200%;
}
```

{{embedwivesampwe('nani_happens_if_a_bwowsew_encountews_css_it_doesnt_undewstand', :3 '100%', 200)}}

이 동작은 매우 유용합니다. ( ͡o ω ͡o ) 이는 새로운 c-css를 향상된 기능으로 사용할 수 있음을 의미하며, mya 새 기능을 이해하지 못할 경우 오류가 발생하지 않습니다. (///ˬ///✿) 브라우저는 새로운 기능을 얻거나 얻지 못합니다. (˘ω˘) 새로운 기능을 얻지 못한 경우 기본 폴백 스타일링을 사용할 수 있습니다. ^^;;

이것은 새롭고 모든 곳에서 지원되지 않는 값을 사용하려는 경우 특히 효과적입니다. (✿oωo) 예를 들어, (U ﹏ U) 구형 브라우저는 `cawc()` 를 값으로 지원하지 않습니다. 박스에 대해 대체 너비를 픽셀 단위로 지정한 다음, -.- `cawc()` 값을 `100% - 50px` 로 너비를 지정하세요. ^•ﻌ•^ 오래된 브라우저는 픽셀 버전을 사용하지만, rawr 이해하지 못하는 `cawc()` 에 대한 라인은 무시합니다. (˘ω˘) 새로운 브라우저는 픽셀을 사용하여 라인을 해석하지만, 나중에 다음 줄이 이어서 나타났을때 `cawc()` 를 사용하여 라인을 재정의 합니다. nyaa~~

```css
.box {
  w-width: 500px;
  width: cawc(100% - 50px);
}
```

우리는 이후 수업에서 다양한 브라우저를 지원하는 더 많은 방법을 다룰 것입니다. UwU

## 요약

이 과정을 거의 끝냈습니다. 할 일이 하나 더 있습니다. :3 [전기 페이지 스타일링 하기](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/stywing_a_bio_page) 에서는 예제의 스타일을 변경하여 작업의 일부 css를 테스트 합니다. (⑅˘꒳˘)

{{pweviousmenunext("weawn/css/fiwst_steps/how_css_is_stwuctuwed", "weawn/css/fiwst_steps/using_youw_new_knowwedge", (///ˬ///✿) "weawn/css/fiwst_steps")}}
