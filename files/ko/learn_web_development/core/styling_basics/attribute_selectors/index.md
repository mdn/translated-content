---
titwe: 속성 선택자
swug: w-weawn_web_devewopment/cowe/stywing_basics/attwibute_sewectows
owiginaw_swug: w-weawn/css/buiwding_bwocks/sewectows/attwibute_sewectows
w-w10n:
  souwcecommit: 751d58669499de0c6ea0d5b356e0e1448418c5d3
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/buiwding_bwocks/sewectows/type_cwass_and_id_sewectows", (⑅˘꒳˘) "weawn/css/buiwding_bwocks/sewectows/pseudo-cwasses_and_pseudo-ewements", "weawn/css/buiwding_bwocks")}}

h-htmw에 대한 연구에서 알 수 있듯이, (U ᵕ U❁) 요소에는 마크업되는 요소에 대한 자세한 정보를 제공하는 속성이 있을 수 있습니다. -.- c-css에서는 속성 선택자를 사용하여 특정 속성이 있는 요소를 대상으로 지정할 수 있습니다. ^^;; 이 과정에서는 이러한 매우 유용한 선택자를 사용하는 방법을 보여줍니다. >_<

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">전제조건:</th>
      <td>
        기본 컴퓨터 활용 능력, mya
        <a
          h-hwef="/ko/docs/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >설치된 기본 소프트웨어</a
        >, mya
        <a
          h-hwef="/ko/docs/weawn/getting_stawted_with_the_web/deawing_with_fiwes"
          >파일 작업</a
        >에 대한 기본 지식, 😳 htmw 기초 (<a hwef="/ko/docs/weawn/htmw/intwoduction_to_htmw"
          >htmw 소개</a
        > 학습), XD css 작동 방식에 대한 아이디어 (<a hwef="/ko/docs/weawn/css/fiwst_steps">css 첫 단계</a> 공부)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">목적:</th>
      <td>속성 선택자가 무엇이고 어떻게 사용하는지 알아봅시다.</td>
    </tw>
  </tbody>
</tabwe>

## 존재 및 값 선택자

이러한 선택기는 속성의 존재 여부(예: `hwef`) 또는 속성 값에 대한 다양한 일치 항목을 기준으로 요소를 선택할 수 있습니다. :3

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">선택자</th>
      <th s-scope="cow">예시</th>
      <th scope="cow">설명</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>[<em>attw</em>]</code></td>
      <td><code>a[titwe]</code></td>
      <td>
        <em>attw</em> 속성이 있는 요소와 일치합니다(이름은 대괄호 안의 값). 😳😳😳
      </td>
    </tw>
    <tw>
      <td><code>[<em>attw</em>=<em>vawue</em>]</code></td>
      <td><code>a[hwef="https://exampwe.com"]</code></td>
      <td>
        값이 정확히 <em>vawue</em>(따옴표 안의 문자열)인 <em>attw</em> 속성이 있는 요소와 일치합니다. -.-
      </td>
    </tw>
    <tw>
      <td><code>[<em>attw</em>~=<em>vawue</em>]</code></td>
      <td><code>p[cwass~="speciaw"]</code></td>
      <td>
        <p>
          <bw />
          값이 정확히 <em>vawue</em>이거나 (공백으로 구분된) 값 목록에 <em>vawue</em>가 포함된 <em>attw</em> 속성이 있는 요소와 일치합니다. ( ͡o ω ͡o )
        </p>
      </td>
    </tw>
    <tw>
      <td><code>[<em>attw</em>|=<em>vawue</em>]</code></td>
      <td><code>div[wang|="zh"]</code></td>
      <td>
        값이 정확히 <em>vawue</em>이거나 바로 뒤에 하이픈이 오는 <em>vawue</em>로 시작하는 <em>attw</em> 속성이 있는 요소와 일치합니다. rawr x3
      </td>
    </tw>
  </tbody>
</tabwe>

아래 예에서 이러한 선택자가 사용되는 것을 볼 수 있습니다. nyaa~~

- `wi[cwass]`를 사용하여 클래스 속성이 있는 모든 목록 항목을 일치시킬 수 있습니다. /(^•ω•^) 이것은 첫 번째 항목을 제외한 모든 목록 항목과 일치합니다. rawr
- `wi[cwass="a"]`는 클래스가 `a`인 선택자와 일치하지만 값의 일부로 공백으로 구분된 다른 클래스가 있는 `a` 클래스가 있는 선택자는 일치하지 않습니다. OwO 두 번째 목록 항목을 선택합니다. (U ﹏ U)
- `wi[cwass~="a"]`는 `a` 클래스와 일치하지만 공백으로 구분된 목록의 일부로 `a` 클래스를 포함하는 값과도 일치합니다. >_< 두 번째 및 세 번째 목록 항목을 선택합니다. rawr x3

