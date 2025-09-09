---
title: 微数据
slug: Web/HTML/Guides/Microdata
---

## 概要

微数据是 {{glossary("WHATWG")}} HTML 标准的一部分，用于在网页上的现有内容中嵌套元数据。搜索引擎、网络抓取工具可以从网页中提取和处理微数据，并使用它为用户提供更丰富的浏览体验。搜索引擎从直接访问此结构化数据中受益匪浅，因为它允许搜索引擎了解网页上的信息并向用户提供更相关的结果。微数据使用支持词汇表来描述项目和 name-value 对，以便为其属性赋值。与使用 RDFa 和微格式的类似方法相比，微数据试图提供一种使用机器可读标签注释 HTML 元素的简单方法。

从更高的角度来看，微数据由一组 name-value 对组成。这些组称为元素，每个 name-value 对都是一个属性。项目和属性由常规元素表示。

- 创建元素使用了 `itemscope` 属性。
- 向元素添加属性，`itemprop` 属性将用于其中一个元素的后代。

## 词汇表

谷歌和其他主要搜索引擎支持结构化数据的 [Schema.org](schema.org) 词汇表。此词汇表定义了一组标准类型名称和属性名称，例如，[Schema.org Music Event](https://schema.org/MusicEvent) 表示音乐会表演，[`startDate`](https://schema.org/startDate) 和 [`location`](https://schema.org/location) 属性用于指定音乐会的关键细节。在这种情况下，[Schema.org Music Event](https://schema.org/MusicEvent) 将是 `itemtype` 和 `startDate` 使用的 URL，而 `location` 将是 [Schema.org Music Event](https://schema.org/MusicEvent) 定义的 `itemprop`。

> [!NOTE]
> 有关 itemtype 属性的更多信息，请访问 <https://schema.org/Thing>。

微数据词汇表提供了 _`Item`_ 的语义或含义。Web 开发人员可以设计自定义词汇表或使用 Web 上可用的词汇表，例如广泛使用的 [schema.org](https://schema.org) 词汇表。Schema.org 提供了一组常用的标记词汇表。

常用词汇：

- 创造性工作：[CreativeWork](https://schema.org/CreativeWork)、[Book](https://schema.org/Book)、[Movie](https://schema.org/Movie)、[MusicRecording](https://schema.org/MusicRecording)、[Recipe](https://schema.org/Recipe)、[TVSeries](https://schema.org/TVSeries)
- 嵌入性非文字对象：[AudioObject](https://schema.org/AudioObject)、[ImageObject](https://schema.org/ImageObject)、[VideoObject](https://schema.org/VideoObject)
- [`Event`](https://schema.org/Event)
- [Health and medical types](https://schema.org/docs/meddocs.html)：注意健康和医疗类型在 [MedicalEntity](https://schema.org/MedicalEntity) 之下
- [`Organization`](https://schema.org/Organization)
- [`Person`](https://schema.org/Person)
- [`Place`](https://schema.org/Place)、[LocalBusiness](https://schema.org/LocalBusiness)、[Restaurant](https://schema.org/Restaurant)
- [`Product`](https://schema.org/Product)、[Offer](https://schema.org/Offer)、[AggregateOffer](https://schema.org/AggregateOffer)
- [`Review`](https://schema.org/Review)、[AggregateRating](https://schema.org/AggregateRating)
- [`Action`](https://schema.org/Action)
- [`Thing`](https://schema.org/Thing)
- [`Intangible`](https://schema.org/Intangible)

谷歌，微软和雅虎等主要搜索引擎运营商依靠 [schema.org](https://schema.org/) 词汇表来改进搜索结果。实现一般目标，临时词汇就足够了。对于其他情况，可能需要设计一个词汇表。在可能的情况下，鼓励作者重用现有的词汇表，因为这样可以更轻松地重复使用内容。

## 本地化

在某些情况下，覆盖特定区域的搜索引擎可以提供微数据的本地特定扩展。例如，俄罗斯的主要搜索引擎 [Yandex](https://www.yandex.com/) 支持如 `hCard`（公司联系信息）、`hRecipe`（食品配方）、`hReview`（市场评论）和 `hProduct`（产品数据）的微格式，并提供自己的格式来定义术语和百科全书文章。这个扩展是为了解决西里尔字母和拉丁字母之间的音译问题。由于 Schema 词汇表的附加标记参数的实现，俄语网页中的信息索引变得更加成功。

## 全局属性

[`itemid`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/itemid)——元素的唯一全局标识符。

[`itemprop`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/itemprop)——用于向元素添加属性。每个 HTML 元素都可以指定一个 `itemprop` 属性，其中 `itemprop` 由一个名称和值对组成。

[`itemref`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/itemref)——不具有 `itemscope` 属性的元素的后代的属性可以使用 **itemref** 与元素相关联。`itemref` 提供了元素 id 列表（而不是一些 `itemid`）以及文档中其他位置的其他属性。

[`itemscope`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/itemscope)——`itemscope`（通常）与 [`itemtype`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/itemtype) 一起使用，以指定块中包含的 HTML 是一个特定元素。`itemscope` 创建 _`Item`_ 并定义与之关联的 itemtype 的范围。`itemtype` 是描述项及其属性上下文的词汇表（例如 [schema.org](https://schema.org/)）的有效 URL。

[`itemtype`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/itemtype)——指定将用于在数据结构中定义 `itemprop`（元素属性）的词汇表的 URL。[`itemscope`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/itemscope) 用于设置数据结构中按 `itemtype` 设置的词汇表的有效范围。

## 示例

### HTML

```html
<div itemscope itemtype="https://schema.org/SoftwareApplication">
  <span itemprop="name">Angry Birds</span> - REQUIRES
  <span itemprop="operatingSystem">ANDROID</span><br />
  <link
    itemprop="applicationCategory"
    href="https://schema.org/GameApplication" />

  <div
    itemprop="aggregateRating"
    itemscope
    itemtype="https://schema.org/AggregateRating">
    RATING:
    <span itemprop="ratingValue">4.6</span> (
    <span itemprop="ratingCount">8864</span> ratings )
  </div>

  <div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
    Price: $<span itemprop="price">1.00</span>
    <meta itemprop="priceCurrency" content="USD" />
  </div>
</div>
```

### 结构化数据

<table class="standard-table">
  <tbody>
    <tr>
      <td rowspan="4">itemscope</td>
      <td>itemtype</td>
      <td colspan="2">
        SoftwareApplication (https://schema.org/SoftwareApplication)
      </td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name</td>
      <td>Angry Birds</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>operatingSystem</td>
      <td>ANDROID</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>applicationCategory</td>
      <td>GameApplication (https://schema.org/GameApplication)</td>
    </tr>
    <tr>
      <td rowspan="3">itemscope</td>
      <td>itemprop[itemtype]</td>
      <td colspan="2">aggregateRating [AggregateRating]</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>ratingValue</td>
      <td>4.6</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>ratingCount</td>
      <td>8864</td>
    </tr>
    <tr>
      <td rowspan="3">itemscope</td>
      <td>itemprop[itemtype]</td>
      <td colspan="2">offers [Offer]</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>price</td>
      <td>1.00</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>priceCurrency</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>

### 结果

{{ EmbedLiveSample('示例', '', '100') }}

> [!NOTE]
> 从 HTML 中提取微数据结构的便捷工具是 Google 的[结构化数据测试工具](https://developers.google.cn/search/docs/appearance/structured-data)。在上面显示的 HTML 上尝试一下。

## 浏览器兼容性

在 Firefox 16 中支持，在 Firefox 49 中移除。

## 参见

- [全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)
