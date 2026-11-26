---
title: 카드(Card)
slug: Web/CSS/How_to/Layout_cookbook/Card
l10n:
  sourceCommit: f79a491594ebb5634949ed31b26155973a39166e
---

이 패턴은 선택적으로 푸터를 포함할 수 있는 **카드(card) 컴포넌트**의 목록을 다룹니다. 각 카드는 제목, 이미지, 설명 또는 기타 콘텐츠, 그리고 출처 또는 푸터를 포함합니다. 카드는 일반적으로 그룹이나 컬렉션 형태로 표시됩니다.

## 요구 사항

- 카드 컴포넌트의 그룹을 만들고, 각 카드에는 제목, 이미지, 콘텐츠, (선택적으로) 푸터가 포함되어야 합니다.
- 카드 그룹 내의 모든 카드는 **같은 높이**여야 합니다.
- 선택적인 카드 푸터는 카드의 **하단에 고정**되어야 합니다.
- 카드 그룹은 세로와 가로, **두 방향 모두에서 정렬**되어야 합니다.

## 레시피

아래 코드 블록에서 **Play**를 클릭하면 MDN Playground에서 예제를 편집할 수 있습니다.

```html live-sample___card-example
<div class="cards">
  <article class="card">
    <header>
      <h2>짧은 제목</h2>
    </header>

    <img
      src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg"
      alt="열기구" />
    <div class="content">
      <p>
        열기구를 이용해 북극점에 도달하려는 아이디어는 오래전부터 제안되어
        왔습니다.
      </p>
    </div>
  </article>

  <article class="card">
    <header>
      <h2>짧은 제목</h2>
    </header>

    <img
      src="https://mdn.github.io/shared-assets/images/examples/balloons2.jpg"
      alt="열기구" />
    <div class="content">
      <p>짧은 콘텐츠.</p>
    </div>
    <footer>푸터가 있습니다!</footer>
  </article>

  <article class="card">
    <header>
      <h2>이 카드에는 조금 더 긴 제목이 있습니다</h2>
    </header>

    <img
      src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg"
      alt="열기구" />
    <div class="content">
      <p>
        1863년 파리에서 Delaville Dedreux가 출판한 흥미로운 저작에서는 비행선을
        이용해 북극점에 도달하는 제안이 등장합니다.
      </p>
    </div>
    <footer>푸터가 있습니다!</footer>
  </article>
  <article class="card">
    <header>
      <h2>짧은 제목</h2>
    </header>

    <img
      src="https://mdn.github.io/shared-assets/images/examples/balloons2.jpg"
      alt="열기구" />
    <div class="content">
      <p>
        열기구를 이용해 북극점에 도달하려는 아이디어는 오래전부터 제안되어
        왔습니다.
      </p>
    </div>
  </article>
</div>
```

```css live-sample___card-example
body {
  font: 1.2em sans-serif;
}

img {
  max-width: 100%;
}

.cards {
  max-width: 700px;
  margin: 1em auto;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 20px;
}

.card {
  border: 1px solid #999999;
  border-radius: 3px;

  display: grid;
  grid-template-rows: max-content 200px 1fr;
}

.card img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.card h2 {
  margin: 0;
  padding: 0.5rem;
}

.card .content {
  padding: 0.5rem;
}

.card footer {
  background-color: #333333;
  color: white;
  padding: 0.5rem;
}
```

{{EmbedLiveSample("card-example", "", "950px")}}

## 선택 사항

각 카드는 레이아웃이 1차원처럼 보이지만, **CSS 그리드 레이아웃**을 사용해 배치했습니다. 이렇게 하면 그리드 **트랙(track)**의 콘텐츠 기반 크기 조정을 활용할 수 있습니다. 단일 열 그리드를 설정하려면 다음과 같이 작성할 수 있습니다.

```css
.card {
  display: grid;
  grid-template-rows: max-content 200px 1fr;
}
```