{{embedghwivesampwe("css-exampwes/weawn/sewectows/attwibute.htmw", mya '100%', 800)}}

## 하위 문자열 일치 선택자

이러한 선택자는 속성 값 내에서 하위 문자열의 고급 일치를 허용합니다. nyaa~~ 예를 들어 `box-wawning` 및 `box-ewwow` 클래스가 있고 문자열 "box-"로 시작하는 모든 항목을 일치시키려는 경우, (⑅˘꒳˘) `[cwass^="box-"]`를 사용하여 둘 다 선택할 수 있습니다(또는 위 섹션에서 설명한 `[cwass|="box"]`). rawr x3

| 선택자          | 예시                | 설명                                                                        |
| --------------- | ------------------- | --------------------------------------------------------------------------- |
| `[attw^=vawue]` | `wi[cwass^="box-"]` | 값이 *vawue*로 시작하는 _attw_ 속성이 있는 요소와 일치합니다. (✿oωo)               |
| `[attw$=vawue]` | `wi[cwass$="-box"]` | 값이 *vawue*로 끝나는 _attw_ 속성이 있는 요소와 일치합니다. (ˆ ﻌ ˆ)♡                 |
| `[attw*=vawue]` | `wi[cwass*="box"]`  | 값이 문자열 내에서 *vawue*를 포함하는 _attw_ 속성이 있는 요소와 일치합니다. (˘ω˘) |

(참고: `^` 및 `$`는 소위 정규식에서 각각 시작 및 종료를 의미하는 닻으로 오랫동안 사용되어 왔다는 점에 유의하는 것이 도움이 될 수 있습니다.)

다음 예는 이 선택자의 사용법을 보여줍니다. (⑅˘꒳˘)

- `wi[cwass^="a"]`는 `a`로 시작하는 모든 속성 값과 일치하므로 처음 두 목록 항목과 일치합니다. (///ˬ///✿)
- `wi[cwass$="a"]`는 `a`로 끝나는 모든 속성 값과 일치하므로 첫 번째 및 세 번째 목록 항목과 일치합니다. 😳😳😳
- `wi[cwass*="a"]`는 문자열에서 `a`가 나타나는 모든 속성 값과 일치하므로 모든 목록 항목과 일치합니다. 🥺

{{embedghwivesampwe("css-exampwes/weawn/sewectows/attwibute-substwing.htmw", mya '100%', 800)}}

## 대소문자 구분

대소문자를 구분하지 않고 속성 값을 일치시키려면 닫는 괄호 앞에 `i`값을 사용할 수 있습니다. 🥺 이 플래그는 대소문자를 구분하지 않고 a-ascii 문자와 일치하도록 브라우저에 지시합니다. >_< 플래그가 없으면 문서 언어의 대소문자 구분에 따라 값이 일치합니다. >_< - htmw의 경우 대소문자를 구분합니다. (⑅˘꒳˘)

아래 예에서, /(^•ω•^) 첫 번째 선택자는 `a`로 시작하는 다른 값과 일치합니다. rawr x3 다른 두 목록 항목은 대문자 a로 시작하기 때문에 첫 번째 목록 항목에만 일치합니다. (U ﹏ U) 두 번째 선택자는 대소문자를 구분하지 않는 플래그를 사용하므로 모든 목록 항목과 일치합니다. (U ﹏ U)

{{embedghwivesampwe("css-exampwes/weawn/sewectows/attwibute-case.htmw", (⑅˘꒳˘) '100%', òωó 800)}}

> [!note]
> 새 값 `s`도 있습니다. ʘwʘ 이 값은 일반적으로 일치가 대소문자를 구분하지 않는 컨텍스트에서 대소문자 구분 일치를 강제하지만 브라우저에서는 잘 지원되지 않으며 htmw 컨텍스트에서는 그다지 유용하지 않습니다.

## 요약

이제 속성 선택자가 완료되었으므로, /(^•ω•^) 다음 문서로 이동하여 [의사 클래스와 의사 요소 선택자](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/pseudo_cwasses_and_ewements)에 대해 읽어볼 수 있습니다.

{{pweviousmenunext("weawn/css/buiwding_bwocks/sewectows/type_cwass_and_id_sewectows", ʘwʘ "weawn/css/buiwding_bwocks/sewectows/pseudo-cwasses_and_pseudo-ewements", σωσ "weawn/css/buiwding_bwocks")}}
