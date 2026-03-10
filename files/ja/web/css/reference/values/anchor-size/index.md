---
title: anchor-size()
slug: Web/CSS/Reference/Values/anchor-size
l10n:
  sourceCommit: dc2ae626916c7275aa5f01f2d01e00b73d96b458
---

**`anchor-size()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、アンカー位置指定要素の[サイズ](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using#アンカーのサイズに応じて要素をサイズ変更)、[位置](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using#アンカーサイズに基づく要素の位置の設定)、[マージン](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using#アンカーサイズに基づく要素のマージンの設定)を、アンカー要素のサイズに対して相対的に設定することができます。これは、ターゲットとなるアンカー要素の指定された辺の `<length>` を返します。`anchor-size()` は、アンカー位置指定要素の[サイズ指定、インセット、マージンプロパティ](#anchor-size_関数値を受け入れるプロパティ)の値内で使用される場合にのみ有効です。

アンカー機能の詳細と使用方法については、[CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)モジュールおよび[CSS アンカー位置指定の使用方法](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using)ガイドを参照してください。

## 構文

```css
/* 引数なし */
anchor-size()

/* アンカーサイズ引数 */
anchor-size(width);
anchor-size(block);
anchor-size(self-inline);

/* anchor-name および anchor-side */
width: anchor-size(--my-anchor width);
block-size: anchor-size(--my-anchor block);

/* 指定されたアンカーの側に対する相対サイズ設定（代替値つき） */
width: anchor-size(--my-anchor width, 50%);
block-size: anchor-size(--my-anchor block, 200px);

/* アンカー側に対する位置指定 */
left: anchor-size(width);
inset-inline-end: anchor-size(--my-anchor height, 100px);

