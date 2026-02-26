---
title: baseline-source
slug: Web/CSS/Reference/Properties/baseline-source
l10n:
  sourceCommit: 5ebca2edd6095fb3f61d442ed3146fa37fffbf7d
---

**`baseline-source`** は [CSS](/ja/docs/Web/CSS) のプロパティで、複数の[ベースライン](/ja/docs/Web/CSS/Reference/Values/baseline-position)を持つインラインレベルボックス、たとえば複数行の[インラインブロック](/ja/docs/Web/CSS/Guides/Display/Block_and_inline_layout)やインライン[フレックスコンテナー](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts#フレックスコンテナー)などに使用するベースラインを定義します。
これらの値により、ボックスの最初のベースライン、最後のベースラインへの配置、またはボックスの型に基づいてブラウザーが自動的に決定する方式を選べます。

## Syntax

```css
/* キーワード値 */
baseline-source: auto;
baseline-source: first;
baseline-source: last;

/* グローバル値 */
baseline-source: inherit;
baseline-source: initial;
baseline-source: revert;
baseline-source: revert-layer;
baseline-source: unset;
```

### 値

- `auto`
  - : [`last baseline`](/ja/docs/Web/CSS/Reference/Values/baseline-position#last_baseline) はインラインブロック要素に対して、[`first baseline`](/ja/docs/Web/CSS/Reference/Values/baseline-position#first_baseline) はそれ以外の要素に対して、それぞれベースライン位置を指定します。
- `first`
  - : `first baseline` の配置を指定します。
- `last`
  - : `last baseline` の配置を使用します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### インラインフレックスコンテナー内でベースラインの選択

この例は、`baseline-source` プロパティを使用してインラインフレックスコンテナーのベースライン配置を制御する方法を示しています。

#### HTML

HTML には複数の {{htmlelement("span")}} 要素が含まれており、これらは記述コンテンツ用の汎用インラインコンテナーです。
3 つの `<span>` 要素には、入れ子になった `<span>` の子要素が含まれています。

```html
<span>ベースライン ___</span>

<span class="box first">
  <span>First</span>
  <span>A</span>
  <span>B</span>
  <span>C</span>
</span>

<span class="box auto">
  <span>Auto</span>
  <span>A</span>
  <span>B</span>
  <span>C</span>
</span>

<span class="box last">
  <span>A</span>
  <span>B</span>
  <span>C</span>
  <span>Last</span>
</span>
```

#### CSS

```css hidden
body {
  font-family: sans-serif;
}

.box {
  border: 2px solid #888888;
  width: 50px;
}

span {
  padding: 0.4rem;
}
```

すべてのボックスをインラインフレックスコンテナーとして定義します。
`.first` ボックスには最初のベースラインを、`.auto` ボックスにはデフォルトのベースライン（インラインフレックスコンテナーでは `first`）を、`.last` ボックスには最後のベースラインを設定します。

```css
.box {
  display: inline-flex;
  flex-direction: column;
}

.first {
  baseline-source: first;
}

.auto {
  baseline-source: auto;
}

.last {
  baseline-source: last;
}
```

#### 結果

{{EmbedLiveSample('baseline_selection_in_inline_flex_containers', '100%', 260)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("vertical-align")}} プロパティ
- [CSS ボックス配置の概要](/ja/docs/Web/CSS/Guides/Box_alignment/Overview)
