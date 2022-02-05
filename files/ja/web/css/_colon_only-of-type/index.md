---
title: ':only-of-type'
slug: Web/CSS/:only-of-type
tags:
  - CSS
  - レイアウト
  - 擬似クラス
  - リファレンス
  - セレクター
  - ウェブ
browser-compat: css.selectors.only-of-type
translation_of: Web/CSS/:only-of-type
---
{{CSSRef}}

[CSS](/ja/docs/Web/CSS) の **`:only-of-type`** [擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)は、同じ型の兄弟要素がない要素を表します。

```
/* <p> が親の中にある唯一の <p> 出逢った場合に選択 */
p:only-of-type {
  background-color: lime;
}
```

> **Note:** 最初の定義では、親のある要素のみが選択されていました。 Selectors Level 4 の初期に、これは必要なくなりました。

## 構文

{{csssyntax}}

## 例

### 同じ型の兄弟がない要素をスタイル付け

#### HTML

```html
<main>
  <div>I am `div` #1.</div>
  <p>I am the only `p` among my siblings.</p>
  <div>I am `div` #2.</div>
  <div>I am `div` #3.
    <i>I am the only `i` child.</i>
    <em>I am `em` #1.</em>
    <em>I am `em` #2.</em>
  </div>
</main>
```

#### CSS

```css
main :only-of-type {
  color: red;
}
```

#### 結果

{{EmbedLiveSample('Styling_elements_with_no_siblings_of_the_same_type','100%',180)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref(":only-child")}}
- {{Cssxref(":first-of-type")}}
- {{Cssxref(":last-of-type")}}
- {{Cssxref(":nth-of-type")}}
