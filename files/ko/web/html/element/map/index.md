---
title: <map>
slug: Web/HTML/Element/map
---

{{HTMLSidebar}}

**HTML `<map>` 요소**는 {{htmlelement("area")}} 요소와 함께 이미지 맵(클릭 가능한 링크 영역)을 정의할 때 사용합니다.

{{EmbedInteractiveExample("pages/tabbed/map.html", "tabbed-standard")}}

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
        모든
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#투명_콘텐츠_모델"
          >투명한</a
        >
        콘텐츠.
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
      <td>없음</td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLMapElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

- {{htmlattrdef("name")}}
  - : 맵을 참조할 때 사용할 수 있는 이름. 반드시 존재해야 하고, 값이 비면 안되며, 값에 공백 문자가 포함되어도 안됩니다. `name` 특성은 문서 내의 모든 `<map>`에서 유일해야 합니다. [`id`](/ko/docs/Web/HTML/Global_attributes#id) 특성이 존재하는 경우 `name`과 값이 동일해야 합니다.

## 예제

```html
<map name="primary">
  <area shape="circle" coords="75,75,75" href="left.html" />
  <area shape="circle" coords="275,75,75" href="right.html" />
</map>
<img usemap="#primary" src="https://placehold.it/350x150" alt="350 x 150 pic" />
```

### 결과

{{EmbedLiveSample("예제", "350", "150")}}

### 예상 결과

키보드의 탭을 눌렀을 때, 위의 예제는 아래 사진처럼 나와야 합니다.

`left.html` 링크:
![](screen_shot_2017-02-02_at_10.48.40_pm.png)

`right:html` 링크:
![](screen_shot_2017-02-02_at_10.49.04_pm.png)

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTMLElement("a")}}
- {{HTMLElement("area")}}
