---
title: text-align-last
slug: Web/CSS/text-align-last
tags:
  - CSS
  - CSS プロパティ
  - CSS テキスト
  - Experimental
  - Reference
  - recipe:css-property
browser-compat: css.properties.text-align-last
translation_of: Web/CSS/text-align-last
---
{{CSSRef}}

**`text-align-last`** は CSS のプロパティで、ブロックの最後の行、あるいは強制的な改行の直前の行をどのように配置するかを設定します。

{{EmbedInteractiveExample("pages/css/text-align-last.html")}}

## 構文

```css
/* キーワード値 */
text-align-last: auto;
text-align-last: start;
text-align-last: end;
text-align-last: left;
text-align-last: right;
text-align-last: center;
text-align-last: justify;

/* グローバル値 */
text-align-last: inherit;
text-align-last: initial;
text-align-last: revert;
text-align-last: unset;
```

### 値

- `auto`
  - : {{cssxref("text-align")}} の値と同じ方向に配置されます。ただし {{cssxref("text-align")}} が `justify` である場合は、`text-align-last` に `start` を設定した場合と同じ効果になります。
- `start`
  - : 書字方向が左書きであれば `left`、右書きであれば `right` と同じです。
- `end`
  - : 書字方向が左書きであれば `right`、右書きであれば `left` と同じです。
- `left`
  - : インラインコンテンツが行ボックスの左端に配置されます。
- `right`
  - : インラインコンテンツが行ボックスの右端に配置されます。
- `center`
  - : インラインコンテンツが行ボックスの中央に配置されます。
- `justify`
  - : テキストは両端揃えになります。テキストは段落の左端から右端までに配置されます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Justifying_the_last_line">最後の行を中央揃えにする</h3>

```html hidden
<p>Integer elementum massa at nulla placerat varius. Suspendisse in libero risus, in interdum massa. Vestibulum ac leo vitae metus faucibus gravida ac in neque. Nullam est eros, suscipit sed dictum quis, accumsan a ligula.</p>
```

#### CSS

```css
p {
  font-size: 1.4em;
  text-align: justify;
  text-align-last: center;
}
```

#### 結果s

{{EmbedLiveSample('Justifying_the_last_line','560')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("text-align")}}
