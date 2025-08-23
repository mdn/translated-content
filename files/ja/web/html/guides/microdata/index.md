---
title: HTML でのマイクロデータの使用
short-title: マイクロデータ
slug: Web/HTML/Guides/Microdata
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

マイクロデータは {{glossary("WHATWG")}} HTML 標準の一部であり、ウェブページ上の既存のコンテンツ内でメタデータを入れるために使用されます。検索エンジンやウェブクローラーは、ウェブページからマイクロデータを抽出して処理し、ユーザーへ高度な閲覧操作を提供するために使用することができます。検索エンジンは、ウェブページ上の情報を理解し、ユーザーにより関連性の高い結果を提供することを可能にするため、この構造化されたデータを直接利用できることから大きな利益を得ます。マイクロデータは、値をプロパティに割り当てるためにアイテムと名前と値の組み合わせを記述するためのサポート語彙を使用します。マイクロデータは、機械可読なタグとともに HTML 要素に注釈する試みで、古い RDFa やマイクロフォーマットの同様のアプローチよりも簡単な方法を提供します。

高い水準では、マイクロデータは名前と値の組み合わせのグループで構成されます。このグループはアイテムと呼ばれ、それぞれの名前と値の組み合わせがプロパティとなります。アイテムとプロパティは標準の要素によって表されます。

- アイテムを作成するために、 `itemscope` 属性を使用します。
- アイテムにプロパティを追加するために、 `itemprop` 属性がアイテムの子孫の 1 つで使用されます。

## 語彙

Google をはじめとする主要な検索エンジンは、構造化されたデータ [Schema.org](https://schema.org/) に対応しています。この語彙は、タイプ名やプロパティ名の標準セットを定義しています。たとえば、 [Schema.org Music Event](https://schema.org/MusicEvent) はコンサートを表し、 [`startDate`](https://schema.org/startDate) と [`location`](https://schema.org/location) プロパティをコンサートの主要な詳細を指定するために併用します。この場合、 [Schema.org Music Event](https://schema.org/MusicEvent) は `itemtype` によって使用される URL となり、 `startDate` と location は [Schema.org Music Event](https://schema.org/MusicEvent) が定義する `itemprop` になります。

> [!NOTE]
> itemtype 属性の詳細は <https://schema.org/Thing> にあります。

マイクロデータの語彙は、アイテムのセマンティックスや意味を提供します。ウェブ開発者は専用の語彙を設計したり、 [schema.org](https://schema.org) のような広く使用されている語彙を利用したりすることができます。よく使用されるマークアップ語彙のコレクションは、 Schema.org によって提供されます。

よく使用される語彙には、次のようなものがあります。

- 創作物: [CreativeWork](https://schema.org/CreativeWork), [Book](https://schema.org/Book), [Movie](https://schema.org/Movie), [MusicRecording](https://schema.org/MusicRecording), [Recipe](https://schema.org/Recipe), [TVSeries](https://schema.org/TVSeries)
- 埋め込み非テキストオブジェクト: [AudioObject](https://schema.org/AudioObject), [ImageObject](https://schema.org/ImageObject), [VideoObject](https://schema.org/VideoObject)
- [`Event`](https://schema.org/Event)
- [健康と医療型](https://schema.org/docs/meddocs.html): [MedicalEntity](https://schema.org/MedicalEntity) の下の健康と医療型に注目してください
- [`Organization`](https://schema.org/Organization)
- [`Person`](https://schema.org/Person)
- [`Place`](https://schema.org/Place), [`LocalBusiness`](https://schema.org/LocalBusiness), [`Restaurant`](https://schema.org/Restaurant)
- [`Product`](https://schema.org/Product), [Offer](https://schema.org/Offer), [AggregateOffer](https://schema.org/AggregateOffer)
- [`Review`](https://schema.org/Review), [AggregateRating](https://schema.org/AggregateRating)
- [`Action`](https://schema.org/Action)
- [`Thing`](https://schema.org/Thing)
- [`Intangible`](https://schema.org/Intangible)

Google、Microsoft、Yahoo! のような主要な検索エンジンの管理者は、検索結果を改良するために [schema.org](https://schema.org/) を頼りにしています。目的によってはその場で作成した語彙が適切です。それ以外の目的には、語彙を設計する必要があります。可能であれば、著者は簡単にコンテンツを再利用できるように、既存の語彙を再利用することを勧めます。

## ローカライズ

ある場合に、特定の領域をカバーする検索エンジンはマイクロデータの地域に固有な拡張を提供するかもしれません。例えば、ロシアのメジャーな検索エンジンである [Yandex](https://yandex.com/) は、 `hCard` (会社の連絡先情報)、 `hRecipe` (料理のレシピ)、 `hReview` (マーケットのレビュー)、 `hProduct` (製品データ) のようなマイクロフォーマットに対応しており、用語の定義や百科事典の記事について独自フォーマットを提供しています。この拡張は、キリル文字とラテン文字の間の文字変換の問題を解決するためになされました。スキーマ語彙の追加マーキングパラメータの実装により、ロシア語のウェブページにおける情報のインデックス化は、かなりの成功を収めました。

## グローバル属性

[`itemid`](/ja/docs/Web/HTML/Reference/Global_attributes/itemid) – 一意の、アイテムのグローバル識別子。

[`itemprop`](/ja/docs/Web/HTML/Reference/Global_attributes/itemprop) – アイテムにプロパティを追加するために用います。すべての HTML 要素は、 `itemprop` が名前と値のペアから構成する、 `itemprop` 属性を指定することができます。

[`itemref`](/ja/docs/Web/HTML/Reference/Global_attributes/itemref) – `itemscope` 属性をもつ要素の子孫でないプロパティは、 **itemref** を用いてアイテムと関連付けることができます。 `itemref` は、要素の id (`itemid` ではなく) のリストに文書の他の場所で追加のプロパティを提供します。

[`itemscope`](/ja/docs/Web/HTML/Reference/Global_attributes/itemscope) – `itemscope` は、ブロックに含まれる HTML が特定のアイテムであることを記述するために [`itemtype`](/ja/docs/Web/HTML/Reference/Global_attributes/itemtype) と共に (通常) 動作します。 `itemscope` はアイテムを作成し、アイテムに関連付けられる itemtype の範囲を定義します。 `itemtype` は、アイテムとアイテムのプロパティのコンテキストを説明する（[schema.org](https://schema.org/) のような）語彙の妥当なURLとなります。

[`itemtype`](/ja/docs/Web/HTML/Reference/Global_attributes/itemtype) – データ構造で `itemprop` の語彙 (アイテムのプロパティ) を定義するために使用される語彙の URL を指定します。[`itemscope`](/ja/docs/Web/HTML/Reference/Global_attributes/itemscope) – は、 `itemtype` によって設定される語彙がアクティブとなるデータ構造の範囲を設定するために使用されます。

## 例

### HTML

```html
<div itemscope itemtype="https://schema.org/SoftwareApplication">
  <span itemprop="name">Angry Birds</span> - REQUIRES
  <span itemprop="operatingSystem">ANDROID</span><br />
  <link
    itemprop="applicationCategory"
    href="https://schema.org/SoftwareApplication" />

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

### 構造化データ

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
      <td>SoftwareApplication (https://schema.org/SoftwareApplication)</td>
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

### 結果

{{ EmbedLiveSample('HTML', '', '100') }}

> [!NOTE]
> HTML からマイクロデータを抽出するための手軽なツールとして、 Google の[構造化データテストツール](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)があります。上に示した HTML 上で試してみてください。

### 関連情報

- [グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)
