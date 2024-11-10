---
title: itemtype
slug: Web/HTML/Global_attributes/itemtype
l10n:
  sourceCommit: ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{HTMLSidebar("Global_attributes")}}

[グローバル属性](/ja/docs/Web/HTML/Global_attributes) の **`itemtype`** は、データ構造の中で `itemprop` （アイテムのプロパティ）を定義するのに使われる語彙の URL を指定します。

[`itemscope`](/ja/docs/Web/HTML/Global_attributes/itemscope) は `itemtype` が有効になるデータ構造の語彙の対象範囲を設定するために使用します。

Google などの主要な検索エンジンは、構造化データのために [schema.org](https://schema.org/) の語彙に対応しています。この語彙は標準の型名とプロパティ名の組み合わせを定義しています。例えば、 `MusicEvent` はコンサートを示し、 [`startDate`](https://schema.org/startDate) および [`location`](https://schema.org/location) プロパティでコンサートの主要な詳細を示します。この場合、 [`MusicEvent`](https://schema.org/MusicEvent) の URL を `itemtype` に使用し、 `startDate` や `location` は [`MusicEvent`](https://schema.org/MusicEvent) が定義する `itemprop` となります。

> **メモ:** `itemtype` 属性についての詳細は、 <https://schema.org/Thing> をご覧ください

- **itemtype** 属性には値が必要で、値は大文字小文字を区別する一意のトークンを順不同で並べたもので、それぞれが妥当な絶対 URL であり、すべてが同じ語彙を使用して定義する必要があります。属性の値は 1 つ以上のトークンを含む必要があります。
- アイテム型はすべて、（[schema.org](https://schema.org/) などの）適用可能な仕様書で定義された型であり、すべて同じ語彙を使用して定義する必要があります。
- itemtype 属性は itemscope 属性が指定されている要素の中でのみ指定できます。
- itemid 属性は、 itemscope 属性と itemtype 属性の両方を指定された要素でのみ指定することができます。これらは itemscope 属性を持つ要素で、語彙の仕様によって定められるとおり、その itemtype がアイテムのグローバル識別子に対応しない語彙を指定している場合にのみ指定する必要があります。
- グローバル識別子の正確な意味は、語彙の仕様によって決定されます。これは、同じグローバル識別子をもつ複数のアイテムが存在することが許可されるかどうか（同じページか異なるページ上かどうか）、そしてその語彙に対する処理規則が同じ ID をもつ複数のアイテムの場合の取り扱いに関するものを定義するのはそのような仕様次第です。

## 例

### 製品の構造化データの表現

この例では、以下のようにマイクロデータ属性を使用して、製品の構造化データを表現しています。

<table class="standard-table">
  <tbody>
    <tr>
      <td rowspan="7">itemscope</td>
      <td>itemtype</td>
      <td colspan="2">Product (http://schema.org/Product)</td>
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
      <td rowspan="9">itemscope</td>
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
      <td rowspan="2">itemscope</td>
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
> HTML からマイクロデータを抽出するのに手軽なツールとして、 Google の[構造化データテストツール](https://developers.google.com/search/docs/advanced/structured-data)があります。こちらの HTML で試してみてください。

#### HTML

```html
<div itemscope itemtype="http://schema.org/Product">
  <span itemprop="brand">ACME<br /></span>
  <span itemprop="name">Executive Anvil<br /></span>
  <img
    itemprop="image"
    src="https://pixabay.com/static/uploads/photo/2015/09/05/18/15/suitcase-924605_960_720.png"
    width="50"
    height="50"
    alt="Executive Anvil logo" /><br />

  <span itemprop="description">
    Sleeker than ACME's Classic Anvil, the Executive Anvil is perfect for the
    business traveler looking for something to drop from a height.
    <br />
  </span>

  Product #: <span itemprop="mpn">925872<br /></span>
  <span
    itemprop="aggregateRating"
    itemscope
    itemtype="http://schema.org/AggregateRating">
    Rating: <span itemprop="ratingValue">4.4</span> stars, based on
    <span itemprop="reviewCount">89 </span> reviews
  </span>
  <p>
    <span itemprop="offers" itemscope itemtype="http://schema.org/Offer">
      Regular price: $179.99<br />
      <meta itemprop="priceCurrency" content="USD" />
      <span itemprop="price">Sale price: $119.99<br /></span>
      (Sale ends
      <time itemprop="priceValidUntil" datetime="2020-11-05"> 5 November!</time
      >)<br />
      Available from:
      <span
        itemprop="seller"
        itemscope
        itemtype="http://schema.org/Organization">
        <span itemprop="name">Executive Objects<br /></span>
      </span>
      Condition:
      <link
        itemprop="itemCondition"
        href="http://schema.org/UsedCondition" />Previously owned, in excellent
      condition<br />
      <link itemprop="availability" href="http://schema.org/InStock" />In stock!
      Order now!
    </span>
  </p>
</div>
```

#### 結果

{{EmbedLiveSample('Representing structured data for a product', '', '400')}}

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
  - [`itemscope`](/ja/docs/Web/HTML/Global_attributes/itemscope)
