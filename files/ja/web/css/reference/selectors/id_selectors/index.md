---
title: ID セレクター
slug: Web/CSS/Reference/Selectors/ID_selectors
original_slug: Web/CSS/ID_selectors
---

CSS の **ID セレクター** (ID selector) は、 [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) 属性の値に基づいて要素と一致します。選択される要素の `id` 属性は、セレクターで指定した値と完全一致していなければなりません。

```css
/* id="demo" のついた要素 */
#demo {
  border: red 2px solid;
}
```

## 構文

```css
#id_value { スタイルプロパティ }
```

なお、これは次の{{Cssxref("Attribute_selectors", "属性セレクター")}}と等価です (ただし、詳細度は異なります)。

```css
[id=id_value] { スタイルプロパティ }
```

## 例

### CSS

```css
#identified {
  background-color: skyblue;
}
```

### HTML

```html
<div id="identified">これは特別な ID がついています！</div>
<div>これは単なる普通の div です。</div>
```

### 結果

{{EmbedLiveSample("Examples", '100%', 50)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)
- [CSS の学習: セレクター](/ja/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
