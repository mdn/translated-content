---
title: <figure>
slug: Web/HTML/Element/figure
---

{{HTMLSidebar}}

**HTML `<figure>` 요소**는 독립적인 콘텐츠를 표현합니다. {{htmlelement("figcaption")}} 요소를 사용해 설명을 붙일 수 있습니다. 피규어, 설명, 콘텐츠는 하나의 단위로 참조됩니다.

{{EmbedInteractiveExample("pages/tabbed/figure.html","tabbed-shorter")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a
          href="/ko/docs/Web/Guide/HTML/%EC%BB%A8%ED%85%90%ED%8A%B8_%EC%B9%B4%ED%85%8C%EA%B3%A0%EB%A6%AC"
          title="HTML/Content_categories"
          >콘텐츠 카테고리</a
        >
      </th>
      <td>
        <a
          href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#플로우_콘텐츠"
          title="HTML/Content categories#Flow content"
          >플로우 콘텐츠</a
        >, 구획 루트, 뚜렷한 콘텐츠.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <p>
          {{htmlelement("figcaption")}}과 뒤따르는
          <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#플로우_콘텐츠"
            >플로우 콘텐</a
          >츠.<br />혹은 플로우 콘텐츠를 뒤따르는
          <code>&#x3C;figcaption></code>.<br />혹은 플로우 콘텐츠.
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
        <a
          href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#플로우_콘텐츠"
          title="HTML/Content categories#Flow content"
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
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)만 포함합니다.

## 사용 일람

- 보통 `<figure>`는 주 문서 플로우가 참조하지만, 다른 부분이나 부록으로 이동해도 문제 없는 이미지, 삽화, 도표, 코드 조각 등을 맡습니다.
- `<figure>`는 구획 루트이므로 `<figure>` 요소의 콘텐츠는 문서의 주 개요에서 제외됩니다.
- 안에 (처음이나 마지막 자식으로) {{HTMLElement("figcaption")}}을 넣어서 설명을 덧붙일 수 있습니다. 제일 처음 `<figcaption>`을 설명으로 사용합니다.

## 예제

### 이미지

```html
<!-- Just an image -->
<figure>
  <img
    src="https://developer.mozilla.org/static/img/favicon144.png"
    alt="A robotic monster over the letters MDN." />
</figure>

<!-- Image with a caption -->
<figure>
  <img
    src="https://developer.mozilla.org/static/img/favicon144.png"
    alt="A robotic monster over the letters MDN." />
  <figcaption>MDN Logo</figcaption>
</figure>
```

{{EmbedLiveSample("이미지", "100%", 250)}}

### 코드 조각

```html
<figure>
  <figcaption><code>navigator</code>를 이용하여 브라우저 정보 얻기</figcaption>
  <pre>
function NavigatorExample() {
  var txt;
  txt = "Browser CodeName: " + navigator.appCodeName;
  txt+= "Browser Name: " + navigator.appName;
  txt+= "Browser Version: " + navigator.appVersion ;
  txt+= "Cookies Enabled: " + navigator.cookieEnabled;
  txt+= "Platform: " + navigator.platform;
  txt+= "User-agent header: " + navigator.userAgent;
}
  </pre>
</figure>
```

{{EmbedLiveSample("코드_조각", "100%", 250)}}

### 인용문

```html
<figure>
  <figcaption><cite>Edsger Dijkstra:</cite></figcaption>
  <blockquote>
    If debugging is the process of removing software bugs, then programming must
    be the process of putting them in.
  </blockquote>
</figure>
```

{{EmbedLiveSample("인용문")}}

### 시

```html
<figure>
  <p style="white-space:pre">
    Bid me discourse, I will enchant thine ear, Or like a fairy trip upon the
    green, Or, like a nymph, with long dishevell'd hair, Dance on the sands, and
    yet no footing seen: Love is a spirit all compact of fire, Not gross to
    sink, but light, and will aspire.
  </p>
  <figcaption><cite>Venus and Adonis</cite>, by William Shakespeare</figcaption>
</figure>
```

{{EmbedLiveSample("시", "100%", 250)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTMLElement("figcaption")}}
