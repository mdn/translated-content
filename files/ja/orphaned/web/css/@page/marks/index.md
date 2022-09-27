---
title: marks
slug: orphaned/Web/CSS/@page/marks
original_slug: Web/CSS/@page/marks
---

{{CSSRef}}{{SeeCompatTable}}

[CSS](/ja/docs/Web/CSS) の **`marks`** [@-規則](/ja/docs/Web/CSS/At-rule)記述子は、 {{cssxref("@page")}} @-規則で使用し、文書の表現に対して裁ち落とし記号や十字記号を追加します。*裁ち落とし記号*はページを切断するべき場所を示します。*十字記号*はシートの配置のために使用します。

裁ち落とし記号や十字記号はページボックスの外側に印刷されます。裁ち落とし記号や十字記号を表示する余地を確保するため、最終的なページはページボックスよりいくらか大きくする必要があります。

{{cssinfo}}

## 構文

```css
/* キーワード値 */
marks: none;
marks: crop;
marks: cross;
marks: crop cross;
```

### 値

- `crop`
  - : 裁ち落とし記号を表示します。
- `cross`
  - : 十字記号を表示します。
- `none`
  - : 記号を表示しません。

### 形式文法

{{csssyntax}}

## 例

```css
@page {
  marks: crop cross;
}
```

## 仕様書

| 仕様書                                                               | 状態                                     | 備考       |
| -------------------------------------------------------------------- | ---------------------------------------- | ---------- |
| {{SpecName('CSS3 Paged Media', '#marks', 'marks')}} | {{Spec2('CSS3 Paged Media')}} | 初回定義。 |

この CSS プロパティは当初は CSS Level 2 で提案されましたが、 CSS Level 2 (Revision 1) で落とされました。

## ブラウザーの対応

{{Compat("css.at-rules.page.marks")}}

## 関連情報

- {{Cssxref("@page/bleed", "bleed")}}
- {{Cssxref("@page/size", "size")}}
