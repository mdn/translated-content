---
title: itemscope
slug: Web/HTML/Global_attributes/itemscope
l10n:
  sourceCommit: ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{HTMLSidebar("Global_attributes")}}

**`itemscope`** は論理[グローバル属性](/ja/docs/Web/HTML/Global_attributes)で、関連付けられたメタデータのスコープを定義します。 **`itemscope`** 属性を要素に指定すると、要素に関連付けられた数々の名前と値の組み合わせを持つ新しいアイテムを作成します。

関連する属性である [`itemtype`](/ja/docs/Web/HTML/Global_attributes/itemtype) は、アイテムおよびそのプロパティのコンテキストを記述する語彙（[schema.org](https://schema.org/) など）の有効な URL を指定するために使用されます。以下のそれぞれの例では、 [schema.org](https://schema.org/) からの語彙を使用しています。

あらゆる HTML 要素に `itemscope` 属性を設定することができます。 `itemscope` 要素が `itemtype` を持たない場合は、関連付けられた `itemref` を持つ必要があります。

> **メモ:** `itemtype` 属性についての詳細は、 <https://schema.org/Thing> をご覧ください

### itemscope の id 属性

ある要素に `itemscope` 属性を指定すると、新しいアイテムが作成されます。アイテムは名前と値の組のグループから構成されます。 `itemscope` 属性と `itemtype` 属性を持つ要素では、 [`id`](/ja/docs/Web/HTML/Global_attributes#id) 属性も指定することができます。 `id` 属性を使用すると、新しいアイテムにグローバルな識別子を設定することができます。グローバルな識別子によって、そのアイテムはウェブ上のページで見られる他のアイテムに関連付けることができます。

## 例

### 映画の構造化データの表現

以下の例では、 `itemscope` 属性を指定しています。この例では `itemtype` を "http://schema.org/Movie" に設定し、 3 つの関連する `itemprop` 属性を定義します。

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

```html
<div itemscope itemtype="https://schema.org/Movie">
  <h1 itemprop="name">Avatar</h1>
  <span
    >Director: <span itemprop="director">James Cameron</span> (born August 16,
    1954)</span
  >
  <span itemprop="genre">Science fiction</span>
  <a href="https://youtu.be/0AY1XIkX7bY" itemprop="trailer">Trailer</a>
</div>
```

### レシピの構造化データの表現

以下の例には 4 つの `itemscope` 属性があります。それぞれの `itemscope` 属性は、対応する `itemtype` 属性のスコープを設定しています。以下の例にある `Recipe`, `AggregateRating`, `NutritionInformation` の `itemtype` は、レシピのための [schema.org](www.schema.org) 構造化データの一部であり、最初の `itemtype`, `http://schema.org/Recipe` として定義されています。

<table class="standard-table">
  <tbody>
    <tr>
      <td rowspan="14">itemscope</td>
      <td>itemtype</td>
      <td colspan="2">Recipe</td>
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
      <td>2022-11-05</td>
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
      <td colspan="2">author [Person]</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name</td>
      <td>Carol Smith</td>
    </tr>
    <tr>
      <td rowspan="3">itemscope</td>
      <td>itemprop[itemtype]</td>
      <td colspan="2">aggregateRating [AggregateRating]</td>
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
      <td rowspan="4">itemscope</td>
      <td>itemprop[itemtype]</td>
      <td colspan="2">nutrition [NutritionInformation]</td>
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

> [!NOTE]
> 手軽に HTML からマイクロデータを抽出するには、 Google の[リッチリザルトテストツール](https://search.google.com/test/rich-results)が便利です。上の HTML で試してみてください。

</div>

#### HTML

```html
<div itemscope itemtype="https://schema.org/Recipe">
  <h2 itemprop="name">Grandma's Holiday Apple Pie</h2>
  <img
    itemprop="image"
    src="https://c1.staticflickr.com/1/30/42759561_8631e2f905_n.jpg"
    width="50"
    height="50" />
  <p>
    By
    <span itemprop="author" itemscope itemtype="https://schema.org/Person">
      <span itemprop="name">Carol Smith</span>
    </span>
  </p>
  <p>
    Published:
    <time datetime="2022-11-05" itemprop="datePublished"
      >November 5, 20022</time
    >
  </p>
  <span itemprop="description"
    >This is my grandmother's apple pie recipe. I like to add a dash of
    nutmeg.</span
  >
  <br />
  <span
    itemprop="aggregateRating"
    itemscope
    itemtype="https://schema.org/AggregateRating">
    <span itemprop="ratingValue">4.0</span> stars based on
    <span itemprop="reviewCount">35</span> reviews
  </span>
  <br />
  Prep time: <time datetime="PT30M" itemprop="prepTime">30 min</time>
  <br />
  Cook time: <time datetime="PT1H" itemprop="cookTime">1 hour</time>
  <br />
  Total time: <time datetime="PT1H30M" itemprop="totalTime">1 hour 30 min</time>
  <br />
  Yield: <span itemprop="recipeYield">1 9" pie (8 servings)</span>
  <br />
  <span
    itemprop="nutrition"
    itemscope
    itemtype="https://schema.org/NutritionInformation">
    Serving size: <span itemprop="servingSize">1 medium slice</span><br />
    Calories per serving: <span itemprop="calories">250 cal</span><br />
    Fat per serving: <span itemprop="fatContent">12 g</span><br />
  </span>
  <p>
    Ingredients:<br />
    <span itemprop="recipeIngredient">Thinly-sliced apples: 6 cups<br /></span>
    <span itemprop="recipeIngredient">White sugar: 3/4 cup<br /></span>
    …
  </p>
  Directions: <br />
  <div itemprop="recipeInstructions">
    1. Cut and peel apples<br />
    2. Mix sugar and cinnamon. Use additional sugar for tart apples. <br />
    …
  </div>
</div>
```

#### 結果

{{EmbedLiveSample('Representing structured data for a recipe', '', '550')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [他のグローバル属性](/ja/docs/Web/HTML/Global_attributes)
- マイクロデータに関連する他のグローバル属性:

  - [`itemid`](/ja/docs/Web/HTML/Global_attributes/itemid)
  - [`itemprop`](/ja/docs/Web/HTML/Global_attributes/itemprop)
  - [`itemref`](/ja/docs/Web/HTML/Global_attributes/itemref)
  - [`itemtype`](/ja/docs/Web/HTML/Global_attributes/itemtype)
