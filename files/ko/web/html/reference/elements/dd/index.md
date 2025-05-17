---
title: <dd> 설명 세부정보 요소
slug: Web/HTML/Reference/Elements/dd
original_slug: Web/HTML/Element/dd
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

**HTML `<dd>` 요소**는 설명 목록 요소({{HTMLElement("dl")}})에서 앞선 용어({{htmlelement("dt")}})에 대한 설명, 정의, 또는 값을 제공합니다.

{{InteractiveExample("HTML Demo: &lt;dd&gt;", "tabbed-standard")}}

```html interactive-example
<p>Cryptids of Cornwall:</p>

<dl>
  <dt>Beast of Bodmin</dt>
  <dd>A large feline inhabiting Bodmin Moor.</dd>

  <dt>Morgawr</dt>
  <dd>A sea serpent.</dd>

  <dt>Owlman</dt>
  <dd>A giant owl-like creature.</dd>
</dl>
```

```css interactive-example
p,
dt {
  font-weight: bold;
}

dl,
dd {
  font-size: 0.9rem;
}

dd {
  margin-bottom: 1em;
}
```

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Reference/Global_attributes)만을 포함합니다.

## 예제

예시를 보러면 [`<dl>` 예제](/ko/docs/Web/HTML/Reference/Elements/dl#예제)를 참고하세요.

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
      <td>없음.</td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <a href="/ko/docs/Web/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>
        여는 태그는 필수입니다. 바로 다음 요소가 <code>&#x3C;dd></code> 또는
        {{HTMLElement("dt")}}거나, 자신이 부모의 마지막 자식이라면 닫는
        태그는 생략할 수 있습니다.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        {{HTMLElement("dl")}} 또는 {{HTMLElement("dl")}}의 자식 요소인 {{htmlelement("div")}}. 이 요소는 {{HTMLElement("dt")}} 또는 다른 {{HTMLElement("dd")}} 요소 뒤에 사용할 수 있습니다.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 이전 형제 요소</th>
      <td>{{HTMLElement("dt")}} 또는 다른 <code>&#x3C;dd></code>.</td>
    </tr>
    <tr>
      <th scope="row">암시적 ARIA 역할</th>
      <td>
        <a href='https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role'>해당 역할 없음</a>
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>허용되는 <code>role</code> 없음</td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTMLELement("dl")}}
- {{HTMLElement("dt")}}