{{cssxref("display", "display: grid")}}는 요소를 그리드 컨테이너로 변환합니다. {{cssxref("grid-template-rows")}} 속성의 세 값은 카드 컴포넌트의 처음 세 자식 요소 높이를 순서대로 정의하여, 최소 세 개의 트랙으로 그리드를 나눕니다.

각 `card` 컴포넌트는 {{HTMLElement("header")}}, {{HTMLElement("img")}}, {{HTMLElement("div")}} 요소를 순서대로 포함하며, 일부 카드에는 {{HTMLElement("footer")}}가 추가로 포함됩니다.

제목이 있는 트랙은 {{cssxref("max-content")}}로 설정되어 늘어나지 않도록 했습니다. 이미지 트랙은 높이를 200픽셀로 고정했습니다. 세 번째 트랙(콘텐츠 영역)은 `1fr`로 설정되어 남은 공간을 채웁니다.

명시적으로 크기가 정의된 세 개의 자식 요소 이후에 오는 요소는 암시적 그리드에 트랙을 생성하며, 기본적으로 콘텐츠에 맞춰 자동 크기 조정됩니다. 카드에 푸터가 있는 경우, 푸터는 자동 크기 조정되며 카드의 하단에 위치합니다. 이때 콘텐츠 `<div>`는 남은 공간을 채우도록 확장됩니다.

다음 규칙 집합은 카드 그룹을 위한 그리드를 생성합니다.

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 20px;
}
```

{{cssxref("grid-template-columns")}} 속성은 그리드 열의 너비를 정의합니다. 여기서는 최소 `230px`에서 시작해 사용 가능한 공간을 채울 수 있도록 확장되는 열을 `auto-fill`로 반복 생성합니다. {{cssxref("gap")}} 속성은 인접한 행과 열 사이의 간격을 `20px`로 설정합니다.

> [!NOTE]
> 각 카드는 독립적인 그리드이므로, 카드 컴포넌트 내부의 구성 요소들이 다른 카드의 동일한 구성 요소들과 정확히 정렬되지는 않습니다. 인접한 카드들 간에 동일한 구성 요소를 정렬하려면 [서브그리드(subgrid)](/ko/docs/Web/CSS/Guides/Grid_layout/Subgrid)를 사용할 수 있습니다.

## 대안 방법

[플렉스박스](/ko/docs/Web/CSS/Guides/Flexible_box_layout)를 사용해 각 카드 컴포넌트를 배치할 수도 있습니다. 플렉스박스를 사용할 경우, 각 카드의 트랙 크기는 카드 컨테이너가 아니라 자식 요소에 설정한 {{cssxref("flex")}} 속성으로 제어합니다.

플렉스박스에서는 컨테이너가 아니라 플렉스 아이템에서 크기를 정의합니다. 그리드와 플렉스박스 중 어떤 것을 선택할지는 트랙을 컨테이너에서 제어하고 싶은지, 아니면 아이템에 규칙을 두고 싶은지에 따라 달라집니다.

이 예제에서는 카드를 세로와 가로 방향 모두에서 정렬하는 것이 중요하고, 또한 서브그리드를 통해 카드 컴포넌트 간 구성 요소 정렬이 가능하다는 점에서 그리드를 선택했습니다. 플렉스박스에는 서브그리드와 같은 기능에 대한 깔끔한 대안이 없습니다.

## 접근성 고려 사항

카드 컴포넌트에 포함되는 콘텐츠에 따라 접근성을 향상시키기 위해 추가로 고려해야 할 사항이 있을 수 있습니다. 자세한 내용은 Heydon Pickering의 [Inclusive components: Card](https://inclusive-components.design/cards/)를 참고하세요.

## 같이 보기

- {{Cssxref("grid-template-columns")}}
- {{Cssxref("grid-template-rows")}}
- {{Cssxref("gap")}}
- [Inclusive components: Card](https://inclusive-components.design/cards/)
- [CSS grid layout](/ko/docs/Web/CSS/Guides/Grid_layout) 모듈
