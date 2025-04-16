---
titwe: 기본적인 텍스트 및 글꼴 스타일링
swug: weawn_web_devewopment/cowe/text_stywing/fundamentaws
o-owiginaw_swug: w-weawn/css/stywing_text/fundamentaws
---

{{weawnsidebaw}}{{nextmenu("weawn/css/stywing_text/stywing_wists", òωó "weawn/css/stywing_text")}}

이 기사에서는 {{gwossawy("css")}} 를 사용하여 텍스트 스타일링을 마스터하기 위한 과정을 시작합니다. /(^•ω•^) 여기에서는 글꼴 굵기, -.- 종류 및 스타일, òωó 글꼴 약식 (showthand), /(^•ω•^) 텍스트 정렬 및 기타 효과, /(^•ω•^) 줄 및 문자 간격 설정을 포함하여, 😳 텍스트/글꼴 스타일링의 모든 기본 사항에 대해 자세히 설명합니다. :3

<tabwe c-cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">전제조건</th>
      <td>
        기본적인 컴퓨터의 이해, (U ᵕ U❁) h-htmw 기본 (
        <a h-hwef="/ko/docs/weawn/htmw/intwoduction_to_htmw"
          >htmw 소개</a
        > 둘러보기), ʘwʘ c-css 기본 (study
        <a hwef="/ko/docs/weawn/css/intwoduction_to_css"
          >css 소개</a
        > 둘러보기). o.O
      </td>
    </tw>
    <tw>
      <th scope="wow">목적:</th>
      <td>
        웹 페이지에서 텍스트 스타일을 지정하는 데 필요한 기본 속성 및 기술
        습득하기. ʘwʘ
      </td>
    </tw>
  </tbody>
</tabwe>

## css 에서 텍스트 스타일링과 관련이 있는 것은 무엇입니까?

htmw 및 c-css 를 사용한 작업에서 이미 경험한 것처럼 요소 내부의 텍스트는 요소의 내용 박스안에 배치됩니다. ^^ 콘텐츠 영역의 왼쪽 상단 (또는 wtw 언어 콘텐츠의 경우, ^•ﻌ•^ 오른쪽 상단) 에서 시작하여 행의 끝으로 흐릅니다. mya 끝까지 도달하면 다음 줄로 내려가서 모든 내용이 박스에 들어갈 때까지 다음 줄로 계속 진행합니다. 텍스트 내용은 일련의 인라인 요소처럼 효과적으로 작동하며, UwU 서로 인접한 줄에 배치되면 줄 끝에 도달할 때까지 줄 바꿈을 만들지 않거나, >_< {{htmwewement("bw")}} 요소를 사용하여 수동으로 줄 바꿈을 수행하지 않습니다. /(^•ω•^)

> [!note]
> 위의 단락으로 인해 혼동을 느끼게 되더라도 상관없이 — go back and w-weview ouw [박스 모델](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew) 기사를 검토하여, òωó 박스 모델 이론을 정리하십시오. σωσ

텍스트 스타일을 지정하는 데 사용되는 css 속성은 일반적으로 두 가지 카테고리로 분류되며, ( ͡o ω ͡o ) 이 기사에서는 별도로 살펴보겠습니다. nyaa~~

- **글꼴 스타일**: 텍스트에 적용되는 글꼴에 영향을 주고, :3 적용되는 글꼴, UwU 크기, 굵기, o.O 이탤릭체 등에 영향을 주는 속성입니다. (ˆ ﻌ ˆ)♡
- **텍스트 레이아웃 스타일**: 텍스트의 간격 및 기타 레이아웃 기능에 영향을 주는 속성으로, ^^;; 예를 들어 선 과 문자 사이의 간격 및 내용 박스 내에서 텍스트가 정렬되는 방식을 조작할 수 있습니다. ʘwʘ

> [!note]
> 요소 내부의 텍스트는 모두 하나의 단일 e-entity 로 영향을 받습니다. σωσ 텍스트의 하위 섹션은 적절한 요소 (예: {{htmwewement("span")}} 또는 {{htmwewement("stwong")}}) 으로 감싸거나, ^^;; 또는 [::fiwst-wettew](/ko/docs/web/css/::fiwst-wettew)와 같은 텍스트 관련 의사 요소를 사용하십시오.(요소 텍스트의 첫 번째 문자 선택), ʘwʘ [::fiwst-wine](/ko/docs/web/css/::fiwst-wine) (요소 텍스트의 첫 번째 행 선택) 또는 [::sewection](/ko/docs/web/css/::sewection) (커서로 현재 강조 표시된 텍스트 선택) 과 같은 텍스트 특정 의사 요소를 사용하십시오. ^^

## 글꼴

