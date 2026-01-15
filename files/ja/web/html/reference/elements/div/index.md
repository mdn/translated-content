---
title: "<div>: コンテンツ区分要素"
slug: Web/HTML/Reference/Elements/div
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

**`<div>`** は [HTML](/ja/docs/Web/HTML) の要素で、フローコンテンツの汎用コンテナーです。 {{glossary("CSS")}} を用いて何らかのスタイル付けがされる（例えば、スタイルが直接適用されたり、親要素に[フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)などの何らかのレイアウトモデルが適用されるなど）までは、コンテンツやレイアウトには影響を与えません。

{{InteractiveExample("HTML デモ: &lt;div&gt;", "tabbed-standard")}}

```html interactive-example
<div class="warning">
  <img
    src="/shared-assets/images/examples/leopard.jpg"
    alt="威圧的なヒョウ。" />
  <p>ヒョウに注意</p>
</div>
```

```css interactive-example
.warning {
  border: 10px ridge red;
  background-color: yellow;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
}

.warning img {
  width: 100%;
}

.warning p {
  font: small-caps bold 1.2rem sans-serif;
  text-align: center;
}
```

「純粋」なコンテナーとして、`<div>` 要素は本質的には何も表しません。その代わり、 [`class`](/ja/docs/Web/HTML/Reference/Global_attributes/class) や [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) を使用してスタイル付けしやすくしたり、文書内で異なる言語で書かれた部分を（[`lang`](/ja/docs/Web/HTML/Reference/Global_attributes/lang) 属性を使用して）示したりするために使用します。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

> [!NOTE]
> `align` 属性は廃止されたので、使用しないでください。代わりに、 CSS のプロパティを使用したり、 [CSS グリッド](/ja/docs/Web/CSS/Guides/Grid_layout)や [CSS フレックスボックス](/ja/docs/Learn_web_development/Core/CSS_layout/Flexbox)を使用して `<div>` 要素をページの中央に配置したりしてください。

## 使用上の注意

- `<div>` 要素は、他に適切な意味的要素（{{HTMLElement("article")}} や {{HTMLElement("nav")}} など）がない場合に限り使用してください。

## アクセシビリティ

`<div>` 要素は [`generic` の暗黙のロール](https://w3c.github.io/aria/#generic)を持っており、まったくない訳ではありません。これは、特定の役割を持つ直接の子孫要素が適切に機能することを期待する、特定の ARIA の組み合わせ宣言に影響を与える可能性があります。

## 例

### 基本的な例

```html-nolint
<div>
  <p>
    あらゆるコンテンツがここに来ます。 &lt;p&gt; や &lt;table&gt; などです。名前を付けてください！
  </p>
</div>
```

結果はこのようになります。

{{EmbedLiveSample("A_basic_example", 650, 60)}}

### スタイル設定を行う例

この例では CSS を用いて `<div>` にスタイルを適用することで、影付きのボックスを作成します。なお、 `<div>` 要素に [`class`](/ja/docs/Web/HTML/Reference/Global_attributes/class) 属性を使用して、 `"shadowbox"` という名前のスタイルを要素に適用します。

#### HTML

```html
<div class="shadowbox">
  <p>素敵な影付きボックスに表示された、とても興味深いメモです。</p>
</div>
```

#### CSS

```css
.shadowbox {
  width: 15em;
  border: 1px solid #333333;
  box-shadow: 8px 8px 5px #444444;
  padding: 8px 12px;
  background-image: linear-gradient(180deg, white, #dddddd 40%, #cccccc);
}
```

#### 結果

{{EmbedLiveSample("A_styled_example", 650, 120)}}

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
        >, <a href="/ja/docs/Web/HTML/Guides/Content_categories#知覚可能コンテンツ">知覚可能コンテンツ</a>
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >。<br />または ({{glossary("WHATWG")}} HTML において) 親要素が
        {{HTMLElement("dl")}} である場合は、 1 つ以上の
        {{HTMLElement("dt")}} 要素と、それに続く 1 つ以上の
        {{HTMLElement("dd")}} 要素、さらに任意で
        {{HTMLElement("script")}} 要素や
        {{HTMLElement("template")}} 要素が混在。
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >
        を受け入れるすべての要素。<br />または ({{glossary("WHATWG")}}
        HTML において) {{HTMLElement("dl")}} 要素。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>すべて</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLDivElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 意味論的な区分要素: {{HTMLElement("section")}}, {{HTMLElement("article")}}, {{HTMLElement("nav")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}
- 記述コンテンツのスタイル付け用の {{HTMLElement("span")}} 要素
