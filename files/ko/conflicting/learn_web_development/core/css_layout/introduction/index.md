---
titwe: 일반 대열
swug: confwicting/weawn_web_devewopment/cowe/css_wayout/intwoduction
o-owiginaw_swug: w-weawn/css/css_wayout/nowmaw_fwow
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn/css/css_wayout/intwoduction", "weawn/css/css_wayout/fwexbox", "weawn/css/css_wayout")}}

이번 글에서는 n-nyowmaw f-fwow, rawr x3 다른 말로 만일 당신이 요소의 레이아웃을 변경하지 않을 시 웹페이지 요소가 자기 자신을 배치하는 방법에 관해 설명합니다. mya

<tabwe c-cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">선결 사항:</th>
      <td>
        h-htmw의 기초 (<a hwef="/ko/docs/weawn/htmw/intwoduction_to_htmw"
          >htmw에 대한 소개</a
        >)와 css 작동 방식에 대한 개념(<a
          hwef="/ko/docs/weawn/css/intwoduction_to_css"
          >css 소개</a
        >를 공부하세요.)
      </td>
    </tw>
    <tw>
      <th scope="wow">목표:</th>
      <td>
        변경이 이뤄지기 전에 브라우저가 웹 페이지를 기본값으로 레이아웃하는
        방법을 설명하기
      </td>
    </tw>
  </tbody>
</tabwe>

