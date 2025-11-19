---
title: caption-side
slug: Web/CSS/Reference/Properties/caption-side
original_slug: Web/CSS/caption-side
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

**`caption-side`** は [CSS](/ja/docs/Web/CSS) のプロパティで、表 ({{htmlelement("table")}}) の {{HTMLElement("caption")}} の中身を指定された側に配置します。この値は表の {{cssxref('writing-mode')}} に対する相対値です。

{{InteractiveExample("CSS デモ: caption-side")}}

```css interactive-example-choice
caption-side: top;
```

```css interactive-example-choice
caption-side: bottom;
```

```html interactive-example
<section class="default-example" id="default-example">
  <table class="transition-all" id="example-element">
    <caption>
      有名な動物
    </caption>
    <tr>
      <th>名前</th>
      <th>場所</th>
    </tr>
    <tr>
      <td>キリン</td>
      <td>アフリカ</td>
    </tr>
    <tr>
      <td>ペンギン</td>
      <td>南極</td>
    </tr>
    <tr>
      <td>ナマケモノ</td>
      <td>南アメリカ</td>
    </tr>
    <tr>
      <td>トラ</td>
      <td>アジア</td>
    </tr>
  </table>
</section>
```

```css interactive-example
table {
  font-size: 1.2rem;
  text-align: left;
  color: #000;
}

th,
td {
  padding: 0.2rem 1rem;
}

caption {
  background: #fc3;
  padding: 0.5rem 1rem;
}

tr {
  background: #eee;
}

tr:nth-child(even) {
  background: #ccc;
}
```

## 構文

```css
/* 方向を示す値 */
caption-side: top;
caption-side: bottom;

/* グローバル値 */
caption-side: inherit;
caption-side: initial;
caption-side: revert;
caption-side: revert-layer;
caption-side: unset;
```

`caption-side` プロパティは、以下のキーワード値のうちの一つで指定します。

### 値

- `top`
  - : キャプションボックスを表のブロック方向の先頭に配置します。
- `bottom`
  - : キャプションボックスを表のブロック方向の末尾に配置します。

> [!NOTE]
> [CSS の論理的プロパティと値](/ja/docs/Web/CSS/Guides/Logical_properties_and_values)モジュールでは、キャプションボックスをテーブルのインライン先頭側の端およびインライン末尾側の端にそれぞれ配置するための 2 つの論理値、 `inline-start` および `inline-end` を定義しています。これらの値は、どのブラウザーでも対応していません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_captions_above_and_below">キャプションを上や下に設定</h3>

#### HTML

```html
<table class="top">
  <caption>
    この表の上側のキャプション
  </caption>
  <tr>
    <td>いくつかのデータ</td>
    <td>もっと多くのデータ</td>
  </tr>
</table>

<br />

<table class="bottom">
  <caption>
    この表の下側のキャプション
  </caption>
  <tr>
    <td>いくつかのデータ</td>
    <td>もっと多くのデータ</td>
  </tr>
</table>
```

#### CSS

```css
.top caption {
  caption-side: top;
}

.bottom caption {
  caption-side: bottom;
}

table {
  border: 1px solid red;
}

td {
  border: 1px solid blue;
}
```

#### 結果

{{EmbedLiveSample('Setting_captions_above_and_below', 'auto', 160)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLelement("caption")}}
- [CSS 表](/ja/docs/Web/CSS/Guides/Table)モジュール
- [CSS 論理的プロパティと値](/ja/docs/Web/CSS/Guides/Logical_properties_and_values)モジュール
