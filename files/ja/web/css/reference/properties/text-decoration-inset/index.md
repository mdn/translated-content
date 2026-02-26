---
title: text-decoration-inset
slug: Web/CSS/Reference/Properties/text-decoration-inset
l10n:
  sourceCommit: 0fe625f488d9b548f57bb7f4c714287ba093d96b
---

{{SeeCompatTable}}

`text-decoration-inset` は [CSS](/ja/docs/Web/CSS) のプロパティで、要素のテキスト装飾の開始点と終了点を調整し、レンダリングされたテキストに対して装飾を短縮したり、延長したり、位置をずらしたりすることができます。

{{InteractiveExample("CSS Demo: text-decoration-inset")}}

```css interactive-example-choice
text-decoration-inset: 20px;
```

```css interactive-example-choice
text-decoration-inset: -0.5em;
```

```css interactive-example-choice
text-decoration-inset: 20px 1em;
```

```css interactive-example-choice
text-decoration-inset: -0.5rem -1.5rem;
```

```css interactive-example-choice
text-decoration-inset: -2ex 10vw;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">Karmadrome</p>
</section>
```

```css interactive-example
#example-element {
  font: 2.5em sans-serif;
  text-decoration: underline 0.3em limegreen;
}
```

## 構文

```css
/* auto キーワード */
text-decoration-inset: auto;

/* 1 つの <length> 値 */
text-decoration-inset: 20px;
text-decoration-inset: -2rem;

/* 2 つの <length> 値 */
text-decoration-inset: 20px 1em;
text-decoration-inset: -0.5rem -1.5rem;
text-decoration-inset: -2ex 1vw;

/* グローバル値 */
text-decoration-inset: inherit;
text-decoration-inset: initial;
text-decoration-inset: revert;
text-decoration-inset: revert-layer;
text-decoration-inset: unset;
```

### 値

1 つまたは 2 つの {{cssxref("&lt;length>")}} 値、またはキーワード `auto` です。

- {{cssxref("&lt;length>")}}
  - : テキスト装飾の位置を調整する量を指定します。正の値はテキスト装飾を内側に移動（短縮）し、負の値はテキスト装飾を外側に移動（延長）します。値を 1 つ指定した場合、テキスト装飾の始点と終了点の両方に適用されます。値を 2 つ指定した場合、最初の値はテキスト装飾の始点に、2 番目の値は終了点に適用されます。
- `auto`
  - : ブラウザーは開始インセット量と終了インセット量を選択し、2 つの装飾されたテキストボックスが横に並んでいる場合に、それらのテキスト装飾の間に隙間を作成します。これにより、単一のテキスト装飾のように見えることを防ぎます。

## 解説

デフォルトでは、{{cssxref("text-decoration")}} 一括指定プロパティおよび関連する個別指定プロパティによって設定される要素のテキスト装飾は、レンダリングされたテキストと同じサイズになります。

