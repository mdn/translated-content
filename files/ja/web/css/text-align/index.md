---
title: text-align
slug: Web/CSS/text-align
---

{{CSSRef}}

**`text-align`** [CSS](/ja/docs/Web/CSS) プロパティは、ブロック要素または表のセルボックス内におけるインラインレベルコンテンツの水平方向の配置を設定します。これは {{cssxref("vertical-align")}} と同じように機能しますが、水平方向に機能することを意味します。

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

/* 表の列における文字を基準とした配置 */
text-align: ".";
text-align: "." center;

/* ブロック配置の値 (標準外の構文) */
text-align: -moz-center;
text-align: -webkit-center;

/* グローバル値 */
text-align: inherit;
text-align: initial;
text-align: revert;
text-align: revert-layer;
text-align: unset;
```

`text-align` プロパティは、以下のいずれかの方法で指定します。

- キーワード値となる `start`, `end`, `left`, `right`, `center`, `justify`, `justify-all`, `match-parent` のいずれかを使用する。
- `<string>` 値のみを使用した場合、他の値はデフォルトで `right` になります。
- キーワード値と [`<string>`](#string) 値の両方を使用する。

### 値

- `start`
  - : 書字方向が左から右の場合は `left`、右から左の場合は `right` と同じです。
- `end`
  - : 書字方向が左から右の場合は `right`、右から左の場合は `left` と同じです。
- `left`
  - : インラインコンテンツはラインボックスの左辺に寄せられます。
- `right`
  - : インラインコンテンツはラインボックスの右辺に寄せられます。
- `center`
  - : インラインコンテンツはラインボックス内で中央に寄せられます。
- `justify`
  - : インラインコンテンツは両端揃えになります。テキストは最終行を除いて、その左右の端がラインボックスの左右の端に揃うように間隔が空けられます。
- `justify-all` {{experimental_inline}}
  - : `justify` と同じですが、最終行も強制的に両端揃えになります。
- `match-parent`
  - : `inherit` と似ていますが、`start` と `end` の値は親要素の {{cssxref("direction")}} に従って計算されて、適切な `left` もしくは `right` の値で置き換えられます。
- {{cssxref("&lt;string&gt;")}} {{experimental_inline}}
  - : 表のセルに適用する場合、セルのコンテンツが配置される位置揃え文字が指定されます。

## アクセシビリティへの懸念事項

両端揃えによって生じる単語間の一貫性のない間隔は、ディスレクシアなどの認知的な懸念を持つ人々にとって問題となる可能性があります。

- [MDN WCAG を理解する - ガイドライン 1.4 の解説](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の分離を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [Understanding Success Criterion 1.4.8 | Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 先頭へ配置

#### HTML

```html
<p class="example">
  Integer elementum massa at nulla placerat varius. Suspendisse in libero risus,
  in interdum massa. Vestibulum ac leo vitae metus faucibus gravida ac in neque.
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

### 中央揃え

#### HTML

```html
<p class="example">
  Integer elementum massa at nulla placerat varius. Suspendisse in libero risus,
  in interdum massa. Vestibulum ac leo vitae metus faucibus gravida ac in neque.
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

### "justify" を使用した例

#### HTML

```html
<p class="example">
  Integer elementum massa at nulla placerat varius. Suspendisse in libero risus,
  in interdum massa. Vestibulum ac leo vitae metus faucibus gravida ac in neque.
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

{{EmbedLiveSample('Example using "justify"',"100%","100%")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("margin","margin: auto")}}, {{Cssxref("margin-left","margin-left: auto")}}, {{Cssxref("vertical-align")}}