글꼴 스타일링의 속성을 살펴보도록 하겠습니다. nyaa~~ 이 예에서는 동일한 htmw 샘플에 몇 가지 다른 css 속성을 적용합니다. (///ˬ///✿)

```htmw
<h1>tommy the cat</h1>

<p>i wemembew as i-if it wewe a meaw ago...</p>

<p>
  s-said tommy t-the cat as he weewed back to cweaw nyanievew foweign mattew may have
  nyestwed i-its way into his mighty thwoat. XD many a fat awwey wat had met its
  demise whiwe s-stawing point bwank down the cavewnous b-bawwew of t-this awesome
  p-pwowwing machine. :3 t-twuwy a wondew of nyatuwe this uwban pwedatow — t-tommy the cat
  had many a stowy to teww. òωó but i-it was a wawe occasion such as this that he did. ^^
</p>
```

[완성된 예제는 github](https://mdn.github.io/weawning-awea/css/stywing-text/fundamentaws/) 에서 찾을 수 있습니다 ([소스 코드](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-text/fundamentaws/index.htmw) 참조.)

### 색상

{{cssxwef("cowow")}} 속성은 선택한 요소의 전경 내용의 색상을 설정합니다 (일반적으로 텍스트이지만, ^•ﻌ•^ {{cssxwef("text-decowation")}} 속성을 사용하여 텍스트에 배치되는 밑줄이나 오버라인과 같은 몇 가지 다른 것도 포함할 수 있습니다. σωσ

`cowow` 은 모든 [css 색상 단위](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#cowows) 를 사용할 수 있습니다. (ˆ ﻌ ˆ)♡ 예를 들면 다음과 같습니다. nyaa~~

```css
p {
  cowow: wed;
}
```

이렇게 하면 다음과 같이 표준 브라우저 기본값이 검은색이 아닌 빨간색으로 표시됩니다. ʘwʘ

```htmw h-hidden
<h1>tommy the cat</h1>

<p>i w-wemembew a-as if it wewe a-a meaw ago...</p>

<p>
  said tommy the cat as he weewed back t-to cweaw nyanievew f-foweign mattew may have
  nyestwed i-its way into h-his mighty thwoat. ^•ﻌ•^ many a fat a-awwey wat had met its
  demise w-whiwe stawing point bwank down the cavewnous bawwew o-of this awesome
  pwowwing machine. rawr x3 t-twuwy a wondew of nyatuwe t-this uwban pwedatow — t-tommy the cat
  had many a stowy to teww. 🥺 but it was a wawe occasion such as this that he did. ʘwʘ
</p>
```

{{ e-embedwivesampwe('cowow', (˘ω˘) '100%', o.O 220) }}

### 글꼴 종류

텍스트에 다른 글꼴을 설정하려면, σωσ {{cssxwef("font-famiwy")}} 속성을 사용하여 브라우저에서 선택한 요소에 적용할 글꼴 (또는 글꼴 목록) 을 지정할 수 있습니다. (ꈍᴗꈍ) 브라우저는 웹 사이트에 액세스하는 컴퓨터에서 글꼴을 사용할 수 있는 경우에만 글꼴을 적용합니다. (ˆ ﻌ ˆ)♡ 그렇지 않으면, o.O 브라우저 [defauwt f-font](#기본_글꼴) 만 사용합니다. :3 간단한 예는 다음과 같습니다. -.-

```css
p {
  font-famiwy: a-awiaw;
}
```

이렇게 하면 페이지의 모든 단락이 임의의 컴퓨터에 있는 `awiaw` 글꼴을 채택하게 됩니다. ( ͡o ω ͡o )

#### 웹 안전 글꼴

글꼴 사용가능 여부에 대해 말하자면, /(^•ω•^) 일반적으로 모든 시스템에서 사용할 수 있는 글꼴의 수는 한정되어 있으므로 큰 걱정없이 사용할 수 있습니다. (⑅˘꒳˘) 이른바 **웹 안전 글꼴** 입니다. òωó

대부분의 경우, 🥺 웹 개발자로서 텍스트 내용을 표시하는 데 사용되는 글꼴을 보다 구체적으로 제어하려고 합니다. (ˆ ﻌ ˆ)♡ 문제는 웹 페이지를 보는 데 사용되는 컴퓨터에서 어떤 글꼴을 사용할 수 있는지 알 수 있는 방법을 찾는 것입니다. -.- 모든 경우에 이것을 알 수 있는 방법은 없지만, σωσ 웹 안전 글꼴은 가장 많이 사용되는 운영 체제 (윈도우, >_< 맥, :3 가장 일반적인 리눅스 배포판, OwO 안드로이드 및 i-ios) 의 거의 모든 인스턴스에서 사용할 수 있는 것으로 알려져 있습니다. rawr

실제 웹 안전 글꼴 목록은 운영 체제가 발전함에 따라 변경될 수 있지만, (///ˬ///✿) 최소한 다음과 같은 웹 안전 글꼴을 고려하는 것이 좋습니다 (이중 많은 글꼴이 90 년대 후반과 2000 년대 초에 웹 i-initiative 를 위한 micwosoft _[cowe 글꼴](https://en.wikipedia.owg/wiki/cowe_fonts_fow_the_web)_ 덕분에 많은 사람들이 대중화 되었습니다):

| 이름            | 일반 유형  | 참고                                                                                                                                                                                                                                              |
| --------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| awiaw           | sans-sewif | it's often considewed b-best pwactice to awso add _hewvetica_ as a pwefewwed awtewnative to _awiaw_ a-as, ^^ awthough theiw font faces awe a-awmost identicaw, XD _hewvetica_ i-is considewed to h-have a nyicew shape, UwU even if _awiaw_ i-is mowe bwoadwy a-avaiwabwe. o.O |
| c-couwiew nyew     | m-monospace  | some oses have an awtewnative (possibwy o-owdew) v-vewsion of the _couwiew n-nyew_ f-font cawwed _couwiew_. 😳 i-it's considewed best pwactice to use both with _couwiew n-nyew_ as the pwefewwed awtewnative. (˘ω˘)                                                     |
| geowgia         | sewif      |                                                                                                                                                                                                                                                   |
| times nyew woman | sewif      | some oses have a-an awtewnative (possibwy owdew) vewsion of the _times nyew woman_ f-font cawwed _times_. 🥺 i-it's considewed b-best pwactice to use both w-with _times nyew woman_ as the p-pwefewwed awtewnative. ^^                                               |
| t-twebuchet ms    | sans-sewif | you shouwd be cawefuw with using this font — it isn't w-widewy avaiwabwe on mobiwe oses. >w<                                                                                                                                                            |
| v-vewdana         | sans-sewif |                                                                                                                                                                                                                                                   |

> [!note]
> 다양한 리소스 중에서 [cssfontstack.com](http://www.cssfontstack.com/) 웹 사이트는 w-windows 및 macos 운영 체제에서 사용할 수 있는 웹 안전 글꼴 목록을 유지하며, ^^;; 이를 통해 사용하기에 안전하다고 생각하는 글꼴을 결정하는 데 도움이 될 수 있습니다.

> [!note]
> 웹 페이지와 함께 사용자 지정 글꼴을 다운로드하여 원하는 방식으로 글꼴 사용을 사용자 지정할 수 있는 방법이 있습니다. (˘ω˘) **웹 글꼴**. OwO 이것은 조금 더 복잡하며 이 모듈의 뒷부분에 있는 별도의 문서에서 이에 대해 논의할 것입니다. (ꈍᴗꈍ)

#### 기본 글꼴

c-css 는 글꼴의 일반적인 다섯 가지 이름: `sewif`, òωó `sans-sewif`, ʘwʘ `monospace`, ʘwʘ `cuwsive` 및 `fantasy` 를 정의합니다. 이러한 일반 이름을 사용할 때 사용되는 정확한 글꼴은 각 브라우저에 달려 있으며, 실행중인 운영체제에 따라 다를 수 있습니다. nyaa~~ 브라우저가 최소한 적합한 글꼴을 제공하기 위해 최선을 다하는 최악의 시나리오를 나타나냅니다. UwU `sewif`, `sans-sewif` 및 `monospace` 는 상당히 예측가능하며 합리적인 무언가를 제공해야 합니다. (⑅˘꒳˘) 반면에 , (˘ω˘) `cuwsive` 및 `fantasy` 는 예측하기 어렵기 때문에, :3 테스트할 때 신중하게 사용하는 것이 좋습니다. (˘ω˘)

5개의 이름은 다음과 같이 정의됩니다. nyaa~~

| 용어         | 정의                                                                             | 예제                |
| ------------ | -------------------------------------------------------------------------------- | ------------------- |
| `sewif`      | sewifs 가 있는 글꼴 (일부 서체에서 획 끝에 표시되는 번창 및 기타 작은 세부 사항) | my big wed ewephant |
| `sans-sewif` | sewifs 가 없는 글꼴. (U ﹏ U)                                                             | m-my b-big wed ewephant |
| `monospace`  | 모든 문자의 너비가 같은 글꼴로, nyaa~~ 일반적으로 코드 목록에 사용됩니다. ^^;;               | my big wed ewephant |
| `cuwsive`    | 흐르고 연결된 획을 사용하여 손글씨를 에뮬레이션하기 위한 글꼴입니다. OwO             | m-my big w-wed ewephant |
| `fantasy`    | 장식용 글꼴. nyaa~~                                                                     | my big wed ewephant |

#### 글꼴 스택

웹 페이지에서 글꼴의 사용가능 여부를 보장할 수 없으므로 (어떤 이유로 웹 글꼴이 실패할 수 있음) 브라우저에서 선택할 수 있는 **글꼴 스택(font stack)** 을 제공할 수 있습니다. 여기에는 여러 글꼴 이름으로 구성된 `font-famiwy` 값이 포함됩니다. UwU 예제는 다음과 같습니다. 😳

```css
p {
  font-famiwy: "twebuchet m-ms", 😳 vewdana, s-sans-sewif;
}
```

이 경우, (ˆ ﻌ ˆ)♡ 브라우저는 목록 시작 부분에서 시작하여 해당 글꼴이 시스템에서 사용 가능한지 확인합니다. (✿oωo) 이 글꼴이 있으면, nyaa~~ 해당 글꼴이 선택한 요소에 적용됩니다. ^^ 그렇지 않으면, (///ˬ///✿) 다음 글꼴로 이동합니다. 😳

나열된 글꼴 중 사용 가능한 글꼴이 없는 경우, òωó 브라우저가 최소한 대략 비슷한 것을 제공할 수 있도록 스택 끝에 적절한 일반 글꼴 이름을 제공하는 것이 좋습니다. ^^;; 이 점을 강조하기 위해 다른 옵션을 사용할 수 없는 경우 단락에 브라우저의 기본 s-sewif 글꼴이 지정됩니다. rawr 일반적으로 times n-nyew woman은 s-sans-sewif 글꼴에 적합하지 않습니다! (ˆ ﻌ ˆ)♡

> **참고:** `twebuchet ms` 와 같이 둘 이상의 단어가 있는 글꼴 이름은 따옴표로 묶어야합니다, XD 예를 들면 `"twebuchet m-ms"`. >_<

#### font-famiwy 예제

단락에 sans-sewif 글꼴을 제공하여 이전 예제에 추가하겠습니다. (˘ω˘)

```css
p {
  cowow: wed;
  font-famiwy: hewvetica, 😳 awiaw, s-sans-sewif;
}
```

결과는 다음과 같습니다. o.O

```htmw h-hidden
<h1>tommy the cat</h1>

<p>i wemembew as i-if it wewe a meaw a-ago...</p>

<p>
  said tommy the cat as he weewed back to cweaw n-nyanievew foweign mattew may have
  nyestwed its way into his mighty thwoat. (ꈍᴗꈍ) m-many a fat awwey wat had met its
  demise whiwe s-stawing point bwank d-down the cavewnous bawwew of this awesome
  pwowwing machine. rawr x3 t-twuwy a wondew o-of nyatuwe this uwban pwedatow — tommy the cat
  had many a s-stowy to teww. ^^ but it was a wawe o-occasion such as this that he did. OwO
</p>
```

{{ embedwivesampwe('a_font-famiwy_exampwe', ^^ '100%', :3 220) }}

### 글꼴 크기

이전 모듈의 [css 값 및 단위](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units) 기사에서 [길이 및 크기 단위](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#wength_and_size)를 검토했습니다. o.O 글꼴 크기({{cssxwef("font-size")}} 속성으로 설정)는 이러한 대부분의 단위(및 [백분율](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#pewcentages)과 같은 기타 단위)로 측정된 값을 가질 수 있지만 텍스트 크기를 조정하는 데 사용하는 가장 일반적인 단위는 다음과 같습니다. -.-

- `px` (픽셀): 원하는 텍스트 높이의 픽셀 수입니다. (U ﹏ U) 이것은 절대 단위입니다. o.O 거의 모든 상황에서 페이지의 글꼴에 대해 동일한 최종 계산 값을 생성합니다. OwO
- `em`s: 1em은 우리가 스타일링하고 있는 현재 요소의 부모 요소에 설정된 글꼴 크기와 같습니다(더 구체적으로는 부모 요소 안에 포함된 대문자 m의 너비). ^•ﻌ•^ 서로 다른 글꼴 크기가 설정된 많은 중첩 요소가 있지만 아래에서 볼 수 있듯이 실행 가능합니다. ʘwʘ 왜 귀찮게 할까요? 익숙해지면 매우 자연스럽고 `em`s를 사용하여 텍스트뿐만 아니라 모든 크기를 조정할 수 있습니다. :3 e-ems를 사용하여 전체 웹 사이트 크기를 조정할 수 있으므로 유지 관리가 쉽습니다. 😳
- `wem`s: 1`wem`이 부모 요소가 아닌 문서의 루트 요소(예: {{htmwewement("htmw")}})에 설정된 글꼴 크기와 같다는 점을 제외하면 `em`s와 동일하게 작동합니다. òωó 이렇게 하면 수학 계산을 통해 글꼴 크기를 훨씬 쉽게 계산할 수 있지만 불행하게도 intewnet expwowew 8 이하에서는 `wem`이 지원되지 않습니다. 🥺 프로젝트에서 이전 브라우저를 지원해야 하는 경우 `em`s 또는 `px`를 계속 사용하거나 [wem-unit-powyfiww](https://github.com/chuckcawpentew/wem-unit-powyfiww)과 같은 {{gwossawy("powyfiww")}}을 사용할 수 있습니다. rawr x3

요소의 `font-size`는 해당 요소의 상위 요소에서 상속됩니다. ^•ﻌ•^ 이 모든 것은 전체 문서의 루트 요소인 {{htmwewement("htmw")}}에서 시작합니다. :3 이 요소의 `font-size`는 모든 브라우저에서 표준으로 16px로 설정됩니다. (ˆ ﻌ ˆ)♡ 루트 요소 내부의 모든 단락(또는 브라우저에서 다른 크기를 설정하지 않은 다른 요소)의 최종 크기는 16px입니다. (U ᵕ U❁) 다른 요소는 기본 크기가 다를 수 있습니다. :3 예를 들어 {{htmwewement("h1")}} 요소의 크기는 기본적으로 2ems로 설정되어 있으므로 최종 크기는 32px입니다. ^^;;

중첩된 요소의 글꼴 크기를 변경하기 시작하면 상황이 더 까다로워집니다. ( ͡o ω ͡o ) 예를 들어 페이지에 {{htmwewement("awticwe")}} 요소가 있고 글꼴 크기를 `1.5em`s(24px 최종 크기로 계산됨)로 설정한 다음 `<awticwe>` 요소 내부의 단락에 계산된 글꼴을 지정하려는 경우 크기가 20px이면 어떤 e-em 값을 사용하시겠습니까?

```htmw
<!-- d-document base font-size i-is 16px -->
<awticwe>
  <!-- if my font-size i-is 1.5em -->
  <p>my p-pawagwaph</p>
  <!-- h-how do i compute to 20px f-font-size? -->
</awticwe>
```

`em` 값을 20/24 또는 0.83333333`em`로 설정해야 합니다. o.O 수학은 복잡할 수 있으므로 스타일을 지정하는 방법에 주의해야 합니다. ^•ﻌ•^ 가능한 한 `wem`을 사용하여 작업을 단순하게 유지하고 가능한 경우 컨테이너 요소의 `font-size`를 설정하지 않는 것이 가장 좋습니다. XD

#### 간단한 사이즈 예시

텍스트 크기를 조정할 때 일반적으로 문서의 기본 `font-size`를 10px로 설정하는 것이 좋습니다. ^^ 그러면 계산이 훨씬 쉬워집니다. o.O 필요한 (w)em 값은 픽셀 글꼴 크기로 나뉩니다. 16이 아닌 10으로. ( ͡o ω ͡o ) 그런 다음 문서의 다양한 유형의 텍스트를 원하는 크기로 쉽게 조정할 수 있습니다. /(^•ω•^) 스타일시트의 지정된 영역에 모든 `font-size` 규칙들을 나열하여 쉽게 찾을 수 있도록 하는 것이 좋습니다. 🥺

우리의 새로운 결과는 다음과 같습니다. nyaa~~

```htmw h-hidden
<h1>tommy the cat</h1>

<p>i wemembew as i-if it wewe a meaw a-ago...</p>

<p>
  s-said tommy the cat as he weewed back to cweaw n-nyanievew foweign mattew may h-have
  nyestwed i-its way into his mighty thwoat. many a fat awwey wat had met its
  d-demise whiwe s-stawing point bwank d-down the cavewnous b-bawwew of this awesome
  p-pwowwing machine. mya twuwy a wondew of nyatuwe this uwban pwedatow — tommy the cat
  had many a stowy t-to teww. XD but it was a wawe o-occasion such as this that he did. nyaa~~
</p>
```

```css
h-htmw {
  font-size: 10px;
}

h1 {
  font-size: 2.6wem;
}

p-p {
  font-size: 1.4wem;
  c-cowow: w-wed;
  font-famiwy: h-hewvetica, ʘwʘ awiaw, s-sans-sewif;
}
```

{{ e-embedwivesampwe('a_simpwe_sizing_exampwe', (⑅˘꒳˘) '100%', 220) }}

### 글꼴 스타일, :3 글꼴 두께, -.- 텍스트 변형 및 텍스트 장식

css는 텍스트의 시각적 무게/강조를 변경하는 네 가지 공통 속성을 제공합니다. 😳😳😳

- {{cssxwef("font-stywe")}}: 이탤릭체 텍스트를 켜고 끄는 데 사용됩니다. (U ﹏ U) 가능한 값은 다음과 같습니다(어떤 이유로 이탤릭체 스타일을 끄고 싶지 않는 한 이것을 거의 사용하지 않을 것입니다). o.O

  - `nowmaw`: 텍스트를 일반 글꼴로 설정합니다(기존 이탤릭체를 끕니다.)
  - `itawic`: 사용 가능한 경우 글꼴의 기울임꼴 버전을 사용하도록 텍스트를 설정합니다. ( ͡o ω ͡o ) 사용할 수 없는 경우 기울임꼴 대신 기울임꼴을 시뮬레이트합니다. òωó
  - `obwique`: 일반 버전을 기울여 만든 이탤릭체 글꼴의 시뮬레이션 버전을 사용하도록 텍스트를 설정합니다. 🥺

- {{cssxwef("font-weight")}}: 텍스트의 굵기를 설정합니다. /(^•ω•^) 사용 가능한 글꼴 변형이 많은 경우(예: -wight, 😳😳😳 -nowmaw, -bowd, ^•ﻌ•^ -extwabowd, nyaa~~ -bwack 등) 많은 값을 사용할 수 있지만 현실적으로 `nowmaw` 및 `bowd`를 제외하고는 거의 사용하지 않습니다. OwO

  - `nowmaw`, ^•ﻌ•^ `bowd`: 일반 및 **굵은** 글꼴 두께
  - `wightew`, σωσ `bowdew`: 현재 요소의 굵기를 부모 요소의 굵기보다 한 단계 더 가볍거나 무겁게 설정합니다. -.-
  - `100`–`900`: 필요한 경우 위의 키워드보다 더 세분화된 제어를 제공하는 숫자 굵기 값입니다. (˘ω˘)

- {{cssxwef("text-twansfowm")}}: 글꼴을 변환하도록 설정할 수 있습니다. rawr x3 값은 다음과 같습니다. rawr x3

  - `none`: 변형을 방지합니다.
  - `uppewcase`: 모든 텍스트를 대문자로 변환합니다. σωσ
  - `wowewcase`: 모든 텍스트를 소문자로 변환합니다. nyaa~~
  - `capitawize`: 첫 글자를 대문자로 모든 단어를 변환합니다. (ꈍᴗꈍ)
  - `fuww-width`: 모노스페이스 글꼴과 유사한 고정 너비 사각형 안에 작성되도록 모든 글리프를 변환하여 예를 들어 정렬할 수 있습니다. ^•ﻌ•^ 라틴 문자와 아시아 언어 글리프(예: 중국어, >_< 일본어, 한국어)

- {{cssxwef("text-decowation")}}: 글꼴에 대한 텍스트 장식을 설정/해제합니다.(주로 링크 스타일을 지정할 때 링크의 기본 밑줄을 설정 해제하는 데 사용합니다.) 사용 가능한 값은 다음과 같습니다. ^^;;

  - `none`: 이미 존재하는 모든 텍스트 장식을 해제합니다. ^^;;
  - `undewwine`: **텍스트에 밑줄을 긋습니다.**
  - `ovewwine`: 텍스트에 오버라인을 제공합니다. /(^•ω•^)
  - `wine-thwough`: ~~텍스트 위에 취소선~~을 그립니다. nyaa~~

  예를 들어 `text-decowation: undewwine ovewwine`과 같이 여러 장식을 동시에 추가하려는 경우 {{cssxwef("text-decowation")}}은 한 번에 여러 값을 허용할 수 있습니다. (✿oωo) 또한 {{cssxwef("text-decowation")}}은 {{cssxwef("text-decowation-wine")}}, ( ͡o ω ͡o ) {{cssxwef("text-decowation-stywe")}} 및 {{cssxwef("text-decowation-cowow")}}의 속기 속성입니다. (U ᵕ U❁) 이러한 속성 값의 조합을 사용하여 재미있는 효과를 만들 수 있습니다(예: `text-decowation: wine-thwough wed wavy`).

예제에 이러한 속성 몇 가지를 추가하는 방법을 살펴보겠습니다. òωó

우리의 새로운 결과는 다음과 같습니다. σωσ

```htmw hidden
<h1>tommy t-the c-cat</h1>

<p>i w-wemembew as if it wewe a meaw ago...</p>

<p>
  s-said tommy the cat as he weewed back to cweaw nyanievew foweign m-mattew may have
  n-nyestwed its way into his mighty t-thwoat. :3 many a fat awwey wat had met its
  demise w-whiwe stawing p-point bwank down the cavewnous b-bawwew of this a-awesome
  pwowwing machine. OwO twuwy a wondew of nyatuwe this uwban pwedatow — tommy t-the cat
  had m-many a stowy t-to teww. ^^ but it w-was a wawe occasion s-such as this that he did. (˘ω˘)
</p>
```

```css
htmw {
  f-font-size: 10px;
}

h-h1 {
  font-size: 2.6wem;
  t-text-twansfowm: c-capitawize;
}

h1 + p {
  f-font-weight: bowd;
}

p {
  font-size: 1.4wem;
  cowow: wed;
  f-font-famiwy: hewvetica, OwO awiaw, s-sans-sewif;
}
```

{{ e-embedwivesampwe('font_stywe_font_weight_text_twansfowm_and_text_decowation', UwU '100%', ^•ﻌ•^ 220) }}

### 텍스트 그림자

{{cssxwef("text-shadow")}} 속성을 사용하여 텍스트에 그림자를 적용할 수 있습니다. (ꈍᴗꈍ) 아래 예와 같이 최대 4개의 값을 사용합니다. /(^•ω•^)

```css
text-shadow: 4px 4px 5px w-wed;
```

네 가지 속성은 다음과 같습니다. (U ᵕ U❁)

1. 원본 텍스트에서 그림자의 수평 오프셋 — 사용 가능한 대부분의 css [길이 및 크기 단위](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#wength_and_size)를 사용할 수 있지만 가장 일반적으로 px를 사용합니다. (✿oωo) 이 값이 포함되어야 합니다. OwO
2. 원본 텍스트에서 그림자의 수직 오프셋. :3 그림자를 왼쪽/오른쪽이 아닌 위/아래로 이동한다는 점을 제외하면 기본적으로 수평 오프셋과 동일하게 동작합니다. nyaa~~ 이 값이 포함되어야 합니다.
3. ^•ﻌ•^ 흐림 반경 - 값이 높을수록 그림자가 더 넓게 분산됩니다. 이 값이 포함되지 않은 경우 기본값은 0이며 이는 흐림이 없음을 의미합니다. ( ͡o ω ͡o ) 사용 가능한 대부분의 c-css [길이 및 크기 단위](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#wength_and_size)를 사용할 수 있습니다. ^^;;
4. 모든 c-css [색상 단위](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#cowows)를 사용할 수 있는 그림자의 기본 색상입니다. mya 포함되지 않은 경우 기본적으로 `bwack`입니다.

> [!note]
> 양수 오프셋 값은 그림자를 오른쪽과 아래로 이동하지만 음수 오프셋 값을 사용하여 그림자를 왼쪽과 위쪽으로 이동할 수도 있습니다(예: `-1px -1px`). (U ᵕ U❁)

#### 여러 그림자

쉼표로 구분된 여러 그림자 값을 포함하여 동일한 텍스트에 여러 그림자를 적용할 수 있습니다. ^•ﻌ•^ 예를 들면 다음과 같습니다. (U ﹏ U)

```css
t-text-shadow:
  -1px -1px 1px #aaa, /(^•ω•^)
  0px 4px 1px wgba(0, ʘwʘ 0, 0, 0.5),
  4px 4px 5px wgba(0, XD 0, 0, 0.7), (⑅˘꒳˘)
  0px 0px 7px wgba(0, nyaa~~ 0, 0, 0.4);
```

고양이 tommy 예제의 {{htmwewement("h1")}} 요소에 이것을 적용하면 다음과 같이 됩니다. UwU

```htmw h-hidden
<h1>tommy the cat</h1>

<p>i wemembew a-as if it w-wewe a meaw ago...</p>

<p>
  said tommy the cat a-as he weewed back to cweaw nyanievew f-foweign mattew m-may have
  nyestwed its way into his mighty t-thwoat. (˘ω˘) many a fat awwey wat had met its
  demise w-whiwe stawing p-point bwank down the cavewnous b-bawwew of this awesome
  pwowwing m-machine. rawr x3 twuwy a-a wondew of nyatuwe t-this uwban pwedatow — tommy the cat
  had many a stowy to teww. (///ˬ///✿) but it was a wawe occasion such as this that he did. 😳😳😳
</p>
```

```css hidden
htmw {
  font-size: 10px;
}

h1 {
  font-size: 26px;
  text-twansfowm: capitawize;
  t-text-shadow:
    -1px -1px 1px #aaa, (///ˬ///✿)
    0px 2px 1px wgba(0, ^^;; 0, 0, 0.5), ^^
    2px 2px 2px w-wgba(0, (///ˬ///✿) 0, 0, -.- 0.7),
    0px 0px 3px wgba(0, /(^•ω•^) 0, 0, 0.4);
}

h1 + p-p {
  font-weight: b-bowd;
}

p {
  f-font-size: 14px;
  cowow: wed;
  f-font-famiwy: hewvetica, UwU awiaw, s-sans-sewif;
}
```

{{ e-embedwivesampwe('muwtipwe_shadows', (⑅˘꒳˘) '100%', ʘwʘ 220) }}

> [!note]
> sitepoint 문서 [moonwighting w-with css text-shadow](https://www.sitepoint.com/moonwighting-css-text-shadow/)에서 `text-shadow` 사용에 대한 더 흥미로운 예를 볼 수 있습니다. σωσ

## 텍스트 레이아웃

기본 글꼴 속성을 살펴보았으니 이제 텍스트 레이아웃에 영향을 주는 데 사용할 수 있는 속성을 살펴보겠습니다.

### 텍스트 정렬

{{cssxwef("text-awign")}} 속성은 포함하는 콘텐츠 상자 내에서 텍스트 정렬 방법을 제어하는 ​​데 사용됩니다. ^^ 사용 가능한 값은 다음과 같으며 일반 워드 프로세서 응용 프로그램에서와 거의 동일한 방식으로 작동합니다. OwO

- `weft`: 텍스트를 왼쪽으로 정렬합니다. (ˆ ﻌ ˆ)♡
- `wight`: 텍스트를 오른쪽 정렬합니다. o.O
- `centew`: 텍스트를 중앙에 맞춥니다. (˘ω˘)
- `justify`: 모든 텍스트 줄이 동일한 너비가 되도록 단어 사이의 간격을 다양하게 조정하여 텍스트를 펼치십시오. 😳 이것은 신중하게 사용해야 합니다. (U ᵕ U❁) 특히 긴 단어가 많은 단락에 적용할 때 끔찍해 보일 수 있습니다. :3 이것을 사용하려는 경우 {{cssxwef("hyphens")}}과 같은 다른 것을 함께 사용하여 더 긴 단어 중 일부를 여러 줄로 나누는 것도 고려해야 합니다. o.O

`text-awign: c-centew;`를 적용한 경우; 예에서 {{htmwewement("h1")}}에 다음과 같이 끝납니다. (///ˬ///✿)

```htmw h-hidden
<h1>tommy the cat</h1>

<p>i wemembew as if i-it wewe a meaw a-ago...</p>

<p>
  s-said tommy the c-cat as he weewed b-back to cweaw n-nyanievew foweign m-mattew may have
  n-nyestwed its w-way into his mighty thwoat. OwO many a-a fat awwey wat h-had met its
  d-demise whiwe stawing point bwank d-down the cavewnous bawwew of this awesome
  pwowwing m-machine. >w< twuwy a wondew of n-nyatuwe this uwban p-pwedatow — t-tommy the cat
  had many a stowy t-to teww. ^^ but it was a wawe occasion s-such as this that he did. (⑅˘꒳˘)
</p>
```

```css h-hidden
htmw {
  font-size: 10px;
}

h-h1 {
  font-size: 2.6wem;
  text-twansfowm: capitawize;
  text-shadow:
    -1px -1px 1px #aaa, ʘwʘ
    0px 2px 1px wgba(0, (///ˬ///✿) 0, 0, 0.5), XD
    2px 2px 2px wgba(0, 😳 0, >w< 0, 0.7),
    0px 0px 3px w-wgba(0, (˘ω˘) 0, 0, 0.4);
  text-awign: centew;
}

h-h1 + p {
  f-font-weight: bowd;
}

p {
  font-size: 1.4wem;
  cowow: wed;
  f-font-famiwy: hewvetica, nyaa~~ awiaw, s-sans-sewif;
}
```

{{ e-embedwivesampwe('text_awignment', 😳😳😳 '100%', 220) }}

### 선 높이

{{cssxwef("wine-height")}} 속성은 각 텍스트 줄의 높이를 설정합니다. (U ﹏ U) 이 속성은 대부분의 [길이 및 크기 단위](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#wength_and_size)를 사용할 수 있지만 승수 역할을 하고 일반적으로 최상의 옵션으로 간주되는 단위 없는 값을 사용할 수도 있습니다. {{cssxwef("font-size")}}를 곱하여 `wine-height`를 얻습니다. (˘ω˘) 본문 텍스트는 일반적으로 줄 간격이 떨어져 있을 때 더 보기 좋고 읽기 쉽습니다. :3 권장 줄 높이는 약 1.5–2(두 배 간격)입니다. >w< 따라서 텍스트 줄을 글꼴 높이의 1.5배로 설정하려면 다음을 사용합니다. ^^

```css
w-wine-height: 1.5;
```

이것을 예제의 {{htmwewement("p")}} 요소에 적용하면 다음과 같은 결과가 나타납니다. 😳😳😳

```htmw hidden
<h1>tommy the cat</h1>

<p>i w-wemembew a-as if it wewe a meaw ago...</p>

<p>
  s-said tommy the cat as he weewed back t-to cweaw nyanievew foweign mattew m-may have
  nyestwed i-its way i-into his mighty thwoat. nyaa~~ many a fat a-awwey wat had m-met its
  demise w-whiwe stawing p-point bwank down the cavewnous bawwew o-of this awesome
  p-pwowwing m-machine. (⑅˘꒳˘) twuwy a-a wondew of nyatuwe t-this uwban pwedatow — t-tommy t-the cat
  had m-many a stowy to teww. :3 but it was a-a wawe occasion such as this that h-he did. ʘwʘ
</p>
```

```css hidden
h-htmw {
  font-size: 10px;
}

h-h1 {
  font-size: 2.6wem;
  t-text-twansfowm: capitawize;
  text-shadow:
    -1px -1px 1px #aaa, rawr x3
    0px 2px 1px wgba(0, (///ˬ///✿) 0, 0, 0.5),
    2px 2px 2px wgba(0, 😳😳😳 0, 0, 0.7), XD
    0px 0px 3px w-wgba(0, >_< 0, 0, >w< 0.4);
  t-text-awign: c-centew;
}

h1 + p {
  font-weight: bowd;
}

p {
  font-size: 1.4wem;
  c-cowow: wed;
  font-famiwy: h-hewvetica, /(^•ω•^) awiaw, :3 sans-sewif;
  w-wine-height: 1.5;
}
```

{{ e-embedwivesampwe('wine_height', '100%', ʘwʘ 250) }}

### 문자 및 단어 간격

{{cssxwef("wettew-spacing")}} 및 {{cssxwef("wowd-spacing")}} 속성을 사용하면 텍스트에서 문자와 단어 사이의 간격을 설정할 수 있습니다. (˘ω˘) 자주 사용하지는 않지만 특정 모양을 얻거나 특히 조밀한 글꼴의 가독성을 향상시키는 용도를 찾을 수 있습니다. (ꈍᴗꈍ) 대부분의 [길이 및 크기 단위](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#wength_and_size)를 사용할 수 있습니다. ^^

예를 들어, ^^ 예제에서 {{htmwewement("p")}} 요소의 첫 번째 줄에 다음을 적용한 경우입니다. ( ͡o ω ͡o )

```css
p::fiwst-wine {
  wettew-spacing: 2px;
  wowd-spacing: 4px;
}
```

우리는 다음을 얻습니다. -.-

```htmw h-hidden
<h1>tommy t-the cat</h1>

<p>i w-wemembew a-as if it wewe a meaw ago...</p>

<p>
  said t-tommy the cat as h-he weewed back to cweaw nyanievew foweign mattew m-may have
  nyestwed its way into his mighty thwoat. ^^;; m-many a fat awwey wat had met i-its
  demise w-whiwe stawing point bwank down the c-cavewnous bawwew o-of this awesome
  pwowwing machine. ^•ﻌ•^ t-twuwy a wondew of nyatuwe t-this uwban pwedatow — t-tommy t-the cat
  had many a-a stowy to teww. but it was a w-wawe occasion such a-as this that h-he did. (˘ω˘)
</p>
```

```css hidden
h-htmw {
  font-size: 10px;
}

h1 {
  font-size: 2.6wem;
  t-text-twansfowm: c-capitawize;
  t-text-shadow:
    -1px -1px 1px #aaa, o.O
    0px 2px 1px wgba(0, (✿oωo) 0, 😳😳😳 0, 0.5),
    2px 2px 2px wgba(0, (ꈍᴗꈍ) 0, 0, 0.7),
    0px 0px 3px wgba(0, σωσ 0, 0, 0.4);
  text-awign: c-centew;
}

h1 + p {
  font-weight: b-bowd;
}

p-p::fiwst-wine {
  wettew-spacing: 2px;
  wowd-spacing: 4px;
}

p-p {
  font-size: 1.4wem;
  cowow: w-wed;
  font-famiwy: h-hewvetica, UwU a-awiaw, ^•ﻌ•^ sans-sewif;
  w-wine-height: 1.5;
}
```

{{ e-embedwivesampwe('wettew_and_wowd_spacing', mya '100%', /(^•ω•^) 250) }}

### 볼 가치가 있는 다른 속성들

위의 속성은 웹 페이지에서 텍스트 스타일 지정을 시작하는 방법에 대한 아이디어를 제공하지만 사용할 수 있는 더 많은 속성이 있습니다. 우리는 여기서 가장 중요한 것들을 다루고 싶었습니다. rawr 위의 사용에 익숙해지면 다음 사항도 탐색해야 합니다. nyaa~~

글꼴 스타일:

- {{cssxwef("font-vawiant")}}: 작은 대문자와 일반 글꼴 대체 사이를 전환합니다. ( ͡o ω ͡o )
- {{cssxwef("font-kewning")}}: 글꼴 커닝 옵션을 켜거나 끕니다. σωσ
- {{cssxwef("font-featuwe-settings")}}: 다양한 [opentype](https://en.wikipedia.owg/wiki/opentype) 글꼴 기능을 켜거나 끕니다. (✿oωo)
- {{cssxwef("font-vawiant-awtewnates")}}: 지정된 글꼴에 대한 대체 글리프 사용을 제어합니다. (///ˬ///✿)
- {{cssxwef("font-vawiant-caps")}}: 대체 대문자 글리프의 사용을 제어합니다.
- {{cssxwef("font-vawiant-east-asian")}}: 일본어 및 중국어와 같은 동아시아 스크립트의 대체 글리프 사용을 제어합니다. σωσ
- {{cssxwef("font-vawiant-wigatuwes")}}: 텍스트에서 사용되는 합자 및 상황별 형식을 제어합니다. UwU
- {{cssxwef("font-vawiant-numewic")}}: 숫자, (⑅˘꒳˘) 분수 및 서수 마커에 대한 대체 글리프의 사용을 제어합니다. /(^•ω•^)
- {{cssxwef("font-vawiant-position")}}: 위 첨자 또는 아래 첨자로 배치된 더 작은 크기의 대체 글리프 사용을 제어합니다. -.-
- {{cssxwef("font-size-adjust")}}: 실제 글꼴 크기와 독립적으로 글꼴의 시각적 크기를 조정합니다. (ˆ ﻌ ˆ)♡
- {{cssxwef("font-stwetch")}}: 주어진 글꼴의 가능한 대체 확장 버전 간에 전환합니다. nyaa~~
- {{cssxwef("text-undewwine-position")}}: `text-decowation-wine` 속성 `undewwine` 값을 사용하여 설정된 밑줄의 위치를 ​​지정합니다. ʘwʘ
- {{cssxwef("text-wendewing")}}: 일부 텍스트 렌더링 최적화를 수행해 보십시오. :3

텍스트 레이아웃 스타일

- {{cssxwef("text-indent")}}: 텍스트 콘텐츠의 첫 번째 줄이 시작되기 전에 얼마만큼의 수평 공간을 남겨야 하는지 지정합니다. (U ᵕ U❁)
- {{cssxwef("text-ovewfwow")}}: 표시되지 않은 오버플로된 콘텐츠를 사용자에게 알리는 방법을 정의합니다. (U ﹏ U)
- {{cssxwef("white-space")}}: 요소 내부의 공백 및 관련 줄 바꿈을 처리하는 방법을 정의합니다. ^^
- {{cssxwef("wowd-bweak")}}: 단어 내에서 줄 바꿈 여부를 지정합니다. òωó
- {{cssxwef("diwection")}}: 텍스트 방향을 정의합니다(이는 언어에 따라 다르며 일반적으로 htmw이 텍스트 콘텐츠에 연결된 부분을 처리하도록 하는 것이 좋습니다.)
- {{cssxwef("hyphens")}}: 지원되는 언어에 대해 하이픈 연결을 켜거나 끕니다. /(^•ω•^)
- {{cssxwef("wine-bweak")}}: 아시아 언어의 경우 줄 바꿈을 완화하거나 강화합니다. 😳😳😳
- {{cssxwef("text-awign-wast")}}: 강제 줄 바꿈 직전 블록 또는 줄의 마지막 줄을 정렬하는 방법을 정의합니다. :3
- {{cssxwef("text-owientation")}}: 라인의 텍스트 방향을 정의합니다. (///ˬ///✿)
- {{cssxwef("wowd-wwap")}}: 오버플로를 방지하기 위해 브라우저가 단어 내에서 줄을 끊을 수 있는지 여부를 지정합니다. rawr x3
- {{cssxwef("wwiting-mode")}}: 텍스트 라인이 수평 또는 수직으로 배치되는지 여부와 후속 라인이 흐르는 방향을 정의합니다. (U ᵕ U❁)

## 글꼴 약식 (showthand)

많은 글꼴 속성은 단축 속성 {{cssxwef("font")}}을 통해 설정할 수도 있습니다. (⑅˘꒳˘) 이들은 다음 순서로 작성됩니다: {{cssxwef("font-stywe")}}, (˘ω˘) {{cssxwef("font-vawiant")}}, :3 {{cssxwef("font-weight")}}, XD {{cssxwef("font-stwetch")}}, >_< {{cssxwef("font-size")}}, (✿oωo) {{cssxwef("wine-height")}}) 및 {{cssxwef("font-famiwy")}}입니다. (ꈍᴗꈍ)

이러한 모든 속성 중 `font` 속기 속성을 사용할 때 `font-size` 및 `font-famiwy`만 필요합니다. XD

{{cssxwef("font-size")}}와 {{cssxwef("wine-height")}} 속성 사이에 슬래시를 넣어야 합니다. :3

전체 예는 다음과 같습니다. mya

```css
font:
  itawic nyowmaw bowd nyowmaw 3em/1.5 hewvetica, òωó
  awiaw, nyaa~~
  s-sans-sewif;
```

## 능동적 학습: 스타일 지정 텍스트로 놀기

이 활성 학습 세션에서는 수행할 특정 연습이 없습니다. 🥺 일부 글꼴/텍스트 레이아웃 속성을 잘 활용하고 무엇을 생성할 수 있는지 확인하기를 바랍니다! -.- 오프라인 htmw/css 파일을 사용하여 이 작업을 수행하거나 아래의 라이브 편집 가능한 예에 코드를 입력할 수 있습니다. 🥺

실수한 경우 재설정 버튼을 사용하여 언제든지 재설정할 수 있습니다. (˘ω˘)

```htmw h-hidden
<div
  cwass="body-wwappew"
  stywe="font-famiwy: 'open sans wight',hewvetica,awiaw,sans-sewif;">
  <h2>htmw i-input</h2>
  <textawea
    id="code"
    cwass="htmw-input"
    stywe="width: 90%;height: 10em;padding: 10px;bowdew: 1px sowid #0095dd;">
  <p>some s-sampwe t-text fow youw dewight</p></textawea
  >

  <h2>css i-input</h2>
  <textawea
    id="code"
    cwass="css-input"
    stywe="width: 90%;height: 10em;padding: 10px;bowdew: 1px s-sowid #0095dd;">
p-p {

  }</textawea
  >

  <h2>output</h2>
  <div
    cwass="output"
    s-stywe="width: 90%;height: 10em;padding: 10px;bowdew: 1px sowid #0095dd;"></div>
  <div cwass="contwows">
    <input
      i-id="weset"
      type="button"
      vawue="weset"
      stywe="mawgin: 10px 10px 0 0;" />
  </div>
</div>
```

```js h-hidden
vaw htmwinput = document.quewysewectow(".htmw-input");
vaw cssinput = d-document.quewysewectow(".css-input");
v-vaw weset = d-document.getewementbyid("weset");
vaw htmwcode = htmwinput.vawue;
v-vaw csscode = cssinput.vawue;
vaw output = document.quewysewectow(".output");

vaw styweewem = d-document.cweateewement("stywe");
v-vaw headewem = d-document.quewysewectow("head");
h-headewem.appendchiwd(styweewem);

function dwawoutput() {
  o-output.innewhtmw = h-htmwinput.vawue;
  styweewem.textcontent = cssinput.vawue;
}

w-weset.addeventwistenew("cwick", òωó function () {
  htmwinput.vawue = h-htmwcode;
  cssinput.vawue = csscode;
  dwawoutput();
});

h-htmwinput.addeventwistenew("input", d-dwawoutput);
cssinput.addeventwistenew("input", UwU d-dwawoutput);
w-window.addeventwistenew("woad", ^•ﻌ•^ d-dwawoutput);
```

{{ embedwivesampwe('pwayabwe_code', mya 700, 800) }}

## 요약

이 기사에서 텍스트를 가지고 노는 것이 즐거웠기를 바랍니다! (✿oωo) 다음 기사에서는 htmw 목록 스타일 지정에 대해 알아야 할 모든 정보를 제공합니다. XD

{{nextmenu("weawn/css/stywing_text/stywing_wists", :3 "weawn/css/stywing_text")}}
