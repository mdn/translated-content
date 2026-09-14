---
title: HTML `<ruby>` ルビ注釈要素
short-title: <ruby>
slug: Web/HTML/Reference/Elements/ruby
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

**`<ruby>`** は [HTML](/ja/docs/Web/HTML) の要素で、ベーステキストの上、下、隣に描画される小さな注釈であり、よく東アジアの文字の発音を表すのに使われます。他の種類の注釈にも使われることがありますが、この使い方はあまり一般的ではありません。

*ルビ*という言葉は[写植者が使用した長さの単位](<https://en.wikipedia.org/wiki/Agate_(typography)>)に由来しており、読みやすさ保ったままテキストを新聞用紙に印刷できる最小のサイズを表します。

{{InteractiveExample("HTML デモ: &lt;ruby&gt;", "tabbed-shorter")}}

```html interactive-example
<ruby> 明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp> </ruby>
```

```css interactive-example
ruby {
  font-size: 2em;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)のみがあります。

## 例

### 例 1: 文字ごと

```html
<ruby>
  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp> 字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```

#### 結果

{{EmbedLiveSample('Example 1: Character')}}

### 例 2: 熟語

```html
<ruby> 明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp> </ruby>
```

#### 結果

{{EmbedLiveSample('Example 1: Word')}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >,
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >, 知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        1 つ以上のグループで、それぞれが 2 つの部分から構成されています。
        <ol>
          <li>ベーステキスト。次のどちらかです。
            <ul>
              <li><a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ">記述コンテンツ</a>。ただし <code>&lt;ruby&gt;</code> 要素がなく、子孫にも <code>&lt;ruby&gt;</code> 要素がないこと。</li>
              <li>単一の <code>&lt;ruby&gt;</code> 要素で、子孫に <code>&lt;ruby&gt;</code> 要素がないもの。</li>
            </ul>
          </li>
          <li>ベーステキストの注釈で、次のどちらかです。
            <ul>
              <li>1 つ以上の {{HTMLElement("rt")}} 要素</li>
              <li>{{HTMLElement("rp")}} 要素に続いて 1 つ以上の {{HTMLElement("rt")}} 要素。それ自体に {{HTMLElement("rp")}} 要素が続く（つまり、<code>rp, rt, rp, rt, ..., rp</code>）</li>
            </ul>
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >対応するロールなし</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>すべて</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("rt")}}
- {{HTMLElement("rp")}}
- {{cssxref("ruby-overhang")}}
- {{CSSxRef("text-transform")}}: full-size-kana
- [CSS ルビレイアウト](/ja/docs/Web/CSS/Guides/Ruby_layout) モジュール
