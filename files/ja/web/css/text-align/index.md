---
title: text-align
slug: Web/CSS/text-align
tags:
  - CSS
  - CSS プロパティ
  - CSS テキスト
  - Reference
  - recipe:css-property
browser-compat: css.properties.text-align
translation_of: Web/CSS/text-align
---
{{CSSRef}}

**`text-align`** は [CSS](/ja/docs/Web/CSS) のプロパティで、ブロック要素または表セルボックスの水平方向の配置を設定します。つまり、 {{cssxref("vertical-align")}} のように、ただし水平方向に動作します。

{{EmbedInteractiveExample("pages/css/text-align.html")}}

## 構文

```css
/* キーワード値 */
text-align: start;
text-align: end;
text-align: left;
text-align: right;
text-align: center;
text-align: justify;
text-align: justify-all;
text-align: match-parent;

/* 表の列における文字ベースの配置 */
text-align: ".";
text-align: "." center;

/* ブロック配置の値 (標準外の構文) */
text-align: -moz-center;
text-align: -webkit-center;

/* グローバル値 */
text-align: inherit;
text-align: initial;
text-align: revert;
text-align: unset;
```

`text-align` プロパティは、以下の方法のうちの一つで指定されます。

 - キーワード値 `start`, `end`, `left`, `right`, `center`, `justify`, `justify-all`, `match-parent` のいずれかを使用。
 - `<string>` 値のみを使用、この場合は他の値の既定値が `right` になります。
 - キーワード値または [`<string>`](#string) 値の使用。

### 値

- `start`
  - : 書字方向が左書きであれば `left`、右書きであれば `right` と同じです。
- `end`
  - : 書字方向が左書きであれば `right`、右書きであれば `left` と同じです。
- `left`
  - : インラインコンテンツは行ボックスの左辺に寄せられます。
- `right`
  - : インラインコンテンツは行ボックスの右辺に寄せられます。
- `center`
  - : インラインコンテンツは行ボックス内で中央寄せされます。
- `justify`
  - : インラインコンテンツは両端揃えされます。テキストは最終行を除いて、その左右の端が行ボックスの左右の端に揃うように間隔が空けられます。
- `justify-all` {{experimental_inline}}
  - : `justify` と同じですが、最終行も強制的に両端揃えされます。
- `match-parent`
  - : `inherit` に似ていますが、 `start` と `end` 値が親要素の {{cssxref("direction")}} に従って計算され、適切な `left` か `right` 値に置き換えられます。
- {{cssxref("&lt;string&gt;")}} {{experimental_inline}}
  - : 表のセルに適用された場合、セルのコンテンツが揃えられる位置揃え文字を指定します。

## アクセシビリティの考慮

両端揃えによって単語間の空白が不規則になると、失読症のような認知問題を抱えた人にとって問題になることがあります。

- [MDN "WCAG を理解する ― ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.8 | Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## Examples

<h3 id="Start_alignment">先頭へ配置</h3>

#### HTML

```html
<p class="example">
  Integer elementum massa at nulla placerat varius.
  Suspendisse in libero risus, in interdum massa.
  Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css
.example {
  text-align: start;
  border: solid;
}
```

#### 結果

{{EmbedLiveSample("Start_alignment","100%","100%")}}

<h3 id="Centered_text">中央揃え</h3>

#### HTML

```html
<p class="example">
  Integer elementum massa at nulla placerat varius.
  Suspendisse in libero risus, in interdum massa.
  Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css
.example {
  text-align: center;
  border: solid;
}
```

#### 結果

{{EmbedLiveSample("Centered_text","100%","100%")}}

<h3 id="Justify">両端揃え</h3>

#### HTML

```html
<p class="example">
  Integer elementum massa at nulla placerat varius.
  Suspendisse in libero risus, in interdum massa.
  Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css
.example {
  text-align: justify;
  border: solid;
}
```

#### 結果

{{EmbedLiveSample("Justify","100%","100%")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("margin","margin: auto")}}, {{Cssxref("margin-left","margin-left: auto")}}, {{Cssxref("vertical-align")}}
