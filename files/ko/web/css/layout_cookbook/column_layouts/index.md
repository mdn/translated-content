---
title: 열 레이아웃들
slug: Web/CSS/Layout_cookbook/Column_layouts
l10n:
  sourceCommit: 507825f6292eb73f0a96419d69870d9330b6776f
---

> [!CALLOUT]
>
> #### 프론트엔드 웹 개발자가 되고자 하시나요?
>
> 프론트엔드 웹 개발자가 되고 싶지만 무엇을 먼저 배워야 할지 모르겠다면, MDN 커리큘럼을 참고해 학습 계획을 세우는 것을 추천합니다. 이 커리큘럼은 성공적인 프론트엔드 개발자가 되기 위한 필수 기술과 실습을 체계적으로 학습할 수 있는 경로를 제공하며, 추천 학습 자료도 함께 제공합니다.
>
> [**시작하기**](/en-US/curriculum/)

{{CSSRef}}
레이아웃을 만들 때 여러 개의 열이 필요한 경우가 자주 있습니다. CSS는 이를 위한 여러 가지 방법을 제공합니다.
[다중열](/ko/docs/Web/CSS/CSS_multicol_layout), [플렉스박스](/ko/docs/Web/CSS/CSS_flexible_box_layout), [그리드](/ko/docs/Web/CSS/CSS_grid_layout) 레이아웃 중 어떤 것을 사용할지 여부는 여러분이 달성하려는 목표에 따라 달라집니다. 이 레시피에서는 이러한 옵션들에 대해 자세히 살펴봅니다.

![three different styles of layouts which have two columns in the container.](cookbook-multiple-columns.png)

## 요구 사항

열을 사용하여 달성할 수 있는 여러 디자인 패턴이 있습니다.

- [신문 스타일의 열로 나뉘어진 연속적인 콘텐츠 흐름](#a_continuous_thread_of_content_—_multi-column_layout).
- [모든 높이가 동일한 단일 행의 열로 정렬된 항목들](#a_single_row_of_items_with_equal_heights_—_flexbox).
- [행과 열에 따라 정렬된 여러 행의 열들](#lining_items_up_in_rows_and_columns_—_grid_layout).

## 조리법

요구 사항을 충족하기 위해 다양한 레이아웃 메서드들을 선택해야 합니다.

### 콘텐츠의 연속적인 흐름 — 다중열 레이아웃

다중열 레이아웃을 사용하여 열을 생성하면 텍스트는 연속적인 흐름으로 유지되며 각 열을 차례로 채웁니다. 모든 열은 동일한 크기를 가져야 하며, 특정 열이나 특정 열의 콘텐츠를 타겟팅할 수는 없습니다.

{{cssxref("column-gap")}} 또는 {{cssxref("gap")}} 속성을 사용하여 열 사이의 간격을 컨트롤할 수 있으며, {{cssxref("column-rule")}} 속성을 사용하여 열 사이에 선을 추가할 수 있습니다.

아래 코드 블록에서 "Play"를 클릭하면 MDN Playground에서 예제를 편집할 수 있습니다.

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

이 예제에서는, {{cssxref("column-width")}} 속성을 사용하여 브라우저가 추가적인 열을 추가하기 전에 열이 가져야 할 최소 너비를 설정했습니다. {{cssxref("columns")}} 단축 속성을 사용하면 `column-width`와 {{cssxref("column-count")}} 속성을 설정할 수 있으며, 둘 중 하나를 사용하여 허용되는 최대 열 수를 정의할 수 있습니다.

다중열을 사용할때:

- 텍스트를 신문처럼 여러 열에 표시하고 싶을 때.
- 작은 항목들을 열로 나누고 싶을 때.
- 개별 열 박스를 스타일링하기 위해 타겟팅할 필요가 없을 때.

### 동일한 높이를 가진 항목들의 단일 행 — 플렉스박스

플렉스박스는 {{cssxref("display", "display: flex;")}} 을 설정하여 부모 요소를 플렉스 컨테이너로 만들어 콘텐츠를 열로 나누는 데 사용할 수 있습니다. 이 속성 하나를 추가하면 모든 자식 요소(자식 요소들, 의사- 요소들, 텍스트 노드들)가 하나의 행에 따라 플렉스 아이템이 됩니다. 동일한 {{cssxref("flex")}} 단축 속성을 단일 숫자 값으로 설정하면 모든 사용 가능한 공간이 고르게 분배되어, 일반적으로 모든 플렉스 아이템이 크기가 같아지며, 만약 논래핑 콘텐츠가 없으면 아이템이 더 커지지 않습니다.

바깥 여백들이나 `gap` 속성을 사용하여 항목들 사이에 간격을 만들 수 있지만, 현재 플렉스 아이템들 사이에 선을 추가하는 CSS 속성은 존재하지 않습니다.

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

플렉스 아이템들이 새로운 행으로 감싸지는 레이아웃을 만들기 위해서는 컨테이너에 {{cssxref("flex-wrap")}} 속성을 `wrap`으로 설정하세요. 각 플렉스 라인은 그 라인에만 공간을 분배한다는 점에 유의하세요. 아래 예제에서 보듯이, 한 라인의 아이템들은 다른 라인의 아이템들과 반드시 정렬되지 않을 수 있습니다. 이 때문에 플렉스박스는 1차원 레이아웃으로 설명됩니다. 플렉스박스는 행(row)이나 열(column) 중 하나의 방향으로 레이아웃을 컨트롤하도록 설계되었으며, 두 방향을 동시에 제어할 수는 없습니다.

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

플렉스박스를 사용할 때:

- 단일 행 또는 열의 항목을 정렬할 때.
- 항목 배치 후 교차 축에서 정렬을 수행하려고 할 때.
- 항목이 줄을 나누어 공간을 공유하지만 다른 줄의 항목과 정렬되지 않아도 괜찮을 때.

### 항목을 행과 열에 정렬하기 — 그리드 레이아웃

행 "및" 열에서 항목이 정렬되는 2차원 그리드를 원한다면 CSS 그리드 레이아웃을 선택해야 합니다. 플렉스박스가 플렉스 컨테이너의 직계 자식 항목에 작동하는 것처럼, 그리드 레이아웃은 그리드 컨테이너의 직계 자식 항목에 작동합니다. 컨테이너에 {{cssxref("display", "display: grid;")}}를 설정하기만 하면 됩니다. 이 컨테이너에 설정된 {{cssxref("grid-template-columns")}} 및 {{cssxref("grid-template-rows")}}와 같은 속성들은 항목들이 행과 열을 따라 어떻게 배치되는지 정의합니다.

아래 코드 블록에서 "Play"를 클릭하여 MDN Playground에서 예제를 편집해 보세요.

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

그리드를 사용하세요.

- 여러 행이나 열로 구성된 아이템들을 위해.
- 아이템들을 블록 및 인라인 축에 맞추고 싶을 때.
- 아이템들이 행과 열에서 정렬되길 원할 때.

## MDN에서 제공하는 자료

- [멀티컬럼 레이아웃 안내서](/ko/docs/Web/CSS/CSS_multicol_layout)
- [플렉스박스 안내서](/ko/docs/Web/CSS/CSS_flexible_box_layout)
- [CSS 그리드 레이아웃 안내서](/ko/docs/Web/CSS/CSS_grid_layout)
