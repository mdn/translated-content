---
title: isolation
slug: Web/CSS/Reference/Properties/isolation
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

**`isolation`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素が新しい{{glossary("stacking context", "重ね合わせコンテキスト")}}を生成する必要があるかどうかを定義します。

{{InteractiveExample("CSS デモ: isolation")}}

```css interactive-example-choice
isolation: auto;
```

```css interactive-example-choice
isolation: isolate;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="background-container">
    <div id="example-element">
      <img src="/shared-assets/images/examples/firefox-logo.svg" />
      <p><code>mix-blend-mode: multiply;</code></p>
    </div>
  </div>
</section>
```

```css interactive-example
.background-container {
  background-color: #f4f460;
  width: 250px;
}

#example-element {
  border: 1px solid black;
  margin: 2em;
}

#example-element * {
  mix-blend-mode: multiply;
  color: #8245a3;
}
```

このプロパティは {{cssxref("mix-blend-mode")}} との組み合わせで使用すると特に有用です。

## 構文

```css
/* キーワード値 */
isolation: auto;
isolation: isolate;

/* グローバル値 */
isolation: inherit;
isolation: initial;
isolation: revert;
isolation: revert-layer;
isolation: unset;
```

`isolation` プロパティは、以下の一覧にあるキーワード値のうちの一つで指定します。

### 値

- `auto`
  - : 何れかのプロパティが必要な要素に適用された場合にのみ、新しい重ね合わせコンテキストが作成されます。
- `isolate`
  - : 新しい重ね合わせコンテキストが必ず作成されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 要素で強制的に新しい重ね合わせコンテキストを生成

#### HTML

```html
<div class="big-square">
  <div class="isolation-auto">
    <div class="small-square">auto</div>
  </div>
  <div class="isolation-isolate">
    <div class="small-square">isolate</div>
  </div>
</div>
```

#### CSS

```css
.isolation-auto {
  isolation: auto;
}

.isolation-isolate {
  isolation: isolate;
}

.big-square {
  background-color: lime;
  width: 200px;
  height: 210px;
}

.small-square {
  background-color: lime;
  width: 100px;
  height: 100px;
  border: 1px solid black;
  padding: 2px;
  mix-blend-mode: difference;
}
```

#### 結果

{{ EmbedLiveSample('Forcing_a_new_stacking_context_for_an_element', 230, 230) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("&lt;blend-mode&gt;")}}
- {{cssxref("mix-blend-mode")}}, {{cssxref("background-blend-mode")}}
