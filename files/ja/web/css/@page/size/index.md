---
title: size
slug: Web/CSS/@page/size
---

{{CSSRef}}{{SeeCompatTable}}

[CSS](/ja/docs/Web/CSS) の **`size`** [アット規則](/ja/docs/Web/CSS/At-rule)記述子は、 {{cssxref("@page")}} アット規則で使用し、ページを表現するために使用するボックスの寸法と向きを定義します。多くの場合、この寸法は印刷ページの適用可能な対象の寸法に対応します。

寸法は「拡縮可能な」キーワード (この場合、ページの有効な大きさ全体を使用します) 又は絶対的な長さのどちらかで定義します。

## 構文

```css
/* 拡縮可能な寸法のキーワード値 */
size: auto;
size: portrait;
size: landscape;

/* <length> 値 */
/* 1 値: 高さ = 幅 */
size: 6in;

/* 2 値: 幅の後に高さ*/
size: 4in 6in;

/* 絶対寸法のキーワード値 */
size: A4;
size: B5;
size: JIS-B4;
size: letter;

/* 寸法と方向の混合 */
size: A4 portrait;
```

### 値

- `auto`
  - : ユーザーエージェントがページの寸法を決定します。多くの場合、対象となる用紙の寸法と向きが使用されます。
- `landscape`
  - : ページのコンテンツは横向きモード (ボックスの長辺が水平) で表示されます。
- `portrait`
  - : ページのコンテンツは縦向きモード (ボックスの長辺が垂直) で表示されます。これが既定の向きです。
- `<length>`
  - : 何らかの長さの値 ({{cssxref("&lt;length&gt;")}} を参照)。最初の値はページボックスの幅に対応し、二番目の値は高さに対応します。一つしか値が提供されない場合は、幅と高さの両方に使用されます。
- `<page-size>`

  - : &#x20;

    - A5
      - : これは標準の ISO の寸法 148mm x 210mm に一致します。
    - A4
      - : これは標準の ISO の寸法 210mm x 297mm に一致します。 (個人の印刷では最もよく使われる寸法です。)
    - A3
      - : これは標準の ISO の寸法 297mm x 420mm に一致します。
    - B5
      - : これは標準の ISO の寸法 176mm x 250mm に一致します。
    - B4
      - : これは標準の ISO の寸法 250mm x 353mm に一致します。
    - JIS-B5
      - : これは JIS 標準の寸法 182mm x 257mm に対応します。
    - JIS-B4
      - : これは JIS 標準の寸法 257mm x 364mm に対応します。
    - letter
      - : このキーワードは北米のレター用紙の寸法、すなわち 8.5in x 11in と同等です。
    - legal
      - : このキーワードは北米のリーガル用紙の寸法、すなわち 8.5in x 14in と同等です。
    - ledger
      - : このキーワードは北米の ledger 用紙の寸法、すなわち 11in x 17in と同等です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 寸法と向きの指定

```css
@page {
  size: 4in 6in landscape;
}
```

### @media 規則内部の入れ子

```css
@media print {
  @page {
    size: 50mm 150mm;
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@page/bleed", "bleed")}}
- {{cssxref("@page/marks", "marks")}}
