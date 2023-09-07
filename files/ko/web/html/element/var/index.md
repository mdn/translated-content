---
title: "<var>: 변수 요소"
slug: Web/HTML/Element/var
---

{{HTMLSidebar}}

**HTM `<var>` 요소**는 수학 표현 또는 프로그래밍에서 변수의 이름을 나타냅니다. 보통 현재 글씨체의 기울임꼴로 표시하지만, 브라우저마다 다를 수 있습니다.

{{EmbedInteractiveExample("pages/tabbed/var.html", "tabbed-shorter")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a>
      </th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        >, 뚜렷한 콘텐츠.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        >를 허용하는 모든 요소.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>모두</td>
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

### 관련 요소

`<var>`와 함께 자주 사용하는 요소는 다음과 같습니다.

- {{htmlelement("code")}}: HTML 코드 요소
- {{htmlelement("kbd")}}: HTML 키보드 입력 요소
- {{htmlelement("smap")}}: HTML 출력 예시 요소

`<var>`의 의미에 맞춰 사용하지 않고, 기울임꼴을 적용하기 위해 잘못 사용한 경우, 적절한 CSS와 {{htmlelement("span")}}를 사용해야 합니다. 혹은, 의미에 맞는 요소를 다음 목록에서 골라 사용하세요.

- {{htmlelement("em")}}
- {{htmlelement("i")}}
- {{htmlelement("q")}}

## 예제

### 기본 예제

`<var>`를 사용해 수학 등식의 변수명을 나타내는 간단한 예제입니다.

```plain
A simple equation:
  x = y + 2
```

{{EmbedLiveSample("기본_예제", 650, 80)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