`text-decoration-inset` プロパティを使用すると、テキストコンテナーのテキスト装飾の開始点や終了点を調整できます。これは、テキスト装飾をテキスト自体から内側に縮小する（インセット）または外側に張り出させる（アウトセット）、あるいは位置をずらす効果を作成するのに便利です。それぞれの効果の例については、[基本的な使用例](#基本的な使用例)を参照してください。

`<length>` 値を 1 つ指定した場合、テキスト装飾の開始位置と終了位置にインセット（正の場合）またはアウトセット（負の場合）を設定します。開始位置と終了位置を別個に設定するには、2 つの `<length>` 値を使用できます。最初の値はテキスト装飾の開始位置に、2 番目の値は終了位置に適用されます。

`text-decoration-inset` プロパティは `auto` キーワードも指定できます。これによりブラウザーはテキスト装飾の開始点と終了点を内側に配置し、2 つの装飾されたテキストボックスが横に並んでいる場合に単一の装飾のように見えないようにします。`auto` 値は特に中国語テキストのレンダリングにおいて重要です。中国語では[固有名詞を区切る](https://www.w3.org/International/clreq/#id88)ために下線が使用されており、隣接する固有名詞は別個の下線を持つべきだからです。例えば [`auto` 値の効果](#auto_値の効果)を参照してください。

`auto` 値は初期値 `0` と同じ効果にはなりません。`text-decoration-inset` を `0` に設定すると、装飾の間に空白が発生しません。

`text-decoration-inset` プロパティは継承されず、{{cssxref("text-decoration")}} 一括指定プロパティの構成プロパティでもありません。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使用例

この例では、アウトセット、インセット、および「ずらした」使用例を実演します。

#### HTML

順序なしリストを定義し、3 つのリストアイテムをそれぞれ別個の `id` で持つ。

```html live-sample___use-case-examples
<ul>
  <li id="one">外側に張り出した装飾</li>
  <li id="two">内側に縮小した装飾</li>
  <li id="three">ずらした装飾</li>
</ul>
```

#### CSS

それぞれのリストアイテムには異なる {{cssxref("text-decoration")}} および `text-decoration-inset` を設定しています。

- 最初のものは濃いライムグリーンの下線を有し、その下線は両端から均等に `10px` の余白を置いて配置されています。
- 2 つ目は中程度の太さの白の打ち消し線を有し、両端から均等に `0.5em` 分内側に配置されています。
- 3 つ目は薄い波状の青色下線を持ち、右に `1em` 分ずらして配置されています。

```css hidden live-sample___use-case-examples
li {
  font-family: sans-serif;
  font-size: 2em;
  margin-bottom: 20px;
}

@supports not (text-decoration-inset: auto) {
  body::before {
    content: "このブラウザーは text-decoration-inset プロパティに対応していません。";
    background-color: wheat;
    display: block;
    padding: 10px 0;
    width: 100%;
    text-align: center;
  }
}
```

```css live-sample___use-case-examples
#one {
  text-decoration: underline 0.3em limegreen;
  text-decoration-inset: -10px;
}

#two {
  text-decoration: line-through 5px white;
  text-decoration-inset: 0.5em;
}

#three {
  text-decoration: underline wavy 2px blue;
  text-decoration-inset: 1em -1em;
}
```

#### 結果

これは次のようにレンダリングされます。

{{embedlivesample("use-case-examples", "100%", "230")}}

### `auto` 値の効果

この例は、`text-decoration-inset: auto` の値の効果を示しています。

#### HTML

横に並んでいる 2 つの {{htmlelement("u")}} 要素のグループを定義します。

```html live-sample___auto-example
<p lang="zh" id="one"><u>石井</u><u>艾俐俐</u></p>

<p lang="zh" id="two"><u>石井</u><u>艾俐俐</u></p>
```

#### CSS

それぞれの `<u>` 要素には、`red` 色と `3px` の太さの下線が設定されています。最初の `<u>` 要素のグループには `text-decoration-inset` の値として `auto` が設定されていますが、比較のため、2 つ目の要素のグループには明示的に `text-decoration-inset` の初期値である `0` が設定されています：

```css hidden live-sample___auto-example
u {
  font-family: sans-serif;
  font-size: 2em;
}

@supports not (text-decoration-inset: auto) {
  body::before {
    content: "このブラウザーは text-decoration-inset プロパティに対応していません。";
    background-color: wheat;
    display: block;
    padding: 10px 0;
    width: 100%;
    text-align: center;
  }
}
```

```css live-sample___auto-example
u {
  text-decoration-color: red;
  text-decoration-thickness: 3px;
}

#one u {
  text-decoration-inset: auto;
}

#two u {
  text-decoration-inset: 0;
}
```

#### 結果

これは次のようにレンダリングされます。

{{embedlivesample("auto-example", "100%", "200")}}

`auto` の値では、テキスト装飾が両側に微妙に内側に配置され、2 つの要素の下線間（要素自体には空間が追加されない）に隙間が作成されます。`0` の値では隙間は発生しません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("text-decoration")}}
- [CSS テキスト装飾](/ja/docs/Web/CSS/Guides/Text_decoration)モジュール
