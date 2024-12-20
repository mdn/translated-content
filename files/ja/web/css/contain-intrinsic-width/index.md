---
title: contain-intrinsic-width
slug: Web/CSS/contain-intrinsic-width
l10n:
  sourceCommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{CSSRef}}

**`contain-intrinsic-width`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素が[サイズ拘束](/ja/docs/Web/CSS/CSS_containment/Using_CSS_containment#サイズ拘束)の主体となっている場合に、ブラウザーがレイアウトに使用する要素の幅を設定します。

## 構文

```css
/* キーワード値 */
contain-intrinsic-width: none;

/* <length> 値 */
contain-intrinsic-width: 1000px;
contain-intrinsic-width: 10rem;

/* auto <length> */
contain-intrinsic-width: auto 300px;

/* グローバル値 */
contain-intrinsic-width: inherit;
contain-intrinsic-width: initial;
contain-intrinsic-width: revert;
contain-intrinsic-width: revert-layer;
contain-intrinsic-width: unset;
```

### 値

以下の値が要素に指定できます。

- `none`
  - : この要素に内在的な幅はありません。
- `<length>`
  - : この要素には指定された幅 ({{cssxref("&lt;length&gt;")}}) があります。
- `auto <length>`
  - : その要素に「通常レンダリングされる」要素の幅の値が存在し、そのコンテンツをスキップする場合（例えば、その要素が画面外にある場合）の記憶値です。そうでなければ `<length>` が指定されます。

## 解説

このプロパティは、[`contain.size`](/ja/docs/Web/CSS/contain) や [`content-visibility`](/ja/docs/Web/CSS/content-visibility) のような、サイズ拘束が発生する要素の横に並んだプロパティとして一般的に適用され、[`contain-intrinsic-size`](/ja/docs/Web/CSS/contain-intrinsic-size) [一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)を使用して設定することもできます。

サイズ拘束により、ユーザーエージェントは要素が固定されたサイズであるかのようにレイアウトすることができ、実際のサイズを決定するための子要素の再描画を避けることで不必要な再フローを防ぐことができます（これにより、ユーザーの使い心地が向上します）。
既定では、サイズ拘束は要素をコンテンツがないものとして扱い、コンテンツに幅または高さがない場合と同じ方法でレイアウトを崩す可能性があります。
`contain-intrinsic-width` プロパティにより、レイアウトに使用する幅を指定することができます。

`auto <length>` 値は、要素が（子要素とともに）「通常レンダリング」される場合に要素の幅を格納し、要素がその内容をスキップするときに指定した幅の代わりに使用することができます。
これにより、[`content-visibility: auto`](/ja/docs/Web/CSS/content-visibility) を持つ画面外の要素は、開発者が要素のサイズを正確に推定することなく、サイズ拘束の恩恵を受けることができます。
子要素がレンダリングされる場合、記憶された値は使用されません（サイズ拘束が有効な場合、`<length>` が使用されます）。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

下記の例の他に、{{CSSxRef("contain-intrinsic-size")}} ページには、内在する幅と高さを変更する効果を示すライブサンプルがあります。

### 内在的な幅の設定

下記の HTML は、サイズ拘束を受け、子要素を格納する要素 "contained_element" を定義しています。

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

下記の CSS では、`contained_element` の [`content-visibility`](/ja/docs/Web/CSS/content-visibility) を `auto` に設定し、要素を非表示にするとサイズが制約されるようにしています。
サイズ拘束されたときに使用する幅と高さは、それぞれ `contain-intrinsic-width` と `contain-intrinsic-height` を使用して同時に設定します。

```css
#contained_element {
  border: 2px solid green;
  width: 151px;
  content-visibility: auto;
  contain-intrinsic-width: 152px;
  contain-intrinsic-height: 52px;
}
.child_element {
  border: 1px solid red;
  background: blue;
  height: 50px;
  width: 150px;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/articles/content-visibility) (web.dev)
- {{CSSxRef("contain-intrinsic-size")}}
- {{CSSxRef("contain-intrinsic-height")}}
- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}
