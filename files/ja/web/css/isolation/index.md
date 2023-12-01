---
title: isolation
slug: Web/CSS/isolation
---

{{CSSRef}}

[CSS](/ja/docs/Web/CSS) の **`isolation`** プロパティは、要素が新しい{{glossary("stacking context", "重ね合わせコンテキスト")}}を生成する必要があるかどうかを定義します。

{{EmbedInteractiveExample("pages/css/isolation.html")}}

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
isolation: unset;
```

`isolation` プロパティは、以下の一覧にあるキーワード値のうちの一つで指定します。

### 値

- `auto`
  - : 何れかのプロパティが必要な要素に適用された場合にのみ、新しい重ね合わせコンテキストが作成されます。
- `isolate`
  - : 新しい重ね合わせコンテキストが必ず作成されます。

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## 例

<h3 id="Forcing_a_new_stacking_context_for_an_element">要素で強制的に新しい重ね合わせコンテキストを生成</h3>

#### HTML

```html
<div id="b" class="a">
  <div id="d">
    <div class="a c">auto</div>
  </div>
  <div id="e">
    <div class="a c">isolate</div>
  </div>
</div>
```

#### CSS

```css
.a {
  background-color: rgb(0, 255, 0);
}
#b {
  width: 200px;
  height: 210px;
}
.c {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  padding: 2px;
  mix-blend-mode: difference;
}
#d {
  isolation: auto;
}
#e {
  isolation: isolate;
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