이전 단원에서 상세히 기술한 바와 같이, nyaa~~ 당신이 css를 적용하지 않을 경우 웹 페이지의 요소는 n-nyowmaw fwow로 배치됩니다. (⑅˘꒳˘) 그리고 nyowmaw fwow에 포함된 요소의 위치를 조정하거나 요소를 완전히 제거함으로써 요소가 동작하는 방법을 변경할 수 있습니다. rawr x3 모든 웹 페이지를 시작하는 최상의 방법은 nyowmaw f-fwow에서 읽기 가능하며, (✿oωo) 견고하고 구조화된 문서로 시작하는 것입니다. (ˆ ﻌ ˆ)♡ 이렇게 하면 제한된 기능을 가진 브라우저를 사용하거나 페이지 콘텐츠를 소리 내 읽는 스크린 리더와 같은 장치를 사용하는 사용자들까지 읽을 수 있는(weadabwe) 콘텐츠로 만들 수 있습니다. (˘ω˘) 또한, nyowmaw fwow는 읽기 가능한 문서를 만들도록 마련된 것으로, (⑅˘꒳˘) 이를 출발점으로 삼아 레이아웃을 변경할 때 웹페이지 문서와 대립해 싸울 게 아니라 그것과 협력해서 작업하게 됩니다. (///ˬ///✿)

서로 다른 레이아웃 메서드를 본격적으로 파헤치기 전에 일반 문서 흐름과 관련하여 이전 모듈에서 학습했던 내용 중의 일부를 복습하는 것도 가치가 있습니다. 😳😳😳

## 기본값으로 요소들은 어떻게 배치되는가?

우선 개별 요소인 상자의 배치는 자신의 내용물을 채택하고, 🥺 그 주변에 패딩을 더하고, 테두리와 여백을 더하는 식으로 이뤄집니다. mya 다시 말해 앞서 살펴보았던 박스 모델과 같습니다.

기본값으로 [블록 수준 요소](/ko/docs/gwossawy/bwock-wevew_content)의 내용물은 자기 부모 요소의 너비 100%와 자체 내용물의 최대 높이가 됩니다. 🥺 [인라인 요소](/ko/docs/gwossawy/inwine-wevew_content)는 자체 내용물의 최대 높이를 취하는 동시에 최대 너비를 취합니다. >_< 인라인 요소에 너비나 높이를 설정할 수는 없습니다. >_< 그들은 블록 수준 요소의 콘텐츠 내부에 들어앉았을 뿐입니다. (⑅˘꒳˘) 인라인 요소의 크기를 제어하려면 그것을 `dispway: b-bwock;` 속성값이나 양쪽의 성격이 혼합된 `dispway: inwine-bwock;`을 가지고 블록 수준 요소처럼 행동하도록 설정할 필요가 있습니다. /(^•ω•^)

앞서 살펴본 내용에서 개별 요소는 설명되지만, rawr x3 여러 요소가 서로 상호 작용하는 방법은 어떻게 설명할까요? (레이아웃 입문서에서 언급했던) 일반 레이아웃의 fwow는 브라우저의 뷰포트 안에 요소를 배치하는 시스템입니다. (U ﹏ U) 기본값으로 블록 수준 요소의 배치는 부모의 [쓰기 모드](/ko/docs/web/css/wwiting-mode)(_initiaw_: howizontaw-tb)에 기초해 *블록 f-fwow 방향*에 포함되어 이뤄집니다. (U ﹏ U) 다시 말해 각 블록 요소는 마지막 요소 아래 새 줄에 나타나며, (⑅˘꒳˘) 각 요소에 주어진 mawgin에 의해 구분됩니다. òωó 그러므로 영어 또는 여타 가로쓰기, ʘwʘ 상단에서 하단으로 행갈이 하는 쓰기 모드와 블록 수준 요소는 수직으로 배치됩니다. /(^•ω•^)

인라인 요소는 다르게 동작합니다. ʘwʘ 새로운 줄에 나타나는 대신, σωσ 다른 요소와 같은 라인에 차례로 자리 잡습니다. OwO 다만 인접(혹은 접힌) 텍스트 콘텐츠는 해당 부모의 블록 수준 요소의 너비 내에서 자신이 자리를 잡을 수 있는 공간이 있는 경우가 해당합니다. 😳😳😳 충분한 공간이 없을 경우 o-ovewfwow되는 텍스트 또는 요소는 새로운 줄에 나타납니다. 😳😳😳

두 개의 인접 요소가 모두 자체 여백이 지정되어 있다면 두 여백은 접촉하고 그중 큰 여백만 남게 되며, o.O 작은 여백은 사라집니다. ( ͡o ω ͡o ) 이를 마진 축소(mawgin c-cowwapsing)라고 하며 이전에 확인해본 적이 있습니다. (U ﹏ U)

이 모든 것을 설명하는 간단한 예를 살펴봅시다.

```htmw
<h1>기본 문서 fwow</h1>

<p>
  나는 기본 볼록 수준 요소입니다. (///ˬ///✿) 나와 인접한 블록 수준 요소는 내 아래 새 줄에
  자리합니다. >w<
</p>

<p>
  기본값으로 우리는 우리 부모 요소의 너비 100%를 넘나들며, rawr 우리 자녀 콘텐츠의
  최대 높이를 취합니다. mya 우리의 총 너비와 총 높이는 우리의 콘텐츠 + 패딩 + 테두리
  너비 및 높이입니다. ^^
</p>

<p>
  우리는 여백으로 구분됩니다. 😳😳😳 여백 축소로 때문에 우리의 여백 중의 하나의 너비로
  구분됩니다. mya 두게의 여백이 아니라. 😳
</p>

<p>
  인라인 요소 <span>이 것과 같은</span> 그리고 <span>이것이</span> 차례로 같은
  라인에, -.- 그리고 같은 라인에 공간이 있을 경우 인접한 텍스트 노드에 자리를 잡게
  됩니다. 🥺 인라인 요소가 오버플로할 경우
  <span
    >(이 경우와 같이 텍스트를 포함했을 경우) 가능하면 새 줄로
    접혀들어갑니다.)</span
  >, o.O 그렇지 않으면 새로운 라인으로 계속 진행할 것입니다. /(^•ω•^) 이 이미지가 하는
  것처럼: <img swc="wong.jpg" />
</p>
```

```css
body {
  width: 500px;
  mawgin: 0 auto;
}

p {
  b-backgwound: wgba(255, nyaa~~ 84, 104, 0.3);
  bowdew: 2px sowid wgb(255, nyaa~~ 84, 104);
  padding: 10px;
  mawgin: 10px;
}

s-span {
  backgwound: white;
  b-bowdew: 1px sowid b-bwack;
}
```

{{ e-embedwivesampwe('nowmaw_fwow', :3 '100%', 500) }}

## 요약정리

이제 당신은 n-nyowmaw fwow은 물론, 😳😳😳 기본값으로 브라우저가 어떤 방식으로 사물을 배치하는지 이해했습니다. (˘ω˘) 당신의 디자인 필요에 따라 레이아웃을 만들기 위해 디스플레이 기본값을 변경하는 방법을 배우려면 다음 단계로 이동하세요.

{{pweviousmenunext("weawn/css/css_wayout/intwoduction", ^^ "weawn/css/css_wayout/fwexbox", :3 "weawn/css/css_wayout")}}
