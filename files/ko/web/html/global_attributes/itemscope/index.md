---
title: itemscope
slug: Web/HTML/Global_attributes/itemscope
---

{{HTMLSidebar("Global_attributes")}}

**`itemscope`** 전역 특성은 연관된 메타데이터의 범위를 지정하는 불리언 특성입니다. 요소에 `itemscope` 특성을 지정하면 새로운 아이템을 생성하고, 그 결과로 요소에 관련된 키-값 쌍 다수를 낳습니다. 관련 특성인 [`itemtype`](/ko/docs/Web/HTML/Global_attributes#itemtype)은 어휘([schema.org](https://schema.org/) 등)의 유효한 {{glossary("URL")}}을 지정할 때 사용합니다. 아래 각각의 예제는 [schema.org](https://schema.org/)의 어휘를 사용합니다.

모든 HTML 요소는 `itemscope` 특성을 가질 수 있습니다. `itemscope`를 가졌으나 연결된 `itemtype`이 없는 경우 반드시 연관된 `itemref`를 가져야 합니다.

> **참고:** `itemtype` 특성을 더 알아보려면 <http://schema.org/Thing>을 방문하세요.

### 간단한 예제

#### HTML

다음의 예제는 `itemscope` 특성의 사용법을 보입니다. `itemtype`은 <http://schema.org/Movie>로 지정하고, 세 개의 관련 `itemprop` 특성을 가집니다.

```html
<div itemscope itemtype="http://schema.org/Movie">
  <h1 itemprop="name">Avatar</h1>
  <span>Director: <span itemprop="director">James Cameron</span> (born August 16, 1954)</span>
  <span itemprop="genre>Science fiction</span>
  <a href="https://youtu.be/0AY1XIkX7bY" itemprop="trailer">Trailer</a>
</div>
```

#### 구조화된 데이터

다음 표는 앞선 코드의 구조화된 데이터를 나타냅니다.

<table class="standard-table">
  <tbody>
    <tr>
      <td rowspan="6">itemscope</td>
      <td>Itemtype</td>
      <td colspan="2">Movie</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>(itemprop name)</td>
      <td>(itemprop value)</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>director</td>
      <td>James Cameron</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>genre</td>
      <td>Science Fiction</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name</td>
      <td>Avatar</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>https://youtu.be/0AY1XIkX7bY</td>
      <td>Trailer</td>
    </tr>
  </tbody>
</table>

### `itemscope` id 특성

요소에 `itemscope` 특성을 지정하면 새로운 아이템이 생성됩니다. 아이템은 이름-값 쌍 그룹으로 이루어집니다. `itemscope`와 `itemtype` 특성을 가진 요소의 경우, [`id`](/ko/docs/Web/HTML/Global_attributes#id) 특성도 지정할 수 있습니다. `id`를 사용하면 새로운 아이템에 대한 전역 식별자를 설정할 수 있으며, 전역 식별자를 사용하면 웹에서 찾을 수 있는 다른 아이템과 연결할 수 있습니다.

### 예제

다음 예제는 네 개의 `itemscope` 특성을 가지고 있습니다. 각각의 `itemscope` 특성은 대응하는 `itemtype` 특성의 범위를 지정합니다. `itemtype`, `Recipe`, `AggregateRating`, `NutritionInformation`은 요리법에 관한 [schema.org](https://www.schema.org) 구조화된 데이터로, 첫 번째 `itemtype`의 값인 `http://schema.org/Recipe` 에 정의되어 있습니다.

```html
<div itemscope itemtype="http://schema.org/Recipe">
  <h2 itemprop="name">Grandma's Holiday Apple Pie</h2>
  <img
    itemprop="image"
    src="https://c1.staticflickr.com/1/30/42759561_8631e2f905_n.jpg"
    width="50"
    height="50" />
  <p>
    By
    <span itemprop="author" itemscope itemtype="http://schema.org/Person">
      <span itemprop="name">Carol Smith</span>
    </span>
  </p>
  <p>
    Published:
    <time datetime="2009-11-05" itemprop="datePublished">November 5, 2009</time>
  </p>
  <span itemprop="description"
    >This is my grandmother's apple pie recipe. I like to add a dash of
    nutmeg.</span
  >
  <br />
  <span
    itemprop="aggregateRating"
    itemscope
    itemtype="http://schema.org/AggregateRating">
    <span itemprop="ratingValue">4.0</span> stars based on
    <span itemprop="reviewCount">35</span> reviews
  </span>
  <br />
  Prep time: <time datetime="PT30M" itemprop="prepTime">30 min</time><br />
  Cook time: <time datetime="PT1H" itemprop="cookTime">1 hou</time>r<br />
  Total time: <time datetime="PT1H30M" itemprop="totalTime">1 hour 30 min</time
  ><br />
  Yield: <span itemprop="recipeYield">1 9" pie (8 servings)</span><br />
  <span
    itemprop="nutrition"
    itemscope
    itemtype="http://schema.org/NutritionInformation">
    Serving size: <span itemprop="servingSize">1 medium slice</span><br />
    Calories per serving: <span itemprop="calories">250 cal</span><br />
    Fat per serving: <span itemprop="fatContent">12 g</span><br />
  </span>
  <p>
    Ingredients:<br />
    <span itemprop="recipeIngredient">Thinly-sliced apples: 6 cups<br /></span>
    <span itemprop="recipeIngredient">White sugar: 3/4 cup<br /></span>
    ...
  </p>
  Directions: <br />
  <div itemprop="recipeInstructions">
    1. Cut and peel apples<br />
    2. Mix sugar and cinnamon. Use additional sugar for tart apples. <br />
    ...
  </div>
</div>
```

### 결과

#### HTML

다음은 위의 코드를 렌더링한 예제입니다.

{{EmbedLiveSample("예제")}}

#### 구조화된 데이터

<table class="standard-table">
  <tbody>
    <tr>
      <td colspan="1" rowspan="14">itemscope</td>
      <td>itemtype</td>
      <td colspan="2" rowspan="1">Recipe</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name</td>
      <td>Grandma's Holiday Apple Pie</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>image</td>
      <td>https://c1.staticflickr.com/1/30/42759561_8631e2f905_n.jpg</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>datePublished</td>
      <td>2009-11-05</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>description</td>
      <td>
        This is my grandmother's apple pie recipe. I like to add a dash of
        nutmeg.
      </td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>prepTime</td>
      <td>PT30M</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>cookTime</td>
      <td>PT1H</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>totalTime</td>
      <td>PT1H30M</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>recipeYield</td>
      <td>1 9" pie (8 servings)</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>recipeIngredient</td>
      <td>Thinly-sliced apples: 6 cups</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>recipeIngredient</td>
      <td>White sugar: 3/4 cup</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>recipeInstructions</td>
      <td>
        1. Cut and peel apples 2. Mix sugar and cinnamon. Use additional sugar
        for tart apples .
      </td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td colspan="2" rowspan="1">author [Person]</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name</td>
      <td>Carol Smith</td>
    </tr>
    <tr>
      <td colspan="1" rowspan="3">itemscope</td>
      <td>itemprop[itemtype]</td>
      <td colspan="2" rowspan="1">aggregateRating [AggregateRating]</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>ratingValue</td>
      <td>4.0</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>reviewCount</td>
      <td>35</td>
    </tr>
    <tr>
      <td colspan="1" rowspan="4">itemscope</td>
      <td>itemprop[itemtype]</td>
      <td colspan="2" rowspan="1">nutrition [NutritionInformation]</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>servingSize</td>
      <td>1 medium slice</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>calories</td>
      <td>250 cal</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>fatContent</td>
      <td>12 g</td>
    </tr>
  </tbody>
</table>

> **참고:** HTML에서 마이크로데이터를 추출할 때 유용하게 사용할 수 있는 Google의 [구조화된 데이터 테스트 도구](https://search.google.com/structured-data/testing-tool)가 있습니다. 위의 HTML 예제 코드를 넣어보세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 다른 [전역 특성](/ko/docs/Web/HTML/Global_attributes).
- 마이크로데이터 관련 다른 전역 특성

  - [`itemid`](/ko/docs/Web/HTML/Global_attributes#itemid)
  - [`itemprop`](/ko/docs/Web/HTML/Global_attributes#itemprop)
  - [`itemref`](/ko/docs/Web/HTML/Global_attributes#itemref)
  - [`itemtype`](/ko/docs/Web/HTML/Global_attributes#itemtype)
