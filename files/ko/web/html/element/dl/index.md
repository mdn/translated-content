---
title: <dl> 설명 목록 요소
slug: Web/HTML/Element/dl
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

**HTML `<dl>` 요소**는 설명 목록을 나타냅니다. `<dl>`은 {{htmlelement("dt")}}로 표기한 용어와 {{htmlelement("dd")}} 요소로 표기한 설명 그룹의 목록을 감싸서 설명 목록을 생성합니다. 주로 용어사전 구현이나 메타데이터(키-값 쌍 목록)를 표시할 때 사용합니다.

{{EmbedInteractiveExample("pages/tabbed/dl.html", "tabbed-standard")}}

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

## 접근성 고려사항

각각의 스크린 리더는 `<dl>`를 다르게 표현합니다. 즉, 총 아이템의 개수, 용어/정의 컨텍스트 및 탐색 방법등을 다르게 노출합니다. 이러한 차이가 반드시 버그는 아닙니다. iOS 14부터의 VoiceOver는 전체 읽기 멍령이 아닌 가상 커서 탐색 시, `<dl>` 콘텐츠가 목록임을 알립니다. VoiceOver는 `<dl>`를 이용한 목록 탐색을 지원하지 않습니다. ARIA 용어 및 정의 역할을 `<dl>` 구조에 적용하면 macOS 및 iOS에서 VoiceOver의 읽기 방식이 조정되므로 주의해야 합니다.

- [iOS14에서의 VoiceOver 설명 목록 지원](https://adrianroselli.com/2020/09/voiceover-on-ios-14-supports-description-lists.html)
- [설명 목록 지원에 대한 개략](https://adrianroselli.com/2022/12/brief-note-on-description-list-support.html)

## 예제

### 단일 용어와 단일 정의

```html
<dl>
  <dt>Firefox</dt>
  <dd>
    Mozilla 재단과 수 백명의 자원봉사자가 개발한 무료 오픈소스 크로스 플랫폼
    그래픽 웹 브라우저.
  </dd>

  <!-- 다른 용어 및 정의 -->
</dl>
```

#### 결과

{{EmbedLiveSample("Single_term_and_description")}}

### 복수 용어와 단일 정의

```html
<dl>
  <dt>Firefox</dt>
  <dt>Mozilla Firefox</dt>
  <dt>Fx</dt>
  <dd>
    Mozilla 재단과 수 백명의 자원봉사자가 개발한 무료 오픈소스 크로스 플랫폼
    그래픽 웹 브라우저.
  </dd>

  <!-- 다른 용어 및 정의 -->
</dl>
```

#### 결과

{{EmbedLiveSample("Multiple_terms_single_description")}}

### 단일 용어와 복수 정의

```html
<dl>
  <dt>Firefox</dt>
  <dd>
    Mozilla 재단과 수 백명의 자원봉사자가 개발한 무료 오픈소스 크로스 플랫폼
    그래픽 웹 브라우저.
  </dd>
  <dd>
    붉은 판다, 레서 판다, 랫서 판다, 혹은 "Firefox"는 초식성 포유류이다. 몸
    길이는 애완용 고양이보다 약간 큰 정도인 60cm다.
  </dd>

  <!-- 다른 용어 및 정의 -->
</dl>
```

#### 결과

{{EmbedLiveSample("Single_term_multiple_descriptions")}}

### 복수 용어와 복수 정의

위의 예제를 결합하여 여러 용어를 여러 정의와 연결하는 것도 가능합니다.

### 메타데이터

`<dl>`은 메타데이터를 키-값 쌍으로 표시할 때도 유용합니다.

```html
<dl>
  <dt>Name</dt>
  <dd>Godzilla</dd>
  <dt>Born</dt>
  <dd>1952</dd>
  <dt>Birthplace</dt>
  <dd>Japan</dd>
  <dt>Color</dt>
  <dd>Green</dd>
</dl>
```

#### 결과

{{EmbedLiveSample("Metadata")}}

팁: 아래처럼 키-값 구분자를 CSS로 지정하면 유용합니다.

```css
dt:after {
  content: ": ";
}
```

### 이름-값 그룹을 `<div>`로 감싸기

HTML에서는 `<dl>` 요소의 각 이름-값 그룹을 {{htmlelement("div")}} 요소로 감쌀 수 있습니다. 이는 마이크로데이터를 사용하거나 전역 속성이 전체 그룹에 적용될 때 또는 스타일링 목적으로 유용할 수 있습니다.

```html
<dl>
  <div>
    <dt>Name</dt>
    <dd>Godzilla</dd>
  </div>
  <div>
    <dt>Born</dt>
    <dd>1952</dd>
  </div>
  <div>
    <dt>Birthplace</dt>
    <dd>Japan</dd>
  </div>
  <div>
    <dt>Color</dt>
    <dd>Green</dd>
  </div>
</dl>
```

#### 결과

{{EmbedLiveSample('Wrapping name-value groups in `div` elements')}}

## 참고

페이지에서 들여쓰기를 하기 위한 목적으로 `<dl>` (또는 {{htmlelement("ul")}}) 요소를 사용하지 마세요. 작동할 수는 있으나 좋지 않은 방법이고, 설명 목록의 원래 목적을 흐립니다.

용어의 들여쓰기를 수정하려면 [CSS](/ko/docs/Web/CSS) {{cssxref("margin")}} 속성을 사용하세요.

## 기술 요약

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a
          href="/ko/docs/Web/HTML/Content_categories"
          >콘텐츠 카테고리</a
        >
      </th>
      <td>
        <a href="/ko/docs/Web/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >, 만약 <code>&#x3C;dl></code>의 자식 중 이름-값 그룹이 포함된 경우에는 <a href="/ko/docs/Web/HTML/Content_categories#뚜렷한_콘텐츠">뚜렷한 콘텐츠.</a>
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <p>
          하나 이상의 {{htmlelement("dt")}} 요소와 하나 이상의
          {{htmlelement("dd")}} 요소로 구성한 그룹 0개 이상. 선택적으로
          {{htmlelement("script")}}와
          {{htmlelement("template")}}을 혼합 가능.<br />또는, 하나
          이상의 {{htmlelement("div")}}. 선택적으로
          {{htmlelement("script")}}, {{htmlelement("template")}}
          혼합 가능.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>불가능, 시작과 끝에 태그를 추가 필수.</td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        <a href="/ko/docs/Web/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >를 허용하는 모든 요소.
      </td>
    </tr>
    <tr>
      <th scope="row">암시적 ARIA 역할</th>
      <td>
        <a href='https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role'>해당 역할 없음</a>
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/group_role'><code>group</code></a>,
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/list_role'><code>list</code></a>,
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/none_role'><code>none</code></a>,
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/presentation_role'><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLDListElement")}}</td>
    </tr>
  </tbody>
</table>

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTMLElement("dt")}} 요소
- {{HTMLElement("dd")}} 요소
