---
title: title
slug: Web/HTML/Global_attributes/title
---

{{HTMLSidebar("Global_attributes")}}

**`title`** [전역 특성](/ko/docs/Web/HTML/Global_attributes)은 요소와 관련된 추가 정보를 제공하는 텍스트를 나타냅니다.

{{EmbedInteractiveExample("pages/tabbed/attribute-title.html","tabbed-shorter")}}

다음과 같은 경우 많이 쓰입니다.

- 보조 기술을 위해 {{HTMLElement("iframe")}} 요소에 이름 붙이기
- 진짜 {{HTMLElement("label")}}을 표시하지 못할 때에 대비해 {{htmlelement("input")}} 요소에 프로그래밍을 통한 레이블 추가하기
- {{htmlelement("table")}} 요소 컨트롤에 레이블 추가하기

{{HTMLElement("link")}}, {{HTMLElement("abbr")}}, {{HTMLElement("input")}}, {{HTMLElement("menuitem")}} 요소의 `title` 특성은 추가적인 뜻을 가지고 있습니다..

## 여러 줄의 제목

`title` 특성은 여러 줄을 가질 수 있으며, 모든 `U+000A LINE FEED` (`LF`) 문자가 줄을 바꿉니다. 즉, 다음의 경우 툴팁이 두 줄로 나타나므로 주의를 요해야 합니다.

### HTML

```html
<p>
  <code>title</code> 안에서 줄을 바꿀 땐 조심해야 합니다. 이
  <abbr
    title="This is a
multiline title"
    >예제</abbr
  >처럼요.
</p>
```

### 결과

{{EmbedLiveSample('여러_줄의_제목')}}

## 특성 상속

요소가 `title` 특성을 가지고 있지 않을 땐 부모 요소로부터 상속합니다. 부모 요소 또한 자신의 부모로부터 상속할 수 있습니다.

`title`에 빈 문자열을 지정한 경우 조상의 `title`이 더 이상 관련되지 않았으며 해당 요소에 툴팁을 표시하지 말아야 함을 나타냅니다.

### HTML

```html
<div title="CoolTip">
  <p>여기 어디에 마우스를 올리면 “CoolTip”이 나타납니다.</p>
  <p title="">하지만 여기에서는 나타나지 않죠.</p>
</div>
```

### 결과

{{EmbedLiveSample('특성_상속')}}

## 접근성 고려사항

`title` 특성은 다음과 같은 경우에 문제가 많습니다.

- 터치 전용 장치 사용자
- 키보드로 탐색하는 사용자
- 스크린 리더, 화면 돋보기 등 보조 기술로 탐색하는 사용자
- 섬세한 운동조절이 힘든 사용자
- 인지력 문제를 가진 사용자

일관적이지 못한 브라우저 지원 문제에 더불어, 브라우저가 렌더링 한 페이지를 보조 기술이 분석함으로써 문제가 심해집니다. 툴팁 효과가 필요한 경우, [위에 해당하는 사용자도 접근하기 좋은 다른 기법](https://inclusive-components.design/tooltips-toggletips/)을 사용하는 것이 좋습니다.

- [3.2.5.1. The title attribute | W3C HTML 5.2: 3. Semantics, structure, and APIs of HTML documents](https://www.w3.org/TR/html/dom.html#the-title-attribute)
- [Using the HTML title attribute – updated | The Paciello Group](https://developer.paciellogroup.com/blog/2013/01/using-the-html-title-attribute-updated/)
- [Tooltips & Toggletips - Inclusive Components](https://inclusive-components.design/tooltips-toggletips/)
- [The Trials and Tribulations of the Title Attribute - 24 Accessibility](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/)

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- All [global attributes](/ko/docs/Web/HTML/Global_attributes).
- {{domxref("HTMLElement.title")}} that reflects this attribute.
