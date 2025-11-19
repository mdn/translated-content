---
title: column-rule
slug: Web/CSS/Reference/Properties/column-rule
original_slug: Web/CSS/column-rule
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

**`column-rule`** は[一括指定](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)を行う [CSS](/ja/docs/Web/CSS) のプロパティで、段組みレイアウトで段間に引かれる線（段間罫）の太さ、スタイル、色を設定します。

{{InteractiveExample("CSS デモ: column-rule")}}

```css interactive-example-choice
column-rule: dotted;
```

```css interactive-example-choice
column-rule: solid 6px;
```

```css interactive-example-choice
column-rule: solid blue;
```

```css interactive-example-choice
column-rule: thick inset blue;
```

```html-nolint interactive-example
<section id="default-example">
  <p id="example-element">
    ロンドン。ミカエル学期の終わり、リンカーンズ・イン・ホールに大法官が座っています。容赦のない 11 月の天候。街は、まるで地球から水が引き始めたばかりのように泥だらけで、ホルボーン・ヒルを象のようなトカゲのようによちよち歩く、体長 12 メートルほどのメガロサウルスに出会っても不思議ではないでしょう。
  </p>
</section>
```

```css interactive-example
#example-element {
  columns: 3;
  column-rule: solid;
  text-align: left;
}
```

## 構成要素のプロパティ

このプロパティは、以下の CSS プロパティの一括指定です。

- {{Cssxref("column-rule-color")}}
- {{Cssxref("column-rule-style")}}
- {{Cssxref("column-rule-width")}}

## 構文

```css
column-rule: dotted;
column-rule: solid 8px;
column-rule: solid blue;
column-rule: thick inset blue;

/* グローバル値 */
column-rule: inherit;
column-rule: initial;
column-rule: revert;
column-rule: revert-layer;
column-rule: unset;
```

### 値

`column-rule` プロパティは、以下に挙げる値のうち 1 ～ 3 個を任意の順序で指定します。

- `<'column-rule-width'>`
  - : {{cssxref("&lt;length&gt;")}} または 3 つのキーワード、 `thin`、`medium`、`thick` のうちの 1 つです。詳しくは {{cssxref("border-width")}} を参照してください。
- `<'column-rule-style'>`
  - : 有効な値と詳細は {{cssxref("border-style")}} を参照してください。
- `<'column-rule-color'>`
  - : {{cssxref("&lt;color&gt;")}} 値です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 例 1

```css
/* "medium dotted currentcolor" と同じ */
p.foo {
  column-rule: dotted;
}

/* "medium solid blue" と同じ */
p.bar {
  column-rule: solid blue;
}

/* "8px solid currentcolor" と同じ */
p.baz {
  column-rule: solid 8px;
}

p.abc {
  column-rule: thick inset blue;
}
```

### 例 2

#### HTML

```html-nolint
<p class="content-box">
  これは 3 つ段に分割されたテキストの束です。 <code>column-rule</code> プロパティは、段と段の間に引かれる線のスタイル、太さ、色を変更するために使用されます。すばらしいと思いませんか？
</p>
```

#### CSS

```css
.content-box {
  padding: 0.3em;
  background: #ff7;
  column-count: 3;
  column-rule: inset 2px #33f;
}
```

#### 結果

{{EmbedLiveSample('Example_2')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [学習: 段組みレイアウト](/ja/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- {{CSSXref("column-rule-style")}}
- {{CSSXref("column-rule-width")}}
- {{CSSXref("column-rule-color")}}