/* アンカー端から見たマージンの設定 */
margin-left: calc(anchor-size(width) / 4);
margin-block-start: anchor-size(--my-anchor self-block, 20px);
```

### 引数

`anchor-size()` 関数の構文は次の通りです。

```plain
anchor-size(<anchor-name> <anchor-size>, <length-percentage>)
```

引数は次の通りです。

- `<anchor-name>` {{optional_inline}}
  - : 要素のサイズ、位置、またはマージンを相対的に設定したいアンカー要素の {{cssxref("anchor-name")}} プロパティ値。これは `<dashed-ident>` 値です。省略された場合、要素のデフォルトアンカーが使用されます。

    > [!NOTE]
    > `<anchor-name>` を `anchor-size()` 関数内で指定しても、要素をアンカーに関連付けたり固定したりするわけではありません。これは単に、要素のプロパティ値をどのアンカーを基準に設定すべきかを定義するだけです。

- `<anchor-size>` {{optional_inline}}
  - : 指定された要素のプロパティ値が相対的に設定されるアンカー要素の側面を指定します。有効な値は以下の通りです。
    - `width`
      - : アンカー要素の幅です。

    - `height`
      - : アンカー要素の高さです。

    - `block`
      - : アンカー要素の[包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block)のブロック方向における長さ。

    - `inline`
      - : アンカー要素のインライン方向における包含ブロックの長さ。

    - `self-block`
      - : アンカー要素のブロック方向の長さ。

    - `self-inline`
      - : アンカー要素のインライン方向の長さ。

    > [!NOTE]
    > この引数が省略された場合、軸の寸法はデフォルトで、関数が含まれるプロパティの軸に対応する `<anchor-size>` キーワードに設定されます。例えば、`width: anchor-size();` は `width: anchor-size(width);` と同等です。

- {{cssxref("length-percentage")}} {{optional_inline}}
  - : 要素が絶対指定または固定位置指定でない場合、またはアンカー要素が存在しない場合に代替値として使用するサイズを指定します。代替値が使用されるべき状況でこの引数が省略された場合、宣言は無効となります。

> [!NOTE]
> 位置指定要素のプロパティ値を設定する基準となるアンカー寸法は、設定するサイズ値と同じ軸上に存在する必要はありません。例えば、`width: anchor-size(height)` は有効です。

### 返値

{{cssxref("length")}} 値を返します。

## 解説

`anchor-size()` 関数は、位置指定された要素のサイズ、位置、マージン値をアンカー要素の寸法で表現することを可能にします。この関数は、位置指定された要素のプロパティ値が相対的に設定される特定のアンカー要素の寸法を表す {{cssxref("length")}} 値を返します。アンカー位置指定された要素に設定される[サイズ、インセット、マージンプロパティ](#anchor-size_関数値を受け入れるプロパティ)の有効な値となります。

返される長さは、アンカー要素またはその包含ブロックの垂直方向または水平方向のサイズです。使用される寸法は`<anchor-size>`引数によって定義されます。この引数が省略された場合、使用される寸法は、サイズ、位置、またはマージンプロパティが設定されている軸に一致します。

- `width: anchor-size()` は `width: anchor-size(width)` と同等です。
- `top: anchor-size()` は `top: anchor-size(height)` と同等です。
- `margin-inline-end: anchor-size()` は `margin-inline-end: anchor-size(self-inline)` と同等です。また、`margin-inline-end: anchor-size()` は横書き時には `margin-inline-end: anchor-size(width)` と同等であり、縦書き時には `margin-inline-end: anchor-size(height)` と同等です。

寸法の長さの基準となるアンカー要素は、`<anchor-name>` 引数で指定された `anchor-name` を持つ要素です。複数の要素が同じアンカー名を持つ場合、DOM 順序でそのアンカー名を持つ最後の要素が使用されます。

関数呼び出しに `<anchor-name>` 引数が含まれていない場合、要素の**デフォルトアンカー**が使用されます。これは、その{{cssxref(「position-anchor」)}}プロパティで参照されるか、[`anchor`](/ja/docs/Web/HTML/Reference/Global_attributes/anchor) HTML属性によって要素に関連付けられたものです。

`<anchor-name>` 引数が含まれており、そのアンカー名に一致する要素が存在しない場合、代替値が使用されます。代替値が含まれていない場合、宣言は無視されます。例えば、配置された要素に `width: anchor-size(--foo width, 50px); height: anchor-size(--foo width);` が指定されているが、DOM 内に `--foo` という名前のアンカーが存在しない場合、`width` は `50px` となり、`height` 宣言は効果がありません。

要素に `anchor-size()` 値が設定されたサイズ、位置、マージンプロパティがある場合でも、その要素がアンカー配置要素でない場合（{{cssxref("position")}} プロパティが `absolute` または `fixed` に設定されていない、あるいは `position-anchor` プロパティを介して関連付けられたアンカーを持たない場合）、利用可能な代替値が使用されます。代替値が存在しない場合、宣言は無視されます。

例えば、位置指定された要素に `width: anchor-size(width, 50px);` が指定されているが、アンカーが関連付けられていない場合、代替値が使用されるため、`width` の計算値は `50px` となります。

アンカー機能の詳細と使用方法については、[CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)モジュールおよび [CSS アンカー位置指定の使用方法](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using)ガイドを参照してください。

### `anchor-size()` 関数値を受け入れるプロパティ

`anchor-size()` 関数を値として受け入れるプロパティには、以下のものがあります。

- サイズ指定プロパティ:
  - {{cssxref("width")}}
  - {{cssxref("height")}}
  - {{cssxref("min-width")}}
  - {{cssxref("min-height")}}
  - {{cssxref("max-width")}}
  - {{cssxref("max-height")}}
  - {{cssxref("block-size")}}
  - {{cssxref("inline-size")}}
  - {{cssxref("min-block-size")}}
  - {{cssxref("min-inline-size")}}
  - {{cssxref("max-block-size")}}
  - {{cssxref("max-inline-size")}}
- インセットプロパティ:
  - {{cssxref("bottom")}}
  - {{cssxref("left")}}
  - {{cssxref("right")}}
  - {{cssxref("top")}}
  - {{cssxref("inset")}} 一括指定
  - {{cssxref("inset-block")}} 一括指定
  - {{cssxref("inset-block-end")}}
  - {{cssxref("inset-block-start")}}
  - {{cssxref("inset-inline")}} 一括指定
  - {{cssxref("inset-inline-end")}}
  - {{cssxref("inset-inline-start")}}
- マージンプロパティ:
  - {{cssxref("margin")}} 一括指定
  - {{cssxref("margin-bottom")}}
  - {{cssxref("margin-left")}}
  - {{cssxref("margin-right")}}
  - {{cssxref("margin-top")}}
  - {{cssxref("margin-block")}} 一括指定
  - {{cssxref("margin-block-end")}}
  - {{cssxref("margin-block-start")}}
  - {{cssxref("margin-inline")}} 一括指定
  - {{cssxref("margin-inline-end")}}
  - {{cssxref("margin-inline-start")}}

### `calc()` 内での `anchor-size()` の使用

`anchor-size()` 関数の中で最もよく使われる用途は、デフォルトのアンカーのサイズを参照することです。他にも、`anchor-size()` 関数を {{cssxref("calc")}} 関数内で使用することで、位置指定要素に適用されるサイズを変更できます。

例えば、次のルールは位置指定要素の幅を、デフォルトのアンカー要素の幅と同じサイズにします。

```css
.positionedElem {
  width: anchor-size(width);
}
```

次のルールは、位置指定要素のインラインサイズをアンカー要素のインラインサイズの 4 倍に設定します。乗算は {{cssxref("calc()")}} 関数内で実行されます。

```css
.positionedElem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

