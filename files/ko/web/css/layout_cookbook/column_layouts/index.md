---
title: 열 레이아웃
slug: Web/CSS/Layout_cookbook/Column_layouts
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

레이아웃을 구성할 때 여러 개의 열을 만들어야 하는 경우가 자주 있습니다. CSS는 이를 구현할 수 있는 여러 가지 방법을 제공합니다. [다단](/ko/docs/Web/CSS/CSS_multicol_layout), [플렉스박스](/ko/docs/Web/CSS/CSS_flexible_box_layout), 또는 [그리드](/ko/docs/Web/CSS/CSS_grid_layout) 레이아웃 중 어떤 것을 사용할지는 구현하려는 목표에 따라 달라집니다. 이 문서에서는 이러한 다양한 방법들을 살펴보며 각각의 사용 방식을 비교합니다.

![three different styles of layouts which have two columns in the container.](cookbook-multiple-columns.png)

## 요구 사항

열을 사용하여 구현하고자 하는 다양한 디자인 패턴들이 있습니다.

- [신문 스타일의 열로 나뉜 연속적인 콘텐츠](#연속된_콘텐츠_흐름,_다단_레이아웃).
- [모든 높이가 동일한 열로 이루어진 단일 행 요소](#동일한_높이의_단일_행_요소,_플렉스박스).
- [행과 열을 기준으로 정렬된 여러 열의 행](#요소를_행과_열로_정렬,_그리드_레이아웃).

## 예시

원하는 레이아웃 요구사항을 충족하려면 서로 다른 레이아웃 방식을 선택해야 합니다.

### 연속된 콘텐츠 흐름, 다단 레이아웃

다단 레이아웃을 사용해 열을 만들면, 텍스트는 연속적인 흐름을 유지하며 각 열을 순서대로 채워 나갑니다. 모든 열의 크기는 동일해야 하며, 특정 열이나 해당 열의 콘텐츠만 개별적으로 선택하여 지정할 수는 없습니다.

{{cssxref("column-gap")}} 또는 {{cssxref("gap")}} 속성을 사용하면 열 간의 간격을 조정할 수 있고, {{cssxref("column-rule")}} 속성을 사용하면 열 사이에 구분선을 추가할 수 있습니다.

아래 코드 블록의 "Play" 버튼을 클릭하면, MDN 실습 공간에서 예제를 직접 수정해 볼 수 있습니다.

```html live-sample___multi-column-layout-example
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
  <p>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
    kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
    purslane kale. Celery potato scallion desert raisin horseradish spinach
  </p>
</div>
```

```css live-sample___multi-column-layout-example
.container {
  border: 2px solid rgb(75 70 74);
  border-radius: 0.5em;
  padding: 20px;
  font: 1.2em sans-serif;

  column-width: 10em;
  column-rule: 1px solid rgb(75 70 74);
}
```

{{EmbedLiveSample("multi-column-layout-example", "", "350px")}}

이 예제에서는 {{cssxref("column-width")}} 속성을 사용하여, 브라우저가 새로운 열을 추가하기 전에 각 열이 가져야 하는 최소 너비를 설정했습니다. 또한 {{cssxref("columns")}} 단축 속성을 사용하면 `column-width`와 {{cssxref("column-count")}} 속성을 함께 지정할 수 있습니다. 이 두 속성 중 하나를 통해 허용되는 최대 열 개수를 정의할 수 있습니다.

다단 레이아웃을 사용해야 하는 경우:

- 텍스트를 신문과 같은 여러 단 형태로 표시하고 싶을 때.
- 작은 항목 여러 개를 여러 열로 나누어 배치하고 싶을 때.
- 각 열을 개별적으로 선택해 스타일을 지정할 필요가 없을 때.

### 동일한 높이의 단일 행 요소, 플렉스박스

{{cssxref("display", "display: flex;")}}를 설정하여 부모 요소를 플렉스 컨테이너로 만들면, 플렉스박스를 사용해 콘텐츠를 여러 열로 나눌 수 있습니다. 이 속성 하나만 추가해도 모든 자식 요소(요소 노드, 가상 요소, 텍스트 노드)가 단일 행에 배치된 플렉스 요소로 변환됩니다. 또한 {{cssxref("flex")}} 단축 속성에 단일 숫자 값을 지정하면 사용 가능한 공간이 모든 요소에 균등하게 분배되어, 일반적으로 콘텐츠가 줄바꿈되지 않는 한 모든 플렉스 요소의 크기가 동일하게 유지됩니다.

요소 간 간격은 바깥 여백 또는 `gap` 속성을 사용해 조정할 수 있습니다. 단, 현재는 플렉스 요소 사이에 구분선을 추가하는 전용 CSS 속성은 없습니다.

```html live-sample___columns-flexbox-example
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>

  <p>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
    kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
    purslane kale. Celery potato scallion desert raisin horseradish spinach
    carrot soko.
  </p>
</div>
```

```css live-sample___columns-flexbox-example
.container {
  border: 2px solid rgb(75 70 74);
  border-radius: 0.5em;
  padding: 20px 10px;
  font: 1.2em sans-serif;

  display: flex;
}

.container > * {
  padding: 10px;
  border: 2px solid rgb(95 97 110);
  border-radius: 0.5em;

  margin: 0 10px;
  flex: 1;
}
```

{{EmbedLiveSample("columns-flexbox-example", "", "400px")}}

플렉스 요소가 새로운 행으로 줄바꿈 되도록 하려면, 컨테이너에 {{cssxref("flex-wrap")}} 속성을 `wrap`으로 설정하십시오. 각 플렉스 라인은 해당 줄 내부에서만 공간을 분배한다는 점에 유의해야 합니다. 즉, 한 줄에 있는 요소들은 다른 줄의 요소들과 세로 위치가 반드시 일치하지 않을 수도 있으며, 이는 아래 예시에서 확인할 수 있습니다. 이러한 이유로 플렉스박스는 1차원 레이아웃 시스템으로 설명됩니다. 플렉스박스는 행 또는 열 중 하나의 방향으로만 레이아웃을 제어하도록 설계되었으며, 두 방향을 동시에 제어하도록 만들어진 것은 아닙니다.

```html live-sample___columns-flexbox-wrapping-example
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>

  <p>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
    kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
    purslane kale. Celery potato scallion desert raisin horseradish spinach
    carrot soko.
  </p>
</div>
```

```css live-sample___columns-flexbox-wrapping-example
.container {
  border: 2px solid rgb(75 70 74);
  border-radius: 0.5em;
  padding: 20px 10px;
  width: 500px;
  font: 1.2em sans-serif;

  display: flex;
  flex-wrap: wrap;
}

.container > * {
  padding: 10px;
  border: 2px solid rgb(95 97 110);
  border-radius: 0.5em;

  margin: 0 10px;
  flex: 1 1 200px;
}
```

{{EmbedLiveSample("columns-flexbox-wrapping-example", "", "450px")}}

플렉스박스를 사용해야 하는 경우:

- 하나의 행 또는 열에 요소들을 배치하려는 경우
- 요소를 배치한 후, 교차축 방향으로 정렬을 조정하고 싶은 경우
- 줄바꿈된 요소들이 자신의 행 안에서만 공간을 공유하고, 다른 행의 요소들과 정렬되지 않아도 괜찮은 경우

### 요소를 행과 열로 정렬, 그리드 레이아웃

요소가 행과 열 모두에서 정렬되는 2차원 격자를 만들고 싶다면, CSS 그리드 레이아웃을 사용하는 것이 좋습니다. 플렉스박스가 플렉스 컨테이너의 직계 자식 요소에 작동하는 것처럼, 그리드 레이아웃도 그리드 컨테이너의 직계 자식 요소에 적용됩니다. 컨테이너에 {{cssxref("display", "display: grid;")}} 속성을 설정하기만 하면 됩니다. 이 컨테이너에 설정하는 {{cssxref("grid-template-columns")}} 및 {{cssxref("grid-template-rows")}} 같은 속성들은 요소가 행과 열을 따라 어떻게 배치될지 정의합니다.

아래 코드 블록의 "Play" 버튼을 클릭하면 MDN 실습 공간에서 예제를 직접 수정할 수 있습니다.

```html live-sample___grid-layout-example
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens.
  </p>

  <p>
    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong
    celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens
    parsnip. .
  </p>
</div>
```

```css live-sample___grid-layout-example
.container {
  border: 2px solid rgb(75 70 74);
  border-radius: 0.5em;
  padding: 20px;
  width: 500px;
  font: 1.2em sans-serif;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

.container > * {
  padding: 10px;
  border: 2px solid rgb(95 97 110);
  border-radius: 0.5em;
  margin: 0;
}
```

{{EmbedLiveSample("grid-layout-example", "", "450px")}}

그리드 레이아웃을 사용해야 하는 경우:

- 여러 행 또는 열에 요소를 배치하려는 경우
- 요소를 블록 축과 인라인 축 방향 모두에서 정렬하고 싶은 경우
- 요소들을 행과 열에 맞춰 일정하게 정렬하고 싶은 경우

## MDN 참고 자료

- [CSS 다단 레이아웃 가이드](/ko/docs/Web/CSS/CSS_multicol_layout)
- [CSS 플렉스박스 가이드](/ko/docs/Web/CSS/CSS_flexible_box_layout)
- [CSS 그리드 레이아웃 가이드](/ko/docs/Web/CSS/CSS_grid_layout)
