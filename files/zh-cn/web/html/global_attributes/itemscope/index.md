---
title: itemscope
slug: Web/HTML/Global_attributes/itemscope
---

{{HTMLSidebar("Global_attributes")}}

**`itemscope`** 是一个布尔值的 [全局属性](/zh-CN/docs/Web/HTML/Global_attributes) 。它定义了一个与元数据关联的数据项。就是说一个元素的 **`itemscope`** 属性会创建一个项，包含了一组与元素相关的键值对。相关的属性 [`itemtype`](/zh-CN/docs/Web/HTML/Global_attributes#itemtype) 通常表示表中一个有效的 URL（比如 [schema.org](http://schema.org/)）来表述项目和上下文。下面每个例子中的概念表都来自 [schema.org](https://schema.org/).

每个 HTML 元素都可以有指定的 `itemscope` 属性。一个具有 `itemscope` 属性的元素可以没有关联的 `itemtype` ，但必须有相关的 `itemref`。

> **备注：** Schema.org 提供了一份共享的词汇表，站长可以使用它来标记网页，而这些标记则被主要的搜索引擎：Google，Microsoft，Yandex 和 Yahoo！所支持。

> **备注：** 获取更多关于 `itemtype` 属性的信息： <http://schema.org/Thing>

### 简单示例

#### HTML

下面一个例子指定的 `itemscope` 属性，设置了 `itemtype` 为 "http\://schema.org/Movie"，并且有 3 个关联的 `itemprop` 属性（name、director、genre）。

```html
<div itemscope itemtype="http://schema.org/Movie">
  <h1 itemprop="name">Avatar</h1>
  <span
    >Director: <span itemprop="director">James Cameron</span> (born August 16,
    1954)</span
  >
  <span itemprop="genre">Science fiction</span>
  <a href="https://youtu.be/0AY1XIkX7bY" itemprop="trailer">Trailer</a>
</div>
```

#### 结构化数据

下表展示了上面例子当中的结构化数据。

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

### `itemscope` id 属性

当你表述一个元素的 `itemscope` 属性时，就创建了一个新的数据项。数据项包含了一组键值对。如果一个元素包含了 `itemscope` 和 `itemtype` 属性，你同时也就阐述了一个 [`id`](/zh-CN/docs/Web/HTML/Global_attributes#id) 属性。你可以用 `id` 属性为数据项设置一个全局的身份识别。这样你就可以通过这个识别与页面中其他的数据进行交互。

### 示例

下面示例中有 4 个 `itemscope` 属性。每一个 `itemscope` 设置了相应的 `itemptype` 属性。例子中`itemtype`，`Recipe`，`AggregateRating`，以及 `NutritionInformation` 通过指定了 `itemptype`，也就是 `http://schema.org/Recipe`，也都是 [schema.org](www.schema.org) 提供的一个食谱的结构化数据的一部分。

```html
<div itemscope itemtype="http://schema.org/Recipe">
<h2 itemprop="name">Grandma's Holiday Apple Pie</h2>
<img itemprop="image" src="https://c1.staticflickr.com/1/30/42759561_8631e2f905_n.jpg" width="50" height="50"/>
<p>By <span itemprop="author" itemscope itemtype="http://schema.org/Person">
<span itemprop="name">Carol Smith</p></span>
</span>
<p>Published: <time datetime="2009-11-05" itemprop="datePublished">
November 5, 2009</p></time>
<span itemprop="description">This is my grandmother's apple pie recipe. I like to add a dash of nutmeg.<br></span>
 <span itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
 <span itemprop="ratingValue">4.0</span> stars based on <span itemprop="reviewCount">35</span> reviews<br></span>
Prep time: <time datetime="PT30M" itemprop="prepTime">30 min<br></time>
 Cook time: <time datetime="PT1H" itemprop="cookTime">1 hour<br></time>
 Total time: <time datetime="PT1H30M" itemprop="totalTime">1 hour 30 min<br></time>
 Yield: <span itemprop="recipeYield">1 9" pie (8 servings)<br></span>
 <span itemprop="nutrition" itemscope itemtype="http://schema.org/NutritionInformation">
 Serving size: <span itemprop="servingSize">1 medium slice<br></span>
 Calories per serving: <span itemprop="calories">250 cal<br></span>
 Fat per serving: <span itemprop="fatContent">12 g<br></span>
</span>
<p>Ingredients:<br>
  <span itemprop="recipeIngredient">Thinly-sliced apples: 6 cups<br></span>
  <span itemprop="recipeIngredient">White sugar: 3/4 cup<br></span>
 ... </p>

Directions: <br>
  <div itemprop="recipeInstructions">
    1. Cut and peel apples<br>
    2. Mix sugar and cinnamon. Use additional sugar for tart apples. <br>
    ...
  </div>
</div>
```

### 结果

#### HTML

下面例子是上述例子的补充：

{{EmbedLiveSample('示例', '500', '550')}}

#### 结构化数据

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

> **备注：** Google 提供了一个方便地从 HTML 提取微数据结构的工具：[Structured Data Testing Tool](https://developers.google.com/structured-data/testing-tool/)。你可以通过上面的 HTML 试一下。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- [其他不同的全局属性](/zh-CN/docs/Web/HTML/Global_attributes)
- 其他 microdata 相关的全局熟悉

  - [`itemid`](/zh-CN/docs/Web/HTML/Global_attributes#itemid)
  - [`itemprop`](/zh-CN/docs/Web/HTML/Global_attributes#itemprop)
  - [`itemref`](/zh-CN/docs/Web/HTML/Global_attributes#itemref)
  - [`itemscope`](/zh-CN/docs/Web/HTML/Global_attributes#itemscope)
  - [`itemtype`](/zh-CN/docs/Web/HTML/Global_attributes#itemtype)