## 形式文法

{{CSSSyntax}}

## 例

### 基本的な `anchor-size()` の使い方

この例では、2 つの要素をアンカーを基準に位置指定し、`anchor-size()` 関数を使用してサイズを設定しています。

#### HTML

3 つの {{htmlelement("div")}} 要素、1 つの `anchor` 要素、およびアンカー要素に対して相対配置する 2 つの `infobox` 要素を指定します。また、{{htmlelement("body")}} の高さをスクロールが必要になる程度にするため、埋め込みテキストをしていますが、これは簡潔さを考慮して非表示にしています。

```html hidden
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>
```

```html
<div class="anchor">⚓︎</div>

<div class="infobox" id="infobox1">
  <p>This is the first infobox.</p>
</div>

<div class="infobox" id="infobox2">
  <p>This is the second infobox.</p>
</div>
```

```html hidden
<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>
```

#### CSS

`anchor` の `<div>` をアンカー要素として宣言するには、{{cssxref("anchor-name")}} を付与します。{{cssxref("position")}} プロパティを `fixed` に設定した位置指定要素は、{{cssxref("position-anchor")}} プロパティを介してアンカー要素に関連付けられます。また、アンカーには絶対的な {{cssxref("height")}} と {{cssxref("width")}} を設定し、ブラウザー開発者ツールなどで位置指定要素のサイズを確認する際の基準点とします。

```css hidden
.anchor {
  font-size: 2rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  text-align: center;
  align-content: center;
  outline: 1px solid black;
}

body {
  width: 80%;
  margin: 0 auto;
}

.infobox {
  align-content: center;
  color: darkblue;
  background-color: azure;
  outline: 1px solid #dddddd;
  font-size: 1rem;
  text-align: center;
}
```

```css
.anchor {
  anchor-name: --my-anchor;
  width: 100px;
  height: 50px;
}

.infobox {
  position-anchor: --my-anchor;
  position: fixed;
}
```

位置指定要素に対して、いくつかの明確なプロパティ値を設定します。

- 位置指定要素はアンカーに固定され、異なる {{cssxref("position-area")}} 値によってアンカー要素の周囲の異なる場所に配置されます。
- 最初の情報ボックスの {{cssxref("height")}} はアンカー要素と同じ高さに設定されていますので、`anchor-size(height)` はアンカー要素の高さを返します。要素の {{cssxref("width")}} は、`anchor-size()` 関数を {{cssxref("calc()")}} 関数内で使用し、アンカー要素の幅の 2 倍に設定されます。`anchor-size(width)` でアンカー要素の幅を取得し、それを 2 倍します。
- 2 つ目の情報ボックスの {{cssxref("height")}} は、アンカー要素の高さの80%に設定されており、同様の手法が用いられています。
- マージン値は、アンカー要素から指定された距離を確保するために記載されています。

```css
#infobox1 {
  position-area: right;
  height: anchor-size(height);
  width: calc(anchor-size(width) * 2);
  margin-left: 5px;
}

#infobox2 {
  position-area: top span-right;
  height: calc(anchor-size(height) / 1.25);
  margin-bottom: 5px;
}
```

#### 結果

{{EmbedLiveSample("Basic `anchor-size()` usage", "100%", "240")}}

ブラウザーのツールを使用して、位置指定された要素を検査してください。最初の情報ボックスは高さ `50px`、幅 `200px`で、2 つ目の情報ボックスは高さ `40px`、幅はデフォルトで {{cssxref("max-content")}} となります。

### 位置指定とマージンの例

[`anchor-size()` の位置とマージンの例](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using#anchor-size_の位置とマージンの例)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- {{cssxref("anchor()")}} 関数
- [CSS アンカー位置指定の使用](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using)
- [CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)モジュール
