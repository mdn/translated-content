---
title: text-box
slug: Web/CSS/Reference/Properties/text-box
original_slug: Web/CSS/text-box
l10n:
  sourceCommit: 95b3a7c3d7c854feddb769922818f9d5a3abd500
---

**`text-box`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 {{cssxref("text-box-trim")}} および {{cssxref("text-box-edge")}} プロパティに対応する一括指定プロパティで、テキスト要素のブロックコンテナーのブロック先頭端とブロック末尾端から切り取る空間の大きさを指定します。

## 構成要素のプロパティ

このプロパティは、以下の CSS プロパティの一括指定です。

- {{cssxref("text-box-trim")}}
- {{cssxref("text-box-edge")}}

## 構文

```css
/* 単一キーワード */
text-box: normal;

/* 1 つの text-box-edge キーワード */
text-box: trim-start text;
text-box: trim-both text;

/* 2 つの text-box-edge キーワード */
text-box: trim-start cap alphabetic;
text-box: trim-both ex text;

/* グローバル値 */
text-box: inherit;
text-box: initial;
text-box: revert;
text-box: revert-layer;
text-box: unset;
```

### 値

`text-box` の値は、 {{cssxref("text-box-trim")}} 値と {{cssxref("text-box-edge")}} 値を空白で区切ったもので構成できます。値の説明については、それぞれのページをご覧ください。

`text-box` プロパティは、`normal` というキーワードも導くことができます。これは、`text-box: none auto;` と同等です。

`text-box-trim` を省略した場合、 `trim-both` に設定されます。 `text-box-edge` を省略した場合、 `auto` に設定されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 解説

テキストのみのコンテンツの高さは、フォントの高さに対して相対的です。デジタルフォントファイルでは、高さには大文字、アセンダー、ディセンダーなど、すべての文字が含まれます。フォントによってベースラインの高さが異なるため、同じ `font-size` を指定しても、テキストの行の高さが異なり、行間に影響します。

`text-box` プロパティを使用すると、テキスト要素のブロックコンテナーのブロック開始端とブロック末尾端から余分な空白を切り取ることができます。この余白には、テキストのブロック開始端とブロック末尾端の{{glossary("leading", "行送り")}}、およびフォント内で定義された空白（上記で記述）を含めることができます。これにより、ブロック方向のテキストの空白を簡単に制御できるようになります。

## 例

### 基本的な `text-box` の使用法

次の例では、 2 つの `<p>` 要素があり、それぞれ `one` および `two` のクラスが指定されています。

最初の段落には、 `text-box` 値として `trim-end cap alphabetic` を適用します。 {{cssxref("text-box-edge")}} の値を `cap alphabetic` と指定し、上端を大文字の上端に、下端をテキストのベースラインに揃える切り取り指定します。 {{cssxref("text-box-trim")}} の値が `trim-end` に設定されているため、段落の下端だけが切り取られます。

2 つ目の段落には、 `text-box` 値として `trim-both ex alphabetic` を適用します。 {{cssxref("text-box-edge")}} の値を `ex alphabetic` と指定し、上端をフォントの x 高（小文字の上端）に、下端をテキストのベースラインに揃える切り取りを指定します。 {{cssxref("text-box-trim")}} 値が `trim-both` に設定されているため、段落の上端と下端の両方が切り取られます。

```html hidden
<p class="one">This is .one</p>

<p class="two">This is .two</p>
```

```css hidden
html {
  font-family: sans-serif;
  height: 100%;
}

body {
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 100px;
}

p {
  margin: 0;
  font-size: 6rem;
  font-weight: bold;
}
```

```css
.one {
  text-box: trim-end cap alphabetic;
}

.two {
  text-box: trim-both ex alphabetic;
}

p {
  border-top: 5px solid magenta;
  border-bottom: 5px solid magenta;
}
```

#### 結果

出力は次のとおりです。それぞれの段落の上部と下部に境界線を含めたことに注意してください。これにより、それぞれのケースで空白がどのように切り取られたかを確認できます。

{{EmbedLiveSample("Basic `text-box` usage","100%","360")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("text-box-edge")}}, {{cssxref("text-box-trim")}}
- {{cssxref("&lt;text-edge&gt;")}} データ型
- [CSS インラインレイアウト](/ja/docs/Web/CSS/Guides/Inline_layout)モジュール
- [CSS text-box-edge](https://developer.chrome.com/blog/css-text-box-trim) (developer.chrome.com, 2025)
