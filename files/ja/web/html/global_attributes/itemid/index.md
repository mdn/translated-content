---
title: itemid
slug: Web/HTML/Global_attributes/itemid
l10n:
  sourceCommit: ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{HTMLSidebar("Global_attributes")}}

**`itemid`** は[グローバル属性](/ja/docs/Web/HTML/Global_attributes)で、アイテムの固有でグローバルな識別子の形でマイクロデータを提供します。

`itemid` 属性は、[`itemscope`](/ja/docs/Web/HTML/Global_attributes/itemscope) と [`itemtype`](/ja/docs/Web/HTML/Global_attributes/itemtype) の両属性のある要素にだけ指定することができます。また `itemid` は、グローバル識別子に対応する語彙を参照または定義する `itemtype` に関係した `itemscope` 属性を持つ要素でのみ使用することができます。

`itemtype` のグローバル識別子の正確な意味は、それを特定する語彙の中で識別子の定義が提供されます。語彙は同じグローバル識別子を持つ複数のアイテムが共存できるかどうか、もしそうであれば、同じ識別子を持つアイテムがどのように扱われるかを定義します。

> **メモ:** {{glossary("WHATWG")}} の定義では、 `itemid` が {{glossary("URL")}} でなければならないと指定しています。しかし、以下の例では {{glossary("URN")}} も使用されることを明らかに示しています。この矛盾はマイクロデータ仕様の不完全性を反映したものかもしれません。

## 例

### 本のための構造化データの表現

この例では、マイクロ属性を用いて、以下の構造化データを表現しています。

<table class="standard-table">
  <tbody>
    <tr>
      <td rowspan="4">itemscope</td>
      <td>itemtype: itemid</td>
      <td colspan="2">https://schema.org/Book: urn:isbn:0-374-22848-5</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>title</td>
      <td>Owls of the Eastern Ice</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>author</td>
      <td>Jonathan C Slaght</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>datePublished</td>
      <td>2020-08-04</td>
    </tr>
  </tbody>
</table>

#### HTML

```html
<dl
  itemscope
  itemtype="https://schema.org/Book"
  itemid="urn:isbn:0-374-22848-5<">
  <dt>Title</dt>
  <dd itemprop="title">Owls of the Eastern Ice</dd>
  <dt>Author</dt>
  <dd itemprop="author">Jonathan C Slaght</dd>
  <dt>Publication date</dt>
  <dd>
    <time itemprop="datePublished" datetime="2020-08-04">August 4 2020</time>
  </dd>
</dl>
```

#### 結果

{{EmbedLiveSample('Representing structured data for a book')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- すべての[グローバル属性](/ja/docs/Web/HTML/Global_attributes)
- その他のマイクロデータに関するグローバル属性:

  - [`itemprop`](/ja/docs/Web/HTML/Global_attributes/itemprop)
  - [`itemref`](/ja/docs/Web/HTML/Global_attributes/itemref)
  - [`itemscope`](/ja/docs/Web/HTML/Global_attributes/itemscope)
  - [`itemtype`](/ja/docs/Web/HTML/Global_attributes/itemtype)
