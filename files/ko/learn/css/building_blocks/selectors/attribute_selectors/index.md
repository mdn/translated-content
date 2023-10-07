---
title: 속성 선택자
slug: Learn/CSS/Building_blocks/Selectors/Attribute_selectors
l10n:
  sourceCommit: 751d58669499de0c6ea0d5b356e0e1448418c5d3
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks")}}

HTML에 대한 연구에서 알 수 있듯이, 요소에는 마크업되는 요소에 대한 자세한 정보를 제공하는 속성이 있을 수 있습니다. CSS에서는 속성 선택자를 사용하여 특정 속성이 있는 요소를 대상으로 지정할 수 있습니다. 이 과정에서는 이러한 매우 유용한 선택자를 사용하는 방법을 보여줍니다.

<table>
  <tbody>
    <tr>
      <th scope="row">전제조건:</th>
      <td>
        기본 컴퓨터 활용 능력,
        <a
          href="/ko/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >설치된 기본 소프트웨어</a
        >,
        <a
          href="/ko/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >파일 작업</a
        >에 대한 기본 지식, HTML 기초 (<a href="/ko/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 소개</a
        > 학습), CSS 작동 방식에 대한 아이디어 (<a href="/ko/docs/Learn/CSS/First_steps">CSS 첫 단계</a> 공부)
      </td>
    </tr>
    <tr>
      <th scope="row">목적:</th>
      <td>속성 선택자가 무엇이고 어떻게 사용하는지 알아봅시다.</td>
    </tr>
  </tbody>
</table>

## 존재 및 값 선택자

이러한 선택기는 속성의 존재 여부(예: `href`) 또는 속성 값에 대한 다양한 일치 항목을 기준으로 요소를 선택할 수 있습니다.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">선택자</th>
      <th scope="col">예시</th>
      <th scope="col">설명</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>[<em>attr</em>]</code></td>
      <td><code>a[title]</code></td>
      <td>
        <em>attr</em> 속성이 있는 요소와 일치합니다(이름은 대괄호 안의 값).
      </td>
    </tr>
    <tr>
      <td><code>[<em>attr</em>=<em>value</em>]</code></td>
      <td><code>a[href="https://example.com"]</code></td>
      <td>
        값이 정확히 <em>value</em>(따옴표 안의 문자열)인 <em>attr</em> 속성이 있는 요소와 일치합니다.
      </td>
    </tr>
    <tr>
      <td><code>[<em>attr</em>~=<em>value</em>]</code></td>
      <td><code>p[class~="special"]</code></td>
      <td>
        <p>
          <br />
          값이 정확히 <em>value</em>이거나 (공백으로 구분된) 값 목록에 <em>value</em>가 포함된 <em>attr</em> 속성이 있는 요소와 일치합니다.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>[<em>attr</em>|=<em>value</em>]</code></td>
      <td><code>div[lang|="zh"]</code></td>
      <td>
        값이 정확히 <em>value</em>이거나 바로 뒤에 하이픈이 오는 <em>value</em>로 시작하는 <em>attr</em> 속성이 있는 요소와 일치합니다.
      </td>
    </tr>
  </tbody>
</table>

아래 예에서 이러한 선택자가 사용되는 것을 볼 수 있습니다.

- `li[class]`를 사용하여 클래스 속성이 있는 모든 목록 항목을 일치시킬 수 있습니다. 이것은 첫 번째 항목을 제외한 모든 목록 항목과 일치합니다.
- `li[class="a"]`는 클래스가 `a`인 선택자와 일치하지만 값의 일부로 공백으로 구분된 다른 클래스가 있는 `a` 클래스가 있는 선택자는 일치하지 않습니다. 두 번째 목록 항목을 선택합니다.
- `li[class~="a"]`는 `a` 클래스와 일치하지만 공백으로 구분된 목록의 일부로 `a` 클래스를 포함하는 값과도 일치합니다. 두 번째 및 세 번째 목록 항목을 선택합니다.

{{EmbedGHLiveSample("css-examples/learn/selectors/attribute.html", '100%', 800)}}

## 하위 문자열 일치 선택자

이러한 선택자는 속성 값 내에서 하위 문자열의 고급 일치를 허용합니다. 예를 들어 `box-warning` 및 `box-error` 클래스가 있고 문자열 "box-"로 시작하는 모든 항목을 일치시키려는 경우, `[class^="box-"]`를 사용하여 둘 다 선택할 수 있습니다(또는 위 섹션에서 설명한 `[class|="box"]`).

| 선택자          | 예시                | 설명                                                                        |
| --------------- | ------------------- | --------------------------------------------------------------------------- |
| `[attr^=value]` | `li[class^="box-"]` | 값이 *value*로 시작하는 _attr_ 속성이 있는 요소와 일치합니다.               |
| `[attr$=value]` | `li[class$="-box"]` | 값이 *value*로 끝나는 _attr_ 속성이 있는 요소와 일치합니다.                 |
| `[attr*=value]` | `li[class*="box"]`  | 값이 문자열 내에서 *value*를 포함하는 _attr_ 속성이 있는 요소와 일치합니다. |

(참고: `^` 및 `$`는 소위 정규식에서 각각 시작 및 종료를 의미하는 닻으로 오랫동안 사용되어 왔다는 점에 유의하는 것이 도움이 될 수 있습니다.)

다음 예는 이 선택자의 사용법을 보여줍니다:

- `li[class^="a"]`는 `a`로 시작하는 모든 속성 값과 일치하므로 처음 두 목록 항목과 일치합니다.
- `li[class$="a"]`는 `a`로 끝나는 모든 속성 값과 일치하므로 첫 번째 및 세 번째 목록 항목과 일치합니다.
- `li[class*="a"]`는 문자열에서 `a`가 나타나는 모든 속성 값과 일치하므로 모든 목록 항목과 일치합니다.

{{EmbedGHLiveSample("css-examples/learn/selectors/attribute-substring.html", '100%', 800)}}

## 대소문자 구분

대소문자를 구분하지 않고 속성 값을 일치시키려면 닫는 괄호 앞에 `i`값을 사용할 수 있습니다. 이 플래그는 대소문자를 구분하지 않고 ASCII 문자와 일치하도록 브라우저에 지시합니다. 플래그가 없으면 문서 언어의 대소문자 구분에 따라 값이 일치합니다. - HTML의 경우 대소문자를 구분합니다.

아래 예에서, 첫 번째 선택자는 `a`로 시작하는 다른 값과 일치합니다. 다른 두 목록 항목은 대문자 A로 시작하기 때문에 첫 번째 목록 항목에만 일치합니다. 두 번째 선택자는 대소문자를 구분하지 않는 플래그를 사용하므로 모든 목록 항목과 일치합니다.

{{EmbedGHLiveSample("css-examples/learn/selectors/attribute-case.html", '100%', 800)}}

> **참고:** 새 값 `s`도 있습니다. 이 값은 일반적으로 일치가 대소문자를 구분하지 않는 컨텍스트에서 대소문자 구분 일치를 강제하지만 브라우저에서는 잘 지원되지 않으며 HTML 컨텍스트에서는 그다지 유용하지 않습니다.

## 요약

이제 속성 선택자가 완료되었으므로, 다음 문서로 이동하여 [의사 클래스와 의사 요소 선택자](/ko/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)에 대해 읽어볼 수 있습니다.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks")}}
