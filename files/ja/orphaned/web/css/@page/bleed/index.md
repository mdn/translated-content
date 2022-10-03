---
title: bleed
slug: orphaned/Web/CSS/@page/bleed
original_slug: Web/CSS/@page/bleed
---

{{CSSRef}}{{SeeCompatTable}}

[CSS](/ja/docs/Web/CSS) の **`bleed`** [@-規則](/ja/docs/Web/CSS/At-rule)記述子は、 {{cssxref("@page")}} @-規則で使用し、ページボックスの外にあるページの裁ち落とし領域の大きさを指定します。このプロパティは、 {{cssxref("@page/marks", "marks")}} プロパティを使用して裁ち落とし記号を有効にしている場合のみ効果があります。

{{cssinfo}}

## 構文

```css
/* キーワード値 */
bleed: auto;

/* <length> 値 */
bleed: 8pt;
bleed: 1cm;
```

### 値

- `auto`
  - : {{cssxref("@page/marks", "marks")}} が `crop` の場合、 `6pt` に計算します。それ以外の場合はゼロに計算します。
- `{{cssxref("&lt;length&gt;")}}`
  - : ページボックスの外に裁ち落とし領域を、各方向に、どれだけ広げるかを指定します。値は負の数にすることができますが、実装に依存する制限があるかもしれません。

### 形式文法

{{csssyntax}}

## 例

```css
@page {
  bleed: 1cm;
}
```

## 仕様書

| 仕様書                                                               | 状態                                     | 備考       |
| -------------------------------------------------------------------- | ---------------------------------------- | ---------- |
| {{SpecName("CSS3 Paged Media", "#bleed", "bleed")}} | {{Spec2("CSS3 Paged Media")}} | 初回定義。 |

## ブラウザーの対応

{{Compat("css.at-rules.page.bleed")}}

## 関連情報

- {{Cssxref("@page/marks", "marks")}}
- {{Cssxref("@page/size", "size")}}
