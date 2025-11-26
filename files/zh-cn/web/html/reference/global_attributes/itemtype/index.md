---
title: itemtype
slug: Web/HTML/Reference/Global_attributes/itemtype
---

**`itemtype`** [全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes) 指定了词汇的 URL，它将会用于定义数据结构中的 `itemprop`（条目属性）。[`itemscope`](/zh-CN/docs/Web/HTML/Reference/Global_attributes#itemscope) 用于设置词汇的生效范围，其中词汇在数据结构中由 `itemtype` 设置。

Google 和其他主流搜索引擎支持 [schema.org](https://schema.org/) 结构化数据词汇。这个词汇定义了一组标准的类型名称和属性名称。例如，[`MusicEvent`](https://schema.org/MusicEvent) 表示音乐会的名称，[`startDate`](https://schema.org/startDate) 和 [`location`](https://schema.org/location) 属性指定了音乐会的关键信息。这里，[`MusicEvent`](https://schema.org/MusicEvent) 应该是用于 `itemtype` 的 URL，而 `startDate` 和 `location` 作为 [`MusicEvent`](https://schema.org/MusicEvent) 所定义的 `itemprop`。

> [!NOTE]
> 更多 `itemtype` 属性的信息请见 <http://schema.org/Thing>

- **itemtype** 属性必须拥有这样的值，它是唯一标识的无序集合，这些标识是大小写敏感的，每个标识都是有效的绝对 URL，并且所有都使用相同词汇定义。属性的值必须至少拥有一个标识。
- 条目的类型必须全部为定义在适用规范（例如 [schema.org](https://schema.org/)）中的类型，并且必须使用相同词汇定义。
- itemtype 属性只能在指定了 itemscope 属性的元素上指定。
- itemid 属性只能在同时指定了 itemscope 和 itemtype 属性的元素上指定。它们必须仅仅在拥有 itemscope 属性的元素上指定，它的 itemtype 属性指定了不支持全局标识符的词汇，根据该词汇规范的定义。
- 全局标识符的准确含义，由词汇的规范决定。它留给这种规范，来定义全局标识符相同的多个条目（位于相同页面或不同页面）是否允许存在，以及对于处理 ID 相同的多个条目，使用什么处理规则。

### 简单示例

#### HTML

```html
<div itemscope itemtype="http://schema.org/Product">
  <span itemprop="brand">ACME</span>
  <span itemprop="name">Executive Anvil</span>
</div>
```

#### 结构化数据

<table class="standard-table">
  <tbody>
    <tr>
      <td rowspan="4">itemscope</td>
      <td>itemtype</td>
      <td colspan="2" rowspan="1">schema.org Product</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name</td>
      <td>Executive Anvil</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td colspan="2" rowspan="1">brand [Thing]</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name</td>
      <td>ACME</td>
    </tr>
  </tbody>
</table>

## 示例

### HTML

```html
<div itemscope itemtype="http://schema.org/Product">
  <span itemprop="brand">ACME<br></span>
  <span itemprop="name">Executive Anvil<br></span>
  <img itemprop="image" src="https://pixabay.com/static/uploads/photo/2015/09/05/18/15/suitcase-924605_960_720.png" width="50" height="50" alt="Executive Anvil logo" /><br>

<span itemprop="description">Sleeker than ACME's Classic Anvil, the
    Executive Anvil is perfect for the business traveler
    looking for something to drop from a height.
  <br>
</span>

  Product #: <span itemprop="mpn">925872<br></span>
  <span itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
    Rating: <span itemprop="ratingValue">4.4</span> stars, based on <span itemprop="reviewCount">89
      </span> reviews<p>
  </span>

<span itemprop="offers" itemscope itemtype="http://schema.org/Offer">
    Regular price: $179.99<br>
    <meta itemprop="priceCurrency" content="USD" />
    <span itemprop="price">Sale price: $119.99<br></span>
    (Sale ends <time itemprop="priceValidUntil" datetime="2020-11-05">
      5 November!</time>)<br>
    Available from: <span itemprop="seller" itemscope itemtype="http://schema.org/Organization">
                      <span itemprop="name">Executive Objects<br></span>
                    </span>
    Condition: <link itemprop="itemCondition" href="http://schema.org/UsedCondition"/>Previously owned,
      in excellent condition<br>
    <link itemprop="availability" href="http://schema.org/InStock"/>In stock! Order now!
</span>

  </span>

</div>
```

### 结果

{{EmbedLiveSample('示例', '300', '400')}}

#### 结构化数据

<table class="standard-table">
  <tbody>
    <tr>
      <td colspan="1" rowspan="7">itemscope</td>
      <td>itemtype</td>
      <td colspan="2" rowspan="1">Product (http://schema.org/Product)</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name</td>
      <td>Executive Anvil</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>image</td>
      <td>
        https://pixabay.com/static/uploads/photo/2015/09/05/18/15/suitcase-924605_960_720.png
      </td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>description</td>
      <td>
        Sleeker than ACME's Classic Anvil, the Executive Anvil is perfect for
        the business traveler looking for something to drop from a height.
      </td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>mpn</td>
      <td>925872</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>brand [Thing]</td>
      <td></td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name</td>
      <td>ACME</td>
    </tr>
    <tr>
      <td colspan="1" rowspan="9">itemscope</td>
      <td>itemprop[itemtype]</td>
      <td>aggregateRating[AggregateRating]</td>
      <td></td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>ratingValue</td>
      <td>4.4</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>reviewCount</td>
      <td>89</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>offers [Offer]</td>
      <td>http://schema.org/Offer</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>priceCurrency</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>price</td>
      <td>119.99</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>priceValidUntil</td>
      <td>2020-11-05</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>itemCondition</td>
      <td>http://schema.org/UsedCondition</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>availability</td>
      <td>http://schema.org/InStock</td>
    </tr>
    <tr>
      <td colspan="1" rowspan="2">itemscope</td>
      <td>itemprop[itemtype]</td>
      <td>seller [Organization]</td>
      <td>http://schema.org/Organization</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name</td>
      <td>Executive Objects</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> 一个工具，用于从 HTML 提取 microdata 结构，是 Google 的[结构化数据测试工具](https://developers.google.cn/search/docs/appearance/structured-data)。在上面展示的 HTML 上尝试吧。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [其他不同的全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)
- 其他 microdata 相关的全局属性
  - [`itemid`](/zh-CN/docs/Web/HTML/Reference/Global_attributes#itemid)
  - [`itemprop`](/zh-CN/docs/Web/HTML/Reference/Global_attributes#itemprop)
  - [`itemref`](/zh-CN/docs/Web/HTML/Reference/Global_attributes#itemref)
  - [`itemscope`](/zh-CN/docs/Web/HTML/Reference/Global_attributes#itemscope)
  - [`itemtype`](/zh-CN/docs/Web/HTML/Reference/Global_attributes#itemtype)
