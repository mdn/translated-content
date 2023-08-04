---
title: "<dfn>: 정의 요소"
slug: Web/HTML/Element/dfn
---

{{HTMLSidebar}}

**HTML `<dfn>` 요소**는 현재 맥락이나 문장에서 정의하고 있는 용어를 나타냅니다. `<dfn>`에서 가장 가까운 {{htmlelement("p")}}, {{htmlelement("dt")}}/{{htmlelement("dd")}} 쌍, {{htmlelement("section")}} 조상 요소를 용어 정의로 간주합니다.

{{EmbedInteractiveExample("pages/tabbed/dfn.html", "tabbed-shorter")}}

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
        >. 단, 다른 {{htmlelement("dfn")}} 요소는 불가능.
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
      <th scope="row">암시적 ARIA 역할</th>
      <td><a href='/ko/docs/Web/Accessibility/ARIA/Roles/definition_role'><code>definition</code></a></td>
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

`<dfn>` 요소를 보는 것 만으로는 그다지 명확하지 않은 부분이 있습니다.

### 정의하고 있는 용어 지정하기

다음 규칙을 따라 현재 용어가 어느건지 판별합니다.

1. `<dfn>` 요소가 [`title`](/ko/docs/Web/HTML/Global_attributes#title) 특성을 가지고 있으면 그 값을 현재 정의 중인 용어로 간주합니다. `<dfn>`은 여전히 텍스트 콘텐츠를 가지고 있겠지만, 완전한 용어 대신 준말({{htmlelement("abbr")}})을 넣을 수도 있고, 다른 대체 형태일 수도 있습니다.
2. `<dfn>`이 다른 텍스트는 없이 하나의 자식만 가지는데, 그 자식이 `title` 특성을 가진{{htmlelement("abbr")}}인 경우, 자식 `<abbr>`의 `title` 특성 값을 현재 용어로 간주합니다.
3. 모두 아닌 경우 `<dfn>`의 텍스트 콘텐츠를 현재 용어로 간주합니다. [아래의 첫 번째 예제](#기본적인_용어_식별)에서 확인할 수 있습니다.

> **참고:** `<dfn>` 요소가 `title` 특성을 가진 경우, 그 값은 정의 중인 용어여야 하며 다른 텍스트는 들어가선 안됩니다.

### `<dfn>` 요소를 가리키는 링크

`<dfn>` 요소에 [`id`](/ko/docs/Web/HTML/Global_attributes#id) 특성을 지정하면 {{HTMLElement("a")}} 요소로 `<dfn>`을 가리킬 수 있습니다. 사용자가 용어 뜻을 잘 모를 경우, 링크를 클릭해 빠르게 정의를 확인할 수 있습니다. 따라서 링크 콘텐츠는 용어의 사용 예시 등을 담고 있어야 합니다.

[정의로 링크 예제](#정의로_링크)에서 확인할 수 있습니다.

## 예제

다양한 상황의 예제를 살펴보겠습니다.

### 기본적인 용어 식별

아래 코드는 간단하게 `<dfn>` 요소를 사용해, 정의 문단 내의 용어를 식별합니다.

#### HTML

```html
<p>
  The <strong>HTML Definition element</strong> (<strong
    ><dfn>&lt;dfn&gt;</dfn></strong
  >) is used to indicate the term being defined within the context of a
  definition phrase or sentence.
</p>
```

`<dfn>` 요소에 `title`이 없으므로 `<dfn>`의 텍스트 콘텐츠가 현재 정의 중인 용어입니다.

#### 결과

{{EmbedLiveSample("기본적인_용어_식별", 650, 120)}}

### 정의로 링크

용어의 정의로 링크하는 건 {{htmlelement("a")}} 요소로 다른 링크를 만드는 방법과 같습니다.

#### HTML

```html
<p>
  The <strong>HTML Definition element</strong> (<strong
    ><dfn id="definition-dfn">&lt;dfn&gt;</dfn></strong
  >) is used to indicate the term being defined within the context of a
  definition phrase or sentence.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Graece donan, Latine
  voluptatem vocant. Confecta res esset. Duo Reges: constructio interrete.
  Scrupulum, inquam, abeunti;
</p>

<p>
  Negare non possum. Dat enim intervalla et relaxat. Quonam modo? Equidem e Cn.
  Quid de Pythagora? In schola desinis.
</p>

<p>
  Ubi ut eam caperet aut quando? Cur iustitia laudatur? Aperiendum est igitur,
  quid sit voluptas; Quid enim? Non est igitur voluptas bonum. Urgent tamen et
  nihil remittunt. Quid enim possumus hoc agere divinius?
</p>

<p>
  Because of all of that, we decided to use the
  <code><a href="#definition-dfn">&lt;dfn&gt;</a></code> element for this
  project.
</p>
```

이번에는 [`id`](/ko/docs/Web/HTML/Global_attributes#id) 특성에 `"definition-dfn"`을 사용한 용어 정의입니다. 코드 뒤쪽에서는 `<a>` 태그와 [`href`](/ko/docs/Web/HTML/Element/a#href) 특성 값 `"#definition-dfn"`으로, 정의를 가리키는 링크를 생성합니다.

#### 결과

{{EmbedLiveSample("정의로_링크", 650, 300)}}

### 준말과 정의 같이 사용하기

어떤 경우, 용어를 정의할 때 머리글자 등 준말을 사용하고 싶을 때가 있습니다. 그럴 땐 `<dfn>`과 {{HTMLElement("abbr")}} 요소를 조합하면 됩니다.

#### HTML

```html
<p>
  The <dfn><abbr title="Hubble Space Telescope">HST</abbr></dfn> is among the
  most productive scientific instruments ever constructed. It has been in orbit
  for over 20 years, scanning the sky and returning data and photographs of
  unprecedented quality and detail.
</p>

<p>
  Indeed, the <abbr title="Hubble Space Telescope">HST</abbr> has arguably done
  more to advance science than any device ever built.
</p>
```

`<dfn>` 요소 안에 배치한 `<abbr>`을 주목하세요. `<abbr>`은 준말("HST")과 함께 `title` 특성으로 전체 용어("Hubble Space Telescope")를 지정합니다. `<dfn>`은 `<abbr>`의 준말을 현재 정의하고 있음을 나타냅니다.

#### 결과

{{EmbedLiveSample("준말과_정의_같이_사용하기", 650, 200)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 용어 정의 관련 요소: {{HTMLElement("dl")}}, {{HTMLElement("dt")}}, {{HTMLElement("dd")}}
- {{HTMLElement("abbr")}}
