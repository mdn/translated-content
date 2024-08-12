---
title: contain-intrinsic-block-size
slug: Web/CSS/contain-intrinsic-block-size
l10n:
  sourceCommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{CSSRef}}

**`contain-intrinsic-block-size`** は [CSS](/ja/docs/Web/CSS) の[論理プロパティ](/ja/docs/Web/CSS/CSS_logical_properties_and_values)で、要素が[サイズ拘束](/ja/docs/Web/CSS/CSS_containment/Using_CSS_containment#サイズ拘束)の対象となっている場合に、ブラウザーがレイアウトに使用することができる要素のブロックサイズを定義します。

ブロックサイズとは、行内のテキストの流れに対して垂直方向の要素のサイズのことです。標準的な英語のような横書きの[書字方向](/ja/docs/Web/CSS/writing-mode)では、ブロックサイズは垂直方向（高さ）です。縦書きの場合、ブロックサイズは水平方向です。

## 構文

```css
/* キーワード値 */
contain-intrinsic-block-size: none;

/* <length> 値 */
contain-intrinsic-block-size: 1000px;
contain-intrinsic-block-size: 10rem;

/* auto <length> */
contain-intrinsic-block-size: auto 300px;

/* グローバル値 */
contain-intrinsic-block-size: inherit;
contain-intrinsic-block-size: initial;
contain-intrinsic-block-size: revert;
contain-intrinsic-block-size: revert-layer;
contain-intrinsic-block-size: unset;
```

### 値

要素の内在ブロックサイズには以下の値を指定することができます。

- `none`
  - : この要素に内在するブロックサイズはありません。
- `<length>`
  - : 要素は、({{cssxref("&lt;length&gt;")}}) データ型を使用して表現される、指定したブロックサイズです。
- `auto <length>`
  - : 要素がサイズ拘束にあり、そのコンテンツをスキップしているとき（例えば、画面外にあり、`content-visibility: auto` が設定されているとき）、ブロックサイズは、最後に子要素をレンダリングできたときの要素の実際のサイズから記憶されます。
    要素が子要素を一度もレンダリングしたことがなく、したがって通常レンダリングされる要素サイズの値が記憶されていない場合、またはコンテンツをスキップしていない場合、ブロックサイズは指定した `<length>` になります。

## 解説

このプロパティは、[`contain: size`](/ja/docs/Web/CSS/contain) や [`content-visibility`](/ja/docs/Web/CSS/content-visibility) のような、サイズ拘束を発生させる要素に沿ったプロパティとして一般的に適用されます。

サイズ拘束により、ユーザーエージェントは、要素が固定サイズであるかのようにレイアウトすることができます。
これは、実際のサイズを決定するために子要素の再描画を避けることによって、不必要なリフローを防ぎます（それによって、ユーザー体験を向上させます）。
既定では、サイズ拘束は要素をコンテンツを持たないものとして扱い、コンテンツに幅や高さがないのと同じ方法でレイアウトを崩すことができます。
`contain-intrinsic-block-size` プロパティにより、レイアウトのブロックサイズとして使用する適切な値を指定することができます。

`auto <length>` 値は、要素が（子要素とともに）「通常レンダリング」される場合に要素のブロックサイズを格納し、要素がコンテンツを持っていない場合に指定した値の代わりに使用することができます。
これにより、[`content-visibility: auto`](/ja/docs/Web/CSS/content-visibility) を持つ画面外の要素は、開発者が要素のサイズを正確に推定することなく、サイズ拘束の恩恵を受けることができます。
子要素がレンダリングされる場合、記憶された値は使用されません。サイズ拘束が有効な場合、`<length>` の値が使用されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 内在ブロックサイズの設定

下記 HTML は、サイズ拘束の対象となり、子要素を格納する要素 "contained_element" を定義しています。

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

下記の CSS では、`contained_element` の [`content-visibility`](/ja/docs/Web/CSS/content-visibility) を `auto` に設定するので、要素が非表示になるとサイズが拘束されます。
サイズ拘束されるときに使用する内在ブロックサイズとインラインサイズは、それぞれ `contain-intrinsic-block-size` と `contain-intrinsic-inline-size` を使用して同時に設定します。

```css
#contained_element {
  border: 2px solid green;
  inline-size: 151px;
  content-visibility: auto;
  contain-intrinsic-inline-size: 152px;
  contain-intrinsic-block-size: 52px;
}
.child_element {
  border: 1px solid red;
  background: blue;
  block-size: 50px;
  inline-size: 150px;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/articles/content-visibility) (web.dev)
- {{CSSxRef("contain-intrinsic-inline-size")}}
- {{CSSxRef("contain-intrinsic-size")}}
- {{CSSxRef("contain-intrinsic-width")}}
- {{CSSxRef("contain-intrinsic-height")}}
