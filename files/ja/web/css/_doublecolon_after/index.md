---
title: '::after (:after)'
slug: Web/CSS/::after
tags:
  - CSS
  - レイアウト
  - 擬似要素
  - リファレンス
  - セレクター
  - ウェブ
browser-compat: css.selectors.after
translation_of: Web/CSS/::after
---
{{CSSRef}}

CSS において **`::after`** は、選択した要素の最後の子要素として[擬似要素](/ja/docs/CSS/Pseudo-elements)を生成します。よく {{cssxref("content")}} プロパティを使用して、要素に装飾的な内容を追加するために用いられます。この要素は既定でインラインです。

```css
/* リンクの後に矢印を追加 */
a::after {
  content: "→";
}
```

> **Note:** `::before` および `::after` によって作成される擬似要素は[要素の整形ボックスに含まれるため](https://www.w3.org/TR/CSS2/generate.html#before-after-content)、 {{htmlelement("img")}} や {{htmlelement("br")}} のような[置換要素](/ja/docs/Web/CSS/Replaced_element)には適用されません。

## 構文

{{CSSSyntax}}

> **Note:** CSS3 では[疑似クラス](/ja/docs/Web/CSS/Pseudo-classes)と[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)を見分けやすくするために、 `::after` の表記法（二重コロン付き）が導入されました。ブラウザーでは CSS2 で導入された `:after` も使用できます。

## 例

### シンプルな使い方

2 つのクラスを作成しましょう。 1 つはつまらない段落で 1 つは楽しい段落です。これらのクラスを使用して、段落の最後に擬似要素を追加することができます。

#### HTML

```html
<p class="boring-text">古くつまらないテキストです。</p>
<p>つまらなくも楽しくもないふつうのテキストです。</p>
<p class="exciting-text">MDN への協力は簡単で楽しいものです。</p>
```

#### CSS

```css
.exciting-text::after {
  content: " <- 楽しい！";
  color: green;
}

.boring-text::after {
  content: " <- ツマラナイ！";
  color: red;
}
```

#### 結果

{{EmbedLiveSample('Simple_usage', 500, 150)}}

### 装飾の例

{{CSSxRef("content")}} プロパティ内の文字列や画像は、大体思う通りに整形することができます。

#### HTML

```html
<span class="ribbon">このテキストの後のオレンジのボックスを見てください。</span>
```

#### CSS

```css
.ribbon {
  background-color: #5BC8F7;
}

.ribbon::after {
  content: "かわいいオレンジのボックスです。";
  background-color: #FFBA10;
  border-color: black;
  border-style: dotted;
}
```

#### 結果

{{EmbedLiveSample('Decorative_example', 450, 20)}}

### ツールチップ

この例は、 `::after` を CSS の [`attr()`](/ja/docs/Web/CSS/attr) 関数と `data-descr` [カスタムデータ属性](/ja/docs/Web/HTML/Global_attributes/data-*)との組み合わせで使用し、ツールチップを作成しています。 JavaScript は必要ありません。

また、このテクニックを使ってキーボードユーザーに対応することもできます。 `tabindex` に `0` を追加して、それぞれの `span` をキーボードフォーカス可能にし、CSS の `:focus` セレクターを使用することでキーボードフォーカスを可能にします。これは `::before` と `::after` がいかに柔軟であるかを示しています。しかし、最もアクセスしやすいようにするには、他の方法（例えば [details および summary](/ja/docs/Web/HTML/Element/details) 要素で作成した詳細折りたたみウィジェットがより適していると思われます。

#### HTML

```html
<p>Here we have some
  <span tabindex="0" data-descr="collection of words and punctuation">text</span> with a few
  <span tabindex="0" data-descr="small popups that appear when hovering">tooltips</span>.
</p>
```

#### CSS

```css
span[data-descr] {
  position: relative;
  text-decoration: underline;
  color: #00F;
  cursor: help;
}

span[data-descr]:hover::after,
span[data-descr]:focus::after {
  content: attr(data-descr);
  position: absolute;
  left: 0;
  top: 24px;
  min-width: 200px;
  border: 1px #aaaaaa solid;
  border-radius: 10px;
  background-color: #ffffcc;
  padding: 12px;
  color: #000000;
  font-size: 14px;
  z-index: 1;
}
```

#### 結果

{{EmbedLiveSample('Tooltips', 450, 120)}}

## アクセシビリティの考慮

`::after` 擬似要素を使用してコンテンツを追加することは、画面リーダーからアクセスできなくなる可能性があるため推奨されません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("::before")}}
- {{CSSxRef("content")}}
