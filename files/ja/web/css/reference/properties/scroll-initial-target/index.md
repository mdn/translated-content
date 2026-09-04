---
title: CSS `scroll-initial-target` プロパティ
short-title: scroll-initial-target
slug: Web/CSS/Reference/Properties/scroll-initial-target
l10n:
  sourceCommit: a8b7faffbd3fdeae5c0be97793d963d8a31cd1cf
---

{{SeeCompatTable}}

**`scroll-initial-target`** は [CSS](/ja/docs/Web/CSS) のプロパティで、その親要素である{{glossary("scroll container", "スクロールコンテナー")}}が最初にレンダリングされた際に、スナップターゲットとなり得る要素を定義することができます。

## 構文

```css
/* キーワード値 */
scroll-initial-target: none;
scroll-initial-target: nearest;

/* グローバル値 */
scroll-initial-target: inherit;
scroll-initial-target: initial;
scroll-initial-target: revert;
scroll-initial-target: revert-layer;
scroll-initial-target: unset;
```

### 値

- `none`
  - : この要素は、初期スクロール対象ではありません。
- `nearest`
  - : この要素は、最も近いスクロールコンテナーの親要素にとって、初期のスクロール対象となる可能性があります。

## 解説

`scroll-initial-target` プロパティを使用すると、親の{{glossary("scroll snap", "スクロールスナップ")}}コンテナーが最初にレンダリングされた際に、スナップされるべき要素を定義できます。値を `nearest` に設定すると、その要素は、最も近い祖先の{{glossary("scroll container", "スクロールコンテナー")}}がページ上に最初に表示された際にスナップされるべき潜在的なターゲットとして定義されます。

スクロールコンテナー内の複数の要素または擬似要素が `nearest` に設定されている場合、ツリー順で最初の要素が初期のスクロールスナップの対象となります。

初期値は `none` です。これは、スクロールスナップ可能な要素がデフォルトで初期スクロールターゲットではないことを意味します。また、要素に `none` を設定することで、その要素を明示的に初期スクロールターゲットから除外することもできます。

スクロールコンテナーの初期スクロール位置が、{{cssxref("place-content")}} の content-distribution プロパティと、子要素の `scroll-initial-target` の両方で設定される可能性がある場合、`scroll-initial-target: nearest` を指定している最初の子要素の設定が優先されます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### `scroll-initial-target` の使用

下記の例では、`scroll-initial-target` の 2 つの値と、`scroll-initial-target` が設定された最初の要素がどのようにスナップされるかを示しています。

#### HTML

期待される効果を説明する段落に続き、5 つのコンテナーを配置します。

```html
<p><code>none</code> を #4 のみに設定</p>
<div class="none">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div class="set">4</div>
  <div>5</div>
</div>

<p><code>nearest</code> を #4 のみに設定</p>
<div class="nearest">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div class="set">4</div>
  <div>5</div>
</div>

<p><code>nearest</code> を偶数番目の要素に設定</p>
<div class="nearest">
  <div>1</div>
  <div class="set">2</div>
  <div>3</div>
  <div class="set">4</div>
  <div>5</div>
</div>

<p><code>nearest</code> を奇数番目の要素に設定</p>
<div class="nearest">
  <div class="set">1</div>
  <div>2</div>
  <div class="set">3</div>
  <div>4</div>
  <div class="set">5</div>
</div>

<p><code>nearest</code> を奇数番目の要素に、<code>none</code> を #1 に設定</p>
<div class="nearest">
  <div class="set unset">1</div>
  <div>2</div>
  <div class="set">3</div>
  <div>4</div>
  <div class="set">5</div>
</div>
```

#### CSS

nearest の要素と none 要素をスクロールスナップコンテナーとして設定し、スナップされる要素を中央に配置します。

```css
/* 親に mandatory の scroll-snap を設定 */
div.nearest,
div.none {
  scroll-snap-type: x mandatory;
}

/* 子の scroll-snap alignment の配置 */
div > div {
  scroll-snap-align: center;
  scroll-initial-target: always;
}
```

次に、`.set` クラスを持つすべての要素に対して、`scroll-initial-target` を `none` または `nearest` に設定します。

```css
.none .set,
.nearest .set.unset {
  scroll-initial-target: none;
}
.nearest .set {
  scroll-initial-target: nearest;
}
```

```css hidden
/* セットアップ */
body {
  height: 100%;
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  font-family: sans-serif;
  text-align: center;
}

div.nearest,
div.none {
  display: flex;
  overflow: auto;
  font-size: 3rem;
}

div div {
  width: 90%;
  min-width: 15rem;
  flex: none;
  outline: 1px solid #333333;
}

/* 色付け */
div > div:nth-child(even) {
  background-color: #87ea87;
}

div > div:nth-child(odd) {
  background-color: #87ccea;
}

p {
  margin: 1em 0 0;
}

@supports not (scroll-initial-target: nearest) {
  :root::before {
    content: "このブラウザーは、scroll-initial-target プロパティに対応していません。";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

#### 結果

{{EmbedLiveSample("Using scroll-initial-target", "100%", "500")}}

このプロパティの効果は、スクロールコンテナーがページに描画されたときに確認できます。

それぞれの行は、ツリー順で `nearest` が設定されている最初の要素（存在する場合）にスナップします。最後の例では、最初の要素の `nearest` 値を `none` に上書きしているため、`nearest` が適用される最初の要素は #3 となります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS スクロールスナップ](/ja/docs/Web/CSS/Guides/Scroll_snap)
