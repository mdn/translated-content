---
title: <dl>
slug: Web/HTML/Element/dl
---

{{HTMLSidebar}}

**HTML `<dl>` 요소**는 설명 목록을 나타냅니다. `<dl>`은 {{htmlelement("dt")}}로 표기한 용어와 {{htmlelement("dd")}} 요소로 표기한 설명 그룹의 목록을 감싸서 설명 목록을 생성합니다. 주로 용어사전 구현이나 메타데이터(키-값 쌍 목록)를 표시할 때 사용합니다.

{{EmbedInteractiveExample("pages/tabbed/dl.html", "tabbed-standard")}}

The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone [https://github.com/mdn/interactive-examples](https://github.com/mdn/interactive-examples) and send us a pull request.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a
          href="/ko/docs/Web/Guide/HTML/%EC%BB%A8%ED%85%90%ED%8A%B8_%EC%B9%B4%ED%85%8C%EA%B3%A0%EB%A6%AC"
          >콘텐츠 카테고리</a
        >
      </th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >. <code>&#x3C;dl></code>의 자식 중 이름-값 그룹이 있으면 뚜렷한 콘텐츠.
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
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >를 허용하는 모든 요소.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/group_role'><code>group</code></a>, <a href='/ko/docs/Web/Accessibility/ARIA/Roles/presentation_role'><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLDListElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

## 예제

### 하나의 용어와 하나의 정의

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

{{EmbedLiveSample("하나의_용어와_하나의_정의")}}

### 여러 개의 용어와 하나의 정의

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

{{EmbedLiveSample("여러_개의_용어와_하나의_정의")}}

### 하나의 용어와 여러 개의 정의

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

{{EmbedLiveSample("하나의_용어와_여러_개의_정의")}}

### 여러 개의 용어와 여러 개의 정의

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

팁: 아래처럼 키-값 구분자를 CSS로 지정하면 편리합니다.

```css
dt:after {
  content: ": ";
}
```

{{EmbedLiveSample("메타데이터")}}

### 이름-값 그룹을 {{htmlelement("div")}}로 감싸기

{{glossary("WHATWG")}} HTML에서는 `<dl>` 안 각각의 이름-값 그룹을 {{htmlelement("div")}}로 감쌀 수 있습니다. 마이크로데이터를 사용할 때, 그룹에 전역 특성을 적용할 때, 아니면 스타일을 적용할 때 유용할 수 있습니다.

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

## 참고

페이지에서 들여쓰기를 하기 위한 목적으로 `<dl>` (또는 {{htmlelement("ul")}}) 요소를 사용하지 마세요. 작동할 수는 있으나 좋지 않은 방법이고, 설명 목록의 원래 목적을 흐립니다.

용어의 들여쓰기를 수정하려면 [CSS](/ko/docs/Web/CSS) {{cssxref("margin")}} 속성을 사용하세요.

## 접근성 고려사항

각각의 스크린 리더는 `<dl>`을 다르게 표현합니다. iOS의 VoiceOver 등 일부 스크린 리더는 `<dl>`의 콘텐츠를 리스트로 표현하지 않습니다. 따라서, 각 아이템의 콘텐츠는 리스트 그룹 내 다른 항목과의 관계를 표현할 수 있는 방식으로 작성해야 합니다.

- [CodePen - HTML Buddies: dt & dd](https://s.codepen.io/aardrian/debug/NzGaKP)

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTMLElement("dt")}} 요소
- {{HTMLElement("dd")}} 요소
